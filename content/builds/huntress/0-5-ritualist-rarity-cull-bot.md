---
template: templates/build-template.md
document_type: build
title: Rarity Cull Bot Ritualist
status: published
author: duocnv
created: '2026-06-14'
updated: '2026-06-14'
class: Huntress
ascendancy: Ritualist
league: '0.5'
patch: 0.5.0
budget_tier: high-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Spark
  damage_type: lightning
  playstyle: projectile
  content_focus: currency-farming
tags:
  - huntress
  - ritualist
  - spark
  - rarity
  - cull
  - culling-strike
  - magic-find
  - party-support
  - currency-farming
  - 0-5
  - poe2
---

# Rarity Cull Bot Ritualist

Build chạy vai magic-find bot trong duo: nhường damage hoàn toàn cho carry, đổi lại lấy kill bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Culling_Strike"} để drop loot ở mức rarity cao nhất có thể. :wiki-link{url="https://www.poe2wiki.net/wiki/Ritualist"} là ascendancy đúng đắn cho hướng này: Unfurled Finger mở slot ring thứ ba, cho phép đeo ba :wiki-link{url="https://www.poe2wiki.net/wiki/Ventor%27s_Gamble"} cùng lúc với :wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"} nhân 30% more lên hai ring slot chuẩn. Toàn bộ passive đầu tư vào Culling Strike Threshold và Item Rarity, không vào damage hay defense. Ai đã có duo partner ổn định và muốn đổi vai thành loot printer sẽ thích; đừng chọn nếu chủ yếu solo hoặc PUG.

## Build Overview

:wiki-link{url="https://www.poe2wiki.net/wiki/Spark"} là hit-delivery mechanism: bắn projectile lightning để hit enemy, trigger Culling Strike on-hit. Culling Strike kiểm tra HP hiện tại của target ngay *trước khi* damage của hit được trừ. Nếu HP nằm trong threshold, enemy chết ngay bất kể damage thực tế. Build không đầu tư damage. Spark không tự kéo HP enemy xuống threshold; carry làm phần đó, culler chờ hit vào đúng lúc HP đã đủ thấp.

Passive và gear đổ toàn bộ vào hai hướng: nâng Culling Strike Threshold càng rộng càng tốt, và stack Item Rarity để mỗi kill culler lấy được đều drop tốt nhất có thể. Defense là evasion + ES mỏng: :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} làm slow aura giữ enemy tránh xa, :wiki-link{url="https://www.poe2wiki.net/wiki/Convalescence"} để trigger ES recharge on-demand khi bị hit.

Về party context trong 0.5: non-unique monster threshold được khôi phục về full base value trong party (patch note line 1091), tức cull Normal và Rare bây giờ *dễ hơn* trong party so với pre-0.5. Riêng Unique boss threshold vẫn giảm theo số thành viên thêm vào: party 2 người là tối ưu, party 3-4 người làm boss cull ngày càng khó vì threshold % thu nhỏ trong khi HP boss phình to. Build thiết kế cho duo đúng nghĩa, không phải nhóm lớn.

## Ngưỡng cull và các breakpoint theo rarity

Culling Strike là on-hit effect với ba điều kiện để hit cull được: hit không bị evade hay dodge, enemy không mang Runic Ward, và HP hiện tại của enemy trước khi damage áp nằm dưới threshold. Damage over time không cull. Mọi mod "increased Culling Strike Threshold" cộng additive với nhau, rồi nhân vào base: `effective = base × (1 + Σincreased)`.

Base threshold theo rarity — giá trị 0.5.0 (Normal được buff từ 30% lên 35% ở patch này):

- Normal: **35%**
- Magic: **20%**
- Rare: **10%**
- Unique: **5%**

Các nguồn "increased CST" universal (áp dụng cho mọi rarity):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Myris_Uxor"} (helmet): **+100%**
- Bounty Hunter passive cluster: **+40%** (notable 25% + ba small node 5% mỗi cái)
- Hunting Companion notable (instill lên amulet): **+20%**
- :wiki-link{url="https://www.poe2wiki.net/wiki/Heart_of_the_Well"} (unique Diamond Jewel, max roll): **+25%**
- Tổng universal: **185%**

