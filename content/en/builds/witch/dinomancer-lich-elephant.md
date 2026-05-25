---
template: templates/build-template.md
document_type: build
title: Infernal Legion Lich
status: draft
author: duocnv
created: '2026-05-13'
updated: '2026-05-19'
class: Witch
ascendancy: Lich
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
build_tags:
  primary_skill: Infernal Legion
  damage_type: fire
  playstyle: summoner
  content_focus: all-content
tags:
  - infernal-legion
  - lich
  - walking-simulator
  - companion
  - elephant-tortoise
  - bogfeld-commoner
  - bramble-burrower
  - minion-instability
  - xophs-pyre
  - poe2
  - league-starter
  - ignite
  - dinomancer
---

# Infernal Legion Lich

Infernal Legion Lich is the strongest league starter in POE2 right now — the build runs from level 22, needs almost no skill expression, and reaches T-15 mapping in under 7 hours from a fresh start without speedrunning. The core mechanic revolves around :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion_Support"} — a support gem that makes minions burn themselves, dealing fire damage equal to 25% of the minion's max HP — creating a scaling loop that's linear with minion life, the kind GGG has never managed to balance since Detonate Dead plagued POE1.

## Build Overview

The build runs on a simple loop: minions self-burn via Infernal Legion → ignite every enemy in radius → the player just walks along and picks up loot. The actual damage source is the ignite passive from Infernal Legion support — the gem text states clearly *"ignite enemies as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life"*. Because damage scales 1:1 with minion life rather than spell damage or weapon DPS, every investment in minion life and gem level directly increases output.

The build's standout feature is the natural **3-phase progression** within a single character, each phase stronger than the last without a major respec. Phase 1 is :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Drain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Contagion"} standard Witch leveling (act 1 → level 22). Phase 2 is the bomber setup: :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"} — IL self-burn drops the spectre to Low Life (≤35% life), MI triggers an explosion dealing 15% max life as fire damage, and Last Gasp keeps the spectre active for exactly 4 fixed seconds (duration can't be extended via support) extending the burn window (level 22 → endgame mapping). Phase 3 is a pure walking simulator: tame an Elephant Tortoise as a companion + Infernal Legion III pure burn, the player AFK-walks while the companion roasts the entire map (endgame min/maxed).

The defense layer scales with investment. Early on, Lich CI gives chaos immunity + enough ES stacking to handle the campaign and early maps. Later, layer in :wiki-link{url="https://www.poe2wiki.net/wiki/Shavronne's_Satchel"} as the ES sustain engine — the implicit *"Life Recovery from Flasks also applies to Energy Shield"* turns a life flask into an ES top-up, with the tradeoff being a -20-30% reduced Flask Life Recovery rate so spam frequency must be high. Note on framing: this build is NOT "low-life sustain" as many guides mislabel it — verbatim CI mechanics *"While CI is allocated, a player always counts as being on full life but can never be on low life."* Every "while Low Life" modifier (Pain Attunement family, low-life flask threshold suffix) never procs. It's actually a **frozen-life full-life loop**: the life pool is literally = 1, frozen at 1 forever by the Eternal Life clause "Your Life cannot change while you have Energy Shield." Add :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} ES recovery on dodge, and :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} to slow enemies and reduce incoming damage frequency. Endgame nominal EHP reaches 58,533 with a physical max-hit cap of 11,752 — max-hit is the metric that matters (a single hit ≥ 11.75k phys → ES depleted + remainder overflows into life=1 → instant death), not raw EHP. Armour + block + position are the defensive layers against one-shots, not the ES pool.

Mobility is handled via the build's core weapon swap mechanic. The companion teleports to the player on every weapon set swap, combined with :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} on the swap set for very high effective movement speed despite no dedicated movement skill on the main set.

## Skill Gems & Links

The POE2 gem system has no traditional 6-link — each skill gem has its own sockets for supports. Below is the full setup per the endgame Pr3vie PoB, with notes on which gems are used early in leveling.

**Main Companion Setup:** :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} (level 24, quality 20 — after capture becomes Summon Beast: Elephant Tortoise, account-bound) + :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion_III"} (tier 5 endgame variant) + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Searing_Flame"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}.

Tame Beast verbatim gem text: *"Conjure Azmeri wisps to engulf a Rare Beast for a duration, Hindering them. If you defeat the Beast while it is engulfed in wisps, it will be captured by this gem, transforming the gem to instead allow you to summon the Beast as a Reviving Companion. While this Gem is Socketed you can view Monster Categories on Enemies. Wisp duration is (8-11.8) seconds. Tamed Beast retains up to four monster modifiers when summoned"* (HIGH, wiki Tame Beast page). Tier 9, level scaling 1-20, mana cost 22-99, requires the Beast remain alive within the wisp window. Quality adds +0.08-1.6 seconds of wisp duration — quality 20 adds a cumulative 1.6 seconds for a total window of ~13.4 seconds, creating a comfortable room to DPS-down a high-HP rare beast. The gem becomes "Summon Beast: Elephant Tortoise" account-bound after capture, can't be traded, and can be leveled via Uncut Skill Gem.

Elephant Tortoise verbatim from the Tame Beast wiki beast list: spirit reservation **56.1%**, drop locations **Whakapanu Island** and **Kriar Village**, wiki note verbatim *"Extremely high life pool. Great with Infernal Legion III"* (HIGH). The POE2 0.5 wiki mirror has **no dedicated page** for the Elephant Tortoise (the entry is `Elephant_Tortoise/edit.md` — page does not exist), so the HP value and damage stats must be treated as LOW confidence community numbers. Community estimate post-tame HP ~80,000 (scaled by gem level + retained monster modifiers), with the base AI being a melee tank charging into the nearest enemy. Because the 56.1% spirit reservation takes up nearly the entire build's spirit budget, this is the only companion that runs — there's no second pet in parallel unless you allocate the :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} keystone (verbatim: *"You can have two Companions of different types. You have 30% less Defences. Companions have +1 to each Defence for every 2 of that Defence you have"*, HIGH) or equip :wiki-link{url="https://www.poe2wiki.net/wiki/Yriel's_Fostering"}, neither of which is worth the cost for this build.

