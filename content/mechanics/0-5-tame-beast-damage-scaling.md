---
document_type: mechanic
title: Tame Beast Damage Scaling
mechanic_type: Skill
league: '0.5'
patch: 0.5.0
status: draft
author: nguyenvanduocit
created: '2026-06-03'
updated: '2026-06-03'
tags: [poe2, tame-beast, companion, spirit-walker, minion, damage-scaling, crit, parry, 0-5]
template: templates/mechanic-template.md
---

# Tame Beast Damage Scaling

Trên một build :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} companion carry, damage của cả nhân vật chính là damage của một con beast — con Unique mình bắt bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} rồi bind làm companion qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}. Nó tự seek mục tiêu và tự đánh, nên min-max ở đây không phải xoay skill tay mà là xếp cho đúng các multiplier cùng nhân lên con carry đó. Bài này gom toàn bộ trục nhân damage của con carry vào một chỗ — crit từ monster modifier, Pain Offering package, debuff Parry, và gem level — để biết cái nào nhân cái nào và đáng dồn currency vào đâu trước.

## How It Works

Con carry không có "skill của mình" để mình scale — nó chạy attack pool riêng của con monster gốc, và mọi thứ mình làm chỉ là cộng multiplier từ bên ngoài vào pool đó. Có bốn nguồn multiplier thật, mỗi nguồn đánh vào một bucket khác nhau nên chúng compound chứ không giẫm chân nhau: crit (từ monster modifier giữ lại), buff đội qua Pain Offering, debuff lên enemy qua Parry, và gem level của chính skill Tame Beast.

Trục nền tảng nhất là **gem level**, vì nó là more-multiplier nằm sẵn trên skill, không tốn gear ngoài việc đẩy level. Patch 0.5.0 ghi rõ: Summoned Beast deal "40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20", và hạ minimum gem từ 9 xuống 7. Đây là multiplier duy nhất chạm mọi con beast bất kể base, nên +level minion là upgrade ưu tiên một — nguồn từ amulet, sceptre, helmet (suffix "+# to Level of all Minion Skills"). Jewel thì **không** cấp gem level — đóng góp minion của jewel nằm ở dòng increased damage và crit-bonus suffix, đừng nhầm jewel vào trục gem-level.

Trục đặc trưng nhất của hướng Unique tame là **crit từ monster modifier retention**. Tame Beast giữ tối đa 4 regular monster modifier khi bắt một con, và một trong số đó — **Extra Crits** — là :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} cho "300% increased Critical Hit Chance", tức base crit × 4. Điều quan trọng là số base crit nó nhân lên thay đổi theo từng con beast, và đó là chỗ hai con carry meta tách đường. Con **monkey** (base :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"}) đọc trong client ~25% base crit, nên Extra Crits một mình đẩy nó lên 25 × 4 = 100% — crit-capped ngay, không cần thêm gì. Con **Mighty Silverfist** / map-boss version :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"} thì đọc ~5% base — Extra Crits một mình chỉ ra 5 × 4 = 20% (1 trong 5), chưa đủ. Để kéo Silverfist tới ngưỡng đáng kể phải lớp thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} lên enemy: nó cộng +0.5 base crit mỗi stack, tối đa 20 stack = +10 base crit, và cộng vào **base** crit trước mọi increase/multiplier. Chuỗi đầy đủ cho Silverfist: (5 base + 10 từ Critical Weakness) × (1 + 3.00 Extra Crits) ≈ 60% crit chance. Cả hai con số base (25% và 5%) đọc tại tooltip Summon Beast trong client nên là mốc tham chiếu, không phải hằng số min-max; còn ×4 của Extra Crits và +10 của Critical Weakness là số cứng.

Đây là chỗ build hiện tại đã online sẵn một mảnh: ThaoCamVienSaiGon chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Malice"} trong skill setup thật — aura này liên tục inflict Critical Weakness lên enemy trong presence, nên lớp +10 base crit có sẵn không tốn gem slot mới. Nghĩa là nếu đổi con carry sang đường crit (monkey hoặc Silverfist + Extra Crits), nửa chuỗi crit đã được dựng. Con carry mình đang field thực tế là zoo Diretusk Boar nên chưa có con số crit đo tận tay để quote — chuỗi 60% ở trên là derive từ ×4 và +10 đã verify áp lên base tooltip, không phải DPS đã test trên character.

Hai trục còn lại đến từ hai gói skill riêng. **Pain Offering** là buff đội: nó cấp companion (companion là một loại minion) "20-29% increased Attack and Cast Speed" cộng "20-58% increased damage" — và vì nó là một Offering, hiệu lực của nó scale theo increased Buff effect. **Parry** đặt một debuff lên enemy khiến enemy chịu "50% more Attack Damage" trong 2 giây base — một more-multiplier áp thẳng lên damage attack của con carry. Hai gói này dựng ở phần dưới cùng các amplifier của chúng.

