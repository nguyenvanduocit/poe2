---
template: templates/farming-template.md
document_type: farming-strategy
title: Rite of the Nameless Omen Farm
status: active
created: '2026-06-24'
updated: '2026-06-24'
strategy_tier: A
investment_tier: High
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Rite of the Nameless Omen Farm

Cùng cơ chế :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual"} với [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) nhưng đảo mục tiêu: thay vì nghiêng unique về belt, strat này juice **pack size tối đa** để gom thật nhiều tribute, quay window thật nhiều lần, biến omen thành dòng thu đều — belt chỉ là jackpot thỉnh thoảng. Đo qua ~20 map (~2.8 giờ) ra ~52 div/giờ, lấy conservative ~45. Tier A, investment cao: ~2.5-3 div/map. Endgame cần atlas sâu, không phải league-start.

::omen-farm-cheatsheet
::

## Strategy hoạt động thế nào

Chuỗi giá trị đi từ số quái: pack size cao cho nhiều tribute, tribute nhiều cho nhiều lần reroll, mỗi lần reroll là một lần xúc xắc ra omen hoặc unique cao cấp. :wiki-link{url="https://www.poe2wiki.net/wiki/Freedom_of_Faith"} nhân đôi số reroll, một tablet ritual "+3 additional free rolls" bị nhân đôi theo thành +6, cộng node Rite of the Nameless đẩy số reroll lên dần mỗi map — map cuối chuỗi quay tới ~22+ lần. Càng nhiều window càng nhiều cửa trúng.

Khác belt hunting ở hai điểm. Belt hunting nghiêng unique về belt qua **Spreading Darkness** rồi lấy Abyss làm nền thu; strat này bỏ Abyss, dồn toàn bộ atlas vào pack size và lấy **omen volume** làm nền. Master **Jado → Partial Translations** cộng trung bình 20% effect lên mọi tablet, khuếch đại cả tăng-chance-omen lẫn giảm-tribute-reroll. Belt vẫn là jackpot lớn nhất qua ritual loại Tainted, nhưng phần tiền đều đến từ omen quay ra mỗi map.

Mắt xích thứ ba là **defer omen qua item filter**. Bật `apply item filter to ritual = true` trong `production_config`, filter sẽ highlight thẳng omen/unique đáng lấy. Món quá đắt như :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} 25k tribute không hiện được, nhưng bấm Defer hạ nó xuống ~3-3.5k tribute là vừa túi — quay tiếp rồi gom hết ở cuối map. Cơ chế Head of the King, Rite of the Nameless và defer nói đủ ở [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless); ở đây chỉ phần khác của góc omen.

## Setup

