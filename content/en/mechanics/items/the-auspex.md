---
template: templates/item-template.md
document_type: item
title: The Auspex
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-19'
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Unknown
level_requirement: 0
item_tags:
- body-armour
- unique
- minion
- mist-raven
- madness
- slow
- low-life
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- minion-utility
- single-minion
tags:
- item
- unique
- minion
- pre-launch
- 0-5
- return-of-the-ancients
- mist-raven
- gruelling-madness
---

# The Auspex

Patch 0.5 **Return of the Ancients** (launch 2026-05-29) drops a unique attire called The Auspex — the slot is presumed to be body armour based on the word "attire" in the trailer[^1]. This item packs 4 independent power layers: **it summons a single Mist Raven** rather than a whole flock, **enemies the Raven culls grant the player a :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge**, **enemies in your presence range gain the "Gruelling Madness" slow debuff plus another, stronger slow buff**, and **deflect chance becomes lucky while on :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} low life**. The expected build target is a hybrid utility-melee or a low-life caster that wants one strong single minion rather than a swarm — the opposite pattern to the 0.4 meta dominated by Skeletal Storm Mages + Skeletal Sniper deep-swarm.

## Item Stats

Exact numbers will go public after the patch notes on 2026-05-21[^3].

```
The Auspex
[Base Type — TBD, suspected Body Armour]
Requires Level [TBD]

Summons a singular Mist Raven
Mist Raven has a unique command skill that causes it to dive at your
  targets, shattering reality and creating an explosion of madness
Enemies culled by the Mist Raven grant you Frenzy Charges
Enemies in your presence gain Gruelling Madness — a slowing debuff
Your other slows are more potent against enemies with Gruelling Madness
Your deflect chance is Lucky while on Low Life

"Ravens gathered and mists descended... following him...
driving him deeper and deeper into madness."
```

The 5 main mod lines above all appear verbatim in the trailer[^1]. The Body Armour slot is inferred from the word "attire," which usually implies a chest. The specific base type, level requirement, slow magnitude %, and deflect lucky threshold land with the patch notes on 2026-05-21.

## Why This Item Is Powerful

At a glance this is "1 minion + slow + lucky deflect", but the 4 layers stack with each other to create a new archetype that didn't exist in POE2 0.4.

**Layer 1 — Single-minion density.** Current POE2 minion builds split into 2 branches: swarm (5-12 Storm Mage / Sniper / Reaver minions) or companion (1-2 Beast/Spectre). The Auspex forces the player into the single-minion branch. The consequence: every point of minion damage / minion AOE / minion attack speed pours into 1 entity instead of being divided by 6-8. A rough comparison — if a Skeletal Storm Mage pushes ~2M DPS each across 5 of them for 10M total, a single Mist Raven with the same investment could push single-target DPS to ~10M but concentrated, more useful for boss/conqueror encounters than for mapping clear (the stat scaling hasn't been revealed yet).

**Layer 2 — Cull → Frenzy loop.** :wiki-link{url="https://www.poe2wiki.net/wiki/Cull"} cull in POE2 = instantly kills an enemy below 10% HP. When the Raven culls, the player gains a :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge — this is solo charge generation for a class without a frenzy gem or ascendancy notable. Standard POE2 Frenzy = 4% more damage + 4% attack/cast speed per charge (POE1 parity). The trailer says "giving the Raven extra utility" → the Raven likely also inherits the player's frenzy charges to scale its damage, pending tooltip confirmation. A closed loop: Raven damage → enemy low HP → Raven culls → frenzy → Raven gets stronger → culls faster.

**Layer 3 — Gruelling Madness stack multiplier.** The "Gruelling Madness" debuff is applied to enemies in presence range (:wiki-link{url="https://www.poe2wiki.net/wiki/Presence"} presence in POE2 is a ~6-8m AOE around the player). The debuff itself is a slow, but the key line in the trailer is *"empowers your other slows to be even more potent"*[^1] — meaning Madness is a **multiplicative slow potency** with every other slow source the player applies (chill, freeze threshold, :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} Temporal Chains). Slow-stacking archetypes (frost Witch, kite Ranger with :wiki-link{url="https://www.poe2wiki.net/wiki/Glacial_Cascade"} Glacial Cascade) reap this layer in full.

**Layer 4 — Lucky deflect on low life.** :wiki-link{url="https://www.poe2wiki.net/wiki/Deflect"} Deflect is a 0.4 defensive layer (roll a % to negate a hit entirely). "Lucky" = roll twice, take the higher. Standard POE2 low life = HP ≤ 50%. Effective deflect chance rises 1.5-2x while the player is at low life — combine with a reservation aura that lowers max life to pin the character at the low-life threshold permanently, though the POE2 low-life sustain mechanic isn't yet clear and needs testing when the league goes live.

