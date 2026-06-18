---
template: templates/farming-template.md
document_type: farming-strategy
title: Breach Rare Juice Farm
status: active
created: '2026-06-10'
updated: '2026-06-10'
strategy_tier: A
investment_tier: High
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Breach Rare Juice Farm

Đẩy mật độ rare monster trong :wiki-link{url="https://www.poe2wiki.net/wiki/Breach"} lên kịch khung của 0.5 để mỗi map nhả raw currency thẳng vào túi, không qua market, không phụ thuộc unique đắt. Strategy ăn ở chỗ nhân ba tầng nhân (atlas +2 rare khi stabilise, tower tablet +rare, Jado double-tablet 20% chance), rồi cộng thêm Delirium fog phủ City map để mỗi rare drop nặng hơn. Tier A, investment High (tablet rare khi đã divine lên ~8-9 div/cái, hai-ba tablet mỗi map). Nền throughput cỡ raw 3-4 div/map khi không proc, ~10-12 div/map khi Partial Translations bật (mốc quan sát tuần 2026-06-09). Cần build endgame đủ thủ và đủ DPS để đứng nổi 200% Delirium fog chồng 20+ rare cùng spawn.

## Strategy Overview

Cái làm strat đẻ ra tiền không phải breach hay delirium đơn lẻ, mà là phép nhân. Một breach sạch nhả ~20 rare ở rìa vòng. Không đếm quái spawn sau khi stabilise vì lớp đó không drop loot. Năm breach mỗi map (atlas hub mặc định) thành ~100 rare. Mỗi rare ăn Delirium fog 200% là một con quái buff khủng nhả modifier dày, drop currency và Lineage Support khi giết. **Shape the Chains** thêm hiệu lực rare breach, **Moment of Risk** cộng đúng 2 rare vào lúc stabilise, tức từ ~20 lên ~22 rare/breach trước khi cộng tablet. Tower suffix _of the Invasion_ cộng +1 rare nữa. Unique tablet _Wraeclast Besieged_ cộng từ +2 tới +5 rare nữa (divine để chốt 5). Cộng dồn: mỗi breach lên ~28 rare nền, City map mở 4 slot tablet thì lên cao hơn. **Partial Translations** (Jado tier3) đập 20% chance nhân đôi mọi explicit modifier trên tablet. Khi proc, tablet effect lẫn rare count cùng nhân đôi, một map đơn lẻ nhả ~10 div raw.

## Reward bị gate bởi cái gì

Toàn bộ kinh tế của strat đứng trên cơ chế hai lớp quái của breach, và cả hai lớp đều do tốc độ giết quyết định. Phải hiểu chỗ này trước khi bỏ div mua tablet, vì mọi quyết định setup phía dưới (tablet nào, stat nào trên waystone, build nào chạy được) đều suy ra từ đây.

**Lớp một là quái rìa lúc vòng đang lan.** Mở breach là vòng bắt đầu lan từ bàn tay ra ngoài, quái spawn dày ở rìa theo đà lan, và chỉ lớp này drop loot. Vòng lan được bao xa do mình giết nhanh bao nhiêu: breach chỉ mở trong thời gian ngắn, giết quái breach kéo dài thời gian sống của nó (poedb verbatim: `Kill Breach monsters to keep them open longer`). Giết chậm thì vòng sập sớm, ít quái spawn ra, ít loot — giết nhanh gấp đôi là gần gấp đôi quái, không có cách gỡ bằng gear hay mod.

**Lớp hai là cụm rare lúc stabilise, và toàn bộ tiền tablet nằm ở lớp này.** Giết đủ quái đẩy thanh lên 100% thì breach stabilise, gọi cụm quái mạnh ra portal ở tâm vòng. Mọi dòng `+X additional Rare Monsters when Stabilised` — Moment of Risk +2, ba tablet `of the Invasion` +3, _Wraeclast Besieged_ +5, và cú nhân đôi của Partial Translations lên tất cả — chỉ spawn ở đúng khoảnh khắc stabilise. Thanh không đầy kịp trước khi breach sập thì cụm này không bao giờ xuất hiện: ~10 trong ~30 rare của mỗi breach, đúng phần juice mình trả ~3.2 div/map để mua, bay hơi.

**Lấp thanh là bài kiểm tra kill-rate thuần, không node nào bù được.** Hai dòng cộng thời gian trong hệ — **Reality Wound** +10 giây, _Wraeclast Besieged_ +120 giây — đều chỉ tính *sau khi thanh đầy* (`after timer is filled`): chúng mua thời gian dọn cụm rare stabilise, không giúp việc lấp thanh. Trước mốc 100%, thứ duy nhất giữ breach sống và đẩy thanh là DPS của build.

