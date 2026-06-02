---
template: templates/guide-template.md
document_type: guide
title: "League Start Plan — Twister Spirit Walker, Runic Ward & Companion"
status: draft
author: duocnv
created: '2026-05-23'
updated: '2026-05-24'
league: '0.5'
patch: 0.5.0
guide_type: league-prep
tags:
  - poe2
  - 0-5
  - return-of-the-ancients
  - runes-of-aldur
  - spirit-walker
  - twister
  - runic-ward
  - companion
  - league-start
  - prep
---

# League Start Plan — Twister Spirit Walker, Runic Ward & Companion

> **Quick Summary:** My league start plan for Return of the Ancients (Runes of Aldur, launch ~05/29). The starter is a Twister Spirit Walker, the defensive layer revolves around Runic Ward, and a companion beast as the second character. This is the analysis of why I chose this and where the variables are that need testing on day 1.

## Overview

0.5.0 is the biggest patch for POE2 before 1.0: the endgame is completely rewritten (Atlas reset, Fortress, six new storylines, Masters of the Atlas), two new ascendancies (Spirit Walker for Huntress, Martial Artist for Monk), and for the first time the game has a challenge system. The league mechanic **Runes of Aldur** revolves around Remnant + Verisium Runeforging + **Runic Ward** — a defensive layer that activates when you're down to 1 life and recovers independently.

The two things GGG changed the most are also the two that decide league start: which build to climb with fastest, and how to build defense when the old layers get nerfed. My plan comes down to three decisions — the starter is a Twister Spirit Walker, defense is built around Runic Ward instead of ES recharge, and the companion beast is saved for the second character. Each decision has reasoning behind it, plus specific things I'll have to verify myself in the first week.

## Why Twister Spirit Walker Is the Starter

The starter decision rests on one very specific signal: GGG **didn't touch a single line** of Twister or Whirling Slash across all the skill changes, even though Twister currently holds the fastest campaign speedrun time. When a skill is this strong and a big patch still leaves it alone, that's GGG deliberately keeping it as the showcase skill for the new ascendancy — the risk of a surprise nerf in the first week is nearly zero, exactly what I want in a starter.

The core loop is Whirling Slash up to stage 3 then firing Twister to spawn 4 tornadoes, then pivoting to Ice-Tipped Arrows (from Act 2) + Barrage + Combat Frenzy + Freezing Mark to freeze the whole screen and repeat. The real scaler isn't Twister itself but owl feathers: Primal Bounty + The Mhacha's Gift make every dodge roll release a feather that empowers projectiles (more count + speed), so the playstyle is dodge roll to charge then unload — constant movement, fitting an evasion-leaning ascendancy.

A point to understand clearly before diving in: Twister is a **clear** skill, not a boss-killer. Each tornado only hits one target every 0.66 seconds, so against a single boss, DPS is hard-capped by hit rate × damage per hit — adding tornadoes helps sweep dense packs but doesn't add linearly to single target. This is why positioning decides bosses: drag the boss into a wall corner or tight terrain so the tornadoes bounce back multiple times, each bounce being a new hit — the damage difference is huge, and it's also why I have to have a separate plan for wide boss arenas (tornadoes dissipate before they can bounce in time).

In the campaign, open with Whirling Slash then attach Twister + Cult Contagion right away to clear the early-game packs, the important breakpoint at level 6 being Fangs of Frost (parry debuff turns into explosion + chilled ground that Twister picks up). Gear is simple and cheap: body armor with base armor for survivability, boots with movement speed, gloves with flat added damage to attacks, a spear with iron/flat damage, plus a wolf form talisman for early speed.

One spot in the loop had its mechanic changed that many will mistake for a big buff: **Salvo Support** now gives 1 Seal per second up to a max of 6, each Seal 1 projectile, replacing 1 Seal every 2 seconds up to 3, each Seal 2 projectiles. Calculate carefully and both the ceiling (6 projectiles) and the full-charge time (6 seconds) are identical — the actual change is just smoother granularity (+1 per second instead of +2 every 2 seconds), not a power buff. Don't count excess DPS for this. On the other hand, the freeze ramp really did get weaker: Freezing Salvo is now 34-68% more Magnitude of Chill (was 56-107%) and Ice Shot lost "25% more Freeze Buildup" on Ice Shard, so the freeze source has to lean on Frost Nexus + Freezing Mark.

## Why Defense Has To Be Runic Ward

