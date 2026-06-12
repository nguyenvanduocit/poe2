---
template: templates/guide-template.md
document_type: guide
title: "Spirit: tài nguyên reservation của POE2"
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
  - spirit
  - reservation
  - aura
  - minion
---

# Spirit: tài nguyên reservation của POE2

Spirit là resource dùng để duy trì aura, minion thường trực, và persistent skill — hoàn toàn tách biệt với Mana. Người mới từ POE1 thường nhầm hai thứ này với nhau, dẫn đến việc không hiểu tại sao skill không bật lên được dù Mana vẫn đầy.

## Spirit không phải Mana và không tự có sẵn

Trong POE1, dùng aura thì tốn một phần Mana reservation — Mana là stat mặc định có từ đầu, aura chỉ cắt bớt vào đó. POE2 tách hẳn ra: aura và persistent skill tiêu **Spirit**, không phải Mana.

Điểm quan trọng nhất: character mới tạo có Spirit bằng 0. Mana vẫn ở đó để cast skill thường như bình thường, nhưng Spirit là zero cho đến khi tự đi kiếm.

Campaign cho sẵn một lượng Spirit qua quest reward. Boss cuối Act 1 rớt **Gembloom Skull** (+30 Spirit), boss Act 3 rớt **Gemrot Skull** (+30 Spirit), và Interlude 3 có **Gemcrust Skull** (+40 Spirit). Nhặt sạch ba cái này thì có đúng 100 Spirit từ campaign — đủ để chạy một vài skill nhỏ, nhưng build aura-heavy hay minion army thì không đủ.

## Spirit cost trên skill là reservation, không phải tiêu

Khi bật một persistent skill, Spirit bị "chiếm" — không mất, không hồi, không dao động. Skill đang bật thì con số Spirit đó bị khóa, tắt skill đi thì con số trả lại. Nếu tổng Spirit cost của tất cả skill đang bật vượt quá Spirit tối đa của character thì skill cuối không bật được — không có thông báo lỗi to, chỉ là nút không sáng.

Đây khác với Mana hoàn toàn: Mana tiêu rồi hồi theo thời gian, Spirit thì không hồi — nó là trần cố định.

## Lấy Spirit từ đâu

Sau phần quest reward 100 cố định, Spirit chỉ đến từ gear và ascendancy. Hai slot quan trọng nhất là **amulet** và **body armour** — cả hai có thể roll prefix cộng flat Spirit (ví dụ +30 đến +61 tùy tier). **Sceptre** không cho flat nhưng cho % increased Spirit, nghĩa là nếu base Spirit đã cao thì sceptre đẩy lên thêm được nhiều.

Một số unique item cho Spirit đặc biệt. :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} cho (54-63)% increased Spirit và được thiết kế riêng cho build companion zoo. Helmet thường không có Spirit ngoại trừ corruption.

Ascendancy cũng là nguồn lớn — Spirit Walker (Huntress) có nhiều node cho Spirit và companion reservation efficiency.

## Vì sao build bị hết Spirit

Mỗi aura, minion thường trực, herald, hoặc buff loại persistent đều chiếm một lượng Spirit cố định. Build đơn giản chạy hai ba skill thì 100 Spirit từ campaign là đủ. Nhưng một khi bắt đầu stack thêm — thêm một aura, thêm một companion, thêm một trigger setup — tổng cộng vượt trần rất nhanh.

Lỗi hay gặp nhất là cố lắp hết tất cả persistent skill vào một lúc mà không kiểm tra Spirit tổng. Cách kiểm: mở Skills Panel, nhìn phần Spirit phía trên — con số bên trái là đang dùng, bên phải là tối đa. Khi trái vượt phải thì skill mới nhất không bật.

Build muốn chạy nhiều aura và companion cùng lúc buộc phải đầu tư Spirit từ nhiều slot: amulet Spirit prefix + body armour Spirit prefix + sceptre % increased Spirit + ascendancy node. Đây là lý do Spirit là một trong những stat cần lên kế hoạch từ đầu khi thiết kế build, không phải thứ giải quyết sau.

## Relationships

- **related** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — ascendancy chuyên Spirit và companion reservation, ví dụ điển hình về build phụ thuộc Spirit cao.
- **related** [Sylvan's Effigy](/guides/sylvans-effigy) — unique sceptre tăng Spirit ceiling và gỡ trần companion, tool chính của build zoo Spirit Walker.
