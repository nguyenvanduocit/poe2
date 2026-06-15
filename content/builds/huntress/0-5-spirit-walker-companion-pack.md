---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Pack Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-06-15'
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

Bắt beast bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, ráp nguyên đàn companion quanh đúng một con crit carry: Zekoa the Headcrusher giữ mod Extra Crits gánh single target, bốn con aura bot phủ phys aura, shock, haste, ES và một lớp Periodic Invulnerability Aura cho cả đàn, Wolf Pack trám clear, còn Bear với Azmerian Wolf đi kèm miễn phí từ ascendancy và :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"}. Nguyên tắc chi tiêu của build: **spirit không trả cho DPS riêng của một con — chỉ trả cho carry, cho multiplier toàn đàn, hoặc cho lớp giữ mạng**; sub-DPS thật của build là hai con granted không tốn gì. Mình điều phối mark, curse aura và vị trí đứng. Character thật đang chạy Lv96, clear T15 ổn định.

## Build Overview

Damage dồn về một con. Zekoa giữ mod **Extra Crits** (300% increased Critical Hit Chance, nhân 4 base crit), nên cả engine crit của build đổ vào nó: bảy viên jewel magic "Authoritative … of Gripping" mỗi viên 22-24% Minions Critical Damage Bonus, được :wiki-link{url="https://www.poe2wiki.net/wiki/The_Adorned"} nhân 108% effect, cộng Supercritical trên link Zekoa cho thêm 100% crit damage bonus, cộng :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} trả 80% increased Critical Damage Bonus cho cú crit kế lên mục tiêu Marked. Các con khác không crit, nên mọi đầu tư crit từ jewel tới mark payload đều là đầu tư cho Zekoa.

Nền damage đến từ hai hướng. Một là level: đàn ăn +10 Level of all Minion Skills cộng dồn từ :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber"} (+4), Skull Corona (+2) và Empyrean Locket fractured (+4) — companion gem L19-20 chạy như L29-30. Hai là flat phys qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha's_Balance"}: companion nhận thêm Attack Damage bằng 60% damage main-hand. Chober Chaber Runeforged 132-179 phys nên mỗi con ăn ~93 flat phys mỗi đòn, thấp hơn spear cũ nhưng đổi lại lấy hai mod minion mà sceptre không cho: +4 minion levels và "Increases and Reductions to Minion Damage also affect you", để cây tree và jewel minion buff luôn cả player. Lý do cầm được greathammer một tay là keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Giant's_Blood"} — wield two-handed weapon trong một tay, chừa tay kia cho Sylvan's Effigy.

Single target còn engine thứ hai: **armour break**. Mark for Death II biến mọi hit của đàn lên mục tiêu Marked thành armour break bằng 15% phys gây ra. Uruk's Smelting nằm trên link Repulsion: khi full break thì mục tiêu **vĩnh viễn chịu thêm 5% phys, stack tới 20%**, và debuff này sống xuyên qua mọi khoảng trống của mark. Repulsion Wave nổ ~2 lần/giây quanh người khi đàn nện vào enemy bị curse, nên break engine cưỡi đúng trên nguồn hit tần suất cao nhất thay vì cú mark chậm; Armour Explosion nổ một cú lửa mỗi khi full break một con. Mức stack chính xác đọc trong client.

Phòng thủ xếp lớp: evasion 8,625 với deflection 7,115 đỡ entry, armour 1,941 từ Morior cho 17% phys DR; ES 1,667 cộng Life 1,885 làm pool; :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} hồi ES theo evasion sau khi mất shroud; và một lưới giữ đàn: Loyalty rải redirect cho đàn, Romira's Requital trên Bear, cộng Periodic Invulnerability Aura của Swarming Wasp pulse cho đàn miễn nhiễm damage từng đợt. :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} hoá Repulsion thành aura knockback cộng stun quanh người. Kỷ luật cứng vẫn nguyên: **ở lì weapon set 1, không weapon-swap**. Swap là despawn cả đàn (bug spirit desync chưa fix).

## Đàn companion gồm con nào

Năm con tamed chiếm spirit, mỗi con một vai và mod retained quyết định vai đó. Đọc mod cho đúng trước khi gán vai: chỉ dòng có chữ "… Aura" mới phủ ra cả đàn (allies trong presence), còn Regenerates Life, Armoured, Fire Resistant, Extra Cold Damage hay Shroud Walker chỉ buff đúng con mang nó; loại All Damage Shocks/Ignites không phải aura nhưng dán ailment lên enemy con đó đánh nên cả đàn hưởng gián tiếp.

