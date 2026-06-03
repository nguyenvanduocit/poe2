---
template: templates/mechanic-template.md
document_type: mechanic
title: Infernal Legion Ignite Loop
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-19'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - infernal-legion
  - ignite
  - synthesized-ignite
  - minion-mechanic
  - support-gem
  - lich
  - poe2
  - mechanic
---

# Infernal Legion Ignite Loop

Infernal Legion is a POE2 support gem that lets a minion burn itself to ignite enemies within a radius. This mechanic is the core damage source of the [Infernal Legion Lich build](/builds/witch/dinomancer-lich-elephant) on Witch in patch 0.5.0 — the entire DPS chain (Bomber phase + Walking Simulator phase) runs off IL's synthesized ignite. The gem text wording is very particular: the ignite doesn't come from a "Hit" in the standard POE2 sense, it's a synthesized non-hit ignite — and that property decides which support gems can amplify the damage and which can't.

## How It Works

Infernal Legion has 3 tiers (I/II/III) with the same effect structure: the minion loses a portion of its HP each second as fire damage, and ignites enemies around the minion using a fixed formula based on the minion's max life. Tier 5 (Infernal Legion III) self-burns 30% of minion max life per second and ignites "as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life" within a 2 metre radius. Tier 4 (IL II) self-burns 20% and ignites base 20% within the same 2 metres. Tier 2 (IL I) is also 20%/20% but with only a 1.5 metre radius. Going up a tier is not a small multiplier — IL III vs IL I is +25% ignite base and +50% self-burn rate.

The wording that decides everything is the phrase "**as though dealing Base Fire Damage**". POE2 uses this same pattern for 5+ other skills in the wiki: :wiki-link{url="https://www.poe2wiki.net/wiki/Flame_Wall"} ("Igniting enemies as though dealing Fire Damage equal to 20% of your Maximum Mana"), Birth of Fury ("equal to 500% of your maximum Life"), :wiki-link{url="https://www.poe2wiki.net/wiki/Saitha%27s_Spear"} ("equal to 10% of your maximum Life"). This is a synthesized ignite source — there's no real damage event, no hit, the magnitude is calculated directly from X% of Y. Whereas standard POE2 ignite has to go through the pipeline Hit → contribute fire damage to Flammability magnitude → roll chance to ignite → ignite magnitude = 20% of Hit fire damage per second, IL bypasses that entire pipeline. The minion stands in the radius → the enemy is ignited immediately, with magnitude = 25% × minion max life × 4 second duration.

The self-burn mechanic is itself a conditional trigger for 2 other support gems. Minion HP drops monotonically at a rate of 30%/sec (IL III), meaning after ~2.17 seconds the minion falls below the Low Life threshold of 35% (per the :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} wiki — "considered low life if at 35% of maximum life or lower"). This is the trigger condition for :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} — the minion explodes dealing 15% max life as fire damage AoE hit. After ~3.33 seconds spawn-to-life-0, if you socket :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"}, the minion doesn't die immediately but enters a "dark cloudy effect" for exactly 4 fixed seconds (the gem text is explicit: the duration doesn't scale with skill effect duration support). During that window the IL self-burn AoE still radiates (the wiki wording doesn't deny it — the minion is still on the field as a source point). The total spawn-to-revive cycle is ~7.33 seconds, of which the last ~4 seconds is the "post-life-0 burn window" — this is the engine of the build's Bomber phase.

A concrete numerical example from Pr3vie's endgame PoB (https://pobb.in/MzsIsZXdSp72) — the Elephant Tortoise is noted by the wiki as having "Extremely high life pool. Great with Infernal Legion III". Assume a companion max life after scaling of H = 80,000 HP (rough endgame with +5 minion skill levels from an amulet stat-stick + minion life passives ~150% combined): IL III ignite base = 25% × 80,000 = 20,000 fire damage. Plugging through the POE2 standard ignite formula 20%/sec for 4 sec → tick = 4,000 fire damage/sec/target before modifiers. After :wiki-link{url="https://www.poe2wiki.net/wiki/Searing_Flame"} II (+100% more Magnitude of Ignite) the tick rises to ~8,000/sec. After the curse :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} (-40 to -59% res) + shock 20% increased damage taken → effective ~12,000-16,800 fire damage/sec/target. Multi-target: 5 enemies in the radius → ~84,000 effective DPS from ignite alone. This is the DPS floor — the build doc's claim of "23M DPS" is the combined total of all channels (IL + MI explosion + companion auto-attack + skeleton bomber + curse explosion), not IL ignite alone.

