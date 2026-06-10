---
template: templates/guide-template.md
document_type: guide
title: "Rune và augment socket: cách socket stat vào gear"
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
  - rune
  - augment
  - crafting
---

# Rune và augment socket: cách socket stat vào gear

Rune là augment item cắm vào augment socket trên weapon và armour để thêm stat — một layer tăng sức mạnh hoàn toàn độc lập với prefix/suffix trên item. Nhiều player mang theo cả đống rune từ Act 1 mà không biết dùng, hoặc nhầm tưởng rằng phải đợi đến endgame mới cắm. Thực ra rune có thể và nên được cắm ngay từ khi nhặt được, ngay cả trên gear campaign tạm thời.

## Effect của rune thay đổi theo slot

Điểm quan trọng nhất của hệ thống rune: cùng một rune cho hai effect khác nhau tùy vào slot bạn cắm vào. :wiki-link{url="https://www.poe2wiki.net/wiki/Rune"} của Ezomyte có hai lớp stat — một lớp chính dựa trên loại item, và một lớp phụ gọi là Bonded.

Lấy :wiki-link{url="https://www.poe2wiki.net/wiki/Lesser_Iron_Rune"} làm ví dụ điển hình:

- Cắm vào **martial weapon** (axe, sword, spear, mace...): 14% increased Physical Damage
- Cắm vào **wand hoặc staff**: 20% increased Spell Damage
- Cắm vào **armour** (body, helm, gloves, boots): 14% increased Armour, Evasion và Energy Shield

Đây là lý do cùng một rune nhặt được có thể dùng hiệu quả cho cả melee lẫn caster lẫn tank — game tự nhận diện slot và áp effect phù hợp.

Ngoài lớp chính, mỗi rune còn có lớp **Bonded** — effect phụ kích hoạt thêm khi item đó đang được trang bị. Ví dụ Iron Rune Bonded trên armour cho +10 life và +10 mana, còn Bonded trên martial weapon cho 20% increased effect of Fully Broken Armour. Lớp Bonded nhỏ hơn lớp chính nhưng cộng dồn đáng kể khi cắm nhiều slot.

Chọn rune nào cho slot nào xuất phát từ build priority. Nếu cần đẩy damage → Iron/Desert/Glacial/Storm Rune vào weapon. Nếu cần sống bền hơn → Desert/Glacial/Storm Rune (resistance) vào armour. Nếu cần leech → Body Rune vào weapon.

## Cắm rune xong không lấy lại được

Tooltip của rune ghi rõ: *"Place into an empty Augment Socket in a Weapon or Armour to apply its effect. Once socketed it cannot be retrieved but can be replaced by other Augment items."*

Rune đã cắm không thể rút ra nguyên vẹn. Muốn thay rune khác → cứ cắm rune mới vào cùng socket — rune cũ tự động bị phá hủy, rune mới vào chỗ. Không cần dùng currency gì để "clear socket" trước.

Nếu nhất thiết phải giữ lại rune mà không phá hủy, có :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Extraction"} — nhưng orb này sẽ phá hủy cái item chứa rune đó thay vì phá rune. Thực tế thì Orb of Extraction hiếm và đắt; campaign không cần lo tới. Cứ cắm rune tốt nhất hiện có, gear ngon hơn thì bỏ cả item đi thay thế luôn.

## Tìm socket ở đâu và dùng Artificer's Orb

Phần lớn item trong campaign có 0 socket mặc định — gear rợt được socket không phải chuyện hiển nhiên. Socket xuất hiện theo hai cách.

Item tự sinh ra có socket khi drop: body armour và 2H weapon có thể có đến 2 socket; các slot khác (helm, gloves, boots, 1H weapon, shield) có thể có 1. Một số item cao cấp trong map-level cao sinh với socket extra dạng "Exceptional".

