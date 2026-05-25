---
template: templates/mechanic-template.md
document_type: mechanic
title: Armour Defensive Scaling
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
game: poe2
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - armour
  - defense
  - physical-damage-reduction
  - runes-of-aldur
  - buff
---

# Armour Defensive Scaling

:wiki-link{url="https://www.poe2wiki.net/wiki/Armour"} is the defence that provides physical damage reduction via the formula `DR = A / (A + 10 × D_raw)` with a 90% cap — the tooltip shows only one flat armour number, but the actual % reduction depends on the ratio between armour and the size of the hit, so two characters with the same 200k armour taking two differently-sized hits will reduce damage differently. Patch 0.5.0 "Runes of Aldur" increases the amount of armour items and modifiers grant at high level — about 33% more at level 65, tapering down to 15% more at level 80+ — while sweeping away nearly all of :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"}'s recovery layers (see [Energy Shield Recovery Rework](/mechanics/energy-shield-recovery-rework)). The chassis that uses armour as primary defence is the Warrior/Titan stacker — a class that already has strength scaling and armour notables — but because the base scaling raised the floor, any class with one small armour synergy can now tank normal physical hits at tier 15-16 without a specialized build. The league launches 29/05/2026, so defence layer decisions have to be locked this week: the ES recovery nerf pushes many old ES-primary builds to pivot, and armour is the most obvious destination for physical mitigation.

## How It Works

Armour in POE2 isn't a flat % reduction like resistance. It runs through the formula `DR(A, D_raw) = A / (A + 10 × D_raw)`, where `A` is armour rating and `D_raw` is the raw physical damage of the hit before mitigation. The core consequence: the same armour pool reduces more damage when the hit is small, less when the hit is large. A character with 200,000 armour taking a 5,000 physical hit gets `DR = 200000 / (200000 + 10×5000) = 200000 / 250000 = 80%` — taking only 1,000. That same armour against a 15,000 hit (boss slam style) gets `DR = 200000 / (200000 + 150000) = 57.1%` — taking 6,430. This is why armour is strong for farming map clear (hundreds of small hits from monster packs) but weak against a single burst from a boss.

Patch 0.5 increases the amount of armour items/modifiers grant by level. At level 65 a character has about 33% more armour than the same gear pre-0.5, with the more value tapering down to 15% at level 80+. This is a baseline scaling lift, not a new "increased Armour" line — the base armour of existing items is automatically adjusted on patch login, while armour modifiers on existing items can be updated to the new value with a :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}. Applying the 15% figure to the example above: a 200,000 armour endgame stacker goes up to 230,000. Against a 5,000 hit, `DR = 230000 / 280000 = 82.1%` instead of 80% — taking 893 instead of 1,000, i.e. ~10.7% less damage from that class of hit. Against a small 1,000 hit, `DR = 230000 / 240000 = 95.8%` gets capped down to 90% — the small hit is nearly erased.

The important thing is that this buff lowers the armour threshold needed to reach a given DR mark. To hit 90% DR (reaching the cap) against a 5,000 hit requires `A / (A + 50000) = 0.9 → A = 450,000` armour. Pre-0.5 you had to roll extremely tight gear to reach it; the +15% scaling pulls the item-side threshold down, meaning the same gear set now gets closer to the cap without changing the base or adding a slot. The floor is raised, the ceiling also shifts — but as the Math Chain section shows, some top-end multipliers were pulled back in the same patch, so extreme stackers don't get the naive 15%.

## Math Chain

The deciding chain isn't total armour but DR after the formula — total armour is just the additive bucket `base × (1 + Σ increased Armour)`, which then feeds into `DR = A / (A + 10 × D_raw)`. Comparing pre vs post buff for an endgame stacker (level 90+, using the 15% more at level 80+):

- Armour rating pre-0.5 (fixed gear, illustrative) — 200,000
- Item scaling buff patch 0.5.0 (line 494, +15% at lvl 80+) — ×1.15 → **230,000 armour**