- **Zekoa the Headcrusher** là bản unique của :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"}, bắt qua The Natural Order. Tame giữ tối đa 4 mod (random nếu boss roll hơn); bản đang chạy giữ **Extra Crits** làm dòng khoá cứng cộng một slot rác Periodically unleashes Ice còn chờ fish sang Enraged hoặc Hasted theo priority list ở [guide tame](/guides/spirit-walker-companion-beast-hunt). Reservation 47.4% + 30 spirit từ Tangmazu's Thurible. Carry duy nhất, mỗi mod thêm còn đẩy reservation lên nên cân pool trước khi nhồi đủ 4.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Diretusk_Boar"} cho đàn **Haste Aura**, kèm **All Damage Shocks** dán lên boss và Fire Resistant chỉ cho riêng nó. Hit luôn shock nên boss gần như thường trực chịu thêm damage cho cả đàn hưởng, haste tăng speed cả pack. Reservation 39%.
- **Coconut Crab** cho đàn **Extra Physical Damage Aura** (nguồn phys aura nuôi phần phys của đàn), kèm All Damage Ignites dán thêm một ailment lên enemy. Reservation 24%.
- **Adorned Scarab** cho đàn đúng một thứ là **Energy Shield Aura** đệm ES. Hai mod còn lại Regenerates Life + Armoured chỉ làm bản thân con Scarab dai, không phủ ra đàn, nhưng aura bot càng khó chết thì ES Aura càng ít rớt, đúng thứ một con đỡ aura cần. Reservation 36.6%.
- **Swarming Wasp** cho đàn **Periodic Invulnerability Aura**: pulse cho allies trong presence miễn nhiễm damage từng đợt, lớp cứu cả đàn khỏi bị AoE chaff dọn sạch. Shroud Walker và Extra Cold Damage chỉ là tiện ích self. Reservation 21%, con filler rẻ nhất bảng mà gánh đúng lớp thủ đáng nhất.

:wiki-link{url="https://www.poe2wiki.net/wiki/Wolf_Pack"} (60 spirit flat, ra 7 con sói, level bằng Uncut Spirit Gem) gánh clear với Minion Splash. Hai nguồn granted không tốn gem slot lẫn spirit là sub-DPS thật của build: Azmerian Wolf từ Sylvan's Effigy và con Bear từ :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} — poe.ninja model đo mỗi con ~135k DPS mà không reserve điểm nào.

Tame mechanics quyết định cách nuôi đàn. Companion gem nuôi được cả level lẫn quality sau capture: level bằng Uncut Skill Gem, quality bằng Gemcutter's Prism áp thẳng lên companion gem, Q20 cho 10% Reservation Efficiency. Tame Beast Q20 trước lần tame thì companion sinh ra Q20 sẵn, quên thì 4 GCP vá sau. Mỗi mod giữ lại đẩy reservation lên trên mức nền của từng loại beast — bảng reservation nền theo loại mình kê đủ trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt), soi trước khi quyết tame con gì. Một bản Zekoa thứ hai nằm dự phòng ở weapon set 2, không reserve gì khi chưa kích.

## Skill Gems & Links

Mỗi companion mang bộ support theo vai. Hai support redirect — Romira's Requital và Loyalty — cùng category "Loyalty" nên một con chỉ cắm được một trong hai:

- **Zekoa 5-support:** Supercritical + Feeding Frenzy II + Rapid Attacks II + **Tangmazu's Thurible** + Muster. Supercritical cho 100% increased Critical Damage Bonus đổi lấy 20% less crit chance, mà Extra Crits dư crit chance nên đổi này lời thuần. Tangmazu's Thurible cho carry thành Gigantic và mượn evasion/deflection của mình (+4 mỗi 10 điểm) để Zekoa tự tank.
- **Bear (Wild Protector) 5-support:** **Catha's Brilliance** + **Romira's Requital** + Rapid Attacks II + Magnified Area II + Hulking Minions. Catha's Brilliance cho minion Blind kèm Ignite quanh người theo % minion max life. Romira's đặt ở đây vì Bear là granted: chết tự hồi sinh nên lưới redirect không bao giờ vắng lâu.
- **Azmerian Wolf 5-support:** Feeding Frenzy II + **Kurgal's Leash** + Muster + Loyalty + Rapid Attacks II. Một phím Command xả Eternal Hunt và kích Unholy Might **15 giây** cho cả mình lẫn Wolf. Một phím mỗi 15 giây là giữ được uptime.
- **Wolf Pack 5L:** Minion Splash II + Feeding Frenzy II + **Heft** + Muster + Loyalty — engine clear, Heft cho 30% more max phys hit damage.
- **Boar / Coconut Crab / Adorned Scarab:** mỗi con chạy bộ nền Muster + Loyalty + Feeding Frenzy II + Rapid Attacks II + Minion Splash II để rải shock/ignite và ăn type-count của Muster.
- **Swarming Wasp** đi khác cả pack: Magnified Area II + Prolonged Duration II nới rộng vùng phủ và kéo dài cửa sổ Periodic Invulnerability Aura, cộng Rage III + Rapid Attacks II cho hit của chính nó. Đây là con thủ nên support dồn hết vào uptime aura chứ không phải Muster hay Loyalty.

**Mark package, Sniper's Mark L16** + Mark for Death II + **Cooldown Recovery II** + Eternal Mark + Charged Mark + **Second Wind III**. Mark kích khi mục tiêu ăn crit rồi bị consume; Zekoa full crit nên mark bị ăn sau ~2-3 hit rồi vào cooldown. Cooldown Recovery II cộng Second Wind III (hai charge, mark lại ngay sau consume không chờ cooldown) giữ uptime mark cao, vì Sylvan's Effigy chỉ phát 90% increased companion damage vs Marked trong lúc mark còn sống, nên mỗi giây mark tắt là cả đàn mất 90% damage lên boss. Mark for Death II là mảnh break đầu (15% phys mỗi hit lên Marked); mảnh break vĩnh viễn Uruk's Smelting đã dời sang link Repulsion để cưỡi nguồn hit tần suất cao.

**Curse package, Blasphemy L10 + Repulsion L20** + Ritualistic Curse + Uruk's Smelting + Stun II + Armour Explosion. Blasphemy hoá Repulsion thành aura quanh người (khỏi trả cost 116 Ward). Enemy bị curse trúng đòn là nổ Repulsion Wave: phys hit 204% attack damage, knockback, 40% more stun, cooldown 0.5s với nhiều lượt. Wave là nguồn hit tự cast tần suất cao nhất nên break engine đặt cả ở đây: Uruk's Smelting full-break để mục tiêu chịu thêm phys vĩnh viễn (stack tới 20%), Armour Explosion nổ một cú lửa (100% phys → fire) mỗi khi full break một con. Ritualistic Curse cho 50% increased Area để aura phủ rộng.

**Discipline** (granted từ Sylvan's Effigy) chạy nền cho ES. Spirit Vessel và Healing Runes của bản cũ đã nhả ra để nuôi full pack — sustain redirect giờ dựa vào Vile Mending (minion regen 3% max life/s) cộng Embrace of the Wild trên tree.

Exclusion check: Romira's Requital × Loyalty cùng category "Loyalty" — một skill một bản, Romira's lên Bear còn Loyalty rải bốn con khác; Lineage support (Catha's Brilliance, Kurgal's Leash, Uruk's Smelting, Tangmazu's Thurible) mỗi gem đúng một bản trên toàn build.

## Spirit ledger quyết định field được bao nhiêu con

Pool 439. Nhánh đã chốt: **bỏ Gigantic Following, chạy full pack**. Anoint giờ là The Soul Meridian (ES recovery) thay vì Gigantic Following — gỡ luôn khoản 25% reduced Reservation Efficiency mà Gigantic Following bắt trả, và chính khoản đó cộng với pool tăng từ 347 lên 439 mới đủ chỗ cho năm con tamed cùng lúc. Trusted Kinship cho companion 30% more Reservation Efficiency đổi lấy 20% less cho skill non-companion, nên minion non-companion vẫn đứng ngoài ledger.

Reservation theo tooltip từng skill: Zekoa 47.4% (+30 flat Tangmazu) · Boar 39% · Adorned Scarab 36.6% · Coconut Crab 24% · Swarming Wasp 21% · Wolf Pack 60 flat · Blasphemy 60 flat. Pack hiện nhẹ: Coconut Crab 24% và Swarming Wasp 21% là hai con đỡ aura rẻ nhất bảng, nên gross tamed chỉ quanh ~168% và pool 439 dư chỗ thở. Các con số tooltip này là mức gross trước khi nhân efficiency — cây tree gánh phần kéo xuống: Easy Going 25% increased Reservation Efficiency of Companion Skills, Lord of Horrors 12% của Minion Skills, helm rune 8% nữa, cộng Effigy rune 15% increased Spirit. Toàn bộ đang bật cùng lúc và chạy live — headroom còn lại đọc trực tiếp trong client, và bốn nguồn granted (Azmerian Wolf, Wild Protector, Discipline, Purity dormant) vẫn đứng trên giả định reserve thật của chúng: verify tooltip từng cái khi cân thêm con.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} ascend theo thứ tự Wild Protector → The Natural Order → The Catha's Balance → :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"}. Wild Protector cho con Bear ngay Lab 1, tank miễn phí trước khi build thành hình. The Natural Order mở quyền tame Unique Beast, giữ một con cùng lúc, đây là cửa vào Zekoa. The Catha's Balance là multiplier mở liền không gate gear, biến vũ khí main-hand thành nguồn flat damage của cả đàn. Idolatry lấy cuối vì kèm thuế: companion 10% increased damage mỗi Idol, nhưng **mỗi non-Idol augment trên gear là -4% all elemental res**.

