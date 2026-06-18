---
template: templates/farming-template.md
document_type: farming-strategy
title: Abyss Monster Rarity và Fractured Waystone Farm
status: active
created: '2026-06-18'
updated: '2026-06-18'
strategy_tier: A
investment_tier: Variable
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Abyss Monster Rarity và Fractured Waystone Farm

Farm Abyss tối ưu hoá đúng cơ chế steal của 0.5: quái bị giết gần miệng pit càng rare thì con Abyssal trồi lên càng rare và cướp được càng nhiều modifier, nên Monster Rarity mới là stat đầu kéo cả guồng, không phải Item Rarity. Lãi đến từ Ancient Bone, omen và rare item nhặt lên craft, được nhân lên bằng Abyss Tablet roll trúng dòng `of Dark Power` (tăng chance Abyssal có Abyssal Modifier). Tier A, investment Variable vì có tầng tuỳ chọn dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"} khoá mod lên waystone trước khi chạy — nền farm không fracture chạy được từ T10 với vài chục ex/map, còn tầng fracture là canh bạc đắt chỉ đáng cho run juice nhất. Lãi nền ~3-5 div/map tính đến 2026-06-18.

## Strategy Overview

Cơ chế Abyss 0.5 viết thẳng một dòng quyết định toàn bộ chiến lược: *"the rarity of the monsters spawned depends on the rarity of the slain weakened monsters and the emerging Abyssal will steal some or all of the modifiers from them. Any of the modifiers stolen by Rare Abyssal can be upgraded to Abyssal Modifiers."* Quái thường quanh miệng pit là "weakened monster" mình clear để pit đóng; con Abyssal trồi lên thừa hưởng rarity và cướp mod của chính đám đó. Giết một bầy magic loãng thì Abyssal ra magic nghèo mod; giết một bầy rare dày thì Abyssal ra rare cướp được nhiều mod ngon, các mod đó mới có cơ hội nâng lên Abyssal Modifier, hiếm hơn nữa thành Lichborn Modifier. Vì thế **Monster Rarity là stat farm số một ở đây**, khác hẳn mọi strategy khác coi rarity với pack size ngang hàng.

Tầng nhân thứ hai nằm ở Abyss Tablet. Pool affix của :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss_Tablet"} có hai dòng đánh thẳng vào pipeline này: `of Dark Power` cho 20-30% increased chance để Abyssal monster có Abyssal Modifier, và `of Ossification` cho 20-30% increased chance ra Desecrated Currency (chính là Ancient Bone) từ Abyss. Hai dòng này khuếch đại đúng khâu cuối của chuỗi steal, nên một Abyss Tablet roll trúng `of Dark Power` đáng giá hơn nhiều một tablet chỉ có thêm số lượng abyss. Item Rarity vẫn lấy, nhưng nó scale drop chung chứ không đụng vào cái lõi steal — đó là lý do nó xuống hàng hai.

Tầng thứ ba là tuỳ chọn và đắt: dùng Fracturing Orb khoá một mod premium (Item Rarity hoặc Monster Rarity cao) lên chính waystone mình sắp chạy, rồi reroll mấy slot còn lại cho sạch mod nguy hiểm mà không sợ mất mod đã khoá. Cùng vòng farm này lại tự nhả Fracturing Orb (đi qua Cleansed area trong map), nên tầng fracture một phần tự nuôi — chi tiết ở phần waystone bên dưới.

## Setup

### Atlas Passive Tree

Vào Abyss subtree và dồn vào số lượng pit cùng monster: **Lord of the Pit** rải pit khắp vùng có abyss, **Stir the Swarm** cho map chứa thêm một abyss, **Sprawling Rupture** cho abyss spawn thêm monster, **Vile Treasures** tăng chance ra Abyss Omen, Abyssal Eye và :wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"}. Khác với biến thể faction, ở đây **không bắt buộc khoá keystone Balance of Power** — chiến lược này ăn theo Monster Rarity + Abyssal steal chung, không cần lock Ulaman hay Amanamu, nên tránh được luôn cái bug chặn questline Abyss của ba option đầu Balance of Power.

Nơi thật sự gánh chiến lược là **cụm Monster Rarity và rare monster trên atlas chính**: mọi node tăng số rare monster, magic pack size, và rarity of monster đều feed thẳng vào chất lượng Abyssal trồi lên. Đây là khoản point đáng dồn trước cả Abyss subtree nếu phải chọn.

