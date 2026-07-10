# T-056: Loot-filter evaluator ignores UnidentifiedItemTier
> The offline evaluator doesn't model `UnidentifiedItemTier`, so a Show rule gated only on it becomes unconditional in the sim — false loot-safety verification + a red smoke test.
- **priority**: medium
- **effort**: XS

## Problem
`matches()` in `.claude/skills/lootfilter/parser/src/evaluate.ts` (line ~44-62) lists a `matchNumeric(...)` call for every numeric condition it models (ItemLevel, WaystoneTier, Sockets, GemLevel, …) but has **no line for `UnidentifiedItemTier`**, and `FilterItem` (line ~14) has no `unidentifiedItemTier` field. The parser grammar + validator already handle the condition (range 0-6), so the filter parses fine — but the evaluator silently ignores the condition.

Consequence: a `Show` rule whose ONLY gate is `UnidentifiedItemTier >= 5` (block `[[0800]]` in `filter/currency-1c-plus.filter`) becomes an unconditional show for its class in the sim. Any rare Ring/Amulet reads as "shown" regardless of tier. This broke `test/loot-safety-smoke.test.ts:76` (`isHidden(rare Amethyst Ring) === true` now returns `false`), and means `evaluateItem`/`findHiddenValuables` cannot verify any tier-gated rule.

In-game the condition works correctly — this is purely an offline-verifier gap. The push-to-account currency loot-safety gate (`findHiddenValuables`, Mirror/Divine/Perfect Exalted/Perfect Chaos) is unaffected.

## Goal
The offline evaluator models `UnidentifiedItemTier` so tier-gated Show/Hide rules verify like the game client, and the loot-safety smoke test passes.

## Requirements
- Add `unidentifiedItemTier?: number` to `FilterItem` in `evaluate.ts`.
- Add `matchNumeric(c.UnidentifiedItemTier, item.unidentifiedItemTier)` to `matches()`.
- No grammar/validator change (already parse + range-check the condition).
- An item without a tier value must NOT satisfy a `>= N` gate (undefined → no match), so tierless rares still fall through to the catch-all Hide.

## Criteria
- [ ] `FilterItem.unidentifiedItemTier` exists and is wired into `matches()`.
- [ ] In the evaluator: ring tier 4 → hidden, tier 5 & 6 → shown against `filter/currency-1c-plus.filter`.
- [ ] Rare ring with no tier → hidden (restores `loot-safety-smoke.test.ts:76`).
- [ ] `cd .claude/skills/lootfilter/parser && bun test` → 0 fail.
