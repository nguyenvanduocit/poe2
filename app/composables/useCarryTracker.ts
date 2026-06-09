// Party-carry tracker: live roster from Client.txt + tiered pricing + Discord listing.
//
// Imperative shell around two pure cores: carry-match.ts (Client.txt → events) and
// carry-pricing.ts (tiers → charge / WTS message). It reuses the Client.txt access
// strategy proven in useLeveling.ts — File System Access API + IndexedDB handle
// persistence + tail read + byte-offset incremental poll + an epoch token for clean
// teardown — under its OWN IDB namespace. Everything that touches window/IDB runs
// client-only so `nuxt generate` can prerender.
//
// Roster split: an order is [startLevel → targetLevel] (both typed in, persisted);
// `level` is the current live level (from Client.txt level-up lines OR typed in for a
// buyer who just joined and hasn't levelled yet). Charge = priceForRange over the
// order span, walking the global tier table. paid/isSelf are user state.

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { parseClientChunk, type CarryEvent } from '~/composables/carry-match'
import { priceForRange, buildDiscordMessage, type PriceTier } from '~/composables/carry-pricing'

const STORAGE_KEY = 'poe2-carry-roster'
const TIERS_KEY = 'poe2-carry-tiers'
const SERVICE_KEY = 'poe2-carry-service'
const IDB_NAME = 'poe2-carry'
const IDB_STORE = 'handles'
const IDB_KEY = 'client-txt'
const POLL_MS = 1200
const TAIL_BYTES = 4 * 1024 * 1024

export interface CarryPlayer {
  name: string // display name as written in the log
  charClass: string | null
  level: number | null // current — live from log, or typed in before first level-up
  startLevel: number | null // order start (billing anchor) — typed in / first-seen
  targetLevel: number | null // order end
  paid: boolean
  isSelf: boolean // your own character — excluded from earnings
  present: boolean // currently in your instance
  deaths: number // slain count this session
  request: string | null // raw whisper body if the row came from a buyer's order
  lastSeen: number
}

export interface ServiceInfo {
  title: string
  realm: string
  ign: string
  extraLine: string
  currency: string
}

interface PersistRow {
  name: string
  charClass: string | null
  level: number | null
  startLevel: number | null
  targetLevel: number | null
  paid: boolean
  isSelf: boolean
  request: string | null
}

const DEFAULT_TIERS: PriceTier[] = [
  { id: 't1', fromLevel: 55, toLevel: 80, pricePerLevel: 1 },
  { id: 't2', fromLevel: 80, toLevel: 85, pricePerLevel: 2 },
  { id: 't3', fromLevel: 85, toLevel: 88, pricePerLevel: 3 },
  { id: 't4', fromLevel: 88, toLevel: 90, pricePerLevel: 5 },
]
const DEFAULT_SERVICE: ServiceInfo = {
  title: 'Leveling Carry — EXP Tablet + Density · my map, my loot, your exp',
  realm: 'NA/EU',
  ign: '',
  extraLine: 'Safe maps, res capped. Pay after each range.',
  currency: 'div',
}

function key(name: string): string {
  return name.trim().toLowerCase()
}
function cleanInt(n: number | null): number | null {
  return n != null && Number.isFinite(n) ? Math.trunc(n) : null
}

// ---- IndexedDB: persist the FileSystemFileHandle across reloads ----
function idbOpen(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}
async function idbSetHandle(handle: FileSystemFileHandle): Promise<void> {
  const db = await idbOpen()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).put(handle, IDB_KEY)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}
async function idbGetHandle(): Promise<FileSystemFileHandle | null> {
  const db = await idbOpen()
  const handle = await new Promise<FileSystemFileHandle | null>((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly')
    const req = tx.objectStore(IDB_STORE).get(IDB_KEY)
    req.onsuccess = () => resolve((req.result as FileSystemFileHandle) ?? null)
    req.onerror = () => reject(req.error)
  })
  db.close()
  return handle
}