## Key Interactions

The strongest synergy is **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"}**. The 30%/sec self-burn rate pushes the minion past the Low Life threshold in ~2.17 seconds, and MI triggers an explosion = 15% max life as a fire hit. The MI explosion differs from IL ignite in that it's a **real Hit** (per the gem text mechanics section: "the explosion is an area Hit from the minion, dealing secondary damage") — it can proc a separate ignite via the standard pipeline if the skill has a Flammability chance. Two independent channels: IL synthesized ignite (floor damage) + MI explosion ignite (separate Hit channel). In the build's Bomber phase, this is why phase 2 DPS is higher than the pure IL phase — the explosion adds burst on top of the continuous burn floor.

The second synergy is **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"}**. Last Gasp gates "Supports skills that create **Persistent Minions**" — :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"}, and the Skeletal Warrior family all have the Persistent tag → valid support. After life=0 from IL self-burn, Last Gasp extends it by a fixed 4 seconds. During this window the IL AoE still radiates (the companion body is still on the field), extending burn coverage by ~55% compared to without Last Gasp. The fixed duration doesn't scale via Prolonged Duration support — the gem text is explicit.

The third synergy is **IL × Searing Flame II**. SF II's gem text has 2 separate effect lines: "Supported Skills deal 30% less Damage with Hits" + "100% more Magnitude of Ignite inflicted with Supported Skills". The Hit penalty only applies to hit damage — IL ignite isn't a hit, so it isn't subject to the 30% less. The ignite buff wording is broad, "inflicted with Supported Skills" — it includes IL's synthesized ignite on the most natural reading, because IL ignite is inflicted on the supported skill (Tame Beast / Bind Spectre). The outer gate "Supports any skill that **Hits** enemies" is a gate on the skill, not on the ignite — the companion has auto-attack hits → it satisfies the gate. Net effect: SF II likely doubles IL ignite base from 25% → 50% of minion max life as effective fire damage. The wording is broad enough to favor this reading, but toggle SF II on/off in PoB when the build is live to confirm the ignite base actually doubles.

The fourth synergy is **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} II**. MA II adds 45% increased Area of Effect. The POE2 standard formula: radius scales with sqrt(area), so the radius bonus = sqrt(1.45) - 1 ≈ 20.4%. IL III base 2 m → effective ~2.41 m. Significant but not "double radius" like many people think. The 130% cost multiplier is a trade-off worth weighing when the build's spirit budget is tight.

The most important anti-synergy is **IL × :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph%27s_Pyre"}**. This is the most controversial claim in the build doc — Xoph's Pyre's gem text has 2 effect lines, both explicitly Hit-gated. Effect 1: "Chaos Damage **from Hits** with Supported Skills also Contributes to Flammability and Ignite Magnitudes" — double-gated on Hit (needs chaos damage AND needs to be from a Hit). IL ignite has no chaos damage, isn't from a Hit → effect 1 doesn't fire. Effect 2: "Supported Skills **Gain** 40% of Fire Damage as Extra Chaos Damage" — the modifier class "Gain X% of Damage as extra Y". The precedent from the Minion Instability wiki mechanics section: "Minion Instability does not scale with the Gain X% of Damage as Y modifier." Same modifier class → the same pattern likely fails for IL synthesized ignite. Net effect of Xoph's Pyre × IL channel: **~0% direct uplift**. The only channel Xoph's Pyre amplifies is companion auto-attack hits — and that channel is in turn overridden by IL's "ignite does not stack — only highest applies" rule against the IL synthesized base. The build doc's claim of "40-60% damage uplift from Xoph's Pyre" is likely overstated by 5-10×. Realistic uplift: 0-15%.

The second anti-synergy is **IL × IL multi-companion**. The IL skill-functions section is explicit: "the ignite debuff does not stack; enemies will only take damage from the **highest** ignite if in range of multiple Infernal Legion minions." The Trusted Kinship keystone (2 companions) or :wiki-link{url="https://www.poe2wiki.net/wiki/Yriel%27s_Fostering"} body armour does not double IL ignite output — it only increases coverage area, not damage on the same enemy.

## Parallel Hit Channel Chain (Companion Auto-Attack)

