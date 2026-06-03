// Shared types for the price-aware UI layer.
//
// `ItemType` enumerates the categories that `.claude/skills/price-forecast/scripts/collect.py`
// currently emits into `data/price-history/master.json` — currency &
// consumables. Uniques are NOT collected; widening this union must wait until
// the collector is extended.

export type ItemType =
  | 'Currency'
  | 'Fragment'
  | 'Scarab'
  | 'DivinationCard'
  | 'Essence'
  | 'Fossil'
  | 'Resonator'
  | 'Oil'
  | 'Catalyst'
  | 'DeliriumOrb'
  | 'Incubator'
  | 'Invitation'
  | 'Omen'
  | 'Vial'
  | 'ClusterJewel'
  | 'BlightedMap'
  | 'BlightRavagedMap'
  | 'Map'
  | 'UniqueAccessory'
  | 'UniqueArmour'
  | 'UniqueFlask'
  | 'UniqueJewel'
  | 'UniqueMap'
  | 'UniqueRelic'
  | 'UniqueWeapon'
  | 'SkillGem'

// One snapshot record per (slug) — the latest day's price for the item in the
// current league. Generated at build time; never mutated at runtime.
export interface ItemPriceEntry {
  name: string         // exact name as it appears in master.json
  type: ItemType
  price_chaos: number  // mean listing price in chaos at `as_of`
  listings: number     // listing count on `as_of` (low number → low confidence)
  as_of: string        // ISO date `YYYY-MM-DD`
}

// Top-level shape exported from `app/composables/data/prices.generated.ts`.
export interface PriceIndex {
  league: string                                   // e.g. "Mirage"
  divine_chaos: number                             // chaos value of 1 Divine Orb in this snapshot
  items: Readonly<Record<string, ItemPriceEntry>>  // keyed by toItemSlug(name)
}

// Display-ready snapshot returned by `useItemPrice`. Divine conversion already
// applied — popover just renders.
export interface PriceSnapshot extends ItemPriceEntry {
  /** Chaos value of 1 Divine Orb at the time the index was built. */
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


