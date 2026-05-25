---
template: templates/item-template.md
document_type: item
title: Twisted Empyrean
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
game: poe2
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Two Hand Mace
level_requirement: 1
item_tags:
- two-hand-mace
- unique
- cold
- mana
- slam
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- mana-stacking
tags:
- item
- unique
- '0.5'
- return-of-the-ancients
- cold-conversion
- mana-before-life
---

# Twisted Empyrean

Twisted Empyrean là two-hand mace unique trên base :wiki-link{url="https://www.poe2wiki.net/wiki/Aberrant_Sledge"} Aberrant Sledge, grant skill **Starborn Onslaught** và biến mana pool thành cả nguồn damage lẫn nguồn EHP cùng lúc. Ba dòng mod ăn khớp nhau — "+319 to maximum Mana", "Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana", và "10% of Damage is taken from Mana before Life" — khiến mọi điểm mana vừa cộng sát thương cold vừa cộng lớp đệm máu. Cộng thêm "Convert 100% of Fire Damage with Mace Skills to Cold Damage", item ép toàn bộ build commit về cold, biến nó thành lõi cho một slam mace mana-tank thay vì life/str-stacker thông thường.

## Item Stats

```
Twisted Empyrean
Aberrant Sledge
Requires: Level 1
--------
Grants Skill: Level 18 Starborn Onslaught
94% increased Physical Damage
Adds 166 to 372 Cold Damage
+319 to maximum Mana
+4.43% to Critical Hit Chance
10% of Damage is taken from Mana before Life
Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana
Convert 100% of Fire Damage with Mace Skills to Cold Damage
```

Confidence: **HIGH** — mod verbatim từ data poe2db 0.5.0. "Requires: Level 1" trên item có khả năng là placeholder datamine; Starborn Onslaught bản thân yêu cầu Level 78, 137 Strength để dùng (MEDIUM — số skill từ page Starborn Onslaught).

## Why This Item Is Powerful

Sức nặng nằm ở chỗ một stat duy nhất — maximum Mana — gánh ba vai trò, nên mọi investment mana có hiệu suất gấp ba.

**Mana thành damage.** "Adds 166 to 372 Cold Damage" là flat cộng thẳng, nhưng dòng đắt là "Added Cold Damage equal to 6% to 10% of maximum Mana". Với +319 mana từ chính item rồi cộng mana từ tree/gear, ví dụ một pool 2,000 mana cho thêm 120 đến 200 cold damage mỗi attack chỉ từ dòng này, độc lập với flat 166-372. Mana càng cao, cold added càng lớn — đây là lý do build commit hết vào mana thay vì life.

**Mana thành EHP.** "10% of Damage is taken from Mana before Life" là một phần :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} Mind over Matter rút gọn — 10% mỗi hit trừ vào mana trước. Pool mana lớn vốn dựng để scale damage giờ kiêm luôn lớp đệm, nên không phải đánh đổi giữa offense và defense như build life thường gặp.

**Cold lock-in.** "Convert 100% of Fire Damage with Mace Skills to Cold Damage" gom mọi fire (từ Starborn Onslaught hoặc support) về cold, dồn scaling vào một element duy nhất. Starborn Onslaught đã "Converts 70% of Physical to Cold" ở tier thấp và 100% ở tier cao, nên gần như toàn bộ output là cold — chill/freeze threshold từ đó cũng dày hơn vì cold damage tập trung.

## Build Enabler Mechanics

Item này định nghĩa một slam mace lấy mana làm trục thay vì strength/life. Skill mặc định Starborn Onslaught là AoE/Melee/Slam/Cold/Duration: Attack Damage 155% ở base lên tới 294% tier cao, tạo Fissure kéo dài (+8 seconds to Fissure duration ở tier sau) nhưng gated bởi "Requires 20 Glory to use" và "+1.2 seconds to Total Attack Time" — tức một đòn nặng, chậm, tích Glory rồi xả, không phải spam. Playstyle là build mana cao (tree mana nodes, gear +mana, :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} hoặc aura mana-scaling), giữ MoM 10% chống burst, rồi slam cold fissure vào pack/boss.

Build phải xoay quanh hai câu hỏi chưa test được khi league chưa live: Glory generation đủ nhanh để Starborn Onslaught không bị nghẽn không, và mana sustain có theo kịp khi vừa làm damage source vừa làm damage-taken buffer không. Cả hai cần log in-game đầu league.

Item không hợp build life-stacker hay build không scale mana — mọi mod đắt giá ở đây đều quy về mana, bỏ mana thì còn lại chỉ là 94% increased Physical + flat cold tầm thường.

## Acquisition

Drop source chưa được GGG reveal tại 25/05 (league launch ~29/05). Theo pattern unique mới của các patch trước, khả năng từ Pinnacle boss chain hoặc reward của league mechanic Remnant/Ocean Exploring. Giá tuần đầu của build-enabling weapon unique thường 3-15 divine rồi settle sau 2 tuần tùy meta pick-up — sẽ update khi market live.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mod verbatim đã có trên poe2db; build viability chưa test live.

## Related Items & Alternatives

- :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} Mind over Matter — keystone full-version của dòng "damage taken from mana before life"; Twisted Empyrean cho sẵn 10% nên có thể chồng hoặc thay một phần.
- [The Auspex](/mechanics/items/the-auspex) — unique cùng patch theo trend "một item gánh nhiều layer", đối chiếu cách 0.5 thiết kế unique build-around.

## Relationships

- **part_of** [Đợt Unique Mới và Meta Shift](/mechanics/0-5-new-unique-items) — một trong các damage carry đã lộ stat của đợt 0.5
- **synergizes_with** [The Auspex](/mechanics/items/the-auspex) — cùng nhóm unique build-enabling 0.5