**Hệ quả kinh tế: cost trả trước cố định, reward thu theo kill-rate.** Tablet bị tiêu lúc mở map, bất kể sau đó clear được bao nhiêu. Build nhanh ăn đủ ~30 rare × 5 breach; build chậm trả đúng số tiền đó nhưng vòng lan ngắn hơn và mất nguyên lớp stabilise — thu 40-50% reward trên 100% cost là **lỗ ròng**, không phải "lãi mỏng hơn". Floor DPS ở Build Requirements vì vậy là ngưỡng kinh tế, không phải gợi ý an toàn. Build dưới ngưỡng vẫn chạy breach được, nhưng phải chạy bản free-juice ở [Alternatives & Variations](#alternatives--variations), không phải bản này.

Bốn hệ số còn lại của reward, xếp theo thứ tự đầu tư: **rare count** (các dòng static cộng vào lúc stabilise — tầng đắt nhất), **giá trị mỗi kill** (monster effectiveness + item rarity + Delirium fog — effectiveness cho rare nhiều modifier hơn, mỗi modifier là một dòng drop), **tần suất** (5 breach/map, 4 slot tablet trên City), và **Jado proc** (20% chance nhân đôi cả ba hệ số trên qua tablet effect). Pack size không nằm trong danh sách: số rare là static nên pack size không nhân được gì, đó là lý do mọi chỗ trong doc này đều bảo bỏ qua nó.

## Setup

### Atlas Passive Tree

Breach subtree cần đi đủ trước khi bàn tới mod tablet, vì point từ Monastery of the Keepers hub mặc định cho free juice ban đầu. Hai notable quyết định cả strat: **Moment of Risk** (`Unstable Breaches spawn 2 additional Rare Monsters when Stabilised` cộng với Wombgift level-up 5% per map mod) là dòng rare-count duy nhất trên cây, không lấy = bỏ một tầng nhân. **Shape the Chains** chọn option `30% increased Effectiveness of Rare Breach Monsters` để mỗi rare đáng giá hơn thay vì đè thêm pack rồi tràn build. **Breeding Program** chọn loại Wombgift hợp Genesis Tree mình nuôi, tầng lãi phụ này cho mỗi map đều rớt Wombgift extra. **Frantic Invasion** cộng **Study the Chains** đi cùng nếu build giết Vruun nhanh, vì Lineage Support đang là dòng đắt nhất trong basket loot. Breach Hive node (`Swelling Hives`, `Provoke the Swarm`, `Sole Purpose`) bỏ hẳn vì strat này không chạy hive.

Cây chính lấy hết cluster **Rare Monster**: `Mutating Monsters`, `Adaptive Biology`, `Lethal Variants` cho rare ăn nhiều modifier hơn (Delirium fog đẩy thêm), `Additional Rare Monster Chance` (+20% chance pack có rare phụ), `Nemesis Rising` chọn option `15% increased Effectiveness of Rare Monsters in your Maps`, `To the Strong Go the Spoils` (2% Rarity per modifier, scale theo chính cái mình đang juice). **The Journey Ahead** chọn `15% increased Effectiveness of Monsters` thay vì rarity hay pack size, vì hai cái kia không scale rare count tĩnh của breach. Biome path lấy ba City satellite cùng lúc: **desert/grass** lấy mastery `15% increased Effectiveness of Monsters in <biome> Areas`, **forest** lấy `Apex Predators` cho thêm rare. **Swamp Mastery** option `25% chance Chaos Orbs drop as Exalted Orbs in Swamp Areas` đáng lấy vì chaos đang đắt ngược, nhưng chỉ khi City variant bao gồm swamp (Ezomyte City). Slot tablet thứ tư mở qua notable **Industrial Improvements** (`An additional Tablet may be used on City Maps`); không có node này thì strat sập về 3 slot tablet, mất luôn unique tablet. Vị trí cluster atlas + biome chi tiết xem [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

Delirium subtree cần full để node đỉnh hoạt động. **Grand Mirror Chance** rank để map boss chết nhả Grand Mirror lên map gần. **Recurring Nightmares** chọn option `Delirium Fog spreads to +4 Maps` (nhánh thứ hai của notable); chính là dòng cho phép phủ fog 200% từ một Grand Mirror sang 4 map xung quanh đã chọn sẵn, tức một Grand Mirror = 4 City map juice nặng. Tablet effect node **City Biome: Tablet Effect** lấy hết 3 rank (`8% increased Effect of Tablet Explicit Modifiers on your City Maps` mỗi rank, cộng 24%); multiplier áp lên tablet rare lẫn _Wraeclast Besieged_ rare count.

### Masters of the Atlas

**Jado** là master định nghĩa strat. **Partial Translations** (tier 3): `20% chance for double effect of Explicit Modifiers on Tablets`. Một phần năm map ăn cú nhân: nếu tablet rare đang là +3 rare on stabilise thì proc thành +6, _Wraeclast Besieged_ +5 rare thành +10, tower suffix +rare nhân đôi luôn. Map nhả 10+ div xảy ra đúng ở khoảnh khắc proc này. **Unforeseen Threats** (tier 2): `5% chance on completing Maps for a nearby Anomaly Map to be revealed`, ăn theo nhịp Jade Isles, vì City biome có sẵn vòng quanh citadel nên anomaly rớt ngay vùng đang farm. Hai tier 1 còn lại flex: **Trove Seekers** thêm rare chest cho City humanoid map (`Guild Craftsmen` City notable cho humanoid 30% chance drop Exceptional Item), hoặc **In The Wrong Hands** nếu hay gặp Powerful Map Boss. **Keen Appraisal** (tier 4) đáng nếu đã đẩy được rare lên dày: `50% increased Exceptional Items found` cộng dồn với Guild Craftsmen. Hilda và Doryani đều thua Jado ở strat này vì không có cái gì nhân tablet effect kiểu Partial Translations.

### Tablets & Map Device

Bốn slot tablet trên City map, mỗi slot có công việc riêng:

- **Ba :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} rare**, tất cả ba phải mang đúng dòng tower suffix `of the Invasion`: `Unstable Breaches in Map spawn an additional Rare Monster when Stabilised`. Dòng này quyết slot rare tablet (tower roll text nên gọi là "tablet mod"), cộng dồn ba tablet thành +3 rare/breach nữa lên trên Moment of Risk. Mod phụ ưu tiên theo thứ tự: `of the Hand` (`(5—20)% increased Effectiveness of Rare Breach Monsters in Map`, best vì áp đúng rare breach), rồi tới `(10—15)% increased Effectiveness of Monsters` (generic, vẫn ăn breach), cuối cùng `8—12% increased Rarity of Items found in your Map`. Pack size thừa thãi vì số rare đã cố định, pack size không nhân được. Hai tier mod còn lại trên tablet không quan trọng, không cần roll thêm.
- **Một :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} unique tablet** ở slot bốn (qua Industrial Improvements). Verbatim: `Adds an Otherworldy Breach to a Map`, `Breaches in Map have (-10—20)% reduced Pack Size`, `Unstable Breaches in Map take 120 additional seconds to collapse after timer is filled`. Roll quan trọng là dòng tower suffix kèm theo: `Unstable Breaches in Map spawn (2—5) additional Rare Monsters when Stabilised`. Divine cho tới khi chốt **5**, vì 5 này lại bị Partial Translations nhân lên thành 10 khi proc. Hai mod đầu của unique tablet không cần care (pack size âm chấp nhận được, chỉ tránh roll −20%). Mua quanh 2-3 div bản thô, 6-8 div bản roll đẹp.

