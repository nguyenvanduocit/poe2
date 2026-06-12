---
template: templates/farming-template.md
document_type: farming-strategy
title: Abyss Ulaman và Amanamu Farm
status: active
created: '2026-06-10'
updated: '2026-06-10'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Abyss Ulaman và Amanamu Farm

Chiến lược farm currency lớn của 0.5 cho người không muốn dính phương sai belt: dồn full Abyss subtree trên atlas, chọn faction :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss"} qua keystone **Balance of Power**, rồi đập nhiều rare Abyssal mỗi map. Hai biến thể: **Ulaman** dễ chơi, nguồn lãi là currency chest cộng :wiki-link{url="https://www.poe2wiki.net/wiki/Heart_of_the_Well"} từ Rogue Exile bị abyss nuốt; **Amanamu** khó hơn, đánh đổi đám rare buff effectiveness lên 100% lấy omen đắt. Tier A, investment Low (vài chục ex/map cho 1 abyss tablet + 1 precursor + 1 overseer), chạy được từ T10 trở lên miễn build clear nổi map đông quái.

## Strategy Overview

Abyss thắng ở 0.5 vì ba chuyện gộp lại. Một là pit và crack rải khắp map nhả rare Abyssal — loại rare này cướp modifier của quái thường giết gần pit, có thể nâng cấp lên Lichborn Modifier, và là nguồn drop chính của omen cộng Ancient Bone. Hai là keystone **Balance of Power** trên Abyss subtree khoá faction luôn xuất hiện: chọn Ulaman thì mọi pit trong map của mình thuộc Ulaman, chọn Amanamu thì thuộc Amanamu, không còn random. Điều đó cho phép xếp toàn bộ subtree quanh đúng faction mình chơi. Ba là Rogue Exile dính abyss: với atlas allocate cụm exile, một số exile bị abyss nuốt biến thành Lichborn Rogue Exile, drop Heart of the Well — unique Diamond jewel đang là item slot nhiều nhất trong sample top-XP poe.ninja league 0.5 (49,5% character đeo), nên cầu rất dày.

Cái không ai nói rõ là **phần lớn currency không đến từ omen hay chest, mà từ rare drop nhặt lên rồi craft bán**. Rare Abyssal nhả rất nhiều rare item ở base ngon (amulet, ring, belt, weapon), nhặt đúng base rồi desecrate bằng chính Ancient Bone vừa rớt là một dây chuyền crafting tự nuôi. Raw currency và omen chỉ là tầng nổi.

## Reward bị gate bởi cái gì

Abyss không có đồng hồ — khác hẳn [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm): bên đó reward gate bằng kill-rate (thanh stabilise đếm ngược, DPS thiếu là mất phần tablet đã mua), còn abyss trả thưởng theo **số việc làm xong**, làm chậm bao nhiêu cũng được. Build clear chậm vì thế không mất gì ở đây ngoài map/giờ. Nhưng abyss có bốn gate riêng, mỗi gate cắt một dòng tiền nếu bỏ qua:

**Gate một: pit chỉ trả thưởng khi đóng trọn.** Giết quái thường quanh miệng pit cho fissure đóng dần, pit kích hoạt nhả đám Abyssal, giết hết đám đó pit mới đóng hẳn — và chỉ pit đóng hẳn mới có chance nhả Abyssal Trove (Ancient Bone) cùng chest faction. Đánh nửa chừng rồi bỏ đi là không có gì, kể cả đã giết 90% wave. Với Amanamu còn thêm tầng: dòng `10% increased Effectiveness for each closed Pit, up to 100%` đếm **pit đã đóng**, nên bỏ pit vừa mất trove vừa chậm nấc scale omen.

**Gate hai (Amanamu): vị trí giết quyết định chất drop.** Rare Amanamu giết trong darkness cloud là mất phần omen đỉnh và Lichborn Modifier — phải kéo nó ra ngoài cloud rồi mới giết. Gate này là positioning chứ không phải DPS: build chậm làm được bình thường, build AoE dọn màn hình một nút lại hay phạm nhất. Sau hotfix 6 cloud tự tan nhanh (uptime 50%), cửa sổ thao tác ngắn lại nhưng luật không đổi.

