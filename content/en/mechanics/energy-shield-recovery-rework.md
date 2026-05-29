---
template: templates/mechanic-template.md
document_type: mechanic
title: "Energy Shield Recovery"
status: draft
author: duocnv
created: '2026-05-24'
updated: '2026-05-25'
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - energy-shield
  - defense
  - recovery
  - runes-of-aldur
  - runic-ward
---

# Energy Shield Recovery

Energy Shield in POE2 0.5 recovers through two distinct mechanisms: **delay** and **rate**.

- **Delay**: the time you must avoid hits after losing ES before recharge begins. The modifier "faster start of Energy Shield Recharge" shortens this phase.
- **Rate**: the per-second recovery speed after the delay ends. The modifier "increased Energy Shield Recharge Rate" increases throughput.

Base delay is 2 seconds by default. Base rate is 33% of max ES per second.

## Current Modifier Values (0.5)

### Passive Tree

The 0.5 tree contains **85 nodes** that grant "faster start of Energy Shield Recharge", mostly small passives:

- **30 small nodes** grant **4%** faster start
- **23 small nodes** grant **6%** faster start

There are no general small nodes granting "increased Energy Shield Recharge Rate" anymore (rate has been almost entirely stripped from small passives).

Key notables:

- **Rapid Recharge**: 12% increased ES Recharge Rate + 12% faster start.
- **Convalescence**: 20% faster start + **10% reduced** ES Recharge Rate (clear penalty).
- **Mystic Stance**: 12% faster start + 30% increased Stun Threshold while on Full Life.
- **Patient Barrier**: 50% increased max ES + **20% slower start of Energy Shield Recharge** (significant downside).
- **Essence Infusion**: 12% faster start + +12 Intelligence (no rate).
- **Dependable Ward**: 12% faster start + +8% Chaos Resistance.
- **Arcane Mixtures**: 10% increased Cast Speed if you've used a Mana Flask recently + Mana Flasks gain charges (no recharge stats).
- **Refocus**: Only increased Mana Regeneration Rate (no recharge).
- **Core of the Guardian**: 20% reduced max ES + 30% increased Block chance (very bad for pure ES).

### Gear Suffix

- "faster start of Energy Shield Recharge": **can no longer roll** on Foci, Intelligence Body Armour, or Jewel.
- "increased Energy Shield Recharge Rate" still rolls, but with heavily reduced values:
  - "of Buffering": 12–15%
  - "of Ardour": 16–19%
  - "of Suffusion": 20–23%
- Intelligence Body Armour can now roll rate suffixes (previously could not).

### Rune & Essence

- Essence of Hysteria on Foci: **20–23%** increased recharge rate.
- Rebirth Rune (Lesser/Standard/Greater) on Wand or Staff: **4% / 6% / 8%** increased recharge rate.
- Craiceann's Rune of Recovery on Body Armour: **30%** increased recharge rate.
- Soul core Atmohua's Soul Core of Retreat: entirely drops faster start, swapped to ailment/stun threshold scaling off max ES.

### Base & Unique

- Vile Robe base ES reduced from 184 to **171**.
- Atziri's Splendour: +Max ES only +66–100.
- Arcane Raiment / Sacramental Robe implicit: 15–25% increased recharge rate (not grandfathered to existing items).

## Runic Ward — Companion Layer

Runic Ward activates when the character drops to **1 life**. The Ward absorbs damage while active and recovers independently of life and ES. This is the layer GGG introduced to offset the reduced ES recovery.

How to obtain Ward:
- Verisium Runeforging (unlocked in Act 1 via NPC Farrow) lets you socket Ward Runes into armour.
- Armour below level 55 receives it for free.
- Armour level 55+ trades off some base defence (Armour/Evasion/ES) to gain Ward.
- Remnants can craft over 15 different Runic Ward Runes that tune max Ward, recovery speed, and effects when full.

Endgame builds in 0.5 must factor both layers: ES remains primary but with longer time-to-full recovery, while Runic Ward acts as the backup that triggers at 1 life.

## Defense Layers in 0.5: Evasion + Deflection + Runic Ward

In 0.5, the most efficient way to obtain ES recovery value is often through **Deflection** notables on the Evasion side of the tree rather than stacking pure ES clusters.

The tree contains **67 nodes** related to Deflection — this is now a prominent mitigation layer. Many Deflection notables also grant faster start of Energy Shield Recharge, creating strong hybrid points:

- **Mending Deflection**: 15% of damage from Deflected Hits recouped as Life + **20% faster start when not on Full Life**.
- **Energising Deflection**: **12% faster start** + 6% increased Deflection Rating.
- **The Soul Meridian**: 10% Deflection Rating from Evasion + **8% faster start** + 15% increased Mana Cost Efficiency.
- **First Teachings of the Keeper**: 8% Deflection Rating + **10% faster start** + Fire and Chaos Resistance.

