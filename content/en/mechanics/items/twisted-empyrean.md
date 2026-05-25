---
template: templates/item-template.md
document_type: item
title: Twisted Empyrean
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
game: poe2
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Two Hand Mace
level_requirement: 1
item_tags:
- two-hand-mace
- unique
- cold
- mana
- slam
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- mana-stacking
tags:
- item
- unique
- '0.5'
- return-of-the-ancients
- cold-conversion
- mana-before-life
---

# Twisted Empyrean

Twisted Empyrean is a unique two-hand mace on the :wiki-link{url="https://www.poe2wiki.net/wiki/Aberrant_Sledge"} Aberrant Sledge base that grants the skill **Starborn Onslaught** and turns the mana pool into both a damage source and an EHP source at the same time. Three mods lock together — "+319 to maximum Mana", "Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana", and "10% of Damage is taken from Mana before Life" — so every point of mana both adds cold damage and adds a layer of health buffer. Add "Convert 100% of Fire Damage with Mace Skills to Cold Damage" and the item forces the whole build to commit to cold, turning it into the core of a mana-tank slam mace rather than the usual life/str-stacker.

## Item Stats

```
Twisted Empyrean
Aberrant Sledge
Requires: Level 1
--------
Grants Skill: Level 18 Starborn Onslaught
94% increased Physical Damage
Adds 166 to 372 Cold Damage
+319 to maximum Mana
+4.43% to Critical Hit Chance
10% of Damage is taken from Mana before Life
Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana
Convert 100% of Fire Damage with Mace Skills to Cold Damage
```

Confidence: **HIGH** — mods verbatim from poe2db 0.5.0 data. "Requires: Level 1" on the item may be a datamine placeholder; Starborn Onslaught itself requires Level 78 and 137 Strength to use (MEDIUM — skill numbers from the Starborn Onslaught page).

## Why This Item Is Powerful

The weight lives in a single stat — maximum Mana — carrying three roles, so every point of mana investment is three times as efficient.

**Mana into damage.** "Adds 166 to 372 Cold Damage" is flat added on top, but the expensive line is "Added Cold Damage equal to 6% to 10% of maximum Mana". With +319 mana from the item itself plus mana from tree/gear, a pool of 2,000 mana for example adds 120 to 200 cold damage per attack from this line alone, independent of the flat 166-372. The higher the mana, the larger the cold added — this is why the build commits everything into mana instead of life.

**Mana into EHP.** "10% of Damage is taken from Mana before Life" is a trimmed-down piece of :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} Mind over Matter — 10% of each hit is subtracted from mana first. The large mana pool built to scale damage now doubles as a buffer, so there's no offense-vs-defense trade-off like a life build usually faces.

**Cold lock-in.** "Convert 100% of Fire Damage with Mace Skills to Cold Damage" funnels all fire (from Starborn Onslaught or supports) into cold, concentrating scaling into a single element. Starborn Onslaught already "Converts 70% of Physical to Cold" at low tier and 100% at high tier, so nearly all output is cold — the chill/freeze threshold is also thicker as a result because the cold damage is concentrated.

## Build Enabler Mechanics

This item defines a slam mace built around mana rather than strength/life. The default skill Starborn Onslaught is AoE/Melee/Slam/Cold/Duration: Attack Damage 155% at base up to 294% at high tier, creating a lasting Fissure (+8 seconds to Fissure duration at later tiers) but gated by "Requires 20 Glory to use" and "+1.2 seconds to Total Attack Time" — i.e. one heavy, slow hit, building Glory then dumping, not a spam. The playstyle is to build high mana (tree mana nodes, gear +mana, :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} or mana-scaling auras), hold the 10% MoM against burst, then slam a cold fissure into the pack/boss.

The build has to revolve around two questions that can't be tested while the league is offline: whether Glory generation is fast enough that Starborn Onslaught doesn't get bottlenecked, and whether mana sustain keeps up while serving as both a damage source and a damage-taken buffer. Both need in-game logging at league start.

This item doesn't suit a life-stacker build or any build that doesn't scale mana — every expensive mod here comes back to mana, and without mana what's left is just 94% increased Physical + an unremarkable flat cold.

## Acquisition

The drop source hasn't been revealed by GGG as of 25/05 (league launch ~29/05). Based on the new-unique pattern of previous patches, it's likely from a Pinnacle boss chain or a reward of the Remnant/Ocean Exploring league mechanic. The first-week price of a build-enabling weapon unique is usually 3-15 divine, settling after 2 weeks depending on meta pick-up — will update when the market goes live.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mods verbatim already on poe2db; build viability not yet tested live.

## Related Items & Alternatives

- :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} Mind over Matter — the full keystone version of the "damage taken from mana before life" line; Twisted Empyrean provides 10% built-in, so it can stack with or partly replace it.
- [The Auspex](/mechanics/items/the-auspex) — a unique from the same patch following the "one item carries many layers" trend, a useful comparison for how 0.5 designs build-around uniques.

## Relationships

- **part_of** [New Unique Wave and Meta Shift](/mechanics/0-5-new-unique-items) — one of the damage carries revealed in the 0.5 wave
- **synergizes_with** [The Auspex](/mechanics/items/the-auspex) — same group of 0.5 build-enabling uniques
