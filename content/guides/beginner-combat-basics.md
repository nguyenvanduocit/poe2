---
template: templates/guide-template.md
document_type: guide
title: "Parry, combo và WASD: cơ bản combat POE2"
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
  - combat
  - parry
  - shield
  - combo
---

# Parry, combo và WASD: cơ bản combat POE2

POE2 xây dựng lại combat từ gốc so với POE1. Không còn click chuột để di chuyển, không còn đứng yên hứng đòn rồi dựa vào flask. Mỗi class có cách đối phó đòn tấn công khác nhau — Buckler để Parry, Shield để giơ lên chặn, evasion để né hoàn toàn, dodge roll để thoát i-frame. Hiểu từng cái hoạt động khác nhau như thế nào là nền tảng để không chết oan trong endgame.

## WASD là cách điều khiển mặc định của POE2

Trong POE1, di chuyển bằng click chuột trái vào điểm muốn đến. POE2 đổi sang WASD: bốn phím W/A/S/D điều khiển hướng di chuyển trực tiếp, chuột chỉ để nhắm kỹ năng và attack. Đây không phải tùy chọn — đây là cách game design thế giới di chuyển và né đòn.

Lý do thay đổi này quan trọng: với WASD, bạn di chuyển chính xác và liên tục trong khi vẫn nhắm kỹ năng về phía quái. Với click-to-move, mỗi lần click điểm đến mới mất một khoảnh khắc phản ứng. POE2 có boss telegraph rất rõ và window né đòn hẹp — mili-giây đó là sự khác biệt giữa sống và chết. Dodge roll cũng gắn chặt vào WASD: nhấn spacebar trong khi đang giữ hướng WASD thì roll đúng hướng đó tức thì, không cần click thêm. Chi tiết về i-frame và cách dùng dodge roll hiệu quả có ở [Dodge roll và combat trong POE2](/guides/beginner-dodge-roll).

## Parry với Buckler là active defense, không phải passive

:wiki-link{url="https://www.poe2wiki.net/wiki/Buckler"} là loại shield đặc biệt không có armour. Thay vì giơ shield chặn theo kiểu Armoured Shield, Buckler grant skill :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} — một channelling skill hoạt động hoàn toàn khác.

Khi giữ Parry, nhân vật cầm buckler ra phía trước và duy trì trạng thái Active Block theo hướng đang nhìn. Block chance từ Parry là 100% cho các strike và projectile từ phía trước và trong tầm gần — 1 mét với strike, 1.5 mét với projectile. Đây là block chủ động, không phải con số chance-based thụ động như passive block bình thường. Khi một hit được parry thành công, nhân vật tự động phản đòn bằng một cú sweep ngang diện rộng và apply debuff :wiki-link{url="https://www.poe2wiki.net/wiki/Parried_Debuff"} lên kẻ địch.

Một giới hạn cần biết: trong lúc đang giữ Parry, di chuyển bị giảm xuống còn 25% tốc độ. Đây không phải công cụ để dùng liên tục mà là để đọc đòn rồi bắt đúng timing.

## Parried debuff mở ra combo follow-up cho Huntress

Debuff :wiki-link{url="https://www.poe2wiki.net/wiki/Parried_Debuff"} tồn tại 2 giây và có hai effect: kẻ địch nhận 50% more Attack Damage, và không thể evade attack trong thời gian đó. Mọi attack nào hit vào kẻ địch đang mang debuff này đều được khuếch đại đáng kể.

Điều làm cho Huntress có playstyle riêng biệt chính là vì một số skill spear được thiết kế để **consume** Parried debuff và gây effect bùng nổ. :wiki-link{url="https://www.poe2wiki.net/wiki/Disengage"} nhảy lùi và tạo shockwave khi consume Parried debuff, đồng thời grant một Frenzy Charge. :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} khi đâm vào kẻ địch đang bị Parried sẽ gây thêm frost explosion và để lại Chilled Ground. Đây là lý do Huntress combat đọc như một chuỗi: Parry đòn → debuff xuất hiện → consume bằng spear follow-up để gây burst. Không phải kiểu đứng vào đánh liên tục, mà là đọc và phản.

## Raise Shield block khác evasion ở bản chất hoạt động

