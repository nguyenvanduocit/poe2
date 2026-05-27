---
template: templates/mechanic-template.md
document_type: mechanic
title: Olroth's Legacy — Unique Rune Mechanic
status: draft
author: duocnv
created: '2026-05-10'
updated: '2026-05-26'
league: '0.5'
tags:
  - rune
  - unique
  - crafting
  - preview
  - olroth
  - kalguuran
  - ezomyte
---


# Olroth's Legacy — Unique Rune Mechanic

Olroth's Legacy is a new rune in patch 0.5 "Return of the Ancients": apply it to a unique from the **Ezomyte** or **Kalguuran** group, that unique is permanently destroyed, and **one** of its modifiers is extracted into a socketable rune you can place into an item of the **same class**. This is a "transplant mod" mechanic — isolate the strongest modifier off a unique with bad base stats, then paste it onto a far better crafted base. Nearly every build will touch it, so it's worth understanding before the league goes live: trading a rune socket for a top-tier mod off another unique is almost always positive cost/benefit, and this is a league-wide power spike rather than something for a few narrow archetypes.

## How It Works

The **HIGH confidence** part (GGG confirmed in the Q&A with Mark and Jonathan, plus the official item filter info that has now released):

The source unique must belong to the **Ezomyte** or **Kalguuran** group — a hard constraint; other unique categories can't be used right now. Apply the rune → the unique is destroyed, one mod is pulled out into a rune named "Legacy of \<unique\>". That rune can only be socketed into an item of the **same class** as the source unique: a mod from a two-handed mace must go back into a two-handed mace, a bow mod into a bow, a shield mod into a shield. No cross-class. And GGG explicitly confirmed that **some mods will have reduced value** when converted to a rune ("with a slightly modified value sometimes") — for balance, since you no longer carry the whole unique but instead get to use a far better base in its place.

The single biggest question is **still LOW confidence and unanswered**: does the rune pick a mod at **random** or is it **predetermined**? The item text ("extract one of its unique modifiers") leans toward random — meaning applying Olroth's Legacy to the same unique multiple times yields several different "Legacy of \<unique\>" runes, each carrying a different mod. If so, on a multi-mod unique you'd have to roll until you hit the mod you want, and your inventory fills with same-named runes holding different content. The alternative is each unique has one predetermined mod. This variable decides the entire value of each target unique below — unsettled until datamine after launch.

A second open consequence: the scope of extractable mods. Either only the "item-grants" mods characteristic of the unique (keystones, conversions, conditionals), or any mod including flat stats. The broader reading doubles the target unique list and makes the mechanic much stronger.

## Key Interactions

Every PoE 2 unique has an intentional trade-off: one top mod, paid for with a weak base. Olroth's Legacy breaks that trade-off — take the top mod, discard the rest, paste onto a good base. The power gap between "build with the rune early" and "build without it" will be wide; whoever farms runes early eats the meta early.

A key economic consequence: many uniques will have their value **inverted**. Multi-good-mod uniques drop in relative value (destroying only yields one mod, wasting the rest — and worse if extraction is random, since you have to roll). Uniques with a **single top mod** on an otherwise junk base — :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} being the textbook example — rise in price, because they're the textbook use case: destroy without regret.

One extended interaction worth noting is **keystone stacking**. Some targets (the Irongrasp body armour for Iron Grip + Iron Will, :wiki-link{url="https://www.poe2wiki.net/wiki/Crown_of_Thorns"} for Pain Attunement) grant keystones. If the rune lets you keep that keystone *while also* allocating the same keystone on the passive tree, that's an indirect buff to builds that already travel there. More likely each keystone counts once. Exclusion check: keystone double-allocate (rune + tree) unconfirmed — treat as non-stacking until tested.

## Optimization

This section is **MEDIUM confidence on which uniques are in the list** (official item filter info confirmed the roster) but **LOW confidence on the value each rune receives** — Dreamcore repeats "probably toned down" throughout, and GGG pre-warned there's a nerf-on-convert. Treat this as a mental model to prepare with, not a shopping order. Real values only lock after datamine.

**Block / lucky block — Svalinn (shield).** Only one mod worth destroying for: *chance to block damage is lucky*. Lucky block = roll block chance twice and take the better, effective formula 1 − (1 − p)² — e.g. 50% base block → ~75% effective. Stealing this onto a real-stat shield (life/ES/res/spell block) is one of the highest-value defensive upgrades in the game, especially for a character already invested in block; non-block builds gain nothing. **HIGH confidence Svalinn is the #1 target for block builds.** Svalinn also gets baseline runic ward this patch so the shield itself is worth considering — but the extraction value sits in lucky block.