## Key Interactions

**Extra Crits × Critical Weakness — chuỗi crit cho con base crit thấp.** Extra Crits nhân base crit ×4 ở bucket "increased"; Critical Weakness cộng +10 thẳng vào base trước khi nhân. Vì Critical Weakness áp ở tầng base, nó được nhân luôn bởi ×4 của Extra Crits — đó là lý do thứ tự (base + 10) × 4 cho 60% trên con 5-base chứ không phải cộng rời. Con monkey ~25% base không cần Critical Weakness để cap; con Silverfist ~5% base thì cần. *Exclusion check: crit chance cap ở 100% — đây là một breakpoint trần, không phải trục vô hạn. Khi con carry đã chạm cap, mọi điểm crit-chance thêm là số chết; lúc đó pivot sang crit-damage-bonus (jewel suffix "of Gripping" — Minions have 15-25% increased Critical Damage Bonus, cap 25) hoặc support Super Critical, không stack tiếp crit chance.*

**Monster modifier count → reservation cost.** Mỗi monster modifier giữ lại làm con carry mạnh hơn nhưng cũng đắt spirit hơn — reservation của Summon Beast scale theo cả độ mạnh con monster lẫn số modifier nó mang. Một con carry 4-mod (gồm Extra Crits) ăn spirit nhiều hơn hẳn con 1-mod, nên gói crit không miễn phí: nó ép ngân sách spirit của cả zoo. *Exclusion check: không có node nào miễn reservation theo modifier-count — cost cứng, phải tính vào spirit budget trước khi quyết bắt con nhiều mod.*

**Pain Offering × Danse Macabre × Sacrificial Offering — buff đội nhân theo Buff effect.** :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} grant attack/cast speed + tới 58% increased damage cho minion, và companion là minion nên buff chạm con carry. :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Offering"} mỗi cái cấp "30% increased Buff effect" — chính là dòng khuếch đại grant của Pain Offering lên cao hơn. Hai gem này cũng cấp "30% more Damage" riêng, nhưng dòng more đó scale damage của cú offering spike, không phải buff companion — đừng tính nhầm nó vào multiplier con carry. *Exclusion check: Danse Macabre chỉ apply support effect nếu có một skeletal minion dư để target/consume — không có skeleton thừa thì amplifier này im. Sacrificial Offering tốn 15% Life mỗi lần dùng, đáng lưu trên một Huntress evasion pool máu mỏng.*

**Parry debuff — more Attack Damage taken, chỉ cho đòn attack.** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} cho enemy chịu 50% more Attack Damage trong 2s base; scale duration bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} II (35% more skill effect duration → 2.0s lên 2.7s) và scale magnitude bằng các node Parried Debuff Magnitude trên cây. Đây là một more-multiplier tách bucket nên nhân chồng lên crit và gem-level. *Exclusion check: debuff là "more ATTACK Damage" — chỉ khuếch đại đòn attack của con carry, không chạm spell. Cả monkey lẫn Silverfist đều đánh attack nên ăn được; một con carry spell-based sẽ không hưởng (trừ khi đổi sang buckler Nocturne biến debuff thành more Spell Damage).*

**Gem level — more-multiplier phổ quát.** Mỗi level trên gem Tame Beast là more-multiplier thật (40% @ gem 9 → 84% @ gem 20) cộng nâng base stat con minion. Nó không tranh bucket với crit, buff hay debuff nên luôn cộng dồn. *Exclusion check: jewel không cấp gem level — chỉ amulet/sceptre/helmet có suffix "+# to Level of all Minion Skills"; đừng tìm minion-level trên jewel.*

## Optimization

Ưu tiên trục theo budget, từ rẻ-mà-chắc tới đắt-end-game:

**Một — gem level minion.** Upgrade đầu tiên trên mọi slot offensive: +1/+2/+3 to Level of all Minion Skills ở amulet, sceptre, helmet. Mỗi level là more-multiplier phổ quát đánh mọi con beast, và 40→84% từ chính skill Tame Beast nghĩa là đẩy gem cao trả lời rất sòng phẳng. Đây là trục không cần chọn con carry nào — luôn đúng.

