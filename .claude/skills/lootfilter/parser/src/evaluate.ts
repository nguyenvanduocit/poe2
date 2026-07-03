/**
 * POE2 Filter Evaluator
 *
 * Answers the one question syntax validation cannot: "given a real item, does
 * this filter SHOW it or HIDE it?" A filter can parse perfectly and still hide
 * a Divine Orb because a Hide rule shadows it or the catch-all is mis-ordered.
 * This walks blocks top-to-bottom exactly like the game client and returns the
 * deciding block — the basis for the "never hide valuables" smoke test.
 */

import type { Activity, FilterBlock, NumericCondition, NumericOperator, Rarity, StringArrayCondition, RarityCondition } from './types'

/** A minimal item description — only the fields filters actually key on. */
export interface FilterItem {
  class?: string
  baseType?: string
  rarity?: Rarity
  sockets?: number
  stackSize?: number
  itemLevel?: number
  areaLevel?: number
  dropLevel?: number
  quality?: number
  gemLevel?: number
  waystoneTier?: number
  height?: number
  width?: number
  baseArmour?: number
  baseEvasion?: number
  baseEnergyShield?: number
  corrupted?: boolean
  identified?: boolean
}

export interface EvalResult {
  /** true = the item is visible (Show / Minimal / AlwaysShow, or default). */
  shown: boolean
  /** The block that decided the outcome, or null when nothing matched (default show). */
  matched: FilterBlock | null
  activity: Activity | 'DefaultShow'
}

const RARITY_ORDER: Record<Rarity, number> = { Normal: 0, Magic: 1, Rare: 2, Unique: 3 }

function cmp(op: NumericOperator, a: number, b: number): boolean {
  switch (op) {
    case '<': return a < b
    case '<=': return a <= b
    case '>': return a > b
    case '>=': return a >= b
    case '=':
    case '==': return a === b
  }
}

function matchNumeric(cond: NumericCondition | undefined, value: number | undefined): boolean {
  if (!cond) return true
  if (value === undefined) return false
  return cmp(cond.operator, value, cond.value)
}

function matchStrings(cond: StringArrayCondition | undefined, value: string | undefined): boolean {
  if (!cond) return true
  if (value === undefined) return false
  // '==' is exact match; bare '=' is the game's partial match (item text contains the token).
  if (cond.operator === '==') return cond.values.includes(value)
  return cond.values.some((v) => value.includes(v) || v.includes(value))
}

function matchRarity(cond: RarityCondition | undefined, value: Rarity | undefined): boolean {
  if (!cond) return true
  if (value === undefined) return false
  const op = cond.operator
  if (op === '=' || op === '==') return cond.values.includes(value)
  // numeric comparison against the (single) threshold rarity
  const threshold = cond.values[0]
  if (!threshold) return false
  return cmp(op as NumericOperator, RARITY_ORDER[value], RARITY_ORDER[threshold])
}

function matchBool(cond: boolean | undefined, value: boolean | undefined): boolean {
  if (cond === undefined) return true
  return (value ?? false) === cond
}

/** Does this single block match the item? All present conditions must hold. */
export function blockMatches(block: FilterBlock, item: FilterItem): boolean {
  const c = block.conditions
  return (
    matchStrings(c.Class, item.class) &&
    matchStrings(c.BaseType, item.baseType) &&
    matchRarity(c.Rarity, item.rarity) &&
    matchNumeric(c.Sockets, item.sockets) &&
    matchNumeric(c.StackSize, item.stackSize) &&
    matchNumeric(c.ItemLevel, item.itemLevel) &&
    matchNumeric(c.AreaLevel, item.areaLevel) &&
    matchNumeric(c.DropLevel, item.dropLevel) &&
    matchNumeric(c.Quality, item.quality) &&
    matchNumeric(c.GemLevel, item.gemLevel) &&
    matchNumeric(c.WaystoneTier, item.waystoneTier) &&
    matchNumeric(c.Height, item.height) &&
    matchNumeric(c.Width, item.width) &&
    matchNumeric(c.BaseArmour, item.baseArmour) &&
    matchNumeric(c.BaseEvasion, item.baseEvasion) &&
    matchNumeric(c.BaseEnergyShield, item.baseEnergyShield) &&
    matchBool(c.Corrupted, item.corrupted) &&
    matchBool(c.Identified, item.identified)
  )
}

/**
 * Walk the filter top-to-bottom. The first matching block whose `Continue` is
 * not set decides the outcome; blocks with `Continue` let evaluation carry on
 * (a later match can override). Nothing matched → the game shows the item.
 */
export function evaluateItem(blocks: FilterBlock[], item: FilterItem): EvalResult {
  let decided: FilterBlock | null = null
  for (const block of blocks) {
    if (!blockMatches(block, item)) continue
    decided = block
    if (!block.continue) break
  }
  if (!decided) return { shown: true, matched: null, activity: 'DefaultShow' }
  return { shown: decided.activity !== 'Hide', matched: decided, activity: decided.activity }
}

export function isHidden(blocks: FilterBlock[], item: FilterItem): boolean {
  return !evaluateItem(blocks, item).shown
}

/**
 * The never-hide floor: high-value stackable currency that NO sane filter
 * should ever hide. Stable across leagues (Mirror/Divine/Perfect orbs are
 * always valuable), so a filter that hides any of these is almost certainly a
 * mis-ordered-Hide bug — the exact "broke my filter and lost loot" scenario.
 */
export const UNIVERSAL_VALUABLES: FilterItem[] = [
  { class: 'Stackable Currency', baseType: 'Mirror of Kalandra', stackSize: 1, rarity: 'Normal' },
  { class: 'Stackable Currency', baseType: 'Divine Orb', stackSize: 1, rarity: 'Normal' },
  { class: 'Stackable Currency', baseType: 'Perfect Exalted Orb', stackSize: 1, rarity: 'Normal' },
  { class: 'Stackable Currency', baseType: 'Perfect Chaos Orb', stackSize: 1, rarity: 'Normal' },
]

/** Returns the valuables this filter would hide (empty = safe). */
export function findHiddenValuables(blocks: FilterBlock[], items: FilterItem[] = UNIVERSAL_VALUABLES): FilterItem[] {
  return items.filter((it) => isHidden(blocks, it))
}
