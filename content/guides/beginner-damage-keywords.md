---
template: templates/guide-template.md
document_type: guide
title: "Các keyword damage quan trọng: Exposure, Penetration, Armour Break, Culling"
status: draft
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - beginner
  - damage
  - offense
  - mechanics
  - resistance
---

# Các keyword damage quan trọng: Exposure, Penetration, Armour Break, Culling

Bốn keyword này hay bị đọc nhầm với nhau — đặc biệt Exposure và Penetration, vì cả hai đều liên quan đến resistance của enemy. Hiểu đúng giúp chọn support gem và gear hợp lý hơn, thay vì lấy cái gì đó trông giống nhau mà thực ra hoạt động hoàn toàn khác.

## Exposure là debuff trên enemy, không phải buff cho bạn

:wiki-link{url="https://www.poe2wiki.net/wiki/Exposure"} là một debuff gắn lên enemy — nó làm giảm **resistance thực** của enemy đó theo giá trị đã chỉ định. Mặc định, Exposure giảm −20% resistance cho loại damage tương ứng và kéo dài 4 giây.

Vì Exposure thay đổi resistance thực của enemy, mọi nguồn damage đánh vào enemy đó đều hưởng lợi — kể cả minion, companion, và đồng đội trong party. Đây là điểm mấu chốt phân biệt nó với Penetration: Exposure là debuff tác động lên enemy, Penetration là lợi thế tính toán riêng của bạn.

:wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Exposure"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Fire_Exposure"}, và Lightning Exposure là ba dạng type-specific — mỗi loại chỉ hạ resistance tương ứng. Frost Bomb spell có thể stack Elemental Exposure lên đến 50% qua nhiều pulse — mức này đủ để đẩy resistance của enemy về âm. Một khi resistance enemy xuống dưới 0%, từng điểm âm thêm là từng điểm damage dư bạn nhận được ngoài cap.

Enemy rarity ảnh hưởng trực tiếp đến hiệu quả của Exposure: Magic nhận 15% less, Rare nhận 30% less, Unique nhận 50% less. Nghĩa là −20% base Exposure chỉ hạ được −10% với Unique enemy. Khi cần khai thác Exposure cho boss, phải scale thêm "increased Exposure Effect" từ passive tree hoặc rune.

## Penetration chỉ ảnh hưởng đến hit của bạn

:wiki-link{url="https://www.poe2wiki.net/wiki/Penetration"} không thay đổi resistance thực của enemy. Thay vào đó, khi tính damage từ hit của bạn, game coi resistance của enemy thấp hơn thực tế đúng bằng mức penetrate. Enemy vẫn giữ nguyên resistance cho mọi nguồn damage khác.

Hệ quả thực tế: Penetration không giúp minion, companion, hay đồng đội. Nó chỉ là bonus của chính bạn, và chỉ áp dụng cho hit — không áp dụng cho damage over time. Nếu build chạy theo ailment như Ignite, Bleed, hay Poison, Penetration không scale phần DoT đó, chỉ scale damage của hit tạo ra ailment.

Giới hạn mặc định là không thể đẩy resistance về dưới 0% — tức là nếu enemy đang có 20% fire resistance, 30% Fire Penetration tính damage như thể enemy có 0%, không phải −10%. Một số unique item phá giới hạn này; :wiki-link{url="https://www.poe2wiki.net/wiki/Leopold's_Applause"} cho phép Penetrate xuống tới −50%.

Support gem phổ biến nhất là :wiki-link{url="https://www.poe2wiki.net/wiki/Fire_Penetration_I"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Penetration"}, và :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Penetration"} — cả ba đều Tier 2, mỗi loại penetrate 30% resistance tương ứng.

## Exposure và Penetration stack với nhau

Hai cơ chế này hoạt động theo thứ tự: Exposure hạ resistance thực của enemy trước, sau đó Penetration áp vào trên cái đã bị hạ đó khi tính hit damage của bạn.

Ví dụ: enemy có 75% cold resistance. Bạn apply Cold Exposure −20%, resistance thực của enemy xuống còn 55%. Khi bạn hit với 30% Cold Penetration, game tính damage như thể enemy có 55% − 30% = 25% cold resistance thay vì 75% ban đầu.

