---
template: templates/guide-template.md
document_type: guide
title: "Increased vs More: quy tắc tính damage"
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
  - damage
  - support-gem
  - passive-tree
  - scaling
---

# Increased vs More: quy tắc tính damage

**Increased Damage** và **More Damage** trông giống nhau nhưng tính hoàn toàn khác nhau. Hiểu sự khác biệt này giúp đánh giá đúng support gem nào đáng cắm, passive node nào đáng lấy — thay vì nhặt đại rồi thắc mắc tại sao damage không lên.

## Increased cộng vào một pool, More nhân lên tất cả

Mọi nguồn **Increased Damage** trong game — từ passive tree, từ gear, từ gem — đều cộng vào chung một pool. Tính đơn giản: lấy tổng Increased cộng lại rồi nhân vào base damage.

Lấy ví dụ: base damage 100, có 200% Increased. Công thức là 100 × (1 + 2.0) = **300 damage**.

Bây giờ thêm 50% Increased nữa từ một passive node. Pool Increased tăng lên 250%, kết quả là 100 × (1 + 2.5) = **350 damage**. Tăng từ 300 lên 350 — tức là tăng khoảng **17%** từ điểm xuất phát.

**More Damage** tính khác hoàn toàn. Nó nhân riêng biệt với toàn bộ damage hiện có, không quan tâm pool Increased đang là bao nhiêu. Cùng ví dụ trên: 300 damage × 1.2 (More 20%) = **360 damage**. Tăng đúng **20%** — nhiều hơn node 50% Increased kia.

Khi có nhiều nguồn More, chúng nhân chồng lên nhau. More 20% × More 30% = 1.2 × 1.3 = **1.56 lần** tổng damage — không phải cộng thành 50%, mà nhân lại thành 56%.

## Càng nhiều Increased thì More càng đáng hơn

Đây là điều nhiều người mới bỏ qua. Khi mới bắt đầu, Increased rất có giá trị vì base thấp. Nhưng sau khi gom đủ từ tree và gear, mỗi điểm Increased thêm vào ngày càng ít hiệu quả hơn theo tỷ lệ.

Ví dụ cụ thể: nếu đang có 400% Increased, base 100, thì damage đang là 500. Thêm 50% Increased nữa cho ra 550 — chỉ tăng **10%**. Còn More 20% cho ra 500 × 1.2 = **600** — tăng **20%**.

Nếu Increased pool lên tới 900%, thêm 50% Increased chỉ còn tăng **5%**. More 20% vẫn tăng **20%** như thường, vì nó nhân ngoài pool chứ không nhảy vào cộng chung trong đó.

Đây là lý do build endgame thường săn More multiplier nhiều hơn là chồng thêm Increased.

## Support gem và passive notable thường dùng More

Support gem trong POE2 hầu hết mang **More** multiplier — đó là nguồn sức mạnh chính của chúng. Một support cho More 30% nghĩa là mọi thứ build đang có đều tăng thêm 30% nữa, không trừ hao.

Một số ascendancy notable cũng cấp More thay vì Increased — đây là dấu hiệu node đó thiết kế để tạo bước nhảy damage lớn, không phải chỉ cộng thêm vào pool sẵn có.

Khi chọn support gem để cắm: nhìn con số More trên gem là mức tăng damage thực tế bạn nhận được, bất kể tree đang có bao nhiêu Increased. Con số đó không bị giảm theo thời gian khi stack nhiều hơn.

## Relationships

- **related** [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit) — guide cơ bản tương đương, giải thích Spirit reservation theo cùng góc nhìn beginner.
- **related** [Tame Beast Damage Scaling](/mechanics/0-5-tame-beast-damage-scaling) — ví dụ thực tế về More multiplier trong companion build, áp dụng nguyên tắc guide này ở cấp độ nâng cao.
