---
template: templates/character-progress-template.md
document_type: character-progress
title: ThaoCamVienSaiGon — Progress Tracker
status: endgame
author: duocnv
created: '2026-06-14'
updated: '2026-06-14'
character_name: ThaoCamVienSaiGon
character_class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
current_progress: t16-farming
---

# ThaoCamVienSaiGon — Progress Tracker

Huntress / Spirit Walker Lv96 chạy nguyên đàn companion :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} quanh đúng một con carry crit là Zekoa the Headcrusher. Build mới quay xe sang two-hand-in-one-hand: cầm :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} một tay nhờ keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Giant's_Blood"}, chừa tay kia cho :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} mở khóa số companion không giới hạn. Đang farm map T15 ổn định, việc còn lại là cap cold res và dày thêm lớp chống phys.

## Snapshot

*Live fetch: 2026-06-14 — poe.ninja model snapshot (`data/character-exports/export-ThaoCamVienSaiGon.json`, updatedUtc 2026-06-14T09:18Z). PoB2 0.4 chưa model Tame Beast nên DPS tamed-beast đọc trong client, defense + DPS companion granted lấy từ model.*

- **Life / ES / Mana:** 1,885 / 1,929 / 1,384
- **Spirit:** 439
- **Armour / Evasion / Deflection:** 1,941 (17% phys DR) / 8,625 (48% evade, max 95%) / 7,115 (43% deflect)
- **Block:** 0% — Dunkelhalt buckler nằm ở weapon set 2 dormant (no-weapon-swap)
- **EHP:** 19,432
- **Max hit chịu được:** Phys 4,120 / Fire 12,694 / Cold 10,635 / Lightning 14,054 / Chaos 10,628 — phys là lớp mỏng nhất
- **Resistances:** Fire 72 / Cold 66 / Lightning 75 (overcap 31) / Chaos 72 — cold 66 là chỗ duy nhất còn dưới cap
- **Attributes:** Str 113 / Dex 151 / Int 339
- **Charges:** Endurance 3 / Frenzy 3 / Power 3
- **Movement Speed:** 128%
- **DPS đo được (companion granted, miễn phí spirit):** Bear Wild Protector ~126.6k, Azmerian Wolf ~126.9k, Wolf Pack ~17.6k
- **Carry + aura beast (PoB2 chưa model → DPS đọc client):** Zekoa the Headcrusher, Diretusk Boar, Caustic Crab, Bramble Hulk, Quadrilla

## Current Goals

Hai con granted đã tự đẩy ~127k mỗi con mà không tốn spirit, nên north star bây giờ không phải kéo thêm DPS công khai mà là gỡ hai điểm yếu phòng thủ để T15 không còn one-shot. Cold res mới có 66 trong khi fire và chaos đều 72, lightning đã cap dư 31 — cold là lỗ rõ nhất phải bịt trước. Phys max hit chỉ 4,120, mỏng hơn hẳn các loại element (đều trên 10k), nên lớp chống phys là chỗ EHP rẻ nhất để mua thêm. Mảng damage để dành cho Zekoa: cả engine crit của build dồn vào một con, mọi optimization crit-damage tiếp theo đều phải chảy về nó. Cách quản spirit cho nguyên đàn mình đã viết ở [spirit và reservation](/guides/spirit-and-spirit-reservation); roster cụ thể và lý do từng support nằm trong [build doc đầy đủ](/builds/huntress/0-5-spirit-walker-companion-pack).

## Priority Actions

1. Cap cold res: còn thiếu 9% (66→75). Rẻ nhất là roll một dòng cold trên ring hoặc thay craft cold trên belt — đừng tốn slot quý cho nó.
2. Dày lớp phys EHP: max hit phys 4,120 là trần thấp nhất. Thêm armour hoặc life/ES flat, hoặc một dòng "% phys taken as element" để san đều về các kênh element vốn dày hơn 10k.
3. Đọc crit% và DPS thật của Zekoa trong client (PoB2 trả 0 cho Tame Beast) để biết The Adorned + đám jewel magic đã đủ chưa, hay còn cần thêm crit-damage bonus.