Idolatry sinh ra rule cứng cho mọi swap augment: khai delta Idolatry trước khi tính res, đọc res tab trước và sau từng lần đổi rune — số nhảy ±4% nghĩa là classification augment khác giả định, dừng lại tính lại. Lightning đang cap dư 31, fire và chaos 72, nhưng cold mới 66 nên một swap idol sang non-idol vô ý vẫn kéo cold tụt sâu thêm.

## Passive Tree

Hai keystone là Giant's Blood và Trusted Kinship — Giant's Blood mở quyền cầm Chober Chaber một tay, Trusted Kinship là gốc của cả spirit ledger. Tree nghiêng hẳn vào nuôi đàn: Easy Going và Lord of Horrors gánh reservation efficiency cho cả pack, Vile Mending cho minion 20% inc max life cộng regen 3%/s cộng +13% chaos res, Entropic Incarnation cho minion +13% chaos res và 10% phys-as-chaos, Lifelong Friend cho đàn revive nhanh 35% khi mọi minion đều là companion. Phần thủ của player đến từ Blur và The Wild Cat — evasion cộng node chuyển evasion thành deflection, đúng với lối né-deflect của build.

Năm điểm cuối từ Lv96 tới 100 nên dồn tiếp vào cụm evasion-to-deflection và minion-life đang đi, đừng đụng Glancing Blows gần đó — unlucky evade phá thẳng layer entry. 21 điểm Parry nằm ở weapon-set-2 points, pool tách biệt, dormant là 0 cost.

## Stat Priorities & Defenses

Snapshot Lv96, poe.ninja model 2026-06-15 (khớp từng số với client). Chi tiết tracking ở [character note ThaoCamVienSaiGon](/characters/thao-cam-vien-sai-gon):

- **Life / ES:** 1,885 / 1,667 · **Spirit:** 439 · **Mana:** 1,384
- **Armour / Evasion / Deflection:** 1,941 (17% phys DR) / 8,625 (evade 48%) / 7,115 (deflect 43%)
- **Resistances:** Fire 72 / Cold 66 / Light 75 (overcap 31) / Chaos 72 — cold 66 là lỗ duy nhất dưới cap
- **Max hit:** Phys 3,857 / Fire 11,848 / Cold 9,927 / Light 13,118 / Chaos 10,160 · **EHP:** 18,080 · **Int:** 339 · **MS:** 128%

Cold là lỗ duy nhất còn lại dưới cap, và phys là kênh chịu đòn mỏng nhất — element nào cũng đỡ được trên 10k còn phys mới 3,857. Cẩn trọng một bẫy gear: ba dòng Bonded cold/light/chaos trên Morior và sceptre là ShamanOnlyMods, Huntress không kích được, nên chúng là số 0 — client xác nhận cold đứng yên 66 dù Morior có ghi cold. Đừng tính bonded vào res khi craft tiếp. Thứ tự ưu tiên stat: **cold 66 → 75** (roll cold trên ring hoặc craft cold belt) → **dày phys EHP** (thêm armour hoặc life/ES flat, hoặc dòng % phys taken as element san về kênh dày hơn) → +Level of all Minion Skills và reservation efficiency → crit damage bonus cho Zekoa → evasion/deflection.

