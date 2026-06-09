---
template: templates/guide-template.md
document_type: guide
title: Dodge roll và combat trong POE2
status: published
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
  - dodge
  - combat
  - i-frame
---

# Dodge roll và combat trong POE2

Dodge roll là mechanic sống còn trong POE2 — không phải cách di chuyển nhanh hơn, mà là phòng thủ chủ động cốt lõi. Mọi encounter boss endgame đều design xung quanh giả định người chơi biết roll né đòn. Người quen POE1 hay bỏ qua vì POE1 không có mechanic này; người mới hay spam click mà không chú ý đến nút spacebar.

## Dodge roll cho i-frame, không chỉ di chuyển

:wiki-link{url="https://www.poe2wiki.net/wiki/Dodge_roll"} có một đặc tính quan trọng: trong nửa đầu của animation roll, nhân vật không nhận damage từ projectile và các đòn không phải AoE. Đây là **i-frame** — invincibility frame. Không phải "khó trúng hơn", mà là miễn nhiễm hoàn toàn trong khoảng thời gian đó.

Sự khác biệt với chỉ chạy ra: nếu bạn đứng yên né sang ngang, đòn projectile vẫn có thể trúng tùy hitbox. Nhưng khi đang trong i-frame của roll, projectile đó xuyên qua không tính damage. AoE thì khác — i-frame không chặn được AoE, phải lăn ra khỏi vùng phủ thật sự mới thoát.

Dodge roll mặc định không có cooldown và không tốn resource gì. Giới hạn duy nhất là animation — phải đợi roll xong mới roll tiếp được. Không spam liên tục được nhưng cũng không phải lo hết "stamina" hay gì cả.

## Roll sau khi thấy telegraph, không roll trước

Hầu hết boss trong POE2 đều có **animation telegraph** rõ ràng trước khi đòn chạm người chơi: wind-up animation kéo dài, vòng sáng đỏ/cam trên sàn, hay âm thanh cảnh báo. Đây là tín hiệu để roll — không phải lúc thấy đòn đã bay đến gần.

Lỗi phổ biến nhất là roll **quá sớm**: thấy boss bắt đầu cử động thì roll ngay lập tức, nhưng đòn thật ra còn lâu mới chạm. I-frame đã hết trước khi đòn tới, vẫn chết như thường. Timing đúng là roll **sau khi animation telegraph khởi động rõ** nhưng trước khi đòn chạm đến vị trí bạn đang đứng.

Nghe có vẻ hẹp nhưng thực ra window khá rộng. Hầu hết boss POE2 có telegraph dài đủ để đọc và phản ứng. Cách học nhanh nhất là chết vài lần, nhìn lại animation nào xảy ra trước khi chết, rồi nhớ đó là tín hiệu để roll.

## Roll ngắt skill đang cast và đó là điều đúng

Roll **hủy bất kỳ skill nào đang cast**. Nếu bạn đang charge một skill nặng giữa lúc boss ra đòn, phải chọn: tiếp tục cast hay roll né.

Người mới hay để bị trúng vì tiếc animation đang chạy. Thực tế là một đòn boss endgame gây thiệt hại lớn hơn phần damage mất khi roll sớm — đặc biệt với các đòn one-shot hoặc debuff nặng. Không có lý do giữ animation khi đòn nguy hiểm đang tới. Cứ roll, nhận DPS thấp hơn một chút, rồi tiếp tục cast sau khi đòn qua.

## Sprint khác dodge roll hoàn toàn

**Tap** spacebar để roll. **Hold** spacebar để sprint. Sprint không có i-frame — chỉ là chạy nhanh hơn bình thường. Người mới hay hold nhầm spacebar rồi thắc mắc tại sao vẫn bị trúng đòn boss dù "đã né".

## Tips & Pitfalls

- Roll quá sớm trước telegraph là lỗi phổ biến nhất. Đợi animation khởi động rõ mới roll.
- Không cần roll liên tục khi không có đòn nguy hiểm — đứng yên cast damage hiệu quả hơn.
- Một số boss AOE phủ toàn màn hình: tìm hướng roll ra ngoài edge của AOE, không roll vào giữa.
- Khi bị vây hoàn toàn, roll có thể bị kẹt nếu không có khe hở nào. Roll hướng khe thưa nhất.

## Relationships

- **related_guides** [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers) — dodge roll là phòng thủ chủ động; guide này giải thích các lớp passive bổ trợ khi miss roll.
- **related_guides** [Ba pool tài nguyên: Life, Energy Shield và Mana](/guides/beginner-life-es-mana) — pool sống giúp chịu đòn khi timing roll sai; cân bằng giữa EHP và kỹ năng dodge.
