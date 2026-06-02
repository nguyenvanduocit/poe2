---
document_type: mechanic
title: Nhồi Rare Modifier Lên Unique Tamed Beast — Tablet Stacking & Reroll
mechanic_type: Crafting
league: '0.5'
patch: 0.5.0
status: draft
author: nguyenvanduocit
created: '2026-06-02'
updated: '2026-06-02'
tags: [poe2, crafting, tame-beast, companion, unique-beast, precursor-tablet, monster-modifier, spirit-walker, 0-5]
template: templates/mechanic-template.md
---

# Nhồi Rare Modifier Lên Unique Tamed Beast — Tablet Stacking & Reroll

Con carry chính của một build companion zoo không sống bằng base stat — nó sống bằng số monster modifier dán trên người lúc mình bắt nó. :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} giữ tối đa 4 monster modifier khi bắt một Unique beast, nên bài toán không phải "bắt con nào" mà là "làm sao ép con đó spawn với đúng bộ modifier mình muốn". Kỹ thuật này dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_tablet"} stack modifier lên map-boss version của con beast, rồi tame nó để khoá những mod đó vĩnh viễn lên con carry — và nó chỉ khả thi từ 0.5 vì tablet giờ đi thẳng vào Map Device và Endgame rewrite mở ra Masters of the Atlas với node double-effect.

## How It Works

Con carry tiêu biểu cho kỹ thuật này là :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"} — một Unique monster ở Act 3 Jungle Ruins (Level 34), thuộc monster type Quadrilla, tức một con silverback ape khổng lồ dùng thân cây/cột làm vũ khí chứ không phải "monkey" theo nghĩa đen. Lý do nó là carry số một: nó mang sẵn base crit chance 25% và crit multi nền cao, nên chỉ cần **một** modifier đúng là toàn bộ damage profile nhảy vọt. Modifier đó là **Extra Crits** — :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} cho "300% increased Critical Hit Chance". Phép tính thẳng tưng: 25% × (1 + 3.00) = 100% crit chance, tức crit-capped ngay, không cần một node crit nào, không cần crit weakness áp lên enemy. Con số base-crit 25% và crit-multi nền thì đọc tại tooltip Summon Beast trong client — mốc tham chiếu để xác minh khi vào game chứ không phải hằng số để min-max theo. Cái chắc chắn và đã thấy tận mắt là crit-*chance* cap 100% sau khi con beast dính Extra Crits.

Vấn đề: bản Unique beast tự nhiên ở Jungle Ruins spawn với mod ngẫu nhiên xoàng. Muốn nó spawn với nhiều rare modifier để có cơ may trúng Extra Crits, mình không tame bản Act 3 — mình đi tame bản **map-boss** của nó. Map-boss version của Mighty Silverfist là :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"}, area level 65, xuất hiện làm boss ở hai map: :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} (Forest biome) và :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"} (Swamp biome). Atlas placement của Endgame 0.5 còn mới nên nếu vào maps thấy lệch thì log lại — nhưng cặp entity và boss mapping (Silverfist ↔ Zekoa ↔ Riverside/Rupture) thì vững.

Chuỗi nhồi modifier dựa trên số tablet slot của :wiki-link{url="https://www.poe2wiki.net/wiki/Map_Device"} — và số slot do **chính số modifier của waystone** quyết định, không phải do việc cắm tablet. Bảng cứng: waystone 0-2 mod mở 1 slot, 3-5 mod mở 2 slot, và waystone **6 mod mở cả ba slot**. Vì thế muốn đủ ba slot phải alch + spam exalted đẩy waystone lên 6 mod — đánh đổi là waystone càng nhiều mod thì respawn attempt càng ít (chi tiết ở phần Reroll & Revive). Lưu ý 0.5 đã bỏ Tower hoàn toàn — tablet đặt thẳng vào Map Device, không còn bước socket vào Tower như patch trước. Đầy ba slot bằng hai loại tablet bổ trợ nhau: :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} (unique Overseer Precursor Tablet, mod "Map Bosses have 1 additional Modifier", 5 uses) cho con boss thêm một modifier; và một hoặc nhiều tablet suffix **"of Contest"** ("Unique Monsters in your Maps have 1 additional Rare Modifier") — suffix này roll trên bất kỳ tablet base nào (Abyss/Temple/Irradiated/Ritual/Breach/Overseer), mỗi cái cộng thêm một rare mod lên unique monster. Ba slot kiểu này đẩy Zekoa lên cỡ ba rare modifier thêm, và Tame Beast giữ được 4 nên không phí.