Master assignment khép vòng Fracturing Orb: **Doryani** mở bằng dọn :wiki-link{url="https://www.poe2wiki.net/wiki/Corrupted_Nexus"} lần đầu, và node **Volatile Connection** của ổng cho 15% chance map hoá Cleansed hoặc Corrupted area. Cleansed area chính là nơi Fracturing Orb rớt sau khi đã có node **Hidden Scars** — nên cùng một map vừa farm Abyss vừa tự refill orb để fracture waystone. **Hilda** gắn **Breeding Season** (thêm rare monster + monster mod) cộng thẳng vào Monster Rarity của map. Vòng farm fracturing orb đầy đủ mình viết ở [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain); cây atlas tổng thể ở [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree).

### Tablets & Map Device

Loadout 3 slot cho waystone 6-mod:

- **1 Abyss Tablet** roll trúng `of Dark Power` (20-30% increased chance Abyssal monster có Abyssal Modifier) — đây là tablet đáng săn nhất, nhân đúng khâu cuối chuỗi steal. Hạng hai trên cùng tablet là `of Ossification` (thêm Desecrated Currency) và `of Champions` (1-2 additional Rare Monster spawn from Abysses, vừa thêm rare cho mình giết vừa thêm Abyssal). Tablet rare giá vài ex, reroll bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} tới khi trúng dòng muốn.
- **1 Precursor Tablet** rare load Item Rarity + Monster Rarity (`of Champions` precursor cho rare monster, `of the Horde` cho thêm monster) — tầng juice chung cho cả map.
- **1 slot tuỳ map**: thêm Abyss Tablet thứ hai để cộng dồn số abyss, hoặc một mechanic khác đang allocate trên atlas.

Tower (Precursor Tower) là map area mình chạy để mở tầm nhìn atlas và rớt tablet, không phải nơi cắm tablet — tablet cắm vào Map Device.

### Waystone và cách craft bằng omen với Fracturing Orb

Baseline là waystone T15 đủ 6 mod để mở 3 slot tablet, alch rồi exalt cho đủ. Nhưng phần này có một hiểu lầm phổ biến phải nói thẳng: **ở 0.5 các omen "Chaotic" đã bị đảo nghĩa, chúng không còn ép rarity lên waystone nữa.** Patch note 0.5.0 ghi rõ functionality của Omen of Chaotic Rarity, Chaotic Quantity và Chaotic Monsters đã bị inverted — thay vì guarantee mod thuộc loại đó, giờ chúng *ngăn* mod thuộc loại đó xuất hiện. Tức là:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chaotic_Rarity"} → Chaos Orb thay hết mod bằng mod KHÔNG grant Item Rarity
- Omen of Chaotic Monsters → mod KHÔNG grant Monster Rarity
- :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chaotic_Effectiveness"} (mới) → mod KHÔNG grant Monster Effectiveness

Không còn omen nào "ép" Item Rarity hay Monster Rarity nữa, nên rarity với monster rarity phải lấy từ atlas và tablet như trên, không phải từ omen. Omen Chaotic giờ dùng theo kiểu lọc: build mỏng máu chạy map juice dễ ăn one-shot thì Chaos waystone kèm Omen of Chaotic Effectiveness để loại sạch mod Monster Effectiveness — Monster Effectiveness cho quái thêm Toughness, XP và item quantity nhưng cũng làm Abyssal lì và đau hơn, nên cắt nó là cách giữ map juice mà bớt nguy hiểm. Omen này rẻ, ~21 ex tính đến 2026-06-18.

Tầng đắt là Fracturing Orb. Cơ chế: *"Fracture a random modifier on a rare item with at least 4 modifiers, locking it in place. Cannot be used on Fractured items."* Waystone là rare item, đủ 4 mod là fracture được. Vì fracture chọn mod ngẫu nhiên và không có omen nào lái nó, cách kiểm soát duy nhất là **làm cho mọi mod đang có trên waystone đều là mod mình hài lòng khi bị khoá trước khi fracture**: alch xuống đúng 4 mod toàn loại tốt (Item Rarity, Monster Rarity, Quantity, Pack Size), fracture để khoá ngẫu nhiên một trong số đó, rồi exalt lên 6 mod — mod đã fracture sống sót qua mọi lần craft sau, kể cả khi Chaos reroll phần còn lại để dọn mod nguy hiểm.