Exposure cũng stack với :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} curse — cả hai đều hạ resistance thực nên cộng vào nhau. Combo phổ biến ở nhiều endgame build là Elemental Weakness + Exposure + Penetration support: ba lớp cùng nhau có thể đưa một boss từ 75% resistance về âm trong thực tế tính damage.

Cùng loại Exposure không stack — nếu hai nguồn đều apply Cold Exposure, chỉ cái mạnh hơn có hiệu lực.

## Armour Break và trạng thái Fully Broken Armour

:wiki-link{url="https://www.poe2wiki.net/wiki/Armour_Break"} là debuff giảm trực tiếp giá trị Armour của enemy. Khi Armour của enemy về 0, trạng thái chuyển thành **Fully Broken Armour** — kéo dài 12 giây (4 giây với player). Trong thời gian đó, enemy nhận thêm 20% increased physical damage từ mọi hit.

Armour Break không phải penetration — nó không "xuyên" qua armour mà thực sự tháo nó ra. Reapply Armour Break sẽ refresh duration nhưng không thêm break khi target đang ở trạng thái Fully Broken.

Trong passive tree, notable Tempered Mind (patch 0.5.0) cấp 15% increased effect of Fully Broken Armour — tức là tăng mức bonus damage nhận được từ 20% lên cao hơn. Đây là node đáng lấy cho build đầu tư nặng vào physical damage và đang có nguồn Armour Break ổn định.

Warbringer ascendancy có notable Imploding Impacts cho phép phá Armour xuống dưới 0. Với Imploding Impacts, Fully Broken Armour thay đổi cơ chế: thay vì chỉ tăng 20% physical damage như mặc định, enemy nhận increased damage từ mọi loại hit — physical, elemental, đều bị amplify. Khi Armour tiếp tục bị đẩy xuống âm, giá trị âm đó tạo thêm physical damage multiplier theo tỷ lệ tương tự armour dương nhưng theo chiều ngược lại — âm càng sâu, physical damage nhân càng lớn.

## Culling Strike hoạt động theo rarity của enemy

:wiki-link{url="https://www.poe2wiki.net/wiki/Culling_Strike"} giết ngay lập tức enemy có HP dưới threshold khi bạn hit. Quan trọng: threshold được kiểm tra **trước** khi damage của hit đó áp vào — tức là nếu enemy đang ở 11% life và bạn hit với Culling Strike, nó sẽ chết ngay cả khi hit đó chỉ làm 1 damage.

Threshold theo rarity:

- Normal: 35% life
- Magic: 20% life
- Rare: 10% life
- Unique: 5% life

Culling Strike bỏ qua hoàn toàn mọi mitigation — armour, energy shield, guard effect đều không có tác dụng. Tuy nhiên có hai ngoại lệ: hit bị evade hoặc dodge thì không kích hoạt cull, và enemy đang có :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} không thể bị cull. Runic Ward là mechanic mới của 0.5 — một số enemy endgame trong league Runes of Aldur mang buff này, nên Culling Strike không hoạt động với chúng cho đến khi Ward bị phá.

Support gem :wiki-link{url="https://www.poe2wiki.net/wiki/Culling_Strike_I"} (Tier 4) cấp Culling Strike chỉ cho Rare và Unique enemy — không cull Normal hay Magic. Đây là lựa chọn hợp lý khi cần cull boss nhưng không muốn tốn support slot để xử lý clear pack. Culling Strike II còn tăng threshold thêm 20% sau mỗi lần cull thành công.

Damage over time không cull — Ignite, Bleed, Poison dù có giết enemy cũng không kích hoạt Culling Strike.

## Relationships

- **related** [Resistance và cơ chế cap 75%](/guides/beginner-resistances) — Exposure và Penetration đều tác động lên resistance của enemy; guide này giải thích resistance từ góc phòng thủ của chính nhân vật.
- **related** [Increased vs More: quy tắc tính damage](/guides/beginner-increased-vs-more) — Penetration là More multiplier độc lập với pool Increased; hiểu quy tắc More giúp đánh giá đúng support gem Penetration so với các option khác.
- **related** [Các loại damage trong POE2](/guides/beginner-damage-types) — Armour Break liên quan trực tiếp đến physical damage; biết damage type nào bypass armour và loại nào bị check bởi resistance là nền tảng để dùng đúng các keyword trên.