EHP layer order: lưới redirect vào máu đàn (Loyalty rải đàn, Romira's trên Bear) → evasion/deflection entry → armour (17% phys DR) → max res → ES + Life pool → Ghost Dance regen → recovery. Lớp redirect ở đây mỏng vì roster không có con nào mang "Damage Taken From Minions First", dồn hết vào Loyalty + Romira's; bù lại Periodic Invulnerability Aura của Swarming Wasp giữ đàn sống qua AoE chaff, còn có phủ tới player hay không thì đọc client mới tính vào EHP của mình. DPS companion không quote số cứng được: PoB2 không model tamed beast, `pob_coverage: PARTIAL` — số đo từ poe.ninja là hai con granted Bear ~134.8k và Azmerian Wolf ~135.0k cộng Wolf Pack ~20.5k; phần Zekoa cộng bốn aura beast đọc bằng quan sát in-client.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 4 |
| boss_damage | 4 |
| survivability | 4 |
| mobility | 3 |
| league_start | 4 |
| budget_scaling | 4 |

## Gear Progression

Damage chính đến từ crit engine dồn Zekoa cộng flat Catha qua main-hand, còn phòng thủ tựa vào Morior cho armour và chaos res. Hai ràng buộc dẫn mọi quyết định gear: giữ nguồn flat main-hand cho Catha, và đừng vỡ res khi đổi rune (Idolatry thuế -4% all ele mỗi non-idol augment).

### Gear theo slot

- **Main-hand:** Chober Chaber, Runeforged Leaden Greathammer 132-179 phys, cầm một tay qua Giant's Blood. +4 Level of all Minion Skills, "Increases and Reductions to Minion Damage also affect you", +44 spirit, rune convert 40% requirement sang Dex. Nguồn flat nuôi Catha kiêm hai mod minion nền, giữ nguyên không đổi sang sceptre flat thấp.
- **Offhand:** Sylvan's Effigy, "any number of Companions", grant Discipline + Azmerian Wolf, +90% companion damage vs Marked, rune +80% allies damage. Bất khả thay khi còn chơi full pack.
- **Body:** Morior Invictus, Grand Regalia. 309% inc Armour/Evasion/ES, +7 all attr / +11% chaos res / +13 spirit mỗi socket filled, "+10% of Armour also applies to Chaos", idol socket. Đây là nguồn armour 1,941 và chaos res 72 (so với gần 0 của bản Forgotten Warden cũ). Dòng Bonded cold/light/chaos trên item là số 0 vì ShamanOnly.
- **Helm:** Skull Corona, Ancestral Tiara, +2 Level of all Minion Skills, desecrated +45 Life và 42% inc ES. Rune: Minions 15% inc max Life + 8% Reservation Efficiency of Minion Skills. Không đụng.
- **Gloves:** Blood Talons, Runeforged Grand Bracers, +139 life, +27 fire +39 light, 88% inc evasion. Rune gain Rage on melee hit nuôi Mace Strike.
- **Boots:** Atziri's Step, Cinched Boots, 30% MS, 93% inc evasion, gain Deflection = 55% Evasion. Một item gánh cả mobility lẫn deflection.
- **Belt:** Wrath Buckle, Heavy Belt, +145 armour, +140 life, +34 cold, craft +32 fire, desecrated +17% Lightning và Chaos res, 3 charm slot.
- **Ring 1:** Storm Circle, Prismatic Ring, +109 life, +210 eva, +31 cold +18 light, +9 all-ele implicit.
- **Ring 2:** Oblivion Coil, Sapphire Ring, Minions +35% increased Critical Hit Chance và +30% Critical Damage Bonus, +13 all attr, +61 life, +25% cold implicit. Cả hai dòng minion crit đổ vào Zekoa.
- **Amulet:** Empyrean Locket, Azure Amulet, fractured +4 Level of all Minion Skills, +45 spirit, 47% inc max ES, 22% damage taken recouped as mana, anoint **The Soul Meridian** (ES recovery). Hub bất khả xâm phạm, cấm vaal.
- **Jewels:** The Adorned (×108% effect cho jewel magic) + bảy viên magic "Authoritative … of Gripping" (mỗi viên ~22-24% Minions Critical Damage Bonus cộng 8-11% Minions increased Damage) + một viên "Iconic … of Gripping" (24% Presence Area + 24% crit damage bonus) + From Nothing cho Blackflame Covenant. Cả tám viên magic đều dồn vào Zekoa thay vì chừa một slot phòng thủ, nên ES chỉ còn 1,667, đánh đổi lấy crit và vùng presence cho con carry. Engine crit của build nằm ở đây, toàn bộ phục vụ Zekoa, con duy nhất giữ Extra Crits. Đọc crit chance trên sheet Zekoa trong client: đã chạm 100% thì jewel nâng cấp tiếp vẫn là crit damage bonus.
- **Charm:** Arakaali's Gift + The Black Cat + Beira's Anguish + một slot quest, đóng các vector ailment, ưu tiên Thawing Charm cho freeze.

### Chase tier

Thứ tự lợi nhuận: DPS công khai đã dư từ hai con granted nên ưu tiên gỡ phòng thủ trước.

- **Cap cold 66 → 75** — roll cold trên ring hoặc craft cold belt, rẻ nhất, làm trước mọi khoản tốn tiền.
- **Dày phys EHP** — max hit phys 3,857 là trần thấp nhất; thêm armour, life/ES flat, hoặc dòng % phys taken as element để san về kênh element vốn trên 10k.
- **Perfect Flux vào Sylvan's Effigy** — đẩy Azmerian Wolf và Discipline lên L20; verify tooltip nhận unique trước khi đập.
- **Jewel crit tier cao hơn** — viên "of Gripping" roll cao hơn, nhân tiếp qua The Adorned, đổ thẳng vào Zekoa.
- **Vaal pipeline là bước chót tuyệt đối** — jewel rẻ trước, rồi Effigy gated với backup mua sẵn; spirit headroom phải chịu được multiply-down. Cấm vaal Empyrean Locket, Morior, charms.

## Leveling Notes

Campaign level bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"}: rotation Whirling Slash ×3 rồi Twister, Frost Nexus lay chilled ground. Hai việc bắt buộc trên đường: giữ ~20,000 gold từ Act 2 sang Act 3 cho lần full respec, và unlock :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} từ NPC Farrow ngay Act 1. Runeforging là một mảnh của hệ league 0.5 — toàn cảnh Remnant, Runeforging, Runic Ward nằm ở [Return of the Ancients](/guides/return-of-the-ancients).

Pivot ở Act 3 sau Lab 2, thứ tự sống còn: **tame con Unique carry TRƯỚC, rồi mới full respec** sang cây companion — đảo lại là kẹt giữa hai cây. Capture timeline đã chạy thật: wolf tạm ở Act 2 ngay khi có Tame Beast, ape carry ở Act 3 Jungle Ruins, một con aura bot ở interlude. Vào map thì Masters of the Atlas ưu tiên Hilda, Overseer tablet nhảy tier waystone, và fish mod lên carry bằng tablet "additional rare modifier" trên map có boss Silverfist — kỹ thuật stack tablet và chain boss qua Rite of the Nameless nằm đủ trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt).