The mod re-roll workflow exploits the wiki text *"Tamed Beast retains up to four monster modifiers when summoned"* — capture a Rare Elephant with 4 specific mods on the rare, and post-tame the Elephant keeps all 4. Farm setup: run Whakapanu Island or Kriar Village with the waystone mod *"Rares have 1 additional Modifier"* (raising from 4 to 5 random mods → increasing the chance of hitting Increased AoE), spawn the Elephant Tortoise rare, kill every other rare first, then engage the Elephant alone with Tame Beast active. If the mod roll is bad (no Increased AoE), leave the map (don't complete it) → come back and reroll in another session. On average 3-7 hours for a roll of an Elephant with Increased AoE + 1 supplementary mod (Haste Aura / All Damage Chills / Periodic Invulnerability Aura / ES Aura), a community-tested rate.

Feeding Frenzy I verbatim: *"Supports skills which create Minions, making them deal and take more damage. Cannot support skills which create undamageable Minions. Minions from Supported Skills deal 30% more Damage. Minions from Supported Skills take 20% more Damage"* (HIGH, tier 3 support, +5 Int). Feeding Frenzy II verbatim same 30% more damage but reduces the penalty to *"Minions from Supported Skills take 15% more Damage"* (HIGH, tier 4). Note: the 0.3.0 patch wiki version history — "many existing support gems have received small numerical balance changes, and the effects of some support gems have been combined into a single gem"; the current POE2 0.5 gem does NOT have the AI mode toggle like POE1's Feeding Frenzy buff stack (the POE1 gem switches minions to aggressive AI when it procs), only a pure damage multiplier with a penalty. The 20% more damage taken tradeoff doesn't matter because the Elephant Tortoise's HP pool is large enough to absorb the 20% buff penalty, especially with the Nurturing Guardian flask channel sustaining HP.

Companion teleport-on-weapon-swap behavior: the old build doc's claim "companion TPs to the player on every weapon set swap" is a community-tested gameplay observation (MEDIUM, the POE2 0.5 wiki mirror has no verbatim text confirming this mechanic in Companion.md or Weapon_Set.md). The actual treatment in the build is a mobility layer — combined with Blink on the weapon swap set creating a swap-Blink-swap-back loop, the companion re-positions toward the player; if the teleport mechanic isn't exactly as claimed, at minimum the companion AI re-targets the player's position after a swap event, which is functionally equivalent in practice. When a pinnacle boss has many danger zones, position the companion primarily via the Blink loop — pre-blink so the companion follows into the safe zone before the boss AoE triggers.

Infernal Legion III verbatim gem text (tier 5): *"Minions from Supported Skills take 30% of their maximum Life as Fire Damage per second. Minions from Supported Skills Ignite Enemies within a radius of 2 metres as though dealing Base Fire Damage equal to 25% of Minion's Maximum Life"* (HIGH). The wording *"as though dealing Base Fire Damage"* is key — this is a **non-hit synthesized ignite source**, the same pattern as Flame Wall, Birth of Fury, Saitha's Spear. Magnitude is calculated directly from 25% × companion HP, not through the Hit pipeline, not through a Flammability roll. The mechanical consequence: every modifier gated on "from Hits" does NOT apply to the IL ignite channel — the clearest precedent is the Minion Instability wiki entry explicitly stating *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"* (HIGH) for the same class of non-hit synthesized damage event.

Searing Flame II verbatim (tier 4 fire support, +5 Str): *"Supports any skill that Hits enemies, causing inflicted Ignites to deal more damage but its Hits to deal less damage. Supported Skills deal 30% less Damage with Hits. 100% more Magnitude of Ignite inflicted with Supported Skills"* (HIGH). Searing Flame I tier 3 gives 75% more magnitude with 25% less hit damage (HIGH). The gem text opens with *"Supports any skill that Hits enemies"* — this is a **gem-attachment-level gate clause**: the gem requires the supported skill to be able to Hit, not an effect-line-level gate. Tame Beast creates a companion with an auto-attack (Hit), so the gem attaches validly; the effect line "100% more Magnitude of Ignite inflicted with Supported Skills" is then broadly worded. **Caveat MEDIUM**: the clause "inflicted with Supported Skills" parallels the Xoph's Pyre clause "Damage from Hits with Supported Skills" — same "Supported Skills" referent. If the Xoph's Pyre effect line doesn't reach the IL synthesized ignite (because IL is a different gem, not in the Tame Beast Supported chain), then the Searing Flame effect line carries the same risk. The build doc treats Searing Flame as a pillar multiplier of roughly 75-100% more ignite magnitude applied to the IL channel (MEDIUM, needs a PoB falsifier to confirm), with the 25-30% less hit damage tradeoff on the auto-attack channel being irrelevant because the build's damage source is DoT ignite, not hit. Pre-falsifier-confirm, treat Searing Flame II + Xoph's Pyre as the **same MEDIUM confidence cluster** — not Searing Flame HIGH/Xoph LOW as the asymmetric pre-audit framing had it.

Magnified Area II verbatim (tier 3, +5 Int, cost & reservation multiplier 130%): *"Supports any skill with an area of effect, making it larger. Supported Skills have 45% increased Area of Effect"* (HIGH). The 0.4.0 patch verbatim *"Magnified Area II support gem no longer causes the supported Skill to deal less damage"* — pre-0.4.0 the gem had a damage penalty that's been removed, so it's now pure upside. AoE scales with radius² so the radius bonus = sqrt(1.45) - 1 ≈ +20% → IL radius 2 m → ~2.41 m effective. Not double radius, but enough to cover a medium pack from range instead of having to stand right next to them.

Xoph's Pyre verbatim (lineage support, requires level 65, +5 Str, cost & reservation multiplier 120%): *"Supports Skills that can cause Damaging Hits, granting extra Chaos damage and causing Chaos damage to Contribute to Ignites. Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes. Supported Skills Gain 40% of Fire Damage as Extra Chaos Damage"* (HIGH). Read the 2 effect lines carefully:

(1) *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"* — **double-gated on Hit**: the chaos damage must be from Hits, and must be "with Supported Skills". IL synthesized ignite is not a Hit, not "with Supported Skills" by a strict reading (Tame Beast is Supported, IL is a different gem). This effect line doesn't qualify for the IL channel.

(2) *"Supported Skills Gain 40% of Fire Damage as Extra Chaos Damage"* — belongs to the **"Gain X% of Damage as Y"** class. The Minion Instability wiki entry explicitly declares the exclusion verbatim *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"* (HIGH precedent). The same class exclusion logic applies: IL synthesized ignite *"as though dealing Base Fire Damage"* is a non-hit damage event in the same class as the MI explosion, so the "Gain X% as Y" modifier doesn't scale it. This effect line also doesn't qualify for the IL ignite channel.

Real uplift via the IL channel ≈ **0-15%**, coming only from the companion's auto-attack hit channel which is usually overridden by IL ignite's "highest ignite only" stacking rule (only the strongest ignite ticks on the enemy, and the IL ignite from 25% × 80k HP ≈ 20k base is always stronger than the auto-attack ignite tick).

**Explicit falsifier test for both gems**: in PoB toggle Searing Flame II and Xoph's Pyre individually, read the IL ignite tick delta:
- Searing Flame II off → on, a delta ≥80% confirms the "inflicted with Supported Skills" clause reaches the IL channel (treat as a HIGH multiplier); a delta <30% refutes it, treat Searing Flame as a dead slot on the IL channel
- Xoph's Pyre off → on, a delta ≤10% confirms the gate analysis (Xoph doesn't amplify IL); a delta ≥30% refutes it, the IL ignite has a path that qualifies a Hit-gated modifier that isn't yet clear

Both tests should be run independently on the same PoB snapshot. Cross-reference: the Minion Instability wiki explicit exclusion is the strongest precedent for the "Gain X% as Y" class not scaling a non-hit synthesized damage event.

A pre-Xoph's build is still fully online because IL ignite doesn't depend on this gem (worst case Xoph delta = 0); the gem is most valuable in the secondary skill phase (Frost Bomb / Storm Mage shock proc via the fire→chaos→ignite contribution through the valid Hit channel).

Feeding Frenzy I (tier 3) adds 30% more minion damage, 20% more damage taken — the gem text focuses on the damage uplift, not an explicit AI change.

**Bomber Setup (Leveling → Early Mapping):** :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Legion"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Instability"}. This is the setup used from level 22 until you have the endgame Elephant Tortoise.

The mechanics are read straight from the gem text. Bind Spectre carries the verbatim tags `[Minion]` `[Persistent]` — the Persistent tag is the gate for Last Gasp support, with the Last Gasp gem text reading *"Supports skills that create Persistent Minions, causing those Minions to fight on when they are fatally wounded, dying after a short duration or when they take further damage exceeding their maximum Life. Minions from Supported Skills die 4 seconds after their Life is reduced to 0"* (HIGH, wiki verbatim). Trying to pair Last Gasp with a skill that has no Persistent tag makes the support invalid, and it won't trigger. The Infernal Legion I gem text verbatim *"Minions from Supported Skills take 20% of their maximum Life as Fire Damage per second"* — this is the self-burn channel dropping the spectre's HP linearly. Minion Instability gem text verbatim *"Minions from Supported Skills explode when reduced to Low Life, dealing 15% of their maximum Life as Fire Damage to surrounding Enemies"*, combined with the wiki's "Mechanics and Interactions" clarification verbatim *"Minions summoned from the Supported Skill must be reduced to Low Life to explode. Anything that causes a minion to die without ever having low life (e.g. dying in 1 hit, replacement, expiring duration) will not cause an explosion"* (HIGH).

Closed-form damage chain per explosion (HIGH for the formula, LOW for the HP plug-in because it's community-tested): `damage = 0.15 × H_spectre` where `H_spectre` is the max HP of the captured spectre. Time-to-trigger depends on the IL self-burn rate of 20% max life/second — a full-HP spectre falls to the 35% Low Life threshold in `(1 - 0.35) / 0.20 = 3.25` nominal seconds, but the 4-second fixed Last Gasp window beginning from HP=0 (after the spectre has died) adds another 4 seconds of IL burn radius ticks dealing AoE ignite before the spectre disappears. The effective bomber cycle ≈ 3.25s ramp + 4s Last Gasp burn window + weapon-swap-resummon overhead (1-2s) ≈ 8-9s per spectre per cycle. With multiple spectres on the same socket via spirit stacking, the cycle runs staggered — there's always a spectre exploding while another is ramping.

The boss DPS breakpoint depends on the spectre HP value, which the POE2 wiki mirror **does not export verbatim** for each specific spectre. The Bramble Burrower (Hunting Grounds, Act 1) has very low community-tested HP — which is exactly why it only works in acts 1-2, the IL burn kills it within seconds. The Bogfeld Commoner in mid-campaign has a community-tested report of ~43,000 HP (LOW, community number, the wiki page doesn't yet exist for the Bogfeld Commoner). Plug it into the formula: damage per MI explosion ≈ `0.15 × 43,000 = 6,450` fire damage as a secondary HIT (verbatim Minion Instability wiki: *"The explosion is an area hit from the minion, dealing secondary damage. Its base critical hit chance is 0%"*). This is a hit, not an ignite, so it scales via the fire damage modifier source `[from] Minion` rather than ignite magnitude. The endgame Elephant Tortoise, if used for the bomber phase (usually not, since the Elephant is expensive and the build switches to pure IL walking simulator), has a community estimate of ~80k HP → ~12k damage per explosion (LOW, community number).

In-combat tip: a weapon swap resets the spectre pool — swap the weapon set off then back on to resummon the spectre at max HP. There was a 0.3.1b bug that was fixed, verbatim *"Fixed a bug where Minion Instability was able to trigger on Spectres that had been removed after weapon swapping"* (HIGH, wiki version history), meaning pre-0.3.1b had a triple-explosion exploit. Now swapping off then on resets the spectre cleanly, no double-trigger. Single-target DPS is very high because each MI explosion is a large individual hit, which can stun the boss and skip phase transitions.

Hidden exclusion check for Minion Instability — the wiki explicit *"Minion Instability does not scale with the Gain X% of Damage as Y modifier"* (HIGH). Nodes like Seething Body don't increase explosion damage. This is an important precedent for the gate analysis of Xoph's Pyre in the "Main Companion Setup" section — the same "Gain X% as Y" class exclusion for the non-hit synthesized damage event of the IL ignite channel.

**Curse Stack (triple-curse via Whispers of Doom):** A Blasphemy aura holds :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} in the same socket → manually cast :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Cursed_Ground"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Curse"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Decaying_Hex"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"}. Support stack for Blasphemy: :wiki-link{url="https://www.poe2wiki.net/wiki/Slow_Potency"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Ritualistic_Curse"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}.

Curse cap math for POE2 0.5: base 1 + Incessant Cacophony ascendancy +1 + :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} keystone +1 = **a cap of 3 curses at once**. Whispers of Doom verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"* (HIGH) — a top-side passive tree keystone, allocate path costs 2-3 points depending on entry. The downside of 2x activation delay (1.5s → 3s) doesn't matter for mapping because Incessant Cacophony gives infinite duration curses that persist across pack engagements; for boss fights you only need to pre-cast Despair once outside the aggro window. Bandwidth tradeoff: +1 curse layer trades for 1.5s slower curse activation — high ROI because the 3rd curse layer opens the chaos→ignite chain channel (see the Evergrasping Ring + Xoph's Pyre interaction detail below).

