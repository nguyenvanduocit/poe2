---
title: "Patch POE2 0.5.2 — Impact Analysis"
game: poe2
version: 0.5.2
release_date: 2026-06-12
patch_type: mid-league
created: 2026-06-12
updated: 2026-06-12
sources:
  - "data/release-notes/Version_0.5.2.md (GGG forum thread 3960375, fetched 2026-06-12)"
  - "data/release-notes/Version_0.5.1.md, Version_0.5.0.md (delta baseline)"
  - "content/ doc dependency scan (rg cross-cut, 2026-06-12)"
confidence: high
---

# Patch POE2 0.5.2 — Impact Analysis

## Patch context

0.5.2 là patch mid-league lớn nhất sau 0.5.1: 6 section đầy đủ (Endgame, Delirium,
Runes of Aldur, Monster, General, Bug Fixes) với hơn 80 dòng change. Hai trục lớn:
(a) **buff cung cấp**: Ocean Logbook nay guarantee ≥1 Grand Expedition per
revealed section, Remnant T14+ reward được "significantly improved" (3-slot
inscription bị bỏ dần khỏi tier cao, Runefather's + Runebinder's Alloy vào pool
8-slot); (b) **đợt nerf damage diện rộng** lên ~20 boss/monster encounter (Jamanra
−17% life, Veynar/Malgor/Serath slam damage giảm, Chaos Volatiles "significantly
reduced", Fury/Rage/Malice/Pure Fury Delirium damage giảm, It That Hates Breach
chaos beam cắt sâu kèm bỏ projectile range).

Hai change chạm thẳng character đang chơi (Tame Beast Companion Pack Spirit
Walker): Bear Spirit presence 4m→8m (buff), và bug fix Forgotten Warden +
Stoat Idol "deflected hit to Damageable Companion" giờ mới hoạt động đúng — defense
layer redirect của build mới thật sự online. Toàn bộ atlas/ritual cũng bị chạm:
Partial Translations redesign (20% double → random 0-40% increased — biến variance
quanh trục cũ nhưng mean tương đương), Mysterious Rites tooltip rewrite, On the
Wind multichoice keystone mới, Mortuary Map nay có limb replace như Atziri's
Temple. Transcendent Alloy bị gỡ khỏi Foci/Wand. An Audience with the King lên
được Currency Exchange — đảo cost-model của doc Fragment Supply/Boss Rush.

Patch incremental cấp 0.5.x nên scope ảnh hưởng content/ hẹp hơn 0.5.0 nhiều: hầu
hết doc đã `patch: 0.5.1`, body khớp 0.5.0+0.5.1, chỉ cần delta update cho 0.5.2
thay vì rewrite. Workspace POE2 KHÔNG còn mirror `content/en/`, mọi count dưới
đây là doc số nguyên (không double-count).

## Change summary (categorized, verbatim-cited)

Số dòng trỏ về `data/release-notes/Version_0.5.2.md`.

### NEW (entity mới — content cần verify khi gặp)

- **On the Wind Atlas Keystone (multichoice)** — *"Added a new On the Wind multichoice Keystone Atlas Passive, granting the option between Azmeri Spirits with 50% increased Movement Speed, or Azmeri Spirits no longer dematerialising when there are no players nearby"* (L18).
- **Necrotic Catalyst + Refined Necrotic Catalyst** — *"Added a new Necrotic Catalyst which adds quality that enhances Minion Modifiers on a Ring or Amulet. There is also a Refined Necrotic Catalyst, both of which are available through the Genesis Tree"* (L24).
- **Quick-action controller menu** — *"Added a quick-action menu to the Endgame Map when playing with a controller"* (L25). QoL, không ảnh hưởng content.

### BUFF (cung cấp, gear, encounter, build)

