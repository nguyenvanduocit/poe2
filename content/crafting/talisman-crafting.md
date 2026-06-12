---
template: templates/mechanic-template.md
document_type: mechanic
title: Talisman crafting
status: published
author: duocnv
created: '2025-12-22'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: crafting
tags:
  - talisman
  - crafting
  - physical-damage
  - druid
  - endgame
  - poe2
  - mechanic
---

# Talisman crafting

:wiki-link{url="https://www.poe2wiki.net/wiki/Talisman"} là two-handed weapon cho Druid, unlock shapeshift vào Bear, Werewolf, và Wyvern form. Physical attack builds chạy Bear slam hay Werewolf strike scale damage trực tiếp từ weapon physical damage, nên weapon pDPS là stat đầu tư đáng nhất. :wiki-link{url="https://www.poe2wiki.net/wiki/Maji_Talisman"} là base endgame cao nhất dòng này — và sau khi Recombinator bị disable trong 0.5.0, cách craft nó thu gọn còn ba hướng rõ ràng.

## Maji Talisman là base duy nhất đáng nhắm ở endgame

:wiki-link{url="https://www.poe2wiki.net/wiki/Maji_Talisman"} yêu cầu level 79 (100 Str, 67 Int), base physical damage 61-114, APS 1.25, crit 8% — base pDPS 109.4 trước bất kỳ mod nào. :wiki-link{url="https://www.poe2wiki.net/wiki/Fury_Talisman"} (level 59) chỉ có base pDPS 87.5. Chênh lệch ~22 pDPS từ base nhân qua tất cả %physical mods ở endgame thành khoảng cách không thể bỏ qua — Fury Talisman chỉ đáng dùng khi attribute chưa đủ để equip Maji.

Implicit của Maji Talisman là +7-10 Maximum Rage sau 0.5.0 (nerf từ +8-12; item đang có implicit cũ reroll được bằng Divine Orb). Item level 75+ bắt buộc để pool T1 flat physical damage modifier — base dưới ilvl 75 không có T1 trong pool nên mọi crafting effort đều bị ceiling thấp hơn. Về socket: nhiều socket cho nhiều rune augment slot, ưu tiên mua base có socket count cao nhất trong tầm giá.

## Ba method crafting còn lại sau 0.5.0

0.5.0 disable Recombinator và xóa Omen of Recombination. Method trung gian dựa vào Recombinator — ghép T1 flat phys với T4 %phys để ra base 550-650 pDPS — không còn tồn tại. Ba method còn lại:

- **Budget Hybrid (~1 divine, 450-550 pDPS):** tìm magic base đã có hybrid %physical, apply Abrasion để thêm flat phys, unveil attack speed qua Jawbone.
- **Mua magic base sẵn và finish (~3-4 divine, 600-650 pDPS):** bỏ qua bước tự roll base, mua thẳng T1-T2 %phys trên trade rồi finish.
- **Fracture min-max (5+ divine, 700+ pDPS):** fractured T2 %phys rồi chaos spam cho T1 flat phys — ceiling cao nhất trong league.

## Budget hybrid từ magic base (~1 divine)

Đây là entry point cho early mapping, không cần đầu tư trước mà vẫn ra weapon usable trong vài ngày đầu league.

Mua magic Maji Talisman đã có hybrid %physical damage trên trade. Filter "NOT accuracy" — hybrid accuracy là mod riêng, không phải %physical thuần. Roll khoảng 80% increased physical là đủ cho method này, không cần T1.

Apply :wiki-link{url="https://www.poe2wiki.net/wiki/Greater_Essence_of_Abrasion"} — Essence upgrade magic item thành rare và guarantee thêm prefix flat physical. Trên two-handed weapon, Greater Abrasion add 23-35 to 39-59 physical damage. Một prefix slot bị lock bởi Essence này.

Sau khi Essence xong, đưa weapon đến Amamanu để unveil attack speed: dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Ancient_Jawbone"} hoặc tier cao hơn để add Desecrated modifier lên weapon, rồi unveil tại Amamanu. Amamanu chỉ có 3 options cho Talisman — attack speed 18%, spirit reservation reduction, và một option kém hơn — nên xác suất 1/3 mỗi lần. Nếu không ra attack speed, scour suffix rồi Jawbone lại.

Finish với Battle Essence (đặt cuối cùng, cần prefix slot trống) rồi Vaal Infuser để push quality.

Kết quả kỳ vọng: ~450-550 pDPS tùy roll hybrid và flat.

**Cách source base nhanh hơn:** mua 20-30 white Maji Talisman base (~4x/base), spam Perfect Transmute rồi Perfect Augment tất cả. Hybrid %phys base chiếm khoảng 15-20% trong batch — lọc lấy cái roll cao nhất rồi vào quy trình trên. T1 flat phys base từ batch này không còn chỗ dùng sau khi Recombinator chết, scour rồi resell.

## Mua magic base sẵn rồi finish (~3-4 divine)

Skip bước tự roll base, mua thẳng magic Maji Talisman T2+ %physical damage (90%+ increased physical) trên trade. T2 %phys khoảng 3 divine, T1 (130%+) cao hơn đáng kể. Đây là approach nhanh nhất cho mid-game: base đã chất lượng cao, chỉ cần finish đúng thứ tự.

Finish từ magic base T2 %phys:

1. Greater Essence of Abrasion → upgrade sang rare, guarantee flat phys prefix.
2. Suffix Exalt để lock một suffix slot trước khi unveil — tránh Jawbone roll bị overwrite.
3. Jawbone + Amamanu unveil → chọn attack speed 18%.
4. Nếu muốn Gain Physical as Extra prefix, dùng kỹ thuật Omen Dextral Erasure + Perfect Gain Physical Essence — xem phần riêng bên dưới.
5. Battle Essence cuối cùng cho +5 Melee Skill Levels.
6. Vaal Infuser để push quality 25%+.

