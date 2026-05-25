---
template: templates/mechanic-template.md
document_type: mechanic
title: New Unique Wave and Meta Shift
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - unique-items
  - runes-of-aldur
  - meta
  - datamine
---

# New Unique Wave and Meta Shift

0.5 pumps in 42 new unique items, and reading the whole list off poe2db reveals the league's direction more clearly than any patch note line: most new items attach to three axes — companion (Spirit Walker), Remnant/Runic Ward (the crafting league mechanic), and mana-as-resource. At the point before the league goes live (25/05, launch ~29/05), only **23/42 items have fully revealed stats** on poe2db; the remaining 19 are datamine shells (name + base type, mods not yet populated). This note exists to lock in early which ones are worth hunting in week one, and which have to wait for in-game logging.

## How It Works

poe2db datamines items the moment the patch file ships, so the page exists before GGG even finalizes the mods. Each page has a `Release Version` tag and a `Version history` entry; for all 42 of these items, the version history reads `0.5.0 — New Unique item`, the confirmation mark that they belong to the 0.5 wave rather than being old items. The most important classification axis when reading an early injection wave isn't "which item is strong" but "which item has numbers you can trust." A page showing only base type + flavour text, with no mod lines, means GGG hasn't locked the stats — you can't evaluate it, and you certainly can't trust any number assigned to it.

The foundational lesson of reading this wave lives in :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"}. The name immediately evokes POE1's flask powerhouse, but the 0.5 :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} version on a :wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Belt"} has only two lines: "Has (1—3) Charm Slot" and "(20—30)% increased Stun Threshold". No auto-flask effect, no "Magic Charms effect". Every item carrying a name ported from POE1 (Mageblood, :wiki-link{url="https://www.poe2wiki.net/wiki/Voices"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Loreweave"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Facebreaker"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Geofri's_Sanctuary"}, the Berek set) has to be re-read from scratch, because GGG re-designs rather than copies. This is why the note sticks close to the poe2db numbers instead of POE1 memory.

Among the 23 items with revealed stats, the peak damage budget lands on two weapons. :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Empyrean"} (Aberrant Sledge) gives 94% increased Physical Damage, Adds 166 to 372 Cold Damage, +319 maximum Mana, "10% of Damage is taken from Mana before Life", plus "Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana" and converts 100% Fire→Cold with Mace skills — i.e. a mana-as-life mace scaling cold off the mana pool. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Ordained"} (Grand Spear, Lv79) gives 243% increased Physical Damage, Adds 1 to 209 Lightning Damage, +6.47% Critical Hit Chance, Life Leech counting both lightning and phys, and "Create a Fragment of Divinity in your Presence every 4 seconds". Both have clear math chains, evaluable right now.

## Key Interactions

The companion axis is where this wave is thickest, and it plugs straight into [Spirit Walker](/mechanics/spirit-walker-companion-beast-hunt). :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} (Stoic Sceptre, Lv6) carries the rule-breaking line "You can have any number of Companions of different types" alongside "Companions deal 85% increased damage to your Marked targets" and 54% increased Spirit — this is the item that redefines the companion-count ceiling, not just a damage buff. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (Perching Staff) pushes minions to 111% increased Damage, adds 34% increased Spirit Reservation Efficiency and 12% chance to inflict Gruelling Madness on Hit — a pure minion staff, fitting the [Dinomancer Lich Elephant](/builds/witch/dinomancer-lich-elephant) direction.

The Remnant axis ties into the league crafting. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"} (Hewn Mask, Lv84) is fully reworked for 0.5: "Remnants you create affect Allies in your Presence as well as you when collected" and 94% increased Reservation Efficiency of Remnant Skills, plus 15% additional Physical Damage Reduction and +13% Chaos Resistance traded for -10% all Elemental Resistances. :wiki-link{url="https://www.poe2wiki.net/wiki/Eventide_Petals"} makes Runic Ward a scalable stat with +32 to maximum Runic Ward — the league's new defensive layer now has direct item support.

