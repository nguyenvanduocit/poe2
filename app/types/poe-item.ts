// Shared types for the price-aware UI layer.
//
// Category labels come from the poe2scout manifest (Currency, Runes, Weapons,
// Armour, etc.) and can expand with a league without a frontend release.
export type ItemType = string

// One snapshot record per (slug) — the latest day's price for the item in the
// current league. Generated at build time; never mutated at runtime.
export interface ItemPriceEntry {
  name: string         // exact name as it appears in master.json
  type: ItemType
  price_chaos: number  // price in Exalted Orbs; legacy field name
  listings: number     // current quantity from poe2scout (not daily traded volume)
  as_of: string        // ISO date `YYYY-MM-DD`
}

// Top-level shape exported from `app/composables/data/prices.generated.ts`.
export interface PriceIndex {
  league: string                                   // e.g. "Runes of Aldur"
  divine_chaos: number                             // Exalted value of 1 Divine Orb in this snapshot
  items: Readonly<Record<string, ItemPriceEntry>>  // keyed by toItemSlug(name)
}

// Display-ready snapshot returned by `useItemPrice`. Divine conversion already
// applied — popover just renders.
export interface PriceSnapshot extends ItemPriceEntry {
  /** Exalted value of 1 Divine Orb at the time the index was built. */
  divine_chaos: number
  /** Set when `price_chaos >= divine_chaos`; null otherwise. */
  price_divine: number | null
  /** True when the latest collected day is at least this many days behind today. */
  is_stale: boolean
}

export interface WikiDataResponse {
  name: string
  found: boolean
  baseType?: string
  itemClass?: string
  levelReq?: number
  implicits?: string[]
  explicits?: string[]
  description?: string
  rarity?: string
  itemBoxHtml?: string
}


