---
template: templates/farming-template.md
document_type: farming-strategy
title: Anomaly Map Lineage Support Farming
status: draft
created: '2026-06-29'
updated: '2026-06-29'
strategy_tier: Niche
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Anomaly Map Lineage Support Farming

Lineage support đắt nhất chợ — :wiki-link{url="https://www.poe2wiki.net/wiki/Garukhan%27s_Resolve"} ~546 div, :wiki-link{url="https://www.poe2wiki.net/wiki/Rakiata%27s_Flow"} ~164 div tính đến 2026-06-29 (poe2scout) — chỉ rớt từ boss của bốn :wiki-link{url="https://www.poe2wiki.net/wiki/Anomaly_Map"} ẩn trên Atlas. Đây là overlay quay số cắm lên mapping thường, không phải dòng tiền chính: Tier Niche, investment Low vì setup gần như miễn phí (Jado node free, tablet rẻ), nhưng mỗi lần giết boss là một cú roll tỉ lệ thấp không công bố. Hợp người đang cày map đều và muốn vé jackpot; ai cần income ổn định thì bỏ qua.

## Strategy Overview

Bốn Anomaly map mỗi cái khoá một boss "Deadly" với pool lineage support riêng: :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Reservoir"} (Temporal Sandstorm, boss :wiki-link{url="https://www.poe2wiki.net/wiki/Zahmir,_the_Blade_Sovereign"} → Garukhan), :wiki-link{url="https://www.poe2wiki.net/wiki/The_Jade_Isles"} (Eye of the Storm, boss :wiki-link{url="https://www.poe2wiki.net/wiki/Manoki,_the_Chosen"} → Rakiata), Derelict Mansion và Sealed Vault (pool gem rẻ hơn nhiều). Đường đi giống nhau: thấy điểm Anomaly trên Atlas → hoàn thành các map liền kề để mở khoá (Sacred Reservoir cần gom đủ ba Temporal Tether để bão cát tan) → giết boss → boss *có thể* rớt một lineage support theo pool của nó.

Tiền về vì pool của Zahmir lệch gần như nhị phân: Garukhan ~546 div, còn ba con kia là :wiki-link{url="https://www.poe2wiki.net/wiki/Khatal%27s_Rejuvenation"} ~3 div, :wiki-link{url="https://www.poe2wiki.net/wiki/Zarokh%27s_Refrain"} ~0.03 div, :wiki-link{url="https://www.poe2wiki.net/wiki/Varashta%27s_Blessing"} ~0.002 div (poe2scout 2026-06-29) — coi như đi tìm đúng Garukhan, ba con còn lại là an ủi gần bằng không. Jade Isles gặp nhiều hơn nên là bản dễ tiếp cận, đổi lấy jackpot thấp hơn. Nền cơ chế lineage support (luật một-copy, category loại trừ, vì sao không craft được) mình viết đủ ở [Lineage Support Gems](/guides/lineage-support-gems) — chạy farm này coi như đã nắm phần đó.

## Setup

### Atlas Passive Tree và Masters

Core dùng chung cho mọi trường phái nằm ở hai chỗ. Trên cây Atlas, lấy **Memories of the Maraketh** — 15% chance boss Sacred Reservoir rớt thêm một lineage support, áp cho area Lvl 75+ (chạy Jade Isles thì đổi sang **Memories of the Karui**). Master thì chỉ một người active một lúc, nên chọn Jado: **Untold Histories** cho 35% increased chance to find Lineage Supports (dòng này vô điều kiện, đẩy thẳng tỉ lệ gem), **Unforeseen Threats** 5% hoàn thành map lộ một Anomaly map gần đó (thêm vé free), **Partial Translations** 20% double effect explicit mod trên tablet. Mở Atlas + chuỗi quest Jado theo [hướng dẫn mở khoá Atlas](/guides/0-5-atlas-unlock-walkthrough).