Kết quả: 600-650 pDPS với T2 base. T1 %phys đẩy ceiling cao hơn.

## Fracture min-max để đạt pDPS tối đa (5+ divine)

Method này nhắm ceiling 700-800 pDPS, phù hợp khi đã có clear speed ổn định và muốn upgrade vũ khí một lần dứt điểm. Mỗi lần fail fracture thì mất base, nên budget buffer tối thiểu cho 3-4 lần thử mới đáng vào.

Mua 3-socket Maji Talisman white ilvl 75+, khoảng 20x/base. Spam Perfect Nullification + Perfect Augmentation cho đến khi ra T2 %physical (Tyrannical — 160%+ increased physical). T1 quá khó để hit random; T2 đủ để fracture vì sau khi fractured nó không bị overwrite bởi Chaos Orb.

Apply Greater Abrasion để có T3 flat phys prefix. Add thêm một suffix craft để có đủ mods trước khi fracture. Dùng Fracturing Orb — xác suất fracture đúng %phys là 1/3 khi weapon có 3 mods. Nếu fail, base die và bắt đầu lại.

Sau khi fracture thành công: Annul off các suffix thừa chỉ giữ một, rồi spam Chaos Orb cho đến khi ra T1 flat physical (61-90 added physical damage). Fractured prefix không bị chaos overwrite nên chỉ cần kiên nhẫn chờ flat phys hit.

Finish với Gain Physical as Extra (kỹ thuật bên dưới), Battle Essence +5, Vaal Infuser. Kết quả perfect: T2 %phys fractured (160%+), T1 flat phys (61-90), Gain Physical, +5 Melee Skills, 18% attack speed, 25%+ quality — 750-800 pDPS.

## Ép mod Gain Physical as Extra

Prefix "Gain X% of Physical Damage as Extra" là mod offensive cao cấp nhất trên Talisman và không roll được bằng random crafting thông thường. Để force nó dùng combo :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Dextral_Erasure"} + Perfect Gain Physical Essence:

1. Exalt một suffix để chỉ còn đúng một suffix trống — Omen Dextral Erasure cần có suffix để xóa.
2. Apply Omen of Dextral Erasure (~165x) — xóa một suffix random, giải phóng slot.
3. Ngay sau đó apply Perfect Essence of Abrasion (Gain Physical variant) — Essence guarantee thêm Gain Physical prefix ngay cả trên rare weapon.

Combo này expensive (~165x cho Omen) nên chỉ đáng trên base đã có T1-T2 %phys và flat phys tốt. Waste Omen vào budget base không thu hồi được.

## Battle Essence và Vaal Infuser

Battle Essence guarantee prefix "+5 to Level of all Melee Skill Gems" trên two-handed weapon trong 0.5.0 (nerf từ +7 xuống +5). Đây luôn là bước cuối cùng trong chuỗi prefix — Essence cần một prefix slot trống để apply; nếu prefixes đã full thì Essence fail và mất tiền. Kiểm tra prefix count trước khi apply.

:wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Infuser"} add quality với 5/6 xác suất không corrupt weapon, và 1/6 xác suất corrupt (block mọi crafting tiếp theo). Spam Infuser cho đến khi corrupt — kết quả thường 24-27% quality. Mỗi 1% quality = 1% base physical damage thêm vào, impact trực tiếp lên pDPS. Áp dụng sau khi đã finish mọi mod.

## Lỗi hay gặp

Mua Fury Talisman vì giá thấp hơn Maji. Floor pDPS thấp hơn ~20% ngay từ base — sau khi nhân qua tất cả %physical mods ở endgame thành cách biệt không bù lại được bằng roll tốt.

Không filter "NOT accuracy" khi tìm hybrid %phys base. Hybrid accuracy trông giống %physical trên tooltip nhưng là mod khác — mua nhầm sẽ lãng phí Abrasion và Jawbone step.

Mua hoặc craft base dưới ilvl 75. T1 flat physical damage không có trong pool dưới ilvl 75. Check item level trước bất kỳ bước craft nào.

Apply Battle Essence khi prefixes đã full. Essence fail khi không có prefix slot trống, mất cả essence lẫn tiền. Battle Essence luôn là bước cuối trong chuỗi prefix.

Rush vào Fracture method khi chưa đủ buffer. Trung bình 3 lần thử mới fracture thành công — tức 60x chỉ cho base cost, chưa tính công roll T2 %phys mỗi lần. Chỉ vào method này khi có currency buffer cho tối thiểu 4-5 lần thử.

## Version History

### Patch 0.5.0 (Return of the Ancients)

- Recombinator bị disable vĩnh viễn; Omen of Recombination bị xóa — item đang hold bị xóa ngay khi login. Method ghép T1 flat phys + T4 %phys để ra base 550-650 pDPS không còn khả thi.
- Implicit Maximum Rage của Maji, Fury, và Rabid Talisman giảm từ +8-12 xuống +7-10. Update item cũ bằng Divine Orb.
- Battle Essence T1 trên two-handed attack weapon giảm từ +7 xuống +5 to Level of all Melee Skills.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — overview thay đổi 0.5.0 bao gồm disable Recombinator và rune crafting hệ mới.
- **related_mechanics** [Shapeshifting](/mechanics/shapeshifting) — cơ chế Bear/Werewolf/Wyvern form mà Talisman unlock, context cho việc scale physical attack damage từ weapon.
