---
template: templates/build-template.md
document_type: build
title: Twister Spirit Walker
status: draft
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: medium-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Twister
  damage_type: elemental
  playstyle: projectile
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - twister
  - whirling-slash
  - projectile
  - trinity
  - the-taming
  - crit
  - freeze
  - 0-5
  - poe2
---

# Twister Spirit Walker

Đây là build self-cast Twister — Huntress dựng Whirlwind ba stage bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} rồi quăng :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} đi qua để consume, mỗi twister ăn thêm 80% more damage per stage và gain thêm element từ ground effect. Build leveling cực mượt từ Act 1 nhờ engine consume tự nhân damage, lên endgame thì thành crit-freeze projectile carry quanh trục :wiki-link{url="https://www.poe2wiki.net/wiki/The_Taming"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Trinity"}. Đây KHÔNG phải build companion — companion ở đây chỉ là utility (Wild Protector bear, Spirit Vessel buff bot, Primal Bounty owl feather), damage thật đến từ chính mình.

## Build Overview

Damage source là chain consume: Whirling Slash trong tay set 1 dựng Whirlwind tối đa 3 stage quanh mình, Twister trong tay set 2 đi xuyên qua chúng, mỗi stage consume thêm một twister phụ và +80% more damage. Một cú swap đầy đủ là Twister ăn ≈11.87× base damage trước mọi multiplier khác, nên build không cần stack tăng số projectile để cày boss — chỉ cần stack scaling element, crit, và uptime.

Trục scaling là **triple-elemental đồng thời**: :wiki-link{url="https://www.poe2wiki.net/wiki/Ice-Tipped_Arrows"} convert toàn bộ physical damage thành cold (Empowers 4 Attacks, cooldown 12s, bypass bằng frenzy charge); :wiki-link{url="https://www.poe2wiki.net/wiki/Sacred_Flame"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Guiding_Palm_of_the_Heart"} chèn thêm 25-60% damage as extra fire; The Ordained hoặc spear crit endgame cấp flat lightning. Ba dòng element đó vừa nuôi Trinity (max 57% more elemental damage ở lvl 20 với balance tốt), vừa apply đủ ba ailment để The Taming bung trần — "Wind Skills count as boosted by Ignited / Shocked / Chilled Ground" và cộng dồn 10-20% increased damage mỗi ailment, max 30-60% cùng lúc.

Defense là evasion + energy shield hybrid với freeze-lock làm layer kép. Endgame chuyển sang :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} qua jewel :wiki-link{url="https://www.poe2wiki.net/wiki/From_Nothing"}, vừa miễn nhiễm chaos vừa unlock Heavy Frost (frozen enemies bỏ qua resistance hoàn toàn nếu resistance đó positive) → freeze chính là tăng damage. :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} biến evasion thành ES regen, :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} cộng evasion stack, và Forgotten Warden body endgame trả deflection rating theo missing ES, redirect deflected hit qua companion.

Mobility là Whirling Slash di chuyển vừa apply Whirlwind vừa charge through pack, dodge roll trigger Primal Bounty empower và frenzy charge từ :wiki-link{url="https://www.poe2wiki.net/wiki/Sniper's_Mark"} mở rộng cap +3 max frenzy.

## Skill Gems & Links

Tay set 1 cầm soaring spear attack-speed (target ≥2.36 APS), tay set 2 cầm spear damage + sceptre — và **Ice-Tipped Arrows phải ở set 2 cùng Twister**, đặt sai set là skill bug không apply convert. Whirling Slash bind set 1, Twister bind set 2, swap thật trong combat.

**Whirling Slash (5L, set 1):** :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Attack"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Rage"} III + :wiki-link{url="https://www.poe2wiki.net/wiki/Magnified_Area"} II + Blazing Critical. Rapid Attack đẩy APS để dựng đủ 3 stage Whirlwind trong vài tích tắc; Rage III sinh rage để attack speed scale tiếp khi chưa max; Magnified Area II tăng vùng quét pack; Blazing Critical cho 15% damage as extra fire 5s sau crit — đẩy fire affinity cho Trinity và prime mob ignite. Whirling Slash max 3 stage Whirlwind, mỗi stage thêm 150% more collapse damage và +0.3m radius — đây cũng là damage layer phụ.