**Gate ba: Heart of the Well đi qua chuỗi exile.** Heart chỉ rớt từ Rogue Exile đã bị abyss nuốt thành Lichborn. Số cú quay mỗi map = số exile xuất hiện × chance bị nuốt — cả hai đều scale bằng atlas (cụm Rogue Exile + Shadow of Undeath 50%), không scale bằng gear hay DPS. Không allocate đủ cụm exile thì chạy bao nhiêu map cũng gần như không thấy Heart.

**Gate bốn: area level và con mắt nhặt đồ.** Abyss omen không drop dưới area level 65; base ilvl 80+ cho dây chuyền craft cần T15. Và vì 60-70% lãi nằm ở rare nhặt lên craft bằng bone, người chạy abyss mà chỉ hốt currency trên sàn là tự cắt phần lớn thu nhập — gate cuối này là kỷ luật loot filter, không phải cơ chế game.

Cost-reward coupling của abyss vì thế ngược hẳn breach: vốn vào map rất nhẹ (~15-40 ex tablet), không có phần reward nào "bay hơi" khi build yếu, chỉ có reward bị bỏ sót khi chơi sai gate. Farm này tha thứ cho build chậm và phạt người chơi ẩu.

## Setup

### Atlas Passive Tree

Vào Abyss subtree (cụm phía dưới-trái cây atlas) và lấy gần như đủ. Tuỳ biến thể, chỉ keystone đổi:

**Ulaman (dễ):**
- **Balance of Power** chọn option **"Abyssal monsters are loyal to Ulaman"** — khoá mọi pit về Ulaman.
- **Strange Aversions** đổi loot pool: Ulaman pit luôn nhả **Currency Chests** (Amanamu cho Armour Chest, Kurgal cho Jewellery Chest, Kulemak cho Weapon Chest — nhưng node này đổi luật, Ulaman thành raw currency). Đây là dòng tiền ổn định nhất của biến thể này.
- **Lord of the Pit** rải Abyss pit khắp area có abyss, tăng số pit/map lên gấp đôi tới gấp ba.
- **Sprawling Rupture** cho abyss spawn 25% increased monster — chính xác cái cần để đẩy rate rare.
- **Vile Treasures** tăng 50% chance tìm Abyssal Eye, Abyss Omen, Abyss Lineage Support. Lineage Support có vài cái đắt nên không bỏ qua được.

**Amanamu (khó hơn, lãi hơn):**
- **Balance of Power** chọn **"Abyssal monsters are loyal to Amanamu"**.
- **Lord of the Pit** vẫn lấy, nhưng **giá trị thật của Amanamu nằm ở dòng node lớn của chính Lord of the Pit**: *"Abyssal Monsters have 10% increased Effectiveness for each closed Pit, up to 100%"*. Tới pit thứ 10 đóng xong, rare Amanamu cộng dồn 100% effectiveness, biến thành sandbag trên T15 sáu mod ba tablet, drop omen đỉnh và Lichborn Modifier dày hơn nhiều.
- **Strange Aversions** không có gì để vắt cho Amanamu vì pool Amanamu là Armour Chest — vẫn có giá nhưng không bằng currency của Ulaman. Lấy hay không tuỳ chỗ point còn dư.
- Còn lại giống Ulaman: Sprawling Rupture + Vile Treasures + Unholy Influence (tăng chance Abyssal/Lichborn modifier).

Cả hai biến thể đều bắt buộc lấy **Shadow of Undeath** trên Abyss subtree: *"50% increased chance of Rogue Exiles being influenced by Abysses"*. Đây là cái khoá vào Heart of the Well, vì exile bị abyss nuốt mới drop Heart. Đồng thời lên atlas chính lấy **toàn bộ cụm Rogue Exile**: notable **Wealthy Exiles** (25% increased Rarity từ exile), **Crowded Streets** (10% chance City Areas thành Rogue Exile Hunting Ground), node "additional Rogue Exile" ở vùng Powerful Map Boss. Càng nhiều exile mỗi map càng nhiều cú quay xúc xắc Heart.

