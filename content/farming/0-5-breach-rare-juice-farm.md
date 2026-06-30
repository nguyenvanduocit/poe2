---
template: templates/farming-template.md
document_type: farming-strategy
title: Breach Rare Juice Farm
status: active
created: '2026-06-10'
updated: '2026-06-23'
strategy_tier: A
investment_tier: High
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Breach Rare Juice Farm

Đẩy mật độ rare monster trong :wiki-link{url="https://www.poe2wiki.net/wiki/Breach"} lên kịch khung bằng phép nhân ba tầng — atlas +2 rare khi stabilise, tablet rare +3, Wraeclast Besieged +5, và Partial Translations 20% nhân đôi toàn bộ — rồi phủ 200% Delirium fog lên City map để mỗi rare nặng hơn. Tier A, investment High (~3.3 div/map: ba tablet rare ~8-9 div đã divine + một unique tablet). Raw drop nhịp ~3-4 div/map không proc, ~10-12 div khi Partial Translations proc; post-0.5.3 City Biome fix trung bình gross ~5.5-6 div/map, net ~2-2.5 div/map, khoảng 20-25 div/giờ ở nhịp 10 map/giờ (mốc 2026-06-19). Cần build ≥10M DPS và đứng nổi 200% fog chồng 20+ rare cùng spawn.

## Strategy Overview

Cả strat đứng trên hai lớp quái của breach và kill-rate là thứ quyết định cả hai. **Lớp rìa** spawn khi vòng đang lan — đây là lớp duy nhất drop loot, vòng lan được bao xa do giết nhanh bao nhiêu vì mỗi kill kéo dài timer. **Lớp stabilise** spawn cụm rare vào tâm vòng khi thanh đạt 100%; toàn bộ tiền tablet nằm ở đây — Moment of Risk +2, ba tablet `of the Invasion` +3, Wraeclast Besieged +5. Thanh không đầy kịp là mất cụm này, tức mất đúng phần ~3.2 div/map mình trả để mua — không phải "lãi ít hơn" mà lỗ ròng. Reality Wound +10 giây và Wraeclast Besieged +120 giây đều chỉ tính sau khi thanh đầy, không giúp lấp thanh. Dưới floor DPS: build vẫn chạy được nhưng kinh tế âm; chuyển sang bản free-juice bỏ tablet rare đắt.

Income đến từ raw currency (Exalted, Chaos, Divine) từ ~30 rare × 5 breach, Lineage Support từ Vruun, Wombgift phụ qua Breeding Program, và Breach Splinter về Breachstone.

## Setup

### Atlas Passive Tree

Breach subtree cần đủ trước khi bàn tablet. Hai notable quyết định strat: **Moment of Risk** (`Unstable Breaches spawn 2 additional Rare Monsters when Stabilised`) là dòng rare-count duy nhất trên cây, bỏ là bỏ một tầng nhân. **Shape the Chains** lấy option `30% increased Effectiveness of Rare Breach Monsters` thay vì đè thêm pack. **Breeding Program** chọn loại Wombgift hợp Genesis Tree. **Frantic Invasion** + **Study the Chains** nếu build giết Vruun nhanh (Lineage Support là dòng đắt nhất trong basket). Breach Hive nodes bỏ hẳn, strat không chạy hive.

