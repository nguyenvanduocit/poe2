---
template: templates/mechanic-template.md
document_type: mechanic
title: Amor Mandragora
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
sub_class: items
tags:
  - item
  - unique
  - talisman
  - poe2
  - mechanic
---

# Amor Mandragora

Amor Mandragora là unique :wiki-link{url="https://www.poe2wiki.net/wiki/Changeling_Talisman"} Changeling Talisman — vũ khí hai tay dành riêng cho Druid — với yêu cầu Level 1, nghĩa là có thể equip ngay từ đầu campaign. Mechanic trục là :wiki-link{url="https://www.poe2wiki.net/wiki/Druidic_Prowess"} Druidic Prowess: buff stacking tối đa 3 lớp, mỗi lớp cho +10% Skill Speed và biến spell hit thành nguồn nạp :wiki-link{url="https://www.poe2wiki.net/wiki/Rage"} Rage, tạo vòng lặp tự duy trì cho build Druid lai spell với Rage. Item dùng nhiều nhất trên Shaman và các build Druid cần Rage-Skill Speed loop trong campaign đến early endgame.

## Chỉ số cơ bản

```
Amor Mandragora
Changeling Talisman
Physical Damage: (25-29) to (38-42)
Critical Hit Chance: 8%
Attacks per Second: 1.25
Weapon Range: 1.2 metres
Requires: Level 1
──────────────────────────────────────────────
Adds (16-20) to (23-27) Physical Damage
+(8-15) to Intelligence
(10-15)% increased Skill Effect Duration
Enemies in your Presence are Hindered
Gain 1 Druidic Prowess for every 20 total Rage spent
──────────────────────────────────────────────
"A sensitive few among the first settlers of Ezomyr
followed the wisps by canoe. On a misty forested
island, Cirel of Tarth stood waiting to greet them."
```

## Vòng lặp Druidic Prowess

:wiki-link{url="https://www.poe2wiki.net/wiki/Druidic_Prowess"} Druidic Prowess là buff stacking với tối đa 3 lớp, mỗi lớp có timer 10 giây độc lập. Mỗi lần character tích lũy đủ 20 Rage spent (Rage tiêu qua skill, warcry, hay passive cost), một lớp mới được cấp. Cấu trúc buff:

- 1 lớp: +10% Skill Speed; spell hit trên enemy grant 3 Rage
- 2 lớp: +20% Skill Speed; spell hit grant 6 Rage tổng
- 3 lớp: +30% Skill Speed; spell hit grant 9 Rage tổng

Buff tồn tại xuyên weapon swap.

Con số đáng chú ý là 30% Skill Speed ở 3 lớp. :wiki-link{url="https://www.poe2wiki.net/wiki/Skill_Speed"} Skill Speed trong POE2 ảnh hưởng đồng thời attack speed, cast speed, và warcry speed — không tách riêng từng loại. Đây là multiplier hiếm và rộng, nên một build mix nhiều loại action (slam + warcry + spell) hưởng lợi trực tiếp từ cả ba.

Vòng lặp tự duy trì hình thành khi build vừa chi Rage vừa cast spell. Ví dụ cụ thể với Shaman dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Cry"}: warcry tiêu Rage qua cơ chế :wiki-link{url="https://www.poe2wiki.net/wiki/Furious_Wellspring"} Furious Wellspring (Skills have +5 to Rage cost) → 60 Rage spent tích lũy cho 3 lớp Prowess → cast spell trong combat → mỗi spell hit trả về 3 Rage per lớp, tổng 9 Rage tại 3 lớp active. Cần lưu ý: chỉ một hit mỗi 0.5 giây có thể trigger Rage gain — đây là rate-limit của cơ chế Rage cơ bản trong game, áp dụng cho mọi nguồn Rage từ hit kể cả Druidic Prowess. Rage thu về tiếp tục được tiêu qua attack và warcry → mỗi 20 Rage tiêu tạo ra một lớp Prowess mới, refresh lớp gần hết hạn trước khi timer 10 giây cạn. Ở cast speed bình thường, rate-limit 0.5 giây vẫn đủ để gom 20 Rage trong 10 giây — loop duy trì được, nhưng build phải hit bằng spell đều đặn chứ không tự nạp passive.

Điểm cần nhớ: lớp Druidic Prowess không phải một "counter" tăng dần vô hạn — 3 lớp là cap, và mỗi lớp chỉ được refresh khi character tiếp tục chi Rage. Build không chi Rage sẽ mất lớp sau đúng 10 giây không tích.