The curse-stacking axis revolves around :wiki-link{url="https://www.poe2wiki.net/wiki/Liminal_Coil"} (Twisted Wand): "Magnitudes of Curses you inflict are zero" plus "Curses you inflict ignore Curse limit", then Spell Hits gain 27% of Damage as Extra Chaos *and* 27% as Extra Physical *per Curse on target*. The mechanic self-balances — drop curse magnitude in exchange for stacking unlimited curses, then convert each curse into extra damage. This is a genuine build-around, not a stat stick.

## Optimization

Pre-week-one hunting should prioritize by "has numbers + defines an archetype": :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} for anyone running companions (opening the companion-count ceiling is something no passive can replace), :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Empyrean"} for the mace mana-tank, :wiki-link{url="https://www.poe2wiki.net/wiki/Liminal_Coil"} for the curse caster. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Auspex"} (Exquisite Vest, Lv84) is a premium evasion body armour with 223% increased Evasion Rating + grants Level 20 Mist Raven, but "100% increased Attribute Requirements" makes it picky — only worth it when the build has spare attributes.

The rest waits for the league to go live before pricing: the 19 datamine-shell items have no mods yet, and the :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Grip"} / :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Pass"} / :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Respite"} set (all Prismatic Ring, Lv35) currently only reveal +(7—10)% to all Elemental Resistances — the signature mods (leech on shock/freeze/ignite in POE1) aren't populated, so you can't yet pin down how the three rings differ.

## Companion & Minion Items

Beyond Sylvan's Effigy and The Raven's Flock mentioned above, this axis also has new weapons granting companion/azmeri skills whose scaling numbers are already clear. :wiki-link{url="https://www.poe2wiki.net/wiki/Periphery"} (Heartwood Shortbow) is a three-color elemental bow: Adds 49 to 90 Fire, 38 to 70 Cold, 1 to 135 Lightning, 12% increased Attack Speed, plus a line feeding elemental damage from hits into the magnitude of Flammability/Ignite/Chill/Freeze/Shock — a bow for ailment-stackers. :wiki-link{url="https://www.poe2wiki.net/wiki/Horror's_Flight"} (Engraved Bracers, Lv65) is an evasion glove with 213% increased Evasion Rating, +22 Dexterity, Adds 19 to 34 Chaos Damage to Attacks, gaining Fear Incarnate on Cull — a cull-stack glove for crit/evasion builds.

## Weapon Carries

:wiki-link{url="https://www.poe2wiki.net/wiki/Brutus'_Lead_Sprinkler"} (Morning Star, Lv45) ported from POE1 but with specific 0.5 numbers: 102% increased Physical Damage, +23 Strength, 5 to 10 Added Fire per 25 Strength, and "Hits with this Weapon have 5% chance to Trigger Molten Shower per 25 Strength" — a strength-stacker mace. :wiki-link{url="https://www.poe2wiki.net/wiki/Ironbound"} (Warden Bow, Lv11) is a hybrid defensive bow: +12% to Block chance, 5% increased Block chance per 100 Item Armour, "Hits with this weapon have 1 to 4 Added Physical Damage per 1% Block Chance" — the higher the block, the harder it hits, a tankbow direction. :wiki-link{url="https://www.poe2wiki.net/wiki/Redemption"} (Trarthan Cannon) gives 382% increased Physical Damage but trades "Hits with this Weapon have no Critical Damage Bonus" and 22% reduced Cooldown Recovery Rate, running on the Explosive Rhythm/Fervour grenade mechanic. :wiki-link{url="https://www.poe2wiki.net/wiki/Serle's_Grit"} (Kalguuran Forgehammer, Lv47) ties into the Protective Rune league: 113 Physical Thorns damage per active Protective Rune, Has 3 Sockets, Maximum Quality 40%.

## Defensive Layers

:wiki-link{url="https://www.poe2wiki.net/wiki/Nightfall"} (Fortress Tower Shield, Lv70) is a heavy armour shield: 285% increased Armour, 19% increased Block chance, plus two element-shifting lines "19% of Fire damage taken as Cold" and "13% of Lightning damage taken as Cold" — funneling everything to cold so a single cold res carries it. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Unleashed"} (Revered Vestments, Lv65) is a hybrid spell-tank body armour: 183% increased Armour and Energy Shield, 100% increased Spell Damage, +1% to all Maximum Elemental Resistances, but "17% of Damage taken from Hits bypasses Energy Shield if Energy Shield is below half" — rewarding keeping ES above 50%, tied to the new Runic Binding/Shapeshift mechanic. Belt utility beyond Mageblood also includes :wiki-link{url="https://www.poe2wiki.net/wiki/Cat_O'_Nine_Tails"} (Utility Belt, Lv55): Has (1—3) Charm Slot + "20% of Flask Recovery applied Instantly".