**Hai — crit (nếu chạy con carry crit).** Nếu con carry là monkey, chỉ cần một con boss spawn với Extra Crits là cap crit, sau đó dồn vào crit-damage-bonus (jewel "of Gripping" tới 25, Wolf Idol +20% crit damage bonus, Super Critical trên monkey vì nó đã cap chance). Nếu con carry là Silverfist, cần cả Extra Crits **lẫn** Critical Weakness online (Malice là nguồn aura đứng sẵn) để chạm ~60% trước khi crit-damage-bonus có ý nghĩa. Cách kiếm Extra Crits lên con Unique — tablet stacking, reroll, fishing đúng bộ 4 mod — là một quy trình crafting riêng, không nhồi vào đây: xem [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

**Ba — Pain Offering package.** Dùng phần spirit dư fielding vài skeleton rẻ để bật Pain Offering + :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Cleric"} (Cleric heal cả minion lẫn companion). Thêm Danse Macabre + Sacrificial Offering để khuếch đại grant của Pain Offering theo Buff effect. Đánh đổi attribute: cả bốn gem này đều là Int gem, mà build đang ở Int 83 / req 82 — sát trần. Thêm gói này đẩy demand Int lên, nên gear phải gánh thêm +Int để giữ cả package lẫn các gem minion nền không tụt dưới 82 (gãy gem). Đây là multiplier đáng, nhưng nó là multiplier **tốn attribute**, không free.

**Bốn — Parry weapon-set 2 (end-state đầu tư nặng).** Đặt Parry ở Weapon Set 2, cộng node Parried Debuff Magnitude bằng Weapon Set Skill Points. Các node magnitude trên cây cộng lại khoảng ~107% (nhiều node 10%/15%/25%/6%), cộng buckler Dunkelhalt +50%, đẩy tổng magnitude vượt 100% — tức gấp đôi base 50% lên ~100% more Attack Damage taken theo cơ chế Magnitude chuẩn (100% increased magnitude = 2× giá trị base). Đây là mục tiêu end-state đòi gần như allocate trọn nhánh parry-magnitude qua weapon-set points, không phải con số in sẵn trên tooltip. Việc snapshot/execute Parry trong trận (buckler set 2, skill Reputation tự-apply) thuộc loop chơi của build — không lặp lại ở đây, xem [Tame Beast Companion Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-zoo).

Trần cần nhớ khi tối ưu crit: 100% crit chance là breakpoint cứng. Trước khi quote uplift từ "thêm crit chance", kiểm con carry đã cap chưa — nếu rồi thì điểm crit-chance kế tiếp là 0% uplift, phải chuyển sang crit-damage-bonus mới có lợi.

## Interactions with Other Content

Hướng Unique tame chỉ mở qua The Natural Order, và node này cũng định nghĩa luôn giới hạn league-overlay của nó: Tame Beast capture được Unique Beast, **chỉ một** Unique Tamed Beast tại một thời điểm, và Unique Tamed Beast +30% Movement Speed. Đó là phần đã verified và article-safe.

Có một mảnh league-mechanic chưa chốt được, để dạng test-plan: con Unique tame (qua The Natural Order) có thể rotate một rare monster modifier mỗi ~20 giây thay vì chỉ giữ cố định 4 mod lúc bắt — kèm một pool modifier riêng mình chưa enumerate được. Đây là datamine pre-launch, chưa có dòng nào trong patch note / poedb / wiki xác nhận, nên **khi vào league cần log**: (1) con Unique tame có thật sự rotate modifier mỗi ~20s không, (2) pool modifier thực gồm những gì, (3) nó áp riêng cho Unique tame hay cho mọi tame. Cho tới khi log được, chỉ tính 4-mod retention cố định làm nền — đừng dựng damage projection trên cơ chế rotation chưa confirm. Cơ chế retention nền (giữ random 4 nếu boss >4 mod, không giữ mod Essence/wisp) và cách fishing đúng bộ mod thuộc về doc crafting: [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

## What Doesn't Work

**Jewel không phải trục gem-level.** Jewel không roll "+Level of all Minion Skills" — đóng góp minion của jewel nằm ở dòng "Minions deal increased Damage" và crit-damage-bonus suffix ("of Gripping"). Tìm minion-level trên jewel là phí lượt; muốn gem level thì soi amulet/sceptre/helmet.

**Parry không khuếch đại damage spell.** Parried Debuff là "more Attack Damage taken". Nếu con carry damage chủ yếu là spell-type thì debuff này gần như không chạm — chỉ con beast đánh attack mới hưởng. Cả monkey lẫn Silverfist đều attack-based nên ăn được, nhưng đừng giả định Parry là multiplier phổ quát cho mọi con carry.

**"30% more Damage" của Danse Macabre / Sacrificial Offering không phải buff companion.** Dòng more đó scale damage của cú offering spike, không cộng vào con carry. Cái cộng vào con carry là dòng "increased Buff effect" khuếch đại grant của Pain Offering — đừng đếm dòng more vào multiplier companion.

**Stack crit chance quá 100% là số chết.** Sau khi con carry cap crit, mọi crit-chance thêm vô dụng. Pivot sang crit-damage-bonus mới có uplift thật.

## Common Mistakes

Sai — gán "Extra Crits một mình là crit cap" cho mọi con carry. Đúng — chỉ con monkey (~25% base) cap trên một mod; Silverfist (~5% base) cần Extra Crits **cộng** Critical Weakness. Lý do — base crit khác nhau giữa hai con, mà Extra Crits là số nhân ×4 lên base đó, nên cùng một mod ra kết quả rất khác (100% vs 20%).

Sai — coi Pain Offering package là free damage. Đúng — bốn gem Int (Pain Offering, Skeletal Cleric, Danse Macabre, Sacrificial Offering) đẩy attribute requirement lên, mà build sát trần Int 82. Lý do — thêm gói mà không bù +Int trên gear sẽ làm gem minion nền tụt dưới req và gãy; multiplier có thật nhưng kèm cost attribute.

Sai — bắt con carry nhiều mod nhất có thể rồi mới tính spirit. Đúng — tính reservation trước khi đi săn, vì modifier-count đẩy reservation lên. Lý do — một con carry 4-mod cộng companion phụ cộng self-defense rất dễ vượt spirit budget league-start, buộc rút skeleton (mất luôn Pain Offering package).

## Summary

- Damage của build = damage con carry; bốn trục multiplier compound trên nó: gem level, crit (monster modifier), Pain Offering buff, Parry debuff.
- Gem level (40% @ gem 9 → 84% @ gem 20) là trục phổ quát, upgrade ưu tiên một, nguồn amulet/sceptre/helmet — **không** jewel.
- Crit beast-dependent: monkey ~25% base cap trên Extra Crits (×4); Silverfist ~5% base cần thêm Critical Weakness (+10 base, có sẵn qua Malice) → (5+10)×4 ≈ 60%. Cả hai base là tooltip read.
- Pain Offering grant atk/cast speed + tới 58% increased damage cho minion, khuếch đại bởi Danse Macabre + Sacrificial Offering (increased Buff effect); cost là 4 Int gem ép Int budget + 15% Life mỗi Sacrificial Offering.
- Parry debuff 50% more Attack Damage taken (2s base → 2.7s với Prolonged Duration II), magnitude end-state ~100% qua node weapon-set + Dunkelhalt; chỉ cho đòn attack.
- Loyalty → Romira's Requital là lớp phòng thủ (divert hit → recoup Life), không phải trục damage — nó giữ con carry sống để đánh hung, không nhân damage.

## Version History

### Patch 0.5.0

- **2026-06-03** — Doc tạo mới. Synthesis bốn trục damage cho con Unique tame carry: gem level (Tame Beast 40% @ gem 9 → 84% @ gem 20), crit từ monster modifier (Extra Crits 300% increased = ×4; Critical Weakness +0.5 base/stack max +10, nguồn Malice; chuỗi (base + 10) × 4 với base beast-dependent — monkey ~25% cap trên một mod, Silverfist ~5% cần thêm Critical Weakness ≈ 60%; cả hai base tooltip-only), Pain Offering package (grant atk/cast speed + tới 58% inc dmg, khuếch đại bởi Danse Macabre + Sacrificial Offering increased Buff effect, cost 4 Int gem + 15% Life), Parry debuff (50% more Attack Damage taken, attack-only, magnitude end-state ~100%). Jewel "of Gripping" suffix crit-damage-bonus cap 25. Loyalty/Romira's Requital tách ra là lớp phòng thủ, không phải damage axis.
- **Cần log khi vào league:** (1) con Unique tame (qua The Natural Order) có rotate rare monster modifier mỗi ~20s không, và pool modifier thực gồm gì; (2) số base-crit thật của monkey / Silverfist đọc trong client (25% và 5% là tooltip read, chưa có nguồn authoritative); (3) crit chance đo thực tế trên con carry sau khi Extra Crits + Critical Weakness online; (4) Parried Debuff Magnitude tổng đạt được qua weapon-set có chạm ~100% more không.

## Relationships

- **part_of** [Tame Beast Companion Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-zoo) — build dùng chuỗi multiplier này để max con carry chính; chi tiết loop chơi (snapshot Parry, Reputation) và lớp phòng thủ Loyalty/Romira's Requital sống ở đó.
- **related_mechanics** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers) — cách fishing Extra Crits + bộ 4 monster modifier qua tablet stacking / reroll; trục crit ở đây ăn output của quy trình đó.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame nền tảng (bắt beast, retention 4 mod, reservation) mà các trục damage này xây lên trên.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 mở Spirit Walker + The Natural Order + buff Tame Beast là nền cho toàn bộ hướng companion carry.

## Resources

- [How to Scale Spirit Walker Tame Beast Damage](https://www.youtube.com/watch?v=hxqPJkbTp5Q) — datamine pre-launch các trục multiplier cho Unique tame carry (2026-05-28).
