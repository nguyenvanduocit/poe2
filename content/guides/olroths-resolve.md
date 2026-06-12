---
template: templates/mechanic-template.md
document_type: mechanic
title: Olroth's Resolve
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
  - life-flask
  - guard
  - recovery
  - poe2
  - mechanic
---

# Olroth's Resolve

:wiki-link{url="https://www.poe2wiki.net/wiki/Olroth%27s_Resolve"} là unique Ultimate Life Flask, yêu cầu Level 60, drop từ :wiki-link{url="https://www.poe2wiki.net/wiki/Olroth%2C_Origin_of_the_Fall"} Olroth, Origin of the Fall — pinnacle boss Expedition. Trong top-XP của poe.ninja, một phần nhỏ build chọn flask này. Patch 0.5 redesign lại hoàn toàn so với 0.4: bỏ Instant Recovery và cơ chế "Excess Life Recovery as Guard", thay bằng hai mod tương tác trực tiếp với :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} Runic Ward — regenerate Ward trong suốt thời gian hiệu lực, rồi chuyển lượng Ward đang có thành :wiki-link{url="https://www.poe2wiki.net/wiki/Guard"} Guard khi hiệu lực kết thúc.

## Chỉ số

```
Olroth's Resolve
Ultimate Life Flask
Recovers 920 Life over 3.00 Seconds
Consumes (20–25) of 75 Charges on use
Requires Level 60
────────────────────────────────────────────
(100–150)% increased Charges per use
Regenerate (2.5–5)% of maximum Runic Ward per second during Effect
Gain Guard equal to Current Runic Ward for 10 seconds when Effect ends
────────────────────────────────────────────
"Olroth the Gallant,
tireless and true,
he fights for me,
he fights for you!"
```

Mod "(100–150)% increased Charges per use" nhân lên từ base 10 charges của Ultimate Life Flask, nên mỗi lần dùng tiêu 20–25 charges. Với 75 charges tổng, bạn có 3 đến 3.75 lần dùng per full flask.

## Cơ chế hai tầng khi hiệu lực kết thúc

Khi nhấn flask, hai việc xảy ra song song trong 3 giây hiệu lực. Character nhận 920 life trả đều. Đồng thời, Runic Ward được regen thêm 2.5–5% max Ward mỗi giây từ flask — cộng vào tốc độ regen cơ bản 5%/giây của Ward, tổng 7.5–10%/giây trong khoảng đó. Nếu Ward trống khi nhấn, flask có thể regen lại tối đa 22.5–30% max Ward trước khi hết.

Khi hết 3 giây, game đọc lượng Runic Ward hiện tại và trao cho character một Guard bằng đúng con số đó, giữ trong 10 giây. :wiki-link{url="https://www.poe2wiki.net/wiki/Guard"} Guard là lớp absorb tạm thời đứng trước life và Energy Shield: mọi damage vào phải đi qua Guard trước. Ward không bị tiêu hủy hay convert — Guard được thêm vào như một lớp riêng biệt, còn Ward tiếp tục tồn tại sau đó.

Kết quả là 10 giây sau khi flask hết, character có đồng thời Guard (absorb buffer từ Ward amount lúc kết thúc) và Ward vẫn còn (last-resort defense nếu life chạm 0). Hai lớp này chồng lên nhau thay vì thay thế nhau.

Guard value bằng đúng lượng Ward còn lại lúc flask kết thúc, không phải max Ward. Build có max Ward 500 nhưng Ward chỉ còn 80 khi flask hết thì nhận 80 Guard, không phải 500.

## Guard đạt giá trị tối đa khi Ward còn đầy

Scenario tốt nhất là nhấn flask khi Ward vẫn full. Với max Ward 500: flask bonus regen 7.5–10%/giây giữ Ward ổn định trong 3 giây; khi flask kết thúc, 500 Guard trong 10 giây — một lớp absorb đáng kể cho hầu hết endgame content.

Trong combat thực tế, hit lớn thường đồng thời drops life và depletes Ward, buộc nhấn flask lúc khẩn cấp. Lúc đó Ward đã mất một phần. Flask regen 7.5–10%/giây trong 3 giây từ mức Ward thấp: với max Ward 500 và Ward ban đầu ở 0, flask regen lại 22.5–30% × 500 = 112–150 Ward, tức Guard chỉ 112–150 khi flask hết. Vẫn có Guard, nhưng kém hơn đáng kể so với kịch bản Ward còn đầy.