**Twister (5L, set 2):** :wiki-link{url="https://www.poe2wiki.net/wiki/Projectile_Acceleration"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Elemental_Armament"} II + Prolonged Duration + Concentrated Aura + Blind Side. Projectile Acceleration biến projectile speed thành damage; Elemental Armament II tăng elemental damage flat; Prolonged Duration kéo twister 3s lên dài hơn cho multi-hit; Concentrated Aura cho 10% more damage thay :wiki-link{url="https://www.poe2wiki.net/wiki/Deliberation"} — AoE loss negligible vì twister tự move erratic. **Blind Side thay Pinpoint Critical** là quyết định lớn của bản endgame: Pinpoint cộng crit chance nhưng trade nhiều crit damage; Blind Side cộng cả crit chance và crit damage khi không thể blind. Bù lại Twister tự blind enemies tự nhiên nên build phải đẩy blind sang chỗ khác (Spirit Vessel barrage có Blind II) để Blind Side trigger.

**Ice-Tipped Arrows (4L, set 2):** Elemental Armament II + Cooldown Recovery II + Cold Attunement + Short Fuse. Cooldown Recovery II cộng Frenzy charge bypass biến nó thành effectively always-on cho clear; Cold Attunement đẩy thêm 25% damage gained as cold; Short Fuse rút detonation cho ice fragment burst nhanh hơn. Skill này có hai vai cùng lúc: convert toàn bộ phys → cold (đây là lý do build dùng nó dù không phải bow), và spawn Ice Fragments multi-hit cho clear.

**Barrage (3L, set 2):** :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Casting"} II + Cooldown Recovery II + Utrid's Constellation. Utrid's Constellation cộng +2 skill use → cast 3 lần thay 1, nhân ba burst Barrage trên boss. Barrage tự empower projectile attack tiếp theo thành repeat +2 (cộng +1 per frenzy consumed) với repeats deal 50% less damage — tức là một Twister sau Barrage là 3-6 twister đồng thời, đều consume Whirlwind, đều multiply.

**Primal Bounty empower (ascendancy-granted):** Olroth's Conviction. Đây là support khoá chính của Spirit Walker version 0.5 — gem này empower thêm 2 skill use nữa, biến một feather đáng giá 1 attack empowered thành 3 attack empowered. Đặt nó trên Barrage cũng chạy được, nhưng Spirit Walker không gen frenzy ổn định như Deadeye nên giữ feather lâu lợi hơn ép Barrage out. Mirror chưa có wording chính xác cho Olroth's Conviction nên đeo và đọc tooltip trong client để verify cost; gem có "100% of life/mana cost as extra Runic Ward cost" nên cần đảm bảo có Runic Ward layer trước khi cắm.

**Trinity (100 spirit, persistent buff):** chỉ chèn +1 level support (Fire Mastery hoặc Cold Mastery) để nâng max more multiplier. Trinity 1-6% more elemental damage per 30 Resonance của bất kỳ type, cap 100/element và 300 total — vì không bao giờ giữ đủ 100/100/100 cùng lúc, max thực tế ở lvl 20 là ~57% more. Đây là "more" multiplier không stack ở đâu khác — đáng từng spirit. Cơ chế chi tiết: hit element nào thì gain 5-13 Resonance type đó, mất 3 Resonance hai type còn lại; idle 8s không hit type đó là decay 10 Resonance/s. Build phải cân ba dòng element gần bằng nhau để build đủ Resonance ba phía cùng lúc.

**Marks:** :wiki-link{url="https://www.poe2wiki.net/wiki/Freezing_Mark"} với Prolonged Duration — Hits against Marked enemy cause 25-35% more Freeze buildup và khi target frozen thì grant buff 30% damage as extra cold 10s; :wiki-link{url="https://www.poe2wiki.net/wiki/Charged_Mark"} support trên Freezing Mark hoặc Sniper's Mark để mỗi activate spawn Shocked Ground (Twister "Elemental twisters Gain 50% of damage as damage of the corresponding Type" — Shocked Ground = thêm lightning gain).

**Sniper's Mark + Eternal Mark (endgame):** đây là cách Spirit Walker bù khoản frenzy không tự động. Sniper's Mark next crit hit lên Marked enemy 20-77% increased crit damage bonus và **grant 1 frenzy charge khi activate**; Eternal Mark support khiến mark không bị consume ở lần activate đầu → mỗi cast effective hai frenzy. Cộng nhánh tree Charge for Fusion lên 80% chance gain extra frenzy, kết quả ~4 frenzy/cast và unlock node +3 max frenzy charge thay vì +1. Đeo combo này phải có **unset ring** để chứa thêm 1 slot skill — đây là lý do build chuyển sang rare unset thay gold ring khi bước vào late endgame.

**Heralds:** :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Thunder"} (Elemental Focus + Elemental Armament + Magnified Area II + Lightning Attunement) và :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} (Cold Attunement + Magnified Area II + Elemental Armament II + Name). Hai herald này vừa cộng flat ele damage vừa shatter pack, và Herald of Thunder shock-on-hit là một đường nuôi Shocked Ground để Twister gain extra lightning. Chỉ unlock một slot Herald of Thunder khi build sang unset ring giai đoạn early endgame, lý do streamline craft cho rare.

**Defense layer skill:** Ghost Dance (chiếm spirit, ưu tiên quality 20 cho cộng +20% increased Spirit Reservation Efficiency — đây là cách build mở chỗ chứa Trinity + 2 herald + Wind Dancer + companion stack mà không thiếu spirit) + Wind Dancer (Name + Pin II).

Exclusion check: Trinity scale **elemental damage**, không scale physical — đây là lý do build BẮT BUỘC cần Ice-Tipped Arrows convert. Phys không convert là phần damage đó out khỏi Trinity, mất ~30-40% damage thực tế. The Taming "count as" chỉ apply cho Wind Skills có qualifier matching ground (Twister là wind skill, có), không apply cho Whirling Slash; Sacred Flame mod presence "Enemies in your Presence Resist Elemental Damage based on their Lowest Resistance" có thể vừa lợi vừa hại — lợi cho clear (đẩy res floor), nhưng anti-synergy với Rakiyata's Flow late game (cần verify trong client khi đeo cả hai). Heavy Frost chỉ ignore resistance "if their resistance values were positive" — boss có res âm tự nhiên (rare) thì keystone không trigger; với 99% map mob là dương nên không phải concern thực tế.

## Trinity và cách cân ba nguyên tố

Đây là phần ai cũng vấp khi level lên endgame, nên tách riêng. Trinity scale theo **total Resonance** chứ không phải Resonance một type — và Resonance gain chỉ vào type damage cao nhất của hit đó. Nếu build dump 80% damage cold thì Resonance cold đầy lên trần 100 còn fire/lightning teo về 0 → tổng Resonance ~100, more multiplier chỉ ~17% thay vì 57%.

Ba nguồn element cần balance:

- **Cold** đến từ Ice-Tipped Arrows convert (100% phys → cold trong empowered attack) cộng Cold Attunement support cộng Herald of Ice — cold luôn dư.
- **Fire** đến từ sceptre. Sacred Flame cho 40-60% damage as extra fire (cộng grant Purity of Fire có exploit reservation — supports cắm vào Purity of Fire socket KHÔNG tốn spirit, vd Vitality II + Precision II + Cannibalism II + Herbalism II free 120 spirit, mirror chưa confirm là bug hay intended, đã ở trong game từ 0.1 nên đeo được an tâm). Hoặc Guiding Palm of the Heart cho 25% damage as extra fire, ít hơn nhưng balance dễ hơn vì không over-fire. **Tradeoff**: Sacred Flame mạnh hơn nhưng dễ phá Trinity balance (quá nhiều fire, Resonance cold/lightning bị decay); Guiding Palm of the Heart yếu hơn nhưng giữ ba dòng Resonance gần nhau. Build mới chuyển sang endgame thường chọn Palm of the Heart vì craft khác chưa kịp bù flat lightning; build đã full T1 flat lightning trên spear + ring + glove thì Sacred Flame thắng. Sacred Flame còn drop từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Arbiter_of_Ash"} không phải dễ kiếm.
- **Lightning** đến từ flat lightning trên spear (The Ordained có 1-209 lightning grant sẵn, đây là lý do nó tốt cho transition), flat lightning trên ring và glove (T1 "of Crashing Storms" prefix), Herald of Thunder. Lightning là dòng phải craft chủ động — không có source natural như cold.

Heart of the Well jewel desecrated dùng để bù element thiếu — chọn mod desecrated cho "gain damage as fire" hoặc "gain damage as lightning" tuỳ build đang lệch hướng nào. Đây cũng là jewel duy nhất có khả năng tinh chỉnh Trinity sau khi gear đã chốt.

**Quality of life**: Trinity gem chèn Fire Mastery hoặc Cold Mastery cho +1 level, lvl 20+1 đẩy more multiplier cap. Quality 20% Trinity cộng 15% increased Skill Speed khi tổng Resonance >250 — đây là một breakpoint thực: khi Trinity stack đầy thì attack/cast speed thật cũng cộng theo, có cảm giác build "tăng tốc" sau 3-4s combat.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} ascend theo thứ tự **Wild Protector → Primal Bounty → The Mhacha's Gift → Vivid Stampede → Sacred Unity (free)**.