Phần juice thì có hai trường phái và chúng tối ưu hai khúc khác nhau của đường đi. Trường phái "nhiều vé hơn" chạy Waystone Drop Chance 100%+ cùng ba :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"} có dòng increased quantity of Waystones — mục tiêu là gặp và chạy nhiều Anomaly map hơn. Trường phái "mỗi cú đậm hơn" chạy waystone Item Rarity cao cùng tablet tăng rare-drop-from-boss, rồi đổi biome map sang Forest để ăn node Atlas "50% increased chance to find Lineage Supports in Forest Areas".

Hai caveat phải biết trước khi chọn. Chỉ các dòng *chance to find Lineage Supports* (Untold Histories, Memories, node Forest) là chắc chắn đẩy tỉ lệ gem; Item Rarity thường không tác động item drop-restricted, nên trường phái nhiều-vé tựa cơ chế chắc hơn trường phái rarity — đo trong client trước khi dồn tiền vào rarity. Node Forest lại đòi *area giết boss* phải là biome Forest, mà Sacred Reservoir mặc định Desert; đổi biome chỉ làm được qua **Precursor Terraformer** và nó re-biome các Basic Map xung quanh, chưa rõ có đụng được map ẩn không — coi như chưa verify.

### Tablets và Waystone

Waystone 6 mod để mở đủ ba tablet slot, đẩy ilvl 79-80 cho qua mốc Lvl 75+ của Memories node. Ba tablet theo trường phái nhiều-vé là ba dòng increased Waystone quantity — tablet nào cũng được, miễn có mod đó, và Partial Translations có cửa double nó. Một số creator còn swap unique tablet **Visions of Paradise** (claim double drop chance khi gặp Sacred Reservoir) lúc vào boss map; mình chưa tra được tablet này trong poedb/wiki nên đang để dạng tin creator, verify trong client trước khi mua.

### Build Requirements

Phần gom ba Temporal Tether là map thường, build yếu chạy được. Rào nằm ở chính boss: Zahmir và Manoki là Deadly Map Boss, đánh đau và nhiều pha, cần đủ DPS hạ trong thời gian hợp lý và đủ sống để không feed về. League-start character cày được khúc overlay; chỉ cú boss mới là chỗ build mỏng vấp.

## Gameplay

Trên Atlas tìm điểm bị bão cát che — đó là Temporal Sandstorm phủ Sacred Reservoir. Hoàn thành các map liền kề, đặc biệt map có Temporal Tether, để gom đủ ba Tether thì bão tan và mở được Sacred Reservoir. May thì một map ra Tether, xui thì phải dọn hết quanh điểm; Jado Unforeseen Threats lộ thêm node Anomaly free trong lúc cày nên cứ chạy map đều là tự gom. Vào Sacred Reservoir thì cắm waystone + tablet đã juice, giết Zahmir, nhặt drop. Drop không đảm bảo nên đừng kỳ vọng từng map.

## Loot Breakdown & Economic Analysis

Neo giá poe2scout 2026-06-29, 1 div = 430 ex: Garukhan 234.662 ex (~546 div, 114 listed), Rakiata ~164 div (369 listed), Khatal ~3 div, phần còn lại của pool gần như không bán được. Garukhan leo +39% trong 7 ngày, từ ~229 div ngày 06-20 lên ~546 div ngày 06-29 — chase gem cung mỏng, một build hot cần đúng nó là giá nhảy.

Không quote div/giờ ở đây vì tỉ lệ rớt Garukhan mỗi cú Zahmir không được công bố và cộng đồng report ở mức quay số: nhiều người chạy 4-8 Anomaly map không ra con chase nào, một report đi bốn ngày gom 48 lineage support mà vẫn 0 Garukhan/Rakiata. Cách đọc đúng là vé số: chi phí mỗi attempt gần bằng không (map và tablet vốn đã chạy dù sao), jackpot 546 div, kỳ vọng phụ thuộc một tỉ lệ chưa biết. Minh hoạ cho thấy độ lớn: nếu Zahmir có ~5% rớt Garukhan thì trung bình ~20 Sacred Reservoir mới ra một con — con số 5% chỉ để hình dung, chưa verify. Vì giá Garukhan đã đủ cao, một con duy nhất gánh hàng chục giờ overlay, nên giá trị chiến lược nằm ở việc nó miễn phí cắm lên mapping nền chứ không ở đều đặn.

