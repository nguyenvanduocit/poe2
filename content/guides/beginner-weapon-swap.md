---
template: templates/guide-template.md
document_type: guide
title: Weapon set và weapon swap trong POE2
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
  - weapon-set
  - weapon-swap
  - skill-gem
  - persistent-skill
---

# Weapon set và weapon swap trong POE2

POE2 có hai weapon set độc lập — mỗi set cầm vũ khí riêng, gắn skill riêng, và swap qua lại bằng một nút. Người mới thường bỏ trống Set 2 hoàn toàn vì không biết nó tồn tại, hoặc biết nhưng không hiểu cách gắn gem vào. Cơ chế này không có trong POE1 và mở ra cả một lớp gameplay mà nhiều build phụ thuộc hoàn toàn vào nó.

## Tìm hai slot vũ khí trong inventory

Mở inventory (phím `I`), nhìn phần vũ khí bên trái. Có hai hàng slot chồng lên nhau: hàng trên là **Weapon Set 1** (đang active, sáng), hàng dưới là **Weapon Set 2** (tối, trống mặc định). Mỗi set có đúng hai slot — main hand và off hand.

Nhấn **X** (mặc định) để swap giữa hai set ngay trong combat. Swap là instant, không có delay.

Để gắn vũ khí vào Set 2, kéo thẳng item vào slot hàng dưới như bình thường. Cũng có thể right-click nút weapon set trong inventory để set cùng một vũ khí dùng cho cả hai set — dùng khi không muốn cầm gear khác nhau nhưng vẫn muốn skill khác nhau.

## Skill gem assign cho set nào thì chỉ dùng được ở set đó

Khi gắn skill gem vào equipment, mỗi skill mặc định hoạt động ở cả hai set nếu weapon phù hợp. Nhưng có thể chỉ định một skill chỉ dùng ở Set 1 hoặc chỉ Set 2 — vào trang thông tin của skill đó (hover rồi mở info panel) để chỉnh.

Behavior mặc định: nếu bấm một skill được assign cho set đang không active, game tự swap sang set cần thiết rồi dùng skill. Tính năng auto-swap này thường tắt được trong info panel của skill, dùng khi không muốn game tự đổi set giữa chừng.

Ví dụ thực tế: gắn **Blink** vào Set 1, gắn aura ở equipment của Set 2 — Blink chỉ dùng được khi đang cầm Set 1. Muốn Blink dùng được ở cả hai set thì phải assign nó cho cả hai, không phải chỉ một.

## Persistent skill không tắt khi swap weapon set

Đây là cơ chế quan trọng nhất của weapon swap mà người mới hay bỏ qua: **aura và persistent skill vẫn tiếp tục chạy ngay cả khi bạn swap sang set kia**.

Cắm **Discipline** hoặc một herald ở equipment thuộc Set 1, bật lên, rồi swap sang Set 2 — buff vẫn còn đó. Chỉ có active skill (skill bấm nút để dùng) mới cần đúng weapon set mới kích được; persistent skill chạy độc lập.

Điểm cần chú ý: Spirit pool tính lại theo set đang active. Nếu Set 1 có ít Spirit hơn Set 2 (ví dụ Set 2 cầm sceptre cho thêm Spirit), swap về Set 1 thì trần Spirit giảm xuống — một số persistent skill có thể bị tắt vì vượt trần mới. Phải đảm bảo Spirit của hai set xấp xỉ nhau nếu build cần persistent skill chạy liên tục.

## Các trường hợp thường dùng weapon swap

**Snapshot debuff cho boss.** Spirit Walker Huntress companion carry dùng Set 2 cầm buckler grant skill **Parry** để áp debuff "+50% more Attack Damage taken" lên boss, rồi swap về Set 1 (spear + sceptre) để companion gánh damage. Debuff đã áp xong vẫn còn hiệu lực sau khi swap — build tận dụng đúng điểm này.

**Buff bot set.** Một số build dùng Set 2 chỉ để stack buff một lần rồi swap về Set 1 chơi bình thường. Vì persistent skill không tắt theo set, "bật buff từ Set 2 rồi về Set 1" là pattern hoàn toàn hợp lệ.

**Hai bộ skill hoàn toàn khác nhau.** Set 1 spear cho melee skill, Set 2 bow cho ranged skill — một character có thể chơi hai vai trò bằng một nút swap.

Một lưu ý với build minion và companion: **swap weapon set làm companion và minion bị gọi lại**, một số con bị desync Spirit và không resummon được hết map. Build companion phụ thuộc weapon swap nặng phải đảm bảo Spirit hai set khớp nhau để tránh companion bị tắt khi swap.

## Relationships

- **related_guides** [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit) — Spirit pool thay đổi theo set đang active; hiểu Spirit là prerequisite để setup dual-set an toàn.
- **related_guides** [Skill gem và Support gem: hệ thống Uncut Gem của POE2](/guides/beginner-skill-gem) — cơ chế gắn gem vào equipment, cần biết trước khi assign gem cho từng weapon set.
- **related_builds** [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry) — build dùng Parry snapshot qua weapon swap cho boss, ví dụ thực tế nhất của cơ chế này.