- **Ocean Logbook Grand Expedition guarantee** — *"Every section of the Ocean revealed by an Expedition Logbook is now guaranteed to contain at least one Grand Expedition"* (L40).
- **Remnant T14+ reward significantly improved** — *"Significantly improved the rewards from Remnant Encounters Tier 14 Maps and above. Many of the 3 slot runic inscriptions no longer appear at these levels, or have a reduced chance to appear from Tier 10 Maps onwards"* (L36).
- **Runefather's / Runebinder's Alloy vào pool 8-slot** — *"Runefather's Alloy and Runebinder's Alloy are now found as 8 slot runic inscription rewards in Remnant Encounters"* (L37).
- **Queen's Ritual +10 Omens** — *"Queen's Rituals from the Mysterious Rites Atlas Passive now have 10 additional Omens in the first set of Favours"* (L22).
- **Mortuary Map limb replace** — *"Mortuary Map, which is only available through the Unexpected Missions Jado Atlas Master option now allows you to replace a Limb (the same as in Atziri's Temple) at the end of the Map Boss Fight"* (L20).
- **Runemastered Ornate Ringmail basetype** — Armour 210→**725**, ES 60→**206**, Ward 112→**130** (L41). Buff lớn 3-4x defence per slot cho body armour basetype.
- **Runemastered Venerable Defender ES basetype** — 56→**135** (+141%) (L42).
- **Spirit Walker Bear Spirit presence** — *"The Spirit Walker's Bear Spirit companion now has a base presence radius of 8 metres (previously 4 metres)"* (L79). Diện tích ×4 (área = πr² → 16π vs 64π).
- **Zarokh's Gift Passive** — Jewel Socket → **Sinister Jewel Socket** (L81).
- **Ice Storm / Lightning Storm Notable** — thay clause non-functional "Unaffected by Chilled/Shocked Ground" bằng *"15% reduced Effect of Chill/Shock on you, and 15% increased Magnitude of Chill/Shock you inflict"* (L82, L83). Net buff (clause cũ không hoạt động).
- **Bitter Dead** — *"now has a base Critical Strike chance of 12%"* (L84). Kalguuran skill cũ chưa có base crit.
- **Recovery effects fix** — *"Effects that prevent players from recovering Life, Mana or Energy Shield ... no longer prevent recovery caused by core game systems (including but not limited to: checkpoints, healing wells, levelling up). This also means that changing areas while you have one of these effects can no longer cause you to lose Life, Mana or Energy Shield"* (L85). Áp dụng cho Vaal Pact, Cat O' Nine Tails, Indigon. Lich's Eternal Life KHÔNG được fix.

### REWORKED (đổi cơ chế, không thuần buff/nerf)

- **Partial Translations Jado Atlas Master** — *"Instead of granting 20% chance for double effect of Explicit Modifiers on Tablets, it now grants Randomly gain between 0 and 40% increased effect of Explicit Modifiers on Tablets"* (L19). Đổi từ binary lottery (1.0× / 2.0×) sang continuous (1.0×–1.4×) — variance giảm mạnh, mean giảm (E[old] = 0.2×1.0 + 0.8×0.0 ≈ +20% expected per modifier vs E[new] = +20%, gần như đồng giá trên trung bình NHƯNG tail jackpot 2× biến mất). Đây là thay đổi LỚN cho mọi farming strategy dựa vào Partial Translations proc.
- **Mysterious Rites tooltip** — *"now describes all of the other bonuses the Queen's Ritual previously had as well"* (L23). Bonus không đổi, mô tả mới đầy đủ.
- **Bond Rune (Remnant)** — *"It still causes Rare monsters in each wave to transfer Modifiers on Death, however it now spawns fewer Rare Monsters overall (especially when paired with a Power Rune) but the number of Modifiers the Rare Monsters can have goes up per wave"* (L38).
- **Prismatic Rune (Remnant)** — bỏ Always Shocks + giảm resistance grant, thêm "All Damage contributes to Flammability and Ignite Magnitude to Monsters", bỏ damage gained as random element trừ khi Empowered (L39).
- **An Audience with the King lên Currency Exchange** — *"Fixed an issue where the tradeable An Audience with the King was not available on the Currency Exchange"* (L137). Đảo cost-model: Audience trước là farm-only, giờ tradeable.

### NERF (boss + monster damage diện rộng)

- **Jamanra, the Abomination** — *"Lowered the life of Jamanra, the Abomination by roughly 17%"* (L56). Buff cho người farm Faded Crisis (Copper Citadel).
- **Siora, Blade of the Mists** — *"now has more wind-up time on her Cyclone and Chaos Strike Skills. Their Cyclone skill is now unblockable (red flash), while the Chaos Strike can now be blocked. The damage of their Lighting Strike skill, Cyclone skill, melee attacks and combos has been reduced, and a cooldown has also been added to their melee combo skill"* (L54).
- **Azmadi, the Faridun Prince** — *"dashes can no longer hit twice, and their dash skills have been adjusted so they aren't used on targets in melee range"* (L53).
- **Diamora + Syvora** — *"Boss fights now only have a single petrification phase"* (L55).
- **Veynar / Malgor / Serath** — slam + cannon barrage + flame geyser damage cắt (L57-L59).
- **Chaos Volatiles** — *"Significantly reduced the damage of Chaos Volatiles from Ritual Altar encounters and Monster Modifiers"* (L60). Buff cho Ritual farmer.
- **Delirium monsters Fury/Pure Fury/Rage/Malice** — damage cắt (L71-L73), "significantly" cho Rage và Malice.
- **It That Hates (Breach)** — *"Significantly reduced the damage on the Chaos Beam from the It That Hates Breach Monster. They also no longer fire chaos projectiles at range, and instead now uses a Melee combo if you are in a close proximity"* (L74). Đảo behavior + damage cut.
- **Tendril Sentinel + Cecaelian Ravager + Krell Skullcrawler + Starlit Harvester + Cultist Archer + Blackblooded Elite + Lightless Vengewing + Lightless Moray + Strider of the Pit** — damage cắt từng skill cụ thể (L61-L69). Loạt nerf "đỡ phòng thủ" diện rộng.
- **Delirium Scatter Storm modifier** — Electric Lightning Flail damage cắt (L70).
- **Sekhemas turrets** — *"Fireballs ... no longer create an invisible area of effect explosion"* (L75).

