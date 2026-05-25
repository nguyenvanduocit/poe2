---
template: templates/mechanic-template.md
document_type: mechanic
title: Energy Shield Recovery Rework
status: draft
author: duocnv
created: '2026-05-24'
updated: '2026-05-24'
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - energy-shield
  - defense
  - recovery
  - runes-of-aldur
  - nerf
---

# Energy Shield Recovery Rework

Patch 0.5.0 "Runes of Aldur" không động vào max :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} pool một cách trực diện — đòn đập rơi vào **recovery layer**: hai keyword *"faster start of Energy Shield Recharge"* và *"increased Energy Shield Recharge Rate"* bị quét gần như toàn bộ ecosystem mod (small passive, notable, suffix gear, essence, rune) với mức cắt 50–70%. Patch note drop ngày 21/05/2026, league launch 29/05/2026; nhiều thay đổi rune và base armour áp dụng retroactive cho item hiện có, không grandfather. Build chịu impact gồm mọi setup ES-primary: Sorceress nuôi shield bằng recharge, Witch hybrid ES, Stormweaver Int-stacker, Lich, và bất kỳ Foci/Wand build dựa vào suffix "of Buffering / of Ardour / of Suffusion" làm sustain. GGG đồng thời đẩy :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} ra như defence layer thay thế — nghĩa là rework này không chỉ là nerf đơn thuần, mà là tái cấu trúc cách POE2 muốn build tank survive endgame.

## How It Works

Energy Shield trong POE2 phục hồi qua hai cơ chế khác biệt mà patch 0.5 cố tình tách rõ. **Delay** là khoảng thời gian phải tránh hit sau khi mất ES trước khi recharge bắt đầu — modifier "faster start of Energy Shield Recharge" rút ngắn delay này. **Rate** là tốc độ phục hồi per second sau khi delay hết — modifier "increased Energy Shield Recharge Rate" tăng rate. Pre-0.5 build endgame thường stack cả hai trên cùng một cluster: small passive, notable, suffix gear và essence cùng cộng dồn để ES tự đầy lại trong khoảng nửa giây sau khi tránh hit. Setup này biến ES recharge thành "second life bar" có thể spam trong combat dài.

Patch 0.5 đánh layer-by-layer. Passive tree bị tỉa trước: small node "faster start of Energy Shield Recharge" giảm từ 15% xuống còn **6%**, và small node "increased Energy Shield Recharge Rate" **bị xoá hoàn toàn** khỏi tree, thay bằng thêm faster start ở giá trị thấp hơn. Notable bị cắt nửa giá trị hoặc thay keyword hoàn toàn — :wiki-link{url="https://www.poe2wiki.net/wiki/Convalescence"} từ 40% faster start cộng thêm 10% reduced recharge rate làm penalty; :wiki-link{url="https://www.poe2wiki.net/wiki/Mystic_Stance"} từ 30% xuống còn 12%; :wiki-link{url="https://www.poe2wiki.net/wiki/Rapid_Recharge"} từ 25% faster start + 25% increased rate xuống còn 12% + 12%. Vài notable bị strip toàn bộ keyword ES recovery để đổi sang stat khác — :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_Infusion"} bỏ 40% increased recharge rate, :wiki-link{url="https://www.poe2wiki.net/wiki/Arcane_Mixtures"} bỏ 25% increased rate đổi sang cast speed, :wiki-link{url="https://www.poe2wiki.net/wiki/Refocus"} bỏ 30% increased rate đổi sang mana regen.

