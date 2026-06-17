---
template: templates/character-progress-template.md
document_type: character-progress
title: ThaoCamVienSaiGon — Progress Tracker
status: endgame
author: duocnv
created: '2026-06-14'
updated: '2026-06-16'
character_name: ThaoCamVienSaiGon
character_class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
current_progress: t16-farming
---

# ThaoCamVienSaiGon — Progress Tracker

Huntress / Spirit Walker Lv96 chạy nguyên đàn companion :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} quanh đúng một con carry crit là Zekoa the Headcrusher. Build mới quay xe sang two-hand-in-one-hand: cầm :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} một tay nhờ keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Giant's_Blood"}, chừa tay kia cho :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} mở khóa số companion không giới hạn. Đang farm map T15 ổn định, việc còn lại là cap lại cold và fire res vừa thủng sau đợt đổi sang hai nhẫn Unset.

## Snapshot

*Live fetch: 2026-06-16 — poe.ninja model snapshot (`data/character-exports/export-ThaoCamVienSaiGon.json`, updatedUtc 2026-06-16T12:49Z, model 135327768, refresh thủ ngay trước khi đọc nên khớp client). PoB2 0.4 chưa model Tame Beast nên DPS tamed-beast đọc trong client; defense lấy từ model.*

- **Life / ES / Mana:** 1,932 / 1,667 / 1,395 — thêm Runic Ward 121
- **Spirit:** 439
- **Armour / Evasion / Deflection:** 1,670 (15% phys DR) / 7,465 (45% evade, max 95%) / 6,158 (39% deflect)
- **Block:** 0% — Dunkelhalt buckler nằm ở weapon set 2 dormant (no-weapon-swap)
- **EHP:** 16,401
- **Max hit chịu được:** Phys 5,276 / Fire 11,120 / Cold 5,115 / Lightning 18,268 / Chaos 9,531 — cold và phys là hai lớp mỏng nhất, cold mỏng vì res đang 0
- **Resistances:** Fire 57 / Cold 0 / Lightning 75 (overcap 21) / Chaos 55 — cold rơi thẳng về 0 sau khi đổi sang hai nhẫn Unset (mất hết res nhẫn), fire cũng tụt dưới cap
- **Attributes:** Str 155 / Dex 147 / Int 356
- **Charges:** Endurance 3 / Frenzy 3 / Power 3
- **Movement Speed:** 128%
- **Carry + companion (PoB2 chưa model → DPS đọc client):** Zekoa the Headcrusher (carry), hai con granted Bear Wild Protector + Azmerian Wolf, Wolf Pack, cộng đàn damage/utility (Fungal Wolf, Hyena Demon, Bramble Rhoa, Swarming Wasp) và hai con body-block (Quill Crab, Coconut Crab)

## Current Goals

Hai con granted vẫn tự đẩy DPS mà không tốn spirit, nên north star không phải kéo thêm DPS công khai mà là vá lại phòng thủ vừa thủng sau đợt đổi hai nhẫn Unset. Đổi nhẫn lấy được 2 skill slot, minion damage và minion crit damage bonus trên cả hai cây, nhưng nhẫn Unset không có res implicit nên cold rơi thẳng về 0 và fire tụt còn 57 — đây là lỗ one-shot mới, gấp hơn cả phys. Cold max hit chỉ còn 5,115 vì res 0, ngang phys 5,276, trong khi lightning và fire đều trên 11k. Cấp nhất bây giờ là kéo cold và fire về cap bằng găng, belt và flask, vì toàn bộ gánh nặng res giờ dồn về ba chỗ đó khi nhẫn đã bỏ trống res. Mảng damage để dành cho Zekoa: cả engine crit của build dồn vào một con, mọi optimization crit-damage tiếp theo đều phải chảy về nó. Cách quản spirit cho nguyên đàn mình đã viết ở [spirit và reservation](/guides/spirit-and-spirit-reservation); roster cụ thể và lý do từng support nằm trong [build doc đầy đủ](/builds/huntress/0-5-spirit-walker-companion-pack).

## Priority Actions

1. Cap cold 0→75: hai nhẫn Unset không cõng res, belt Dusk Lock mới có +53 cold, nên cold đứng gần đáy. Roll cold trên găng (đang trống cold) cộng một charm/flask cold, hoặc craft thêm cold lên belt. Đây là lỗ one-shot khẩn nhất.
2. Cap fire 57→75: găng đang +27 fire, belt +46 fire desecrated — thiếu ~18%, dồn lên găng hoặc amulet.
3. Đọc crit% và DPS thật của Zekoa trong client (PoB2 trả 0 cho Tame Beast) để biết The Adorned cộng đám jewel magic cộng minion crit damage bonus trên hai nhẫn (25%+22%) đã đủ chưa, hay còn cần thêm.