Vấn đề là kinh tế. Fracturing Orb đang ~719 ex (~3,8 div) tính đến 2026-06-18, mà waystone tiêu hao một lần khi vào map. Fracture mọi waystone là đốt tiền: chỉ fracture run juice nhất, khi đã có Abyss Tablet `of Dark Power` và atlas Monster Rarity đầy đủ, để mod khoá thật sự đẩy giá trị map đó vượt 3,8 div. Phần lớn map nền cứ alch-exalt-chạy bình thường, để dành orb. Use case "đi trong map" hợp lý nhất là vòng tự nuôi: cùng atlas Doryani vừa farm Abyss vừa nhặt Fracturing Orb từ Cleansed area, nên orb dùng để fracture là orb farm ra, không phải orb mua.

### Build Requirements

Build cần đứng nổi map T15 6-mod đông quái và xé được rare nhanh, vì Monster Rarity cao đồng nghĩa Abyssal trồi lên cũng cướp được mod nguy hiểm của rare. Ngưỡng thực tế: ~3-5M single-target DPS để dọn rare Abyssal trong 2-3 giây, EHP ≥10k, và chaos res ≥50% vì Abyssal nhả nhiều chaos cộng độc. Build evasion thuần ngưỡng chaos thấp chết rất nhanh khi map juice nặng. League-start chạy được bản nền T10 monster-rarity nhẹ; bản full juice + fracture là content giữa league khi build đã chốt.

## Gameplay

Vào map chạy theo layout, kích hoạt pit khi nó hiện. Pit đóng dần khi mình giết quái thường quanh miệng — đây là khâu quyết định chất Abyssal, nên **kéo rare monster về sát miệng pit rồi mới giết**, đừng dọn rare ở xa rồi mới tới pit. Càng nhiều rare ngã gần pit, con Abyssal trồi lên càng cướp được nhiều mod ngon. Giết hết bầy Abyssal để đóng pit hẳn; chỉ pit đóng hẳn mới có chance nhả Abyssal Trove chứa Ancient Bone, và abyss cuối vùng mới có chance mở :wiki-link{url="https://www.poe2wiki.net/wiki/Abyssal_Depths"} cho omen hiếm cùng Lineage Support. Abyss omen không rớt dưới area level 65, nên chạy T8 trở lên.

Nguồn lãi lớn nhất nhặt từ sàn chứ không phải currency rơi thẳng: rare item Abyssal có ilvl cao, nhặt amulet/ring/belt/jewel/weapon ilvl 80+ rồi craft bằng chính Ancient Bone vừa rớt. Filter loot phải hiện rõ các base này, bỏ qua là cắt phần lớn thu nhập. Nếu map này có Cleansed area (do Volatile Connection), tạt qua dọn để nhặt Fracturing Orb cho lần fracture waystone sau.

## Loot Breakdown & Economic Analysis

$$
\text{profit/map} = \text{Ancient Bone} + \text{omen} + \text{rare item craft} - \text{cost/map} - (\text{Fracturing Orb nếu fracture})
$$

Giá pull từ poe2scout ngày 2026-06-18, quy đổi 1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} = 189 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}.

**Ancient Bone là lớp đắt và ổn định nhất**, và đây là lớp `of Dark Power` cộng `of Ossification` đẩy lên trực tiếp. Ancient Collarbone (desecrate amulet/ring/belt) ~3.182 ex (~16,8 div) nhưng volume cực mỏng, chỉ 271 listing — khó bán bulk, phải list lẻ. Ancient Jawbone (weapon) ~1.787 ex (~9,5 div, volume khá 35,9k). Ancient Rib (armour) ~692 ex (~3,7 div, volume 39,8k) là loại rớt dày bán được đều nhất. Một map juice đàng hoàng cho ~1-2 bone đủ loại.

**Omen là lớp volume cao**: Omen of Abyssal Echoes ~66 ex (~0,35 div) nhưng turnover khổng lồ (~562k/ngày), là dòng tiền chảy đều nhất; :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Light"} ~1.405 ex (~7,4 div) hiếm hơn nhưng cộng cú lớn khi rớt. Rare item nhặt lên craft bằng bone là lớp thứ ba, biến thiên theo base trúng.

