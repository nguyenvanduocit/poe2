# Version 0.5.3

> **Nguồn canonical:** Official GGG forum thread — [pathofexile.com/forum/view-thread/3968601](https://www.pathofexile.com/forum/view-thread/3968601) ("0.5.3 Patch Notes", Early Access Patch Notes). Source #1 trong hierarchy (GGG ground truth).
> **Released:** 2026-06-19 · **Fetched:** 2026-06-19 · **League:** Runes of Aldur (0.5.0 base)
> Patch endgame-investment: buff Grand Expedition chests (bỏ basic weapon/armour chest → currency/unique/waystone + high-rarity mystery/trinket chest, 20→15 explosive), Runic Modifier reward x2, Transcendent Alloy quay lại Foci/Wand, Runeforging mất ít defence hơn ~20%. Delirium rework: Simulacrum giờ start 100%→200% (trước 0%→100% nhưng bug không chạy), fog scaling halved nhưng nhiều Delirium Tablet scale lại về giá trị cũ. Breach/Abyss/Temple đều được juice. **Trực tiếp liên quan build:** The Unborn Lich "His Grave Command" BỎ Spirit cost (trước reservation kiểu Tame Beast), quality đổi sang +Minion Life (alt Lich Elephant); Staunch Deflection thêm Deflection = 8% Evasion (Spirit Walker hiện tại); 3 staff suffix/prefix Abyss mới (of Amanamu block 12-16→20-25%, of Kurgal +Puppetmaster stacks, Amanamu's prefix 40-50% extra chaos).
>
> **Hotfix threads** — mỗi hotfix là thread riêng trong subforum *Early Access Patch Notes* (`view-forum/2212`). Đã enumerate 2026-06-19:
> - **0.5.3 Hotfix** (`3968863`, 19/06): fix client crash ở Trade Market interface do 0.5.3 gây ra — cần restart client.
> - **0.5.3 Hotfix 2** (`3968961`, 19/06): fix Simulacrum monster spawn trong blocking (kẹt tường).
> - **0.5.3 Hotfix 3** (`3969089`, 19/06): fix City biome trên Atlas spawn quá ít map; fix .build files dùng Meta gems / Charm hint không load; fix không filter được Stat Filters trong Market; fix client crash khi price check item; fix instance crash.

---

### 0.5.3 Patch Notes

* This patch contains a wide range of improvements to the endgame, making investment feel more rewarding across the board, improving scaling for late game players, and ensuring that each mechanic has clearer opportunities for risk and reward.

**Runes of Aldur Changes**

* The maximum number of Remnants in a Grand Expedition now increases per Waystone Tier, with the highest number of Remnants possible to be found in Tier 15+ Maps.
* Grand Expedition chests have been greatly improved:
  * All the basic Weapon and Armour chests have been removed. Now you should find an abundance of Chests which drop Currency, Unique Items and Waystones. Additonally there are now mysterious chests that drop regular items and trinket chests both of which drop items with a very high Rarity bonus.
  * You can now place 15 Explosives (from 20) in a Grand Expedition to reduce the length of the encounter, combined with the higher value chests and increased number of Remnants your decisions will also be more important.
* Styrn, Fallen Knight of Aldur in the Tomb of the Fallen Knight now always drops an Expedition Logbook.
* The Runic Modifiers on Monsters granted by Runic Inscriptions now improve the rewards of the Monsters more significantly. These have in most cases been doubled, in some cases significantly more.
* Transcendent Alloy can once again be applied to Foci and Wands, granting the same effects as when applied to Staves but at lower values.
* Lowered the amount of defences lost when Runeforging high level non-Unique Armour base types by approximately 20%, the amount of Runic Ward gained remains the same. Existing items will be automatically updated to the new higher values.
* Improved the performance of Fragments of the Past's mortar explosion effect and reduced the amount of blur used by the effect.

**Endgame Changes**

* Previously attempted Maps now additionally have 50% reduced Experience earned on top of the already penalised Item Rewards.
* Followers of the King in the Mists have taken up residence within the maze in the Crux of Nothingness, and aim to kill you as you try to escape the maze.

**Delirium Changes**

* Simulacrums now start at 100% Delirious, scaling up to 200%. This was previously intended to be 0% scaling up to 100%, but was actually not working at all.
* Simulacrum Maps are no longer spawned immediately when spreading Delirium fog on the Atlas. Instead, they are now spawned when reaching 100% Deliriousness in the fog bank.
* Maps with Fog on the Atlas now have their special Mirror Shards shown on the Delirium Progress bar, with a player distance indicator and slight visual changes to indicate the player is in fog anywhere in the map. This is purely a visual change.
* The You can't just wake up from this one Notable Delirium Passive Skill now also provides Simulacrums now spawn Shards between Waves, allowing a single selection:
  * Escalating Threats: Adds an additional Modifier to the area. These modifiers generally add danger and reward.
  * Apex Predators: Adds an additional Boss to the Encounter.
  * Pure Emotions: Adds additional monster packs to the encounter.
* The Are you sure you want to do that? Notable Delirium Atlas Passive Skill no longer grants Tablets have double Effect in areas with a Grand Mirror, instead now granting Areas with Grand Mirrors also have a Delirium Mirror. It also now provides 20% chance Shards within Simulacrums allow multiple selections.
* The You thought you were free? Notable Delirium Passive Skill has had its wording updated to 25% chance an additional Simulacrum is transformed when Delirium Fog reaches 100% Deliriousness. This change is just to reflect the overall changed functionality and will result in the same number of Simulacrums.
* The scaling of Delirium Fog has been halved to make Delirium not as difficult when encountering it early in the Endgame. To make up for this, Delirium Tablets now scale the effect of the Delirium Fog when using multiple Tablets, including Maps with Grand Mirrors or those within Fog Banks. When using three Delirium Tablets the scaling will be at its previous value.
* Improved Delirium Pure Escalation shards, these will now enhance all normal shards to release Pure Emotion Delirium Monster packs, as opposed to just the special Shards that were on the Bar. You can now also see when these shards are enhanced as they are imbued with a purple glassy energy.
* Added additional Monsters to the Loathsome Mire.
* Summoning Circle encounters now pause Delirium Fog. It is paused when starting the encounter, and paused again when defeating the boss spawned by the Summoning Circle.
* Further reduced the toughness scaling on specifically Normal and Magic Monsters in Delirium to be identical to Rares.
* Fixed a bug preventing normal Shards spawning above 150% Delirious depth. This accounted for at least thirty packs of monsters.
* Fixed a bug that prevented Delirium Elites from spawning as Rares or Magic Monsters.
* Fixed an issue where Delirium fog would sometimes not spread to the correct number of Maps.

**Breach Changes**

* Increased the number of Maps that spawn in Breach Strongholds. The size of the Stronghold in the infinite Atlas should now be approximately the same size as the one encountered near the Ziggurat.
* Improved the user experience when consuming Breach Fruits in large quantities. You can now Ctrl+Click the button that normally births a Wombgift to activate the cursor into a mode where you can rapidly click all the Wombgifts in your inventory and drop the items.
* Adjusted the Modifiers that are applied to Maps in a Breach Stronghold when using an additional Breachstone with the Tear Open the Rift Breach Atlas Passive Skill:
  * The Modifier to Ailith Skill Damage can no longer roll.
  * Modifiers to the chance to find specific Wombgift types can no longer roll.
* Added the following new Modifiers:
  * All Monsters spawned in Breach Hives are at least Magic.
  * Ailith can create Dreamer's Sight. A new skill which creates a zone that upgrades the Rarity of Monsters that enter it.
  * Ailith can create Otherworldly Nemesis. A new skill which adds an additional Pack with a Rare Monster to the start of each wave.
  * Ailith can create Xesht's Fervour. A new skill which increases the Effectiveness of all monsters spawned in the Breach Hive.
* Additionally the Ailith Skill which previously spawned a small amount of Magic Monsters now adds 2 Packs of Magic Monsters to the start of each wave.

**Abyss Changes**

* Conquering the Vessel of Kulemak now has a chance to drop Ancient Jawbones, Ancient Ribs and Ancient Collarbones.
* Tasgul, Swallower of Light will now always drop Desecrated Currency.
* Vandroth, Blackblooded Enslaver will now always drop Desecrated Currency.
* The final Large Abyssal Trove in Abyssal Depths will now always contain Desecrated Currency.
* Improved the visuals of the Abyss Strongboxes.
* The Close to the Surface Abyss Atlas Passive Skill now additionally has Abyss Tablets also grant Abyssal Depths 25% increased chance for Monsters to have Abyssal Modifiers, 25% Abyss Tablets also grant Abyssal Depths increased chance for Monsters to have Lichborn Modifiers, and Abyss Tablets also grant Abyssal Depths 4% increased Pack Size.
* Added 13 new Abyssal Wasting Modifiers for the Grip of Kulemak Unique Ring.
* The 'of Amanamu' Staff Suffix Modifier granting +12-16% to Block Chance now grants +20-25% to Block Chance.
* Added a new 'of Kurgal' Staff Suffix Modifier granting +3-4 Maximum Stacks of Puppetmaster.
* Added a new 'Amanamu's' Staff Prefix Modifier granting Gain 40-50% of Damage as Extra Chaos Damage.
* The His Grave Command Skill granted by The Unborn Lich Unique Staff no longer has a Spirit cost (previously a percentage based Spirit Reservation similar to Tame Beast). Quality on His Grave Command now grants 0-20% more Minion Life (previously 0-20% increased Reservation Efficiency).
* Many of the Grip of Kulemak Desecrated Modifiers have been combined into a single Modifier, increased numerically, or disabled. Existing items can be updated using a Divine Orb to receive the new values, however new Modifiers will only generate on new versions of the item.
* Fixed a bug where Abyssal Depths areas sometimes did not contain a Rare Monster with an Abyss modifier at the end of the area.

**Temple Changes**

* The Offerings to the Queen Notable Temple Atlas Passive Skill no longer provides 50% chance Rare Vaal Beacon chests contain an additional random Temple Currency Item, or 25% chance Vaal Beacon Unique Monsters drop an additional random Temple Currency. Instead, it now provides a Rare or Unique Monster in the Area is Corrupted when Vaal Beacons are activated. This change is to ensure the Temple is the source of Temple Currency, while providing a new mechanism for players to interact with Monsters outside of the Temple.
* Reduced the frequency of Atziri's Temple Biome Restricted Rooms enabled by the Secrets of the Ancients Notable Temple Atlas Passive Skill. This combined with the Royal Prerogative Notable now always results in a net positive number of Restricted Room uses.

**General Changes and Improvements**

* Build Planner files can now contain a "link" field, which will present a button for users to click on the build description info. Currently only a subset of domains are whitelisted to appear in the client.
* When opening the "I Want" or "I Have" currency selectors in the Currency Exchange, the search box will now have immediate focus when using Mouse and Keyboard.
* The Staunch Deflection Notable Passive Skill now additionally grants Gain Deflection Rating equal to 8% of Evasion Rating.
* Rogue Exiles no longer drop Corrupted items.
* Reduced the damage, area of effect and freeze build-up of Geonor, The Putrid Wolf's Moonbeam skill in all versions of this Boss Fight.
* Reduced the damage of Count Geonor's Reverse Cleave skill in all versions of this Boss Fight.
* Reduced the damage of Geonor, The Putrid Wolf's Reverse Cleave skill in all versions of this Boss Fight.
* When interacting with the Waypoint in Act 2, hovering over the icons used to navigate the Caravan now instruct you to go to the Desert Map near Asala to do so.
* Improved the behaviour of ground-targeted Skills when used against Zalmarath, the Colossus.
* Made various improvements to The Market UI when playing with a controller.

**Bug Fixes**

* Fixed a bug where the City Biome: Tablet Effect Atlas Passive Skills were not functional.
* Fixed a bug where Dormant Constructs from the Mechanical Guardians Doryani Atlas Master option made it impossible to complete a Ritual if they were revived in one.
* Fixed a bug where using Olroth's, Uhtred's, Vorana's, or Medved's Boons in 10 slot Runic Inscriptions could hide the incorrect option from future 10 slot Runic Inscriptions, allowing you to choose the same Boon twice, which caused the selected option failing to drop the second time.
* Fixed a bug where socketed Jewels would not be preserved when Runeforging an item.
* Fixed an issue where Styrn, Fallen Knight of Aldur could sometimes fail to emerge.
* Fixed a bug where Unique Expedition Chests could fail to drop a Unique Item.
* Fixed a bug where Verisium Remnants could sometimes spawn enemies on the opposite side of walls.
* Fixed a bug that prevented the Delirium Progress bar from showing when it was paused under some circumstances.
* Fixed a bug where completed events on the Delirium progress bar would appear uncompleted upon leaving and re-entering the instance.
* Fixed a bug where events on the Delirium progress bar would not reveal for party members.
* Fixed a bug where town portals were not appearing after completing waves in Simulacrum.
* Fixed a bug where the Atlas Map could get stuck with a black loading screen.
* Fixed bug where the Gathering Storm shockwave from exploding Tempest Bell wasn't hitting Enemies.
* Fixed a bug where Minions created by Ravenous Swarm could be damaged.
* Fixed a bug where the Chaos Attunement Support's non-Chaos Damage penalty only applied to Attack Damage.
* Fixed a bug where the Damage of the Spiralling Conspiracy Skill, granted by the Raven's Flock Unique Staff, would not always update immediately based on your stats changing.
* Fixed a bug where sources that granted a random Shrine Buff were almost always granting Greed Shrines.
* Fixed a bug with Sorcery Ward where if enough defences contributed to the value of the barrier it could become negative and amplify hit damage, this value now cannot exceed 32,000. We will be reviewing Sorcery Ward in a future patch.
* Fixed a bug where "Using a Mana Flask grants Guard equal to 100% of the Flask's Recovery amount for 4 seconds" Modifier found on the Glowswarm Unique Ring did not calculate correctly if the value was not 100%, which is possible when found on the Loreweave Unique Body Armour.
* Fixed an issue where the "red flash" effect was missing on Vorana, Last to Fall's unblockable Cyclone skill.
* Fixed a bug where Vorana, Last to Fall was using an incorrect animation.
* Fixed a bug where you could sometimes become stuck in unwalkable terrain when returning from the Loathsome Mire.
* Fixed a bug where the Delirium Bar would not always correctly indicate when the fog progression was paused.
* Fixed an issue where the entrance to Qimah Reservoir wouldn't remain visible when returning to Qimah.
* Fixed an issue where some players were not granted the waypoint for Qimah Reservoir when having Jado open the entrance to Qimah Reservoir.
* Fixed a bug where the lake drain animation on the Act 3 World Map was not playing.
* Fixed a rare issue where you had to manually select any of the "Tome" dialogue options with Farrow for "The Runeseeker" quest to advance in any of the subareas.
* Fixed an issue where you could not Ctrl + Left-Click on an item in your inventory to assign it as the "I Want" item when using the Currency Exchange.
* Fixed a bug where the stat filter field in The Market panel was not being cleared upon selecting a stat.
* Fixed an issue where you could not exchange Rings for a Grasping Mail item when playing with a controller.
* Fixed an issue where Quick Move was not available when using the Grasping Mail exchange window when playing with a controller.
* Fixed a bug where "additional_text" on Skill Gems from build planner files were not showing.
* Fixed an issue where the audio could become distorted when playing on PlayStation.
* Fixed a client crash that could occur when highlighting a Map on the Endgame Map that contained an invalid Rogue Exile.
* Fixed three other client crashes.

This patch may take roughly 15 minutes to become available to download on PlayStation after it has been deployed.