Lab 1 vào Wild Protector — node này grant Bear Spirit không tốn companion slot, có life leech slam và intimidate roar. Bear không phải damage chính nhưng layer tank và Intimidate buff damage taken trên enemy là layer offensive miễn phí. Lab 2 vào Primal Bounty — đây là engine empower của build: định kỳ grant Primal Owl Feather, dodge roll consume feather để empower projectile attack tiếp theo với additional projectiles + projectile speed. Dodge roll trong build này không chỉ là né mà là damage button.

Lab 3 vào The Mhacha's Gift — cộng vào Primal Bounty pool, scale thêm số feather và projectile bonus. Lab 4 đến phần đảo: **Vivid Stampede từng được nghĩ là priority đầu** vì nó cho shocked ground deterministic ở max distance — nghe như engine lightning gain miễn phí cho Twister. Thực tế khi vào league, shocked ground spawn chậm và đắt cooldown, lightning exposure không stack lên cả ba element, và một khi đã có ring The Taming thì ground effect tự apply rồi — Vivid Stampede trở thành node nhạt. Lý do duy nhất giữ nó là unlock Sacred Unity ở Lab 5.

Sacred Unity free khi đủ ba spirit node (Wild Protector + Primal Bounty + Vivid Stampede): nâng cấp cả ba. Soaring Ground (sinh ra từ Primal Bounty central projectile) cho 30% increased Evasion Rating + 40% increased damage while at Full Life + Onslaught đến user và allies, lingering 6s + 1s linger. Embrace of the Wild trên Bear cộng 2% max life regenerate per second cho allies + 8% damage taken redirect vào Bear. Soaring Ground là damage layer thật — 40% more multiplier ở Full Life là big number, và Onslaught (20% inc attack/cast/movement speed) là tier-1 buff. Đây là lý do Vivid Stampede vẫn ở slot 4 thay vì bỏ.

