---
template: templates/farming-template.md
document_type: farming-strategy
title: Farm Fracturing Orb bằng Summoning Circle
status: active
created: '2026-07-11'
updated: '2026-07-14'
strategy_tier: Experimental
investment_tier: Variable
league: '0.5'
patch: '0.5.4'
league_phase: Mid
confidence_level: Medium
---

# Farm Fracturing Orb bằng Summoning Circle

## TL;DR

- Farm Fracturing Orb bằng boss của Summoning Circle trong Cleansed map: mỗi Circle boss có additional modifier là 5% chance rớt orb.
- Suffix `of Contest` (*Unique Monsters have 1 additional Rare Modifier*) đưa mọi Circle boss về đúng roll 5%, bỏ lớp RNG 25% của `From Distances Untold`.
- Baseline bốn boss + giá 2026-07-11 (~13-14,5 div/orb) ra gross EV ~2,6-2,9 div/map trước chi phí.
- Xếp hạng Experimental: cơ chế boss drop đã xác nhận, net profit chưa có batch đủ lớn để trừ giá tablet.
- Chỉ chạy khi đã hoàn thành Burning Monolith và giết boss T11+ nhanh, chắc tay.
- Non-Cleansed area không còn là route hợp lệ sau 0.5.4b; Delirium là bonus, không phải điều kiện rớt orb.

Farm :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"} bằng boss của :wiki-link{url="https://www.poe2wiki.net/wiki/Summoning_Circle"} trong :wiki-link{url="https://www.poe2wiki.net/wiki/Cleansed_map"}. Experimental, investment Variable — baseline gross EV ~2,6-2,9 div/map (giá 2026-07-11).

## Loot scale theo cái gì

- **Atlas Passive Tree:** `From Distances Untold` bật boss drop; `Hidden Scars` thêm orb từ Cleansed monsters; `Overlord's Domain` và `Overheard Summons` tăng số boss.
- **Roll tablet:** cả ba tablet cần prefix `Map contains an additional Summoning Circle`; toàn bộ set chỉ cần một suffix `Unique Monsters have 1 additional Rare Modifier`.
- **Roll waystone:** T11 là ngưỡng area level 75; sáu explicit modifier mở đủ ba tablet slot. Waystone tier hay rarity không đổi boss drop chance.
- **Masters of the Atlas:** Hilda `Claimed Territories` có 45% chance nhân đôi content do `Overlord's Domain` thêm. Doryani `Volatile Connection` dùng ở map thường để tạo thêm nguồn Cleansed/Corrupted area.

## Cơ chế boss drop