Cây chính lấy hết cluster **Rare Monster**: `Mutating Monsters`, `Adaptive Biology`, `Lethal Variants`, `Additional Rare Monster Chance` (+20% chance pack có rare phụ), `Nemesis Rising` option `15% increased Effectiveness of Rare Monsters in your Maps`, `To the Strong Go the Spoils` (2% Rarity per modifier), **The Journey Ahead** option `15% increased Effectiveness of Monsters`. Biome path lấy ba City satellite: desert/grass mastery `15% increased Effectiveness of Monsters in <biome> Areas`, forest `Apex Predators`. **Industrial Improvements** (`An additional Tablet may be used on City Maps`) mở slot tablet thứ tư — không có node này strat sập về 3 slot, mất unique tablet. Chi tiết vị trí cluster xem [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

Delirium subtree cần full để node đỉnh hoạt động. **Grand Mirror Chance** rank đầy. **Recurring Nightmares** option `Delirium Fog spreads to +4 Maps` — cho phép một Grand Mirror phủ fog 200% lên 4 City map reveal sẵn. **City Biome: Tablet Effect** lấy hết 3 rank (`8% increased Effect of Tablet Explicit Modifiers on your City Maps` mỗi rank = 24% tổng); patch 0.5.3 fix bug node này không hoạt động, từ 19/06 throughput tăng retroactive cho mọi người đã có 3 rank.

### Masters of the Atlas

**Jado** định nghĩa strat. **Partial Translations** tier 3 (`20% chance for double effect of Explicit Modifiers on Tablets`) là cú nhân: tablet rare `of the Invasion` +3 thành +6, Wraeclast Besieged +5 thành +10 khi proc. Map nhả 10+ div xảy ra đúng ở khoảnh khắc này. **Unforeseen Threats** tier 2 (`5% chance on completing Maps for a nearby Anomaly Map to be revealed`) ăn theo nhịp Jade Isles. Hai tier 1 flex: **Trove Seekers** thêm rare chest, hoặc **In The Wrong Hands** nếu hay gặp Powerful Map Boss. **Keen Appraisal** tier 4 (`50% increased Exceptional Items found`) đáng nếu đã đẩy rare dày.

### Tablets & Map Device

Bốn slot tablet trên City map:

- **Ba :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} rare**, tất cả phải mang đúng tower suffix `of the Invasion`: `Unstable Breaches in Map spawn an additional Rare Monster when Stabilised` — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Breach%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_3762913035%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D). Mod phụ ưu tiên: `of the Hand` (`(5—20)% increased Effectiveness of Rare Breach Monsters in Map`) → `increased Effectiveness of Monsters` (generic) → `increased Rarity of Items found`. Pack size không nhân được rare count static, bỏ qua.
- **Một :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} unique tablet** ở slot bốn ([trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Wraeclast%20Besieged%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D)). Tower suffix kèm theo: `Unstable Breaches in Map spawn (2—5) additional Rare Monsters when Stabilised` — divine cho tới khi chốt **5** (proc Partial Translations thành 10). Bản thô poe2scout floor 5 ex (Δ7d −50%, volume 21.131 listing 2026-06-19); bản roll +5 rare 5-8 div trên trade2. Pack size âm của unique chấp nhận tới −10%.

:wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} T15 6-mod City biome bắt buộc. Hai stat đáng nhìn: `increased Rarity` + `increased Effectiveness of Monsters`, tổng ≥60-65%. Pack size waystone vô dụng. Biome City: Ezomyte City, Faridun City, hoặc Vaal City quanh citadel. **Swamp Mastery** option `25% chance Chaos Orbs drop as Exalted Orbs in Swamp Areas` đáng lấy khi City variant là Ezomyte.

Để kiếm Grand Mirror: trong lúc đi tìm City, cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} rẻ vào mỗi map đường tới (mod gì cũng được), với cluster Grand Mirror Chance đầy mỗi map ~15-20% chance proc. Khi Grand Mirror hiện, chọn 4 City đã reveal sẵn để fog phủ — phải allocate City biome path trước khi hunt, không thì proc mất uổng.

### Build Requirements

Floor này là ngưỡng kinh tế, không phải gợi ý an toàn. **≥10M effective DPS** để lấp thanh stabilise trên cả 5 breach trước timer — dưới mức đó mất cụm rare stabilise và lỗ ròng mỗi map. Survivability: EHP đủ chịu stack chaos từ Delirium demon, max chaos res nếu được, và bắt buộc **range** (bow, ranged spell, hoặc minion) — melee áp sát giữa 200% fog rồi bị ép vào tâm vòng breach là cách chết phổ biến nhất. League-start không đụng nổi: cần atlas Breach + Delirium đều full point (≥30 điểm mỗi cây) và vốn tablet ~30 div.

## Gameplay

Vào map City đã được fog phủ, tìm breach hand theo minimap. **Edge breach, không lao thẳng vào tâm.** Đứng ở mép, kéo theo vòng lan, giết hết lớp rìa trước — chỉ lớp này drop loot. **Giữ kill liên tục** trong khi vòng đang lan; mỗi khoảng dừng là thanh đứng yên trong khi timer chạy, thanh không đầy = mất cụm stabilise. Loot nhặt sau khi breach xong. Sau stabilise không cần vội: +120 giây từ Wraeclast Besieged đủ dọn cụm rare tâm vòng thoải mái. Map boss giết để rớt waystone + chance Grand Mirror; quái ngoài breach bỏ qua, 95% loot nằm trong 5 breach.

Bốn-năm phút mỗi map bình thường, dài hơn khi Partial Translations proc.

## Loot Breakdown & Economic Analysis

Rare count/breach: 20 base + 2 (Moment of Risk) + 3 (ba tablet `of the Invasion`) + 5 (Wraeclast Besieged divined) = ~30 rare nền; post-0.5.3 City Biome fix 24% áp lên 8 rare từ tablet+unique → ~32 rare/breach. Nhân 5 breach × ~32 rare × 1.4-1.6 Delirium multiplier ở 200% fog × 1.0 hoặc 1.8-2.0 khi Partial Translations proc = gross ~5.5-6 div/map trung bình, net ~2-2.5 div/map sau cost ~3.3 div.

