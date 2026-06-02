---
template: templates/mechanic-template.md
document_type: mechanic
title: Twister — Spear Wind Projectile Skill
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-20'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - twister
  - whirling-slash
  - spear
  - projectile
  - wind
  - huntress
  - spirit-walker
  - poe2
  - mechanic
---

# Twister — Spear Wind Projectile Skill

:wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} is a spear attack skill tagged Wind + Projectile + AoE + Duration in POE2 patch 0.5, dropping at Tier 1 so it's usable from Act 1. The skill doesn't run on its own — it's the second half of a two-stage combo, the first half being :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} (which spawns a Whirlwind); Twister arrives and **consumes the Whirlwind** to multiply both the projectile count and the damage multiplier. Two wiki lines decide real damage and most guides skip them: the hidden 0.66s same-target throttle cap, and the difference between "Gain" and "Convert" in the elemental ground line.

## How It Works

Twister spawns a tornado that moves forward erratically (random wobble), blinds enemies around it, and **pierces all targets** (per the gem text — always pierces, no support needed). Base attack damage scales with gem level from 80%→232% (lv 1→20), cast time = 80% of base attack speed. The tornado lasts 3 seconds with a radius of 0.5 metres, bouncing around terrain if it hits a wall — this is why the build clears corridor maps extremely well (the tornado ping-pongs in a narrow hallway) but is weak in an open arena (the tornado dissipates before it bounces back).

The Whirlwind consume mechanic is the main damage multiplier:

> Consumes Whirlwinds to create an additional twister and deal 80% more damage per Whirlwind stage

Whirling Slash spawns a Whirlwind with a max of 3 stages (each successive spin pushes the stage up by 1). When Twister touches a 3-stage Whirlwind, the consume happens: it spawns 3 additional twisters (each twister gets +1 additional twister per stage), and each twister gains 80% more damage per stage. So 1 base twister + 3 consumed twisters = 4 twisters total, with the damage multiplier compounding:

- Twister 1 (base, no consume): 1× base damage
- Twister 2 (consume stage 1): 1.80× base damage
- Twister 3 (consume stage 2): 1.80² = 3.24× base damage
- Twister 4 (consume stage 3): 1.80³ = 5.83× base damage
- Sum: ~10.95× base damage across all 4 twisters per cast

This is the endgame upper bound when Whirling Slash reaches rank 3 before each Twister cast. In the Act 1 campaign you don't yet have the rank-up infrastructure (Rage Support + Rapid Attacks), so Whirling Slash usually only reaches stage 1-2 → the multiplier is only ~2.8-6.04×.

The second layer is **elemental ground synthesis**:

> Passing over Elemental Ground Surfaces or Consuming an elemental Whirlwind will grant twisters extra damage of that element.
> Elemental twisters Gain 50% of damage as damage of the corresponding Type

Read the word **Gain** carefully — this is added damage, not convert. Convert would subtract physical damage first then add cold; Gain leaves physical intact then adds cold separately. So on Chilled Ground, Twister damage = 100% physical (intact) + 50% cold (added) = effectively 150% per twister, not "converted to cold". This distinction decides the passive tree path: physical damage passives still scale the full 100% on base, cold passives scale the 50% added portion. Stacking both layers is better than dumping everything into cold-only.

Endgame math chain compounding the full setup (gem level 20 + 3-stage consume + Chilled Ground):

base_per_hit = spear_DPS × 232% × 1.5 (Chilled Ground gain) = spear_DPS × 3.48

per_cast_damage = base_per_hit × (1 + 1.80 + 3.24 + 5.83) = base_per_hit × 11.87 = spear_DPS × 41.3

Example: an endgame T2-T3 spear with flat physical 300 base DPS → each Twister cast deals ~12,400 raw damage before crit / accuracy / resistance. After ~66% crit chance with a 234% crit damage bonus, the average damage multiplier is ~2.54× → effective ~31,500/cast. Cast rate 0.8/s → a solo Twister channel is ~25,200 DPS before Salvo proj count, frenzy stacks, or ascendancy owl feathers. After full owl feather empower + Salvo +6 proj (clear context) → clear DPS ~280k. Vs a single-target boss with the Salvo random-direction discount → ~80-120k DPS. This is a realistic post-correction estimate, not the "500k S-tier T17" that many build docs claim.

## Key Interactions

**Twister × Whirling Slash (engine pair)** — the hidden gotcha is that Twister consumes the **Whirlwind aura standing on the ground**, not the moment the skill is used. Whirling Slash spawns a Whirlwind with a duration; if you cast Twister BEFORE Whirling Slash → no Whirlwind exists → no consume → base damage only. The correct sequence: spin Whirling Slash 3 times (rank up via Rage / Rapid Attacks support), the Whirlwind stands at 3-stage on the ground, THEN cast Twister. This is why the build feels clunky in Act 1 — without Rage support, each rank-up needs 3 manual spins, costing 1.5-2 seconds before each Twister cast.

**Twister × :wiki-link{url="https://www.poe2wiki.net/wiki/Salvo_Support"} (random direction trade-off)** — Salvo grants +2 projectiles per seal, max 3 seals = +6 projectiles at full stack (6 seconds to max). Builds usually call this the "backbone projectile count" — correct for clear, wrong for bosses. The Salvo gem text is clear:

> Projectiles from Supported Skills are fired in random directions

Implication: against a single-target boss, P(projectile aimed at the boss) ≈ angular_size_boss / 360° ≈ 8-15% for a typical boss. So Salvo +6 actually contributes 0.5-1.0 hits/cast onto a boss, not 6 hits. Boss DPS Salvo contribution is very different from clear DPS. The build's claim of "50-100 projectile boss damage" needs to be discounted ~70-90% vs the clear context.

**Twister × Spirit Walker owl feather (:wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Bounty"} + The Mhacha's Gift)** — Primal Bounty grants 1 owl feather per 4 seconds, max 3 feathers, dodge roll expends 1 → empower the next projectile skill. The Mhacha's Gift (a notable that enhances Primal Bounty) lets a dodge expend up to 3 feathers at once with 100% more empowerment per additional feather, and 50% faster feather rate (4s → 2.67s). The endgame cycle: 3 feathers × 2.67s = 8s per full stack, dodge expends all 3 → empowerment ×3 (linear compounding add). Owl feathers are a **DIRECT** scaler for Twister projectile count + speed — this is why Spirit Walker ascendancy is chosen over Deadeye for a Twister build.

Hidden gotcha: Mhacha's "Dodging can expend up to 3 Owl Feathers" — the dodge roll is the trigger, not the skill use. If the player doesn't keep a steady dodge cadence → feathers accumulate to the cap of 3 then STOP generating. A boss fight needs a dodge cadence matched to the feather cycle (~8s) to maintain a full empower window. A boss's telegraphed 10s pattern (Arbiter wave attack) fits this cycle naturally.

**Twister × Chilled Ground generation** — Twister gains 50% added cold damage ON Chilled Ground, so the build needs a reliable Chilled Ground generator. Many build docs claim :wiki-link{url="https://www.poe2wiki.net/wiki/Wake_of_Destruction"} unique boots — this is misguided. The Wake of Destruction text:

> Drop Shocked Ground while moving, lasting 8 seconds

Shocked Ground (lightning ailment), not Chilled Ground. Standing on Shocked Ground → Twister gains +50% lightning damage, useless for a cold scaling build. The right direction: :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} (a spear attack that spawns Chilled Ground when consuming a Parried Debuff — early campaign), or the Frost Nexus support gem chaining freeze → spawning Chilled Ground after the ailment. Drop Wake of Destruction from the gear plan.

**Twister × Ice-Tipped Arrows (ice fragment engine)** — when Ice-Tipped Arrows empower Barrage (or a projectile spear attack) and then fire Twister, each Twister hit on an enemy drops Ice Fragments on the ground. These ice shards explode dealing cold damage + shatter potential, especially strong combined with :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} (a chain of explosions when monsters are frozen). This is why clear improves a lot after the Act 2 pivot — Twister isn't just a wind projectile but also a source triggering mass ice explosions. Playtesting shows that even without actively creating Chilled Ground, the fragments from Twister hits still create a strong chain effect.

## Hidden Cap — Same-Target Throttle 0.66s

A wiki line most build guides miss, but it breaks the thesis of "stack infinite projectiles = infinite boss DPS":

> Twisters fired at the same time can Hit the same target no more than once every 0.66 seconds.

Implication math: with a cast rate of 0.8/s (cast time ~1.25s), each cast spawns 10-15 twisters (Salvo +6 full stack + 3-stage consume + owl feather +6). Vs a boss, the 0.66s throttle = 1.515 hits/second max per twister batch. Effective hit rate = min(cast_rate, throttle_rate) × P(proj aimed at boss) ≈ 0.8 × 0.10 = 0.08 boss hits/s per twister, multiplied by 15 twisters = 1.2 boss hits/s.

Twister damage per boss hit (endgame Chilled Ground, no crit): ~12,400 raw → boss DPS Twister floor ~14.8k. After crit (×2.54), Wrath aura, Frenzy charges, Power Charge stacks, the curse Critical Weakness → realistic endgame boss DPS for the Twister channel ~80-150k. Not 500k+ like the viral build claims.

Counter-argument: the cap text says "fired at the **same time**". If the Barrage skill splits projectiles into discrete waves (each wave firing 0.1s after the previous), the throttle might reset per wave (different twister-ID across waves). This needs to be tested live in-game and in-PoB to confirm. This is the most important devil's advocate counter — there's no patch 0.5 launch data yet to verify (wiki snapshot 2026-05-18, patch drops 29 May 2026).

## Common Mistakes

**Mistake 1: Putting Whirling Slash at a high level in endgame.** Correct: keep Whirling Slash at **level 1** in endgame. Reason: Whirling Slash only acts as the engine that spawns the Whirlwind for Twister to consume, it doesn't scale real damage. A high level only increases mana cost + cast time + irrelevant tooltip damage.

