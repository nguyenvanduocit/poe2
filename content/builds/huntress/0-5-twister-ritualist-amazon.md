---
template: templates/build-template.md
document_type: build
title: Spear Twister Ritualist và Amazon
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
class: Huntress
ascendancy: Ritualist / Amazon
league: '0.5'
patch: 0.5.0
budget_tier: medium-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Twister
  damage_type: elemental
  playstyle: projectile
  content_focus: all-content
tags:
  - huntress
  - ritualist
  - amazon
  - twister
  - whirling-slash
  - spear
  - projectile
  - crit
  - freeze
  - 0-5
  - poe2
---

# Spear Twister Ritualist và Amazon

Build self-cast Twister chạy trên hai nhánh ascendancy đông nhất của Huntress meta: Ritualist và Amazon. Engine giống nhau — :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} tích Whirlwind quanh mình, rồi :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} bắn xuyên qua để consume, mỗi stage cho twister thêm 80% more damage. Đây là nhánh đẩy DPS thật cao nhất của mẫu poe.ninja: Twister lọt top-10 DPS toàn ladder ba lần (~427k–480k), con cao nhất là một Ritualist 480k. Ai thích projectile + crit + freeze-lock, APM trung bình (cast Whirling Slash → swap → bắn Twister → cast Mark) sẽ hợp. Đây KHÔNG phải build companion — damage đến từ chính mình, không từ minion.

## Build Overview

Damage đến từ chain consume. Whirling Slash trong tay set 1 tích Whirlwind tối đa 3 stage quanh mình; Twister trong tay set 2 bay xuyên qua chúng, mỗi Whirlwind stage bị consume sinh thêm một twister phụ và cộng 80% more damage. Một cú swap đầy đủ là Twister ăn nhiều lần base damage trước mọi multiplier khác, nên build không cần stack thêm projectile để cày boss — chỉ cần stack scaling element, crit và uptime. Whirling Slash bản thân nó cũng là một lớp damage: collapse cho 150% more damage mỗi stage phụ khi rời vùng.

Build scale theo ba element cùng lúc. :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} convert toàn bộ physical thành cold; sceptre cho extra fire; flat lightning trên spear và ring nuôi dòng thứ ba. Ba dòng element vừa nuôi :wiki-link{url="https://www.poe2wiki.net/wiki/Trinity"} (more elemental damage theo Resonance), vừa apply đủ ba ailment để :wiki-link{url="https://www.poe2wiki.net/wiki/The_Taming"} cộng increased damage per ground type. Twister có sẵn mod "Elemental twisters gain 50% of damage as the corresponding Type", nên mỗi nguồn element được nhân đôi giá trị khi nó đi qua ground effect tương ứng.

Defense là evasion + energy shield hybrid với freeze-lock làm lớp kép: enemy bị freeze thì vừa ngừng đánh vừa ăn nhiều damage hơn nếu build chạy Heavy Frost qua :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"}. Mobility là Whirling Slash tự đẩy người về trước theo attack speed, kèm dodge roll né và reposition giữa pack.

Cùng một engine này có ba cách ráp khác nhau theo ascendancy: Ritualist (nhánh proven top DPS, thiên về gear-efficiency và sustain), Amazon (nhánh crit/accuracy/elemental, ceiling cao hơn nhưng cần đầu tư accuracy), và bản :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} self-cast đã viết riêng. Hai nhánh trong doc này khác nhau ở ascendancy và cách bù frenzy/charge, còn skill core thì chung.

## Skill Gems & Links

Tay set 1 cầm spear attack-speed cao (target ≥2.36 APS) để tích Whirlwind nhanh; tay set 2 cầm spear damage + sceptre cho Twister và element. Ice-Tipped Arrows phải nằm set 2 cùng Twister — để sai set thì convert đôi khi không apply, gem bug âm thầm. Whirling Slash bind set 1, Twister bind set 2, swap thật trong combat (hai pool weapon-set conditional point tách biệt nên swap đáng tiền).

