---
template: templates/guide-template.md
document_type: guide
title: Kỹ thuật positioning cho bow build
status: published
author: duocnv
created: '2026-06-11'
updated: '2026-06-11'
league: '0.5'
patch: 0.5.1
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - bow
  - positioning
  - kiting
  - dodge-roll
  - deadeye
  - combat
---

# Kỹ thuật positioning cho bow build

Bow build trong POE2 không đứng cuối màn hình xả tên như POE1: accuracy rơi dần theo khoảng cách, damage có band tối ưu riêng, và pack map 0.5 dí rất rát. Chỗ đứng vì thế là một kỹ năng phải luyện như mọi stat trên gear. Các kỹ thuật bên dưới áp dụng cho mọi bow build; build tham chiếu là [Pathfinder Herald of Ice Bow](/builds/ranger/0-5-pathfinder-herald-of-ice-bow) mình đã viết.

## Khoảng cách là một stat damage

POE2 phạt attack theo khoảng cách: trong 2 mét đầu không có penalty, từ đó penalty tăng đều và chạm 90% less :wiki-link{url="https://www.poe2wiki.net/wiki/Accuracy"} khi target xa hơn 9 mét. Penalty này là multiplier chứ không phải trừ flat: 1.000 Accuracy chỉ còn 100 effective khi đứng ngoài 9 mét, hit chance sụp theo. Bow attack là attack nên dính trọn. Cách accuracy đấu với evasion mình đã viết đủ ở [Accuracy và Evasion: tấn công có chắc trúng không?](/guides/beginner-accuracy-evasion) — ở đây chỉ cần nhớ một điều: mỗi mét lùi ra sau mốc 2 mét là tự cắt hit chance của chính mình.

Band đứng thoải mái thực tế quanh 4–6 mét: nội suy đều từ mốc 2 mét đến 9 mét thì penalty ở đó khoảng 26–51%, vẫn đau nhưng bù được bằng accuracy trên gear và tree. Ngoài 9 mét là vùng 90% — chỉ đứng đó lúc né cơ chế, không phải để DPS.

Chơi :wiki-link{url="https://www.poe2wiki.net/wiki/Deadeye"} thì band này còn bị hai node loại trừ nhau kéo về hai phía. :wiki-link{url="https://www.poe2wiki.net/wiki/Point_Blank"} cho 20% more hit damage với target trong 3.5 mét đầu đường bay, giảm dần về 0% sau 7 mét — damage đỉnh nằm ngay vùng nguy hiểm, đổi DPS lấy rủi ro áp sát, hợp build evasion dày và roll chuẩn. :wiki-link{url="https://www.poe2wiki.net/wiki/Far_Shot"} ngược lại, 0% trong 3.5 mét đầu và leo lên 20% sau 7 mét — nghe hợp bản năng đứng xa, nhưng ở đúng 7 mét nơi nó đạt đỉnh thì accuracy penalty đã quanh 64%. Lấy Far Shot mà không dồn accuracy bù là tự bắn hụt; hai cách vá là stack accuracy nhiều hơn mức "đủ dùng", hoặc săn modifier "Accuracy is not reduced at distance" trên gear (hiếm, không phải default).

Một bản năng POE1 nữa phải bỏ: Projectile Speed không kéo dài tầm bay của :wiki-link{url="https://www.poe2wiki.net/wiki/Projectile"} trong POE2. Mua proj speed là mua thời gian đạn tới đích nhanh hơn, không phải bắn xa hơn.

## Dodge roll là nút phản ứng, không phải nút di chuyển

:wiki-link{url="https://www.poe2wiki.net/wiki/Dodge_roll"} mặc định không cooldown, không tốn resource, lăn 3.7 mét, và nửa đầu animation cho i-frame với projectile cùng các đòn không phải AoE. AoE dưới chân không né được bằng i-frame — phải lăn ra khỏi vùng phủ thật. Timing telegraph và cách đọc đòn boss mình đã viết đủ ở [Dodge roll và combat trong POE2](/guides/beginner-dodge-roll); phần này chỉ nói chỗ bow build khai thác được nhiều nhất.

