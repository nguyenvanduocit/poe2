---
template: templates/farming-template.md
document_type: farming-strategy
title: Săn Monkey Companion qua Ritual
status: draft
created: '2026-06-15'
updated: '2026-06-15'
strategy_tier: B
investment_tier: Variable
league: '0.5'
patch: 0.5.2
league_phase: Mid
confidence_level: Medium
---

# Săn Monkey Companion qua Ritual

Đây không phải farm kiếm tiền — output là một con carry companion account-bound mình giữ cho build, không bán được. Vòng săn này tiêu currency ròng để đổi lấy một con :wiki-link{url="https://www.poe2wiki.net/wiki/Zekoa,_The_Headcrusher"} (hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha_Primate"}) mang đúng bộ rare modifier mình cần, đỉnh là **Extra Crits**. Cơ chế tame, retention modifier và chuỗi multiplier sống ở [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt); doc này lo phần kinh tế: một con carry tốt tốn bao nhiêu div, mỗi map ra mấy con, mỗi ngày cày được bao nhiêu lượt để fish, và cách hạ chi phí mỗi con sau khi 0.5.2 nerf đường nhồi mod.

Phần đắt nhất của vòng săn đổi sau 0.5.2: node Jado **Partial Translations** đổi từ "20% chance double effect" sang "0-40% increased effect", không còn nhân *số* mod nữa, nên không còn ép con boss lên 5-6 mod để fish dễ. Trần mod giờ là số slot tablet, và đường lên bốn mod thật sự là ba slot waystone cộng slot City thứ tư. Vòng săn vì vậy xoay sang volume: chạy thật nhiều map monkey, tame thật nhiều con, dùng ritual revival nhân số con mỗi map lên, rồi disenchant con xấu. Tier B, investment Variable: bản nhanh chỉ 1 Head + 3 tablet (~1.5 div/map), bản full ritual amortize Head qua chuỗi 5 map cho nhiều con hơn mỗi key.

## Strategy Overview

Vòng săn ăn ở ba lớp nhân số con monkey mỗi key tốn:

Lớp một là **Rite of the Nameless**. Một :wiki-link{url="https://www.poe2wiki.net/wiki/The_Head_of_the_King"} mở một chuỗi 5 map chung một ritual liên tục; con boss của map đầu được kéo theo cả chuỗi và tái xuất ở ritual cuối của mỗi map sau, nên đặt :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"} làm map đầu thì Zekoa spawn lại nhiều lần, mỗi lần là một cú roll mod mới để fish, nên throughput nhảy từ một con mỗi map lên 5-8 con.

Lớp hai là **số mod mỗi con**. Mỗi rare modifier thêm lên Zekoa là một vé số cho Extra Crits. Ba slot tablet (Cruel Hegemony + hai "of Contest") cho ba mod thêm; slot City thứ tư qua atlas notable **Industrial Improvements** cho bốn. Càng nhiều mod thêm, xác suất một con mang đúng bộ mình muốn càng cao — nhưng cũng càng đắt tablet mỗi map.

Lớp ba là **volume thô**. Drop-rate cho bộ mod đẹp thấp đến mức chỉ volume mới kéo nổi: "just Extra Crits" cỡ 1/15-1/30 con, còn 3x mod tốt rơi xuống 1/100-1/300 con. Cày 15-20 map Riverside/Rupture mỗi ngày, mỗi map 5-8 con qua ritual, là ~100 con/ngày — đủ để bộ 1/100 thành chuyện một-hai ngày thay vì không bao giờ. Build clear chậm cắt thẳng vào con số này: nửa số map mỗi ngày là nửa số vé fish.

Cái cần nói thẳng ngay đầu: đây là **khoản đầu tư một lần cho build**, không phải dòng tiền. Map vẫn rớt ritual reward và pinnacle key fragment trên đường (lớp income đó mình viết ở [Belt Hunting qua Ritual](/farming/0-5-ritual-belt-hunting)), nhưng mục tiêu chính là con carry, và toán dưới đây tính **cost mỗi con carry đạt target**, không phải profit/giờ.

## Setup

### Atlas Passive Tree

Bộ tree xoay quanh ba thứ. Một là cụm **Ritual** quanh hub **Caer Tarth** phía tây điểm start atlas để mở Rite of the Nameless — lấy node "+1 map" kéo chuỗi lên 6 khi quen tay, vì mỗi map thêm là thêm lượt Zekoa tái xuất. Hai là notable **Industrial Improvements** ("An additional Tablet may be used on City Maps") cho slot tablet thứ tư; không có nó thì trần mod thêm dừng ở ba. Ba là cụm **Doryani's Science** cho node **Remnants of Greatness** (map boss có 20% chance guard một Precursor Terraformer) để ép biome.

Allocate thêm các node tăng pack size / rare density trên biome Forest/Swamp vì map càng đông quái thì ritual càng nhiều favour và càng nhiều beast để tame. Nếu vẫn cày level thì cụm shrine/XP đáng lấy — giết cả rừng boss trong ritual cho XP rất dày.

### Masters of the Atlas

Master đổi tự do trước mỗi map không tốn point, nên đây là tầng tinh chỉnh.

**Doryani** là master đáng cho vòng săn này nhất sau 0.5.2: node **Remnants of Greatness** mở Precursor Terraformer để đổi biome cả cụm map gần đó sang Forest/Swamp, dồn nhiều map seed Zekoa cạnh nhau (và cạnh một City map nếu chạy hướng slot thứ tư). Trước đây Jado **Partial Translations** là lựa chọn mặc định vì nhân đôi mod tablet; sau redesign 0.5.2 nó chỉ còn cho 0-40% increased *effect* (độ mạnh, không phải số mod), nên không còn dùng để nhồi mod nữa. **Hilda** đáng ngó nếu muốn thêm rare để tame: **Mighty Prey** (25% chance nâng map boss thành Powerful Map Boss) và **Breeding Season** (thêm rare và rare-có-modifier) cho nhiều mục tiêu hơn mỗi map.

### Tablets & Map Device

Tablet đi thẳng vào :wiki-link{url="https://www.poe2wiki.net/wiki/Map_Device"} cùng waystone (0.5 đã bỏ Tower). Số slot do số mod waystone quyết định: 6-mod mở cả ba slot; slot thứ tư chỉ mở trên map biome City/Citadel khi đã allocate Industrial Improvements.

Bộ ba slot chuẩn để nhồi mod lên Zekoa:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} (unique Overseer tablet) cho map boss thêm một modifier và empower nó thành Powerful Map Boss luôn. Chỉ 5 uses, kiểm use count khi mua.
- **Hai tablet "of Contest"** ("Unique Monsters in your Maps have 1 additional Rare Modifier"), suffix roll trên base bất kỳ. Mỗi cái cộng một rare mod thêm.