**Mistake 2: Casting Twister before Whirling Slash in the rotation.** Correct: spin Whirling Slash 3 times (rank 3 Whirlwind) → cast Twister → consume → 4 twisters with compounding damage. Reason: Twister consumes the **existing Whirlwind aura** on the ground, it doesn't spawn the Whirlwind itself. Casting it first = no consume = base damage only.

**Mistake 3: Stacking projectile count so boss DPS scales linearly.** Correct: stack projectiles for clear, scale projectile **speed** + **damage per twister** for bosses. Reason: Salvo fires in random directions (boss DPS discount ~70-90%) + the 0.66s throttle cap (limits hit rate per twister). Real boss damage comes from the multiplier ascendancy + crit + curse, not from count.

**Mistake 4: Using Wake of Destruction to spawn Chilled Ground.** Correct: Wake of Destruction spawns Shocked Ground (lightning), not Chilled. Use Fangs of Frost (Act 1) or the Frost Nexus support gem chaining freeze. Reason: Twister gains an element based on the ground type — Shocked Ground → lightning gain (useless for a cold build), Chilled Ground → cold gain.

**Mistake 5: Dropping the build because Act 1 feels clunky.** Correct: stick with the combo timing until the Act 2 pivot to Ice-Tipped Arrows + Combat Frenzy. Reason: Act 1 has no rank-up infrastructure (Rage Support, Rapid Attacks), manual spinning costs 1.5-2s per Twister cast — feels slow. The Act 2 pivot turns a clumsy 5-button combo into a smooth 3-button rotation.

## What Doesn't Work

Twister **doesn't scale with attack speed** for damage purposes — attack speed only reduces the cast time tooltip, it doesn't increase damage per cast. This is why weapon set 1 (Twister damage) prioritizes flat physical + flat cold + crit, while weapon set 2 (Whirling Slash engine) prioritizes attack speed.

Twister **doesn't trigger ailments via Hit** on the elemental ground gain — the 50% added element portion is Gain (added damage), it doesn't create a separate ailment opportunity. So Twister on Chilled Ground doesn't reliably freeze enemies via the 50% cold layer; you need freeze build-up from another source (Freezing Mark curse, Frostbolt support, Ice Crash combo).

Twister **doesn't synergize with attack speed support for damage** — Marshall Tempo / Rapid Attacks don't scale Twister damage, they only scale Whirling Slash. This is why the support gems are split: damage supports on the Twister socket (Acceleration, Persistence, Retreat), attack speed supports on the Whirling Slash socket (Rapid Attacks, Marshall Tempo, Pursuit).

Twister **doesn't scale from "Gain X% of Damage as extra Y" modifiers** on the specific elemental gain layer — this modifier class applies on the base hit, it doesn't double-dip with gain-as-element. Implication: avoid Xoph's Pyre or similar gain-as-extra uniques for the purpose of multiplying Twister's elemental gain.

## Summary

- Twister = a projectile spell tagged Spear + Wind + AoE, base damage 80%-232% scaling with gem level. Endgame only relevant when Whirling Slash spawns a 3-stage Whirlwind before each cast.
- Consume mechanic: 1 base + 3 added twisters, compounding multiplier (1.80)³ = 5.83× for the last twister. Total 11.87× base damage per full-stack cast.
- "Gain 50% as element" on Chilled Ground is **added damage** (Gain), not convert. Physical scaling still 100% on base.
- The hidden 0.66s same-target throttle cap locks boss DPS — stack projectile count for clear, not for bosses. Boss DPS scales via damage per twister + crit + curse, not via count.
- Spirit Walker owl feathers (Primal Bounty + The Mhacha's Gift) are a direct projectile count + speed scaler for Twister, on an 8s cycle per full empowerment via dodge roll. A dodge cadence matched to boss telegraphs fits the feather cycle naturally.

## Version History

### Patch 0.5.0 (2026-05-29 — pre-launch, wiki snapshot 2026-05-18)

- The Twister `Wind` tag was added in 0.4.0 — synergizing with the Spirit Walker class (multiple notables interact with the Wind tag).
- The Spirit Walker ascendancy is new, featuring the "Stormbringer" build in the reveal trailer — confirms it's endgame viable.
- Combat Frenzy has been nerfed 3 patches in a row (0.1.0e 3s → 7s, 0.2.0 2.48s → 5.3s, 0.3.0 5.3s → 7.3s). The nerf trend will likely continue in patch 0.5/0.6 — builds dependent on Combat Frenzy for frenzy charges to feed Barrage are not safe.
- **2026-05-20 update:** Added the Twister × Ice-Tipped Arrows interaction (Twister hits drop Ice Fragments causing a chain explosion with Herald of Ice) from a Lolcohol playtest video. Confirmed the large-arena problem (twister dissipates) and the Spirit Walker owl feather fix.

### Patch 0.3.0

- Twister damage buffed 72-190% → 80-232% base (the current endgame scaling).

### Patch 0.2.0b

- Hotfix for the "extra 50% per projectile" bug — the element gain used to be 50% per proj, now it's only once per cast.

### Patch 0.2.0

- Twister introduced. Whirling Slash introduced.

## Relationships

- **used_by** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — A build using Twister as its primary damage skill — the entire DPS chain depends on the Whirlwind consume engine + Spirit Walker owl feather scaling