**Whirling Slash (set 1):** :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Attack"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rage"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} + crit/fire support. Rapid Attack đẩy APS để tích đủ 3 stage Whirlwind trong vài tích tắc; Magnified Area mở rộng vùng quét pack. Whirlwind cap 3 stage, mỗi stage cộng 150% more collapse damage và +0.3m radius.

**Twister (set 2):** :wiki-link{url="https://www.poe2wiki.net/wiki/Projectile_Acceleration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Armament"} + Prolonged Duration + Concentrated Aura + crit support. Projectile Acceleration biến projectile speed thành damage; Elemental Armament cộng flat elemental; Prolonged Duration kéo dài 3s base cho multi-hit lâu hơn. Concentrated Aura cộng 10% more thay :wiki-link{url="https://www.poe2wiki.net/wiki/Deliberation"} vì AoE loss không cảm thấy khi twister tự move erratic.

**Ice-Tipped Arrows (set 2):** Elemental Armament + Cooldown Recovery + Cold Attunement. Skill này có hai vai: convert toàn bộ phys → cold (lý do build dùng nó dù không cầm bow), và spawn Ice Fragments cho clear. Cooldown Recovery + frenzy charge bypass khiến nó gần như always-on khi cày map.

**Marks:** :wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} với Prolonged Duration cho more Freeze buildup và buff cold khi target frozen; :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Mark"} là cách bù frenzy của nhánh không tự sinh charge (Ritualist) — Sniper's Mark grant 1 frenzy khi activate, Eternal Mark khiến mark không bị consume lần đầu nên mỗi cast hiệu lực hai lần.

**Heralds + buff:** :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} (shatter pack + flat cold) và :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Thunder"} (flat lightning + shock-on-hit nuôi Shocked Ground cho Twister gain extra lightning). Trinity giữ ở 100 spirit như persistent buff, chỉ cắm +1 level support để nâng max more multiplier. :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} (ưu tiên quality cho reservation efficiency) + :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} cho lớp evasion/ES.

Exclusion check: Trinity scale elemental damage, không scale physical — vì vậy Ice-Tipped Arrows convert là bắt buộc, phần phys không convert nằm ngoài Trinity. The Taming "count as boosted by ground" chỉ apply cho Wind Skill (Twister có tag Wind, có; Whirling Slash là Strike+Wind nhưng collapse không phải projectile twister nên không hưởng phần ground-gain element). Heavy Frost chỉ ignore resistance khi resistance đó dương — boss res âm tự nhiên hiếm nên thực tế luôn trigger.

## Ascendancy

Engine giống nhau, hai ascendancy cho Twister hai thứ khác hẳn. Ritualist thiên gear-efficiency + sustain, Amazon thiên crit + accuracy + elemental.

### Ritualist

:wiki-link{url="https://www.poe2wiki.net/wiki/Ritualist"} ăn các notable theo nhu cầu: **Unfurled Finger** (+1 Ring Slot), **Mystic Attunement** (25% increased bonuses từ Rings và Amulets), **Corrupted Lifeforce** (grant Blood Boil, 15% more Damage lên enemy dính Blood Boil), và **Wildwood Persistence** (10% increased Life Recovery rate per 5% missing Unreserved Life) cộng cụm charm (**Intricate Sigils** +1 charm slot, **Mind Phylacteries** tiêu mana để bật charm khi hết charge).

Cái làm Ritualist thành nhánh proven top DPS không phải một more-multiplier to, mà là **ring economy**. Twister sống nhờ stat trên ring: flat elemental cho ba dòng Trinity, resistance để cap, attribute để mở support tier cao. Unfurled Finger cho ring thứ ba, Mystic Attunement nhân thêm 25% giá trị cả ba ring + amulet. Một build phụ thuộc vào ring-stat như Twister được lợi kép từ hai node này. Corrupted Lifeforce thêm 15% more (điều kiện: enemy phải dính Blood Boil, apply qua skill granted), còn cụm charm + Wildwood Persistence là lý do Ritualist sống dai dù pool nhỏ.

