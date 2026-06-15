---
template: templates/character-progress-template.md
document_type: character-progress
title: ThaoCamVienSaiGon — Progress Tracker
status: endgame
author: duocnv
created: '2026-06-14'
updated: '2026-06-15'
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

*Live fetch: 2026-06-15 — poe.ninja model snapshot (`data/character-exports/export-ThaoCamVienSaiGon.json`, updatedUtc 2026-06-15T03:41Z). PoB2 0.4 chưa model Tame Beast nên DPS tamed-beast đọc trong client, defense + DPS companion granted lấy từ model.*

- **Life / ES / Mana:** 1,885 / 1,667 / 1,384
- **Spirit:** 439
- **Armour / Evasion / Deflection:** 1,941 (17% phys DR) / 8,625 (48% evade, max 95%) / 7,115 (43% deflect)
- **Block:** 0% — Dunkelhalt buckler nằm ở weapon set 2 dormant (no-weapon-swap)
- **EHP:** 18,080
- **Max hit chịu được:** Phys 3,857 / Fire 11,848 / Cold 9,927 / Lightning 13,118 / Chaos 10,160 — phys là lớp mỏng nhất
- **Resistances:** Fire 72 / Cold 66 / Lightning 75 (overcap 31) / Chaos 72 — cold 66 là chỗ duy nhất còn dưới cap
- **Attributes:** Str 113 / Dex 149 / Int 339
- **Charges:** Endurance 3 / Frenzy 3 / Power 3
- **Movement Speed:** 128%
- **DPS đo được (companion granted, miễn phí spirit):** Bear Wild Protector ~134.8k, Azmerian Wolf ~135.0k, Wolf Pack ~20.5k
- **Carry + aura beast (PoB2 chưa model → DPS đọc client):** Zekoa the Headcrusher, Diretusk Boar, Coconut Crab, Adorned Scarab, Swarming Wasp

## Current Goals

Hai con granted đã tự đẩy ~135k mỗi con mà không tốn spirit, nên north star bây giờ không phải kéo thêm DPS công khai mà là gỡ hai điểm yếu phòng thủ để T15 không còn one-shot. Cold res mới có 66 trong khi fire và chaos đều 72, lightning đã cap dư 31 — cold là lỗ rõ nhất phải bịt trước. Phys max hit chỉ 3,857 (mỏng thêm sau khi đổi viên jewel phòng thủ sang offense), mỏng hơn hẳn các loại element (đều trên 10k), nên lớp chống phys là chỗ EHP rẻ nhất để mua thêm. Mảng damage để dành cho Zekoa: cả engine crit của build dồn vào một con, mọi optimization crit-damage tiếp theo đều phải chảy về nó. Cách quản spirit cho nguyên đàn mình đã viết ở [spirit và reservation](/guides/spirit-and-spirit-reservation); roster cụ thể và lý do từng support nằm trong [build doc đầy đủ](/builds/huntress/0-5-spirit-walker-companion-pack).

## Priority Actions

1. Cap cold res: còn thiếu 9% (66→75). Rẻ nhất là roll một dòng cold trên ring hoặc thay craft cold trên belt — đừng tốn slot quý cho nó.
2. Dày lớp phys EHP: max hit phys 3,857 là trần thấp nhất. Thêm armour hoặc life/ES flat, hoặc một dòng "% phys taken as element" để san đều về các kênh element vốn dày hơn 10k.
3. Đọc crit% và DPS thật của Zekoa trong client (PoB2 trả 0 cho Tame Beast) để biết The Adorned + đám jewel magic đã đủ chưa, hay còn cần thêm crit-damage bonus.

## Gear Summary

Bộ giáp mới xoay hết quanh hai unique craftable. **Chober Chaber** (Runeforged Leaden Greathammer) là vũ khí chính — wield một tay qua Giant's Blood, cho +4 level mọi minion skill và quan trọng hơn là dòng "Increases and Reductions to Minion Damage also affect you" để buff player dùng chung pool với companion. Off-hand **Sylvan's Effigy** mở "any number of Companions", grant luôn Discipline + Azmerian Wolf, cộng 90% companion damage vào target bị mark. Set 2 (Rapture Gnarl + Dunkelhalt) để dormant theo lối no-weapon-swap.