Tầng gear bị quét tiếp. Suffix modifier "faster start of Energy Shield Recharge" **không còn roll được trên Foci, Intelligence Body Armour, hoặc Jewel** — đây là cú đập thẳng vào craft path cũ, mọi gear có suffix này craft theo công thức Mirage 3.28-style giờ thành dead suffix không upgrade tier được. Three suffix tier vẫn cấp increased ES Recharge Rate nhưng bị cắt giá trị: "of Buffering" từ 36–40% xuống 12–15%, "of Ardour" từ 41–45% xuống 16–19%, "of Suffusion" từ 46–50% xuống 20–23%. Implicit của body armour :wiki-link{url="https://www.poe2wiki.net/wiki/Arcane_Raiment"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Sacramental_Robe"} đổi từ "40–50% faster start" sang "15–25% increased recharge rate", không áp dụng item hiện có.

Essence và rune chịu chung số phận. :wiki-link{url="https://www.poe2wiki.net/wiki/Essence_of_Hysteria"} apply lên Foci giảm từ 41–45% xuống 20–23% increased recharge rate. :wiki-link{url="https://www.poe2wiki.net/wiki/Rebirth_Rune"} ba tier (Lesser/Standard/Greater) trên Wand hoặc Staff giảm từ 12% / 15% / 18% xuống còn **4% / 6% / 8%** increased recharge rate, và thay đổi này áp dụng cho item hiện có — gear hiện có trong stash bị nerf trực tiếp. :wiki-link{url="https://www.poe2wiki.net/wiki/Craiceann%27s_Rune_of_Recovery"} trên Body Armour giảm từ 50% xuống 30%, cũng áp dụng item hiện có. Soul core :wiki-link{url="https://www.poe2wiki.net/wiki/Atmohua%27s_Soul_Core_of_Retreat"} bỏ hẳn "30% faster start of Energy Shield Recharge" trên Body Armour/Focus, đổi sang stat ailment/stun threshold scale theo max ES.

Max ES pool bị đụng nhẹ nhưng targeted. Item-given ES scaling theo level thay đổi: +8% ở level 65 và không đổi ở level 80+. So với Evasion cùng patch — Evasion tăng ~33% ở lv65 và +15% ở lv80+ — ES rõ ràng bị nerf tương đối ở late game. Base Energy Shield của :wiki-link{url="https://www.poe2wiki.net/wiki/Vile_Robe"} (base armour ES build phổ biến) giảm từ 184 xuống **171**. :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri%27s_Splendour"} body armour roll +Max ES từ +100–200 xuống **+66–100**. Notable :wiki-link{url="https://www.poe2wiki.net/wiki/Patient_Barrier"} từ 60% xuống 50% increased Max ES. :wiki-link{url="https://www.poe2wiki.net/wiki/Core_of_the_Guardian"} bị rework đau nhất: bỏ "100% increased Armour, Evasion and Energy Shield from Equipped Shield", thay bằng 30% block chance + **20% reduced maximum Energy Shield** làm penalty thẳng.

**Hypothesis:** Time-to-full recovery (TTF) sau khi bị hit của một build ES endgame stack 0.4 vào 0.5 sẽ tăng ~2.5–3x so với baseline cũ, không kể delay phase.
**Evidence:** Compound multiplier của (small passive recharge rate xoá) × (notable rate keyword strip) × (suffix rate cut ~60%) × (essence cut ~50%) ngắt đứt chain đẩy 175–250% increased rate xuống mức ~60–80%. Hand-calc multiplicative theo patch note 0.5.0, không account interaction với recovery rate cap (chưa rõ POE2 0.5 có cap không).
**Verdict:** MEDIUM confidence — math bound đúng theo từng line item, nhưng cần PoB 2.x update + live char test mới khẳng định TTF actual. Sẽ verify sau patch 0.5 PoB release.

## Math Chain

Compound recovery rate cho endgame ES stacker tầng cao, so sánh pre-0.5 vs post-0.5 với cluster build mặc định. Mọi giá trị trích trực tiếp từ patch note 0.5.0.

**Pre-0.5 baseline — Increased ES Recharge Rate compound:**
- 4× small passive "ES Recharge Rate" (passive tree, pre-value trước khi node bị xoá khỏi tree post-0.5) — ~50% (giả định 12.5% per node)
- Notable Rapid Recharge — 25%
- Notable Essence Infusion — 40%
- Notable Convalescence — 0% (notable này chỉ faster start pre-0.5)
- Suffix "of Suffusion" trên Foci — 50% (top end)
- Essence of Hysteria apply lên Foci — 45% (top end)
- Greater Rebirth Rune trên Wand — 18%
- **Total — ~228% increased recharge rate**

**Post-0.5 baseline — Increased ES Recharge Rate compound:**
- 4× small passive "ES Recharge Rate" (passive tree) — **0%** (node đã bị xoá khỏi tree)
- Notable Rapid Recharge — 12%
- Notable Essence Infusion — 0% (notable đã bỏ keyword này)
- Notable Convalescence — **−10%** (notable giờ có penalty reduced rate)
- Suffix "of Suffusion" trên Foci — 23%
- Essence of Hysteria apply lên Foci — 23%
- Greater Rebirth Rune trên Wand — 8%
- **Total — ~56% increased recharge rate**

Compound multiplier delta: từ `1 + 2.28 = 3.28x` xuống `1 + 0.56 = 1.56x` so với base recharge rate. **Tốc độ recovery tuyệt đối giảm khoảng 52%** so với cùng cluster gear/tree pre-0.5.

Faster start of ES Recharge cluster (delay reduction) cũng bị cắt song song:
- 4× small passive "faster start" (passive tree) — pre 60% → post **24%** (15% → 6% per node)
- Notable Mystic Stance — pre 30% → post **12%**
- Notable Convalescence — pre 40% → post **20%**
- Notable Quick Response — pre 20% → post **10%**
- **Total — pre 150% → post 66%** faster start

Delay phase do đó dài hơn ~50% so với pre-0.5, cộng với rate phase chậm ~52% — TTF tổng cộng dài hơn approximate 2.5–3x trong worst-case scenario stack đầy đủ cluster.

## Key Interactions

### Wording distinction — "faster start of Energy Shield Recharge" vs "increased Energy Shield Recharge Rate"

- **"faster start of Energy Shield Recharge"** — tham chiếu **delay phase**, khoảng thời gian phải tránh hit sau khi mất ES trước khi recharge tick đầu tiên kích hoạt. Default delay là 2 giây; 50% faster start rút delay xuống ~1.33s. Modifier này chỉ ảnh hưởng latency, không đụng tới throughput.
- **"increased Energy Shield Recharge Rate"** — tham chiếu **rate phase**, tốc độ ES tự đầy lại per second sau khi delay hết. Base rate là 33% max ES/s; 100% increased rate đẩy lên 66% max ES/s. Modifier này ảnh hưởng throughput, không đụng latency.
- **Hệ quả 0.5:** GGG đập cả hai keyword song song, nhưng đập rate keyword nặng hơn (xoá small node + strip nhiều notable + cắt suffix value ~60%) so với delay keyword (giảm value small node 60%, giảm notable value 50–60%). Pattern: pre-0.5 build có thể "tank-by-recharge" bằng cách rút delay xuống <0.5s và rate >250%; post-0.5 cùng cluster chỉ đạt delay ~1.2s và rate ~155%. Recovery layer còn dùng được, nhưng không đủ nhanh để làm primary defence vào late maps.

:wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} là replacement layer GGG cố tình đẩy ra cùng patch. Runic Ward kích hoạt khi character tụt xuống còn 1 life — sống sót thêm trong khi Ward hấp thụ damage, recover độc lập với life. :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} (unlock Act 1) cho phép thêm Runic Ward vào armour bằng Verisium; armour dưới level 55 nhận free, armour trên ngưỡng đó đánh đổi một phần defence thường. Build endgame ES vào 0.5 cần factor cả hai layer: ES vẫn primary nhưng nhỏ hơn TTF, Runic Ward backup pop khi ES sạch + life xuống critical. Hơn 15 Runic Ward Rune mới đã được craft từ Remnant để chỉnh thuộc tính Ward.

:wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} bị rework theo hướng buff hybrid ES-on-Evasion build. Pre-0.5 Ghost Shroud gain theo duration tĩnh 7.6–6.1 giây ở gem 4–20; post-0.5 đổi sang "Modifiers to Cooldown Recovery Rate also apply to Ghost Shroud gain frequency", thêm "When Hit, lose a Ghost Shroud" và **"Regenerate Energy Shield equal to 2% of your Evasion Rating per second if you have lost a Ghost Shroud Recently"**. Frequency baseline chậm hơn (11.7–10.1s ở gem 4–20), nhưng modifier ES regen từ Evasion Rating là buff thẳng cho Evasion-stacker — nghĩa là hybrid build có ~10k Evasion Rating tự nuôi 200 ES/s khi mất shroud, độc lập với ES recharge cluster bị nerf. Pivot này cho phép Evasion build dùng ES recharge passive nerf-free.

:wiki-link{url="https://www.poe2wiki.net/wiki/Grim_Feast"} (Grim Resurrection minion res) thêm **cooldown 1 giây**. Đây không phải nerf ES recovery trực tiếp, nhưng Grim Feast là engine nuôi ES surplus bằng cách collect overflow ES từ enemy kill khi clear wave. Cooldown 1s làm clear-speed sustain chậm hơn rõ rệt trong map có monster pack lớn — không còn snap-fill ES pool ngay sau pull.

Keyword "**Defences**" bị deprecate. Modifier cũ ghi "Defences" giờ tham chiếu rõ "Armour, Evasion and Energy Shield". Thay đổi này thuần descriptive — không ảnh hưởng math — nhưng làm rõ Runic Ward, Resistance, và Block **không** scale với modifier "increased Defences". Build planning phải đọc lại từng modifier để verify scope.