Lưu ý mặt trái: tree Ritualist có sẵn các minor node âm — −20% all Elemental Resistance, 25% reduced Spirit, 30% reduced Mana. Phải tính khoản res âm này vào res floor khi craft gear, và spirit hụt khiến phải ưu tiên reservation efficiency (Ghost Dance quality, Rabbit Idol trên sceptre) để đủ chỗ cho Trinity + 2 herald + Ghost Dance + Wind Dancer.

### Amazon

:wiki-link{url="https://www.poe2wiki.net/wiki/Amazon"} ăn cụm crit + accuracy + elemental: **Predatory Instinct** (Reveal Weaknesses lên rare/unique, 50% more damage lên enemy có Open Weakness), **Critical Strike** (chance to Hit vượt 100% được, phần dư đổi 25% thành crit chance), **Penetrate** (added Physical damage = 25% Accuracy Rating trên weapon), **Elemental Surge** + **Surging Avatar** (consume charge → trigger Elemental Surge sinh Cold/Fire/Lightning Surge), và **Stalking Panther** (double evasion từ helm/glove/boot, halve từ body) cho defense.

Amazon là nhánh ceiling cao. Predatory Instinct 50% more lên boss (rare/unique luôn có Open Weakness sau khi Reveal) là multiplier lớn nhất trong cả hai ascendancy, và **In for the Kill** thêm 40% increased Skill Speed khi enemy Open Weakness trong Presence — Skill Speed là axis riêng trong 0.5, đẩy cả tốc độ cast Twister lẫn Whirling Slash. Critical Strike + Penetrate biến accuracy thành hai thứ: crit chance dư và flat phys. Đổi lại Amazon cần đầu tư accuracy thật (Penetrate vô nghĩa nếu accuracy thấp), và Elemental Surge cần nguồn charge ổn định để consume — đây là điểm Amazon đòi hỏi gear/setup nhiều hơn Ritualist.

Thứ tự ascend cho cả hai nhánh: lab 1 ăn notable enabler (Ritualist → Corrupted Lifeforce hoặc Unfurled Finger; Amazon → Predatory Instinct), lab 2-3 mở rộng cụm chính, lab 4 hoàn thiện. Không có node companion nào ở cả hai nhánh.

## Ritualist hay Amazon, chọn nhánh nào

Đây là câu hỏi quyết định trước khi roll character, vì hai nhánh đòi gear khác nhau.