- [`From Distances Untold`](https://poe2db.tw/us/From_Distances_Untold) có hai dòng riêng: Circle boss trong Cleansed area có 25% chance nhận một additional Monster Modifier; boss đã có additional modifier có 5% chance rớt Fracturing Orb. Chỉ dựa vào roll 25% thì tỷ lệ danh nghĩa là **1,25% mỗi boss**.
- Suffix `of Contest` bỏ lớp RNG đầu tiên bằng dòng `Unique Monsters have 1 additional Rare Modifier`, đưa mọi Circle boss về đúng roll 5%.
- Mỗi nguồn `Map contains an additional Summoning Circle` không tạo thêm công trình riêng: map giữ một Circle và rải Reactivation Runes; Circle gốc cộng từng rune là các lượt gọi boss. `Overheard Summons` cho mỗi activation 10% chance gọi thêm một boss.
- `Overseer Tablet` và `Irradiated Tablet` được tính như slot chưa lấp khi game roll random encounter, nên Jado `Long Days`, `The Chosen Path` và các node tăng chance spawn Circle vẫn có thể cho thêm lượt — nhưng chỉ là upside RNG. Baseline bốn boss chỉ tính ba prefix Circle + một Circle từ `Overlord's Domain`.
- Patch [0.5.4b](https://www.pathofexile.com/forum/view-thread/3980516) đã sửa bug khiến `From Distances Untold` từng hoạt động ngoài Cleansed area. Ritual hoặc map thường **ở ngoài Cleansed area** không còn là route hợp lệ.

## Atlas passive spec gì

- Lấy **From Distances Untold** trước; thiếu node này thì Circle boss không có nguồn Fracturing Orb.
- **Hidden Scars** để Cleansed monsters trong pack riêng của mechanic có chance rớt orb. Hai node độc lập, cùng yêu cầu area level 75+ và hoàn thành Burning Monolith.
- **Overlord's Domain: Summoning Circle** để area có Powerful Map Boss nhận thêm một Circle.
- **Overheard Summons** cho 10% thêm boss.
- Ở **Blood on the Stones**, chọn `Summoning Circle Bosses are Powerful` nếu build xử lý được; trạng thái Powerful tăng độ khó và reward chung nhưng không thay suffix `of Contest`.

## Master chọn ai

- **Hilda → Claimed Territories** cho map farm — tooltip 45% chance `Overlord's Domain` thêm gấp đôi content; chưa có sample A/B đủ lớn để nâng thành profit claim.
- **Doryani → Volatile Connection** ở map thường khi hết Cleansed area, rồi đổi lại Hilda trước khi mở map farm.

## Tablet roll gì

Loadout ba slot:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Overseer_Precursor_Tablet"} có `Map contains an additional Summoning Circle`. Overseer làm **map boss gốc** thành Powerful để kích `Overlord's Domain`; nó không làm Circle boss thành Powerful.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Delirium_Tablet"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Irradiated_Tablet"} có `Map contains an additional Summoning Circle`.
- Tablet 10-use rẻ nhất có `Map contains an additional Summoning Circle`.
- Ít nhất một trong ba phải có thêm `Unique Monsters have 1 additional Rare Modifier`. Prefix Circle và suffix unique-mod có thể nằm chung trên một magic tablet. Kiểm tra đúng chữ **contains an additional**, không mua nhầm dòng **increased chance to contain**; kiểm tra cả số uses trước khi trả tiền.

## Waystone roll gì

- :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} T11 trở lên, roll đủ sáu explicit modifier để mở ba slot. T15 cho loot nền tốt hơn nhưng không tăng boss drop chance.
- Waystone sáu mod không có revive, nên bỏ các mod boss mà build chưa xử lý ổn.
- Build chỉ cần đạt tiêu chuẩn thực dụng: giết liên tiếp nhiều unique boss trong map sáu mod mà không chết và không phải chờ cooldown dài. Delirium làm hỏng nhịp boss thì thay Delirium Tablet bằng base dễ chạy hơn.

## Chạy map

1. Hoàn thành :wiki-link{url="https://www.poe2wiki.net/wiki/Corrupted_Nexus"} để đổi cụm map quanh nó thành Cleansed; chỉ mở map T11+.
2. Clear tới Circle, ghi lại vị trí và tìm các Reactivation Runes. Làm Circle gốc trước, sau đó kích từng rune và quay lại Circle để gọi lượt kế tiếp.
3. Giết hết boss được gọi. Đếm **boss thực sự có additional modifier**, không lấy số Circle trên tablet làm số kill.
4. Có `Hidden Scars` thì clear các pack Cleansed trên đường. Monster thường không mang trạng thái Cleansed không thuộc nguồn orb này.
5. Giết map boss, nhặt loot và rời map. Ghi boss kill, orb, thời gian và chi phí theo batch; sample vài map không đủ đánh giá route có variance cao.

**Thêm Delirium khi build còn dư sức:** Delirium là bonus, không phải điều kiện rớt orb. Node **You can't scare me anymore!** cho unique Humanoid, Beast hoặc Construct trong fog 5% chance rớt Potent Emotion tương ứng; Delirium Tablet vẫn roll được prefix Circle nên không mất activation. Né được Mirror ở đầu map thì scout Circle và rune trước, đặt portal rồi mới bật fog. Patch [0.5.3](https://www.pathofexile.com/forum/view-thread/3968601) cho fog một lần pause khi bắt đầu Summoning Circle và một lần nữa khi boss chết; patch note không nói fog đứng yên suốt trận. Bỏ Delirium ngay khi degen hoặc độ cứng của boss làm giảm số map/giờ.

## Kinh tế

Giá 24 giờ ngày **2026-07-11** nằm quanh **13-14,5 div/Fracturing Orb** ([PoE2DB](https://poe2db.tw/us/Fracturing_Orb), [market snapshot](https://www.exiledtools.com/currency)). Với bốn boss và một suffix `of Contest` đang hoạt động:

```text
baseline_circle_ev = eligible_bosses × 5% × orb_price
                   = 4 × 0,05 × 13-14,5 div
                   = 2,6-2,9 div/map
```

- Đây là **baseline gross EV**, không phải profit. Chưa tính Fracturing Orb từ `Hidden Scars`, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Immured_Fury"}, Potent Emotion, Hilda hoặc `Overheard Summons`; cũng chưa trừ tablet, waystone và thời gian tạo Cleansed area.
- Cost mỗi map = `tổng giá tablet / uses còn lại + waystone + currency roll`.
- Bốn roll 5% chỉ có **18,5%** chance thấy ít nhất một orb trong một map. Kỳ vọng dài hạn là một orb mỗi 20 boss đủ điều kiện; 60 boss không rớt vẫn có xác suất khoảng **4,6%**, chưa đủ chứng minh shadow nerf.

## Failure Modes

- **Sai area hoặc thiếu node:** non-Cleansed, T10 trở xuống hay thiếu `From Distances Untold` đều làm boss mất nguồn Fracturing Orb. Bug non-Cleansed đã bị sửa ở 0.5.4b.
- **Mua sai tablet:** `increased chance to contain a Summoning Circle` không phải `contains an additional Summoning Circle`. Tablet một use có thể rẻ trên listing nhưng đắt theo cost/map.
- **Thiếu `of Contest`:** nếu chỉ trông vào 25% của `From Distances Untold`, phần lớn boss không đủ điều kiện. Stack hai hoặc ba `of Contest` không tăng boss drop chance; chỉ cân nhắc để lấy rarity/quantity chung khi build chịu được boss nhiều modifier hơn.
- **Đọc baseline EV thành profit:** giá orb biến động mạnh, còn chi phí tablet combo và thời gian tìm Cleansed area thay đổi theo atlas. Re-check giá trước mỗi batch.
- **Build chết ở boss:** sáu-mod waystone không có revive. Bỏ Delirium và mod tăng damage trước khi nâng juice chung.

## Version History

- **2026-07-11:** viết lại cho 0.5.4b; sửa fixed 5%, tách `Hidden Scars` khỏi boss drop, ưu tiên Hilda để nhân content từ `Overlord's Domain`, xếp Experimental theo gross EV và chuyển Delirium thành bonus.

## Relationships

- **competes_with** [Abyss Monster Rarity và Fractured Waystone Farm](/farming/0-5-abyss-monster-rarity-fracture-farm) vì cùng dùng nguồn Cleansed area nhưng scale loot theo hướng khác.
- **requires** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) để tạo Cleansed area và duy trì Waystone T11+.
- **related_guides** [Delirium và Trial of Madness](/guides/0-5-delirium-trial-of-madness) cho phần Potent Emotion và cách chạy fog.
