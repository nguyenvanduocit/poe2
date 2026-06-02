---
template: templates/build-template.md
document_type: build
title: Twister Huntress — Ice-Tipped Arrow Starter
status: review
author: duocnv
created: '2026-05-19'
updated: '2026-05-25'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
build_tags:
  primary_skill: Twister
  damage_type: cold
  playstyle: ranged
  content_focus: all-content
tags:
  - twister
  - huntress
  - spirit-walker
  - ice-tipped-arrow
  - 0-5
  - starter
  - leveling
  - poe2
---

# Twister Huntress — Ice-Tipped Arrow Starter

A league-start build for Runes of Aldur, using :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} as the wind-spin engine and :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} as the main damage source. Spirit Walker — the new ascendancy introduced in patch 0.5 — provides owl feathers to push projectile count and projectile speed up at the same time, which fits how Twister scales. The post-patch-notes consensus from creators (SiahZ, GuyThatDies, SnooBAE85, Lolcohol) all rank the build as an S-tier league starter for 0.5, with GuyThatDies calling it "strongest league starter I've ever seen in Path of Exile 2". A fit for players who like fast corridor-map clear + narrow-arena bossing; not a fit for those who want to hard facetank or solo Arbiter in the first week.

## Build Overview

The loop has two layers. Layer 1 is Whirling Slash: spin the spear three times in a row to spawn a stationary Whirlwind on the ground, max 3 stages. Each spin adds 1 stage, each stage increases the radius by +0.3m and pushes the collapse damage multiplier higher. Layer 2 is Twister: fire a tornado that flies erratically through the Whirlwind, and each stage consumed creates an extra tornado and gives each tornado +80% more damage. When the Whirlwind reaches rank 3 before casting, a single Twister cast produces 4 tornadoes total with a compound multiplier: `1 + 1.80 + 1.80² + 1.80³ ≈ 10.95×` base damage. That's why timing matters so much — firing Twister before the Whirlwind reaches stage 3 loses most of the damage.