Trong lúc roll, kích thước nhân vật về 0 unit, nghĩa là lách được qua khe hở giữa hai con quái. Bị melee bọc là tình huống chết người số một của bow build, và phản xạ đúng là roll xuyên khe thưa nhất của vòng vây thay vì roll lùi — hướng lùi thường chính là hướng đang bị dồn. Bị bọc kín hoàn toàn không còn khe nào thì roll vẫn kẹt, nên đừng để tới mức đó.

Roll cancel hầu hết animation. Đang channel :wiki-link{url="https://www.poe2wiki.net/wiki/Snipe"} giữa chừng mà boss vung đòn thì roll luôn — mất stage channel rẻ hơn mất máu, và Snipe bắn lại được ngay sau khi đòn qua.

Tổng quãng đường của roll bằng đúng đi bộ trong cùng thời gian (cùng ăn modifier movement speed), nên roll liên tục không nhanh hơn chạy. Spam roll còn tệ hơn: phải đợi roll xong mới roll tiếp được, đòn thật bay tới đúng lúc đang kẹt giữa animation là hết đường né. Di chuyển đường dài thì giữ spacebar để sprint, roll để dành cho đòn có telegraph. Roll cũng không vượt được gap, hàng rào thấp hay chênh lệch độ cao — đừng tính roll qua mép vực để thoát thân.

## Kite bằng WASD theo nhịp bắn

WASD đổi đời bow build: bắn về một hướng và bước sang hướng khác ngay khung hình sau, không cần click đổi hướng. Click-to-move vẫn chơi được nhưng dễ misclick vào quái — một cú click hụt giữa pack là một nhịp đứng yên oan. Nền combat WASD và combo mình đã viết ở [Parry, combo và WASD: cơ bản combat POE2](/guides/beginner-combat-basics).

Bow attack root chân trong attack animation, nên nhịp đúng là bắn một hai phát, bước một nhịp đổi vị trí, bắn tiếp — không giữ chuột xả nguyên băng tại chỗ. Mỗi nhịp bước làm ba việc cùng lúc: kéo khoảng cách về lại band tối ưu, đưa mình ra khỏi đường đạn quái đã nhắm lúc đứng yên, và mở góc bắn mới vào pack.

Hướng kite quan trọng hơn tốc độ kite. Đừng lùi thẳng: quái dí theo đường ngắn nhất, lùi thẳng là giữ nguyên hướng cho cả pack dồn vào, và tốc lùi bị ngắt quãng bởi attack animation thua tốc dí của quái map. Kite chéo hoặc đi vòng cung quanh pack thì khoảng cách ngang giữ nguyên band, quái phải đổi hướng liên tục, và pack tự kéo thành hàng dọc — đúng hình cho pierce với chain ăn nhiều target một phát. Đổi hướng vòng cung vài giây một lần là cách xếp quái thành line mà không tốn skill nào.

## Escape Shot và Blink là hai nút thoát hiểm

:wiki-link{url="https://www.poe2wiki.net/wiki/Escape_Shot"} nhảy lùi ra sau, đồng thời bắn một mũi tên băng nổ ngay chỗ vừa đứng — radius 2.4 mét, 300–585% more Chill magnitude và Freeze buildup theo level gem. Thằng melee nào vừa dí tới chỗ mình ăn nguyên vùng chill/freeze tại đó: một nút vừa thoát vừa khoá chân kẻ đuổi. Cộng 0.7 giây Total Attack Time nên nó là nút tình huống, không phải skill để spam.

:wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} là persistent buff: khi off cooldown, dodge roll biến thành teleport tầm ngắn. Lưu ý teleport này không tính là dodge roll, nên không kích các hiệu ứng trigger theo roll như :wiki-link{url="https://www.poe2wiki.net/wiki/Cast_on_Dodge"} — build nào ăn theo trigger roll thì cân nhắc trước khi slot.

## Control ghim quái tại chỗ đỡ phải chạy

