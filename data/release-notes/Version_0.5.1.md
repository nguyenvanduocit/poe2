# Version 0.5.1

> **Nguồn canonical:** Official GGG forum thread — [pathofexile.com/forum/view-thread/3949114](https://www.pathofexile.com/forum/view-thread/3949114) ("0.5.1 Patch Notes Preview", Early Access Announcements). Source #1 trong hierarchy (GGG ground truth).
> **Released:** 2026-06-05 · **Fetched:** 2026-06-09 · **League:** Runes of Aldur (0.5.0 base)
> Patch incremental trên 0.5.0 — caster buffs lớn, +24 Atlas Passive + 40 Elemental Passive, Lineage Support mới, cùng fix. Fetch qua skill `fetch.sh 3949114 0.5.1` (preview-thread layout h3-sections, không có h2 — extractor xử lý từ T-028). Re-fetch giữ header block này. Bản patch-notes final (post-deploy, gần như trùng preview body) ở thread `3949197`.
>
> **Hotfix threads** — mỗi hotfix là một thread riêng trong subforum *Early Access Patch Notes* (`pathofexile.com/forum/view-forum/2212`), KHÔNG nằm trong thread preview nên skill single-thread không kéo về. Đã enumerate tới Hotfix 8 (2026-06-09). Hotfix 1-5 + 8 thuần crash/crafting fix (Hinekora's Lock, Runeforging fracture, Delirium fog, Hilda tablet-effect nerf 25%→8%). Hai thay đổi chạm kinh tế Ritual/Tablet (verbatim):
> - **Hotfix 6** (`3955250`): *"Omen of Sinistral Erasure, Omen of Dextral Erasure, Omen of Sinistral Annulment, Omen of Dextral Annulment, Omen of the Blessed and Omen of Sanctification can now generate in Rituals in level 79 and above instead of 80 and above."* → sáu omen ritual đỉnh tụt ngưỡng 80→79 (T16-only → T15+). Cùng hotfix: Amanamu's Void uptime 90%→50% + quái rời void (đây là cú crash giá *abyss* omen — pool khác ritual).
> - **Hotfix 7** (`3956589`): *"Fixed an issue where sources of chance for double effect of Explicit modifiers on Tablets weren't applying"* + double-effect không còn áp lên bonus cộng dồn khi cắm nhiều tablet cùng loại. → Jado **Partial Translations** trước đó non-functional, nay đã chạy.

---


In a few hours, we will be deploying Patch 0.5.1 for Path of Exile 2, which contains additional Atlas Passive Skills, a new Lineage Support Gem, new Elemental Passive Skills, as well as a number of improvements and bug fixes. Check them out below:

### Endgame Changes

* Added an additional 24 Passive Skills to the top section of the Atlas Passive Tree, particularly affecting individual biomes.
* Fortress Towers, Gateways, Enigma Chambers, and Halls now award more Atlas Passive Skill Points. Players who have already completed these areas will be granted the additional Passive Skill Points upon logging in.
* Maps that are available to select for The Rite of the Nameless are now much more clear.
* Delirium Fog can no longer spread to Maps that grant Atlas Passive Skills.
* Additional Rares spawned when an Unstable Breach stabilises will now always spawn, regardless of if Vruun is going to spawn or not. Vruun will now spawn after all the rares are killed.
* Breach Monster density now correctly increases the number of monsters in the Breach. This now stacks additively with Pack Size, relevant descriptions will be updated in a future patch.
* Summoning Circles added to Maps are now described as containing a single Summoning Circle, with multiple Reactivation Runes. Reactivation Runes now describe what they do, and have been made easier to notice.
* There is now a checkpoint besides the Summoning Circle, and Reactivation Runes that are far from the circle will create a checkpoint when they are activated to allow easy navigation back to the circle.
* Reactivation Runes now correctly add additional charges if activated before the Summoning Circle and no longer breach the circle.
* The Tear Open the Rift Breach Atlas Passive Skill is now multichoice, with options to have the effect active or inactive. We have also fixed an issue where this could not be allocated.
* Improved the telegraphing for The Bodach slamming Viridi's Tree.
* Panning to a location on the Endgame Map, closing, then reopening your Map in the same instance will now re-open to the same area you panned to.

### Runes of Aldur Changes

* The waves created by the Tidal Rune during Remnant Encounters no longer knock you back.
* During the Campaign Farrow will now point towards and reveal the Runes in the areas he is in.
* Gwennen no longer continues to appear after the Medved Boss fight if you have already spoken to her.
* Fixed a bug where the Rain of Blades Skill was not available reward from Remnant crafting.
* Added new Gossip options to Farrow related to the 4 Tomes that can be found throughout the campaign.

### Player Changes

* Added a new Lineage Support Gem: Atziri's Communion.
* Added 40 new Elemental Passive Skills near Jewel Sockets, mainly around the Sorceress/Witch and Druid areas of the Passive Skill Tree.
* Logging out and in again now preserves your heavy stun buildup. Logging out while heavy stunned will now restart the heavy stun animation when you log in again, unless you log into a different place to where you logged out.
* The Empowering Infusions Notable Passive Skill now grants 35% increased Spell Damage if you have consumed an Elemental Infusion Recently (previously 30%).
* The Principal Infusion Notable Passive Skill now grants 30% increased Elemental Infusion duration (previously 20%).
* Small Passives granting 12% increased Spell Damage if you have consumed an Elemental Infusion Recently now have values of 15%.
* The Cold, Lightning and Fire Attunement Support Gems are no longer limited to supporting just Attacks. These now grant Gain 25% of Damage as Extra Cold, Lightning or Fire Damage respectively.
* Ice Bite I Support is no longer limited to supporting just Attacks, and now grants Gain 25% of Damage as Cold Damage for 5 seconds on Freezing an Enemy with Supported Skills.
* Ice Bite II Support is no longer limited to supporting just Attacks, and now grants Gain 30% of Damage as Cold Damage for 6 seconds on Freezing an Enemy with Supported Skills.
* Innervate Support is no longer limited to supporting just Attacks, and now grants Gain 25% of Damage as Lightning Damage for 5 seconds on killing a Shocked enemy with Supported Skills.
* Conductive Runes now has a base Critical Strike Chance of 7%.
* Refutation's Cooldown no longer recovers while the Buff is active.
* Repulsion's Triggered Wave now has a base Critical Strike Chance of 6%.
* The Acolyte of Chayula's Archon of Chayula skill no longer disables you from dealing elemental damage while active.
* The Lich's Eternal Life Passive Skill no longer prevents Life Reservation.
* Mote Buff stacks from the Gemling Legionnaire's Virtuous Barrier Skill now persist between non-town or hideout areas.
* The benefits granted to Socketed Skills by the Gemling Legionnaire's Advanced Thaumaturgy Passive Skill are now only shown when holding Alt on the Socketed Skill. We've also addressed a handful of issues with effects this Ascendancy Passive provides to some Skills:
* Quality on Mirage Archer and Artillery Ballista is now functional.
* Seismic Cry, Forge Hammer, and Shield Wall now display the Quality benefits they provide.
* Stampede now has 20% more Area of Effect as its special effect.
* Fixed a bug where Explosive Grenade, Storm Lance and Plasma Blast were gaining 1 less Projectile from Quality than intended.
* The Runemastered Revered Vestments now grants 10-15% increased Energy Shield Recharge Rate (previously 10-15% of Damage taken from Hits bypasses Energy Shield if Energy Shield is below half).
* The maximum number of Verisium Infusions that you can have at once is now equal to the maximum number of any single type of Elemental Infusion you can have.
* The Emergent Instinct Ancient Augment Rune now grants Regenerate 5% of maximum Life per Second if you have used a Command skill Recently when socketed in Gloves (previously Recover 10% of maximum Life over 2 Seconds when you use a Command Skill).

### General Changes

* Elite Abyss Monsters have had their damage, loot, and experience lowered, while also much more significantly reducing the amount of life that they had.
* The Lightning Tendrils used by Shepherd of the Pit now deals 70% less Damage.
* The constant damaging wave after a Hive Fortress starts collapsing no longer knocks you down while Sprinting.
* Skills that are unusable because you don't have enough Divinity are now greyed out correctly.
* Harano, the Meat Carver now deals 28% less Damage, and has 20% less Life. Their Slam overall now deals 50% less Damage.
* Defeating Captain Hartlin in Journey's End now spawns a portal back to Freya while the Dark Mists quest is active.
* The Ancestral Tattoos in Halls of the Dead are now easier to find.
* Updated the display of Monster Modifiers to combine modifiers above 8, instead displaying "...and X other Modifiers".
* Keywords on Strongbox world labels are no longer interactable until you hold the Advanced Description bind (default Alt).
* Updated the visual style of keyword underlines.
* Added a button to open the Path of Exile Trade website from the market panel when playing with a controller.
* Added pseudo stat summaries and pseudo stat sorting options to the market search results when playing with a controller.

### Bug Fixes

* Fixed a bug where The Aberration Boss's webs would not be removed upon their death.
* Fixed a bug where certain regular Maps were spawning more infrequently than intended.
* Fixed a bug where Kulemak was granting kill credit for Atlas Passive Skill Points for each difficulty increase instead of once per encounter.
* Fixed an issue where the monster levels of The Burning Monolith, The Origin Tower, Ruins of Kingsmarch, The Withered Willow, Caer Tarth and Twisted Domain could be increased to 82 before you had killed the quest version of the fight with your own quest fragment.
* Fixed a bug where the orbs created in the phase-change sequence of The Bodach Boss fight dealt no damage.
* Fixed a bug where Monsters in Hive Fortresses could fail to path to the centre of the encounter.
* Fixed an issue where the fog in maps with Delirium would not continue spreading while the fog was paused.
* Fixed an issue where Delirium depth was incorrect for certain areas.
* Fixed a bug where the Ancient Lexicon stairs in the Burning Monolith were inaccessible if dialogue with Doryani was skipped.
* Fixed a bug where players could not open Map portals in their own personal Hideout if they were in a Party but not the Party Leader.
* Fixed an issue where Delirium fog on invalid Maps would prevent those Maps from being accessible.
* Fixed an issue where Simulacrum could spawn monsters from other sources, preventing normal completion.
* Fixed an issue where duplicate Azmeri Spirit types could protect a Strongbox.
* Fixed a bug where enemies killed by the Vestige of Darkness Unique Helmet's effect would not grant experience
* Fixed a bug where Second Wind Support could not support skills used by totems or clones of the player.
* Fixed a bug with Mirage Archer targeting when using channelled Bow skills such as Snipe, Detonating Arrow, and Rapid Shot.
* Fixed a bug where the Attack Damage gained as extra Physical Damage Modifiers on Fists of Stone were not functioning unless the Gloves also had an Attack Damage gained as extra Lightning Damage Modifier.
* Fixed a bug with Spell Totem where the modifier for more Totem life per Endurance Charge Consumed applied twice.
* Fixed an issue where the Olroth's Resolve Unique Flask was missing descriptions for its modifiers. It no longer has Instant Recovery or Excess Life Recovery added as Guard for 20 seconds, instead now providing Regenerate 2.5-5% of maximum Runic Ward per second during Effect, and Gain Guard equal to current Runic Ward for 10 seconds when effect ends. These changes were included with the 0.5.0 patch, but unfortunately the patch note for this was missed.
* Fixed a bug where Comet did not deal damage with the Abyssal Comet Skill Effect microtransaction equipped.
* Fixed a bug where Vaulting Impact was always targeting the player location when playing with a controller.
* Fixed a bug where your current location was no longer displayed on the Atlas Map.
* Fixed a bug where the "Powerful Map Boss" option on the Blood on the Stones Atlas Passive Skill was not causing the Summoning Circles Bosses to drop the additional loot for being Powerful.
* Fixed a bug where loading screens were ending before loading had finished.
* Fixed an issue where some players were unable to see the Precursor Reactor in The Origin Tower while still having the Origin Spark and Origin Cradle Quest items.
* Fixed an issue where the Quest Tracker didn't direct you back to the Well of Souls after defeating Tasgul, Swallower of Light if you did not pick up Kulemak's Invitation.
* Fixed an issue where the Collect Divine Power Quest step during the Arbiter of Divinity boss fight could sometimes fail to be removed when the boss died.
* Fixed a bug where Quest areas would tell you to use a higher tier Waystone when Waystones were not required.
* Fixed an issue where The Immured Fury location was not revealed when it spawned in the fog of war on the Atlas.
* Fixed an issue where the Legacy of the Precursors Quest Tracker could sometimes give you incorrect information on where to go next (if you did the Western and Eastern Gateways prior to doing either Enigma Chamber).
* Fixed an issue where the Runic Knowledge in the Skull of the Titan in Act 2 wouldn't be targetable if you had summoned Farrow but did not speak to him, preventing completion of The Runeseeker quest in Act 2.
* Fixed an issue where The Runeseeker Quest in Act 2 could be prematurely completed for players who already completed the quest on another character when speaking to Farrow at the end of the Kalguur dungeon areas in Act 1, Act 3 or Act 4.
* Fixed a rare bug where invalid Maps could spawn on the Atlas. Do not film!
* Fixed an issue where players could sometimes be unable to turn map pieces in to Dannig in Act 4.
* Fixed a bug where the Arbiter of Divinity lock on the Atlas Passive Skill Tree was not visually disappearing after defeating the Arbiter of Divinity.
* Fixed an issue where the Exhaust All Power Notable Passive Skill available through the Oracle's Paths not Taken Ascendancy Passive was described as giving base Critical Strike Chance and Damage, but actually gives increased Critical Strike Chance and Damage.
* Fixed a bug where you could not Ctrl+Click an item into a Unique Stash.
* Fixed a bug where Item Filter Alerts volume was controlled by Sound Effects volume slider instead of Item Filter Alerts slider.
* Fixed an issue where the tradeable Call of the Shadows Fragment used to start the Bodach pinnacle fight was missing from the Currency Exchange.
* Fixed an issue where tradeable Origin Fragments used to start the Arbiter of Divinity pinnacle fight were missing from the Currency Exchange.
* Fixed an issue where Strongboxes that were possessed by an Azmeri Spirit were not properly playing their visual effects.
* Fixed a bug where Delirium encounters could play a portal sound upon completing them.
* Fixed a bug where invisible Delirium mirrors were playing their sounds when entering Journey's End.
* Fixed a bug where a Huntress-only dialogue option was showing for all classes.
* Fixed a bug where Farrow and Dannig could talk over themselves in Kingsmarch.
* Fixed a bug where searching on the Passive Skill tree could fail to include all relevant multi-option Passive Skills.
* Fixed an issue where the Puppet Master keyword did not describe the base duration.
* Fixed a bug where the increased Quantity of Hiveblood found in Map Waystone Modifier was missing its description.
* Fixed a bug where Rune Combination Recipes would not display translations across non-English languages.
* Fixed a bug where the microtransaction shop preview was incorrectly displaying Weapon Effect Microtransactions on both weapons where they would only apply to one.
* Fixed a bug where Unique Tamed Beasts could cause a "Number of shared states is different on client and server" crash.
* Fixed a client crash that could occur with the Thaumaturge's Plasma Blast Effect microtransaction.
* Fixed a client crash that could occur with the Forgemaster Ferocious Roar Effect microtransaction.
* Fixed another client crash.
* Fixed an instance crash.