## Failure Modes

Rủi ro lớn nhất là variance, không phải setup. Drop không đảm bảo và pool lệch nặng nên phần lớn cú Zahmir cho gem an ủi hoặc không gì; phải plan cho session dài và đừng cược kết quả vào một map. Đây cũng là điểm mọi guide ngoài đồng thanh: chạy opportunistic trên nền farm khác, đừng coi nó là income chính.

- **Premise Item Rarity có thể vô dụng.** Nếu rarity không đẩy drop của item drop-restricted như lineage support, thì juice rarity là phí slot — đo in-client, và nếu đúng thì bỏ hẳn trường phái rarity, chỉ giữ trường phái nhiều-vé.
- **Access cạn.** Anomaly map vốn hiếm, Sacred Reservoir hiếm hơn Jade Isles; một region Atlas cày hết Temporal Sandstorm node là phải chuyển region để có thêm. Sustain ở đây là sustain *điểm Anomaly*, không phải waystone.
- **Patch nerf.** GGG đã siết từ rớt-đảm-bảo (0.4) sang "may drop" (0.5); siết tiếp tỉ lệ hoặc tách Garukhan khỏi pool sẽ giết EV. Giá cũng có thể sụp nếu build đang đẩy cầu hạ nhiệt.
- **Time/opportunity cost.** Gom ba Tether và lùng node tốn 3-4 map mỗi attempt; chuỗi xui dài thì so với farm ổn định như [Delirium boss rush](/farming/0-5-delirium-boss-rush-farm) là âm. Chỉ chạy khi mình vốn đã mapping và xem overlay là phần thêm, không phải khi cần tiền gấp.

## Alternatives & Variations

Bản dễ tiếp cận của đúng farm này là Jade Isles nhắm Rakiata's Flow: map gặp nhiều hơn, jackpot 164 div thấp hơn nhưng cung dày hơn (369 listed) nên xả nhanh, đổi node sang **Memories of the Karui** là xong. Hai Anomaly map còn lại pool gem rẻ hơn hẳn, chỉ dọn khi tiện đường. Muốn dòng tiền đều thay vì jackpot thì rời hẳn sang [Delirium boss rush](/farming/0-5-delirium-boss-rush-farm) — cùng nền mapping, reward trải đều hơn. Chỗ overlay này đứng đâu so với các strat khác xem [tier list farming](/guides/0-5-farming-strategy-tier-list); nền sustain map để chạy nó nằm ở [endgame mapping sustain](/guides/0-5-endgame-mapping-sustain).

## Version History

- **2026-06-29** — Initial draft. Cơ chế verify verbatim poedb 0.5.0 (Anomaly_Map, Atlas_Masters, Atlas_passive_skill: Memories of the Maraketh = Sacred Reservoir, Karui = Jade Isles). Giá poe2scout 2026-06-29 (1 div = 430 ex). Tỉ lệ rớt là community-estimate chưa verify; tablet Visions of Paradise và việc Item Rarity có đẩy gem hay không đều chưa verify, cần đo trong client.

## Relationships

- **related** [Lineage Support Gems](/guides/lineage-support-gems) — nền cơ chế lineage support: luật một-copy, category loại trừ, nguồn drop boss-locked vs global.
- **related_guides** [Hướng dẫn mở khoá Atlas](/guides/0-5-atlas-unlock-walkthrough) — mở Atlas + chuỗi quest Jado để có Master node dùng cho farm này.
- **competes_with** [Delirium Boss Rush Splinter Farming](/farming/0-5-delirium-boss-rush-farm) — bản income đều khi không muốn cược variance jackpot.
- **related_guides** [Tier list các chiến lược farm currency](/guides/0-5-farming-strategy-tier-list) — chỗ overlay này đứng so với các strat ổn định.
- **related** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain) — nền sustain map để overlay Anomaly chạy được lâu dài.