Alongside the IL synthesized ignite channel (primary, non-hit, doesn't scale with Hit-gated modifiers), the build runs a parallel **hit channel** from companion auto-attack hits. This channel is usually dismissed as "irrelevant because IL ignite overrides it", but with the right gear stack it becomes a second damage layer independent of the IL channel.

The chain unlocks under gear-gated conditions:

**Step 1 — Companion gains chaos extra via Evergrasping Ring**: :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"} (Pearl Ring unique) verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"*. When the companion is within the player's presence radius, each of its auto-attack hits gains 15-25% extra chaos damage (gear-gated, only procs if the ring is equipped).

**Step 2 — Despair shreds chaos res**: :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} curse verbatim *"Curse inflicts -(35-49)% to Chaos Resistance"*. With Heightened Curse support +25% magnitude: effective -49% × 1.25 = **-61% chaos res** on the enemy. The companion's auto-attack chaos extra damage portion is now amplified by a 1.61× target multiplier.

**Step 3 — Xoph's Pyre Effect 1 converts chaos → ignite contribution**: Xoph's Pyre verbatim effect 1 *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"*. Gate: the chaos damage must be from Hits (qualifies, companion auto-attack is a Hit) **and** must be from "Supported Skills". If Xoph's Pyre is socketed on Tame Beast (Path A) or Bind Spectre (Path B), the companion auto-attack qualifies for the "Supported Skills" gate. The chaos contribution stacks into the ignite magnitude calculated on the hit damage.

