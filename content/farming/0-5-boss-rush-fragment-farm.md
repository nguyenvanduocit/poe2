---
template: templates/farming-template.md
document_type: farming-strategy
title: Boss Rush Fragment Farming
status: draft
created: '2026-06-10'
updated: '2026-06-11'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Boss Rush Fragment Farming

Chiến lược farm fragment pinnacle bằng cách KHÔNG kill rác: chỉ rush boss của mọi map gặp trên đường travel atlas, rồi mở fragment mua sẵn trong inventory để xé Breachlord, King in the Mists và hai Citadel mới. Ba nguồn fragment đắt nhất 0.5 hội tụ ở đây. Tier A, investment Low, kỳ vọng ~13-16 div/giờ cho build companion clear vừa, ~18-23 div/giờ cho build zoom (tính đến 2026-06-10). Chiến lược này không thay thế farm chính, nó là lớp kẹp đè lên việc đẩy atlas hoặc juicing Citadel sẵn có. Vốn vào nhẹ vì :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"} chỉ 68 ex/cuốn và :wiki-link{url="https://www.poe2wiki.net/wiki/An_Audience_with_the_King"} là drop độc quyền từ Ritual mechanic, chạy Ritual song song là vừa tự gom Audience vừa farm sàn map.

## Strategy Overview

Ba cánh cửa fragment kéo profit, mỗi cửa đứng độc lập nên không phụ thuộc RNG drop:

Cửa thứ nhất là **Twisted Domain** mở bằng Breachstone trên Breach gặp trong map. Giết Xesht the Awakened nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Breachlord_Sac"} — fragment mở pinnacle Breachlord cấp cao. Snapshot 2026-06-10 (1 Divine = 131 ex): Breachstone 68.5 ex (~0.52 div), Breachlord Sac 633 ex (~4.83 div). Margin gross mỗi lần bẻ Stone ~4.3 div trước drop fee. Volume 24h của Sac 4.000 cuốn, không sợ ế.

Cửa thứ hai là **Crux of Nothingness** mở bằng An Audience with the King. Boss King in the Mists nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Head_of_the_King"}, key Rite of the Nameless. Head of the King 177 ex (~1.35 div) ngày 2026-06-10, vol 24h gần 11.000 đầu, thanh khoản dày hơn cả bột phẩm chính. An Audience là **drop độc quyền từ Ritual mechanic** (nguyên văn poedb: "An Audience with the King is an item that is an exclusive drop from the Ritual mechanic. This item allows you to access the Crux of Nothingness via the Realmgate"), chính xác là sacrifice tribute thừa trong reward Ritual quay ra Audience theo tỉ lệ tablet roll + 2 atlas node Ritual progress đẩy lên. Vì không list trên chợ chính (poe2scout không catalog), cost thực tế là **opportunity cost của thời gian Ritual** thay vì mua orb. Người chạy [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) song song thì Audience tự gom thành stack đều, không tốn slot juice. Thỉnh thoảng King còn nhả idol hoặc unique jewel hiếm tầm 10-15 div, mình mới thấy 1-2 cú trong vài giờ, tỉ lệ chưa đo đủ.

Cửa thứ ba là **hai map Citadel mới của 0.5** (release notes nguyên văn: "Added two new Citadel maps with two new bosses that drop keys to the new Pinnacle Boss"). Boss của hai map đó nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Cradle"} (429 ex ~3.27 div) hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Spark"} (299 ex ~2.28 div) — combine cả hai trong Tower of Origins để mở Arbiter of Divinity. Citadel thường (Copper/Stone/Iron) mình chạy luôn trong cùng vòng đi atlas, mỗi cái nhả thêm waystone Citadel cao tier để sustain.

Cái biến nó thành farm chứ không phải "đi gặp gì kill nấy" là **quy tắc travel**: lao thẳng từ Fortress ra xa theo một hướng cố định, mọi map trên đường chỉ chạm boss rồi đi, không bao giờ quay lại map cũ. Mỗi map quái rác ăn thời gian, mỗi map travelled-through nhả XP đủ giữ level. Phần đáng tiền nằm trong fragment đã đem theo, không nằm trong drop rác của map thường.

## Setup

### Atlas Passive Tree

