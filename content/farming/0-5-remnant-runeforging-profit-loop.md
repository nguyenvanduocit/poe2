---
template: templates/farming-template.md
document_type: farming-strategy
title: Remnant Runeforging Crafting Loop
status: draft
created: '2026-06-10'
updated: '2026-06-23'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Remnant Runeforging Crafting Loop

Mỗi area rải một :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Remnant"} — object có 2-10 slot, khắc Runic Recipe, đánh thắng wave rồi nhận item craft cùng :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium"} từ quái triệu hồi. Tier A, investment Low. Ba dòng tiền độc lập: rune và alloy unlock từ encounter, Perfect/Masterwork Rune thanh khoản đều, và Runeforging flip unique low-level. Patch 0.5.3 buff Runic Modifier reward trên Monster do Runic Inscription tạo ra x2 (vài trường hợp cao hơn), kéo đường cong slot-to-reward dốc gấp đôi pre-patch. Giá neo poe2scout 19/06: Aldur's Legacy ~398 div, Masterwork Rune ~87 ex, Perfect Iron Rune ~179 ex.

## Strategy Overview

Loop này là nền crafting của cả league: phần lớn build cần rune và alloy, nguồn duy nhất là Remnant encounter. Cơ chế đầy đủ (số slot, wave, Runic Ward, bốn tầng unlock Farrow) ở [Return of the Ancients](/guides/return-of-the-ancients); ở đây chỉ quan tâm chỗ nào ra tiền. Dòng rune/alloy đắt nhất nhưng variance cao; Perfect/Masterwork Rune (~87-179 ex, gần 2.000 viên list) trả tiền đều giữa các cú jackpot; Runeforging flip là kênh riêng không tốn atlas point, chồng lên mọi farm khác.

Patch 0.5.3 mở lại một cửa demand quan trọng: :wiki-link{url="https://www.poe2wiki.net/wiki/Masterwork_Rune"} Transcendent Alloy gắn được lên Foci và Wand (cho cùng hiệu ứng như Staff nhưng số thấp hơn), đảo ngược lần gỡ ở 0.5.2. Giá Transcendent Alloy snapshot 19/06 ở vùng đáy ~49 ex — upside rõ nhưng tốc độ phục hồi phụ thuộc bao nhiêu người dùng Foci/Wand quay lại dùng Transcendent.

## Setup

### Đẩy slot và mở đủ tầng craft

Giá trị một Remnant tỉ lệ thuận với số slot: 2 slot ra item thường, 7-8 slot mới chạm tầng rune đắt. Số slot là thuộc tính spawn tự nhiên của Remnant, không ép bằng tablet. Hai cách đẩy: **chạy waystone T15+** để mở trần Remnant cao nhất (số Remnant tối đa trong area scale theo Waystone Tier, đỉnh T15+), và **chạy nhiều map** để gặp nhiều Remnant rồi dồn recipe đắt vào con nhiều slot. Mốc sau patch 0.5.3: 5 slot ra Masterwork Rune ~87 ex, 7-8 slot là tầng Ancient Rune; một con 8-10 slot đáng craft kỹ hơn cả chục con 2-3 slot.

Trước khi loop sinh tiền phải xong chuỗi quest Farrow: Act 1 mở Verisium Runeforging, Act 2 mở 13 Alloy, Act 3 mở Unique Verisium Runeforging, Act 4 mở 13 Ancient Rune. Thiếu Act 4 là thiếu nguyên dòng tiền đắt nhất.

### Build và encounter

Con Remnant full-slot là 8-10 wave quái buff chồng — chỗ chết người nếu build mỏng. Loop không kén clear speed nhưng kén survivability trong encounter dồn. Build chưa đứng vững thì craft con ít slot trước.

## Gameplay

Trong mỗi map, dọn tới Remnant rồi đọc số slot. Con 2-4 slot: khắc recipe rẻ đang dư, nhả nhanh lấy Verisium và rune tầm thường. Con 7+ slot: chọn recipe đắt nhất build gánh nổi wave, đánh sạch, nhặt item craft. Verisium gom thành stack lớn để dành Runeforging flip ở hideout — giá trị nằm ở nâng unique, không phải bán thô.

Phần flip làm ở hideout giữa các phiên: lọc chợ unique base-type dưới level 55 đang rẻ, mua, nâng bằng Verisium, re-list bản đã upgrade. Tách khỏi map nên chồng lên mọi farm khác mà không tốn slot atlas.

## Loot Breakdown & Economic Analysis

Loop định giá theo output bán được — slot-distribution của Remnant và drop-rate từng rune là số GGG không công bố, mọi con per-hour là ước lượng từ giá market chứ chưa phải số đo thực.

Giá poe2scout 19/06 (patch-day, re-check sau vài ngày), 1 Divine ≈ 195 ex:

