// Singleton lookup wrapper around the build-time price index.
//
// The index lives at `app/composables/data/prices.generated.ts` and is rebuilt
// whenever `data/price-history/poe1/price-history.json` changes (see
// `.claude/skills/nuxt/scripts/build-prices/build.ts` and `.github/workflows/collect-prices.yml`).
// Reads here are O(1) object access — no I/O, no SQLite, no reactivity.

import type { PriceSnapshot } from '~/types/poe-item'
import { PRICES } from '~/composables/data/prices.generated'
import { toItemSlug } from '~/utils/itemSlug'

// Anything older than this is rendered with a "stale" hint in the popover so
// readers know the number is from a previous data dump.
const STALE_AFTER_DAYS = 7

function daysSince(isoDate: string): number {
  const then = Date.parse(isoDate)
  if (!Number.isFinite(then)) return Number.POSITIVE_INFINITY
  return Math.floor((Date.now() - then) / 86_400_000)
}

/**
 * Resolve a price snapshot for an item. Returns `null` when the slug is not
 * present in the current league's index (uniques, deprecated items, typos —
 * the popover renders a "Chưa có giá" message in that case).
 *
 * Pass `slug` to bypass name-derivation; pass `name` to derive the slug via
 * the canonical wiki rule. If both are passed, `slug` wins.
 */
export function useItemPrice(name?: string, slug?: string): PriceSnapshot | null {
  const key = slug ?? (name ? toItemSlug(name) : null)
  if (!key) return null

  const entry = PRICES.items[key]
  if (!entry) return null

  const divine = PRICES.divine_chaos
  const showDivine = divine > 0 && entry.price_chaos >= divine
  return {
    ...entry,
    divine_chaos: divine,
    price_divine: showDivine ? entry.price_chaos / divine : null,
    is_stale: daysSince(entry.as_of) >= STALE_AFTER_DAYS,
  }
}

/** Current league name as embedded in the build-time price index. */
export const PRICE_INDEX_LEAGUE = PRICES.league
