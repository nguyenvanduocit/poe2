---
template: templates/farming-template.md
document_type: farming-strategy
title: Tablet Supply Farming
status: draft
created: '2026-06-14'
updated: '2026-06-14'
strategy_tier: B
investment_tier: Low
league: '0.5'
patch: 0.5.2
league_phase: Mid
confidence_level: Medium
---

# Tablet Supply Farming

Mặt cung của cơn sốt tablet 0.5: thay vì đốt tablet để giga-juice một mechanic, mình chạy travel map cắm toàn :wiki-link{url="https://www.poe2wiki.net/wiki/Irradiated_Tablet"} rồi nhặt chính tablet của những mechanic mình KHÔNG cắm để bán lại cho đám juicer. POE2 thưởng tablet ngược: mechanic nào mình đang cắm tablet thì hầu như không rớt tablet của nó, mechanic nào mình gặp tình cờ mà không cắm thì rớt đều. Irradiated tablet không phải league content nên không khoá nguồn nào — ba cuốn irradiated biến mọi map thành máy in tablet của cả sáu mechanic còn lại, cộng với fragment rush được và loot thô khi clear. Tier B, investment Low, ~18-24 div/giờ cho build zoom và ~12-16 div/giờ cho build clear chậm (tính đến 2026-06-14). Vốn vào sát không: irradiated tablet roll ngon ~20 ex/cuốn (bản trắng ~5 ex), mỗi cuốn 10 lần dùng, hoàn vốn trong 1-2 map. Lưu ý ngay từ đầu: giá tablet bán đã rớt mạnh khi strat viral, nên income thật thấp hơn nhiều con số creator đo tuần này — chi tiết ở Loot Breakdown.

## Strategy Overview

Cả strategy đứng trên một dòng patch note 0.5.0 mà phần lớn người chơi đọc lướt qua: "Each empty tablet slot now contributes to the amount of random non-tablet spawned league content in the area. This means that if all tablet slots are full, you will only see the league content from the tablets you are using." Cắm đủ 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} thì map chỉ ra Breach, và tablet rớt từ Breach monster trong map đang cắm Breach gần như cạn. Đảo ngược: cắm tablet KHÔNG-phải-league-content, để map tự gieo mechanic ngẫu nhiên, thì mọi Breach/Ritual/Abyss gặp tình cờ đều rớt tablet của nó ở rate đầy đủ.

Irradiated tablet là chìa cho trò này vì base effect của nó là :wiki-link{url="https://www.poe2wiki.net/wiki/Irradiated"} — "Area has +1 to Monster Level", một map mechanic chứ không phải league encounter. Cắm ba cuốn irradiated nghĩa là không cắm cuốn league-content nào, nên generator nội dung ngẫu nhiên vẫn bắn đều: mỗi map ra tối thiểu ba mechanic ngẫu nhiên, và vì mình không cầm tablet của mechanic nào trong số đó, tablet của chúng rớt full rate. Thực đo của community trùng nhau: chạy 3 irradiated nhặt được ~2 tablet/map, có người ra 5-10 cuốn khi map đông mechanic.

Phần làm ra tiền không chỉ là tablet. Tablet trong POE2 được code chung nhóm "waystone" cho mục đích drop, nên mọi mod "increased Quantity of Waystones found in Map" và "Monsters have increased Effectiveness" trên tablet/waystone đều đẩy thẳng số tablet rớt lên — vì vậy irradiated tablet mình mua phải có hai mod đó. Cùng cơ chế ấy buff luôn fragment rớt từ point of interest: :wiki-link{url="https://www.poe2wiki.net/wiki/Breachlord_Sac"} từ Breachlord, :wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Cradle"}/:wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Spark"} từ boss hai Citadel mới, cũng coded như waystone. Vừa rush tới Citadel/anomaly để gom fragment, vừa cày sạch mọi mechanic gặp trên đường để in tablet và ăn loot thô — ba dòng tiền chồng lên nhau.

