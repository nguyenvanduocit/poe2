---
template: templates/mechanic-template.md
document_type: mechanic
title: Đợt Unique Mới và Meta Shift
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - unique-items
  - runes-of-aldur
  - meta
  - datamine
---

# Đợt Unique Mới và Meta Shift

0.5 bơm vào 42 unique item mới, và đọc nguyên cục danh sách đó từ poe2db cho thấy hướng đi của league rõ hơn bất kỳ dòng patch note nào: phần lớn item mới gắn vào ba trục — companion (Spirit Walker), Remnant/Runic Ward (crafting league mechanic), và mana-as-resource. Tại thời điểm trước khi league live (25/05, launch ~29/05), chỉ **23/42 item đã lộ stats đầy đủ** trên poe2db; 19 item còn lại mới là vỏ datamine (tên + base type, mod chưa populate). Note này dùng để chốt sớm xem cái nào đáng săn ngay tuần đầu, cái nào phải đợi log in-game.

## How It Works

poe2db datamine item ngay khi patch file ra, nên page tồn tại trước cả khi mod được GGG finalize. Mỗi page có tag `Release Version` và một mục `Version history`; với cả 42 item này, version history đều ghi `0.5.0 — New Unique item`, đó là dấu xác nhận chúng thuộc đợt 0.5 chứ không phải item cũ. Trục phân loại quan trọng nhất khi đọc một đợt injection sớm không phải là "item nào mạnh" mà là "item nào đã có số để tin". Một page chỉ hiện base type + flavour text, không có dòng mod nào, nghĩa là GGG chưa khoá stat — không thể đánh giá, và càng không thể tin con số nào gán cho nó.

Bài học nền tảng của việc đọc đợt này nằm ở :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"}. Cái tên gợi ngay tới flask-powerhouse của POE1, nhưng :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} phiên bản 0.5 trên :wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Belt"} chỉ có hai dòng: "Has (1—3) Charm Slot" và "(20—30)% increased Stun Threshold". Không có chuyện flask tự bật, không có "Magic Charms effect". Mọi item mang tên port từ POE1 (Mageblood, :wiki-link{url="https://www.poe2wiki.net/wiki/Voices"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Loreweave"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Facebreaker"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Geofri's_Sanctuary"}, bộ Berek) đều phải đọc lại mod từ đầu, vì GGG re-design chứ không copy. Đây là lý do note bám sát con số poe2db thay vì ký ức POE1.

Trong 23 item đã lộ stat, đỉnh damage budget rơi vào hai weapon. :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Empyrean"} (Aberrant Sledge) cho 94% increased Physical Damage, Adds 166 to 372 Cold Damage, +319 maximum Mana, "10% of Damage is taken from Mana before Life", cộng "Attacks with this Weapon have Added Cold Damage equal to 6% to 10% of maximum Mana" và convert 100% Fire→Cold với Mace skills — tức một mace mana-as-life scale cold theo mana pool. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Ordained"} (Grand Spear, Lv79) cho 243% increased Physical Damage, Adds 1 to 209 Lightning Damage, +6.47% Critical Hit Chance, Life Leech tính cả lightning lẫn phys, và "Create a Fragment of Divinity in your Presence every 4 seconds". Cả hai có math chain rõ ràng, đánh giá được ngay.

## Key Interactions

Trục companion là nơi đợt này dày nhất, và nó cắm thẳng vào [Spirit Walker](/mechanics/spirit-walker-companion-beast-hunt). :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} (Stoic Sceptre, Lv6) mang dòng phá luật "You can have any number of Companions of different types" cùng "Companions deal 85% increased damage to your Marked targets" và 54% increased Spirit — đây là item định nghĩa lại trần số lượng companion, không chỉ buff damage. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (Perching Staff) đẩy minion 111% increased Damage, thêm 34% increased Spirit Reservation Efficiency và 12% chance inflict Gruelling Madness on Hit — staff minion thuần, hợp với hướng [Dinomancer Lich Elephant](/builds/witch/dinomancer-lich-elephant).

Trục Remnant gắn với league crafting. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"} (Hewn Mask, Lv84) được rework hẳn cho 0.5: "Remnants you create affect Allies in your Presence as well as you when collected" và 94% increased Reservation Efficiency of Remnant Skills, kèm 15% additional Physical Damage Reduction và +13% Chaos Resistance đổi lấy -10% all Elemental Resistances. :wiki-link{url="https://www.poe2wiki.net/wiki/Eventide_Petals"} đưa Runic Ward thành stat scale được với +32 to maximum Runic Ward — layer phòng thủ mới của league giờ có item hỗ trợ trực tiếp.