The third damage layer comes from ground synthesis. When Twister flies over Chilled Ground, each tornado **gains** an extra 50% as cold damage (this is added damage, not conversion — the physical scaling at 100% stays intact, the cold scaling is an additive layer). This is why the build both stacks physical on the weapon and needs reliable Chilled Ground. Defense relies on evasion + Wind Dancer + freeze uptime; the main mobility is the dodge roll (which is also the trigger for Spirit Walker's owl feather) plus Pounce — patch 0.5 bumped Pounce's cooldown to 6-5.1s from 4.9-4s at gem level 3-20, so the mobility cooldown is noticeably slower than pre-patch and you need to plan dodge cadence more carefully.

## Skill Gems & Links

**Main Skill:** Twister + :wiki-link{url="https://www.poe2wiki.net/wiki/Salvo_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Projectile_Acceleration_III"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Persistence_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Retreat_Support"}

Salvo in 0.5 completely reworked how it grants seals. The new version: 1 seal per second, max 6 seals, 1 projectile per seal — the cap is still +6 projectiles like before, but the ramp is more granular (+1 each second) and it drops the restriction "can't earn seals while casting". The net effect is that after spinning Whirling Slash 3 times (~1.5-2 seconds), the first Twister cast already has 2-3 seals ready instead of 0-1 like pre-patch, smoothing out the clear loop. Projectile Acceleration **tier III** is the critical pick — not just for the 40% more projectile speed, but for the line "increases and reductions to Projectile speed also apply to Projectile Damage with Supported Skills". Pair it with Primal Bounty's owl feather (pushing projectile speed to ~200%) and that same buff is applied straight to damage — turning projectile speed into a compound damage multiplier, not just utility. Persistence extends the tornado duration (3s base), the longer it lasts the more chance it has to hit the boss again past the hidden 0.66s same-target throttle. Retreat rewards 20-30% more projectile damage if you've attacked in melee within the last 2-8s, almost always active because Whirling Slash triggers right before Twister.

**Engine Skill:** Whirling Slash + :wiki-link{url="https://www.poe2wiki.net/wiki/Rage_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Attacks_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Marshall_Tempo_Support"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Pursuit_Support"}

Whirling Slash stays at level 1 in the endgame — this skill only acts as an engine spawning Whirlwind for Twister to consume, it doesn't scale real damage. A high level only raises the tooltip damage (irrelevant since collapse damage isn't the main damage source) and inflates the mana cost. All four supports serve one goal: spin faster to reach stage 3 sooner before each Twister cast. Rage Support grants +1 rage stage per spin, Rapid Attacks reduces attack time, Marshall Tempo grants conditional attack speed, Pursuit grants compound movement speed.

**Act 2 Pivot:** :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Barrage"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Nexus"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Focus"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Combat_Frenzy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Charged_Mark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Frostbolt"} + Ferocious Roar

Ice-Tipped Arrows is the pivot that turns Act 1's clunky 5-button rotation into a smooth 3-button combo. This skill empowers the next 4 Barrageable spear attacks, converts 100% physical damage to cold and drops an Ice Fragment on each hit — the Fragment self-detonates dealing wide-area cold damage. The cooldown is 12s but can be bypassed by expending 1 Frenzy charge, so Combat Frenzy plays the role of charge generator (creating frenzy charges when freezing enemies) and Barrage triggers Ice-Tipped repeatedly. Frost Nexus is the first tier-2 support you need to unlock at Act 2 — chain freeze + spawn Chilled Ground after an ailment, fixing the need for a reliable Chilled Ground generator for Twister to gain its 50% cold layer. Elemental Focus on Ice-Tipped Arrows is counter-intuitive but correct: it prevents the Ice Fragment from self-freezing the enemy (because freeze blocks extra fragment hits on the same target), while also granting 25% more elemental damage — a double win. Freezing Mark is applied to the target to guarantee a freeze; pair it with Charged Mark Support so the mark simultaneously spawns Shocked Ground (replacing the Wake of Destruction unique). Pounce is still used to close in + place the mark in one input. Frostbolt stays at a low level, used as a backup Chilled Ground generator.

**Spirit Gems:** Wind Dancer + :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"}

Wind Dancer is the main defensive layer — it grants an evasion buff that escalates while you haven't been hit recently. Herald of Ice triggers a chain explosion when a monster is shattered, combined with the Ice Fragment from Ice-Tipped + the freeze from Twister's cold layer creating an extremely satisfying clear loop. Patch 0.5 didn't touch Herald of Ice.

**Early Campaign Utility:** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} + Pounce

Parry in 0.5 got cropped — its area of effect was changed to match the animation, losing its Attack Distance bonus entirely. Act 1 uses Parry to consume the Parried Debuff with Fangs of Frost to spawn Chilled Ground, but the shorter range than pre-patch makes the combo feel more cramped — this is why you should rush Act 2 as fast as possible to pivot to Ice-Tipped Arrows.

**Offhand:** :wiki-link{url="https://www.poe2wiki.net/wiki/Malice_Scepter"}

Malice Scepter grants spirit + applies Critical Weakness to enemies in its presence, forcing crit chance up a significant amount without investing in the passive tree. This is the cheapest scepter that very rarely comes with an effect this strong.

## Ascendancy

Spirit Walker officially launched in 0.5.0 after three months of being just a dev tease, and is the main pick for this build. Deadeye is still a good choice if you like automatic Tailwind and stable frenzy charges, but Spirit Walker wins on 3 points: projectile count directly via owl feather, projectile speed directly via the Mhacha's Gift enhancement, and a layer of companion damage where the bear/stag clean up secondary mobs — turning the build from pure single-source into multi-source clear.

**Lab 1: :wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Bounty"}**