Cầu tablet nóng vì creator đẩy chiến lược giga-juice, và mặt cung ăn đúng cơn FOMO đó. Nhưng phải tỉnh về giá: tablet không bán bằng div như video tuần này quảng cáo. Live trade 2026-06-14 cho thấy cuốn :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss_Tablet"} roll tốt (base đắt nhất) chỉ ~30-40 ex, :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual_Tablet"} ~10-20 ex, :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} roll tốt chỉ 7-10 ex; cuốn god-roll 4 mod đáng giá nhiều div thì hầu như không có trên chợ (rớt cực hiếm, bán hết ngay). Tablet bán theo volume ex, không phải jackpot div. Vẫn đáng bán nhất là Abyss, Ritual, Breach — ba mechanic người chơi tự cung không nổi; Irradiated, Temple, Delirium thì ai cũng dư nên bán rẻ, còn tablet Expedition không có chợ giao dịch nên bỏ khỏi danh sách bán.

## Setup

### Atlas Passive Tree

Điều kiện cứng đầu tiên: **Eons of Contamination** — node mở "Irradiated Precursor Tablets may now be found", áp dụng cho area Level 70+. Chưa lấy node này thì irradiated tablet không rớt và phải mua hoàn toàn; lấy rồi thì tự cung được một phần input.

Hai node nhân số tablet đặt cạnh nhau trên nhánh tablet chung. **Propagating Secrets** cho "8% increased Quantity of Tablets found for each Tablet affecting Map area" — chạy 3 tablet là +24% quantity tablet, scaling thẳng theo trò mình đang làm. **Specialised Seeker** thêm "Tablets also provide 10% increased Rarity of Items Dropped to Monsters from their mechanic", đẩy chất lượng loot thô từ mỗi mechanic clear. **Curiously Durable Stone** (Lv75+) cho "8% chance to not consume Tablet uses when opening Maps" — cắt thẳng chi phí irradiated vì cứ 12-13 map mới tốn 10 use thay vì đúng 10.

Để bán tablet 4 mod đắt tiền thì cần **Partial Translation** (hoặc **Reverse Transcription**) — "Your Tablets may be upgraded to Rare and have +1 Maximum Modifier". Tablet thường tối đa 2 mechanic mod + 2 general mod; muốn cuốn Abyss "4 additional pits" cộng "pits more effective per closed pit" cộng effectiveness cộng waystone-quantity thì phải Regal lên Rare 4 mod — đó mới là cuốn bán 30-40 div. Không lấy hai node này thì chỉ bán được tablet 2-3 mod giá thấp hơn nhiều.

Ngoài nhánh tablet, fill gần kín subtree của ba mechanic đáng farm (Breach, Abyss, Delirium) vì map travel sẽ liên tục đụng chúng, và mọi node làm encounter dày hơn vừa tăng loot thô vừa tăng số tablet rớt. Ritual thì chỉ cần đủ để clear mob trên altar (mình không hiến tế, không chạy reward), nên không tốn point cho subtree Ritual sâu. Forest Mastery vành ngoài cho "50% increased chance to find Lineage Supports in Forest Areas" là cửa jackpot: :wiki-link{url="https://www.poe2wiki.net/wiki/Rakiata's_Flow"} đang ~15.3k ex (~112 div, vol 632 ngày 2026-06-14), travel qua biome rừng là kẹp xác suất rớt nó không tốn thêm gì.

### Masters of the Atlas

**Jado's Spycraft** là master xương sống. Bản thân keystone Jado cho corrupted waystone "open Maps with 1 additional random Modifier", nên map corrupt 6-8 mod thành 7-9 mod — mỗi mod thừa là thêm effectiveness và thêm waystone-drop, tức thêm tablet. Bốn node Jado nên lấy:

- **Long Days** (Tier 3): "20% more chance of Random Extra Content" — đẩy thẳng số mechanic ngẫu nhiên spawn mỗi map, nguồn tablet chính của trò này.
- **Partial Translations** (Tier 3): "20% chance for double effect of Explicit Modifiers on Tablets" — cuốn tablet mình tự roll có cơ hội nhân đôi effect, bán giá cao hơn hẳn.
- **Unforeseen Threats** (Tier 2): "5% chance on completing Maps for a nearby Anomaly Map to be revealed" — lộ Anomaly map, nguồn Lineage Support như Rakiata's Flow, vừa làm công cụ scout hướng travel.
- **Ancient Activations** (Tier 4): "Powerful Map Bosses have 5% chance to add Ancient Modifiers to a nearby Map" — thêm lớp scout và buff map kế tiếp.