Trục curse stacking xoay quanh :wiki-link{url="https://www.poe2wiki.net/wiki/Liminal_Coil"} (Twisted Wand): "Magnitudes of Curses you inflict are zero" cộng "Curses you inflict ignore Curse limit", rồi Spell Hits gain 27% of Damage as Extra Chaos *và* 27% as Extra Physical *per Curse on target*. Cơ chế tự cân bằng — bỏ magnitude curse để đổi lấy việc chồng vô số curse rồi convert mỗi curse thành extra damage. Đây là build-around thật sự, không phải stat stick.

## Optimization

Săn trước tuần đầu nên ưu tiên theo "đã có số + định nghĩa archetype": :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} cho bất kỳ ai chạy companion (mở trần số lượng companion là thứ không passive nào thay được), :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Empyrean"} cho mace mana-tank, :wiki-link{url="https://www.poe2wiki.net/wiki/Liminal_Coil"} cho curse caster. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Auspex"} (Exquisite Vest, Lv84) là body armour evasion cao cấp với 223% increased Evasion Rating + grants Level 20 Mist Raven, nhưng "100% increased Attribute Requirements" khiến nó kén — chỉ đáng khi build dư attribute.

Phần còn lại đợi league live rồi mới định giá: 19 item vỏ datamine chưa có mod, và bộ :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Grip"} / :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Pass"} / :wiki-link{url="https://www.poe2wiki.net/wiki/Berek's_Respite"} (đều Prismatic Ring, Lv35) hiện mới chỉ lộ +(7—10)% to all Elemental Resistances — phần mod đặc trưng (leech khi shock/freeze/ignite ở POE1) chưa populate, nên chưa thể chốt cái nào trong ba ring khác nhau ra sao.

## Companion & Minion Items

Ngoài Sylvan's Effigy và The Raven's Flock đã nói ở trên, trục này còn các weapon grant skill companion/azmeri mới mà bản thân con số scale đã rõ. :wiki-link{url="https://www.poe2wiki.net/wiki/Periphery"} (Heartwood Shortbow) là elemental bow ba màu: Adds 49 to 90 Fire, 38 to 70 Cold, 1 to 135 Lightning, 12% increased Attack Speed, kèm dòng đưa elemental damage from hits vào magnitude của Flammability/Ignite/Chill/Freeze/Shock — bow cho ailment-stacker. :wiki-link{url="https://www.poe2wiki.net/wiki/Horror's_Flight"} (Engraved Bracers, Lv65) là glove evasion 213% increased Evasion Rating, +22 Dexterity, Adds 19 to 34 Chaos Damage to Attacks, gain Fear Incarnate khi Cull — glove cull-stack cho crit/evasion build.

## Weapon Carries

:wiki-link{url="https://www.poe2wiki.net/wiki/Brutus'_Lead_Sprinkler"} (Morning Star, Lv45) port từ POE1 nhưng số 0.5 cụ thể: 102% increased Physical Damage, +23 Strength, 5 to 10 Added Fire per 25 Strength, và "Hits with this Weapon have 5% chance to Trigger Molten Shower per 25 Strength" — strength-stacker mace. :wiki-link{url="https://www.poe2wiki.net/wiki/Ironbound"} (Warden Bow, Lv11) là bow phòng thủ lai: +12% to Block chance, 5% increased Block chance per 100 Item Armour, "Hits with this weapon have 1 to 4 Added Physical Damage per 1% Block Chance" — block càng cao đánh càng đau, hướng tankbow. :wiki-link{url="https://www.poe2wiki.net/wiki/Redemption"} (Trarthan Cannon) cho 382% increased Physical Damage nhưng đánh đổi "Hits with this Weapon have no Critical Damage Bonus" và 22% reduced Cooldown Recovery Rate, chạy theo cơ chế Explosive Rhythm/Fervour của grenade. :wiki-link{url="https://www.poe2wiki.net/wiki/Serle's_Grit"} (Kalguuran Forgehammer, Lv47) gắn vào Protective Rune league: 113 Physical Thorns damage per active Protective Rune, Has 3 Sockets, Maximum Quality 40%.

## Defensive Layers

