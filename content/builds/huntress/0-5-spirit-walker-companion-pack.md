---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Pack Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-06-16'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
budget_tier: mirror-tier
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: companion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - pack
  - chober-chaber
  - giants-blood
  - morior-invictus
  - minion
  - crit
  - armour-break
  - 0-5
  - poe2
---

# Tame Beast Companion Pack Spirit Walker

Bắt beast bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, ráp nguyên đàn companion quanh đúng một con crit carry: Zekoa the Headcrusher giữ mod Extra Crits gánh single target, đàn aura bot phủ phys, haste, ES và ele-res cho cả pack cộng shock với ignite lên enemy, một con phủ Periodic Invulnerability Aura giữ đàn qua AoE chaff, Wolf Pack trám clear, còn Bear với Azmerian Wolf đi kèm miễn phí từ ascendancy và :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"}. Nguyên tắc chi tiêu của build: **spirit không trả cho DPS riêng của một con — chỉ trả cho carry, cho multiplier toàn đàn, hoặc cho lớp giữ mạng**; sub-DPS thật của build là hai con granted không tốn gì, poe.ninja đo Bear và Azmerian Wolf mỗi con ~132k. Mình điều phối mark và vị trí đứng. Character thật đang chạy Lv96, clear T15 ổn định.

## Build Overview

Damage dồn về một con. Zekoa giữ mod **Extra Crits** (300% increased Critical Hit Chance, nhân 4 base crit), nên cả engine crit của build đổ vào nó: tám viên jewel magic Minion Critical Damage Bonus (~21-24% mỗi viên) được :wiki-link{url="https://www.poe2wiki.net/wiki/The_Adorned"} nhân 108% effect, cộng hai Unset ring Corruption Finger và Morbid Circle mỗi viên thêm ~22-25% Minion Critical Damage Bonus, cộng :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} trả crit damage bonus cho cú crit kế lên mục tiêu Marked. Các con khác không crit, nên mọi đầu tư crit từ jewel tới ring tới mark payload đều là đầu tư cho Zekoa.

Nền damage đến từ hai hướng. Một là level: đàn ăn +10 Level of all Minion Skills cộng dồn từ :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} (+4), Skull Corona (+2) và Empyrean Locket fractured (+4) — companion gem L19-20 chạy như L29-30. Hai là flat phys qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha's_Balance"}: companion nhận thêm Attack Damage bằng phần damage main-hand. Chober Chaber Runeforged phys cao nên mỗi con ăn một khối flat phys mỗi đòn, đổi lại lấy hai mod minion mà sceptre không cho: +4 minion levels và "Increases and Reductions to Minion Damage also affect you", để cây tree và jewel minion buff luôn cả player. Lý do cầm được greathammer một tay là keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Giant's_Blood"}: wield two-handed weapon trong một tay, chừa tay kia cho Sylvan's Effigy.

Single target còn engine thứ hai: **armour break**. Mark for Death II biến mọi hit của đàn lên mục tiêu Marked thành armour break bằng 15% phys gây ra; Bramble Rhoa giữ mod Breaks Armour góp thêm; và Uruk's Smelting nằm trên link Wolf Pack, khi full break thì mục tiêu **vĩnh viễn chịu thêm 5% phys, stack tới 20%**, sống xuyên qua mọi khoảng trống của mark. Uruk's cưỡi Wolf Pack vì đó là nguồn hit tần suất cao nhất (7 con sói nện liên tục), thay vì cú mark chậm. Mức stack chính xác đọc trong client.

Phòng thủ xếp lớp: evasion 7,397 với deflection 6,102 đỡ entry, armour 1,670 cho một lớp phys DR mỏng; ES 1,667 cộng Life 1,916 làm pool, :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} đẩy một phần damage sang mana 1,384 thành lớp đệm; :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} hồi ES theo evasion sau khi mất shroud; và một lưới giữ đàn: Loyalty rải redirect, Romira's Requital trên Bear, cộng Periodic Invulnerability Aura của Swarming Wasp pulse cho đàn miễn nhiễm damage từng đợt. Kỷ luật cứng vẫn nguyên: **ở lì weapon set 1, không weapon-swap**. Swap là despawn cả đàn (bug spirit desync chưa fix).

## Đàn companion gồm con nào

Bảy con tamed chiếm spirit, mỗi con một vai do mod retained quyết định. Đọc mod cho đúng trước khi gán vai: chỉ dòng có chữ "… Aura" mới phủ ra cả đàn (allies trong presence); All Damage Shocks/Ignites không phải aura nhưng dán ailment lên enemy con đó đánh nên cả đàn hưởng gián tiếp; còn Extra Crits, Breaks Armour, Shroud Walker, Extra Cold Damage chỉ thuộc con mang nó.

