---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Pack Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-06-12'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
budget_tier: medium-budget
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
  - sylvans-effigy
  - minion
  - crit
  - armour-break
  - 0-5
  - poe2
---

# Tame Beast Companion Pack Spirit Walker

Bắt beast bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, ráp một đàn companion quanh đúng một con crit carry: Zekoa the Headcrusher giữ mod Extra Crits gánh single target, Diretusk Boar và Antlion Charger làm aura bot, Wolf Pack trám clear, còn Bear với Azmerian Wolf đi kèm miễn phí từ ascendancy và :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"}. Nguyên tắc chi tiêu của build: **spirit không trả cho DPS riêng của một con — chỉ trả cho carry, cho multiplier toàn đàn, hoặc cho lớp giữ mạng**; sub-DPS thật của build là hai con granted không tốn gì. Mình điều phối mark, curse aura và vị trí đứng. Character thật đang chạy Lv95, clear T15 ổn định.

## Build Overview

Đàn ~89% phys, nền flat đến từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha's_Balance"}: companion nhận thêm Attack Damage bằng **60% damage vũ khí main-hand**. :wiki-link{url="https://www.poe2wiki.net/wiki/Tyranny's_Grip"} Runemastered trung bình ~411 phys mỗi hit, nên mỗi con ăn ≈247 flat phys mỗi đòn dù mình không tự vung cây spear. Trên nền đó chồng :wiki-link{url="https://www.poe2wiki.net/wiki/Muster"} 7% more mỗi loại reviving minion — sáu loại đang field là 42% more cho con được support — và Gigantic Following từ anoint cho minion 20% more damage cộng 20% more life.

Phần crit dồn hết về một con. Zekoa giữ mod **Extra Crits** (300% increased Critical Hit Chance — nhân 4 base crit), năm viên jewel cộng tổng **+118% Minions Critical Damage Bonus**, và :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} trả thêm 65% increased Critical Damage Bonus cho cú crit kế tiếp lên mục tiêu Marked. Các con khác không crit — mọi đầu tư crit từ jewel tới mark payload đều là đầu tư cho Zekoa.

Single target còn một engine thứ hai: **armour break vĩnh viễn**. Mark for Death II làm *mọi* hit lên mục tiêu Marked break armour bằng 15% phys gây ra; Repulsion Wave (nổ ~2 lần/giây khi đàn nện vào enemy bị curse) cũng là phys hit nên break theo; **Uruk's Smelting** trên Repulsion cho break mạnh hơn 70% và khi full break thì mục tiêu **vĩnh viễn chịu thêm 5% phys, stack tới 20%** — debuff sống xuyên qua mọi khoảng trống của mark. Tyranny's Grip còn mang rune Bonded "20% increased effect of Fully Broken Armour" nhân tiếp lên trạng thái đó.

Phòng thủ xếp lớp: evasion 7,035 với deflection 5,065 đỡ entry; ES 1,347 cộng Life 2,008 làm pool; :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} hồi ES bằng 2% evasion mỗi giây sau khi mất shroud; và một lưới redirect dày — Loyalty trên năm con cộng Romira's Requital trên Bear chuyển **~70% hit damage vào máu đàn trước khi chạm mình**. :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} hoá Repulsion thành aura knockback cộng stun quanh người, Refutation mở window auto-block 4 giây. Kỷ luật cứng vẫn nguyên: **ở lì weapon set 1, không weapon-swap** — swap là despawn cả đàn (bug spirit desync chưa fix).

## Đàn companion gồm con nào

Ba con tamed chiếm spirit, mỗi con một vai và mod retained quyết định vai đó:

- **Zekoa the Headcrusher** — bản unique của :wiki-link{url="https://www.poe2wiki.net/wiki/Mighty_Silverfist"}, bắt qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}. Mod giữ lại: **Extra Crits** + Periodically unleashes Ice. L19/Q20, reservation 47.4% pool. Carry duy nhất.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Diretusk_Boar"} — mod giữ lại: **All Damage Shocks** + **Haste Aura** + Fire Resistant. Hit của nó luôn shock nên boss gần như thường trực chịu thêm damage cho cả đàn hưởng, kèm haste aura cho đàn. Reservation 39%.
- **Antlion Charger** — mod giữ lại: **Extra Physical Damage Aura** + Trail of Ice. Aura phys nuôi đúng đàn 89% phys. Reservation 42.3%.