## Optimization

Path tối ưu 0.5 cho build ES dựa vào ba thay đổi gear/passive cụ thể, không cố sustain pattern cũ.

Đầu tiên, **suffix "Increased Energy Shield Recharge Rate" giờ có thể roll trên Intelligence Body Armour**. Pre-0.5 suffix này chỉ roll được trên Foci, Jewel và một vài slot phụ — body armour không có. Việc unlock slot mới cho rate suffix cho phép craft body armour với "of Suffusion" hoặc "of Ardour" + một suffix max ES, đẩy throughput rate dù value mỗi suffix bị cắt. Body armour có higher mod weight cho ES base, nên đây là slot upgrade thực sự cho ES build.

Thứ hai, pivot tree từ "stack faster start + rate cluster" sang "**ES pool size + Runic Ward + Ghost Dance hybrid**". Cluster recovery 0.4-style (Convalescence + Rapid Recharge + Essence Infusion) giờ chỉ trả ~22% rate + ~22% faster start tổng cộng — không đáng chiếm 5–6 point. Re-route point sang :wiki-link{url="https://www.poe2wiki.net/wiki/Patient_Barrier"} (50% max ES dù bị cắt từ 60%, vẫn là single notable mạnh nhất cho pool), max ES small node, và path tới Evasion cluster để enable Ghost Dance ES-from-Evasion regen.

Thứ ba, gear craft target chuyển sang **Foci suffix "of Suffusion" + Essence of Hysteria + Rebirth Rune** trên cùng item. Mặc dù từng value bị cắt, ba layer cộng dồn vẫn cho ~54% rate trên một slot duy nhất — đủ để recovery rate đạt 1.5–2x base mà không cần stack tree. Spare passive point dồn sang defence layer khác (Armour, Block, Runic Ward node nếu có).

Verisium Runeforging là craft tier 1 priority cho mọi armour slot. Armour dưới level 55 nhận Runic Ward free — Act 1 character đi qua league sớm nên rune ngay khi unlock NPC Farrow. Body armour level 80+ vẫn rune được nhưng đánh đổi base AEE; tính toán trade-off này tuỳ amount Runic Ward thu được và defence layer chính của build.

Tránh dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Vile_Robe"} làm base armour ES build mới — base ES giảm xuống 171 làm robe này không còn là default top-tier base. Check pool ES base mới của Sorceress/Witch body armour pool sau patch để pick base có ES weight cao hơn.

## Interactions with Other Content

:wiki-link{url="https://www.poe2wiki.net/wiki/Trial_of_the_Sekhemas"} có thay đổi quan trọng: **lượng Runic Ward tối đa được cộng vào Honour khởi đầu** khi bắt đầu Trial. Build stack Runic Ward (qua Verisium Runeforging + Runic Ward Rune từ Remnant) vào Trial có Honour pool lớn hơn baseline, cho phép tank thêm hit trước khi fail Honour check. Đây là synergy hai chiều cho Runic Ward — vừa replace ES recovery trong combat thường, vừa scale Honour cho Trial endgame.

Map mod prefix/suffix scope đã được điều chỉnh lại — prefix là modifier ảnh hưởng monster output, suffix là modifier ảnh hưởng player hoặc monster defence. Map roll với suffix nerf ES (vd "Players have less Energy Shield Recovery Rate" nếu tồn tại trong 0.5) sẽ ngắt sustain ES build nặng hơn so với pre-0.5 vì baseline đã thấp; build phải reroll những map đó hoặc gear lên Runic Ward pool đủ pop khi ES sạch.

Boss encounter với damage burst pattern (vd các pinnacle boss có wind-up attack lớn + thời gian downtime) trước đây phù hợp ES recharge build vì TTF ~0.5–1s đủ refill giữa hai swing. Post-0.5 TTF tăng ~2.5–3x làm pattern này risky hơn — boss có downtime <3s không còn cho phép full refill giữa swing, build phải tank một phần damage bằng pool tuyệt đối (max ES + Runic Ward) thay vì rely vào recharge cycle.

## What Doesn't Work

Suffix "faster start of Energy Shield Recharge" trên Foci, Intelligence Body Armour, hoặc Jewel **không còn roll được**. Item hiện có với suffix này vẫn giữ value cũ, nhưng không thể re-roll, không thể craft thêm, không có path upgrade tier. Mọi craft formula cũ targeting suffix này là dead — gear phải redesign sang slot/suffix khác.