Blasphemy verbatim (tier 8 meta gem): *"Turn socketed Curse skills into vile Auras, applying their effects to all nearby enemies. Socketed Curse Skills apply in an Aura around you. Reserves 60 Spirit per socketed Curse"* (HIGH). The key difference vs the old guide: pack **2 curses into the same Blasphemy meta gem** instead of 1 Blasphemy + 1 separate manual curse. 2 curses on the same socket = 60 × 2 = **120 spirit reservation aura**, double the cost but you get Elem Weak always-on (-49% all ele res = +49% fire ignite DoT) instead of having to spam a manual cast when engaging a boss. The Lich endgame spirit budget is ~250-300 (via Crystalline Phylactery + spirit gear), so 120 reservation = 40-48% — still plenty left for companion + skeleton utility.

Temporal Chains gem text verbatim (tier 7 spell): *"Curse all enemies in an area, Slowing them and making other effects on them expire more slowly. Curse applies after 1.5 seconds delay. Curse radius is (1.5-3.1) metres. Curse Slows targets by (40-59)%. Curse duration is (6-7.4) seconds. Curse makes other effects on targets expire 25% slower. Curse does not apply to enemies above level (20-0)"* (HIGH). The level cap clause is important for leveling: at gem level 1 it only curses enemies ≤ level 20, and at level 20 the cap is gone. Mid-campaign you can only curse low-tier bosses; at endgame gem level 20 it's fully unlocked for every boss. 25% slower ailment expiry = the ignite tick stays on the target longer → tick count increases → effective DPS uplift.

Elemental Weakness verbatim (tier 7 spell, 0.3.0 consolidation patch): *"Curse all targets in an area after a short delay, lowering their Elemental Resistances. Curse applies after 1.5 seconds delay. Curse inflicts -(40-59)% to Elemental Resistances. Curse radius is (1.5-3.1) metres. Curse duration is (6-7.4) seconds"* (HIGH). It merged Flammability/Hypothermia/Conductivity from pre-0.3.0 into a single curse that shreds all 3 resistances. This is a direct ignite DPS multiplier — at endgame gem level 20 it gives -49% fire res → +49% fire ignite tick.

Slow Potency verbatim: *"Debuffs inflicted with Supported Skills have 15% increased Slow Magnitude"* (HIGH, tier 1, +5 Dex). Applied to Temporal Chains slow 40-59% × 1.15 → 46-68% effective. Magnified Area II verbatim *"Supported Skills have 45% increased Area of Effect"* (HIGH) — radius² scaling → effective radius +sqrt(1.45)-1 ≈ +20%. Ritualistic Curse verbatim *"Supported Skills have 50% increased Area of Effect / Curse zones from Supported Skills erupt after 30% more delay"* (HIGH) — stacks with Magnified Area for an AoE multiplier of 1.45 × 1.50 = 2.175 = +117.5%, effective radius ~1.5×; the +30% delay penalty is acceptable because the Blasphemy aura is always-on.

**3rd curse — manual cast Despair:** Despair verbatim (tier 9 spell, chaos curse): *"Curse all targets in an area after a short delay, lowering their Chaos Resistance. Curse applies after 1.5 seconds delay. Curse inflicts -(35-49)% to Chaos Resistance. Curse radius is (1.5-3.1) metres. Curse duration is (6-7.4) seconds"* (HIGH). Decaying Hex support verbatim (tier 3 curse support, +5 Int, 130% cost mult): *"Supported Skills inflict Decay, dealing 100% of Intelligence as Chaos damage per second for 8 seconds"* (HIGH) — with an endgame INT stack of 250-300, the Decay ticks ~250-300 chaos/sec/target over the 8s window. Heightened Curse verbatim *"Supported Curses have 25% increased Magnitudes"* (HIGH, tier 1) pushes the effective shred to -49% × 1.25 = **-61% chaos res**.

The Despair 3rd-curse value is gear-gated on :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"}: verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"* (HIGH). A companion equipped within presence → its auto-attack hit gains 15-25% extra chaos → Despair's -61% shred amplifies the channel → Xoph's Pyre Effect 1 *"Chaos Damage from Hits with Supported Skills also Contributes to Flammability and Ignite Magnitudes"* converts chaos into ignite contribution **on the companion hit channel** (a real Hit, qualifies the gate, unlike the IL synthesized ignite). Pre-Evergrasping/pre-Xoph stacking, the 3rd curse Despair's value = only Decaying Hex chaos DoT (~250-300/sec/target) + chaos res shred for a rare-mod buff from Headhunter (if equipped). Post-gear, combined channel uplift ~30-50% (MEDIUM, needs a PoB toggle test to confirm the gate interpretation).

Real bandwidth from stacking curse layers: the enemy slowed 46-68% + shredded -49% all ele res + -61% chaos res + taking ~250-300/sec chaos DoT from Decay. Hard hit on all 3 fronts — damage, slow, ailment-expiry. The aura radius is 5.6m diameter, the Despair manual radius ~3.1m endgame (Magnified Area amplifies 20% → ~3.7m).

**Alternative path :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Allure"} (skip Whispers of Doom):** Atziri's Allure lineage support verbatim (Level 65 requirement, +5 Int): *"Supports Curse Spells you cast yourself, causing those Curses to ignore the usual Curse Limit, but be reflected back to you when inflicted / Curses inflicted by Supported Skills ignore Curse limit / Curses inflicted by Supported Skills are reflected back to you / Supported Skills have 20% less Curse Effect"* (HIGH, 0.4.0 nerf 25%→20%). It allows a 3rd (or 4th+) curse to bypass the cap without needing the WoD keystone, but the penalty of 20% less curse effect = -10% effective shred. The reflection clause reflects the curse onto the player → CI completely defangs the chaos curse (life=1 can't take chaos, ES doesn't take chaos via the CI keystone). It drops from the Anomaly bosses Ytzara, Blood Oracle and Maztli, Flesh-Shaper in the Sealed Vault — drop level 65 restricted.

The Lich path with Incessant Cacophony + WoD cap of 3 **doesn't need** Atziri's Allure. Atziri's Allure's value is mainly for the Shaman/Druid path (which has no Incessant Cacophony, cap = 2 without Atziri), or to push a 4th-5th curse stack with the diminishing-returns 20% penalty per gem socket. Skip it for the standard Lich path.

**Dialla's Desire relocation note (vs the old guide):** Dialla's Desire verbatim (Level 65, 90% cost mult): *"+1 to Level of Supported Skill Gems / +10% to Quality of Supported Skills"* (HIGH). The old guide socketed Dialla on the Blasphemy curse channel; the Lich video PoB (Ranny El) moves Dialla to the IL spectre channel (same socket as Infernal Legion III + Xoph's Pyre + Feeding Frenzy II + Muster). The reason: +1 gem level on Spectre: Gargantuan Wasp / Tame Beast → +1 companion HP scaling tier → directly increases the IL ignite base of 25% × H. Tier-zero ROI compared to +1 Temporal Chains level (which only raises slow magnitude by 1-2%). The curse channel loses 60 × 0.9 = 54 spirit of savings from Dialla — an acceptable tradeoff because the spirit budget is comfortable with this layout.

**Exposure:** :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Bomb"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Compressed_Duration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Potent_Exposure"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Cooldown_Recovery"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}. Frost Bomb applies Elemental Exposure (starting at -20% all elemental res, ramping to -50% over each pulse). Potent Exposure increases the baseline exposure magnitude. This is the strongest -res layer the build has — stack it on top of the Elemental Weakness curse to heavily shred boss res.

**Shock Bot:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Storm_Mage"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Overcharge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Tecrod's_Revenge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Feeding_Frenzy"}. The Storm Mage's native lightning damage applies shock onto enemies — combined with Overcharge to boost shock magnitude. Enemies are always ignited → the shock interaction overlap doesn't drop. Shock magnitude 50% = the enemy takes 50% more damage from every source including the IL ignite.

**Heal/Utility:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Cleric"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Army"}. The Cleric heals the companion + player ES, especially important since IL self-burn constantly damages the companion.

**Boss Damage Button:** :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Offering"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Brutus'_Brain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"}. Sacrifice a skeleton warrior → boost the damage of the remaining minions. Press it when engaging a boss to spike DPS.

**Sacrifice Fodder:** :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Warrior"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Lamb"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Deathmarch"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Meat_Shield"}. The Skeletal Warrior granted from an equipped Rattling Sceptre exists solely as food for Pain Offering.

**Mobility (Weapon Swap):** :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Convalescence"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Second_Wind"}. Blink on the weapon swap set for 2 charges (Second Wind), effective CD of 1.7s thanks to CDR stacking on the swap gear. The loop: swap → blink → swap back → companion TPs along.

## Ascendancy

Lich ascendancy was chosen because its identity is low-life + curse explode + ES sacrifice — fitting the build's engine better than any other Witch ascendancy.

The Lich tree is a flat list of 9 notables connected through a prerequisite chain, with no trial-cluster division. The allocation order prioritizes the build's identity, not "which lab":

**Soulless Form → Eternal Life** is the frozen-life engine pillar of the build. Soulless Form (preceding: Life) verbatim: *"Regenerate Mana equal to 6% of maximum Life per second. No inherent Mana Regeneration. 10% of Damage taken bypasses Energy Shield."* Eternal Life (requires Soulless Form) verbatim: *"Your Life cannot change while you have Energy Shield."* This pair freezes the life value while ES > 0 → a permanent ES-as-pool state.

Two mechanical traps that almost no community guide explains clearly:

**Trap 1 — Soulless Form mana sustain under CI = 0**. GGG patch 0.2.0 verbatim: *"Setting a stat to a specific value (such as Chaos Inoculation setting your life to 1 or Blood Magic setting your mana to 0) now occurs before conversion is applied to that stat."* CI capping life=1 applies BEFORE Soulless Form reads the max life value. Effective mana regen = 6% × 1 = **0.06 mana/sec ≈ 0**. Every build guide claiming "Soulless Form sustains mana for a CI Witch" has the math wrong. The build actually sustains mana via a mana flask "of the Mixologist" + a mana-on-kill ring affix. Soulless Form's only value is its role as a **prerequisite for Eternal Life**, not mana sustain.

**Trap 2 — Eternal Life defangs the 10% bypass clause = a free 10% less damage**. Reading the Soulless Form penalty "10% damage bypasses ES" looks like a deadly tradeoff under CI life=1, but the Eternal Life mechanics verbatim: *"The damage you would have taken to life that bypasses energy shield is ignored until energy shield is fully depleted, effectively granting an equivalent less damage taken modifier."* A hit of 1000 → 100 bypasses ES → the bypass-portion-to-life is ignored → effective 900 damage to ES, 0 to life. Net = **a free 10% less damage taken** as long as ES isn't depleted. This is a defensive layer everyone misses when first reading the Soulless Form penalty.

**Failure mode**: The engine collapses when a single hit exceeds the full ES pool. Eternal Life verbatim: *"If a single hit deals enough damage to fully deplete energy shield, the remainder of the damage is fully taken to life."* A 9k phys hit into an idle 7,987 ES → ES depleted + ~1k overflow into life=1 → instant death, despite the nominal EHP of 58,533. **The max-hit cap (Pr3vie 11,752 phys) is the metric that matters**, not the raw ES pool. Mitigation comes from armour + block (~73% from a Bitterbind Point analog shield) + position (don't stand in slam telegraphs) + the Eternal Life 10% less damage layer.

**Triple-application flask press**: A single life flask press under this setup triggers 3 sustain channels at once: (1) applied to the player's life — wasted because life=1 is frozen, (2) applied to the player's ES via the Shavronne implicit — the main ES sustain engine, (3) applied to the companion's HP via the :wiki-link{url="https://www.poe2wiki.net/wiki/Nurturing_Guardian"} notable (main tree Companion cluster) verbatim *"Life Recovery from your Flasks also applies to your Companions."* One button, 3 sustain channels — Tier-zero ROI for the passive tree path through the Companion cluster.

Specific ES sustain math chain (Pr3vie endgame): a Greater Life Flask base recovery of 500/sec × 3 sec × the "of Saturation" suffix (+50%) = 2,250 base → Shavronne's 25% reduced rate = 1,690 effective → redirected to ES via the implicit = **+1,690 ES per press ≈ 21% of the pool restored/button**. Spamming 4-5 flasks in combat keeps the ES floor stable.

**Anti-synergy must-avoid**:
- **Zealot's Oath**: The Eternal Life wiki explicit *"Eternal Life will prevent recovery of energy shield from excess life recovery with Zealot's Oath."* Life regen → ES conversion assumes a life change event; Eternal Life freezes life → no change → 0 ES gain. Allocating it = a wasted point.
- **Lifetap / Blood Magic support**: Eternal Life verbatim *"unable to use any skill or effect that requires you to spend life in order to occur."* A skill with a life cost fails the cast check.
- **Heavy Buffer + stacking more bypass**: Soulless Form already gives 10% bypass. Heavy Buffer +10% → 20% total. Eternal Life still ignores the bypass-to-life as long as ES > 0, but the max-hit threshold drops ~12% (11,752 → ~10,400 phys). Avoid stacking additional bypass sources.
- **Demon Stitcher gloves "Sacrifice X% Life to gain ES"**: Sacrifice = X% × 1 = 0 → gain = 0 ES. The wiki *"It is possible to use effects that sacrifice life, but no life will actually be sacrificed."* Inert.
- **Wearing a rare Stygian Vise instead of Shavronne**: The engine collapses immediately — without the Shavronne implicit, a life flask press = 0 ES restore. Shavronne is mandatory, no substitute.

**Allocation order**: Allocate the CI keystone first (level 60-65) → Soulless Form + Eternal Life after life is already capped=1. If you pick Eternal Life while life is still at the passive tree calc value (e.g. 800-1200), life freezes at that value → the next leveling phase is blocked from all life recovery (flasks don't heal, regen doesn't tick) → acts 6-10 become hard to play.

**Rupture the Soul → Incessant Cacophony** is the curse + explode pillar of the build. Rupture the Soul verbatim (Lich notable, preceding Curse Area): *"Cursed Enemies killed by you, or by Allies in your Presence, have a 33% chance to explode, dealing a quarter of their maximum Life as Chaos damage"* (HIGH). Two key clauses: (1) "Allies in your Presence" — includes the companion (Elephant Tortoise) and every other minion in the presence radius, so an ignite kill from the IL channel **qualifies to trigger the explosion** even though the damage source is a minion synthesized ignite, not a player direct hit; (2) "a quarter of their maximum Life as Chaos damage" — 25% of the dead enemy's max HP, not scaled by the player damage stat, not scaled by the minion damage stat — only scaled by the dead enemy's HP. A trash pack with 5,000 HP → explosion = 1,250 chaos damage AoE; a rare with 50,000 HP → 12,500 chaos AoE.

Chain-clear pack math: the first enemy in a pack dies via an IL ignite tick → rolls 33% → triggers a 25%-max-HP chaos explosion → AoE damage to adjacent enemies → the adjacent enemies are already Temporal Chains slowed so they can't escape in time, taking the full chaos splash → if the splash hits the low-life threshold, the current IL ignite tick finishes the kill chain → triggers another 33% roll. The probability of chain-clearing a pack of 6 enemies: the probability that no explosion triggers across 6 kills = `0.67^6 ≈ 0.090` (9%), meaning **91% of 6-enemy packs have at least 1 explosion trigger** in the clear cycle. With multi-trigger (each kill independently 33%), expected explosions per pack of 6 = `6 × 0.33 = 2 explosions` average. This is the chain-pop engine that makes the walking simulator phase clear so fast — the player walks through, the IL ignite ticks 1-2 enemies, and the explosions trigger to pop the rest of the pack.

Player self-safety under chain-explode: CI chaos immunity (life=1 can't take damage, ES doesn't take chaos via the CI keystone) → a chain explosion adjacent to the player does literally 0 damage to the character. This is a critical synergy — a build without CI could be one-shot by the chaos splash from Rupture the Soul if standing in the middle of a pack. CI completely defangs that risk.

Incessant Cacophony verbatim (Lich notable, requires Rupture the Soul): *"You can apply an additional Curse. Curses you inflict have infinite Duration"* (HIGH, 0.3.0 patch renamed from "Dominion over Flesh" and changed the effect from Hexproof-bypass to infinite duration). It opens up a dual-curse for the Temporal Chains aura (Blasphemy-driven, always-on) + Elemental Weakness manual cast simultaneously. The infinite duration clause is critical for boss fights: cast Elemental Weakness once at the start of the fight → the curse never expires, no need to recast through a long phase, freeing up button uptime for the Frost Bomb + Pain Offering rotation. This is a big quality-of-life upgrade for pinnacle fights that drag on 1-2 minutes.

**Crystalline Phylactery** (preceding: Energy Shield): "100% increased Effect of the Socketed Jewel. Can Socket a non-Unique Basic Jewel into the Phylactery. 50% more Mana Cost of Skills if you have no Energy Shield." Pick it late if you have spare points — socket a rare basic jewel with companion damage/life, effect x2. The mana cost tradeoff only triggers when ES = 0, so a CI/low-life build doesn't fear it.

Can be skipped: **Necromantic Conduit + Blackened Heart** (the Unholy Might branch relies on mana economy, and a CI build's small mana pool doesn't scale well), **Eldritch Empowerment + Price of Power** (spell sacrifice/power charge — the build's damage source is DoT ignite, it doesn't cast spell hits so the 30%/40% more spell damage doesn't apply).

## Passive Tree & Mastery

The tree splits into 3 main intent clusters, pathing from the Witch start:

**Cluster 1 — Minion Core (top-left):** The first path from the Witch start up to the minion damage + minion life + minion AoE region. This is the baseline damage — every +minion life node directly increases the IL ignite base. Prioritize minion life nodes before minion damage because IL scales with life, not generic damage.

**Cluster 2 — Companion Scaling (via From Nothing):** Path down to the :wiki-link{url="https://www.poe2wiki.net/wiki/Glancing_Blows"} cluster via the :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} jewel socket. From Nothing lets you allocate nodes behind a keystone without taking the keystone itself. The build goes pure ES/CI so Glancing Blows (POE2 0.5 = "Chance to Evade is Unlucky, Chance to Deflect is Lucky") gives nothing — skip the keystone, just take the small/notable bonuses in the radius. This region contains 2× 18% companion damage + 2× 18% companion life + 15% defenses while a companion is next to you. This is the most investment-efficient cluster for a companion build.

**Cluster 3 — CI + ES (path through the center):** The :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} keystone for chaos immunity, with ES as the only pool. Take this path early (level 60-65) because chaos damage is the biggest threat during the campaign and early mapping when you don't yet have chaos res on gear.

**Cluster 4 — Whispers of Doom (top-side):** The :wiki-link{url="https://www.poe2wiki.net/wiki/Whispers_of_Doom"} keystone verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"* (HIGH). Top-side passive tree, path 2-3 points from the Witch start through intermediate spell/curse nodes. This is the enabler of the triple-curse stack — combined with the Incessant Cacophony ascendancy it pushes the curse cap from 1 → 3. The 2x activation delay downside (1.5s → 3s) is fully mitigated via (a) Incessant Cacophony's infinite duration for the already-applied Blasphemy aura and the single Despair manual cast at the start of a boss, (b) the Grip of Kulemak ring mod *"(20-10)% faster Curse Activation"* canceling partial delay if equipped. Allocation timing: level 75+ after you already have CI + the Lich ascendancy + Incessant Cacophony — the pre-WoD build is still online with a 2-curse cap, WoD is an endgame damage layer.