:wiki-link{url="https://www.poe2wiki.net/wiki/Wolf_Pack"} (60 spirit flat, L19 ra 7 con sói, level bằng Uncut Spirit Gem) gánh clear với Minion Splash. Ba nguồn granted không tốn gem slot: Azmerian Wolf từ Sylvan's Effigy, con Bear từ :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"}, và **Spirit Vessel** từ :wiki-link{url="https://www.poe2wiki.net/wiki/Forgotten_Warden"} làm buff bot. Hai con granted đầu chính là sub-DPS của build — poe.ninja đo Bear 60.1k và Wolf 57.7k mà không tốn một điểm spirit nào. Bramble Hulk đã rời roster: 42.3% pool đổi lấy DPS riêng cộng một nấc Muster là cái giá không đáng, số spirit đó nhả ra cho Ghost Dance và Blasphemy.

Tame mechanics quyết định cách nuôi đàn. Companion gem nuôi được cả level lẫn quality sau capture: level bằng Uncut Skill Gem (Zekoa đang L19, lên L20 là 84% more), còn quality bằng Gemcutter's Prism áp thẳng lên companion gem, Q20 cho 10% Reservation Efficiency (đã test in-client trên gem Q0, res eff tăng đúng theo quality). Tame Beast Q20 trước lần tame vẫn tiện vì companion sinh ra Q20 sẵn, nhưng quên thì 4 GCP vá sau được. Mỗi mod giữ lại đẩy reservation lên trên mức nền — reservation nền của từng loại beast, từ 9.3% của Hatchling tới 56.1% của Elephant Tortoise, mình kê thành bảng trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt), soi trước khi quyết tame con gì. Một bản Zekoa thứ hai (Magma Barrier + Explodes Corpses + Extra Lightning) nằm dự phòng ở weapon set 2, không reserve gì khi chưa kích.

## Skill Gems & Links

Mỗi companion mang bộ support theo vai. Hai support họ redirect — Romira's Requital và Loyalty — cùng category "Loyalty" nên một con chỉ cắm được một trong hai:

- **Zekoa 5L:** Feeding Frenzy II + Rapid Attacks II + Rage III + Muster + Loyalty. Damage support dồn cho carry, redirect góp một chân.
- **Bear (Wild Protector) 5 support:** **Catha's Brilliance** + **Romira's Requital** + Rapid Attacks II + Magnified Area II + Feeding Frenzy II. Catha's Brilliance cho minion Blind kèm Ignite quanh 2m "as though dealing Base Fire Damage equal to 10% of Minion's Maximum Life" — Bear ăn +50% companion life từ Forgotten Warden nên ignite này ra 5.5k DoT đo được. Romira's đặt ở đây vì Bear là granted: chết tự hồi sinh, lưới redirect cộng Recoup 200% không bao giờ vắng lâu.
- **Azmerian Wolf:** Rage III + Feeding Frenzy II + **Kurgal's Leash** + Loyalty + Muster. Một phím Command xả Eternal Hunt (7 spirit wolves, Attack Damage 1000%) và kích luôn Unholy Might **15 giây** cho cả mình lẫn Wolf — một phím mỗi 15 giây là giữ được uptime.
- **Wolf Pack 5L:** Minion Splash II + Feeding Frenzy II + Rapid Attacks II + Muster + Loyalty — engine clear.
- **Boar:** Rage III + Muster + Loyalty + Feeding Frenzy II. **Antlion:** Rapid Attacks II + Loyalty + Feeding Frenzy II + Muster.

**Mark package — Sniper's Mark L16** + Mark for Death II + Eternal Mark + Charged Mark + Prolonged Duration II. Mark kích khi mục tiêu **ăn crit** rồi bị consume; Zekoa full crit nên cycle thật là: cast → crit đầu kích payload (Eternal Mark đỡ lần này) → crit kế consume → chờ cooldown 6s. Mỗi cycle trả hai cú proc 65% crit bonus, hai Frenzy Charge và hai vũng Shocked Ground, đổi bằng việc Marked status chỉ sống ~2s mỗi 6s — đúng khoảng đó Sylvan's Effigy mới phát 85-91% increased damage cho đàn và Mark for Death mới break. Hai slot trong link này không kiếm cơm: Prolonged Duration II kéo duration 8s mà mark luôn chết vì crit trước, Charged Mark đặt shock lên mục tiêu Boar đã shock sẵn. Swap kế tiếp: **Cooldown Recovery II vào chỗ Prolonged Duration II** để nén cycle; slot Charged Mark xét sau khi đo cảm giác boss.

