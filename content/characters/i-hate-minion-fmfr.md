---
template: templates/character-progress-template.md
document_type: character-progress
title: i_hate_minion_fmfr — Progress Tracker
status: endgame
author: duocnv
created: '2026-09-17'
updated: '2026-09-17'
character_name: i_hate_minion_fmfr
character_class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.3
current_progress: t16-farming
---

# i_hate_minion_fmfr — Progress Tracker

Mercenary / Gemling Legionnaire Lv96 chạy [Frostbolt Mirror of Refraction](/builds/mercenary/0-5-gemling-atziris-rule-mirror-refraction) trong event league Forbidden Rites (tree vẫn nhánh PassiveTree-0.5). Char này bỏ hẳn hướng minion của char cũ, chuyển sang CI Frostbolt tự đánh — không còn Spirit Walker, không còn skeleton, không dùng lại phần lớn gear cũ. Chỉ còn một chỗ phải sửa: **Cold Resistance đang ở 39% (dưới cap 36 điểm)** và đó là nơi hit cold 15k xuyên qua Evasion 56% giết mình, không phải thiếu damage.

## Snapshot

*Last fetch: 2026-09-17 — poe.ninja model live, `updatedUtc` 2026-09-17T01:01:44Z. Fetch qua ego-browser page-context tại tab poe.ninja đã login, endpoint `/poe2/api/account/character/forbiddenrites/i_hate_minion_fmfr/17`. Raw JSON: `data/character-exports/export-i_hate_minion_fmfr.json`, PoB code: `data/character-exports/export-i_hate_minion_fmfr-pob.txt`.*

- **ES / Runic Ward / Life:** 9,126 / 81 / 1 (Chaos Inoculation)
- **Armour / Evasion / Deflection:** 2,405 (phys DR 33%) / 12,257 (evade 56%, max 95%) / 9,805 (deflect 54%, damage prevented 49%)
- **Mana / Spirit:** 969 / 215
- **EHP:** 72,068
- **Resistances:** Fire **75** (overcap +3) / **Cold 39** (dưới cap 36 điểm) / Lightning **75** (+26) / Chaos **100** (CI)
- **Max hit chịu được:** Phys **9,666** / Fire 33,019 / **Cold 14,520** (thấp nhất) / Lightning 33,019 / Chaos ∞
- **Item Rarity:** 129%
- **Attributes:** Str 248 / Dex 91 / Int 170
- **Charges:** Endurance 3 / Frenzy 3 / Power 3 — cả ba nuôi Charge Regulation persistent buff
- **Movement Speed:** 136%
- **Main DPS:** Frostbolt qua Mirror of Refraction loop; PoB2 output đơn lẻ chưa mô phỏng đầy đủ chain projectile copy + snapshot đổi vũ khí, sẽ đo qua kill speed trong T15+ map. Chi tiết cơ chế + support chain ở [build doc](/builds/mercenary/0-5-gemling-atziris-rule-mirror-refraction).

Overcap fire +3, lightning +26 là phần dư mua overcap để chịu Elemental Weakness / curse giảm res. Cold thì ngược lại — đang thiếu chứ không dư, và chênh 36 điểm là chênh giữa "chịu được hit ele cỡ 33k" với "chỉ chịu 14,5k".

## Bonded mods vẫn chết trên bộ này

`enableBondedMods = False` giống char cũ: Gemling không kích hoạt được Bonded rune. Đếm ra 10 dòng Bonded đang treo mà không chạy: gloves 2 (+20 life, +20 mana), boots 3 (+32 life, +32 mana, **16% CDR**), body 4 (+60 life, +60 mana, +20% evasion, +5% skill quality), weapon 2 (12% mana cost → life, 20% fully broken armour), offhand 0, sceptre... không dùng sceptre nữa, staff 2 (5% max life, Archon 30% faster). Đau nhất vẫn là boots — dòng "16% Cooldown Recovery Rate" ở dạng Bonded, nên Morbid March **không thực sự cho CDR nào** dù tooltip hiển thị. Muốn CDR trên slot boots phải craft lại rune sống thay Bonded.