**Jewel Sockets:** 6-7 important sockets:
- :wiki-link{url="https://www.poe2wiki.net/wiki/Prism_of_Belief"} — corrupted, rolls +(1-3) random skill levels. Reroll via corruption RNG to target Tame Beast (companion HP scaling). A +3 high-roll isn't guaranteed, drops from The Arbiter of Ash
- :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} — unlocks the node radius around Glancing Blows without needing the keystone, drops from The King in the Mists
- :wiki-link{url="https://www.poe2wiki.net/wiki/Megalomaniac"} — a random 2-3 notable jewel from Simulacrum, reroll until you hit a notable in the INT/STR-INT area that serves the companion (note: the 0.2.0 patch removed starting-area notables from the roll pool, don't expect a minion-specific notable)
- Rare jewels: stack companion damage + companion life rolls

**Weapon Set 2 tree** allocates a separate ~23 nodes focused on cooldown recovery + block + cast speed for Blink. Take it because the weapon swap engage state is different from the main combat state — the swap set needs CDR for Blink, the main set needs minion scaling.

PoB reference: https://pobb.in/MzsIsZXdSp72 (Pr3vie endgame), https://pobb.in/K60h4jeLHC5R (jungroan league start)

## Stat Priorities & Defenses

Numbers from the Pr3vie endgame PoB (character level 96, full gear):

- **ES / Life:** ES dominant (CI build, life pool irrelevant). ES scales via item mods (+24 max ES boots, +23% max ES belt enchant, body Corpse Coat ES roll)
- **EHP:** **58,533**
- **Phys Maximum Hit Taken:** **11,752**
- **Resistances:** 75% cap all elements + Chaos immune (CI)
- **Attributes:** STR 67 / DEX 160 / INT 162 (Witch INT base + DEX for the evasion hybrid)
- **Speed:** 1.32× attack/cast speed multiplier
- **Crit:** Build is not crit-based — damage is mostly DoT from ignite
- **Combined endgame DPS budget:** ~23M per the Pr3vie PoB — this is a **combined-channel total** aggregating every damage source: IL synthesized ignite (primary, scaling with companion HP), Minion Instability explosions from the bomber phase, companion auto-attack hits, the Last Gasp extended burn window, and curse-explosion pops from Rupture the Soul. The IL channel alone in closed form ≈ `0.05 × H × M_searingflame × M_other × D_target` — with companion HP `H=80,000`, `M_searingflame=2.0` (Searing Flame II), `M_other=1.4` (passive + jewel + ascendancy magnitude stack), `D_target=1.5` (Shock + Elemental Weakness + Frost Bomb exposure), DPS per target ≈ 16.8k, multi-target across 5 enemies ≈ 84k effective. To reach the 23M total, the build leans heavily on combined-channel stacking, not IL alone.

Stat priority when gearing:
1. **+Level to Minion Skills** — the single highest damage scaling, each +1 level increases companion HP → increases the IL ignite base. The best ROI lever in the whole build because the IL channel scales linearly with companion HP, with no ceiling.
2. **Minion Life %** — direct damage scaling via the same mechanism above
3. **ES + Resist cap** — survivability baseline
4. **Spirit** — more spirit = more spectres/skeletons, important for the bomber phase
5. **Cooldown Recovery Rate** — CDR for Blink on the swap set, increases mobility
6. **AoE** — expands the IL burn radius, mapping comfort

### Performance Ratings

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 5            |
| boss_damage     | 4            |
| survivability   | 4            |
| mobility        | 4            |
| league_start    | 5            |
| budget_scaling  | 5            |

## Resources

- **PoB (jungroan league start):** https://pobb.in/K60h4jeLHC5R
- **PoB (Pr3vie endgame updated):** https://pobb.in/MzsIsZXdSp72
- **PoB (Pr3vie original):** https://pobb.in/D5R1g7C_q8Xp
- **PoB (Pr3vie alt tree pre-95):** https://pobb.in/vS01JZ7WK1iT
- **Video (jungroan full run):** https://www.youtube.com/watch?v=le5zwr76S4Q
- **Video (Pr3vie showcase):** https://www.youtube.com/watch?v=_8DuXvlNL0E
- **Video (Oscrix guide):** https://www.youtube.com/watch?v=ALqcvXkm8pc
- **Mobalytics (Oscrix):** https://mobalytics.gg/poe-2/profile/b14a0157-43c2-4615-a0e8-d3051ea1203f/builds/bb8387cf-1714-4218-b337-bca9892d0f99
- **Character profile (Pr3vie):** https://poe.ninja/poe2/profile/Prevy-1389/character/Prevy_Beastkeeper

## Gear Progression

### Leveling

Campaign gear is simple: any sceptre with +minion damage or +spell level to scale the ED/Contagion phase 1. When you swap to IL at level 22, prioritize gear with a spirit roll — more spirit = more spectres for the bomber setup. Check the weapon vendor every act: look for a sceptre with +1 minion skills or 50% increased minion damage (jungroan notes a 50% increased damage sceptre is better than a +1 strength weapon at this stage).

Res doesn't need to be capped during the campaign — the IL spectre handles damage itself, the player just needs to survive long enough to follow along. Stack ES rolls on every available slot. Buy your first :wiki-link{url="https://www.poe2wiki.net/wiki/Lesser_Jeweler's_Orb"} in act 3 (a guaranteed drop) to socket an extra support for the Bogfeld Commoner.

### Early Mapping

Priority #1 is to **farm an Elephant Tortoise** from **Whakapanu Island** or **Kriar Village** — these are the 2 maps where an Elephant Tortoise rare spawns (per the Tame Beast wiki entry). The Elephant's spirit reservation after capture = 56.1%. The wiki note verbatim: "Extremely high life pool. Great with Infernal Legion III." Buy a waystone with the mod "Rares have 1 additional Modifier" to increase the chance the Elephant rolls a good mod. Run the map but do NOT complete it (leave 1 rare alive) → come back to reroll a new Elephant.

The mandatory mod the Elephant must have: **Increased Area of Effect** — it pushes the IL ignite radius from the 2 m baseline up to ~3 m or further depending on the roll value, the difference between "having to stand right next to them" and "roasting a whole pack from range". High-value bonus mods: Haste Aura (10% MS for player + minion), All Damage Chills (auto 10% chill), Periodic Invulnerability Aura, ES Aura. Farm an average of 3-7 hours to roll an Elephant with Increased AoE + 1 supplementary mod.

Baseline early mapping gear: cap res 75% on every element, +1 to all minion skills weapon, stack ES rolls on every slot. Allocate the CI keystone early at level 60-65 to drop the chaos res requirement off your gear.

### Endgame — Path Decision (A: Walking Simulator vs B: Triple Curse Bomber)

The build has 2 endgame archetypes branching at the Shavronne's Satchel vs Headhunter belt decision. This isn't a single item swap — it's an **engine choice** affecting the survival model, the IL host, and the damage layer focus. The two paths can't hybridize because the 2 belts are mutually exclusive.

**Path A — Walking Simulator (high boss survivability, AFK clear)**: Shavronne's Satchel + Tame Beast + Elephant Tortoise + dual-curse Blasphemy. ES sustain via the Shavronne implicit "Life Recovery from Flasks also applies to Energy Shield" — spam a life flask to restore ES. The Elephant Tortoise wiki note "Extremely high life pool" → highest IL ignite base damage. A single companion at 56.1% spirit, no drop-spectre math, AFK-low-APM gameplay. Risk: a single point of failure (companion dies → 60-90s respawn, a 0 DPS window).

**Path B — Triple Curse Bomber (clear speed scaling, multi-spectre redundancy)**: Headhunter + Bind Spectre + Gargantuan Wasp stack + triple-curse layout (Whispers of Doom). Headhunter verbatim *"When you kill a Rare monster, you gain its Modifiers for 60 seconds"* (HIGH) — the rare-mod buff stack creates exponential clear speed scaling when farming juiced maps + Breach + rare-rich content. Bind Spectre allows a multi-spectre stack at ~20-30% spirit per spectre, with the drop-1-spectre-for-1-curse math applying natively (the Ranny El video thesis). You lose the Shavronne ES sustain loop → you need a replacement layer (Ghost Dance ES on dodge, Nascent Hope freeze recharge, a Crystalline Phylactery socketed rare ES recovery jewel). Risk: the max-hit ES threshold drops if you don't layer in a sustain replacement → uber boss slams become riskier.

Recommended for greenfield planning (a build not yet played): **start with Path B first** because (a) the triple curse math applies natively, exploiting the video insight immediately; (b) there's no 3-7h Elephant AoE-mod farm grind; (c) multi-spectre redundancy reduces rage-quit moments; (d) the gem setup overlaps ~80% with Path A so pivoting is easy after you've accumulated enough currency. Pivot to Path A when you're regularly farming Sim 15 + the Arbiter pinnacle and need maximum ES sustain.

### Endgame Path A — Walking Simulator Gear

**Weapon (main):** Rattling Sceptre rare with +4 to Level of all Spell Skills, allies-and-presence damage, a minion max life roll, a spirit roll. The companion gem is socketed here.

**Weapon (swap):** Volatile Wand rare with cast speed + spell skills + cooldown recovery for Blink (target 1.7s effective CD). Shield swap: rare with 49-50% cooldown recovery rate.

**Amulet (endgame stat-stick):** The community PoB calls this item the "Apocalypse Curio" (per the Pr3vie endgame PoB), but the original item name has no wiki page in the POE2 0.5 mirror — it could be a desecrated mod prefix/suffix bundle on a rare amulet, not a unique. Target mods: **+5 to Level of all Minion Skills**, 35% Spirit, allies-and-presence damage 87%, presence AoE 85%, desecrated "Minions have 54% increased maximum Life". Confidence LOW until the original name is confirmed — verify on trade before sinking 50+ div. This is the single biggest damage stat-stick of the build — pushing the companion gem from 21 to 26 effective.

**Body:** Corpse Coat rare evasion/ES base — max ES roll + 1 resist.

**Belt:** :wiki-link{url="https://www.poe2wiki.net/wiki/Shavronne's_Satchel"} — target 3 charm slots (a level 62 belt naturally rolls 1-3 charm slots, corruption/enchant is a separate min-max layer). +23% max ES enchant. The key implicit "Life Recovery from Flasks also applies to Energy Shield" — the ES sustain engine of the low-life build, spam a life flask → restore ES.

**Helm:** Rare with +2 to Level of Minion Skills, max ES, resist.

**Boots:** Rare quality 20, 2 sockets for runes, +max Life, +DEX, increased Evasion/ES.

**Gloves:** Rare ES + resist roll.

**Rings:** Rare companion damage/life rolls + resist.

**Jewels:** Prism of Belief (+3 skill levels), From Nothing (Glancing Blows path), Megalomaniac (target companion damage + life + AoE), :wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} (ES recharge on freeze), rare jewels stacking companion stats.

