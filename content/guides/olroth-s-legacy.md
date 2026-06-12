---
template: templates/mechanic-template.md
document_type: mechanic
title: Olroth's Legacy
status: published
author: duocnv
created: '2026-05-10'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: crafting
tags:
  - rune
  - unique
  - crafting
  - olroth
  - kalguuran
  - ezomyte
  - poe2
  - mechanic
---

# Olroth's Legacy

Olroth's Legacy là rune dùng một lần: áp nó lên một unique thuộc nhóm **Ezomyte** hoặc **Kalguuran**, unique đó bị phá huỷ vĩnh viễn, và một modifier đặc trưng của nó được đúc thành một socketable rune mang tên "Legacy of \<unique\>". Rune đó gắn vào item **cùng class** với unique gốc. Về mặt thiết kế, đây là cơ chế transplant mod — lấy một mod đỉnh ra khỏi unique có base rác, dán nó lên một base crafted tốt hơn nhiều. Patch 0.5.0 thêm hơn 60 loại rune theo cơ chế này, tức gần như mọi unique Ezomyte/Kalguuran trong game đều có một rune tương ứng.

## Mỗi unique cho đúng một rune cố định

Mỗi unique Ezomyte/Kalguuran gắn với một rune định sẵn — phá Svalinn thì luôn ra "Legacy of Svalinn" mang lucky block, không roll ngẫu nhiên. Điều này khớp với cách GGG thiết kế catalog: 60+ loại rune bao phủ đúng tập hơn 60 unique trong hai nhóm đó, không phải một pool chung. Phá nhiều lần cùng unique vẫn ra cùng mod; mua thêm Svalinn thứ hai chỉ có nghĩa nếu bạn muốn thêm một rune lucky block cho gear set khác.

Một unique trong target list không phải nguồn vô tận — class restriction cứng. Rune từ :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} là shield, nên chỉ gắn được vào shield. Rune từ bow unique chỉ về bow, từ body armour chỉ về body armour. Không có cross-class, không có exception.

Có một điều GGG xác nhận ngay từ trước launch vẫn còn nguyên: mod convert sang rune đôi khi bị giảm value so với mod gốc trên unique. Không phải mod nào cũng bị cắt — một số giữ nguyên, một số tụt xuống — và không có công thức công khai. Khi target một rune, tính value ở mức "một phần mod gốc" thay vì assume full 100%.

## Tại sao unique với một mod đỉnh là target lý tưởng

Phá unique là one-way: item bay, chỉ còn một mod dưới dạng rune. Nếu unique có ba-bốn mod đáng giá, bạn tự nguyện bỏ hai-ba cái còn lại — đó là lý do unique "nhiều mod tốt" thường *không* phải target tốt cho cơ chế này. Target lý tưởng là unique mà phần lớn giá trị tập trung vào đúng một mod đặc trưng, còn lại là stat nền bình thường hoặc tệ. Khi phá xong, bạn không tiếc gì — đó là dấu hiệu bạn chọn đúng.

Hệ quả kinh tế: unique thuộc loại này tăng giá league vì demand đến từ cả "người muốn đeo nguyên" lẫn "người muốn lấy rune". Ngược lại, unique nhiều mod mạnh nhưng không có một mod nào đứng tuyệt đối thì giữ giá thấp hơn kỳ vọng vì không ai đủ cam tâm phá để lấy một trong số đó.

## Target uniques đáng phân tích

**Svalinn (shield).** Unique này chỉ có một mod thật sự là lý do tồn tại: *Chance to Block Damage is Lucky*. Lucky block tức là roll block chance hai lần và lấy lần tốt hơn — công thức effective là 1 − (1 − p)², nên base 50% block thành ~75% effective, base 60% thành ~84%. Phần còn lại của :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} là Crucible Tower Shield có 200-300% increased Armour và dấu You take 0-20% of damage from Blocked Hits — cả hai mod này phụ thuộc vào base shield, không phải mod đặc trưng. Phá Svalinn để lấy lucky block dán lên một shield thật (life + res + spell block đầy đủ) là một trong những defense trade-off có lợi nhất league cho bất kỳ build invest block cao nào. Build không đi block thì rune này không liên quan.

**Quill Rain (bow).** :wiki-link{url="https://www.poe2wiki.net/wiki/Quill_Rain"} có 100% increased Attack Speed local — khi convert thành rune và gắn vào một bow base ngon, đây là tốc đánh local khổng lồ không phụ thuộc vào bất kỳ tree node hay passive nào. Quill Rain gốc đi kèm *40% less Attack Damage* — một modifier riêng, tách biệt với dòng attack speed. Vì Olroth's Legacy chỉ extract đúng một modifier, rune lấy được là 100% increased Attack Speed và không kéo theo dòng less-damage. Đây chính là lý do Quill Rain là target hấp dẫn: bạn lấy tốc đánh local khổng lồ và bỏ lại đúng cái downside định nghĩa unique gốc.