## Passive Tree & Mastery

Tree là crit-heavy + projectile + freeze + weapon-set conditional. Cluster chính theo nhánh huntress trung tâm: precision salvo (weapon set 2 conditional cho crit damage), javelin (inc damage + crit chance), struck through + hearts stopping + heartbreaking (crit chance + crit damage base), moment of truth (crit chance + crit damage), true strike + jugular + deadly force (full crit cluster), killer instinct (inc attack damage khi at Full Life — luôn full life nhờ ES pool dày), 10fold attacks (attack speed weapon set 1).

Cluster freeze/cold: Hail (freeze buildup — đặc biệt sau khi đeo The Taming vì Call of the Brotherhood không còn dùng, Hail là source freeze chính), Crushing Wave (inc damage on crit hit), Deep Freeze (qua From Nothing — freeze buildup + frozen enemies have -8 to cold res). Harness the Elements là big multiplier (inc damage per element type on enemy — 3 element là 60% inc).

Cluster defense: Subdivision Mask (eva per ES on helmet → vital cho hybrid armour), Mindful Awareness (eva + ES), Trained Deflection (qua From Nothing — push deflection lên 46% cap), Wildcat (deflection rating khi không có deflection suffix gloves vì đeo unique freeze-glove).

Weapon-set conditional points là tinh thần của build: **set 1 = attack speed** (Stimulants, Acceleration, Agile Succession, 10fold Attacks — nuôi Whirling Slash APS), **set 2 = crit/damage** (Concussive Attacks, Killer Instinct, Critical Exploit, Embodiment of Power — nuôi Twister damage). Hai pool điểm tách biệt, không hoán chuyển — đây là lý do swap thật trong combat đáng tiền, không phải fake swap.

Concentrated Aura ưu tiên hơn Deliberation: 10% more damage thay 20% more damage + 30% less movement speed penalty — twister tự move erratic nên AoE loss không cảm thấy, còn Deliberation slow combat đáng kể.

Anoint trên amulet endgame là **Stormbreaker** (20% increased damage per elemental type — 60% với cả ba element) hoặc **Critical Exploit** khi chưa có Lavianga's Spirits + Stormbreaker. Khi đeo Raven Touched Shard thì anoint helm thêm, cost 1 augment socket. Beacon of Azathoth từng là anoint default nhưng bỏ khi có Heavy Frost qua From Nothing — Heavy Frost ignore resistance frozen mạnh hơn xuyên res từng % của Beacon.

Heavy Frost vào tree qua **From Nothing Diamond jewel allocate quanh keystone Chaos Inoculation**: passive trong radius keystone allocate được không cần connect. Cụm CI mở Heavy Frost + Thin Ice (50% increased damage against frozen enemies) + Shakra of Elements (8% phys as extra cold + lightning vs shocked + chilled — đây là một nguồn lightning nữa cho Trinity từ phys spear).