### Endgame Path B — Triple Curse Bomber Gear (per the Ranny El video Lich PoB)

**Weapon (main):** Chimeric Call rare Omen Sceptre — a sceptre base with an ignite-friendly implicit. Target mods: +4-5 to Level of all Minion Skills, allies-and-presence damage 80-90%, a minion max life roll, a spirit roll, a Strength roll (to qualify the Grip of Kulemak ring 200 STR gate).

**Weapon (swap):** Tempest Charm rare Tasalian Focus (a Witch off-hand focus type with an ES/spirit base). Target mods: cooldown recovery 49-50% for Blink, spell skill levels, cast speed.

**Amulet (endgame):** :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Amulet"} rare — a real wiki base item. Target mods: **+5 to Level of all Minion Skills** (desecrated), +30-40 to Spirit, allies-and-presence damage 80-90%, presence AoE 80-90%, +35% Spirit affix. This is the official replacement for the "Apocalypse Curio" community nickname in Path A — the Solar Amulet is a wiki-verified base name, and the mod stack is achievable on trade for 50-100 div depending on roll quality.

**Body:** Sacrificial Regalia rare ES base — max ES roll + resistance + +1 to all skill levels if you can roll it.

**Belt:** :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} — Heavy Belt unique. *"When you kill a Rare monster, you gain its Modifiers for 60 seconds"* (HIGH). 1-3 charm slots roll, +40-60 max Life (wasted because of CI life=1), +20-40 STR (helps qualify the Grip of Kulemak 200 STR gate), +20-40 DEX. Tradeoff: losing Shavronne ES sustain — you must layer a replacement via jewel + charm + Ghost Dance.

**Helm:** Ancestral Tiara rare (ES base for Witch). Mods: +2 to Level of all Minion Skills, max ES, resist, +Spirit.

**Boots:** :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr"} — Lattice Sandals unique. Tier-zero leveling boots, endgame value via the +Spirit roll helping the triple-curse spirit budget. Path B alternative: rare boots with max ES + DEX + movement speed if Spirit is already enough from the Solar Amulet stat-stick.

**Gloves:** Sirenscale Gloves rare — ES base, max ES + resist + a spirit roll. This slot has no tier-zero unique, rare-with-good-rolls is the default.

**Rings:** **Slot 1** = :wiki-link{url="https://www.poe2wiki.net/wiki/Grip_of_Kulemak"} (Abyssal Signet unique, requires 200 STR via the Headhunter buff). Important verbatim mods: *"(20-10)% faster Curse Activation"* (cancels the Whispers of Doom 2x delay partially), *"(15-25)% increased Area of Effect of Curses"* (stacks with Magnified Area), *"(20-30)% increased Ignite Magnitude"* (direct IL DPS scaling), *"(8-12)% Gain of Damage as Extra Fire Damage"* (companion hit channel). **Slot 2** = :wiki-link{url="https://www.poe2wiki.net/wiki/Evergrasping_Ring"} (Pearl Ring unique). Verbatim *"Allies in your Presence Gain (15-25)% of Damage as Extra Chaos Damage / Enemies in your Presence Gain (6-12)% of Damage as Extra Chaos Damage"* (HIGH). Opens the chaos-extra chain → Despair shred → Xoph's Pyre fire→chaos→ignite contribution on the companion hit channel (critical for the Path B damage model).

**Flasks/Charms:** Flask 1 = :wiki-link{url="https://www.poe2wiki.net/wiki/Blood_of_the_Warrior"} (Gargantuan Life Flask unique — wasted life recovery under CI but gives a utility buff). Flask 2 = Ultimate Mana Flask of the Brewer, magic. Charms: :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} (Golden) + :wiki-link{url="https://www.poe2wiki.net/wiki/Ngamahu's_Chosen"} (Ruby) + :wiki-link{url="https://www.poe2wiki.net/wiki/Nascent_Hope"} (Thawing — ES recharge on freeze, mandatory as the Path B ES sustain replacement).

**Jewels:** Prism of Belief (+3 skill levels), From Nothing (Glancing Blows region path), Megalomaniac (target a curse-friendly notable), rare jewels stacking companion damage/life + ES recovery rate. Crystalline Phylactery socketing a rare basic jewel with companion HP + ES recovery rate mods to x2 the effect.

### Mirror Tier (BiS)

Mirror-tier upgrades are heavy diminishing returns — each upgrade after Apocalypse Curio +5 only adds 10-15% damage for 10× the currency.

- **Apocalypse Curio +6 minion skill levels** instead of +5 — the single highest ROI if you can roll it
- **Megalomaniac perfect 3-notable:** companion life + companion damage + minion AoE all on one jewel
- **Prism of Belief +3** guaranteed — PoB doesn't display it correctly but in-game it still levels up the companion gem
- **Mirrored Rattling Sceptre:** max +5 minion skills + 100%+ allies-and-presence damage + minion max life
- **Corrupted Shavronne's Satchel:** enchant at max tier (28% max ES vs 23% baseline)

## Flasks

POE2 uses a flask + charm system instead of POE1's 5 flasks. The setup is via Shavronne's Satchel (target 3 charm slots from a natural roll) + 2 flasks:

**Life Flask** (magic, "of the Sylvan" instant recovery) — this is the main spam button. Life recovery converts to ES via the Shavronne implicit. Press it constantly in combat, especially when the companion is burning near the player.

**Mana Flask** (magic, "of the Mixologist" increased charges) — backup mana sustain. Rarely used since most skills are free or spirit-reserved, but needed for the Frost Bomb + Elemental Weakness manual cast spam.

**Charm slots (3):** an anti-stun charm (prioritize the "of the Brewer" prefix for extra duration), an anti-ignite charm (the IL self-burn companion can ignite the adjacent player), an anti-freeze charm (combined with Nascent Hope recharging ES on freeze).

**Tip:** POE2 doesn't yet have belt auto-flask uptime like :wiki-link{url="https://www.poewiki.net/wiki/Mageblood"} from POE1. The closest is the Shavronne charm slots — focus on a "Flasks gain charges per second" roll to approach 100% flask uptime.

## Pantheon & Bandits

POE2 has no Pantheon or Bandit system. This section covers **atlas tree priorities** as a replacement:

**Atlas farming priorities:** Invest the atlas tree into the monster modifier slot (extra mods for the Elephant roll when farming Azmerian Ranges), beast spawn rate, and ground effect chance (fire ground synergy with IL). After you have the endgame Elephant, pivot the atlas tree to map sustain + delirium/simulacrum nodes for Sim 15 farming.

**Trials of Sekhemas** (ascendancy point source) — the community PoB mentions a ring called "Sama's Resolves" with the mod "Resistance unaffected by area penalties" as a BiS ring option if you can farm it. Confidence LOW: this ring has no wiki page in the POE2 0.5 mirror, it could be a community nickname or an item not yet wikified. Verify on trade before committing. If this item works exactly as described, it lets you drop resist from other gear slots into damage.

**Trial of Chaos** (ascendancy trial source) — the source of the tameable Crested Behemoth (Oscrix's gen-1 companion before the Elephant Tortoise was discovered to have a higher base HP).

## Leveling Notes

The leveling path was tested by Oscrix (build creator) and jungroan (7 hours fresh start → T-15 mapping):

**Act 1 (level 1-12):** Start with :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Drain"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Contagion"} — the standard Witch opening. Add :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Arsonist"} (a bomb-throwing skeleton with Command: Explosive Demise — detonates an allied minion below a life threshold dealing 8% min life as fire) and :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Sniper"} commanding Gas Arrow for extra damage. ED/Contagion clears packs, the skeletals handle rares. Pick the Lich ascendancy when choosing your class path. Grab the :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} skill gem when it unlocks — tame any beast in the Hunting Grounds to familiarize yourself with the mechanic, this beast will be replaced later.

