---
template: templates/mechanic-template.md
document_type: mechanic
title: Orof's Legacy — Unique Rune Mechanic
status: draft
author: duocnv
created: '2026-05-10'
updated: '2026-05-10'
game: poe2
league: '0.5'
tags:
  - rune
  - unique
  - crafting
  - preview
  - orof
  - calguran
  - ezomite
---


# Orof's Legacy — Unique Rune Mechanic

Orof's Legacy is a new socketable rune coming in the next PoE 2 patch (teased on 10/05/2026, launching ~3 weeks later, official version not yet announced — frontmatter temporarily set to `0.5` to pass validation, will correct the moment GGG locks it in). The way you use it matches the name exactly: take a unique, **destroy it**, pull **one** mod out, and turn that mod into a rune to socket into an item of the same class. This is a "transplant mod" mechanic between uniques — it lets you isolate the strongest modifier off a unique with otherwise bad overall stats and paste it onto a base with better stats.

The reason it's worth watching from now: nearly **every build will touch it**. Trading a rune socket for a top-tier mod from another unique — the cost/benefit is almost always positive. This is a league-wide power spike, not just for a few narrow archetypes.

## How It Works

The **HIGH confidence** part (GGG confirmed in the Q&A):

- The source unique must belong to the **Ezomite** or **Calguran** group. Other categories aren't yet confirmed as destroyable.
- Apply Orof's Legacy → the unique is permanently destroyed, **one** mod is extracted as a rune.
- The rune must be socketed into an item of the **same class** (shield rune → shield, bow rune → bow, mace rune → mace). No cross-class.
- **Some mods will have reduced value** when converted to a rune (for balance reasons). GGG confirmed there's a nerf but didn't say which mods or by how much — that part awaits datamine after launch.

The **MEDIUM confidence** part still unanswered:

- What's the scope of mod that can be extracted? Two interpretations: (a) only **"item grants"** mods (the signature mods of a unique, not found on rares), or (b) any mod on the unique. Interpretation (b) makes the mechanic much stronger — and doubles the list of target uniques. The Q&A didn't settle it; awaiting patch notes.
- Where the rune drops, at what rate, whether it's tradeable. **LOW confidence**: the rune will be rare/expensive at least the first week, then drop in price as supply rises. This is the standard pattern for every new GGG crafting system.

## Key Interactions

Every current PoE 2 unique comes with a deliberate trade-off — a top-tier stat on one mod, paid for with another weak or junk stat. Orof's Legacy breaks that trade-off entirely: take the top mod, throw away the rest. The closest equivalent in PoE 1 is corrupt-implicit via the Temple of Atzoatl back in 0.4 — but the Temple only changes **implicits**, while this mechanic extracts an **explicit/unique mod** and pastes it onto a different base. The power gap between "build with the rune early" and "build without the rune yet" will be wide — whoever farms the rune early eats the meta early.

A small but important consequence: the value of some uniques will **invert**. A unique with many good mods drops in relative value (since destroying it only yields one mod, wasting the rest). A unique with **a single top-tier mod** (Savalin is the textbook example) goes up in price. The trade economy will self-rebalance within the first 1–2 weeks of the league.

## Optimization

This section is **MEDIUM confidence** — the list below is based on the current unique pool. After the patch goes live and "any mod vs item grants only" is confirmed, the list could flip entirely. The goal here is to prepare the mental model in advance, not to buy things up front.

**Cruel Rain** (Ezomite bow) — 100% increased local attack speed plus 4% less attack damage. Because it's local, it's effectively **double attack speed**. If you can steal the attack speed mod onto a good bow base (with flat damage, crit, worthwhile mods): the bow build eats the full 100% IAS with no attached damage downside. **LOW confidence that GGG allows full value** — this is almost certainly the kind of mod that gets nerfed on rune conversion, since free 100% IAS breaks the meta.

**Trench Timber** (Ezomite mace) — has two mods worth extracting separately:

- *Minion attack speed mod*: paste onto a good minion-stat mace (life, ES, +skill, other minion support mods), and the minion build eats full speed without grinding Trench Timber's junk secondary stats.
- *No-aftershock-on-slam mod*: for slammer builds that use skill aftershock. Slam builds currently grind because this mod is locked to Trench Timber (which has poor overall stats). Pull the mod out, paste it onto a good phys mace, and you rebuild the whole archetype.