## Skill Gems & Links

Bản fetch live 2026-06-16 ghi 15 nhóm skill đang cắm. Carry là :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} Zekoa, mọi con khác chia hai vai: damage support free hoặc aura/body-block.

- **Zekoa the Headcrusher (carry):** Rage III + Feeding Frenzy II + Rapid Attacks II + Muster + **Tangmazu's Thurible**. Rage III giữ 30 rage cho +30% more attack damage, Tangmazu cho Gigantic cộng mượn evasion/deflection của mình để Zekoa tự tank. Phân tích sâu slot thứ năm này (Rage III vs Supercritical vs Uul-Netol's) nằm ở section *Tinh chỉnh gem cho Zekoa* bên dưới.
- **Bear (Wild Protector, granted):** **Catha's Brilliance** + Rapid Attacks II + **Romira's Requital** + Magnified Area II + Hulking Minions. Romira's đặt ở đây vì Bear granted, chết tự hồi sinh nên lưới redirect không vắng lâu.
- **Azmerian Wolf (granted):** Feeding Frenzy II + **Kurgal's Leash** + Muster + Loyalty + Rapid Attacks II. Một phím Command xả Eternal Hunt và kích Unholy Might 15s cho cả mình lẫn Wolf.
- **Wolf Pack:** Minion Splash II + **Uruk's Smelting** + **Heft** + Muster + Feeding Frenzy II — engine clear kiêm nguồn full-break, Heft cho 30% more max phys hit damage.
- **Fungal Wolf · Hyena Demon · Bramble Rhoa (damage):** mỗi con Rage III + Loyalty + Rapid Attacks II + Muster + Feeding Frenzy II — đủ rage, attack speed và hai multiplier minion damage, support free nên cứ để đập tối đa.
- **Swarming Wasp:** Loyalty + Rapid Attacks II + Rage III + Muster + Feeding Frenzy II — đang chạy full damage support, đồng thời phát Periodic Invulnerability Aura làm lớp anti-wipe.
- **Quill Crab · Coconut Crab (body-block):** Rage III + Loyalty + **Meat Shield II** + Last Gasp + Minion Mastery. Meat Shield đổi 40% less damage lấy 40% less taken nên hai con chỉ đứng phủ aura và chặn đường.
- **Sniper's Mark:** Mark for Death II + **Cooldown Recovery II** + Eternal Mark + Charged Mark + **Second Wind III**. Hai cooldown gem giữ uptime mark cao vì Sylvan's Effigy chỉ phát +90% companion damage vs Marked khi mark còn sống.
- **Player utility:** Ghost Dance (+ Cooldown Recovery II + Clarity II) hồi ES theo evasion; **Discipline** (granted, không reserve) chạy ES; **Purity of Lightning** (granted từ Chober Chaber) giữ lightning res; Parry ở weapon set 2 dormant theo lối no-weapon-swap.

## Gear Summary

Bộ giáp mới xoay hết quanh hai unique craftable. **Chober Chaber** (Runeforged Leaden Greathammer) là vũ khí chính — wield một tay qua Giant's Blood, cho +4 level mọi minion skill và quan trọng hơn là dòng "Increases and Reductions to Minion Damage also affect you" để buff player dùng chung pool với companion. Off-hand **Sylvan's Effigy** mở "any number of Companions", grant luôn Discipline + Azmerian Wolf, cộng 90% companion damage vào target bị mark. Set 2 (Rapture Gnarl + Dunkelhalt) để dormant theo lối no-weapon-swap.

Body là :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} (Grand Regalia) — nguồn chính của đợt lên đời phòng thủ: 309% inc AES, +7 all attr / +11% chaos res / +13 spirit mỗi socket filled, cộng armour áp 10% sang chaos. Nhờ nó character giờ có 1,670 armour và chaos res 55, thay vì gần như bằng 0 như bản Forgotten Warden cũ. Lưu ý cạm bẫy: ba dòng Bonded trên Morior (+12 cold, +12 light, +8 chaos) là ShamanOnlyMods — Huntress không kích được, nên chúng là số 0; client xác nhận cold không nhận dòng Bonded đó. Đừng tính bonded vào res khi craft tiếp.

