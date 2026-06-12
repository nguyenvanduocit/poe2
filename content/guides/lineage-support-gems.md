---
template: templates/mechanic-template.md
document_type: mechanic
title: Lineage Support Gems
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.0
tags:
  - lineage-support
  - support-gem
  - siones-temper
  - endgame
  - drop-restricted
  - poe2
  - mechanic
---

# Lineage Support Gems

:wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_support_gem"} là một subcategory của support gem — gem mạnh hơn hẳn support thường, mỗi cái có một cơ chế riêng biến đổi hẳn cách dùng skill, kèm ràng buộc đi theo. Cách gọn nhất để hiểu: chúng là phiên bản unique item của support gem, mỗi gem mang tên một nhân vật huyền thoại POE (Sione, Esh, Tul, Olroth, Breachlord, Atziri…) và làm một việc độc nhất.

Lineage support ra mắt từ patch 0.3.0, không phải đồ mới tinh của 0.5. Cái 0.5.0 làm là bơm thêm 24 gem mới vào roster, đẩy tổng số lên hơn 40 — đủ nhiều để gần như mọi archetype có một Lineage support định hình build. Giá cũng bắt đầu hình thành: :wiki-link{url="https://www.poe2wiki.net/wiki/Sione%27s_Temper"} đang ~25 ex (~0.19 div), còn rẻ vì nó rớt global, nhưng các gem khoá theo boss thì đắt và biến động mạnh khi cộng đồng tìm ra combo.

## Lineage support là loại gem gì

Lineage support khác support thường ở hai chỗ. Một là sức mạnh: chúng không cho một dòng "increased X% damage" tăng dần theo tier, mà thường viết lại luật của skill — Dialla's Desire cho +1 level và +10% quality đồng thời giảm cost và reservation; Esh's Prowess cho lightning skill chỉ roll giá trị nhỏ nhất hoặc lớn nhất (bỏ khoảng giữa) kèm +1 level; Breachlord's Amalgam biến projectile cold/lightning thành bay về xuyên qua target. Hai là ràng buộc: đổi lại sức mạnh đó, mỗi Lineage support có giới hạn riêng và không thể craft ra như support thường.