Ghim quái đứng yên giữ band khoảng cách y như tự mình di chuyển, mà không tốn nhịp bước nào. Support :wiki-link{url="https://www.poe2wiki.net/wiki/Pin_I"} đổi stun buildup của skill thành Pin buildup từ phys damage; đủ ngưỡng (40% với quái thường, 50% magic, 60% rare, 70% unique) là target dính :wiki-link{url="https://www.poe2wiki.net/wiki/Pinned"} 3 giây — không di chuyển được, không bị đẩy, không evade. Với bow phys, Pin biến pack đang dí thành bia đứng yên. Chill và freeze cùng vai trò cho build cold, mà Escape Shot ở trên đã lo sẵn hướng cận chiến.

Chơi Deadeye thì lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Tailwind"} qua node :wiki-link{url="https://www.poe2wiki.net/wiki/Gathering_Winds"}: mỗi stack cho 1% movement speed, 2% Skill Speed, 10% increased Evasion và chặn 1% damage từ Deflected hit, tối đa 10 stack. Full stack là thêm 10% tốc chạy và 20% skill speed chỉ nhờ giữ nhịp di chuyển — kiting và DPS nuôi lẫn nhau thay vì giành thời gian của nhau.

## Positioning theo từng loại encounter

Với boss, đứng band tầm trung chứ đừng max range — penalty accuracy ngoài 9 mét cắt DPS sâu hơn bất kỳ uptime nào kiếm được nhờ đứng xa "cho an toàn". Trước khi cần né, biết sẵn hướng roll kế tiếp: sau mỗi lần roll, vị trí mới phải còn ít nhất một đường thoát nữa, roll vào góc tường là tự nhốt mình. Arena boss POE2 hay chồng nhiều vùng telegraph — bước sớm ra khỏi vùng sắp nổ rẻ hơn một cú roll ép timing.

Trong map thường, lưng luôn hướng về vùng đã dọn sạch. Tiến vào pack mới theo góc xiên thay vì đi thẳng giữa hai pack chưa đụng — bow build chỉ xử một pack mỗi lần, hai pack từ hai hướng là hết band an toàn.

Breach mở vòng và quái trồi lên quanh mép vòng đang lan — đứng giữa tâm là tự nguyện bị bọc. Men theo rìa phía đã dọn, giữ cho vùng spawn mới luôn nằm về một phía màn hình.

Ritual ụp cả đàn revived vào cùng lúc khi chạm altar, và layout hẹp trong circle không có đường lùi. Trước khi activate, đảo một vòng nhìn địa hình quanh altar, chọn cung ít chướng ngại nhất làm chỗ kite. Chi tiết cơ chế và cách chọn map layout cho Ritual ở [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless).

## Tips & Pitfalls

- Đứng cuối màn hình bắn là thói quen POE1 — accuracy penalty 90% ngoài 9 mét trừng phạt nó trực tiếp.
- Spam roll để di chuyển không nhanh hơn chạy, lại kẹt animation đúng lúc cần né thật. Sprint để đi, roll để né.
- I-frame của roll không chặn AoE — vòng đỏ dưới chân thì lăn ra khỏi vùng, không phải lăn tại chỗ.
- Tiếc một phát Snipe full channel khi boss đang ra đòn là lỗi đắt nhất — roll cancel channel luôn, bắn lại sau.
- Lùi thẳng khi kite là tự kéo pack về phía mình — kite chéo hoặc vòng cung.
- Roll không qua được gap và chênh lệch độ cao — đừng lấy mép vực làm đường thoát.

## Relationships

- **related_builds** [Pathfinder Herald of Ice Bow](/builds/ranger/0-5-pathfinder-herald-of-ice-bow) — bow build tham chiếu áp dụng các kỹ thuật trong guide này.
- **related_guides** [Dodge roll và combat trong POE2](/guides/beginner-dodge-roll) — timing telegraph và i-frame chi tiết cho phần roll.
- **related_guides** [Accuracy và Evasion: tấn công có chắc trúng không?](/guides/beginner-accuracy-evasion) — cơ chế accuracy distance penalty mà band khoảng cách dựa vào.
- **related_guides** [Parry, combo và WASD: cơ bản combat POE2](/guides/beginner-combat-basics) — nền combat WASD cho kỹ thuật kite.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless) — cơ chế Ritual cho phần positioning theo encounter.
