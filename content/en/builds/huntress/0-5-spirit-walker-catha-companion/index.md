---
template: templates/build-template.md
document_type: build
title: Spirit Walker Catha Companion
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: medium-budget
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: minion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - catha-balance
  - minion
  - '0.5'
  - poe2
---

# Spirit Walker Catha Companion

This is a true companion build — not summoning a few pets for fun, but pouring the character's entire damage into a single boss-beast and letting it carry both single-target and most of the clear. Players who like the "stand back, let the minion do the fighting" playstyle but are bored with the low damage ceiling of minion-stat sceptres will like this build, because it completely changes how you scale a companion to weapons. The core is :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} + a boss beast captured with :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, playable for both mapping and bossing as long as the spirit budget is balanced correctly.

## Build Overview

Companion damage scales by default with minion stats on a sceptre, and its ceiling is low because a sceptre can only roll a few lines of "increased minion damage / attack speed". :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} flips the problem: the companion deals extra attack damage equal to **60% of main-hand weapon damage**. So instead of holding a minion-stat sceptre, I hold the weapon with the highest possible flat damage and let the boss-beast inherit it — a slow, high-range, big-flat, low-crit weapon is still excellent because *I* almost never swing it myself, only the companion needs damage.

The loop works like this: the damage source is the boss-beast companion (attacking with the monster base's own hit package, plus 60% weapon damage from Catha's Balance); the scaling vector is main-hand flat weapon damage and minion attack speed; the defense layer relies on :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} plus an aura on the leftover spirit (for example :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"}); mobility and clear are handled by the character's own skills. The constraint running through it all is spirit reservation — the stronger the companion, the more spirit it eats, so every gear/tree decision has to balance "more damage for the beast" against "keep enough defensive layers".

## Skill Gems & Links

The defining skill is :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} used to *capture* a beast: place wisps on a rare Beast, and if it dies while the wisps are up the gem turns into :wiki-link{url="https://www.poe2wiki.net/wiki/Summon_Beast"} (`Companion: <Monster Name>`) — a reviving, account-bound companion that eats spirit based on the monster's power and the number of modifiers it kept. The beast keeps a maximum of four regular monster modifiers, so each tame is its own roll; you have to check the gem after capturing and keep the one with the right supporting modifiers (aura, debuff, ground effect, guaranteed ailment).

Support gems prioritize minion attack speed and added attack damage over minion cooldown recovery — the Head Crusher group's attack pool has many cooldown skills that aren't always the best hit, so pushing attack speed helps the boss get back to a basic/high-value attack faster, while cooldown recovery makes it easy for it to spam low-damage skills. The exact support gem list is locked in when the league goes live (test-plan in the Stat Priorities section); the principle is to keep any support that multiplies flat attack damage and attack speed for the minion.

The remaining spirit after the companion goes to a defensive aura like :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"}. Don't sacrifice the main defensive aura to cram in another weak beast — the sheet looks more fun but the actual build gets worse.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} is the reason this direction is worth playing, because many of its branches tie directly to the companion. The core node to take early is :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} — it lets :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} capture a **Unique Beast**, opening up a boss companion slot far stronger than a rare beast. Note that only one unique beast can be tamed at a time, so the boss companion doesn't fully eliminate the need for a rare beast with good modifiers; it's a separate slot whose value you have to compare.

The companion damage and reservation efficiency nodes are taken in priority order: first the things that reduce spirit cost / directly increase companion damage, then the conditional nodes like :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} — this node gives companion damage and reservation efficiency from idols but penalizes elemental resistance if you socket a non-idol augment, so it's only worth taking when the idol setup genuinely beats normal runes/augments. The exact lab node allocation order is locked in once the 0.5 data is on PoB.

## Passive Tree & Mastery

The main cluster revolves around minion attack speed, minion damage, and spirit reservation efficiency — these three decide both the damage and whether you have enough spirit to run a strong companion. Since Catha's Balance pulls 60% of main-hand weapon damage to the companion, one branch worth researching is the character's own weapon/attack damage nodes: you need to test whether "increased attack damage" on the tree propagates into the damage portion the companion receives from the weapon (write this into the test-plan, don't assume).

A notable to aim for is :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} — it lets a talisman (non-sceptre) still carry minion stats, opening the door to using a high flat-damage :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} in the main-hand without losing all minion scaling. The specific tree path (node id, mastery) is locked in after the 0.5 tree comes out; for now the recorded intent is: prioritize the path through the minion + reservation cluster, branch into weapon damage if testing confirms it feeds the companion.

## Stat Priorities & Defenses

This build doesn't have real numbers locked in yet because the 0.5 data (Spirit Walker ascendancy, The Catha's Balance, 0.5 tree) isn't on PoB at the time of writing — PoB2 currently only has 0.4 data. When the league runs (29/05), log exactly the following numbers for each beast/weapon configuration:

- **Companion DPS** at the spirit level actually reserved, measuring both basic attack and the full hit package.
- **Spirit budget breakdown**: how much the companion reserves, and what aura the remainder can run (:wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} or a herald).
- **Character EHP**, life/ES, armour/evasion, and resistance cap 75%+ on all three elements.
- **Modifier package** of the actual tamed beast (4 modifiers kept) — because the same monster base gives very different results depending on the roll.
- **Catha's Balance contribution**: compare companion DPS with Catha's Balance equipped vs removed, to confirm the 60%-weapon really is the bulk of the damage and not the base minion stats.

This is a measurement plan, not a weak build — the numbers go in here as soon as the first beast is tamed in 0.5.