Primal Bounty grants 1 owl feather every 4 seconds, max 3 feathers. Each dodge roll expends 1 feather to empower the next projectile skill — granting extra projectiles and projectile speed. Once you have Mhacha's Gift + enough projectile passive support on the tree, a fully-scaled Primal Bounty creates ~6 additional projectiles + ~200% increased projectile speed for the next empowered skill, refreshing every 9 seconds. This is the foundational node of Spirit Walker for Twister, because it directly scales both stats that decide clear DPS (count + speed) in the same trigger — and when paired with Projectile Acceleration III, projectile speed converts into a compound damage multiplier.

**Lab 2: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Mhacha%27s_Gift"}**

Mhacha's Gift lets a single dodge roll expend up to 3 owl feathers at once, each feather adding 100% more empowerment effect compounding — and increases the feather generation rate by 50% (cycle 4s → 2.67s). For Twister, this is the strongest burst window: wait to stack 3 feathers (~8s) → dodge roll before casting Twister → tornadoes spawn with projectile count + speed buff ×3. It matches the boss's ~10s telegraph pattern naturally (Arbiter wave attack), so the dodge cadence matches the feather cycle without extra thinking.

**Lab 3: :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Vivid_Stampede"}**

These two notables aren't the main damage source for Twister, but you have to take them to open Sacred Unity at Lab 4. Wild Protector summons a bear companion to help hit additional targets, while also granting 2% maximum life regen per second and redirecting 8% of damage taken to the bear — this is a significant secondary defensive layer, especially for an evasion build lacking hard mitigation. Vivid Stampede creates a stag spirit when you move 20m and then attack — pairs well with the Twister playstyle since the player is always moving between monster packs.

**Lab 4: :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Unity"}**

Sacred Unity is the reward once you've taken Wild Protector, Primal Bounty, and Vivid Stampede. For Twister, the most valuable part is that the central projectile of an owl-feather-empowered skill leaves Soaring Ground — a new 0.5 ground effect granting 40% increased damage and 30% increased evasion while standing on it at full life. The bear gains Embrace of the Wild (an extra defensive buff), the stag learns to leap into enemies instead of running randomly. Overall Lab 4 both increases Twister's damage directly (the Soaring Ground 40% damage layer) and adds a conditional evasion buff — not just utility as initially assessed.

**Nodes to skip**

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} is strong if you build towards companion damage (60% main hand damage for the bear/stag), but that's an entirely different build. :wiki-link{url="https://www.poe2wiki.net/wiki/The_M%C3%B3rrigan%27s_Guidance"} buffs the stag to scale shock damage — doesn't fit cold scaling. Idolatry requires socketing all idols, dropping all gear flexibility entirely. The Natural Order opens Tame Beast for a unique boss — fun but not a scaling vector for Twister damage.

If after farming out the basic build you want to pivot, :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} is a new 0.5 unique worth researching for a companion army variant — but that's a different build, no longer a Twister-as-damage starter.

## Passive Tree

Patch 0.5 grants a free passive tree refund to every old character, so testing variants right now costs no regret orbs — pivoting the tree between mapping phases is very cheap.

Prioritize damage and speed clusters first, crit later after you have an accuracy base. :wiki-link{url="https://www.poe2wiki.net/wiki/Predatory_Instinct"} is a cheap opener since it gives a damage multiplier with no condition required. Path on to :wiki-link{url="https://www.poe2wiki.net/wiki/In_for_the_Kill"} which grants skill speed — pumping Whirling Slash to spin faster to reach 3-stage before each Twister cast. :wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Instinct"} grants attack speed and area effect (larger Whirlwind radius = bigger Twister consume range). :wiki-link{url="https://www.poe2wiki.net/wiki/Catlike_Agility"} is an important defensive cluster since the build relies heavily on evasion — patch 0.5 buffed base evasion item-level to +33% at level 65 (tapering down to +15% at level 80+), so targeting 8k-12k evasion is now much easier to hit than pre-patch.