:wiki-link{url="https://www.poe2wiki.net/wiki/Nightfall"} (Fortress Tower Shield, Lv70) là shield armour nặng: 285% increased Armour, 19% increased Block chance, cộng hai dòng chuyển damage element "19% of Fire damage taken as Cold" và "13% of Lightning damage taken as Cold" — gom mọi thứ về cold để một mình cold res gánh. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Unleashed"} (Revered Vestments, Lv65) là body armour hybrid spell-tank: 183% increased Armour and Energy Shield, 100% increased Spell Damage, +1% to all Maximum Elemental Resistances, nhưng "17% of Damage taken from Hits bypasses Energy Shield if Energy Shield is below half" — thưởng cho việc giữ ES trên 50%, gắn với cơ chế Runic Binding/Shapeshift mới. Belt utility ngoài Mageblood còn :wiki-link{url="https://www.poe2wiki.net/wiki/Cat_O'_Nine_Tails"} (Utility Belt, Lv55): Has (1—3) Charm Slot + "20% of Flask Recovery applied Instantly".

## Unarmed & Niche

:wiki-link{url="https://www.poe2wiki.net/wiki/Facebreaker"} (Stocky Mitts) giữ identity unarmed: "1% more Unarmed Damage per 5 Strength", +3 to Melee Strike Range while Unarmed, "Has 8 to 12 Physical Damage, +3 to +4 per Boss's Face Broken" (damage tăng theo số boss đã giết), và cho phép đánh như đang cầm One Handed Mace khi cả hai tay trống. :wiki-link{url="https://www.poe2wiki.net/wiki/Voices"} (Sapphire jewel, corrupted, Lv20) port nguyên cơ chế POE1: "Allocates (2-4) Sinister Jewel sockets" — mở thêm socket nhỏ trên passive tree, build-around tree-cluster.

## Datamined — Stats Pending

19 item dưới đây đã có page trên poe2db với tên + base nhưng chưa populate mod nào tại 25/05 — chưa đánh giá được, sẽ log stat thật khi league live: :wiki-link{url="https://www.poe2wiki.net/wiki/Loreweave"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Geofri's_Sanctuary"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Eyes_of_the_Runefather"}, Decree of Acuity, Decree of Flight, Decree of Loyalty, Duality, Farrow's Gift, Forgotten Warden, Gatecrasher, Mastered Domain, Opportunity, Sadist's Mercy, Spiteful Floret, Split Personality, Surge of the Tide, The Sunken Vessel, Veilpiercer, Vestige of Darkness.

## What Doesn't Work

Đừng giả định behavior POE1 cho item cùng tên — đây là lỗi tốn nhất khi đọc đợt port. Mageblood 0.5 không bật flask, chỉ cho charm slot; Berek ring 0.5 (tới lúc này) chỉ là all-res ring, chưa có leech ailment. Và đừng tin con số gán cho 19 item vỏ: page không mod nghĩa là chưa có gì để tin, mọi "stat" trôi nổi ngoài kia về chúng đều là đoán cho tới khi poe2db populate hoặc league live.

## Common Mistakes

Sai — săn item theo tên quen từ POE1 (mua sớm Mageblood/Loreweave vì nghĩ nó OP như cũ). Đúng — đọc mod 0.5 cụ thể từ poe2db trước, mod khác hẳn. Lý do — GGG re-design toàn bộ port, tên giống không đảm bảo cơ chế giống, mua nhầm có thể mất vài div đầu league khi giá còn cao.

Sai — viết build-around quanh một trong 19 item vỏ datamine vì thấy tên hay. Đúng — đợi stat populate rồi mới commit. Lý do — chưa có mod nào để build, mọi kế hoạch dựa trên page rỗng là xây trên cát.

## Version History

### Patch 0.5.0
- Thêm 42 unique item mới (xác nhận qua version history `0.5.0 — New Unique item` trên poe2db). Tại 25/05, 23 item đã lộ stat đầy đủ, 19 item còn là vỏ datamine. The Hollow Mask được rework gắn vào Remnant (reservation efficiency + allies share remnant). Mageblood re-design thành charm-slot belt, không còn là flask-powerhouse POE1.

## Relationships

- **related_mechanics** [Spirit Walker — Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Sylvan's Effigy và The Raven's Flock cắm thẳng vào trục companion
- **used_by** [Dinomancer Lich Elephant](/builds/witch/dinomancer-lich-elephant) — The Raven's Flock buff minion damage + spirit reservation cho hướng minion Lich
- **related_mechanics** [Energy Shield Recovery Rework](/mechanics/energy-shield-recovery-rework) — The Unleashed thưởng ES trên 50%, đọc kèm rework ES recovery của 0.5
- **references** [Twisted Empyrean](/mechanics/items/twisted-empyrean) — note atomic cho mace mana-stack cold slam
- **references** [Liminal Coil](/mechanics/items/liminal-coil) — note atomic cho wand curse-stacking
- **references** [Sylvan's Effigy](/mechanics/items/sylvans-effigy) — note atomic cho sceptre companion-multiplier