:wiki-link{url="https://www.poe2wiki.net/wiki/Raise_Shield"} là skill được grant bởi :wiki-link{url="https://www.poe2wiki.net/wiki/Armoured_Shield"}. Giữ Raise Shield cũng tạo Active Block giống Parry — 100% chặn strike và projectile từ phía trước — nhưng thiên về defence thuần thay vì counter. Khi release ngay sau khi chặn được một hit với kẻ địch ở gần, nhân vật thực hiện Shield Bash: đòn luôn gây Light Stun và nếu dùng Tower Shield thì còn thêm Daze.

:wiki-link{url="https://www.poe2wiki.net/wiki/Evasion"} thì hoạt động hoàn toàn khác — nó là xác suất né bỏ hoàn toàn một hit, không phân biệt physical hay elemental. Khi evasion thành công, 0 damage. Khi thất bại, ăn nguyên 100%. Active Block từ Shield hay Parry ngược lại: nếu đang giơ shield đúng hướng thì chặn chắc chắn, không phụ thuộc vào RNG. Nhưng block chỉ hoạt động từ phía trước và cần đối mặt đúng góc — kẻ địch phía sau không bị chặn. Evasion né được từ mọi hướng. Chi tiết cách ba lớp phòng thủ tương tác có ở [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers).

Điểm quan trọng cả Raise Shield lẫn Parry đều có chung: block ngăn damage nhưng không ngăn stun hoàn toàn — cả hai đều build Heavy Stun gauge của người chơi khi đứng hứng đòn.

## Active Block build Heavy Stun buildup lên người chơi

Thông thường, Heavy Stun chỉ xảy ra với quái vật khi stun bar đầy — người chơi miễn nhiễm với Heavy Stun trong hầu hết tình huống. Nhưng khi đang active-block bằng Raise Shield hoặc Parry, người chơi bắt đầu tích lũy Heavy Stun buildup từ các hit bị chặn. Nếu chặn quá nhiều đòn mạnh liên tiếp mà stun bar đầy, nhân vật bị Heavy Stun và không làm gì được trong vài giây.

Evasion có tác dụng ở đây: khi hit bị chặn cũng roll evasion thành công, hit đó không tạo Heavy Stun buildup — evasion không né được hit khi đang active-block, nhưng thay vào đó chuyển thành cơ hội tránh stun accumulation. Đây là lý do một số build kết hợp Buckler với evasion cao: vừa chặn đòn, vừa giảm nguy cơ bị Heavy Stun xuyên qua.

## Combo là resource của Monk được build qua chuỗi strike

:wiki-link{url="https://www.poe2wiki.net/wiki/Combo"} là một counter theo dõi số lần bạn land melee strike trong 8 giây qua. Combo chỉ được tích lũy bằng strike — không cộng từ slam, không cộng từ dù hit nhiều kẻ địch cùng lúc với một strike.

:wiki-link{url="https://www.poe2wiki.net/wiki/Monk"} và skill Quarterstaff thiết kế xung quanh combo. :wiki-link{url="https://www.poe2wiki.net/wiki/Tempest_Bell"} là ví dụ điển hình: cần đạt 4 combo trước khi mới có thể cast, và khi cast thì đặt một cái chuông khổng lồ xuống sàn rồi dùng attack khác đập vào tạo shockwave. Chuỗi combat của Monk tự nhiên hình thành: strike nhiều lần để build combo, đạt threshold thì release finisher, rồi lại strip tiếp. Combo reset về 0 nếu không strike trong 8 giây, nên cần duy trì nhịp tấn công đều.

Combo khác với Parried debuff của Huntress ở chỗ: Parry là reactive — đọc đòn địch rồi phản. Combo là proactive — tự liên tục tấn công để build resource rồi xả. Hai thiết kế cho ra hai loại nhịp combat hoàn toàn khác nhau dù đều là melee class.

## Relationships

- **related_guides** [Dodge roll và combat trong POE2](/guides/beginner-dodge-roll) — dodge roll là i-frame chủ động; kết hợp với Parry và Active Block tạo phòng thủ hoàn chỉnh.
- **related_guides** [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers) — giải thích cách evasion, armour và block tương tác layered; Parry và Raise Shield là lớp block chủ động trong đó.
- **related_guides** [Ailment và debuff trong POE2](/guides/beginner-ailments) — Parried debuff, Daze từ Shield Bash, và Heavy Stun đều là các debuff combat quan trọng cần hiểu.