**Curse package — Blasphemy L10/Q20 + Repulsion L20/Q20** + Stun II + Magnified Area II + **Uruk's Smelting** + Withering Touch. Blasphemy reserve 60 spirit, hoá Repulsion thành aura quanh người (chịu 46% less magnitude — 20 Fragility còn ~10.8, và khỏi trả cost 116 Ward). Enemy bị curse trúng đòn là nổ Repulsion Wave: phys hit 204% attack damage, knockback, 40% more stun cộng 10% more mỗi Fragility, cooldown 0.5s với 5 lượt. Wave là nguồn hit tự cast tần suất cao nhất của mình nên Uruk's Smelting ở đây: break 70% more và full break trả debuff phys vĩnh viễn như mô tả ở Overview. Withering Touch là mảnh ăn theo Kurgal's: wither chỉ proc theo **chaos damage** wave gây ra, mà chaos của wave đến từ Unholy Might khi Command — đổi lại wave chịu 25% less damage. Vào boss T15 đếm wither stack một lần; threshold boss lớn, stack không lên nổi thì thay Withering Touch bằng support stun/defense.

**Refutation L18/Q20** (cost 11 Ward, cooldown 10.2s) + Prolonged Duration II + Cooldown Recovery II + Second Wind III + Mobility + Rapid Casting II — window 4 giây auto-block mọi hướng, enemy bị block dính Parried chịu **50% more Attack Damage** trong 3.7s, tức đàn toàn attack đánh con nào vừa chạm mình là ăn thêm nửa lần damage. Second Wind III cho hai lượt dùng. **Spirit Vessel** cắm Walking Calamity + Furious Slam + Rage III + Loyalty — Vessel ăn 20% more mỗi loại skill khác nhau, hai active hiện tại là 1.4x, còn chỗ cho active thứ ba. **Discipline** (granted, +278 ES) mang **Healing Runes**: +10 spirit, rút 10% max Runic Ward mỗi 5 giây để heal đàn 200% lượng ward mất — máy sustain cho lưới redirect. **Ghost Dance** 30 spirit + Cooldown Recovery II: shroud mỗi 11.1s nhanh hơn nhờ CDR, mất shroud là regen ES bằng 2% evasion mỗi giây ≈ ~141 ES/s.

Exclusion check: Romira's Requital × Loyalty cùng category Loyalty — một skill một bản, Romira's lên Bear còn Loyalty rải năm con khác; Lineage support (Catha's Brilliance, Kurgal's Leash, Uruk's Smelting) mỗi gem đúng một bản trên toàn build; Withering Touch × đàn phys — wither chỉ khuếch đại chaos, không chạm 89% phys của đàn, giá trị treo trên uptime Unholy Might.

## Spirit ledger quyết định field được bao nhiêu con

Pool 347. Nhánh đã chốt: **giữ Gigantic Following, cắt Bramble Hulk** — anoint cho minion 20% more damage cộng 20% more life với giá 25% reduced Reservation Efficiency, và thay vì swap anoint để nhét thêm một body, build nhả body ra để nuôi hai khoản phòng thủ mới. Trusted Kinship cho companion 30% more Reservation Efficiency, đổi lại 20% less cho mọi skill non-companion, nên Purity of Lightning tắt vĩnh viễn và minion non-companion không có cửa vào ledger.

Reservation theo tooltip từng skill: Zekoa 47.4% pool · Antlion 42.3% · Boar 39% · Wolf Pack 60 flat · Ghost Dance 30 flat (quality cho 20% increased efficiency) · Blasphemy 60 flat (10% increased efficiency) · Healing Runes +10 flat. Helm góp 8% increased Reservation Efficiency of Minion Skills, Effigy rune góp 15% increased Spirit. Toàn bộ đang bật cùng lúc và chạy live — headroom còn lại đọc trực tiếp trong client, và bốn nguồn granted (Azmerian Wolf, Wild Protector, Spirit Vessel, Discipline) vẫn đứng trên giả định reserve 0: verify tooltip từng cái, con nào ăn spirit thật thì headroom co tương ứng.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} ascend theo thứ tự Wild Protector → The Natural Order → The Catha's Balance → :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"}. Wild Protector cho con Bear ngay Lab 1 — tank miễn phí trước khi build thành hình. The Natural Order mở quyền tame Unique Beast, giữ một con cùng lúc — cửa vào Zekoa. The Catha's Balance là multiplier mở liền không gate gear, biến vũ khí main-hand thành nguồn damage của cả đàn. Idolatry lấy cuối vì kèm thuế: companion 10% increased damage mỗi Idol, nhưng **mỗi non-Idol augment trên gear là -4% all elemental res**. Sacred Unity free khi đủ ba nhánh spirit; phần luôn bật là Embrace of the Wild: allies trong presence của Bear hồi 2% max Life mỗi giây và đẩy 5% damage chúng chịu sang Bear — thêm một lớp lên lưới redirect.