- **Zekoa the Headcrusher** là bản unique của :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"}, bắt qua The Natural Order. Tame giữ tối đa 4 mod; bản đang chạy giữ **Extra Crits** làm dòng khoá cứng cộng một slot rác Periodically unleashes Ice còn chờ fish theo priority list ở [guide tame](/guides/spirit-walker-companion-beast-hunt). Reservation 47.4% cộng 30 spirit từ Tangmazu's Thurible. Carry duy nhất.
- **Coconut Crab** cho đàn **Extra Physical Damage Aura** (nguồn phys aura nuôi phần phys của đàn), kèm All Damage Ignites dán ailment lên enemy. Reservation 24%, chạy bộ Meat Shield nên là body-block bot, gần như không tự đánh.
- **Fungal Wolf** cho đàn **Energy Shield Aura** đệm ES, kèm All Damage Ignites; Powerful Minions chỉ buff bản thân nó. Reservation 30%, vẫn đánh nên ăn đủ bộ damage support.
- **Bramble Rhoa** cho đàn **Haste Aura** tăng speed cả pack, kèm **Breaks Armour** góp vào armour break engine và Burning Ground on Death. Reservation 34.2%.
- **Quill Crab** dán **All Damage Shocks** lên enemy cho cả đàn hưởng, kèm **Temporal Bubble** làm chậm enemy và Extra Cold Damage self. Reservation 24.9%, cũng là body-block bot Meat Shield.
- **Hyena Demon** cho đàn **Elemental Resistance Aura** — một lớp res cho cả pack, kèm Cold Resistant self. Reservation 30%.
- **Swarming Wasp** cho đàn **Periodic Invulnerability Aura**: pulse cho allies trong presence miễn nhiễm damage từng đợt, lớp cứu đàn khỏi bị AoE chaff dọn sạch. Shroud Walker và Extra Cold Damage chỉ là tiện ích self. Reservation 21%, con filler rẻ nhất bảng mà gánh đúng lớp thủ đáng nhất.

:wiki-link{url="https://www.poe2wiki.net/wiki/Wolf_Pack"} (60 spirit flat, ra 7 con sói, level bằng Uncut Spirit Gem) gánh clear với Minion Splash và mang luôn Uruk's Smelting cho break engine. Hai nguồn granted không tốn gem slot lẫn spirit là sub-DPS thật của build: Azmerian Wolf từ Sylvan's Effigy và con Bear từ :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} — poe.ninja đo Bear ~132.5k và Azmerian Wolf ~132.8k mà không reserve điểm nào.

Tame mechanics quyết định cách nuôi đàn. Companion gem nuôi được cả level lẫn quality sau capture: level bằng Uncut Skill Gem, quality bằng Gemcutter's Prism áp thẳng lên companion gem, Q20 cho 10% Reservation Efficiency. Tame Beast Q20 trước lần tame thì companion sinh ra Q20 sẵn, quên thì 4 GCP vá sau. Mỗi mod giữ lại đẩy reservation lên trên mức nền của từng loại beast — bảng reservation nền theo loại mình kê đủ trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt), soi trước khi quyết tame con gì. Một bản Zekoa thứ hai nằm dự phòng ở weapon set 2, không reserve gì khi chưa kích.

## Skill Gems & Links

Mỗi companion mang bộ support theo vai. Hai support redirect — Romira's Requital và Loyalty — cùng category "Loyalty" nên một con chỉ cắm được một trong hai:

