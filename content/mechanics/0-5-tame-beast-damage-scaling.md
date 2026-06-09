---
document_type: mechanic
title: Tame Beast Damage Scaling
mechanic_type: Skill
league: '0.5'
patch: 0.5.1
status: draft
author: nguyenvanduocit
created: '2026-06-03'
updated: '2026-06-09'
tags: [poe2, tame-beast, companion, spirit-walker, minion, damage-scaling, crit, parry, azmeri-spirit, 0-5]
template: templates/mechanic-template.md
---

# Tame Beast Damage Scaling

Trên một build :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} companion carry, damage của nhân vật chính là damage của một con beast — con Unique mình bắt bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} rồi bind làm companion qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}. Nó tự seek mục tiêu và tự đánh, nên min-max không phải xoay skill tay mà là xếp cho đúng các multiplier cùng nhân lên con carry. Có bốn trục nhân thật, mỗi trục đánh vào một bucket riêng nên chúng compound chứ không giẫm chân nhau: gem level, crit từ monster modifier, buff đội Pain Offering, và debuff Parry.

## How It Works

Con carry không có "skill của mình" để scale — nó chạy attack pool của con monster gốc, và mọi thứ mình làm là cộng multiplier từ ngoài vào pool đó. Bốn nguồn multiplier nằm ở bốn bucket khác nhau, nên cộng dồn được hết.

Trục nền nhất là **gem level**, vì nó là more-multiplier nằm sẵn trên skill, không tốn gear ngoài việc đẩy level. Tame Beast cho summoned beast "40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20", minimum gem level 7. Đây là multiplier duy nhất chạm mọi con beast bất kể base, nên +level minion là upgrade ưu tiên một — nguồn từ amulet, sceptre, helmet (suffix "+# to Level of all Minion Skills"). Jewel không cấp gem level; đóng góp minion của jewel nằm ở dòng increased damage và crit-damage-bonus suffix.

Trục đặc trưng của hướng Unique tame là **crit từ monster modifier**. Con beast giữ tối đa 4 regular monster modifier lúc bắt, và mod đáng nhất là **Extra Crits** — một :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} cho "300% increased Critical Hit Chance", tức nhân base crit ×4. Vì nó nhân base, kết quả phụ thuộc base crit của từng con, và đó là chỗ chia hai tier. Con base crit cao (~25%) chỉ cần Extra Crits là cap: 25 × 4 = 100%, không cần gì thêm. Con base crit thấp (~5%) thì Extra Crits một mình chỉ ra 5 × 4 = 20%, chưa đủ — phải lớp thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} lên enemy: +0.5 base crit mỗi stack, tối đa 20 stack = +10 base, cộng vào **base** trước khi nhân. Chuỗi đầy đủ cho con tier thấp: (5 + 10) × (1 + 3.00) ≈ 60% crit chance.

