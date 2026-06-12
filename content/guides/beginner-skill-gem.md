---
template: templates/guide-template.md
document_type: guide
title: "Skill gem và Support gem: hệ thống Uncut Gem của POE2"
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
  - skill-gem
  - support-gem
  - uncut-gem
  - fundamentals
---

# Skill gem và Support gem: hệ thống Uncut Gem của POE2

POE2 bỏ hoàn toàn hệ thống socket màu trên item. Thay vào đó, mọi skill gắn thẳng vào character qua Skill Gem, và support gắn trực tiếp vào gem đó — item bạn đang cầm không ảnh hưởng gì đến số support slot. Người chơi từ POE1 chuyển qua thường bối rối vì cơ chế trông giống nhưng logic đã khác hoàn toàn: bạn không phải lo màu socket hay số lỗ trên item nữa.

## Nhận Uncut Gem và tạo Skill Gem

Có ba loại Uncut Gem: :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Skill_Gem"} để tạo skill chủ động thông thường, :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Spirit_Gem"} để tạo skill persistent buff (aura và minion thường trực — cần Spirit để duy trì), và :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_Support_Gem"} để tạo support. Cả ba rơi tự nhiên từ monster và chest khi chơi, không cần farm đặc biệt.

Level của Uncut Gem phụ thuộc vào level khu vực nó rơi ra. Càng tier map cao thì gem level cao hơn — gem level 20 bắt đầu xuất hiện ở map tier cao cuối game.

Khi có Uncut Skill Gem, right-click vào nó để mở màn hình chọn skill. Toàn bộ skill của class hiện ra, chọn một cái và gem biến thành :wiki-link{url="https://www.poe2wiki.net/wiki/Skill_gem"} của skill đó ngay tại level của Uncut Gem. **Lựa chọn này không thể đổi lại** — muốn skill khác thì cần Uncut Gem mới. Uncut Support Gem hoạt động giống hệt: right-click rồi chọn :wiki-link{url="https://www.poe2wiki.net/wiki/Support_gem"} muốn dùng.

## Gắn Support Gem vào skill

Support gem gắn thẳng vào Skill Gem trong Skills Panel của character, không qua item. Mỗi Skill Gem bắt đầu với **2 support slot**. Mở thêm tối đa 3 slot bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Jeweller's_Orb"}, nâng tổng lên 5 support slot trên một skill.

Support slot phân theo attribute. Strength cho phép dùng support đỏ, Dexterity cho support xanh lá, Intelligence cho support xanh dương — cứ 5 điểm attribute thì được cắm 1 support tương ứng. Nếu thiếu attribute, support bị disable nhưng skill vẫn dùng được bình thường (khác POE1 là khoá toàn bộ skill nếu thiếu requirement).

Không thể dùng hai support cùng category trên một skill — ví dụ không thể cắm hai support loại Fire cùng lúc vào cùng một skill.

## Gem level lên thế nào

Gem level khi character nhận XP — gem phải đang gắn trong Skills Panel mới hấp thu XP. Gem cất trong inventory không level dù character đang grind.

Muốn đẩy gem lên level cao hơn mức hiện tại, dùng thêm một Uncut Skill Gem: right-click vào Uncut Skill Gem rồi chọn nâng level gem hiện có thay vì tạo mới. Uncut Gem phải có level cao hơn gem đang dùng thì mới đẩy lên được. Level tối đa là 20, hoặc 21 nếu gem bị corrupt.

Skill được cấp từ ascendancy có số support slot tự tăng theo level character — không cần Jeweller's Orb cho những slot đó.

## Tips & Pitfalls

- Đừng engrave khi chưa chắc chắn muốn chơi skill đó. Quyết định không đổi lại được, cần Uncut Gem mới để thử skill khác.
- Gem phải đang gắn trong Skills Panel thì mới nhận XP. Cất vào inventory là không level dù đang grind.
- Uncut Gem level thấp vẫn tạo được gem mới — gem tạo ra start ở level thấp rồi level dần theo XP bình thường.
- Uncut Spirit Gem chỉ dùng cho skill persistent buff. Skill thông thường dùng Uncut Skill Gem, không thể dùng lẫn.

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — giải thích Spirit resource và chuỗi support gem cho companion (Pain Offering package); cần hiểu Spirit trước khi dùng Uncut Spirit Gem cho persistent buff skill và minion thường trực.
