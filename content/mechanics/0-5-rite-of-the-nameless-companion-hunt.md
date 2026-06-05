---
document_type: mechanic
title: Săn boss tame companion bằng Rite of the Nameless
mechanic_type: Atlas
league: '0.5'
patch: 0.5.0
status: draft
author: nguyenvanduocit
created: '2026-06-04'
updated: '2026-06-04'
tags: [poe2, atlas, rite-of-the-nameless, ritual, tame-beast, companion, spirit-walker, unique-beast, capture, 0-5]
template: templates/mechanic-template.md
---

# Săn boss tame companion bằng Rite of the Nameless

**Rite of the Nameless** là atlas mechanic mới của 0.5: chọn một chuỗi 5 map chạy thành một ritual liên tục, và monster của mỗi ritual — gồm cả map boss — sẽ xuất hiện lại ở từng map trong chuỗi. Với build companion thì đây là công cụ săn carry: một con :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} carry chỉ mạnh khi bắt được nó với đúng bộ rare modifier (Extra Crits), mà số lần gặp con boss base lại bị nghẽn cứng — mỗi map chỉ một boss, và trên atlas chỉ có vài map có đúng con mình cần. Rite of the Nameless phá nghẽn đó: nó nhân số lần gặp lại con boss target lên, biến một map Riverside duy nhất thành nhiều lần wisp cùng một con. ThaoCamVienSaiGon đang field zoo :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} Diretusk Boar — đây là cách lấy nhiều attempt nếu pivot carry sang đường crit con :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"}.

## How It Works

Chuỗi bắt đầu từ **The King in the Mists**. Giết :wiki-link{url="https://www.poe2wiki.net/wiki/The_King_in_the_Mists"} drop một key mới — **The Head of the King**. Key đó mang tới **Caer Tarth** (hub area mới phía tây điểm start atlas, các map quanh đó đều là Ritual) để khởi động **Rite of the Nameless**: chọn một chuỗi 5 map hoàn thành chung một ritual liên tục. Monster của mỗi ritual, gồm cả map boss, xuất hiện lại ở từng map trong chuỗi, nên về cuối nó dồn thành một encounter rất nặng. Unique boss của mỗi map chỉ xuất hiện ở **ritual cuối cùng của map đó**, không rải khắp các altar. Mỗi map sau map đầu mang thêm modifier riêng đẩy độ khó và reward của các ritual lên. Mỗi map trong Rite trả về một mảnh key dùng để vào Ritual Pinnacle Boss.

Ráp vào bài toán tame: con carry tiêu biểu là map-boss version của :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"} — tức :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"}, boss của :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"}. Bình thường để fish bộ mod Extra Crits trên Zekoa phải chạy hết map Riverside này tới map Riverside khác, mỗi map một lần gặp. Đặt Riverside làm map đầu của Rite thì Zekoa được kéo theo cả chuỗi: nó xuất hiện ở ritual cuối của map đầu, rồi lại xuất hiện ở ritual cuối của từng map còn lại. Một The Head of the King đổi ra tới 5 lần gặp lại cùng con boss, thay vì phải gom đủ 5 map Riverside rời rạc trên atlas.

Giá trị nằm ở chỗ mỗi lần boss xuất hiện lại là một spawn mới. Một spawn mới thì roll modifier riêng, nên về cơ chế mỗi lần gặp là một cú fish độc lập cho Extra Crits — đúng kiểu rare-monster modifier roll lại mỗi lần generate. Đây là mắt xích cần log khi vào league: ghi lại bộ mod của Zekoa ở từng lần xuất hiện trong một Rite để xác nhận chúng là roll độc lập chứ không phải cùng một instance hiện lại y nguyên. Nếu đúng là roll lại, ~5 lần gặp = ~5 lần quay xúc xắc Extra Crits từ một key.

Ví dụ cụ thể trên character đang chơi: ThaoCamVienSaiGon chạy Diretusk Boar ×2 làm carry, chưa đi đường crit. Nếu pivot carry sang Zekoa để khai thác Extra Crits, build đã sẵn :wiki-link{url="https://www.poe2wiki.net/wiki/Malice"} inflict :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} → nửa chuỗi crit (5 base + 10 = 15, ×4 từ Extra Crits ≈ 60% crit) đã dựng sẵn, chỉ còn thiếu chính mod Extra Crits trên con boss. Một Rite of the Nameless với Riverside ở slot đầu cho ~5 lần wisp Zekoa để săn mod đó, thay vì đốt 5 lần chạy Riverside lẻ.

## Key Interactions

