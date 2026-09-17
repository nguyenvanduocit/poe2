---
document_type: build
title: Frostbolt Mirror of Refraction Gemling
description: Gemling CI level 96 chạy Frostbolt–Mirror với Rakiata's Flow, Dialla's Desire đã bật full Augury; số liệu live từ char và cảnh báo Cold Resistance đang tụt cap.
class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.3
status: published
author: duocnv
created: '2026-09-07'
updated: '2026-09-17'
budget_tier: mid-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Frostbolt
  damage_type: Cold
  playstyle: Projectile loop
  content_focus: Mapping
tags:
- poe2
- mercenary
- gemling-legionnaire
- frostbolt
- mirror-of-refraction
- atziris-rule
- widowhail
- drillneck
- chaos-inoculation
template: templates/build-template.md
---

# Frostbolt Mirror of Refraction Gemling

Mình đang chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Gemling_Legionnaire"} **level 96** trong event league Forbidden Rites, tree vẫn nhánh `PassiveTree-0.5` nên toàn bộ cơ chế :wiki-link{url="https://www.poe2wiki.net/wiki/Frostbolt"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Mirror_of_Refraction"} vẫn giống 0.5.3 base. So với snapshot Lv92 hai ngày trước, hai chỗ đổi lớn nhất: link Mirror đã cắm đủ support để bật bonus của :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Augury"}, và Frostbolt gỡ Cold Penetration ra để lắp :wiki-link{url="https://www.poe2wiki.net/wiki/Rakiata%27s_Flow"} — đảo hẳn Cold Resistance địch chứ không chỉ xuyên. Đổi lại lỗ thủ đã dời chỗ: Fire không thiếu 4% nữa, nhưng **Cold Resistance rơi xuống 39% (dưới cap 36 điểm)** — max hit cold tụt từ 24k xuống 14,5k, giờ nó mới là chỗ chết.

## Build Overview

:wiki-link{url="https://www.poe2wiki.net/wiki/Widowhail"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Drillneck"} ở weapon set 1 để bắn Frostbolt khởi động. :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri%27s_Rule"} ở weapon set 2 để sinh gương; cây riêng của bộ staff lấy Cooldown Recovery, còn bộ bow dồn critical damage. Projectile chạm gương bị nhân thành nova, bản sao tiếp tục phá các gương khác.

:wiki-link{url="https://www.poe2wiki.net/wiki/Breachlord%27s_Amalgam"} cho Frostbolt quay về và xuyên tất cả mục tiêu trên đường về. Dòng Return trên Drillneck chỉ dành cho Attack Projectiles nên Frostbolt vẫn cần Amalgam để về. Hai dòng "increased damage / crit theo số lần xuyên" của quiver áp cho Projectile nói chung.

Widowhail hiện có **273% increased bonuses gained from Equipped Quiver** — riêng hiệu ứng từ bow nhân bonus quiver với **3,73**. Drillneck roll 54% damage và 57% crit mỗi lần xuyên, nhân bow ra khoảng **201% inc damage** và **213% inc crit chance** mỗi lần xuyên trước các nguồn tăng quiver effect khác. Các khoản increased cộng vào tổng tương ứng, không nhân damage bậc mũ sau mỗi lần xuyên.

## Skill Gems & Links

### Frostbolt đã đổi Cold Pen sang Rakiata's Flow

Frostbolt trong export là gem level 20, corrupted, đi cùng Breachlord's Amalgam, :wiki-link{url="https://www.poe2wiki.net/wiki/Zenith_II"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Considered_Casting"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Verglas"} và **Rakiata's Flow**. Rakiata's Flow là lineage support tier lvl65, cost/reservation mult 120%, mod duy nhất **"Hits with Supported Skills treat Enemy Monster Elemental Resistance values as inverted"** — địch có Cold Resistance 40% biến thành -40%, so với Cold Penetration chỉ hạ vài chục phần trăm. Bước nâng damage lớn nhất so với bản trước, và nhờ vậy không cần chạy Freezing Mark như buff damage riêng cho boss.