Cost nền cực nhẹ: Abyss Tablet rare ~5-15 ex, Precursor rare ~5-15 ex, waystone alch vài ex, Omen of Chaotic Effectiveness ~21 ex nếu dùng. Tổng ~15-50 ex/map (~0,1-0,27 div). Ráp lại, **nền không fracture ~3-5 div/map** tính đến 2026-06-18, throughput ~6-10 map/giờ tuỳ clear speed.

Tầng fracture đổi hẳn phép tính: thêm ~3,8 div chi phí cho mỗi waystone fracture, nên nó chỉ dương khi mod khoá (Item Rarity hoặc Monster Rarity top) đẩy giá trị đúng map đó vượt ngưỡng đó — đúng với run đã full `of Dark Power` + atlas Monster Rarity, sai với map nền. Coi nó là canh bạc variance cao đặt lên nền, không phải hệ số nhân áp lên mọi map.

Phần Heart of the Well và kinh tế Rogue Exile mình tách sang [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) để không lặp — strategy này không bắt buộc chain exile, nó tối ưu cho chuỗi steal + bone.

## Failure Modes

Thị trường đang ở phase giá Fracturing Orb leo dốc (~82 ex ngày 06-11 lên ~719 ex ngày 06-18, +203% trong 7 ngày), nên kinh tế tầng fracture rất nhạy: orb càng đắt thì ngưỡng break-even mỗi waystone càng cao. Nền farm bone + omen thì an toàn hơn nhiều vì không phụ thuộc orb.

**Bẫy chi phí Fracturing Orb là rủi ro lớn nhất.** Ở ~3,8 div/orb đốt cho một waystone tiêu hao một lần, fracture mọi map là đường nhanh nhất để âm vốn dù vẫn thấy bone rớt. Fracture chỉ đáng cho run juice nhất; ai fracture theo thói quen sẽ lỗ phần lớn orb mà không nhận ra vì lãi bone che mất.

**Fracture ngẫu nhiên brick waystone.** Orb khoá mod ngẫu nhiên, không chọn được. Còn mod rác trên waystone lúc fracture là có nguy cơ khoá luôn nó, hỏng cả lần fracture lẫn orb. Phải đưa waystone về 4 mod toàn loại tốt trước khi fracture, không tắt bước này.

**Monster Rarity cao quay lại cắn build.** Đây là strategy duy nhất chủ động đẩy Monster Rarity lên trần, mà Abyssal cướp luôn mod nguy hiểm của rare nó steal. Build dưới 50% chaos res hoặc EHP mỏng sẽ chết bởi chính cái juice mình stack — không phải DPS yếu là chết mà thủ yếu là chết.

**Hiểu lầm omen Chaotic làm phí currency.** Nhiều người vẫn nghĩ Omen of Chaotic Rarity ép rarity lên waystone như trước; ở 0.5 nó làm ngược lại. Dùng nhầm là tự xoá rarity khỏi waystone. Rarity nguồn duy nhất giờ là atlas + tablet.

**Không có Hidden Scars thì không có orb.** Fracturing Orb bị gate cứng sau node atlas Hidden Scars (questline Doryani) — không lấy node thì cả tầng fracture lẫn vòng tự nuôi orb đều không tồn tại, chạy nền thuần thôi.

**Sustain tablet và thanh khoản bone.** Abyss Tablet `of Dark Power` không phải lúc nào cũng roll ra, cần buffer tablet rare để reroll; và Ancient Collarbone volume chỉ 271 listing nên không dump bulk được, phải list lẻ và chấp nhận bán chậm.

## Profit Optimization

Min-max nằm ở thứ tự ưu tiên Monster Rarity hơn mọi stat khác: cùng số point atlas, dồn rare monster + magic pack size cho lãi nhiều hơn dồn Item Rarity, vì rarity chỉ nhân drop còn rare monster nhân cả chuỗi steal. Trên Abyss Tablet, reroll tới `of Dark Power` rồi mới tính các dòng khác — một tablet trúng dòng này hơn hẳn hai tablet thường.

Khi quyết fracture, chỉ fracture sau khi đã cắm `of Dark Power` và atlas Monster Rarity đầy đủ, để mod khoá đặt lên nền juice cao nhất. Bán bone qua Currency Exchange status securable cho thanh khoản với Rib/Jawbone volume dày; Collarbone list lẻ. Omen of Abyssal Echoes bán bulk được vì turnover lớn.

