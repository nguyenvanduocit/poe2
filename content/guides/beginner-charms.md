---
template: templates/guide-template.md
document_type: guide
title: "Charms: slot trên belt, cách lấy charges và trigger"
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
  - charm
  - belt
  - ailment
  - defense
---

# Charms: slot trên belt, cách lấy charges và trigger

:wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} là lớp phòng thủ chủ động thứ hai bên cạnh flask — nhưng khác flask ở chỗ bạn không bao giờ bấm tay kích hoạt nó. Charm tự nhận ra nguy hiểm và tự bật. Hiểu rõ cơ chế này giúp bạn chọn đúng charm cho từng vùng nội dung thay vì cứ trang bị theo cảm tính.

## Charm nằm ở slot riêng, không chung với flask

Belt trong POE2 có hai loại slot: flask slot và charm slot. Hai loại hoàn toàn tách biệt — trang bị charm không chiếm chỗ của flask và ngược lại. Khi bạn nhìn vào belt trang bị, phần slot nhỏ hình viên kim cương bên dưới các flask chính là charm slot.

Charm trông bề ngoài giống flask nhỏ nhưng cơ chế hoàn toàn khác. Flask bạn bấm khi cần. Charm thì không có nút bấm — hệ thống tự kích hoạt khi điều kiện được đáp ứng. :wiki-link{url="https://www.poe2wiki.net/wiki/Ruby_Charm"} tự bật ngay lúc bạn ăn fire damage từ một hit, không cần bạn phản ứng. :wiki-link{url="https://www.poe2wiki.net/wiki/Thawing_Charm"} tự bật khi bạn bị freeze. Bạn chỉ cần đảm bảo charm có đủ charges, còn lại để hệ thống lo.

## Số charm slot phụ thuộc item level của belt

Belt không phải lúc nào cũng cho đủ charm slot. Số slot phụ thuộc vào item level của belt đang mang:

- Belt ilvl 1–29: 1 charm slot
- Belt ilvl 30–59: 1–2 charm slot
- Belt ilvl 60+: 1–3 charm slot

Tối đa bạn có thể trang bị 3 charm cùng lúc, dù có bao nhiêu slot cũng không vượt qua con số này. Ngoài belt, quest :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Vows"} thưởng thêm 1 charm slot — làm sớm khi gặp để có thêm chỗ. Một số passive node trên tree cũng cho thêm slot, nhưng đó là đầu tư endgame.

Hệ quả thực tế khi leveling: belt rẻ tiền act 1 thường ilvl thấp nên chỉ có 1 slot. Khi lên act 3–4, tìm belt ilvl 30+ để mở slot thứ hai — thêm một charm trong campaign là thêm một lớp bảo vệ đáng giá.

## Charges nạp từ kill và recharge ở Well

Charm dùng charges để kích hoạt, và charges không tự nạp theo thời gian mặc định. Nguồn charges chính là kill quái — mỗi quái cấp cho charm một lượng charges bằng một nửa Power của nó. Quái magic đáng giá gấp đôi quái normal, rare đáng giá gấp 5 lần, unique luôn cho 20 Power. Một pack rare và magic đủ để nạp lại đáng kể.

:wiki-link{url="https://www.poe2wiki.net/wiki/Well"} trong town và :wiki-link{url="https://www.poe2wiki.net/wiki/Checkpoint"} trong map đều nạp charm về đầy hoàn toàn khi kích hoạt — cùng cơ chế với flask.

Charm magic (rarity xanh) có thể roll modifier **Charges gained per Second**, cho phép charm tự nạp dần theo thời gian ngay cả khi không kill. Đây là mod đặc biệt hữu ích khi chạy nội dung thưa quái như một số boss corridor. :wiki-link{url="https://www.poe2wiki.net/wiki/Elevore"} — unique Hunter Hood lv33 — cho tất cả charm của bạn gain 0.5 charge/giây và thêm 1 charm slot, biến nó thành lựa chọn mạnh nếu bạn muốn charm luôn sẵn sàng mà không phụ thuộc vào kill speed.

## Charm kích hoạt theo điều kiện, không bấm tay được