Ở 185% increased:
- Normal: 35% × 2.85 = **99.75%** — carry chỉ cần chạm vào Normal enemy là đủ để culler kết liễu
- Rare: 10% × 2.85 = **28.5%**

Instant cull Normal tuyệt đối (100%+) cần đúng **186% increased**, hơn 1 điểm so với tổng universal. Trong thực tế carry gần như chắc chắn giao ít nhất 0.25% HP của bất kỳ Normal enemy nào trước khi culler hit, nên 99.75% là đủ functional.

Thêm Cull the Hordes (passive notable trên tree, **+40% vs Rare và Unique only**, không áp Normal):
- Rare: 10% × 3.25 = **32.5%**

Một nguồn CST nữa hay được nhắc tới là Fear Incarnate từ :wiki-link{url="https://www.poe2wiki.net/wiki/Horror%27s_Flight"}, nhưng item đó tranh slot gloves với Deathblow nên không cộng được vào tổng universal ở trên — chi tiết ở section nguồn Culling Strike bên dưới.

## Nguồn Culling Strike cho Spark

:wiki-link{url="https://www.poe2wiki.net/wiki/Culling_Strike_I"} và Culling Strike II support đều là **Attack-only**, không link được với Spark (Spell). Build lấy Culling Strike từ equipment, không phải support gem.

:wiki-link{url="https://www.poe2wiki.net/wiki/Deathblow"} (unique gloves, base Doubled Gauntlets, Lv33, 24 Str/Dex) cho Culling Strike unconditional dạng mod cố định. Nó là nguồn cull chính và là item bắt buộc, thứ duy nhất luôn-bật cho phép Spark cull mọi pack khi clear. Deathblow **không có** mod "increased Culling Strike Threshold"; nó chỉ có Culling Strike on-hit, armour/evasion, attack speed, và life/mana on kill.

Slot gloves là chỗ nguồn gốc dễ hiểu sai nhất. Horror's Flight là base Engraved Bracers, còn Deathblow là base Doubled Gauntlets, mà cả hai đều thuộc **Item class: Gloves**, tức cùng một slot, không đeo được đồng thời. POE2 không có slot bracers hay wrist riêng. Ý "dùng currency để chuyển Culling Strike từ Deathblow sang Horror's Flight" là cách gộp hai glove effect vào một item, nhưng POE2 0.5 không có mechanic transfer mod giữa unique. Horror's Flight grant "Gain 1 Fear Incarnate when you Cull a target" nhưng tự nó không cho Culling Strike, nên bỏ Deathblow để đeo Horror's Flight là mất luôn nguồn cull luôn-bật cho clear. Thực tế slot gloves chạy Deathblow, route Fear Incarnate của Horror's Flight không lắp được vào build clear ở 0.5.

:wiki-link{url="https://www.poe2wiki.net/wiki/Attrition"} (Spirit gem, Tier 4, 30 Spirit) cull Rare/Unique sau **31-40 giây** Presence trên enemy. Nó là nguồn cull duy nhất không chiếm slot gloves, nhưng delay quá dài nên chỉ cover boss fight kéo dài, không thay được Deathblow cho map clear vì pack thường chết trước mốc đó.

## Stack rarity bằng ba ring Ventor's và Ingenuity

:wiki-link{url="https://www.poe2wiki.net/wiki/Gravebind"} dead hoàn toàn cho MF build từ 0.5 (patch note line 635): "Your other Modifiers to Rarity of Items found do not apply" — clause này lock effective IIR ở 15-20% bất kể bao nhiêu IIR source khác đang cộng. Setup ba Ventor's là cách bypass: đủ ring slot qua Unfurled Finger để stack player IIR mà không đi qua Gravebind.