Phần còn lại của atlas dồn vào **natural juice**: increased rare monster, increased magic pack size, increased pack size, increased rarity. Abyss subtree không có nhiều damage multiplier riêng, lãi đến từ số lượng rare bị rồng lửa nuốt vào pit. Lấy thêm **Industrial Improvements** nếu chạy bản đắt City biome 4 tablet. Atlas không respec point thường (chỉ respec notable lớn), nhưng cuối cùng mở hết point nên chọn sai cũng tự sửa được — cách mở hết xem [Mở khoá full atlas point](/guides/0-5-atlas-unlock-walkthrough).

Cẩn thận keystone **Balance of Power** nói chung: tính đến 0.5.1, lấy bất kỳ ba option đầu (Amanamu, Kurgal, Ulaman) sẽ chặn hoàn thành questline Abyss qua workaround nào cũng không qua được; chi tiết cảnh báo trong [Atlas passive tree gồm những gì](/mechanics/atlas/0-5-atlas-passive-tree). Nghịch lý: strategy này **bắt buộc chọn một trong ba option**, nên chấp nhận khoá questline Abyss để đổi lấy faction lock. Nếu muốn vừa farm vừa làm questline, chạy questline trước với atlas chưa allocate keystone, làm xong rồi mới allocate.

### Tablets & Map Device

Setup nền cho bản budget:

- **1 Abyss Tablet** (rare, 10 uses, "Adds Abysses to a Map") cắm thêm 6-10 abyss vào map. Mod rare đáng lấy: "increased number of Abysses", "additional Rare Monsters spawn from Abysses", "increased Rarity of Items dropped". Tablet rare giá vài ex.
- **1 Precursor Tablet** rare bất kỳ cho thêm pack size / rare / rarity — đây là tầng juice chung.
- **1 Overseer Tablet** nếu build delete được boss nhanh, vì map boss của Powerful Map Boss path nhả thêm Heart of the Well khi rớt vào abyss.

Bản đắt 4 tablet trên City biome map cộng thêm slot thứ tư qua atlas notable **Industrial Improvements**:

- Thêm **1 Abyss Tablet** thứ hai để cộng dồn abyss/map. Mod "increased number of Abysses" cho phép vượt mức base.
- Hoặc thay slot 4 bằng **Unforeseen Consequences** (Abyss Tablet unique, 1 use, *"Map contains 14-18 additional Abysses, Map is overrun by the Abyssal, additional Rare Monsters are spawned from Abysses"*) cho mật độ abyss cực đậm. Đổi lại nó cộng "75% reduced quantity from overrun unique tablet" lên các tower augment, nên không stack tốt với tower juice — đọc kỹ trước khi mua.

Slot tablet do số mod của :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} quyết định: waystone 6 mod mở 3 slot; slot thứ tư chỉ có trên City biome map sau khi allocate Industrial Improvements. Tower (Precursor Tower) là map area mình chạy để mở tầm nhìn atlas và rớt tablet, **không phải nơi cắm tablet** — đặt sai chỗ là lỗi vocabulary phổ biến đầu league.

### Waystone & Map Choice

Waystone T15 6-mod là baseline. Alch rồi spam :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"} tới khi đủ 6 mod để mở 3 slot tablet; map mod nào kill được build thì roll lại bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Alchemy"}. Biome ưu tiên **Grass, Forest, Desert** cho pack size cao và layout thoáng, vì kéo rare Amanamu ra khỏi cụm darkness cần chỗ chạy. **Cẩn thận layout chật**: ruin/cave/dungeon map khiến rare Amanamu kẹt trong darkness cloud không dụ ra được, mất hết drop bonus. Bản 4 tablet City biome quanh ba Citadel Ezomyte City, Faridun City, Vaal City (đây là biome, không phải map tên cụ thể) — chấp nhận layout đông kẹt vì có slot thứ tư bù lại.

### Build Requirements

