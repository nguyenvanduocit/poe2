---
template: templates/mechanic-template.md
document_type: mechanic
title: Prism of Belief
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.0
sub_class: items
tags:
  - item
  - unique
  - jewel
  - skill-gem-level
  - poe2
  - mechanic
---

# Prism of Belief

:wiki-link{url="https://www.poe2wiki.net/wiki/Prism_of_Belief"} là unique :wiki-link{url="https://www.poe2wiki.net/wiki/Diamond"} jewel, luôn drop đã corrupted từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Arbiter_of_Ash"} — boss endgame drop-restricted nên item không thể chance được. Jewel chỉ có đúng một explicit mod: `+(1–3) to Level of all [Specific Skill] Skills`, trong đó skill cụ thể được chọn ngẫu nhiên lúc item tạo ra và cố định vĩnh viễn vì đã corrupted. Bất kỳ build nào mà gem level của skill chính là trục scale chủ đạo đều tích cực săn đúng roll.

## Chỉ số và base type

```
Prism of Belief
Diamond
Limited To: 1
Requires Level 20
──────────────────────────────────────────────
+(1–3) to Level of all [Specific Skill] Skills
Corrupted

"Entropy can be reversed."
```

Ví dụ roll sample từ trade thực tế: "+1 to Level of all :wiki-link{url="https://www.poe2wiki.net/wiki/Rain_of_Arrows"} Skills" — tên skill cụ thể thay thế placeholder `[Specific Skill]` ngay khi item drop, không phải lúc gắn vào tree.

## Cơ chế random roll được khóa từ lúc drop

Khi Prism of Belief drop, game chọn ngẫu nhiên một skill gem từ pool hợp lệ và ghi tên đó vào mod — vĩnh viễn. Người chơi nhìn vào item và thấy ngay skill đã roll, không có bước "activate" hay "re-roll khi socketing". Vì corrupted, không :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} hay bất kỳ currency nào thay đổi được roll đó.

Roll thực ra có hai trục ngẫu nhiên độc lập: trục đầu chọn skill từ toàn bộ active skill gem và spirit gem trong game, trục thứ hai xác định con số 1, 2, hay 3. Đây là lý do cùng một skill có thể roll +1 hay +3 — hai jewel "+X to Level of all :wiki-link{url="https://www.poe2wiki.net/wiki/Fireball"} Skills" hoàn toàn khác giá trị nếu X khác nhau. Người chơi cần thắng cả hai trục để có jewel tốt nhất.

Pool hợp lệ bao gồm toàn bộ :wiki-link{url="https://www.poe2wiki.net/wiki/Active_skill_gem"} active skill gem lẫn :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_gem"} spirit gem — tức các persistent buff gem như :wiki-link{url="https://www.poe2wiki.net/wiki/Discipline"} hay :wiki-link{url="https://www.poe2wiki.net/wiki/Vitality"} cũng nằm trong pool, không chỉ skill tấn công. :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} Tame Beast và :wiki-link{url="https://www.poe2wiki.net/wiki/Spectre"} Spectre cũng nằm trong pool — quan trọng với companion build và necromancer build vì gem level của hai skill này ảnh hưởng trực tiếp đến sức mạnh companion và spectre.

Mod "Level of all [Skill] Skills" nghĩa là mọi bản cài của skill đó trên character đều nhận bonus cùng lúc. Nếu build đang chạy cùng một skill ở hai gem setup khác nhau, cả hai được nâng level đồng thời từ một jewel duy nhất.

Limited to 1 giới hạn mỗi character chỉ cắm được một Prism of Belief trong passive tree — không stack được nhiều jewel cùng loại.

## Build nào cần jewel này và vì sao

Build mà gem level trực tiếp scale output của skill chính là nhóm hưởng lợi rõ nhất. Với phần lớn active skill, gem level nâng base value của skill: damage, phạm vi, hiệu ứng thứ cấp (số projectile theo level, AoE theo level, giá trị debuff theo level) — toàn bộ stat phụ thuộc level đều lên đồng thời. Đây là lý do một build muốn gem level chính cao nhất có thể, và Prism of Belief roll đúng skill là con đường nhanh nhất để vượt qua level gem thông thường.