## Gear Summary

Bộ giáp mới xoay hết quanh hai unique craftable. **Chober Chaber** (Runeforged Leaden Greathammer) là vũ khí chính — wield một tay qua Giant's Blood, cho +4 level mọi minion skill và quan trọng hơn là dòng "Increases and Reductions to Minion Damage also affect you" để buff player dùng chung pool với companion. Off-hand **Sylvan's Effigy** mở "any number of Companions", grant luôn Discipline + Azmerian Wolf, cộng 90% companion damage vào target bị mark. Set 2 (Rapture Gnarl + Dunkelhalt) để dormant theo lối no-weapon-swap.

Body là :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} (Grand Regalia) — nguồn chính của đợt lên đời phòng thủ: 309% inc AES, +7 all attr / +11% chaos res / +13 spirit mỗi socket filled, cộng armour áp 10% sang chaos. Nhờ nó character giờ có 1,941 armour và chaos res 72, thay vì gần như bằng 0 như bản Forgotten Warden cũ. Lưu ý cạm bẫy: ba dòng Bonded trên Morior (+12 cold, +12 light, +8 chaos) là ShamanOnlyMods — Huntress không kích được, nên chúng là số 0; client screenshot xác nhận cold đứng yên ở 66 dù Morior có ghi cold. Đừng tính bonded vào res khi craft tiếp.

Engine crit nằm ở jewel: **The Adorned** Diamond nhân 108% effect cho 7 viên magic "Authoritative ... of Gripping" (corrupted magic), mỗi viên ~22-24% Minion Critical Damage Bonus → tổng crit-damage bonus sau khi nhân đôi đổ hết vào Zekoa, con companion duy nhất giữ mod Extra Crits. Boots **Atziri's Step** cho 30% MS + deflection từ evasion. Amulet Empyrean Locket fractured +4 minion levels, anoint The Soul Meridian (ES recovery). Helm Skull Corona +2 minion levels giữ nguyên.

Đàn aura bot đã đổi so với build doc cũ: giờ có hai con khiêng Extra Physical Damage Aura (Caustic Crab + Bramble Hulk) thay vì Antlion Charger, hai nguồn All Damage Shocks (Diretusk Boar + Caustic Crab), thêm Quadrilla cho Energy Shield Aura. Cơ chế ascendancy và lý do bắt từng con ở [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt).

**Biggest upgrade path:** cap cold res (66→75) và mua thêm phys EHP — hai thứ này gỡ trần one-shot T15 nhanh hơn bất kỳ điểm DPS nào, vì DPS công khai đã dư từ hai con granted.

## Progress Log

### 2026-06-14

Snapshot sau đợt quay xe lớn, character lên Lv96. Build bỏ Tyranny's Grip + Forgotten Warden, chuyển sang Chober Chaber cầm một tay qua Giant's Blood + Morior Invictus body. Đổi này kéo armour từ ~0 lên 1,941 và chaos res từ ~25 lên 72, đồng thời thêm Atziri's Step và engine jewel The Adorned + magic "of Gripping" cho crit-damage bonus dồn vào Zekoa. Roster aura cũng thay: Caustic Crab và Bramble Hulk gánh Extra Physical Damage Aura, Quadrilla thêm ES Aura, bỏ Antlion Charger. Số phòng thủ còn hở đúng hai chỗ: cold res 66 và phys max hit 4,120. Mark link đã gắn Cooldown Recovery II như kế hoạch cũ. Hai con granted (Bear + Azmerian Wolf) giờ mỗi con ~127k DPS theo model, gần gấp đôi snapshot trước.

## Relationships

- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build doc đầy đủ cho character này
- **related_mechanics** [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt) — ascendancy mechanic và cách bắt từng beast
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản spirit cho nguyên đàn
- **related** [Return of the Ancients](/guides/return-of-the-ancients) — overview league 0.5