## Unarmed & Niche

:wiki-link{url="https://www.poe2wiki.net/wiki/Facebreaker"} (Stocky Mitts) keeps the unarmed identity: "1% more Unarmed Damage per 5 Strength", +3 to Melee Strike Range while Unarmed, "Has 8 to 12 Physical Damage, +3 to +4 per Boss's Face Broken" (damage rises with the number of bosses killed), and lets you attack as if wielding a One Handed Mace when both hands are empty. :wiki-link{url="https://www.poe2wiki.net/wiki/Voices"} (Sapphire jewel, corrupted, Lv20) ports the POE1 mechanic intact: "Allocates (2-4) Sinister Jewel sockets" — opening extra small sockets on the passive tree, a tree-cluster build-around.

## Datamined — Stats Pending

The 19 items below already have a poe2db page with name + base but haven't populated any mods as of 25/05 — not yet evaluable, will log real stats when the league goes live: :wiki-link{url="https://www.poe2wiki.net/wiki/Loreweave"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Geofri's_Sanctuary"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Eyes_of_the_Runefather"}, Decree of Acuity, Decree of Flight, Decree of Loyalty, Duality, Farrow's Gift, Forgotten Warden, Gatecrasher, Mastered Domain, Opportunity, Sadist's Mercy, Spiteful Floret, Split Personality, Surge of the Tide, The Sunken Vessel, Veilpiercer, Vestige of Darkness.

## What Doesn't Work

Don't assume POE1 behavior for an item with the same name — this is the costliest mistake when reading a port wave. Mageblood 0.5 doesn't enable flasks, it only gives charm slots; the Berek rings 0.5 (so far) are only all-res rings, no leech ailment. And don't trust the numbers assigned to the 19 shell items: a page with no mods means there's nothing to trust, every "stat" floating around about them out there is a guess until poe2db populates or the league goes live.

## Common Mistakes

Wrong — hunting items by familiar POE1 names (buying Mageblood/Loreweave early thinking it's OP like before). Right — read the specific 0.5 mods off poe2db first, the mods are completely different. Reason — GGG re-designs every port, the same name doesn't guarantee the same mechanic, and buying wrong can cost a few div early league while prices are still high.

Wrong — writing a build-around one of the 19 datamine shells because the name sounds good. Right — wait for stats to populate before committing. Reason — there are no mods to build on yet, any plan based on an empty page is built on sand.

## Version History

### Patch 0.5.0
- Added 42 new unique items (confirmed via the version history `0.5.0 — New Unique item` on poe2db). As of 25/05, 23 items have fully revealed stats, 19 are still datamine shells. The Hollow Mask was reworked to tie into Remnant (reservation efficiency + allies share remnant). Mageblood re-designed into a charm-slot belt, no longer the POE1 flask powerhouse.

## Relationships

- **related_mechanics** [Spirit Walker — Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Sylvan's Effigy and The Raven's Flock plug straight into the companion axis
- **used_by** [Dinomancer Lich Elephant](/builds/witch/dinomancer-lich-elephant) — The Raven's Flock buffs minion damage + spirit reservation for the minion Lich direction
- **related_mechanics** [Energy Shield Recovery Rework](/mechanics/energy-shield-recovery-rework) — The Unleashed rewards ES above 50%, read alongside the 0.5 ES recovery rework
- **references** [Twisted Empyrean](/mechanics/items/twisted-empyrean) — atomic note for the mace mana-stack cold slam
- **references** [Liminal Coil](/mechanics/items/liminal-coil) — atomic note for the curse-stacking wand
- **references** [Sylvan's Effigy](/mechanics/items/sylvans-effigy) — atomic note for the sceptre companion-multiplier