Waystone đi vào Map Device cùng bốn tablet này. Tower suffix mod chỉ rớt khi chạy Precursor Tower, tức tablet rare đẹp phải mua từ trade vì roll tự rất chậm. Link mua ở section bên dưới.

### Waystone & Map Choice

City biome bắt buộc. Không có City thì mất slot bốn, mất unique tablet, mất luôn 24% multiplier từ City Biome: Tablet Effect. Vòng quanh ba citadel chính: Ezomyte City, Faridun City, Vaal City (đây là biome chứ không phải tên map cụ thể). :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} cần T15 6-mod để mở đủ 3 slot rare tablet, alch rồi exalt cho đủ 6 affix. Hai stat duy nhất đáng nhìn trên waystone là `increased Rarity` và `increased Effectiveness of Monsters`, tổng cộng phải ≥60-65% (vd 40 rarity + 20 effectiveness, hoặc 50 rarity + 15 effectiveness). Pack size waystone vô dụng cho strat này y như pack size tablet vì số rare static. **Monster Rarity** waystone mới chỉ ăn nửa (modifier chance phần), không nhân được rare count. Tới T16 chỉ tạo khác biệt khi cũng cắm Doryani's Prototype-equivalent (POE2 chưa có item này) hoặc push tới zone level 81 để rare nhả ilvl 82 base. Bản phổ thông cứ T15 + Doryani's Prototype-free là đủ.