Nếu item không có socket sẵn, dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Artificer%27s_Orb"} để thêm một socket. Giới hạn socket tối đa vẫn giữ nguyên theo loại item — body/2H tối đa 2, còn lại tối đa 1. Artificer's Orb không tự drop nhiều, nhưng ghép được từ 10 :wiki-link{url="https://www.poe2wiki.net/wiki/Artificer%27s_Shard"} — shard này nhặt được từ salvage gear tại Salvage Bench. Chi tiết salvage xem [hướng dẫn salvage và disenchant](/guides/beginner-salvage-disenchant).

Thứ tự thực tế khi nhặt item ngon mà chưa có socket: ghé Salvage Bench tích đủ 10 shard → craft ra orb → thêm socket → cắm rune.

## Tier rune và upgrade ở Reforging Bench

Rune chia làm ba tier tùy theo level requirement và drop pool:

**Lesser rune** không yêu cầu level — rợt được ngay từ đầu game. Drop nhiều nhất trong campaign, effect nhỏ nhất. Đây là loại bạn sẽ nhặt liên tục từ Act 1-2.

**Regular rune** (không có prefix) yêu cầu character level 15 để cắm. Drop từ mid-campaign trở đi, effect lớn hơn rõ ràng. Ví dụ Iron Rune regular cho 16% increased Physical Damage so với Lesser ở 14%.

**Greater rune** yêu cầu level 30, drop chủ yếu từ tier map cao. Effect mạnh nhất trong ba tier tiêu chuẩn.

Ngoài ba tier này còn có **Endgame rune** — drop ở map và không thể upgrade lên cao hơn — với limit 1 per character mỗi loại (equip trùng loại thì cái sau bị disabled).

Cách nhanh nhất để leo tier mà không cần chờ drop: mang ba rune cùng loại ra :wiki-link{url="https://www.poe2wiki.net/wiki/Reforging_Bench"} (NPC craft bench trong town) để upgrade lên tier kế tiếp. Ba Lesser Iron Rune → một Iron Rune; ba Iron Rune → một Greater Iron Rune. Nếu đang tích đủ rune cùng loại, upgrade ngay thay vì để đống.

## Ezomyte Rune, Aldur Rune và Runic Ward là ba thứ khác nhau hoàn toàn

Trong 0.5 Runes of Aldur, game có thêm hai hệ thống mang chữ "rune" nhưng không liên quan gì đến hệ thống Ezomyte Rune vừa giải thích.

**Aldur Rune** (còn gọi là Ancient Rune) là loại rune đặc biệt chỉ kiếm được qua Remnant encounter và Runic Recipe unlock ở Act 4 — không drop tự nhiên và không ghép từ shard. Chúng có effect riêng khác hẳn rune thường, dành cho endgame build specific.

**Runic Ward** là một defensive layer hoàn toàn khác — không phải item bỏ vào socket. Runic Ward đến từ Verisium Runeforging, một hệ thống craft vũ khí/armour đặc biệt của 0.5 kích hoạt ở 1 life và hồi độc lập. Tên giống nhau nhưng cơ chế không có điểm chung với rune augment.

Khi đọc guide hay xem stream nói về "rune" mà chưa biết đang nói loại nào: nếu là drop tự nhiên từ đầu game và bỏ vào socket → Ezomyte Rune. Nếu là reward đặc biệt từ Remnant encounter 0.5 → Aldur Rune. Nếu là stat defense kích hoạt khi gần chết → Runic Ward từ Verisium Runeforging.

## Relationships

- **related** [Salvage và disenchant](/guides/beginner-salvage-disenchant) — nguồn Artificer's Shard để craft Artificer's Orb thêm socket vào gear.
- **related** [Currency cơ bản trong POE2](/guides/beginner-currency) — tổng quan về các loại currency drop, trong đó Aldur Rune (Ancient Rune 0.5) được nhắc đến như loại đặc biệt riêng.
- **related** [Crafting cơ bản](/guides/beginner-crafting-basics) — các phương pháp craft item khác ngoài rune socket.
