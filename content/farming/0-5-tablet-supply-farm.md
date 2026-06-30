---
template: templates/farming-template.md
document_type: farming-strategy
title: Tablet Supply Farming
status: draft
created: '2026-06-14'
updated: '2026-06-23'
strategy_tier: B
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Tablet Supply Farming

Thay vì đốt tablet juice một mechanic, mình cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Irradiated_Tablet"} rồi nhặt tablet của những mechanic mình KHÔNG cắm để bán cho đám juicer. Tier B, investment Low — vốn vào sát không (irradiated ~20 ex/cuốn × 3, hoàn vốn trong 1-2 map). Build zoom ăn ~18-24 div/giờ; companion pack Spirit Walker (ThaoCamVienSaiGon, Lv95) ngồi ~12-16 div/giờ do clear mechanic đông chậm hơn. Giá tablet đã crash sau khi strat viral — con số 45 div/giờ của video đến từ Rakiata luck + giá cũ, không phải baseline bây giờ (data 2026-06-14).

## Strategy Overview

Patch note 0.5.0 viết rõ: "Each empty tablet slot contributes to the amount of random non-tablet spawned league content in the area." Cắm đủ tablet một mechanic thì chỉ ra mechanic đó, và tablet của nó gần như cạn. Đảo ngược: cắm irradiated (effect = +1 Monster Level, là map mechanic chứ không phải league encounter) thì ba slot vẫn "trống" về phía league content — map tự gieo Breach/Ritual/Abyss ngẫu nhiên và chúng rớt tablet full rate. Thực đo community: ~2 tablet/map trung bình, map đông mechanic ra 5-10.

Tiền không chỉ đến từ tablet. "Waystone-coded" items — tablet, Origin Cradle/Spark, Breachlord Sac — đều nhận buff từ mod "increased Quantity of Waystones found in Map" và "Monsters have increased Effectiveness" trên tablet. Vì vậy, ba dòng tiền chồng nhau: bán tablet, gom fragment từ Citadel/Breachstone rush, và loot thô từ clear mechanic trên đường đi. Dòng to nhất là fragment (~8 div/giờ đo được trên 6 giờ), không phải tablet.

Abyss/Ritual/Breach là hàng bán được; Irradiated/Temple/Delirium ai cũng dư nên gần không bán; Expedition không có chợ, bỏ khỏi tính toán.

## Setup

### Atlas Passive Tree

**Eons of Contamination** — điều kiện cứng, mở "Irradiated Precursor Tablets may now be found" ở area Lv70+. Chưa lấy thì phải mua toàn bộ irradiated, không tự cung được.

Bốn node nhân output trực tiếp:

- **Propagating Secrets**: "8% increased Quantity of Tablets found for each Tablet affecting Map area" — chạy 3 tablet là +24%.
- **Specialised Seeker**: "Tablets also provide 10% increased Rarity of Items Dropped to Monsters from their mechanic" — đẩy chất lượng loot thô mỗi mechanic clear.
- **Curiously Durable Stone** (Lv75+): "8% chance to not consume Tablet uses when opening Maps" — cứ 12-13 map mới tốn 10 charge, cắt chi phí irradiated.
- **Partial Translation** (hoặc **Reverse Transcription**): "Your Tablets may be upgraded to Rare and have +1 Maximum Modifier" — cần để Regal tablet lên Rare 4 mod bán giá cao (Abyss god-roll 30-40 div thay vì vài div).

Ngoài nhánh tablet, fill subtree Breach/Abyss/Delirium vì ba mechanic này gặp nhiều nhất trên đường travel. Ritual chỉ đủ để clear mob altar, không cần subtree sâu. **Forest Mastery** vành ngoài: "50% increased chance to find Lineage Supports in Forest Areas" — cửa jackpot Rakiata's Flow (~112 div, vol 632 ngày 2026-06-14) không tốn thêm gì.

### Masters of the Atlas

**Jado's Spycraft** là master chính. Bốn node đáng lấy:

- **Long Days** (Tier 3): "20% more chance of Random Extra Content" — đẩy số mechanic ngẫu nhiên spawn mỗi map, nguồn tablet chính của strat.
- **Partial Translations** (Tier 3): "20% chance for double effect of Explicit Modifiers on Tablets" — tablet tự roll có cơ hội nhân đôi effect, bán giá cao hơn.
- **Unforeseen Threats** (Tier 2): "5% chance on completing Maps for a nearby Anomaly Map to be revealed" — lộ Anomaly, nguồn Lineage miễn phí.
- **Ancient Activations** (Tier 4): "Powerful Map Bosses have 5% chance to add Ancient Modifiers to a nearby Map" — thêm lớp buff map kế tiếp.