Body là :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} (Grand Regalia) — nguồn chính của đợt lên đời phòng thủ: 309% inc AES, +7 all attr / +11% chaos res / +13 spirit mỗi socket filled, cộng armour áp 10% sang chaos. Nhờ nó character giờ có 1,941 armour và chaos res 72, thay vì gần như bằng 0 như bản Forgotten Warden cũ. Lưu ý cạm bẫy: ba dòng Bonded trên Morior (+12 cold, +12 light, +8 chaos) là ShamanOnlyMods — Huntress không kích được, nên chúng là số 0; client screenshot xác nhận cold đứng yên ở 66 dù Morior có ghi cold. Đừng tính bonded vào res khi craft tiếp.

Engine crit nằm ở jewel: **The Adorned** Diamond nhân 108% effect cho 8 viên magic "of Gripping" (corrupted magic) — bảy viên Authoritative cho Minion Critical Damage Bonus cộng increased Damage, một viên Iconic cho Presence Area cộng crit damage. Cả tám đổ hết vào Zekoa, con companion duy nhất giữ mod Extra Crits; đổi lại không còn viên ES/mana phòng thủ nên ES rớt còn 1,667. Boots **Atziri's Step** cho 30% MS + deflection từ evasion. Amulet Empyrean Locket fractured +4 minion levels, anoint The Soul Meridian (ES recovery). Helm Skull Corona +2 minion levels giữ nguyên.

Đàn aura bot hiện gồm Coconut Crab (Extra Physical Damage Aura + All Damage Ignites), Diretusk Boar (Haste Aura + All Damage Shocks), Adorned Scarab (Energy Shield Aura) và Swarming Wasp (Periodic Invulnerability Aura, lớp anti-wipe). Đọc mod cho đúng: chỉ dòng có chữ "Aura" mới phủ ra đàn, còn Regenerates Life hay Armoured của Scarab chỉ làm chính nó dai. Cơ chế ascendancy và lý do bắt từng con ở [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt).

**Biggest upgrade path:** cap cold res (66→75) và mua thêm phys EHP — hai thứ này gỡ trần one-shot T15 nhanh hơn bất kỳ điểm DPS nào, vì DPS công khai đã dư từ hai con granted.

## Tinh chỉnh gem cho Zekoa

Zekoa đang cắm 5 support: **Supercritical · Feeding Frenzy II · Rapid Attacks II · Tangmazu's Thurible · Muster**. Mình rà nguyên pool support của 0.5 — cả 556 viên thường (cut từ Uncut Support là ra, không giới hạn stash) lẫn 80 viên Lineage (không cut được, phải mua trade) — lọc ra viên nào thật sự gắn được lên một con companion melee phys crit. Hai kết luận nền: **không có support nào cấp crit chance cho minion**, crit chance của Zekoa chỉ đến từ mod Extra Crits, Oblivion Coil và tree nên muốn đẩy crit phải kiếm trên gear; còn về damage thì viên mạnh nhất hóa ra là một Lineage phải mua chứ không phải viên cut được.

Tooltip in-client tab slam chốt mấy số PoB không trả, và đo luôn hai trạng thái A/B. **Có Supercritical:** DPS **969,768**, crit chance **99%**, Critical Damage Bonus **+747%**, attack speed **0.81/giây**, hit có sẵn **~32% chaos** (27.5-41.3k chaos so với 86.6-129.8k phys) — tỉ lệ 31.8% khớp **Unholy Might** (30% of all damage as extra Chaos) bật trong lúc chụp, nên nguồn chaos đó là buff 15s từ Command chứ không cố định. **Lắp Brutality:** DPS rớt còn **851,291** (−12%), chaos mất sạch (total = phys 112.6-168.8k, đúng 1.30× phys cũ), crit damage tụt **747 → 647** vì mất +100% của Supercritical, kèm "Cannot Ignite".

Phép đo đó lật ba thứ mình ước sai lúc tưởng crit chỉ ~22%.