Notable Adamant Recovery **bị xoá hoàn toàn**, thay bằng Fortified Aegis cấp 100% increased AEE from Equipped Shield. Build dựa vào Adamant Recovery cho ES sustain phải reroute tree path.

Pattern "tank-by-recharge spam" (ES tự đầy giữa hit boss) không còn hoạt động ở mức cũ. Compound rate ~228% pre-0.5 cho TTF <1s; compound rate ~56% post-0.5 cho TTF ~2.5–3s. Build planning dựa giả định "ES tự đầy giữa swing boss" sẽ chết nếu boss có attack frequency <3s.

Notable Convalescence không chỉ bị cắt value — giờ có **−10% reduced ES Recharge Rate** làm penalty active. Lấy Convalescence trong cluster mặc định pre-0.5 giờ tự trừ rate của chính build mình; chỉ đáng lấy khi cần faster start cụ thể và không có alternative.

Greater Rebirth Rune trên Wand/Staff giảm từ 18% xuống 8% **áp dụng item hiện có**. Wand crafted pre-0.5 với rune này không grandfather — login patch 0.5 là số tự đổi. Mọi build planning dựa vào Rune rate cũ phải recalc.

## Common Mistakes

**Sai** — port build PoB từ 0.4 sang 0.5 không update PoB version mới, expect ES recovery numbers giữ nguyên. **Đúng** — chờ PoB 2.x release update cho 0.5, hoặc manual override mọi recovery modifier theo giá trị mới trước khi đọc number. **Lý do** — PoB 2.x bản cũ vẫn dùng database 0.4, sẽ compute rate ~3.3x base trong khi reality post-0.5 là ~1.5x. Cost — nếu build dựa vào sheet ES sustain mà thực tế recovery chậm 2x, character chết ở high tier maps lần đầu chạm boss có sustained damage.

**Sai** — pick :wiki-link{url="https://www.poe2wiki.net/wiki/Vile_Robe"} làm base armour vì nó là default top-tier base armour ES POE2 0.4. **Đúng** — check lại base ES pool sau patch, so sánh với Sacramental Robe, Arcane Raiment, và base mới khác (Vile Robe giảm 184 → 171). **Lý do** — base ES delta 7% có thể swing total ES pool ~300–500 ES trên gear endgame; pick base sai làm wasted ES roll. Cost — re-craft body armour mới mất ~30–50% currency budget gear.

**Sai** — ignore Verisium Runeforging vì nó là "league mechanic", focus farm trade-equiv currency. **Đúng** — craft Runic Ward vào mọi armour slot ngay từ Act 1 khi unlock Farrow NPC, dùng làm secondary defence layer thay replacement cho ES recharge cũ. **Lý do** — Runic Ward là layer mới GGG thiết kế để cover gap mà ES recharge nerf để lại. Build ignore layer này tank ít hơn baseline build dùng cả hai. Cost — Verisium farm cost ~5–10 Exalted Orbs equivalent cho full armour set early league, cheap so với risk chết.

**Sai** — stack max ES qua notable Patient Barrier + cluster + body armour ES roll, expect pool size compensate cho recovery rate chậm. **Đúng** — pool size cao chỉ giúp tank single burst, không giúp sustain damage liên tục. Pivot defence sang mix max ES (pool) + Runic Ward (1-life backup) + Block/Evasion (avoidance), không stack một layer. **Lý do** — POE2 0.5 endgame có sustained DoT, ground effect, và monster pack damage chồng lớp; pool 8k ES không recharge chỉ trụ một wave. Cost — wasted 4–6 passive point nếu pool over-built trong khi recovery layer thiếu.

## Cost & Restrictions

