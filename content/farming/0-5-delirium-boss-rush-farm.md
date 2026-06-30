---
template: templates/farming-template.md
document_type: farming-strategy
title: Delirium Boss Rush Splinter Farming
status: draft
created: '2026-06-18'
updated: '2026-06-23'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Delirium Boss Rush Splinter Farming

Rush thẳng boss mỗi map, để dành :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium"} bật ở cuối map rồi gặt :wiki-link{url="https://www.poe2wiki.net/wiki/Simulacrum_Splinter"}. Tier A, investment Low — vốn chỉ 3 tablet Delirium rẻ, sàn income là splinter thanh khoản dày nhất chợ. Cửa vào tốt nhất cho build chưa đủ mạnh cày 200% Delirium; tính đến 2026-06-19, build zoom 1 map/phút ăn ~12-18 div/giờ.

## Strategy Overview

Delirium 0.5 trả reward theo các mốc trên thanh tiến trình, không rải đều map. Mẹo cho build yếu: bật delirium mirror ở **cuối** map thay vì đầu — thanh đầy lúc mình đứng ở checkpoint cuối thì toàn bộ reward các mốc spawn ngay đó, khỏi clear cả map dưới sương.

Tiền về bốn đường độc lập: **Simulacrum Splinter** (sàn, ~10-60 splinter mỗi map, xả lúc nào cũng được), raw currency từ rare trên đường rush, **Liquid Emotion** cao cấp từ đám unique boss cuối map (oil vài div mỗi giọt), và Grand Mirror gieo sẵn vào City cho farm juiced về sau. Mọi map giống hệt nhau nên build chậm vẫn chạy được, chỉ kém số map/giờ.

## Setup

### Atlas Passive Tree

**Delirium subtree lấy hết** — đây là thứ duy nhất gate income splinter, engine fog viết kín ở [Delirium và Trial of Madness](/guides/0-5-delirium-trial-of-madness). Trong cụm, node `5% chance Grand Mirror appear on nearby map` đáng để ý nhất ngoài splinter vì gieo mirror cho đường income thứ tư. Hai notable rework ở 0.5.3:

- **You can't just wake up from this one.** — pick **Escalating Threats**: phần "extra Modifier vào area" áp lên cả vùng fog Grand Mirror map thường, không chỉ Simulacrum (mình không chạy Simulacrum nên các pick còn lại đều dead).
- **Are you sure you want to do that?** — đã bỏ cú tablet-double-effect cũ, giờ cho "Areas with Grand Mirrors also have a Delirium Mirror". Vẫn lấy vì cú extra mirror làm fog dày hơn ngay tại map, nhưng đừng kỳ vọng nhân đôi tablet.

Phần cây còn lại chỉ gom generic áp mọi map (rarity, rare monster, magic pack size) cộng hai node vắt value tablet: **chance to not consume tablets** và **+1 maximum modifier on tablet**.

### Masters of the Atlas

Ba master swap tự do trước mỗi map. **Jado** chính, lấy cụm bốn node: **Partial Translations** (0-40% effect explicit modifier trên tablet), **Unforeseen Threats** (5% lộ Anomaly Map gần — loot phụ miễn phí), **Untold Histories** (35% chance Lineage Support), **Unexpected Missions** (corrupt waystone mở thêm map area + 1 mod — alch-and-go nên corrupt sạch waystone trước khi cắm). Thay bằng **Hilda Ancient Inscriptions** (+25% effect mỗi loại tablet ảnh hưởng map) khi muốn tối đa tablet effect thuần, hoặc **Doryani Hidden Patterns** (10% tự mở map liền kề) khi ưu tiên travel về Citadel.

### Tablets & Map Device

3 :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"} Delirium + waystone 6 mod (mở đủ 3 slot). Tablet trắng chạy được; mỗi tablet chỉ cần một mod:

- **`Delirium counters more likely to spawn a unique boss`** — pick chính, ~50-70 ex/cái — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Delirium%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_3962960008%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D). Đám unique boss cuối map là nguồn Liquid Emotion cao cấp (oil) + splinter + currency phụ.
- **`increased stack size of Simulacrum Splinters`** — pick rẻ ~20-30 ex/cái — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Delirium%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_3836551197%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D), thuần sàn splinter, không spawn boss. Lấy khi build chưa hạ nổi đám boss cuối.

### Build Requirements

