---
template: templates/farming-template.md
document_type: farming-strategy
title: Săn Monkey Companion qua Ritual
status: draft
created: '2026-06-15'
updated: '2026-06-23'
strategy_tier: B
investment_tier: Variable
league: '0.5'
patch: 0.5.2
league_phase: Mid
confidence_level: Medium
---

# Săn Monkey Companion qua Ritual

Không phải farm kiếm tiền — output là một con carry account-bound giữ cho build, không bán được. Vòng săn tiêu currency để fish :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"} mang đúng bộ rare modifier, đỉnh là **Extra Crits**. Cơ chế tame và retention modifier sống ở [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt); doc này lo phần kinh tế: một con carry tốt tốn bao nhiêu div và cần bao nhiêu volume để fish nổi. Tier B, investment Variable: bản nhanh 1 Head + 3 tablet (~1.5 div/map), bản full ritual amortize Head qua chuỗi 5 map.

## Strategy Overview

Vòng săn nhân số con monkey mỗi key tốn bằng ba lớp. **Rite of the Nameless** là lớp quan trọng nhất: một :wiki-link{url="https://www.poe2wiki.net/wiki/The_Head_of_the_King"} mở chuỗi 5 map chung ritual liên tục, boss map đầu tái xuất ở ritual cuối mỗi map sau — đặt :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"} làm map đầu thì Zekoa spawn lại nhiều lần, throughput nhảy từ 1 con/map lên 5-8 con. **Số mod mỗi con** là lớp hai: ba slot tablet (Cruel Hegemony + hai "of Contest") cho ba mod thêm, slot City thứ tư qua **Industrial Improvements** cho bốn — mỗi mod thêm là một vé fish Extra Crits. **Volume thô** là lớp ba: "just Extra Crits" cỡ 1/15-1/30 con, 3× mod tốt 1/100-1/300, nên cần ~100 con/ngày mới khả thi — tốc clear là biến kinh tế lớn nhất.

Sau 0.5.2, node Jado **Partial Translations** đổi từ "20% chance double effect" sang "0-40% increased effect" — không còn nhân *số* mod, nên chiến lược xoay sang volume thay vì nhồi mod per-con.

## Setup

### Atlas Passive Tree

Ba cụm cần thiết. **Ritual** quanh hub **Caer Tarth** phía tây điểm start atlas để mở Rite of the Nameless; lấy node "+1 map" kéo chuỗi lên 6. **Industrial Improvements** ("An additional Tablet may be used on City Maps") mở slot tablet thứ tư — không có nó thì trần ba mod. **Doryani's Science** cho node **Remnants of Greatness** (map boss 20% chance guard Precursor Terraformer) để ép biome Forest/Swamp cho nhiều Riverside/Rupture hơn.

Thêm node tăng pack size/rare density trên biome Forest/Swamp và generic atlas rarity nếu còn point.

### Masters of the Atlas

Master swap tự do trước mỗi map. **Doryani** đáng nhất sau 0.5.2 qua **Remnants of Greatness** để terraform cụm map sang Forest/Swamp. Partial Translations của Jado chỉ còn tăng *effect* tablet, không tăng số mod — không còn đáng dùng cho hướng này. **Hilda** đáng ngó nếu muốn thêm rare: **Mighty Prey** (25% chance nâng map boss thành Powerful Map Boss) và **Breeding Season** (thêm rare + rare-có-modifier) cho nhiều mục tiêu hơn mỗi map.

### Tablets & Map Device

Tablet cắm thẳng vào :wiki-link{url="https://www.poe2wiki.net/wiki/Map_Device"} cùng waystone. Số slot do số mod waystone quyết định: 6-mod mở cả ba slot; slot thứ tư chỉ mở trên map biome City/Citadel khi đã allocate Industrial Improvements.

Bộ ba slot chuẩn:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} (unique Overseer tablet) — cho map boss thêm một modifier và empower thành Powerful Map Boss. Chỉ 5 uses, kiểm khi mua — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Cruel%20Hegemony%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D).
- **Hai tablet "of Contest"** ("Unique Monsters in your Maps have 1 additional Rare Modifier") — mỗi cái cộng một rare mod. Mua off-peak (NA/EU ngủ) rẻ 20-30 ex — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Overseer%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_3371085671%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D).

Slot City thứ tư cho thêm một "of Contest", đẩy lên bốn mod. Tránh bản "4 Vaal Temple tablet" guarantee bốn mod — ~25 div/tablet, ~1/8 map ra Quadrilla Sergeant, không đáng.

### Waystone & Map Choice

Hai cách roll waystone đánh đổi số mod và số revive:

- **Waystone 6-mod**: ba slot tablet, 0 revive. Tame ngay khi gặp boss; chết hoặc lỡ giết là mất nguyên stack tablet. Cho người quen tay.
- **Waystone 4-mod**: hai slot, 2 revive — soi mod Zekoa, xấu thì để boss giết mình, respawn ngoài boss room là một lần roll mới. An toàn hơn, người mới nên chạy.

Tier map không đổi base stat con tame; chạy tier thấp nhất còn ra đúng base.

### Build Requirements