**Calguran Savalin** (shield) — only has **one** worthwhile mod: *chance to block damage is lucky*. Lucky block = roll block chance twice, take the better roll. For example block 50% → effective block ~75% (not 100%, the formula is 1 − (1 − p)²). Stealing this mod onto a real-stat shield (good life/ES/res/spell block) is one of the highest-value defense upgrades in the game. Especially strong for a character that already invested heavily in block — a non-block build gains nothing. **HIGH confidence Savalin will be target #1 for block-based builds**, because this is exactly the textbook use case of Orof: a unique with one-mod-good-only.

**Twisted Imperion** (Calguran mace, new) — the mace itself is already strong standalone, but if you can steal:

- *Attacks of this weapon have added cold damage*, or
- *100% fire damage as extra cold damage*

→ paste onto a good phys mace and you scale two damage layers at once. **MEDIUM confidence** this is the top mod to extract for melee/attack builds, especially the cold conversion archetype.

**Ironbound bow** (new) — the bow base is already two-hit (every flat damage doubled per arrow). But the mod *arrows return if they pierce a target which had fully broken armor* is the part worth stealing — breaking armor is easy for a bow build (Heavy Stun, armor-stripping mods, support gems), and arrow return is essentially **double hit on every arrow**. Apply this mod onto a normal bow base → x2 damage almost for free. If the rule allows extraction without altering value, this could be the **strongest rune in the league for bows**. Personally I place it in the same tier as Savalin in terms of how much it's worth watching.

**New unique with 40% quality cap** (preview didn't name it clearly) — quality caps at 40% instead of the standard 20%. 20% quality = 20% more damage. Steal this mod onto a good phys mace → **+20% more damage flat**, costing no other affix slot. Boring, but it's the rare kind of "20% more multiplier with no build-around required."

**Unique with 100% increased spell damage** (preview didn't name it clearly) — if the mod is indeed item-grants, this is the default rune for every spell build. 100% increased spell damage on a single rune socket is a massive damage profile upgrade, almost always worth the slot.

There's also **Mioner / Mer** (Calguran, possibly with a +4 lightning skills mod), **Conditional Evershock**, **Bruce Light Sprinkler** — preview info isn't detailed enough to judge. Updating after the patch goes live.

## Common Mistakes

- **Don't rush to destroy an expensive unique on day 1**. The "value modified" rule isn't clear yet — some mods will be nerfed on rune conversion. Wait 2–3 days for the community to test each mod, then decide which unique to destroy. Losing 2 days of meta info is far cheaper than losing a 5div Savalin extracting a mod that's been nerfed 50% in value.
- **Don't treat every 5div+ unique as a good target**. A unique with many good mods is a bad target — destroying it only yields **one** mod, the rest fly off. If a unique is priced high because of *the whole combo* of mods, destroying it is negative value. Only destroy a unique where ≥80% of its value sits in **a single mod** (the Savalin pattern).
- **Don't forget the class restriction**. A rune from a shield won't attach to an amulet/ring/armor. Before buying a unique to destroy, confirm the target gear already has a rune socket of the same class, and that the socket still has a slot open.
- **Don't assume every unique is destroyable**. Currently only **Ezomite + Calguran** is confirmed. Older uniques from earlier patches may not be applicable. The patch notes will settle it — wait-and-see on day 1, don't speculate on old uniques before launch.

## Version History

This mechanic was teased at the Q&A ~3 weeks before launch (10/05/2026 marker). GGG may change the rule, change values, or even pull the mechanic before go-live — this is the standard caveat for every pre-patch preview, not sycophantic hedging. This note will refresh after the official patch notes drop. The `league` field is currently set to the **predicted** value `0.5` to fit the regex validation, and will be corrected the moment GGG announces the official version. When the note refreshes, the "MEDIUM confidence" tiers on unique targets will lock up to HIGH or drop down to LOW based on the "any mod vs item grants only" rule and the nerf-value scale GGG applies.

## Interactions with Other Content

<!-- TODO: polish this section via /write-mechanic-tutorial. Need ≥1 example with real numbers from a character. -->

## What Doesn't Work

<!-- TODO: polish this section via /write-mechanic-tutorial. Need ≥1 example with real numbers from a character. -->