- **Zekoa 5-support:** Rage III + Feeding Frenzy II + Rapid Attacks II + **Tangmazu's Thurible** + Muster. Tangmazu's Thurible cho carry thành Gigantic và mượn evasion/deflection của mình (+4 mỗi 10 điểm) để Zekoa tự tank. Slot Rage III ở đây chỉ là cách hiện tại để Zekoa giữ 30 rage cho +30% more attack damage; nếu chuyển sang engine rage tập trung thì slot này nhường lại cho Supercritical (xem Chase tier).
- **Bear (Wild Protector) 5-support:** **Catha's Brilliance** + **Romira's Requital** + Rapid Attacks II + Magnified Area II + Hulking Minions. Romira's đặt ở đây vì Bear là granted, chết tự hồi sinh nên lưới redirect không vắng lâu. Bear hiện thiếu Feeding Frenzy II và Muster — hai multiplier lớn nhất — nên dù là carry đo được 132k nó vẫn dưới chuẩn damage; đây là khoản sửa rẻ nhất ở Chase tier.
- **Azmerian Wolf 5-support:** Feeding Frenzy II + **Kurgal's Leash** + Muster + Loyalty + Rapid Attacks II. Một phím Command xả Eternal Hunt và kích Unholy Might **15 giây** cho cả mình lẫn Wolf, một phím mỗi 15 giây là giữ uptime.
- **Wolf Pack 5L:** Minion Splash II + **Uruk's Smelting** + **Heft** + Muster + Feeding Frenzy II — engine clear kiêm nguồn full-break vĩnh viễn, Heft cho 30% more max phys hit damage.
- **Companion damage (Fungal Wolf, Hyena Demon, Bramble Rhoa, Swarming Wasp):** mỗi con chạy Rage III + Loyalty + Rapid Attacks II + Muster + Feeding Frenzy II — đủ rage, attack speed và hai multiplier minion damage.
- **Body-block bot (Quill Crab, Coconut Crab):** Rage III + Loyalty + **Meat Shield II** + Last Gasp + Minion Mastery. Meat Shield II cho deal 40% less damage để đổi 40% less damage taken, nên hai con này chỉ đứng phủ aura và chặn đường; Rage III trên chúng gần như vô tác dụng vì chúng không đánh.

**Mark package, Sniper's Mark** + Mark for Death II + **Cooldown Recovery II** + Eternal Mark + Charged Mark + **Second Wind III**. Mark kích khi mục tiêu ăn crit rồi bị consume; Zekoa full crit nên mark bị ăn sau ~2-3 hit rồi vào cooldown. Cooldown Recovery II cộng Second Wind III (hai charge, mark lại ngay sau consume) giữ uptime mark cao, vì Sylvan's Effigy chỉ phát 90% increased companion damage vs Marked trong lúc mark còn sống, nên mỗi giây mark tắt là cả đàn mất 90% damage lên boss. Mark for Death II là mảnh break đầu (15% phys mỗi hit lên Marked).

Nền aura cho player: **Discipline** (granted từ Sylvan's Effigy, không reserve) chạy ES, **Ghost Dance** (kèm Cooldown Recovery II + Clarity II) hồi ES theo evasion, **Purity of Lightning** giữ lightning res. **Parry** nằm ở weapon set 2 cùng Dunkelhalt, dormant chờ fix swap.

Exclusion check: Romira's Requital × Loyalty cùng category "Loyalty" — một skill một bản, Romira's lên Bear còn Loyalty rải các con khác; Lineage support (Catha's Brilliance, Kurgal's Leash, Uruk's Smelting, Tangmazu's Thurible) mỗi gem đúng một bản trên toàn build.

## Spirit ledger quyết định field được bao nhiêu con

Pool 439, chạy full pack bảy con tamed. Anoint là The Soul Meridian (ES recovery) thay vì Gigantic Following — gỡ khoản 25% reduced Reservation Efficiency mà Gigantic Following bắt trả, và chính khoản đó cộng pool 439 mới đủ chỗ cho bảy con cùng lúc. Trusted Kinship cho companion 30% more Reservation Efficiency đổi lấy 20% less cho skill non-companion, nên minion non-companion vẫn đứng ngoài ledger.

Reservation theo tooltip từng skill: Zekoa 47.4% (cộng 30 flat Tangmazu) · Bramble Rhoa 34.2% · Fungal Wolf 30% · Hyena Demon 30% · Quill Crab 24.9% · Coconut Crab 24% · Swarming Wasp 21% · Wolf Pack 60 flat. Gross tamed quanh ~211% trước khi nhân efficiency. Cây tree gánh phần kéo xuống: Easy Going 25% increased Reservation Efficiency of Companion Skills, Lord of Horrors 12% của Minion Skills, helm rune 8% nữa, cộng Effigy 75% increased Spirit. Toàn bộ đang bật cùng lúc và chạy live trên pool 439 — headroom còn lại đọc trực tiếp trong client, và ba nguồn granted (Azmerian Wolf, Wild Protector, Discipline) không reserve gì.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} ascend theo thứ tự Wild Protector → The Natural Order → The Catha's Balance → :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"}. Wild Protector cho con Bear ngay Lab 1, tank miễn phí trước khi build thành hình. The Natural Order mở quyền tame Unique Beast, đây là cửa vào Zekoa. The Catha's Balance là multiplier mở liền không gate gear, biến vũ khí main-hand thành nguồn flat damage của cả đàn. Idolatry lấy cuối vì kèm thuế: companion 10% increased damage mỗi Idol, nhưng **mỗi non-Idol augment trên gear là -4% all elemental res**.