**Ritualist** là lựa chọn an toàn, gear-efficient, và là nhánh có DPS thật cao nhất đo được (480k, con #1 của mẫu Twister). Mạnh vì ring thứ ba + 25% jewelry effect giải đúng bài toán của Twister: cap res, balance flat ele ba dòng cho Trinity. Sustain charm + life recovery cho cảm giác đứng vững dù pool nhỏ. Yếu ở chỗ phải gánh −20% all ele res trên tree và spirit hụt, và more-multiplier chủ động chỉ có 15% Corrupted Lifeforce (điều kiện). Population 13.0% (16,185 char) nhưng đang giảm mạnh nhất ladder, −5.1pt so với tuần đầu — người chơi rời sang Amazon và Pathfinder.

**Amazon** là lựa chọn ceiling cao, scaling crit/accuracy. Predatory Instinct 50% more lên boss là more-multiplier lớn nhất giữa hai nhánh, In for the Kill cho skill speed, Elemental Surge nuôi thêm element cho Trinity + The Taming. Đổi lại Amazon cần accuracy stacking (cho Critical Strike + Penetrate hoạt động) và nguồn charge để Elemental Surge consume — gear floor cao hơn. Population 5.4% (6,668 char) và đang lên đều, +2.6pt — nhánh meta đang nóng dần.

Tóm gọn lựa chọn: muốn dễ ráp, sustain tốt, top DPS proven ngay → Ritualist. Muốn ceiling cao hơn cho boss và sẵn sàng đầu tư accuracy + charge → Amazon. Cả hai dùng chung skill setup, swap nhánh không phải làm lại build từ đầu, chỉ đổi ascendancy point và một phần gear (accuracy cho Amazon, ring thứ ba cho Ritualist).

## Passive Tree & Mastery

Tree là crit-heavy + projectile + freeze + weapon-set conditional, chung cho cả hai nhánh. Cụm chính theo nhánh huntress trung tâm: javelin (inc damage + crit chance), các cluster crit (struck through, moment of truth, true strike, deadly force), killer instinct (inc attack damage khi at Full Life — gần như luôn full nhờ ES pool), và 10fold attacks (attack speed trên weapon set 1).

Cụm freeze/cold: Hail (freeze buildup), Crushing Wave (inc damage on crit hit), Deep Freeze qua From Nothing (freeze buildup + frozen enemy −8 cold res). Harness the Elements là multiplier lớn — inc damage per element type trên enemy, ba element là 60% inc.

Cụm defense: Subdivision Mask (eva per ES trên helmet — vital cho hybrid), Mindful Awareness (eva + ES), Trained Deflection (push deflection cap). Amazon thêm hướng accuracy cluster để nuôi Critical Strike + Penetrate; Ritualist bỏ phần đó, dồn điểm vào jewel socket cho ring/jewelry scaling.

Weapon-set conditional point là phần đáng tiền nhất: set 1 dồn attack speed (nuôi Whirling Slash APS), set 2 dồn crit/damage (nuôi Twister). Hai pool tách biệt nên swap thật trong combat, không phải swap giả.

Heavy Frost vào tree qua From Nothing Diamond jewel allocate quanh keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} ở giai đoạn late endgame — passive trong radius keystone allocate được không cần connect, mở Heavy Frost + Thin Ice (50% increased damage against frozen). Anoint amulet endgame ưu tiên cụm 60% inc damage per elemental type khi đủ ba element.

## Stat Priorities & Defenses

EHP layer order theo 0.5: evasion (entry chance) → block khi có → max res cap → ES/Life pool → Runic Ward khi có rune → recovery (Ghost Dance + life on hit). Hai nhánh khác nhau ở pool: Ritualist giữ life + ES hybrid với sustain charm; Amazon nghiêng evasion mạnh nhờ Stalking Panther (double eva từ helm/glove/boot).

Số tham chiếu từ mẫu poe.ninja 2026-06-10 (snapshot đo thật, không phải PoB derive — PoB2 chưa model đủ Twister consume + Trinity nên flag pob_coverage PARTIAL):

- **Ritualist top DPS (MinionSpinAgain, Lv98):** DPS 480k · Life 2,729 · ES 722 · EHP ~11k. Glass-cannon rõ — pool thấp đổi lấy DPS cao nhất.
- **Pathfinder Twister cùng mẫu (so sánh):** 469k DPS với EHP ~31k, và 427k với EHP ~35k — pool cao gấp ba lần con Ritualist ở DPS gần bằng. (Xem ghi chú cross-class ở Verdict.)
- **Mẫu Twister:** 28 char có DPS trong top sample; Twister xuất hiện 3 lần trong top-10 DPS toàn ladder (~427k–480k). Skill Twister 13.1% ladder.

Math chain cho Twister boss DPS:

```
base_hit (set 2 spear)
  × engine_consume (cộng 80% more / Whirlwind stage, max 3 stage)
  × Trinity (more elemental theo total Resonance, cần balance ba dòng)
  × The_Taming (increased damage per ground type, ba ailment apply)
  × crit_multiplier (Ritualist: crit cluster; Amazon: + excess-accuracy crit + Penetrate flat)
  × ascendancy_more (Ritualist 1.15× Corrupted Lifeforce / Amazon 1.5× Predatory Instinct vs boss)
  × Harness_Elements (1.6×, 3 element type)
  / hit_throttle (0.66s same-target cap cho twister cùng frame)
  = boss DPS floor
```