Chuyện kiếm Grand Mirror để cắm 200% Delirium fog lên City map: trong lúc đi tìm City để chạy strat chính, cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} rẻ vào mỗi map đường tới (mod gì cũng được, mua bulk rẻ nhất), waystone 6 mod. Cộng với cluster Grand Mirror Chance đầy đủ, mỗi map có ~15-20% chance map boss chết nhả Grand Mirror sang map gần. Khi Grand Mirror hiện, chạy map đó, vào kích hoạt, rồi chọn 4 City đã reveal sẵn quanh đó để fog phủ. Vì vậy phải allocate City biome path **trước** khi đi tìm Grand Mirror, không thì lúc proc không có City để phủ vào.

### Build Requirements

Build này khắc nghiệt hơn ritual hay raw boss farm, và ngưỡng vào cửa là ngưỡng kinh tế chứ không phải gợi ý: như đã tách ở [Reward bị gate bởi cái gì](#reward-bị-gate-bởi-cái-gì), cost tablet trả trước cố định còn reward thu theo kill-rate, nên build thiếu DPS không "lãi ít hơn" mà lỗ thẳng. **Build cần ≥10M effective DPS** để lấp thanh stabilise trên cả 5 breach trước khi timer hết — dưới mức đó mất nguyên cụm rare stabilise (~10/30 rare mỗi breach, đúng phần tablet mua) và vòng lan ngắn cắt thêm lớp quái rìa. 200% Delirium chồng 20+ rare cộng spawn cùng lúc trong vòng breach: một-shot tới từ rare modifier ngẫu nhiên + Delirium demon manifest + breach monster đập đồng loạt. Survivability cần đủ EHP cho stack chaos (Delirium fog hay nhả chaos damage qua demon), max chaos res nếu được, và đặc biệt cần **range**: bow, ranged spell, hoặc minion build đứng xa. Melee áp sát giữa fog 200% rồi bị ép vào tâm vòng breach là cách chết phổ biến nhất. League-start không đụng nổi: cần atlas Breach + Delirium đều full point (≥30 point mỗi cây), tức đã sustain endgame nhiều giờ; cộng vốn tablet ~30 div bản đắt. HC mode chỉ chạy được khi xuống juice (bỏ Delirium 200%, dùng tablet thường thay rare divine); và như thế thì cũng không còn là chính strat này nữa.

## Gameplay

Vào map City đã được fog phủ, đi tìm breach hand theo minimap icon. Cách clear sạch một breach phải đúng: **edge breach**, đừng lao thẳng vào tâm. Vòng breach lan từ điểm ban đầu ra ngoài, quái spawn dày ở rìa lúc vòng đang lan và rớt loot bình thường; quái spawn sau khi vòng đã stabilise (tâm vòng chuyển sang phase rare boss) thì **không drop loot**. Tức là quái drop loot chính là lớp đầu rớt ra rìa lúc đang lan; đứng ở mép, kéo theo vòng, giết hết lớp ngoài rồi mới dồn vào tâm cho rare cluster. Trong lúc vòng đang lan, **giữ kill liên tục** — mỗi khoảng dừng (nhặt loot, chạy lạc hướng, đợi cooldown) là thanh đứng yên trong khi timer vẫn chạy, và thanh không đầy là mất nguyên cụm stabilise. Loot nằm yên trên đất, nhặt sau khi breach xong. Sau khi stabilise thì ngược lại, không cần vội: Reality Wound +10 giây và _Wraeclast Besieged_ +120 giây đều tính từ lúc thanh đầy, đủ thong thả dọn cụm rare từ Moment of Risk + tablet ở tâm vòng; giết hết là xong breach. Map boss giết để rớt thêm waystone với chance Grand Mirror, còn quái thường ngoài breach bỏ qua hết, 95% loot map nằm trong 5 breach.

Bốn-năm phút mỗi map nếu clear nhanh, dài hơn nếu Partial Translations proc vì lúc đó breach đông quái gấp đôi và rare loot gấp ba bốn lần, đáng đợi.

## Loot Breakdown & Economic Analysis

Mỗi map cho ra raw currency từ rare drop (Exalted, Chaos, Divine theo tỉ lệ vanilla scale với rare count + rarity bonus), Lineage Support từ Vruun (nếu đi nhánh), Wombgift cho Genesis Tree craft (lãi phụ qua Breeding Program), và Breach Splinter để gom Breachstone:

$$
\begin{aligned}
\text{profit/hr} = \big(\,& \text{rare/breach} \times \text{breaches/map} \times \text{raw currency/rare} \\
&\times \text{delirium mult} \times \text{jado mult} + \text{lineage value/vruun} \times \text{vruun rate} \\
&+ \text{wombgift/map} \times \text{maps/hr} + \text{splinter/map} \times \text{splinter price} \,\big) \times \text{maps/hr} \\
&- \text{tablet cost/map} - \text{waystone cost/map} - \text{opportunity cost}
\end{aligned}
$$

Trong đó:
- **tablet cost/map** — 3 rare breach + 1 unique tablet
- **waystone cost/map** — 6-mod T15 City
- **opportunity cost** — atlas point cày 60+ vào Breach+Delirium+City, Grand Mirror hunt time

Trong đó multiplier breakdown:
- `rare_count_per_breach` = 20 base + 2 (Moment of Risk) + 3 (3 tower suffix `of the Invasion`) + 5 (unique tablet bản divined) = ~30 rare/breach trước proc.
- `breaches_per_map` = 5 (hub Monastery of the Keepers nhả 4-5 breach mặc định trên map có atlas Breach subtree).
- `delirium_density_multiplier` ≈ 1.4-1.6 ở 200% fog (rare ăn thêm modifier, drop dày hơn).
- `jado_proc_multiplier` = 1.0 mặc định, 1.8-2.0 khi 20% chance Partial Translations proc (tablet effect nhân đôi nhân vào rare count lẫn effectiveness).

Mốc thị trường tuần 2026-06-09 (poe2scout không track Breach Tablet rare, re-check trade2 trước session): rare Breach Tablet bản thô ~5-6 div mỗi cái, ~8-9 div sau khi divine `of the Invasion` lên +3; unique _Wraeclast Besieged_ ~2-3 div, ~6-8 div bản roll đẹp. Tổng tablet/map = 3 × 8.5 div + 7 div = ~32 div cho 10 charge, tức ~3.2 div/map tablet cost. Cộng waystone (~0.2 div/map nếu tự roll), total cost ~3.5 div/map. Raw drop nhịp ~3-4 div mỗi map không proc, ~10-12 div mỗi map khi Partial Translations proc (20% nhịp), trung bình ~5 div/map gross → ~1.5 div/map net. Ở nhịp 10 map/giờ = ~15 div/giờ net.

**Re-check giá tablet trước mỗi session.** Đầu league 0.5 tablet rare biến giá rất nhanh. Mở link mua bên dưới để đối chiếu live; mốc trên là tuần đầu tháng 6 và sẽ trễ trong 7-14 ngày.

Tỉ giá tham chiếu: **1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} ≈ 130 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}** theo poe2scout 2026-06-10 (divine +51% tuần qua vì 0.5 thiếu divine sink; giá net tablet theo ex cũng đang giãn).

