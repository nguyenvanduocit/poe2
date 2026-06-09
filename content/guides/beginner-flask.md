---
template: templates/guide-template.md
document_type: guide
title: "Flask: cách dùng bình hồi và hệ thống charge"
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
  - flask
  - charm
  - survival
  - life-flask
  - mana-flask
---

# Flask: cách dùng bình hồi và hệ thống charge

Flask không phải potion một lần xài rồi bỏ — đây là bình hồi tái sử dụng, hoạt động trên hệ thống charge. Quản lý tốt charge là kỹ năng sống sót đầu tiên cần học, vì flask cạn charge lúc không đúng lúc thì xem như bạn không có flask trong tay.

## Charge đến từ kill, không tự nạp lại

Điểm mấu chốt nhất: charge **không tự regen theo thời gian**. Giết quái mới có charge. Quái thường cho ít nhất, quái magic cho nhiều hơn đáng kể, rare và unique cho nhiều nhất — một rare đơn lẻ có thể tương đương hàng chục quái thường về lượng charge nạp được. Ngoài ra **Well** trong town và **Checkpoint** trong dungeon nạp lại flask hoàn toàn khi kích hoạt.

Hệ quả thực tế: vào boss room mà charge đã cạn từ trước thì coi như tay không. Thói quen đúng là đi qua pack quái trước boss để nạp charge, và nếu wipe thì về checkpoint rồi nạp lại trước khi vào lại.

## Đổi flask base mỗi vài act

:wiki-link{url="https://www.poe2wiki.net/wiki/Life_flask"} có nhiều tier theo level: Lesser (lv1), Medium (lv4), Greater (lv10), Grand (lv16), Giant (lv23), Colossal (lv30), Gargantuan (lv40), Transcendent (lv50), Ultimate (lv60). Mỗi tier hồi nhiều life hơn tier trước.

Người mới hay quên bước này — đi đến act 4-5 vẫn mang Lesser Life Flask từ đầu game thì lượng hồi không đủ bù lại damage nhận vào. Cứ mỗi khi đủ level để dùng tier tiếp theo, ghé vendor town đổi ngay — vendor bán đủ các tier flask base với giá rẻ, không cần chờ drop.

Cũng đổi :wiki-link{url="https://www.poe2wiki.net/wiki/Mana_flask"} nếu build dùng mana nhiều. Build physical hoặc minion ít khi cần Mana Flask, nhưng spellcaster thì thiếu nó là cạn mana giữa pack.

## Roll modifier trên flask bằng orb

:wiki-link{url="https://www.poe2wiki.net/wiki/Flask"} chỉ có ba rarity: normal (trắng), magic (xanh), unique. Không có rare flask. Flask normal không có modifier thêm — muốn có thì dùng **Orb of Transmutation** để biến thành magic.

Một số modifier đáng chú ý: **increased Amount Recovered** (hồi nhiều hơn mỗi lần dùng), **reduced Charges per use** (dùng được nhiều lần hơn trước khi cạn). Modifier **Instant Recovery** là mạnh nhất để boss: thay vì hồi rải ra vài giây, flask hồi ngay lập tức — rất quan trọng khi đang bị hit liên tục và không có thời gian chờ.

Nếu roll ra modifier không ưng, cách rẻ nhất là mua một flask base normal mới từ vendor rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Transmutation"} lại — flask base rất rẻ nên reroll kiểu này gần như không tốn gì. Flask magic mới có một mod thì dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Augmentation"} để thêm mod thứ hai.

## Charm là hệ thống riêng, không phải flask

:wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} trông giống flask nhưng hoạt động hoàn toàn khác. Charm **không thể kích hoạt bằng tay** — tự bật khi điều kiện được đáp ứng. Ruby Charm tự kích hoạt khi bạn ăn fire damage, Thawing Charm tự bật khi bị freeze, Stone Charm tự bật khi bị stun. Bạn không nhấn nút — hệ thống tự lo.

Charm slot đến từ **belt**, nhưng chiếm slot riêng biệt với flask. Belt ilvl dưới 30 cho 1 charm slot, ilvl 30-59 cho 1-2 slot, ilvl 60+ cho tối đa 3 slot. Quest Ancient Vows thưởng thêm 1 slot nữa. Charge của charm cũng nạp từ kill và từ Well/Checkpoint giống flask.

Flask và charm cùng gắn trên belt nhưng không dùng chung slot. Muốn chạy đủ charm thì tìm belt có nhiều charm slot — đây là một trong những stat quan trọng trên belt khi lên endgame.

## Relationships

- **related** [Ba lớp phòng thủ vật lý: Armour, Evasion và Block](/guides/beginner-defence-layers) — flask là một trong các lớp phòng thủ; bài này đặt flask vào bức tranh toàn cảnh.
- **related** [Ba pool tài nguyên: Life, Energy Shield và Mana](/guides/beginner-life-es-mana) — hiểu các resource flask đang hồi.
- **related** [Ailment và status effect trong POE2](/guides/beginner-ailments) — charm bảo vệ khỏi các ailment như freeze, shock, bleed; đọc thêm về từng ailment để biết charm nào cần trang bị.
- **related** [Resistance và cơ chế cap 75%](/guides/beginner-resistances) — Ruby/Sapphire/Topaz Charm cho resistance tạm thời khi ăn hit; bổ trợ cho việc cap resistance.