Idolatry sinh ra rule cứng cho mọi swap augment: khai delta Idolatry trước khi tính res, đọc res tab trước và sau từng lần đổi rune — số nhảy ±4% nghĩa là classification augment khác giả định, dừng lại tính lại. Thuế này đang ở mức ~-53% all ele (khoảng 13 non-idol augment), nên kênh res nào ít nguồn gear là tụt sâu nhất: cold chỉ có Dusk Lock chống lưng nên rớt còn 15, trong khi fire và light có ba bốn nguồn nên trụ ở 72 và 75.

## Passive Tree

Ba keystone là Giant's Blood, Trusted Kinship và :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} — Giant's Blood mở quyền cầm Chober Chaber một tay, Trusted Kinship là gốc của cả spirit ledger, Mind Over Matter biến mana 1,384 thành lớp đệm EHP đẩy phys max hit lên. Tree nghiêng hẳn vào nuôi đàn: Easy Going và Lord of Horrors gánh reservation efficiency cho cả pack, Vile Mending cho minion 20% inc max life cộng regen 3%/s cộng +13% chaos res, Entropic Incarnation cho minion +13% chaos res và 10% phys-as-chaos, Lifelong Friend cho đàn revive nhanh 35% khi mọi minion đều là companion. Phần thủ của player đến từ Blur và The Wild Cat: evasion cộng node chuyển evasion thành deflection, đúng với lối né-deflect của build.

Năm điểm cuối từ Lv96 tới 100 nên dồn tiếp vào cụm evasion-to-deflection và minion-life đang đi, đừng đụng Glancing Blows gần đó, vì unlucky evade phá thẳng layer entry. 21 điểm Parry nằm ở weapon-set-2 points, pool tách biệt, dormant là 0 cost.

## Stat Priorities & Defenses

Snapshot Lv96, poe.ninja model 2026-06-16 (khớp từng số với client). Chi tiết tracking ở [character note ThaoCamVienSaiGon](/characters/thao-cam-vien-sai-gon):

- **Life / ES:** 1,916 / 1,667 · **Spirit:** 439 · **Mana:** 1,384
- **Armour / Evasion / Deflection:** 1,670 / 7,397 (evade 44%) / 6,102 (deflect 39%)
- **Resistances:** Fire 72 / Cold 15 / Light 75 / Chaos 55 — cold 15 là lỗ sâu nhất
- **EHP:** 17,681 · **Max hit phys:** 5,229 (kênh mỏng nhất, element đều cao hơn nhiều) · **MS:** 128%

Cold 15 là vấn đề phòng thủ cấp nhất. Cold chỉ có một nguồn gear (Dusk Lock belt +53), còn fire và light mỗi kênh có ba bốn nguồn, nên khi thuế Idolatry ~-53% all ele trừ đều thì cold rớt thẳng xuống 15 trong khi fire/light vẫn trụ ở cap. Thêm một bẫy gear: ba dòng Bonded cold/light/chaos trên Morior và sceptre là ShamanOnlyMods, Huntress không kích được, nên chúng là số 0 — đừng tính bonded vào res khi craft tiếp. Thứ tự ưu tiên stat là EHP-first: **vá cold 15** (qua Mageblood flask res hoặc cold trên amulet/ring) → **kéo EHP** (Mageblood cộng stack evasion/deflection) → **đổi jewel sang minion/companion damage cộng max ES** → +Level of all Minion Skills và reservation efficiency. Lý do thứ tự này và khoảng cách so với phần còn lại của archetype nằm ở Chase tier.