Amalgam vẫn thêm cooldown lên Frostbolt để đổi lấy return-and-pierce; Considered Casting đổi cast speed lấy spell damage; Zenith II cần mana trên 90% để có phần more damage, nên khởi động khi mana đầy. Verglas cộng extra cold sau khi mình phá Ice Crystal.

### Mirror đã đủ hai support hợp lệ để bật Augury

Link hiện tại: **Cooldown Recovery II + Uhtred's Augury + :wiki-link{url="https://www.poe2wiki.net/wiki/Dialla%27s_Desire"}**. Augury cần đúng hai support khác cùng sửa skill mới cho bonus, và Dialla's Desire là support cần đúng số socket đó: nó là lineage tier lvl65, +5 Int req, cost/reservation mult 90%, mod **"+1 to Level of Supported Skill Gems, +10% to Quality of Supported Skills"**. Kết quả là Mirror giờ nhận cả bonus của Augury cộng thêm +1 level cộng +10% quality thẳng từ Dialla — không cần đắn đo giữa Prolonged Duration II hay Clarity I như bản trước.

### Frost Wall vẫn giữ, đổi Concentrated Area sang Refutation + Ixchel's Torment

Nhóm :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Wall"} chạy qua meta gem **:wiki-link{url="https://www.poe2wiki.net/wiki/Cast_on_Critical"}**, cùng :wiki-link{url="https://www.poe2wiki.net/wiki/Glacier"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Spell_Cascade"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Refutation"} và **Ixchel's Torment**. Cast on Critical bắn Frost Wall khi Frostbolt hit crit — mình không phải cast tay. Cascade tạo thêm vùng tường, Glacier tăng life Ice Crystal, còn Refutation cộng Ixchel's Torment thay Concentrated Area cũ để đổi cách trigger crystal death, phát sinh thêm hiệu ứng from Refutation instead of chỉ scale AoE. Nhịp vận hành giờ là bắn Frostbolt ở set bow, để Cast on Critical tự chồng Frost Wall, đổi sang set staff khi cần bật Mirror duy trì loop.

### Bow Shot khởi động armour break cho nhóm rare/boss

Nhóm attack mới: **Bow Shot + Stun II + Bleed II + Armour Break I + Armour Demolisher I + Armour Explosion**. Setup này dùng cho rare/boss ép armour break trước khi loop Frostbolt lên số damage cao nhất. Bow Shot đánh raw phys, Bleed II thêm bleed, và chuỗi Armour Break I → Demolisher I → Explosion ép fully-broken rồi kích nổ. Không phải carry loop — dùng để mở rare pack / boss cần crack armour.

### Buff và utility

**Charge Regulation** (persistent buff, 30 Spirit reservation) là gem mới của league so với bản trước. Text verbatim: "20-26% more Critical Hit Chance while you have a Power Charge / 15-20% more Armour, Evasion and Energy Shield while you have an Endurance Charge / 20-25% increased Skill Speed while you have a Frenzy Charge / Consumes one of each Charge every 10 seconds". Char giữ 3/3/3 endurance/frenzy/power nên cả ba buff luôn active — riêng phần "15-20% more AES" trên pool 9126 ES cộng 2405 armour cộng 12257 evasion cộng ~1.4k-1.8k ES/eva sau multiplier, còn "more crit chance" nhân multiplicative với Skull Knuckle 23% crit damage bonus.

:wiki-link{url="https://www.poe2wiki.net/wiki/Arctic_Armour"} level 19 vẫn giữ nguyên link cũ: :wiki-link{url="https://www.poe2wiki.net/wiki/Stun_III"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Enduring_Impact_II"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Nexus"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Knockback"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Cold_Mastery"}. Nhóm này phản ứng với melee hit: tăng stun, tạo chilled ground khi freeze, có Endurance Charge khi heavy stun (nguồn charge nuôi Charge Regulation) và đẩy địch ra.

:wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} giữ Cooldown Recovery II + :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Omen"}. :wiki-link{url="https://www.poe2wiki.net/wiki/Time_of_Need"} + CDR II để rút khoảng cách xoá curse/ailment.

:wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} chạy :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Chains"} (đổi từ Elemental Weakness bản trước — vì Rakiata's Flow đã invert cold res địch nên slow còn value hơn -res thêm), cùng :wiki-link{url="https://www.poe2wiki.net/wiki/Ritualistic_Curse"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area_II"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Slow_Potency"}.

:wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} + Prolonged Duration II + :wiki-link{url="https://www.poe2wiki.net/wiki/Eternal_Mark"} vẫn giữ để chill/freeze target đơn lẻ. Nhóm Tornado ở bản trước đã bỏ.

Nhóm **Remnants of Kalguur + Khatal's Rejuvenation + Remnant Potency I + Harmonic Remnants II** là chuỗi Runes of Aldur league mechanic, không tham gia core loop.

## Ascendancy và passive

Bốn notable ascendancy giữ nguyên: :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_Virtue"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Advanced_Thaumaturgy"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Neurological_Implants"} và Gem Studded. Neurological Implants cho +2 level các skill có Intelligence requirement, Advanced Thaumaturgy thêm hiệu ứng từ quality, Essence of Virtue cho :wiki-link{url="https://www.poe2wiki.net/wiki/Virtuous_Barrier"} (đang chạy solo trong slot skill 11). Gem Studded phụ thuộc màu support nên đổi support phải tính lại phòng thủ và mana cost đồng thời.

Hai keystone đang cầm là :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} và **:wiki-link{url="https://www.poe2wiki.net/wiki/Black_Scythe_Training"}** — text sau verbatim từ mirror: *"Gain no inherent bonus from Strength / 1% increased Energy Shield per 2 Strength"*. Keystone Kalguuran này được conquered vào cây bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Heroic_Tragedy"} timeless jewel dòng Vorana, seed 5420 (bản trước mô tả effect nhưng gọi nhầm là biến thể của "Elemental Equilibrium node"). Char hiện Str 248 nên keystone này quy đổi ra +124% inc ES từ Strength — chính là chỗ pool ES 9126 nhảy vọt so với sceptre/int gear thuần.

:wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"} cho phép lấy passive quanh Chaos Inoculation mà không cần nối từ cây chính.