Mỗi charm có một điều kiện trigger riêng ghi rõ trên tooltip. :wiki-link{url="https://www.poe2wiki.net/wiki/Staunching_Charm"} chỉ bật khi bạn bắt đầu bleeding. :wiki-link{url="https://www.poe2wiki.net/wiki/Antidote_Charm"} chỉ bật khi bạn bị poison. :wiki-link{url="https://www.poe2wiki.net/wiki/Stone_Charm"} bật khi bạn bị stun. Charm không phân biệt ngữ cảnh — nếu điều kiện xảy ra và charm có đủ charges, nó tự bật ngay.

Nếu bạn mang hai charm cùng loại, chúng không cộng hưởng cùng lúc — chỉ một cái bật tại một thời điểm. Nhưng hai charm **khác loại** hoàn toàn có thể cùng trigger trong cùng một khoảnh khắc nếu cả hai điều kiện được đáp ứng. Ví dụ một hit vừa freeze vừa poison bạn — Thawing Charm và Antidote Charm bật đồng thời mà không cản nhau.

Charm có duration sau khi trigger (thường 3–4 giây). Trong thời gian đó nó không thể trigger lại, nên charges tiêu thụ cho mỗi lần dùng là cố định theo charm.

## Charm nào beginner nên trang bị

Nguyên tắc đơn giản nhất: match charm với threat chính của vùng đang chạy. Không có bộ charm "tốt nhất cho mọi situation."

:wiki-link{url="https://www.poe2wiki.net/wiki/Thawing_Charm"} xử lý freeze — một trong những ailment nguy hiểm nhất vì freeze làm bạn đứng im hoàn toàn. Tiêu thụ 40/40 charges mỗi lần dùng nên sạch hết charge sau một lần trigger, nhưng immunity to freeze trong 3 giây đủ để thoát ra.

:wiki-link{url="https://www.poe2wiki.net/wiki/Antidote_Charm"} cho poison immunity — quan trọng ở các act và map có quái snake, spider, hay chaos monster dày. Poison stack damage nhanh và drain life pool trong vài giây nếu không xử lý.

:wiki-link{url="https://www.poe2wiki.net/wiki/Staunching_Charm"} cho bleeding immunity — bleeding trong POE2 là DoT vật lý đi thẳng qua Energy Shield vào Life, và damage tăng gấp đôi khi bạn di chuyển hoặc khi bị Aggravated, nên nguy hiểm hơn hầu hết ailment khi phải chạy tránh boss.

:wiki-link{url="https://www.poe2wiki.net/wiki/Grounding_Charm"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Dousing_Charm"} cho shock và ignite immunity tương ứng. Shock làm bạn nhận thêm damage, ignite là DoT fire — cả hai đều đáng carry khi chạy content fire/lightning nặng.

:wiki-link{url="https://www.poe2wiki.net/wiki/Amethyst_Charm"} cho +18% chaos resistance khi nhận chaos hit — quan trọng vì chaos res thường là điểm yếu nhất của phần lớn nhân vật và không có charm nào cho chaos immunity thẳng.

:wiki-link{url="https://www.poe2wiki.net/wiki/Silver_Charm"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Stone_Charm"} (slow immunity và stun immunity) ít ưu tiên hơn trong campaign nhưng bắt đầu có giá trị ở endgame khi slow và stun có thể lock bạn giữa damage.

Charm chỉ tồn tại ở rarity normal, magic và unique — không có rare charm. Normal charm không có modifier thêm, magic charm có thể có đến hai modifier tăng cường như **increased Effect Duration**, **reduced Charges per use**, hay **Charges gained per Second** như đã nói trên.

## Relationships

- **related** [Flask: cách dùng bình hồi và hệ thống charge](/guides/beginner-flask) — flask và charm share cơ chế charge từ kill và Well; bài đó giải thích chi tiết hệ flask.
- **related** [Ailment và status effect trong POE2](/guides/beginner-ailments) — giải thích từng ailment charm bảo vệ: freeze, shock, ignite, poison, bleeding, stun, slow.
- **related** [Resistance và cơ chế cap 75%](/guides/beginner-resistances) — Amethyst, Ruby, Sapphire, Topaz Charm cho resistance tạm thời; bổ trợ cho việc cap res trên gear.
- **related** [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers) — charm là lớp phòng thủ situational nằm trên các lớp passive này.