Trục này bổ trợ trực tiếp cho tablet stacking, không trùng. Tablet stacking quyết định **số mod mỗi lần spawn** — nhồi :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} cùng suffix "of Contest" lên Map Device để Zekoa spawn với nhiều rare mod hơn, tăng xác suất trúng Extra Crits trong một lần gặp. Rite of the Nameless quyết định **số lần spawn** — kéo con boss lặp lại ~5 lần. Hai trục nhân nhau: chạy tablet "of Contest" trên chính các map trong Rite thì mỗi lần trong ~5 lần gặp đều là một con boss đã được nhồi mod, nên xác suất ra bộ mod mình muốn dồn lại cao hơn hẳn so với từng trục riêng lẻ. Chi tiết tablet ở [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

Tame Beast giữ tối đa 4 regular monster modifier khi bắt, nên mục tiêu fish là một con có Extra Crits nằm trong 4 mod giữ lại — lý do toàn chuỗi hunt này tồn tại nằm ở [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt). Để tận dụng nhiều lần gặp liên tiếp trong một Rite, phải có sẵn một con tame beast gem rảnh để wisp ngay mỗi lần boss spawn — dùng mẹo disenchant/swap gem ở [build companion carry](/builds/huntress/0-5-spirit-walker-companion-carry) để không phải mua gem mới giữa các lần bắt.

Exclusion check: none. Rite of the Nameless không khoá cơ chế tame — boss trong ritual vẫn wisp + tame bình thường, và nó cộng dồn với tablet modifier chứ không loại trừ.

## Optimization

Đặt con boss target làm **map đầu tiên của chuỗi**, vì boss được kéo theo cả 5 map còn lại bất kể 4 map sau là gì — một Riverside ở slot đầu là đủ seed Zekoa vào cả chuỗi, không cần 5 map đều có Zekoa. Bốn map sau chọn theo độ an toàn và reward chứ không cần trùng base.

Chạy ở tier thấp nhất còn chịu được. Modifier cộng thêm trên các map sau cùng việc monster của mọi ritual dồn lại làm encounter cuối rất nặng, mà mục tiêu chỉ là giữ boss sống đủ lâu để wisp dán lên rồi giết khi còn wisp — không cần map juicy để fish mod (tier map không đổi base stat của con tame, sức mạnh con carry scale theo gem level). Map càng nặng càng dễ chết giữa chừng và mất luôn tiến độ Rite. Nhồi tablet "of Contest" lên các map trong Rite để mỗi lần boss spawn đều nhiều mod. Align master **Hilda** (monster hunter) hợp nhịp beast-hunt nếu đang chạy nhánh đó trên atlas.

## Cost & Restrictions

The Head of the King bị tiêu mỗi lần chạy Rite — nó không phải nguồn vô hạn. Key drop từ giết The King in the Mists, mà để gặp King phải dồn tribute trong league mechanic rồi sacrifice tribute lấy Audience with the King. Nghĩa là tốc độ săn companion qua đường này bị rate-limit bởi tốc độ farm tới King, không phải spam tuỳ ý.

Mỗi Rite buộc commit 5 map vào một ritual liên tục — không bỏ giữa chừng để lấy lại key. Đổi lại mỗi map trả một mảnh key Ritual Pinnacle Boss, nên Rite chạy để săn companion cũng đồng thời tích key vào pinnacle (lợi đi kèm, không phải chi phí). Downside thật là rủi ro chết: encounter dồn lại đủ nặng để mất cả chuỗi nếu build squishy không kéo nổi.

## Failure Modes

**Boss chết quá nhanh, mất luôn lần tame đó.** Lần gặp ở map cuối có khi boss instant-die trước khi kịp dán wisp — trên một zoo damage cao thì chính companion của mình burst con boss xuống trước khi Tame Beast wisp kịp bám đủ. Mỗi lần boss biến mất kiểu này là một trong ~5 attempt bốc hơi. Trên build companion DPS cao cần chủ động wisp sớm, thậm chí hạ damage tạm thời để giữ boss sống qua cửa sổ wisp.

**Random boss khác bị kéo vào.** Rite đôi khi lôi thêm một boss không thuộc map nào trong chuỗi vào ritual (ví dụ con bird boss xuất hiện dù không có map của nó). Nó làm encounter rối và nguy hiểm hơn, thỉnh thoảng lại thành một target capture phụ ngoài dự tính.

**Encounter dồn quá tải.** Monster của mọi ritual xuất hiện lại cộng modifier khó trên các map sau làm density và damage tăng dần về cuối chuỗi. Build companion mỏng máu có thể chết ở map 4-5 và mất tiến độ — đây là rủi ro chính của đường farm này so với chạy Riverside lẻ an toàn.

**Đốt key trắng.** Nếu không chuẩn bị sẵn tame beast gem để wisp, hoặc cả ~5 lần gặp không lần nào roll ra Extra Crits, thì một The Head of the King tiêu mà không ra con carry mong muốn. Đường này tăng số lần quay xúc xắc, không bảo đảm trúng.

## Version History

### Patch 0.5.0
Rite of the Nameless ra mắt cùng Endgame rewrite — atlas mechanic mới khởi động từ The Head of the King (drop từ The King in the Mists) tại Caer Tarth, chọn chuỗi 5 map chạy ritual liên tục với map boss xuất hiện lại ở từng map. Đây là lần đầu cơ chế chain một con boss để có nhiều lần tame liên tiếp khả thi trong POE2.

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame + modifier retention nền tảng; doc này là cách lấy nhiều lần gặp boss để fish đúng mod.
- **related_mechanics** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers) — trục bổ trợ: tablet stacking quyết định số mod mỗi spawn, Rite quyết định số lần spawn; hai trục nhân nhau.
- **related_mechanics** [Tame Beast Damage Scaling](/mechanics/0-5-tame-beast-damage-scaling) — vì sao Extra Crits là mod đáng fish (chuỗi crit con carry).
- **related_mechanics** [Farm rare tamed beast bằng Untainted Paradise và essence reset](/mechanics/0-5-rare-beast-farm-locations) — cách song song cho rare beast thường: Rite chain unique boss đắt tiền, doc kia farm rare rẻ ở overworld.
- **related_builds** [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry) — build dùng đường săn này để nâng cấp con carry sau khi pack online.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Endgame 0.5 + hệ Ritual atlas mà Rite of the Nameless thuộc về.

## Resources

- [CaptainLance9 — Zoomancer Spirit Walker Setup](https://www.youtube.com/watch?v=7xaY6l3J7zE&t=376) — field demo Rite of the Nameless để chain con boss tame qua nhiều map, tested live (kèm quirk last-map no-show + random boss bị kéo vào).
- `data/release-notes/Version_0.5.0.md` — Ritual section, verbatim cơ chế Rite of the Nameless (5 map, map boss reappear, unique boss ở final ritual, extra modifier, mảnh key pinnacle).
