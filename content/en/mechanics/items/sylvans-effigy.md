---
template: templates/item-template.md
document_type: item
title: Sylvan's Effigy
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
game: poe2
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Sceptre
level_requirement: 6
item_tags:
- sceptre
- unique
- companion
- spirit
- minion
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- companion-multiplier
tags:
- item
- unique
- '0.5'
- return-of-the-ancients
- spirit-walker
- companion
---

# Sylvan's Effigy

Sylvan's Effigy is a unique sceptre on the :wiki-link{url="https://www.poe2wiki.net/wiki/Stoic_Sceptre"} Stoic Sceptre base that grants the companion skill **Azmerian Wolf** and breaks the game's companion-count ceiling. The defining line is "You can have any number of Companions of different types" — normally companion count is capped, and this item lifts that cap for companions *of different types*. Add "54% increased Spirit" to fund the reservation budget for many companions, "Companions deal 85% increased damage to your Marked targets", and "Allies in your Presence Regenerate 64 Life per second", and it becomes the core of a [Spirit Walker](/mechanics/spirit-walker-companion-beast-hunt) build that runs a pack of companions instead of just one.

## Item Stats

```
Sylvan's Effigy
Stoic Sceptre
Spirit: 100
Requires: Level 6, 7 Str, 12 Int
--------
Grants Skill: Level 18 Azmerian Wolf
54% increased Spirit
Allies in your Presence Regenerate 64 Life per second
+9 to all Attributes
Companions deal 85% increased damage to your Marked targets
You can have any number of Companions of different types
```

Confidence: **HIGH** — mods verbatim from poe2db 0.5.0 data. The granted skill Azmerian Wolf requires Level 78, 42 Strength, and 106 Intelligence to use (MEDIUM — numbers from the Azmerian Wolf page).

## Why This Item Is Powerful

The real value lives in "You can have any number of Companions of different types", not the damage line. POE2 companions are normally limited in number, so a companion build has to pick one and pour everything into it. This item lifts the cap for companions of different types — meaning the player can run multiple companion types simultaneously (one of each type), as long as there's enough Spirit to reserve them. The "54% increased Spirit" on the same item is what funds that: Spirit is the reservation resource, and 54% increased multiplies the budget used to open up extra companion slots directly.

The granted skill Azmerian Wolf shows the damage direction: Companion/Persistent/Physical, Cooldown 15s, Attack Damage 1000%, "Summons 7 Spirit Wolves" that dash into enemies for 8 seconds, Maiming targets they hit. It's a burst companion on a cooldown — 7 wolves charge in for 8s then vanish, suited to Marking a target then dumping, because "Companions deal 85% increased damage to your Marked targets" multiplies the wolf pack's damage against the marked target directly. "Allies in your Presence Regenerate 64 Life per second" keeps the companions sturdier through extended combat.

What to test when the league goes live: how many companions of different types the actual total Spirit can fund at once, and whether "any number ... of different types" means many of each type or just one of each across many types (LOW — wording needs in-game logging to confirm).

## Build Enabler Mechanics

This item builds a Spirit Walker that runs a mixed pack of companions instead of a single companion. The player commits to: stacking Spirit (gear + tree + the 54% from the item) to open up many companion slots of different types, Marking a target to trigger the 85% increased damage, and using Azmerian Wolf as a burst window on its 15s cooldown. Because companions of different types no longer hit the cap, the build can mix a beast companion + spectral wolf + another companion at once, each playing a role (tank, dps, utility).

This item doesn't suit a single-strong-minion build (like the [The Auspex](/mechanics/items/the-auspex) direction that forces one Mist Raven) — Sylvan's Effigy rewards fielding many companions, the exact opposite philosophy of pouring everything into one entity. It also doesn't suit a build that doesn't run companions, since most of the mods come back to companions/Spirit.

## Acquisition

The drop source hasn't been revealed by GGG as of 25/05 (league launch ~29/05). As a Level 6 sceptre base with Spirit 100, it could be accessible early if it drops widely. The first-week price depends on how much the companion meta picks up after the Spirit Walker ascendancy goes live — will update once the market settles.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced alongside the Spirit Walker ascendancy. Mods verbatim already on poe2db; build viability not yet tested live.

## Related Items & Alternatives

- [The Raven's Flock](/mechanics/0-5-new-unique-items) — a staff minion item from the same patch (111% increased Minion Damage, 34% Spirit Reservation Efficiency); consider it when a build leans minion over companion.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Stoic_Sceptre"} Stoic Sceptre — the item's base, with Spirit 100 as the reservation starting point.

## Relationships

- **synergizes_with** [Spirit Walker — Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — the item lifts the companion cap, the main axis of the Spirit Walker ascendancy
- **part_of** [New Unique Wave and Meta Shift](/mechanics/0-5-new-unique-items) — the companion axis revealed in the 0.5 wave
- **competes_with** [The Auspex](/mechanics/items/the-auspex) — the Auspex forces a single minion, Sylvan's Effigy rewards a companion pack — two opposite philosophies
