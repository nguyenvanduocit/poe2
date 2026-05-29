---
template: templates/item-template.md
document_type: item
title: The Auspex
status: draft
author: duocnv
created: '2026-05-19'
updated: '2026-05-19'
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Unknown
level_requirement: 0
item_tags:
- body-armour
- unique
- minion
- mist-raven
- madness
- slow
- low-life
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- minion-utility
- single-minion
tags:
- item
- unique
- minion
- pre-launch
- 0-5
- return-of-the-ancients
- mist-raven
- gruelling-madness
---

# The Auspex

Patch 0.5 **Return of the Ancients** (launch 2026-05-29) drop một attire unique mang tên The Auspex — slot suy đoán là body armour dựa trên chữ "attire" trong trailer[^1]. Item này pack 4 power layer độc lập: **summon một con Mist Raven duy nhất** thay vì cả đàn, **enemy bị Raven cull → player nhận :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge**, **enemy trong presence range nhận debuff "Gruelling Madness" slow + buff slow khác mạnh hơn**, và **deflect chance thành lucky khi :wiki-link{url="https://www.poe2wiki.net/wiki/Low_Life"} low life**. Build target dự kiến là hybrid utility-melee hoặc low-life caster muốn 1 con minion strong-single thay vì swarm — pattern ngược với meta 0.4 đang dominated bởi Skeletal Storm Mages + Skeletal Sniper deep-swarm.

## Item Stats

Số chính xác sẽ public sau patch notes 2026-05-21[^3].

```
The Auspex
[Base Type — TBD, suspected Body Armour]
Requires Level [TBD]

Summons a singular Mist Raven
Mist Raven has a unique command skill that causes it to dive at your
  targets, shattering reality and creating an explosion of madness
Enemies culled by the Mist Raven grant you Frenzy Charges
Enemies in your presence gain Gruelling Madness — a slowing debuff
Your other slows are more potent against enemies with Gruelling Madness
Your deflect chance is Lucky while on Low Life

"Ravens gathered and mists descended... following him...
driving him deeper and deeper into madness."
```

Confidence:
- **HIGH** — 5 line ý chính của mod trên đều có trong trailer nguyên văn[^1]
- **MEDIUM** — slot Body Armour (chữ "attire" thường ám chỉ chest)
- **LOW** — base type cụ thể, level requirement, số % cho slow magnitude, deflect lucky threshold

## Why This Item Is Powerful

Cái nhìn nông là "1 con minion + slow + lucky deflect" — nhưng đọc kỹ thì 4 layer này stack với nhau tạo ra một archetype mới chưa có trong POE2 0.4.

**Layer 1 — Single-minion density.** Build minion POE2 hiện tại chia làm 2 nhánh: swarm (5-12 con minion Storm Mage / Sniper / Reaver) hoặc companion (1-2 con Beast/Spectre). Auspex force player vào nhánh single-minion. Hệ quả: mọi investment minion damage / minion AOE / minion attack speed dồn hết vào 1 entity thay vì share-divisor 6-8. So sánh thô — nếu Skeletal Storm Mage push ~2M DPS mỗi con với 5 con total = 10M tổng, một Mist Raven với cùng investment có thể đẩy single-target DPS lên ~10M nhưng concentrated, hữu ích cho boss/conqueror encounter hơn là mapping clear (MEDIUM confidence vì stat scaling chưa lộ).

**Layer 2 — Cull → Frenzy loop.** :wiki-link{url="https://www.poe2wiki.net/wiki/Cull"} cull trong POE2 = instant kill enemy dưới 10% HP. Khi Raven cull, player nhận :wiki-link{url="https://www.poe2wiki.net/wiki/Frenzy_Charge"} Frenzy Charge — đây là solo charge generation cho class không có frenzy gem hoặc ascendancy notable. Frenzy POE2 standard = 4% more damage + 4% attack/cast speed per charge (HIGH confidence — POE1 parity). Trailer nói "giving the Raven extra utility" → khả năng Raven cũng inherit frenzy charge của player để scale damage (MEDIUM confidence — pending tooltip). Loop kín: Raven damage → enemy low HP → Raven cull → frenzy → Raven mạnh hơn → cull nhanh hơn.

**Layer 3 — Gruelling Madness stack multiplier.** Debuff "Gruelling Madness" áp lên enemy trong presence range (:wiki-link{url="https://www.poe2wiki.net/wiki/Presence"} presence POE2 ~6-8m AOE quanh player). Bản thân debuff là slow, nhưng câu key trong trailer là *"empowers your other slows to be even more potent"*[^1] — nghĩa là Madness là **multiplicative slow potency** với mọi nguồn slow khác player apply (chill, freeze threshold, :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} Temporal Chains). Slow-stacking archetype (frost Witch, kite Ranger với :wiki-link{url="https://www.poe2wiki.net/wiki/Glacial_Cascade"} Glacial Cascade) ăn full layer này.

