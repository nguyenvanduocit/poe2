---
template: templates/farming-template.md
document_type: farming-strategy
title: Breach Rare Juice Farm
status: active
created: '2026-06-10'
updated: '2026-07-14'
strategy_tier: A
investment_tier: High
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Breach Rare Juice Farm

## TL;DR

- Đẩy rare count/breach lên kịch khung: atlas Moment of Risk +2, ba Breach Tablet `of the Invasion` +3, Wraeclast Besieged +5, Partial Translations 20% nhân đôi — rồi phủ 200% Delirium fog trên City.
- Tiền nằm ở cụm rare STABILISE (thanh đạt 100%); DPS thiếu = thanh không đầy = mất cụm ~3.2 div đã trả = lỗ ròng, không phải "lãi ít hơn".
- Setup 4 slot: 3 Breach Tablet rare + 1 Wraeclast Besieged, City biome, waystone T15 6-mod.
- Cần ≥10M DPS, EHP chịu 200% fog + 20+ rare cùng spawn, bắt buộc range (melee bị ép vào tâm vòng dễ chết).
- EV gross ~5.5-6 div/map, net ~2-2.5 div/map, ~20-25 div/giờ (2026-06-19); cost ~3.3 div/map.
- Market tablet nén tuần 2-3 → pivot xuống bản budget 3 slot non-City giữ ROI.

Đẩy mật độ rare monster trong :wiki-link{url="https://www.poe2wiki.net/wiki/Breach"} lên kịch khung bằng phép nhân nhiều tầng rồi phủ 200% Delirium. Tier A, investment High (~3.3 div/map: ba tablet rare ~8-9 div đã divine + một unique tablet).

## Waystone roll gì

- :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} T15 6-mod City biome bắt buộc (Ezomyte City, Faridun City, hoặc Vaal City quanh citadel).
- Hai stat đáng nhìn: `increased Rarity` + `increased Effectiveness of Monsters`, tổng ≥60-65%. Pack size waystone vô dụng ở phần rare static.
- **Swamp Mastery** option `25% chance Chaos Orbs drop as Exalted Orbs in Swamp Areas` đáng lấy khi City variant là Ezomyte.

## Tablet roll gì

Bốn slot tablet trên City map:

- **Ba :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} rare**, tất cả đúng tower suffix `of the Invasion`: `Unstable Breaches in Map spawn an additional Rare Monster when Stabilised` — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Breach%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_3762913035%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D).
- Mod phụ ưu tiên: `of the Hand` (`(5—20)% increased Effectiveness of Rare Breach Monsters in Map`) → `increased Effectiveness of Monsters` (generic) → `increased Rarity of Items found`. Pack size không nhân được rare count static, bỏ qua.
- **Một :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"}** unique tablet ở slot bốn ([trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Wraeclast%20Besieged%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D)). Tower suffix kèm theo: `Unstable Breaches in Map spawn (2—5) additional Rare Monsters when Stabilised` — divine cho tới khi chốt **5** (proc Partial Translations thành 10). Pack size âm của unique chấp nhận tới −10%.
- Bản thô poe2scout floor 5 ex (Δ7d −50%, volume 21.131 listing 2026-06-19); bản roll +5 rare 5-8 div trên trade2.
- Đẩy Partial Translations proc: bulk-roll bằng Exalted Orb để max explicit modifier (đẩy lên 6 mod trước khi divine `of the Invasion`).
- Kiếm Grand Mirror: cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} rẻ (mod gì cũng được) vào mỗi map đường tới City, với cluster Grand Mirror Chance đầy mỗi map ~15-20% chance proc.

## Atlas passive spec gì

Breach subtree:

- **Moment of Risk** (`Unstable Breaches spawn 2 additional Rare Monsters when Stabilised`) — dòng rare-count duy nhất trên cây, bỏ là bỏ một tầng nhân.
- **Shape the Chains** lấy option `30% increased Effectiveness of Rare Breach Monsters` thay vì đè thêm pack.
- **Breeding Program** chọn loại Wombgift hợp Genesis Tree.
- **Frantic Invasion** + **Study the Chains** nếu build giết Vruun nhanh (Lineage Support là dòng đắt nhất basket). Breach Hive nodes bỏ hẳn.