Hai con ape carry crit là monkey (:wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"}) và :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"} (bản map-boss là :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"}). Mình nghiêng Silverfist là con tier ~25%, nhưng chưa đọc tooltip companion đã summon tận tay nên chưa chốt cứng. Lý do không tin poe2db cho việc này: base wild-monster trên poe2db là 5%/+30% cho cả hai con — đó là engine default chung của hầu hết monster, không phân biệt được con nào. Dấu hiệu rõ nhất là crit-damage: con high-crit đọc tới ~250% crit-damage, mà 250% đó không thể sinh từ Extra Crits (mod chỉ cho crit *chance*, không chạm crit damage), nên tooltip companion sau khi tame chắc chắn khác base wild-monster. Muốn chốt thì tame trắng từng con (chưa roll mod) rồi đọc crit + crit-damage của companion trong client.

Build hiện tại đã online sẵn nửa chuỗi crit: ThaoCamVienSaiGon chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Malice"}, aura này liên tục inflict Critical Weakness trong presence nên +10 base crit có sẵn, không tốn gem slot. Con carry mình đang field thực tế là zoo Diretusk Boar nên 60% ở trên là số derive từ ×4 và +10 áp lên base tooltip, chưa phải crit đo tận tay trên một con ape.

Hai trục còn lại đến từ hai gói skill riêng. **Pain Offering** là buff đội: cấp companion (companion là minion) "20-29% increased Attack and Cast Speed" cộng tới "58% increased damage", và vì là Offering nên hiệu lực scale theo increased Buff effect. **Parry** đặt debuff khiến enemy chịu "50% more Attack Damage" trong 2 giây base — more-multiplier áp thẳng lên đòn attack của con carry. Cả hai dựng amplifier ở phần dưới.

## Key Interactions

**Extra Crits × Critical Weakness.** Extra Crits nhân base crit ×4; Critical Weakness cộng +10 thẳng vào base trước khi nhân. Vì Critical Weakness áp ở tầng base, nó được ×4 của Extra Crits nhân luôn — đó là lý do thứ tự (base + 10) × 4 cho 60% trên con 5-base chứ không phải cộng rời. Con tier ~25% không cần Critical Weakness để cap; con tier ~5% thì cần. *Exclusion check: crit chance cap ở 100% — breakpoint trần. Khi con carry đã cap, mọi điểm crit-chance thêm là số chết; lúc đó pivot sang crit-damage-bonus (jewel suffix "of Gripping" — Minions have 15-25% increased Critical Damage Bonus, cap 25) hoặc support Super Critical.*

**Monster modifier count → reservation cost.** Mỗi modifier giữ lại làm con carry mạnh hơn nhưng cũng đắt spirit hơn — reservation của Summon Beast scale theo cả độ mạnh con monster lẫn số modifier nó mang. Con 4-mod (gồm Extra Crits) ăn spirit nhiều hơn hẳn con 1-mod, nên gói crit không miễn phí: nó ép ngân sách spirit của cả zoo. *Exclusion check: không có node nào miễn reservation theo modifier-count — cost cứng, phải tính vào spirit budget trước khi quyết bắt con nhiều mod.*

**Pain Offering × Danse Macabre × Sacrificial Offering.** :wiki-link{url="https://www.poe2wiki.net/wiki/Pain_Offering"} grant attack/cast speed + tới 58% increased damage cho minion, companion là minion nên buff chạm con carry. :wiki-link{url="https://www.poe2wiki.net/wiki/Danse_Macabre"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Sacrificial_Offering"} mỗi cái cấp "30% increased Buff effect" — chính dòng khuếch đại grant của Pain Offering. Hai gem này cũng cấp "30% more Damage" riêng, nhưng dòng more đó scale cú offering spike, không phải buff companion. *Exclusion check: Danse Macabre chỉ apply support effect nếu có một skeletal minion dư để target/consume — không có skeleton thừa thì amplifier này im. Sacrificial Offering tốn 15% Life mỗi lần dùng, đáng lưu trên một Huntress evasion pool máu mỏng.*

**Parry debuff.** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} cho enemy chịu 50% more Attack Damage trong 2s base; scale duration bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration"} II (35% more skill effect duration → 2.0s lên 2.7s) và scale magnitude bằng các node Parried Debuff Magnitude trên cây. Đây là more-multiplier tách bucket nên nhân chồng lên crit và gem-level. *Exclusion check: debuff là "more ATTACK Damage" — chỉ khuếch đại đòn attack, không chạm spell. Cả hai con ape đều đánh attack nên ăn được; một con carry spell-based sẽ không hưởng, trừ khi đổi sang buckler Nocturne biến debuff thành more Spell Damage.*

**Gem level.** Mỗi level trên gem Tame Beast là more-multiplier thật (40% @ gem 9 → 84% @ gem 20) cộng nâng base stat con minion. Nó không tranh bucket với crit, buff hay debuff nên luôn cộng dồn. *Exclusion check: jewel không cấp gem level — chỉ amulet/sceptre/helmet có suffix "+# to Level of all Minion Skills".*

## Optimization

Ưu tiên trục theo budget, từ rẻ-mà-chắc tới đắt-end-game:

**Một — gem level minion.** Upgrade đầu trên mọi slot offensive: +1/+2/+3 to Level of all Minion Skills ở amulet, sceptre, helmet. Mỗi level là more-multiplier phổ quát đánh mọi con beast, và 40→84% từ chính Tame Beast nghĩa là đẩy gem cao trả lời rất sòng phẳng. Trục này không cần chọn con carry nào — luôn đúng.

**Hai — crit (nếu chạy con carry crit).** Con tier ~25% chỉ cần một con boss spawn với Extra Crits là cap, sau đó dồn crit-damage-bonus (jewel "of Gripping" tới 25, Wolf Idol +20% crit damage bonus, Super Critical vì chance đã cap). Con tier ~5% cần cả Extra Crits lẫn Critical Weakness online (Malice đứng sẵn) để chạm ~60% trước khi crit-damage-bonus có nghĩa. Đọc tooltip tame trắng để biết con ape mình chọn nằm tier nào trước khi đổ tiền vào crit-damage. Cách fish Extra Crits lên con Unique — tablet stacking, reroll, đúng bộ 4 mod — là quy trình crafting riêng: xem [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

**Ba — Pain Offering package.** Dùng spirit dư fielding vài skeleton rẻ để bật Pain Offering + :wiki-link{url="https://www.poe2wiki.net/wiki/Skeletal_Cleric"} (Cleric heal cả minion lẫn companion), thêm Danse Macabre + Sacrificial Offering để khuếch đại grant theo Buff effect. Đánh đổi attribute: cả bốn gem này đều là Int gem, mà build đang Int 83 / req 82 — sát trần. Gear phải gánh thêm +Int để giữ cả package lẫn gem minion nền không tụt dưới 82 (gãy gem). Multiplier có thật, nhưng tốn attribute.

**Bốn — Parry weapon-set 2 (end-state).** Đặt Parry ở Weapon Set 2, cộng node Parried Debuff Magnitude bằng Weapon Set Skill Points. Riêng node magnitude trên cây cộng lại đã chạm ~100% (nhiều node 10%/15%/25%/6%) — tự nó gấp đôi base 50% lên ~100% more Attack Damage taken theo cơ chế Magnitude chuẩn (100% increased magnitude = 2× base), chưa cần item ngoài. Buckler Dunkelhalt cộng thêm trên nền đó, full đầu tư đẩy tổng tới ~150%. Đây là mục tiêu end-state đòi gần như allocate trọn nhánh parry-magnitude qua weapon-set points. Việc snapshot/execute Parry trong trận (buckler set 2, skill Reputation tự-apply) thuộc loop chơi của build: xem [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry).

Trần cần nhớ khi tối ưu crit: 100% crit chance là breakpoint cứng. Trước khi quote uplift từ "thêm crit chance", kiểm con carry đã cap chưa — nếu rồi thì điểm kế tiếp là 0% uplift, phải chuyển sang crit-damage-bonus.

## Interactions with Other Content

Hướng Unique tame chỉ mở qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}, node ascendancy của Spirit Walker. Node này định nghĩa luôn giới hạn của hướng: Tame Beast bắt được Unique Beast, chỉ một Unique Tamed Beast tại một thời điểm, Unique Tamed Beast +30% Movement Speed, và Unique Tamed Beast bị possess bởi một **Azmeri Spirit ngẫu nhiên, đổi mỗi 20 giây**.

Cái possess đổi mỗi 20s này là layer riêng, KHÔNG phải 4 rare modifier rotate. 4 rare mod giữ lúc bắt là cố định; cái luân phiên là một Azmeri Spirit buff do The Natural Order áp lên con Unique tame. Hai layer coexist độc lập — 4 mod khoá cứng cộng một Azmeri Spirit thay đổi. Pool Azmeri Spirit có cỡ chục bonus, phần lớn là damage-type, nhưng danh sách đầy đủ và buff nào đáng cho con carry thì cần log in-client để liệt kê. Cơ chế retention nền (giữ random 4 nếu boss >4 mod, không giữ mod Essence/wisp) và cách fishing đúng bộ mod thuộc về doc crafting: [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

## What Doesn't Work

**Jewel không phải trục gem-level.** Jewel không roll "+Level of all Minion Skills" — đóng góp minion của nó nằm ở "Minions deal increased Damage" và crit-damage-bonus suffix ("of Gripping"). Tìm minion-level trên jewel là phí lượt; muốn gem level thì soi amulet/sceptre/helmet.

**Parry không khuếch đại damage spell.** Parried Debuff là "more Attack Damage taken". Con carry damage chủ yếu spell-type thì debuff này gần như không chạm — chỉ con đánh attack mới hưởng. Cả hai con ape đều attack-based nên ăn được, nhưng đừng giả định Parry là multiplier phổ quát cho mọi con carry.

**"30% more Damage" của Danse Macabre / Sacrificial Offering không phải buff companion.** Dòng more đó scale cú offering spike, không cộng vào con carry. Cái cộng vào con carry là dòng "increased Buff effect" khuếch đại grant của Pain Offering.

**Stack crit chance quá 100% là số chết.** Sau khi con carry cap crit, mọi crit-chance thêm vô dụng. Pivot sang crit-damage-bonus mới có uplift.

## Common Mistakes

Sai — gán "Extra Crits một mình là crit cap" cho mọi con carry. Đúng — chỉ con tier base ~25% cap trên một mod; con tier base ~5% cần Extra Crits cộng Critical Weakness. Lý do — base crit khác nhau giữa hai con ape, mà Extra Crits nhân ×4 lên base đó, nên cùng một mod ra kết quả rất khác (100% vs 20%).

Sai — coi Pain Offering package là free damage. Đúng — bốn gem Int (Pain Offering, Skeletal Cleric, Danse Macabre, Sacrificial Offering) đẩy attribute requirement lên, mà build sát trần Int 82. Lý do — thêm gói mà không bù +Int trên gear sẽ làm gem minion nền tụt dưới req và gãy.

Sai — bắt con carry nhiều mod nhất có thể rồi mới tính spirit. Đúng — tính reservation trước khi đi săn, vì modifier-count đẩy reservation lên. Lý do — con 4-mod cộng companion phụ cộng self-defense rất dễ vượt spirit budget league-start, buộc rút skeleton (mất luôn Pain Offering package).

## Summary

- Damage của build = damage con carry; bốn trục multiplier compound trên nó: gem level, crit (monster modifier), Pain Offering buff, Parry debuff.
- Gem level (40% @ gem 9 → 84% @ gem 20) là trục phổ quát, ưu tiên một, nguồn amulet/sceptre/helmet — không phải jewel.
- Crit chia hai tier: con base ~25% cap trên Extra Crits (×4); con base ~5% cần thêm Critical Weakness (+10 base, có sẵn qua Malice) → (5+10)×4 ≈ 60%. Con ape nào nằm tier nào thì đọc tooltip companion đã summon mới chốt.
- Pain Offering grant atk/cast speed + tới 58% increased damage cho minion, khuếch đại bởi Danse Macabre + Sacrificial Offering; cost là 4 Int gem ép Int budget + 15% Life mỗi Sacrificial Offering.
- Parry debuff 50% more Attack Damage taken (2s → 2.7s với Prolonged Duration II); node weapon-set một mình đã ~100% magnitude (gấp đôi base), Dunkelhalt đẩy tới ~150%; chỉ cho đòn attack.
- The Natural Order possess con Unique tame bằng Azmeri Spirit ngẫu nhiên đổi mỗi 20s — layer riêng, độc lập với 4 rare mod (4 mod không rotate).
- Loyalty → Romira's Requital là lớp phòng thủ (divert hit → recoup Life), không phải trục damage.

## Version History

### Patch 0.5.1

Tame Beast scaling giữ nguyên 40% @ gem 9 → 84% @ gem 20 (min gem 7); patch không đụng companion (Trusted Kinship, Extra Crits, Critical Weakness, Parry, Pain Offering đều y nguyên). The Natural Order possess con Unique tame bằng Azmeri Spirit đổi mỗi 20s — layer riêng, 4 rare mod giữ lúc bắt không rotate.

Còn cần log in-client để chốt số:

- Tame trắng monkey và Silverfist, đọc tooltip companion đã summon — chốt con nào tier ~25% và con nào ~5%, và crit-damage thật (~250% hay khác). Con carry hiện tại là Diretusk Boar zoo nên cần mở thêm Tame Beast slot hoặc disenchant companion mới tame được hai con ape này.
- Enumerate pool Azmeri Spirit mà The Natural Order luân phiên, xem buff nào đáng cho con carry.
- Đo crit chance thực trên con carry sau khi Extra Crits + Critical Weakness online.
- Xác nhận Parried Debuff Magnitude: node cây một mình chạm ~100% và Dunkelhalt đẩy tới ~150% (đọc tooltip từng node + stat Dunkelhalt).

## Relationships

- **part_of** [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry) — build dùng chuỗi multiplier này để max con carry chính; loop chơi (snapshot Parry, Reputation) và lớp phòng thủ Loyalty/Romira's Requital sống ở đó.
- **related_mechanics** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers) — cách fishing Extra Crits + bộ 4 monster modifier qua tablet stacking / reroll; trục crit ở đây ăn output của quy trình đó.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame nền tảng (bắt beast, retention 4 mod, reservation) mà các trục damage này xây lên trên.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 mở Spirit Walker + The Natural Order + buff Tame Beast là nền cho toàn bộ hướng companion carry.

## Resources

- [How to Scale Spirit Walker Tame Beast Damage](https://www.youtube.com/watch?v=hxqPJkbTp5Q) — các trục multiplier cho Unique tame carry.
- [Spirit Walker Beast Master Build Guide — CaptainLance9](https://www.youtube.com/watch?v=p6uR2uC1Kk4) — carry vs zoo, Parry magnitude, crit ape.