DR against a 5,000 physical hit:
- Pre-0.5 — `200000 / (200000 + 50000)` = **80.0%** (takes 1,000)
- Post-0.5 — `230000 / (230000 + 50000)` = **82.1%** (takes 893)

DR against a 15,000 physical hit (boss-tier):
- Pre-0.5 — `200000 / (200000 + 150000)` = **57.1%** (takes 6,430)
- Post-0.5 — `230000 / (230000 + 150000)` = **60.5%** (takes 5,921)

The buff gives ~2 points of DR on small hits and ~3.4 points on large hits — sounds small on paper, but because damage-taken is `(1 − DR)`, going from 80% to 82.1% cuts 10.5% of damage taken, from 57.1% to 60.5% cuts 7.9%. This lift stacks with every other defence layer, so the marginal value is greater than the raw DR number.

But the top-end multiplier is squeezed in the opposite direction. :wiki-link{url="https://www.poe2wiki.net/wiki/Brass_Dome"} — the flagship body armour for armour stackers — now has 500-600% increased Armour, down from 700-800% (line 459), and the existing version can be made worse with a Divine Orb. A pre-0.5 stacker relying on Brass Dome's 800% loses up to 200% increased in the additive bucket. With a body base armour of 1,000 and an assumed +400% increased from tree/gear in the other bucket, the bucket formula gives: pre-0.5 `1000 × (1 + 8.0 + 4.0)` = 13,000 vs post-0.5 `1000 × (1 + 6.0 + 4.0)` = 11,000 — a ~15% reduction in the body armour contribution, nearly canceling out the exact +15% item scaling buff for a stacker running Brass Dome. **Net for an extreme Brass Dome stacker ≈ wash; net for a build using rare armour or buffed uniques (see Key Interactions) ≈ clearly positive.**

## Key Interactions

The armour buff doesn't stand alone — it's one half of the 0.5 defence rebalance, and has to be read alongside three things: the parallel Evasion buff, the ES recovery nerf, and the new Runic Ward.

:wiki-link{url="https://www.poe2wiki.net/wiki/Evasion"} gets a buff at the same level as armour: +33% at level 65, tapering to +15% at level 80+ (line 495). More importantly, the Deflect formula was fixed to scale linearly with Deflection Rating: `chance to Deflect = 150 × (1 − A/(A + 0.12×D))` where A is the attacker's accuracy, D is the defender's deflection rating, capped at 95% (line 248-249). This linear curve rewards more at high investment, meaning the Evasion stacker now reaches near 95% deflect more feasibly than pre-0.5. To make the verdict precise rather than superficial: armour wins on consistency — flat physical mitigation on every hit, no luck dependency; evasion wins on a clean formula and a high avoidance ceiling, but it's still a binary roll (avoid or take full). "Best defensive layer" is correct in the sense that armour is the easiest layer to scale for physical-heavy content, not that armour beats every layer on every axis.

A whole batch of unique armours got buffed directly, raising the value for builds that don't run Brass Dome. :wiki-link{url="https://www.poe2wiki.net/wiki/Keeper_of_the_Arc"} helmet is now 240-340% increased Armour and Energy Shield (was 150-250%, line 469) — existing items can be updated with a Divine. :wiki-link{url="https://www.poe2wiki.net/wiki/Sine_Aequo"} gloves are now 150-200% increased Armour, Evasion and Energy Shield (was 100-150%, line 478). :wiki-link{url="https://www.poe2wiki.net/wiki/Ab_Aeterno"} boots are now 200-250% AEE (was 100-150%, line 453). :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Acuity"} gloves got reworked, now granting 150-200% increased Armour + 100-150 max Life + leech. These items cover the loss from Brass Dome, and open armour-stacking beyond the body slot.

:wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} is the new backup layer sitting behind armour. It activates when life drops to 1, absorbing damage instead of life and recovering independently of life (line 22). Add Runic Ward to armour via :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} (unlocked Act 1): armour below level 55 gets Runic Ward for free, armour above that threshold trades off part of its normal defence (line 21). This pair complements each other — armour reduces the incoming physical hit, Runic Ward pops when life reaches critical, giving the stacker a second wall that old ES builds used to have via recharge but is now nerfed.

