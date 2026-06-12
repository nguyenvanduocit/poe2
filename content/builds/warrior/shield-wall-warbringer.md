---
document_type: build
title: Shield Wall Warbringer
class: Warrior
ascendancy: Warbringer
league: '0.5'
patch: 0.5.0
status: published
author: duocnv
created: '2025-12-14'
updated: '2026-06-09'
budget_tier: league-starter
pob_coverage: NA
build_tags:
  primary_skill: Shield Wall
  damage_type: Physical
  playstyle: Melee
  content_focus: Campaign / Early Endgame
tags:
- poe2
- warrior
- warbringer
- shield-wall
- boneshatter
- armour
- block
- warcry
- campaign
template: templates/build-template.md
---

# Shield Wall Warbringer

Build dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Wall"} như vũ khí — đặt tường đất xuống, kích nổ bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Fortifying_Cry"} hay :wiki-link{url="https://www.poe2wiki.net/wiki/Seismic_Cry"} hoặc đơn giản là :wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Charge"} thẳng qua. Damage thật đến từ armour trên shield: mỗi explosion cộng thêm **5–7 flat physical per 15 Armour on Shield** (0.5.0). Trục scale này không phụ thuộc weapon hay stat nào khác. :wiki-link{url="https://www.poe2wiki.net/wiki/Warbringer"} Warcaller's Bellow xoá cooldown warcry hoàn toàn, nên vòng đặt tường → kích nổ → đặt tiếp chạy liên tục mà không cần quản lý resource nào ngoài leech mana. Build mạnh nhất ở campaign và early endgame, nơi armour trên shield tăng đều theo act.

## Cơ chế shield-as-weapon

Mỗi lần :wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Wall"} bị phá bởi skill của mình (slam, warcry, Shield Charge), explosion nhận **100% more Damage** và cộng thêm flat phys theo armour. Công thức cụ thể: `flat_added = (Armour on Shield / 15) × (5–7)`.

Ví dụ minh hoạ ở transition lv28 với :wiki-link{url="https://www.poe2wiki.net/wiki/Rampart_Tower_Shield"} craft ra khoảng 450 armour: 450/15 × 6 trung bình = 180 flat phys added per explosion. Cộng base attack damage của Shield Wall (100% ở lv1 → 235% ở lv20) và multiplier 100% more khi destroyed by skills, số này đã hit solid từ lúc đổi skill. Mỗi lần nâng shield base hay roll thêm armour là DPS lên thẳng.

0.5.0 cắt multiplier từ 6–8 xuống 5–7. Nhưng đồng thời GGG buff armour từ item khoảng 33% ở lv65 (tapering xuống 15% ở lv80+) — tức shield cùng quality ở lv65 nay cho nhiều armour hơn cũ. Net effect ở lv65: shield đạt 2000 armour trong 0.5.0 thay vì 1500 ở 0.4.0, tức 2000/15 × 6 ≈ 800 flat phys so với 1500/15 × 7 = 700 flat phys cũ — build thực tế **mạnh hơn nhẹ** ở endgame gear dù nhìn vào số per-armour thấy nerf. Điều này có nghĩa là nâng armour trên shield vẫn là trục đúng, không thay đổi.

:wiki-link{url="https://www.poe2wiki.net/wiki/Fortifying_Cry"} Shield Wave cũng dùng cùng scaling 5–7 per 15 armour — mỗi khi Shield Wave trigger (hit enemy sau khi Fortifying Cry active), nó đóng góp thêm một lần explosion damage từ armour. Với Warcaller's Bellow không cooldown, Fortifying Cry luôn sẵn và Shield Wave chạy liên tục.

## Hành trình từ Act 1 đến lv28

Phase này chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Boneshatter"} mace, chưa cần shield.

:wiki-link{url="https://www.poe2wiki.net/wiki/Boneshatter"} là Tier 1, attack speed 60% base, attack damage 100–312%. Cơ chế: cần enemy Primed for Stun trước, Boneshatter Heavy Stun và trigger Shockwave 250–780% damage trong 2m radius. :wiki-link{url="https://www.poe2wiki.net/wiki/Rolling_Slam"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Seismic_Cry"} làm stun primer. :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Cry"} thêm vào sớm nhất có thể để pop corpse và clear pack.

Giữ Boneshatter không overlevel quá nhiều — skill chạy tốt khi stun buildup đủ để prime enemy, không phải overkill trước khi stun xảy ra.

Boneshatter quality trong 0.5.0 là 0–20% increased Attack Speed (trước 0.4.0 là 0–30%). Không ảnh hưởng nhiều ở campaign — quality thường thấp giai đoạn này — nhưng cần biết khi gem-cut gem high quality sau này.

## Transition lv28 và gem setup chính

Equip :wiki-link{url="https://www.poe2wiki.net/wiki/Rampart_Tower_Shield"} ở đúng lv28 (requirement lv28, 42 Str), swap main skill sang :wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Wall"}, thêm warcry package ngay lập tức.

**Shield Wall:**

:wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Wall"} với Brutality I/II (25–30% more physical damage) và Melee Physical Damage support. Limit 2 walls active, wall tồn tại 6 giây — đặt cả hai trước boss rồi kích nổ bằng warcry là safe damage window tốt. Boss fight: swap một support sang Concentrated Effect hoặc Close Combat II (30% more attack damage với enemy trong 1m).

**Warcry package:**

- :wiki-link{url="https://www.poe2wiki.net/wiki/Fortifying_Cry"} — Guard + Shield Wave per hit. Bypass cooldown bằng Endurance Charge khi chưa có Warcaller's Bellow.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Seismic_Cry"} — Heavy Stun enemy Primed for Stun, empower slam aftershocks. Bypass cooldown bằng Endurance Charge.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Infernal_Cry"} — Corpse explosion (25% corpse life as phys khi có Warcaller's Bellow). Giữ từ phase Boneshatter, dùng xuyên suốt.