Idolatry sinh ra rule cứng cho mọi swap augment: khai delta Idolatry trước khi tính res, đọc res tab trước và sau từng lần đổi rune — số nhảy ±4% nghĩa là classification augment khác giả định, dừng lại tính lại. Cold và lightning đang đứng đúng cap, một swap idol sang non-idol là âm thầm vỡ cả hai.

## Passive Tree

Keystone của tree là Trusted Kinship — toàn bộ spirit ledger ở trên xoay quanh nó. Năm điểm từ Lv95 tới 100 dồn vào cụm Keeper: path lên **First Teachings of the Keeper** (+5% Fire, +5% Chaos res, 8% Evasion thành Deflection, 10% ES recharge) và **First Principle of the Hollow** (20% increased Evasion, 20% increased ES, +5% Cold/Light), các small node trên đường mỗi node thêm 5% Evasion thành Deflection — cụm trả nhiều nhất cho cả thủ lẫn lỗ chaos cùng lúc. Tuyệt đối không click Glancing Blows gần đó: unlucky evade phá thẳng layer entry. **Distant Dreamer** (+21% chaos res qua nhánh có node +5 chaos) là contingent nếu ring mới không cap nổi chaos.

Int floor giờ chỉ còn 115 của Skull Corona — đang 135, dư 20 — nhưng mọi node Str/Dex hiện có đều load-bearing (Str headroom 3), không respec node attribute nào. 21 điểm Parry nằm ở weapon-set-2 points, pool tách biệt, dormant là 0 cost.

## Stat Priorities & Defenses

Snapshot Lv95, poe.ninja model 2026-06-12:

- **Life / ES:** 2,008 / 1,347 · **Spirit:** 347 · **Mana:** 774
- **Evasion / Deflection:** 7,035 (evade 43%) / 5,065 (deflect 33%) · **Armour:** 0
- **Resistances:** Fire 75 (+15) / Cold 75 (+23) / Light 75 (+75) / **Chaos ~25 in-game** (poe.ninja báo 17 vì tính Bonded-off — luôn lấy số client)
- **Max hit:** Phys 3,635 / Chaos 3,568 · **EHP:** ~13.8k · **Int:** 135 · **MS:** 141%

Chaos là lỗ duy nhất còn lại. Thứ tự ưu tiên stat: **chaos res 25 → 75** (ring Amethyst + Soul Core of Tacati ở boots) → giữ cold cap khi thay ring (Storm Circle đang gánh +31 cold explicit cộng +9 all-ele implicit, ring mới cần cold ≥17) → +Life → Int ≥ 115 → flat phys main-hand nuôi Catha → +Level of all Minion Skills và reservation efficiency → evasion/deflection.

EHP layer order: lưới redirect 70% vào máu đàn → evasion/deflection entry → max res → ES + Life pool → Ghost Dance ~141 ES/s → Runic Ward → recovery. Ward giờ là tài nguyên thật của build — Refutation trả 11 Ward mỗi lượt, Healing Runes rút 10%/5s — nên đọc max Runic Ward trong client để biết hai skill này đang sống bằng pool bao nhiêu. DPS companion không quote số cứng được: PoB2 không model tamed beast, `pob_coverage: PARTIAL` — số đo được từ poe.ninja là Bear 60.1k cộng 5.5k ignite, Azmerian Wolf 57.7k, Wolf Pack 8.3k; phần Zekoa đọc bằng quan sát in-client.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 4 |
| boss_damage | 3 |
| survivability | 3 |
| mobility | 3 |
| league_start | 4 |
| budget_scaling | 4 |