**Controlled Metamorphosis** (medium ring jewel) allocate quanh Kitrunner + Distracted Targets + Dizzying Sweep + Chakra of Thought. Kitrunner cộng projectile damage + projectile speed; Distracted Targets cộng crit chance vs blinded enemies (đây là một lý do nữa cho Blind Side); Dizzying Sweep cộng area damage + AoE; Chakra of Thought cộng attack speed khi low mana (Lavianga's Spirits ép low mana persistent). Controlled Metamorphosis cộng -20 to -5 all elemental resistances — đây là cost phải bù bằng ring/belt/helm rare, tính vào res floor khi craft.

Sniper's Mark cộng Eternal Mark mở path qua Charge for Fusion node để đẩy chance gain extra frenzy lên 80% — khi build đến giai đoạn này thì +3 max frenzy charges thay vì +1.

## Stat Priorities & Defenses

EHP layer order: evasion (entry chance) → block từ tree khi có → max res cap → ES pool → Runic Ward khi có rune → recovery (Ghost Dance + life on hit). Build CI endgame skip life pool entirely — pool 1 life, chaos immune, sống bằng ES + evasion + Runic Ward.

Mục tiêu số sau khi chuyển CI endgame (con số target từ creator playtest, mirror chưa có PoB2 model đầy đủ Spirit Walker companion AI nên flag `pob_coverage: PARTIAL`; verify trong client từng patch):

- **ES:** 6,500-8,000 (qua Forgotten Warden body + helm full ES + boots/gloves ES roll + Subdivision Mask)
- **Evasion:** 12,000-15,000 (hybrid eva/ES base + Wind Dancer + Ghost Dance)
- **Deflection:** 46% (qua Trained Deflection + Wildcat khi gloves không có deflection suffix)
- **Resistances:** 75/75/75 cap (overcap +20% với Controlled Metamorphosis penalty); chaos 0 (CI miễn nhiễm)
- **Cast Resistance target:** ~40% (qua belt)
- **Attack Speed (set 1, Whirling Slash):** ≥2.36 APS (target 2.5+ với corrupt second socket + Celestial Alloy attack speed prefix)
- **Boss DPS playtest target:** ~12M+ (đây là số playtest đo trong client với full late endgame craft + Headhunter + Voices — chưa phải PoB verified vì PoB2 model Trinity và companion buff không đầy đủ; treat như target floor để aim khi vào league, log lại số thật khi đeo full kit)

Math chain cho Twister boss DPS:

```
base_hit (set 2 spear)
  × engine_consume (11.87× max khi đủ 3 Whirlwind stage)
  × Trinity (max 1.57× khi đủ ba Resonance balance)
  × The_Taming (1.3× → 1.6× tuỳ tier ring, ba ailment apply)
  × crit_multiplier (~3.5× với Blind Side + Moment of Truth cluster + crit base spear 13%)
  × Sacred_Unity_full_life (1.4× khi Soaring Ground active)
  × Harness_Elements (1.6×, 3 element type)
  / hit_throttle (0.66s same-target cap với projectile cùng frame)
  = boss DPS floor
```

Số đầu chuỗi (base hit) đến từ spear: The Ordained cho 56-84 phys + 1-209 lightning + 243% increased physical + 6.47% crit, một con spear endgame rare crit có thể đẩy hit base lên gấp đôi The Ordained. Throttle 0.66s là **gate cứng** trên boss DPS — projectile count chỉ scale clear, không scale boss vì boss chỉ ăn hit từ một twister cùng frame. Đây là lý do build endgame stack crit damage + more multiplier thay vì stack additional projectile.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 4 |
| survivability | 4 |
| mobility | 4 |
| league_start | 5 |
| budget_scaling | 4 |

## Gear Progression

### Gear theo slot

Priority order: res cap 75/75/75 → attribute floor cho gem (Int cho support gem high tier, Dex cho spear req) → +Level projectile (amulet, helm anoint) → spear damage stat → spirit reservation efficiency → ES/eva hybrid → deflection rating.

- **Weapon set 1 spear:** soaring spear base (highest attack speed base), suffix attack speed T1 + life on hit, prefix attack damage + spirit reservation efficiency mod. Endgame craft Celestial Alloy thêm prefix attack speed (override một damage prefix, đẩy APS lên +0.2-0.3) — đây là cách đẩy lên 2.36 APS. Sky Sliver là budget option cho cộng inc attack speed. Mục tiêu ≥2.36, mirror tier ≥2.5 với corrupt 8% attack speed thứ hai.
- **Weapon set 2 spear:** flat element + crit. **The Ordained** (Grand Spear Lv79, 243% inc phys + 1-209 lightning + 6.47% crit, grant Skill cộng Trinity-related Fragment of Divinity creation) là transition spear tốt nhất vì có sẵn lightning flat lớn cho Trinity balance và có spear crit base 5% + 6.47% explicit. Endgame craft Tangle Tongue bifurcated crit hoặc rare soaring spear T1 ele + T1 crit; The Ordained vẫn ngang ngửa rare T1 nếu chưa crit, và win khi không crit (flat damage base cao).
- **Off-hand (set 2 only) sceptre:** Sacred Flame hoặc Guiding Palm of the Heart như trục Trinity balance. Sceptre cần **double socket** để chứa Rabbit Idol (+15% spirit) — đây là cách build chèn vừa Trinity 100 spirit + Herald of Thunder + Herald of Ice + Wind Dancer + Ghost Dance + persistent buff khác mà không nổ spirit cap. Mở thêm Purity of Fire reservation-exploit nếu đeo Sacred Flame (cắm support gem trong granted skill socket free spirit).
- **Helmet:** full ES + res. Endgame anoint qua Raven Touched Shard (Delirium augment) — cost 1 augment socket; anoint Subdivision Mask hoặc Critical Exploit hoặc Heavy Frost trước khi có From Nothing CI.
- **Body:** **Forgotten Warden (Primal Markings)** endgame — body Lv?? mirror chưa có doc 0.5; trong client đeo và đọc: cộng ES lớn + deflection rating per missing ES (creator đo +100 deflection rating per 50 missing ES nâng deflection chance từ 40% lên 70% khi ES vơi), 15% deflected damage redirect vào companion, grant Spirit Vessel skill. Đây là nguồn deflection chính của build endgame và lý do Spirit Vessel xuất hiện free trong skill bar mà không tốn spirit/gem slot. Trước khi có nó thì rare ES/eva hybrid với life + res.
- **Gloves:** unique freeze-at-50%-buildup + 50% increased damage vs immobilized/frozen + increased Skill Speed (mirror chưa có wording chính xác cho gloves unique này, verify trong client). Cộng đôi với Heavy Frost: freeze sớm hơn = ignore res sớm hơn = damage tăng kép. Khi chưa có gloves unique này thì rare eva/ES + flat lightning T1 (Trinity balance) + res + Dex.
- **Boots:** eva/ES hybrid + deflection rating suffix + movement speed 30% + res. Build streamline rare crafting: cùng base, cùng mod theo Aer0 — chỉ đổi tier khi tier-up. Endgame thêm rarity prefix nếu corrupt double socket.
- **Belt:** rare cast resistance + res cap + life (relevant trước CI). Endgame **Darkness Enthroned** (Fine Belt Lv62, 50-100% inc augment effect, 2 hidden augment sockets) đeo augment cho frenzy charge rune và speed/ailment effect — biến belt thành damage layer. Cuối cùng là **Headhunter** (Heavy Belt Lv50, kill rare gain modifier 60s) — bản POE2 random buff trùm map farm và slap boss khi vừa kill rare adds.
- **Amulet:** ES/eva + projectile levels + res. Anoint Stormbreaker (60% inc damage với ba element) hoặc Critical Exploit (cheap option). Bỏ Beacon of Azathoth khi đã có Heavy Frost.
- **Rings:** **The Taming** + 1 rare unset (chứa Sniper's Mark hoặc Herald of Thunder/Ice). Rare unset roll flat ele damage + res + attribute cộng skill slot — đây là ring craft cuối cho Trinity flat balance. Trước Sniper's Mark + Eternal Mark setup thì có thể chạy 2 rare ring.
- **Jewels:** **From Nothing** (Diamond, allocate quanh Chaos Inoculation hoặc Trusted Kinship khi chưa CI) + **Heart of the Well** (Diamond desecrated, custom mod cho gain damage as element) + **Controlled Metamorphosis** (Diamond, ring radius cho Kitrunner cluster) + **Time-Lost Emerald** (crit damage + crit chance attack craft) + **Voices** (Sapphire corrupted, allocates 2-4 Sinister Jewel sockets — mirror tier endgame, chiếm jewel slot và mở 4 cluster cluster jewel mini). Đây là build dùng jewel làm tree thật — mỗi jewel là một cụm passive độc lập.

### Leveling → Early Atlas → Mid endgame → Late endgame

**Leveling (Act 1-6 Cruel):** spear armor + life base, Whirling Slash + Twister ngay sau khi engrave skill gem. Stack inc damage + cold + crit nodes. Defense armour + life flask thường. Build chạy gần như standalone trong campaign — engine consume Whirlwind là vài layer multiplier rồi.

**Early Atlas (T1-T6):** chuyển dần sang eva/ES hybrid gear (community-suggested rule: nếu tree allocate ES node thì bases phải có ES roll, đừng tiếp tục pure armour). Anoint amulet Critical Exploit (cheap). Quest reward Act 4 Halls of the Dead nhận **Tribal Medicine** (30% inc armour/eva/ES) — EHP straight up tốt hơn deflection-armour-from-ele-res option khác. Spear set 1 attack speed soaring spear, spear set 2 rare lightning + crit (cheap thay vì The Ordained).

**Mid endgame (T7-T13):** đeo The Taming ngay khi mua được — đây là first endgame upgrade build-defining, ring đã giảm giá đáng kể tuần đầu league. Sau đó The Ordained spear nếu chưa craft Tangle Tongue, Guiding Palm of the Heart sceptre cho Trinity balance, Darkness Enthroned belt với rune frenzy. Lavianga's Spirits flask (always-on mana — mở passive "during flask effect"). Olroth's Conviction support trên Primal Bounty.

**Late endgame (T14-T16, pinnacle):** Forgotten Warden body, gloves unique freeze-50%, Sacred Flame sceptre (nếu balance Trinity OK), Sniper's Mark + Eternal Mark combo trên unset ring, From Nothing Chaos Inoculation jewel (chuyển sang CI), Raven Touched Shard anoint helm.

**Mirror tier:** Voices jewel (2-4 cluster), Tangle Tongue T1 bifurcated crit spear, Headhunter belt thay Darkness Enthroned, Rakiyata's Flow (verify anti-synergy Sacred Flame trong client), Rite of Passage cluster.

## Flasks

Trục flask là **Lavianga's Spirits** (Gargantuan Mana Flask, "Cannot be used" — apply effect constantly): always-on mana sustain, không tốn slot belt charm, mở toàn bộ passive cluster "during flask effect" trên tree. Trước Lavianga's thì chạy mana flask thường + life flask thường, sau đó life flask đỏ + utility (granite/quartz tuỳ map). Charm slot belt cho freeze immunity, stun immunity và một slot ailment tuỳ map mod.

## Leveling Notes

Twister có Tier 1 nên engrave Uncut Skill Gem ngay quest skill đầu Act 1; Whirling Slash cũng Tier 1. Rotation campaign là Whirling Slash ×3 quanh pack, swap quăng Twister đi qua, mob shatter. Frost Nexus support khi unlock cho chilled ground bonus. Salvo support bind sớm để Twister bắn thêm projectile từ 3 seal accumulate — Salvo trong 0.5 rework spawn seal mỗi 2s thay vì hold charge, nên uptime cao trong combat dài. Act 1-2 không cần weapon swap — chỉ một spear set 1 cũng đủ vì Twister tự multiply.

Pivot sang setup full khi vào Cruel: bắt đầu allocate weapon-set conditional points (set 1 attack speed, set 2 crit damage), buy spear set 2 riêng (crit base ≥7% nếu được), bind Whirling Slash set 1 + Twister/Ice-Tipped Arrows set 2. Ascend Lab 1 Wild Protector ngay khi mở. Ice-Tipped Arrows engrave khi cảm thấy phys damage chiếm phần lớn — thường Act 3 vào.

Salvo rework là điểm khác POE1: trong 0.5 nó Accumulate seal mỗi 2s, max 3 seal, consume tất cả khi cast. Build campaign giữ Salvo trên Twister đến early Atlas; khi vào Bodok/anti-twister boss thì swap Salvo ra (mới aim được tay) — đây là một trong số ít chỗ build phải đổi support trong map.

## Budget & Investment

Build chạy league-start không gear cố định — Twister + Whirling Slash là tier 1 skill, engine consume tự nhân damage. Floor để chạy như paper math:

- **Min để chạy endgame:** The Taming (giảm xuống vài exalt-low div tuần 2 league), Lavianga's Spirits (vài exalt), The Ordained spear hoặc rare T1 lightning spear (vài exalt khi craft tự, mua chase tier nhỏ), Guiding Palm of the Heart sceptre (cheap). Tổng quanh 1-3 div đầu tuần.
- **Divine breakpoint:** Forgotten Warden body, gloves unique freeze-50%, Darkness Enthroned belt với rune đúng, From Nothing Diamond jewel. Đây là nhảy power thực — chaos cap immune, freeze-lock, deflection scaling — quanh 20-50 div tuần 3-4.
- **Mirror tier:** Voices jewel (multi-mirror), Tangle Tongue T1 craft (10+ div), Headhunter, Rakiyata's Flow, Rite of Passage cluster, soaring spear corrupted double socket ≥2.5 APS. Hàng trăm div trở lên.

Diminishing returns kicks in ở mirror tier vì throttle 0.66s same-target hit cap đã gate boss DPS — Voices nâng cluster damage nhưng boss DPS không scale tuyến tính. Trên 100 div đầu tư thì power gain mỗi div tăng thêm giảm rõ; build power-pack của league chứ không phải mirror-chase build.

## Failure Modes

Build làm tốt ba thứ: clear T15-T16 cực mượt nhờ projectile multi-hit + Salvo seal + Soaring Ground onslaught, leveling campaign mượt nhất trong các build huntress tuần một league nhờ engine consume tự nhân, và freeze-lock + Heavy Frost làm cả damage lẫn defense cùng layer. Những chỗ nó gãy:

**Bodok / ritual anti-twister boss.** Có một boss được GGG design explicit anti-twister — Salvo random direction là thảm hoạ, phải gỡ Salvo và aim tay Twister thẳng vào boss. Build over-geared thì làm được, nhưng mất ~30-40% clear-speed feel và là pain point xuyên suốt league. Không có gear fix cho fight này, chỉ có skill cap.

**Throttle 0.66s khoá boss DPS.** Twister projectile fired at the same time can Hit the same target no more than once every 0.66 seconds — đây là rule cứng. Spam thêm projectile (Salvo seal, Primal Bounty empower, Barrage repeat) chỉ scale clear vì pack có nhiều enemy, không scale single-target boss. Math chain boss DPS phải tính qua throttle này — quote "12M+ damage" là playtest number trong combat dài stack toàn bộ buff (Sacred Unity full life, Trinity 250+ Resonance, Headhunter buff trùng), không phải DPS tốc độ.

**Transition late Atlas → early endgame là nguy hiểm nhất.** Đây là chỗ build yếu nhất: defense vừa pivot từ armour sang eva/ES nhưng chưa đủ Forgotten Warden, boss DPS vừa swap sang crit setup nhưng chưa craft Trinity đủ flat lightning. Giai đoạn này cảm giác tough thật — Bodok bossing chật vật khi gear chưa đủ. Workaround: giữ War Banner thay Herald sớm cho damage layer khi unset ring chưa có; giữ Critical Exploit anoint trước Stormbreaker để cheap crit; chấp nhận parry layer phòng thủ một thời gian thay vì ép vào full skill bar.

**Spirit Walker không auto-generate frenzy.** Đây là khoảng cách rõ với Deadeye: Spirit Walker không có node frenzy on hit / on kill automatic, mọi frenzy đến từ hard-cast Sniper's Mark (kèm Eternal Mark + Charge for Fusion tree node mở chance gain extra). Trước khi setup này hoàn thành thì frenzy = 0 gần như toàn map, Barrage scale theo frenzy bị giảm hiệu lực, Olroth's Conviction trên Primal Bounty empower cũng yếu. Build mid endgame phải accept là build dạng "press mark every 8s on boss" thay vì autopilot frenzy.

**Trinity balance fragile.** Stack quá nhiều fire (Sacred Flame trên build chưa có flat lightning T1 ring/glove) → Resonance fire đầy 100 còn cold/lightning decay → more multiplier teo về ~17% thay vì 57%. Đây là cách build "trông như endgame" nhưng damage chỉ bằng 60% paper math. Fix là cân lại: dùng Guiding Palm of the Heart thay Sacred Flame trước khi flat lightning đủ tier, hoặc dùng Heart of the Well custom mod gain damage as lightning để bù.

**Olroth's Conviction drop source chưa confirm.** Trong mirror wiki không có doc cho item này 0.5 mới; cộng đồng creator suspect drop từ pinnacle expedition (boss tier cuối Expedition chain) nhưng chưa có data farm rate. Build chạy được không có Olroth's, chỉ mất ~30% Primal Bounty uptime — không phải gate sống chết, nhưng chase tier mid-endgame mà chưa biết farm đâu là risk thật.

**Gear / currency floor cao cho full power.** The Taming + Voices + Headhunter + Rakiyata's Flow là multi-div hoặc mirror tier. Paper "12M boss DPS" giả định toàn bộ kit chase. Dưới floor build chạy ổn nhưng đừng kỳ vọng oneshot pinnacle boss; build mid-budget clear T15 mượt là realistic.

**Patch sensitivity Trinity và The Taming.** Trinity là mechanism mới 0.3, đã rework 0.3.0 (chuyển từ elemental attack damage sang all elemental damage) — nếu GGG nerf max more cap hoặc Resonance gain rate thì build mất 30-40% DPS. The Taming "Wind Skills count as boosted by all three grounds" là một interaction cụ thể; nếu GGG fix "count as" semantics thì build mất 30-60% increased damage và một engine ailment-stacking — verify hành xử trong client mỗi patch hotfix.

**No-flask weapon swap bug.** Ice-Tipped Arrows BẮT BUỘC ở set 2 cùng Twister — nếu để set 1 thì empower conversion sometimes không apply, gem bug silent. Verify trong skill panel mỗi lần respec hoặc gem swap.

## Verdict

Đây là build cho người thích projectile + crit + freeze-lock với APM trung bình cao (cast Whirling Slash, swap, cast Twister, cast Mark, dodge roll trigger Primal Bounty) — không phải build minion auto. Leveling từ Act 1 cực mượt nhờ engine consume Whirlwind tự nhân damage, lên endgame thì thành crit-freeze carry quanh trục The Taming + Trinity + Heavy Frost. Floor chạy league-start không gear cố định; ngưỡng đầu tư để build đứng như paper là 20-50 div cho Forgotten Warden + From Nothing + gloves unique + Darkness Enthroned. Dưới floor build vẫn clear T13-T14 tốt nhưng boss thiếu freeze-lock; trên floor build farm pinnacle thoải mái trừ Bodok anti-twister. Quote "12M+ DPS" là playtest number stack buff, không phải PoB verified — log số thật trong client khi đeo full kit.

## Changelog

### 2026-06-10

- Initial draft tổng hợp creator playtest data (Aer0 endgame tech, SiahZ 12M breakdown, SnooBAE85 progression variants) cộng verbatim wiki verify cho Twister/Whirling Slash/Trinity/Ice-Tipped Arrows/The Ordained/Sacred Flame/Guiding Palm of the Heart/Sniper's Mark/Eternal Mark/Heavy Frost/Sacred Unity/Vivid Stampede/Wild Protector/Primal Bounty/Headhunter/Voices/Darkness Enthroned/From Nothing/Controlled Metamorphosis. Forgotten Warden, Olroth's Conviction, Tangle Tongue, Stormbreaker, Critical Exploit, Raven Touched Shard, Rakiyata's Flow flag verify in-client (mirror 404 vì entity 0.5 mới hoặc anoint node).

## Relationships

- **related_mechanics** [Twister — Spear Wind Projectile Skill](/mechanics/skills/twister) — engine consume Whirlwind, throttle 0.66s, Salvo rework, owl feather Primal Bounty empower.
- **related_mechanics** [The Taming — Tripled Wind Skill Ground Effect](/mechanics/items/the-taming) — ring định nghĩa build: count as boosted by Ignited/Shocked/Chilled cùng lúc, inc damage per ailment type.
- **related_mechanics** [Lavianga's Spirits — Always-on Mana Flask](/mechanics/items/laviangas-spirits) — Gargantuan Mana Flask Cannot Be Used apply constantly, mở passive cluster "during flask effect".
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — ascendancy node Wild Protector / Primal Bounty / Mhacha's Gift / Vivid Stampede / Sacred Unity verbatim.
- **alternative_to** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — cùng ascendancy Spirit Walker nhưng damage source ngược: bên kia companion-pack, bên này self-cast projectile.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Spirit Walker ascendancy mới, Trinity rework, ground effect interaction cho Wind Skills.