### REMOVED / DISABLED

- **Transcendent Alloy on Foci/Wand** — *"Transcendent Alloy can no longer be applied to Foci and Wands"* (L46). Caster crafting path bị bỏ.
- **Trade hideout direct trade** (0.5.1 Hotfix 9, prepended) — *"Players that travel to hideouts to purchase asynchronous trade items can no longer initiate trades directly with other players"* — meta-economic, chặn scam vector.

### CONFIRMED-BUG-FIX (sửa cơ chế đã tồn tại trong doc)

- **Forgotten Warden + Stoat Idol deflected hit redirect** — *"Fixed a bug where the Forgotten Wardens' percentage of Damage from Deflected Hits is taken from Damageable Companion's Life before you was not functioning correctly. This fixes the reported case where players using Forgotten Warden with a Stoat Idol socketed into it would die unexpectedly"* (L132). Chính defense layer redirect mà build companion pack mô tả.
- **Conductive Runes scaling fix** — *"Fixed a bug where Conductive Runes would deal no damage if you had certain two handed weapon types equipped"* + *"Conductive Runes' damage did not scale with modifiers to hazard damage"* (L106-L107).
- **Salvo / Charge-consume Support exclusivity** — fix lỗi support gem consume charges/armour break/ailments không mutually exclusive với nhau (L126), fix charge-consume support gem không cho phép modify charge consumption (L127). Áp lên Romira's Requital, Loyalty cluster trong build pack.
- **Devour không consume living players** + Liches no longer food (L89).
- **Verisium Anvil augment preview** — fix không preview effects khi Runeforging (L101).
- **Mist Ravens count as allies** — fix bug The Raven's Flock unique staff (L115).
- **Deliriousness on Rare/Unique kills in Fog Banks** — fix không add (L111).
- **Decree of Acuity Runic Ward fix** — fix không grant Runic Ward upon Runeforging (L120).
- **Runeseeker's Call + Aldur's Legacy** — fix không socket được (L124).
- **Briarpatch + Support that requires damage** — fix không support được (L125).
- **Minion Splash + một số minion** — fix không support được (L128).
- **Empowering / Everlasting Infusions notable** — fix small passives leading lên hai notable bị swap (L129).
- **Eyes of the Runefather Buckler bug** — fix tất cả version đều là Buckler thay vì chỉ bản Parry (L102).
- **Warcaller's Bellow corpse explode unlimited** — fix bug ascendancy Warbringer (L123).
- **Mighty Silverfist Book of Specialisation drop** — fix delay drop (L118).

## Affected docs matrix

Chỉ list doc bị ảnh hưởng (KHÔNG list UNTOUCHED). Tag: BROKEN / WEAKENED /
STRENGTHENED / RENAMED / CONFIRMED-FIX (bug fix khớp doc, doc giờ accurate).