## Hinder trong Presence, Duration, và Intelligence

Ba mod còn lại phục vụ utility rộng thay vì một cơ chế duy nhất.

"Enemies in your :wiki-link{url="https://www.poe2wiki.net/wiki/Presence"} Presence are :wiki-link{url="https://www.poe2wiki.net/wiki/Hinder"} Hindered" áp 30% giảm movement speed lên tất cả enemy đứng trong vùng xung quanh character — không cần action, không cần trigger. Với build melee hay shapeshifter phải vào gần để đánh, Hinder thụ động giữ enemy chậm hơn 30%, giảm tần suất bị đuổi kịp và boss rush vào mặt. Nó không ảnh hưởng attack/cast speed của enemy, chỉ movement.

(10–15)% increased Skill Effect Duration mở rộng thời gian của buff, debuff, và duration-based skill. Với Druid, shapeshift form duration dài hơn, warcry uptime cao hơn, và curse áp vào enemy như :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} Temporal Chains kéo dài thêm tỉ lệ tương ứng. Druidic Prowess bản thân là buff với timer 10 giây — Skill Effect Duration KHÔNG kéo dài timer Prowess (buff mechanic riêng, không phải "skill effect"), nhưng nó hỗ trợ tốt cho các skill khác trong kit.

+(8–15) to Intelligence đóng góp stat cho passive tree và gem requirement. Druid sử dụng một số lượng đáng kể skill cần Int (Discipline, spell gem, curse), nên flat Int từ weapon không phải slot dead.

## Build Druid nào muốn item này

Amor Mandragora phục vụ cụ thể cho build Druid tạo và chi Rage trong combat, đặc biệt khi kit kết hợp spell với melee hay warcry.

:wiki-link{url="https://www.poe2wiki.net/wiki/Shaman"} Shaman là người dùng rõ nhất. Ascendancy notable :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} Commanding Rage quy đổi mỗi 5 Rage thành 2% increased Minion Attack Speed — tức Rage là trực tiếp stat offensive. :wiki-link{url="https://www.poe2wiki.net/wiki/Druidic_Champion"} Druidic Champion (gating notable trên Shaman tree) cho "Every 2 Rage also grants 1% more Spell damage", cộng thêm lý do giữ Rage cao. Amor Mandragora hoàn thiện trục đó: spend Rage để lấy Prowess → cast spell để nạp lại Rage → Prowess 30% Skill Speed đẩy cast speed và warcry speed lên, tăng throughput toàn bộ kit.

Build Bear/Werewolf shapeshifter thiên physical cũng hưởng 30% Skill Speed từ 3 lớp Prowess — hình dạng slam hay strike đều scale theo Skill Speed vì Skill Speed áp vào attack speed. Hinder trong Presence là QoL rõ ràng khi Bear phải đứng sát boss để đánh.

Changeling Talisman không phải base endgame — :wiki-link{url="https://www.poe2wiki.net/wiki/Maji_Talisman"} Maji Talisman (Level 79) là đích cần đến ở endgame để maximize weapon pDPS. Amor Mandragora phù hợp nhất từ campaign qua maps thấp đến mid, khi lợi thế từ Prowess loop vượt trội hơn sự thiếu hụt base physical damage của Changeling Talisman. Item cũng có thể chanced từ bất kỳ Changeling Talisman nào nhờ drop rate không bị restrict địa điểm.

Build Shaman và shapeshifter Druid chạy Rage có lý do rõ ràng để equip từ màn đầu đến maps tier trung — Level 1 nghĩa là không bao giờ bị block về attribute, và Hinder passive cùng Prowess loop tạo ra utility không item nào ở tier này cung cấp đồng thời. Theo dõi khi vào endgame liệu GGG có adjust Prowess loop — hiệu lực rộng ảnh hưởng attack, cast, và warcry speed cùng lúc thường là dấu hiệu GGG để mắt đến cơ chế.

## Version History

### Patch 0.4.0

Item ra mắt lần đầu. Drop anywhere, có thể chance.

## Relationships

- **related_mechanics** [Talisman crafting](/mechanics/crafting/talisman-crafting) — context về weapon class Talisman cho Druid, base tier hierarchy, và Runeforging workflow trên các Talisman base.
- **related_mechanics** [Raging Spectre Shaman](/builds/druid/raging-spectre-shaman) — build Shaman dùng Rage + warcry làm trục scaling, user chính của Amor Mandragora ở meta 0.5.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview league 0.5, Runeforging mechanic, và Medved's Crest của forge master.