### Wording distinction — "Defences" vs "Armour, Evasion and Energy Shield"

- The keyword **"Defences"** is no longer used (line 245). Everywhere that previously read "Defences" now spells out "Armour, Evasion and Energy Shield".
- Consequence: an old "increased Defences" modifier now applies to exactly those three things Armour/Evasion/ES — and **not** to :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"}, Resistance, or Block.
- This is purely descriptive, doesn't change the math, but forces build planning to re-read the scope of each modifier: don't assume an old "increased Defences" line buffs the Runic Ward pool — it doesn't.

## Optimization

The first priority is picking the right base and uniques to take advantage of both the +15% scaling and the buffed uniques. For body armour, consider :wiki-link{url="https://www.poe2wiki.net/wiki/Brass_Dome"} only if the build is genuinely an extreme stacker accepting a net wash with the buff — otherwise, a rare body armour with multiple increased-armour rolls now eats the full +15% item scaling without losing the top-end multiplier. The helmet :wiki-link{url="https://www.poe2wiki.net/wiki/Keeper_of_the_Arc"} and gloves :wiki-link{url="https://www.poe2wiki.net/wiki/Sine_Aequo"} are two unique slots worth considering since both just had their values raised, and existing items can be Divine-updated to the new numbers.

Second, understand that armour scales best against many small hits, so armour investment has to come with a layer for big bursts. Because `DR = A/(A+10×D_raw)` gives low reduction against an extremely large hit, a character that only stacks armour still takes heavy damage from a boss slam. Pair armour with :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} (via Verisium Runeforging from Act 1) as a 1-life backup, and/or Block for an avoidance layer against big hits. Verisium Runeforging is a tier 1 priority craft: rune Runic Ward into every armour slot below level 55 since that stage gets it free.

Third, use Stone Rune to lock down stun. :wiki-link{url="https://www.poe2wiki.net/wiki/Stone_Rune"} socketed into armour now grants +50/75/100 to Stun Threshold (was +40/60/80, line 518). An armour build already has high strength and stun threshold scaling off life/pool, so adding Stone Rune pushes the stun threshold high enough to rarely take a heavy stun in combat — a side advantage that ES builds struggle to get.

## Interactions with Other Content

A map mod that increases physical damage or adds extra hits to monsters hits the armour build head-on, but in a good way: because armour mitigates physical hits well when the hit isn't too large, a "monsters deal extra physical damage" map usually stays within the range armour can carry. Conversely, a map mod that causes :wiki-link{url="https://www.poe2wiki.net/wiki/Armour_Break"} or reduces armour punctures this layer — when armour is broken to 0, the DR formula collapses and physical hits land nearly full. Armour-primary builds have to watch this kind of mod more than evasion/ES builds.

Boss encounters are armour's structural weakness. Pinnacle bosses have large slam wind-ups (raw physical 10,000-20,000+) that land in the formula's weak zone: 230k armour only reduces ~60% against a 15,000 hit. This isn't a gear failing but a property of the formula — armour isn't the layer to carry one-shots. Against bosses, rely on avoidance (Block, dodge roll) or an absolute pool + Runic Ward, don't expect armour to cut the burst.

Compared to [Energy Shield Recovery Rework](/mechanics/energy-shield-recovery-rework): same patch 0.5, ES had its recovery layers swept (compound recharge rate down ~52%, TTF up ~2.5-3x) while armour had its floor raised. This is why the balance tilts toward armour — not just that armour got absolutely stronger but that ES got relatively weaker in the primary tank role. ES still gives a large pool, but the "tank-by-recharge" pattern between boss hits is gone; armour provides continuous mitigation without needing a recovery cycle.

## What Doesn't Work

