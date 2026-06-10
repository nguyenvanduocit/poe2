---
template: templates/guide-template.md
document_type: guide
title: "Accuracy và Evasion: tấn công có chắc trúng không?"
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
  - accuracy
  - evasion
  - dexterity
  - attack
---

# Accuracy và Evasion: tấn công có chắc trúng không?

Attack build trong POE2 có một stat mà người mới thường bỏ qua hoàn toàn cho đến khi nhận ra mình đang miss 20-30% đòn: :wiki-link{url="https://www.poe2wiki.net/wiki/Accuracy_Rating"}. Thiếu Accuracy không làm damage giảm từ từ — nó tạo ra miss hoàn toàn, nghĩa là đòn đó tốn mana nhưng không gây ra bất kỳ damage nào, kể cả không trigger ailment hay on-hit effect.

## Accuracy chỉ quan trọng với attack, không phải spell

Điểm đầu tiên cần nắm rõ: :wiki-link{url="https://www.poe2wiki.net/wiki/Spell"} không cần Accuracy. Fireball, Lightning Conduit, hay bất kỳ skill nào có tag Spell đều bỏ qua toàn bộ cơ chế hit/miss này và luôn đánh trúng mục tiêu. Minion của mình cũng không cần Accuracy — minion tự có always-hit.

Chỉ khi dùng skill tag Attack — Whirling Slash, Spear Throw, Boneshatter, bow attack — thì Accuracy mới tính. Vì vậy cần quan tâm đến Accuracy khi chơi attack build như Ranger, Huntress, Mercenary, hoặc bất kỳ class nào lấy vũ khí melee hay ranged để đánh trực tiếp.

## Accuracy đến từ đâu

Character gain +6 Accuracy Rating mỗi level. Lên lv 90 thì base Accuracy từ level đã là 540 — không nhiều, nhưng ổn định theo campaign.

Nguồn scaling chính là :wiki-link{url="https://www.poe2wiki.net/wiki/Dexterity"}: mỗi điểm Dex cho +6 Accuracy Rating. Đây là lý do attack build cần Dex không chỉ để equip gear — mà Dex còn là axis trực tiếp đẩy Accuracy. Một character có 200 Dex thì được +1.200 Accuracy từ attribute, cộng với level và gear là đủ để hit chance gần cap trong hầu hết trường hợp.

Ngoài Dex và level, Accuracy còn lên được từ flat roll trên gear (nhẫn Emerald Ring có Accuracy Rating là implicit), passive tree node, và support gem :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Accuracy_I"} (50% more Accuracy Rating cho skill đó).

## Accuracy và Evasion quyết định hit chance bằng công thức chung

Accuracy của người tấn công không tự cho hit chance — nó được tính chung với :wiki-link{url="https://www.poe2wiki.net/wiki/Evasion_Rating"} của đích để ra xác suất trúng:

**Chance to Hit = (Accuracy × 1.25 × 100) / (Accuracy + Evasion × 0.3)**

Kết quả này bị cap ở 100% từ trên và floor ở 5% từ dưới. Không bao giờ guaranteed miss, cũng không thể vượt 100% trừ một số mechanic đặc biệt. Hệ quả thực tế: khi đánh quái có Evasion cao — thường là monster type agile như tên lính đơn hay boss dexterity-based — hit chance tụt xuống rõ rệt dù Accuracy build không thay đổi.

Ví dụ đơn giản: tấn công với 1.000 Accuracy vào đích có 2.000 Evasion:
- Tử số: 1.000 × 1.25 × 100 = 125.000
- Mẫu số: 1.000 + 2.000 × 0.3 = 1.600
- Chance to hit: 125.000 / 1.600 ≈ 78%

Tăng Accuracy lên 1.500 thì hit chance lên ~83%. Công thức này là lý do Accuracy scaling có diminishing return — tăng từ thấp lên trung thì hit chance nhảy nhiều, từ trung lên cao thì nhảy ít hơn.

## Evasion không phải hệ thống ngẫu nhiên thật sự

Người mới hay nghĩ evasion roll theo kiểu random mỗi hit. Thực ra POE2 dùng hệ **entropy**: mỗi đòn tấn công cộng hit chance vào một bộ đếm ẩn, khi bộ đếm đạt 100 thì đòn đó trúng, trừ 100 rồi tiếp tục. Reset về ngẫu nhiên sau 3.33 giây không bị tấn công.

Hệ quả quan trọng: nếu character có 50% chance to evade, thì cứ đúng 2 đòn thì 1 đòn trúng — không có streak xui ăn 5 đòn liên tiếp hay streak may né 10 đòn liên tiếp. Hệ thống này cố tình smooth ra variance, nghĩa là Evasion trên giấy rất gần với Evasion thực tế trong play session.

Cũng cần biết: boss attack có flash đỏ không bị né bởi Evasion. Đó là mechanic riêng — mình phải dodge roll hoặc dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Block"} chủ động thì mới tránh được.

## Distance penalty cắt mạnh Accuracy của ranged build

Player attack có penalty Accuracy theo khoảng cách: không penalty trong vòng 2 mét, tăng dần lên đến 90% less Accuracy cho target ở xa hơn 9 mét. Đây là mechanic ảnh hưởng trực tiếp bow build và spear-throw build.

90% less Accuracy không phải -90% flat — nó là multiplier: Accuracy thực = base × (1 - 0.9) = 10% của base khi đứng xa. Với 1.000 base Accuracy, đứng xa 9m trở ra thì chỉ còn 100 Accuracy effective. Hit chance tụt thê thảm.

Với bow build, cách đơn giản nhất là đầu tư Accuracy nhiều hơn cần thiết để bù lại penalty ở khoảng cách xa. Cách khác là lấy passive node hoặc gear "Accuracy is not reduced at distance" nếu build đó có — nhưng đó là modifier không phổ biến, không phải default.

## Cách biết build đang thiếu Accuracy

Mở character sheet, nhìn chỉ số Chance to Hit hoặc kiểm tra Accuracy Rating. Con số Accuracy không nói gì nếu không biết Evasion của monster — nhưng rule of thumb: Accuracy Rating gấp đôi level của character là điểm an toàn cho hầu hết nội dung. Lv 80 thì muốn khoảng 1.600+ Accuracy Rating để hit chance ổn trước pack thường.

Build thiếu Accuracy thường nhận ra theo cách tệ nhất: nhìn floating text thấy "Miss" xuất hiện nhiều trong combat, hoặc thấy single-target DPS thực tế thấp hơn paper DPS trong PoB đáng kể. Khi đó giải pháp đơn giản nhất là kiểm tra Dex — nếu Dex thấp vì gear không có, đó là cách rẻ nhất để đẩy Accuracy lên.

## Relationships

- **related_guides** [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers) — mô tả Evasion từ góc defender đầy đủ hơn, kèm entropy system và cách Deflection bổ sung.
- **related_guides** [Damage types trong POE2](/guides/beginner-damage-types) — phân biệt attack vs spell damage; hiểu tag nào cần Accuracy.