Slot City thứ tư cho thêm một "of Contest" nữa, đẩy số mod thêm lên bốn. Cách dùng slot này cho hướng rare monkey nằm ở Alternatives bên dưới.

Có một cái bẫy phải tránh: hướng "City + 4 Vaal Temple tablet" để guarantee 4 mod kèm chance spawn rare Quadrilla Sergeant. Vaal Temple tablet đắt ~25 div mỗi cái, 100 div cho bốn, mà chỉ ~1/8 map ra Quadrilla Sergeant — chi phí ~10 div mỗi map cho một thứ không cần. Cái 5% spirit rẻ của Quadrilla Sergeant tìm được trên aura bot, còn bốn mod thì hướng Terraformer + slot City rẻ hơn nhiều cho ra. Bỏ hướng Vaal Temple trừ khi đã siêu giàu.

### Waystone & Map Choice

Con boss target là Zekoa, spawn ở :wiki-link{url="https://www.poe2wiki.net/wiki/Riverside"} (Forest biome) và :wiki-link{url="https://www.poe2wiki.net/wiki/Rupture_(map)"} (Swamp biome) — đây là hai map đầu chuỗi Rite. Precursor Terraformer ép cụm map gần đó về Forest/Swamp để có nhiều Riverside/Rupture hơn mà đặt vào chuỗi.

Hai cách roll waystone, đánh đổi giữa số mod và số lần thử lại (revive cũng do số mod waystone quyết định, không phải tablet):

- **Waystone 6-mod**: mở cả ba slot tablet nhưng 0 revive. Phải tame ngay khi gặp boss rồi mới xem mod sau; lỡ chết hoặc giết nhầm boss là mất trắng cả ba tablet trong map đó. Chế độ one-shot cho người quen tay.
- **Waystone 4-mod**: chỉ mở hai slot nhưng cho 2 revive, mở ra mẹo soi-rồi-reroll — vào boss room, tắt minion, soi mod Zekoa; xấu thì để boss giết mình, respawn ở checkpoint ngoài boss room với chỉ boss present, mỗi respawn là một lần soi mod mới. An toàn hơn, người mới nên chạy.