Armour never mitigates :wiki-link{url="https://www.poe2wiki.net/wiki/Damage_over_time"}. The formula only applies to hits; every physical DoT (bleed, ground physical) goes through armour. An armour-heavy build still needs a separate layer for DoT (max life pool, recovery, or additional physical damage reduction — that one cuts DoT too).

Armour by default only applies to physical damage. Elemental and chaos hits go through unless the build has a source to convert armour to another type, like :wiki-link{url="https://www.poe2wiki.net/wiki/Blackbraid"} or a Refraction support that lets part of the armour apply to elemental hits. Stacking 300k armour does nothing against a lightning bolt without conversion — this is a common mistake from thinking armour "tanks everything".

Armour doesn't save you from extremely large hits. Because `DR = A/(A+10×D_raw)`, a raw 30,000 hit against 230k armour is only reduced `230000/(230000+300000)` = 43.4% — taking ~17,000. There's no realistic amount of armour that turns a boss one-shot into something survivable; armour is the layer for sustained many hits, not burst.

The old "increased Defences" modifier (now "Armour, Evasion and Energy Shield") does **not** scale :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"}, Resistance, or Block. Don't expect an AEE line to buff the Runic Ward pool — you have to use a separate Runic Ward Rune from Remnant.

## Common Mistakes

**Wrong** — treating armour like a flat % reduction the way resistance works, assuming "X armour = Y% fixed reduction on every hit". **Right** — read DR by the formula dependent on hit size; the same armour gives high DR against small hits, low against large ones. **Reason** — the tooltip only shows one armour number, easy to misread. **Cost** — wrong build planning can overestimate survival against bosses by 30-40%, leading to a first death on a pinnacle slam.

**Wrong** — just stacking armour then charging into a boss believing this layer carries the burst. **Right** — pair armour with avoidance (Block/dodge) or an absolute pool + :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} for the burst moment. **Reason** — the formula gives low DR against a large raw hit. **Cost** — a 15,000 boss slam takes ~6,000 even with 230k armour; without a pool/backup it's death.

**Wrong** — porting the 0.4 Brass Dome assumption (700-800% increased) over to 0.5 and expecting total armour to stay the same + add 15%. **Right** — Brass Dome is now 500-600%, recalc the additive bucket; for an extreme stacker net ≈ wash, consider a rare body or buffed unique instead. **Reason** — the top-end multiplier was pulled back along with the baseline buff. **Cost** — losing ~15% body armour contribution if you keep running Brass Dome thinking you got +15%.

**Wrong** — skipping elemental mitigation because "I already have armour to tank". **Right** — armour is only physical; the build still needs capped resistances and a layer for elemental hits. **Reason** — armour by default doesn't apply to elemental. **Cost** — instant death to an elemental burst despite a massive armour pool.

## Cost & Restrictions

- **Strength + base requirement** — Armour stacking requires high base armour (mostly strength-based gear) and many sources of increased Armour. Restriction — a class without strength scaling or armour notables has to invest heavily in tree/gear to reach the floor; the natural chassis is Warrior/Titan.
- **Brass Dome nerf** — 500-600% increased Armour (from 700-800%, line 459), the existing version can be made worse with Divine. Cost — an extreme stacker relying on Brass Dome loses up to 200% increased in the bucket; consider re-crafting to a rare body or another unique.
- **Elemental gap** — Armour doesn't apply to elemental/chaos unless there's conversion (Blackbraid/Refraction). Cost — an armour-only build has to dump separate currency into capped resistances + an elemental mitigation layer, not saving slots as you'd think.
- **Hit-size dependency** — To reach 90% DR against a 5,000 hit needs ~450,000 armour; against a 15,000 hit needs ~1,350,000 armour to hit the cap. Restriction — defending against large bursts requires armour far beyond realistic thresholds, forcing you to pair other layers.
- **Verisium Runeforging trade-off** — Armour level 55+ runing Runic Ward trades off part of the normal base defence (line 21). Cost — not free like armour below 55; calculate the amount of Runic Ward gained vs defence lost per build.

## Verdict & Open Questions