**Layer 4 — Lucky deflect on low life.** :wiki-link{url="https://www.poe2wiki.net/wiki/Deflect"} Deflect là defensive layer 0.4 (roll % để negate hit hoàn toàn). "Lucky" = roll 2 lần, take higher (HIGH confidence). Low life POE2 standard = HP ≤ 50% (HIGH confidence). Effective deflect chance lên 1.5-2x khi player at low life — combo với reservation aura giảm max life để pin character vào threshold low-life permanent (mechanic sustain low-life POE2 chưa rõ ràng — confidence LOW).

## Build Enabler Mechanics

3 archetype nhìn ra ngay:

**A. Low-life Lich/Witch với Raven utility** (MEDIUM confidence). Lich đã có Mist mechanic + minion presence — Auspex stack thêm 1 minion strong-single + Frenzy gen. Low-life setup qua reservation aura đẩy player vào "low life" threshold permanent → lucky deflect always on. Raven cull boss-add → player frenzy → spell DPS scale. Build này không cần dedicated minion build path, Auspex là utility chest.

**B. :wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} Martial Artist Stonefist với Raven distraction** (LOW confidence — chưa biết Auspex slot có compatible với Monk armour scaling không). Monk Martial Artist ascendancy notable :wiki-link{url="https://www.poe2wiki.net/wiki/Way_of_the_Stonefist"} Way of the Stonefist transform gloves prefix/suffix into stronger versions — đẩy investment vào gloves. Auspex bù vào chest/body slot bằng utility (Raven cull + presence slow + low-life deflect). Combo natural với [Facebreaker](/mechanics/items/facebreaker) — Monk có thể empty-hands + Auspex chest + Facebreaker gloves = 3 unique synergy.

**C. Slow-control freeze Witch** (MEDIUM confidence). Gruelling Madness boost slow potency multiplicative. Witch build dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Wall"} Frost Wall + :wiki-link{url="https://www.poe2wiki.net/wiki/Glacial_Cascade"} Glacial Cascade freeze threshold sẽ thấy enemy freeze duration extend đáng kể khi đứng trong presence của player có Auspex. Map clear không cần — boss/rare lock được lâu hơn → chánh phản đòn.

Build không hợp Auspex: **swarm minion builder** (Skeletal Storm Mage spammer) vì single-minion clause khả năng disable extra minion từ source khác — pending tooltip xác nhận. **Pure ranged kiter** vì presence range yêu cầu player gần enemy.

## Acquisition

Drop source chưa được GGG reveal. Pattern 3 patch trước (0.2, 0.3, 0.4): unique mới của league thường drop từ:

1. **Pinnacle boss của league** — Auspex có thể drop từ Kalguuran Tomb pinnacle chain (Medved/Uhtred/Olroth/unrevealed)[^2] hoặc 5 league cũ pinnacle mới (Xesht, Kulemak, King in the Mists)[^2]
2. **League mechanic reward** — drop từ Ezomyte Remnant high-tier encounter, hoặc Verisium Anvil forge[^2]
3. **Random global** — pool unique chung, drop rate cực thấp

Price tuần 1 launch dự kiến **3-15 divine** dựa trên pattern build-enabling unique 0.4 (Storm Mage staff ~5d ngày 7, Companion staff ~10d). Sau 2 tuần khi market settle, nếu build viable: stabilize ~5-8d. Nếu meta không pick up: ~1-3d.

Update section này sau patch notes drop 2026-05-21[^3].

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced. Mod values, base type, level requirement chưa public.

## Related Items & Alternatives

- [Facebreaker](/mechanics/items/facebreaker) — unique gloves cùng patch, synergy với Auspex qua Monk Martial Artist Stonefist build path.
- :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"} The Hollow Mask — chest unique 0.4 với mechanic minion (Minion Instability + chaos). Auspex là alternative cho slot body khi build muốn minion utility thay vì raw damage trigger.
- :item-badge{name="Doryani's Prototype"} — POE1 chest có chung pattern "negative defensive layer for offensive trade". Auspex theo trend "chest layer up 4 power source vs trade-off" POE2 đang push.

---

## References

[^1]: GGG official YouTube — *"Path of Exile 2: New Unique Items - The Auspex and Facebreaker"* (2026-05-18). Mark Roberts giới thiệu 2 unique. Auspex segment 0:08-1:37 cover Mist Raven minion, dive command skill, frenzy cull mechanic, Gruelling Madness slow buff, lucky deflect on low life. <https://www.youtube.com/watch?v=e2QZNDtJhoM>

[^2]: Patch overview tổng hợp tại [Return of the Ancients](/mechanics/return-of-the-ancients). Bao gồm Origins of Divinity endgame overhaul, 5 league cũ revamp, Atlas redesign.

[^3]: Game8 — *"0.5.0 Patch Notes Release Date | Path of Exile 2"* (2026-05-07). Confirms patch notes drop 2026-05-21, launch 2026-05-29. <https://game8.co/games/Path-of-Exile-2/archives/582194>

## Relationships

- **synergizes_with** [Facebreaker](/mechanics/items/facebreaker)