## Gear Progression

Forgotten Warden cho 0 res và 0 player-life nên res với life dồn hết lên các slot còn lại, còn damage chính đến từ main-hand flat phys qua Catha — hai ràng buộc đó dẫn mọi quyết định gear.

### Gear theo slot

- **Main-hand:** Tyranny's Grip — Runemastered spear, avg ~411 phys — rune 18% increased Physical Damage + Bonded "20% increased effect of Fully Broken Armour", enchant 12-18 fire. Nguồn flat nuôi Catha kiêm mảnh cuối của break engine; tuyệt đối không đổi sang sceptre flat thấp.
- **Offhand:** Sylvan's Effigy — "any number of Companions", grant Discipline L18 + Azmerian Wolf L18. Rune: 15% increased Spirit + Companions 12% increased Attack Speed, kèm Bonded attack speed và 30% Cooldown Recovery cho Command — câu sau nén luôn nhịp Eternal Hunt của Wolf.
- **Body:** Forgotten Warden — companion +50% max life, deflection theo missing ES, redirect 10-15% deflected hit, grant Spirit Vessel. Rune cụm idol: "Idols gain Bonded benefits" mở Bonded +8% chaos res và +5% Quality of all Skills; dòng "+10% of Armour also applies to Chaos" đang là số 0 vì Armour 0 — đừng gỡ cụm này trước khi có nguồn chaos thay, Bonded +8% chaos đang gánh.
- **Helm:** Skull Corona — Ancestral Tiara, +2 Level of all Minion Skills, desecrated +45 Life và 42% increased ES. Rune: Minions 15% increased max Life + 8% Reservation Efficiency of Minion Skills. Không đụng.
- **Gloves:** Blood Talons — +139 life, +27 fire +39 light, corrupted. Rune đang là 18% AES + Bonded life/mana — chỗ này dành cho **Carved Majesty**: companions gain :wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} 4s khi đánh trúng mục tiêu Marked, window mark 2s cấp buff 4s nên uptime sống tốt với cycle 6s, đáng +15-20% boss DPS. Đường Onslaught này rẻ hơn và không drain ward như [Runic Ward Onslaught Loop](/guides/0-5-runic-ward-onslaught-loop). Rune trên item corrupted vẫn replace được trong socket sẵn có.
- **Boots:** Eagle League — +137 life, +27 cold +36 light, 30% MS. Rune hiện là QoL sprint; nhường chỗ cho **Soul Core of Tacati** (+11% chaos res) khi đóng lỗ chaos.
- **Belt:** Wrath Buckle — +140 life, +34 cold, craft +32 fire, desecrated **+17% Lightning và Chaos res**, 3 charm slot.
- **Ring 1:** Storm Circle — +109 life, +210 eva, +31 cold +18 light, +9 all-ele implicit. Slot sẽ thay bằng **Amethyst Ring** chaos ≥24, cold ≥17, life ≥100 — đeo cùng Tacati là chaos cap 75. Search trade `status: securable`, rank top-10 theo chaos cộng life.
- **Ring 2:** Blood Grasp — +21 Int, minion life và attack speed. Giữ.
- **Amulet:** Gale Medallion — fractured +3 Level of all Minion Skills, +47 spirit, +32 Int, +15 all-ele, craft 22% global AES, desecrated "49% increased ES from Equipped Body Armour" (đọc ES base của Forgotten Warden trong client — body không có ES base thì dòng này là số 0, để dành lần desecrate sau), anoint **Gigantic Following**. Hub bất khả xâm phạm, cấm vaal.
- **Jewels:** 5 viên Sapphire, mỗi viên mang "Minions have 21-25% increased Critical Damage Bonus" — tổng +118% crit multi, tất cả phục vụ Zekoa — kèm 7-9% Minions increased Damage và utility ES/stun threshold. Đọc crit chance trên sheet Zekoa trong client: đã chạm 100% thì jewel nâng cấp tiếp theo vẫn là crit multi, chưa chạm thì cân lại nguồn crit chance trước.
- **Charm:** Arakaali's Gift + The Black Cat + Beira's Anguish (Dousing — ignited ground bằng 500% max Life khi dùng). Slot thứ 4 từ quest còn trống — **Thawing Charm** đóng vector freeze, ailment duy nhất chưa cover.