export function useCarryTracker() {
  const mounted = ref(false)
  const roster = ref<Map<string, CarryPlayer>>(new Map())
  const tiers = ref<PriceTier[]>(DEFAULT_TIERS.map(t => ({ ...t })))
  const service = ref<ServiceInfo>({ ...DEFAULT_SERVICE })
  let tierSeq = DEFAULT_TIERS.length

  // ---- Roster mutation ----
  function touch(name: string): CarryPlayer {
    const k = key(name)
    let p = roster.value.get(k)
    if (!p) {
      p = { name, charClass: null, level: null, startLevel: null, targetLevel: null, paid: false, isSelf: false, present: false, deaths: 0, request: null, lastSeen: 0 }
      roster.value.set(k, p)
    }
    return p
  }

  function applyEvent(ev: CarryEvent, now: number): void {
    const p = touch(ev.name)
    p.lastSeen = now
    if (ev.type === 'level') {
      p.charClass = ev.charClass
      p.level = ev.level // live truth for current level
      if (p.startLevel == null) p.startLevel = ev.level // anchor the order if not set
      p.present = true
    }
    else if (ev.type === 'join') p.present = true
    else if (ev.type === 'leave') p.present = false
    else if (ev.type === 'slain') p.deaths += 1
    else if (ev.type === 'whisper') {
      // A buyer's order request. Pre-fill the order span ONLY into empty fields so a
      // re-whisper never clobbers what the seller already typed. Never sets level /
      // present — they haven't joined the party yet.
      p.request = ev.body
      if (p.startLevel == null && ev.fromLevel != null) p.startLevel = ev.fromLevel
      if (p.targetLevel == null && ev.toLevel != null) p.targetLevel = ev.toLevel
    }
  }

  function ingest(text: string): void {
    const events = parseClientChunk(text)
    if (events.length === 0) return
    const now = mounted.value && import.meta.client ? Date.now() : 0
    for (const ev of events) applyEvent(ev, now)
    roster.value = new Map(roster.value)
    persistRoster()
  }

  // ---- User edits: roster ----
  function setLevel(name: string, n: number | null): void {
    const p = touch(name); p.level = cleanInt(n)
    if (p.startLevel == null && p.level != null) p.startLevel = p.level
    roster.value = new Map(roster.value); persistRoster()
  }
  function setStart(name: string, n: number | null): void {
    touch(name).startLevel = cleanInt(n)
    roster.value = new Map(roster.value); persistRoster()
  }
  function setTarget(name: string, n: number | null): void {
    touch(name).targetLevel = cleanInt(n)
    roster.value = new Map(roster.value); persistRoster()
  }
  function togglePaid(name: string): void {
    const p = touch(name); p.paid = !p.paid
    roster.value = new Map(roster.value); persistRoster()
  }
  function toggleSelf(name: string): void {
    const p = touch(name); p.isSelf = !p.isSelf
    roster.value = new Map(roster.value); persistRoster()
  }
  // Dismiss the "📩 chờ" pending marker by hand, keeping the row + pre-filled order.
  function clearRequest(name: string): void {
    const p = roster.value.get(key(name))
    if (!p) return
    p.request = null
    roster.value = new Map(roster.value)
  }
  function addManual(name: string): void {
    const clean = name.trim()
    if (!clean) return
    touch(clean)
    roster.value = new Map(roster.value); persistRoster()
  }
  function remove(name: string): void {
    roster.value.delete(key(name))
    roster.value = new Map(roster.value); persistRoster()
  }
  function clearAll(): void {
    if (import.meta.client && !window.confirm('Xoá toàn bộ roster carry?')) return
    roster.value = new Map(); persistRoster()
  }

  // ---- User edits: pricing tiers ----
  function addTier(): void {
    const last = tiers.value[tiers.value.length - 1]
    const from = last ? last.toLevel : 55
    tiers.value = [...tiers.value, { id: `t${++tierSeq}`, fromLevel: from, toLevel: from + 5, pricePerLevel: 1 }]
    persistTiers()
  }
  function updateTier(id: string, field: 'fromLevel' | 'toLevel' | 'pricePerLevel', n: number | null): void {
    const v = n != null && Number.isFinite(n) ? n : 0
    tiers.value = tiers.value.map(t => (t.id === id ? { ...t, [field]: field === 'pricePerLevel' ? Math.max(0, v) : Math.trunc(v) } : t))
    persistTiers()
  }
  function removeTier(id: string): void {
    tiers.value = tiers.value.filter(t => t.id !== id)
    persistTiers()
  }
  function resetTiers(): void {
    tiers.value = DEFAULT_TIERS.map(t => ({ ...t }))
    persistTiers()
  }
  function updateService(field: keyof ServiceInfo, v: string): void {
    service.value = { ...service.value, [field]: v }
    persistService()
  }

  // ---- Derived ----
  const players = computed<CarryPlayer[]>(() => {
    const arr = Array.from(roster.value.values())
    arr.sort((a, b) => {
      if (a.present !== b.present) return a.present ? -1 : 1
      if (b.lastSeen !== a.lastSeen) return b.lastSeen - a.lastSeen
      return a.name.localeCompare(b.name)
    })
    return arr
  })

  function levelsDelivered(p: CarryPlayer): number {
    if (p.level == null || p.startLevel == null) return 0
    return Math.max(0, p.level - p.startLevel)
  }
  function levelsToGo(p: CarryPlayer): number | null {
    if (p.targetLevel == null || p.level == null) return null
    return Math.max(0, p.targetLevel - p.level)
  }
  // Planned charge for the whole order [start → target], priced across tiers.
  function estCharge(p: CarryPlayer): number | null {
    if (p.startLevel == null || p.targetLevel == null) return null
    return priceForRange(tiers.value, p.startLevel, p.targetLevel)
  }

  const totals = computed(() => {
    let delivered = 0, est = 0, collected = 0, unpaidDone = 0
    for (const p of players.value) {
      if (p.isSelf) continue
      delivered += levelsDelivered(p)
      const c = estCharge(p) ?? 0
      est += c
      if (p.paid) collected += c
      else if (levelsToGo(p) === 0 && p.targetLevel != null) unpaidDone += c
    }
    return { delivered, est, collected, unpaidDone }
  })

  const discordMessage = computed(() => buildDiscordMessage({
    title: service.value.title,
    realm: service.value.realm,
    ign: service.value.ign,
    extraLine: service.value.extraLine,
    tiers: tiers.value,
    currency: service.value.currency,
  }))

  // ---- Persistence ----
  function save(k: string, v: unknown): void {
    if (!import.meta.client) return
    try { localStorage.setItem(k, JSON.stringify(v)) }
    catch { /* private mode — in-memory still works */ }
  }
  function persistRoster(): void {
    const rows: PersistRow[] = Array.from(roster.value.values()).map(p => ({
      name: p.name, charClass: p.charClass, level: p.level, startLevel: p.startLevel, targetLevel: p.targetLevel, paid: p.paid, isSelf: p.isSelf, request: p.request,
    }))
    save(STORAGE_KEY, rows)
  }
  function persistTiers(): void { save(TIERS_KEY, tiers.value) }
  function persistService(): void { save(SERVICE_KEY, service.value) }

  function restore(): void {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const rows = JSON.parse(raw) as PersistRow[]
        if (Array.isArray(rows)) {
          const m = new Map<string, CarryPlayer>()
          for (const r of rows) {
            if (!r?.name) continue
            m.set(key(r.name), { name: r.name, charClass: r.charClass ?? null, level: r.level ?? null, startLevel: r.startLevel ?? null, targetLevel: r.targetLevel ?? null, paid: !!r.paid, isSelf: !!r.isSelf, present: false, deaths: 0, request: r.request ?? null, lastSeen: 0 })
          }
          roster.value = m
        }
      }
    }
    catch { /* corrupt — start fresh */ }
    try {
      const rawT = localStorage.getItem(TIERS_KEY)
      if (rawT) {
        const t = JSON.parse(rawT) as PriceTier[]
        if (Array.isArray(t) && t.length) { tiers.value = t; tierSeq = t.length + DEFAULT_TIERS.length }
      }
    }
    catch { /* keep defaults */ }
    try {
      const rawS = localStorage.getItem(SERVICE_KEY)
      if (rawS) service.value = { ...DEFAULT_SERVICE, ...(JSON.parse(rawS) as Partial<ServiceInfo>) }
    }
    catch { /* keep defaults */ }
  }

  // ---- Client.txt monitor (File System Access API) ----
  const fsSupported = computed(() => mounted.value && 'showOpenFilePicker' in window)
  const connected = ref(false)
  const hasStoredHandle = ref(false)
  const monitorError = ref<string | null>(null)

  let handle: FileSystemFileHandle | null = null
  let byteOffset = 0
  let lastMod = 0
  let timer: ReturnType<typeof setTimeout> | null = null
  let epoch = 0

  function stopMonitor(): void {
    epoch++
    if (timer) clearTimeout(timer)
    timer = null
    handle = null
    connected.value = false
  }

  async function readChunk(file: File): Promise<string> {
    if (file.size < byteOffset) byteOffset = 0 // rotated/truncated
    const bytes = new Uint8Array(await file.slice(byteOffset).arrayBuffer())
    let lastNL = -1
    for (let i = bytes.length - 1; i >= 0; i--) {
      if (bytes[i] === 0x0A) { lastNL = i; break }
    }
    if (lastNL === -1) return ''
    const usable = bytes.subarray(0, lastNL + 1)
    byteOffset += usable.byteLength
    return new TextDecoder().decode(usable)
  }

  async function poll(): Promise<void> {
    const myEpoch = epoch
    if (!handle) return
    try {
      const file = await handle.getFile()
      if (file.lastModified !== lastMod || byteOffset < file.size) {
        lastMod = file.lastModified
        const chunk = await readChunk(file)
        if (chunk) ingest(chunk)
      }
    }
    catch (e) {
      monitorError.value = e instanceof Error ? e.message : 'Đọc Client.txt thất bại'
      stopMonitor()
      return
    }
    if (myEpoch === epoch && handle) timer = setTimeout(poll, POLL_MS)
  }

  async function startMonitor(h: FileSystemFileHandle): Promise<void> {
    stopMonitor()
    handle = h
    monitorError.value = null
    connected.value = true
    const myEpoch = epoch
    try {
      const file = await h.getFile()
      const text = await file.slice(Math.max(0, file.size - TAIL_BYTES)).text()
      ingest(text)
      byteOffset = file.size
      lastMod = file.lastModified
    }
    catch (e) {
      stopMonitor()
      throw e
    }
    if (myEpoch === epoch && handle) timer = setTimeout(poll, POLL_MS)
  }

  async function connectClientTxt(): Promise<void> {
    if (!fsSupported.value) return
    try {
      const [h] = await (window as unknown as {
        showOpenFilePicker: (o?: object) => Promise<FileSystemFileHandle[]>
      }).showOpenFilePicker({ types: [{ description: 'POE Client log', accept: { 'text/plain': ['.txt'] } }], multiple: false })
      if (!h) return
      await idbSetHandle(h)
      hasStoredHandle.value = true
      await startMonitor(h)
    }
    catch (e) {
      if (e instanceof DOMException && e.name === 'AbortError') return
      monitorError.value = e instanceof Error ? e.message : 'Không mở được file'
    }
  }

  async function reconnect(): Promise<void> {
    if (!fsSupported.value) return
    try {
      const h = handle ?? (await idbGetHandle())
      if (!h) { await connectClientTxt(); return }
      const perm = (h as unknown as {
        queryPermission: (o: object) => Promise<PermissionState>
        requestPermission: (o: object) => Promise<PermissionState>
      })
      let state = await perm.queryPermission({ mode: 'read' })
      if (state !== 'granted') state = await perm.requestPermission({ mode: 'read' })
      if (state !== 'granted') { monitorError.value = 'Bạn cần cấp quyền đọc Client.txt'; return }
      await startMonitor(h)
    }
    catch (e) {
      monitorError.value = e instanceof Error ? e.message : 'Reconnect thất bại'
    }
  }

  function disconnect(): void { stopMonitor() }

  // ---- Lifecycle ----
  onMounted(async () => {
    mounted.value = true
    restore()
    if (fsSupported.value) {
      try { hasStoredHandle.value = !!(await idbGetHandle()) }
      catch { hasStoredHandle.value = false }
    }
  })
  onBeforeUnmount(() => { stopMonitor() })

  return {
    // roster
    players, totals,
    levelsDelivered, levelsToGo, estCharge,
    setLevel, setStart, setTarget, togglePaid, toggleSelf, clearRequest, addManual, remove, clearAll,
    // pricing
    tiers, addTier, updateTier, removeTier, resetTiers,
    // service + message
    service, updateService, discordMessage,
    // client.txt
    fsSupported, connected, hasStoredHandle, monitorError,
    connectClientTxt, reconnect, disconnect,
  }
}