Ventor's Gamble roll **(−25% đến +25%) increased Rarity of Items Found** và **(−40 đến +40)** trên *mỗi* resistance. Cả hai chiều IIR và resist đều có thể âm trên cùng một ring. Ingenuity nhân 30% more vào **toàn bộ** ring stats, bao gồm cả giá trị âm: ring −30% cold res sau Ingenuity 30% roll = −39% cold res. Ba Ventor's unlucky có thể vừa IIR-negative vừa uncap resist cùng lúc. Chỉ mua ring đã xác nhận IIR dương và resist không catastrophic trước khi đeo.

Ingenuity amplify "(20-30)% increased bonuses gained from **left** Equipped Ring" và "**right** Equipped Ring". Unfurled Finger là slot ring thứ ba, không phải "left" hay "right" theo text item, hầu như chắc chắn không được amplify. Tức là trong ba Ventor's Gamble: hai ring slot trái/phải nhận 30% more, ring thứ ba ở Unfurled Finger chạy IIR base không nhân.

Math ở max roll Ingenuity 30%:
- Ring trái (amplify): +25% × 1.30 = +32.5% IIR
- Ring phải (amplify): +25% × 1.30 = +32.5% IIR
- Ring Unfurled Finger (không amplify): +25% IIR
- :wiki-link{url="https://www.poe2wiki.net/wiki/Rabbit_Idol"} (body socket, limited 1, buffed 0.5.0): +12% IIR
- Subtotal player IIR từ ring + idol: ~102% trước Mageblood

Player IIR có **diminishing returns mạnh sau ~150%**: cộng thêm trên ngưỡng này cho gain marginal. :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} (Utility Belt, mới trong 0.5) có 4 slot Mage's Legacy ngẫu nhiên từ pool ~14 loại. :wiki-link{url="https://www.poe2wiki.net/wiki/Legacy_of_Gold"} = 45% IIR mỗi copy; belt roll "(25-50)% increased effect per duplicate Mage's Legacy held" nhân thêm khi có nhiều copy cùng loại. Roll 3 Legacy of Gold trên một belt là RNG cao. Ngay cả khi hit được, player IIR bucket vẫn bị diminishing returns kéo hiệu quả thực xuống.

Player IIR (item, buff) và area IIR (waystone mod, tablet mod) là **hai bucket riêng biệt**: chúng nhân với nhau, không cộng, và area IIR không có diminishing returns. Chọn waystone và tablet có high IIR mod ảnh hưởng nhiều hơn stack thêm player IIR khi đã qua ~150%. Chi tiết cơ chế bucket đọc thêm ở [Độ hiếm item: Normal, Magic, Rare, Unique và prefix/suffix](/guides/beginner-item-rarity).

Resist solve đến từ :wiki-link{url="https://www.poe2wiki.net/wiki/Grand_Spectrum_(Sapphire)"} (unique Diamond Jewel, Trial of Sekhemas, Gold Spectrum Cache): mỗi Grand Spectrum socketed thêm **+6% all Elemental Resistances**, tối đa 3 jewel = **+18% all ele res tổng**. Unfurled Finger mang downside Reduced Resistances. Grand Spectrum là cách bù trực tiếp mà không tốn ring slot. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Adorned"} không amplify Grand Spectrum (The Adorned chỉ amplify passive node socket chứa **corrupted magic jewel** — Grand Spectrum là unique jewel, không apply).

## Passive tree và notable instill trên amulet

Amulet ở POE2 chỉ giữ được **một** instilled notable (trừ unique đặc biệt như :wiki-link{url="https://www.poe2wiki.net/wiki/Strugglescream"} cho thêm slot). Instill cũng không cộng dồn với allocate: lấy notable đó trên tree rồi thì instill bản thứ hai vô tác dụng. Build vì vậy chia hai notable CST ra hai chỗ, một allocate trên tree, một instill trên amulet.

**Bounty Hunter** đi trên tree: notable 25% CST cộng ba small node 5% dẫn vào, tổng **40%**. Phải allocate cả cụm mới ăn đủ 40%, nên không instill con này (instill chỉ cho mỗi 25% notable).

**Hunting Companion** instill lên amulet bằng ba :wiki-link{url="https://www.poe2wiki.net/wiki/Liquid_Emotion"} (combo Guilt + Envy + Ire): **20% CST** universal, kèm Culling Strike against Beasts khi Companion có mặt (điều kiện Beasts, không phải mọi enemy). Nó chiếm slot instill duy nhất của amulet.