**Movement:**

:wiki-link{url="https://www.poe2wiki.net/wiki/Shield_Charge"} là di chuyển chính và đồng thời là detonator: charge qua shield wall là kích nổ nó ngay. Rhythm tự nhiên là đặt wall → Shield Charge qua → wall nổ sau lưng.

## Warbringer ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Warbringer"} là ascendancy duy nhất biến warcry thành engine liên tục thay vì cooldown-gated utility. Thứ tự unlock ưu tiên cho campaign và early endgame:

:wiki-link{url="https://www.poe2wiki.net/wiki/Warcaller%27s_Bellow"} — Ignore Warcry Cooldowns và Warcries Explode Corpses (25% corpse life as physical damage). Hai dòng này define build: không cooldown nghĩa là Fortifying Cry, Seismic Cry, Infernal Cry spam liên tục; corpse explosion là AoE clear thứ hai không cần setup riêng. Unlock cái này trước tất cả.

:wiki-link{url="https://www.poe2wiki.net/wiki/Renly%27s_Training"} → :wiki-link{url="https://www.poe2wiki.net/wiki/Turtle_Charm"} — Renly's Training cho 35% base block từ shield (thay vì roll block trên shield), Turtle Charm đẩy maximum block lên 75% nhưng bạn nhận 20% damage từ blocked hit. Bộ đôi này cho block cap sớm mà không phải hunt block rolls trên shield — shield dành hết ưu tiên cho armour.

:wiki-link{url="https://www.poe2wiki.net/wiki/Anvil%27s_Weight"} → :wiki-link{url="https://www.poe2wiki.net/wiki/Imploding_Impacts"} — Anvil's Weight break armour = 10% hit damage, Imploding Impacts cho phép break xuống dưới 0 và Fully Broken Armour tăng all damage taken từ hits. Mở tuyến damage amplification thứ hai qua armour break. Unlock sau khi đã có Warcaller's Bellow và Renly's Training.

:wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Heritage"} (optional) — Encase in Jade skill với passive 1 Jade per second. Defensive layer cho bossing, stack tự động không cần activation.

## Ưu tiên gear

**Shield là weapon của build.** Mỗi lần lên base type hoặc craft thêm armour là DPS thay đổi tức thì. Rampart Tower Shield (lv28, base 96 armour) là điểm bắt đầu — sau đó hunt base tier cao hơn theo act và craft flat armour + percent armour bất cứ khi nào có điều kiện.

Main-hand: 1H Mace flat physical damage cao. "+levels to Melee Skills" là roll premium, không bắt buộc. Đủ Strength cho gem requirement là đủ — stat bổ sung không scale damage.

**Jewelry bắt buộc phải có Mana Leech.** Shield Wall mana cost từ 13 ở lv1 lên 92 ở lv20 — không leech là không spam. Life Leech trên jewelry thứ hai giúp sustain defence. Resistance và Life bù qua jewelry và armour pieces, không phải shield.

Khi endgame setup ổn định và muốn đẩy tiếp, Titan và Smith of Kitava có passive tree phù hợp hơn cho physical melee scaling — respec ascendancy là lựa chọn tự nhiên thay vì cố scale Shield Wall lên T16.

## Failure modes

**Không có Mana Leech** — đây là lỗi gãy phổ biến nhất. Shield Wall mana cost climb nhanh, thiếu leech là vỡ toàn bộ rhythm spam. Mana Leech trên jewelry phải có trước bất kỳ upgrade nào khác.

**Shield armour thấp** — build không có fallback damage source. Cầm shield yếu là damage yếu tuyến tính. Không upgrade shield theo act thì cảm giác như hit bằng bông.

**Physical damage reduction cao** — build all-physical không có convert hay elemental bypass. Map mod "Monsters have high Physical Damage Reduction" hay boss có phys mitigation cao cắt thẳng damage. Không có giải pháp ngoài Imploding Impacts + Fully Broken Armour để bù trừ.

**Corpse-clear encounter** — Warcaller's Bellow corpse explosion mất giá trị khi encounter consume corpse (boss arena không có wave) hoặc map mod remove corpse. Pack clear chậm lại rõ rệt, còn damage lên boss từ shield explosion thì không đổi.

**Không tự đứng ở endgame** — Shield Wall Warbringer là build campaign mạnh và early endgame mượt, không phải build T16/pinnacle. Scaling không đủ cho deep endgame nếu không respec sang Titan hay Smith of Kitava.

## Version History

### Patch 0.5.0 (Return of the Ancients)

- Shield Wall: Added Physical Damage per 15 Armour on Shield từ 6–8 xuống 5–7.
- Fortifying Cry Shield Wave: Added Physical Damage per 15 Armour on Shield từ 6–8 xuống 5–7. Nay chỉ consume 1 stack khi detonate shield wall; Shield Wave từ 1 Shield Wall không hit cùng 1 enemy 2 lần.
- Boneshatter quality: 0–20% increased Attack Speed (trước 0–30%).
- Armour từ item và modifier được buff ~33% ở lv65, tapering xuống ~15% ở lv80+. Bù phần lớn damage nerf trên với character endgame; net effect ở lv65+ là shield wall damage xấp xỉ bằng hoặc nhỉnh hơn 0.4.0 với shield cùng tier.

## Relationships

- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview 0.5.0, gồm armour system overhaul và warcry balance.
- **related_guides** [Challenge Guide](/guides/challenge-guide) — campaign completion unlock endgame cho 0.5.