**Supercritical không yếu — nó đáng ~+12%.** Crit đã 99% capped nên cái −20% less crit chance gần như miễn phí (bỏ ra crit nhảy 123% rồi cap về 100%, không mất gì), còn +100% increased Critical Damage Bonus thì cộng vào nền +747% và ăn ở 99% uptime. Bằng chứng: bỏ nó đi thì CDB tụt đúng 100 điểm và DPS mất 12%. Đây là viên crit đang làm việc thật, không phải +3-5% như mình ước trước.

**Brutality loại hẳn — đo ra −12%, là downgrade.** Nó "deal no Chaos/Elemental" xóa sạch ~32% chaos đang có, mà +30% phys không bù nổi (140.7k phys-thuần thấp hơn 142.6k phys+chaos), lại mất luôn crit damage của Supercritical. Cùng lý do, **Impale với Heavy Swing cũng bỏ**: attack speed chỉ 0.81/giây nên Impale stack quá chậm, còn Heavy Swing −10% AS trên nền vốn đã chậm. Trong đám gem cut được, không viên nào thắng nổi Supercritical ở slot này.

**Viên duy nhất đáng đổi là Uul-Netol's Embrace** (Lineage, mua trade) — "gain **40% of Physical as Extra Chaos**". Nó cũng mất crit damage của Supercritical y như Brutality (CDB về 647), nhưng thay vì xóa chaos thì **cộng thêm** 40% phys = +43k chaos chồng lên Unholy Might (thành 70% phys-as-chaos khi cả hai bật), và chạy vô điều kiện không cần Command. Tính trên số đo: base hit 142.6k lên ~185.9k, nhân CDB 647 ở crit 100% ra DPS dự kiến **~1.12M, tức +15%**. Chaos của nó cũng break armour, feed Uruk's. Đây là cú swap dương duy nhất cho slot này, và phải mua chứ không cut ra được — lắp xong đọc thẳng DPS tooltip so với 969,768 là biết chính xác.

Hệ quả gear từ crit 99-100% capped: **crit chance đang overcap ~24%** (bỏ Supercritical còn dư 123%). Mọi dòng crit chance trên gear tương lai là phí — Oblivion Coil hay node nào đang cho crit chance thì đổi sang crit damage hoặc phòng thủ sẽ lời hơn.

Phần còn lại của pool rớt sạch, ghi ra để khỏi đào lại: nhóm "you use yourself" + UsedByProxy không gắn được lên companion (Combo Finisher, Cadence, Defy, Momentum, Minion Pact, Clash, Crescendo, Culmination, Vruun's, Varashta's, Rigwald's); nhóm command-only cần Zekoa là Commandable mà nó không có Command (Bidding, Commandment cho minion −100% damage với skill non-command, Kurgal's); nhóm reserve-spirit bị loại (Atalui's Bloodletting không support skill reserve Spirit, mà companion reserve Spirit); và nhóm minion utility/thủ thuần (Meat Shield −40% damage, Elemental Army chỉ res, Deathmarch với Last Gasp là survivability, Tecrod's chỉ kích khi sắp chết = 0 uptime, Crazed Minions +30% chỉ khi vừa hồi sinh). Bloodlust 30% more thì cần Bleeding mà build không có.

Lưu ý gắn được hay không: Uul-Netol's đọc trên poe2db không bị exclude UsedByProxy/Minion nên gắn lên companion được, giống Heft đang chạy trên Wolf Pack. PoB2 trả DPS 0 cho Tame Beast nhưng tooltip slam in-client thì sống — cứ lắp rồi so DPS với 969,768 baseline là chắc nhất, không cần đoán.

Break engine phys của Zekoa nằm ngoài link của nó: **Uruk's Smelting cắm trên Repulsion** cùng Armour Explosion. Repulsion Wave nổ ~2 lần/giây là nguồn hit tần suất cao, góp break liên tục (mỗi hit vào Marked break 15% phys qua Mark for Death II); full-break thì Uruk's kích perma +20% Physical Damage taken cho cả đàn phys gồm Zekoa. Đặt ở đây đúng hơn Sniper's Mark vì Mark không hit nên không break được giáp. Verify thanh broken-armour trên boss; nếu chưa full-break thì cân để Uruk's thẳng lên Zekoa.

