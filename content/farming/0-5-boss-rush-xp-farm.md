---
template: templates/farming-template.md
document_type: farming-strategy
title: Boss Rush Experience Farming
status: draft
created: '2026-07-13'
updated: '2026-07-14'
strategy_tier: Niche
investment_tier: Low
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Boss Rush Experience Farming

## TL;DR

- Yield là XP, không phải currency — đo bằng multiplier chồng, không phải div/giờ. Cần tiền thì chạy farm khác.
- Chồng ba tablet Elevated (`10 to 20% increased Experience gain in Map`, tới +60%) + Brutal Lessons (+50% XP mỗi map boss) lên nền mapping.
- Ở POE2 chỉ cần giết map boss là map xong — bỏ đuôi map XP thấp, ăn nhiều boss mỗi giờ.
- Anomaly map là overlay jackpot: Garukhan ~600 div / Rakiata ~142 div (2026-07-13). Coi là thưởng phụ, không phải thu nhập.
- Rủi ro số một là XP-loss-on-death: chết mất 10% thanh level. Trên anomaly map hạ mod waystone để giữ nhiều portal.

Boss rush để gặt experience nhanh nhất đoạn Lv95→100. Tier Niche, investment Low — vốn gần như bằng không (tablet rẻ, ride trên map mình vốn đã chạy). Hợp character đã lên endgame muốn cày level mà vẫn để cửa jackpot.

## Tablet roll gì

Ba :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"} mod Elevated, waystone 6 mod để mở đủ ba slot. Tablet trắng chạy được, chỉ cần một mod:

- **`10 to 20% increased Experience gain in Map`** (affix Elevated) — mod XP trực tiếp, ba cái xếp lên nhau tới +60% XP-in-map khi roll cao.

Không cần unique tablet cho XP. Vào anomaly boss map mới swap Visions of Paradise theo doc jackpot.

## Atlas passive spec gì

- **Brutal Lessons** lấy trước hết — Map Bosses grant 50% increased Experience; vì strat giết boss mỗi map nên là node XP đáng nhất cây.
- Phần còn lại gom generic đẩy nền: node tăng effect tablet (nhân ba tablet Elevated), node tăng effect waystone, cụm rarity/pack-size để dày quái.
- Master để Jado nếu muốn overlay jackpot (xem doc anomaly); XP thuần thì master nào cũng được.

## Waystone roll gì

- Tier cao nhất build gánh nổi — monster level cao đẩy XP mỗi kill; T6+ là điều kiện anomaly boss xuất hiện.
- Ưu tiên layout mở, ít ngóc ngách, pack dày cho đỡ tốn thời gian tìm boss.
- Portal scale ngược số mod: 0-1 mod cho 6 portal, mỗi mod thêm trừ một, tới 6 mod chỉ còn 1 portal. Map thường juice 6 mod thoải mái; map boss chết người thì hạ số mod để giữ nhiều portal.

## Master chọn ai

- **Jado** mở overlay jackpot: Untold Histories 35% chance Lineage Support, Unforeseen Threats lộ anomaly free. Lever này nuôi phần thưởng phụ, không đẩy XP.

## Chạy map thường

- Setup: ba tablet Elevated, waystone tier cao 6 mod (layout mở), Brutal Lessons + generic đẩy nền. Rào build: đủ sống để không feed — chết mất 10% thanh level nên build phải chịu được đoạn rush.
- Vào map, chạy thẳng checkpoint phòng boss, skip pack không nằm trên đường (giết cái tiện tay để nuôi XP và rare currency).
- Giết map boss là map xong — nhặt drop rồi qua map kế.
- Không quay lại dọn đuôi map trừ khi map đó có encounter đáng (Breach/Ritual). Nhịp là map mỗi phút.

## Chạy anomaly map