### Chase tier

Thứ tự lợi nhuận sau khi gem swap miễn phí (Cooldown Recovery II vào mark link) xong:

- **Carved Majesty vào gloves** — engine Onslaught cho boss, làm trước mọi khoản tốn tiền khác.
- **Ring chaos + Tacati** — đóng lỗ chaos 25 → 75, ưu tiên ngay sau Carved Majesty.
- **Perfect Flux vào Sylvan's Effigy** (~6-7 div) — đẩy Azmerian Wolf và Discipline lên L20; verify tooltip nhận unique trước khi đập.
- **Belt chase** — Life ≥120, cold ≥34, fire ≥32 tách riêng từng ngưỡng, implicit ≥3 charm slot; rồi Genesis Tree craft "increased Reservation Efficiency of Minion Skills" cho lại 27-32 spirit.
- **Tyranny's Grip tier cao hơn** — chỉ mua sau khi verify trên poedb rằng tier trên Ezomyte tồn tại cho bench; ăn được là +10-20% flat Catha cho cả đàn.
- **Mystic Alloy lên boots base mới** — +10-15 Spirit, nguồn Spirit duy nhất ngoài amulet/body/sceptre.
- **Vaal pipeline là bước chót tuyệt đối** — jewel rẻ trước, rồi boots, rồi Effigy gated với backup mua sẵn; spirit headroom phải chịu được multiply-down 0.78x. Cấm vaal ring mới, Gale Medallion, charms.

## Leveling Notes

Campaign level bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"}: rotation Whirling Slash ×3 rồi Twister, Frost Nexus lay chilled ground, nhánh Owl projectile-speed hỗ trợ. Hai việc bắt buộc trên đường: giữ ~20,000 gold từ Act 2 sang Act 3 cho lần full respec, và unlock :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} từ NPC Farrow ngay Act 1. Runeforging là một mảnh của hệ league 0.5 — toàn cảnh Remnant, Runeforging, Runic Ward nằm ở [Return of the Ancients](/guides/return-of-the-ancients).

Pivot ở Act 3 sau Lab 2, thứ tự sống còn: **tame con Unique carry TRƯỚC, rồi mới full respec** sang cây companion — đảo lại là kẹt giữa hai cây. Capture timeline đã chạy thật: wolf tạm ở Act 2 ngay khi có Tame Beast, ape carry ở Act 3 Jungle Ruins, một con aura bot ở interlude. Vào map thì Masters of the Atlas ưu tiên Hilda, Overseer tablet nhảy tier waystone, và fish mod lên carry bằng tablet "additional rare modifier" trên map có boss Silverfist — kỹ thuật stack tablet và chain boss qua Rite of the Nameless nằm đủ trong [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt).

## Budget & Investment

Build chạy được từ league-start không gear cố định — Twister gánh campaign, beast tame free, Tyranny's Grip là unique req level 5 giá rẻ. Khung hiện tại đứng trên ba unique core — Forgotten Warden, Sylvan's Effigy, Tyranny's Grip Runemastered — cả ba thuộc lứa companion item 0.5 mình đã kê ở [Unique Items Mới & Meta Shift](/guides/0-5-new-unique-items). Nấc kế tiếp rất rẻ: một gem Cooldown Recovery II, rune Carved Majesty, ring Amethyst chaos T1 cộng Soul Core of Tacati — tổng quanh một div đổ lại, và dưới floor đó build vẫn chạy nhưng chaos kẹt ~25 còn boss thiếu engine Onslaught. Chase tier (Perfect Flux ~6-7 div, belt Genesis Tree, weapon tier) là diminishing returns, đáng làm khi muốn đẩy ceiling chứ không phải trước.

## Failure Modes

Build làm tốt ba thứ: clear T15 ổn định gần như không phải aim, single target qua một carry crit được cả đàn và break engine khuếch đại, và lưới redirect khiến phần lớn hit không bao giờ chạm mình. Những chỗ nó gãy:

**Companion wipe kéo sập cả DPS lẫn thủ.** Loyalty và Romira's bắt cả đàn chịu 30% less max life để đổi lấy redirect — Forgotten Warden +50% bù gần hết nhưng AoE chaff lớn kiểu wave Simulacrum vẫn giết đàn nhanh hơn bình thường, và đàn chết là mình trần: mất 70% redirect, mất damage, mất luôn Healing Runes target.