Sniper's Mark mang **Second Wind III**: "twice as many Cooldown Uses" (cộng hồi chút life), Allow Type Cooldown nên ăn được Mark, và khác category với Cooldown Recovery II nên hai cái chạy cùng lúc. Lý do nó đáng ở đây: mark bị crit của Zekoa consume sau ~2-3 hit (~2.5s) rồi phải chờ hết cooldown ~4.6s mới mark lại, uptime nếu để trống chỉ quanh **54%**, mà Sylvan's Effigy cho **+90% companion damage vs Marked** cho *cả đàn* (Bear, Wolf ~135k mỗi con, Zekoa), nên mỗi giây mark tắt là cả đàn mất 90% damage lên boss. Hai charge của Second Wind cho mark lại ngay sau khi consume, không chờ cooldown, kéo uptime lên ~95%, quy ra trung bình bonus vs-Marked từ ~+49% lên ~+86%, tức **~+25% boss DPS cho nguyên đàn**. Đổi lại phải bấm mark thường xuyên hơn (mỗi ~2-3s khi thấy mark tắt). Muốn giữ APM thấp thì thay bằng **Mark of Siphoning II** (leech từ target Marked) làm lớp sustain, nhưng đó là phương án giữ tay, không phải tối ưu damage. Đọc uptime mark in-client một map để chốt 54% là đoán hay thật.

Còn phải làm:

1. **Mua Uul-Netol's Embrace, thay Supercritical** → dự kiến ~1.12M DPS (+15%). Lắp xong so DPS tooltip với 969,768 baseline để chốt.
2. Không mua thì **giữ nguyên Supercritical** — đã đo, không gem cut nào thắng nó ở slot này (Brutality ra −12%, Impale/Heavy Swing kém vì aps chỉ 0.81).
3. Giữ nguyên **Muster · Feeding Frenzy II · Rapid Attacks II · Tangmazu's Thurible** — bốn multiplier top (Muster ~49-56% more theo số Reviving type; Feeding Frenzy 30% more; Tangmazu's Gigantic = 20% more damage + 20% more life + tank; Rapid Attacks nuôi cả cycle mark-crit lẫn break giáp).
4. **Gear: đừng thêm crit chance nữa** (overcap ~24%) — ưu tiên crit damage hoặc phòng thủ; ES đang 1,667 nên một viên jewel ES/mana phòng thủ trở lại là cách rẻ nhất kéo phys EHP về.

## Gem các skill khác