- Đổi cách chơi trên anomaly map (Sacred Reservoir / Jade Isles): đây là cú jackpot một lần và boss Deadly đánh đau.
- Chạy waystone **ít mod hơn** để giữ nhiều portal — một cú chết trên map 6-mod-1-portal là brick nguyên map: mất boss, mất vé Garukhan, cộng 10% XP.
- Con chase là :wiki-link{url="https://www.poe2wiki.net/wiki/Garukhan%27s_Resolve"} ~600 div và :wiki-link{url="https://www.poe2wiki.net/wiki/Rakiata%27s_Flow"} ~142 div (poe2scout 2026-07-13, 1 div ≈ 611 ex). Cơ chế gem, cách mở anomaly, mẹo Visions of Paradise chạy map hai lần ở [Anomaly Map Lineage Support Farming](/farming/0-5-anomaly-lineage-support-farm) — ở đây chỉ là thưởng phụ của cùng cú boss rush.

## Kinh tế

Yield chính là XP nên đo bằng multiplier chồng, không phải div/giờ. Nền một map juiced: ba tablet Elevated tới +60% XP-in-map (3×20% roll cao), Brutal Lessons +50% trên mỗi map boss, cộng monster level từ waystone tier — cả ba xếp lên nhau làm mỗi map boss-rush ăn XP bội phần so với full-clear map trắng. Số map mỗi giờ (build zoom ~1 map/phút) nhân vào là đường lên level nhanh nhất đoạn 95+.

Currency chỉ là phần phụ: raw currency và rare trên đường rush là biến thiên nhỏ, còn cú lớn là overlay jackpot Garukhan ~600 div / Rakiata ~142 div quy qua :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} (poe2scout 2026-07-13). EV và variance để ở [doc anomaly](/farming/0-5-anomaly-lineage-support-farm), đừng tính vào thu nhập đều.

## Failure Modes

Rủi ro số một là chính cơ chế XP-loss: chết trong map mất 10% thanh level (area 65+), pinnacle boss thì miễn. Ở Lv97 mỗi 10% là hàng chục phút cày, nên strat thưởng tốc độ nhưng phạt nặng cái chết — ngược hẳn farm currency nơi chết chỉ mất một map.

- **Boss chết người brick cả map lẫn jackpot.** Zahmir và Manoki đánh đau; chết hết portal là mất boss, mất vé Garukhan, cộng 10% XP một lượt. Hạ mod waystone trên map đó để có đệm portal; đừng juice tối đa map mình không chắc sống.
- **Jackpot là variance, không phải thu nhập.** Con chase rớt theo tỉ lệ thấp chưa công bố; nhiều session không ra gì. XP là lý do chạy, gem là bonus — kỳ vọng ngược lại là tự bào mòn.
- **XP rush thua farm currency về div/giờ.** Cần tiền chứ không phải level thì [Delirium boss rush](/farming/0-5-delirium-boss-rush-farm) cùng nhịp boss rush nhưng trả splinter đều. Chỉ chạy XP rush khi thực sự cần level.
- **Access anomaly cạn.** Điểm anomaly hiếm; hết Temporal Sandstorm / Eye of the Storm trong region là phải đổi region. XP rush vẫn chạy trên map thường, chỉ mất overlay jackpot.

## Version History

- **2026-07-13** — Initial draft. Cơ chế verify wiki mirror 0.5.3: Elevated tablet `10 to 20% increased Experience gain in Map`, Brutal Lessons `Map Bosses grant 50% increased Experience`, XP-loss-on-death 10% thanh level (area 65+, pinnacle miễn), portal scale theo số mod waystone (6→1 portal). Giá jackpot poe2scout 2026-07-13 (1 div ≈ 611 ex): Garukhan ~600 div, Rakiata ~142 div. Tỉ lệ rớt chase gem chưa verify — để ở doc anomaly.

## Relationships

- **related** [Anomaly Map Lineage Support Farming](/farming/0-5-anomaly-lineage-support-farm) — overlay jackpot Garukhan/Rakiata của cùng cú boss rush; cơ chế gem + mẹo Visions of Paradise nằm ở đó.
- **competes_with** [Delirium Boss Rush Splinter Farming](/farming/0-5-delirium-boss-rush-farm) — cùng nhịp boss rush nhưng yield currency đều thay vì XP.
- **related_guides** [Endgame mapping sustain](/guides/0-5-endgame-mapping-sustain) — nền sustain map để chạy rush lâu dài.
- **related_guides** [Atlas passive tree](/guides/0-5-atlas-passive-tree) — chi tiết cây, node Brutal Lessons và effect tablet/waystone.
</content>