- **Verdict — BUFF, HIGH confidence.** Patch note 0.5.0 literal: the amount of armour items/modifiers grant increases +33% at lvl 65 → +15% at lvl 80+ (line 494). Parallel Evasion buff at the same level + linear deflect formula capped at 95% (line 248-249, 495). ES recovery layers swept 50-70% (see ES rework doc). The defence balance tilts clearly toward armour/evasion for physical-heavy content.
- **Nuance — net isn't uniform.** Builds using rare armour or buffed uniques (Keeper of the Arc, Sine Aequo, Ab Aeterno) eat the full buff; extreme stackers relying on Brass Dome (700-800→500-600%) are nearly a wash since the top-end multiplier was pulled back.
- **Armour isn't an all-rounder** — only physical, weak against large bursts by the formula, doesn't touch DoT. "Best defensive layer" is correct in the sense of being the easiest to scale for sustained physical, not beating every layer on every axis.
- **Open question — is the 90% cap still intact in 0.5?** The formula and 90% cap come from the wiki mirror (poe2wiki.net), patch note 0.5.0 doesn't mention changing the cap. The wiki can lag the patch — need a wiki diff after league launch to confirm the cap hasn't changed. Confidence MEDIUM on the cap number.
- **Open question — actual endgame survival lift.** Compound math gives ~2-3.4 points of DR, but it needs the PoB2 0.5 release + a char tested in endgame T15+ to confirm the actual TTK/survival and the net for an extreme stacker. Verify window: 2026-06-01 → 2026-06-08.
- **Open question — Runic Ward + armour stacker live behavior.** The armour + Runic Ward pair hasn't been tested in-game; need to log Runic Ward uptime and pop behavior against boss bursts when the league goes live.

## Patch Evolution

### Patch 0.5.0 — Runes of Aldur (21/05/2026 patch note, 29/05/2026 launch)

The amount of armour granted by items and modifiers increases by level — ~33% more at level 65, tapering to 15% more at level 80+; the base armour of existing items auto-adjusts on login, armour modifiers can be Divine-updated. Evasion gets a parallel buff at the same level, plus a fix to the Deflect formula to linear `150×(1−A/(A+0.12×D))` capped at 95%. A batch of unique armours had their values raised: Keeper of the Arc 150-250→240-340% AES, Sine Aequo 100-150→150-200% AEE, Ab Aeterno 100-150→200-250% AEE, Atziri's Acuity reworked to 150-200% armour + life + leech. In the opposite direction, Brass Dome was cut 700-800→500-600% increased Armour. Runic Ward debuts as a 1-life backup defence layer via Verisium Runeforging, alongside 15+ Runic Ward Runes craftable from Remnant. The keyword "Defences" is deprecated, spelled out as "Armour, Evasion and Energy Shield" — clarifying the scope doesn't include Runic Ward/Resistance/Block. Stone Rune on armour buffed stun threshold +40/60/80 → +50/75/100. Fixed the description of the Heavy Armour notable.

### Patch 0.4.0 — Previous baseline

The amount of armour items/modifiers grant at high level is below the 0.5 baseline. Brass Dome grants 700-800% increased Armour — the flagship for extreme stackers relying on the top-end multiplier. The Deflect formula doesn't yet scale linearly, high Deflection Rating investment rewards less. ES recovery layers are at full strength (compound recharge ~3.3x base, the tank-by-recharge pattern viable), so ES still competes with armour in the primary tank role. No Runic Ward yet — the defence layers are only Armour/Evasion/ES/Block/Resistance.

## Relationships

- **related_mechanics** [Energy Shield Recovery Rework](/mechanics/energy-shield-recovery-rework) — the other half of the 0.5 defence rebalance; ES recovery is nerfed while armour has its floor raised, the two docs read together for the full picture of the defence layer balance.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — the armour scaling buff, Runic Ward, and Verisium Runeforging all belong to patch 0.5.0 Return of the Ancients; the armour portion of the Endgame overhaul is dissected here.