Con số ở Snapshot đã trừ toàn bộ Bonded ra rồi vì lấy thẳng từ model. Khi tính bất kỳ stat nào từ tooltip gear trong client, bỏ qua mọi dòng có tiền tố `Bonded:`.

## Current Goals

Res đang là ưu tiên tuyệt đối — nhưng KHÁC char cũ, ở đây là **Cold** chứ không phải phys. Với Cold Resistance 39%, một cold hit 15k trúng thẳng đủ one-shot; Ice Nova, Cold Beam của boss, và Cold Slam đều nguy hiểm hơn nhiều so với đồng lượng damage ở kênh khác. Cho tới khi bù được ~40% Cold Resistance để đưa về cap 75%, mọi thứ khác đều xếp sau. Lần đổi gear trước (Empyrean Vise → Skull Knuckle, Empyrean Torc → Oblivion Collar) đã bỏ trống ba nguồn cold; giờ chỉ còn Agony Hold (+38 sau Ingenuity thành +49) và Horror Whorl (+24 all → +31 all) giữ lại — không đủ.

Sau khi cap Cold: đo uptime Runic Ward + Guard của Olroth's Resolve trong T15+ map để quyết định giữ flask này hay đổi sang flask khác. Pool Ward chỉ 81 nghĩa là Guard tạo ra không đủ đỡ hit lớn, nhưng cơ chế "Gain Guard equal to Current Runic Ward for 10 seconds when Effect ends" chưa được đo empirical — phải xem trong game rồi mới kết luận.

## Priority Actions

1. **Craft/mua Miracle Ward mới** thay hai dòng Fire hoặc Lightning Resistance sang Cold Resistance. Cả hai kênh đó đều có overcap (Fire +3, Lightning +26) nên đổi 30-40% qua Cold là swap gọn nhất, không mất anoint Thaumaturgic Generator. Search `status: securable`, rank top-10 theo Cold Resistance với constraint giữ anoint slot.
2. **Đo Runic Ward regen trong game** khi cast Olroth's Resolve: 3.7% × 81 Ward = ~3 ward/s trong effect duration, cộng "Gain Guard equal to Current Ward for 10 seconds when Effect ends" cho một mảng guard tạm. Nếu con số trong client trùng math này thì flask này giá trị, không thì đổi sang flask khác.
3. **Craft lại rune boots Morbid March.** Ba dòng Bonded ở đó (+32 life, +32 mana, +16% CDR) đang chết; đổi sang rune sống mang CDR hoặc Cold Resistance trực tiếp là lấy lại một khoảng thủ mà không tốn slot.
4. **Verify Frost Wall uptime.** Với Cast on Critical + Charge Regulation (Power Charge = 20-26% more crit chance) trigger nhiều hơn bản Lv92; đếm số Frost Wall visible trong 10 giây map để check nhịp có ổn không, hay bị over-trigger dẫn tới mất mana.
5. **Verify Charge fall-off scenario.** Charge Regulation consume 1 charge mỗi loại mỗi 10s; boss dài hoặc pack thưa có thể làm charge tụt về 0 → mất luôn buff more crit / more AES / more skill speed. Test bằng cách vào boss T15+ single-target và xem charge counter khi combat kéo dài trên 30 giây.

## Gear Summary

