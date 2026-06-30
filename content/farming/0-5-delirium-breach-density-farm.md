---
template: templates/farming-template.md
document_type: farming-strategy
title: 200% Delirium Breach
status: draft
created: '2026-06-16'
updated: '2026-06-23'
strategy_tier: S
investment_tier: Medium
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# 200% Delirium Breach

Phủ sương :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium"} tới 200% lên cụm map đang spam :wiki-link{url="https://www.poe2wiki.net/wiki/Breach"}, để mật độ quái delirious khổng lồ nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}, và :wiki-link{url="https://www.poe2wiki.net/wiki/Catalyst"} thẳng vào túi. Tier S, investment Medium — tablet rẻ (3 Breach + 3 Delirium loại thường, vài div mỗi cọc), nhưng cửa vào thật là build: phải giết đủ nhanh trong fog 200% và đứng nổi 20+ rare spawn cùng lúc. Tính tới 2026-06-15, 1 div ≈ 168 ex (poe2scout).

## Strategy Overview

Sương Delirium phủ cả vùng map qua Grand Mirror làm mọi quái Breach spawn ra trong vùng đó delirious — dày hơn, nhiều modifier hơn, drop nặng hơn — và không tốn thêm đồng tablet nào sau khi đặt được Grand Mirror. Tiền về theo hai đường: raw currency từ giết biển quái breach delirious lúc vòng đang lan, và thu nhập phụ Genesis Tree (Wombgift/Hiveblood ra catalyst, minion belt/ring base, Vruun nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"}) — phần Genesis Tree viết đầy ở [Breach và hệ craft Genesis Tree](/guides/0-5-breach-genesis-tree), doc này lấy phần làm-ra-tiền.

Grand Mirror không bật bằng item: hoàn thành Delirium Mirror có chance spawn Grand Mirror trên atlas gần đó; giết bản sao map boss để mở Trial of Madness, sương phủ cả một cụm map, và fog leo dần từ 10% lên 200% qua mỗi map clear. Engine fog đầy đủ ở [Delirium và Trial of Madness](/guides/0-5-delirium-trial-of-madness).

Một thay đổi 0.5.2 định lại kỳ vọng: **Partial Translations** không còn "20% chance nhân đôi effect tablet" mà là "random 0-40% increased effect" — trung bình gần như cũ (+20%) nhưng đuôi jackpot 2× đã mất. Clip 10-25 div/map đầu tháng 6 là số **pre-nerf**, đừng lấy làm mốc. Bù lại, 0.5.2 cắt nửa damage fog và nửa toughness unique trong fog, nên 200% deli giờ **dễ sống hơn** so với tuần đầu league.

**Reward bị gate bởi ba thứ.** Density currency chỉ đến từ lớp quái rìa lúc vòng đang lan, và lớp đó do kill-speed quyết định — giết chậm thì vòng sập sớm, ít tiền, không gear nào gỡ được. Fog 200% giảm damage quái nhận vào nên chỉ nhân density **nếu** build giết kịp lớp rìa trong fog; giết không kịp thì deli làm lãi âm (người báo "không deli còn nhiều tink hơn" không phải bug). Trần 200% gate bởi Grand Mirror RNG (~15-20%/map khi cắm 3 Delirium tablet) — không có mirror thì chỉ còn breach trần, và fog chỉ phủ map gần nên cụm City phải reveal sẵn trước khi proc.

## Setup

### Atlas Passive Tree

Breach subtree: **Reality Wound** (+10s sau khi thanh đầy) và **Shape the Chains** trước — build clear chậm chọn option `30% increased Effectiveness of Rare Breach Monsters`, build clear nhanh chọn pack size. Bản density không cần đi sâu nhánh rare-count (Moment of Risk vẫn rẻ point nên cứ lấy). Vị trí cluster đã vẽ ở [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain).

Delirium subtree là engine 200%: **You can't just wake up from this one.** (fog tan chậm 30%) lấy đầu, gom hết **Grand Mirror Chance** small node, **I see your true nature now!** (Capricious Shard ép Grand Mirror ra đều), **Recurring Nightmares** chọn nhánh `Delirium Fog spreads to +4 Maps` để một mirror phủ 4 City, và **Is this about me... or you?** cho splinter tự rớt từ Delirium monster map 75+.

Patch 0.5.3 rework hai notable quan trọng. **You can't just wake up from this one.** thêm multichoice Simulacrum — pick **Escalating Threats** ("extra Modifier vào area") vì áp lên cả vùng fog Grand Mirror đang chạy breach; Apex Predators và Pure Emotions chỉ áp Simulacrum, dead-pick cho strat này. **Are you sure you want to do that?** bỏ hẳn "Tablets have double Effect ở Grand Mirror", thay bằng "Areas with Grand Mirrors also have a Delirium Mirror" + "20% chance Shards within Simulacrums allow multiple selections" — cú extra mirror làm fog dày hơn ngay tại map, cú multi-select là dead-pick. Node vẫn đáng lấy nhưng giá trị tablet-double ngày trước đã mất.

City biome bắt buộc. **Industrial Improvements** mở slot tablet thứ tư trên City — thiếu node này tụt về 3 slot. Lấy mastery `increased Effectiveness of Monsters` ở desert/grass và `Apex Predators` ở forest dọc đường biome. Patch 0.5.3 fix bug "City Biome: Tablet Effect Atlas Passive Skills were not functional" (verbatim patch note) — node này giờ áp đúng, throughput tablet trên City retroactive tăng.

Masters: **Jado** sau redesign 0.5.2 là "0-40% increased effect" — đều hơn, vẫn đáng nếu muốn vắt kiệt, hết spike. **Doryani** ổn định hơn: cộng area level, effectiveness theo số explicit mod, thêm revival, chuỗi cleanse ra :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"}. Build muốn nhịp đều chọn Doryani; chấp nhận variance đổi trần cao hơn thì Jado. **Hilda** là fallback budget.

### Tablets & Map Device

3 :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} loại thường, ưu tiên `of the Horde` (pack size) — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Breach%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_2017682521%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D) — hoặc `of the Hand` (effectiveness rare breach) — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Breach%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_2895378479%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D). Đừng trả giá đỉnh cho `of the Invasion` rare-count — phần reward sau mốc stabilise kill-rate-gated là địa hạt của [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm). Slot City 4 flex: thêm Breach tablet, hoặc cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} (+120s timer). Khi đi fish Grand Mirror cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} rẻ nhất vào map đường đi; build clear chậm có thể cắm **Clear Skies Delirium Tablet** (unique, fog không tan, ~1 ex 2026-06-10 — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Clear%20Skies%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D)) để khỏi đua timer. Cơ chế "càng nhiều tablet thì map càng ít nhả tablet" — roll đắt tốn tiền lẫn nén nguồn tablet bán của chính mình.