Tầng trên cùng là node của **Jado of the Order of the Djinn** — Master of the Atlas mới, mở questline "Jado's Spycraft" bằng cách clear một anomaly map gần điểm start atlas. Một node trong chuỗi này cho "20% chance for double effect of explicit modifiers on tablets" — dòng này đọc được trong client, chưa thấy trong patch note nên đáng log lại khi vào league. Khi proc, mỗi tablet effect nhân đôi, nên ba tablet "of Contest" có thể đẩy con boss tới sáu rare modifier — và vì Tame Beast chỉ giữ random 4 trong số đó, một boss 5-6 mod vẫn không lãng phí hẳn, chỉ là mình không kiểm soát được giữ đúng 4 cái nào. Một điểm còn để mở: chưa rõ double-effect có apply cho dòng unique-monster hay không — log khi vào league để xem unique boss có thật sự ăn double-effect không, đừng giả định nó luôn nhân đôi.

## Key Interactions

**Cruel Hegemony × "of Contest" × Jado double-effect — ba tầng cộng dồn modifier.** Cruel Hegemony tác động lên Map Boss (cho Zekoa +1 mod), "of Contest" tác động lên mọi unique monster (cộng rare mod), và node Jado nhân đôi effect của tablet đang cắm. Ba cái này không tranh slot của nhau theo nghĩa cơ chế: chúng đều là tablet đặt trong cùng ba slot Map Device và cùng hướng output (nhiều rare mod hơn trên cùng một con boss). Càng nhiều tablet "of Contest" trong ba slot thì sàn modifier càng cao trước cả khi double-effect proc. *Exclusion check: trần thực dụng là Tame Beast chỉ giữ 4 — đẩy quá 4 mod không tăng số mod giữ được, chỉ tăng xác suất trong 4 cái random có Extra Crits.*

**Số modifier càng cao → reservation của con beast càng đắt — đây là trade-off thật, không phải free upgrade.** Reservation của Summon Beast scale theo cả độ mạnh của con monster lẫn **số monster modifier** nó mang. Một con carry 4-mod ăn spirit nhiều hơn hẳn con 1-mod, nên nhồi mod không miễn phí: nó ép ngân sách spirit của cả zoo. Trong một build companion zoo vốn đã chật spirit, một con carry 4-mod có thể buộc rút bớt skeleton hoặc companion phụ để gánh chỗ reservation phình ra. *Exclusion check: không có node nào miễn reservation theo modifier-count — đây là cost cứng, phải tính vào spirit budget trước khi quyết bắt con 4-mod.*

**Tame Beast giữ random 4 nếu boss có >4 — không kiểm soát được giữ cái nào.** Khi tame một con có 5-6 mod, hệ thống giữ random 4. Synergy ở chỗ boss càng nhiều mod thì xác suất Extra Crits nằm trong 4 cái giữ lại càng cao; anti-synergy ở chỗ mình có thể mất một mod tốt khác (Enraged, Hasted) cho một mod rác. *Exclusion check: monster modifier từ Essence hoặc Azmerian wisp không được Tame Beast giữ — chỉ mod gốc của monster mới count, nên đừng kỳ vọng essence-mod dính lên con carry.*

## Optimization

Thứ tự ưu tiên modifier khi soi con boss trước lúc tame, từ cao xuống thấp:

- **Extra Crits** ("300% increased Critical Hit Chance") — ưu tiên số một tuyệt đối, vì nó một mình đẩy con carry lên 100% crit chance, biến mọi đòn thành crit. Mọi mod khác chỉ là bonus quanh nó.
- **Periodically Enrages / Enraged** và **Hasted** — cùng bậc ưu tiên hai. Enraged cho +40% damage và +25% action speed (Periodically Enrages cho hiệu ứng tương tự theo chu kỳ Frenzy); Hasted cho 30% increased Attack/Cast Speed — cả hai đều là action-speed và damage thật mang sang con carry.
- **Soul Eater** ("Gains skill speed + damage reduction per consumed Soul", stack tới 50 souls) — tên đúng là Soul Eater, không phải "soul leader"; trên một con carry liên tục ăn soul, scaling skill speed cộng dồn rất mạnh.
- **Extra Fire/Cold/Lightning/Chaos Damage** ("Gain 40% of Damage as Extra <element> Damage") — added-as-extra cộng additive lên base hit, không phải conversion, nên cứ chồng thẳng vào damage. Ưu tiên chaos hoặc lightning vì ít bị resist phổ biến hơn.
- **Shroud Walker** ("Teleports to distant Enemies creating a Smoke Cloud") — gần như mod meme, không cộng damage, nhưng khiến con carry tự teleport vào pack nên đỡ phần clear một chút.