**Step 4 — IL ignite stacking rule competing**: The IL skill-functions gem text is explicit *"the ignite debuff does not stack; enemies will only take damage from the highest ignite if in range of multiple Infernal Legion minions"*. Hit channel ignite (from companion auto-attack via Xoph's Pyre conversion) and IL synthesized ignite come from the same minion source → do they count as "multiple Infernal Legion minions" under a loose interpretation? Or are they 2 independent channels because IL synthesized ignite isn't a standard ignite tick from the Hit pipeline? This is the **most ambiguous gate** in the build math, requiring a PoB falsifier test to confirm.

Treatment under the 2 interpretations:
- **Interpretation A (loose)**: The 2 channels compete, IL synthesized base (25% × 80k = 20,000 fire) is usually higher than the hit channel ignite → IL dominates, hit channel value = 0
- **Interpretation B (strict)**: The 2 channels are independent (IL synthesized isn't a standard ignite, doesn't qualify as "Infernal Legion minions ignite"), they tick in parallel → combined uplift ~30-50% with the gear stack

Per the video Lich PoB (Ranny El), the actual sockets are Despair + Heightened Curse + Decaying Hex + Evergrasping Ring + Grip of Kulemak — an implementation choice consistent with Interpretation B. Interpretation B is the working assumption pending a PoB toggle test (toggle Evergrasping Ring + Despair on/off, read the combined DPS delta).

**Conditional value summary:**
- Pre-Evergrasping Ring: the 3rd curse Despair only adds value equal to Decaying Hex chaos DoT (~250-300/sec/target from 100% INT × 250-300 INT stack), not through the hit channel chain
- Pre-Xoph's Pyre: the hit channel chaos extra exists via Evergrasping but doesn't convert to ignite contribution → the enemy only takes flat chaos hit damage on the auto-attack tick frequency (a small channel)
- Full stack (Evergrasping + Xoph's Pyre + Despair): hit channel ignite contribution + IL synthesized ignite in parallel, combined uplift ~30-50%

This is the gap that the earlier mechanic doc didn't cover — it only analyzed the IL synthesized ignite single channel. The hit channel chain is a parallel system, not a replacement for the IL channel but an add-on.

## Optimization

The main lever is **companion max life H**. The entire DPS formula scales 1:1 with H, so investment priority is minion life passive nodes + +X to minion skill levels from amulet/wand/shield. Pr3vie's endgame stacks companion HP roughly 80k-200k via the combo of +5 minion skill levels (Apocalypse Curio amulet stat-stick — verify its identity at trade time because the wiki doesn't document this item) + tier-zero jewel mods + the Lich ascendancy spirit gem level bonus. Tame the Elephant Tortoise specifically because the wiki notes "extremely high life pool" — spirit reservation 56.1%, spawns at :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"} or Kriar Village (not Azmerian Ranges as many old guides wrongly state).

The second lever is **Searing Flame magnitude stacking**. SF II is +100% more Magnitude of Ignite — the base requirement. Layer on more "more/increased Magnitude of Ignite" from the passive tree, jewel mods, ascendancy. Every 10% more magnitude = +10% DPS linearly. Avoid the confusion: "more Damage with Ignite" and "increased Magnitude of Ignite" are 2 different modifier classes in POE2 — the wiki distinction matters when reading gear rolls.

The third lever is **the target's damage-taken multiplier**. Apply the Elemental Weakness curse (-40 to -59% all elemental res per gem text 0.5 baseline) + Frost Bomb exposure (Potent Exposure -20% to -50% ramping) + Skeletal Storm Mage shock 20% increased damage taken. Combined, this can push the enemy's damage-taken multiplier to 1.5-1.8×. Stack with Lich's Rupture the Soul for a curse explosion 33% chance → quarter max life as chaos damage on a cursed kill — a secondary synergy.

The spirit budget is a hard constraint. Elephant Tortoise 56.1% + Bind Spectre Persistent + Blasphemy/Temporal Chains aura + 1-2 utility minions (Skeletal Cleric heal, Skeletal Storm Mage shock) easily push total reservation to 80-90%. Optimize spirit reservation efficiency via jewel mods or body armour mods. Don't try to stack 4-5 minions — quality > quantity.

Phase progression matters. Phases 1-2 (level 1-22) run ED/Contagion standard — don't touch IL because the gem tier isn't unlocked. Phase 2 (level 22+) socket IL I + Minion Instability + Last Gasp on the Bind Spectre bomber. Phase 3 (endgame mapping, gem tier 5 unlocked) swap to Tame Beast + Elephant Tortoise + IL III. Don't try to skip a phase — the gem tier requirement gates execution.

## Interactions with Other Content

POE2 0.5 endgame content interacts with the IL build mainly through boss mechanics:

- **Xesht, We That Are One** is the sole drop source of the Xoph's Pyre lineage gem. Chicken-and-egg: you need Xoph's Pyre for the "endgame DPS jump" per the build doc, but you must clear Xesht first. Per the gate-split analysis in the section above, Xoph's Pyre × IL doesn't give the big jump the doc claims — it's still worth grabbing for a secondary skill (Frost Bomb, Storm Mage shock) but not a tier-zero priority.
- **King in the Mists** drops the :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} unique jewel (radius 2000, allocate passives near the keystone). The build uses it for a Glancing Blows region pass-through — note that POE2 0.5's Glancing Blows wording has changed ("Chance to Evade is Unlucky. Chance to Deflect is Lucky", not the POE1 block mechanic). The build skips GB not because of a block penalty but because it doesn't stack evasion.
- **Trials of Sekhemas / Trials of Chaos** grant the ascendancy points for the Lich notable tree. The Lich ascendancy doesn't have a "trial 1 cluster / trial 2 cluster" like POE1 — it's a flat notable list with a prerequisite chain.
- **Simulacrum** drops the :wiki-link{url="https://www.poe2wiki.net/wiki/Megalomaniac"} unique jewel (random 2-3 notables). Per the 0.2.0 patch, it can't roll Witch/Sorceress starting-area notables → the companion-specific notable pool is limited, not reliable for build planning.

Map mod compatibility: the IL build tolerates most map mods thanks to the companion tanking the front line. Avoid **No regen** (permanent companion HP loss), **Less recovery** (Shavronne's Satchel ES sustain weakened), **Reduced effect of curses** (Blasphemy Temporal Chains slow uptime reduced). Embrace **Increased monster damage** (the companion deals more damage when taking damage = irrelevant) and **Reduced player resistances** (the player's CI immunity to chaos mitigates most of it).

## What Doesn't Work

**Fire Penetration Support × IL ignite DOESN'T work**. Fire Pen applies "on Hit". IL synthesized ignite has no Hit instance to apply penetration to. Penetrating enemy fire res must be done via a curse (Elemental Weakness) or a Fire Exposure debuff on the enemy — a modifier on the enemy side, not the source side.

**"Gain X% of Damage as Extra Y" modifiers DON'T amplify IL ignite**. This includes Xoph's Pyre's 40% fire→chaos extra, weapon mods "Gain X% physical as extra fire", and flasks "Gain X% as extra fire on use". The precedent is clear from the Minion Instability gem wiki: "does not scale with the Gain X% of Damage as Y modifier." Same modifier class, same pattern → likely fails for any non-hit synthesized ignite.