Bộ đắt: **:wiki-link{url="https://www.poe2wiki.net/wiki/Widowhail"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Drillneck"}** ở weapon set 1 (273% quiver bonus × 54% damage / 57% crit per pierce), **:wiki-link{url="https://www.poe2wiki.net/wiki/Atziri%27s_Rule"}** ở weapon set 2 grant Mirror of Refraction lvl20, **:wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"}** body 4-socket đầy (385% AES + 40% global AES per socket + +52 Spirit), **:wiki-link{url="https://www.poe2wiki.net/wiki/Ingenuity"}** belt 29%/29% amp cho hai ring.

Slot rare: Miracle Ward helm (+42% Fire/+42% Lightning, anoint Thaumaturgic Generator), Oblivion Collar amulet (+4 spell level, anoint Paragon), Horror Whorl ring (+24 all ele + +54 Lightning), Agony Hold ring (+38 Cold — chỗ duy nhất còn Cold), Skull Knuckle gloves (+22 Fire rune sống, +43% eva, 23% crit damage, deflect = 23% eva), Morbid March boots (+56 ES, 98% inc ES, IIR — rune CDR chết vì Bonded).

Flask: **:wiki-link{url="https://www.poe2wiki.net/wiki/Olroth%27s_Resolve"}** làm primary (Ward regen + Ward → Guard convert khi effect end); Lavianga's Spirits chạy constant với 74% reduced amount; For Utopia (200% armour during effect); Rite of Passage (Spirit Of The Ox 19s).

Jewels: Megalomaniac (Spell Haste + Forthcoming), Heart of the Well, From Nothing, **:wiki-link{url="https://www.poe2wiki.net/wiki/Heroic_Tragedy"}** timeless jewel seed 5420 dòng Vorana → conquer keystone **:wiki-link{url="https://www.poe2wiki.net/wiki/Black_Scythe_Training"}** (Str thay vì cho life thì cho ES; Str 248 → +124% inc ES), một Time-Lost Emerald, bốn rare Emerald.

**Biggest upgrade path:** Cold Resistance. Với 36 điểm dưới cap thì mọi thứ khác đều lệch ưu tiên — không phải damage, không phải ES pool, không phải flask.

## Progress Log

### 2026-09-17

Snapshot đầu tiên của char sau khi đổi hướng hoàn toàn từ char minion cũ (OneMoreMinionMamy). Đây không phải rename hay respec — char mới hoàn toàn, gear khác, tree khác, không dùng lại slot skeleton/Unearth. Điểm dời chỗ so với build tham chiếu:

- Char cũ chạy Spirit 353 nuôi minion swarm; char mới chạy Spirit 215 dùng cho Charge Regulation 30 + Blasphemy Temporal Chains + Arctic Armour + các buff aura khác.
- Char cũ có 4 kênh res cap sạch (Fire 75+50 / Cold 75+60 / Light 75+107 / Chaos 75+9), lỗ duy nhất là phys max hit 4,565. Char mới đảo ngược: Fire cap +3, Cold **thủng 36**, Lightning cap +26, Chaos 100 (CI); phys max hit đã lên 9,666 nhờ CI + Charge Regulation + Ingenuity, không còn là chỗ chết.
- Char cũ dùng Mageblood carry res (Bismuth + Amethyst nhân đôi qua Legacy of Gold trùng); char mới không đeo Mageblood, thay bằng Ingenuity — hai belt archetype khác nhau, không so trực tiếp được.

Char này thay OneMoreMinionMamy làm main; char cũ đã inactive trên poe.ninja và file [progress note của nó](/characters/one-more-minion-mamy) chuyển sang trạng thái retired.

## Relationships

- **related_builds** [Frostbolt Mirror of Refraction Gemling](/builds/mercenary/0-5-gemling-atziris-rule-mirror-refraction) — build doc đầy đủ của chính character này: cơ chế Mirror + Rakiata's Flow + Dialla's Desire, gem chain, ascendancy tree, failure modes.
- **references** [OneMoreMinionMamy — Progress Tracker](/characters/one-more-minion-mamy) — character trước của account, đã retired sau khi chuyển sang Frostbolt CI này.
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản pool 215 Spirit cho Charge Regulation + Blasphemy + các buff aura.
- **related_guides** [Energy Shield recovery](/guides/energy-shield-recovery) — hướng hồi ES sau khi cap Cold Resistance.
