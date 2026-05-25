#!/usr/bin/env bun
/**
 * poe2scout.com daily snapshot — bulk dump all categories cho 1 league.
 *
 * Output (per league):
 *   data/poe2scout/<league>/latest.json            — newest snapshot (overwrite)
 *   data/poe2scout/<league>/snapshots/<date>.json  — 1 file/day, idempotent rerun
 *   data/poe2scout/<league>/trends.json            — top 20 gainer / loser 7d
 *
 * Retention: keep 30 most recent daily snapshots, prune older.
 *
 * Usage:
 *   bun snapshot.ts --realm pc   --league mirage
 *   bun snapshot.ts --realm poe2 --league vaal
 */

import { mkdir, readdir, unlink, writeFile } from "node:fs/promises"
import { existsSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const BASE_URL = "https://api.poe2scout.com"
const PER_PAGE = 100
const KEEP_DAILY = 30
const REQUEST_GAP_MS = 100 // gentle pacing — server-friendly

// Workspace path resolution: scripts live at .claude/skills/poe2scout/scripts/
const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const WORKSPACE_DIR = join(SCRIPT_DIR, "..", "..", "..", "..")
const DATA_BASE = join(WORKSPACE_DIR, "data", "poe2scout")

// ---------- types ----------

interface PriceLog {
  Price: number
  Time: string // ISO datetime
  Quantity: number
}

interface ScoutItem {
  ApiId: string
  Text: string
  IconUrl: string
  CategoryApiId: string
  ItemMetadata?: unknown
  PriceLogs: PriceLog[]
  CurrentPrice: number
  CurrentQuantity: number
  // Uniques-only fields
  Name?: string
  Type?: string
  IsChanceable?: boolean
}

interface CategoryListResponse {
  CurrentPage: number
  Pages: number
  Total: number
  Items: ScoutItem[]
}

interface CategoriesResponse {
  CurrencyCategories: { ApiId: string; Label: string }[]
  UniqueCategories: { ApiId: string; Label: string }[]
}

interface Snapshot {
  realm: string
  league: string
  fetched_at: string
  total_items: number
  currency_categories: string[]
  unique_categories: string[]
  items: ScoutItem[]
}

interface TrendEntry {
  apiId: string
  text: string
  category: string
  kind: "Currency" | "Unique"
  currentPrice: number
  oldestPrice: number
  deltaPct: number
  avgVolume: number
}

interface Trends {
  league: string
  computed_at: string
  // 7d % change ranked
  top_gainers: TrendEntry[]
  top_losers: TrendEntry[]
  // Highest absolute volume (most liquid)
  top_liquid: TrendEntry[]
  // Lowest volume but priced — illiquid risk
  low_liquid: TrendEntry[]
}

// ---------- helpers ----------

function parseArgs(): { realm: string; league: string } {
  const a = process.argv.slice(2)
  const get = (k: string) => {
    const i = a.indexOf(k)
    return i >= 0 ? a[i + 1] : undefined
  }
  const realm = get("--realm")
  const league = get("--league")
  if (!realm || !league) {
    console.error("Usage: bun snapshot.ts --realm <pc|poe2> --league <slug>")
    process.exit(1)
  }
  return { realm, league }
}

async function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms))
}

async function getJson<T>(url: string): Promise<T> {
  const r = await fetch(url, { headers: { accept: "application/json" } })
  if (!r.ok) throw new Error(`GET ${url} → HTTP ${r.status}`)
  return (await r.json()) as T
}

async function fetchAllPages(
  realm: string,
  league: string,
  kind: "Currencies" | "Uniques",
  category: string,
): Promise<ScoutItem[]> {
  const all: ScoutItem[] = []
  let page = 1
  while (true) {
    const url = `${BASE_URL}/${realm}/Leagues/${league}/${kind}/ByCategory?Category=${encodeURIComponent(category)}&Page=${page}&PerPage=${PER_PAGE}`
    const body = await getJson<CategoryListResponse>(url)
    for (const it of body.Items) {
      // ensure CategoryApiId is present (Uniques response uses .CategoryApiId already; defensive)
      if (!it.CategoryApiId) it.CategoryApiId = category
      all.push(it)
    }
    if (page >= body.Pages) break
    page += 1
    await sleep(REQUEST_GAP_MS)
  }
  return all
}

function isoDateOnly(d = new Date()): string {
  return d.toISOString().slice(0, 10)
}

