---
title: "Patch POE2 0.5.3 — Impact Analysis"
game: poe2
version: 0.5.3
release_date: 2026-06-19
patch_type: mid-league
created: 2026-06-19
updated: 2026-06-19
sources:
  - "data/release-notes/Version_0.5.3.md (GGG forum thread 3968601, fetched 2026-06-19)"
  - "data/release-notes/Version_0.5.2-impact.md (delta baseline, 2026-06-12)"
  - "content/ dependency scan (rg cross-cut, 2026-06-19)"
confidence: high
---

# Patch POE2 0.5.3 — Impact Analysis

## Patch context

0.5.3 là patch endgame-investment thuần: bốn trục buff lớn (Grand Expedition chest +
Remnant scale theo Waystone Tier, Runic Modifier reward x2 và Transcendent Alloy
quay lại Foci/Wand, Delirium fog scaling halved nhưng Delirium Tablet scale lại,
Breach Stronghold size scale lên + Ailith skill mới) và một vài chỉnh boss/skill
nhỏ. Hai trục chạm thẳng character đang chơi (Tame Beast Companion Pack Spirit
Walker):

(a) **Staunch Deflection Notable thêm Deflection = 8% Evasion** (L94) — node
    deflection-from-evasion mới, áp dụng cho mọi build evasion stacker đang
    leech deflection từ evasion (Spirit Walker, ranger/huntress evasion-deflect
    hybrid). Build pack đã đứng trên 7,465 evasion + 6,158 deflection (38.6%
    deflect-from-eva ratio); thêm 8% nữa là **+597 deflection rating** nếu node
    nằm trên đường tree.

(b) **The Unborn Lich His Grave Command bỏ Spirit cost** + quality đổi sang
    +Minion Life (L81) — buff lớn cho hướng alt-research Dinomancer Lich
    Elephant. Trước đây Grave Command là Spirit Reservation kiểu Tame Beast, giờ
    free cost; quality 20% giờ thành +20% more Minion Life thay vì Reservation
    Efficiency. Hướng Lich Elephant không có doc nào (research-only), nhưng item
    Unborn Lich được nhắc trong [spirit-and-spirit-reservation.md:86] như một
    nguồn desecrated res eff — dòng đó vẫn đúng (res eff trên desecrated pool
    không thay đổi), nhưng cơ chế ascendancy gem chính của staff thì đảo hẳn.

Hai trục buff Runes of Aldur chạm farming docs:

(c) **Grand Expedition chest rework + Remnant scale theo Waystone Tier**
    (L20-L23) — đảo math chain của [grand-expedition-farming.md] và bổ sung
    nguồn currency/unique mới cho [ocean-exploring.md].

(d) **Delirium fog scaling halved + Delirium Tablet scale lại** (L46) —
    Simulacrum 100→200% start, fog scaling halved (gentler floor) nhưng nhiều
    Delirium Tablet scale lại về giá trị cũ; ba Notable Delirium reworked
    (`You can't just wake up from this one.`, `Are you sure you want to do
    that?`, `You thought you were free?`) — chạm thẳng vào core mechanic của
    delirium subtree mà 4 farming doc + 1 guide đang dùng làm engine.

(e) **Abyss staff modifiers mới** (L78-L80) — 'of Amanamu' block 12-16%→20-25%
    (buff retroactive); 'of Kurgal' +3-4 Max Stacks Puppetmaster mới; "Amanamu's"
    prefix +40-50% extra chaos mới. Grip of Kulemak: 13 Abyssal Wasting mod mới
    + combined/disabled cũ (Divine Orb để update).

Patch incremental cấp 0.5.x: hầu hết doc đã `patch: 0.5.2`, body khớp 0.5.0-
0.5.2; cần delta update cho 0.5.3 thay vì rewrite. KHÔNG có entity nào của doc
hiện hành bị xóa/disabled. Patch type = mid-league, scope hẹp hơn 0.5.0 nhưng
sâu hơn 0.5.1 và 0.5.2 ở phần endgame economy.

## Change summary (categorized, verbatim-cited)

Số dòng trỏ về `data/release-notes/Version_0.5.3.md`.

### NEW (entity mới — content cần verify khi gặp)

- **'of Kurgal' Staff Suffix** — *"Added a new 'of Kurgal' Staff Suffix Modifier granting +3-4 Maximum Stacks of Puppetmaster."* (L79).
- **'Amanamu's' Staff Prefix** — *"Added a new 'Amanamu's' Staff Prefix Modifier granting Gain 40-50% of Damage as Extra Chaos Damage."* (L80).
- **13 Abyssal Wasting Modifiers cho Grip of Kulemak** — *"Added 13 new Abyssal Wasting Modifiers for the Grip of Kulemak Unique Ring."* (L77).
- **Followers of the King in the Mists trong Crux of Nothingness maze** — *"Followers of the King in the Mists have taken up residence within the maze in the Crux of Nothingness, and aim to kill you as you try to escape the maze."* (L33).
- **Build Planner "link" field** — *"Build Planner files can now contain a 'link' field, which will present a button for users to click on the build description info. Currently only a subset of domains are whitelisted to appear in the client."* (L92).
- **Ailith Modifiers mới (Breach Hive)** — *"All Monsters spawned in Breach Hives are at least Magic."* + *"Ailith can create Dreamer's Sight. A new skill which creates a zone that upgrades the Rarity of Monsters that enter it."* + *"Ailith can create Otherworldly Nemesis. A new skill which adds an additional Pack with a Rare Monster to the start of each wave."* + *"Ailith can create Xesht's Fervour. A new skill which increases the Effectiveness of all monsters spawned in the Breach Hive."* (L63-L66).
- **Drops Desecrated Currency từ Tasgul/Vandroth/final Abyssal Trove** — *"Tasgul, Swallower of Light will now always drop Desecrated Currency."* + *"Vandroth, Blackblooded Enslaver will now always drop Desecrated Currency."* + *"The final Large Abyssal Trove in Abyssal Depths will now always contain Desecrated Currency."* (L72-L74).
- **Ancient Bone drops từ Vessel of Kulemak** — *"Conquering the Vessel of Kulemak now has a chance to drop Ancient Jawbones, Ancient Ribs and Ancient Collarbones."* (L71).

### BUFF (cung cấp, mechanic, node, item)

- **Remnant count scale theo Waystone Tier** — *"The maximum number of Remnants in a Grand Expedition now increases per Waystone Tier, with the highest number of Remnants possible to be found in Tier 15+ Maps."* (L20).
- **Grand Expedition chest rework** — *"All the basic Weapon and Armour chests have been removed. Now you should find an abundance of Chests which drop Currency, Unique Items and Waystones. Additonally there are now mysterious chests that drop regular items and trinket chests both of which drop items with a very high Rarity bonus."* (L22).
- **Explosive cap 20→15** — *"You can now place 15 Explosives (from 20) in a Grand Expedition to reduce the length of the encounter, combined with the higher value chests and increased number of Remnants your decisions will also be more important."* (L23).
- **Styrn always drops Expedition Logbook** — *"Styrn, Fallen Knight of Aldur in the Tomb of the Fallen Knight now always drops an Expedition Logbook."* (L24).
- **Runic Modifier reward x2+** — *"The Runic Modifiers on Monsters granted by Runic Inscriptions now improve the rewards of the Monsters more significantly. These have in most cases been doubled, in some cases significantly more."* (L25).
- **Transcendent Alloy quay lại Foci/Wand** — *"Transcendent Alloy can once again be applied to Foci and Wands, granting the same effects as when applied to Staves but at lower values."* (L26). Đảo 0.5.2 removal (Version_0.5.2.md L46).
- **Runeforging defence loss giảm ~20%** — *"Lowered the amount of defences lost when Runeforging high level non-Unique Armour base types by approximately 20%, the amount of Runic Ward gained remains the same. Existing items will be automatically updated to the new higher values."* (L27).
- **Simulacrum start 100% (not 0%)** — *"Simulacrums now start at 100% Delirious, scaling up to 200%. This was previously intended to be 0% scaling up to 100%, but was actually not working at all."* (L37). 2× difficulty floor + 2× reward.
- **Delirium Tablets scale fog effect khi dùng nhiều cùng lúc** — *"The scaling of Delirium Fog has been halved to make Delirium not as difficult when encountering it early in the Endgame. To make up for this, Delirium Tablets now scale the effect of the Delirium Fog when using multiple Tablets, including Maps with Grand Mirrors or those within Fog Banks. When using three Delirium Tablets the scaling will be at its previous value."* (L46).
- **Delirium Pure Escalation shards enhance all normal shards** — *"Improved Delirium Pure Escalation shards, these will now enhance all normal shards to release Pure Emotion Delirium Monster packs, as opposed to just the special Shards that were on the Bar. You can now also see when these shards are enhanced as they are imbued with a purple glassy energy."* (L47).
- **Summoning Circle pause Delirium Fog** — *"Summoning Circle encounters now pause Delirium Fog. It is paused when starting the encounter, and paused again when defeating the boss spawned by the Summoning Circle."* (L49).
- **Loathsome Mire thêm monster** — *"Added additional Monsters to the Loathsome Mire."* (L48).
- **Delirium Normal/Magic toughness scaling = Rares** — *"Further reduced the toughness scaling on specifically Normal and Magic Monsters in Delirium to be identical to Rares."* (L50). Nerf chứ không phải buff cho monster — buff cho player.
- **Breach Stronghold size = same as Ziggurat-near** — *"Increased the number of Maps that spawn in Breach Strongholds. The size of the Stronghold in the infinite Atlas should now be approximately the same size as the one encountered near the Ziggurat."* (L57).
- **Breach Fruit Wombgift batch UX** — *"Improved the user experience when consuming Breach Fruits in large quantities. You can now Ctrl+Click the button that normally births a Wombgift to activate the cursor into a mode where you can rapidly click all the Wombgifts in your inventory and drop the items."* (L58). QoL.
- **Ailith skill spawn 2 packs Magic** — *"Additionally the Ailith Skill which previously spawned a small amount of Magic Monsters now adds 2 Packs of Magic Monsters to the start of each wave."* (L67).
- **Abyss Strongbox visuals** — *"Improved the visuals of the Abyss Strongboxes."* (L75). Cosmetic.
- **Close to the Surface buff** — *"The Close to the Surface Abyss Atlas Passive Skill now additionally has Abyss Tablets also grant Abyssal Depths 25% increased chance for Monsters to have Abyssal Modifiers, 25% Abyss Tablets also grant Abyssal Depths increased chance for Monsters to have Lichborn Modifiers, and Abyss Tablets also grant Abyssal Depths 4% increased Pack Size."* (L76).
- **'of Amanamu' Staff Suffix block 12-16→20-25%** — *"The 'of Amanamu' Staff Suffix Modifier granting +12-16% to Block Chance now grants +20-25% to Block Chance."* (L78). Retroactive — item cũ tự cập nhật.
- **The Unborn Lich His Grave Command no Spirit cost** — *"The His Grave Command Skill granted by The Unborn Lich Unique Staff no longer has a Spirit cost (previously a percentage based Spirit Reservation similar to Tame Beast). Quality on His Grave Command now grants 0-20% more Minion Life (previously 0-20% increased Reservation Efficiency)."* (L81).
- **Staunch Deflection Notable** — *"The Staunch Deflection Notable Passive Skill now additionally grants Gain Deflection Rating equal to 8% of Evasion Rating."* (L94). New deflection-from-evasion node.
- **Atziri's Temple Royal Prerogative net positive Restricted Room** — *"Reduced the frequency of Atziri's Temple Biome Restricted Rooms enabled by the Secrets of the Ancients Notable Temple Atlas Passive Skill. This combined with the Royal Prerogative Notable now always results in a net positive number of Restricted Room uses."* (L88).
- **Fragments of the Past visual perf** — *"Improved the performance of Fragments of the Past's mortar explosion effect and reduced the amount of blur used by the effect."* (L28).