### Waystone & Map Choice

:wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} T15-T16, 6 affix mở đủ 3 slot tablet. Hai stat đáng nhìn: `increased Rarity` và `increased Effectiveness of Monsters`, tổng ~60% (vd 40 rarity + 20 effectiveness) — pack size vô dụng ở phần rare static. City biome bắt buộc (Ezomyte/Faridun/Vaal City), phải reveal cụm City **trước** khi fish Grand Mirror. Layout chọn map open ít tường — hành lang hẹp tự cắt một nửa quái.

### Build Requirements

Build cần đủ DPS giết kịp lớp rìa breach **trong** fog 200% (deli giảm damage quái nhận vào) và đủ EHP đứng nổi 20+ rare cùng spawn giữa sương — tổ hợp one-shot phổ biến nhất league. Range thắng melee rõ: bow, ranged spell, hoặc đàn companion đứng xa an toàn hơn melee bị ép vào tâm vòng. Tech đáng dùng: culling/decimating strike để magic chết tức thì, rare về nửa máu nhanh.

Build companion chạy được bản này — [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) đủ điều kiện vào cửa. Hai thứ cần vá trước: cap **cold res** (đang 66, dưới cap) và dày **phys EHP** (max hit phys là trần thấp nhất), vì fog 200% hay nhả chaos/elemental degen qua Delirium Demon. Kill-rate trong fog phụ thuộc AI companion đuổi kịp — đo trước khi đẩy lên 200%. Không HC-viable ở mức full juice.

## Gameplay

Hai pha rõ rệt. Pha một fish Grand Mirror: chạy map thường trên đường nối citadel, mỗi map cắm 3 Delirium tablet rẻ và giết map boss, nhặt point và splinter dọc đường. Khi Grand Mirror hiện trên atlas, vào giết bản sao map boss để mở vùng sương, chọn cụm City đã reveal sẵn.

Pha hai farm: vào từng City map trong vùng sương, cắm 3 Breach tablet + waystone, đi tìm bàn tay breach. Clear đúng cách — bám mép vòng đang lan, giết lớp rìa trước (chỉ lớp này drop loot), giữ kill liên tục vì mỗi nhịp dừng là thanh đứng yên trong khi vòng vẫn đếm; loot nhặt sau. Fog delirious leo dần qua mỗi map tới 200% rồi đứng đó. Bỏ qua quái thường ngoài breach — 95% loot trong vòng breach cộng map boss.

## Loot Breakdown & Economic Analysis

`profit/hr = (raw currency/breach × breaches/map × delirium density mult + wombgift+hiveblood/map + lineage/vruun × vruun rate) × maps/hr − tablet cost/map − opportunity cost`

Số có timestamp, tách trước-sau nerf:

- **Pre-0.5.2** (Partial Translations còn jackpot 2×): base breach ~50 div/giờ, lên 70-80 khi may (divmaxxing 2026-06-06); map đơn lẻ nhả 10-25 raw div khi double-proc (Fubgun 2026-06-09→10). **Số pre-nerf, không còn đúng.**
- **Post-0.5.2**: creator chạy bản này (Path of Evening 2026-06-15) nói rất giàu *mỗi map* nhưng **không** đưa con số *mỗi giờ*, vì pha fish Grand Mirror kéo throughput/giờ xuống. Không có sample div/giờ sạch nào cho riêng bản density sau nerf — phải tự log.
- **Thu nhập phụ Genesis Tree** (Path of Evening 2026-06-15): minion belt thường ~55 div, belt +2 minion skill ~300 div, refined catalyst (Reaver/Sibilant) ~2 div/cái, túi breach-lord ~5 div. Phần này đều tay, không phụ thuộc Grand Mirror.
- **Tỉ giá**: 1 div ≈ 168 ex (poe2scout 2026-06-15). Chaos Orb ~13.9 ex cùng snapshot.

Bản density không phải máy in div/giờ có số chắc sau 0.5.2 — nó vắt sức mạnh build thành raw currency đều + Genesis Tree, giàu mỗi map nhưng tốc độ/giờ chưa chứng minh bằng sample. Khi farm cần log: div/giờ thật, % map proc Grand Mirror, raw ex/map có-vs-không deli trên chính build.

## Failure Modes

- **Deli ăn ngược vào breach.** Build giết chậm trong fog làm vòng lan ngắn, lớp rìa mỏng, và damage-taken-reduction của deli khiến raw currency *giảm* so với breach trần. Test 5-10 map có/không deli trên chính build trước khi cam kết.
- **Deli Abyss là rival raw-currency mạnh hơn.** Cộng đồng phân vai "breach cho ring/amulet + Genesis Tree, abyss cho currency thuần" — overlay 200% deli lên :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss"} nhả raw currency mạnh hơn breach, chi tiết ở [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm). Nếu mục tiêu chỉ là div/giờ, cân nhắc abyss trước.
- **Grand Mirror là nút thắt nhịp.** Proc ~15-20%/map, RNG cả ở chỗ phủ; chuỗi không ra thì hoặc chạy City fog yếu (lãi mỏng), hoặc dừng đi hunt. Cụm City phải reveal sẵn quanh điểm fish.
- **Build floor và one-shot.** Kể cả sau 0.5.2 nhẹ hơn, 200% deli + 20+ rare cùng spawn vẫn là tier khó nhất. Chết một lần mất waystone, tablet, và proc Grand Mirror nếu có. Map mod `less recovery`, `no regen`, `extra as element` chồng lên fog rất dễ giết — đọc mod trước khi mở.
- **Market saturation và patch nerf.** Raw ex farm dày tự nén tỉ giá (div leo 126→168 ex trong 5 ngày 2026-06-10→15); Partial Translations ăn redesign 0.5.2. Hướng nerf kế tiếp khả dĩ: deli density node, Grand Mirror spawn rate. Theo dõi từng hotfix.

## Version History

- **0.5.3 (2026-06-19)** — "You can't just wake up from this one." thêm multichoice Simulacrum (pick Escalating Threats). "Are you sure you want to do that?" bỏ tablets-double-effect ở Grand Mirror, thay bằng auto Delirium Mirror + multi-select Shards. Fog scaling halved nhưng 3 Delirium tablet ép giá trị fog về cũ. **City Biome: Tablet Effect bug FIXED** — retroactive throughput buff.
- **2026-06-16** — Initial draft. Phân vai density (doc này) vs rare-count ([Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm)). Số tiền mốc cộng đồng 06-06→06-15, phần lớn con số to là pre-0.5.2 (đánh dấu); div/giờ post-nerf để trống chờ log. Tỉ giá poe2scout 2026-06-15 (1 div ≈ 168 ex).

## Relationships

- **related** [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm) — bản rare-count maximization của cùng strat (dồn `of the Invasion` + Wraeclast Besieged vào cụm stabilise), đã yếu sau 0.5.2.
- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — overlay 200% deli lên Abyss, rival raw-currency được chuộng hơn cho div thuần.
- **competes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) — cùng City + 4 tablet, output Omen/belt thay vì raw currency; chọn một hướng mỗi session.
- **related_mechanics** [Delirium và Trial of Madness](/guides/0-5-delirium-trial-of-madness) — engine Grand Mirror phủ fog 200% cả vùng.
- **related_mechanics** [Breach và hệ craft Genesis Tree](/guides/0-5-breach-genesis-tree) — cơ chế breach + nguồn thu nhập phụ Wombgift/catalyst/Vruun.
- **related_guides** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) — vị trí cluster atlas + 3 Master + nền sustain.
- **related_guides** [Tier list các chiến lược farm currency](/guides/0-5-farming-strategy-tier-list) — chỗ strat này đứng S-tier trong meta hiện tại.
- **related** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm) — vòng splinter/Simulacrum/point Delirium đi kèm.
- **farming_relevance** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build companion ví dụ đủ điều kiện chạy, kèm note vá cold res + phys EHP.
