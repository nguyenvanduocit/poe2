---
template: templates/guide-template.md
document_type: guide
title: Resistance và cơ chế cap 75%
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
  - resistance
  - defense
  - chaos-resistance
  - elemental
---

# Resistance và cơ chế cap 75%

:wiki-link{url="https://www.poe2wiki.net/wiki/Resistance"} là cơ chế phòng thủ căn bản nhất trong POE2 — nó quyết định bao nhiêu phần trăm sát thương fire, cold, lightning, và chaos bạn thực sự nhận vào mỗi đòn. Đây cũng là lý do số một khiến người mới chết oan: resistance chưa cap, nên đòn bình thường của map cũng gây damage nhiều gấp hai đến bốn lần so với khi đã cap.

## Vì sao mỗi 1% resistance dưới cap đều quan trọng

Resistance giảm damage đầu vào trực tiếp theo phần trăm. Resistance 0% = nhận 100% damage. Resistance 75% = nhận 25% damage. Nghĩa là cùng một đòn 1000 fire damage, build cap resistance nhận 250 còn build không có resistance nhận đủ 1000. Mỗi 1% thiếu so với 75% là 1% damage dư bạn chịu thêm — không có stat nào trong POE2 cho đổi trực tiếp 1-to-1 rõ ràng như vậy.

Cap mặc định là 75% cho cả bốn loại. Trên 75% không có hiệu lực trừ khi có nguồn tăng **maximum resistance** — loại này rất hiếm. Vì vậy mục tiêu thực tế của mọi build khi còn mới là đạt đúng 75/75/75/75 trước khi nghĩ đến chuyện khác.

## Game tự giảm elemental resistance khi bạn tiến lên

Đây là phần khiến nhiều người bị bất ngờ. POE2 áp đặt penalty vào elemental resistance (fire, cold, lightning) theo mức độ tiến trình:

- Hết Act 2: −10%
- Hết Act 3: −20%
- Hết Act 4: −30%
- Interlude (area level 54–59): −40%
- Interlude (area level 60–64): −50%
- Endgame (area level 65+): −60%

Penalty không nhảy cóc từ −30% lên −60% — có hai bước trung gian ở Interlude. Khi vào vùng level 54, bạn đã mất thêm 10% so với cuối Act 4. Đến endgame thật sự (level 65+), tổng penalty là 60%. Nếu gear đang có tổng +75% fire resistance, sau penalty còn 15% — nhận 85% fire damage thay vì 25%. Gear cần đủ resistance để bù qua penalty và vẫn đạt 75%, tức là cần tổng cộng +135% elemental resistance từ gear.

Penalty chỉ áp dụng cho elemental — không áp dụng cho chaos resistance.

## Chaos resistance luôn thấp và đây là lý do

Chaos resistance không bị penalty như elemental. Nhưng đây không phải lý do để chủ quan — passive tree không có nhiều node chaos res, gear ít roll mod này, và quan trọng nhất là **rune (Verisium Runeforging) không có rune chaos resistance**, chỉ có elemental. Kết quả là dù đã đeo đủ slot gear, chaos resistance vẫn thường kẹt ở mức thấp hoặc âm.

Ví dụ thực tế: ThaoCamVienSaiGon (Lv93 Spirit Walker) với gear endgame — fire 50 / cold 75 / light 75 / :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Resistance"} 27. Chaos thiếu 48% so với cap, và mỗi đòn chaos damage đang nhận 73% thay vì 25%. Chaos damage hay xuất hiện dưới dạng poison pools, boss ability pha cuối, và corrupted map mod — thứ giết người chơi mà không báo trước. Belt là slot dễ roll chaos resistance nhất; amulet và ring cũng roll được. Đây là ba slot nên ưu tiên khi cần bù chaos.

## Tìm resistance ở đâu và coi chừng map mod

**Gear** là nguồn resistance chính. Mod "+X% to Elemental Resistances" gộp cả ba loại fire/cold/lightning cùng lúc, tiết kiệm nhất khi cần bù nhiều chỗ. Chaos resistance phải tìm riêng — không gộp vào mod elemental hay all resistance.

**Passive tree** có cụm node all elemental resistance và từng loại riêng. Gõ "resist" vào ô search của tree để thấy hết.

**Quest reward** trong campaign tặng resistance cố định: giết Beira of the Rotten Pack (Act 1) +10% cold, Sisters of Garukhan (Act 2) +10% lightning, Blackjaw the Remnant (Act 3) +10% fire, và ba tattoo trong Act 4 mỗi loại +5%. Không bỏ qua những phần thưởng này — đây là resistance miễn phí không cần từ gear.

Map mod :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Weakness"} là thứ cần chú ý khi chạy endgame. Mod này giảm thêm elemental resistance của nhân vật, đẩy cả ba loại xuống dưới 75% ngay cả khi đang đứng đúng cap. Trước khi vào map có mod này, mở character sheet kiểm tra số trong ngoặc đơn — đó là uncapped resistance thật của bạn. Nếu số đó chỉ vừa đủ 75%, map Elemental Weakness sẽ đưa bạn xuống dưới cap. Cần có overcap (tổng resistance thực tế trên 75%) để bù lại.

## Relationships

- **related** [Armour và cơ chế giảm physical damage](/mechanics/armour-defensive-scaling) — resistance phòng nguyên tố, armour phòng physical — hai lớp phòng thủ bổ sung cho nhau.
- **related** [Energy Shield và cách recover](/mechanics/energy-shield-recovery) — ES là pool sống phía trên life, cũng nhận damage sau khi qua resistance filter.