- **Alloy** — Celestial 2.244 ex (~11.5 div), Runebinder's 51 ex, Runefather's 10 ex, Transcendent 49 ex (vùng đáy, chờ phục hồi sau 0.5.3 mở lại Foci/Wand)
- **Ancient Rune** — :wiki-link{url="https://www.poe2wiki.net/wiki/Aldur's_Legacy"} 77.548 ex (~398 div, thanh khoản mỏng), Astrid's Creativity 3.971 ex (~20.4 div), Cadigan's Epiphany 1.889 ex (~9.7 div)
- **Perfect / Masterwork Rune** — Perfect Iron Rune 179 ex, Masterwork Rune 87 ex; sàn liquid xoay vòng tiền đều
- **Verisium thô** — nhiên liệu Runeforging, không bán; Exceptional Verisium mới đáng list

Derivation một cú craft đắt sau 0.5.3: `EV = m × [P(jackpot) × giá_jackpot + P(alloy/perfect) × giá_tier] + verisium_drop × giá_verisium − cost_recipe − death_risk`, trong đó **m ≈ 2** là Runic Modifier reward multiplier; cost recipe ≈ 0. Biên dưới: con 5 slot ra ~87 ex Masterwork đã trả công. Biên trên: Astrid's ~20.4 div hoặc Aldur's Legacy ~398 div — variance cao, coi như vé số kỳ vọng dương. EV trung bình mỗi high-slot remnant ở 0.5.3 cao xấp xỉ gấp đôi pre-patch.

Runeforging flip: input là unique base dưới level 55 (thường vài ex tới vài chục ex), Verisium tốn không đáng, output theo giá unique đã nâng. Margin phụ thuộc từng món; patch 0.5.3 giảm 20% defence loss trên non-Unique armour cao level (Runic Ward giữ nguyên, item cũ tự update) — margin nhánh armour flip nới rộng tự nhiên.

**Rite of Passage không thuộc loop này.** :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} Golden Charm ~27 div chỉ rớt từ quái bị Azmeri spirit nhập — mechanic riêng, không liên quan Remnant.

## Failure Modes

- **Supply tăng nhanh hơn demand sau buff x2.** Perfect/Masterwork Rune là tầng nén giá nhanh nhất; có thể rớt 30-50% trong vài ngày sau patch khi pool listings dày. Bán nhanh trong cửa sổ patch-day, đừng hold. Tầng jackpot Ancient Rune thì thanh khoản mỏng theo chiều ngược — đắt nhưng khó bán nhanh, đăng giá kiên nhẫn chờ buyer, đừng panic-sell.
- **Build floor.** Con full-slot là 8-10 wave quái buff chồng; chết trước wave cuối mất nguyên reward. Buff reward x2 không đổi điều kiện encounter — chỉ build sống nổi tier cao mới hưởng được lãi cao nhất.
- **Knowledge floor Runeforging.** Flip chỉ lãi nếu thuộc bảng unique nào đáng nâng; Runeforge nhầm món không ai mua = lỗ cơ hội. Patch defence-loss giảm 20% mở thêm cửa base armour cao level, kiến thức cũ cần update.
- **Transcendent Alloy timing.** Hold đầu cơ ở vùng đáy ~49 ex có upside rõ nhưng không guarantee timing — tốc độ phục hồi phụ thuộc adoption Foci/Wand.
- **Variance cao, hợp làm overlay hơn farm chính.** Jackpot là variance cao; chạy ít map thì cả phiên có thể chỉ ra tầng liquid. Loop này hợp chồng lên farm khác hơn là farm độc lập.

## Version History

- **0.5.3** — Runic Modifier reward x2 (vài trường hợp cao hơn), Transcendent Alloy gắn lại Foci/Wand (đảo 0.5.2), Runeforging non-Unique armour cao level mất ít defence hơn 20% (Runic Ward giữ nguyên, item cũ tự update), Remnant max count scale theo Waystone Tier (đỉnh T15+). Tier B→A. Giá 19/06 (Div ≈ 195 ex): Aldur's Legacy ~398 div, Astrid's ~20.4 div, Cadigan's ~9.7 div, Masterwork ~87 ex, Perfect Iron ~179 ex, Transcendent ~49 ex.
- **0.5.0** — Initial. Cơ chế từ patch note 0.5.0. Đính chính: Rite of Passage drop Azmeri-possession, không thuộc loop Remnant.

## Relationships

- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients): cơ chế đầy đủ của Remnant, Verisium Runeforging, Runic Ward và bốn tầng unlock của Farrow.
- **alternative_to** [Ocean Exploring Grand Expedition Farm](/guides/0-5-ocean-exploring): biến thể juiced cùng Verisium Remnant, gated qua rumour Ocean với reward-table đọc trước.
- **supports** [Runic Ward Onslaught Loop](/guides/0-5-runic-ward-onslaught-loop): Verisium farm từ loop nuôi Runeforging gắn Runic Ward cho build defensive.
- **synergizes_with** [Tablet Supply Farming](/farming/0-5-tablet-supply-farm): chạy chồng làm overlay, Remnant nhặt trên đường clear map travel không xung đột atlas point.
