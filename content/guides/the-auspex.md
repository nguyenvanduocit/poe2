---
template: templates/mechanic-template.md
document_type: mechanic
title: The Auspex
status: published
author: duocnv
created: '2026-05-19'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: items
tags:
  - item
  - unique
  - body-armour
  - mist-raven
  - gruelling-madness
  - deflect
  - low-life
  - evasion
  - delirium
  - poe2
  - mechanic
---

# The Auspex

The Auspex là unique Exquisite Vest từ loot pool Delirium, grouped với :wiki-link{url="https://www.poe2wiki.net/wiki/Sadist%27s_Mercy"} Sadist's Mercy, :wiki-link{url="https://www.poe2wiki.net/wiki/Horror%27s_Flight"} Horror's Flight và :wiki-link{url="https://www.poe2wiki.net/wiki/Veilpiercer"} Veilpiercer — tất cả đều liên quan đến The Raven Trickster, boss mới của Delirium trong 0.5.0. Chest đóng gói bốn cơ chế độc lập: con Mist Raven duy nhất với vòng cull-frenzy, vùng :wiki-link{url="https://www.poe2wiki.net/wiki/Presence"} Presence áp Gruelling Madness mỗi giây, :wiki-link{url="https://www.poe2wiki.net/wiki/Deflect"} Deflect trở thành Lucky khi ở :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} Low Life, và attribute requirements nhân đôi toàn bộ gear. Bốn layer này phục vụ archetype evasion-deflect running ở low life — không phải mọi build evasion đều muốn cái đổi trận này.

## Chỉ số và base type

```
The Auspex
Exquisite Vest
Requires Level 65

Grants Skill: Level 18 Mist Raven
(210–240)% increased Evasion Rating
+(70–120) to maximum Life
100% increased Attribute Requirements
Chance to Deflect is Lucky while on Low Life
Enemies in your Presence gain 1 Gruelling Madness each second

"The boy is a bad omen," he cried. "Ravens gather
before him!" That night, a new raven appeared, and
shadowed the Auspex for the rest of his days.
```

(210–240)% increased Evasion Rating trên base Exquisite Vest cho một slot body thuần evasion đóng góp rất lớn vào tổng evasion. Khác với phần lớn unique build-around chỉ một trục, chest còn kèm +(70–120) maximum Life nên không bỏ trống hẳn mặt life — dù vẫn cần gánh thêm life từ slot khác để đủ pool ở endgame.

## Mist Raven và vòng cull-frenzy

Mist Raven là companion đơn được chest grant trực tiếp — không phải swarm, không liên quan đến skeleton hay spectre slot. Con chim có một command skill dive: player chủ động ra lệnh để nó lao vào target, tạo burst damage tập trung. Điểm cốt lõi của skill này: **enemy bị Mist Raven cull sẽ grant player :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge**.

:wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge trong POE2 cho 4% more damage và 4% attack/cast speed per charge. Class nào không có nguồn Frenzy tự nhiên từ skill hay ascendancy — Huntress, Ranger, một số Warrior build — đều dùng được Raven làm passive charge generator. :wiki-link{url="https://www.poe2wiki.net/wiki/Cull"} Cull kích hoạt ở 35% HP còn lại với enemy thông thường. Loop kín: Raven dive → enemy low HP → Raven cull → player nhận Frenzy → Frenzy buff cả Raven damage → cull nhanh hơn ở tiếp theo.

## Gruelling Madness tích lũy trong Presence

Mỗi giây, enemy đứng trong vùng Presence của player nhận 1 stack Gruelling Madness — debuff slow stacking không giới hạn theo thời gian đứng gần. Sau 10 giây một boss đứng im, nó mang 10 stacks; sau 20 giây, 20 stacks. Gruelling Madness amplify các slow source khác đang đồng thời áp lên cùng enemy: chill, freeze threshold, Temporal Chains và các slow effect đều mạnh hơn khi stacks tích đủ cao.

:wiki-link{url="https://www.poe2wiki.net/wiki/Sadist%27s_Mercy"} Sadist's Mercy cùng loot pool cũng dùng Gruelling Madness, nhưng theo chiều ngược: nó apply 2–5 stacks mỗi đòn đánh rồi convert stacks thành Power của enemy. Đây là cơ chế khác hoàn toàn với The Auspex — Auspex muốn enemy bị slow nặng hơn, Sadist's Mercy muốn enemy mạnh hơn để đổi lấy một mechanic khác của build đó. Không nên dùng cả hai.

## Lucky Deflect khi ở Low Life