**Bow — Quill Rain + Ironbound.** :wiki-link{url="https://www.poe2wiki.net/wiki/Quill_Rain"} carries increased attack speed (local) + increased arrow speed, with 40% less attack damage. Because attack speed is local it's effectively a huge speed multiplier for the bow socket. Even if the rune keeps only 30% of the value and drags some of the less-attack-damage along, 30% local attack speed on a good bow base is still extremely strong. **Ironbound** (new 0.5 bow) has *arrows return if they have pierced a target which had fully broken armour* — breaking armour is easy for bow builds (Heavy Stun, armour-break mods, supports), and arrow return is essentially **a double hit per arrow**. If the rule allows extraction without locking value, this could be the strongest bow rune of the league; GGG will likely attach a less-damage-for-returning-projectiles clause to block full efficacy.

**Mace (one-handed) — Trenchtimbre, Olrovasara, Mjolner.** **Trenchtimbre** has *increases and reductions to minion attack speed also affect you* — invest in minion attack speed to borrow attack speed for an attack build, bypassing the low attack-speed ceiling for melee. Requires a one-handed mace in the endgame to socket; pairs well with Olrovasara or Brutus' Lead Sprinkler. **Olrovasara** grants added maximum lightning damage scaling with enemy power (ramps fast on bosses and stays high) alongside a high attack speed modifier — if multiple mods can be taken, both are worth it. **Mjolner** intrigues because it may grant level of lightning skills, but the interesting question is whether you could take the skill (Thunder God's Wrath) — almost certainly not, GGG wants skills tied to weapons. Mjolner's flat phys mods would be absurd to allow for free.

**Mace (two-handed) — Hoghunt, Hrimnor's Hymn.** **Hoghunt** has *+15% to critical hit chance* as a local crit mod. After multiplying with the weapon's base crit (~20%) this is an absurd number; even if the rune keeps a fraction (say +5% flat base crit), adding it to a good two-handed mace is large power. **Hrimnor's Hymn** has *slam skills you use yourself cause an additional aftershock* — see the stacking caveat under What Doesn't Work. Pairs with a giant-blood-mace-with-shield setup.

**Defensive helmet — Keeper of the Arc, Starkonja's Head.** **Keeper of the Arc** (Kalguuran) alternates *take 40% less damage from hits* and *40% less damage over time* every 5 seconds — even at 15% per side when toned down, pasted onto a good helmet it's a very strong defensive rune. :wiki-link{url="https://www.poe2wiki.net/wiki/Starkonja%27s_Head"} has *15% of damage from hits taken from companion's life before you* — extremely relevant to the wave of companion builds from the **Spirit Walker** Ascendancy; taking a toned-down version into a real Starkonja's Head lets you shift more damage onto the companion.

**Spell / generic damage.** **Dusk Vigil** (staff) — the question is whether you take the generic *extra damage as fire* mod (paste into another staff) or the Ember Fusillade trigger skill. **Chernobog's Pillar** (shield) — *gain 1% of damage as fire per 1% chance to block*, a way to dip defense for damage, worth it even toned down to 1% per 2% block. **Twisted Empyrean** (new Kalguuran mace) — the flat cold mod (about double a current T1 cold) and the 100% fire-to-cold conversion for mace skills are the two top mods to extract for a cold-conversion melee archetype.

**Movement / utility — Wanderlust, Trampletoe, Legionstride, Amora Mandragora, Elevore.** :wiki-link{url="https://www.poe2wiki.net/wiki/Wanderlust"} has *speed is unaffected by slows* — too strong to allow whole, almost certainly toned down to a "reduced efficacy of slows" form like the passive-tree mod. :wiki-link{url="https://www.poe2wiki.net/wiki/Trampletoe"} has *deal 30% of overkill damage to enemies within 2m* — a clear-speed staple, good even at 15%. **Legionstride** grants base block chance (~10%) — scale block without a shield, pairs well with Ironbound (a bow with base block). **Amora Mandragora** (talisman) grants Druidic Prowess — a buff stacking up to 3 times for a permanent 30% increased skill speed; taking this mod means 30% skill speed without burning a weapon-swap slot. **Elevore** is buffed to 1 charm charge/second (from 0.5) — a way to gain charm charges passively worth considering.