Runic Ward isn't just another ES layer. It works as **reverse ES**: damage hits life first, the Ward takes over after life reaches 0 — it doesn't prevent death, it just reverses the absorption order. The most important practical consequence is that dots (Burning Ground, bleed) hit life first, so a life flask + Ward setup handles dots much more easily than full ES, which gets chewed straight through by dots. The keyword "Defences" now only points to Armour/Evasion/ES and does **not** apply to Runic Ward, Resistance, or Block — the Ward is an independent layer with its own recovery. The source of Ward is the Ward Rune (+15 max) socketed into the Augment slot on gear from the league's remnants, along with Warding Runes for a bonus when Ward is full.

The reason I moved Runic Ward from "worth trying" to "nearly mandatory" for the right-side tree lies in the technical detail of the ES nerf wave. A whole batch of notables were changed from "increased Energy Shield Recharge Rate" to "faster start of Energy Shield Recharge" — and these two are fundamentally different. "Recharge rate" determines how fast ES recovers; "faster start" only shortens the delay before recovery begins. Turning rate into start-delay means that once you've taken a hit and recharge kicks in, ES still refills at the base rate — much weaker for standing and taking continuous damage. Rapid Recharge went from 25%/25% to 12% start + 12% rate, Convalescence from 40% start to 20%, Essence Infusion lost its 40% recharge rate entirely, and the small passive ES Recharge Rate was removed from the tree. Ghost Dance also took a nerf: a Ghost Shroud every 11.7-10.1 seconds instead of 7.6-6.1. The two main defensive layers of Huntress/Ranger/Monk/Mercenary — ES recharge tanking and evasion + Ghost Shroud — were both weakened in the same patch, so keeping a life + Ward buffer makes more sense than forcing full ES.

Leech can't fill that gap either: leech is now limited to 1 instance with a cap of 40k per hit, and Vaal Pact dropped instant leech (trading for 50% more amount but 67% less speed, no longer banning the life flask). Leech can no longer tank big hits — which pushes me even more toward life flask + Runic Ward as the defensive backbone, to test from day 1 on a low-life setup to see whether the Ward activates and recovers in time with the dodge-roll playstyle.

## Companion Beast — Saved for the Second Character

The companion direction is significantly stronger than 0.4 thanks to hidden buffs, good enough for a second character but not solid enough to risk as a starter. The keystone **Trusted Kinship** now gives 30% more Reservation Efficiency for Companion Skills (20% less for non-Companion), dropping the old "30% less Defences" — this is what makes running one large-reservation tamed beast viable, since spirit reservation is the bottleneck of the whole direction. Idolatry stacks on +10% companion damage + 2% reservation efficiency per idol, in exchange for a penalty when augmenting something other than an idol. The tree adds 19 companion passives, Rage Support can now support Minion Skills, and Commanding Rage goes up to 2% minion attack speed per 5 Rage.

The central mechanic is Tame Beast: engulf a rare beast with a hindering wisp, kill it, then gem it into an account-bound revivable Companion, scaling 84% more damage at gem 20 and now summoning the beast immediately once you have enough spirit. The Companion keeps up to 4 regular monster mods (does NOT keep Essence/Azmerian wisp mods), reservation scales with the beast's power + mod count, quality increases reservation efficiency, and you can disenchant to reset if you catch the wrong one. The Bear spirit scales 60% main hand weapon damage and doesn't count toward the companion limit so it can stack on top of another companion. The Natural Order lets you catch Unique beasts too (30% MS).

Two practical problems keep it in the second-character spot: the Bear spirit can't be unsummoned with the weapon-swap trick (the revive + swap reset-dead-minion style like the old Infernal Legion), and the scepter unlimited-companion stats are still bad. The biggest play is that the Verisium Rune can extract a beast's power — but that's something to test in the league, not something to bet the starter on. The plan: on day 1 hunt a good beast base early (retained modifiers matter more than the base), then decide around day 3-5 if Tame Beast scales superbly.

## The Other Directions — Quick Evaluation

Fubgun-style poison dropped a clear tier. Poisonburst Arrow — the dominant delivery in 0.4 — had its duration cut to a flat 3 seconds (was up to 4.9) and quality magnitude halved; Pathfinder's Overwhelming Toxicity went to 50% less Poison Duration; Plaguefinger gloves now read "Cannot inflict Elemental Ailments." Poison is still playable but much weaker, and this direction will most likely have to pivot to bow/crit or a different delivery. I'm not picking poison as a starter because of the risk of having to redo the entire delivery after day 1.