Cộng nguồn universal lại: Myris Uxor 100% + Bounty Hunter 40% trên tree + Hunting Companion 20% trên amulet + Heart of the Well max 25% = **185%**.

**Cull the Hordes** allocate trên tree: **+40% CST nhưng Rare và Unique only**, không áp Normal hay Magic. Có Cull the Hordes thì total vs Rare lên 225% increased, threshold Rare = 32.5%.

Tree còn lại ưu tiên evasion nodes (entry chance), ES nodes (pool cho Convalescence recharge), reservation efficiency để bù Ritualist tree penalty (−25% Spirit là downside của ascendancy — cần compensation để đủ Spirit cho Blasphemy 60 + Convalescence 30 + Blink 60 = 150 Spirit minimum), và jewel socket cho Heart of the Well + Grand Spectrum.

## Skill Gems & Links

**Spark setup:** :wiki-link{url="https://www.poe2wiki.net/wiki/Spark"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Pierce_I"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration_I"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting_I"} + projectile support.

Pierce cho Spark xuyên enemy để hit nhiều target trong pack. Prolonged Duration I (30% more Skill Effect Duration) kéo dài 2s base của Spark projectile, tăng vùng coverage. :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting_I"} (tên cũ trước 0.3.0: Arcane Tempo) tăng cast speed để hit nhiều enemy hơn trước khi carry overkill. :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting_II"} (Tier 4) nếu budget. Support slot thứ tư: :wiki-link{url="https://www.poe2wiki.net/wiki/Multishot_I"} là candidate gần nhất theo effect — verify tên gem thật trong client trước khi mua (xem ## Optimization). Upgrade path: :wiki-link{url="https://www.poe2wiki.net/wiki/Pierce_II"} → :wiki-link{url="https://www.poe2wiki.net/wiki/Prolonged_Duration_I"} → Rapid Casting II theo budget.

**Curse aura:** Blasphemy là Meta Gem (Tier 8, 60 Spirit per socketed Curse) — không phải support gem. Curse cắm **vào** Blasphemy qua Skills Panel, không linked trong socket. :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} socketed vào Blasphemy: slow 40-59% + debuff expire 25% chậm hơn. Gem phải đạt **lv20** để xóa level-cap clause — dưới lv20 Temporal Chains không áp cho enemy trên level X, slow aura không hoạt động ở endgame content.

**Spirit gems:** :wiki-link{url="https://www.poe2wiki.net/wiki/Convalescence"} (Tier 4, 30 Spirit) — trigger ES recharge on-demand, bảo vệ ES khỏi bị interrupt. :wiki-link{url="https://www.poe2wiki.net/wiki/Blink"} (Tier 8, 60 Spirit) — teleport thay dodge roll, cooldown 3.5-4.5s, range 4-4.9m. :wiki-link{url="https://www.poe2wiki.net/wiki/Attrition"} (30 Spirit) vào setup nếu còn Spirit dư cho boss fight dài.

Exclusion check: Culling Strike I/II support là Attack-only, không link với Spark — không có conflict vì build không cố link. Temporal Chains level-cap clause tự xóa ở lv20. Không có interaction conflict giữa Blasphemy, Convalescence và Blink. None.

## Gear Progression

Priority order: cap res 75/75/75 (bù Unfurled Finger Reduced Resistances) → Myris Uxor + Deathblow (enabler tối thiểu, build không cull được nếu thiếu hai item này) → Ventor's Gamble ×3 chỉ roll IIR dương và resist không catastrophic → Grand Spectrum Sapphire ×3 → Heart of the Well max roll → Ingenuity → Mageblood chase.

### Gear theo slot