Atlas dồn hết vào **pack size > effectiveness > rarity**: Forest master lấy rare monsters, Swamp master lấy pack size, nhớ select cả Forest lẫn Swamp. Ritual node lấy **Tainted (Traveller's Woe)** cho jackpot belt và **Between Two Worlds** cho wildwood wisp +30% tribute. Content wheel chọn rogue exiles + summoning circles — chúng spawn được trong ritual, thành mob miễn phí. Vị trí node ba master ở [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

Tablet là khoản nặng nhất. **Freedom of Faith** roll increased-tribute-cost thấp nhất (~11%). Một **Ritual Tablet rare "+3 additional free rolls"** ~20-23 div là tablet đắt nhất nhưng cốt của strat. Thêm hai tablet phụ ~3-4 div mang *reduced tribute for rerolling favours* + *increased chance to have omens*, lý tưởng có dòng "3/6 chance một favour không tốn tribute" để buyout omen đắt thụ động. Prefix ưu tiên pack size + increased magic monsters vì hai dòng đó cho tribute nhiều nhất.

Map thì exalt waystone lên 6 mod rồi gỡ một item-rarity omen + một chaotic effectiveness để ép guaranteed pack size; gỡ thêm monster-rarity omen (~2c) thì thành pure pack size, mục tiêu ~48%.

## Gameplay

Vào map lao thẳng tới **ritual phòng boss và làm nó trước**. Rite of the Nameless luôn để một ritual trong boss room, mà mob của ritual đầu copy sang mọi ritual sau — làm boss trước là nhồi boss vào tất cả window còn lại, mỗi window thêm ~3k tribute. Sau đó mở ritual đông mob nhất trước, rồi đi theo đàn locust tím tới các ritual còn lại.

Khi chạy Rite, kích Head of the King rồi chọn **city map** ở rìa ngoài push vào — city map dễ kiếm hơn nhiều so với farm 200% deli. Trong các map mở ra, chọn map "+20% number of Favours" **đầu tiên** để buff proliferate sang toàn chuỗi; buff stack qua từng map. Vài link đầu rush boss để nhồi tribute, link sau bỏ qua được vì chỉ thêm ~30 giây.

Ở mỗi window, vòng quay là **reroll → defer → reroll → defer**, defer mọi món đắt để khoá lại với tribute thấp, hết tay thì select-all bằng tribute dư. Đừng bỏ omen rẻ 1.5-3c: gom hết, một run ra ~278c cộng 33.5 div chỉ từ nhóm này, là nguồn lời nhì sau omen đắt.

## Loot và lời

Nền thu là omen quay ra mỗi map. Giá poe2scout 2026-06-18: :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Whittling"} ~4.5 div (volume dày), Omen of Sinistral Annulment/Erasure ~6.3 div mỗi cái, cặp Dextral ~3.7-4.1 div, Omen of Chance ~8.2 div. Trung bình ~1 omen đắt mỗi map, omen rẻ nhất ~6 div nên riêng omen đã ~3 div/map lời. Cộng tablet phụ rớt lại ~1 div/map, net về ~4-5 div/map sau cost.

Jackpot đến từ belt window loại Tainted: Mageblood ~611 div, :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} ~275 div. Strat này là một trong những đường tốt nhất để chạm hai món đó, và throughput ~45-52 div/giờ chưa tính giá trị kỳ vọng của chúng. Div đang trượt giá nhanh vì 0.5 thiếu divine sink — re-check trước mỗi session.

## Failure Modes

- **Phương sai cộng tablet đắt ăn vốn.** Reroll tablet ~20-23 div là khoản chìm lớn; stretch trắng omen đắt vẫn đốt tablet như thường. Vốn mỏng thì chạy ít slot tablet thay vì full bản đắt.
- **Phòng ritual đông one-shot.** Pack size cao + boss nhồi từ Rite + chaos damage chồng là kịch bản chết bất ngờ dù DPS thừa; chaos res ~25 chưa cap của build companion là lỗ rõ nhất. Đọc map mod (extra damage, no regen) trước khi mở.
- **Không có loot ngoài window.** ~7-8 raw divine trong 3 giờ, gần như không tink. Ai quen dòng drop đều sẽ thấy hụt; giá trị nằm hết trong window.
- **Area level dưới 79 cắt omen đắt nhất.** Omen giá trị nhất cần area 79 — map thấp chỉ còn omen rác mức chaos.
- **Kích Head of the King mới xoá chuỗi đang dở.** Gom Head dư mà bấm nhầm là bay cả run; reset instance giữa chừng cũng mất tiến độ.

## Version History

- **2026-06-24** — Initial draft. Cơ chế cross-ref [Ritual guide](/guides/0-5-ritual-rite-of-the-nameless) + [belt-hunting](/farming/0-5-ritual-belt-hunting) (verify poedb + patch 0.5.x). Throughput đo từ run ~20 map / 2.8 giờ; giá omen poe2scout 2026-06-18.

## Relationships

- **alternative_to** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) — cùng cơ chế Ritual + Head of the King, khác mục tiêu: belt hunting nghiêng unique về belt qua Spreading Darkness + nền Abyss; strat này dồn pack size cho omen volume, belt chỉ là jackpot.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless) — cơ chế đầy đủ: tribute, reroll, defer, Head of the King, Rite chain.
- **related_mechanics** [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree) — vị trí node pack size và ba master (Jado/Hilda/Doryani).
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league system 0.5 (Ritual rewrite, Masters of the Atlas).
- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — character endgame đủ clear T15-16 và đứng nổi phòng đông quái.