EHP layer order: lưới redirect vào máu đàn (Loyalty rải đàn, Romira's trên Bear) → evasion/deflection entry → armour (phys DR mỏng) → Mind Over Matter (mana đệm) → max res → ES cộng Life pool → Ghost Dance regen → recovery. Lớp redirect mỏng vì roster không có con nào mang "Damage Taken From Minions First", dồn hết vào Loyalty + Romira's; bù lại Periodic Invulnerability Aura của Swarming Wasp giữ đàn sống qua AoE chaff, còn có phủ tới player hay không thì đọc client mới tính vào EHP của mình. DPS companion không quote số cứng được: PoB2 không model tamed beast, `pob_coverage: PARTIAL` — số đo từ poe.ninja là hai con granted Bear ~132.5k và Azmerian Wolf ~132.8k cộng Wolf Pack ~20.6k; phần Zekoa cộng dàn aura beast đọc bằng quan sát in-client.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 4 |
| boss_damage | 4 |
| survivability | 3 |
| mobility | 3 |
| league_start | 4 |
| budget_scaling | 4 |

## Gear Progression

Damage chính đến từ crit engine dồn Zekoa cộng flat Catha qua main-hand, còn phòng thủ tựa vào evasion-deflection cộng Morior cho armour và chaos. Hai ràng buộc dẫn mọi quyết định gear: giữ nguồn flat main-hand cho Catha, và đừng vỡ res khi đổi rune (Idolatry thuế -4% all ele mỗi non-idol augment).

### Gear theo slot

- **Main-hand:** Chober Chaber, Runeforged Leaden Greathammer, cầm một tay qua Giant's Blood. +4 Level of all Minion Skills, "Increases and Reductions to Minion Damage also affect you", +44 spirit, rune convert requirement sang Dex. Nguồn flat nuôi Catha kiêm hai mod minion nền.
- **Offhand:** Sylvan's Effigy, "any number of Companions", grant Discipline + Azmerian Wolf, 90% increased companion damage vs Marked, 75% increased Spirit. Bất khả thay khi còn chơi full pack.
- **Weapon set 2 (dormant):** Rapture Gnarl (Shrine Sceptre, +3 minion, +34% spirit, allies thêm cold damage, "Onslaught while on Low Runic Ward") + Dunkelhalt buckler cho block và Parry. Không kích vì swap despawn cả đàn.
- **Body:** Morior Invictus, Grand Regalia. Inc Armour/Evasion/ES, +7 all attr / +11% chaos res / +13 spirit mỗi socket filled, "+10% of Armour also applies to Chaos", idol socket. Nguồn chaos res cộng armour 1,670. Dòng Bonded cold/light/chaos là số 0 vì ShamanOnly.
- **Helm:** Skull Corona, Ancestral Tiara, +2 Level of all Minion Skills, fire và light res. Rune: Minions 15% inc max Life + 8% Reservation Efficiency of Minion Skills.
- **Gloves:** Blood Talons, Runeforged Grand Bracers, +27% fire +39% light, 13% lightning penetration. Rune gain Rage on melee hit.
- **Boots:** :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Step"}, Cinched Boots, 30% MS, inc evasion, gain Deflection bằng 50% Evasion. Một item gánh cả mobility lẫn deflection.
- **Belt:** Dusk Lock, Heavy Belt, +46% fire / +53% cold / +54% lightning res cộng 30% increased Explicit Resistance Modifier magnitude. Đây là nguồn res cứng chính của build, và +53 cold là nguồn cold duy nhất nên không được tháo trước khi có cold thay thế.
- **Ring 1:** Corruption Finger, Unset Ring, Minions deal 27% increased Damage, 8% attack/cast speed, 25% Minion Critical Damage Bonus. Unset cho một gem socket phụ.
- **Ring 2:** Morbid Circle, Unset Ring, Minions deal 25% increased Damage, 10% attack/cast speed, 22% Minion Critical Damage Bonus, adds cold damage to attacks. Cũng Unset, gem socket phụ. Hai ring Unset cho chỗ cắm skill nhưng không mang res — một phần lý do cold/chaos starve.
- **Amulet:** Empyrean Locket, Azure Amulet, fractured +4 Level of all Minion Skills, +45 spirit, +15% all elemental res, anoint **The Soul Meridian**. Hub bất khả xâm phạm, cấm vaal.
- **Jewels:** The Adorned (×108% effect cho jewel magic) + tám viên magic Sapphire/Diamond (mỗi viên ~8-11% Minions increased Damage cộng ~21-24% Minions Critical Damage Bonus, một viên Iconic 24% Presence Area) + From Nothing cho Blackflame Covenant. Engine crit của build nằm ở đây, toàn bộ phục vụ Zekoa. Đọc crit chance trên sheet Zekoa trong client: đã chạm 100% thì jewel nâng cấp tiếp vẫn là crit damage bonus.
- **Charm:** ưu tiên Thawing Charm cho freeze (cold 15 nên freeze threshold yếu), phần còn lại đóng các vector ailment.

### Chase tier

Build này đang là con mỏng nhất trong chính archetype của nó: EHP 17.7k, trong khi cùng dàn Zekoa + The Adorned + Sylvan's Effigy + Chober Chaber, các con đầu bảng đạt 27-35k. Granted DPS đo được (~265k cho Bear cộng Azmerian Wolf) chỉ đứng giữa bảng, con dẫn đầu chạm 700-880k. Hai lỗ này không đánh đổi nhau — các con vừa tank vừa mạnh nhất đạt cả hai cùng lúc, nên thứ tự nâng cấp xếp theo lợi nhuận:

- **Vá cold 15.** Lỗ phòng thủ cấp nhất: chỉ một nguồn cold (Dusk Lock) cộng thuế Idolatry kéo xuống 15, freeze threshold yếu. Cách sạch nhất là :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} thay Dusk Lock, đổi res cứng trên belt lấy magic flask vĩnh viễn (Sapphire cho cold, Topaz/Ruby cho hai kênh kia), vừa cap lại res vừa thêm pool. Nếu chưa với tới Mageblood thì roll cold trên amulet hoặc một ring rare.
- **Mageblood là đòn EHP đơn lẻ lớn nhất.** Ngoài việc cap res qua flask, bốn magic flask life/defense bật vĩnh viễn là phần lớn khoảng cách 17.7k → 27k+ của nhóm đầu. Đây là món vừa vá cold vừa kéo EHP, nên đứng đầu danh sách tiền.
- **Sửa support Bear.** Bear là carry đo được 132k nhưng thiếu Feeding Frenzy II (30% more) và Muster (~50% more với roster bảy loại). Đổi Magnified Area II và Hulking Minions sang Feeding Frenzy II + Muster (giữ Romira's cho redirect) là phần tăng DPS chắc và rẻ nhất, làm bất kể hướng nào.
- **Engine rage tập trung.** Hiện Rage III nằm trên cả bảy companion, còn Bear và Azmerian Wolf — hai carry đo được — lại 0 rage. Lấy Eternal Rage từ một amulet grant (persistent buff grant qua item không reserve spirit, free) cộng hai notable Commanding Rage (player rage thành minion damage global) và Warlord Berserker (allies trong presence regen 5 rage/s) thì cả đàn gồm Bear/Wolf đều lên 30 rage cho +30% more attack damage, và bảy slot Rage III được nhường lại cho support DPS (Zekoa lấy lại Supercritical, các con damage lấy +1 level hoặc Uul-Netol's). Cost: 2 passive point cộng -40% Presence của Warlord Berserker — đo in-client xem đàn có rớt khỏi presence không trước khi chốt.
- **Đổi engine The Adorned từ jewel crit-bonus sang minion/companion damage cộng max ES** — crit hiện chỉ nuôi Zekoa; jewel "Minions/Companions deal increased Damage" cộng max ES nhân qua The Adorned nuôi đồng thời EHP lẫn hai con granted, nên con đầu bảng mới vừa dày vừa mạnh.
- **Vaal pipeline là bước chót tuyệt đối** — jewel rẻ trước, rồi Effigy gated với backup mua sẵn. Cấm vaal Empyrean Locket, Morior, charms.

## Leveling Notes

Campaign level bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"}: rotation Whirling Slash ×3 rồi Twister, Frost Nexus lay chilled ground. Hai việc bắt buộc trên đường: giữ ~20,000 gold từ Act 2 sang Act 3 cho lần full respec, và unlock :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} từ NPC Farrow ngay Act 1. Runeforging là một mảnh của hệ league 0.5 — toàn cảnh Remnant, Runeforging, Runic Ward nằm ở [Return of the Ancients](/guides/return-of-the-ancients).

Pivot ở Act 3 sau Lab 2, thứ tự sống còn: **tame con Unique carry TRƯỚC, rồi mới full respec** sang cây companion — đảo lại là kẹt giữa hai cây. Capture timeline đã chạy thật: wolf tạm ở Act 2 ngay khi có Tame Beast, ape carry ở Act 3 Jungle Ruins, một con aura bot ở interlude. Vào map thì Masters of the Atlas ưu tiên Hilda, Overseer tablet nhảy tier waystone, và fish mod lên carry bằng tablet "additional rare modifier" trên map có boss Silverfist — kỹ thuật stack tablet và chain boss qua Rite of the Nameless nằm đủ trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt).

## Budget & Investment

Build chạy được từ league-start không gear cố định: Twister gánh campaign, beast tame free. Nhưng bản đang đeo, định giá ở runes 2026-06-15 (1 div = 170 ex), là luxury **~380-420 div**, phần lớn nằm ở engine crit.

Tiền dồn vào đúng hai khối. The Adorned roll 108% effect một mình **~170-200 div** (poe2scout báo floor 6.75 div là bản roll rác, đừng tin), cộng tám viên jewel magic Minion Crit Damage Bonus **~150 div** (corrupted magic 2-mod, mỗi viên ~12-35 div tùy roll). Riêng khối jewel chiếm ~85% chi phí. Thêm amulet rare +4 Level of all Minion Skills cộng spirit **~40-50 div** là chạm ~95%. Ngược lại, phần "carry" rẻ như cho: Chober Chaber ~1 regal, Sylvan's Effigy ~1 ex, :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} và Atziri's Step mỗi món ~1-20 ex, đám rare thủ (helm, belt, Unset ring) đều ~1-7 ex vì life/res/eva league này thừa.

Quy luật chi tiêu rút ra: chỉ mod **hiếm và build-defining** mới đắt, là %effect của The Adorned, minion crit damage bonus trên jewel corrupted, và +4 minion level trên amulet. Cùng một mod đổi slot là đổi giá: +4 minion trên amulet ~40 div nhưng +2/+3 minion trên helm hay sceptre chỉ ~1-7 ex. Đừng quote giá floor (poe2scout currentPrice hoặc search một-mod-lẻ) cho nhóm này, nó undercount từ chục tới nghìn lần; phải search đúng combo mod ở roll thật.

Floor để build chạy được thấp hơn hẳn: **~15-25 div**. The Adorned roll thấp ~6-7 div, jewel crit-bonus roll vừa, amulet +3 minion là đủ clear T15, crit engine yếu hơn nhưng nền minion level cộng aura vẫn nguyên. Nấc từ floor lên geared thuần là đổ tiền mua roll cao trên đúng engine đó, diminishing returns, làm khi muốn đẩy ceiling Zekoa chứ không phải để build hoạt động.

## Failure Modes

Build làm tốt ba thứ: clear T15 ổn định gần như không phải aim, single target qua một carry crit được cả đàn và break engine khuếch đại, và lưới redirect khiến phần lớn hit không chạm mình. Những chỗ nó gãy:

**Companion wipe kéo sập cả DPS lẫn thủ.** Loyalty và Romira's bắt cả đàn chịu less max life để đổi lấy redirect; Morior và Vile Mending bù lại, nhưng AoE chaff lớn kiểu wave Simulacrum vẫn giết đàn nhanh, và đàn chết là mình trần: mất redirect, mất damage, mất luôn aura phys/haste/ES/ele-res của cả pack. Lớp counter cứng nhất nằm trong roster: Swarming Wasp mang **Periodic Invulnerability Aura** pulse cho allies trong presence miễn nhiễm damage từng đợt. Đánh đổi: roster không có con nào mang "Damage Taken From Minions First" nên redirect vào máu minion mỏng. Đo trong client xem pulse Invulnerability có phủ cả player không trước khi tính vào EHP của mình.

**One-shot phys 5.2k.** Phys max hit 5,229 mỏng hơn hẳn element — T17 slam và pinnacle burst phys vượt pool là chết bất chấp spreadsheet. Armour 1,670 chỉ cho phys DR mỏng; dodge cộng Mind Over Matter là layer chính. Đây là khoản EHP cần mua tiếp (Mageblood, thêm armour/life).

**Cold 15 và map mod ele-weakness.** Cold mới 15, sâu dưới cap — mọi nguồn cold hit mạnh và freeze threshold yếu. Ele-weakness kéo cả ba kênh tụt, cold thành tử huyệt. Vá cold trước rồi mới yên tâm chạy mod đó; trong lúc chưa vá thì giữ ele-weakness ra khỏi pool roll map và đeo Thawing Charm.

**Mark downtime trên boss.** Sniper's Mark sống ~2s mỗi 6s vì crit của chính Zekoa consume nó — Effigy 90% increased và armour break chỉ chạy trong window. Cooldown Recovery II cộng Second Wind III đã thu hẹp lỗ này; debuff vĩnh viễn của Uruk's là phần bù đã nằm sẵn trong thiết kế. Nếu damage giữa các window vẫn hụt rõ, Voltaic Mark là fallback giữ Marked thường trực với giá bỏ payload crit.

**Patch sensitivity hai chiều.** GGG fix bug weapon-swap thì 21 điểm Parry dormant cộng Rapture Gnarl (rune "Onslaught while on Low Runic Ward") quay lại là buff lớn không tốn gì. Chiều ngược: nerf Sylvan's Effigy hay Trusted Kinship là chết cả hướng pack; nerf mod retention của Tame Beast là mất Extra Crits — toàn bộ đầu tư crit đi theo.

## Verdict

Build cho người thích minion APM thấp: đàn tự đánh, mình giữ hai nhịp phím là mark mỗi 6 giây và Command Wolf mỗi 15 giây, còn lại là di chuyển để né. Triết lý chi tiêu spirit đã chốt: một carry crit, dàn aura bot, mọi sub-DPS phải miễn phí. Hiện trạng là build farm T15-16 thoải mái chứ chưa phải shell tank pinnacle deathless. EHP 17.7k mỏng nhất archetype, cold 15 là tử huyệt cần vá đầu tiên, và hai carry đo được Bear/Wolf đang dưới chuẩn vì thiếu support multiplier lẫn rage. Trần pinnacle vẫn nằm trong chính archetype này: cùng dàn Zekoa + The Adorned + Sylvan's Effigy + Chober Chaber, các con đầu bảng đạt EHP 27-35k và granted DPS 700-880k nhờ Mageblood cộng jewel minion/companion damage và max ES, nên hướng đẩy tiếp là leo lên đó chứ không phải đổi build (xem Chase tier). Số DPS của Zekoa là quan sát in-client vì PoB2 chưa model tamed companion.

## Changelog

### 2026-06-16

- Sync doc sang character live (poe.ninja model 16/06, Lv96). Roster đổi sang bảy con tamed: Zekoa (Extra Crits) + Coconut Crab (Extra Physical Damage Aura) + Fungal Wolf (Energy Shield Aura) + Bramble Rhoa (Haste Aura + Breaks Armour) + Quill Crab (All Damage Shocks + Temporal Bubble) + Hyena Demon (Elemental Resistance Aura) + Swarming Wasp (Periodic Invulnerability Aura). Zekoa bỏ Supercritical lấy Rage III. Curse package Blasphemy/Repulsion/Armour Explosion gỡ; Uruk's Smelting dời sang Wolf Pack; armour break giờ qua Mark for Death II + Bramble Rhoa retained + Uruk's. Belt đổi sang Dusk Lock (triple res), ring sang hai Unset (Corruption Finger + Morbid Circle, gem socket nhưng không res). Keystone thêm Mind Over Matter. Rage III đang nằm trên cả bảy companion còn Bear/Azmerian Wolf 0 rage. Defense: Life 1,916 / ES 1,667 / armour 1,670 / eva 7,397 (44%) / defl 6,102 (39%), res F72/C15/L75/Ch55 — **cold rớt còn 15** (một nguồn Dusk Lock cộng thuế Idolatry ~-53%), EHP 17,681, phys max hit 5,229, Bear 132.5k / Azmerian Wolf 132.8k / Wolf Pack 20.6k. Chase tier xếp lại theo lợi nhuận: vá cold → Mageblood → sửa support Bear → engine rage tập trung → re-point jewel.

### 2026-06-15

- Đối chiếu cả archetype (62 character cùng dàn Zekoa + The Adorned + Sylvan's Effigy + Chober Chaber): build mỏng nhất về EHP và granted DPS đứng giữa bảng. Chỉnh thesis nâng cấp sang EHP-first: Mageblood, đổi engine The Adorned sang jewel minion/companion damage cộng max ES, stack evasion/deflection, cân nhắc Forgotten Warden cho lớp redirect companion.

### 2026-06-14

- Rewrite theo poe.ninja model Lv96: quay xe vũ khí sang Chober Chaber cầm một tay qua Giant's Blood (giữ Sylvan's Effigy offhand), body sang Morior Invictus, boots Atziri's Step, amulet Empyrean Locket. Anoint sang The Soul Meridian, bỏ thuế reservation nên full pack chạy được trên pool 439. Engine crit nâng cấp sang The Adorned ×108%. Bonded mods trên Morior/sceptre là ShamanOnly nên chết trên Huntress.

### 2026-06-12

- Bản trước: Tyranny's Grip + Forgotten Warden + Antlion Charger, anoint Gigantic Following, chaos là lỗ res duy nhất, pool 347.

## Relationships

- **related** [Character ThaoCamVienSaiGon](/characters/thao-cam-vien-sai-gon) — live snapshot tracking của chính character chạy build này.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — pipeline đầy đủ: cơ chế tame + modifier retention, bảng reservation nền theo từng loại beast, bốn nguồn nhân damage con carry, săn rare beast ở đâu, nhồi modifier qua tablet stacking, chain boss bằng Rite of the Nameless.
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản spirit cho nguyên đàn, nguồn spirit và reservation efficiency.
- **references** [Unique Items Mới & Meta Shift](/guides/0-5-new-unique-items) — Sylvan's Effigy, Morior Invictus, Atziri's Step và lứa companion item 0.5.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Remnant, Runeforging, Runic Ward mà build khai thác.