- **Helmet: Myris Uxor** — 100% CST, bắt buộc, không có thay thế ở slot này.
- **Gloves: Deathblow** — Culling Strike unconditional, nguồn cull chính, bắt buộc. Chiếm trọn slot gloves nên Horror's Flight (cùng slot) không đeo kèm được.
- **Belt: Ingenuity** (mid-endgame) → Mageblood (endgame chase) — Ingenuity amplify hai ring slot chuẩn 30% more. Mageblood hunt Legacy of Gold rolls.
- **Ring ×3: Ventor's Gamble** — cả ba slot (trái + phải + Unfurled Finger). Hai ring slot chuẩn được Ingenuity amplify; ring thứ ba không amplify. Mua theo roll — chỉ đeo ring IIR dương.
- **Amulet:** evasion + ES + res + life. Instill Hunting Companion qua Liquid Emotions cho 20% CST, đây là slot instill duy nhất của amulet (Bounty Hunter nằm trên tree, không instill).
- **Body armor:** evasion + ES + life + res. Rabbit Idol cắm vào body socket nếu base có socket (limited 1, +12% IIR).
- **Boots:** eva + life + 30% movement speed + res.
- **Jewels:** Grand Spectrum (Sapphire) ×3 vào diamond jewel socket cho +18% all ele res. Heart of the Well (max roll 25% CST) vào diamond jewel socket còn lại.

### Đánh giá theo tiêu chí

- Clear speed 3/5: phụ thuộc carry speed, rating tính khi pair carry tốt.
- Boss damage 2/5: Unique boss cull window chỉ 5% và còn giảm thêm trong party lớn.
- Survivability 2/5: không có damage investment để ngăn bị hit, ES pool mỏng.
- Mobility 4/5: Blink cộng movement speed boots.
- League start 1/5: cần drop-restricted uniques và có carry sẵn.
- Budget scaling 3/5: entry rẻ, ceiling phụ thuộc Mageblood và area IIR.

### Entry → Mid endgame → Endgame

- **Entry (setup tối thiểu):** Myris Uxor + Deathblow + một Ventor's IIR dương + Bounty Hunter (tree) + Hunting Companion (instill) + Cull the Hordes (tree). Cull functional ngay ở tier này, threshold Normal 99.75% và Rare 28.5%.
- **Mid endgame:** Ingenuity + ba Ventor's (hai roll dương) + Grand Spectrum ×3 (res solve) + Heart of the Well max. ES + evasion gear để survive trong party.
- **Endgame:** Mageblood hunt Legacy of Gold. Ba Ventor's max IIR roll. Area IIR qua waystone + tablet selection là lever chính ở giai đoạn này — quan trọng hơn stack thêm player IIR khi đã qua ~150%.

## Failure Modes

Build in loot tốt khi có carry competent và content phù hợp: cull Normal ở ~99.75% HP, Rare ở ~28.5-32.5% HP, rarity nhân với area IIR từ waystone cho drop quality cao. Đây là tất cả những gì nó làm tốt.

**Runic Ward immunity (0.5 — failure mode cao nhất).** Bất kỳ enemy nào mang Runic Ward đều không thể bị cull — Spark hit xảy ra nhưng kill không về phía culler. Wave-boss encounter, Runeforged rare, và enemy mặc Runeforged armour đều có thể có Runic Ward trong 0.5. Build không có fallback: cull engine thất bại im lặng trên những target này. Content kiểu Remnant + Runeforging sinh nhiều Runeforged rare nên đặc biệt rủi ro — đọc [Remnant + Runeforging Profit Loop](/farming/0-5-remnant-runeforging-profit-loop) để biết loại enemy nào xuất hiện. Verify content type trước khi juice node cho culler.

**Solo không khả thi ở endgame.** Spark không đủ damage để kéo Rare xuống 10% hay Unique boss xuống 5% HP. Không có carry, build ngừng chức năng hoàn toàn. Không có cách build around vấn đề này mà không hi sinh toàn bộ IIR stack.

**Ventor's Gamble roll tệ phá gear.** IIR roll có thể âm (−25%→+25%) và mỗi resist roll cũng vậy (−40→+40). Ingenuity 30% nhân more vào cả giá trị âm: ring −30% cold res → −39% cold res sau Ingenuity. Ba Ventor's unlucky đồng thời IIR-negative và uncap resist. Mua ring đã xác nhận IIR dương và resist không catastrophic — ring max IIR (+20 đến +25%) đắt hơn nhiều, kiểm price trước khi mua cả ba slot.

