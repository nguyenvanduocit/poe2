---
template: templates/farming-template.md
document_type: farming-strategy
title: Rite of the Nameless Omen Farm
status: active
created: '2026-06-24'
updated: '2026-07-14'
strategy_tier: A
investment_tier: High
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Rite of the Nameless Omen Farm

## TL;DR

- Cùng cơ chế Ritual với belt hunting nhưng đảo mục tiêu: juice pack size tối đa để omen thành dòng thu đều, belt chỉ là jackpot thỉnh thoảng.
- Đo qua ~20 map (~2.8 giờ) ra ~52 div/giờ, conservative ~45. Tier A, investment cao ~2.5-3 div/map, cần atlas sâu — không phải league-start.
- Atlas dồn pack size > effectiveness > rarity; ritual node Tainted + Between Two Worlds; content wheel rogue exiles + summoning circles.
- Tablet cốt: Freedom of Faith + Ritual Tablet rare "+3 additional free rolls" ~20-23 div, nhân đôi thành +6 rồi cộng node Rite đẩy map cuối ~22+ reroll.
- Mỗi window quay reroll → defer → reroll → defer; defer món đắt xuống ~3-3.5k tribute rồi gom cuối map.
- Waystone ép pure pack size ~48%; làm ritual boss room trước để nhồi boss vào mọi window sau.

Endgame Ritual của [Return of the Ancients](/guides/return-of-the-ancients), Tier A theo [farming tier list](/guides/0-5-farming-strategy-tier-list). Nền thu là omen quay ra mỗi map; :wiki-link{url="https://www.poe2wiki.net/wiki/Freedom_of_Faith"} nhân đôi số reroll, biến pack size thành omen volume.

## Waystone roll gì

- Exalt lên 6 mod, rồi gỡ một item-rarity omen + một chaotic effectiveness để ép guaranteed pack size.
- Gỡ thêm monster-rarity omen (~2c) → thành pure pack size, mục tiêu ~48%.

## Tablet roll gì

- **Nhân reroll:** :wiki-link{url="https://www.poe2wiki.net/wiki/Freedom_of_Faith"} roll increased-tribute-cost thấp nhất (~11%), nhân đôi số reroll.
- **Reroll đắt nhất:** Ritual Tablet rare *+3 additional free rolls* ~20-23 div — bị Freedom of Faith nhân đôi thành +6.
- **Hai tablet phụ ~3-4 div:** *reduced tribute for rerolling favours* + *increased chance to have omens*, lý tưởng có dòng "3/6 chance một favour không tốn tribute" để buyout omen đắt thụ động.
- Prefix ưu tiên pack size + increased magic monsters — hai dòng cho tribute nhiều nhất.

## Atlas passive spec gì

Atlas dồn hết vào **pack size > effectiveness > rarity**:

- **Forest master** lấy rare monsters, **Swamp master** lấy pack size — nhớ select cả Forest lẫn Swamp.
- Ritual node **Tainted (Traveller's Woe)** cho jackpot belt.
- **Between Two Worlds** cho wildwood wisp +30% tribute.
- Content wheel chọn **rogue exiles + summoning circles** — spawn được trong ritual, thành mob miễn phí. Vị trí node ở [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

## Master chọn ai

- **Jado → Partial Translations** — trung bình +20% effect lên mọi tablet, khuếch đại cả tăng-chance-omen lẫn giảm-tribute-reroll.

## Chạy map omen

- Setup: waystone pure pack size ~48%, Freedom of Faith + Ritual Tablet +3 rare + hai tablet phụ, atlas pack size đầy, Jado.
- Bật `apply item filter to ritual = true` trong `production_config` để filter highlight thẳng omen/unique đáng lấy.
- Vào map lao thẳng tới **ritual phòng boss và làm nó trước** — mob ritual đầu copy sang mọi ritual sau, nhồi boss vào tất cả window còn lại, mỗi window thêm ~3k tribute.
- Mở ritual đông mob nhất trước, rồi đi theo đàn locust tím tới các ritual còn lại.
- Kích Head of the King → chọn **city map** ở rìa ngoài push vào (dễ kiếm hơn nhiều farm 200% deli); trong map mở ra chọn "+20% number of Favours" **đầu tiên** để proliferate toàn chuỗi, buff stack qua từng map.
- Vài link đầu rush boss nhồi tribute; link sau bỏ qua được vì chỉ thêm ~30 giây.
- Ở mỗi window quay **reroll → defer → reroll → defer**: defer mọi món đắt để khoá lại với tribute thấp (Mageblood 25k không hiện được nhưng defer hạ xuống ~3-3.5k), hết tay thì select-all bằng tribute dư.
- Đừng bỏ omen rẻ 1.5-3c: gom hết, một run ra ~278c cộng 33.5 div chỉ từ nhóm này — nguồn lời nhì sau omen đắt.

Cơ chế Head of the King, Rite of the Nameless và defer nói đủ ở [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless). Bảng tra tablet/omen + triage nổi trên game (PiP):

::omen-farm-cheatsheet
::

## Kinh tế

Giá poe2scout 2026-06-18. Div đang trượt giá nhanh vì 0.5 thiếu divine sink — re-check trước mỗi session.

- Nền omen mỗi map: :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Whittling"} ~4.5 div (volume dày), Omen of Sinistral Annulment/Erasure ~6.3 div mỗi cái, cặp Dextral ~3.7-4.1 div, Omen of Chance ~8.2 div.
- Trung bình ~1 omen đắt mỗi map, omen rẻ nhất ~6 div → riêng omen ~3 div/map lời; cộng tablet phụ rớt ~1 div/map, net ~4-5 div/map sau cost.
- Jackpot belt window Tainted: :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} ~611 div, :wiki-link{url="https://www.poe2wiki.net/wiki/Headhunter"} ~275 div — throughput ~45-52 div/giờ chưa tính EV của chúng.

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