Khi rẽ sang đập hai Citadel mới hoặc đi pinnacle thật thì cân nhắc **Untold Histories** (Tier 4): 35% chance tìm Lineage cộng pinnacle 50% chance rớt Lineage, đổi lại pinnacle nhận ít hơn 35% damage. Build clear chậm thì đừng bật vì kéo phase boss dài thêm.

### Tablets & Map Device

Map travel cắm **3 Irradiated Tablet**, mỗi cuốn chỉ cần đúng hai mod: **"increased Quantity of Waystones found in Map"** (of the Cartographer, 30-50%) và **"Monsters have increased Effectiveness"** (Challenger's, 7-11%). Hai mod đó coded như waystone nên đẩy thẳng số tablet rớt và độ dày loot thô. City biome map mở slot thứ tư qua **Industrial Improvements** — đủ chỗ thì cắm cuốn irradiated thứ tư. Irradiated tablet ~15-20 ex/cuốn (2026-06-14), 10 use mỗi cuốn, nên cost thật ~5 ex/map trước khi tính node Curiously Durable Stone.

Đừng cắm tablet của mechanic mình muốn nhặt. Cắm Breach tablet là tự giết nguồn Breach tablet — đó là cái bẫy phần lớn người mới mắc. Cũng đừng cắm Ritual/Abyss/Expedition tablet. Để cả ba slot là irradiated, map tự gieo mechanic ngẫu nhiên, mình thu tablet của chúng.

**Pro Tip:** map corrupt 6-8 mod là input lý tưởng. Qua keystone Jado nó lên 7-9 mod, mở đủ 3 slot tablet (6+ mod = 3 slot) và cho thêm effectiveness/waystone-drop từ mỗi mod thừa. Roll né mod giảm tốc di chuyển hoặc đe doạ build — strategy này cày sạch map nên không né được damage map mod như pure boss-rush.

### Waystone & Map Choice

Ưu tiên **biome rừng** cho Forest Mastery (50% Lineage) và **biome mountain** mà community báo cho tỉ lệ tablet tốt. Layout chọn loại một đường thẳng tới boss/point of interest (Vaal Foundry, Slick, Backwash) để travel nhanh; map mê cung đốt thời gian mà không thêm gì. City biome map đáng dừng vì mở slot tablet thứ tư.

Waystone travel roll lên 6 mod để mở cả 3 slot tablet, ưu tiên thêm **"increased Quantity of Waystones"** trên chính waystone — cùng nhóm coded waystone, cộng dồn vào số tablet. Hai Citadel mới của 0.5 thì max-juice waystone T15-T16; Citadel thường tier nào cũng chạy nhanh trong lúc đi qua để nhả waystone Citadel cao cho lần sau.

### Build Requirements

Đây là strat **clear-speed-bound**, khác hẳn pure boss-rush. Tiền đến từ việc cày sạch mọi mechanic gặp trên đường, nên DPS clear và tốc độ di chuyển quyết định maps/giờ và số tablet/giờ trực tiếp:

- **Clear speed**: ngưỡng thật của strat. Build zoom (Lightning Spear, Twister, Demon Form Witch) quét Breach/Abyss/Deli trong vài giây là lý tưởng — đây là build ăn 38-45 div/giờ. Mỗi mechanic clear chậm là tablet ít đi và loot thô rơi rụng.
- **Movement speed**: boots ≥30% MS, giữ Quicksilver/Onslaught liên tục. Travel map đi nhanh thì số map/giờ lên đều.
- **Boss DPS**: đủ xé boss hai Citadel mới (~60-90 giây) và Breachlord ở Twisted Domain nếu xé Breachstone. Không cần DPS pinnacle khủng vì đây không phải strat đập pinnacle.
- **EHP**: cày map đông mechanic juiced (Breach density, Abyss rare, Deli fog) nguy hiểm hơn rush boss đơn lẻ. Cần ≥8-10k EHP để đứng trong Breach hand hoặc Deli fog mà không bốc hơi.

Build Spirit Walker companion pack của mình (ThaoCamVienSaiGon, Lv95, Zekoa carry) chạy được nhưng nằm khúc thấp của expected income: companion clear một đám Breach đông chậm hơn build zoom rõ rệt, nên ngồi ~20-28 div/giờ thay vì 40+. Strat này thưởng build zoom gấp đôi, đúng chỗ companion pack yếu nhất.

## Gameplay

Vào atlas, cắm 3 irradiated tablet (4 nếu city map) vào Map Device cùng waystone corrupt 6-8 mod, Jado's Spycraft set sẵn bốn node trên. Travel theo một hướng cố định ra xa, nhắm tới point of interest gần nhất — Citadel mới, Anomaly map, hoặc Tower.

Trong mỗi map: lao về hướng boss/point of interest, nhưng **clear mọi mechanic ngẫu nhiên nằm trên đường**. Đây là chỗ tiền ra. Mỗi mechanic có một quy tắc thu tablet riêng:

- **Breach**: phải hoàn thành Breach (mở hand, để nó sụp hết) thì mới rớt Breach tablet — trung bình ~1 tablet/Breach. Tiện thể gom :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Splinter"}.
- **Ritual**: chỉ clear mob quanh altar, **đừng chạy reward**. Mob bị giết quanh altar là thứ rớt Ritual tablet; reward không liên quan tới tablet, bỏ qua tiết kiệm thời gian.
- **Abyss**: chạy hết Abyss, mở pit. Gặp rare có mod Amanamu (thả đám khói đen, miễn damage trừ khi đứng trong khói) thì dùng "pull-out tech" — kéo nó ra khỏi khói rồi giết, GGG xác nhận nó tăng mạnh tỉ lệ rớt Omen of Light. Một map đông Abyss in 5-10 tablet là chuyện thường.
- **Temple (Vaal Beacon)**: clear altar rồi mở chest — chỉ chest mới nhả Temple tablet.
- **Delirium**: chạy hết fog, kết thúc Deli ở cuối; phần lớn mob Deli rớt Deli tablet. Deli còn cho currency lỏng (~9 div/6h theo nhịp đo).
- **Expedition**: remnant ngon (rớt div hay greater chaos) thì làm; thả explosive lên cờ đỏ to để săn :wiki-link{url="https://www.poe2wiki.net/wiki/Expedition_Logbook"} — logbook đang >1 div/cuốn.

Tới point of interest thì xử lý như loot đậm: boss hai Citadel mới nhả Origin Cradle/Spark (gom 1 Cradle + 1 Spark mở Arbiter of Divinity, hoặc bán thẳng), Anomaly map nhả Lineage Support. Xé Breachstone trên một Breach bất kỳ để vào Twisted Domain giết Xesht lấy Breachlord Sac nếu đang cầm Breachstone sẵn. Xong map thì đi tiếp theo hướng cũ, không quay đầu.

Cuối session, gom tablet ra thành lô theo mechanic, roll/Regal những cuốn base ngon lên Rare 4 mod để bán giá cao, rồi list. Tablet Breach/Ritual/Abyss đắt nhất; Irradiated/Temple/Deli bán rẻ theo bulk.

## Loot Breakdown & Economic Analysis

Giá tablet live trade 2026-06-14, fragment poe2scout cùng ngày, 1 Divine = 136 Exalted Orb. Bốn dòng tiền chồng lên nhau, nhưng tablet KHÔNG còn là dòng to nhất sau khi giá rớt:

**Dòng 1 — tablet bán lại:** 3 irradiated → ~2 tablet/map trung bình, có map ra 5-10 khi đông mechanic. Giá bán thực tế (good-roll, status securable, 2026-06-14): Abyss ~30-40 ex (base đắt nhất), Ritual ~10-20 ex, Delirium/Overseer ~8-15 ex, Breach chỉ 7-10 ex. Cuốn god-roll 4 mod đáng nhiều div mà video nhắc thì cực hiếm: search triple-stack mod cho ra 0 listing, tức rớt vài nghìn cuốn mới ra một cây bán hết ngay. Tính trung bình ~15-20 ex/tablet qua cả lô, ~2 tablet/map → ~0.25-0.3 div/map → **~4-5 div/giờ** ở 15 map/giờ. Cost đối ứng: irradiated roll ngon ~20 ex × 3, chia 10 use ≈ ~6 ex/map. Tablet Expedition bỏ khỏi tính toán vì không có chợ.

**Dòng 2 — fragment từ point of interest (dòng to nhất):** rush Citadel mới và Breachstone trên đường:
- Breachlord Sac: 649 ex (~4.8 div), vol listed ~1.350, +32% 7d.
- Origin Cradle: ~433 ex (~3.2 div), +48% 7d.
- Origin Spark: 276 ex (~2.0 div), +30% 7d.
- Head of the King: 167 ex (~1.2 div) nếu rẽ qua Crux of Nothingness.
- Breachstone (input nếu xé Twisted Domain): 52-57 ex (~0.4 div), +54% 7d (đang leo).

Đo trên session 6 giờ ra ~47 div fragment, tức **~8 div/giờ** dòng này — đây mới là phần kéo income chính, không phải tablet.

**Dòng 3 — loot thô từ clear mechanic:** raw currency (Exalt, Divine, Greater Chaos, Perfect Exalt, omen), Deli liquid, Simulacrum splinter đủ stack mở Simulacrum, Expedition logbook (>1 div/cuốn). Đo ~25 div raw + 9 div Deli liquid + 9 div logbook trên 6 giờ → **~7 div/giờ**. Specialised Seeker (10% rarity/mechanic) và effectiveness từ tablet đẩy dòng này lên, và nó scale thẳng theo clear speed.

**Dòng 4 — Lineage jackpot (variance, đừng tính vào baseline):** Forest Mastery + Untold Histories kẹp xác suất :wiki-link{url="https://www.poe2wiki.net/wiki/Rakiata's_Flow"} (~112 div, vol 632 ngày 2026-06-14) và pool Lineage cao cấp khác. Drop cực hiếm — "một cuốn là may" — nhưng một cú là +112 div vào session. Đây là phần thổi phồng con số video: hai Rakiata trong một run = +225 div, một mình nó đã là ~37 div/giờ, không lặp lại được.

Math chain profit/giờ:

```
expected_profit_per_hour =
  fragment_value_per_hour          (~8 div/h)   ← dòng 2, to nhất
  + raw_clear_value_per_hour        (~7 div/h)   ← dòng 3
  + tablet_resale_per_hour          (~4-5 div/h) ← dòng 1, đã crash
  + lineage_jackpot_EV              (variance)    ← dòng 4, upside thưa
  − irradiated_cost (~6 ex/map × maps/h ~ <1 div/h)
  − waystone_roll_cost
```

**Tổng kỳ vọng (số thực sau khi tablet crash):**
- Build zoom (Lightning Spear / Twister / Demon Form): ~8 + 7 + 4-5 ≈ **~18-24 div/giờ steady-state**, cộng upside Lineage thưa thớt. Con số 45 div/giờ của video đến từ hai Rakiata may mắn (+37 div/giờ) cộng giá tablet trước khi rớt — không phải baseline lặp được.
- **Build companion pack Spirit Walker (build hiện tại, Lv95, Zekoa carry):** clear mechanic đông chậm hơn build zoom rõ rệt nên ~**12-16 div/giờ steady-state**. Tablet/giờ và loot thô/giờ rớt theo clear speed; chỉ fragment dòng 2 ít phụ thuộc clear nên đỡ income.

Mặt cung vẫn lãi vì cost sát không (irradiated tự cung qua Eons of Contamination + mua bù ~20 ex), nhưng đừng kỳ vọng con số div/giờ của creator: phần lớn nó là Lineage luck cộng giá tablet đã không còn.

## Failure Modes

Rủi ro lớn nhất đã thành hiện thực: **giá tablet bán rớt mạnh ngay khi strat viral**. Video creator (13/06) báo tablet bán 16-40 div; live trade chỉ một ngày sau (14/06) cho thấy cuốn Breach roll tốt chỉ 7-10 ex, Abyss cao nhất cũng ~30-40 ex, và combo god-roll 4 mod trả 0 listing trên chợ. Cộng đồng cảnh báo thẳng từ đầu: "people are blindly following 20 div tablet investment strategies because their favourite YouTuber told them to — that's the whole reason they're so expensive; if you jump on the bandwagon when things cost that much then you're most likely too late." Mặt cung vẫn an toàn hơn mặt cầu (bán shovel rẻ vẫn lãi vì cost gần không), nhưng dòng income từ tablet đã teo về ~4-5 div/giờ chứ không phải trụ cột. Đừng vào strat này vì con số div/giờ của video.

**Market saturation theo loại tablet**: Irradiated, Temple, Delirium tablet ai cũng dư nên gần như không bán được giá — đừng tính chúng vào revenue, chỉ Breach/Ritual/Abyss mới là hàng bán. Nếu meta dịch sang chỉ vài mechanic được juice thì cầu cho các tablet còn lại sụp, dòng 1 mỏng đi nhiều.

**Build floor (clear speed)**: điểm chí mạng của companion pack. Strat ăn tiền bằng clear sạch mechanic, không phải rush boss. Build dưới ngưỡng clear zoom mất ~40% income dòng 1 và dòng 3 so với paper math. Companion pack Spirit Walker ngồi 12-16 div/giờ vì lẽ đó; nếu Zekoa chưa upgrade theo roadmap thì còn thấp hơn. Build clear chậm nên cân nhắc strat boss-centric thay vì clear-centric.

**Giá trị tablet nằm ở roll hiếm, không phải số lượng**: "the problem with tablets isn't dropping them, it's rolling good mods for endgame farms, often requiring x2 low weight mechanic mods plus another low rate general mod." Tablet 4 mod đắt cần Partial Translation/Reverse Transcription để Regal lên Rare, rồi vẫn phải trúng combo mod hiếm. Farm 100 tablet mà phần lớn là 2-mod junk thì revenue dòng 1 thấp hơn nhiều con số "100+ tablet" nghe có vẻ.

**Patch nerf risk**: GGG hoàn toàn có thể chỉnh cơ chế empty-slot/inverse-drop nếu nó lệch khỏi ý đồ — một dev comment trong cộng đồng nói thẳng "they are very aware that the way some mechanics work will have to be adjusted down the line." Nếu tablet rớt đều bất kể slot, hoặc tablet quantity bị tách khỏi nhóm waystone-coded, thì engine của strat gãy. Eons of Contamination cũng là single point: nerf node đó là input irradiated đắt lên.

**Time investment**: setup gần 0 div (vài irradiated tablet + waystone corrupt rẻ), break-even từ map đầu. Đổi lại đuôi sale tốn công — roll Rare tablet, phân lô, list từng loại. Ai ghét trade nhiều món thì income thực thấp hơn con số gross vì tablet junk tốn slot mà bán chậm.

## Profit Optimization

Min-max ba hướng:

Thứ nhất, **Regal tablet base ngon lên Rare 4 mod trước khi bán**. Cuốn Abyss base có "4 additional pits" + "pits more effective per closed pit" mà Regal thêm được effectiveness và waystone-quantity thành 4 mod là cuốn 30-40 div thay vì cuốn 2-mod vài div. Cần Partial Translation + Reverse Transcription mở trần mod; coi đây là bước bắt buộc nếu muốn ăn đuôi giá cao chứ không chỉ bán bulk junk.

Thứ hai, **route qua city biome map để cắm slot tablet thứ tư**. Industrial Improvements + 4 irradiated tablet trên city map đẩy số mechanic ngẫu nhiên lên, tablet/map theo đó tăng. Xen city map vào đường travel mỗi khi gặp.

Thứ ba, **chồng layer với strategy clear khác**. Nhịp clear sạch mechanic này trùng hoàn toàn với [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm) — node Grand Mirror gieo từ subtree Delirium nhân đôi effect mọi tablet đang cắm ("Tablets have double Effect in areas with a Grand Mirror"), tức irradiated tablet cũng nhân đôi, mechanic ngẫu nhiên dày gấp đôi, tablet rớt nhiều hơn. Hai strat nuôi nhau không xung đột atlas point.

## Alternatives & Variations

So với [Fragment Supply Farming](/farming/0-5-fragment-supply-farm): cùng triết lý mặt cung (farm-bán cho juicer) nhưng khác hàng. Fragment supply bán Breachstone/Origin cho boss-rusher; tablet supply bán tablet cho giga-juicer. Hai cái chạy chồng được vì cùng là clear-and-rush — đường travel của tablet farm tự gom fragment để bán, đường farm của fragment supply tự gom tablet. Chọn nghiêng bên nào tuỳ cầu nào nóng hơn: cầu tablet cao thì nghiêng tablet, cầu fragment cao (boss-rush viral) thì nghiêng fragment.

So với [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): đó là variant juice-một-mechanic; tablet supply là variant farm-mọi-mechanic-bán-shovel. Build clear khoẻ thì chạy Withered Willow để ăn Deli sâu; build muốn dòng tiền đều ít rủi ro thì tablet supply.

Variation chính là **tự dùng thay vì bán**: khi đã có kho tablet Breach/Ritual/Abyss roll tốt, ngừng bán mà tự giga-juice một mechanic — chính là trò mà mình đang bán shovel cho người khác. Hợp khi giá tablet bán xuống thấp đến mức tự dùng ăn hơn, hoặc khi build đã đủ khoẻ đứng phòng juiced nặng.

## Quick Reference Card

**Setup cost / map travel:** waystone corrupt 6-8 mod + 3 irradiated tablet (chia 10 use) ≈ 6-8 ex
**Income lớn nhất:** fragment rush được (~8 div/giờ), không phải tablet
**Giá tablet bán (2026-06-14):** Abyss ~30-40 ex · Ritual ~10-20 ex · Breach 7-10 ex (đã crash, KHÔNG bán bằng div)
**Profit / fragment:** Breachlord Sac ~4.8 div · Origin Cradle ~3.2 div · Origin Spark ~2.0 div (2026-06-14)
**Jackpot:** Rakiata's Flow ~112 div (Forest biome, cực hiếm)
**Time / map travel:** ~3-5 phút (clear sạch mechanic, không chỉ rush boss)
**Waystone:** corrupt 6 mod cho map travel (Jado đẩy lên 7-9 mod, mở 3 slot); T15-T16 cho Citadel mới
**Atlas key nodes:** Eons of Contamination (mở irradiated) + Propagating Secrets + Specialised Seeker + Partial Translation/Reverse Transcription + Curiously Durable Stone
**Masters of the Atlas:** Jado's Spycraft — Long Days + Partial Translations + Unforeseen Threats + Ancient Activations
**Tablets:** 3-4 Irradiated Tablet (waystone-quantity + effectiveness), KHÔNG cắm tablet của mechanic muốn nhặt; tablet Expedition không có chợ
**Expected div/h (build zoom):** ~18-24 steady, upside khi trúng Lineage
**Expected div/h (companion pack Spirit Walker):** ~12-16 steady

## Changelog

### 2026-06-14
- Initial draft. Seed từ video XTheFarmerX 13/06/2026 (irradiated tablet supply farming). Mechanic verify từ wiki mirror (empty-slot rule patch note 0.5.0, Irradiated = +1 monster level) + poedb atlas node (Eons of Contamination, Propagating Secrets, Jado Long Days/Partial Translations). Giá fragment + Lineage poe2scout 2026-06-14, community sentiment Reddit r/PathOfExile2 2026-06-13/14. Thay thế doc boss-rush-fragment-farm cũ.
- Sửa thẳng economics của video bằng live trade 2026-06-14: claim "tablet bán 16-40 div" KHÔNG đúng theo chợ (Breach roll tốt 7-10 ex, Abyss 30-40 ex, god-roll 4 mod 0 listing). Hạ tier A→B, income 45→18-24 div/giờ (zoom), tách rõ Lineage jackpot là variance thổi phồng con số video. Tablet Expedition bỏ vì không giao dịch.

## Relationships

- **synergizes_with** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): Grand Mirror gieo từ subtree Delirium nhân đôi effect mọi tablet đang cắm, gồm cả irradiated — mechanic ngẫu nhiên dày gấp đôi, tablet rớt nhiều hơn. Hai strat clear-and-rush nuôi nhau.
- **synergizes_with** [Fragment Supply Farming](/farming/0-5-fragment-supply-farm): cùng mặt cung farm-bán cho juicer nhưng khác hàng (tablet vs fragment); đường travel của bên này tự gom hàng của bên kia.
- **synergizes_with** [Grand Expedition Farming](/farming/0-5-grand-expedition-farming): vòng Aldur's Saga + Expedition remnant ăn proc khi clear map travel, không xung đột atlas point.
- **related** [Remnant và Runeforging Profit Loop](/farming/0-5-remnant-runeforging-profit-loop): Remnant nhặt trên đường clear map travel làm overlay không xung đột.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain): cơ chế tablet slot theo số mod waystone và Powerful Map Boss rớt waystone, nền cho setup map device.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients): bối cảnh 0.5 endgame overhaul, Atlas tree mở rộng, tablet rework empty-slot và hai Citadel mới.