Spirit gem build có góc nhìn riêng. Nếu roll trúng một spirit gem quan trọng (Discipline +3, Vitality +3, một aura nào đó build phụ thuộc), hiệu ứng của buff gem đó scale theo level — ES flat từ Discipline cao hơn, life regen từ Vitality nhiều hơn. Build companion dùng Tame Beast hay Spectre cũng vậy: gem level của hai skill này ảnh hưởng đến sức mạnh cơ bản của companion hoặc spectre được triệu hồi.

Thực tế thị trường: phần lớn drop từ Arbiter of Ash roll các skill không ai đang chơi trong meta hiện tại. Build :wiki-link{url="https://www.poe2wiki.net/wiki/Fire_Trap"} không cần "+2 to Level of all :wiki-link{url="https://www.poe2wiki.net/wiki/Lightning_Arrow"} Skills". Các build endgame tích cực mua từ trade đúng roll khớp skill chính của mình — người nhận drop xác định roll mình không cần thì đem bán, người đang chạy skill đó thì mua. Ecosystem này hoạt động vì build count rất đa dạng trong POE2: roll nào cũng có người cần, chỉ cần tìm đúng người.

Build muốn gem level đơn giản nhất là tìm Prism of Belief roll đúng skill mình chạy và ưu tiên +3 — chênh lệch giá trị giữa +1 và +3 trên cùng một skill thường lớn hơn chênh lệch giữa hai skill khác nhau ở cùng roll value.

## Khi nào không cần equip

Build scale damage từ nguồn không liên quan đến gem level của skill chính sẽ không thấy nhiều giá trị. Ví dụ: build scale hoàn toàn từ flat damage weapon (runeforged weapon với Verisium Runeforging đẩy flat phys), trong đó main skill chỉ là delivery vehicle chứ không phải scaling axis — gem level tăng không thay đổi được tỷ số output đáng kể. Tương tự, build dùng một support gem chain phức tạp mà damage đến từ interaction giữa support gem, không phải level của active skill.

Trục khác cần cân nhắc là cạnh tranh jewel socket. Passive tree POE2 có số socket giới hạn, và một rare jewel roll tốt (resist + life + damage modifier phù hợp) đôi khi mang về nhiều stat tổng thể hơn một Prism of Belief roll kém (+1 vào skill chính, thay vì +3). Chênh lệch giá trị giữa "+1 roll" và "+3 roll" của cùng một skill trên trade thường lớn — trả tiền cho +1 roll thay vì tìm rare jewel tốt hơn là trade-off cần cân.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Fixed a bug where Prism of Belief có thể roll modifier cho :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Orb"} — Solar Orb bị loại khỏi pool eligible skills.

### Patch 0.4.0d

Fixed a bug where :wiki-link{url="https://www.poe2wiki.net/wiki/Living_Bomb"} không thể roll — Living Bomb được thêm lại vào pool.

### Patch 0.3.0

:wiki-link{url="https://www.poe2wiki.net/wiki/Flammability"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Hypothermia"}, và :wiki-link{url="https://www.poe2wiki.net/wiki/Conductivity"} được gộp vào :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} — ba curse này không còn roll được nữa. Item đang cầm không bị ảnh hưởng. [Undocumented]

### Patch 0.1.0

Item được giới thiệu.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — The Arbiter of Ash là endgame boss drop source của item, gắn với hệ thống endgame 0.5.
- **related_mechanics** [Unique Items Mới](/mechanics/0-5-new-unique-items) — overview các unique đáng chú ý trong 0.5, context rộng hơn của item này.
- **synergizes_with** [Spirit Walker — Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Tame Beast nằm trong pool eligible skills; build Companion Zoo scale companion level thông qua gem level.