**Ironbound (bow).** Unique bow mới của 0.5, phân loại Ezomyte. Mod đặc trưng: *Arrows Return if they have Pierced a target which had Fully Broken Armour*. Một mũi tên trúng → pierced → arrow return = hit hai lần cùng enemy nếu armour của nó đã bị break hoàn toàn. :wiki-link{url="https://www.poe2wiki.net/wiki/Ironbound"} còn có +12% block chance và 3-5% increased block per 100 armour trên equipped armour — nên đây cũng là bow dành cho build đeo armour item để stack block (không phải bow thông thường). Rune extract ra mod arrow-return về một bow khác nghe mạnh, nhưng điều kiện "Fully Broken Armour" đòi build phải có nguồn armour break chủ động — không phải mọi bow build đều xử lý được. Pair tốt với support :wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Stun"} hoặc mod armour break trên quiver/passive.

**Keeper of the Arc (helmet, Kalguuran).** Mod đặc trưng: alternating every 5 seconds — *Take 40% less Damage from Hits* và *Take 40% less Damage over Time*, luân phiên từng pha. Một unique helmet cho 40% less damage là defense tier không có base helmet crafted nào bì được. Sau khi extract thành rune, value có thể bị giảm như mọi mod convert, nhưng kể cả sau khi giảm, một rune cho "take less Damage" dán lên helmet thật có life + res + armour vẫn là upgrade defensive cực lớn. Target cho bất kỳ build nào cần defense layer không phụ thuộc class hay weapon type.

**Irongrasp (body armour).** :wiki-link{url="https://www.poe2wiki.net/wiki/Irongrasp"} cấp hai keystone cùng lúc: *Iron Grip* (1% increased projectile attack damage per 2 Strength, nhưng Strength mất inherent Life bonus) và *Iron Will* (1% increased spell damage per 2 Strength, tương tự). Hai keystone này không tồn tại trên passive tree — chỉ có từ unique này. Extract thành rune mang một trong hai; nếu extract Iron Grip, build strength-stacking dùng projectile attack được bonus damage từ Strength mà không tốn body slot vào Irongrasp. Irongrasp base là Vagabond Armour (armour + evasion cấp 16) — base quá thấp cho endgame, nên giá trị thật sự của unique này nằm hoàn toàn ở hai keystone, đây là pattern phá lý tưởng. Chú ý: rune chỉ cho một trong hai keystone, không phải cả hai.

## Modifier không extract được

Skill gem gắn vào unique không tách ra được. Những unique cấp active skill thông qua text "Grants Skill" — như :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} cho Raise Shield và Cast on Block, hoặc Mjolner cho Thunder God's Wrath — GGG giữ active skill gắn liền với unique object. Phá những unique này để lấy skill sẽ không cho rune skill; chỉ lấy được stat modifier khác nếu có. Nhắm mod stat, không nhắm skill.

Keystone rune không double với keystone trên tree. Allocate Iron Grip trên passive tree đồng thời cắm rune Legacy of Irongrasp không cho hai lần lợi. Game xử lý keystone như binary toggle — đã có từ bất kỳ nguồn nào là đã có, cộng thêm không thay đổi gì.

Class restriction là tuyệt đối và không có exception. Rune từ two-handed weapon không về one-handed weapon cùng type, rune từ bow không về quiver, rune từ armour không về belt hay ring.

## Lỗi hay gặp

Mua unique để destroy rồi mới nhận ra gear đích không cùng class hoặc đã đầy rune socket là lỗi tốn tiền nhất. Xác nhận class và socket trước khi mua.

Nhắm unique nhiều mod mạnh vì nghĩ "value cao" thì extract sẽ được nhiều. Không phải — phá chỉ ra một mod. Unique có 4 mod tốt ngang nhau là target tệ; unique có 1 mod thống trị là target tốt.

Cắm rune legacy vào gear tạm rồi quên mất khi upgrade slot đó. Rune legendary không tự dịch chuyển — khi upgrade piece chứa rune, phải chủ động unequip và re-socket thủ công vào piece mới.

Giả định mọi unique đều thuộc Ezomyte hoặc Kalguuran. Chỉ hai nhóm đó; unique từ civilisation khác không thuộc target list và Olroth's Legacy không áp dụng được.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Cơ chế ra mắt cùng league: hơn 60 rune legacy, mỗi loại tương ứng với một unique Ezomyte hoặc Kalguuran. Bản thân rune Olroth's Legacy drop từ Kalguuran endgame content (Ocean Exploring) và trade trong league.

## Relationships

- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview các thay đổi 0.5.0 trong đó có cả hệ rune legacy và Ocean Exploring.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — companion build invest block cao hưởng lợi trực tiếp từ rune lucky block của Svalinn.
- **related_mechanics** [Unique Items Mới & Meta Shift](/guides/0-5-new-unique-items) — Ironbound là Ezomyte unique mới của 0.5 và thuộc target list của cơ chế này.