Throttle 0.66s là gate cứng trên boss DPS: twister bắn cùng frame chỉ hit cùng target một lần mỗi 0.66s. Spam thêm projectile (mark, herald) chỉ scale clear vì pack có nhiều enemy, không scale single-target. Vì vậy build endgame stack crit damage + more multiplier thay vì stack additional projectile. Đây cũng là lý do Amazon Predatory Instinct (50% more) đẩy boss DPS tốt hơn — nó là more-multiplier vào đúng chỗ throttle không chặn.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 4 |
| survivability | 3 |
| mobility | 4 |
| league_start | 4 |
| budget_scaling | 4 |

Survivability để 3 vì mẫu Ritualist top-DPS chạy EHP ~11k rất mỏng; build có thể hi-sinh ít DPS để lên ~25-30k EHP như mẫu Pathfinder, lúc đó survivability lên 4.

## Gear Progression

Priority order: cap res 75/75/75 (tính cả −20% all ele res của tree Ritualist) → attribute floor cho support tier cao → flat elemental ba dòng cho Trinity balance → spear damage + crit → +Level projectile (amulet, helm anoint) → ES/eva hybrid → reservation efficiency.

### Gear theo slot

- **Weapon set 1 (spear):** attack speed cao nhất có thể, suffix attack speed + life on hit. Mục tiêu ≥2.36 APS để tích đủ 3 stage Whirlwind nhanh.
- **Weapon set 2 (spear):** flat elemental + crit. Spear có flat lightning lớn rất quý cho Trinity balance vì lightning là dòng phải craft chủ động (cold tự dư từ Ice-Tipped Arrows, fire từ sceptre).
- **Off-hand set 2 (sceptre):** nguồn extra fire cho Trinity. Cần double socket để cắm Rabbit Idol (+15% spirit) — cách bù spirit hụt của Ritualist và đủ chỗ cho Trinity + 2 herald.
- **Helmet:** full ES + res. Anoint Subdivision Mask hoặc cụm crit trước khi có CI.
- **Body:** ES/eva hybrid + life + res. Ritualist cần life roll vì giữ pool; Amazon nhớ body chỉ cho nửa evasion (Stalking Panther) nên ưu tiên ES/life roll trên body, dồn evasion sang helm/glove/boot.
- **Gloves:** flat lightning T1 (Trinity balance) + res + attribute. Amazon thêm accuracy roll ở đây cho Penetrate.
- **Boots:** eva/ES hybrid + movement speed 30% + res.
- **Belt:** res cap + life. Endgame :wiki-link{url="https://www.poe2wiki.net/wiki/Darkness_Enthroned"} cho rune frenzy/speed, biến belt thành lớp damage. Ritualist tận dụng charm slot belt mạnh hơn nhờ cụm charm ascendancy.
- **Amulet:** ES/eva + projectile level + res. Anoint cụm 60% inc damage per elemental type.
- **Rings:** flat elemental + res + attribute. **Ritualist chạy ba ring** (Unfurled Finger) và mỗi ring +25% bonus (Mystic Attunement) — đây là lợi thế gear lớn nhất của nhánh. Amazon chạy hai ring, ưu tiên accuracy + flat ele. The Taming là ring build-defining cho cả hai nhánh khi mua được.
- **Jewels:** From Nothing (Diamond, allocate quanh CI cho Heavy Frost late endgame) + Heart of the Well (Diamond desecrated, custom mod gain damage as element thiếu) + crit/projectile jewel theo socket.

### Leveling → Early Atlas → Mid endgame → Late endgame