Crit is a later layer. Only allocate the crit cluster once accuracy on gear is enough — low accuracy + high crit = crit chance that looks pretty on paper but effective DPS doesn't go up because of a high miss rate. After you have an evasion base + base damage + 90%+ accuracy on the corresponding enemy level, then go deep into the crit cluster.

:wiki-link{url="https://www.poe2wiki.net/wiki/Falcon_Dive"} is a trade-off node: trade shield slot defense for a big skill speed gain. Take it once you've accepted playing a no-shield setup (dual spear or spear + scepter), don't take it if you're dying a lot and need a buckler.

### Weapon Set

The build clearly benefits from splitting the two weapon sets:

- **Set 1 — Twister damage**: spear with high flat physical + flat cold + crit + accuracy. This is the Twister cast weapon.
- **Set 2 — Whirling Slash engine**: spear with high attack speed to spin fast and reach stage 3. The damage on this weapon is irrelevant since Whirling Slash isn't a damage source.

If you don't have 2 good spears yet, use one shared spear for both sets by locking the weapon slot (the lock icon on the slot). After you have currency in mid-mapping, splitting the sets is the clearest upgrade.

## Stat Priorities & Defenses

The benchmarks below are mid-mapping targets, not hard requirements for the build to function.

- **Life:** 2,500-3,500
- **Evasion:** 8,000-12,000 (easier to reach than pre-patch thanks to the +33% evasion item buff at level 65)
- **Resistances:** Fire 75% / Cold 75% / Lightning 75% / Chaos as high as possible
- **Accuracy:** 90%+ on the corresponding enemy level — the foundation for crit to work effectively
- **Crit chance:** take it after accuracy is enough
- **Movement Speed:** 25-30% on boots
- **Frenzy Charges:** 3-5 depending on gear and support setup

This build doesn't have a hard damage reduction layer like armor or block. Freeze and evasion are the way to reduce pressure, not a license to stand still and facetank. When facing a boss with a wide AoE pattern (Doryani phase 2, Arbiter wave), positioning matters more than build setup — stand in the wrong spot and even 12k evasion won't save you.

## Gear Progression

### Act 1

Prioritize a spear with flat damage or physical damage. :wiki-link{url="https://www.poe2wiki.net/wiki/Hardwood_Spear"} early on, then move up to an Iron Spear or :wiki-link{url="https://www.poe2wiki.net/wiki/Frosted_Ironhead_Spear"} when you find a better base in the Act 1 zones.

Gloves need flat damage. Boots need movement speed (target 20%+ early game). Belt and other armor pieces prioritize life. An :wiki-link{url="https://www.poe2wiki.net/wiki/Azura%27s_Ring"} or :wiki-link{url="https://www.poe2wiki.net/wiki/Iron_Ring"} you pick up is worth wearing right away — flat damage on a ring early game speeds up clear noticeably, especially for a spear build that's starved for flat.

### Act 4 to White Maps

Look for a level 16-20 spear with 2-3 good mods: physical damage, cold damage to attacks, attack speed. A buckler helps you survive more easily if you're dying a lot — after Lab 4 + enough evasion you can drop the buckler and switch to a scepter. The Malice Scepter in the offhand granting spirit + Critical Weakness is a clear upgrade once you have a damage base.

An amulet with strength helps unlock support gems with str requirements. Helmet, gloves and boots prioritize evasion + life + movement speed + flat damage for attacks.

### Endgame

A level 60+ spear is the most important item determining DPS. Prioritize flat physical, flat cold, attack speed, +level projectile skills, crit chance and accuracy. Rings should have accuracy, flat damage, life or evasion. Accuracy is the foundation for crit to work — don't skip this part to run two crit rings.

A few gear notes for 0.5:

- Avoid :wiki-link{url="https://www.poe2wiki.net/wiki/Wake_of_Destruction"} — these boots drop Shocked Ground when moving, while the build needs Chilled Ground for Twister to gain 50% cold. Putting Shocked Ground under your feet means Twister gains 50% lightning (useless for cold scaling).
- Hyrri's Ire (cold body armour) was nerfed in 0.5 — evasion from 200-250% down to 100-150%, gain-as-cold from 15-25% down to 10-20%. Still usable but no longer meta tier like pre-patch.
- Atziri's Contempt (spear unique) was hard-nerfed — lost "Life Leech from Explosions with at least 15 Bloodstone Lances is instant" and gained "50% Less Magnitude of Damaging Ailments you Inflict". Drop it from the gear plan.

### Mirror Tier (BiS)

Mageblood was newly added to the unique drop pool in 0.5 — this is the endgame goal for continuous 4-flask uptime. A level 80+ spear with high flat physical/cold rolls + AS + crit + accuracy, a mirror-tier ring with accuracy + flat damage + life + evasion, an evasion body armour with life + max life + resist. Once you reach mirror tier, you should pivot to a dedicated endgame variant with a re-optimized passive tree and gear — the starter setup runs out of scaling runway there.

## Flasks

- **Life Flask:** instant recovery to avoid getting oneshot by a projectile boss.
- **Mana Flask:** mandatory in the campaign because both Whirling Slash + Barrage cost mana.
- **Granite Flask:** physical mitigation for hard hits, pulls the Armour rating up significantly during the burst window.
- **Sapphire Flask:** cold resistance buffer for boss cold damage (Geonor, Doryani ice phase).
- **Quicksilver Flask:** speed for campaign + mapping, paired with Wind Dancer for a movement burst.

After Act 3, swap flasks by encounter — don't keep a fixed setup. A fire-heavy boss means swap the Sapphire out for a Ruby; a map with lots of physical reflect means keep better Granite uptime.

## Pantheon & Bandits

POE2 doesn't have these two systems. The equivalent decision in patch 0.5 is choosing the ascendancy (Spirit Walker or Deadeye — analyzed in the Ascendancy section) and choosing an Atlas Master (Doryani's Science / Hilda's Hunting / Jado's Spycraft — the new 0.5 system lets you allocate all three masters at once, quick-select before each map). Hilda's Hunting fits Twister because it grants a bonus for rare monster packs — the main loot source when farming currency for gear upgrades.

## Leveling Notes

Don't judge the build by the first few zones of Act 1. At this point you still lack attack speed, lack projectile speed, and have to use a 5-button combo (Parry → Fangs of Frost → Whirling Slash spin → Twister cast → Pounce reposition). Patch 0.5 also crops Parry of its Attack Distance bonus so the Act 1 combo is even more cramped, all the more reason to rush Act 2 fast to pivot early.

The play feel improves dramatically after getting Ice-Tipped Arrows + Barrage + Combat Frenzy. Lolcohol's pre-0.5 playtest running Acts 1-3 showed the build clearing Jamanra, Tor Gul, Viper Napuatzi and Doryani with just the Act 2-3 setup — character level 27 with a spear only at level 16 (underleveled by a few levels), Act 3 completed in 3 hours 19 minutes while simultaneously reading the guide and pausing to chat. The damage was described as "out of this world" and "S tier leveling setup for Huntress" if it wasn't nerfed. The 0.5 patch notes confirmed it — no direct nerf to Twister or Whirling Slash, so that conclusion still stands. SnooBAE85 set a world-record campaign-to-maps of 3 hours 25 minutes on an Amazon variant (pre-Spirit Walker), beating his own previous record by 5 minutes two times in a row.

A 0.5 note for the Act 2-3 phase: the first tier-2 support to unlock is Frost Nexus added to Twister or Ice-Tipped — turning the build from "okay damage" to "trivialize game" per GuyThatDies. The Pounce mark double-effect bug was fixed in 0.5 — the wolf weapon-set swap tech (gaining extra mark effect by swapping sets) no longer works, so creators used to this tech need to adapt.