Cây chính lấy hết cluster **Rare Monster**: `Mutating Monsters`, `Adaptive Biology`, `Lethal Variants`, `Additional Rare Monster Chance` (+20% chance pack có rare phụ), `Nemesis Rising` option `15% increased Effectiveness of Rare Monsters in your Maps`, `To the Strong Go the Spoils` (2% Rarity per modifier), **The Journey Ahead** option `15% increased Effectiveness of Monsters`. Biome path lấy ba City satellite: desert/grass mastery `15% increased Effectiveness of Monsters in <biome> Areas`, forest `Apex Predators`. **Industrial Improvements** (`An additional Tablet may be used on City Maps`) mở slot tablet thứ tư — thiếu là sập về 3 slot, mất unique tablet. Vị trí cluster xem [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

Delirium subtree full:

- **Grand Mirror Chance** rank đầy.
- **Recurring Nightmares** option `Delirium Fog spreads to +4 Maps` — một Grand Mirror phủ fog 200% lên 4 City map reveal sẵn.
- **City Biome: Tablet Effect** lấy hết 3 rank (`8% increased Effect of Tablet Explicit Modifiers on your City Maps` mỗi rank = 24% tổng); 0.5.3 fix bug node này, từ 19/06 throughput tăng retroactive.

## Master chọn ai

- **Jado** định nghĩa strat. **Partial Translations** tier 3 (`20% chance for double effect of Explicit Modifiers on Tablets`) là cú nhân: `of the Invasion` +3 thành +6, Wraeclast Besieged +5 thành +10 khi proc. Map nhả 10+ div xảy ra đúng khoảnh khắc này.
- **Unforeseen Threats** tier 2 (`5% chance on completing Maps for a nearby Anomaly Map to be revealed`) ăn theo nhịp Jade Isles.
- Hai tier 1 flex: **Trove Seekers** (thêm rare chest), hoặc **In The Wrong Hands** nếu hay gặp Powerful Map Boss.
- **Keen Appraisal** tier 4 (`50% increased Exceptional Items found`) đáng nếu đã đẩy rare dày.

## Chạy map

- Setup: waystone City T15 6-mod, 3 Breach Tablet `of the Invasion` + 1 Wraeclast Besieged, City đã được Grand Mirror phủ 200% fog. Ngưỡng: **≥10M effective DPS** lấp thanh stabilise trên cả 5 breach trước timer.
- Vào map City đã fog, tìm breach hand theo minimap. **Edge breach, không lao thẳng vào tâm** — đứng ở mép, kéo theo vòng lan, giết hết lớp rìa trước (chỉ lớp này drop loot).
- **Giữ kill liên tục** trong khi vòng đang lan; mỗi khoảng dừng là thanh đứng yên trong khi timer chạy → thanh không đầy = mất cụm stabilise.
- Sau stabilise không cần vội: +120 giây từ Wraeclast Besieged đủ dọn cụm rare tâm vòng. Loot nhặt sau khi breach xong.
- Map boss giết để rớt waystone + chance Grand Mirror; quái ngoài breach bỏ qua, 95% loot nằm trong 5 breach.
- Nhịp: 4-5 phút/map bình thường, dài hơn khi Partial Translations proc.
- Gate kinh tế: DPS dưới floor thì cụm rare stabilise không spawn, map vẫn "chạy" nhưng lỗ vài div/map. Reality Wound +10s và Wraeclast Besieged +120s chỉ tính SAU khi thanh đầy, không giúp lấp thanh.

## Kinh tế

Giá 2026-06-19, 1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} ≈ 191 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} (poe2scout).

- Rare count/breach: 20 base + 2 (Moment of Risk) + 3 (ba tablet) + 5 (Wraeclast Besieged divined) = ~30 rare nền; post-0.5.3 City Biome fix 24% áp lên 8 rare từ tablet+unique → ~32 rare/breach. Nhân 5 breach × ~32 rare × 1.4-1.6 Delirium mult ở 200% fog × 1.0 hoặc 1.8-2.0 khi Partial Translations proc.
- Gross ~5.5-6 div/map trung bình, net ~2-2.5 div/map sau cost ~3.3 div, ~20-25 div/giờ ở 10 map/giờ.
- Tablet: rare Breach Tablet bản thô ~5-6 div, bản divine `of the Invasion` +3 ~8-9 div. **Re-check giá tablet trước mỗi session** — biến giá nhanh, 0.5.3 vừa drop, mốc trên trễ trong 3-7 ngày.
- Output bán: raw currency (Exalted, Chaos, Divine) qua Currency Exchange từ ~30 rare × 5 breach (Chaos đang đắt nghịch, biome mastery chuyển Exalted → Chaos bán giá tốt hơn). :wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"} từ Vruun bán lẻ trade2 vài div tới vài chục div/cái — nguồn lãi cao nhất per-drop. Wombgift bán bulk qua Currency Exchange. Breach Splinter stack 300 thành :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"} rồi bán.

## Failure Modes

- **Tablet rare market biến giá nhanh.** `of the Invasion` +3 ~8-9 div vì strat đang tâm meta farm giữa league; flood supply hoặc demand tăng thì margin nén cả hai hướng. Re-check trade2 trước mỗi session, lệch >30% so mốc gốc thì tính lại.
- **Build floor là ngưỡng kinh tế, không phải gợi ý.** DPS thiếu thì thanh stabilise không đầy, cụm rare không spawn, map vẫn "chạy được" nhưng lỗ vài div/map mà không có cú chết nào báo hiệu. Chết một lần mất nguyên waystone + 4 tablet (~3.5 div). Map mod `less recovery`, `no regen`, `extra fire as cold` cộng lên 200% fog dễ one-shot — đọc mod trước khi mở map.
- **Grand Mirror là nút thắt nhịp.** Không có Grand Mirror thì juice mất 40-50%. RNG nhả chậm thì phải chạy City fog yếu (lãi mỏng) hoặc dừng farm chính để hunt. City cluster phải reveal sẵn quanh điểm hunt, không thì Grand Mirror proc vào vùng không City là mất.
- **Patch nerf risk cao.** Moment of Risk, Partial Translations 20% double, Wraeclast Besieged +5 là nhóm raw juice mạnh nhất 0.5; GGG có lịch sử nerf đúng cái đang sinh lời nhất giữa league. Bất kỳ nerf nào nhân hệ số juice xuống một nửa.
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