**Act 2 (level 12-22):** Continue with ED/Contagion + Skeletal Arsonist/Sniper. When you hit level 22 and meet the requirements to engrave Bind Spectre (tier 7 gem — verify the required character level via :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Skill_Gem"} progression, you may have to be 24-26 instead of 22), swap to Infernal Legion. The first spectre is the **Bramble Burrower** tamed from the Hunting Grounds in act 1 — this one is low-HP so it dies faster to the IL self-burn (intrinsic resistance isn't yet wikified, treat the community-tested number as MEDIUM). Setup: Bind Spectre + Infernal Legion + Last Gasp. The Bramble Burrower self-burns → life reaches 0 → Last Gasp holds the "fatally wounded" state for 4 fixed seconds → during that window use Skeletal Arsonist Command: Explosive Demise to detonate the spectre, dealing extra fire damage (Explosion radius 2.4 metres, gem text: "Deals additional Fire Damage equal to 8% of Minion's maximum Life"). Weapon swap respawns the spectre → repeat. This play style is low APM but very high single target, allowing you to stun bosses and skip phase transitions.

**Act 3 (level 22-35):** Fight the optional boss **Root Regge** in Bogfeld at the start of act 3 to unlock the **Bogfeld Commoner** spectre. The Bogfeld Commoner has much higher HP than the Bramble Burrower — community testing reports ~43,000 HP in mid-campaign (LOW confidence, no wiki page for this spectre), equivalent to a level 41 Essence Drain. Setup upgrade: Bind Spectre (Commoner variant) + Infernal Legion + Last Gasp + Minion Instability. No more need for the Arsonist detonation — Minion Instability auto-triggers the explosion when the IL self-burn drops the commoner to ≤35% life, dealing 15% max life as fire damage. Max out the number of Bogfeld Commoners via spirit stacking → weapon swap respawns → they explode → swap back. Get the guaranteed Lesser Jeweler's Orb at the start of act 3 to socket Minion Instability.

**Act 4-6 (level 35-55):** The Bogfeld Commoner bomber carries through the whole campaign. Damage scales naturally with level because the commoner's HP rises with area level. Start picking up Lich tree nodes for minion damage + life. Get Blasphemy from a quest reward → link Temporal Chains to slow enemies — mapping comfort increases noticeably because slower enemies = easier to follow the bomber chain.

**Map tier 1-10 (level 55-75):** Allocate the CI keystone (level 60-65). Farm Azmerian Ranges to tame an Elephant Tortoise with the Increased AoE mod. Before you have the Elephant, continue with the bomber setup using the Bogfeld Commoner — the DPS is enough to clear T-10 comfortably. When you roll an Elephant with the AoE mod, swap to the pure IL walking simulator: companion gem + IL + Feeding Frenzy + Searing Flame + Magnified Area.

**Map tier 10+ (level 75+):** Unlock the :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} lineage gem (drops from the Xesht pinnacle boss or trade). Pre-Xoph's damage is 40-60% lower but the build still runs T-14-16. Post-Xoph's: the full endgame setup is online, with a massive damage spike. Farm Shavronne's Satchel, slot in the CI + low-life layer, push Sim 15 and pinnacle bosses.

**Gem breakpoints:**
- Level 22: IL swap (Bramble Burrower)
- Level 35: Bogfeld Commoner upgrade
- Level 60-65: CI keystone
- Level 75+: Xoph's Pyre + endgame companion setup

## Budget & Investment

**Zero budget (league start, 0 currency):** Witch Lich + ED/Contagion → level 22 IL bomber → Bogfeld Commoner + Last Gasp + Minion Instability. No gear needed beyond gems. DPS is enough to clear the campaign and early mapping. jungroan reached T-15 mapping in under 7 hours from a fresh start with this setup.

**Entry endgame (1-3 divine equivalent):** An Elephant Tortoise tamed (any, no AoE mod needed) + IL Tier 1 + CI tree + Storm Mage shock bot. Clears T-8-12 comfortably.

**AoE breakpoint (10-30 divine):** An Elephant Tortoise with the **Increased AoE** mod (3-7 hours of farming or trade). Searing Flame II + Magnified Area II gem upgrades. Uncorrupted Shavronne's Satchel (15-25 div). Clears T-14-16 comfortably, the build starts to feel like a true "walking simulator".

**Xoph's Pyre breakpoint (50-150 divine):** The :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph's_Pyre"} lineage gem (50-100 div depending on server economy, locked behind the Xesht pinnacle boss). The IL III gem (Tier 5, expensive). An Apocalypse Curio amulet +4-5 minion levels (50-100 div). A 40-60% damage spike vs pre-Xoph's. Enough for T-17 + pinnacle bosses.

**Min/maxed (300-800 divine):** An Apocalypse Curio +5 with a desecrated minion life roll (200-500 div). A Megalomaniac perfect 3-notable (100-300 div). A Corrupted Shavronne's Satchel 3-charm + max ES enchant. Sim 15 max difficulty, all pinnacles deathless.

**Diminishing returns:** After you have the Apocalypse Curio +5 + Megalomaniac perfect + Xoph's Pyre + IL III, every further upgrade only trades 10-15% damage for 10× the currency. At this level the focus shifts to challenge completion or rolling an alt character.

## Strengths & Limitations

**Strengths:**