Tier map không đổi base stat con tame, nên chạy tier thấp nhất còn ra đúng base + đủ area level cho atlas. Mục tiêu là giữ boss sống đủ lâu để wisp dán, không cần map juicy.

### Build Requirements

Vòng săn cần character đã mở sâu atlas (Rite of the Nameless, Industrial Improvements, Doryani's Science). Ngưỡng thật là **clear nhanh + đứng nổi một boss room đã empower**: chạy 6-mod one-shot mà chết trước khi tame là mất nguyên stack tablet, nên đủ thủ quan trọng hơn DPS. Tốc clear quyết throughput trực tiếp — 100 con/ngày của build nhanh so với 20-30 con của build chậm là khác biệt giữa fish nổi bộ 1/100 hay không. Và phải có **spirit headroom** để thật sự chạy con carry vừa bắt: tame được một con 4-mod hoàn hảo mà không đủ spirit để summon nó là phí cả vòng. League-start không đụng được: cần atlas progression sâu cộng nguồn Head of the King.

## Gameplay

Vòng cơ bản: roll waystone tới số mod muốn (6 cho one-shot, 4 cho reroll), cắm Cruel Hegemony + hai/ba "of Contest", chạy Rite of the Nameless với Riverside hoặc Rupture làm map đầu. Mỗi lần Zekoa tái xuất ở ritual, soi mod; thấy Extra Crits thì tắt minion cho boss sống, wisp rồi giết khi còn wisps; không thấy thì để lượt đó trôi (waystone 4-mod) hoặc tame đại rồi disenchant sau (6-mod). Con bắt xong mà mod xấu thì disenchant gem Tame Beast ở vendor để lấy lại con trắng giữ nguyên level/quality/socket, tái dùng. Thủ một con Tame Beast thứ hai rẻ làm standby để soi mod, chỉ dồn 6-link xịn sang sau khi trúng bộ đáng giữ.

Trước khi vào, terraform: chạy tới một map boss có Precursor Terraformer (Remnants of Greatness, 20% chance), kích hoạt để đổi cụm map gần đó sang Forest/Swamp, gom nhiều Riverside/Rupture vào tầm rồi mới mở Rite. Bước này biến atlas từ "thỉnh thoảng có một map monkey" thành "cả cụm đều seed Zekoa".

Vài mẹo execution hạ thời gian mỗi con:

- **Mang hai gem Tame Beast** vào map nếu được, để bắt hai con liên tiếp không phải về town giữa chừng.
- **Pause Swap Trick** để soi/xử lý mod mà không bị đàn DPS giết boss sớm (chơi solo mới pause được — xem caveat dưới).
- **3-mod monkey suicide run** không dùng ritual: chạy với talent Doryani cho 1 extra revive, cố ý chết ở boss nếu mod sai để reroll. Cảnh báo: cú này **xoá sạch mọi ritual trên map**, nên đừng dùng chung với hướng ritual revival — ở hướng ritual mình đã có 3-5+ con từ revival rồi, suicide chỉ phá.
- **Mua tablet off-peak**: "of Contest" rớt giá 20-30 ex khi NA và EU ngủ, mua lúc đó thay vì cuối tuần khi giá đỉnh.
- **Nhờ bạn mở map** Riverside/Rupture cho mình tame: chạy được cho hướng monkey + 3 tablet hoặc monkey + ritual, nhưng host phải ở trong map lúc nó complete nếu không atlas pathing không unlock, và hai người thì không pause game được.

## Loot Breakdown & Economic Analysis

Vì output là carry account-bound không bán được, mô hình không phải profit/giờ mà là **cost mỗi con carry đạt target**:

$$
\text{cost/target monkey} = \frac{\text{cost/map}}{\text{monkeys/map} \times \text{hit rate for target mods}} + \text{key farm cost} - \text{offsetting income}
$$

Trong đó:
- **key farm cost** — thời gian farm The Head of the King, không mua được
- **offsetting income** — ritual reward + pinnacle key fragment rớt trên đường

Throughput field-observed (Mattjestic + nhóm cày, 2026-06-14, cần log lại khi tự chạy):

- Bản full ritual: ~3-4 div tablet cho ~10 map, ra ~8-15 con raw → ~0.25-0.5 div mỗi con raw.
- Bản monkey-only (1 Head + 3 tablet): ~1.5 div/map, ra 3-5 con/map → ~0.3-0.5 div mỗi con raw.

Drop-rate cho bộ mod, cũng field-estimate:

- "Just Extra Crits": **1/15 – 1/30** con.
- Extra Crits + một mod tốt (extra damage / T1 aura / enrage): **1/30 – 1/50** con.
- Ba mod tốt cùng lúc: **1/100 – 1/300** con.

Ráp lại với ~0.3-0.5 div/con raw: một con "just Extra Crits" dùng được tốn cỡ **5-15 div** mapping; một con 3x-good là khoản chase **30-150 div** mapping, và ~100 con/ngày trở thành điều kiện cần — không có volume thì bộ 1/300 không bao giờ tới. Tốc clear vì thế là biến kinh tế lớn nhất, không phải giá tablet.

Bộ mod đáng fish, ưu tiên từ cao xuống (chi tiết cơ chế ở [build guide](/guides/spirit-walker-companion-beast-hunt)):

- **Extra Crits** ("300% increased Critical Hit Chance"): vé số một tuyệt đối. Trên Alpha Primate (~25% base crit) một mod là cap 100%; trên Zekoa (~5% base) cần thêm :wiki-link{url="https://www.poe2wiki.net/wiki/Critical_Weakness"} mới tới ~60%.
- **Extra Damage** (Chaos / Lightning / Cold / Fire), **Enrage**, **Hasted**, **T1 aura**: bậc hai, bonus quanh Extra Crits.
- **Defensive** (evasion, barrier): lấp nếu con carry hay chết.

Tablet giá biến động nhanh và đang leo: ~130-180 ex mỗi divine giữa tháng 6 (poe2scout 2026-06-10 cho ~130 ex/div, field quote 2026-06-14 ~180 ex/div). "of Contest" base single-mod tầm vài chục ex, multi-mod juiced đắt hơn; Cruel Hegemony floor thấp. The Head of the King **không mua được** trên trade (search trả Unknown, poe2scout không list), là key farm-only từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_King_in_the_Mists"}. Snapshot này stale nhanh — re-fetch qua `/poe2scout` hoặc `/trade` trước mỗi session.

## Mua gì và bán ở đâu

Vòng săn không có mặt hàng bán ra (con carry account-bound), chỉ có đầu vào mua và một key farm-only:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Cruel_Hegemony"} — unique Overseer tablet, kiểm còn đủ use (5 uses) trước khi mua. Search `/trade` cho floor live.
- **Tablet "of Contest"** — suffix "1 additional Rare Modifier to Unique Monsters". Mua off-peak rẻ hơn 20-30 ex. Lọc base nhiều use (10 uses).
- **The Head of the King** — không mua được, farm từ The King in the Mists. Muốn chạy nhiều Rite thì phải tự nuôi nguồn Head, không có đường mua tắt.

Tablet mua bulk qua trade2 (status `securable` để mua-ngay thay vì whisper offline). Đừng mua tablet 1-use giá thấp: tính theo lượt dùng đắt gấp năm.

## Failure Modes

**Spirit budget bóp chết con carry vừa bắt.** Reservation scale theo modifier-count, không node nào miễn. Tame được một con 4-mod hoàn hảo nhưng cộng zoo cộng self-defense vượt spirit pool thì không summon nổi nó — phí cả vòng săn. Tính reservation **trước** khi đi fish con nhiều mod, không phải sau.

**Run 6-mod one-shot mất nguyên stack tablet.** Waystone 6-mod cho 0 revive: chết hoặc lỡ giết Zekoa trước khi wisp dán đủ là mất cả Cruel Hegemony (1 use) lẫn hai-ba "of Contest" trong map đó. Người chưa quen nên chạy waystone 4-mod (2 revive) dù ít mod hơn, vì một map hỏng đốt nhiều div hơn phần mod thêm tiết kiệm được.

**The Head of the King là nút thắt nhịp độ, không mua được.** Hướng ritual revival xoay quanh Rite of the Nameless, mỗi run nuốt một Head. Vì key farm-only, tốc độ fish bị chặn cứng bởi tốc độ giết The King in the Mists. Không sustain được Head thì tụt về monkey-only map lẻ, mất luôn lớp nhân số con của ritual.

**Drop-rate variance ăn cả ví ở bộ GG.** 3x-good là 1/100-1/300 con; có thể cày 150+ con trắng tay rồi trúng liền hai con. Throughput ~100 con/ngày là thứ duy nhất làm bộ này khả thi, nên build clear chậm (20-30 con/ngày) thực tế không chase nổi bộ 3x — chấp nhận dừng ở "just Extra Crits" thay vì đốt tuần lễ cho con hoàn hảo.

**Account-bound khoá mọi lối thoát.** Không mua được con finished, không bán được con rare-nhưng-sai-mod. Mọi lượt tame là sunk cost trừ khi disenchant gem lấy lại con trắng. Không có thị trường thứ cấp để cắt lỗ.

**Patch risk.** GGG đã nerf Partial Translations giữa 0.5.2; "of Contest", slot City thứ tư, hay ritual revival đều có thể là mục tiêu nerf kế tiếp nếu route lan rộng. Đừng đổ 100+ div vào một stretch chase GG ngay sau khi một meta route viral.

## Profit Optimization

Hạ cost mỗi con target bằng cách tối đa hai biến nhân: **số con mỗi map** và **số mod mỗi con**. Số con: front-load chuỗi Rite bằng Riverside/Rupture map đầu để Zekoa proliferate cả chuỗi, lấy node "+1 map" kéo lên 6 map, và terraform trước để cụm map toàn Forest/Swamp. Số mod: đẩy waystone 6-mod cho ba slot, thêm slot City thứ tư qua Industrial Improvements cho bốn "of Contest", mỗi mod thêm là một vé Extra Crits.

Cắt chi phí cố định: mua "of Contest" off-peak (NA/EU ngủ) rẻ 20-30 ex; mang hai gem Tame Beast để bắt liên tiếp không về town; giữ một Tame Beast rẻ standby để soi mod, chỉ dồn 6-link xịn sau khi trúng. Và quan trọng nhất với vòng volume-driven này: **đừng over-juice mỗi map**. Slot City + Vaal Temple đắt không kéo cost/con xuống bằng chạy nhanh hơn nhiều map rẻ hơn — tốc clear kéo cost xuống mạnh hơn số mod mỗi map khi mục tiêu chỉ là "just Extra Crits".

## Alternatives & Variations

**Monkey-only fast (bỏ ritual):** 1 Head + 3 tablet trên map Riverside/Rupture, ~1.5 div/map, 3-5 con/map. Mất lớp nhân số con của ritual nhưng vốn nhẹ và không phải commit chuỗi 5 map — hợp khi chỉ cần một con "just Extra Crits" nhanh thay vì chase 3x-good.

**Rare Quadrilla Sergeant qua City:** slot City thứ tư + tablet đẩy rare Quadrilla Sergeant (reservation nền 42.3%, rẻ hơn Zekoa 47.4% ~5% spirit, và là rare nên không cần The Natural Order) lên bốn mod thêm. Hướng này né được slot Unique nếu build muốn để dành The Natural Order cho con khác. Tránh bản "4 Vaal Temple tablet" để guarantee (đắt ~25 div/tablet, ~1/8 ra Quadrilla Sergeant) — không đáng so với Terraformer + slot City.

**Volume farm thuần (không nhồi mod):** :wiki-link{url="https://www.poe2wiki.net/wiki/Untainted_Paradise"} cho density rare cực cao (gấp đôi monster, gấp bốn magic/rare) để tame hàng loạt rồi lọc, nhưng nó **không drop item** và không nhồi mod được — hợp cho aura bot của hướng nguyên đàn hơn là fish con carry. Chi tiết ở [build guide](/guides/spirit-walker-companion-beast-hunt).

Vòng này cạnh tranh trực tiếp slot tablet + atlas Map Device với [Belt Hunting qua Ritual](/farming/0-5-ritual-belt-hunting): cùng dùng The Head of the King → Rite of the Nameless, output khác hẳn (carry companion vs belt). Chọn một hướng cho mỗi session.

## Data & Testing

Cơ chế verify từ patch note 0.5.0/0.5.2 + poedb/wiki live 2026-06-15: số tablet slot (waystone-gated 3 slot + slot City thứ tư qua Industrial Improvements "An additional Tablet may be used on City Maps"), Precursor Terraformer (Doryani's Science node Remnants of Greatness, map boss 20% chance guard Terraformer đổi biome cụm map), Rite of the Nameless (boss map đầu tái xuất ở ritual cuối mỗi map trong chuỗi — `Version_0.5.0.md:184`), Partial Translations redesign 0.5.2 (`Version_0.5.2.md:19`: "0-40% increased effect" thay "20% chance double effect", không còn nhân số mod). The Head of the King farm-only verify từ trade search trả Unknown + poe2scout không list (xác nhận lại ở Ritual Belt Hunting).

Throughput và drop-rate (~5-8 con/map qua ritual, ~100 con/ngày, "just Extra Crits" 1/15-1/30, 3x-good 1/100-1/300) là **field-estimate từ Mattjestic + nhóm cày 2026-06-14, chưa phải sample cá nhân**. Khi tự chạy, log: số map, số con tame/map, số con trúng từng bậc mod, div tablet thực mỗi 10 map, để thay bằng số của mình. Claim "first ritual của chuỗi có high chance revive Unique" không có trong patch data — bỏ qua, chỉ tin "unique chỉ ở ritual cuối của mỗi map" (đã verify). Giá tablet leo nhanh đầu league, re-fetch poe2scout/trade nếu mốc quá 7 ngày.

## Quick Reference Card

**Output:** một con carry companion account-bound (Zekoa hoặc Alpha Primate) mang Extra Crits — đầu tư build, không bán được
**Cost / target monkey:** ~5-15 div mapping cho "just Extra Crits" · ~30-150 div cho 3x-good (field-estimate)
**Cost / map:** monkey-only ~1.5 div · full ritual ~3-4 div / 10 map
**Throughput:** 15-20 map Riverside/Rupture/ngày · 5-8 con/map qua ritual · ~100 con/ngày
**Drop-rate:** Extra Crits 1/15-1/30 · +1 mod tốt 1/30-1/50 · 3x-good 1/100-1/300
**Waystone:** 6-mod (3 slot, 0 revive, one-shot) HOẶC 4-mod (2 slot, 2 revive, soi-reroll an toàn)
**Tablets:** Cruel Hegemony + 2-3 "of Contest"; slot City thứ tư qua Industrial Improvements; mua off-peak
**Atlas key:** Rite of the Nameless (Caer Tarth) · Industrial Improvements (slot 4) · Doryani Remnants of Greatness (Terraformer)
**Key:** The Head of the King → Rite chain, farm-only từ The King in the Mists, không mua được
**Tránh:** 4 Vaal Temple tablet guarantee (đắt, ~1/8 Quadrilla); run 6-mod khi chưa quen (mất stack tablet); fish 3x-good với build clear chậm

## Changelog

### 2026-06-15
- Initial draft. Tách lớp kinh tế của vòng săn companion ra khỏi [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt). Seed từ guide Mattjestic "How to Find 3-4 Mods Monkey After 0.5.2 Nerf" (mobalytics, 2026-06-14). Cơ chế (tablet slot, Industrial Improvements slot City, Precursor Terraformer, Partial Translations 0.5.2 redesign, Rite revival) verify từ patch note 0.5.0/0.5.2 + poedb/wiki live. Drop-rate + throughput + cost là field-estimate, đánh dấu để log lại khi tự chạy.

## Relationships

- **related_guides** [Spirit Walker Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — cơ chế tame, retention modifier, chuỗi multiplier, chọn beast carry; doc farming này lo phần kinh tế của cùng vòng săn.
- **related_guides** [Ritual và Rite of the Nameless](/guides/0-5-ritual-rite-of-the-nameless) — cơ chế ritual đầy đủ (subtree, tribute, chuỗi Rite) mà lớp revival nhân số con monkey chạy trên đó.
- **competes_with** [Belt Hunting qua Ritual](/farming/0-5-ritual-belt-hunting) — cùng dùng The Head of the King + slot tablet + Map Device, output belt thay vì carry companion; chọn một hướng cho mỗi session.
- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build tiêu thụ con carry săn được làm nguồn damage chính.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — league 0.5 mở Spirit Walker + Tame Beast + Endgame rewrite là nền cho vòng săn.