- **Leveling:** Whirling Slash + Twister ngay sau khi engrave (cả hai Tier 1). Spear armour/life base, stack inc damage + cold + crit. Engine consume đã là vài lớp multiplier nên campaign mượt gần như standalone.
- **Early Atlas (T1-T6):** chuyển sang eva/ES hybrid (nếu tree allocate ES node thì base phải có ES roll). Spear set 1 attack speed, set 2 rare lightning + crit rẻ. Anoint cụm crit cheap.
- **Mid endgame (T7-T13):** The Taming khi mua được (giảm giá rõ sau tuần đầu), Ice-Tipped Arrows convert, marks setup, Darkness Enthroned. Ritualist mở ring thứ ba + Mystic Attunement; Amazon dồn accuracy cho Penetrate.
- **Late endgame (T14-T16, pinnacle):** From Nothing CI + Heavy Frost, Sniper's Mark + Eternal Mark cho frenzy (Ritualist), spear T1 ele + crit hoặc unique transition spear. Amazon hoàn thiện charge source cho Elemental Surge.

## Companion, Pounce và Cackling Companions

Build này không dùng companion, và đây là chỗ cần nói rõ vì meta report dễ gộp nhầm. Trong list skill phổ biến của poe.ninja, "Pounce" và "Cackling Companions" đứng gần Twister/Whirling Slash, nhưng chúng không thuộc cùng vũ khí:

- **Cackling Companions** là companion skill được grant duy nhất bởi :wiki-link{url="https://www.poe2wiki.net/wiki/Hysseg's_Claw"} — một Familial Talisman (vũ khí Druid), summon 6-9 Hyena. Nó cần một weapon slot cầm Talisman, mà Twister cần spear ở cả hai weapon set. Muốn ghép, phải hi-sinh dual-spear để lấy một set Talisman swap-summon — đánh đổi không đáng cho một build self-cast projectile. Cackling Companions thuộc về build companion (Druid hoặc cross-class talisman), không phải Twister spear.
- **Pounce** là werewolf meta skill của Druid (Shapeshift into Werewolf, requires Talisman, summon wolf minion). Nó không dùng spear và không liên quan tới Twister.
- **Whirling Assault** (hay bị nhầm với Whirling Slash) là quarterstaff strike skill của Monk, không phải spear.

Ascendancy của build cũng xác nhận điều này: cả Ritualist lẫn Amazon đều không có node companion nào. Nhánh Huntress duy nhất xoay quanh companion là Spirit Walker, đã viết riêng ở doc khác. Nếu muốn build companion thật (hyena, beast pack), đó là hướng Spirit Walker hoặc Druid, không phải Twister Ritualist/Amazon.

## Failure Modes

Build làm tốt clear T15-T16 nhờ projectile multi-hit + freeze shatter, leveling campaign mượt nhờ engine consume tự nhân, và freeze-lock làm cả damage lẫn defense cùng lúc. Những chỗ nó gãy:

**Pool quá mỏng nếu copy thẳng con top-DPS.** Mẫu Ritualist 480k chạy EHP ~11k — một slam pinnacle là chết. Build cần chủ động hi-sinh một phần DPS để lên ~25-30k EHP (như mẫu Pathfinder cùng DPS nhưng EHP gấp ba). Đừng nhìn số 480k rồi copy gear glass-cannon mà bỏ qua pool.

**Throttle 0.66s khoá boss DPS.** Twister cùng frame chỉ hit cùng target một lần mỗi 0.66s. Thêm projectile chỉ scale clear, không scale boss. Boss damage phải đến từ crit damage + more multiplier (Amazon Predatory Instinct là cách tốt nhất), không từ stack thêm twister.

**Trinity balance fragile.** Stack lệch một element (ví dụ quá nhiều fire từ sceptre khi chưa có flat lightning T1) làm Resonance một dòng đầy còn hai dòng decay, more multiplier teo. Phải cân ba dòng element gần bằng nhau; Heart of the Well custom mod là cách tinh chỉnh sau khi gear đã chốt.

**Amazon thiếu accuracy hoặc charge là chết engine.** Critical Strike + Penetrate vô dụng nếu accuracy thấp, và Elemental Surge không trigger nếu không có nguồn charge để consume. Amazon dưới gear floor (accuracy + charge generation) chạy yếu hơn hẳn Ritualist cùng budget — không phải nhánh league-start tay không.

