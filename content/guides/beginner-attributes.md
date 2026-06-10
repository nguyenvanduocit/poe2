---
template: templates/guide-template.md
document_type: guide
title: "Ba chỉ số cơ bản: Strength, Dexterity, Intelligence"
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
  - attributes
  - stat-requirements
---

# Ba chỉ số cơ bản: Strength, Dexterity, Intelligence

Mọi character trong POE2 đều có ba attribute: :wiki-link{url="https://www.poe2wiki.net/wiki/Strength"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Dexterity"}, và :wiki-link{url="https://www.poe2wiki.net/wiki/Intelligence"}. Ba con số này không chỉ là thematic flavour của class — chúng quyết định trực tiếp gear nào mặc được, gem nào dùng được, và cho bonus tự động theo từng point. Hiểu attribute từ sớm giúp tránh được tình huống quen thuộc với người mới: tìm được item xịn nhưng mặc không lên vì thiếu stat.

## Mỗi attribute tự động cho bonus gì

Ba attribute đều cho bonus tự nhiên theo số point đang có — không cần làm gì thêm, game tự tính.

Strength cho **+2 maximum :wiki-link{url="https://www.poe2wiki.net/wiki/Life"} mỗi point**. Character có 150 Str thì nhận thêm 300 Life từ stat này, hoàn toàn độc lập với Life pool từ gear hay passive tree. Đây là lý do melee build thường stack Str cao — mỗi node passive cho +10 Str thực ra cũng là Life node gián tiếp.

Dexterity cho **+6 :wiki-link{url="https://www.poe2wiki.net/wiki/Accuracy_Rating"} mỗi point**. Character cũng tự nhận **+6 Accuracy Rating mỗi level** — bonus này đến từ level up, không liên quan Dex.

Intelligence cho **+2 maximum :wiki-link{url="https://www.poe2wiki.net/wiki/Mana"} mỗi point**. Tương tự như Str và Life, Intelligence là cách gián tiếp tăng Mana pool ngoài gear và passive tree.

Điều quan trọng cần nhớ: ba attribute này **chỉ cho ba bonus trên và không có gì thêm**. Strength không tăng damage melee, Dexterity không tăng dodge chance, Intelligence không tăng spell damage hay cast speed. Những modifier đó đến từ gear mod và passive node riêng — bản thân attribute chỉ là gateway để equip gear và một số bonus pool cơ bản.

## Attribute gắn với loại gear và skill nào

Mỗi attribute là requirement của một nhóm gear và skill nhất định — pattern này nhất quán xuyên suốt POE2.

Strength là requirement của gear cho :wiki-link{url="https://www.poe2wiki.net/wiki/Armour"} — body armour, helm, gloves, boots loại Armour thuần hoặc hybrid đều cần Str. Melee weapon (sword, axe, mace, spear) và skill melee cũng gắn với Str. Warrior và Marauder bắt đầu với Str base cao nhất trong số tất cả class.

Dexterity là requirement của gear cho :wiki-link{url="https://www.poe2wiki.net/wiki/Evasion_Rating"} — loại gear nhẹ cho Evasion Rating cần Dex. Ranged weapon (bow, crossbow) và skill ranged gắn với Dex. Ranger và Huntress bắt đầu với Dex base cao nhất trong số tất cả class.

Intelligence là requirement của gear cho :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} — circlet, ES body armour, wand, sceptre, staff đều cần Int. Witch và Sorceress bắt đầu với Int base cao.

Gear hybrid — ví dụ body armour cho cả Armour lẫn Evasion — thường yêu cầu cả hai attribute tương ứng cùng một lúc. Một số gear endgame yêu cầu cả ba attribute, buộc build phải đầu tư đa dạng hơn vào passive tree.

## Thiếu attribute thì item highlight đỏ và không dùng được

Đây là tình huống người mới hay gặp mà không hiểu nguyên nhân ngay. Khi character thiếu attribute để equip một item, item đó highlight đỏ trong inventory và không kéo vào slot được. Tooltip của item vẫn hiện bình thường, nhưng dòng requirement sẽ đỏ để chỉ rõ stat nào đang thiếu và thiếu bao nhiêu.

Với skill gem, cơ chế tương tự: gem có requirement attribute nhất định, thiếu thì gem không active và skill không dùng được. Trường hợp hay gặp nhất là lên level cao hơn và equip gem mới có requirement vượt attribute hiện tại, hoặc swap gear giữa trận làm attribute tụt dưới threshold của gem đang dùng.

Có một scenario đặc biệt cần cẩn thận: khi tháo một item đang cho attribute (ví dụ ring cho +30 Str), attribute tụt xuống có thể kéo theo cascade — body armour không còn đáp ứng requirement, game tự unequip, mất toàn bộ stat từ body armour đó. Chain tháo gear không chủ ý xảy ra khi attribute trong inventory quản lý theo kiểu "gỡ cái A ra trước thì cái B không còn đáp ứng requirement nữa".

## Cách tăng attribute trong passive tree và gear

Passive tree rải node attribute khắp nơi. Node nhỏ thường cho +5 Str, +5 Dex, +5 Int, hoặc +5 all Attributes. Node notable và keystone area thường cho +10 đến +30 một loại attribute. Build hybrid — dùng cả Armour lẫn ES chẳng hạn — hay cần chủ động đi qua một số node attribute để đáp ứng requirement gear endgame, ngay cả khi những node đó không trực tiếp trên đường đi.

Trên gear, **ring** và **amulet** là hai slot dễ lấy attribute nhất. Mod `+X to Strength`, `+X to Dexterity`, `+X to Intelligence`, và `+X to all Attributes` đều roll được trên ring và amulet. :wiki-link{url="https://www.poe2wiki.net/wiki/Stellar_Amulet"} là base amulet có **+(5-7) to all Attributes** làm implicit — nghĩa là ngay cả khi không roll thêm mod attribute nào, nó vẫn đóng góp một lượng base nhất định.

Khi thiếu một attribute cụ thể và không muốn thay đổi passive path, cách nhanh nhất là thay ring hoặc amulet có mod attribute tương ứng. Một ring với +30 Str thường đủ để mở khóa hầu hết gear Armour endgame mà không cần điều chỉnh gì trong tree.

## Relationships

- **related** [Ba lớp phòng thủ: Armour, Evasion, Energy Shield](/guides/beginner-defence-layers) — Str/Dex/Int gắn trực tiếp với ba loại defence, mỗi attribute là requirement của loại gear tương ứng.
- **related** [Life, Energy Shield và Mana](/guides/beginner-life-es-mana) — Str cho +2 Life/point và Int cho +2 Mana/point là hai bonus attribute ảnh hưởng trực tiếp đến ba resource chính của character.
- **related** [Passive tree: cách phân bổ point](/guides/beginner-passive-tree) — node attribute trong passive tree là nguồn tăng Str/Dex/Int quan trọng, đặc biệt với build cần đáp ứng requirement gear hybrid.
- **related** [Skill gem: cách lấy và dùng](/guides/beginner-skill-gem) — gem có attribute requirement, thiếu stat thì gem không active dù đã socket đúng chỗ.