### REWORKED (đổi cơ chế, không thuần buff/nerf)

- **"You can't just wake up from this one." Notable rework + multichoice** — *"The You can't just wake up from this one Notable Delirium Passive Skill now also provides Simulacrums now spawn Shards between Waves, allowing a single selection: Escalating Threats: Adds an additional Modifier to the area. These modifiers generally add danger and reward. Apex Predators: Adds an additional Boss to the Encounter. Pure Emotions: Adds additional monster packs to the encounter."* (L40-L43). Trước đây node chỉ "Delirium Fog dissipates 30% slower", giờ thêm hẳn cụm multichoice Simulacrum spawn shards giữa waves.
- **"Are you sure you want to do that?" Notable rework** — *"The Are you sure you want to do that? Notable Delirium Atlas Passive Skill no longer grants Tablets have double Effect in areas with a Grand Mirror, instead now granting Areas with Grand Mirrors also have a Delirium Mirror. It also now provides 20% chance Shards within Simulacrums allow multiple selections."* (L44). Bỏ "double effect" lottery, thay bằng auto Delirium Mirror cộng multi-select shard.
- **"You thought you were free?" Notable wording** — *"The You thought you were free? Notable Delirium Passive Skill has had its wording updated to 25% chance an additional Simulacrum is transformed when Delirium Fog reaches 100% Deliriousness. This change is just to reflect the overall changed functionality and will result in the same number of Simulacrums."* (L45). Same outcome, wording rephrased.
- **Simulacrum Maps no longer spawn immediately khi spread fog** — *"Simulacrum Maps are no longer spawned immediately when spreading Delirium fog on the Atlas. Instead, they are now spawned when reaching 100% Deliriousness in the fog bank."* (L38). Timing changed.
- **Fog Mirror Shards UI** — *"Maps with Fog on the Atlas now have their special Mirror Shards shown on the Delirium Progress bar, with a player distance indicator and slight visual changes to indicate the player is in fog anywhere in the map. This is purely a visual change."* (L39). Visual only.
- **Tear Open the Rift Breach Atlas mod adjustments** — *"Adjusted the Modifiers that are applied to Maps in a Breach Stronghold when using an additional Breachstone with the Tear Open the Rift Breach Atlas Passive Skill: The Modifier to Ailith Skill Damage can no longer roll. Modifiers to the chance to find specific Wombgift types can no longer roll."* (L59-L61). Bỏ 2 mod roll, thêm 4 mod mới (xem NEW Ailith section L62-L66).
- **Grip of Kulemak Desecrated Modifier consolidation** — *"Many of the Grip of Kulemak Desecrated Modifiers have been combined into a single Modifier, increased numerically, or disabled. Existing items can be updated using a Divine Orb to receive the new values, however new Modifiers will only generate on new versions of the item."* (L82). Existing items cần Divine Orb để re-roll value mới.
- **Offerings to the Queen Temple Notable rework** — *"The Offerings to the Queen Notable Temple Atlas Passive Skill no longer provides 50% chance Rare Vaal Beacon chests contain an additional random Temple Currency Item, or 25% chance Vaal Beacon Unique Monsters drop an additional random Temple Currency. Instead, it now provides a Rare or Unique Monster in the Area is Corrupted when Vaal Beacons are activated. This change is to ensure the Temple is the source of Temple Currency, while providing a new mechanism for players to interact with Monsters outside of the Temple."* (L87).

### NERF (boss damage, content access)

- **Previously attempted Maps thêm 50% reduced Experience** — *"Previously attempted Maps now additionally have 50% reduced Experience earned on top of the already penalised Item Rewards."* (L32). XP penalty added trên top item penalty cũ.
- **Rogue Exiles no longer drop Corrupted items** — *"Rogue Exiles no longer drop Corrupted items."* (L95). Cắt một nguồn corrupted item supply.
- **Geonor Moonbeam dame/AoE/freeze cut** — *"Reduced the damage, area of effect and freeze build-up of Geonor, The Putrid Wolf's Moonbeam skill in all versions of this Boss Fight."* (L96).
- **Count Geonor Reverse Cleave cut** — *"Reduced the damage of Count Geonor's Reverse Cleave skill in all versions of this Boss Fight."* (L97).
- **Geonor Reverse Cleave cut** — *"Reduced the damage of Geonor, The Putrid Wolf's Reverse Cleave skill in all versions of this Boss Fight."* (L98).
- **Delirium scaling fog halved** — *"The scaling of Delirium Fog has been halved to make Delirium not as difficult when encountering it early in the Endgame."* (L46). Net nerf của fog scaling, bù lại bằng tablet stack.

### REMOVED / DISABLED

- **Tear Open the Rift: Ailith Skill Damage mod** — *"The Modifier to Ailith Skill Damage can no longer roll."* (L60).
- **Tear Open the Rift: Wombgift-type-chance mod** — *"Modifiers to the chance to find specific Wombgift types can no longer roll."* (L61).

### CONFIRMED-BUG-FIX (sửa cơ chế đã tồn tại, nhiều fix UX không impact content)

