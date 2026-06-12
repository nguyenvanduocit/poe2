---
template: templates/mechanic-template.md
document_type: mechanic
title: Twisted Empyrean
status: published
author: duocnv
created: '2026-05-25'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: items
tags:
  - twisted-empyrean
  - unique
  - two-hand-mace
  - cold-conversion
  - mana-before-life
  - glory
  - starborn-onslaught
  - poe2
  - mechanic
---

# Twisted Empyrean

:wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Empyrean"} là unique Two Hand Mace trên base Aberrant Sledge, yêu cầu Level 78 và 163 Strength. Item grant skill Starborn Onslaught Level 18 — một đòn slam cold gated bởi Glory, nhảy lùi rồi phóng cây búa xuống như sao băng. Ba mod đặc trưng trên item cùng phục vụ một trục: mana. "+319 maximum Mana" tăng pool, "Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana" biến mana thành flat damage per attack, và "10% of Damage is taken from Mana before Life" biến mana thành lớp đệm nhận damage. Cộng thêm "Convert 100% of Fire Damage with Mace Skills to Cold Damage", item ép toàn bộ output về cold và yêu cầu build commit hết vào mana thay vì life hay strength thuần.

## Stats

```
Twisted Empyrean
Aberrant Sledge — Two Hand Mace
Physical Damage: 144–299
Cold Damage: 166–372
Critical Hit Chance: 9.43%
Attacks per Second: 1.20
Weapon Range: 1.3 metres
Requires: Level 78, 163 Str
──────────────────────────────────────────────
Grants Skill: Level 18 Starborn Onslaught
94% increased Physical Damage
Adds 166 to 372 Cold Damage
+319 to maximum Mana
+4.43% to Critical Hit Chance
10% of Damage is taken from Mana before Life
Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana
Convert 100% of Fire Damage with Mace Skills to Cold Damage
──────────────────────────────────────────────
"Infinite mutations over endless eons borne upon it in a singular moment."
```

## Mana làm cả damage lẫn EHP cùng lúc

Điểm cốt lõi của item là maximum Mana gánh hai vai trò song song, nên mỗi điểm đầu tư vào mana có hiệu quả kép.

Về damage: "Added Cold Damage equal to 6% to 10% of maximum Mana" thêm flat cold vào mỗi attack. Với pool 2.000 mana, mỗi đòn thêm 120–200 cold damage, cộng thêm vào flat cold 166–372 từ mod Adds sẵn trên weapon. Hai nguồn flat đó cộng lại trước khi nhân với multiplier: total flat cold mỗi attack ở pool 2.000 là 286–572. Đưa pool lên 3.000, flat từ trục mana riêng đã là 180–300 — scale tuyến tính theo investment mana.

Về EHP: "10% of Damage is taken from Mana before Life" là partial :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"}. Mỗi hit drain thêm 10% lượng damage từ mana pool trước khi chạm vào life. Con số 10% này nhỏ — một hit 3.000 damage chỉ drain 300 mana. Pool mana dùng để scale damage đó kiêm luôn vai trò cushion mà không cần đánh đổi offensive stat nào. Đây không phải full MoM 30% của keystone, nhưng với pool mana lớn thì lớp đệm vẫn đáng kể.

## Starborn Onslaught và cơ chế Glory

Starborn Onslaught yêu cầu 20 Glory để kích hoạt. Glory tích bằng cách Chill hoặc Freeze enemy — mỗi lần chill/freeze một enemy tạo ra Glory bằng Power của enemy đó, tối đa một lần cứ 0,5 giây trên mỗi enemy. Normal monster có ~1 Power, Unique luôn là 20 Power.

Ở pack play: weapon tự có flat cold 166–372 per attack cộng trục mana, đủ để chill nhiều enemy một swing. Pack 10 enemy = 10 Glory từ một đòn. Với APS 1,20, bạn đạt đủ 20 Glory sau 2–3 giây đánh pack đầu tiên. Không có bottleneck thực sự ở đây.

Ở boss play: Unique monster có 20 Power cố định. Chill boss lần đầu = 20 Glory ngay lập tức — bạn vào fight với Starborn sẵn dùng sau đúng một hit mở đầu. Glory decay 2/giây nếu không tích thêm trong 15 giây, nhưng trong boss fight bạn liên tục đánh nên không bao giờ rơi vào idle decay.