## Resources

- Foundation mechanics: [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — explains Tame Beast retention, reservation, candidate bosses and the weapon package.
- Same-class leveling shell: [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter).
- POE2 Wiki: :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"}, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}.

## Gear Progression

### Early Mapping
Start cheap with a rare sceptre that has minion attack speed + minion damage + minion crit/life and one aura mod, using a rare beast caught in the campaign/early maps. At this stage the companion still scales with normal minion stats, before you need Catha's Balance — the goal is to survive and find a beast with good utility modifiers.

### Mid (unlock Catha's Balance)
Once you have :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"}, change the gear direction: the main-hand switches to a high flat-damage weapon. Two low-friction options are :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} combined with the :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} notable (keeping minion stats on the talisman), or :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} — a chaos spear, light stat requirements and chaos that's rarely resisted by monsters.

### Endgame (peak flat)
The damage ceiling sits in a Giant's Blood two-hander: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hammer_of_Faith"} or :wiki-link{url="https://www.poe2wiki.net/wiki/Ironwood_Greathammer"} held one-handed via :wiki-link{url="https://www.poe2wiki.net/wiki/Giant%27s_Blood"} for the highest flat damage fed into the companion — but the attribute pressure is very heavy, you have to solve the Strength problem on tree/gear. If you go the fire direction (companion :wiki-link{url="https://www.poe2wiki.net/wiki/Morvak,_the_Infernal"}), :wiki-link{url="https://www.poe2wiki.net/wiki/Molten_Hammer"} is a one-hand fire route because the base has hidden physical-to-fire behavior.

The armour slot prioritizes spirit, minion modifiers and defensive layers (life/ES, resistance). The default companion targets a Head Crusher / Silver Fist beast because its damage profile is high and it spawns in more maps, so the chance of rolling 4 good modifiers is higher.

## Flasks

POE2 uses simple life/mana flasks plus charms, without the complex flask system of POE1. Prioritize one instant/recovery life flask to survive a spike, one mana flask if the character's clear skill costs mana, and a charm against the most dangerous ailment for a stand-back playstyle (usually freeze/stun). Lock in the specific charm by content after entering the league.

## Pantheon & Bandits

POE2 0.5 doesn't have a Pantheon or Bandit system like POE1 — there are no choices in this section. POE2's campaign rewards follow a different mechanic and don't need to be declared in a build doc.

## Leveling Notes

A companion build isn't a smooth leveling direction — level as a standard Huntress with attack skills or follow the [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) shell through the campaign, because :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} and a worthwhile beast only arrive at the map stage. Pivot to the companion when you reach maps: that's when you have enough spirit, can take :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}, and can catch a beast with a good modifier package. Keep an empty Tame Beast gem in your bag, ready to try a capture every time you meet a nice rare Beast.

## Budget & Investment

The investment path goes from cheap to expensive piece by piece. The rare-sceptre companion stage is nearly free, only costing the currency to craft a decent minion-stat sceptre. The first jump is :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} — its price is unknown since the league isn't open yet, but it's the gate that unlocks the entire damage plan so it's worth prioritizing. The investment ceiling is the Giant's Blood weapon route: the weapon itself isn't necessarily expensive, but solving the attribute pressure (enough Strength to wield it one-handed) eats a lot of passive points and gear slots — that's the real cost. Diminishing returns hit once the companion has capped useful spirit — adding more weapon damage without adding spirit/attack speed loses value fast.

## Strengths & Limitations

The greatest strength is gear flexibility: because damage comes from flat weapon damage via Catha's Balance, I'm not locked into a specific unique sceptre, and a good boss-beast both tanks and carries single-target while the character has its hands free for clear/mobility. The unique beast direction via :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} gives a high single-target ceiling.

The weakness has to be told honestly: the spirit budget is always tight — running a strong companion means sacrificing an aura, so the build easily becomes "rich in damage, poor in defense" if you get greedy. The companion is subject to AI and animation lock, doesn't always stick to the right target; some content may not allow taming or limit minions. The Giant's Blood route is heavily attribute-pressured. And most importantly: this build is **not yet verified with PoB** because the 0.5 data isn't out — all the damage is currently at the on-paper design level, the real companion DPS has to be re-measured in the league before you trust it.

## Summary

- The core is :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} switching companion scaling from a minion-stat sceptre to **60% main-hand weapon damage** — hold a high-flat weapon, let the beast inherit it.
- The companion is a boss-beast captured via :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}; prioritize Head Crusher/Silver Fist and hunt for 4 good utility modifiers.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} + :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} open the unique beast slot for a high single-target ceiling.
- Scaling prioritizes flat weapon damage + minion attack speed > minion cooldown recovery; spirit reservation is the constraint running through it all.
- Weapon package: :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} or a Giant's Blood two-hander for peak, :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} low-friction.
- The numbers are a test-plan: wait for the 0.5 data + log companion DPS, spirit budget, EHP, and the real modifier package in the league.

## Changelog

### 2026-05-25

- Initial draft concept, written before the 0.5 launch (29/05). Based on the mechanics in [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt). All numbers left blank as a test-plan because PoB2 is currently 0.4 data, with no Spirit Walker / The Catha's Balance to verify against.

## Relationships

- **derived_from** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — the build realizes the companion damage direction the mechanic doc analyzes.
- **related** [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) — same Spirit Walker; Twister is the leveling shell and a projectile direction competing for the spirit slot with the companion.
- **references** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — reservation details, candidate bosses, weapon package.
