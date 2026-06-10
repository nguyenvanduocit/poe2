---
template: templates/guide-template.md
document_type: guide
title: "Độ hiếm item: Normal, Magic, Rare, Unique và prefix/suffix"
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
  - item-rarity
  - crafting
  - affix
---

# Độ hiếm item: Normal, Magic, Rare, Unique và prefix/suffix

Mọi item nhặt được trong POE2 đều có một trong bốn mức rarity: Normal, Magic, Rare, hoặc Unique. Rarity không chỉ là màu sắc mà quyết định trực tiếp item có bao nhiêu modifier — và hiểu điều này là nền tảng để đọc gear, so sánh item, và biết khi nào đáng dùng orb craft.

## Normal item không có modifier nào

Normal item (màu xám, còn gọi là base item) không có explicit modifier nào. Một số base type có sẵn implicit modifier — ví dụ ring có thể có resist cộng sẵn — nhưng đó là đặc tính của base, không phải affix có thể craft thêm hay gỡ bỏ.

Normal item là nguyên liệu đầu vào của craft. Dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} để nâng lên Magic, hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Alchemy"} để nhảy thẳng lên Rare. Ngoài ra, :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} có thể biến Normal item thành Unique — nhưng chỉ khi base type đó có bản Unique tồn tại trong game. Nếu base không có bản Unique nào, orb không dùng được và không bị tiêu hao. Khi dùng thành công, item hoặc thành Unique hoặc bị phá hủy — không có kết quả trung gian.

## Magic item có tối đa 1 prefix và 1 suffix

Magic item (màu xanh dương) có tối đa hai modifier: một prefix và một suffix. Đây là giới hạn cứng — không thể có hai prefix trên Magic item.

Khi dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} lên Normal item, kết quả chỉ ra **một** modifier (prefix hoặc suffix). Muốn đủ hai mod, dùng thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"} — nó thêm modifier còn thiếu vào Magic item đang có đúng một mod.

Magic item không dùng tốt trực tiếp như gear vì có quá ít modifier. Công dụng chính là làm bước đệm: khi đã có mod đúng ý trên Magic item, dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Regal_Orb"} để nâng lên Rare — mods cũ giữ nguyên và một mod mới được thêm vào. Đây là cách craft Rare có kiểm soát hơn so với Alchemy.

## Prefix và suffix là gì

Mỗi modifier trên item thuộc một trong hai loại: prefix hoặc suffix. Hai loại này không có gì khác nhau về sức mạnh — chỉ là cách game phân nhóm để giới hạn số mod tối đa mỗi loại trên item. Một số modifier nhất định chỉ có thể là prefix (thường là các stat tấn công như flat physical damage, thêm life), số khác chỉ là suffix (thường là resist, attribute, speed).

Hiểu prefix/suffix quan trọng khi dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} hay :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Annulment"}: Exalted chỉ thêm được khi còn slot trống (chưa đủ 3 prefix hoặc chưa đủ 3 suffix), Annulment xóa ngẫu nhiên không phân biệt loại.

## Rare item có tối đa 3 prefix và 3 suffix

Rare item (màu vàng) là loại gear chính của POE2 endgame. Tối đa có 6 modifier: 3 prefix và 3 suffix. Rare item nhặt trên sàn thường ra 4 hoặc 5 mod — chỉ khoảng 10% rare item rơi đủ 6 mod.

Vì nhiều slot mod hơn, Rare item linh hoạt hơn nhiều so với Magic. Cùng một base type, Rare có thể gánh đủ life, resist, và stat cùng lúc. Đây là lý do mọi slot gear quan trọng (helm, body, gloves, boots, ring, amulet, belt) đều nhắm tới Rare ở endgame.

:wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} trong POE2 xóa **một** mod ngẫu nhiên và thêm **một** mod mới vào Rare item — không reroll toàn bộ như POE1. :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} thêm một mod mới khi item còn dưới 6 mod. Flask và charm không thể ở rarity Rare.

## Unique item có modifier cố định, không roll lại được

Unique item (màu nâu/cam) dùng cùng base type với Normal item nhưng có tên riêng, artwork riêng, và bộ modifier cố định được thiết kế sẵn. Các mod trên Unique không thay đổi qua orb craft — không thể thêm, bớt, hay reroll modifier.

Điều này làm Unique khác hoàn toàn với Rare. Rare item mạnh vì tổng hợp được đúng stats cần; Unique item mạnh vì cơ chế đặc thù mà Rare không bao giờ có được. Nhiều build-defining interaction trong POE2 đến từ Unique — ví dụ :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"} mở trần số companion, hay :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} feed flat damage vào companion dựa trên vũ khí tay chính.

Một số Unique là drop-restricted — chỉ rơi từ nguồn cụ thể và không thể tạo bằng Orb of Chance.

## Item unidentified nghĩa là gì và nhận dạng bằng gì

Mọi Magic, Rare, và Unique nhặt được trên sàn đều ở trạng thái **unidentified** — item chưa hiện stats, chỉ thấy base type và rarity. Tooltip sẽ hiện "Unidentified" ở trên cùng.

Dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Scroll_of_Wisdom"} để nhận dạng: right-click Scroll rồi left-click item cần identify. Sau đó mọi modifier mới hiện ra và có thể đọc được. Scroll of Wisdom rơi rất nhiều trong suốt game — không cần tiết kiệm, nhặt item lạ là identify ngay.

Normal item không cần identify vì không có explicit modifier để reveal.

## Relationships

- **related_guides** [Currency cơ bản: mỗi orb làm gì](/guides/beginner-currency) — giải thích vai trò từng orb craft liên quan đến rarity (Transmutation, Alchemy, Regal, Chaos, Exalted).
- **related_guides** [Skill gem cơ bản](/guides/beginner-skill-gem) — cách gem hoạt động và tại sao rarity của item không ảnh hưởng đến gem.
- **related_guides** [Defence layers: cách POE2 tính phòng thủ](/guides/beginner-defence-layers) — khi nào Rare item thật sự cần thiết cho defense.
