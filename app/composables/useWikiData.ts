import type { WikiDataResponse } from '~/types/poe-item'

const cache = new Map<string, WikiDataResponse>()

interface CargoRow {
  name: string
  'base item': string | null
  'required level': string | null
  'implicit stat text': string | null
  'explicit stat text': string | null
  'flavour text': string | null
  'class id': string | null
  'rarity id': string | null
}

interface CargoResponse {
  cargoquery: Array<{ title: CargoRow }>
}

interface ParseResponse {
  parse?: { text?: { '*': string } }
}

function stripHoverboxes(s: string): string {
  return s.replace(/<span class="hoverbox&#95;_display[^"]*"[\s\S]*?<\/span>\s*<\/span>/gi, '')
}

function stripHtml(s: string | undefined | null): string {
  if (!s) return ''
  return stripHoverboxes(s)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&#95;/g, '_')
    .replace(/&#91;/g, '[')
    .replace(/&#93;/g, ']')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\[\d+\]/g, '')
    .trim()
}

function stripCargoMarkup(s: string): string {
  return s
    .replace(/&lt;br&gt;/g, '\n')
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\[\[([^|\]]*\|)?([^\]]+)\]\]/g, '$2')
}

function inferRarity(classId: string | null, rarityId: string | null): string {
  const cls = classId || ''
  if (cls.includes('Gem')) return 'gem'
  if (cls.includes('Divination')) return 'divination'
  if (cls === 'Currency') return 'currency'
  const r = rarityId?.toLowerCase()
  if (r === 'unique' || r === 'rare' || r === 'magic' || r === 'normal') return r
  return 'default'
}

function parseModList(raw: string | null): string[] {
  if (!raw) return []
  return stripCargoMarkup(raw)
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean)
}

function findItemBoxStart(html: string): { idx: number, tag: string } | undefined {
  const infoboxIdx = html.indexOf('infobox-page-container')
  const searchFrom = infoboxIdx >= 0 ? infoboxIdx : 0
  const match = /<(span|div)\s+class="item-box\b/i.exec(html.slice(searchFrom))
    || /<(span|div)\s+class="item-box\b/i.exec(html)
  if (!match) return undefined
  return {
    idx: (match.index || 0) + ((match.input ?? '') === html ? 0 : searchFrom),
    tag: (match[1] ?? '').toLowerCase(),
  }
}

function absolutizeWikiUrls(html: string, host: string): string {
  let boxHtml = html.replace(/src="\//g, `src="https://${host}/`)
  boxHtml = boxHtml.replace(/href="\//g, `href="https://${host}/`)
  boxHtml = boxHtml.replace(/srcset="([^"]*)"/g, (_, val) =>
    `srcset="${val.replace(/(^|,\s*)\//g, `$1https://${host}/`)}"`,
  )
  return boxHtml
}

function extractItemBox(html: string, host: string): string | undefined {
  const start = findItemBoxStart(html)
  if (!start) return undefined
  const { idx, tag } = start
  let depth = 0
  let i = idx
  const openPattern = new RegExp(`<${tag}\\b`, 'i')
  const closeTag = `</${tag}>`

  while (i < html.length) {
    if (openPattern.test(html.slice(i, i + tag.length + 2))) {
      depth++
      i += tag.length + 1
    } else if (html.slice(i, i + closeTag.length).toLowerCase() === closeTag) {
      depth--
      if (depth === 0) {
        return absolutizeWikiUrls(html.slice(idx, i + closeTag.length), host)
      }
      i += closeTag.length
    } else {
      i++
    }
  }
  return undefined
}