function computeTrends(snap: Snapshot): Trends {
  const entries: TrendEntry[] = []
  for (const it of snap.items) {
    // PriceLogs có thể chứa null entry cho Uniques sparse — filter trước khi tính
    const logs = (it.PriceLogs ?? []).filter(
      (l): l is PriceLog => l != null && typeof l.Price === "number",
    )
    if (logs.length < 2) continue
    const cur = logs[0].Price
    const old = logs[logs.length - 1].Price
    if (!cur || !old || cur <= 0 || old <= 0) continue
    const deltaPct = ((cur - old) / old) * 100
    const avgVolume = logs.reduce((s, l) => s + (l.Quantity ?? 0), 0) / logs.length
    const kind: "Currency" | "Unique" =
      snap.currency_categories.includes(it.CategoryApiId) ? "Currency" : "Unique"
    entries.push({
      apiId: it.ApiId,
      text: it.Text,
      category: it.CategoryApiId,
      kind,
      currentPrice: cur,
      oldestPrice: old,
      deltaPct,
      avgVolume,
    })
  }

  // Filter out spurious swings:
  //   - avgVolume < 5    → 1-2 listing tạo % swing không đáng tin
  //   - oldestPrice < 1  → giá floor 0 → bất kỳ price > 0 đều tạo +Inf%
  //   - currentPrice < 1 → idem cho losers
  // Bonus: cap dramatic outliers — divination cards mới in/wraprolled hay show > 10000% swing
  // không phải tín hiệu economy thật, chỉ là item mới được scout track.
  const liquid = entries.filter(
    (e) =>
      e.avgVolume >= 5 &&
      e.oldestPrice >= 1 &&
      e.currentPrice >= 1 &&
      Math.abs(e.deltaPct) < 10000,
  )

  const sortByDeltaDesc = [...liquid].sort((a, b) => b.deltaPct - a.deltaPct)
  const sortByVolumeDesc = [...entries].sort((a, b) => b.avgVolume - a.avgVolume)
  const sortByVolumeAsc = [...entries]
    .filter((e) => e.currentPrice > 0)
    .sort((a, b) => a.avgVolume - b.avgVolume)

  return {
    league: snap.league,
    computed_at: new Date().toISOString(),
    top_gainers: sortByDeltaDesc.slice(0, 20),
    top_losers: sortByDeltaDesc.slice(-20).reverse(),
    top_liquid: sortByVolumeDesc.slice(0, 20),
    low_liquid: sortByVolumeAsc.slice(0, 20),
  }
}

async function pruneOldSnapshots(snapshotsDir: string) {
  if (!existsSync(snapshotsDir)) return
  const files = (await readdir(snapshotsDir))
    .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f))
    .sort()
  const excess = files.length - KEEP_DAILY
  if (excess <= 0) return
  for (const f of files.slice(0, excess)) {
    await unlink(join(snapshotsDir, f))
    console.log(`  pruned ${f}`)
  }
}

// ---------- main ----------

async function main() {
  const { realm, league } = parseArgs()
  const t0 = Date.now()

  const cats = await getJson<CategoriesResponse>(
    `${BASE_URL}/${realm}/Leagues/${league}/Items/Categories`,
  )
  console.log(
    `Categories — currency=${cats.CurrencyCategories.length}  unique=${cats.UniqueCategories.length}`,
  )

  const items: ScoutItem[] = []

  for (const c of cats.CurrencyCategories) {
    process.stdout.write(`  fetching Currencies/${c.ApiId} ... `)
    const chunk = await fetchAllPages(realm, league, "Currencies", c.ApiId)
    console.log(`${chunk.length} items`)
    items.push(...chunk)
    await sleep(REQUEST_GAP_MS)
  }

  for (const c of cats.UniqueCategories) {
    process.stdout.write(`  fetching Uniques/${c.ApiId} ... `)
    const chunk = await fetchAllPages(realm, league, "Uniques", c.ApiId)
    console.log(`${chunk.length} items`)
    items.push(...chunk)
    await sleep(REQUEST_GAP_MS)
  }

  const snapshot: Snapshot = {
    realm,
    league,
    fetched_at: new Date().toISOString(),
    total_items: items.length,
    currency_categories: cats.CurrencyCategories.map((c) => c.ApiId),
    unique_categories: cats.UniqueCategories.map((c) => c.ApiId),
    items,
  }

  const leagueDir = join(DATA_BASE, league)
  const snapshotsDir = join(leagueDir, "snapshots")
  await mkdir(snapshotsDir, { recursive: true })

  const latestPath = join(leagueDir, "latest.json")
  const dailyPath = join(snapshotsDir, `${isoDateOnly()}.json`)
  const trendsPath = join(leagueDir, "trends.json")

  await writeFile(latestPath, JSON.stringify(snapshot, null, 2))
  await writeFile(dailyPath, JSON.stringify(snapshot, null, 2))

  const trends = computeTrends(snapshot)
  await writeFile(trendsPath, JSON.stringify(trends, null, 2))

  await pruneOldSnapshots(snapshotsDir)

  const elapsed = ((Date.now() - t0) / 1000).toFixed(1)
  console.log("")
  console.log(`Snapshot done — ${items.length} items in ${elapsed}s`)
  console.log(`  latest:    ${latestPath}`)
  console.log(`  daily:     ${dailyPath}`)
  console.log(`  trends:    ${trendsPath}`)
  console.log("")
  console.log("Top 5 gainers (7d):")
  for (const t of trends.top_gainers.slice(0, 5)) {
    console.log(
      `  +${t.deltaPct.toFixed(1)}%  ${t.text}  (${t.category}, vol ${t.avgVolume.toFixed(0)})`,
    )
  }
  console.log("Top 5 losers (7d):")
  for (const t of trends.top_losers.slice(0, 5)) {
    console.log(
      `  ${t.deltaPct.toFixed(1)}%  ${t.text}  (${t.category}, vol ${t.avgVolume.toFixed(0)})`,
    )
  }
}

main().catch((e) => {
  console.error("FATAL:", e)
  process.exit(1)
})