The remaining targets — **Blackbraid** (armour-applies-to-elemental body armour, base armour too low so only worth extracting), **Irongrasp** (Iron Grip + Iron Will keystones, strong for strength-stacking maces with Brutus' Lead Sprinkler / Facebreaker), **Alkem Eira** (damage blocked recouped as mana, combos with block-recoup tech after 0.4 fixed the block-not-counting-as-prevented-damage bug), **Brain Rattler** (all damage causes electrocution buildup — electrocution is a 5-second stun-like effect, strong both offensively and defensively), **Adonia's Ego** (max power charges / pinnacle of power), **Deathblow** (gloves, cutting strike built in), **Briarpatch** (+25% thorns critical strike chance for thorns builds) — are all worth watching but their value hinges on the extraction rule.

## What Doesn't Work

- **Class restriction is absolute.** A shield rune won't go onto an amulet/ring/armour/helmet. A two-handed mace rune only goes back into a two-handed mace, not a one-handed. Before buying a unique to destroy, confirm the target gear is the same class and has a free rune socket.
- **Aftershock from Hrimnor's Hymn doesn't double-stack.** The original mod sets chance-to-cause-additional-aftershock to 100% in the tooltip; any added chance only stacks on top of that and grants no real extra chance beyond the first aftershock. The rune form will likely be 20–30% chance (not 100%), at which point it *can* stack with other aftershock-chance sources — but don't expect doubled aftershocks if any 100% mod remains in the setup. Exclusion check: full-100% aftershock sources cancel additional chance.
- **Keystone runes may not stack with the keystone on the tree.** Iron Grip, Iron Will (Irongrasp), Pain Attunement (Crown of Thorns) — unconfirmed whether keeping the rune *while also* allocating that keystone on the passive tree gives double benefit. Treat as counting once until tested.
- **Skill-on-item almost certainly can't be extracted.** Mjolner (Thunder God's Wrath), Dusk Vigil (Ember Fusillade), Adonia's Ego — GGG tends to keep active skills bound to the unique itself. Don't destroy these uniques hunting a skill; aim for stat mods.

## Common Mistakes

- **Don't rush to destroy expensive uniques on day 1.** The "value modified" rule is unclear, and extraction might be random. Wait 2–3 days for the community to test each mod and confirm random-vs-predetermined before committing. Two lost days of meta info is far cheaper than losing a Svalinn that extracts a mod nerfed 50% or rolls a junk mod.
- **Don't treat every 5div+ unique as a good target.** Multi-good-mod uniques are *bad* targets — destroying yields one mod, the rest is gone, and if random you have to roll. Only destroy uniques where ≥80% of the value sits in a single mod (the Svalinn pattern).
- **Don't forget to check the target class before buying.** Many people buy a unique to extract, then realise the target gear isn't the same class or already has full rune sockets.
- **Don't assume every unique can be destroyed.** Only Ezomyte + Kalguuran confirmed so far. Older uniques from earlier patches may not apply — don't speculate on old uniques before launch.

## Version History

The mechanic was teased in a pre-launch Q&A (10/05/2026); the official item filter info confirmed the full target unique roster during the 0.5 launch week (this note refreshed 26/05/2026 from that info). The unique list is now HIGH confidence; the value of each rune and the random-vs-predetermined rule remain LOW until datamine after go-live. Once in the league, log: (1) whether extraction is random or predetermined, (2) the nerf-value scale GGG applies to each "meta-breaking" mod (Quill Rain IAS, Wanderlust slow-immunity, Svalinn lucky block, Ironbound arrow-return), (3) whether keystone runes double with the tree. After logging, the MEDIUM tiers in Optimization will lock to HIGH or drop to LOW. Status stays `draft` because the mechanic is still pre-launch unverified.

## Relationships

- related_mechanics [Spirit Walker Companion Beast Hunt](/en/mechanics/spirit-walker-companion-beast-hunt) — the Starkonja's Head rune shifts damage onto the companion, relevant to the Spirit Walker companion-build wave.
- references [New 0.5 unique items](/en/mechanics/0-5-new-unique-items) — Ironbound, Twisted Empyrean, Brutus' Lead Sprinkler, Facebreaker are Kalguuran/Ezomyte uniques in the target pool.
- related_mechanics [Talisman crafting](/en/mechanics/crafting/talisman-crafting) — Amora Mandragora is a unique talisman in the list; same family of 0.5 itemization mechanics.