Một điểm đã settled để khỏi phí lượt soi: **"facing" không phải là monster modifier** — nó không tồn tại trong bảng mod, nên đừng chờ nó xuất hiện.

Về map tier: chạy **tier thấp nhất có thể**. Sức mạnh chiến đấu của con beast sau khi tame scale theo **gem level của Tame Beast** chứ không theo map tier — patch 0.5.0 ghi rõ Summoned Beast deal 40% more damage ở Gem Level 9, lên 84% ở Gem Level 20. Vì combat power đến từ gem level, chạy map cao chỉ tăng rủi ro chết mà không tăng DPS con carry. Câu hỏi "base stats của con beast có giống hệt nhau bất kể tier (T1 = T15) không" thì để mở — khi farm thì log xem capture-tier có feed vào độ mạnh của con tame hay không; nhưng kết luận thực hành "chạy tier thấp cho an toàn" vẫn đúng nhờ gem-level scaling cộng rủi ro 0-revive trên map 6-mod.

## Reroll & Revive

Số lần thử lại mỗi map đến từ số **waystone modifier**, không phải từ map modifier tablet cộng vào. Đây là điểm load-bearing của cả kỹ thuật: vì stack tablet "of Contest" + Cruel Hegemony chỉ thêm *map* modifier (mở slot, cộng mod lên boss) chứ không đụng tới waystone modifier, nên nhồi tablet **không** đốt revive. Bảng respawn theo waystone mod (0.5 không đổi công thức này, chỉ fix bug respawn): waystone 4-mod cho 2 respawn attempt, waystone 6-mod cho 0 respawn attempt.

Hai cách chạy, đánh đổi giữa số mod và số lần thử:

**Run 6-mod (alch + spam exalted lên waystone) — 0 revive, one-shot.** Đây là setup nhồi tối đa modifier (mở cả ba tablet slot) nhưng không có lần thử lại. Quy trình bắt buộc: chạy map, tới boss, **tame ngay lập tức** rồi mới xem modifier sau — không được chạy quanh soi mod trước, vì lỡ chết hoặc lỡ giết con boss là mất trắng một lượt dùng tablet. Đây là chế độ rủi ro cao, chỉ chạy khi đã quen và muốn nhồi nhiều mod nhất.

**Run rare 4-mod — 2 revive, soi-rồi-reroll.** Waystone rare bốn-mod cho 2 respawn attempt, mở ra một mẹo reroll: vào boss room, tắt damage (turn off minions / gỡ support khỏi con bear), soi modifier của :wiki-link{url="https://www.poe2wiki.net/wiki/Map_Boss"} Zekoa. Nếu xấu thì để boss giết mình — respawn ở checkpoint **ngoài** boss room, và lúc đó chỉ còn boss present. Mỗi respawn attempt là một lần soi mod mới, nên một lượt dùng tablet cho nhiều lần thử thay vì một. Cơ chế respawn-at-checkpoint-chỉ-còn-boss thì chắc; riêng việc modifier của boss reset/reroll thành bộ mới khi respawn là phần wiki chưa ghi — đây là method field-test, log in-game để confirm cơ chế reroll modifier. Lưu ý mẹo này chỉ dùng cho map rare-mod còn respawn attempt, **không** dùng được cho run 6-mod (0 revive).

## Cost & Economy

Tổng chi phí execute kỹ thuật này hiện rất rẻ. Giá live ngày **2026-06-02** (POE2 0.5 "Runes of Aldur", day 4, fetch trực tiếp từ trade2): **Cruel Hegemony floor ~1 exalted** (1385 listing, vài cái 1 ex whisperable); **tablet "of Contest" floor ~6-8 annul** cho base single-mod (Temple/Irradiated/Ritual/Breach/Abyss), cheapest online ~10 exalted, bản multi-mod juiced ~25 ex (895 listing). Tỉ giá ngày đó: 1 divine ≈ 54-75 exalted.

Giá này đã **crash rất mạnh so với day-2**: lúc đầu league Cruel Hegemony quote ~1 divine cho 5 uses và "of Contest" ~2-3 divine mỗi cái — tới day-4 còn ~1 exalted và vài annul, tức rớt cỡ 60-75 lần. Supply đuổi kịp demand cực nhanh trong tuần đầu, nên đừng quote lại con số cũ; tablet giá đầu league decay từng ngày. *Snapshot freshness: re-fetch qua `/trade` nếu quá 7 ngày trước khi quote lại.*

Một cảnh báo mua hàng: **đừng mua tablet còn ít use remaining**. Unique tablet (Cruel Hegemony) có 5 uses, tablet thường (kể cả "of Contest") có 10 uses — kiểm use count trước khi bấm mua, vì một cái Cruel Hegemony 1-use giá thấp hơn nhưng tính theo lượt dùng thì đắt gấp năm.