function parseInfoboxGem(html: string, name: string): WikiDataResponse {
  const gemdescMatch = html.match(/class="[^"]*tc -gemdesc[^"]*"[^>]*>([\s\S]*?)<\/span>/i)
  const gemDesc = gemdescMatch ? stripHtml(gemdescMatch[1]) : undefined

  const modMatch = html.match(/class="group tc -mod"[^>]*>([\s\S]*?)<\/span>\s*(?:<span class="group tc -help|<\/span>\s*<span class="mw-default|<\/span>\s*<span class="images)/i)
  const mods = modMatch
    ? stripHtml(modMatch[1]).split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('Additional Effects From'))
    : []

  return {
    name,
    found: true,
    itemClass: 'Skill Gem',
    explicits: mods.length > 0 ? mods : undefined,
    description: gemDesc,
    rarity: 'gem',
  }
}

function parseInfoCard(html: string, name: string): WikiDataResponse {
  const subMatch = html.match(/class="subheading">([\s\S]*?)<\/div>/i)
  const subheading = subMatch ? stripHtml(subMatch[1]) : undefined

  const passiveLines = html.match(/class="passive-line">([\s\S]*?)<\/span>\s*<\/div>/i)
  const stats = passiveLines
    ? stripHtml(passiveLines[1]).replace(/\[\d+\]/g, '').split('\n').map(l => l.trim()).filter(Boolean)
    : []

  const blockNormal = html.match(/class="block tc -normal">([\s\S]*?)<\/div>/i)
  const blockDesc = blockNormal
    ? stripHtml(blockNormal[1]).split('\n').map(l => l.trim()).filter(Boolean)
    : []

  const pMatch = html.match(/<p><b>[^<]*<\/b>\s*[\s\S]*?<\/p>/i)
  const desc = pMatch ? stripHtml(pMatch[0]).slice(0, 300) : undefined

  return {
    name,
    found: true,
    baseType: subheading === 'Tooltip' ? undefined : subheading,
    explicits: stats.length > 0 ? stats : blockDesc.length > 0 ? blockDesc : undefined,
    description: desc,
    rarity: 'default',
  }
}

function parseGenericPage(html: string, name: string): WikiDataResponse {
  const pMatch = html.match(/<p><b>[^<]*<\/b>\s*(?:is\s+)?[\s\S]*?<\/p>/i)
  let desc = pMatch ? stripHtml(pMatch[0]).slice(0, 300) : undefined

  if (!desc) {
    const anyP = html.match(/<p>(.{30,}?)<\/p>/i)
    desc = anyP ? stripHtml(anyP[1]).slice(0, 300) : undefined
  }

  if (!desc) return { name, found: false }
  return { name, found: true, description: desc, rarity: 'default' }
}

async function fetchWikiData(name: string, host: string): Promise<WikiDataResponse> {
  const cacheKey = `${host}:${name}`
  const cached = cache.get(cacheKey)
  if (cached) return cached

  const cargoUrl = new URL(`https://${host}/api.php`)
  cargoUrl.searchParams.set('action', 'cargoquery')
  cargoUrl.searchParams.set('tables', 'items')
  cargoUrl.searchParams.set('fields', 'name,base_item,required_level,implicit_stat_text,explicit_stat_text,flavour_text,class_id,rarity_id')
  cargoUrl.searchParams.set('where', `name="${name}"`)
  cargoUrl.searchParams.set('format', 'json')
  cargoUrl.searchParams.set('origin', '*')

  const parseUrl = new URL(`https://${host}/api.php`)
  parseUrl.searchParams.set('action', 'parse')
  parseUrl.searchParams.set('page', name.replace(/ /g, '_'))
  parseUrl.searchParams.set('prop', 'text')
  parseUrl.searchParams.set('redirects', '1')
  parseUrl.searchParams.set('format', 'json')
  parseUrl.searchParams.set('origin', '*')

  const [cargoRes, parseRes] = await Promise.all([
    fetch(cargoUrl.toString()).then(r => r.json() as Promise<CargoResponse>).catch(() => null),
    fetch(parseUrl.toString()).then(r => r.json() as Promise<ParseResponse>).catch(() => null),
  ])

  const pageHtml = parseRes?.parse?.text?.['*']
  const itemBoxHtml = pageHtml ? extractItemBox(pageHtml, host) : undefined

  let data: WikiDataResponse

  const row = cargoRes?.cargoquery?.[0]?.title
  if (row) {
    const implicits = parseModList(row['implicit stat text'])
    const explicits = parseModList(row['explicit stat text'])

    if (row['class id'] === 'Active Skill Gem' && explicits.length === 0 && pageHtml) {
      data = parseInfoboxGem(pageHtml, name)
    } else {
      data = {
        name: row.name,
        found: true,
        baseType: row['base item'] || undefined,
        itemClass: row['class id'] || undefined,
        levelReq: row['required level'] ? parseInt(row['required level'], 10) : undefined,
        implicits,
        explicits,
        rarity: inferRarity(row['class id'], row['rarity id']),
      }
    }
  } else if (pageHtml) {
    if (pageHtml.includes('infobox-page-container') && pageHtml.includes('item-box -gem')) {
      data = parseInfoboxGem(pageHtml, name)
    } else if (pageHtml.includes('info-card')) {
      data = parseInfoCard(pageHtml, name)
    } else {
      data = parseGenericPage(pageHtml, name)
    }
  } else {
    data = { name, found: false }
  }

  if (itemBoxHtml) data.itemBoxHtml = itemBoxHtml

  cache.set(cacheKey, data)
  return data
}

export function useWikiData(name: Ref<string> | ComputedRef<string>, host: Ref<string> | ComputedRef<string>) {
  const data = shallowRef<WikiDataResponse | null>(null)
  const loading = ref(false)
  const error = shallowRef<unknown>(null)
  let inflight: Promise<void> | null = null

  async function load() {
    const n = toValue(name)
    const h = toValue(host)
    if (!n || data.value) return
    if (inflight) return inflight

    loading.value = true
    error.value = null

    inflight = (async () => {
      try {
        const result = await fetchWikiData(n, h)
        data.value = result
      } catch (e) {
        error.value = e
      } finally {
        loading.value = false
        inflight = null
      }
    })()

    return inflight
  }

  return { data, loading, error, load }
}