## Mua gì và bán ở đâu

Link tạo live ngày 2026-06-10, league Runes of Aldur. Sang league mới link sẽ hết hạn; lúc đó search lại bằng đúng tên/mod ghi kèm.

**Item cần mua (setup):**

- **Rare :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Tablet"} với `of the Invasion`** là dòng money của ba slot rare. Search trade2 cho "Breach Precursor Tablet" + suffix `Unstable Breaches spawn additional Rare Monsters when Stabilised` (filter giá trị 3, tức đã divine), kèm `Effectiveness of Rare Breach Monsters` hoặc `Effectiveness of Monsters` hoặc `Rarity of Items found`. Status: `securable` để chỉ thấy listing mua-được-luôn.
- **:wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} unique tablet**: search unique name trực tiếp, filter `Unstable Breaches spawn (2—5) additional Rare Monsters` ≥5 cho bản chốt, status `securable`. Pack size âm chấp nhận tới −10%, đừng mua bản −20%.
- **:wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} bulk** cho Grand Mirror hunt: mua loại nào rẻ nhất, mod không quan trọng. Currency Exchange bán bulk dễ hơn search lẻ.

**Item bán ra (output):**

- **Raw currency** (Exalted, Chaos, Divine, Annulment) bán trực tiếp qua Currency Exchange, không cần whisper. Chaos đang đắt nghịch (giữ value trong meta thiếu chaos sink); nếu lấy biome mastery option chuyển Exalted → Chaos thì bán Chaos ra ex giá tốt hơn raw exalt.
- **:wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"} từ Vruun**: bán lẻ qua trade2, mỗi cái vài div tới vài chục div tuỳ support type, nguồn lãi đáng giá nhất per-drop.
- **Wombgift** (Lavish/Ornate/Banded/Signet): bán bulk qua Currency Exchange, giá ổn vì là input của Genesis Tree craft.
- **Breach Splinter** stack 300 thành :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"}: strat này không dùng breachstone, đem bán raw splinter bulk.

## Failure Modes

Strat đứng trên ba nhân, mất một nhân là sập margin: rủi ro tập trung ở tablet supply, build floor, và meta shift.