Chiến lược này gần như không tốn point atlas: toàn bộ income đến từ fragment đem theo và encounter mà tablet bảo đảm (xem [Tablets & Map Device](#tablets--map-device)), không phải node mechanic trên cây. Vài node nên ưu tiên nếu chưa có:

**Forest Mastery** ở vành ngoài cho option "50% increased chance to find Lineage Supports in Forest Areas". Pool đắt nhất league gồm: Vorana's Siege 3.065 ex (~23.4 div), Olroth's Conviction 2.445 ex (~18.7 div). Đi qua biome rừng là kẹp xác suất rớt Lineage không tốn thêm gì.

Delirium subtree quanh hub **Withered Willow** giữ cho mình mạng lưới Grand Mirror tự lan. Mỗi node Delirium đề mod "5% increased chance for a Grand Mirror to appear on a nearby map"; nguyên văn "Defeating Map Bosses has a chance to summon a Grand Mirror on a nearby map." Grand Mirror khi đó nhân đôi effect mọi tablet đang cắm: "Tablets have double Effect in areas with a Grand Mirror". Vừa rush boss vừa gieo Mirror khắp atlas, lượt sau đi qua khu đó tablet nhảy effect gấp đôi gần như miễn phí.

### Masters of the Atlas

Master đổi tự do trước mỗi map nên cấu hình theo loại fragment sắp đập:

Khi rush map thường để gieo Mirror và đẩy Citadel sẵn có, dùng **Doryani's Science**. Hai node bắt buộc:

- **Hidden Patterns** (Tier 3): nguyên văn: "10% chance when completing a Map to make nearby Maps accessible." Một phần mười map rỗng đập xong tự mở thêm map liền kề. Travel rỗng vốn không kill, mở map miễn phí là tự đẩy chuỗi atlas dài ra mà không tốn waystone.
- **Head of the Snake** (Tier 4): nguyên văn: "Pinnacle Bosses have 25% chance to drop an additional Unique item / Pinnacle Bosses have a single Revive / Powerful Map Bosses have 5% chance when defeated to reveal a nearby Citadel." Cộng 5% chance lộ Citadel mỗi lần giết Powerful Map Boss — nguồn Citadel miễn phí chính. Đổi lại Pinnacle ăn thêm một revive, không nên lấy nếu chưa quen pinnacle.

Khi đập Breach mở Twisted Domain hoặc đi pinnacle, swap sang **Jado's Spycraft** lấy:

- **Untold Histories** (Tier 4): nguyên văn: "35% increased chance to find Lineage Supports / Pinnacle Bosses take 35% less Damage / Pinnacle Bosses have an 50% increased chance to drop Lineage Supports." Cộng 50% chance Pinnacle nhả Lineage cộng dồn với 35% global tìm Lineage — pool ưu thế cho Breachlord và Xesht. Nhưng phải đọc kỹ dòng giữa: **Pinnacle Bosses take 35% less Damage**. Build Spirit Walker companion pack của mình boss damage không cao, Zekoa carry chính đập Xesht trong ~30-40 giây ở mức bình thường; bật Untold Histories sẽ kéo thời gian boss lên ~50-60 giây. Lợi vẫn dương nhờ giá Lineage cao, nhưng phải biết trade-off này — nếu build dưới 5M boss DPS thì để Hilda hoặc swap về Hidden Patterns sẽ lãi hơn.

Slot 3-4 của Jado lấy tự do. Keen Appraisal cho 50% Exceptional Items hoặc Ancient Activations cho 5% chance Powerful Boss thêm Ancient Modifier vào nearby map đều ăn được.

### Tablets & Map Device

Tablet đi vào **Map Device cùng waystone** khi mở map, mỗi cuốn 10 lần dùng nên cost thật mỗi map là giá tablet chia 10. Số slot ăn theo số mod trên waystone, nguyên văn wiki: "1 with 1-2 waystone modifiers, 2 with 3-5 waystone modifiers, and 3 with 6+ waystone modifiers" — muốn đủ 3 slot thì waystone travel phải roll 6 mod (alch rồi exalt, vài ex mỗi tấm), chỉ cần né mod đe doạ build hoặc giảm tốc di chuyển. Chỗ dễ setup sai nhất của chiến lược nằm ngay đây: hai cánh income lớn nhất đều bị gate bởi encounter trong map — Breach cho Breachstone, Ritual altar cho Audience — mà encounter tự nhiên là RNG. Tablet biến RNG đó thành guarantee, nên map travel "rỗng" chỉ rỗng phần juice loot, phần encounter vẫn phải cắm đủ.

**Map travel cắm 3 tablet**, xếp theo giá trị mỗi slot:

- **:wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Precursor_Tablet"}** — base "Adds an Otherworldy Breach to a Map", slot đáng tiền nhất cả chiến lược. Không tablet thì map chứa 0-2 Breach tuỳ atlas tree; có tablet thì map nào cũng chắc chắn ít nhất một Breach để xé Breachstone, mỗi cú xé ~4.3 div net. Encounter từ tablet cộng thêm chứ không đè encounter tự nhiên (wiki: "The encounter mechanics added by tablets will not override any random encounters"), nên map hên vẫn ra 2-3 Breach. Mod trên tablet không quan trọng — base effect làm hết việc, mua bản thường/magic rẻ nhất theo bulk. Bản unique :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} 9 ex (poe2scout 2026-06-11, 5 uses ≈ 1.8 ex/map) cũng dùng được cho đúng vai guarantee này: mod -pack size của nó vô hại vì mình không kill rác, còn "+120 additional seconds to collapse" cho thêm thời gian xé Stone thong thả.
- **:wiki-link{url="https://www.poe2wiki.net/wiki/Ritual_Precursor_Tablet"}** — base "Adds Ritual Altars to a Map". Ritual tự nhiên mọc quanh hub Caer Tarth, mà quy tắc travel lại bắt đi xa Fortress theo một hướng cố định, nên càng đi map có altar tự nhiên càng thưa — trong khi mỗi cuốn Audience cần ~6-8 altar. Tablet giữ nguồn altar đều trên mọi map. Mua bản có mod thì ưu tiên **of Sacrifice** ("Monsters Sacrificed at Ritual Altars in Map grant 18-30% increased Tribute"): progress Audience tính trên tribute hiến tế, tribute dày hơn là cần ít altar hơn cho mỗi cuốn. Suffix pool đầy đủ của Ritual Tablet mình viết ở [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless).
- **Slot thứ ba đổi theo giai đoạn.** Tuần đầu cắm **Delirium tablet** rẻ (~10 ex tablet thường ≈ 1 ex/map) gieo Grand Mirror — map travel không cần juice, tablet chỉ kích cơ chế summon Mirror đặt mầm cho lượt sau như đã nói ở phần atlas tree. Khi mạng Mirror đã phủ vùng farm, swap sang **:wiki-link{url="https://www.poe2wiki.net/wiki/Overseer_Precursor_Tablet"}** — base "Empowers the Map Boss of a Map", biến boss travel map thành Powerful Map Boss: ăn thẳng vào Head of the Snake (5% reveal Citadel mỗi kill) và giết Powerful boss đảm bảo rớt waystone cao hơn đúng 1 tier, tức vừa hunt Citadel vừa sustain waystone bằng đúng con boss đằng nào cũng phải giết — nền powerful-boss này mình viết kỹ ở [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain). Đổi lại boss empowered trâu hơn, build clear chậm cân nhắc giữ Delirium. Bản unique :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} 4 ex (poe2scout 2026-06-11, 5 uses) cho thêm "Map Bosses have 1 additional Modifier" — boss thêm mod là thêm loot, giá gần như cho không.

Thiếu slot thì cắt từ dưới lên: waystone alch 4 mod mở 2 slot → giữ Breach + Ritual; magic 2 mod còn 1 slot → giữ mỗi Breach. Đừng chạy travel map trắng tablet — tiết kiệm vài ex để tự đóng hai cánh income lớn nhất. Giá tablet thường (Breach/Ritual/Overseer) poe2scout không track, re-check trade2 trước session; mốc kiểm nhanh: kể cả lấp slot bằng unique kể trên thì cả bộ 3 slot vẫn ~3-4 ex/map.

**Hall (Citadel mới + Citadel thường)**: waystone roll "+95-105% increased Waystone drop chance" để cộng cơ hội map boss nhả thêm Origin Cradle hay Origin Spark đôi, kèm 3 **Irradiated tablet** roll ~40% increased Quantity of Waystones (~10 ex/cái). Map đáng juice nặng duy nhất. Input ~30-40 ex tablet đổi lấy xác suất nhả fragment đôi 400-800 ex.

**Crux of Nothingness (King in the Mists)**: mở bằng An Audience tại The Realmgate — không waystone, không tablet. Mục tiêu là rush boss lấy Head, không gom loot map.

**Twisted Domain (Breachstone)**: tablet không áp dụng vì Twisted Domain là area pinnacle riêng. Chỉ cần xé Breachstone trên một :wiki-link{url="https://www.poe2wiki.net/wiki/Breach"} bất kỳ trong map đang chạy.

### Waystone & Map Choice

Map travel ưu tiên **biome rừng** vì có node Forest Mastery cho 50% chance tìm Lineage Support. Layout map thường chọn loại có một đường thẳng tới boss (Vaal Foundry, Slick, Backwash); map mê cung như Decay hay Mire đốt thời gian travel mà không thêm gì.

Hai Citadel mới của 0.5 (release note 0.5.0: "Added two new Citadel maps") cần waystone T15-T16 max-juice. Citadel thường tier nào cũng được, mục tiêu chính là drop key waystone cho lần sau.

Crux của Nothingness mở bằng An Audience with the King — không phải waystone — và mở từ The Realmgate. Vào trong là encounter pinnacle, không có map thường bao quanh.

### Build Requirements

Strategy này hợp build "đi nhanh, giết boss đủ", không cần clear sạch. Ngưỡng thật:

- **Movement speed**: ưu tiên hơn DPS. Boots ≥30% MS, flask Quicksilver hoặc Onslaught buff giữ liên tục. Map rỗng đi nhanh, maps/h tăng đều theo MS.
- **Boss DPS**: đủ xé Xesht the Awakened trong ~30-60 giây và King trong ~45-90 giây. Build companion pack của mình (ThaoCamVienSaiGon, Spirit Walker Lv94, Zekoa carry) làm được, Tame Beast carry damage đủ cho cả hai. Boss Halls của Citadel mới đập lâu hơn Breachlord, ~60-90 giây.
- **EHP**: King in the Mists có phase fog one-shot nếu đứng giữa trung tâm trong giây thứ 3-4 của animation cast lớn, cần ≥10k EHP và biết phase. Mình ở 12.7k EHP với Forgotten Warden, đứng được nhưng không thoải mái.
- **Atlas progression**: phải đã unlock Crux of Nothingness (questline Ritual) và đã thấy Citadel mới của 0.5 trên atlas. chưa qua Olroth + chưa thấy Citadel mới thì cửa Origin Cradle/Spark khoá.

Build Spirit Walker companion pack chạy được nhưng nằm khúc thấp của expected income vì clear chậm và Untold Histories nerf 35% boss damage làm phase Xesht dài thêm. Build zoom (Lightning Spear, Twister, Demon Form Witch) đẩy 20-23 div/h dễ hơn.

## Gameplay

Vào atlas, mở inventory đặt sẵn: **vài chục Breachstone**, vài cuốn Origin Cradle/Spark đã gom được, ba chồng tablet travel (Breach + Ritual + Delirium hoặc Overseer), và Aldur's Saga nếu đang kích vòng ngoài. An Audience with the King không stock từ chợ được — nó tích dần qua tribute sacrifice của Ritual altar gặp trên đường rush. Travel đi theo một hướng cố định ra xa Fortress; quay đầu là phí vì map đã đi cộng node Hidden Patterns mở thêm map miễn phí về hướng đi tiếp.

Map travel: vào, lao thẳng tới map boss, đánh boss xong rời ngay. Breach tablet bảo đảm mỗi map ít nhất một Breach — xé Breachstone lên Breach hand mở Twisted Domain, vào giết Xesht the Awakened lấy Breachlord Sac rồi quay lại map gốc đi tiếp; atlas tree có thể cho thêm 1-2 Breach tự nhiên nữa. **Exception đáng chạm là Ritual altar** (tự nhiên hoặc từ Ritual tablet đã cắm): 30-60 giây quét quái trong vòng đủ tribute, không tiêu reward mà sacrifice nguyên cục tribute thừa — nguyên văn poedb Ritual: "Any tribute not spent on rewards can now be sacrificed to gain an Audience with the King". Mỗi altar đẩy progress bar Audience lên ~10-15%, một map 2-3 altar gom ~30-45% progress; full Audience cần ~6-8 altar tích luỹ, atlas notable **Prayer and Pledge** ("15% increased progress towards an Audience With The King when offering Tribute") và **Ongoing Chants** ("10% of Tribute spent also provides progress towards an Audience With The King") rút ngưỡng đó xuống. Strongbox và Expedition remnant vẫn skip. Mục tiêu vẫn là chạm boss, gieo Grand Mirror nếu có Delirium tablet, đi tiếp.

Khi gom đủ stock Head of the King đắt hoặc cần test pinnacle, mở Crux of Nothingness từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Realmgate"} bằng An Audience, encounter ngắn, ~5-8 phút, boss King in the Mists drop key Head of the King (nguyên văn vật phẩm: "Map Fragments / Required to reveal the Crux of Nothingness on the Atlas"). Quyết định **bán hay tự dùng Head** là tách section riêng dưới.

Citadel mới gặp được thì chạy ngay; là điểm dừng đáng nhất trên đường travel. Boss nhả Origin Cradle hoặc Origin Spark — nguyên văn vật phẩm cả hai: "Can be combined with the Origin Spark/Cradle within the Tower of Origins". Cần 1 Cradle + 1 Spark mở Arbiter of Divinity. Citadel thường (Copper, Iron, Stone) chạy nhanh trong lúc đi qua, nhả waystone Citadel tier cao và một số fragment Crisis (Faded/Weathered/Ancient) — bán bulk được vài chục ex/lô.

## Bán Head of the King hay tự dùng Rite of the Nameless

Đây là quyết định kinh tế chính của chiến lược vì Head có hai use case khác hẳn nhau.

**Bán thẳng**: 177 ex/cái (~1.35 div) tại snapshot 2026-06-10, thanh khoản dày 10.000 vol/ngày, bán trong vài phút. Đầu tư = 1 An Audience (tích qua ~6-8 Ritual altar, tức ~3-5 phút sacrifice tribute dồn vào chuỗi map đang rush) + ~5 phút giết King. Spam được tới ~5-8 King/giờ với tốc độ tích Audience hiện tại (con số này là assumption, cần log thực tế khi vào league — section Optimization).

**Tự dùng cho Rite of the Nameless**: 1 Head mở 1 Rite, Rite gom 5-6 map thành chuỗi ritual liên tục, proliferate Foretold modifier; đây là tầng cao của farming belt của [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting). Mỗi Rite ngốn 1 Head + setup tablet ritual đắt. Income kỳ vọng từ Rite cao hơn 1.35 div nhiều, nhưng đòi atlas Ritual juice sâu, tablet Freedom of Faith, và build đứng nổi một phòng đông ritual.

Quy tắc đơn giản: build hiện chưa kéo nổi Ritual Belt Hunting → **bán Head thẳng**. Build đã có 5-6 div/tablet ritual juice sẵn → **tự dùng**, mỗi Head sinh ~5-15 div trong vòng Rite. Mình ở giữa: companion pack đứng được nhưng chưa bỏ vốn vào tablet ritual, nên hiện bán thẳng cho dòng tiền đều, đợi xong roadmap chaos res + Carved Majesty thì mới sink ngược vào Rite.

## Loot Breakdown & Economic Analysis

Snapshot poe2scout 2026-06-10, Divine Orb = 131 Exalted Orb. Volume 24h và giá hiện tại từ catalog ritual + fragments:

- Breachstone (cost): 68.5 ex (~0.52 div), 7d +106%, vol 16.300/ngày. Cảnh báo: input đang đắt lên gấp đôi trong tuần qua, margin compress dần.
- Breachlord Sac (drop): 633 ex (~4.83 div), 7d +66%, vol 10.600/ngày. Vẫn theo kịp Breachstone về tăng giá, ratio gross giữ.
- Head of the King (drop): 177 ex (~1.35 div), 7d +19%, vol 37.600/ngày. Hơi rớt so với giá video 09/06 (~200 ex) — saturated nhẹ vì Rite buyer đầy chợ.
- An Audience with the King (cost): không list trên poe2scout catalog (đã thử query `an-audience-with-the-king`, `audience-with-the-king`, `an-audience` đều không match). Nguyên văn poedb An_Audience_with_the_King.md: "exclusive drop from the Ritual mechanic. This item allows you to access the Crux of Nothingness via the Realmgate." Cost thực = thời gian Ritual altar (~3-5 phút tribute dồn/cuốn), không phải orb.
- Origin Cradle (drop): 429 ex (~3.27 div), 6d +34%, vol 35.600/ngày.
- Origin Spark (drop): 299 ex (~2.28 div), 6d +18%, vol 38.000/ngày.
- Vorana's Siege (Lineage drop bonus): 3.065 ex (~23.4 div).
- Olroth's Conviction (Lineage drop bonus): 2.445 ex (~18.7 div).

Math chain profit/giờ theo loại encounter:

```
expected_profit_per_hour =
  Σ encounter_type {
    (drop_value − input_cost) × encounters_per_hour
  } − opportunity_cost (atlas point cố định, gold burn)
```

**Twisted Domain (Breachstone)**:
- Gross/cuốn: 633 ex (Sac drop, giả định rate ~95%, Twisted Domain guarantee Xesht spawn, Xesht guarantee Sac drop khi giết) − 68.5 ex (Breachstone) = 564 ex (~4.30 div) net.
- Build zoom 5-6 Breachstone/giờ → 22-26 div/giờ cánh này.
- Build companion pack 3-4 Breachstone/giờ (clear chậm hơn giữa Twisted) → 13-17 div/giờ.

**Crux of Nothingness (An Audience)**:
- Gross/cuốn: 177 ex (Head drop guaranteed theo nhiều stream report; mình verify được trên 3 lần kill, mẫu nhỏ), opportunity cost ~0 ex orb = ~177 ex (~1.35 div) net per kill.
- **Rate cap quan trọng**: cánh này KHÔNG bị cap bởi tốc độ giết King (~5 phút/encounter) mà bởi **tốc độ tích Audience qua Ritual tribute** — ước tính 1 Audience ≈ 6-8 Ritual altar ≈ 3-5 map travel. Vào league phải log số altar gặp/giờ × progress/altar × Prayer-and-Pledge multiplier để pin con số chính xác.
- Build zoom 5-8 King/giờ (steady, rate-capped) → 7-11 div/giờ.
- Build companion pack 4-6 King/giờ → 5-8 div/giờ.

**Citadel mới (Origin Cradle/Spark)**:
- Gross/citadel: trung bình (429 + 299) / 2 = 364 ex (~2.78 div) − ~30 ex tablet/waystone juice = ~334 ex (~2.55 div) net.
- Tần suất 0.3-0.7 Citadel/giờ tuỳ atlas progression và Head of the Snake proc.
- ~1-2 div/giờ cánh này.

**Misc loot từ travel** (waystone drop + raw currency + occasional rare jewel/idol từ King):
- ~1-3 div/giờ tuỳ build clear giữa map travel.

**Cost tablet + waystone travel**: 3 slot tablet (mỗi cuốn chia 10 lượt dùng) + waystone 6-mod tự roll ≈ 5-8 ex/map; nhịp 12-18 map travel/giờ là ~0.7-1 div/giờ trừ thẳng vào tổng. Nhỏ so với margin nhưng là giá mua sự chắc chắn cho hai cánh Breachstone và Audience — bỏ tablet để tiết kiệm khoản này là quay về phó mặc encounter cho RNG.

**Tổng kỳ vọng**:
- Build zoom (Lightning Spear / Twister / Demon Form): 22-26 + 7-11 + 1-2 + 2-3 = **32-42 div/giờ peak**, realistic steady-state **18-23 div/giờ** sau trừ downtime, variance và rate-cap Audience. Khớp con số ~23 div/giờ video ronarray đo trên stream.
- **Build companion pack Spirit Walker (build hiện tại của mình, Lv94, Zekoa carry)**: 13-17 + 5-8 + 1 + 1-2 = **20-28 div/giờ peak**, realistic **13-16 div/giờ steady-state**. Untold Histories khi bật nerf 35% damage Xesht thêm 15-20 giây/lần, kéo Breachstone/giờ xuống; để Doryani thì matched rate cao hơn nhưng mất 50% bonus Lineage Pinnacle.

So với video ronarray 2026-06-09: input Breachstone 44 ex → 68 ex (+56% trong 1 ngày, likely một sóng buyer dồn vào sau khi strategy viral), output Sac 660 ex → 633 ex (gần ổn định), Head 200 ex → 177 ex (rớt 12%). Ratio gross của Breachstone-to-Sac vẫn ~9.2x, mô hình kinh tế chưa gãy nhưng margin nhạy hơn — saturation đã bắt đầu ở input.

## Failure Modes

Chiến lược này điểm yếu lớn nhất nằm ở **input price compression**. Breachstone tăng từ 44 → 68 ex trong 6 ngày sau khi strategy viral trên community; nếu giá Breachstone vượt ngưỡng ~200 ex thì margin gross gần halve. Snapshot vol 24h của Stone đang 16.000+ thì market còn vào được; khi vol rớt dưới 5.000/ngày là dấu hiệu seller rút và giá nhảy.

**Market saturation (rủi ro chính)**: Head of the King volume 37.000/ngày, cao gấp 3-4 lần fragment khác — cho thấy nguồn cung dồi dào. Tuần 2-3 league mọi rusher đập King thì giá Head có thể về 80-100 ex trong khi cost An Audience là thời gian Ritual (không phải orb), nên cánh Head co lại theo giá thị trường không qua kênh input. Cánh Head vẫn dương nhưng giảm còn 4-6 div/giờ. Cánh Breachstone-Sac dễ tổn thương hơn vì cost lẫn revenue đều có thể move ngược chiều.

**Build floor (Spirit Walker companion pack)**: nếu Zekoa chưa upgrade theo roadmap (chưa 60% main-hand flat phys, vẫn Tyranny's Grip 411 avg), Xesht phase 3 đập 90+ giây nên drop từ 17 div/giờ xuống 11-12 div/giờ. Build zoom ăn 2x ở khoản boss time. Companion pack tận dụng strategy này tốt nhất ở Crux (boss King không có phase one-shot critical) và Citadel mới (boss đứng yên đập); cánh Breach yếu vì Twisted Domain nhiều phase di chuyển.

**Patch nerf risk**: nếu GGG điều chỉnh drop rate Sac giữa league (hotfix typical cho mechanic viral), stress-test scenario: Sac drop rate từ 1.0 sang 0.5 per Stone thì gross/cuốn = 316 ex − 68 ex = 248 ex, margin còn 1.9 div/cuốn. Strategy vẫn lãi nhưng đẳng cấp khác. Head of the Snake (5% reveal Citadel) là node có thể bị stealth-nerf vì nó chính là cửa Citadel free; nếu giảm về 2-3% thì cánh Citadel chỉ còn rare event.

**Atlas point opportunity cost**: 4 master node cho strategy (Hidden Patterns + Head of the Snake + Untold Histories + Forest Mastery) đều quan trọng cho rush; chuyển sang strategy khác phải re-allocate. Master swap free, nhưng node atlas tree không free. Lock-in soft.

**Time investment**: setup cost gần 0 orb (Breachstone bulk ~5-10 div đủ vài giờ + Audience tự tích từ Ritual altar + tablet rẻ), break-even từ map đầu tiên. Điểm mạnh hiếm có; không strategy nào trong 0.5 có thời gian ramp ngắn vậy.

## Profit Optimization

Min-max ba kỹ thuật:

Đầu tiên là **bulk buy Breachstone TFT khi vol Exchange dày** — TFT có lot 50-100 Stone bán dưới giá chợ 5-10%, cho margin thêm ~3-5 ex/cuốn = ~0.5 div/giờ cộng vào net. An Audience không có cửa bulk vì là tribute-locked, đẩy supply phải qua **2 atlas notable Ritual** Prayer and Pledge + Ongoing Chants — cộng tổng 25% progress per tribute, rút thẳng thời gian chờ giữa hai lần giết King.

Thứ hai là **route Citadel cho Head of the Snake**: mở atlas search filter "Powerful Map Boss" nodes — node atlas tree cho map có Powerful Boss spawn (mod riêng Tier 2 Hilda) cộng thêm với node Head of the Snake (5% reveal Citadel) đẩy tần suất Citadel mới từ 0.3/giờ lên 0.6-0.7/giờ. Mỗi 0.1 thêm = +0.25 div/giờ.

Thứ ba là **chuỗi Aldur's Saga overlay**: nếu đang chạy [Grand Expedition Farming](/farming/0-5-grand-expedition-farming) song song, vòng saga Olroth/Uhtred/Medved vẫn proc bình thường khi rush boss map — Lineage Support pool 23 div từ Vorana's Siege thỉnh thoảng rớt từ Medved cũng theo nhịp này. Hai chiến lược không xung đột.

## Alternatives & Variations

So với [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting): Boss Rush ổn định hơn, đầu tư thấp hơn, không phụ thuộc belt jackpot. Đổi lại ceiling thấp hơn — Boss Rush trần ~25 div/giờ, Ritual Belt Hunting với belt jackpot kéo lên 50-100 div/giờ nhưng phương sai khổng lồ và floor income cũng dày hơn (omen + abyss ~3-4 div/map).

So với [Fragment Supply Farming](/farming/0-5-fragment-supply-farm): đó là mặt ngược của thị trường này. Mình mua Breachstone đập thì bên kia farm Breachstone bán; khi giá fragment input leo cao (Breachstone +106% 7d), margin boss-rush co lại và cán cân nghiêng về phía cung. Theo dõi ratio giá Sac/Breachstone: ratio nén lại (input leo nhanh hơn output) là tín hiệu nghiêng sang farm-bán, ratio nở ra là margin đập quay lại.

So với [Grand Expedition Farming](/farming/0-5-grand-expedition-farming): hai chiến lược chạy đè được, không xung đột atlas point. Boss Rush dùng atlas tree chính + Doryani master; Grand Expedition dùng subtree Expedition + Jado master. Khi mở biome đại dương thì swap Jado, ra khỏi biome thì swap Doryani. Income cộng dồn.

Variation chính là **burn stack pinnacle**: khi đã stack đủ 30-40 Breachlord Sac, dồn tiền mua Audience để gom Head, sau đó dùng cả hai mở pinnacle thật (Xesht's Citadel + The Aberration), không bán fragment mà ăn drop pinnacle. Pool drop pinnacle ép Lineage Support 23 div và unique pinnacle 40-100 div. Cách này hợp cuối tuần farm sau khi đã chốt sàn currency.

## Quick Reference Card

**Setup cost / map travel:** waystone 6-mod tự roll + 3 tablet chia lượt dùng ≈ 5-8 ex  
**Profit / Breachstone:** ~4.30 div net (633 ex Sac − 68.5 ex Stone)  
**Profit / Audience:** ~1.35 div net (177 ex Head, cost = ~3-5 phút Ritual tribute dồn)  
**Profit / Citadel mới:** ~2.55 div net (avg Cradle+Spark 364 ex − ~30 ex juice)  
**Time / map travel:** ~2-4 phút  
**Time / Twisted Domain:** ~3-5 phút  
**Time / Crux of Nothingness:** ~5-8 phút  
**Waystone:** T15 6-mod cho map travel (mở đủ 3 slot tablet); T15-T16 6-mod max-juice cho Citadel mới  
**Atlas master rush:** Doryani's Science (Hidden Patterns + Head of the Snake)  
**Atlas master Breach/pinnacle:** Jado's Spycraft (Untold Histories): biết trước nerf 35% damage Pinnacle  
**Tablets travel:** Breach (guarantee Breachstone) + Ritual (nguồn altar tích Audience) + Delirium seed → swap Overseer khi mạng Mirror đã phủ  
**Tablets Citadel mới:** 3 Irradiated (~40% Quantity of Waystones)  
**Fragments inventory:** Breachstone bulk 30-50 cuốn (mua chợ) + An Audience tích qua tribute Ritual altar (không stock chợ được) + Origin Cradle/Spark gom dần  
**Expected div/h (companion pack Spirit Walker):** 15-18 steady, 23 peak  
**Expected div/h (build zoom):** 20-25 steady, 30+ peak

## Changelog

### 2026-06-11
- Viết lại tablet setup map travel: Breach + Ritual tablet guarantee encounter cho hai cánh income, slot 3 Delirium seed → Overseer (Powerful Map Boss feed Head of the Snake + sustain waystone). Sửa rule slot theo số mod waystone (1-2 mod = 1 slot, travel waystone lên 6-mod). Giá unique tablet poe2scout 2026-06-11.

### 2026-06-10
- Initial draft. Seed từ video ronarray 09/06/2026. Snapshot giá poe2scout cùng ngày.

## Relationships

- **competes_with** [Fragment Supply Farming](/farming/0-5-fragment-supply-farm): mặt cung ngược chiều của cùng thị trường fragment; ratio giá Sac/Breachstone quyết định nên đứng bên mua-đập hay bên farm-bán.
- **synergizes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting): Head of the King từ Boss Rush feed thẳng vào Rite of the Nameless của Ritual Belt Hunting khi build đủ vốn ritual tablet.
- **synergizes_with** [Grand Expedition Farming](/farming/0-5-grand-expedition-farming): chạy chồng layer được, không xung đột atlas point, vòng Aldur's Saga ăn proc trên boss thường vẫn diễn ra.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless): chi tiết cách dùng Head of the King mở Rite tại Caer Tarth, cho quyết định bán-hay-dùng.
- **related_guides** [Cách chơi Ocean Exploring](/guides/0-5-ocean-exploring): nền sustain biome đại dương song song với rush atlas chính.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain): cơ chế Powerful Map Boss rớt waystone +1 tier và vai trò Overseer tablet, nền cho slot tablet thứ ba của setup travel.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients): bối cảnh 0.5 endgame overhaul, Atlas tree mở rộng, hai Citadel mới và Arbiter of Divinity.