Bộ staff có các notable CDR như :wiki-link{url="https://www.poe2wiki.net/wiki/Temporal_Mastery"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Multitasking"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Volatile_Catalyst"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Distracting_Presence"}. Bộ bow dồn crit damage bonus. Phân bổ chính xác và hai weapon-set tree nằm ở PoB gốc cuối bài.

## Phòng thủ hiện tại

Số dưới đọc thẳng từ client model live 2026-09-17 (`data/character-exports/export-i_hate_minion_fmfr.json`) — không phải PoB sim thuần túy, nên đây là ngưỡng thật với gear và charge đang bật.

- **Energy Shield / Runic Ward / Mana / Spirit:** 9,126 / 81 / 969 / 215
- **Armour / Evasion / Deflection:** 2,405 / 12,257 (evade 56%) / 9,805 (deflect 54%, damage prevented 49%)
- **Physical DR:** 33% (effective armour 4,810 sau các multiplier)
- **Life:** 1 (Chaos Inoculation)
- **EHP:** 72,068
- **Max hit chịu được:** Phys 9,666 / Fire 33,019 / **Cold 14,520** / Lightning 33,019 / Chaos ∞
- **Resistances:** Fire 75 (+3 overcap) / **Cold 39** (dưới cap 36 điểm) / Lightning 75 (+26) / Chaos 100 (CI)
- **Charges:** Endurance 3 / Frenzy 3 / Power 3 (nuôi Charge Regulation)
- **Item Rarity:** 129%
- **Attributes:** Str 248 / Dex 91 / Int 170

**Cold Resistance 39% mới là chỗ chết.** Fire 71% ở bản trước đã cap sạch, nhưng Cold đã trôi từ 75 xuống 39 — max hit cold tụt từ 24,4k xuống 14,5k. Không phải Rakiata's Flow gây ra (support đó áp cho địch, không đụng res của mình); đây là chuỗi thay gear: Empyrean Vise gloves cũ (từng gánh Cold Resistance) bị đổi sang Skull Knuckle không có cold res, Amulet Empyrean Torc cũ (+37 fire) đổi sang Oblivion Collar không res, còn Miracle Ward mới lấy về fire/lightning nhưng bỏ trống cold. Hai ring Horror Whorl (+24 all ele) + Agony Hold (+38 cold) sau Ingenuity 29% nhân đôi bên là +30 all ele + +49 cold — không đủ bù 36 điểm mất.

**Runic Ward 81 là layer defense 0.5+ chưa được đo kỹ.** Kích hoạt khi ES chạm 0 (theo mechanic 0.5), hồi độc lập với ES; ở đây pool nhỏ nên không coi là layer chính, nhưng Olroth's Resolve flask convert Ward → Guard nên nó có vai trò riêng (xem section flask).

**Physical max hit đã nới từ 7,2k lên 9,7k** nhờ Charge Regulation + Endurance Charge more AES + armour tăng 350 và evasion tăng gần 2k. Vẫn thấp nhất trong bốn kênh; hit phys vẫn dễ giết hơn hit ele lành mạnh.

### Evasion và Deflection là cách tăng EHP rẻ nhất sau khi bù xong Cold Resistance

Công thức chance-to-hit và chance-to-deflect của bản 0.5 cho phép tính ngược target rating cần đạt thay vì mò gear. :wiki-link{url="https://www.poe2wiki.net/wiki/Evasion_Rating"} theo Chance to Hit = Accuracy × 125 / (Accuracy + Evasion × 0,3); :wiki-link{url="https://www.poe2wiki.net/wiki/Deflection"} theo Chance to Deflect = 150% × (1 − Accuracy / (Accuracy + Deflection × 0,12)), cap 95%. Thế ngược cặp số hiện tại của mình (Evasion 12.257 → evade 56%, Deflection 9.805 → deflect 54%) ra cùng một Accuracy quái tham chiếu ≈1.997 ở cả hai công thức — hai layer đang tính nhất quán với nhau, số tin được để ngoại suy target tiếp theo.

Muốn evade 75% cần Evasion Rating ≈26.600 — gấp 2,2 lần hiện tại. Đường cong này concave rõ: kéo tiếp lên 81% cần gần gấp đôi nữa (~37.000-47.000 tuỳ Accuracy quái thật ở level của mình), tốn quá nhiều đầu tư cho vài % cuối nên 75% là điểm dừng hợp lý, không cần rượt cap.

Muốn deflect 75% cần Deflection Rating ≈17.400. Nhưng Drillneck đang đeo có dòng "Gain Deflection Rating equal to (24-32)% of Evasion Rating" — riêng việc kéo Evasion +14.300 ở trên đã tự sinh thêm ~3.400-4.600 Deflection miễn phí, không tốn slot nào thêm. Phần thiếu còn lại chỉ 2.500-4.000, bù được bằng affix Deflection ở suffix khác hoặc đổi hẳn boots sang loại "Gain Deflection Rating equal to 40-60% of Evasion Rating" — đánh đổi mất 98% inc ES của Morbid March nên cân nhắc riêng, không làm cùng lúc với bù Cold Resistance.

Deflection đáng đầu tư song song với Evasion chứ không phải chọn một trong hai: theo cơ chế, deflect ăn được cả đòn "boss attack đỏ" mà evasion không né được, nên hai layer bổ trợ lẫn nhau. Xác suất "một hit chạm đủ và không bị giảm" hiện tại là (1 − 0,56) × (1 − 0,54) ≈ 20%; đẩy cả hai lên 75% đưa xuống 0,25 × 0,25 ≈ 6,25% — giảm hơn 3 lần mà không cần đụng tới ES hay Armour.

Lưu ý: con số EHP tổng nhảy vọt khi né/deflect tiến gần cap chủ yếu vì đó là chỉ số trung bình theo xác suất, không phải sức chịu một cú đánh duy nhất. Muốn biết build có sống được một hit độc lập hay không vẫn phải nhìn cột **Max hit chịu được** ở trên, không nhìn EHP tổng.

## Gear Progression

Ưu tiên hiện tại: bù Cold Resistance trước, sau đó bơm ES/Runic Ward, cuối cùng mới tính damage thêm. Slot đắt (Widowhail, Drillneck, Atziri's Rule, Morior Invictus, Ingenuity) không đụng.

### Chỉ số chính cần tìm trên từng slot

- **Weapon set 1:** Widowhail + Drillneck. Bow hiện 273% quiver bonus (Bonded mods trên rune Widowhail như "12% mana cost converted to life" đã CHẾT vì `enableBondedMods = False`). Quiver 54% damage/57% crit per pierce, +85 life dư (life=1 do CI), 10% attack speed, deflection = 24% evasion.
- **Weapon set 2:** Atziri's Rule (Reflecting Staff, +5 corrupted spell level, +25 Int, 17% cast speed, +11% max life dư, mod đặc trưng "Spells which cost Life gain 103% of Damage as Extra Physical Damage" — nhánh cost-life không dùng trong build này). Grants level 20 Mirror of Refraction. Rune sống: +60 ES, +1 all Spell.
- **Helmet — Miracle Ward** (Ancestral Tiara): 42% inc ES, +34 mana, 18% IIR, +42% Fire, +42% Lightning. Anoint **Thaumaturgic Generator** (dời từ amulet cũ sang đây). Slot phải sửa trước: thêm Cold Resistance khoảng 30-40% mà không mất anoint.
- **Body Armour — Morior Invictus** (Grand Regalia): 385% AES, +6 all attributes per socket filled, 10% global AES per socket, +13 Spirit per socket. 4 socket đầy nghĩa là +24 attributes, +40% global AES, +52 Spirit thêm. Rune có "Idols socketed in this item gain the benefits of their Bonded modifiers" — nhưng char không có idol socket nên phần Bonded rune dưới cũng chết.
- **Gloves — Skull Knuckle** (Runeforged Spiked Bracers): +173 evasion, 43% inc evasion, +5-10 phys, 23% crit damage bonus, deflection = 23% evasion. Rune +22% Fire (sống). Bonded life/mana chết. Cân nhắc slot này khi cần Cold Resistance.
- **Boots — Morbid March** (Sekhema Sandals): +56 ES, 98% inc ES, 18% IIR. Rune 32% AES sống, còn 3 rune Bonded (+life, +mana, +16% CDR) chết — nên CDR trên giày không hoạt động; muốn CDR phải lấy từ chỗ khác hoặc craft rune sống.
- **Amulet — Oblivion Collar** (Absent Amulet): +4 level all Spell, 49% inc ES. Anoint **Paragon**. Base Absent Amulet có suffix bị suppress một slot theo implicit ("-1 prefix / -1 suffix" tùy variant) — check tooltip trong client trước khi craft.
- **Belt — Ingenuity** (Utility Belt): 29% amp bonuses left ring / 29% amp right ring, 9% reduced charm charges used. Đổi belt phải tính lại cả hai nhẫn.
- **Ring 1 — Horror Whorl** (Gold Ring, implicit 14% IIR): +170 evasion, +105 mana, +24% all ele, +54% Lightning. Sau Ingenuity 29% amp: ~+31 all ele, ~+70 Lightning — nhẫn cần bảo toàn.
- **Ring 2 — Agony Hold** (Gold Ring, implicit 15% IIR): 29% inc Cold Damage, +264 evasion, 32% IIR, +21 Str, +38% Cold Resistance. Sau Ingenuity: ~+49 Cold — chỗ duy nhất còn Cold Res sau lần đổi gear.
- **Jewels:** Megalomaniac (Spell Haste + Forthcoming), Heart of the Well, From Nothing, Heroic Tragedy (seed 5420, dòng Vorana → Black Scythe Training), một Time-Lost Emerald, bốn rare Emerald.
- **Charms:** For Utopia (200% armour during effect), Rite of Passage (Spirit Of The Ox 19 giây), Lavianga's Spirits (constant effect, 74% reduced amount), một charm rare 20% inc duration.

### Flask thay đổi lớn nhất: Olroth's Resolve

**:wiki-link{url="https://www.poe2wiki.net/wiki/Olroth%27s_Resolve"}** thay chỗ life flask thường — Ultimate Life Flask unique, drop từ Olroth Origin of the Fall. Version đang đeo có ba dòng: **"106% increased Charges per use / Regenerate 3.7% of maximum Runic Ward per second during Effect / Gain Guard equal to Current Runic Ward for 10 seconds when Effect ends"**. Trên CI (life = 1) thì phần Life Recovery của flask base là 0, nhưng hai dòng dưới không phụ thuộc life: khi cast, flask regen 3.7% × 81 Ward = ~3 ward/s trong effect, và khi effect hết thì current Ward biến thành Guard 10 giây. Layer thủ mới mà bản trước không có; note giá trị Guard thực bằng cách đo trong client, không lấy số PoB.

### Thứ tự sửa bộ hiện tại

1. **Bù Cold Resistance thêm ~40%** để đưa Cold về cap 75. Đường rẻ nhất: craft/mua lại Miracle Ward với dòng Cold Resistance thay cho một trong hai (Fire hoặc Lightning) đang dư overcap; hoặc lấy Cold Resistance ở suffix trên belt/glove/ring1.
2. **Kéo Evasion Rating lên ~26.600** (từ 12.257) để đưa evade lên 75% — ưu tiên affix "increased Evasion Rating" ở helmet/gloves/boots, các slot đang có sẵn base evasion (Skull Knuckle, Morbid March, Widowhail). Deflection ăn ké theo tự động qua dòng Drillneck.
3. **Bù phần Deflection Rating còn thiếu (~2.500-4.000)** sau khi Evasion đã kéo lên, để đưa deflect lên 75%. Rẻ nhất là affix Deflection trực tiếp trên ring/amulet; đắt hơn là đổi boots sang loại "Deflection Rating equal to % of Evasion" — chỉ làm nếu chấp nhận mất 98% inc ES của Morbid March.
4. **Đưa Frost Wall cast on crit chạy ổn định** — với Rakiata's Flow đã invert res, hit crit tăng theo Charge Regulation (Power Charge = 20-26% more crit chance) nên Cast on Critical trigger nhiều hơn. Ghi số uptime của Frost Wall trong map để check.
5. **Đo Runic Ward + Guard uptime của Olroth's Resolve** trong T15+ map trước khi đổi flask khác. Nếu Guard hồi kịp giữa các hit thì layer này thay được vai trò Fire Resistance overcap cũ.
6. **Craft lại rune boots** — bỏ Bonded mods chết (16% CDR ở dạng Bonded không hoạt động) đổi sang rune sống mang CDR hoặc phòng thủ.

## Failure Modes

**Cold hit lớn xuyên qua các lần né.** Với Cold Resistance 39%, một hit cold 15k trúng thẳng đủ để one-shot; Evasion 56% và Deflection 54% giảm áp lực tiếu cường độ, nhưng slam/beam không né được. Cho tới khi bù res, tránh đứng trong Ice Nova, Cold Beam boss và Cold Slam.

**Loop đứt khi di chuyển hoặc đổi vị trí.** Projectile phải chạm được gương kế; tăng projectile speed tùy tiện có thể đổi quãng đường và thời điểm gặp gương. Sau mỗi lần đổi CDR hoặc projectile speed, chạy đường hẹp và đổi hướng để đếm số lần phải khởi động lại.

**Charge fall-off phá Charge Regulation.** Gem consume 1 charge mỗi loại mỗi 10 giây. Nếu nguồn tái sinh charge yếu (không dính pack quái đủ nhanh cho Frost Nexus tạo shatter/kill để nạp Frenzy, Arctic Armour heavy stun không đủ cho Endurance), buff sẽ tự tắt và mất luôn "more crit chance / more AES / more skill speed" — dẫn tới nhịp DPS lẫn thủ đều tụt. Trước boss dài dài phải đảm bảo pack quái vừa qua đủ nạp charge.

**Runic Ward pool 81 quá nhỏ để làm layer thủ chính.** Olroth's Resolve chuyển Ward → Guard nhưng con số chỉ 81 nghĩa là Guard tạo ra chưa đủ đỡ một hit lớn. Đừng dựa vào layer này như wall thủ, chỉ coi là buff tạm giữa cooldown flask.

**Thay đổi cơ chế Mirror hoặc lineage support.** Atziri's Rule, Widowhail + Drillneck + Amalgam là điều kiện cứng của cách chơi. Rakiata's Flow và Dialla's Desire đều thuộc lineage support pool — nếu GGG buff/nerf mảng này trong hotfix league, phải kiểm tra lại nhịp trước khi vào content cao.

## Verdict

Bản Lv96 giải quyết xong hai câu hỏi mở của bản Lv92: link Augury đã đủ support, và Frostbolt không còn phụ thuộc Cold Penetration để đục res boss. Đổi lại một lỗ thủ mới lộ ra ở Cold Resistance — đây là bước tiếp theo trước khi đầu tư thêm damage. Sau khi cap lại Cold, hướng nâng EHP tiếp theo không phải thêm ES hay Armour mà là kéo Evasion Rating lên ~26.600 và Deflection Rating lên ~17.400 (target evade/deflect 75% cả hai) — công thức chance-to-hit/chance-to-deflect cho thấy đây là chỗ đầu tư rẻ nhất, giảm xác suất ăn trọn một hit hơn 3 lần mà không đụng slot ES. Song song đó là đo uptime Runic Ward + Guard để quyết định giữ Olroth's Resolve hay đổi flask khác.

## Resources

Export gốc + PoB code: `data/character-exports/export-i_hate_minion_fmfr.json` và `data/character-exports/export-i_hate_minion_fmfr-pob.txt` (fetch qua ego-browser page-context 2026-09-17, endpoint poe.ninja `/poe2/api/account/character/forbiddenrites/i_hate_minion_fmfr/17`). Import PoB code bằng Import/Export Build trong PoB2.

**Phạm vi mô phỏng:** Số phòng thủ trong bảng lấy thẳng từ client model (defensive breakdown), nên đây là ngưỡng thực. DPS không quote vì output PoB đơn lẻ chưa mô phỏng full loop projectile copy + snapshot đổi vũ khí; sẽ đo bằng số kill/wave khi vào T16+. PoB2 community fork chưa model đầy đủ Charge Regulation gem, Rakiata's Flow inversion và Runic Ward → Guard convert — flag `pob_coverage: PARTIAL`.

## Version History

### 2026-09-17

Refresh sang snapshot Lv96 live (2026-09-17T01:01 UTC). Frostbolt đổi Cold Penetration → Rakiata's Flow (res invert thay vì hạ res). Mirror đủ support: Dialla's Desire lấp slot còn thiếu để bật Augury bonus. Blasphemy chuyển Elemental Weakness → Temporal Chains vì res địch đã bị invert. Thêm Charge Regulation persistent buff (30 Spirit, 3 charge type). Bow Shot armour break group mới. Gear đổi: helmet Miracle Ward (giữ anoint Thaumaturgic Generator), amulet Oblivion Collar (anoint Paragon), gloves Skull Knuckle. Flask primary sang Olroth's Resolve (Ward → Guard convert). Keystone giờ gọi tên đúng: Black Scythe Training (Kalguuran) thay vì mô tả "seed 5420 Vorana đổi node Elemental Equilibrium". Phát hiện nghiêm trọng: Cold Resistance rơi từ 75 xuống 39 → max hit cold 14,5k, chỗ chết mới của bộ.

Thêm math chain Evasion/Deflection: dùng công thức chance-to-hit và chance-to-deflect của 0.5 để tính ngược target rating (Evasion ~26.600, Deflection ~17.400 cho evade/deflect 75% cả hai), xác nhận Accuracy quái tham chiếu ≈1.997 khớp giữa hai công thức từ số hiện tại. Đây là hướng nâng EHP tiếp theo sau Cold Resistance, không tốn slot ES/Armour.

### 2026-09-15

Ghi cấu hình CI Frostbolt–Mirror level 92 từ mã của mình; thêm so sánh hai weapon set, hai cách bật Augury và phép thử cap Fire Resistance.

## Relationships

- **related_characters** [i_hate_minion_fmfr — Progress Tracker](/characters/i-hate-minion-fmfr) — character đang chạy build này, snapshot Lv96 và priority actions.
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) giải thích cách cân pool khi thêm support vào buff.
- **related_guides** [Energy Shield recovery](/guides/energy-shield-recovery) để chọn hướng hồi ES sau khi đã bù Cold Resistance.