- **AFK clear** — no aiming, no targeting, no triggering skills. The companion auto-ticks ignite 360° on every enemy in radius. A literal walking simulator.
- **Strongest league starter in POE2** — runs from level 22, no gear needed, the bomber setup has enough DPS to stun campaign bosses. T-15 mapping in under 7 hours from a fresh start.
- **Enormous scaling depth** — zero budget → mirror tier all work. Every investment tier has a clear power spike (IL swap, Bogfeld, Elephant, Xoph's Pyre, Apocalypse Curio).
- **Tanky CI Lich + Shavronne sustain** — chaos immune, 58k EHP endgame, 11k phys max-hit, Temp Chains slow layer.

**Weaknesses:**

- **Elephant AoE mod RNG** — Increased AoE is mandatory for comfortable mapping, an average of 3-7 hours to farm. Without this mod the IL radius is too small to clear efficiently.
- **Xoph's Pyre price gate** — locked behind the Xesht pinnacle boss, 50-100 div. Pre-Xoph's the IL ignite channel works at full bandwidth (the gem text gate analysis shows the IL synthesized ignite isn't Hit-gated, so it doesn't depend on Xoph's Pyre); the gem mostly adds value via the auto-attack hit channel and secondary skill (Frost Bomb / Storm Mage shock proc).
- **Single companion = single point of failure** — when the Elephant dies, damage drops to 0. Companion respawn is 60-90s. Boss fights with many AoE danger zones (Arbiter, Xesht) require careful companion positioning.
- **Weapon swap muscle memory** — the build requires constant weapon swapping to reposition the companion and proc Blink mobility. Not hard but it's a new habit if you're not used to the POE2 weapon swap system.
- **Boss rotation isn't truly AFK** — mapping is a walk, but boss fights require manually casting Elemental Weakness + Frost Bomb + Pain Offering. Not complex but not zero-button.

**Dangerous map mods:** "Monsters have X% chance to Avoid Ailments" reduces ignite application → heavy DPS drop. "Less AoE" shrinks the IL burn radius → slower clear. "No ES Recovery" or "Reduced Recovery Rate" cuts the Shavronne sustain loop — avoid these or swap the flask setup. A CI build is immune to chaos damage so every "Extra Chaos Damage" mod is completely safe. "Monsters reflect Elemental Damage" doesn't hit the player because the damage source is the minion — however, in the bomber phase the MI explosion is a fire hit from the minion, so reflect can affect minion survival. The endgame walking simulator phase (pure DoT ignite) is safer because ignite/DoT isn't reflected. When the Elephant dies mid-boss-fight, swap the weapon twice to resummon — but the respawn timer is 60-90s if the companion is truly destroyed, so positioning the companion to avoid boss AoE overlap is the most important skill.

**Damage scaling ROI checklist — read before sinking currency:** The best lever is scaling Companion HP via Tame Beast gem level + Minion Life % nodes — the IL ignite channel scales linearly with `H`, with no ceiling. Searing Flame II is the most certain pillar multiplier ×2 (broad gem text, not Hit-gated). Magnified Area II radius +20%, marginal but needed for clear comfort. Xoph's Pyre's primary value is on the **auto-attack hit channel + secondary skill (Frost Bomb / Storm Mage)**, not the IL ignite channel — Hit-gated on both effect lines, the IL synthesized ignite doesn't qualify. Explicit falsifier: in the Pr3vie endgame PoB toggle Xoph's Pyre on/off, read the IL ignite tick delta. A delta ≤10% → confirms the gate analysis (Xoph's Pyre doesn't amplify IL). A delta ≥30% → refutes it, the IL ignite has a path that qualifies a Hit-gated modifier that isn't yet clear. Cross-reference: the Minion Instability wiki explicit "does not scale with the Gain X% of Damage as Y modifier" for the same class of non-hit synthesized damage event.

## Summary

- **Identity:** Witch Lich + Infernal Legion, a 3-phase progression from ED/Contagion → Bomber → Walking Simulator. League starter → endgame all-content within a single character.
- **Core mechanic:** IL ignite base = 25% minion max life, a non-hit synthesized ignite. Searing Flame II ~2× magnitude is the main pillar multiplier. Companion HP scaling is the best ROI lever. Xoph's Pyre uplift on the IL channel is marginal (0-15%), the real value is on the auto-attack hit channel and secondary skill.
- **League start path:** Level 22 IL swap → Bramble Burrower → Bogfeld Commoner bomber → Elephant Tortoise walking simulator. T-15 in under 7 hours from a fresh start.
- **Defense:** Lich CI + Shavronne's Satchel low-life sustain + Blasphemy Temp Chains slow. EHP 58,533 endgame.
- **Investment curve:** Zero budget playable → AoE Elephant breakpoint (10-30 div) → Xoph's Pyre spike (50-150 div) → Apocalypse Curio min/max (300+ div). Diminishing returns after Curio +5.

## Changelog

### 2026-05-19 (triple-curse + Path A/B archetype integration — Ranny El video)
- **Curse Stack refactor**: Replaced single-curse Blasphemy + manual Elem Weak with **dual-curse Blasphemy** (Temp Chains + Elem Weak on the same socket = 120 spirit aura) + **manual cast Despair** (3rd curse with Decaying Hex chaos DoT + Heightened Curse +25% magnitude). The layout comes from the Ranny El video Lich PoB (poe.ninja/poe2/pob/1863a) — verified verbatim via PoB XML decode + wiki cross-reference.
- **Whispers of Doom keystone** added to the Cluster 4 passive tree section. Verbatim *"You can apply an additional Curse. Double Activation Delay of Curses"* (HIGH). Curse cap math: base 1 + Incessant Cacophony +1 + WoD +1 = 3 curses. The 2x delay downside is mitigated via Incessant Cacophony infinite duration + a Grip of Kulemak faster activation roll.
- **Atziri's Allure alternative path** documented — drops from the Sealed Vault anomaly bosses Ytzara/Maztli, level 65 restricted. Verbatim ignore curse limit + reflect to player + 20% less curse effect (0.4.0 nerf). The Lich path skips Atziri because WoD + IC already cap at 3; the Shaman/Druid path requires Atziri.
- **Path A vs Path B archetype decision** made explicit. Path A = Walking Simulator (Shavronne's Satchel + Elephant Tortoise + dual-curse). Path B = Triple Curse Bomber (Headhunter + Bind Spectre + Gargantuan Wasp + triple-curse). Recommend Path B for greenfield planning because of ~80% gem overlap + no Elephant AoE-mod farm grind + multi-spectre redundancy. Pivot to Path A when farming pinnacle bosses regularly.
- **Path B gear list** added: Chimeric Call Omen Sceptre, Tempest Charm focus, Solar Amulet (a wiki-verified replacement for the "Apocalypse Curio" community nickname), Headhunter belt, Bones of Ullr boots, Grip of Kulemak ring (Abyssal Signet, 200 STR gate, faster curse activation), Evergrasping Ring (chaos extra to allies/enemies in presence — opens the chaos→ignite chain via Xoph's Pyre Effect 1 on the companion hit channel), Blood of the Warrior flask, Rite of Passage + Ngamahu's Chosen + Nascent Hope charms.
- **Dialla's Desire relocation** note: the video Lich PoB moves Dialla off the Blasphemy curse channel to the IL Spectre channel (same as Infernal Legion III + Xoph's Pyre + Feeding Frenzy II + Muster). +1 gem level on Tame Beast/Bind Spectre raises the companion HP scaling tier → a direct IL ignite base bump. Higher ROI than +1 Temporal Chains level.
- **Evergrasping Ring + Xoph's Pyre + Despair chain** documented inline in the curse section. Companion in presence → auto-attack gains 15-25% extra chaos → Despair -61% chaos res shred → Xoph's Pyre Effect 1 converts chaos to ignite contribution on the hit channel (a real Hit, qualifies the gate, unlike the IL synthesized ignite). Pre-Evergrasping the 3rd curse Despair value drops to only Decaying Hex chaos DoT (~250-300/sec) + the HH rare-mod buff stack. Post-gear combined channel uplift ~30-50% (MEDIUM, needs a PoB toggle to confirm the gate interpretation).

### 2026-05-19 (mechanic deep-dive pass — 4 angle expansion)
- **Angle 1 (Bomber Setup math chain)**: expanded the Minion Instability + Last Gasp + Bind Spectre interaction with verbatim gem text from the POE2 0.5 wiki mirror. Closed-form formula `damage = 0.15 × H_spectre` per MI explosion (HIGH for the formula, LOW for the HP plug-in because it's community-tested). Cycle math: 3.25s IL ramp + 4s Last Gasp fixed window + 1-2s swap overhead ≈ 8-9s per cycle. Bramble Burrower / Bogfeld Commoner HP labeled LOW community-tested (no wiki page exists for the Bogfeld). Note the 0.3.1b bug fix verbatim for weapon swap spectre MI triggers.
- **Angle 2 (Tame Beast + Elephant Tortoise + Feeding Frenzy)**: full verbatim gem text for Tame Beast (tier 9, wisp 8-11.8s, retains 4 mods), Elephant Tortoise spirit 56.1% + Whakapanu Island/Kriar Village locations with the wiki note "Extremely high life pool. Great with Infernal Legion III". Mod re-roll workflow documented. Feeding Frenzy I/II verbatim (30% more damage, 20%/15% more damage taken). Note the 0.3.0 patch removed the POE1-style AI mode toggle. Companion teleport-on-weapon-swap behavior softened to MEDIUM (community-tested, the wiki doesn't confirm it verbatim).
- **Angle 3 (Curse stack + Rupture the Soul chain-explode)**: verbatim Blasphemy (60 spirit per curse, activation delay), Temporal Chains (40-59% slow, 1.5s delay, level-cap clause 20→0 important for leveling), Slow Potency (+15% slow magnitude), Magnified Area II (+45% AoE), Ritualistic Curse (+50% AoE, +30% delay). **The Dialla's Desire INT-scale claim** in the old build doc was wrong — the wiki text only has "+1 to Level of Supported Skill Gems / +10% to Quality of Supported Skills", no INT-scale. Correction noted explicitly. Rupture the Soul verbatim with 25% max HP chaos AoE, chain-clear probability math (91% pack-6 has ≥1 explosion, expected 2 explosions average). The CI player-safety synergy is critical. Incessant Cacophony verbatim infinite duration for boss QoL.
- **Angle 4 (Xoph's Pyre + Searing Flame gate analysis — symmetric framing)**: the pre-audit asymmetric treatment (Searing Flame HIGH 2× pillar, Xoph LOW 0-15%) reconciled. Both gems open with "Supports any skill that Hits enemies" + an effect line referencing "Supported Skills" — the parallel construction means the same gate-risk. **New treatment**: both in the same MEDIUM confidence cluster pending a PoB falsifier. Falsifier test design explicit per gem (Searing Flame delta ≥80% confirm vs <30% refute; Xoph delta ≤10% confirm vs ≥30% refute). Cross-reference the Minion Instability "Gain X% as Y" exclusion as the strongest precedent. The Magnified Area II 0.4.0 damage penalty removal noted.

### 2026-05-19 (mechanic deep-dive pass — first iteration)
- Verified the Xoph's Pyre × IL interaction via a deep-dive mechanic audit. IL synthesized ignite ("as though dealing Base Fire Damage") doesn't inherit Hit-gated modifiers — the same class precedent as the Minion Instability wiki note "does not scale with the Gain X% of Damage as Y modifier". Xoph's Pyre uplift on the IL channel is realistically 0-15% (only via the auto-attack hit channel, usually overridden by the "highest ignite only" rule). The gem's real value is on the auto-attack hit channel + secondary skill (Frost Bomb / Storm Mage shock proc).
- Searing Flame II reframed as the main pillar multiplier of the IL channel — the gem text wording is broad and not Hit-gated, effectively ~2× IL ignite magnitude.
- The 23M DPS claim softened to a **combined-channel total** (IL synthesized ignite + MI explosion + companion auto-attack + Last Gasp bomber window + Rupture the Soul curse-explosion pops). The IL channel alone in closed form ~16.8k DPS/target with the assumption of 80k companion HP. Added a formula breakdown to the Stat Priorities section.
- Magnified Area II radius fix: 45% inc AoE → radius +20% (sqrt scaling), not double. IL radius 2 m → ~2.41 m effective.
- Added the "Damage scaling ROI checklist" caveat block to Strengths & Limitations with an explicit PoB toggle falsifier (delta ≤10% confirm, ≥30% refute).

### 2026-05-19 (verification pass)
- Verified every gem text + item mod + ascendancy node against the POE2 wiki mirror snapshot 2026-05-18 (`data/wiki/`). 
- Gem name corrections: Bind Spectre instead of POE1 Raise Spectre; Skeletal Warrior/Sniper/Arsonist (singular, no "Summon" prefix); Tame Beast → Summon Beast: Elephant Tortoise account-bound; Infernal Legion III tier 5 explicit.
- Ascendancy section rewrite: dropped the trial-cluster framework, used a flat notable list (Soulless Form + Eternal Life for the low-life pillar; Rupture the Soul + Incessant Cacophony for the curse explode pillar; Crystalline Phylactery option). Verbatim node text from the Lich wiki entry.
- Glancing Blows reasoning: POE2 0.5 keystone = "Chance to Evade Unlucky, Chance to Deflect Lucky" — the CI build doesn't stack evasion so skip it because it's irrelevant, not because of the block penalty.
- Elephant Tortoise farm location: Whakapanu Island / Kriar Village per the Tame Beast wiki beast list.
- Shavronne's Satchel drawback (-20-30% reduced Flask Life Recovery rate) moved into prose.
- Last Gasp 4-second fixed duration note made explicit (doesn't scale via a duration support).
- Apocalypse Curio amulet + Sama's Resolves rings flagged LOW confidence inline — community-named items with no wiki page, verify on trade before committing.
- Xoph's Pyre × IL ignite uplift softened toward the 40-60% Pr3vie PoB number with a MEDIUM confidence caveat (needs a PoB toggle to verify).

### 2026-05-19
- Full rewrite for the 0.5 league start context. Integrated data from jungroan (a 7-hour league start run), Oscrix (build creator leveling path), Pr3vie (endgame min/max showcase).
- Added detailed act-by-act leveling notes with gem breakpoints.
- Updated league_start rating 1→5, budget_tier high-budget→league-starter.
- Added the bomber phase (Bramble Burrower + Bogfeld Commoner) to the Build Overview and Leveling Notes.

### 2026-05-13
- Initial draft. Synthesized from the Pr3vie PoB + Oscrix gen-1 PoB.