Engine crit nằm ở jewel: **The Adorned** Diamond nhân 108% effect cho 8 viên magic "of Gripping" (corrupted magic) — bảy viên Authoritative cho Minion Critical Damage Bonus cộng increased Damage, một viên Iconic cho Presence Area cộng crit damage. Cả tám đổ hết vào Zekoa, con companion duy nhất giữ mod Extra Crits; đổi lại không còn viên ES/mana phòng thủ nên ES rớt còn 1,667. Boots **Atziri's Step** cho 30% MS + deflection từ evasion. Amulet Empyrean Locket fractured +4 minion levels, anoint The Soul Meridian (ES recovery). Helm Skull Corona +2 minion levels giữ nguyên.

Hai nhẫn giờ đều là Unset (Corruption Finger + Morbid Circle), gánh minion damage cộng minion crit damage bonus cộng 2 skill slot — chi tiết ở section *Hai nhẫn Unset* bên dưới. Roster companion live và support từng con nằm ở section *Skill Gems & Links* ở trên; đọc mod beast cho đúng vì chỉ dòng có chữ "Aura" mới phủ ra cả đàn, còn Regenerates Life hay Armoured chỉ làm chính con đó dai. Cơ chế ascendancy và lý do bắt từng con ở [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt).

**Biggest fix path:** vá lại res vừa thủng sau đợt đổi nhẫn — cold 0 và fire 57 là lỗ one-shot mới, kéo cả hai về cap bằng găng, belt và flask. DPS công khai đã dư từ hai con granted nên res là thứ gỡ trần one-shot T15 nhanh hơn bất kỳ điểm DPS nào.

## Hai nhẫn Unset đổi xong, res phải dồn về găng và belt

Cả hai slot nhẫn giờ là :wiki-link{url="https://www.poe2wiki.net/wiki/Unset_Ring"}: **Corruption Finger** (+51 life, +26 Dex, Minions deal 27% inc Damage, Minions +8% atk/cast speed, **Minions +25% Critical Damage Bonus**, +13 mana) và **Morbid Circle** (+96 life, +30 Str, 9-15 cold to attacks, Minions deal 25% inc Damage, Minions +10% atk/cast speed, **Minions +22% Critical Damage Bonus**). Đổi này được 2 skill slot, ~52% minion increased damage, ~47% minion crit damage bonus và +18% minion attack/cast speed dồn vào đàn, cộng Dex với Str gỡ kẹt attribute.

Điểm phải nhớ cho lần craft sau: **ring CÓ roll được "Minions have increased Critical Damage Bonus"** — cả hai viên đang đeo đều có nó là dòng explicit, nên không cần ép dòng đó về jewel nữa; The Adorned với đám "of Gripping" vẫn gánh phần lớn crit damage bonus, ring chỉ là nguồn cộng thêm. Bù lại Unset không có res implicit và hai viên này không roll res, nên đổi xong **cold rơi thẳng về 0, fire còn 57** — toàn bộ gánh nặng res dồn về găng, belt, amulet và flask.

Hai chỗ res cõng được giờ là găng và belt, đó là nơi phải vá cap:

**Găng rare**, giữ base evasion để khỏi tụt eva (Blood Talons đang +27 fire/+39 light, thiếu cold). Cần cõng fire với cold:
- Prefix: +120–149 maximum Life
- Prefix: % increased Evasion Rating
- Suffix: +41–45% Fire Resistance
- Suffix: +41–45% Cold Resistance

**Belt** (Dusk Lock đang +53 cold/+54 light/+46 fire desecrated, 2 charm slot) — nếu craft tiếp thì ưu tiên thêm cold và flat Armour:
- Suffix: +41–45% Cold Resistance (kéo cold lên cùng găng)
- Prefix: flat Armour, đệ thêm phys EHP

Sau khi găng với belt cõng đủ res: cold về 75, fire về 75, lightning vẫn cap (đang overcap 21), chaos giữ 55. Hai skill slot mới đã có, ~47% minion crit damage bonus nằm trên nhẫn thay vì jewel, deflection nguyên vẹn nhờ giữ Atziri's Step.

## Link trade

Search dưới sort giá tăng dần, click mở thẳng trong Chrome đã login. Floor là mốc khởi đầu, kéo min trên form khi mở. Jewel với gear lọc `securable` cho mua ngay; unique đắt như The Adorned và Uul-Netol's để `any` cho thấy cả hàng roll cao phải whisper.