**Coordinated duo là điều kiện tiên quyết.** Carry cần hiểu cơ chế: không overkill enemy trước khi culler hit, không kết boss quá sớm. Random PUG không có coordination này — carry tự overkill toàn bộ, culler không lấy được kill. Build không chạy được trong public matchmaking.

**Unique boss cull xấu hơn ở party 3-4 người.** 0.5 khôi phục non-unique threshold về full base trong party (buff cho map clear). Nhưng Unique boss threshold vẫn giảm theo số thành viên thêm vào — party 4 người có thể đẩy Unique boss cull window xuống rất nhỏ trong khi HP boss phình lên 3×. Party 2 người là tối ưu; culler gần như redundant trên boss trong nhóm lớn.

**Map mods hard brick.** "No Energy Shield Recharge" cắt đứt layer defense duy nhất khi bị hit — Convalescence không thể trigger recharge nếu mod block toàn bộ recharge. "Monsters are Hexproof" kill Temporal Chains aura, không còn slow. "Enemies deal extra Elemental Damage" cộng với resist có thể âm từ Ventor's roll tệ = chết spike qua evasion. Ba mod này bắt buộc roll over hoặc brick map.

**ES recharge passives nerfed trong 0.5.** Convalescence notable 40%→20%, Quick Response 20%→10%, Rapid Recharge 25%→12%. Passive recharge sustain yếu hơn trước — build phụ thuộc Convalescence Spirit Gem active trigger và không được bị one-shot trước khi có cơ hội dùng.

**Temporal Chains level-cap.** Dưới gem lv20, Temporal Chains không áp cho enemy trên level X. Endgame enemy vượt cap đó không bị slow. Lên lv20 trước khi vào T15+.