## Failure Modes

**1. Run 6-mod 0-revive chết trước khi tame → mất trắng lượt tablet.** Đây là rủi ro lớn nhất của chế độ nhồi-tối-đa. Map 6-mod không có respawn attempt, mà boss area level 65 có thể đánh đau bất ngờ ở map tier thấp — nếu mình chết hoặc lỡ tay giết con boss trước khi tame, cả ba tablet trong map đó (gồm Cruel Hegemony 1 use) bay theo. Phòng bằng cách tame-ngay-soi-sau và chỉ chạy 6-mod khi đã quen tay; người mới nên chạy rare 4-mod (2 revive) để có lưới.

**2. Mua tablet low-use / overpriced trap.** Tablet còn 1-2 use trông rẻ nhưng tính theo lượt dùng thì lỗ; và giá đầu league biến động mạnh nên một cái "rẻ" hôm qua có thể đã là giá trần hôm nay. Luôn kiểm use count và so giá floor live trước khi mua.

**3. Tame nhầm bộ mod xấu → phí lượt, cần con dự phòng.** Soi mod ra rác (lightning resistant, burning ground on death) thì lượt đó coi như phí — nhưng con beast vừa bắt không vứt đi được nếu nó đang chiếm con Tame Beast 6-link đã đầu tư. Cách thoát là **disenchant** con Tame Beast gem ở vendor: thao tác này clear con monster đã lưu, trả về một con Tame Beast trắng giữ nguyên level, quality, và sockets, để mình tái dùng đi bắt phiên bản khác mà không phải mua 6-link mới. Kèm theo nên thủ một con Tame Beast thứ hai rẻ (Lv18, 5-link) làm standby để soi mod, chỉ dồn link xịn sang sau khi đã trúng bộ mod đáng giữ.

**4. Reservation phình khi con carry 4-mod ăn vào spirit budget của zoo.** Bắt được con carry 4-mod ngon rồi vẫn có thể không field nổi nó cùng phần còn lại của zoo, vì reservation scale theo modifier-count. Trước khi đi săn con 4-mod, tính trước spirit: một con carry 4-mod cộng các companion phụ cộng self-defense rất dễ vượt ngân sách league-start. Nếu cạn spirit thì phải rút skeleton hoặc companion phụ — log reservation từng skill để biết trần field được bao nhiêu con.

## Version History

### Patch 0.5.0

- **2026-06-02** — Doc tạo mới. Kỹ thuật nhồi rare modifier lên Unique tamed beast qua tablet stacking khả thi từ 0.5: tablet đi thẳng vào Map Device (bỏ Tower), Cruel Hegemony + suffix "of Contest" cộng modifier lên unique monster, Masters of the Atlas (Jado's Spycraft) thêm node double-effect. Extra Crits ("300% increased Critical Hit Chance") đẩy con carry 25% base crit lên 100% crit-capped; số base-crit của Silverfist đọc trong client. Giá tablet snapshot day-4 đã crash mạnh so với day-2.
- **Cần log khi vào league:** (1) double-effect node của Jado có apply cho dòng unique-monster không; (2) cơ chế reset/reroll modifier của boss khi respawn-at-checkpoint; (3) base stats con beast có tier-invariant không (T1 = T15) — low-tier hiện chạy vì survivability, cơ chế chưa confirm; (4) số base-crit / crit-multi của Silverfist đọc trong client (25% base; crit-multi nền — giữ là mốc tham chiếu, chưa cố định một con số).

## Relationships

- **part_of** [Tame Beast Companion Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-zoo) — build dùng kỹ thuật này để max con carry chính sau khi zoo online.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame nền tảng mà kỹ thuật này xây lên trên.
- **related_mechanics** [Crafting Để Kiếm Tiền](/mechanics/crafting/0-5-crafting-for-profit) — cùng folder crafting, vòng kinh tế song song dùng cùng currency nền.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league system 0.5 (Masters of the Atlas / Jado, Map Device tablet, Endgame rewrite) là nền mà kỹ thuật này chạy trên đó.

## Resources

- [GhazzyTV — How to Tame Unique Beasts with 3+ MODIFIERS!](https://www.youtube.com/watch?v=23wZWPR16o4) — walkthrough tablet stacking + reroll trên Zekoa (2026-05-31).
- [CaptainLance9 — How to get Rare Mods on Unique Tame, Day 2 Spirit Walker](https://www.youtube.com/watch?v=UeVyeEpH26c) — creator field-test technique (2026-05-31), đã fold vào build note.