Build cần đứng nổi một map đông quái T15 6 mod, không cần DPS tháp ngà. Ulaman dễ hơn vì rare không scale effectiveness theo pit, build T15 trung bình clear sạch sẽ. Amanamu căng hơn nhiều: rare cộng dồn 100% effectiveness sau 10 pit là sandbag thật, ăn đòn nhả phản damage cao. Ngưỡng thực tế cho Amanamu: ~3-5M DPS single-target để xé rare trong 2-3 giây, EHP ≥10k và chaos res tối thiểu 50% vì Abyssal nhả nhiều chaos damage cộng độc. Build evasion thuần ngưỡng chaos thấp hơn 50% chết rất nhanh trong rừng Amanamu. League-start không đụng được biến thể Amanamu, nhưng Ulaman bản budget chạy được từ T10 nếu đã unlock Abyss subtree.

## Gameplay

Vào map, chạy theo route tự nhiên đóng abyss pit khi nó hiện. Pit kích hoạt khi mình giết quái thường quanh miệng pit, fissure đóng dần đến tâm rồi nhả một đám Abyssal; giết hết đám Abyssal đó để đóng pit hẳn. Pit đóng có chance nhả Abyssal Trove chứa Ancient Bone (currency desecrate amulet/ring/belt/weapon/armour/jewel/waystone), và abyss cuối cùng của vùng có chance mở **Abyssal Depths** — dungeon ngầm cho omen hiếm cùng Lineage Support. Abyss omen không drop ở area dưới level 65, nên chạy T8 trở lên.

**Biến thể Ulaman: route bình thường, chest farming.** Khi pit đóng, Abyssal Chest sinh ra ở miệng pit và (với Strange Aversions) là Currency Chest cho Ulaman. Mở hết. Rare Ulaman nhả damage reduction aura khi chết (mod **Ulaman's Legion** *"grant damage reduction to aura owner on death"*), không phản damage nặng, nên cứ giết kiểu cũ. Rogue Exile nào dính abyss thành Lichborn — đánh dấu khác hẳn — phải giết bằng được vì đây là cú quay xúc xắc Heart of the Well.

**Biến thể Amanamu: kéo rare ra khỏi darkness.** Rare Amanamu sinh kèm vùng darkness cloud lớn quanh nó. **Phải kéo rare ra khỏi cloud rồi mới giết** để có drop tối ưu — đứng trong cloud giết là mất phần omen đỉnh và Lichborn Modifier. Cách kéo: chạy ra xa cho rare đuổi theo, nó tự rời cloud, đứng ngoài cloud giết. Tuyệt đối không spam AoE diện rộng giết khi rare vẫn trong cloud, đó là kịch bản đốt drop phổ biến nhất.

Lưu ý cú nerf 0.5.1 hotfix 6: **Amanamu's Void uptime giảm 90% xuống 50%, quái cũng rời void**, tức cloud darkness biến mất nhanh hơn nhiều so với bản launch. Kéo rare ra giờ dễ hơn (cloud tự tan), nhưng cửa sổ để optimal drop trigger cũng ngắn lại — không còn cảnh "rare đứng cả phút trong cloud chờ kéo". Giết nhanh khi rare rời cloud, đừng đợi.

**Nguồn lãi thật nhặt từ sàn:** rare item Abyssal có item level cao và nhả base ngon. Filter loot cho hiện rare amulet, rare ring, rare belt, rare jewel, rare weapon ilvl 80+ ra mọi map. Nhặt về craft bằng chính Ancient Bone vừa rớt (Ancient Collarbone desecrate amulet/ring/belt, Ancient Jawbone desecrate weapon, Ancient Rib desecrate armour, Preserved Cranium desecrate jewel) — đây là dòng tiền lớn nhất, bỏ qua thì mất 60-70% lãi.

## Loot Breakdown & Economic Analysis

Mô hình lãi ba tầng tách nhau:

```
expected_profit_per_hour =
  raw_currency_floor   (Currency Chest Ulaman + Ancient Bone + omen rớt thẳng)
  + crafted_item_value (rare nhặt + craft bằng Ancient Bone bán lại)
  + heart_of_the_well_value (Lichborn Rogue Exile drop, biến số lớn)
  − cost_per_map       (tablet + waystone)
  − opportunity_cost   (atlas point để vào Abyss subtree)
```

Giá pull từ poe2scout ngày 2026-06-10, quy đổi **1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} ≈ 130 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}**.