- **Verisium Remnants spawn through walls** — *"Fixed a bug where Verisium Remnants could sometimes spawn enemies on the opposite side of walls."* (L111).
- **Runeforging socketed jewels preserved** — *"Fixed a bug where socketed Jewels would not be preserved when Runeforging an item."* (L108).
- **Styrn fail to emerge** — *"Fixed an issue where Styrn, Fallen Knight of Aldur could sometimes fail to emerge."* (L109).
- **Unique Expedition Chests fail Unique drop** — *"Fixed a bug where Unique Expedition Chests could fail to drop a Unique Item."* (L110).
- **City Biome Tablet Effect non-functional** — *"Fixed a bug where the City Biome: Tablet Effect Atlas Passive Skills were not functional."* (L105). **HIGH-IMPACT FIX** — node này là gốc của một số farming math.
- **Mechanical Guardians Doryani Atlas Master Dormant Construct bug** — *"Fixed a bug where Dormant Constructs from the Mechanical Guardians Doryani Atlas Master option made it impossible to complete a Ritual if they were revived in one."* (L106).
- **10-slot Runic Inscription duplicate Boon bug** — *"Fixed a bug where using Olroth's, Uhtred's, Vorana's, or Medved's Boons in 10 slot Runic Inscriptions could hide the incorrect option from future 10 slot Runic Inscriptions, allowing you to choose the same Boon twice, which caused the selected option failing to drop the second time."* (L107).
- **Tempest Bell Gathering Storm shockwave hit** — *"Fixed bug where the Gathering Storm shockwave from exploding Tempest Bell wasn't hitting Enemies."* (L117).
- **Ravenous Swarm minions damageable bug** — *"Fixed a bug where Minions created by Ravenous Swarm could be damaged."* (L118).
- **Chaos Attunement non-Chaos penalty fix** — *"Fixed a bug where the Chaos Attunement Support's non-Chaos Damage penalty only applied to Attack Damage."* (L119).
- **Spiralling Conspiracy (Raven's Flock) damage refresh** — *"Fixed a bug where the Damage of the Spiralling Conspiracy Skill, granted by the Raven's Flock Unique Staff, would not always update immediately based on your stats changing."* (L120).
- **Greed Shrine random bug** — *"Fixed a bug where sources that granted a random Shrine Buff were almost always granting Greed Shrines."* (L121).
- **Sorcery Ward negative amplification bug** — *"Fixed a bug with Sorcery Ward where if enough defences contributed to the value of the barrier it could become negative and amplify hit damage, this value now cannot exceed 32,000. We will be reviewing Sorcery Ward in a future patch."* (L122).
- **Glowswarm guard formula fix** — *"Fixed a bug where 'Using a Mana Flask grants Guard equal to 100% of the Flask's Recovery amount for 4 seconds' Modifier found on the Glowswarm Unique Ring did not calculate correctly if the value was not 100%, which is possible when found on the Loreweave Unique Body Armour."* (L123).
- **Vorana Cyclone red flash + animation fix** — L124-L125.
- **Loathsome Mire stuck unwalkable terrain** — L126.
- **Delirium Bar pause indicator** — L127.

## Affected docs matrix

Chỉ list doc bị ảnh hưởng (KHÔNG list UNTOUCHED). Tag: BROKEN / WEAKENED /
STRENGTHENED / RENAMED / CONFIRMED-FIX (bug fix khớp doc, doc giờ accurate) /
NEW-OPPORTUNITY (entity mới mở hướng research).

| Doc (path) | Tag | Confidence | Reason (entity) |
|---|---|---|---|
| builds/huntress/0-5-spirit-walker-companion-pack.md | STRENGTHENED | HIGH | Staunch Deflection thêm Deflection = 8% Evasion (L94). Build đứng trên 7,397 evasion → +592 deflection nếu node nằm trên đường tree đang đi (gần The Wild Cat cluster mà doc đã allocate). |
| characters/thao-cam-vien-sai-gon.md | STRENGTHENED | HIGH | Same — Staunch Deflection 8% Evasion → +597 deflection trên 7,465 evasion. Character file snapshot cần re-read tree trong client để verify Staunch Deflection có nằm trên đường đang allocate hay không. |
| builds/huntress/0-5-spirit-walker-twister.md | STRENGTHENED | HIGH | Staunch Deflection + From Nothing keystone Heavy Frost — doc L105 đã liệt "Trained Deflection" cluster, Staunch Deflection thuộc cùng evasion-deflect hybrid path. |
| builds/ranger/0-5-pathfinder-herald-of-ice-bow.md | STRENGTHENED | MEDIUM | Pathfinder evasion-deflect hybrid (doc L83 cite Atziri's Step deflection-from-evasion). Staunch Deflection thêm 8% nếu Pathfinder tree path đi qua. Verify node location trong tree. |
| builds/huntress/0-5-ritualist-rarity-cull-bot.md | STRENGTHENED | MEDIUM | Ritualist evasion-deflect Huntress hybrid; Staunch Deflection có thể nằm trên path. |
| guides/energy-shield-recovery.md | STRENGTHENED + UPDATE | HIGH | Doc L56 đã viết "Deflection là lớp mới nổi bật trong 0.5. Nhiều notable Deflection đồng thời cấp faster start". Cần thêm Staunch Deflection vào danh sách notable cấp deflection-from-evasion (cùng họ với Wild Cat, dòng small passive 8% Evasion-as-Deflection). |
| guides/armour-defensive-scaling.md | STRENGTHENED + UPDATE | HIGH | Doc L55, L128 mô tả công thức Deflect 0.5 + Evasion stacker scaling. Cần thêm Staunch Deflection như một node deflection-from-evasion bổ sung. |
| guides/beginner-defence-layers.md | UPDATE | MEDIUM | Doc L39 mô tả "evasion build trong 0.5 thường lấy thêm Deflection qua passive nodes gần khu vực Dexterity". Bổ sung Staunch Deflection vào liệt kê. |
| guides/beginner-accuracy-evasion.md | UPDATE | LOW | Cross-ref nhẹ — doc đã point sang beginner-defence-layers; nếu beginner-defence-layers update thì ref đứng. |
| farming/0-5-grand-expedition-farming.md | STRENGTHENED | HIGH | Grand Expedition chest rework (L20-L23): bỏ basic weapon/armour chest, thêm currency/unique/waystone + mystery/trinket chest high-rarity. Remnant count scale theo Waystone Tier T15+. Explosive 20→15. Doc L42-L60 mô tả saga + boss + clue/rumour fish + Vorana/Olroth/Uhtred/Medved/Aldur — không đụng phần saga, nhưng phần chest reward + Remnant count là tâm doc. **Toàn bộ "Loot Breakdown" cần rewrite**. |
| farming/0-5-remnant-runeforging-profit-loop.md | STRENGTHENED | HIGH | Runic Modifier reward x2 (L25): Doc L36 đã đề "đường cong slot-to-reward dốc" — Runic Modifier giờ buff x2 reward, đường cong dốc hơn. T15+ Remnant scale (L20) cộng dồn: T15+ map ăn cú double — math chain "EV/high-slot remnant" L64 cần re-tune. Transcendent Alloy quay lại Foci/Wand (L26): đảo 0.5.2 removal, demand-side mở rộng → giá Transcendent có thể tăng lại (doc L57 quote 209 ex ~1.6 div sẽ stale). |
| guides/0-5-ocean-exploring.md | STRENGTHENED | HIGH | Styrn always drops Logbook (L24). Grand Expedition chest rework + Remnant T15+ scale. Doc L38 mô tả "đảo Grand Expedition — bản phóng to" — guarantee ≥1 Grand Expedition/section đã có từ 0.5.2, giờ chest nội dung được rework hẳn. Cần update section "Vòng quay đại dương" (~L89). |
| guides/return-of-the-ancients.md | UPDATE | HIGH | Doc L32 mô tả "mỗi vùng đại dương logbook hé lộ đảm bảo có ít nhất một Grand Expedition" (0.5.2). Cần thêm 0.5.3 changes: chest rework, Remnant scale tier, explosive cap 20→15, Runic Modifier x2, Transcendent Alloy quay lại Foci/Wand. Doc L96 fix 0.5.2 Forgotten Warden bug đã ghi — không đụng. Doc L107 ghi changelog hotfix — thêm 0.5.3. |
| guides/0-5-currency-making-mindset.md | UPDATE | MEDIUM | Doc L44 ghi "ai làm Runeforging cũng cần, nên người cung được chúng thu phí". Runic Modifier reward x2 cộng T15+ scaling = supply Alloy/Rune tăng → giá ép xuống. Phân vai Refiner ([remnant-runeforging-profit-loop](/farming/0-5-remnant-runeforging-profit-loop)) là ví dụ → cần soft note "post-0.5.3, supply tăng, margin có thể nén". |
| farming/0-5-delirium-boss-rush-farm.md | WEAKENED + REWORKED | HIGH | Patch chạm SÂU vào engine doc. L46 (delirium fog scaling halved + tablet scale lại với 3 tablet = giá trị cũ) → doc L18, L38-L46 đã setup chính xác 3 Delirium tablets, nên scaling giữ nguyên với 3 tablets — đây là **incidental fit** (doc chạy 3 tablet, không cần update math). Nhưng L40-L44 ("You can't just wake up from this one" rework + "Are you sure you want to do that?" rework + "You thought you were free?" rephrase) chạm vào Delirium subtree mà doc L32 nói "lấy hết, không thương lượng" — cần re-pick notable choice (multichoice mới: Escalating Threats / Apex Predators / Pure Emotions). L49 Summoning Circle pause fog — doc không liên quan trực tiếp. L38 Simulacrum spawn timing (delay đến 100%) — không ảnh hưởng doc vì doc không chạy Simulacrum. **Action**: update Delirium subtree notable selection. |
| farming/0-5-delirium-breach-density-farm.md | WEAKENED + REWORKED | HIGH | Same Delirium notable rework cluster chạm: doc L46 cite "You can't just wake up from this one." cho fog tan chậm — node giờ thêm multichoice Simulacrum shards. Doc L26 đã ghi 0.5.2 đổi Partial Translations 20% double → 0-40% continuous, đúng. Patch L46 (3-tablet baseline = scaling cũ) phù hợp doc vì doc chạy 3 Delirium tablet. **Bigger impact**: doc đứng trên engine City + Breach Stronghold size (L57 buff Breach Stronghold size = same as Ziggurat-near) — section "Pha một" và "Pha hai" cần xem có liên quan Stronghold size không. Doc nhắc City + Industrial Improvements (L48); City Biome Tablet Effect bug fix (L105) — node trước đó non-functional, giờ functional → **fix này HIGH-IMPACT cho doc**, math throughput tăng đáng kể. |
| farming/0-5-withered-willow-delirium-farm.md | WEAKENED + REWORKED + CONFIRMED-FIX | HIGH | Simulacrum start 100% Delirious (L37) — doc L56 mô tả "Splinter gom đủ 300 thì đóng thành Simulacrum và tự chạy — chênh lệch đóng gói +9,5% cộng loot 7 wave cộng key Raven's Reflection". Patch L37 nói Simulacrum cũ start 0% intended nhưng bug không scale → giờ start 100% scaling lên 200%. **Loot 7 wave** giờ ở khó hơn 2× (100% nền) nhưng reward dày hơn — doc cần re-tune độ khó vs reward. Doc L50 mô tả "Simulacrum 7 wave và Kosis cần thêm single-target tử tế" — vẫn đúng nhưng Simulacrum giờ khó hơn từ wave 1. **Action**: re-verify-via-farming-researcher cho Simulacrum loot section + Delirium subtree update. |
| guides/0-5-delirium-trial-of-madness.md | WEAKENED + REWORKED | HIGH | Doc L54, L83 mô tả "You can't just wake up from this one." như "node đầu tiên nên lấy" cho "Delirium Fog dissipates 30% slower". Patch L40-L43 thêm hẳn cụm multichoice Simulacrum spawn shards. Doc L93 cite tablet mod "of the Unending — Delirium Fog in Map dissipates 20-30% slower" — vẫn đúng, không bị chạm. Doc L100 cite "of Shattering — Mirror Shards" — UI change ở L39 không ảnh hưởng. Patch L46 fog scaling halved + tablet scale lại (3 tablet = giá trị cũ) — doc cần update "kéo tới 200% Trial of Madness" math (single tablet giờ phủ fog yếu hơn 50%, 2 tablet middle, 3 tablet bằng cũ). **Action**: rewrite "Cụm Delirium subtree" section + update fog scaling math. |
| guides/0-5-atlas-passive-tree.md | WEAKENED + REWORKED | HIGH | Doc L89 mô tả: "Delirium có 16 node điều khiển fog... You can't just wake up from this one. cho fog tan chậm hơn 30%". Notable này giờ rework thêm multichoice (L40-L43). Doc L93 nhắc Fate of the Vaal subtree + Atziri's Temple — Patch L87 rework Offerings to the Queen + L88 reduce Restricted Room frequency cộng Royal Prerogative net positive — doc cần thêm. Doc L45 nhắc Apex Predators — patch L42 reuse tên "Apex Predators" cho multichoice MỚI trong "You can't just wake up from this one." (Forest cluster cũ vẫn còn, nhưng giờ có collision tên). **Action**: re-verify-via-mechanic-researcher (medium scope) — Delirium notable rework + Temple Offerings rework + check name collision. |
| farming/0-5-ritual-belt-hunting.md | UPDATE | MEDIUM | Doc L73 mô tả ritual altar timing — patch L49 Summoning Circle pause Delirium Fog (nếu ritual run cộng fog). Patch L91 nhắc Head of the King → Rite chain — patch L33 "Followers of the King in the Mists have taken up residence within the maze in the Crux of Nothingness" — boss spawn mới có thể nhả Head of the King. Verify drop. |
| farming/0-5-fragment-supply-farm.md | STRENGTHENED + UPDATE | MEDIUM | Doc L26, L96, L121 nhắc King in the Mists + Crux of Nothingness. Patch L33 thêm Followers of the King vào Crux maze → tăng density gặp boss Followers. Doc nếu farm-Head-of-King thì có thể nhặt thêm Head từ Followers (verify). |
| farming/0-5-tablet-supply-farm.md | UPDATE | LOW | Doc L105 cite Head of the King 167 ex via Crux of Nothingness — patch L33 thêm Followers vào maze → supply Head có thể tăng → giá rớt. Tablet supply không trực tiếp đụng nhưng giá Head có thể ảnh hưởng cross-strat. |
| farming/0-5-abyss-ulaman-amanamu-farm.md | STRENGTHENED + UPDATE | HIGH | Patch L71-L77 chạm thẳng Abyss content: Vessel of Kulemak rớt Ancient Bone (L71), Tasgul/Vandroth always drop Desecrated Currency (L72-L73), final Large Abyssal Trove always drop Desecrated Currency (L74), Close to the Surface Abyss Atlas buff (L76). Doc L96, L133, L161 mô tả Amanamu's Void uptime 90%→50% (0.5.1 hotfix) — không bị 0.5.3 chạm. Doc L143-L175 nhắc Partial Translations — đã update 0.5.2. **Action**: thêm 4 nguồn drop guaranteed mới (Vessel/Tasgul/Vandroth/final trove), update node Close to the Surface, re-tune EV math chain. |
| farming/0-5-abyss-monster-rarity-fracture-farm.md | STRENGTHENED + UPDATE | HIGH | Same Abyss buffs: Vessel of Kulemak Ancient Bone (L71), Tasgul/Vandroth Desecrated guaranteed (L72-L73), Close to the Surface buff (L76). 13 Abyssal Wasting mod mới cho Grip of Kulemak (L77). Doc L68 mô tả Abyssal Trove drop chain — cần update. |
| farming/0-5-breach-rare-juice-farm.md | STRENGTHENED + UPDATE | HIGH | Doc đứng trên engine City + Breach. Patch L57 buff Breach Stronghold size = Ziggurat-near; patch L62-L67 thêm Ailith skill mới (Dreamer's Sight rarity zone, Otherworldly Nemesis +rare pack, Xesht's Fervour); patch L105 fix City Biome Tablet Effect node non-functional bug. **City Biome bug fix HIGH-IMPACT**: doc L154 cite "City Biome: Tablet Effect: 8% increased Effect of Tablet Explicit Modifiers on your City Maps (3 rank = 24%)" — node trước đó **không hoạt động** (per patch L105) → math chain doc dùng 24% là số kế hoạch chưa thực sự áp dụng; giờ áp đúng. Đây là **buff retroactive lớn** cho strat. Patch L59-L61 nerf Tear Open the Rift mod (Ailith damage không roll, Wombgift-type-chance không roll) — doc L42 mô tả strat dùng tower suffix khác, không trực tiếp đụng. |
| guides/0-5-breach-genesis-tree.md | UPDATE | HIGH | Doc L94 mô tả Tear Open the Rift multichoice (đã update 0.5.1). Patch L59-L66 thêm mod Tear Open the Rift mới + nerf 2 mod cũ. Patch L57 Breach Stronghold size buff. Patch L58 Breach Fruit Ctrl+Click QoL. **Action**: thêm 4 Ailith skill mới (L62-L66) vào doc + nerf Tear Open mod (L60-L61). |
| crafting/0-5-plus4-minion-amulet.md | UPDATE | MEDIUM | Doc L111 cite "of Amanamu / of Kurgal / of Ulaman suffix (Liege / Blackblooded / Sovereign): +(13-17)% to Fire+Chaos / Cold+Chaos / Lightning+Chaos Resistances" — patch L78 buff 'of Amanamu' Staff Suffix block 12-16→20-25% (staff-specific, không phải amulet). Doc đề cập amulet suffix, không trực tiếp đụng. Patch L79 thêm "of Kurgal" Staff Suffix Puppetmaster — staff-specific. Patch L80 thêm "Amanamu's" Staff Prefix +40-50% extra chaos — staff-specific. **Verify**: doc đang ghi "of Amanamu/of Kurgal/of Ulaman" trên amulet — không phải staff version đang change ở 0.5.3. Doc giữ nguyên, nhưng cần Version History note phân biệt staff vs amulet pool. |
| guides/spirit-and-spirit-reservation.md | UPDATE | HIGH | Doc L67-L71 list "Abyss desecrated suffix of Amanamu: % increased Spirit Reservation Efficiency of Skills, helmet (4-8)%, body armour (6-12)%, weapon (5-10)%. Amanamu's prefix: +(35-50) flat trên staff" — patch L80 thêm "Amanamu's" Staff Prefix +40-50% extra chaos, không phải spirit. **Tên collision**: có 2 "Amanamu's" Staff Prefix giờ — cái flat spirit cũ vs cái extra chaos mới. Doc cần clarify "spirit version of Amanamu's vs chaos version". Doc L86 nhắc The Unborn Lich roll desecrated pool res eff — vẫn đúng (cơ chế desecrated mod không đổi); chỉ skill granted của staff (His Grave Command) thay đổi cost. |
| builds/witch/0-5-spectre-summoner-lich.md | UPDATE | MEDIUM | Doc L132 cite The Raven's Flock vs Chober Chaber vs rare sceptre — patch L120 fix Raven's Flock Spiralling Conspiracy damage refresh bug. Buff retroactive cho người dùng Raven's Flock, doc note nhẹ. |
| builds/witch/0-5-infernalist-spectre-legion.md | UPDATE | LOW | Doc L141, L196, L212 nhắc Raven's Flock; patch L120 fix Spiralling Conspiracy refresh — Raven's Flock spectre chính cast Spark, không phải Spiralling Conspiracy, nên fix không ảnh hưởng spectre legion build trực tiếp. |
| builds/witch/plants-lich-abyssal-league-starter.md | UNTOUCHED-edge | LOW | Doc dùng Lich + Abyssal — patch buff Abyss nguồn drop nhưng build doc không cite Abyss farming explicit. |
| builds/witch/0-5-bone-construct-mass-summoner-lich.md | UNTOUCHED-edge | LOW | Doc dùng Lich keystone Soulless Form + Bone Construct — không liên quan Unborn Lich staff. |
| builds/druid/raging-spectre-shaman.md | UNTOUCHED-edge | LOW | Doc nhắc King in the Mists (drop From Nothing) — patch L33 thêm Followers vào Crux không trực tiếp đụng pinnacle drop. |
| builds/monk/0-5-flicker-strike-martial-artist.md | UNTOUCHED-edge | LOW | Doc L62, L119 nhắc Tempest Bell — patch L117 fix Gathering Storm shockwave trigger từ exploding Tempest Bell — fix bug, doc không cite Gathering Storm interaction → không ảnh hưởng. |
| builds/monk/0-5-martial-artist-hollow-palm-leaguestarter.md | UNTOUCHED-edge | LOW | Doc L51, L129 nhắc Tempest Bell evolution → Hollow Focus Technique. Patch fix không đụng. |
| builds/huntress/0-5-spirit-walker-infernal-monkey.md | UNTOUCHED-edge | LOW | Doc dùng Amanamu's Tithe (Lineage support gem). Patch không đụng support gem. Tên "Amanamu's" collision không apply (gem vs staff prefix). |
| guides/0-5-new-unique-items.md | UPDATE | MEDIUM | Doc cite Forgotten Warden, Raven's Flock, etc. Patch L120 fix Raven's Flock Spiralling Conspiracy refresh — nhẹ. Doc cần thêm The Unborn Lich change (L81): His Grave Command no Spirit cost + quality +Minion Life. |
| guides/0-5-2-patch-notes.md | UNTOUCHED | HIGH | Self-reference patch notes. Patch 0.5.3 cần tạo doc mới `guides/0-5-3-patch-notes.md` nếu pattern muốn duy trì. |
| guides/0-5-0-patch-notes.md | UNTOUCHED | HIGH | Self-reference patch notes 0.5.0. |
| guides/challenge-guide.md | UNTOUCHED-edge | LOW | Challenge progress — không trực tiếp đụng. |
| guides/0-5-minion-army-build-comparison.md | UNTOUCHED-edge | LOW | Build comparison — không cite Unborn Lich. |

## Action list per affected doc

### STRENGTHENED — priority cao (character đang chơi)

**builds/huntress/0-5-spirit-walker-companion-pack.md** — STRENGTHENED, HIGH

- Patch L94: *"The Staunch Deflection Notable Passive Skill now additionally grants Gain Deflection Rating equal to 8% of Evasion Rating."*
- Build hiện đứng trên 7,397 Evasion / 6,102 Deflection (39% deflect chance). Nếu Staunch Deflection nằm trên path tree đang đi (doc L98 list The Wild Cat + Blur cluster: "evasion cộng node chuyển evasion thành deflection") thì Staunch Deflection có khả năng nằm cùng cluster.
- Tính: +8% × 7,397 = **+592 Deflection Rating**. Theo công thức 0.5 (`chance = 150 × (1 − A/(A + 0.12×D))`), trên một attacker A=2000, D từ 6,102 → 6,694 đẩy chance từ 39.0% → 40.3% (+1.3pp). Trên D high (~10k), +592 đẩy chance từ 50% → 51.4% (+1.4pp).
- **Action: update-stats**. Verify in-client xem Staunch Deflection có nằm trên path đang đi không (tree poe2db / atlas-tree skill). Nếu CÓ → đã có sẵn buff retroactive, update Defense stats trong character snapshot + build pack doc (Snapshot Lv96 / Performance Ratings). Nếu KHÔNG → đánh giá có đáng đổi 1 điểm vào Staunch Deflection (tradeoff với 5 điểm cuối Lv96-100 đang dồn vào "cụm evasion-to-deflection và minion-life", doc L100). Thêm Version History entry 0.5.3.

**characters/thao-cam-vien-sai-gon.md** — STRENGTHENED, HIGH

- Same Staunch Deflection logic. Snapshot 2026-06-16 ghi Evasion 7,465 → +597 Deflection nếu node trên path.
- Doc đã ghi Cold 0 / Fire 57 là lỗ res cấp nhất (L30-L31), nên Deflection buff chỉ thứ hai. Nhưng nếu Staunch Deflection nằm cùng cluster Wild Cat (doc đã allocate) → buff retroactive miễn phí.
- **Action: update-stats**. Sau khi verify in-client (cập nhật ascendancy/tree screenshot), update Snapshot section (L27) với deflection mới. Thêm Progress Log entry 2026-06-19.

**builds/huntress/0-5-spirit-walker-twister.md** — STRENGTHENED, HIGH

- Doc L105 cite "Trained Deflection (qua From Nothing — push deflection lên 46% cap), Wildcat (deflection rating khi không có deflection suffix gloves)". Staunch Deflection thuộc cùng họ.
- **Action: update-stats nhẹ**. Section "Cluster defense" thêm Staunch Deflection. Add Version History 0.5.3.

**builds/ranger/0-5-pathfinder-herald-of-ice-bow.md** — STRENGTHENED, MEDIUM

- Doc L83 cite Atziri's Step deflection-from-evasion (40-60% eva → deflection). Pathfinder evasion-stacker đứng trên tree-path đi qua khu Dex node, Staunch Deflection có thể tiếp cận được.
- **Action: re-verify-via-build-researcher (lite)** — verify Pathfinder tree-path qua Staunch Deflection. Nếu trên path → buff retroactive miễn phí (~+500-700 deflection trên 6-9k eva typical Pathfinder).

**builds/huntress/0-5-ritualist-rarity-cull-bot.md** — STRENGTHENED, MEDIUM

- Same evasion-deflect Huntress hybrid. Verify Staunch Deflection trên path.
- **Action: re-verify-via-build-researcher (lite)**.

### STRENGTHENED + UPDATE — defense guides

**guides/energy-shield-recovery.md** — STRENGTHENED + UPDATE, HIGH

- Doc L56 đã liệt notable deflection-from-evasion (Mending Deflection 20% start, Energising Deflection 12% start). Cần bổ sung Staunch Deflection vào liệt kê (note: Staunch Deflection cấp Deflection Rating, không phải faster start ES — khác họ với Mending/Energising).
- **Action: update-stats**. Thêm Staunch Deflection vào danh sách notable + clarify nó là "deflection-from-evasion" notable, không phải ES recovery notable. Add Version History 0.5.3.

**guides/armour-defensive-scaling.md** — STRENGTHENED + UPDATE, HIGH

- Doc L55, L128 mô tả công thức Deflect 0.5 + Evasion stacker scaling tuyến tính. Cần thêm Staunch Deflection như một node deflection-from-evasion bổ sung — và emphasize 8% là baseline mới (Wild Cat đã 12%, Staunch Deflection 8% là một option cùng họ).
- **Action: update-stats**. Section "Deflection Rating" hoặc tương đương — thêm Staunch Deflection. Add Version History 0.5.3.

**guides/beginner-defence-layers.md** — UPDATE, MEDIUM

- Doc L39 mô tả nguyên tắc deflection-from-evasion node gần Dex. Cập nhật để liệt Staunch Deflection và Wild Cat là hai node tiêu biểu.
- **Action: update-stats nhẹ**. Một câu thêm Staunch Deflection.

### STRENGTHENED — Runes of Aldur farming cluster

**farming/0-5-grand-expedition-farming.md** — STRENGTHENED, HIGH

- Patch L20-L23 chạm thẳng tâm doc: Remnant count scale theo Waystone Tier (T15+ peak), Grand Expedition chest rework hoàn toàn (bỏ basic weapon/armour, thêm currency/unique/waystone + mystery/trinket high-rarity), Explosive cap 20→15.
- Doc L18 mô tả "guarantee ≥1 Grand Expedition per revealed section" (0.5.2) — vẫn đúng. Doc L80-L91 quote saga giá poe2scout 2026-06-14 — số saga price không đổi nhưng **chest content rework đảo "Loot Breakdown"** hoàn toàn.
- **Action: re-verify-via-farming-researcher**. Rewrite section:
  - "Strategy Overview" — note chest rework + Remnant scale tier
  - "Loot Breakdown" — toàn bộ cần re-derive với chest mới (mystery/trinket high-rarity là nguồn lớn mới)
  - "Setup" — Explosive 20→15 thay đổi decision-making
  - Doc L24 thêm bullet Styrn always drops Logbook
  - Re-fetch giá poe2scout 2026-06-19 cho saga + Lineage Support
  - Bump patch 0.5.2→0.5.3 + version history entry

**farming/0-5-remnant-runeforging-profit-loop.md** — STRENGTHENED, HIGH

- Patch L25 Runic Modifier reward x2+ chạm thẳng "EV/high-slot remnant" math chain L64. Đường cong slot-to-reward dốc hơn 2× sau patch — math expected value cần re-tune.
- Patch L26 Transcendent Alloy quay lại Foci/Wand — đảo 0.5.2 removal. Doc L57 quote Transcendent 209 ex ~1.6 div (2026-06-10) sẽ stale: demand-side mở rộng → giá có thể nhảy lên.
- Patch L20 T15+ Remnant scale — doc L36 "đường cong slot-to-reward dốc" càng đúng hơn.
- **Action: re-verify-via-farming-researcher**. Update:
  - "Tầng Alloy/Rune" giá poe2scout 2026-06-19 (Transcendent đặc biệt)
  - "EV/high-slot remnant" math chain với Runic Modifier x2
  - Note T15+ peak (Remnant scale tier) trong section "Đẩy số slot"
  - Add Version History 0.5.3 entry
  - Reaffirm "Patch nerf risk" L89 — patch này lại là BUFF, không phải nerf — flip framing trong failure modes

**guides/0-5-ocean-exploring.md** — STRENGTHENED, HIGH

- Patch L24 Styrn always drops Expedition Logbook. Patch L20 Remnant scale tier. Patch L22 chest rework.
- Doc L38 mô tả "đảo Grand Expedition — bản phóng to" + "chứa cả các loại Remnant đặc biệt" — vẫn đúng nhưng cần update để phản ánh chest content mới + Styrn drop.
- Doc L89 mô tả "ghé đảo Grand Expedition trước để gom artifact, Verisium, tablet và logbook tiếp theo" — vẫn đúng nhưng content reward thay đổi.
- **Action: update-stats**. Update:
  - Section "Ocean Exploring hoạt động thế nào" thêm chest rework + Remnant scale tier
  - Section "Vòng quay đại dương" (~L89) note Styrn always drop Logbook
  - Bump patch 0.5.2→0.5.3 + version history entry

**guides/return-of-the-ancients.md** — UPDATE, HIGH

- Doc L32 đã ghi "guarantee ≥1 Grand Expedition" (0.5.2). Patch 0.5.3 thêm: chest rework (L22), Remnant T15+ scale (L20), Explosive 20→15 (L23), Styrn Logbook (L24), Runic Modifier x2 (L25), Transcendent Alloy on Foci/Wand (L26), Runeforging defence loss giảm 20% (L27).
- Doc L60 ghi An Audience with the King tradeable + Queen's Ritual +10 omens (0.5.2). Patch 0.5.3 thêm Offerings to the Queen rework (L87) + Royal Prerogative net positive Restricted Room (L88).
- Doc L64 ghi Abyss cracks lớn + Kulemak's Invitation. Patch 0.5.3 thêm Vessel of Kulemak drop Ancient Bone (L71), Tasgul/Vandroth always Desecrated (L72-L73), final Trove Desecrated (L74), Close to the Surface buff (L76).
- Doc L96 ghi Forgotten Warden Stoat Idol fix (0.5.2). Patch 0.5.3 thêm Sorcery Ward fix (L122) + The Unborn Lich rework (L81).
- Doc L107 changelog hotfix — thêm 0.5.3 hotfixes (Trade Market crash, Simulacrum blocking, City biome spawn, .build files Meta/Charm, Stat Filters Market, price check crash, instance crash).
- **Action: update-stats** lớn. Add Version History 0.5.3 entry liệt mọi mục trên. Doc đứng vai trò "overview league" nên cần đầy đủ.

**guides/0-5-currency-making-mindset.md** — UPDATE, MEDIUM

- Doc L36 mô tả vai Refiner qua Remnant Runeforging. Patch L25 Runic Modifier reward x2 = supply tăng → cần soft note trong "Phase của league đổi luật" rằng supply Alloy/Rune giai đoạn này được buff → margin Refiner có thể đổi.
- Patch L26 Transcendent Alloy quay lại Foci/Wand = demand-side expand cho một specific Alloy — ví dụ cụ thể về "luật đổi theo patch".
- **Action: update-stats nhẹ**. Một câu trong section "Phase của league đổi luật" hoặc "Currency được tạo rồi bị huỷ" nhắc patch 0.5.3 vd cụ thể supply-demand shift.

### WEAKENED + REWORKED — Delirium cluster (notable rework)

**farming/0-5-delirium-boss-rush-farm.md** — WEAKENED + REWORKED, HIGH

- Patch L40-L43 rework "You can't just wake up from this one." Notable: thêm multichoice (Escalating Threats / Apex Predators / Pure Emotions) — Simulacrums spawn Shards giữa wave. Patch L44 rework "Are you sure you want to do that?" Notable: bỏ "double effect" Grand Mirror lottery, thay bằng auto Delirium Mirror.
- Doc L32 mô tả "Delirium subtree lấy hết, không thương lượng" — vẫn đúng, nhưng selection trong multichoice phải pick (Escalating Threats là natural cho farm-revenue).
- Patch L46 fog scaling halved + 3-tablet baseline = giá trị cũ → doc chạy đúng 3 tablet, nên fog scaling fit. Nhưng farm chỉ proc fog ở CUỐI map (alch-and-go, bật mirror ở checkpoint cuối) — fog dù scale ít hay nhiều, doc vẫn lấy reward ở mốc spawn end-of-fog, nên impact gameplay nhỏ.
- Patch L38 Simulacrum Maps no longer spawn immediately khi spread fog → doc không chạy Simulacrum, không ảnh hưởng.
- Patch L49 Summoning Circle pause Delirium Fog → doc không nhắc Summoning Circle, không trực tiếp đụng.
- **Action: update-stats + multichoice pick**. Update:
  - "Atlas Passive Tree" L32 thêm multichoice pick cho "You can't just wake up from this one." (recommend Escalating Threats — thêm modifier reward)
  - Re-evaluate "Are you sure you want to do that?" — chuyển từ "double effect" sang "auto Delirium Mirror" cộng multi-select shard
  - Add Version History 0.5.3 entry

**farming/0-5-delirium-breach-density-farm.md** — WEAKENED + REWORKED, HIGH

- Same Delirium notable rework. Doc L46 cite "You can't just wake up from this one." cho fog tan chậm — node giờ rework thêm multichoice Simulacrum shards.
- **HIGH-IMPACT BUG FIX**: Patch L105 fix City Biome Tablet Effect Atlas Passive Skill NON-FUNCTIONAL → doc L48 cite "Industrial Improvements mở slot tablet thứ tư trên City"; doc L46 cite "City Biome: Tablet Effect" trong [breach-rare-juice-farm](/farming/0-5-breach-rare-juice-farm) L154 sister doc → trước đây node không hoạt động, math chain doc giả định 24% (3 rank × 8%) là **kế hoạch chưa áp dụng**. Giờ áp đúng → throughput tăng đáng kể retroactive cho doc breach.
- Patch L57 Breach Stronghold size buff = same as Ziggurat-near. Doc không chạy Breach Stronghold (chạy 200% delirium fog trên City map), không trực tiếp đụng.
- Patch L62-L67 Ailith skill mới (Dreamer's Sight rarity zone, Otherworldly Nemesis +rare pack, Xesht's Fervour) chỉ trong Breach Hive — doc không chạy Hive (subtree L42 cite "Breach Hive node bỏ hẳn vì strat này không chạy hive"), không trực tiếp đụng.
- Patch L67 Ailith skill spawn 2 packs Magic giữa wave → áp Hive, không áp doc.
- **Action: update-stats + multichoice pick**. Update:
  - "Atlas tree" — multichoice pick cho "You can't just wake up from this one."
  - "Atlas key nodes" thêm note City Biome: Tablet Effect bug fix → throughput retroactive tăng (nếu doc đã allocate node này)
  - Failure modes update — bỏ phần "City Biome Tablet Effect chưa biết có work không"
  - Add Version History 0.5.3 entry

**farming/0-5-withered-willow-delirium-farm.md** — WEAKENED + REWORKED + CONFIRMED-FIX, HIGH

- Patch L37 Simulacrum start 100% Delirious (cũ 0% bug). Doc L56 mô tả "Splinter gom đủ 300 thì đóng thành Simulacrum và tự chạy — chênh lệch đóng gói +9,5% cộng loot 7 wave cộng key Raven's Reflection".
- **2× difficulty wave 1 → wave 7 giờ ở 200% (cũ chỉ 100%) — reward dày hơn nhưng floor build cao hơn 2×**. Doc L50 mô tả "Companion build của mình chạy ổn ở 100% nhưng wave 6-7 Simulacrum còn chậm" → giờ wave 1 đã ở 100%, wave 7 ở 200% — build companion **không chạy nổi** Simulacrum kiểu cũ.
- Patch L40-L43 notable rework cluster chạm Delirium subtree.
- Patch L38 Simulacrum spawn timing (chờ 100% fog rồi mới spawn) — không đụng doc vì doc chạy Simulacrum thủ công.
- **Action: re-verify-via-farming-researcher**. Update:
  - "Sàn build" L50 — Simulacrum giờ start 100%, build floor cao gấp 2×
  - "Loop chính" L56 — tự chạy Simulacrum giờ là content khó hơn (wave 1 = wave 4 cũ ở mức difficulty)
  - "Loot Breakdown" — reward Simulacrum dày hơn nhưng floor cao hơn → tier có thể vẫn A nhưng entry cao hơn
  - Notable selection (multichoice mới)
  - Re-fetch giá splinter/Simulacrum poe2scout 2026-06-19
  - Add Version History 0.5.3 entry

**guides/0-5-delirium-trial-of-madness.md** — WEAKENED + REWORKED, HIGH

- Doc L54, L83 mô tả "You can't just wake up from this one." như notable đầu tiên nên lấy. Patch L40-L43 rework + multichoice — wording doc cần update.
- Patch L46 fog scaling halved + tablet scale lại (3 tablet = giá trị cũ). Doc L93 cite tablet mod "of the Unending — Delirium Fog in Map dissipates 20-30% slower" — không đổi. Doc L104 cite "of Madness — Delirium in Map increases 15-30% faster with distance" — không đổi.
- Patch L37 Simulacrum start 100% — doc cần note trong "Bậc Trial of Madness" L136 hoặc tương đương.
- Patch L38 Simulacrum spawn timing (chờ 100% fog) — đảo cơ chế Trial of Madness mà doc L40 mô tả "sương lan từ một map mình chọn trên atlas, phủ luôn một Simulacrum đang khóa" — vẫn đúng nhưng timing thay đổi (Simulacrum spawn ở 100% chứ không spawn ngay).
- Patch L39 fog Mirror Shards UI — visual only, doc có thể note.
- Patch L40-L43 "You can't just wake up from this one." multichoice — doc L83 mô tả allocate order cần update.
- Patch L44 "Are you sure you want to do that?" rework — doc L136 cite notable này — wording đổi.
- Patch L45 "You thought you were free?" rephrase — doc L136 cite — same outcome wording đổi.
- **Action: re-verify-via-mechanic-researcher**. Rewrite:
  - "Cụm Delirium subtree" thêm multichoice options
  - "Cơ chế Trial of Madness" L40 — Simulacrum spawn timing
  - "Goal ladder" L133-L136 — allocate order với multichoice
  - Add Version History 0.5.3 entry

**guides/0-5-atlas-passive-tree.md** — WEAKENED + REWORKED, HIGH

- Doc L89 mô tả Delirium 16 node với "You can't just wake up from this one. cho fog tan chậm 30%" — wording cần update với multichoice.
- Doc L93 mô tả Fate of the Vaal + Atziri's Temple. Patch L87 rework Offerings to the Queen + L88 reduce Restricted Room frequency + Royal Prerogative net positive — doc cần thêm.
- Doc L45 nhắc Apex Predators (Forest cluster cũ). Patch L42 thêm option "Apex Predators" cho multichoice trong "You can't just wake up from this one." Notable — **collision tên**: hai node tên giống nhau nhưng khác subtree (Forest vs Delirium). Verify naming.
- **Action: re-verify-via-mechanic-researcher (lite)**. Thêm:
  - Multichoice "You can't just wake up from this one." rework
  - "Are you sure you want to do that?" rework
  - Temple Offerings rework + Royal Prerogative net positive
  - Note name collision Apex Predators (Forest vs Delirium multichoice)
  - Add Version History 0.5.3

### STRENGTHENED + UPDATE — Abyss/Breach cluster

**farming/0-5-abyss-ulaman-amanamu-farm.md** — STRENGTHENED + UPDATE, HIGH

- Patch L71-L77 chạm thẳng Abyss content + giảm thưởng RNG:
  - L71 Vessel of Kulemak rớt Ancient Jawbone/Rib/Collarbone (currency desecrate)
  - L72 Tasgul always drop Desecrated Currency
  - L73 Vandroth always drop Desecrated Currency
  - L74 Final Large Abyssal Trove always drop Desecrated Currency
  - L76 Close to the Surface buff (25% Abyssal mod / 25% Lichborn / 4% pack size)
  - L77 13 new Abyssal Wasting mod cho Grip of Kulemak
  - L82 Grip of Kulemak Desecrated mod consolidation (existing items dùng Divine để update)
- Doc L96 nerf 0.5.1 Amanamu's Void uptime 90%→50% — không bị đụng. Doc L133 "rủi ro nerf tiếp" — buff retroactive thay vào.
- **Action: update-stats + re-verify-via-farming-researcher**. Update:
  - "Drop table" — thêm Vessel của Kulemak / Tasgul / Vandroth / final Trove guaranteed Desecrated
  - "Atlas tree" — Close to the Surface buff (Abyssal mod chance + Lichborn mod chance + pack size)
  - "EV math chain" — guaranteed Desecrated từ Tasgul/Vandroth/final Trove là sàn currency đều
  - Re-fetch giá poe2scout 2026-06-19 cho Desecrated Currency
  - Add Version History 0.5.3 entry

**farming/0-5-abyss-monster-rarity-fracture-farm.md** — STRENGTHENED + UPDATE, HIGH

- Same Abyss buffs. Doc L68 mô tả Abyssal Trove drop — cần update với guaranteed Desecrated từ 3 nguồn mới.
- Patch L77 thêm 13 Abyssal Wasting mod cho Grip of Kulemak — doc nếu cite Grip of Kulemak craft thì cần thêm.
- **Action: update-stats**. Update drop table + Atlas tree section. Add Version History.

**farming/0-5-breach-rare-juice-farm.md** — STRENGTHENED + UPDATE, HIGH

- **HIGH-IMPACT BUG FIX**: Patch L105 fix City Biome Tablet Effect non-functional → doc L154 verify verbatim "City Biome: Tablet Effect: 8% increased Effect of Tablet Explicit Modifiers on your City Maps (3 rank = 24%)" — node trước **không hoạt động** → giờ áp đúng → throughput strat retroactive tăng đáng kể.
- Patch L57 Breach Stronghold size buff (= Ziggurat-near). Doc L154 cite "Industrial Improvements" + tower suffix — không liên quan Stronghold size trực tiếp.
- Patch L62-L67 Ailith skill mới — chỉ trong Hive, doc chạy breach trên City map, không đụng Hive.
- Patch L59-L61 nerf Tear Open the Rift mod (Ailith damage không roll, Wombgift-type-chance không roll). Doc không nhắc Tear Open the Rift, không đụng.
- Patch L62-L67 4 mod mới cho Tear Open the Rift — doc không nhắc, không đụng.
- Doc L154 đã verify Partial Translations verbatim "20% chance double effect" (0.5.1 mốc) — đã được 0.5.2 đổi sang continuous 0-40% (0.5.2 impact log đã ghi). 0.5.3 không đụng tiếp.
- **Action: update-stats**. Update:
  - "Atlas key nodes" L46 / L154 — City Biome: Tablet Effect bug fix → throughput retroactive
  - "Failure modes" — bỏ rủi ro "City Biome chưa rõ work"
  - Re-fetch giá poe2scout 2026-06-19
  - Add Version History 0.5.3

**guides/0-5-breach-genesis-tree.md** — UPDATE, HIGH

- Patch L57 Breach Stronghold size buff.
- Patch L58 Breach Fruit Wombgift Ctrl+Click QoL.
- Patch L59-L61 Tear Open the Rift nerf 2 mod.
- Patch L62-L66 Ailith skill mới (Dreamer's Sight rarity zone, Otherworldly Nemesis +rare pack, Xesht's Fervour Effectiveness).
- Patch L67 Ailith spawn 2 packs Magic giữa wave (replace earlier "small amount").
- Doc L94 cite Tear Open the Rift multichoice + Hive node. Doc L91 cite "Provoke the Swarm" + Ailith skill.
- **Action: update-stats**. Update:
  - "Trục Hive và Ailith" L85+ — thêm 4 Ailith skill mới
  - "Tear Open the Rift" L94 — nerf 2 mod cũ + 4 mod mới
  - "Breach Stronghold" — size buff
  - QoL Wombgift Ctrl+Click
  - Add Version History 0.5.3

### UPDATE — minor / cross-ref

**crafting/0-5-plus4-minion-amulet.md** — UPDATE, MEDIUM

- Patch L78 'of Amanamu' Staff Suffix block 12-16→20-25% (staff-specific). Patch L79 'of Kurgal' Staff Suffix Puppetmaster (staff-specific). Patch L80 'Amanamu's' Staff Prefix +40-50% extra chaos (staff-specific).
- Doc L111 cite of Amanamu/Kurgal/Ulaman amulet suffix — **không phải staff version** đang change.
- **Action: update-stats nhẹ**. Add Version History 0.5.3 note: "0.5.3 patch 3 mod Abyss staff (of Amanamu block, of Kurgal Puppetmaster, Amanamu's extra chaos); amulet pool không đổi — doc giữ nguyên".

**guides/spirit-and-spirit-reservation.md** — UPDATE, HIGH

- Doc L67-L71 list of Amanamu suffix + Amanamu's prefix flat spirit trên staff. Patch L80 thêm "Amanamu's" Staff Prefix +40-50% extra chaos — **tên collision**: 2 "Amanamu's" Staff Prefix giờ tồn tại song song (spirit flat vs extra chaos). Doc cần phân biệt.
- Doc L86 cite The Unborn Lich roll desecrated pool res eff — vẫn đúng (desecrated mod pool không đổi). Patch L81 đổi skill granted (His Grave Command no Spirit cost + quality +Minion Life) — không đổi mod pool desecrated của staff.
- **Action: update-stats**. Update:
  - L67-L71 — clarify "Amanamu's" Staff Prefix có 2 phiên bản (spirit flat vs extra chaos mới 0.5.3)
  - L86 cite The Unborn Lich — note Patch 0.5.3 đổi His Grave Command cost cấu trúc (không đụng desecrated pool, nhưng skill granted change đáng nhắc)
  - Add Version History 0.5.3

**builds/witch/0-5-spectre-summoner-lich.md** — UPDATE, MEDIUM

- Doc L132 cite The Raven's Flock vs Chober Chaber tradeoff cho Lich. Patch L120 fix Raven's Flock Spiralling Conspiracy damage refresh bug — applies cho người dùng skill granted của staff, nhưng Lich không cast Spiralling Conspiracy (build chính cast Spark qua spectre Powered Zealot).
- **Action: update-stats nhẹ**. Doc note 0.5.3 fix Raven's Flock Spiralling Conspiracy không trực tiếp ảnh hưởng spectre legion, nhưng tổng quan staff retroactive được fix. Add Version History.

**farming/0-5-ritual-belt-hunting.md** — UPDATE, MEDIUM

- Patch L33 Followers of the King in the Mists in Crux of Nothingness maze. Doc L91 cite Head of the King drop từ The King in the Mists. Patch không trực tiếp đụng drop King in the Mists, nhưng thêm follower trong maze có thể tăng risk (maze giờ có enemy).
- Patch L49 Summoning Circle pause Delirium Fog — doc L73 nhắc "ritual ở Summoning Circle" — không liên quan fog vì doc không chạy fog.
- **Action: update-stats nhẹ**. Add Version History 0.5.3.

**farming/0-5-fragment-supply-farm.md** — STRENGTHENED + UPDATE, MEDIUM

- Patch L33 thêm Followers of the King in Crux maze → tăng density boss; nếu Followers drop Head of the King (verify trong patch hoặc test) → cung Head tăng → giá rớt.
- **Action: re-verify-via-farming-researcher (lite)**. Test in-client Followers drop table. Update cost-model nếu Head supply tăng.

**farming/0-5-tablet-supply-farm.md** — UPDATE, LOW

- Doc L105 Head of the King 167 ex (~1.2 div) qua Crux of Nothingness — patch L33 có thể đổi supply.
- **Action: update-stats nhẹ**. Re-fetch giá Head poe2scout 2026-06-19 nếu nghi giá đổi.

**guides/0-5-new-unique-items.md** — UPDATE, MEDIUM

- Doc cite các unique 0.5. Patch L81 The Unborn Lich His Grave Command rework (no Spirit cost + quality +Minion Life) — doc nếu cite The Unborn Lich cần thêm.
- Patch L120 Raven's Flock Spiralling Conspiracy refresh fix — minor.
- **Action: update-stats**. Add The Unborn Lich change. Add Version History 0.5.3.

## High-priority retire candidates

KHÔNG có doc nào tag BROKEN trong 0.5.3. Đây là patch incremental, không removal/
disable entity nào của doc đang chạy. KHÔNG retire bất kỳ doc nào.

Đáng chú ý: **0.5.2 đã đổi Partial Translations từ binary 2× lottery → continuous
0-40%**, một số doc farming (breach-rare-juice, abyss-ulaman, grand-expedition)
đã update bài đó. 0.5.3 KHÔNG đụng tiếp Partial Translations.

## New opportunity hints (research mới khả thi từ entity 0.5.3)

- **The Unborn Lich Dinomancer Lich Elephant** — Patch L81 bỏ Spirit cost của His
  Grave Command. Trước đây Grave Command là Spirit Reservation kiểu Tame Beast,
  ép build chạy reservation efficiency rất nặng để cài thêm minion khác cùng pool;
  giờ free cost → có thể stack thêm spectre/companion với Grave Command on top.
  Quality 0-20% giờ là +Minion Life (cũ Reservation Efficiency) → quality minion-
  life mod-pool catalyst (Necrotic Catalyst từ 0.5.2) áp đúng vào staff này.
  Hướng alt-research **Dinomancer Lich Elephant** (Lich + Elephant companion +
  His Grave Command) được mở khóa. → **build-researcher** viết doc mới
  `content/builds/witch/lich-elephant-his-grave-command.md` (hoặc tương đương).

- **Staunch Deflection node** — node mới deflection-from-evasion. Cùng họ với
  Wild Cat (12% Eva→Defl) và small passive (8% Eva→Defl 0.5.0). Áp dụng cho mọi
  evasion stacker. → **mechanic-researcher (lite)** bổ sung vào
  energy-shield-recovery + armour-defensive-scaling + beginner-defence-layers.

- **Abyss staff mods mới (of Amanamu block 20-25%, of Kurgal Puppetmaster, Amanamu's
  extra chaos)** — chạm thẳng caster/minion staff build có Block. Build dùng staff
  với block (Lich, Witch caster) có cú nâng đơn lớn. → **build-researcher**
  (re-tune Lich + Witch caster staff slot khi gặp).

- **Vessel of Kulemak Ancient Bone drops** — Vessel giờ rớt Jawbone/Rib/Collarbone
  (currency desecrate) — nguồn supply Ancient Bone từ Vessel encounter (trước đây
  Ancient Bone từ Abyssal Trove). Mở reward layer mới cho người farm Vessel
  exclusive. → **farming-researcher** (variant cho abyss-ulaman doc, hoặc Vessel-
  Boss farm doc riêng).

- **Tasgul / Vandroth always drop Desecrated Currency** — supply Desecrated mod tăng
  đáng kể. Hai boss này đã có vai trò, giờ guarantee Desecrated → giá Desecrated
  có thể rớt khi supply ổn định. → **economy-scan** track giá Desecrated post-0.5.3.

- **Ailith skill mới (Dreamer's Sight rarity zone / Otherworldly Nemesis +rare pack /
  Xesht's Fervour Effectiveness)** — Breach Hive juice mới. Người chạy Breach
  Hive farm có 3 skill mới để pick. → **farming-researcher** viết farming doc cho
  Breach Hive farm (nếu chưa có), hoặc bổ sung vào breach-genesis-tree.

- **Crux of Nothingness Followers of the King** — entity boss mới trong maze. Có
  thể có drop table mới. → **mechanic-researcher** test in-client drop.

- **Build Planner "link" field** — pob.sh / pobb.in / build planner export có thể
  embed link button. → site tech: tooling update (không phải content).

## Source confidence summary

- **Patch notes verbatim (GGG official)**: mọi NEW/BUFF/NERF/REWORKED/REMOVED
  claim trích dòng cụ thể `data/release-notes/Version_0.5.3.md` → HIGH cho fact
  "entity X changed".
- **Doc dependency (file:line)**: rg cross-cut + đọc line range của 12 doc nhạy
  cảm nhất (build pack, character snapshot, twister, pathfinder, ritualist,
  energy-shield-recovery, armour-defensive-scaling, delirium-boss-rush,
  delirium-breach-density, withered-willow, delirium-trial-of-madness,
  atlas-passive-tree, breach-genesis-tree, abyss-ulaman, abyss-monster-rarity,
  breach-rare-juice, grand-expedition, remnant-runeforging, ocean-exploring,
  return-of-the-ancients, currency-mindset, spectre-summoner-lich,
  spirit-and-spirit-reservation, plus4-minion-amulet, new-unique-items). HIGH
  cho "doc Y phụ thuộc entity X".
- **Impact judgment**:
  - HIGH cho STRENGTHENED khi number change rõ (Runic Modifier reward x2, Remnant
    scale T15+, Grand Expedition chest rework, Simulacrum 0%→100% start, City
    Biome Tablet Effect non-functional fix).
  - HIGH cho REWORKED khi notable functional behavior thay đổi (You can't just
    wake up multichoice, Are you sure you want to do that, Offerings to the Queen).
  - HIGH cho The Unborn Lich change: explicit verbatim patch L81 + cơ chế
    Reservation→no-cost rất rõ.
  - MEDIUM cho Staunch Deflection áp Spirit Walker build: 8% × Evasion = math
    chính xác, nhưng tree-path verification cần in-client (HIGH dấu khi confirm).
  - MEDIUM cho UPDATE khi mention entity nhưng entity-side change không chạm layer
    doc dùng (e.g. Amanamu's Staff Prefix collision với amulet pool — doc dùng
    amulet pool, staff pool không đụng).
  - LOW cho UNTOUCHED-edge.
- **KHÔNG single-source**: impact = patch verbatim + doc dependency citation.
  Phần "build path đi qua Staunch Deflection" cần verify in-client, hiện ở MEDIUM
  cho character snapshot (chưa fetch tree image post-patch).
- **Hotfix layer**: 3 hotfix (3968863/3968961/3969089) cùng ngày — fix crash Trade
  Market, Simulacrum blocking, City biome spawn, .build files Meta/Charm, Stat
  Filters Market, price check crash. Không phải content change → không impact
  doc content. Header doc release notes đã ghi.

## Action gate

User explicit approve per cluster trước khi spawn downstream agent hoặc Edit:

**Build/character docs cluster (5 doc affected by Staunch Deflection)**:
- builds/huntress/0-5-spirit-walker-companion-pack.md
- characters/thao-cam-vien-sai-gon.md
- builds/huntress/0-5-spirit-walker-twister.md
- builds/ranger/0-5-pathfinder-herald-of-ice-bow.md
- builds/huntress/0-5-ritualist-rarity-cull-bot.md
- Trigger build-researcher re-verify cluster? (verify tree-path of Staunch Deflection per build)

**Defense guide cluster (3 doc affected by Staunch Deflection mechanic)**:
- guides/energy-shield-recovery.md
- guides/armour-defensive-scaling.md
- guides/beginner-defence-layers.md
- Update-stats direct (write Edit thay user) hay trigger mechanic-researcher?

**Runes of Aldur farming cluster (4 doc affected by Grand Expedition + Remnant + Runic Modifier)**:
- farming/0-5-grand-expedition-farming.md (REWRITE heavy)
- farming/0-5-remnant-runeforging-profit-loop.md
- guides/0-5-ocean-exploring.md
- guides/return-of-the-ancients.md
- Trigger farming-researcher re-verify cluster?

**Delirium cluster (5 doc affected by notable rework + Simulacrum 100% start)**:
- farming/0-5-delirium-boss-rush-farm.md
- farming/0-5-delirium-breach-density-farm.md
- farming/0-5-withered-willow-delirium-farm.md (re-tune Simulacrum loot)
- guides/0-5-delirium-trial-of-madness.md
- guides/0-5-atlas-passive-tree.md
- Trigger mechanic-researcher cho Trial of Madness + Atlas tree, farming-researcher cho 3 farming docs?

**Abyss/Breach cluster (4 doc affected by drop guarantees + Ailith + City Biome bug fix)**:
- farming/0-5-abyss-ulaman-amanamu-farm.md
- farming/0-5-abyss-monster-rarity-fracture-farm.md
- farming/0-5-breach-rare-juice-farm.md
- guides/0-5-breach-genesis-tree.md
- Trigger farming-researcher cluster?

**Minor/cross-ref docs (7 doc light updates)**:
- crafting/0-5-plus4-minion-amulet.md (clarify staff vs amulet pool)
- guides/spirit-and-spirit-reservation.md (Amanamu's Prefix collision + Unborn Lich)
- builds/witch/0-5-spectre-summoner-lich.md (Raven's Flock fix)
- farming/0-5-ritual-belt-hunting.md (Crux Followers)
- farming/0-5-fragment-supply-farm.md (Crux Followers Head drop)
- farming/0-5-tablet-supply-farm.md (Head price)
- guides/0-5-new-unique-items.md (Unborn Lich + Raven's Flock)
- guides/0-5-currency-making-mindset.md (Runic Modifier supply note)
- Update-stats direct per file?

**New build research opportunity**:
- Dinomancer Lich Elephant (His Grave Command no Spirit cost) — viết build mới `content/builds/witch/lich-elephant-his-grave-command.md`?
- Trigger build-researcher? (independent research từ hypothesis)

Reply approval cho cluster mong muốn. Decline = giữ impact log, không spawn.
