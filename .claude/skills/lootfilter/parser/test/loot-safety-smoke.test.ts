/**
 * Loot-safety smoke test — guards the "filter broke and I lost loot" scenario.
 *
 * Syntax validation cannot catch a filter that parses fine but HIDES a Divine
 * Orb (a mis-ordered Hide, a shadowing catch-all). This test evaluates real
 * items against the shipped filter the same way the game client does and
 * asserts: every valuable currency is Shown, max-socket bases are Shown, the
 * never-hide floor is never hidden, and sub-threshold junk is actually Hidden.
 *
 * The synthetic block at the end proves the evaluator has teeth: it must report
 * a Divine Orb as HIDDEN when a Hide rule is ordered before its Show rule.
 */

import { describe, test, expect } from 'bun:test'
import { parseAsync, evaluateItem, isHidden, findHiddenValuables, type FilterItem } from '../src'
import { readFile } from 'fs/promises'
import { join } from 'path'

const SHIPPED_FILTER = join(__dirname, '../../../../../filter/currency-1c-plus.filter')

const cur = (baseType: string): FilterItem => ({ class: 'Stackable Currency', baseType, stackSize: 1, rarity: 'Normal' })

// Every orb the filter is meant to surface (>= 1 chaos, 2026-07-03 snapshot).
const MUST_SHOW_CURRENCY = [
  'Mirror of Kalandra',
  "Hinekora's Lock",
  'Perfect Chaos Orb',
  'Fracturing Orb',
  'Perfect Exalted Orb',
  'Divine Orb',
  'Orb of Annulment',
  'Greater Chaos Orb',
  "Perfect Jeweller's Orb",
  'Chaos Orb',
]

// Sub-1c currency NOT in the show list — the catch-all Hide must swallow these.
const MUST_HIDE_CURRENCY = ['Regal Orb', 'Orb of Alchemy', 'Scroll of Wisdom', 'Perfect Regal Orb']

describe('currency-1c-plus.filter — never hides loot', () => {
  test('every >=1c orb is SHOWN', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    for (const bt of MUST_SHOW_CURRENCY) {
      const res = evaluateItem(blocks, cur(bt))
      expect(res.shown, `${bt} must be shown, got activity=${res.activity}`).toBe(true)
    }
  })

  test('the never-hide floor (Mirror/Divine/Perfect orbs) is never hidden', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    const hidden = findHiddenValuables(blocks)
    expect(hidden.map((h) => h.baseType)).toEqual([])
  })

  test('a max-socket (3) base is SHOWN regardless of class/base', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    const shown = evaluateItem(blocks, { class: 'Body Armours', baseType: 'Whatever Plate', sockets: 3, rarity: 'Rare' })
    expect(shown.shown).toBe(true)
  })

  test('sub-1c currency is HIDDEN (catch-all works, filter is not show-all)', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    for (const bt of MUST_HIDE_CURRENCY) {
      expect(isHidden(blocks, cur(bt)), `${bt} should be hidden`).toBe(true)
    }
  })

  test('a 2-socket rare (below max) that is not currency is HIDDEN', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    expect(isHidden(blocks, { class: 'Body Armours', baseType: 'Whatever Plate', sockets: 2, rarity: 'Rare' })).toBe(true)
  })

  test('a unique ring is SHOWN, a rare ring is HIDDEN', async () => {
    const blocks = await parseAsync(await readFile(SHIPPED_FILTER, 'utf-8'))
    expect(evaluateItem(blocks, { class: 'Rings', baseType: 'Amethyst Ring', rarity: 'Unique' }).shown).toBe(true)
    expect(isHidden(blocks, { class: 'Rings', baseType: 'Amethyst Ring', rarity: 'Rare' })).toBe(true)
  })
})

describe('evaluator has teeth — catches a shadowing Hide', () => {
  test('Hide before Show hides the Divine (loot-loss bug is detected)', async () => {
    const broken = await parseAsync(`
Hide
    Class == "Stackable Currency"
Show
    Class == "Stackable Currency"
    BaseType == "Divine Orb"
    SetFontSize 45
`)
    expect(isHidden(broken, cur('Divine Orb'))).toBe(true)
  })

  test('Show before Hide shows the Divine (correct order passes)', async () => {
    const ok = await parseAsync(`
Show
    Class == "Stackable Currency"
    BaseType == "Divine Orb"
    SetFontSize 45
Hide
    Class == "Stackable Currency"
`)
    expect(isHidden(ok, cur('Divine Orb'))).toBe(false)
  })

  test('unmatched item defaults to SHOWN (game default)', async () => {
    const onlyHidesCurrency = await parseAsync(`
Hide
    Class == "Stackable Currency"
`)
    expect(isHidden(onlyHidesCurrency, { class: 'Rings', baseType: 'Gold Ring', rarity: 'Rare' })).toBe(false)
  })
})