**One-shot phys/chaos 3.6k.** T17 slam và pinnacle burst vượt pool là chết bất chấp spreadsheet — Keeper cluster, Ghost Dance và redirect đều không chặn đòn vượt EHP. Kỷ luật dodge là layer chính, không có đường tắt.

**Map mod ele-weakness hoặc -max res.** Chaos ~25 chưa vá là lỗ toang hoác với mọi nguồn chaos; sau ring với Tacati thì cap 75 nhưng overcap mỏng, một dòng "-X% res" vẫn kéo tụt. Buffer là Distant Dreamer hoặc giữ mod đó ra khỏi pool roll map.

**Mark downtime trên boss.** Sniper's Mark sống ~2s mỗi 6s vì crit của chính Zekoa consume nó — Effigy 85-91% increased và armour break chỉ chạy trong window. Cooldown Recovery II thu hẹp lỗ này; debuff vĩnh viễn của Uruk's là phần bù đã nằm sẵn trong thiết kế. Nếu sau khi swap mà damage đàn giữa các window vẫn hụt rõ, Voltaic Mark là fallback giữ Marked thường trực với giá bỏ toàn bộ payload crit.

**Gear floor.** Chưa có ring chaos, Tacati và Carved Majesty thì chaos hở và boss thiếu Onslaught — đừng lấy số của bản đủ đồ làm baseline khi chưa mua đủ, dù floor này chỉ quanh một div.

**Patch sensitivity hai chiều.** GGG fix bug weapon-swap thì 21 điểm Parry dormant cộng Rapture Gnarl (rune "Onslaught while on Low Runic Ward") quay lại là buff lớn không tốn gì. Chiều ngược: nerf Sylvan's Effigy hay Trusted Kinship là chết cả hướng pack; nerf mod retention của Tame Beast là mất Extra Crits — toàn bộ đầu tư crit đi theo.

## Verdict

Build cho người thích minion APM thấp: đàn tự đánh, mình giữ nhịp ba phím — mark mỗi 6 giây, Command Wolf mỗi 15 giây, Refutation khi bị vây. Triết lý chi tiêu spirit đã chốt: một carry crit, hai aura bot, mọi sub-DPS phải miễn phí. Floor chạy từ league-start, bản hiện tại còn thiếu đúng một gem với hai rune rẻ tiền để khép vòng Onslaught và chaos; trần thật vẫn là hai lỗ one-shot phys/chaos 3.6k, nên đây là build farm T15-16 thoải mái chứ không phải shell tank pinnacle deathless. Số DPS của Zekoa là quan sát in-client vì PoB2 chưa model tamed companion.

## Changelog

### 2026-06-12

- Rewrite theo poe.ninja model Lv95: roster bỏ Bramble Hulk giữ Gigantic Following, Zekoa Extra Crits làm carry crit duy nhất với 5 jewel crit multi, Boar/Antlion thành aura bot (All Damage Shocks + Haste / Extra Phys), mark package đổi sang Sniper's Mark, curse đổi sang Blasphemy + Repulsion với break engine Mark for Death + Uruk's Smelting, lưới redirect Loyalty ×5 + Romira's trên Bear, Ghost Dance + Healing Runes vào ledger. Đính chính: Romira's và Loyalty cùng category "Loyalty" (không phải Lineage), Lineage một bản mỗi gem.

### 2026-06-10

- Consolidate hai doc carry + zoo thành một doc pack, baseline character Lv94 (OAuth export), fold improvement plan đã qua adversarial verify.

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — pipeline đầy đủ: cơ chế tame + modifier retention, bảng reservation nền theo từng loại beast, bốn nguồn nhân damage con carry, săn rare beast ở đâu, nhồi modifier qua tablet stacking, và chain boss bằng Rite of the Nameless.
- **related_mechanics** [Runic Ward Onslaught Loop cho Minion](/guides/0-5-runic-ward-onslaught-loop) — build dùng ward cho Refutation và Healing Runes nhưng lấy Onslaught qua Carved Majesty trên Marked target; bản loop Low-Ward nằm dormant trên Rapture Gnarl ở weapon set 2.
- **references** [Unique Items Mới & Meta Shift](/guides/0-5-new-unique-items) — Sylvan's Effigy, Forgotten Warden và lứa companion item của 0.5.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Remnant, Runeforging, Runic Ward mà build khai thác.