**Ritualist gánh res âm trên tree.** −20% all ele res + spirit/mana hụt nghĩa là craft gear phải overcap res nhiều hơn bình thường và ưu tiên reservation efficiency. Quên tính khoản này dẫn tới uncap res hoặc thiếu spirit cho herald + Trinity.

**Map mod hostile.** Less recovery + no leech cắt sustain charm (Ritualist) và leech (Amazon); reduced charge gain cắt frenzy mark (Ritualist) và Elemental Surge (Amazon). Reflect ít ảnh hưởng vì self-cast nhưng less damage taken không có gì cứu pool mỏng.

**Patch sensitivity.** Build phụ thuộc Twister consume engine + Trinity + The Taming ground interaction. Nếu GGG nerf max more của Trinity, đổi semantics "count as boosted by ground" của The Taming, hoặc đụng throttle/consume của Twister thì mất 30-60% DPS. Log số thật trong client mỗi hotfix.

## Verdict

Đây là nhánh đẩy DPS thật cao nhất của Huntress spear meta — Twister lọt top-10 DPS toàn ladder ba lần, con cao nhất 480k là Ritualist. Engine consume Whirlwind cho leveling mượt từ Act 1 và clear endgame mạnh; freeze-lock vừa damage vừa defense. Chọn Ritualist cho dễ ráp + sustain + top DPS proven, chọn Amazon cho ceiling boss cao hơn nếu sẵn sàng đầu tư accuracy + charge.

Một điểm thẳng thắn từ data: trong mẫu Twister top-DPS, Pathfinder (Ranger) thật ra xuất hiện nhiều hơn cả Ritualist — hai con 469k và 427k cao nhất sau con Ritualist 480k đều là Pathfinder, và chúng chạy EHP gấp ba (~31-35k) ở DPS gần bằng. Twister là spear skill nhưng class nào đạt attribute requirement đều cầm spear được, nên Pathfinder spear-Twister là một hướng cross-class đáng theo dõi (flask uptime + projectile của Pathfinder bù pool tốt hơn). Doc này scope theo hai nhánh Huntress mà issue yêu cầu, nhưng nếu mục tiêu là DPS-per-EHP tối ưu thì Pathfinder là ứng viên cần khảo sát riêng.

Số 480k là DPS đo từ snapshot poe.ninja 2026-06-10, không phải PoB verified (PoB2 chưa model đủ Twister consume + Trinity). Treat như ceiling tham chiếu; log số thật trong client khi ráp full kit.

## Changelog

### 2026-06-10

- Initial draft. Verify verbatim từ wiki cho Twister/Whirling Slash (spear skill, consume engine, throttle 0.66s), Ritualist + Amazon ascendancy node, và Cackling Companions/Pounce/Whirling Assault (xác nhận là skill Druid talisman / Druid werewolf / Monk quarterstaff — KHÔNG thuộc build spear Twister). Số DPS/population từ snapshot `data/poe-ninja/runesofaldur/snapshots/2026-06-10.json` (mẫu 28 char Twister, top 480k Ritualist). Engine elemental (Trinity, The Taming, Ice-Tipped Arrows, Heavy Frost, From Nothing) dùng chung với bản Spirit Walker — chi tiết cơ chế ở mechanic page tương ứng.

## Relationships

- **alternative_to** [Twister Spirit Walker](/builds/huntress/0-5-spirit-walker-twister) — cùng engine Twister consume nhưng ascendancy khác: bản kia self-cast Spirit Walker, bản này hai nhánh meta Ritualist/Amazon.
- **alternative_to** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — nếu muốn build companion thật thay vì self-cast projectile, đây là hướng companion-pack Huntress.
- **related_mechanics** [Twister — Spear Wind Projectile Skill](/guides/twister) — engine consume Whirlwind, throttle 0.66s, element gain từ ground.
- **related_mechanics** [The Taming — Tripled Wind Skill Ground Effect](/guides/the-taming) — ring cộng increased damage per ailment ground cho Wind Skill.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — league 0.5 với Trinity rework và ground effect interaction cho Wind Skill.