Martial Artist Monk is a direction worth testing after settling in: Tempest Bell goes up to 3 active bells (was 1) and can be Ancestrally Boosted like a Strike, Gathering Storm makes Perfect Dash detonate bells creating a shockwave of 564-869% Attack Damage. Add Facebreaker (the unbarehanded-attack unique) + the illusion/rune-on-body system, and the bell-combo has a real foundation of buffs — there's just less documentation than Huntress so it doesn't fit as a blind starter.

A low-life Runic Ward stacker is a natural evolution from the 0.4 Blood Mage, and fits even better now that Vitality Siphon went to 20% spell damage leeched as life (was 10%). Ward activating at 1 life + recovering separately opens up a low-health playstyle that doesn't depend on ES recharge — exactly what just got nerfed, so this is an angle worth watching for a later character.

## Crafting & Economy To Prepare

Runeforging is the core loop of the league, not side content, so stocking Verisium and prepping crafting early is worth doing. Armour below level 55 gets Runic Ward essentially for free; above that threshold you usually have to trade off another defense to get Ward. Unique Verisium Runeforging also lets you upgrade the base type of a Unique Weapon/Armour that drops below 55 (higher weapon damage, higher armour base defence plus Ward) — helping a low-tier unique compete in high maps. As for currency, Greater/Perfect are a bit rarer, but Greater Transmute/Augment now has a min mod level of 44 (was 55) and drops from Act 4, and Divine is more common too — early crafting is easier on league start. If you later go a remnant-centric direction then The Hollow Mask is worth aiming for: it grants Wildwood's Gifts, "Remnants you create affect Allies in your Presence", and 80-100% increased Reservation Efficiency of Remnant Skills.

## Who To Follow in the First Week

The one I watch most closely is Lolcohol for Twister + defence layers — he tests early in a private league and explains how Runic Ward interacts with low life rather than just showing off a strong build; SnooBAE85 is a Twister specialist, and Guy That Dies recording a Twister campaign is a big push for this starter's hype. Spud the King leads the companion/Druid direction. GhazzyTV handles the minion angle but cautiously — worth listening to because he points straight at the technical problems (no weapon-swap unsummon, scepter trash). Fubgun is the one to watch for scaling damage and will show whether poison or bow comes out on top. Zizaran and P4wnyhof are strong at layer analysis (leech rewrite, ES recharge nerf, Runic Ward timing) — the stuff that decides whether a build lives or dies, not just DPS. I use them for cross-checking, not to pick the build for me.

## Things To Do The Moment the League Goes Live

Climb the campaign with Twister following the gem sequence above, prioritizing body armor with base armor for survivability. Stock Verisium and prep Runeforging since that's the main source of Runic Ward. Hunt a good beast base early to keep the second-character companion play alive. And test Runic Ward on a low-life setup right on day 1 to learn how it replaces or supplements ES/life under the leech rewrite — this is the biggest variable, and whoever masters the timing and which slot gives free Ward will have a clear edge in the first week.

## Related Resources

- [Return of the Ancients](/mechanics/return-of-the-ancients) — The full picture of the 0.5 changes.
- [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Details of the Tame Beast + companion path.
- [POE2 YouTubers To Follow For League 0.5](/guides/poe2-youtubers-fate-of-the-vaal) — Who to watch and how their 0.4 builds set the stage for the 0.5 directions.
- [Twister Huntress Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — The actual 0.5 build with gem links and ascendancy path.
- [POE2 0.4 Meta Analysis](/mechanics/fate-of-the-vaal-meta) — The foundation for seeing where the 0.5 archetypes evolve from.

## Relationships

- **references** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — All the 0.5 changes (Runic Ward, Verisium Runeforging, Spirit Walker, Atlas overhaul, challenges) are the foundation for every decision in this plan.
- **references** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — The companion direction (Tame Beast + beast hunting + spirit reservation) is the second character in the plan.
- **references** [POE2 YouTubers To Follow For League 0.5](/guides/poe2-youtubers-fate-of-the-vaal) — The list of creators used to cross-check intel in the first week.
- **references** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — The actual starter build using Spirit Walker (Primal Bounty + Mhacha's Gift owl feathers) + Twister + Ice-Tipped Arrows.
- **related_mechanics** [POE2 0.4 Meta Analysis](/mechanics/leagues/fate-of-the-vaal-meta) — Many 0.5 directions are evolutions from 0.4's Poisonburst, Wolf/Bear companion, and Blood Mage low-life; Runic Ward especially suits low-life, which was already strong before.