| Doc (path) | Tag | Confidence | Reason (entity) |
|---|---|---|---|
| builds/huntress/0-5-spirit-walker-companion-pack.md | STRENGTHENED + CONFIRMED-FIX | HIGH | Bear Spirit presence 4m→8m; Forgotten Warden deflect-redirect fix |
| mechanics/spirit-walker-companion-beast-hunt.md | STRENGTHENED | HIGH | Bear Spirit presence 4m→8m |
| farming/0-5-ritual-belt-hunting.md | WEAKENED | HIGH | Partial Translations redesign (binary 2× lottery → continuous 0-40%); Mysterious Rites tooltip; Chaos Volatiles nerf |
| farming/0-5-breach-rare-juice-farm.md | WEAKENED | HIGH | Partial Translations redesign (mất 2× jackpot proc — toàn bộ math chain dựa vào 1.8-2.0× proc multiplier) |
| farming/0-5-abyss-ulaman-amanamu-farm.md | WEAKENED | MEDIUM | Partial Translations redesign (double-effect abyss tablet mất 2× tail) |
| farming/0-5-remnant-runeforging-profit-loop.md | STRENGTHENED + WEAKENED | HIGH | Remnant T14+ reward buff (3-slot bỏ dần); Runefather's/Runebinder's Alloy vào 8-slot pool; nhưng Transcendent Alloy mất Foci/Wand → giá Transcendent rớt |
| farming/0-5-grand-expedition-farming.md | STRENGTHENED | HIGH | Ocean Logbook guarantee ≥1 Grand Expedition/section; Partial Translations redesign tác động phụ |
| farming/0-5-withered-willow-delirium-farm.md | STRENGTHENED | HIGH | Delirium Fury/Pure Fury/Rage/Malice damage cut → encounter dễ ăn; Deliriousness on rare/unique kill fix; fog Toughness Unique halved + Normal/Magic/Rare damage halved (xem note phía dưới) |
| farming/0-5-boss-rush-fragment-farm.md | STRENGTHENED + REWORKED | HIGH | Jamanra −17% life (Faded Crisis dễ hơn); An Audience with the King lên Currency Exchange — đảo "không mua được" → đảo cost-model toàn doc |
| farming/0-5-fragment-supply-farm.md | REWORKED | HIGH | An Audience with the King giờ tradeable trên Currency Exchange — section "nguồn bỏ qua" + đoạn opportunity-cost ritual lỗi thời |
| guides/0-5-ocean-exploring.md | STRENGTHENED | HIGH | Ocean Logbook guarantee ≥1 Grand Expedition/section — cần version-history entry |
| guides/0-5-ritual-rite-of-the-nameless.md | REWORKED | MEDIUM | An Audience with the King tradeable; Mysterious Rites tooltip update; Queen's Ritual +10 omens |
| guides/0-5-delirium-trial-of-madness.md | STRENGTHENED | MEDIUM | Delirium fog encounter giảm độ khó (Fury/Pure Fury/Rage/Malice cut); Deliriousness fix |
| mechanics/atlas/0-5-atlas-passive-tree.md | WEAKENED + REWORKED | HIGH | Partial Translations redesign; On the Wind keystone mới (chưa có); Mysterious Rites tooltip rewrite; Mortuary Map limb replace; doc đang ghi "20% double effect" sẽ stale |
| mechanics/leagues/return-of-the-ancients.md | REWORKED | MEDIUM | Audience tradeable; Remnant T14+ reward buff; Runefather's/Runebinder's vào 8-slot; basetype Runemastered Ornate Ringmail + Venerable Defender buff |
| mechanics/items/sylvans-effigy.md | CONFIRMED-FIX | LOW | Wardbound Minions cost Runic Ward (đã đề cập) — không trực tiếp impact; xếp UNTOUCHED tunable |
| builds/monk/0-5-martial-artist-hollow-palm-leaguestarter.md | CONFIRMED-FIX | MEDIUM | Smash to Smithereens "no sockets" clarified (Facebreaker + Way of the Stonefist) — doc đang đề cập Stonefist ascendancy node, cần note "no sockets" |
| builds/monk/hollow-mask-acolyte-minion-hypothesis.md | UNTOUCHED-edge | LOW | Wildwood's Gifts không bị chạm trong 0.5.2; doc OK |
| builds/witch/0-5-spectre-summoner-lich.md | UNTOUCHED-edge | LOW | Raven's Flock mention không bị 0.5.2 chạm trực tiếp (chỉ Mist Ravens-as-allies fix) |
| builds/witch/0-5-infernalist-spectre-legion.md | UNTOUCHED-edge | LOW | Raven's Flock mention OK |
| builds/huntress/0-5-twister-ritualist-amazon.md | UNTOUCHED | LOW | Twister core không chạm; cần verify Salvo charge-consume support nếu dùng |
| builds/sorceress/index.md | UNTOUCHED-edge | LOW | Disciple of Varashta tên class card, không phải doc bị Djinn rage-FX fix chạm trực tiếp |
| mechanics/leagues/0-5-0-patch-notes.md | UNTOUCHED | HIGH | Self-reference patch notes |
| mechanics/0-5-new-unique-items.md | UNTOUCHED-edge | LOW | Decree of Acuity Runic Ward fix khớp doc nếu doc mô tả Runic Ward — verify |

## Action list per affected doc

### STRENGTHENED + CONFIRMED-FIX — ưu tiên cao (character đang chơi)

**builds/huntress/0-5-spirit-walker-companion-pack.md** — STRENGTHENED + CONFIRMED-FIX, HIGH

- Bear Spirit presence 4m→8m (patch L79) — diện tích áp Embrace of the Wild
  redirect 5% damage allies in presence to Bear tăng từ π·4²=50.3m² lên π·8²=
  201m², gấp **4×**. Doc L42 mô tả "Embrace of the Wild cho con Bear gánh 5%
  damage của allies quanh nó" — radius cũ 4m thường không phủ hết Zekoa/Wolf
  Pack khi spread; radius 8m phủ trọn full roster trong combat thực tế. Đây là
  buff redirect đáng kể cho stack defensive của build.
- Forgotten Warden + Stoat Idol deflect-redirect fix (patch L132) — doc đang
  mô tả layer redirect verbatim: "Forgotten Warden redirect thêm phần deflected
  hit vào máu đàn" (L42). Build pack KHÔNG socket Stoat Idol (socket hiện là Fox
  + Panther + Rabbit), nhưng cơ chế "deflected hit to Damageable Companion's
  Life before you" là cùng cơ chế Forgotten Warden mà patch fix — fix này có thể
  cũng áp đúng layer 10-15% redirect đang chạy trên build. **Test in-client sau
  patch**: log nếu redirect tỉ lệ thật cao hơn trước.