**Lên minion DPS, chỗ đổ tiền chính:**

- [Uul-Netol's Embrace](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22any%22%7D%2C%22name%22%3A%22Uul-Netol%27s%20Embrace%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): Lineage support, cú nâng đơn lớn nhất, thay Supercritical lên ~1.12M, +15% so với 969,768 hiện tại
- [Jewel "of Gripping" corrupted magic](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22securable%22%7D%2C%22filters%22%3A%7B%22type_filters%22%3A%7B%22filters%22%3A%7B%22category%22%3A%7B%22option%22%3A%22jewel%22%7D%2C%22rarity%22%3A%7B%22option%22%3A%22magic%22%7D%7D%7D%2C%22misc_filters%22%3A%7B%22filters%22%3A%7B%22corrupted%22%3A%7B%22option%22%3A%22true%22%7D%7D%7D%7D%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_1854213750%22%2C%22value%22%3A%7B%22min%22%3A22%7D%7D%2C%7B%22id%22%3A%22explicit.stat_1589917703%22%2C%22value%22%3A%7B%22min%22%3A18%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): engine jewel minion crit damage bonus cộng minion damage, The Adorned nhân ×108% mỗi viên, mua roll cao hơn đám đang đeo
- [Jewel minion damage + minion asp, corrupted magic](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22securable%22%7D%2C%22filters%22%3A%7B%22type_filters%22%3A%7B%22filters%22%3A%7B%22category%22%3A%7B%22option%22%3A%22jewel%22%7D%2C%22rarity%22%3A%7B%22option%22%3A%22magic%22%7D%7D%7D%2C%22misc_filters%22%3A%7B%22filters%22%3A%7B%22corrupted%22%3A%7B%22option%22%3A%22true%22%7D%7D%7D%7D%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_1589917703%22%2C%22value%22%3A%7B%22min%22%3A12%7D%7D%2C%7B%22id%22%3A%22explicit.stat_3091578504%22%2C%22value%22%3A%7B%22min%22%3A3%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): "Authoritative of Orchestration", minion damage cộng attack/cast speed, The Adorned nhân ×108%; jewel tăng nhịp đánh Zekoa (aps đang 0.81/giây)
- [The Adorned, % effect cao hơn 108](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22any%22%7D%2C%22name%22%3A%22The%20Adorned%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): scale cả 8 viên jewel cùng lúc
- [Amulet minion + tamed companion + spirit](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22securable%22%7D%2C%22filters%22%3A%7B%22type_filters%22%3A%7B%22filters%22%3A%7B%22category%22%3A%7B%22option%22%3A%22accessory.amulet%22%7D%7D%7D%7D%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_2162097452%22%2C%22value%22%3A%7B%22min%22%3A3%7D%7D%2C%7B%22id%22%3A%22explicit.stat_448592698%22%2C%22value%22%3A%7B%22min%22%3A2%7D%7D%2C%7B%22id%22%3A%22explicit.stat_3981240776%22%2C%22value%22%3A%7B%22min%22%3A40%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): chỉ mua nếu beat Empyrean Locket +4 minion fractured đang đeo

**Res dồn hết vào găng + belt:**

- [Găng: Life 110+ / Dex 30+ / Fire 40+ / Cold 40+](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22securable%22%7D%2C%22filters%22%3A%7B%22type_filters%22%3A%7B%22filters%22%3A%7B%22category%22%3A%7B%22option%22%3A%22armour.gloves%22%7D%7D%7D%7D%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22pseudo.pseudo_total_life%22%2C%22value%22%3A%7B%22min%22%3A110%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_dexterity%22%2C%22value%22%3A%7B%22min%22%3A30%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_fire_resistance%22%2C%22value%22%3A%7B%22min%22%3A40%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_cold_resistance%22%2C%22value%22%3A%7B%22min%22%3A40%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): nhớ pick base Evasion
- [Belt: Life 130+ / Str 30+ / Light 40+ / Chaos 20+](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22securable%22%7D%2C%22filters%22%3A%7B%22type_filters%22%3A%7B%22filters%22%3A%7B%22category%22%3A%7B%22option%22%3A%22accessory.belt%22%7D%7D%7D%7D%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22pseudo.pseudo_total_life%22%2C%22value%22%3A%7B%22min%22%3A130%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_strength%22%2C%22value%22%3A%7B%22min%22%3A30%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_lightning_resistance%22%2C%22value%22%3A%7B%22min%22%3A40%7D%7D%2C%7B%22id%22%3A%22pseudo.pseudo_total_chaos_resistance%22%2C%22value%22%3A%7B%22min%22%3A20%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D): thêm flat Armour cho phys EHP

Giá live mỗi slot mình chưa rank. Mở tab pathofexile.com đã login rồi bật Playwriter, bảo lúc nào cần thì mình rank top-10 securable theo stat mục tiêu mỗi slot.

## Tinh chỉnh gem cho Zekoa

Zekoa đang cắm 5 support: **Rage III · Feeding Frenzy II · Rapid Attacks II · Muster · Tangmazu's Thurible**. Slot thứ năm hiện là Rage III để Zekoa giữ 30 rage cho +30% more attack damage; bốn slot kia là multiplier cố định. Quanh slot Rage III đó mình đã rà nguyên pool support của 0.5 — cả 556 viên thường (cut từ Uncut Support là ra, không giới hạn stash) lẫn 80 viên Lineage (không cut được, phải mua trade) — lọc ra viên nào thật sự gắn được lên một con companion melee phys crit, và đo A/B in-client để biết nên để Rage III hay đổi sang một engine damage. Hai kết luận nền: **không có support nào cấp crit chance cho minion**, crit chance của Zekoa chỉ đến từ mod Extra Crits, minion crit damage bonus trên gear và tree nên muốn đẩy crit phải kiếm trên gear; còn về damage thì viên mạnh nhất hóa ra là một Lineage phải mua chứ không phải viên cut được.

Tooltip in-client tab slam chốt mấy số PoB không trả, và đo luôn hai trạng thái A/B. **Có Supercritical:** DPS **969,768**, crit chance **99%**, Critical Damage Bonus **+747%**, attack speed **0.81/giây**, hit có sẵn **~32% chaos** (27.5-41.3k chaos so với 86.6-129.8k phys) — tỉ lệ 31.8% khớp **Unholy Might** (30% of all damage as extra Chaos) bật trong lúc chụp, nên nguồn chaos đó là buff 15s từ Command chứ không cố định. **Lắp Brutality:** DPS rớt còn **851,291** (−12%), chaos mất sạch (total = phys 112.6-168.8k, đúng 1.30× phys cũ), crit damage tụt **747 → 647** vì mất +100% của Supercritical, kèm "Cannot Ignite".

Phép đo đó lật ba thứ mình ước sai lúc tưởng crit chỉ ~22%.

**Supercritical không yếu — nó đáng ~+12%.** Crit đã 99% capped nên cái −20% less crit chance gần như miễn phí (bỏ ra crit nhảy 123% rồi cap về 100%, không mất gì), còn +100% increased Critical Damage Bonus thì cộng vào nền +747% và ăn ở 99% uptime. Bằng chứng: bỏ nó đi thì CDB tụt đúng 100 điểm và DPS mất 12%. Đây là viên crit đang làm việc thật, không phải +3-5% như mình ước trước.

**Brutality loại hẳn — đo ra −12%, là downgrade.** Nó "deal no Chaos/Elemental" xóa sạch ~32% chaos đang có, mà +30% phys không bù nổi (140.7k phys-thuần thấp hơn 142.6k phys+chaos), lại mất luôn crit damage của Supercritical. Cùng lý do, **Impale với Heavy Swing cũng bỏ**: attack speed chỉ 0.81/giây nên Impale stack quá chậm, còn Heavy Swing −10% AS trên nền vốn đã chậm. Trong đám gem cut được, không viên nào thắng nổi Supercritical ở slot này.

**Viên duy nhất đáng đổi là Uul-Netol's Embrace** (Lineage, mua trade) — "gain **40% of Physical as Extra Chaos**". Nó cũng mất crit damage của Supercritical y như Brutality (CDB về 647), nhưng thay vì xóa chaos thì **cộng thêm** 40% phys = +43k chaos chồng lên Unholy Might (thành 70% phys-as-chaos khi cả hai bật), và chạy vô điều kiện không cần Command. Tính trên số đo: base hit 142.6k lên ~185.9k, nhân CDB 647 ở crit 100% ra DPS dự kiến **~1.12M, tức +15%**. Chaos của nó cũng break armour, feed Uruk's. Đây là cú swap dương duy nhất cho slot này, và phải mua chứ không cut ra được — lắp xong đọc thẳng DPS tooltip so với 969,768 là biết chính xác.

Hệ quả gear từ crit 99-100% capped: **crit chance đang overcap ~24%** (bỏ Supercritical còn dư 123%). Mọi dòng crit chance trên gear tương lai là phí — node hay gear nào đang cho crit chance thì đổi sang crit damage hoặc phòng thủ sẽ lời hơn.

Phần còn lại của pool rớt sạch, ghi ra để khỏi đào lại: nhóm "you use yourself" + UsedByProxy không gắn được lên companion (Combo Finisher, Cadence, Defy, Momentum, Minion Pact, Clash, Crescendo, Culmination, Vruun's, Varashta's, Rigwald's); nhóm command-only cần Zekoa là Commandable mà nó không có Command (Bidding, Commandment cho minion −100% damage với skill non-command, Kurgal's); nhóm reserve-spirit bị loại (Atalui's Bloodletting không support skill reserve Spirit, mà companion reserve Spirit); và nhóm minion utility/thủ thuần (Meat Shield −40% damage, Elemental Army chỉ res, Deathmarch với Last Gasp là survivability, Tecrod's chỉ kích khi sắp chết = 0 uptime, Crazed Minions +30% chỉ khi vừa hồi sinh). Bloodlust 30% more thì cần Bleeding mà build không có.

Lưu ý gắn được hay không: Uul-Netol's đọc trên poe2db không bị exclude UsedByProxy/Minion nên gắn lên companion được, giống Heft đang chạy trên Wolf Pack. PoB2 trả DPS 0 cho Tame Beast nhưng tooltip slam in-client thì sống — cứ lắp rồi so DPS với 969,768 baseline là chắc nhất, không cần đoán.

Break engine phys của Zekoa nằm ngoài link của nó: **Uruk's Smelting cắm trên Repulsion** cùng Armour Explosion. Repulsion Wave nổ ~2 lần/giây là nguồn hit tần suất cao, góp break liên tục (mỗi hit vào Marked break 15% phys qua Mark for Death II); full-break thì Uruk's kích perma +20% Physical Damage taken cho cả đàn phys gồm Zekoa. Đặt ở đây đúng hơn Sniper's Mark vì Mark không hit nên không break được giáp. Verify thanh broken-armour trên boss; nếu chưa full-break thì cân để Uruk's thẳng lên Zekoa.

Sniper's Mark mang **Second Wind III**: "twice as many Cooldown Uses" (cộng hồi chút life), Allow Type Cooldown nên ăn được Mark, và khác category với Cooldown Recovery II nên hai cái chạy cùng lúc. Lý do nó đáng ở đây: mark bị crit của Zekoa consume sau ~2-3 hit (~2.5s) rồi phải chờ hết cooldown ~4.6s mới mark lại, uptime nếu để trống chỉ quanh **54%**, mà Sylvan's Effigy cho **+90% companion damage vs Marked** cho *cả đàn* (Bear, Wolf ~135k mỗi con, Zekoa), nên mỗi giây mark tắt là cả đàn mất 90% damage lên boss. Hai charge của Second Wind cho mark lại ngay sau khi consume, không chờ cooldown, kéo uptime lên ~95%, quy ra trung bình bonus vs-Marked từ ~+49% lên ~+86%, tức **~+25% boss DPS cho nguyên đàn**. Đổi lại phải bấm mark thường xuyên hơn (mỗi ~2-3s khi thấy mark tắt). Muốn giữ APM thấp thì thay bằng **Mark of Siphoning II** (leech từ target Marked) làm lớp sustain, nhưng đó là phương án giữ tay, không phải tối ưu damage. Đọc uptime mark in-client một map để chốt 54% là đoán hay thật.

Còn phải làm:

1. **So Rage III hiện tại với một engine damage ở slot năm:** Supercritical đo được 969,768 (đáng ~+12% nhờ +100% Critical Damage Bonus ăn ở 99% crit uptime), còn Rage III đổi lấy +30% more attack damage qua 30 rage. Đọc DPS tooltip in-client cả hai cách để biết nên giữ Rage III hay nhường slot cho Supercritical — số này PoB2 không trả.
2. **Mua Uul-Netol's Embrace cho slot năm** → "gain 40% of Physical as Extra Chaos", dự kiến ~1.12M (+15% so với baseline Supercritical 969,768), chạy vô điều kiện không cần Command. Cú nâng đơn lớn nhất cho slot này — lắp xong so DPS tooltip để chốt.
3. Giữ nguyên **Muster · Feeding Frenzy II · Rapid Attacks II · Tangmazu's Thurible** — bốn multiplier top (Muster ~49-56% more theo số Reviving type; Feeding Frenzy 30% more; Tangmazu's Gigantic = 20% more damage + 20% more life + tank; Rapid Attacks nuôi cả cycle mark-crit lẫn break giáp).
4. **Gear: đừng thêm crit chance nữa** (crit đã 99% capped) — ưu tiên crit damage hoặc phòng thủ; hai nhẫn Unset đã gánh 25%+22% minion crit damage bonus, ES đang 1,667 nên một viên jewel ES/mana phòng thủ trở lại là cách rẻ nhất kéo EHP về.