**Ancient Bone là lớp đắt nhất ổn định.** Ancient Collarbone (desecrate amulet/ring/belt) ~12,3 div (1,596 ex, volume mỏng 255 listings), Ancient Jawbone (weapon) ~7,6 div (994 ex, volume 1,194), Ancient Rib (armour) ~3,5 div (460 ex, volume 1,124). Bản Preserved của Collarbone giá ~0,8 div (104 ex) nhưng rớt dày hơn nhiều. Trend Ancient Collarbone bật mạnh 7 ngày qua: từ 737 ex (06-06) lên 1,596 ex (06-10), tức +116% — đang là phase đỉnh giá. Một map Abyss đàng hoàng (2 tablet) cho ra ~1-2 Ancient Bone đủ loại, dòng tiền ~1-2 div/map chỉ từ bone.

**Omen abyss là tầng cao volume.** Omen of Light ~5,7 div (742 ex), volume cực dày (~5,661 listings, daily volume ~63k-160k ex), trend cũng leo +75% tuần (416 → 729 ex). :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Abyssal_Echoes"} ~0,68 div (88 ex), volume khổng lồ ~13,8k listings, daily turnover ~160k-420k ex — đây là dòng tiền chảy đều nhất, rớt nhiều mỗi map. Omen of the Sovereign / Liege / Blackblooded (guarantee modifier theo faction) cũng giá tương đương Light, drop tuỳ faction chọn.

**Heart of the Well là biến lớn, không phải nguồn nền.** Bản unrevealed floor ~0,04 div (5 ex, volume 22.9k listings) — nhả ra rồi reveal bốn dòng bừa thì gần như rác. Nhưng Heart roll trúng combo prefix/suffix top (vd life + chaos res cao + double damage modifier) có thể bán 5-30 div mỗi cái, một số cây đỉnh điểm trade2 đẩy lên 100 div. Tỉ lệ ra Lichborn Exile cụ thể mỗi map chưa đo chuẩn, ước lượng ~1 Heart mỗi 8-15 map Ulaman + cụm Rogue Exile đầy đủ. Biến thể Amanamu Heart ít hơn vì point dồn vào effectiveness thay vì exile-chain, nhưng vẫn có.