Khi rẽ đập hai Citadel mới hoặc pinnacle, cân nhắc **Untold Histories** (Tier 4): 35% chance Lineage + 50% chance rớt Lineage ở pinnacle, đổi lại boss nhận ít hơn 35% damage — build clear chậm tránh bật.

### Tablets & Map Device

Cắm **3 Irradiated Tablet**, mỗi cuốn chỉ cần hai mod: **"increased Quantity of Waystones found in Map"** (of the Cartographer, 30-50%) và **"Monsters have increased Effectiveness"** (Challenger's, 7-11%). Chi phí ~20 ex/cuốn × 3 — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Irradiated%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_2777224821%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D), chia 10 charge ≈ 6 ex/map trước Curiously Durable Stone. City biome map mở slot thứ tư qua **Industrial Improvements** — xen vào đường travel khi gặp.

Đừng cắm tablet của mechanic muốn nhặt. Cắm Breach tablet là tự giết nguồn Breach tablet — bẫy phổ biến nhất người mới mắc.

Waystone travel roll lên 6 mod (mở đủ 3 slot tablet); corrupt qua Jado đẩy lên 7-9 mod. Ưu tiên thêm "increased Quantity of Waystones" trên waystone — cùng nhóm coded, cộng dồn vào số tablet. Biome rừng cho Forest Mastery, biome mountain cho tỉ lệ tablet tốt theo community. Hai Citadel mới max-juice waystone T15-T16.

### Build Requirements

Strat này **clear-speed-bound**, không phải boss-rush. Tiền đến từ cày sạch mọi mechanic gặp trên đường:

- **Clear speed**: ngưỡng thật. Build zoom (Lightning Spear, Twister, Demon Form) quét Breach/Abyss/Deli trong vài giây ăn 38-45 div/giờ; companion pack clear đông chậm hơn, ngồi 12-16 div/giờ.
- **Movement speed**: boots ≥30% MS, Quicksilver/Onslaught liên tục.
- **Boss DPS**: đủ xé hai Citadel mới (~60-90 giây) và Breachlord ở Twisted Domain.
- **EHP**: ≥8-10k — map đông mechanic juiced (Breach hand, Deli fog, Abyss rare) nguy hiểm hơn rush boss đơn.

## Gameplay

Cắm 3 irradiated (4 nếu city map) vào Map Device cùng waystone corrupt, travel một hướng cố định nhắm point of interest gần nhất (Citadel mới, Anomaly map, Tower). Trong mỗi map: lao về boss/point of interest, nhưng clear mọi mechanic ngẫu nhiên trên đường — đây là chỗ tiền ra.

Từng mechanic có quy tắc riêng: Breach phải hoàn thành hand mới rớt tablet (~1 tablet/Breach, tiện gom :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Splinter"}); Ritual chỉ clear mob quanh altar, đừng chạy reward; Abyss chạy hết và mở pit (gặp rare Amanamu dùng pull-out tech — kéo ra khỏi khói rồi giết, GGG xác nhận tăng tỉ lệ Omen of Light); Temple clear altar rồi mở chest (chỉ chest nhả Temple tablet); Delirium chạy hết fog rồi kết thúc counter; Expedition remnant ngon thì làm, logbook >1 div/cuốn.

Tới point of interest: boss hai Citadel nhả Origin Cradle/Spark; xé Breachstone lấy Breachlord Sac. Cuối session, Regal tablet base ngon lên Rare 4 mod trước khi list — Abyss god-roll 30-40 div vs 2-mod vài div.

## Loot Breakdown & Economic Analysis

Giá live trade 2026-06-14, poe2scout cùng ngày, 1 div = 136 ex. Bốn dòng tiền, fragment là dòng to nhất:

**Dòng 1 — tablet bán lại:** ~2 tablet/map × ~15-20 ex/tablet trung bình qua cả lô ≈ 0,22-0,29 div/map → **~4-5 div/giờ** ở 15 map/giờ. Giá bán thực: Abyss ~30-40 ex, Ritual ~10-20 ex, Breach 7-10 ex. God-roll 4 mod (bán nhiều div) thì search triple-stack ra 0 listing — cực hiếm, không tính vào baseline. Cost: ~6 ex/map irradiated.

**Dòng 2 — fragment (dòng to nhất):** Breachlord Sac 649 ex (~4,8 div, +32% 7d); Origin Cradle ~433 ex (~3,2 div, +48% 7d); Origin Spark 276 ex (~2,0 div, +30% 7d); Head of the King 167 ex (~1,2 div) từ Crux of Nothingness (từ 0.5.3, Followers of the King in the Mists xuất hiện trong maze này — re-check giá). Đo 6 giờ: **~8 div/giờ** dòng này.

**Dòng 3 — loot thô:** raw currency (Exalt, Divine, Greater Chaos, Perfect Exalt, omen), Deli liquid, Simulacrum splinter, Expedition logbook. Đo 6 giờ: ~25 div raw + 9 div Deli liquid + 9 div logbook → **~7 div/giờ**. Scale thẳng theo clear speed.

**Dòng 4 — Lineage jackpot (variance):** Rakiata's Flow ~112 div (vol 632, 2026-06-14). Drop cực hiếm — hai cuốn một run đã là +225 div, cũng là thứ thổi phồng số video lên 45 div/giờ.

Profit/giờ = fragment (~8) + loot thô (~7) + tablet resale (~4-5) − irradiated cost (<1) + Lineage upside thưa. Build zoom: **~18-24 div/giờ steady-state**; companion pack Spirit Walker: **~12-16 div/giờ**.

## Failure Modes

- **Giá tablet đã crash.** Breach roll tốt 7-10 ex (không phải div), Abyss cao nhất 30-40 ex, god-roll 4 mod 0 listing trên chợ. Mặt cung vẫn lãi vì cost gần không, nhưng dòng tablet teo về 4-5 div/giờ. Đừng vào strat vì con số div/giờ của video.
- **Market saturation theo loại.** Irradiated/Temple/Delirium ai cũng dư, gần không bán được. Chỉ Breach/Ritual/Abyss mới bán; nếu meta co về ít mechanic thì cầu các loại còn lại sụp.
- **Build floor.** Companion pack Spirit Walker ngồi 12-16 div/giờ vì clear mechanic đông chậm — mất ~40% income dòng 1 và dòng 3 so với build zoom. Strat thưởng clear speed gấp đôi; build chậm nên cân nhắc strat boss-centric.
- **Roll hiếm gate revenue tablet.** Tablet 4 mod đắt cần Partial Translation/Reverse Transcription + Regal trúng combo mod hiếm; farm 100 cuốn mà đa số 2-mod junk thì revenue dòng 1 thấp hơn nhiều con số "100+ tablet".
- **Patch nerf risk.** GGG có thể chỉnh cơ chế empty-slot/inverse-drop ("they are very aware that the way some mechanics work will have to be adjusted down the line"). Nếu tablet rớt đều bất kể slot, hoặc tablet tách khỏi nhóm waystone-coded, engine strat gãy.

## Version History

- **0.5.3 (2026-06-19)** — Followers of the King in the Mists xuất hiện trong maze Crux of Nothingness; cung Head of the King có thể tăng, re-check giá trước khi xếp vào income model.
- **2026-06-14** — Initial draft. Verify mechanic từ patch note 0.5.0 (empty-slot rule) + poedb (Eons of Contamination, Propagating Secrets, Jado nodes). Giá live trade 2026-06-14 sửa thẳng claim video ("tablet bán 16-40 div" → Breach 7-10 ex, Abyss 30-40 ex, god-roll 0 listing). Tier A→B, income 45→18-24 div/giờ zoom, Lineage jackpot tách thành variance. Tablet Expedition bỏ vì không giao dịch.

## Relationships

- **synergizes_with** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): Grand Mirror từ subtree Delirium nhân đôi effect mọi tablet đang cắm, gồm irradiated — mechanic ngẫu nhiên dày gấp đôi, tablet rớt nhiều hơn.
- **synergizes_with** [Fragment Supply Farming](/farming/0-5-fragment-supply-farm): cùng mặt cung farm-bán cho juicer; đường travel tablet farm tự gom fragment, đường fragment farm tự gom tablet.
- **synergizes_with** [Ocean Exploring Grand Expedition Farm](/guides/0-5-ocean-exploring): Expedition remnant ăn proc khi clear map travel, không xung đột atlas point.
- **related** [Remnant và Runeforging Profit Loop](/farming/0-5-remnant-runeforging-profit-loop): Remnant nhặt trên đường clear là overlay không xung đột.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain): cơ chế tablet slot theo số mod waystone và Powerful Map Boss rớt waystone.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients): bối cảnh 0.5 endgame overhaul, tablet rework empty-slot và hai Citadel mới.