Many small nodes also bundle 4–5% Deflect Rating together with 4–5% faster start. These nodes are heavily concentrated on the right side of the tree (Evasion/Intelligence areas).

The result is that **Evasion + Deflection + Runic Ward** forms the core defensive triangle. ES recovery is primarily gained as a secondary stat from Deflection notables rather than by pathing directly into old ES clusters. Ghost Dance hybrid (Evasion converting to ES regen when losing a shroud) becomes even stronger when combined with Deflection and Ward.

The right-side tree (especially the Huntress/Spirit Walker path) has excellent hybrid density for this style. Nodes such as Sacred Unity also provide additional ground effects and companion layers that improve positioning when playing around evasion and Ward.

## Ghost Dance Hybrid

Ghost Dance received a rework aimed at hybrid Evasion-ES builds:

- Ghost Shroud baseline frequency is slower (11.7–10.1s at gem 4–20).
- "Modifiers to Cooldown Recovery Rate also apply to Ghost Shroud gain frequency".
- "When Hit, lose a Ghost Shroud".
- "Regenerate Energy Shield equal to 2% of your Evasion Rating per second if you have lost a Ghost Shroud Recently".

With ~10k Evasion Rating, a hybrid build self-sustains ~200 ES/s when it loses a shroud — independent of the nerfed ES recharge cluster. This is the main path for Evasion stackers who want to keep ES without relying entirely on recovery rate.

## Grim Feast

Grim Feast (minion reservation) now has a **1 second cooldown**. ES sustain from overflow on wave clears is noticeably slower in dense maps.

## Keyword "Defences"

Old modifiers that said "Defences" now explicitly reference "Armour, Evasion and Energy Shield". Runic Ward, Resistance, and Block do **not** scale with "increased Defences".

## Build Implications in 0.5 (based on actual tree data)

**Tree analysis**:
- Rate is nearly dead on the general tree. The strongest sources of increased ES Recharge Rate are now **Rapid Recharge** (12%) and a few conditional/ascendancy nodes.
- Faster start is abundant (~53 small nodes at 4-6%), but the most efficient way to obtain it is often through **Deflection** notables on the Evasion side (Mending Deflection, Energising Deflection, The Soul Meridian, First Teachings of the Keeper...). This is why Evasion + Deflection + Runic Ward has become the core defensive triangle.
- **Patient Barrier** now carries a 20% slower start downside — no longer a "free 50% pool" notable.
- **Convalescence** has a clear 10% reduced rate penalty.
- Ghost Dance hybrid becomes even stronger when combined with Deflection and Ward.

**Practical build direction**:
- Strongly consider **Rapid Recharge** if the pathing is efficient (12% rate + start is one of the few strong combinations left).
- Route into Evasion clusters + conditional faster start notables (Shadow Dancing, Mending Deflection, etc.) + heavy investment in **Runic Ward** from gear.
- Patient Barrier remains strong for pool size but must be evaluated with its downside.
- Body armour + Foci remain the main slots for rate suffixes from gear.

**Gear craft**: Prioritize Foci with "of Suffusion" + Essence of Hysteria + Rebirth Rune on the same item. Body armour can now roll rate suffixes (new 0.5 advantage).

**Verisium Runeforging**: Rune Ward into every armour slot starting in Act 1. Free below level 55. Higher level pieces trade base defences — calculate based on Ward gained vs your main defence layer.

**Playstyle**: "Tank-by-recharge spam" between boss hits is no longer reliable. Short-downtime bosses force the build to survive on absolute pool (max ES + Runic Ward + Block/Evasion) instead of waiting for a refill.

## What to Avoid

- Chasing "faster start of Energy Shield Recharge" suffixes on Foci / Intelligence Body Armour / Jewel — this suffix no longer exists in those roll pools.
- Taking **Patient Barrier** without accepting the 20% slower start downside (no longer a clean pool notable).
- Taking **Convalescence** in the default cluster without accounting for the 10% reduced rate penalty.
- Core of the Guardian in a pure ES build (20% reduced max ES penalty).
- Ignoring Verisium Runeforging because it feels like "league content" — it is now a core defensive layer compensating for weak ES recovery in 0.5.

## Verification Needed

- Actual time-to-full recovery (TTF) after being hit in T15+ endgame maps with hybrid Runic Ward setups.
- Whether ES recharge rate has any cap.
- Whether pure ES / CI builds remain viable at level 95+ compared to hybrid life + Runic Ward.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Energy Shield recovery and Runic Ward are core parts of the 0.5.0 patch.
- **competes_with** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Spirit Walker builds pivot toward Companion/Evasion, reducing dependence on ES recovery.