- **Verisium Runeforging cost** — Verisium currency drop từ Remnant trong Runes of Aldur league. Cost approximate ~50–100 Verisium per armour slot cho Runic Ward tier 1 (chưa có data live league launch, sẽ verify sau 2026-06-01). Restriction — armour dưới level 55 craft free, armour level 55+ đánh đổi base AEE để có Runic Ward.
- **Suffix re-craft cost** — Re-roll suffix gear cũ targeting "faster start" sang "increased rate" tốn 1–3 Exalted equivalent per item nếu dùng Essence + Annulment loop, ~5–10 Exalted nếu dùng Chaos spam đến desired suffix. Restriction — suffix "faster start" trên Foci/Int Body Armour/Jewel không còn pool, chỉ re-roll được sang suffix khác.
- **Notable Convalescence downside** — Active penalty −10% reduced ES Recharge Rate khi allocate. Cost — wasted 1 point + penalty trừ throughput nếu lấy notable này trong cluster mặc định pre-0.5 mà không tính đến penalty. Chỉ đáng lấy khi build cần faster start cụ thể và đã accept rate trade-off.
- **Greater Rebirth Rune item hiện có** — Nerf áp dụng retroactive. Cost — không re-craft được vì rune đã socket; phải craft armour/weapon mới và resocket rune nếu muốn upgrade.
- **Core of the Guardian rework** — Notable giờ có 20% reduced max ES làm penalty. Restriction — không thể allocate Core of the Guardian trong build ES pure mà không chịu trừ pool 20%; chỉ phù hợp shield-stacker build dùng Block làm primary defence.

## Verdict & Open Questions

- **Verdict — NERF, HIGH confidence.** Layer recovery của ES bị cắt 50–70% trên mọi tầng (small passive, notable, suffix, essence, rune). Compound multiplier giảm từ ~3.3x base rate xuống ~1.5x. Max pool bị đụng nhẹ (~8% base item, một số unique cắt ~50%). Build ES vẫn chơi được nhưng phải redesign defence layer.
- **Replacement direction — Runic Ward + Ghost Dance hybrid.** GGG thiết kế Runic Ward (1-life backup) và Ghost Dance rework (2% Evasion → ES regen) như layer thay vai trò ES recharge cũ. Build planning 0.5 phải factor cả hai, không cố revive pattern recharge-spam.
- **Item hiện có không grandfather** với rune và một số essence — login patch 0.5 là số tự đổi (Lesser/Standard/Greater Rebirth Rune, Craiceann's Rune).
- **Open question — Actual TTF live test.** Compound math cho TTF tăng ~2.5–3x worst case, nhưng cần PoB 2.x release + char test endgame map T15+ mới khẳng định. Sẽ verify sau khi PoB 2.x release cho 0.5 và sau 1 tuần league launch (window verify: 2026-06-01 đến 2026-06-08).
- **Open question — Recovery rate cap.** Chưa rõ POE2 0.5 có cap nào không cho ES recharge rate (POE1 không có cap explicit). Nếu có cap, math compound trên overstate impact thực tế ở high-end build. Cần wiki diff sau league launch để check.
- **Open question — Pure ES build có còn viable.** Build CI hoặc pure ES (no life) post-0.5 phụ thuộc rất nặng vào pool size và Runic Ward. Cần test character đạt level 95+ để khẳng định viability vs. hybrid life/ES hoặc pure life build với Runic Ward.

## Patch Evolution

### Patch 0.5.0 — Runes of Aldur (21/05/2026 patch note, 29/05/2026 launch)

Patch áp dụng mass nerf recovery layer như mô tả ở section trên. Đồng thời giới thiệu Runic Ward + Verisium Runeforging như defence layer mới, Ghost Dance rework cho hybrid Evasion-ES, và Grim Feast cooldown 1s. Item rune và essence nerf áp dụng retroactive — gear hiện có trong stash tự đổi số khi login patch. Suffix "faster start of Energy Shield Recharge" bị remove khỏi pool roll Foci/Int Body Armour/Jewel; suffix "increased Energy Shield Recharge Rate" mở rộng pool sang Int Body Armour làm slot mới.

### Patch 0.4.0 — Previous baseline

Recovery layer ES cluster mặc định cho phép compound ~3.3x base rate qua stack tree + notable + suffix gear + essence + rune trên cùng character. Build ES pure dùng pattern "tank-by-recharge" làm primary sustain, TTF <1s sau khi tránh hit. Vile Robe base ES 184 là default top-tier base. Convalescence cấp 40% faster start không penalty. Mystic Stance 30% faster start. Greater Rebirth Rune trên Wand cấp 18% increased ES Recharge Rate. Essence of Hysteria apply lên Foci cấp 41–45% increased rate. Suffix "of Suffusion" cấp 46–50% increased rate, "of Buffering" 36–40%. Notable Patient Barrier 60% increased max ES. Atziri's Splendour roll +100–200 max ES.

## Relationships

- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Energy Shield recovery rework là một phần lớn trong patch 0.5.0 Return of the Ancients, đồng thời với Runic Ward release và Endgame overhaul.
- **competes_with** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Build Spirit Walker pivot sang Companion/Evasion archetype thay vì pure ES tank, tránh được phần lớn impact của ES recovery nerf.