Mốc giá 2026-06-19: rare Breach Tablet bản thô ~5-6 div, bản divine `of the Invasion` +3 ~8-9 div. Tỉ giá 1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} ≈ 191 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} (poe2scout 2026-06-19). **Re-check giá tablet trước mỗi session** — tablet rare biến giá nhanh và 0.5.3 vừa drop, market đang shuffle; mốc trên trễ trong 3-7 ngày.

Output bán: raw currency qua Currency Exchange (Chaos đang đắt nghịch, nếu có biome mastery chuyển Exalted → Chaos bán ra ex giá tốt hơn). :wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"} từ Vruun bán lẻ qua trade2, vài div tới vài chục div/cái, nguồn lãi cao nhất per-drop. Wombgift bán bulk qua Currency Exchange. Breach Splinter stack 300 thành :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"} rồi bán (strat không cần dùng breachstone).

Đẩy Partial Translations proc bằng cách max số explicit modifier trên tablet: bulk-roll bằng Exalted Orb để đẩy lên 6 mod trước khi divine `of the Invasion`. Khi market tablet nén (tuần 2-3), pivot xuống bản budget 3 slot trên map non-City để giữ ROI thay vì cố giữ full juice với margin âm.

## Failure Modes

- **Tablet rare market biến giá nhanh.** `of the Invasion` +3 ~8-9 div vì strat đang tâm meta farm giữa league; khi flood supply hoặc demand tăng thêm, margin nén theo cả hai hướng. Re-check trade2 trước mỗi session, nếu giá lệch >30% so mốc gốc thì tính lại.
- **Build floor là ngưỡng kinh tế, không phải gợi ý.** DPS thiếu thì thanh stabilise không đầy, cụm rare từ tablet không spawn, map vẫn "chạy được" nhưng lỗ vài div/map mà không có cú chết nào báo hiệu. Chết một lần mất nguyên waystone + 4 tablet (~3.5 div). Map mod `less recovery`, `no regen`, `extra fire as cold` cộng lên 200% fog dễ one-shot — phải đọc mod trước khi mở map.
- **Grand Mirror là nút thắt nhịp.** Không có Grand Mirror thì juice mất 40-50%. RNG nhả chậm thì phải chạy City với fog yếu (lãi mỏng) hoặc dừng farm chính để hunt. City cluster phải reveal sẵn quanh điểm hunt, không thì Grand Mirror proc vào vùng không có City là mất.
- **Patch nerf risk cao.** Moment of Risk, Partial Translations 20% double, Wraeclast Besieged +5 là nhóm raw juice mạnh nhất 0.5, GGG có lịch sử nerf đúng cái đang sinh lời nhất giữa league. Bất kỳ nerf nào trong nhóm này nhân hệ số juice xuống một nửa.
- **Market saturation raw currency.** Rare juice dày tự nén tỉ giá ex/div; divine càng đắt theo ex thì map nhả nhiều ex càng ít giá trị quy div. Rủi ro hệ thống của mọi raw-currency-juice strat 0.5.

## Version History

- **0.5.3 (19/06/2026)** — Fix bug high-impact: City Biome: Tablet Effect (3 rank = 24%) trước không hoạt động, giờ áp đúng retroactive. Throughput nhảy: gross ~5.5-6 div/map (tăng từ ~5 div), net ~2-2.5 div/map, ~20-25 div/giờ. Breach Stronghold size tăng. Wombgift Ctrl+Click QoL. Tear Open the Rift: bỏ 2 mod cũ (Ailith Skill Damage, Wombgift-type-chance), thêm 4 mod mới (Hive monsters min Magic, Dreamer's Sight rarity zone, Otherworldly Nemesis +rare pack, Xesht's Fervour effectiveness) — strat chạy City breach không Hive nên thay đổi Hive không đụng throughput. Partial Translations áp lên unique tablet như thế nào (poedb chưa nói rõ explicit có gồm base affix unique không) — khi farm log riêng map dùng Wraeclast Besieged để verify multiplier áp lên +5 rare hay không.
- **2026-06-10** — Initial draft (patch 0.5.1). Cơ chế hai lớp quái verify từ poedb live 2026-06-09. Build Requirements reframe thành ngưỡng kinh tế.

## Relationships

- **related_guides** [Breach và hệ craft Genesis Tree](/guides/0-5-breach-genesis-tree): cơ chế breach gốc và Genesis Tree, nguồn của Wombgift output phụ trong strat này.
- **related_mechanics** [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree): vị trí cluster Breach/Delirium/City + ba master (Jado/Hilda/Doryani).
- **competes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting): cùng dùng City map + Industrial Improvements + Jado Partial Translations + 4 slot tablet, output khác (belt phương sai cao vs raw currency nhịp đều); chọn một hướng cho mỗi session.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain): nền sustain map + atlas progression cho mọi City-map juice strat.
- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack): ví dụ build endgame đủ DPS + EHP đứng nổi 200% Delirium fog chồng 20+ rare cùng spawn.
