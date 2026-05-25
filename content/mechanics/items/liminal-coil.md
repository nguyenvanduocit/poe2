---
template: templates/item-template.md
document_type: item
title: Liminal Coil
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
game: poe2
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Wand
level_requirement: 1
item_tags:
- wand
- unique
- curse
- chaos
- spell
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- curse-stacking
tags:
- item
- unique
- '0.5'
- return-of-the-ancients
- curse
- chaos-conversion
---

# Liminal Coil

Liminal Coil là wand unique trên base :wiki-link{url="https://www.poe2wiki.net/wiki/Twisted_Wand"} Twisted Wand, grant skill **Coiling Bolts** và đảo ngược toàn bộ cách chơi curse: nó vứt bỏ tác dụng gốc của curse để biến số lượng curse trên target thành multiplier sát thương. Hai dòng định nghĩa item là "Magnitudes of Curses you inflict are zero" cộng "Curses you inflict ignore Curse limit" — curse không còn debuff gì, nhưng được chồng vô số lên một target. Đổi lại, "Spell Hits Gain 27% of Damage as Extra Chaos Damage per Curse on target" và "27% of Damage as Extra Physical Damage per Curse on target" biến mỗi curse thành +27% extra chaos *và* +27% extra phys. Đây là lõi cho một caster curse-stacking thuần, không phải stat stick.

## Item Stats

```
Liminal Coil
Twisted Wand
Requires: Level 1
--------
Grants Skill: Level 17 Coiling Bolts
71% increased Spell Damage
11% increased Cast Speed
Magnitudes of Curses you inflict are zero
Curses you inflict ignore Curse limit
Spell Hits Gain 27% of Damage as Extra Chaos Damage per Curse on target
Spell Hits Gain 27% of Damage as Extra Physical Damage per Curse on target
```

Confidence: **HIGH** — mod verbatim từ data poe2db 0.5.0. "Requires: Level 1" trên item có thể là placeholder; Coiling Bolts yêu cầu Level 72, 126 Intelligence để dùng (MEDIUM — số từ page Coiling Bolts).

## Why This Item Is Powerful

Cơ chế tự cân bằng nằm ở cặp "zero magnitude" và "ignore curse limit". Curse bình thường bị giới hạn 1 curse mỗi target (trừ khi có node tăng limit), và giá trị curse đến từ magnitude của nó. Liminal Coil bỏ cả hai: magnitude về 0 nên curse không làm gì *trực tiếp*, nhưng limit bị gỡ nên player chồng được bao nhiêu curse tùy nguồn cung. Mỗi curse trên target sau đó cộng "27% of Damage as Extra Chaos" và "27% as Extra Physical" vào spell hit — với 4 curse, đó là +108% extra chaos và +108% extra phys, cộng dồn trên damage gốc của spell.

Granted skill Coiling Bolts ăn khớp chính xác với cơ chế này. Nó "Simultaneously fires a Physical Projectile and a Chaos Projectile at the target. These projectiles Chain through any number of Cursed targets" — đúng hai loại damage mà item cộng extra (phys + chaos), và "chain through any number of Cursed targets" nghĩa là trong một phòng đầy enemy bị curse, projectile nhảy không giới hạn. Coiling Bolts deal 188-283 Physical + 165-306 Chaos base, Cost 0 Mana, nên spam thoải mái. Vòng lặp: curse lan ra pack → Coiling Bolts chain khắp pack → mỗi hit được nhân theo số curse trên từng target.

Điểm cần test khi league live: nguồn apply nhiều curse cùng lúc (curse-on-hit support, :wiki-link{url="https://www.poe2wiki.net/wiki/Curse"} multiple curse skills, hoặc AoE curse) đủ nhanh để duy trì stack cao không, và "ignore curse limit" có cho phép chồng *cùng một* curse nhiều lần hay chỉ nhiều curse khác loại (LOW — wording chưa rõ, cần log in-game).

## Build Enabler Mechanics

Item này dựng một caster lấy curse count làm thước damage. Player commit vào: nhiều curse skill / curse-on-hit để đẩy số curse trên target lên cao, scale spell damage gốc (71% increased Spell Damage trên chính wand là điểm khởi đầu), và chaos/phys không cần res penetration vì extra damage đến từ multiplier curse chứ không từ ailment. Vì magnitude curse bằng 0, không cần curse effect — bỏ qua hoàn toàn nhánh đầu tư "increased curse effect" mà build curse truyền thống phải gánh, dồn điểm vào spell damage và cast speed.

Build không hợp Liminal Coil: bất kỳ build nào *dựa vào tác dụng debuff của curse* (vd dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} Despair để giảm chaos res, hay :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} Temporal Chains để slow) — vì zero magnitude tắt hết những hiệu ứng đó. Item chỉ dùng curse như một bộ đếm.

## Acquisition

Drop source chưa được GGG reveal tại 25/05 (league launch ~29/05). Theo pattern unique build-enabling của patch trước, khả năng từ Pinnacle boss hoặc reward league mechanic. Giá tuần đầu của một caster build-around wand thường biến động mạnh tùy meta — sẽ update khi market live.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mod verbatim đã có trên poe2db; build viability chưa test live.

## Related Items & Alternatives

- :wiki-link{url="https://www.poe2wiki.net/wiki/Despair"} Despair — curse chaos res tiêu chuẩn; lưu ý Liminal Coil *vô hiệu* magnitude của nó, nên hai thứ không chồng theo cách thông thường.
- [The Auspex](/mechanics/items/the-auspex) — unique build-around cùng patch, đối chiếu thiết kế "đánh đổi một mặt để mở một archetype" của 0.5.

## Relationships

- **part_of** [Đợt Unique Mới và Meta Shift](/mechanics/0-5-new-unique-items) — trục curse-stacking đã lộ stat của đợt 0.5
- **synergizes_with** [Twisted Empyrean](/mechanics/items/twisted-empyrean) — cùng nhóm unique build-enabling 0.5