Rào sàn: fog chỉ bật cuối map nên không cần giết kịp quái delirious, chỉ cần đủ DPS hạ map boss + đám unique boss cuối, và đủ sống để rush qua rare. Build companion clear vừa chạy thoải mái. Profit/giờ = clear speed × movement speed, vì income tính theo map.

## Gameplay

Vào map, delirium mirror spawn ở đầu — **đừng bấm**. Rush tới checkpoint phòng boss, skip quái dọc đường (giết rare nếu tiện). Tới checkpoint boss thì quay ngược về đầu, bấm mirror, đứng chờ thanh fog đầy (~10-15s), rồi teleport về checkpoint cuối — reward các mốc spawn trước mặt. Dọn đám unique boss trước (oil cao cấp), giết map boss, **rồi mới** end delirium counter. Đảo thứ tự này là mất nguyên reward tầng cuối gồm cú splinter to.

## Loot Breakdown & Economic Analysis

Số poe2scout 2026-06-19 (patch-day 0.5.3, re-check trước session dài), 1 div ≈ 191 ex:

- **Splinter** ~2,12 ex/cái, volume ~149k tick — sàn chắc. ~20 splinter/map ≈ 42 ex ≈ **0,22 div/map**, chưa tính map trúng stack 40-60. Bán rời cho nhanh: đóng gói 300 thành Simulacrum chỉ chênh ~3%.
- **Liquid Emotion** cao cấp từ unique boss: Potent Liquid Contempt ~476 ex, Ferocity ~512 ex, Concentrated Isolation ~254 ex. Năm sáu giọt/ngày — chính kênh này đẩy mod unique-boss lên trên stack-size.
- **Raw currency + fragment** từ rare juiced và Citadel rush là phần biến thiên.

Derivation: 0,22 div/map × 60 map/giờ ≈ 13 div/giờ chỉ riêng splinter (build zoom 1 map/phút), lên **12-18 div/giờ** khi cộng raw currency + oil; build 2 phút/map chia đôi. Cost ~1 div/cọc-3-tablet chia 10 charge → gần như bằng không.

## Failure Modes

- **Splinter là commodity, không có moat.** Giá đã xẹp từ 4 ex về 2,12 ex khi cung Simulacrum bắt kịp; volume ~150k tick/ngày nghĩa cả server đang bơm. Re-check giá trước mỗi session.
- **Profit/giờ là rào tốc độ, không phải rào strat.** 12-18 div/giờ giả định build zoom 1 map/phút; build chậm vẫn chạy được nhưng ăn ít hơn nhiều.
- **Bẫy thứ tự counter.** End counter trước khi boss chết = mất reward tầng cuối, một map công cốc.
- **Đám unique boss cuối map là rào sát thương ẩn.** Đánh đau, khuất trong fog; build mỏng dễ chết ở đây dù đoạn rush đã dễ. Quá mỏng thì chạy mod stack-size (không spawn boss), đổi lấy mất kênh oil. Đọc map mod tránh `extra as element` / `less recovery` chồng lên boss.

## Version History

- **0.5.3 (2026-06-19)** — Notable "You can't just wake up from this one." thêm multichoice Simulacrum (pick Escalating Threats). "Are you sure you want to do that?" bỏ tablet-double-effect, thay bằng auto Delirium Mirror ở vùng Grand Mirror. Giá refresh: splinter 2,12 ex (cũ 4,21), Simulacrum 656 ex, Potent Liquid Contempt 476 ex; profit/giờ kéo xuống 12-18 div từ 30-40 div.
- **2026-06-18** — Initial draft. Tablet priority chốt mod more-likely-spawn-unique-boss (nguồn oil + boss loot); stack-size là pick rẻ thuần splinter floor. Jado node set verify verbatim poedb 0.5.0.

## Relationships

- **related** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm) — bản hub-farm cùng chuỗi splinter/emotion, mirror sẵn không tốn tablet.
- **related_mechanics** [Delirium và Trial of Madness](/guides/0-5-delirium-trial-of-madness) — engine fog, reward-theo-độ-sâu, node Grand Mirror.
- **supports** [200% Delirium Breach](/farming/0-5-delirium-breach-density-farm) — boss rush gieo Grand Mirror + nuôi vốn cho farm S-tier.
- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — rival nhóm S khi build đủ mạnh chịu 200% fog.
- **related** [Fragment Supply Farming](/farming/0-5-fragment-supply-farm) — biến thể boss rush nhắm fragment pinnacle.
- **related_guides** [Tier list các chiến lược farm currency](/guides/0-5-farming-strategy-tier-list) — chỗ boss rush đứng so với nhóm S.