## Budget & Investment

Build chạy được từ league-start không gear cố định: Twister gánh campaign, beast tame free. Nhưng bản đang đeo, định giá ở runes 2026-06-15 (1 div = 170 ex), là luxury **~380-420 div**, và phần lớn nằm ở engine crit.

Tiền dồn vào đúng hai khối. The Adorned roll 108% effect một mình **~170-200 div** (poe2scout báo floor 6.75 div là bản roll rác, đừng tin), cộng bảy viên jewel magic "Authoritative … of Gripping" **~150 div** (corrupted magic 2-mod, mỗi viên ~12-35 div tùy roll) và một viên Iconic ~13-15 div. Riêng khối jewel chiếm ~85% chi phí. Thêm amulet rare +4 Level of all Minion Skills cộng spirit **~40-50 div** là chạm ~95%. Ngược lại, phần "carry" rẻ như cho: Chober Chaber ~1 regal, :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} ~1 ex, :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Step"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus"} mỗi món ~1-20 ex, đám rare thủ (helm, belt, ring, sceptre) đều ~1-7 ex vì life/res/eva league này thừa. Rare đắt duy nhất ngoài hai khối trên là Oblivion Coil với combo minion crit, ~2-4 div.

Quy luật chi tiêu rút ra: chỉ mod **hiếm và build-defining** mới đắt, là %effect của The Adorned, minion crit damage bonus trên jewel corrupted, và +4 minion level trên amulet. Cùng một mod đổi slot là đổi giá: +4 minion trên amulet ~40 div nhưng +2/+3 minion trên helm hay sceptre chỉ ~1-7 ex. Đừng quote giá floor (poe2scout currentPrice hoặc search một-mod-lẻ) cho nhóm này, nó undercount từ chục tới nghìn lần; phải search đúng combo mod ở roll thật.