**Acquisition gate cao.** Ingenuity (The King in the Mists, drop-restricted), Myris Uxor, Heart of the Well max-roll (variable 15-25%), và Grand Spectrum ×3 (Trial of Sekhemas farming) đều có gating riêng. Entry setup (Deathblow + một Ventor's + passives) rẻ hơn nhiều nhưng ceiling thấp hơn hẳn kit full.

## Verdict

Rarity Cull Bot Ritualist là build rất hẹp, làm đúng một việc rất tốt trong điều kiện rất cụ thể. Setup tối thiểu (Myris Uxor + Deathblow + Ventor's roll dương + passive cluster) đã functional với carry tốt, threshold Normal 99.75% và Rare 28.5%. Endgame kit (Ingenuity + ba Ventor's max + Mageblood Legacy of Gold) đẩy rarity cao hơn, nhưng carry quality và area IIR từ waystone selection quan trọng hơn gear của culler ở ngưỡng đó.

Chọn build này nếu đã có duo partner setup sẵn và muốn role loot collector. Không chọn nếu mục tiêu là solo, PUG, farm content sinh nhiều Runeforged enemy, hay cần boss farmer chính.

## Optimization

Verify trong client ngay khi vào league:

- **Route Fear Incarnate từ Horror's Flight có cứu được không:** Horror's Flight chiếm slot gloves của Deathblow, nên chỉ đáng thử nếu kiếm được nguồn Culling Strike luôn-bật ngoài slot gloves (hiện chỉ có Attrition, mà nó boss-only). Nếu có, equip Horror's Flight rồi cull một pack, log stack cap, per-stack CST, và decay rate. Con số "+200% CST" trong nguồn gốc thực ra là 200-300% Evasion Rating trên item, không phải CST.
- **Tên gem thật cho projectile support slot:** Một số tên gem từ nguồn thứ cấp không match database (zero hit trên "Seon's Temper", "Valenta's Propulsion"). Confirm tên gem thật trong Skills Panel trong client. Multishot I và Projectile Acceleration là candidate gần nhất theo effect mô tả.
- **Corrupted jewel implicit resist pool:** Nếu plan dùng corrupted implicit để thêm resist ngoài Grand Spectrum, verify pool available cho loại jewel cụ thể đang dùng — chưa được xác nhận từ primary source.
- **Runic Ward frequency trong content type đang farm:** Log encounter type nào sinh Runic Ward enemy trong session để build whitelist content an toàn cho culler.
- **Threshold thực tế sau Fear Incarnate:** Nếu route Horror's Flight chạy được, sau khi đo per-stack CST thì tính lại effective threshold vs Rare và Normal để cập nhật các số trong section ngưỡng cull.

## Version History

### 2026-06-14

Initial draft. Corrections folded từ primary source reconcile (patch note line-cited, wiki mirror, poedb live):

- Helmet: Myris Uxor (không phải "Meginord's Visage")
- Gloves: Deathblow (không phải "Death's Blow") — không có 33% CST modifier; chỉ có Culling Strike on-hit, armour/evasion, attack speed, life/mana on kill
- Passive notable: Cull the Hordes (không phải "Call the Hordes")
- Amulet mechanic: Instilling via Liquid Emotions (không phải "Anointing via Distilled Emotions"); Hunting Companion instill = Guilt+Envy+Ire, Bounty Hunter = Despair+Suffering+Guilt
- Support gem name: Rapid Casting I/II (không phải "Rapid Cast"; tên cũ pre-0.3.0: Arcane Tempo)
- Blasphemy: Meta Gem không phải support gem; curse cắm vào Blasphemy qua Skills Panel
- "Elder's Legacy Brew": không tồn tại trong POE2 0.5. Horror's Flight (Engraved Bracers) và Deathblow (Doubled Gauntlets) đều là Item class: Gloves nên cùng slot, loại trừ nhau; nguồn gốc muốn transfer để gộp hai glove effect vào một item, mechanic đó không có
- Ingenuity: 20-30% more (không phải "double"); amplify left + right ring slot only, không amplify Unfurled Finger — ring thứ ba (Unfurled Finger) chạy IIR base không nhân
- Ventor's Gamble IIR roll: −25% đến +25% (có thể âm); resist roll: −40 đến +40 mỗi resist (có thể âm); Ingenuity nhân more vào cả giá trị âm
- Mageblood POE2: 4 Mage's Legacy passive permanent, không có flask mechanic
- Party play 0.5: non-unique threshold restored to full base value trong party (buff cho map clear); Unique boss threshold vẫn giảm per party member
- Bỏ Thunderfist khỏi build: trang item riêng của nó grant Crackling Palm (glove Monk unarmed), không phải Fear Incarnate; dòng Fear Incarnate gán cho Thunderfist chỉ xuất hiện ở list-page packed (cargo glitch), không đáng tin
- Gravebind nerfed 0.5 — build dùng triple Ventor's thay, Gravebind không còn là key gear
- Threshold math: 185% universal = 99.75% Normal (không phải 100%); instant Normal cull cần 186%; Heart of the Well roll 15-25% (không fixed 25%)
- Attrition: cull Rare/Unique chỉ sau 31-40s Presence — không cover map clear

## Relationships

- **related_guides** [Độ hiếm item: Normal, Magic, Rare, Unique và prefix/suffix](/guides/beginner-item-rarity) — IIR bucket system (player vs area), tại sao area IIR từ waystone nhân độc lập với player IIR và không có diminishing returns.
- **farming_relevance** [Withered Willow Delirium Farm](/farming/0-5-withered-willow-delirium-farm) — Delirium pinnacle content; duo culler tăng loot quality khi chạy cùng carry ở đây.
- **farming_relevance** [Remnant + Runeforging Profit Loop](/farming/0-5-remnant-runeforging-profit-loop) — Runeforged rare trong content này mang Runic Ward, culler không thể cull; tránh hoặc verify trước khi juice.
- **alternative_to** [Spear Twister Ritualist và Amazon](/builds/huntress/0-5-twister-ritualist-amazon) — Ritualist theo hướng self-DPS; Unfurled Finger + Ingenuity ring economics được dùng theo cách khác hoàn toàn.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — 0.5 thay đổi party cull threshold (non-unique restored), Runic Ward mechanic mới, Mageblood và Horror's Flight đều là item mới của 0.5.