- **Action: update-stats + version-history entry**. Thêm `## Version History`
  hoặc bump trong Changelog (2026-06-12) ghi:
  (a) Bear Spirit radius 4m→8m, Embrace of the Wild redirect zone gấp 4×;
  (b) Forgotten Warden deflect bug fix — note in-client verify cần thiết;
  (c) Mist Ravens-as-allies fix (Raven's Flock) không ảnh hưởng vì không dùng;
  (d) Wardbound Minions vẫn là skill duy nhất đáng test trong Kalguuran catalog.
  Trigger re-verify-via-build-researcher chỉ khi muốn re-PoB defensive layer.

**mechanics/spirit-walker-companion-beast-hunt.md** — STRENGTHENED, HIGH

- Bear Spirit presence 4m→8m chạm thẳng phần "Wild Protector Bear grant" của
  doc. Doc đang mô tả Bear là tank miễn phí từ Lab 1 (`L84` của build pack ref)
  — radius gấp 4× nghĩa là defensive utility của Wild Protector mạnh hơn rõ rệt.
- **Action: update-stats**. Bump patch field 0.5.1→0.5.2, thêm note Bear
  presence 8m vào section bàn về Wild Protector / Embrace of the Wild.

### WEAKENED — Partial Translations redesign cluster

**farming/0-5-breach-rare-juice-farm.md** — WEAKENED, HIGH

- Toàn bộ math chain dựa vào Partial Translations 20% chance double effect
  (doc L18, L22, L30, L50, L98, L131, L139). Patch L19 đổi sang "Randomly gain
  between 0 and 40% increased effect" — biến binary lottery thành continuous,
  **xoá hoàn toàn tail jackpot 2×**. Doc claim "Partial Translations proc, một
  map đơn lẻ nhả ~10 div raw" (L22) và "khi 20% chance Partial Translations
  proc (tablet effect nhân đôi nhân vào rare count lẫn effectiveness)" (L98)
  KHÔNG còn đúng — không có proc nữa, mỗi map chỉ gain random 0-40% effect.
- Expected value math: cũ E[multiplier] = 0.2 × 2.0 + 0.8 × 1.0 = 1.20 (mean
  +20% effect per modifier). Mới E[multiplier] = 1 + uniform(0, 0.4)/2 = 1.20
  (mean +20% effect). **Mean tương đương nhưng variance giảm mạnh** —
  jackpot 10-12 div/map proc map mất, throughput dao động quanh giá trị trung
  bình thay vì spike. Per-hour ~15 div net (doc L100) vẫn approximately đúng
  mean nhưng phân bố thẳng hơn.
- **Action: re-verify-via-farming-researcher + update math chain**. Rewrite
  section "Atlas Master" + "Loot Breakdown" + "Failure Modes" với:
  (a) Mean +20% giữ nguyên, doc dropdown jackpot framing;
  (b) "Patch nerf risk: Partial Translations proc rate có thể bị giới hạn" trong
  failure modes giờ ĐÃ XẢY RA — update version-history;
  (c) Tính lại expected value và confirm net div/giờ.

**farming/0-5-ritual-belt-hunting.md** — WEAKENED, HIGH

- Doc L45: "Jado lấy node Partial Translations: 20% chance double effect mọi
  explicit modifier trên tablet đang cắm. Một phần năm số map ăn cú nhân đôi
  này áp lên cả tablet ritual (+3 reroll thành +6) lẫn tablet abyss" — claim
  này stale post-patch. Patch L19 redesign: random 0-40% increased effect, không
  có double proc nữa.
- Doc L155 list Partial Translations như nguồn mechanic verify — vẫn đúng nhưng
  số "+3 reroll thành +6" stale.
- Chaos Volatiles damage cut (patch L60) buff cho người chạy Ritual: doc L131
  list "phòng ritual cộng abyss one-shot" là failure mode — Chaos Volatiles cut
  giảm rủi ro này. Net: doc impact mixed.
- **Action: update-stats**. Section "Masters of the Atlas" (L43-L47) rewrite
  Partial Translations description. Failure modes (L131) thêm note Chaos
  Volatiles cut. Add Version History 0.5.2.

**farming/0-5-abyss-ulaman-amanamu-farm.md** — WEAKENED, MEDIUM

- Doc L143, L175 cite Jado Partial Translations cho double-effect abyss tablet.
  Same impact: mất tail 2× nhưng mean similar.
- **Action: update-stats** — rewrite Partial Translations cite, add 0.5.2 note.

**mechanics/atlas/0-5-atlas-passive-tree.md** — WEAKENED + REWORKED, HIGH

- Doc L77 list Partial Translations trong Jado tier — sẽ stale sau patch.
- Doc L87 mô tả Mysterious Rites: "ritual 8% chance thành Queen's Ritual" — bonus
  giữ nguyên nhưng patch L23 thêm tooltip mô tả đầy đủ. Doc cần verify mọi bonus
  Queen's Ritual đã liệt kê.
- Doc L39 mô tả The Chosen Path keystone, KHÔNG đề cập On the Wind keystone mới
  của 0.5.2 (patch L18).
- Doc không đề cập Mortuary Map limb-replace mới (patch L20) — Mortuary Map nằm
  trong Unexpected Missions Jado tier.
- **Action: re-verify-via-mechanic-researcher (lite)**. Thêm:
  (a) On the Wind multichoice keystone block;
  (b) Partial Translations description rewrite;
  (c) Mysterious Rites bonus list (kiểm tooltip mới);
  (d) Note Mortuary Map limb-replace ở Unexpected Missions tier;
  (e) Bump patch 0.5.1→0.5.2, version history entry.

### STRENGTHENED — farming buffs

**farming/0-5-remnant-runeforging-profit-loop.md** — STRENGTHENED + WEAKENED, HIGH

- T14+ Remnant reward "significantly improved" (patch L36) + Runefather's và
  Runebinder's Alloy vào pool 8-slot (patch L37). Trùng đúng "đường cong slot-
  to-reward dốc" doc mô tả L36 — pool 8-slot giờ chứa Alloy đắt hơn, EV
  per high-slot remnant tăng. Runebinder's Alloy giá hiện ~7,6 div (doc L26),
  Runefather's chưa có trong baseline doc (cần check poe2scout).
- Transcendent Alloy mất Foci/Wand (patch L46) → demand-side narrow → giá rớt
  (doc L26 nêu Transcendent 209 ex ~1,6 div, sẽ thấp hơn).
- 3-slot inscription bị bỏ dần khỏi T14+ → doc L36 mô tả "2-4 slot khắc recipe
  rẻ" cần update: T14+ map giờ ít gặp 3-slot rác hơn, trừ phần "Tier 10 Maps
  onwards có reduced chance" — tier 10-13 vẫn có 3-slot.
- **Action: update-stats + re-verify-via-farming-researcher**. Update:
  (a) Section "Đẩy số slot" (L34-L36) note T14+ pool đã cải thiện;
  (b) "Loot Breakdown" thêm Runefather's Alloy giá hiện tại, note T14+
     guaranteed quality;
  (c) "Failure modes" thêm note Transcendent Alloy demand shock;
  (d) Re-fetch giá poe2scout 2026-06-12 cho Runefather's/Runebinder's/
     Transcendent. Bump patch 0.5.1→0.5.2.

**farming/0-5-grand-expedition-farming.md** — STRENGTHENED, HIGH

- Patch L40: Ocean Logbook nay guarantee ≥1 Grand Expedition/section.
  Doc L18, L22 dựa vào việc Fallen Starlight rumour mở Moor of the Fallen Skies
  để có Aldur's Saga; guarantee mới làm SUPPLY Grand Expedition reliable trên
  MỌI section, không cần rumour proc.
- Tail 2× của Partial Translations mất (patch L19) — doc L32 list Partial
  Translations như Master "bắt buộc"; giờ phải đổi reason.
- **Action: update-stats**. Update:
  (a) "Setup → Atlas Passive Tree" rewrite reason Partial Translations
     (không còn 20% double proc, chuyển sang continuous 0-40%);
  (b) "Strategy Overview" thêm note guarantee Grand Expedition/section —
     đẩy strategy tier A→A+ vì supply Grand Expedition reliable hơn;
  (c) Bump 0.5.1→0.5.2 + version history.

**farming/0-5-withered-willow-delirium-farm.md** — STRENGTHENED, HIGH

- Delirium fog damage/toughness halve (patch L29-L30): "Halved the amount of
  Toughness that Unique Enemies in the Fog gain" + "Halved the amount of
  Increased Damage that Normal, Magic and Rare Enemies in the Fog gain". Doc
  L47, L50 mô tả "Simulacrum wave 7" + "boss 100% delirious là túi loot chính"
  + "build mỏng sẽ chết ở đúng chỗ loot dày nhất" — gentler floor giờ.
- Fury/Pure Fury/Rage/Malice damage cut (patch L71-L73) — boss fog mob giảm
  damage.
- Deliriousness on rare/unique kill fix (patch L111) — bug làm Deliriousness
  không cộng đúng giờ fixed.
- Delirium Shard timing fix + Mirror Shards no longer persist (patch L31-L32) —
  timing/placement clean.
- **Action: update-stats**. Build floor section (L84) update: "100% delirious"
  giờ dễ chịu hơn, raise tier confidence từ Medium→Medium-High. Add Version
  History.

**farming/0-5-boss-rush-fragment-farm.md** — STRENGTHENED + REWORKED, HIGH

- Jamanra −17% life (patch L56) — Faded Crisis (Copper Citadel boss) dễ hơn.
  Doc rush model phụ thuộc thời gian giết Citadel boss, −17% life là buff
  trực tiếp.
- An Audience with the King lên Currency Exchange (patch L137). Doc L26, L96,
  L121 mô tả Audience "không list được trên chợ chính (poe2scout không catalog)"
  và "Cost thực = thời gian Ritual altar (~3-5 phút tribute dồn/cuốn), không
  phải orb" — STALE post-0.5.2. Audience giờ TRADEABLE trên Currency Exchange,
  cost-model toàn doc cần rewrite.
- **Action: re-verify-via-farming-researcher**. Rewrite:
  (a) Section "Cửa thứ hai" (L26) — Audience giờ stock được;
  (b) "Map travel" (L98) — opportunity Ritual altar vẫn có, nhưng giờ cũng có
     option mua;
  (c) "Cost section" (L121) — model lại cost với giá Audience hiện tại
     (cần fetch poe2scout 2026-06-12);
  (d) Add Version History 0.5.2.

**farming/0-5-fragment-supply-farm.md** — REWORKED, HIGH

- Doc L32 nêu Audience "không list được trên chợ chính, nên cung Audience không
  phải con đường bán" — STALE. Patch L137 confirm Audience giờ trên Currency
  Exchange.
- Cung-side strategy: nguồn Ritual altar farm Audience giờ là MỘT NGUỒN BÁN
  ĐƯỢC, không chỉ cho rusher dùng. Đổi tier strategy cho người chạy Ritual.
- **Action: re-verify-via-farming-researcher**. Rewrite section "Hai nguồn bỏ
  qua" (L32) — đảo: Audience giờ là nguồn bán độc lập. Add nguồn Audience vào
  bảng cung side với giá poe2scout 2026-06-12. Tier strategy re-evaluate.

### REWORKED — economy/cost-model

**guides/0-5-ocean-exploring.md** — STRENGTHENED, HIGH

- Patch L40 guarantee Grand Expedition. Doc L38 mô tả Ocean Biome chứa "Grand
  Expedition — bản phóng to của expedition thường, chứa được cả các loại
  Remnant đặc biệt" và "đảo Faction Leader" + "khu ngầm mới" — không đảm bảo
  guarantee. Update để phản ánh ≥1 Grand Expedition/section.
- Quest markers cho Runesmithing Knowledge (Acts 2-4 + Logbooks) thêm vào
  (patch L44) — guide tutorial level chưa note.
- Farrow có thể invite vào Hideout (patch L43).
- Journey to the East quest item refinement (patch L45).
- **Action: update-stats**. Add Version History 0.5.2 entry. Update:
  (a) Section "Ocean Exploring hoạt động thế nào" thêm "guaranteed ≥1 Grand
     Expedition per section" (L38);
  (b) Section "Setup từ zero theo goal ladder" bước 1-2 thêm Farrow hideout
     invite + quest markers;
  (c) Bump patch 0.5.1→0.5.2.

**guides/0-5-ritual-rite-of-the-nameless.md** — REWORKED, MEDIUM

- An Audience with the King tradeable (patch L137) — doc L113, L132 mô tả
  Audience flow như opportunity-cost tribute. Vẫn farm-able nhưng giờ có option
  mua.
- Mysterious Rites tooltip rewrite (patch L23) — doc nếu liệt kê bonus thì
  verify khớp tooltip mới.
- Queen's Ritual +10 omens first set (patch L22).
- **Action: update-stats**. Add Version History. Update section flow Audience
  (~L113) để note tradeable.

**guides/0-5-delirium-trial-of-madness.md** — STRENGTHENED, MEDIUM

- Delirium fog Toughness Unique halved + Normal/Magic/Rare damage halved
  (patch L29-L30). Doc nếu mô tả độ khó fog wave thì cần soft-floor update.
- Delirium Shard timing/placement fix (patch L31-L32).
- Deliriousness on rare/unique kill fix (patch L111).
- Mirror Shards no longer persist (patch L32).
- **Action: update-stats**. Add Version History 0.5.2 entry.

**mechanics/leagues/return-of-the-ancients.md** — REWORKED, MEDIUM

- Audience tradeable (patch L137) — doc L60 mô tả "tribute dư hiến tế để giành
  Audience with the King" — vẫn đúng nhưng giờ thêm path trade.
- Remnant T14+ reward buff (patch L36).
- Runefather's/Runebinder's Alloy vào 8-slot pool (patch L37).
- Runemastered Ornate Ringmail + Venerable Defender basetype buff lớn
  (patch L41-L42) — doc nếu nêu basetype value thì stale.
- **Action: update-stats**. Add Version History 0.5.2 patch entry.

### CONFIRMED-FIX (bug fix khớp doc, doc giờ accurate)

**builds/monk/0-5-martial-artist-hollow-palm-leaguestarter.md** — CONFIRMED-FIX, MEDIUM

- Patch L80: "The Smash to Smithereens Skill, granted by the Facebreaker Unique
  Gloves when transformed by the Martial Artist's Way of the Stonefist Passive
  Skill, now explicitly states that it has no sockets". Doc L57 đề cập Way of
  the Stonefist như "lựa chọn sau, tùy thích glove transform" — nếu doc khuyến
  nghị socket support vào Smash to Smithereens thì cần clarify "no sockets".
- **Action: update-stats nhẹ**. Verify doc không nói gì sai về sockets Smash to
  Smithereens. Add Version History 0.5.2 entry tham chiếu Facebreaker clarification.

## High-priority retire candidates

KHÔNG có doc nào tag BROKEN trong 0.5.2 — đây là patch incremental, không removal/
disable entity nào của doc đang chạy. KHÔNG retire bất kỳ doc nào.

## New opportunity hints (research mới khả thi từ entity 0.5.2)

- **Necrotic Catalyst** (patch L24) — quality minion modifier mới cho ring/amulet,
  available qua Genesis Tree. Trực tiếp impact mọi build minion/companion
  (Spirit Walker pack, Disciple of Varashta, Hollow Mask Acolyte, Spectre Lich).
  → mechanic-researcher: write doc về Necrotic Catalyst + Refined Necrotic
  Catalyst, mod range, drop từ Genesis Tree wombgift nào.
- **On the Wind Atlas Keystone** (patch L18) — multichoice mới cho Azmeri Spirit
  meta. → mechanic-researcher (lite): bổ sung vào atlas-passive-tree doc.
- **Mortuary Map limb replace** (patch L20) — Unexpected Missions Jado tier farm
  path mới gắn với Atziri's Temple limb economy. → farming-researcher: nếu
  Atziri's Temple farm đáng, viết farming doc bao gồm Mortuary Map qua
  Unexpected Missions.
- **Runemastered Ornate Ringmail / Venerable Defender basetype buff** — defence
  per slot nhảy 3-4×. Mọi build evasion/ES hybrid (Spirit Walker pack đang đeo
  Forgotten Warden body — nhưng đó là unique chứ không phải rare Ornate Ringmail
  basetype) có thể swap-target tốt. → build-researcher (re-tune defensive
  baseline cho builds chạy rare body armour).
- **Audience with the King trên Currency Exchange** — economy angle mới: farm
  Ritual để bán Audience bulk, vs farm Audience tay cho Rite of the Nameless.
  → farming-researcher: dòng tiền cung-side Audience.
- **Bond Rune + Prismatic Rune rework** (patch L38-L39) — Remnant encounter
  builder thay đổi: Bond + Power Rune giờ ít rare hơn nhưng mod count tăng/wave;
  Prismatic không Always Shock nữa, thay bằng Flammability/Ignite Magnitude
  contribution. → mechanic-researcher: bổ sung Remnant rune doc.
- **Ice Storm / Lightning Storm Notable rework** — Notable cũ có clause non-
  functional, giờ functional. Builds dùng tree path đó (caster ele) có thể
  re-evaluate. → mechanic-researcher / build-researcher.

## Source confidence summary

- Patch notes verbatim (GGG official): mọi NEW/BUFF/NERF/REWORKED/REMOVED claim
  trên trích dòng cụ thể `data/release-notes/Version_0.5.2.md` → HIGH cho fact
  "entity X changed".
- Doc dependency (file:line trong content/): rg cross-cut + đọc line range của
  9 doc nhạy cảm nhất (build pack, mechanic spirit-walker, ritual farm, breach
  farm, abyss farm, remnant runeforging, grand expedition, withered willow,
  fragment supply/boss rush). HIGH cho "doc Y phụ thuộc entity X".
- Impact judgment:
  - HIGH cho STRENGTHENED khi number/radius change rõ (Bear Spirit 4m→8m =
    diện tích ×4, Jamanra −17% life), và cho WEAKENED khi mechanic chính của
    doc dựa vào proc nay bị xoá (Partial Translations 2× proc → continuous).
  - HIGH cho CONFIRMED-FIX khi bug fix khớp đúng layer doc mô tả (Forgotten
    Warden + Stoat Idol redirect).
  - MEDIUM cho REWORKED khi mean tương đương nhưng variance đổi (Partial
    Translations expected value gần như giữ +20%, chỉ tail thay đổi).
  - LOW cho UNTOUCHED-edge khi doc mention entity nhưng entity-side change
    không chạm layer doc dùng (Raven's Flock mist ravens-as-allies fix
    không phải spirit reservation efficiency mà 2 doc Lich/Infernalist
    quan tâm).
- KHÔNG single-source: impact = patch verbatim + doc dependency citation. Phần
  "expected value Partial Translations giữ +20% mean nhưng mất variance" là
  derivation từ formula uniform(0, 0.4) vs binary(20% × 1.0), HIGH trên math
  nhưng MEDIUM trên throughput thực tế cho đến khi có sample log post-patch.