Floor để build chạy được thấp hơn hẳn: **~15-25 div**. The Adorned roll thấp ~6-7 div, jewel "of Gripping" roll vừa, amulet +3 minion là đủ clear T15, crit engine yếu hơn nhưng nền minion level cộng aura vẫn nguyên. Nấc từ floor lên geared thuần là đổ tiền mua roll cao trên đúng engine đó, diminishing returns, làm khi muốn đẩy ceiling Zekoa chứ không phải để build hoạt động.

## Failure Modes

Build làm tốt ba thứ: clear T15 ổn định gần như không phải aim, single target qua một carry crit được cả đàn và break engine khuếch đại, và lưới redirect khiến phần lớn hit không bao giờ chạm mình. Những chỗ nó gãy:

**Companion wipe kéo sập cả DPS lẫn thủ.** Loyalty và Romira's bắt cả đàn chịu less max life để đổi lấy redirect; Morior +50% companion max life và Vile Mending bù lại, nhưng AoE chaff lớn kiểu wave Simulacrum vẫn giết đàn nhanh, và đàn chết là mình trần: mất redirect, mất damage, mất luôn aura phys/shock của cả pack. Lớp counter cứng nhất giờ đã nằm sẵn trong roster: Swarming Wasp mang **Periodic Invulnerability Aura** pulse cho allies trong presence miễn nhiễm damage từng đợt, đúng thứ giữ đàn sống qua loại chaff diệt sạch pack. Đánh đổi: roster không có con nào mang "Damage Taken From Minions First" nên redirect vào máu minion mỏng, dựa hết vào Loyalty + Romira's. Đo trong client xem pulse Invulnerability có phủ cả player không trước khi tính vào EHP của mình: chắc chắn nó cứu đàn, chưa chắc cứu người.

**One-shot phys 3.86k.** Phys max hit mới 3,857, mỏng hơn hẳn element (đều trên 10k) — T17 slam và pinnacle burst phys vượt pool là chết bất chấp spreadsheet. Armour 1,941 chỉ cho 17% DR, không đủ chặn đòn lớn; dodge vẫn là layer chính. Đây là khoản EHP cần mua tiếp.

**Map mod ele-weakness hoặc -max res.** Cold mới 66 là lỗ rõ với mọi nguồn cold; ele-weakness kéo cả ba kênh tụt. Cap cold trước rồi mới yên tâm chạy mod đó; trong lúc chưa cap thì giữ ele-weakness ra khỏi pool roll map.

**Mark downtime trên boss.** Sniper's Mark sống ~2s mỗi 6s vì crit của chính Zekoa consume nó — Effigy 90% increased và armour break chỉ chạy trong window. Cooldown Recovery II đã thu hẹp lỗ này; debuff vĩnh viễn của Uruk's là phần bù đã nằm sẵn trong thiết kế. Nếu damage giữa các window vẫn hụt rõ, Voltaic Mark là fallback giữ Marked thường trực với giá bỏ payload crit.

**Gear floor.** Chưa cap cold và chưa dày phys thì hai lỗ one-shot còn toang — đừng lấy số của bản đủ đồ làm baseline khi chưa mua đủ, dù floor này chỉ quanh một div.

**Patch sensitivity hai chiều.** GGG fix bug weapon-swap thì 21 điểm Parry dormant cộng Rapture Gnarl (rune "Onslaught while on Low Runic Ward") quay lại là buff lớn không tốn gì. Chiều ngược: nerf Sylvan's Effigy hay Trusted Kinship là chết cả hướng pack; nerf mod retention của Tame Beast là mất Extra Crits — toàn bộ đầu tư crit đi theo.

## Verdict