## Alternatives & Variations

Bản nền không fracture là điểm vào: T10+, 1 Abyss Tablet rare, atlas Monster Rarity nhẹ, lãi ~2-3 div/map, vốn vài chục ex — chạy được sớm và không cần Hidden Scars.

Ai muốn nguồn lãi khác từ cùng Abyss thì xem [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm): doc đó khoá faction qua Balance of Power, ăn Currency Chest và chuỗi Rogue Exile cho Heart of the Well, đánh đổi là dính bug questline và phải lock faction. Strategy này ngược lại, không lock faction, tối ưu thuần cho Abyssal Modifier + bone, và thêm tầng fracture waystone. Chọn một hướng mỗi session, không vận hành song song được vì cùng tốn slot tablet và point atlas. Fracturing Orb farm ra cũng có thể chuyển hẳn sang craft gear bán thay vì fracture waystone — khi orb đắt như hiện tại, bán orb hoặc craft gear thường dương hơn fracture map, nên cân nhắc trước mỗi run.

## Quick Reference Card

**Setup cost / map:** nền ~15-50 ex (3 tablet + waystone + omen lọc); tầng fracture +~3,8 div/waystone (giá 2026-06-18)  
**Profit / map:** nền ~3-5 div (Ancient Bone + omen + rare craft) tính đến 2026-06-18  
**Time / map:** ~5-8 phút (gom hết pit + kéo rare về pit + nhặt rare base ngon)  
**Waystone / map:** T15 6-mod; build mỏng dùng Chaos + Omen of Chaotic Effectiveness lọc Monster Effectiveness; run juice nhất mới fracture mod premium  
**Atlas key nodes:** Monster Rarity + rare monster cluster (ưu tiên số một) · Abyss subtree (Lord of the Pit, Stir the Swarm, Sprawling Rupture, Vile Treasures) · Hidden Scars (gate Fracturing Orb)  
**Masters:** Doryani → Volatile Connection (Cleansed area = nguồn Fracturing Orb) · Hilda → Breeding Season (thêm rare monster)  
**Tablets:** Abyss Tablet `of Dark Power` (ưu tiên) / `of Ossification` / `of Champions` + Precursor rarity + slot tuỳ map  
**Key drops:** Ancient Collarbone/Jawbone/Rib · Omen of Abyssal Echoes · Omen of Light · Lineage Support · rare item base ngon  
**Cảnh báo:** omen Chaotic giờ LOẠI rarity chứ không ép; fracture chỉ run juice nhất; Monster Rarity cao đòi chaos res ≥50%

## Changelog

### 2026-06-18
- Initial draft. Cơ chế Abyssal steal + pool affix Abyss Tablet (`of Dark Power`, `of Ossification`, `of Champions`...) verify từ poe2db.tw live 2026-06-18; omen inversion verify từ patch note 0.5.0 + poedb Omen list; Fracturing Orb mechanic + gate Hidden Scars verify từ poedb + doc atlas nội bộ. Giá pull live poe2scout 2026-06-18 (1 div = 189 ex): Fracturing Orb 719 ex, Omen of Chaotic Effectiveness 21 ex, Ancient Collarbone 3.182 ex, Jawbone 1.787 ex, Rib 692 ex, Omen of Light 1.405 ex, Omen of Abyssal Echoes 66 ex.

## Relationships

- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — cùng farm Abyss nhưng khoá faction qua Balance of Power cho Currency Chest + Heart of the Well; doc này không lock faction, tối ưu thuần chuỗi Abyssal Modifier + bone + fracture waystone.
- **related_guides** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) — vòng farm Fracturing Orb (Hidden Scars, Cleansed area, Doryani nexus) khép đúng tầng fracture của strategy này.
- **related_guides** [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree) — vị trí Abyss subtree, Monster Rarity cluster, master Doryani/Hilda dùng ở đây.
- **related_mechanics** [Heart of the Well](/guides/heart-of-the-well) — jackpot của biến thể faction, nhắc tới khi so sánh nguồn lãi; strategy này không phụ thuộc nó.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league system 0.5 (Abyss revamp, Atlas Cracks, specialization gating) là nền của strategy.