## Build Enabler Mechanics

3 archetypes are immediately visible:

**A. Low-life Lich/Witch with Raven utility.** The Lich already has a Mist mechanic + minion presence — the Auspex stacks an additional strong-single minion + Frenzy gen. A low-life setup via a reservation aura pushes the player into the "low life" threshold permanently → lucky deflect always on. The Raven culls boss-adds → the player gets frenzy → spell DPS scales. This build doesn't need a dedicated minion build path; the Auspex is a utility chest.

**B. :wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} Martial Artist Stonefist with Raven distraction** (it's not yet known whether the Auspex slot is compatible with Monk armour scaling). The Monk Martial Artist ascendancy notable :wiki-link{url="https://www.poe2wiki.net/wiki/Way_of_the_Stonefist"} Way of the Stonefist transforms gloves prefix/suffix into stronger versions — pushing investment into gloves. The Auspex fills the chest/body slot with utility (Raven cull + presence slow + low-life deflect). A natural combo with [Facebreaker](/mechanics/items/facebreaker) — a Monk can run empty-hands + Auspex chest + Facebreaker gloves = a 3-unique synergy.

**C. Slow-control freeze Witch.** Gruelling Madness boosts slow potency multiplicatively. A Witch build using :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Wall"} Frost Wall + :wiki-link{url="https://www.poe2wiki.net/wiki/Glacial_Cascade"} Glacial Cascade freeze threshold will see enemy freeze duration extend noticeably while standing in the presence of a player carrying the Auspex. Not needed for map clear — bosses/rares get locked down longer → fewer counterattacks.

Builds that don't suit the Auspex: **swarm minion builders** (Skeletal Storm Mage spammers) because the single-minion clause likely disables extra minions from other sources — pending tooltip confirmation. **Pure ranged kiters** because the presence range requires the player to be near the enemy.

## Acquisition

The drop source hasn't been revealed by GGG. Based on the pattern of the previous 3 patches (0.2, 0.3, 0.4): a new league unique usually drops from:

1. **The league's Pinnacle boss** — the Auspex could drop from the Kalguuran Tomb pinnacle chain (Medved/Uhtred/Olroth/unrevealed)[^2] or one of the 5 reworked old-league pinnacles (Xesht, Kulemak, King in the Mists)[^2]
2. **A league mechanic reward** — dropping from a high-tier Ezomyte Remnant encounter, or a Verisium Anvil forge[^2]
3. **Random global** — the common unique pool, with an extremely low drop rate

The first-week price is expected to be **3-15 divine** based on the 0.4 build-enabling unique pattern (Storm Mage staff ~5d on day 7, Companion staff ~10d). After 2 weeks once the market settles, if the build is viable: stabilizing at ~5-8d. If the meta doesn't pick it up: ~1-3d.

This section will be updated after the patch notes drop on 2026-05-21[^3].

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mod values, base type, and level requirement not yet public.

## Related Items & Alternatives

- [Facebreaker](/mechanics/items/facebreaker) — unique gloves from the same patch, synergy with the Auspex via the Monk Martial Artist Stonefist build path.
- :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"} The Hollow Mask — a 0.4 chest unique with a minion mechanic (Minion Instability + chaos). The Auspex is an alternative for the body slot when a build wants minion utility rather than a raw damage trigger.
- :item-badge{name="Doryani's Prototype"} — a POE1 chest that shares the "negative defensive layer for an offensive trade" pattern. The Auspex follows the "chest layering up 4 power sources with a trade-off" trend POE2 is pushing.

---

## References

[^1]: GGG official YouTube — *"Path of Exile 2: New Unique Items - The Auspex and Facebreaker"* (2026-05-18). Presented by Mark Roberts. The Auspex segment 0:08-1:37 covers the Mist Raven minion, the dive command skill, the frenzy cull mechanic, the Gruelling Madness slow buff, and lucky deflect on low life. <https://www.youtube.com/watch?v=e2QZNDtJhoM>

[^2]: Patch overview compiled at [Return of the Ancients](/mechanics/return-of-the-ancients). Includes the Origins of Divinity endgame overhaul, the 5 old-league revamps, and the Atlas redesign.

[^3]: Game8 — *"0.5.0 Patch Notes Release Date | Path of Exile 2"* (2026-05-07). Confirms patch notes drop 2026-05-21, launch 2026-05-29. <https://game8.co/games/Path-of-Exile-2/archives/582194>

## Relationships

- **synergizes_with** [Facebreaker](/mechanics/items/facebreaker)