When leveling, upgrading your weapon matters more than trying to hold onto a weak unique. A spear build is starved for flat damage on the weapon + gloves + rings — a cheap iron ring early game makes a clear difference. If your damage drops, check the spear first, then look at support gems or the passive tree.

## Budget & Investment

The campaign runs at nearly zero currency if you diligently pick up spears and gloves with flat damage. The most worthwhile upgrade is always the weapon.

Mid-mapping needs around 5-10 exalt for a solid spear (flat phys + flat cold + AS) and a few gear pieces with flat damage/accuracy. Endgame T13+ starts to need a high-level 60+ spear (the price climbs steeply with the +level projectile mod), accuracy on a ring, and enough life/resistance to not get one-shot by the new 0.5 rare modifiers.

Mageblood is a mirror-tier goal but investing too deep into mirror gear isn't this starter's objective. Once you reach that level, you should switch to a dedicated endgame variant with a re-optimized passive tree.

## Strengths & Limitations

**Strengths**

The build clears extremely fast in corridor maps — Twister bounces many times when it hits a wall, turning corridor maps into a free DPS multiplier. Damage scaling is cheap because the gear it needs is flat physical/cold + AS, not dependent on any expensive unique. After the Act 2 pivot, the rotation is just 3 buttons (Whirling Slash → dodge owl feather → Twister/Barrage), which feels very smooth compared to Act 1. The freeze chain + Herald of Ice + Ice Fragment from Ice-Tipped create a visually satisfying clear loop, especially when monster packs are dense.

**Weaknesses**

Act 1 is still clunky because you have to spin Whirling Slash 3 times before each Twister cast, and Parry losing Attack Distance in 0.5 makes it even more cramped. The build is thin until you have Wind Dancer + Catlike Agility + ~8k evasion — dying a lot in Acts 1-2 is normal. Wide boss arenas (Doryani phase 2, Arbiter open arena) make Twister lose a lot of damage because the tornadoes fly far and dissipate before bouncing back. The Pounce cooldown of 6s in 0.5 (from 4s pre-patch) makes mobility slower — plan dodge cadence carefully instead of spamming Pounce.

Combat Frenzy fails vs freeze-immune bosses — if the boss can't be frozen, can't be electrocuted, and has no stable way to pin, frenzy charges will run short → Barrage can't bypass the Ice-Tipped Arrows 12s cooldown → DPS drops noticeably. Some 0.5 Pinnacle bosses (Arbiter of Divinity, new Faction Leaders) may have freeze immunity — not tested live, needs verification at league launch.

One honest point: SnooBAE85, after deep-diving Spirit Walker, still thinks Deadeye has a higher raw DPS ceiling thanks to automatic Tailwind + stable frenzy charges. The Spirit Walker pick for this build is based on content/novelty (new ascendancy, the fun owl feather cycle) + easier projectile count scaling, not on raw power numbers.

**Patch 0.5 confirmed status**

Patch notes dropped 21/05/2026, league launch 29/05/2026. The build's engine (Twister + Whirling Slash + Spirit Walker + Combat Frenzy + Ice-Tipped Arrows) wasn't directly nerfed — SnooBAE85 confirms "control-F Twister on the patch notes = zero, same with Whirling Slash". The points to watch:

- Salvo Support: reworked seal mechanic (1s/seal × 6 × 1 proj instead of 2s/seal × 3 × 2 proj) — the +6 proj cap stays, the ramp is smoother.
- Pounce: cooldown 4.9-4s → 6-5.1s at gem level 3-20. Mobility is slower. The double mark effect bug was fixed → wolf weapon-set swap tech gone.
- Parry: lost the Attack Distance bonus. The Act 1 combo is more cramped.
- Atziri's Contempt (spear unique): hard nerf. Drop it from the gear plan.
- Hyrri's Ire: evasion + gain-as-cold reduced. Still usable but not meta.
- Spirit Walker: officially launched — confirms the node order Primal Bounty → Mhacha's Gift → Wild Protector + Vivid Stampede → Sacred Unity is still correct.
- Mageblood: added to the 0.5 drop pool — a mirror tier goal is feasible.
- Free passive tree refund for every old character — testing variants costs no regret.