Ngưỡng thật: **clear nhanh + đứng nổi boss room đã empower**. Chết 6-mod one-shot mất nguyên stack tablet. Cần **spirit headroom** để summon con carry vừa bắt — tame được con 4-mod hoàn hảo mà không đủ spirit summon là phí cả vòng. League-start không đụng được: cần atlas progression sâu cộng nguồn The Head of the King.

## Gameplay

Roll waystone, cắm Cruel Hegemony + hai/ba "of Contest", mở Rite of the Nameless với Riverside/Rupture làm map đầu. Mỗi lần Zekoa tái xuất ở ritual: thấy Extra Crits thì tắt minion, wisp rồi giết khi còn wisps; không thấy thì để lượt trôi (4-mod) hoặc tame rồi disenchant sau (6-mod). Con xấu disenchant gem Tame Beast ở vendor — lấy lại con trắng giữ nguyên level/quality/socket, tái dùng. Giữ một Tame Beast rẻ làm standby để soi mod, chỉ dồn 6-link xịn sau khi trúng bộ đáng giữ.

Trước chuỗi Rite, terraform: chạy đến map boss có Precursor Terraformer, kích hoạt đổi cụm sang Forest/Swamp để gom nhiều Riverside/Rupture liền kề.

## Loot Breakdown & Economic Analysis

Output là carry account-bound không bán được — mô hình là **cost mỗi con carry đạt target**, không phải profit/giờ.

Throughput field-observed (Mattjestic + nhóm cày, 2026-06-14):

- Bản full ritual: ~3-4 div tablet / 10 map → ~8-15 con raw → ~0.25-0.5 div/con raw.
- Bản monkey-only (1 Head + 3 tablet): ~1.5 div/map, 3-5 con/map → ~0.3-0.5 div/con raw.

Drop-rate field-estimate:

- Just Extra Crits: **1/15 – 1/30** con.
- Extra Crits + một mod tốt: **1/30 – 1/50** con.
- Ba mod tốt: **1/100 – 1/300** con.

Ráp lại (~0.3-0.5 div/con raw): "just Extra Crits" tốn ~5-15 div mapping; 3×-good là 30-150 div, cần ~100 con/ngày. Tốc clear kéo cost xuống mạnh hơn số mod mỗi map khi đích chỉ là "just Extra Crits".

Bộ mod ưu tiên từ cao xuống:

- **Extra Crits** ("300% increased Critical Hit Chance"): ưu tiên tuyệt đối. Trên Alpha Primate (~25% base crit) một mod là cap 100%; trên Zekoa (~5% base) cần thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} mới đạt ~60%.
- **Extra Damage** (Chaos / Lightning / Cold / Fire), **Enrage**, **Hasted**, **T1 aura**: bậc hai quanh Extra Crits.
- **Defensive** (evasion, barrier): lấp nếu con carry hay chết.

Mua: Cruel Hegemony (kiểm 5 uses), "of Contest" (lọc multi-use, tránh 1-use), The Head of the King **không mua được trên trade** (search trả Unknown, poe2scout không list) — farm từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_King_in_the_Mists"}. Tablet mua bulk status `securable`. Giá tablet biến động nhanh; snapshot poe2scout 2026-06-10 (~130 ex/div), field quote 2026-06-14 (~180 ex/div) — re-fetch trước session.

## Failure Modes

- **Spirit budget bóp chết con carry vừa bắt.** Reservation scale theo modifier-count. Tính spirit headroom trước khi đi fish con nhiều mod.
- **6-mod one-shot mất nguyên stack tablet.** 0 revive: chết hoặc lỡ giết Zekoa là mất Cruel Hegemony (1 use) lẫn hai-ba "of Contest". Người chưa quen nên chạy 4-mod.
- **The Head of the King là nút thắt nhịp độ, farm-only.** Mỗi Rite nuốt một Head; không sustain được thì tụt về monkey-only map lẻ, mất lớp nhân số con.
- **Variance ăn cả ví ở bộ GG.** 3×-good là 1/100-1/300; có thể cày 150+ con trắng tay. Build clear chậm (20-30 con/ngày) thực tế không chase nổi bộ 3× — dừng ở "just Extra Crits".
- **Patch risk.** Partial Translations đã bị nerf giữa 0.5.2; "of Contest", slot City, ritual revival đều có thể là mục tiêu kế tiếp nếu route viral.

## Version History

- **0.5.2** — Partial Translations redesign: "20% chance double effect" → "0-40% increased effect", không còn nhân số mod. Chiến lược xoay sang volume thuần.
- **2026-06-15** — Initial draft. Seed từ guide Mattjestic "How to Find 3-4 Mods Monkey After 0.5.2 Nerf" (mobalytics, 2026-06-14). Cơ chế verify từ patch note 0.5.0/0.5.2 + poedb/wiki live. Drop-rate + throughput + cost là field-estimate.

## Relationships

- **related_guides** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — cơ chế tame, retention modifier, chuỗi multiplier; doc farming này lo phần kinh tế.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless) — cơ chế ritual đầy đủ mà lớp revival nhân số con chạy trên đó.
- **competes_with** [Belt Hunting qua Ritual](/farming/0-5-ritual-belt-hunting) — cùng dùng The Head of the King + slot tablet + Map Device, output belt thay vì carry companion.
- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build tiêu thụ con carry làm nguồn damage chính.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — league 0.5 mở Spirit Walker + Tame Beast + Endgame rewrite.