**Tablet rare market biến giá nhanh và đang ở đỉnh.** Rare Breach Tablet `of the Invasion` +3 đang ~8-9 div vì strat này đang là tâm meta farm giữa league. Khi đám farmer khác cùng vào, supply tablet rare có thể nén giá (mỗi tower nhả 1 tablet, sẽ flood market sau 1-2 tuần); ngược lại nếu strat lan rộng thêm, demand kéo giá tablet lên — cả hai hướng đều nén margin. Re-check trade2 link trước mỗi session để xem giá vẫn ở mốc gốc hay đã đổi >30%.

**Build floor cao và death penalty hủy nguyên map.** Build dưới floor thua hai đường cùng lúc: sống sót và kinh tế. Đường kinh tế âm thầm hơn — DPS thiếu thì thanh stabilise không đầy, cụm rare từ tablet không spawn, map vẫn "chạy được" nhưng mỗi map lỗ vài div mà không có cú chết nào báo hiệu (xem [Reward bị gate bởi cái gì](#reward-bị-gate-bởi-cái-gì)). Đường sống sót: 200% Delirium fog cộng 20+ rare cùng spawn là một trong những combo nguy hiểm nhất 0.5, EHP <10k hoặc DPS <10M ép vào tâm vòng breach lúc rare cluster spawn = chết. Chết một lần mất nguyên waystone, nguyên 4 tablet (~3.5 div), nguyên proc Grand Mirror nếu có. HC không chạy được full juice, phải bỏ Delirium fog thành ra strat khác. Map mod `players have less recovery rate`, `no regen`, hoặc `extra fire damage as cold` cộng dồn lên Delirium fog rất dễ one-shot, alc-and-go waystone không được, phải đọc mod trước khi mở map.

**Grand Mirror là nút thắt nhịp độ; không có Grand Mirror thì juice mất 40-50%.** Delirium 200% từ Grand Mirror là multiplier lớn thứ hai sau Partial Translations. Nếu RNG nhả Grand Mirror chậm (mấy map liền không proc dù đã cắm 3 Delirium tablet + full cluster), thì hoặc chạy City map với fog yếu hơn (lãi mỏng lại), hoặc dừng farm chính để hunt Grand Mirror (mất giờ). Atlas layout cũng quan trọng: Grand Mirror chỉ phủ map gần, nên City cluster phải đã reveal sẵn quanh điểm hunt, không thì Grand Mirror nhả ra vùng không có City để phủ vào = mất proc.

**Patch nerf risk cao.** Breach rare-count multiplier (Moment of Risk, tower suffix `of the Invasion`, _Wraeclast Besieged_ +5) đang là dòng raw juice mạnh nhất 0.5. GGG có lịch sử nerf đúng cái đang sinh lời nhất giữa league khi strat lan đủ rộng. Cụ thể đáng watch: Moment of Risk có thể bị hạ từ +2 xuống +1 rare; Partial Translations 20% chance double có thể bị giới hạn thành double effect chỉ một explicit (không phải toàn bộ); hoặc unique tablet roll bị capped +3 thay vì +5. Bất kỳ nerf nào trong nhóm này nhân hệ số juice xuống một nửa.

**Market saturation raw currency.** Lineage Support và Wombgift là output bán được giá ổn, nhưng raw Exalted/Chaos drop dày từ strat juice rare sẽ tự nén tỉ giá ex/div trong league. Divine càng đắt theo ex thì map nhả nhiều ex càng ít giá trị quy ex/div. Đó là rủi ro hệ thống của mọi raw-currency-juice strat 0.5.

## Profit Optimization

Đẩy Partial Translations proc rate gián tiếp bằng cách max số explicit modifier trên tablet (mỗi tablet rare 4-6 mod), vì 20% chance áp lên **từng** explicit modifier. Tablet 6 mod có nhiều cơ hội proc hơn tablet 4 mod. Bulk-roll tablet bằng `Exalted Orb` để đẩy lên 6 mod trước khi divine `of the Invasion`. Khi đã quen nhịp, ưu tiên map City có **Vaal Cities** (`History of the Vaal` notable đáng lấy: Vaal Cities cũng tính là Forest hoặc Water, nhân thêm biome bonus). Hilda **Ancient Inscriptions** đáng so sánh với Jado Partial Translations cho map nhồi 4 loại tablet khác nhau (Breach + Delirium + Ritual + Expedition); tuy nhiên cho strat thuần Breach focus thì Jado vẫn trội hơn vì Partial Translations là multiplier flat. Bán raw bulk qua Currency Exchange (status `securable`) trừ Lineage Support phải list lẻ. Khi market tablet nén (week 2-3), pivot xuống bản budget 3 slot tablet trên map non-City để giữ ROI thay vì cố giữ full juice với margin âm.

## Alternatives & Variations

**Bản budget** bỏ City + Industrial Improvements, chạy 3 slot tablet rare trên map bất kỳ, bỏ luôn unique tablet. Mất 4-rare-juice từ Wraeclast Besieged và 24% multiplier City Biome: Tablet Effect, nhưng vốn nhẹ hơn nhiều (~1.5 div/map cost), hợp người mới đụng strat hoặc HC.

**Bản cho build clear chậm** dành cho build dưới floor DPS (companion, minion AI, DoT chậm nhịp): đừng mua tablet rare đắt — phần reward chúng mua nằm sau mốc stabilise mà build chậm không cán đều được. Chạy breach free-juice: full Breach subtree (point miễn phí), tablet Breach rẻ mod gì cũng được, bỏ hẳn Delirium 200%, và coi stabilise là bonus thay vì mặc định. Lớp quái rìa vẫn drop loot bình thường kể cả khi breach không bao giờ stabilise — đó là phần reward không bị gate. Hai node đáng lấy riêng cho hướng này: **Reality Wound** và _Wraeclast Besieged_ bản thô rẻ (~2-3 div, dùng như van thời gian +120 giây hơn là nguồn +rare — những breach hiếm hoi cán được 100% sẽ có dư dả thời gian dọn cụm). Còn nếu mục tiêu là div/giờ chứ không phải breach, build chậm đổi mechanic lãi hơn hẳn: [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) không có đồng hồ, favour scale theo pack size và yêu cầu thật là đứng nổi phòng đông; [Abyss Ulaman](/farming/0-5-abyss-ulaman-amanamu-farm) tự chọn nhịp được. Breach trả công theo DPS, ritual và abyss trả công theo độ lì.

**Bản đắt với Vruun farm** đi sâu nhánh `Frantic Invasion` + `Study the Chains` + tower suffix `of the Commander`, đổi tablet rare thường sang tablet roll Vruun chance. Vruun nhả Lineage Support đáng giá hơn raw currency per-kill, hợp build delete boss nhanh. Output skew sang Lineage Support thay vì raw currency, market depth khác hẳn.

Cạnh tranh trực tiếp slot tablet với [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting): cùng dùng City map + Industrial Improvements + Jado Partial Translations, cùng 4 slot tablet, output khác hẳn (belt phương sai cao vs raw currency nhịp đều). Chọn một hướng cho mỗi session, hoặc nhồi cả hai cùng map nếu build kéo nổi cả ritual altar lẫn breach 200% fog (rất ít build làm được). Nền sustain map + atlas progression mở các strat City-map kiểu này nằm ở [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain).

## Data & Testing

Cơ chế verify từ poedb live 2026-06-09: **Moment of Risk** verbatim `Unstable Breaches spawn 2 additional Rare Monsters when Stabilised`, **Shape the Chains** option `30% increased Effectiveness of Rare Breach Monsters`, **Breeding Program** `100% increased chance to find selected Wombgifts`, **Industrial Improvements** `An additional Tablet may be used on City Maps`, **City Biome: Tablet Effect** `8% increased Effect of Tablet Explicit Modifiers on your City Maps` (3 rank = 24%), **Recurring Nightmares** option `Delirium Fog spreads to +4 Maps`. **Jado Partial Translations** tier 3 verbatim `20% chance for double effect of Explicit Modifiers on Tablets`, **Jado Unforeseen Threats** tier 2 `5% chance on completing Maps for a nearby Anomaly Map to be revealed`. **Wraeclast Besieged** unique tablet text `Adds an Otherworldy Breach to a Map`, `Breaches in Map have (-10—20)% reduced Pack Size`, `Unstable Breaches in Map take 120 additional seconds to collapse after timer is filled` cộng tower suffix `Unstable Breaches in Map spawn (2—5) additional Rare Monsters when Stabilised`. Tower suffix breach: `of the Invasion` = `Unstable Breaches in Map spawn an additional Rare Monster when Stabilised`, `of the Hand` = `(5—20)% increased Effectiveness of Rare Breach Monsters in Map`, `of the Horde` = `Breaches in Map have (5—15)% increased Pack Size`, `of the Commander` = `Unstable Breaches in Map have (20—50)% increased chance to contain Vruun, Marshal of Xesht`. Patch note 0.5.0 + 0.5.1 đã kiểm: không có dòng nerf nào áp lên breach rare count trong khoảng tuần 2026-06-10.

Mốc throughput (~3-4 div/map base, ~10-12 div/map khi Partial Translations proc, ~15 div/giờ net ở nhịp 10 map/giờ) là **kinh tế quan sát được của strategy tuần 2026-06-09, chưa phải sample cá nhân**. Khi farm thật, log: số map chạy, số map proc Partial Translations (kiểm tra 20% rate có thật không), raw currency/map trung bình, tổng Lineage Support trong 1 giờ, để thay bằng số của chính mình. Giá tablet rare đầu league đổi rất nhanh, re-check trade2 link mỗi 7 ngày, tablet thường 7-14 ngày là giãn giá tới 30-50%.

Khoảng chưa verify: **Partial Translations áp lên unique tablet như thế nào** (tài liệu nói "Explicit Modifiers", unique tablet có roll tower suffix là explicit, nhưng các affix base có tính là explicit không thì poedb không nói rõ). Khi farm log riêng map dùng _Wraeclast Besieged_, đếm số rare cụm tâm vòng trước proc vs sau proc, xác nhận multiplier có áp lên +5 rare của unique không.

## Quick Reference Card

**Setup cost / map:** đắt ~3.5 div (3 tablet rare ~8.5 div × 0.1 + 1 unique ~7 div × 0.1 + waystone) · budget ~1.5 div  
**Profit / map:** raw ~3-4 div base · ~10-12 div khi Partial Translations proc · trung bình ~5 div/map gross (~1.5 div net)  
**Time / map:** ~4-5 phút clear sạch (dài hơn khi proc vì breach đông gấp đôi)  
**Waystone / map:** T15 6-mod City biome (Ezomyte/Faridun/Vaal City satellite quanh citadel); 40+ rarity + 15+ effectiveness, tổng ≥60%  
**Tablets:** 3× Breach Tablet rare `of the Invasion` +3 (divined) + 1× Wraeclast Besieged +5 rare (divined)  
**Atlas key nodes:** Moment of Risk · Shape the Chains (option Effectiveness) · Breeding Program · Industrial Improvements (slot 4 City) · City Biome: Tablet Effect 3 rank · Grand Mirror Chance full + Recurring Nightmares (option +4 spread) · cluster Rare Monster · biome City + desert/grass/forest mastery  
**Masters:** Jado → Partial Translations (tier 3) + Unforeseen Threats (tier 2), bắt buộc cho strat  
**Reward gate:** loot chỉ từ lớp rìa lúc vòng lan + cụm rare lúc stabilise; thanh 100% là kill-rate thuần (+10s Reality Wound / +120s Besieged chỉ tính SAU khi thanh đầy); dưới DPS floor = mất lớp stabilise = lỗ ròng  
**Execution:** edge breach (đừng lao tâm), giết lớp rìa trước (chỉ lớp này drop loot), giữ kill liên tục lúc vòng lan (loot nhặt sau), rồi tâm sau cho rare cluster; bỏ qua quái ngoài breach  
**Grand Mirror hunt:** 3 Delirium tablet rẻ trên map bất kỳ trong lúc tìm City, ~15-20% chance proc/map, phủ fog 200% lên 4 City reveal sẵn

## Changelog

### 2026-06-10
- Thêm section "Reward bị gate bởi cái gì": mô hình hai lớp quái (rìa lúc lan / cụm stabilise), thanh 100% là kill-rate thuần (+time mods chỉ tính sau khi đầy), hệ quả cost-trả-trước vs reward-theo-kill-rate. Build Requirements reframe thành ngưỡng kinh tế; Gameplay thêm luật giữ kill liên tục; thêm "Bản cho build clear chậm" vào Alternatives.
- Initial draft. Cơ chế verify từ poedb live 2026-06-09 (Atlas_passive_skill, Breach, Delirium, Atlas_Masters, Jados_Spycraft, Precursor_Towers). Mốc giá tablet quan sát thị trường tuần 2026-06-09, throughput chưa phải sample cá nhân, log khi farm thật. Status active; cần re-fetch giá tablet sau 7 ngày, tablet `of the Invasion` market rất biến.

## Relationships

- **related_guides** [Breach và hệ craft Genesis Tree](/guides/0-5-breach-genesis-tree): cơ chế breach gốc và Genesis Tree, nguồn của Wombgift output phụ trong strat này.
- **related_mechanics** [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree): vị trí cluster Breach/Delirium/City + ba master (Jado/Hilda/Doryani).
- **competes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting): cùng dùng City map + Industrial Improvements + Jado Partial Translations + 4 slot tablet, output khác (belt phương sai cao vs raw currency nhịp đều); chọn một hướng cho mỗi session.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain): nền sustain map + atlas progression cho mọi City-map juice strat.
- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack): ví dụ build endgame đủ DPS + EHP đứng nổi 200% Delirium fog chồng 20+ rare cùng spawn.