Low Life trong POE2 là ≤35% maximum HP. Khi ở Low Life, mỗi roll Deflect trở thành Lucky — nghĩa là roll 2 lần và lấy kết quả cao hơn. Công thức: nếu base deflect chance là *p*, effective deflect khi Lucky = 1 − (1 − p)².

Ví dụ với số cụ thể:

- Base 40% → Lucky: 1 − 0,6² = **64%**
- Base 50% → Lucky: 1 − 0,5² = **75%**
- Base 60% → Lucky: 1 − 0,4² = **84%**

Với evasion cao từ chest cộng gear evasion từ các slot khác, một build đầu tư Deflect có thể đạt base 40–50% tương đối dễ. Pin character ở Low Life permanent qua reservation aura (hoặc CI với 1 HP) là điều kiện để lucky always-on — khi đó 64–75% deflect kết hợp với evasion cao tạo ra lớp phòng thủ khá vững, đặc biệt với hit nhỏ và mid-size.

## Attribute requirements nhân đôi là drawback thật

100% increased Attribute Requirements làm tăng gấp đôi attribute requirements trên tất cả gear đang trang bị. Một vũ khí cần 120 Dex giờ cần 240. Một helmet cần 80 Str giờ cần 160. Bất kỳ item nào có mixed Str/Int requirements đột nhiên đòi hỏi rất nhiều attribute.

Hệ quả: build dùng Auspex gần như buộc phải đi thuần Dex gear — evasion armour từ đầu đến chân, weapons Dex-based (bow, dagger, claw, spear cho Huntress), ring và amulet ưu tiên Dex hoặc resist/life. Str/Int investment bị doubled requirements nuốt trọn. Đây là lý do Class phù hợp nhất là Huntress (Ranger), vốn cap Dex tự nhiên từ ascendancy và passive tree. Class Str/Int như Warrior hay Witch cần đầu tư attribute rất nặng — không phải không dùng được, nhưng chi phí gear tăng rõ rệt.

## Build archetypes phù hợp

Evasion-deflect Huntress/Ranger là core user tự nhiên: cap Dex sẵn, gear thuần evasion dễ tìm, Deflect dễ đầu tư từ passive tree, và low-life through reservation aura là pattern sẵn có. Raven cull-frenzy stack tốt với attack build vì Frenzy buff cả attack speed lẫn damage.

Monk Martial Artist với [Facebreaker](/guides/facebreaker) là combo hợp lý về concept — Raven utility kết hợp gloves unique cùng patch — nhưng Monk là Str/Int class. Doubled Attribute Requirements sẽ taxing nặng nếu build muốn đeo bất kỳ item Str/Int nào, kể cả Facebreaker (Facebreaker có Str requirement). Khả thi nhưng attribute investment cao hơn bình thường đáng kể.

Build swarm minion không hợp vì The Auspex grant đúng một companion duy nhất — lợi thế nằm ở utility của Raven, không phải số lượng. Build kiter xa cũng mất phần Gruelling Madness hoàn toàn vì không ở gần enemy.

## Failure modes

**Attribute trap khi gear lên**: doubled requirements làm phần lớn BiS rare roll khó pass hơn, đặc biệt weapons với physical damage cao thường có Dex+Str mixed requirement.

**Low life là ngưỡng nguy hiểm**: 35% HP là ngưỡng mà một hit lớn có thể one-shot. Lucky deflect giảm xác suất bị hit, không loại trừ. Nếu EHP không đủ, duy trì low-life permanent tạo rủi ro cao ở T15+ hoặc Pinnacle.

**Gruelling Madness không stack vs boss mobile**: Boss teleport, rush hay di chuyển nhiều sẽ liên tục thoát Presence, stacks reset hoặc không đủ thời gian tích. Layer này thực sự chỉ mạnh với boss đứng yên (Simulacrum Scions, Pinnacle melee-range).

**Mist Raven cạnh tranh Spirit**: Nếu build đang run nhiều aura reservation và Trusted Kinship, thêm một companion (Raven) sẽ cắt vào Spirit budget. Cần tính trước reservation khi planning Spirit allocation.

**No Regen map mod**: nếu build dựa vào life flask để maintain low life ổn định, No Regen làm vòng lặp bất ổn.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Item được giới thiệu. Thuộc loot pool Delirium, grouped với The Raven Trickster boss — cùng nhóm Sadist's Mercy, Horror's Flight, Veilpiercer.

## Relationships

- **synergizes_with** [Facebreaker](/guides/facebreaker) — unique gloves cùng patch 0.5.0, được GGG reveal cùng lúc với Auspex; synergy concept với Monk Martial Artist Stonefist build path.