Khi kích hoạt: Impact jump lùi rồi đập xuống, +1,2 giây Total Attack Time (đòn chủ ý nặng và chậm), Impact radius 2,5m, tạo 3 Fissure kéo dài 8 giây (Fissure branch 2 lần, limit 8). Đồng thời 20 Stars rơi xuống khu vực — Star Fall component deal 294% Attack Damage và convert 100% physical sang cold, 2m radius mỗi star. Tổng damage của một lần kích hoạt vượt xa attack thường vì gom cả Impact + Fissure + Stars.

Impact convert 70% physical sang cold; Star Fall convert 100%. Weapon mod convert 100% fire sang cold cho mọi mace skill. Kết quả là hầu như toàn bộ damage output là cold.

## Cold lock-in và tại sao không scale lửa

"Convert 100% of Fire Damage with Mace Skills to Cold" không cho phép dual-element. Mọi fire damage từ support gem hay passive node đều bị gom về cold trước khi áp — không còn fire để scale riêng. Fire Penetration, node "increased Fire Damage", support có fire tag: tất cả vô nghĩa vì damage chạy về cold hết.

Scaling đúng là cold resistance reduction (:wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"}, Cold Exposure) và cold multiplier từ support gem. Starborn Onslaught có tag Cold nên nó ăn mọi modifier cold bình thường.

Điểm hay là vòng tự reinforcing: cold damage chill enemy, chill tích Glory cho Starborn, Starborn tạo thêm cold damage. Build không cần nguồn Glory riêng — output của chính nó làm sạch đường cho mình.

## Mana sustain khi mana gánh ba việc

Mana gánh cả damage scaling, EHP buffer, và skill cost — đây là điểm cần quản lý chặt nhất.

Sustain trong combat thực tế không phải vấn đề: 10% damage-taken-from-mana là con số nhỏ. Hit 500 damage từ enemy trung bình chỉ drain 50 mana. Pool 2.000 chịu được rất nhiều hit như vậy và regen từ Intelligence passives bù đắp đủ.

Áp lực thật đến từ reservation: aura, companion skill, hay bất kỳ nguồn reserve mana nào đều cắt trực tiếp vào pool đang làm việc. Pool 2.000 mana bị reserve 30% cho một aura thì effective pool còn 1.400, flat cold per attack giảm xuống 84–140, EHP buffer cũng giảm theo. Khi build Twisted Empyrean, mana reservation phải tính cẩn thận như một hard constraint — không phải afterthought.

## Lỗi hay gặp

- Đọc "Requires: Level 1" từ datamine phụ trên poedb và nghĩ item dùng được từ Level 1. Data block gốc của item ghi rõ Level 78, 163 Str — khớp với requirement của chính Starborn Onslaught. Level 1 là artifact của một data block riêng, không phải item requirement thật.
- Stack fire damage node vì thấy item có fire→cold. Convert 100% nghĩa là toàn bộ fire đã chạy về cold — không còn fire nào để scale. Đổ hết sang cold multiplier và cold resistance reduction.
- Bỏ qua reservation khi lên kế hoạch build. Mana là offensive stat, defensive layer, và resource pool đồng thời — bất kỳ reservation nào cũng cắt cả ba cùng lúc.
- Vào boss với 0 Glory vì switch combat đủ lâu để bị idle decay (2/giây sau 15 giây không tích). Chill một mob ngoài portal trước khi bước vào là đủ để có 20 Glory từ đầu fight.

## Drop source

Twisted Empyrean drop từ Expedition pinnacle boss trong Runes of Aldur. Item drop-restricted — không chance được bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"}.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Item introduced. Drop từ Expedition pinnacle boss, exclusive cho Runes of Aldur league.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview các unique mới và meta shift 0.5.0, gồm Expedition rework tạo ra Expedition pinnacle boss là nguồn drop của item này.
- **related_mechanics** [The Auspex](/mechanics/items/the-auspex) — unique cùng patch theo design philosophy một item gánh nhiều defensive layer.