Phần lớn require Level 65, vài cái thấp hơn (Kurgal's Leash chỉ Lv25), kèm yêu cầu attribute như support bình thường. Mỗi gem vẫn nằm trong một category, và category đó quyết định nó xung khắc với những support nào — phần luật bên dưới.

## Hai luật giới hạn phải nhớ

Trước khi tính cắm Lineage support vào đâu, hai luật này quyết định cái gì hợp lệ.

Luật một copy: mình chỉ được socket **một bản của mỗi Lineage support** trên toàn bộ skill cùng lúc. Không thể cắm hai Sione's Temper cho hai skill khác nhau. Cách duy nhất vượt giới hạn là :wiki-link{url="https://www.poe2wiki.net/wiki/Solus_Ipse"} (Grand Visage helm) — nó cho socket thêm 2 bản của mỗi Lineage support, mỗi bản trên một skill khác.

Luật category: một active skill chỉ nhận được một support của mỗi category, **tính cả bản non-lineage của category đó**. Ví dụ Uruk's Smelting nằm category Armour Demolisher, nên không thể cắm chung Uruk's Smelting và Armour Demolisher II vào cùng một skill — chúng cùng category, loại trừ nhau. Khi pick Lineage support, phải kiểm category của nó có đụng support thường mình đang chạy không.

**Exclusion check:** một copy mỗi Lineage support toàn nhân vật (trừ Solus Ipse cho 2 copy) · cùng category loại trừ nhau kể cả với bản non-lineage · không socket được vào skill mà category đã bị support khác chiếm.

## Kiếm Lineage support ở đâu

Lineage support không engrave được từ :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Support_Gem"} như support thường — không có đường craft. Chúng chỉ rớt, và nguồn rớt chia hai nhóm quyết định giá.

Nhóm global rớt ở bất cứ đâu trong endgame: Sione's Temper, Dialla's Desire, Dominus' Grasp, Arakaali's Lust, Ratha's Assault, Brutus' Brain, Morgana's Tempest… Nhóm này nguồn cung dày nên rẻ và mua trade dễ.

Nhóm khoá theo encounter chỉ rớt từ boss hoặc content cụ thể, nên hiếm và đắt hơn:

- Pinnacle boss: :wiki-link{url="https://www.poe2wiki.net/wiki/Xesht,_We_That_Are_One"} rớt Esh's Radiance, Xoph's Pyre, Tul's Stillness, Uul-Netol's Embrace; Atziri rớt Atziri's Impatience, Zerphi's Infamy; Olroth rớt bộ ba Uhtred; The Arbiter of Ash rớt Arbiter's Ignition; Trialmaster rớt Ixchel's Torment.
- Abyssal Depths: Large Abyssal Trove cuối dungeon rớt Amanamu's Tithe, Kurgal's Leash, Kulemak's Dominion, và hiếm khi cả Lineage support khác.
- Anomaly boss và Deadly Map Boss: pool riêng từng boss (Manoki rớt Rakiata's Flow, Tawhoa's Tending, Kaom's Madness, Tasalio's Rhythm…).

Hệ quả giá: gem global như Sione's Temper sàn vài chục ex, còn gem chase khoá Pinnacle boss có thể nhảy lên hàng nghìn ex khi một build mạnh cần đúng nó. Khi định giá một Lineage support, kiểm trước nó global hay boss-locked.

## Sione's Temper làm được gì

Sione's Temper là ví dụ issue PAT-9 nêu, và là minh hoạ tốt cho kiểu "viết lại skill". Tag của nó: Support, Lineage, Spell, Projectile. Effect: support projectile spell, cho spell một chance ngày càng cao bắn thêm nhiều projectile thành một vòng tròn, rồi reset chance khi nó bắn vòng đó. Một single-projectile spell được Sione's Temper biến thành một skill thỉnh thoảng dội ra cả vòng projectile bao quanh — đổi pattern bắn chứ không chỉ cộng damage.

Nó rớt global nên giá sàn ~25 ex (~0.19 div) theo poe2scout ngày 10/06/2026, rẻ so với Lineage support khoá boss. Giá này dễ biến động: Lineage support là lớp cơ chế mới mở rộng, một khi cộng đồng tìm ra projectile spell nào nhân tốt với cơ chế vòng tròn của nó thì cầu kéo giá lên nhanh.

## Lineage support khác Kalguuran support thế nào

Hai hệ này dễ gộp nhầm vì cùng xuất hiện quanh nội dung Kalguur của league, nhưng chúng tách bạch hoàn toàn.

Lineage support là gem unique-tier mô tả ở trên: rớt từ boss hoặc global pool, không craft được, mang tên nhân vật huyền thoại. Kalguuran support là chuyện khác — đúng 7 cái (Concussive Runes, Fist of Kalguur, Healing Runes, Runeforged Blades, Runic Extraction, Runic Infusion, Scouring Flame), và chúng **craft ra từ** :wiki-link{url="https://www.poe2wiki.net/wiki/Remnant"} qua cơ chế league, không phải drop. Cạnh đó còn 23 Kalguuran skill cũng craft từ Remnant. Nói "Sione's Temper thuộc hệ Kalguuran" là gộp nhầm hai lớp: Sione's Temper là Lineage support (drop, tag Spell/Projectile), không liên quan gì tới Remnant hay Kalguuran craft.

## Tổng kết

Lineage support là lớp "unique item cho support gem" của POE2 — ra mắt 0.3.0, mở rộng mạnh ở 0.5.0 với 24 gem mới, mỗi gem viết lại một phần luật của skill. Hai luật phải nhớ: một copy mỗi gem trên toàn build (trừ Solus Ipse), và category loại trừ kể cả bản non-lineage. Chúng chỉ rớt — global cho gem rẻ như Sione's Temper, boss-locked cho gem chase đắt. Và chúng tách hẳn khỏi Kalguuran support craft-from-Remnant.

Open question cho lúc vào sâu league: số roll cụ thể của Sione's Temper (chance khởi điểm, mức tăng mỗi lần, số projectile mỗi vòng) chưa trích được từ poedb tag page — đọc trong client hoặc poe2db trang riêng của gem để chốt con số trước khi đưa vào build math.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Thêm 24 Lineage support mới (Arbiter's Reach, Breachlord's Amalgam, Catha's Brilliance, Eonyr's Thunder, Esh's Prowess, Tul's Avalanche, bộ Olroth, bộ Uhtred, bộ Vruun…), đẩy roster lên hơn 40. Một loạt bugfix cho Lineage support cũ (Dialla's Desire không còn function khi bị disable, Hayoxi's Fulmination không còn support non-Curse skill).

### Patch 0.3.0

Lineage support gem introduced — lớp support unique-tier drop từ endgame, không engrave được từ Uncut Support Gem.

## Relationships

- **related** [Herald of Ice Shatter](/guides/herald-of-ice-shatter) — cùng là lớp gem layer định hình meta cold/lightning league Runes of Aldur.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Lineage support tách khỏi Kalguuran support craft-from-Remnant của league mechanic này.