Build cho người thích minion APM thấp: đàn tự đánh, mình giữ ba nhịp phím: mark mỗi 6 giây, Command Wolf mỗi 15 giây, di chuyển để né. Triết lý chi tiêu spirit đã chốt: một carry crit, bốn aura bot, mọi sub-DPS phải miễn phí. Đợt quay xe sang Chober Chaber một tay qua Giant's Blood cộng Morior Invictus đã vá xong chaos res và thêm armour, kéo EHP lên ~18.1k từ mức ~13.8k của bản Forgotten Warden cũ; trần thật còn lại là cold 66 chưa cap và phys max hit 3.86k mỏng (mỏng thêm sau khi đổi viên jewel phòng thủ sang offense), nên đây là build farm T15-16 thoải mái chứ chưa phải shell tank pinnacle deathless. Số DPS của Zekoa là quan sát in-client vì PoB2 chưa model tamed companion.

## Changelog

### 2026-06-15

- Đàn tamed tái cấu trúc sang hướng thủ: bỏ Caustic Crab, Bramble Hulk, Quadrilla; thêm Adorned Scarab (Energy Shield Aura, hai mod self Regenerates Life + Armoured giữ aura bot dai), Swarming Wasp (Periodic Invulnerability Aura là lớp anti-wipe), Coconut Crab (Extra Physical Damage Aura + All Damage Ignites). Roster mới rẻ hơn hẳn: gross tamed ~203% → ~168% (Coconut Crab 24% + Swarming Wasp 21% thay hai con 42.3%). Đánh đổi: mất lớp redirect "Damage Taken From Minions First" của Bramble Hulk.
- Break engine dời Uruk's Smelting từ Sniper's Mark sang Repulsion (cưỡi Wave tần suất cao thay vì cú mark chậm), Mark thêm Second Wind III để giữ uptime cho +90% companion damage vs Marked của Sylvan's Effigy. Viên jewel ES/mana phòng thủ đổi sang Iconic Sapphire of Gripping (Presence AoE + crit) — ES 1,929 → 1,667, EHP 19,432 → 18,080, phys max hit 4,120 → 3,857. Granted DPS lên Bear 134.8k / Azmerian Wolf 135.0k / Wolf Pack 20.5k.

### 2026-06-14

- Rewrite theo poe.ninja model Lv96: quay xe vũ khí sang Chober Chaber cầm một tay qua keystone Giant's Blood (giữ Sylvan's Effigy offhand), body đổi sang Morior Invictus (nguồn armour 1941 + chaos res 72), boots Atziri's Step, ring2 Oblivion Coil, amulet Empyrean Locket. Anoint đổi sang The Soul Meridian, bỏ thuế reservation nên full pack năm con tamed (Zekoa carry + Bramble Hulk + Caustic Crab + Diretusk Boar + Quadrilla) chạy được trên pool 439. Engine crit nâng cấp sang The Adorned ×108% trên bảy jewel magic "of Gripping". Mark link thêm Cooldown Recovery II và nhận Uruk's Smelting; curse đổi sang Armour Demolisher II + Armour Explosion + Ritualistic Curse, bỏ Withering Touch. Tree đổi sang cụm companion reservation efficiency + evasion-to-deflection. Res gap dời từ chaos sang cold (66). Bonded mods trên Morior/sceptre là ShamanOnly nên chết trên Huntress.
- Thêm **Periodic Invulnerability Aura** vào nhóm mod aura-bot đáng săn — lớp counter trực tiếp cho companion wipe (poedb Archnemesis prefix `MonsterImmuneAura1`, pulse "monster allies cannot take damage"); slot Energy Shield Aura của Quadrilla là chỗ swap rẻ nhất.

### 2026-06-12

- Bản trước: Tyranny's Grip + Forgotten Warden + Antlion Charger, anoint Gigantic Following cắt Bramble Hulk, chaos là lỗ res duy nhất, pool 347.

## Relationships

- **related** [Character ThaoCamVienSaiGon](/characters/thao-cam-vien-sai-gon) — live snapshot tracking của chính character chạy build này.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — pipeline đầy đủ: cơ chế tame + modifier retention, bảng reservation nền theo từng loại beast, bốn nguồn nhân damage con carry, săn rare beast ở đâu, nhồi modifier qua tablet stacking, chain boss bằng Rite of the Nameless.
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản spirit cho nguyên đàn, nguồn spirit và reservation efficiency.
- **references** [Unique Items Mới & Meta Shift](/guides/0-5-new-unique-items) — Sylvan's Effigy, Morior Invictus, Atziri's Step và lứa companion item 0.5.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Remnant, Runeforging, Runic Ward mà build khai thác.
