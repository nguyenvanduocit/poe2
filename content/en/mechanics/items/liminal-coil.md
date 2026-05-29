---
template: templates/item-template.md
document_type: item
title: Liminal Coil
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Wand
level_requirement: 1
item_tags:
- wand
- unique
- curse
- chaos
- spell
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- curse-stacking
tags:
- item
- unique
- 0-5
- return-of-the-ancients
- curse
- chaos-conversion
---

# Liminal Coil

Liminal Coil is a unique wand on the :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Wand"} Twisted Wand base that grants the skill **Coiling Bolts** and inverts the entire way you play curses: it throws away a curse's original effect to turn the *number* of curses on a target into a damage multiplier. The two defining lines are "Magnitudes of Curses you inflict are zero" plus "Curses you inflict ignore Curse limit" — curses no longer debuff anything, but you can stack an unlimited number of them on a single target. In exchange, "Spell Hits Gain 27% of Damage as Extra Chaos Damage per Curse on target" and "27% of Damage as Extra Physical Damage per Curse on target" turn each curse into +27% extra chaos *and* +27% extra phys. This is the core of a pure curse-stacking caster, not a stat stick.

## Item Stats

```
Liminal Coil
Twisted Wand
Requires: Level 1
--------
Grants Skill: Level 17 Coiling Bolts
71% increased Spell Damage
11% increased Cast Speed
Magnitudes of Curses you inflict are zero
Curses you inflict ignore Curse limit
Spell Hits Gain 27% of Damage as Extra Chaos Damage per Curse on target
Spell Hits Gain 27% of Damage as Extra Physical Damage per Curse on target
```

Confidence: **HIGH** — mods verbatim from poe2db 0.5.0 data. "Requires: Level 1" on the item may be a placeholder; Coiling Bolts requires Level 72 and 126 Intelligence to use (MEDIUM — numbers from the Coiling Bolts page).

## Why This Item Is Powerful

The self-balancing mechanic lives in the pair "zero magnitude" and "ignore curse limit". A normal curse is capped at 1 curse per target (unless a node raises the limit), and a curse's value comes from its magnitude. Liminal Coil drops both: magnitude goes to 0 so a curse does nothing *directly*, but the limit is removed so the player stacks as many curses as the supply allows. Each curse on the target then adds "27% of Damage as Extra Chaos" and "27% as Extra Physical" to the spell hit — with 4 curses, that's +108% extra chaos and +108% extra phys, compounding on the spell's base damage.

The granted skill Coiling Bolts fits this mechanic exactly. It "Simultaneously fires a Physical Projectile and a Chaos Projectile at the target. These projectiles Chain through any number of Cursed targets" — precisely the two damage types the item adds extra of (phys + chaos), and "chain through any number of Cursed targets" means in a room full of cursed enemies the projectiles bounce without limit. Coiling Bolts deals 188-283 Physical + 165-306 Chaos base at Cost 0 Mana, so you can spam it freely. The loop: curse spreads across the pack → Coiling Bolts chains through the whole pack → each hit is multiplied by the curse count on each individual target.

What to test when the league goes live: whether a source that applies many curses at once (curse-on-hit support, :wiki-link{url="https://www.poe2wiki.net/wiki/Curse"} multiple curse skills, or AoE curse) is fast enough to keep the stack high, and whether "ignore curse limit" allows stacking *the same* curse multiple times or only multiple different curses (LOW — wording unclear, needs in-game logging).

## Build Enabler Mechanics

This item builds a caster that uses curse count as its damage yardstick. The player commits to: many curse skills / curse-on-hit to push the curse count on a target high, scaling base spell damage (71% increased Spell Damage on the wand itself is the starting point), and chaos/phys that need no res penetration because the extra damage comes from the curse multiplier rather than from an ailment. Because curse magnitude is zero, you don't need curse effect — you skip the entire "increased curse effect" investment branch that a traditional curse build has to carry, pouring those points into spell damage and cast speed instead.

Builds that don't suit Liminal Coil: any build that *relies on a curse's debuff effect* (e.g. using :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} Despair to lower chaos res, or :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} Temporal Chains to slow) — because zero magnitude turns all of those effects off. The item only uses curses as a counter.

## Acquisition

The drop source hasn't been revealed by GGG as of 25/05 (league launch ~29/05). Based on the build-enabling unique pattern of the previous patch, it's likely from a Pinnacle boss or a league mechanic reward. The first-week price of a build-around caster wand usually swings hard depending on the meta — will update when the market goes live.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mods verbatim already on poe2db; build viability not yet tested live.

## Related Items & Alternatives

- :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} Despair — the standard chaos-res curse; note that Liminal Coil *nullifies* its magnitude, so the two don't stack in the usual way.
- [The Auspex](/mechanics/items/the-auspex) — a build-around unique from the same patch, a useful comparison for 0.5's "trade off one side to open an archetype" design.

## Relationships

- **part_of** [New Unique Wave and Meta Shift](/mechanics/0-5-new-unique-items) — the curse-stacking axis revealed in the 0.5 wave
- **synergizes_with** [Twisted Empyrean](/mechanics/items/twisted-empyrean) — same group of 0.5 build-enabling uniques