**Crit support gems × IL ignite DON'T work**. IL ignite isn't a Hit so it has no crit roll. Investing crit chance / crit multiplier passives for the IL channel = wasted. It only applies to the companion auto-attack channel (a small channel usually overridden by IL ignite).

**Multiple IL companions DON'T stack ignite**. Trusted Kinship 2-companion or Yriel's Fostering does not double IL ignite output. The gem text is explicit: "only the highest ignite if in range of multiple Infernal Legion minions". A second companion only adds coverage area + auto-attack contribution (small).

**Duration support × the Last Gasp window CAN'T be extended**. The Last Gasp gem text is explicit: "this duration is fixed and does not appear to be modifiable with skill effect duration." 4 seconds is 4 seconds, doesn't stack with Prolonged Duration support, Increased Skill Duration jewels, or ascendancy duration nodes.

**Last Gasp × a non-Persistent minion DOESN'T work**. The gate gem text: "Supports skills that create **Persistent Minions**". POE2 0.5 has no SRS analog non-persistent gem — the closest is Skeletal Arsonist (Persistent + Detonator tag, qualified). If you try to pair Last Gasp with a non-persistent gem, the support will be greyed out in the UI.

**A 1-shot on the spectre/companion DOESN'T trigger Minion Instability**. The MI gem text mechanics: "must be **reduced** to Low Life to explode. Anything that causes a minion to die without ever having low life (e.g. dying in 1 hit, replacement, expiring duration) will not cause an explosion." A boss slam 1-shotting the companion → no explosion. This is why Last Gasp is critical — it bridges the gap between "took a heavy hit but not instant death" and "dropped below the Low Life threshold".

## Common Mistakes

**Wrong: Socket Xoph's Pyre on Tame Beast because the doc claims 40-60% uplift for IL — Right: Socket Xoph's Pyre on Frost Bomb or a Storm Mage skill — Reason: Xoph's Pyre amplifies hit-based ignite, IL synthesized ignite doesn't qualify; Frost Bomb / Storm Mage have real hits and benefit fully from the 40% fire→chaos + chaos-contributes-to-ignite. Verify with a PoB toggle test on the Pr3vie endgame PoB.**

**Wrong: Stack 3-4 companions via Trusted Kinship + Yriel's Fostering to multiply IL ignite — Right: 1 companion with the highest HP (Elephant Tortoise) + a cluster of utility skeletons — Reason: IL ignite doesn't stack between multiple IL minions, only the highest applies. A second companion wastes spirit + a defense penalty (Trusted Kinship -30% defences, Yriel's 15% damage taken from the companion's life).**

**Wrong: Go to IL II tier 4 from level 22 and keep it to endgame — Right: IL I tier 2 → IL II tier 4 → IL III tier 5 each time the gem tier unlocks — Reason: IL III vs IL I is +25% ignite base (25% vs 20% min life) and +50% self-burn rate. Each tier upgrade is itself +25% DPS without changing anything else.**

**Wrong: A crit chance/crit multi build for phase 3 walking simulator — Right: Pure ignite magnitude + minion life scaling — Reason: IL ignite isn't a Hit so it has no crit roll. Every crit stat is wasted on the IL channel. Crit gear only amplifies the companion auto-attack channel (a small channel).**

**Wrong: Skip Last Gasp in the phase 2 bomber because "Minion Instability already triggers before Last Gasp matters" — Right: Last Gasp is critical for the bomber phase, not optional — Reason: MI triggers at Low Life (35% HP). After the MI explosion, the companion is still at ~20-35% HP if the MI explosion damage didn't 1-shot it. Last Gasp bridges the gap from 0 HP to officially dying, extending the IL burn window by another 4 seconds. Skipping Last Gasp = a bomber cycle ~55% shorter.**

**Wrong: Farm the Elephant Tortoise from Azmerian Ranges — Right: Farm from Whakapanu Island or Kriar Village — Reason: The Tame Beast wiki beast list confirms the spawn map. Azmerian Ranges is Azmerian wisp territory (its spawn rate is currently bugged per the wiki).**

**Wrong: Buy the Apocalypse Curio amulet on trade for 50+ div because the doc references it — Right: Verify the item's identity first, it might be a community nickname — Reason: The wiki has no page for this item (checked the mirror 2026-05-18). The mods listed individually are plausible but the item name isn't confirmed. It might be a 0.5 league-mechanic-specific desecrated item not yet wiki-fied, or a community-coined nickname.**