**Future-nerf risk watch (post-launch)**

Mana leech was gutted in 0.5 — the passive notable "instant leech on empowered skills" (Twister is always empowered) is a suspicious target for the next hotfix if the build dominates. Ice-Tipped Arrows itself could get nerfed if the meta consolidates around it — SnooBAE85 flags "if anything gets nerfed mid-league, will likely be Ice-Tipped Arrows". Ghost Dance has been nerfed twice post patch-notes — doesn't affect the current build but shows GGG is targeting evasion-based defensive layers. Plan B if Ice-Tipped Arrows gets cropped: revert to a Frostbolt + Ice Crash combo as the Chilled Ground generator.

## Summary

- 2-layer engine: Whirling Slash spawns a 3-stage Whirlwind → Twister consumes → 4 tornadoes compound to 10.95× base damage.
- Chilled Ground gain 50% cold is added damage (not conversion) — physical scaling 100% stays intact.
- Salvo 0.5 rework: the +6 projectile cap stays, the 1s/seal ramp is smoother, no more block on earning seals while casting.
- Spirit Walker owl feather (Primal Bounty + Mhacha's Gift) scales projectile count + speed directly — fully-scaled ~6 proj + ~200% speed every 9s, the cycle matches the boss telegraph naturally.
- Projectile Acceleration III + the owl feather speed buff convert into a compound damage multiplier.
- Frost Nexus + Elemental Focus + Charged Mark are the 3 critical support gems for the Act 2 pivot setup that the old version didn't cover.
- Consensus of 4 creators post-patch (SiahZ, GuyThatDies, SnooBAE85, Lolcohol): S-tier league starter for 0.5.
- The build clears corridors S-tier, wide boss arenas A-tier, leveling improves clearly after the Act 2 Ice-Tipped Arrows pivot.
- Patch 0.5 didn't nerf the engine — Salvo/Pounce/Atziri-Contempt are the 3 minor points to note. Ice-Tipped Arrows is the risk target for a hotfix if the meta consolidates.

For Twister mechanic details see the [Twister mechanic doc](/mechanics/skills/twister).

## Resources

**Post-patch-notes builds (0.5 verified)**

- **GuyThatDies "Strongest Leaguestarter" (24/05/2026):** https://www.youtube.com/watch?v=hf6aG0ZbGOQ — full gem setup + Frost Nexus / Elemental Focus / Charged Mark recommendations.
- **SiahZ "BEST Twister Spirit Walker" (23/05/2026):** https://www.youtube.com/watch?v=0RknSCFoAOM — fully-scaled Primal Bounty numbers (12 proj + 270% speed aggressive read), Runic Ward defensive note.
- **SnooBAE85 "Next Twister Build" patch-notes recap (23/05/2026):** https://www.youtube.com/watch?v=WZwVlHjlBE8 — confirms "Twister/Whirling Slash untouched", flags leech gut + Ice-Tipped nerf risk.
- **SnooBAE85 "World Record TWICE" (20/05/2026):** https://www.youtube.com/watch?v=KoO6tdHUYbY — 3h25m campaign-to-maps WR on Amazon variant.
- **SnooBAE85 Spirit Walker deep dive:** https://www.youtube.com/watch?v=03d-h4IC1pg

**Pre-patch-notes references**

- **Mobalytics build sheet:** https://mobalytics.gg/poe-2/builds/twister-huntress-levelling
- **Lolcohol playtest (14/05/2026, 0.4 era):** https://www.youtube.com/watch?v=QG0GuvnPByI — "10/10 S-tier leveling" quote, Doryani underleveled clear.
- **GGG Spirit Walker reveal:** https://www.youtube.com/watch?v=86MS6GHBAOg
- **Moxsy endgame (0.4 footage, Critado Amazon — not Spirit Walker):** https://www.youtube.com/watch?v=phGfYINlFh4
- **Faro Vietnamese walkthrough:** https://www.youtube.com/watch?v=tqWAGHFWC4Y
- **GuyThatDies campaign clear (pre-patch):** https://www.youtube.com/watch?v=Yd2UmEzBXM4

**Game references**

- **POE2 Wiki Twister:** https://www.poe2wiki.net/wiki/Twister
- **POE2 Wiki Spirit Walker:** https://www.poe2wiki.net/wiki/Spirit_Walker
- **POE2 Wiki Ice-Tipped Arrows:** https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows
- **Patch 0.5.0 notes (local):** data/release-notes/Version_0.5.0.md

## Changelog

### 2026-05-25

- Full rewrite per verified 0.5.0 patch notes (dropped 21/05/2026) + integrated findings from 7 post-patch creator videos (SiahZ, GuyThatDies, SnooBAE85 patch-recap, SnooBAE85 WR, SnooBAE85 Spirit Walker deep dive, Lolcohol, Moxsy).
- Salvo Support: updated the math from 2s × 3 × 2 proj to 1s × 6 × 1 proj (cap +6 stays, ramp smoother, lost the "can't earn seal while casting" restriction).
- Main Skill: upgraded Projectile Acceleration → tier III (proj speed converts into a damage multiplier).
- Act 2 Pivot: added Frost Nexus (first tier-2 support unlock), Elemental Focus (prevent Ice Fragment self-freeze + 25% more elemental damage), Charged Mark Support (guaranteed Shocked Ground replacing the Wake of Destruction need).
- Ascendancy: added real numbers for fully-scaled Primal Bounty (~6 proj + ~200% speed every 9s), Wild Protector (2% life regen + 8% damage redirect), Sacred Unity Soaring Ground (40% damage + 30% evasion at full life).
- Pounce: recorded the cooldown nerf 4.9-4s → 6-5.1s + the mark double-effect bug fix (wolf weapon-set swap tech gone).
- Parry: recorded the loss of the Attack Distance bonus, Act 1 combo more cramped.
- Atziri's Contempt: added a nerf warning, dropped from the gear plan.
- Hyrri's Ire: recorded the evasion + gain-as-cold nerf.
- Spirit Walker: confirmed launched in 0.5.0, no more "under research" language.
- Stat Priorities & Defenses: updated the evasion item-level buff +33% at lv65.
- Gear Progression: added the Mirror Tier (BiS) tier for Mageblood newly in the 0.5 drop pool.
- Pantheon & Bandits: added the Atlas Master decision (Hilda's Hunting fits Twister).
- Strengths & Limitations: changed "Pre-0.5 patch risks" into the affirmative "Patch 0.5 confirmed status" + a Deadeye raw-power honesty note + future-nerf risk watch (mana leech + Ice-Tipped Arrows).
- Leveling Notes: added the SnooBAE85 WR 3h25m + the Pounce mark bug fix note.
- Resources: split into 3 groups (post-patch, pre-patch, game references), added 3 new videos (GuyThatDies/SiahZ/SnooBAE85 patch recap + WR), clarified Moxsy is 0.4 footage Critado Amazon.
- Status: draft → review.

### 2026-05-20

- Added real playtest evidence from Lolcohol (Doryani, Viper, Jamanra underleveled clear, Spirit Walker "juicy" in big arenas, Ice-Tipped pivot feel) into Leveling Notes and Performance Ratings.

### 2026-05-19

- Rewrote the article towards a public guide direction, removed the internal audit notes and kept the important gameplay warnings.

## Relationships

- **synergizes_with** [Twister — Spear Wind Projectile Skill](/mechanics/skills/twister) — The build uses Twister as the main damage source; the mechanic doc explains how the wind is created, the damage chain and the 0.66-second hit limit.