## Gem các skill khác

Soi nốt các group còn lại. Bear (Catha's + Romira's + Rapid Attacks + Magnified + Hulking) và Azmerian Wolf (Kurgal's = nguồn Unholy Might + Muster + Feeding Frenzy + Loyalty + Rapid Attacks) đều cân giữa sub-DPS granted với redirect và Lineage utility, không đụng. Phần còn lại:

**Bốn con damage free cứ để đập tối đa.** Fungal Wolf, Hyena Demon, Bramble Rhoa và Swarming Wasp đều chạy Muster + Feeding Frenzy II + Rapid Attacks II (kèm Loyalty với Rage III) nên deal damage trực tiếp ngoài vai aura/utility; Swarming Wasp vừa đập vừa phát Periodic Invulnerability Aura làm lớp anti-wipe. Support không tốn spirit nên vắt kiệt, đúng tinh thần "spirit trả cho việc field con đó, damage support thì free". Đọc DPS từng con in-client để chốt vì PoB2 trả 0 cho Tame Beast.

**Hai con body-block Quill Crab và Coconut Crab** ôm Meat Shield II + Last Gasp + Minion Mastery — đổi 40% less damage lấy 40% less taken, chỉ đứng phủ aura và chặn đường nên không tính DPS. Rage III trên chúng gần vô tác dụng vì không đánh, nhưng free nên kệ.

Điểm cân nhắc damage: **Feeding Frenzy II cho +15% damage taken**. Con damage nào chết nhiều thì đổi *riêng* Feeding Frenzy II của nó sang **Meat Shield II** (−40% taken) cho nó sống dai, chịu mất ~26k DPS con đó. Muster với Rapid Attacks (không downside) thì luôn giữ; con nào sống ổn thì để nguyên, +30% damage đáng hơn.

**Purity of Lightning giờ là res load-bearing, không phải spirit chết.** Nó granted free từ Chober Chaber nên không reserve spirit, mà sau khi res sụp lightning chỉ còn overcap 21 — gỡ nó là lightning rớt xuống dưới cap. Cứ giữ.

**Discipline nên mang Healing Runes.** Aura granted này đang trống support — nhét Healing Runes: +10 spirit, rút 10% max Runic Ward mỗi 5s heal đàn 200% lượng ward mất, đúng máy sustain cho lưới redirect. Verify granted aura có nhận support không.

## Progress Log

### 2026-06-16

Refresh model live qua nút "Refresh character" trên poe.ninja (updatedUtc 2026-06-16T12:49Z, model 135327768, khớp client). Đã thực thi đợt đổi nhẫn: cả hai slot giờ là Unset — Corruption Finger (+26 Dex, minion 27% damage, minion +25% crit damage bonus, +8% atk speed) và Morbid Circle (+30 Str, minion 25% damage, minion +22% crit damage bonus, +10% atk speed). Được 2 skill slot, ~52% minion increased damage và ~47% minion crit damage bonus dồn vào đàn. Phát hiện sửa giả định cũ: ring CÓ roll "Minions have increased Critical Damage Bonus" — cả hai viên đeo đều có dòng đó là explicit, không cần ép về jewel.

Giá phải trả: nhẫn Unset không cõng res nên cold rơi từ 66 về **0** và fire về **57**, EHP tụt còn 16,401, cold max hit chỉ còn 5,115 ngang phys 5,276 — lỗ one-shot mới, cấp hơn cả phys (phys max hit thực ra lên 5,276). Ưu tiên giờ là cap lại cold và fire qua găng, belt, flask vì gánh nặng res đã rời hết khỏi nhẫn. Zekoa hiện cắm Rage III ở slot năm (giữ 30 rage); Supercritical đo 969,768 và Uul-Netol's chase ~1.12M vẫn là hai lựa chọn damage cho slot đó, đọc DPS in-client để chốt. Đã thêm section Skill Gems & Links liệt kê đủ 15 nhóm skill live.

### 2026-06-15

Refresh poe.ninja model (updatedUtc 2026-06-15T03:41Z). Tái cấu trúc đàn tamed sang hướng thủ: bỏ Caustic Crab, Bramble Hulk, Quadrilla; thêm Adorned Scarab (Energy Shield Aura), Swarming Wasp (Periodic Invulnerability Aura, lớp anti-wipe đã săn được), Coconut Crab (Extra Physical Damage Aura + Ignite). Pack rẻ hơn (gross tamed ~203% xuống ~168%), nhưng mất lớp redirect "Damage Taken From Minions First" của Bramble Hulk. Đã thực thi hai cú gem từ audit hôm trước: Uruk's Smelting dời sang Repulsion, Second Wind III vào Sniper's Mark. Một viên jewel phòng thủ đổi sang Iconic of Gripping (Presence AoE + crit) nên ES 1,929 xuống 1,667, EHP 19,432 xuống 18,080, phys max hit 4,120 xuống 3,857, lỗ one-shot phys rộng thêm nên ưu tiên kéo phys EHP lại. Granted DPS lên Bear 134.8k / Azmerian Wolf 135.0k / Wolf Pack 20.5k. Còn mở: cap cold 66→75, mua Uul-Netol's Embrace cho Zekoa.

Lên kế hoạch lấy thêm skill slot cho đàn qua Unset Ring, verify thẳng pool mod ring: rare ring không roll minion damage hay minion crit damage bonus dạng thường. Dòng minion damage duy nhất trên ring là conditional Abyss Amanamu's "if you've Hit Recently", và nó sống vì Repulsion cho player hit ~2/giây; minion crit damage bonus thì jewel-only. Chốt đổi Storm Circle sang Unset gánh minion damage Amanamu cộng Int cộng skill slot, giữ Oblivion Coil cho +30% minion crit damage bonus, dồn toàn bộ resistance sang găng với belt, giữ Atziri's Step cho deflection. Build sẵn 7 trade link securable trong mục Link trade: minion DPS (Uul-Netol's Embrace, jewel of Gripping, The Adorned, Unset ring, amulet) với res (găng, belt). Chưa price live vì Playwriter/Chrome chưa kết nối.

### 2026-06-14

Audit gem cho Zekoa, có đo A/B in-client. Tooltip slam: Supercritical 969,768 DPS (crit 99%, CDB +747%, ~32% chaos từ Unholy Might); lắp Brutality rớt còn 851,291 (−12%, CDB 647, mất chaos) nên Brutality là downgrade, loại. Supercritical thực ra đáng ~+12% (crit capped 99% nên downside miễn phí), không gem cut nào thắng nó ở slot này. Cú nâng dương duy nhất là mua Uul-Netol's Embrace (40% phys-as-chaos, cộng chồng Unholy Might) thay Supercritical, dự kiến ~1.12M (+15%). Crit chance overcap ~24% nên gear sau đừng thêm crit chance. Vẫn cần sửa Uruk's Smelting đang chết trên Sniper's Mark sang Repulsion.

Snapshot sau đợt quay xe lớn, character lên Lv96. Build bỏ Tyranny's Grip + Forgotten Warden, chuyển sang Chober Chaber cầm một tay qua Giant's Blood + Morior Invictus body. Đổi này kéo armour từ ~0 lên 1,941 và chaos res từ ~25 lên 72, đồng thời thêm Atziri's Step và engine jewel The Adorned + magic "of Gripping" cho crit-damage bonus dồn vào Zekoa. Roster aura cũng thay: Caustic Crab và Bramble Hulk gánh Extra Physical Damage Aura, Quadrilla thêm ES Aura, bỏ Antlion Charger. Số phòng thủ còn hở đúng hai chỗ: cold res 66 và phys max hit 4,120. Mark link đã gắn Cooldown Recovery II như kế hoạch cũ. Hai con granted (Bear + Azmerian Wolf) giờ mỗi con ~127k DPS theo model, gần gấp đôi snapshot trước.

## Relationships

- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build doc đầy đủ cho character này
- **related_mechanics** [Spirit Walker companion beast hunt](/guides/spirit-walker-companion-beast-hunt) — ascendancy mechanic và cách bắt từng beast
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản spirit cho nguyên đàn
- **related** [Return of the Ancients](/guides/return-of-the-ancients) — overview league 0.5