**Lineage Support đắt dạng "thỉnh thoảng".** :wiki-link{url="https://www.poe2wiki.net/wiki/Amanamus_Tithe"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Kurgals_Leash"}, Tecrod's Revenge, Kulemak's Dominion rớt từ chest Abyssal Depths cuối map. Giá dao động 0,5-3 div tuỳ bản, không đều nhưng cộng vào nền.

**Chi phí cực nhẹ.** Abyss Tablet rare ~5-15 ex, Precursor Tablet rare ~5-15 ex, Overseer Tablet ~5-10 ex. Setup 3 tablet ~15-40 ex/map (bản budget). Bản đắt 4 tablet với Unforeseen Consequences (~30-60 ex/use cho unique tablet 1-use) đẩy chi phí lên ~80-150 ex/map nhưng đổi lại mật độ abyss cao gấp ba.

Ráp lại bản budget: ~1-2 div Ancient Bone + ~1 div omen + ~0,5 div rare-item-craft + cú quay Heart of the Well thỉnh thoảng = **nền ~2,5-4 div/map** không tính Heart, **~4-8 div/map** tính cả Heart trải đều. Trừ tiền tablet ~15-40 ex (~0,15-0,3 div), lãi ròng ~2-4 div/map bản budget. Bản 4 tablet đắt nhân số rare/map lên ~2x (hai abyss tablet + Unforeseen Consequences 14-18 abyss bonus), kinh nghiệm chung của strategy thấy ~3-6 div/map trừ chi phí. Throughput tuỳ clear speed: ~6-10 map/giờ cho build trung bình = ~12-50 div/giờ — biên rất rộng vì phụ thuộc Heart drop hên xui.

## Failure Modes

Phương sai Heart of the Well cao kinh khủng. Bản unrevealed thì rớt dày nhưng floor 5 ex coi như rác, **giá thật là Heart đã reveal trúng combo top**, và combo top thì xác suất thấp. Có thể chạy 50 map Lichborn Exile mới ra một Heart bán được 10+ div. Đừng coi Heart là nguồn nền — coi nó như jackpot ngẫu nhiên. Nền của strategy thật sự là Ancient Bone cộng omen, không phải Heart.

**Nerf Amanamu 0.5.1 đã hạ kèo biến thể này.** Hotfix 6 giảm Amanamu's Void uptime 90% → 50% kèm cho phép quái rời void, đúng cú đánh vào omen abyss pool. Volume Omen of Abyssal Echoes giảm từ 137 ex (06-07) xuống 87 ex (06-10) là chỉ dấu compress giá. GGG có lịch sử nerf đúng cái lãi nhất giữa league, biến thể Amanamu là tâm meta nên rủi ro nerf tiếp cao — Ulaman an toàn hơn về mặt patch sensitivity.

**Layout map kẹt kill drop Amanamu.** Rare Amanamu chỉ cho optimal drop khi giết ngoài darkness cloud. Map ruin/cave/dungeon layout chật, rare kẹt cứng trong cloud không kéo ra được, mất hết bonus omen. Bắt buộc reroll waystone biome Grass/Forest/Desert hoặc dùng Orb of Chance đổi map base — không xài bừa map đông kẹt cho biến thể Amanamu.

**Abyss crack bug chưa fix tính đến 0.5.1.** Một số map abyss crack không hoàn thành được dù đã giết hết quái, chặn cộng atlas skill point. Hai workaround: đổi sang faction node khác trên atlas (deallocate Balance of Power option đang chọn, lấy option khác, vào lại map) rồi chạy lại map; hoặc complete map rồi run lại map lần nữa. Vẫn còn xác suất stuck. Strategy này dùng Balance of Power locked nên workaround "đổi faction" phải kèm respec — tốn currency respec hoặc đợi hotfix sau.

**Build thiếu chaos res chết Amanamu rare.** Đám Abyssal nhả chaos damage nặng cộng độc chồng. Build dưới 50% chaos res một-shot bởi rare 100% effectiveness là chuyện thường. Ulaman an toàn hơn vì rare Ulaman có aura damage reduction chứ không phản damage cao, nhưng Amanamu rare 100% effectiveness là sandbag thật — không phải DPS yếu là chết, là thủ yếu chết.

**Sustain Abyss Tablet không khoẻ.** Tablet abyss rare rớt dày nhưng không đều, và xài 2 tablet/map cộng Unforeseen Consequences (1 use) ngốn rất nhanh. Cần buffer ~50-100 tablet trước khi cắm full setup, không thì stretch xui bị cụt sustain phải chạy map nền không tablet — tụt hẳn về income mức ex thay vì div.

## Profit Optimization

Stack thêm cơ chế lên cùng map vì atlas của strategy này đã đông quái sẵn: thêm tablet :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual"} hoặc Breach vào slot rảnh (nếu allocate cụm đó trên atlas), Ritual + Abyss đặc biệt mạnh vì hai cơ chế cùng nuôi map đầy quái cho nhau — chi tiết overlap với ritual ở [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting), strategy đó coi Abyss là tầng nền chứ không phải mục tiêu chính, đối ngược với doc này. Master assignment trên Atlas: Hilda **Mighty Prey** (25% chance nâng map boss thành Powerful Map Boss) cho thêm exile từ node "Powerful Map Boss contains additional Rogue Exile", cộng thêm Heart drop. Jado **Partial Translations** (20% chance double effect explicit mod tablet) cho map đôi khi nhân đôi số abyss của tablet — bonus thuần.

Filter loot bắt buộc hiện rare amulet/ring/belt/jewel ilvl 80+ và weapon ilvl 80+; rare armour ilvl 80+ chỉ giữ base ngon (vd Expert Plate, Astral Plate). Nhặt sai base là đốt thời gian inventory. Bán bone bulk qua Currency Exchange status securable cho thanh khoản: Ancient Collarbone volume mỏng nên list lẻ, các bone khác và omen bulk Exchange. Heart of the Well **không bán unrevealed** — reveal hết bốn dòng rồi mới quyết giữ-bán: trúng combo top thì list lẻ giá div, rác thì vendor.

## Alternatives & Variations

Bản budget Ulaman chạy được từ T10 chỉ với 1 Abyss Tablet rare và atlas đã vào Abyss subtree — lãi mỏng (~1-2 div/map) nhưng vốn cực nhẹ và không cần atlas hoàn thiện.

Ai muốn cộng phương sai upward với chính nguồn lãi này thì chuyển sang **Ritual + Abyss** overlap (xem [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting)) — atlas tốn point ritual subtree thêm và setup tablet đắt hơn (~3-4 div/map), nhưng cộng tầng belt Mageblood/Headhunter mỗi ~10h vào trên nền abyss. Chỉ chuyển khi build clear nổi cả arena ritual đông cộng abyss đông cùng lúc.

Phía cạnh tranh slot atlas + tablet: [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) dùng cùng Map Device và một số node atlas chung, nhưng output là carry companion thay vì abyss loot — chọn một hướng cho mỗi session, không vận hành song song được.

Không có biến thể "Kurgal" hay "Kulemak" trên Balance of Power xứng đáng farm thuần. Kurgal pool Jewellery Chest theo Strange Aversions giá vừa phải nhưng không bằng Ulaman currency, Kulemak Weapon Chest thanh khoản kém. Mọi guide nghiêm túc đầu league đều dồn về Ulaman hoặc Amanamu.

## Data & Testing

Cơ chế (Balance of Power keystone với 4 option faction, Strange Aversions đổi loot chest theo faction, Lord of the Pit cho 10%/pit lên 100% effectiveness, Shadow of Undeath cho exile influenced by abysses, Sprawling Rupture, Vile Treasures, Unholy Influence, Strange Aversions, Ulaman's Legion aura damage reduction, Amanamu's Void darkness cloud cơ chế kéo rare ra) verify từ poedb live ngày 2026-06-09/06-10 (`data/poedb/0.5.0/Abyss.md` + `data/poedb/0.5.0/Atlas_passive_skill.md`). Heart of the Well chỉ drop từ Lichborn Rogue Exile verify từ doc nội bộ [Heart of the Well](/mechanics/items/heart-of-the-well) (49,5% top-XP character đeo, sample top-XP poe.ninja league 0.5).

Patch notes 0.5.0 nerf damage và life của Elite Abyss Monster, kèm Lithomantic Runes delay tăng. **0.5.1 hotfix 6 nerf Amanamu's Void**: uptime 90% → 50% và quái rời void, là cú đánh vào omen abyss pool (volume Omen of Abyssal Echoes 06-07 137 ex → 06-10 87 ex). Abyss crack bug (không complete được abyss để cộng atlas skill point) chưa có fix trong main note 0.5.1, workaround vẫn là đổi faction node hoặc complete map rồi chạy lại.

Giá pull live từ poe2scout ngày 2026-06-10 (1 div ≈ 130 ex): Omen of Light 742 ex (~5,7 div, volume 5,661, +75% tuần), Omen of Abyssal Echoes 88 ex (~0,68 div, volume 13,814, -36% tuần do nerf Amanamu), Ancient Collarbone 1,596 ex (~12,3 div, volume mỏng 255, +116% tuần), Ancient Jawbone 994 ex (~7,6 div, volume 1,194), Ancient Rib 460 ex (~3,5 div, volume 1,124), Preserved Collarbone 104 ex (~0,8 div, volume 5,205), Gnawed Collarbone 1,8 ex, Heart of the Well unrevealed floor 5 ex (volume 22,897 — rác base, giá thật chỉ ra khi reveal trúng), Undying Hate Timeless Jewel 260 ex, Darkness Enthroned Fine Belt 1 ex. Re-fetch qua /poe2scout nếu mốc quá 7 ngày.

Throughput (~2-4 div/map budget, ~3-6 div/map đắt, Heart mỗi ~8-15 map exile-juiced) là kinh tế quan sát chung của strategy giữa league, **chưa phải sample cá nhân**. Vào farm log số map, số Heart reveal trúng, số bone từng loại bán được mỗi giờ để thay bằng số của chính mình.

## Quick Reference Card

**Setup cost / map:** budget ~15-40 ex (3 tablet rare) · đắt ~80-150 ex (4 tablet + Unforeseen Consequences)  
**Profit / map:** nền ~2-4 div (Ancient Bone + omen + rare craft); Heart of the Well jackpot mỗi ~8-15 map exile-juiced, có thể 5-30 div  
**Time / map:** ~5-8 phút (phải gom hết abyss pit + nhặt rare item base ngon)  
**Waystone / map:** T15 6-mod Grass/Forest/Desert biome (KHÔNG ruin/cave/dungeon cho Amanamu); City biome cho slot tablet thứ tư  
**Tablets:** 1 Abyss Tablet (rare) + 1 Precursor Tablet rare + 1 Overseer Tablet, slot thứ tư cộng Abyss Tablet thứ hai HOẶC Unforeseen Consequences  
**Atlas key nodes:** Balance of Power (chọn Ulaman HOẶC Amanamu) · Lord of the Pit · Strange Aversions (Ulaman) · Sprawling Rupture · Vile Treasures · Shadow of Undeath · cụm Rogue Exile (Wealthy Exiles, additional exile từ Powerful Map Boss)  
**Masters:** Hilda → Mighty Prey (thêm exile từ powerful boss) · Jado → Partial Translations (double effect tablet)  
**Key drops:** Heart of the Well (Lichborn Rogue Exile, jackpot) · Ancient Collarbone/Jawbone/Rib · Omen of Light · Omen of Abyssal Echoes · Lineage Support  
**Amanamu lưu ý:** kéo rare ra khỏi darkness cloud RỒI giết; build chaos res ≥50%; cloud uptime đã giảm còn 50% sau hotfix 6  
**Cảnh báo:** Balance of Power 3 option đầu chặn questline Abyss (vẫn chấp nhận vì strategy bắt buộc lock faction); abyss crack bug chưa fix trong 0.5.1

## Changelog

### 2026-06-10
- Thêm section "Reward bị gate bởi cái gì": bốn gate (pit đóng trọn, vị trí giết Amanamu, chuỗi exile cho Heart, area level + loot discipline), contrast với breach (không timer, build chậm không bị phạt), cost-reward coupling.
- Initial draft. Cơ chế verify từ poedb live 2026-06-09/06-10 + patch note 0.5.0/0.5.1; giá pull live từ poe2scout cùng ngày; nerf Amanamu hotfix 6 và workaround abyss crack bug.

## Relationships

- **related_mechanics** [Heart of the Well](/mechanics/items/heart-of-the-well) — unique Diamond jewel rớt từ Lichborn Rogue Exile trong Abyss encounter, là item jackpot của strategy này (49,5% top-XP character đeo, pool 73 mod desecrated độc quyền).
- **related_mechanics** [Atlas passive tree gồm những gì](/mechanics/atlas/0-5-atlas-passive-tree) — vị trí Abyss subtree, cảnh báo Balance of Power keystone, master Hilda/Jado/Doryani dùng ở đây.
- **related_guides** [Mở khoá full atlas point](/guides/0-5-atlas-unlock-walkthrough) — cách mở hết point để atlas không respec không phải vấn đề; giết Second Arbiter 5 lần hoặc clear hết map vùng.
- **competes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) — strategy anh em coi Abyss là tầng nền, doc đó dồn vào belt phương sai cao; doc này dồn thuần Abyss + Rogue Exile cho Heart, không cần ritual setup. Chọn một tuỳ build và budget.
- **competes_with** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cùng tốn slot tablet + atlas Map Device nhưng output là carry companion thay vì abyss loot.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league system 0.5 (Abyss revamp với storyline, Atlas Cracks, atlas subtree mới) là nền của strategy.