Soi nốt các group skill. Bear (Catha's + Romira's + Rapid Attacks + Magnified + Hulking) và Azmerian Wolf (Kurgal's = nguồn Unholy Might + Muster + Feeding Frenzy + Loyalty + Rapid Attacks) đều cân giữa sub-DPS ~135k với redirect và Lineage utility, không đụng. Phần còn lại:

**Con tamed nào mang damage support vẫn đập ra số thật, đừng gỡ.** Boar, Coconut Crab và Adorned Scarab chạy Muster + Feeding Frenzy II + Rapid Attacks II nên ngoài aura còn deal damage trực tiếp; mấy con cùng template trên roster trước từng đo in-client ~110-112k mỗi con, nên roster mới đọc lại DPS từng con in-client để chốt. Support không tốn spirit nên cứ để chúng đập tối đa, đúng tinh thần "spirit trả cho việc field con đó (aura/utility), damage support free thì vắt kiệt". Riêng Swarming Wasp là con thủ thuần (support dồn vào Magnified Area II + Prolonged Duration II cho Periodic Invulnerability Aura, không Muster/Loyalty), nên không tính nó vào DPS.

Điểm cân nhắc duy nhất: **Feeding Frenzy II cho +15% damage taken**. Con aura bot nào chết nhiều (mất cả aura lẫn vị trí trong lưới redirect) thì đổi *riêng* Feeding Frenzy II của nó sang **Meat Shield II** (−40% taken), chịu mất ~26k DPS con đó đổi lấy nó sống dai. Muster với Rapid Attacks (không downside) thì luôn giữ. Còn nếu chúng sống ổn thì để nguyên, +30% damage đáng hơn.

**Purity of Lightning là spirit chết.** Lightning đang 75 cap + overcap 31, nên +35% lightning res của nó đổ trọn vào overcap = 0 giá trị. Nếu còn reserve spirit thì unsocket lấy headroom — verify panel spirit xem nó có reserve không.

**Discipline nên mang Healing Runes.** Aura granted này đang trống support — nhét Healing Runes: +10 spirit, rút 10% max Runic Ward mỗi 5s heal đàn 200% lượng ward mất, đúng máy sustain cho lưới redirect. Verify granted aura có nhận support không.

**Mace Strike của player nhiều khả năng là rác leveling.** Build no-attack, player không tự đánh, nên Behead II (steal mod khi *player* killing blow rare — companion giết hết nên không proc), Deep Cuts II (bleed), Volcanic Eruption, Rage III đều treo. Không tốn spirit nên vô hại, dọn hay kệ tùy.

## Progress Log

### 2026-06-15

Refresh poe.ninja model (updatedUtc 2026-06-15T03:41Z). Tái cấu trúc đàn tamed sang hướng thủ: bỏ Caustic Crab, Bramble Hulk, Quadrilla; thêm Adorned Scarab (Energy Shield Aura), Swarming Wasp (Periodic Invulnerability Aura, lớp anti-wipe đã săn được), Coconut Crab (Extra Physical Damage Aura + Ignite). Pack rẻ hơn (gross tamed ~203% xuống ~168%), nhưng mất lớp redirect "Damage Taken From Minions First" của Bramble Hulk. Đã thực thi hai cú gem từ audit hôm trước: Uruk's Smelting dời sang Repulsion, Second Wind III vào Sniper's Mark. Một viên jewel phòng thủ đổi sang Iconic of Gripping (Presence AoE + crit) nên ES 1,929 xuống 1,667, EHP 19,432 xuống 18,080, phys max hit 4,120 xuống 3,857, lỗ one-shot phys rộng thêm nên ưu tiên kéo phys EHP lại. Granted DPS lên Bear 134.8k / Azmerian Wolf 135.0k / Wolf Pack 20.5k. Còn mở: cap cold 66→75, mua Uul-Netol's Embrace cho Zekoa.

### 2026-06-14

Audit gem cho Zekoa, có đo A/B in-client. Tooltip slam: Supercritical 969,768 DPS (crit 99%, CDB +747%, ~32% chaos từ Unholy Might); lắp Brutality rớt còn 851,291 (−12%, CDB 647, mất chaos) nên Brutality là downgrade, loại. Supercritical thực ra đáng ~+12% (crit capped 99% nên downside miễn phí), không gem cut nào thắng nó ở slot này. Cú nâng dương duy nhất là mua Uul-Netol's Embrace (40% phys-as-chaos, cộng chồng Unholy Might) thay Supercritical, dự kiến ~1.12M (+15%). Crit chance overcap ~24% nên gear sau đừng thêm crit chance. Vẫn cần sửa Uruk's Smelting đang chết trên Sniper's Mark sang Repulsion.

Snapshot sau đợt quay xe lớn, character lên Lv96. Build bỏ Tyranny's Grip + Forgotten Warden, chuyển sang Chober Chaber cầm một tay qua Giant's Blood + Morior Invictus body. Đổi này kéo armour từ ~0 lên 1,941 và chaos res từ ~25 lên 72, đồng thời thêm Atziri's Step và engine jewel The Adorned + magic "of Gripping" cho crit-damage bonus dồn vào Zekoa. Roster aura cũng thay: Caustic Crab và Bramble Hulk gánh Extra Physical Damage Aura, Quadrilla thêm ES Aura, bỏ Antlion Charger. Số phòng thủ còn hở đúng hai chỗ: cold res 66 và phys max hit 4,120. Mark link đã gắn Cooldown Recovery II như kế hoạch cũ. Hai con granted (Bear + Azmerian Wolf) giờ mỗi con ~127k DPS theo model, gần gấp đôi snapshot trước.

## Relationships

- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build doc đầy đủ cho character này
- **related_mechanics** [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt) — ascendancy mechanic và cách bắt từng beast
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản spirit cho nguyên đàn
- **related** [Return of the Ancients](/guides/return-of-the-ancients) — overview league 0.5