Chiến thuật tối ưu: nhấn flask trước đoạn nguy hiểm thay vì sau khi đã bị hit. Nhấn khi Ward vẫn còn cao — life recovery 920 chạy song song, Guard đầy đủ sẵn sàng khi 3 giây qua. Build đầu tư max Ward cao hơn (qua :wiki-link{url="https://www.poe2wiki.net/wiki/Ward_Rune"} Ward Rune, :wiki-link{url="https://www.poe2wiki.net/wiki/Charging_Rune"} Charging Rune, passive tree node grant Ward) thì Guard ceiling của flask cũng cao hơn tương ứng.

"% increased Life Recovery from Flasks" và flask effect modifier tăng lượng 920 life nhận được nhưng không ảnh hưởng Guard — Guard đến từ Ward, không từ life recovery.

## Khi flask này không hiệu quả

Build không có bất kỳ nguồn Runic Ward nào (không có item hay rune nào grant Ward) sẽ nhận Guard = 0 khi flask kết thúc. Lúc đó flask chỉ còn là life recovery bình thường không có Instant Recovery — kém hơn nhiều so với plain Ultimate Life Flask có charge efficiency tốt hơn.

Map mod "No Regeneration" blocks Ward regen tự nhiên và có thể ảnh hưởng bonus regen từ flask. Khi vào league, log Ward amount trước và sau flask dưới no-regen mod để xác nhận mức độ — nếu bonus regen cũng bị block, Guard value về 0 dưới mod này.

Scenario mất cả life lẫn Ward đồng thời trong T17 hay Pinnacle slam: Guard từ flask ở mức 112–150 (với max Ward 500 bị depleted), không đủ absorb thêm một hit lớn tiếp theo. Flask vẫn cho life recovery nhưng Guard payoff không cứu được burst damage thật sự trong tình huống đó.

## Khi nào flask này phù hợp

Verdict: EXPLOITABLE cho build đầu tư Runic Ward ở mức trung bình đến cao. Build Expedition-heavy thường đeo Runeforged gear có Ward rune trên nhiều slot — 6 slot đeo Perfect Ward Rune (+30 mỗi slot) cho 180 Ward từ rune đơn thuần, cộng thêm passive tree node và item grant Ward khác, pool thực tế dao động rộng tùy build. Guard từ flask phản ánh đúng con số Ward đang có lúc kết thúc hiệu lực, và là lớp absorb bổ sung 10 giây mỗi lần nhấn. Build đầu tư Ward chọn flask này vì Guard payoff khi Ward đã được stack, không phải vì life recovery.

Build chưa invest Ward hoặc không dùng Runeforged gear sẽ không thấy khác biệt so với flask thường.

## Version History

### Patch 0.5.0 (Return of the Ancients)

Redesign hoàn toàn. Bỏ Instant Recovery và "Excess Life Recovery added as Guard for 20 seconds". Thay bằng "Regenerate (2.5–5)% of maximum Runic Ward per second during Effect" và "Gain Guard equal to Current Runic Ward for 10 seconds when Effect ends". Guard duration về 10 giây (giảm từ 20 giây của bản 0.4), nhưng Guard value giờ dựa vào Runic Ward pool thật thay vì excess life recovery. Silent rework, không được nhắc trong patch note chính thức 0.5.0; xác nhận từ poedb.

### Patch 0.4.0

Guard duration tăng từ 10 giây lên 20 giây trên cơ chế cũ (Excess Life Recovery as Guard).

### Patch 0.1.0

Item ra mắt với Instant Recovery, (100–150)% increased Charges per use, và Excess Life Recovery added as Guard for 10 seconds.

## Relationships

- **related_mechanics** [Runic Ward Onslaught Loop cho Minion](/guides/0-5-runic-ward-onslaught-loop) — cơ chế Runic Ward và cách stack pool; Ward ceiling ảnh hưởng trực tiếp Guard value của flask này.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league 0.5 giới thiệu Runeforging và Runic Ward, tiền đề cho thiết kế lại của flask này.
- **related** [0.5 New Unique Items Overview](/guides/0-5-new-unique-items) — tổng quan các unique mới cùng patch.