## Summary

- Infernal Legion is a synthesized ignite source — it bypasses the POE2 standard Hit→Flammability→Ignite-Magnitude pipeline. The magnitude is fixed = X% of minion max life (25% at IL III tier 5).
- Modifier requirements: it needs "more/increased Magnitude of Ignite" and enemy-side res reduction (curse, exposure). It does NOT need "Gain X as Y" modifiers, does NOT need Hit-based supports (Fire Pen, crit), does NOT need Xoph's Pyre (the gate-split fails the IL channel).
- Closed-form DPS per target: `DPS = 0.05 × H × M_sf × M_other × D_target`. H = companion max life (PoB-derived), M_sf = Searing Flame II amplifier (2.0 if it applies), M_other = other magnitude modifiers, D_target = enemy damage-taken multiplier.
- Bomber phase chain: IL self-burn 30%/sec → Low Life at ~2.17 sec → Minion Instability explosion 15% max life as a Hit → Last Gasp window 4-sec post-life-0 → revive cycle.
- Walking Simulator phase: Tame Beast + Elephant Tortoise + IL III pure burn. The companion auto-tanks the front line, IL ignite kills every enemy within the 2-2.4 m radius continuously.
- The build doc's "23M DPS" claim is a combined-channel total, not IL alone. The build doc's "40-60% Xoph's Pyre uplift" claim is likely overstated by 5-10×. A PoB toggle test is needed to confirm before investing in Xoph's Pyre at a tier-zero price.

## Version History

### Patch 0.5.0 (Return of the Ancients) — 2026-05-19

- The Infernal Legion gem is unchanged from its 0.3.0 introduction. Same wording, same numbers.
- Xoph's Pyre was buffed in 0.4.0 from 20% → 40% fire→chaos extra damage. The doc reflects the current 0.5 number.
- Searing Flame I/II numbers stable since 0.3.0.
- Magnified Area II patched in 0.3.0 to remove the "deal less damage" penalty — now a pure AoE buff.
- Elemental Weakness 0.3.0 consolidation: Flammability + Hypothermia + Conductivity merged into a single Elemental Weakness curse with -40 to -59% all elemental res.
- Glancing Blows 0.3.0 reworked: "Chance to Evade is Unlucky. Chance to Deflect is Lucky." — no longer a block-penalty keystone.
- Last Gasp 0.3.0 description update: clarified that supported minions die before the duration expires if they take damage exceeding maximum life while fatally wounded.
- Minion Instability 0.3.1b: fixed a bug allowing MI to trigger on Spectres removed after weapon swapping.

Mirror snapshot: 2026-05-18. All advice in this doc needs re-verification if GGG ships a 0.5.1+ patch after this date. The walking simulator playstyle is an archetype GGG dislikes — nerf risk in 0.5.x is high per the monitored patch pattern.

### 2026-05-19 (parallel hit channel addition — Ranny El video integration)
- Added a new section **Parallel Hit Channel Chain (Companion Auto-Attack)** between Key Interactions and Optimization. Documented the 4-step chain: Evergrasping Ring chaos extra → Despair chaos res shred → Xoph's Pyre Effect 1 chaos→ignite contribution → competing/parallel with the IL synthesized ignite stacking rule.
- Identified an earlier gap analysis: the mechanic doc only covered the IL synthesized ignite single channel, not the companion auto-attack hit channel chain. The triple-curse build (Whispers of Doom keystone allocated) exploits this chain via the 3rd curse Despair stacking on the Evergrasping Ring presence buff.
- Interpretation A (loose, IL dominates) vs Interpretation B (strict, 2 independent channels) documented, with Interpretation B as the working assumption pending a PoB toggle test. The video Lich PoB (Ranny El, poe.ninja/poe2/pob/1863a) implementation is consistent with Interpretation B — confirmed via inspection of the gem socket layout (Despair + Heightened Curse + Decaying Hex + Evergrasping Ring + Grip of Kulemak co-equipped).
- Conditional value labeled per gear stack tier: pre-Evergrasping = only Decaying Hex chaos DoT, pre-Xoph's = flat chaos hit damage, full stack = combined uplift ~30-50%.

## Relationships

- **used_by** [Infernal Legion Lich](/builds/witch/dinomancer-lich-elephant) — A build using IL III as its primary damage engine — the entire DPS chain depends on this ignite loop
