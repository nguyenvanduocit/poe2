---
template: templates/farming-template.md
document_type: farming-strategy
title: Abyss Monster Rarity và Fractured Waystone Farm
status: active
created: '2026-06-18'
updated: '2026-06-23'
strategy_tier: A
investment_tier: Variable
league: '0.5'
patch: 0.5.3
league_phase: Mid
confidence_level: Medium
---

# Abyss Monster Rarity và Fractured Waystone Farm

Farm :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss"} tối ưu hoá cơ chế steal của 0.5: quái rare ngã gần miệng pit thì Abyssal trồi lên cũng thành rare và cướp được nhiều modifier hơn, nên Monster Rarity mới là stat đầu kéo cả guồng, không phải Item Rarity. Lãi đến từ Ancient Bone, omen và rare item nhặt lên craft, nhân lên bằng Abyss Tablet roll trúng `of Dark Power`. Patch 0.5.3 thêm sàn currency dự đoán được: Tasgul, Vandroth và Large Abyssal Trove cuối :wiki-link{url="https://www.poe2wiki.net/wiki/Abyssal_Depths"} luôn rơi Desecrated Currency. Tier A, investment Variable — nền không fracture chạy được từ T10, lãi ~1,5-2,5 div/map (giá 2026-06-19); tầng :wiki-link{url="https://www.poe2wiki.net/wiki/Fracturing_Orb"} là canh bạc đắt chỉ đáng cho run juice nhất.

## Strategy Overview

Cơ chế quyết định toàn bộ chiến lược: *"the rarity of the monsters spawned depends on the rarity of the slain weakened monsters and the emerging Abyssal will steal some or all of the modifiers from them. Any of the modifiers stolen by Rare Abyssal can be upgraded to Abyssal Modifiers."* Giết bầy magic loãng thì Abyssal ra magic nghèo mod; giết bầy rare dày thì Abyssal cướp được nhiều mod ngon, các mod mới có cơ hội nâng lên Abyssal Modifier hoặc Lichborn Modifier. Monster Rarity là stat farm số một ở đây — khác hẳn mọi strategy khác coi rarity với pack size ngang hàng.

:wiki-link{url="https://www.poe2wiki.net/wiki/Abyss_Tablet"} có hai dòng affix đánh thẳng vào pipeline: `of Dark Power` cho 20-30% increased chance Abyssal monster có Abyssal Modifier, và `of Ossification` cho 20-30% increased chance ra Desecrated Currency từ Abyss. Hai dòng này khuếch đại đúng khâu cuối chuỗi steal, nên một tablet roll trúng `of Dark Power` hơn hẳn tablet chỉ thêm số lượng abyss. Item Rarity vẫn lấy nhưng chỉ scale drop chung, không đụng vào cái lõi steal.

Tầng thứ ba là tuỳ chọn và đắt: dùng Fracturing Orb khoá một mod premium (Item Rarity hoặc Monster Rarity cao) lên waystone trước khi chạy, rồi reroll phần còn lại mà không mất mod đã khoá. Vòng farm atlas Doryani tự nhả Fracturing Orb từ Cleansed area, nên orb dùng là orb farm ra, không phải mua.

## Setup

### Atlas Passive Tree

Vào Abyss subtree dồn số lượng pit và monster: **Lord of the Pit** rải pit khắp vùng có abyss, **Stir the Swarm** cho map thêm một abyss, **Sprawling Rupture** cho abyss spawn thêm monster, **Vile Treasures** tăng chance ra Abyss Omen, Abyssal Eye và :wiki-link{url="https://www.poe2wiki.net/wiki/Lineage_Support"}. Không cần khoá keystone Balance of Power — strategy này ăn theo Monster Rarity + Abyssal steal chung, tránh được bug chặn questline Abyss của ba option đầu Balance of Power.

Cụm Monster Rarity và rare monster trên atlas chính mới gánh chiến lược: mọi node tăng số rare monster, magic pack size, và rarity of monster đều feed thẳng vào chất lượng Abyssal trồi lên — khoản point đáng dồn trước cả Abyss subtree.

**Close to the Surface** (0.5.3): cộng thêm Abyssal Depths +25% Abyssal mod / +25% Lichborn mod / +4% pack size từ Abyss Tablet — lấy. **Hidden Scars** gate Fracturing Orb; không lấy node này thì cả tầng fracture và vòng tự nuôi orb đều không tồn tại.

### Masters of the Atlas

**Doryani** mở bằng dọn Corrupted Nexus lần đầu; node **Volatile Connection** cho 15% chance map hoá Cleansed hoặc Corrupted area — Cleansed area là nơi Fracturing Orb rớt (sau khi có Hidden Scars). **Hilda** gắn **Breeding Season** (thêm rare monster + monster mod) cộng thẳng vào Monster Rarity của map.

### Tablets & Map Device

Loadout 3 slot cho waystone 6-mod:

- **1 Abyss Tablet** roll trúng `of Dark Power` (20-30% increased chance Abyssal monster có Abyssal Modifier) — [trade](https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Abyss%20Tablet%22%2C%22stats%22%3A%5B%7B%22type%22%3A%22and%22%2C%22filters%22%3A%5B%7B%22id%22%3A%22explicit.stat_2789248444%22%2C%22value%22%3A%7B%22min%22%3A1%7D%7D%5D%7D%5D%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D) — tablet đáng săn nhất. Hạng hai trên cùng tablet: `of Ossification` (thêm Desecrated Currency) và `of Champions` (1-2 additional Rare Monster spawn from Abysses). Tablet rare giá vài ex, reroll bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Orb"} tới khi trúng dòng muốn.
- **1 Precursor Tablet** rare load Item Rarity + Monster Rarity — tầng juice chung cho cả map.
- **1 slot tuỳ map**: thêm Abyss Tablet thứ hai, hoặc một mechanic khác đang allocate trên atlas.

### Waystone và Fracturing Orb

Baseline: waystone T15 6-mod, alch rồi exalt. **Ở 0.5 các omen "Chaotic" đã bị đảo nghĩa — chúng không còn ép rarity lên waystone nữa.** Patch note 0.5.0: :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chaotic_Rarity"} → Chaos Orb thay hết mod bằng mod KHÔNG grant Item Rarity; :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Chaotic_Effectiveness"} → mod KHÔNG grant Monster Effectiveness. Rarity nguồn duy nhất giờ là atlas + tablet. Omen of Chaotic Effectiveness (~21 ex, 2026-06-18) hữu dụng theo kiểu lọc: cắt Monster Effectiveness khỏi map juice để bớt nguy hiểm mà giữ lãi.

Tầng Fracturing Orb: cơ chế khoá mod ngẫu nhiên trên rare item ≥4 mod. Để kiểm soát kết quả, đưa waystone về đúng 4 mod toàn loại tốt (Item Rarity, Monster Rarity, Quantity, Pack Size) trước khi fracture — mod đã khoá sống sót qua mọi lần Chaos reroll sau. Orb đang ~719 ex (~3,8 div) tính đến 2026-06-18; fracture chỉ đáng cho run đã có Abyss Tablet `of Dark Power` và atlas Monster Rarity đầy đủ.

### Build Requirements

Ngưỡng thực tế: ~3-5M single-target DPS dọn rare Abyssal trong 2-3 giây, EHP ≥10k, chaos res ≥50% vì Abyssal nhả nhiều chaos cộng độc. Build evasion thuần ngưỡng chaos thấp chết rất nhanh khi map juice nặng. Nền T10 monster-rarity nhẹ chạy được từ league-start; bản full juice + fracture là content giữa league khi build đã chốt.

## Gameplay

Kéo rare monster về sát miệng pit rồi mới giết — đừng dọn rare ở xa rồi mới tới pit. Càng nhiều rare ngã gần pit, Abyssal trồi lên càng cướp được nhiều mod ngon. Giết hết bầy Abyssal để đóng pit hẳn; chỉ pit đóng hẳn mới nhả Abyssal Trove chứa Ancient Bone, và abyss cuối vùng mới mở Abyssal Depths cho omen hiếm cùng Lineage Support. Abyss omen không rớt dưới area level 65, nên chạy T8 trở lên.

Lớp sàn Desecrated 0.5.3 thu đủ mỗi map: Tasgul và Vandroth luôn rớt Desecrated Currency; Large Abyssal Trove cuối Depths luôn chứa Desecrated; Vessel of Kulemak có chance thêm Ancient Jawbone/Rib/Collarbone. Nguồn lãi lớn nhất vẫn là rare item Abyssal ilvl cao — nhặt amulet/ring/belt/jewel/weapon ilvl 80+ rồi craft bằng Ancient Bone vừa rớt; bỏ qua là cắt phần lớn thu nhập. Grip of Kulemak unique ring (13 Abyssal Wasting Modifier mới ở 0.5.3) bản 5-6 mod còn chưa flood thì bán div, bản floor 1 ex thì vendor. Nếu map có Cleansed area (Volatile Connection), tạt qua nhặt Fracturing Orb cho lần fracture sau.

## Loot Breakdown & Economic Analysis

Giá poe2scout ngày **2026-06-19** (patch 0.5.3, market shuffling), 1 :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} ≈ 191 :wiki-link{url="https://www.poe2wiki.net/wiki/Exalted_Orb"}.

Ancient Bone sụp giá 55-68% trong 7 ngày sát patch do market pre-price guaranteed Desecrated từ 0.5.3: Ancient Collarbone **478 ex** (~2,5 div, volume 5.227, Δ7d -68,5%), Ancient Jawbone **429 ex** (~2,25 div, volume 6.552, Δ7d -55%), Ancient Rib **160 ex** (~0,84 div, volume 5.809, Δ7d -64%). Preserved Cranium (desecrate jewel) leo lên **277 ex** (~1,45 div, Δ7d +179%) vì jewel base hiếm. Một map juice đàng hoàng cho ~1-2 bone đủ loại.

Omen của Abyssal Echoes **66 ex** (~0,35 div, turnover ~597k/ngày) là dòng tiền chảy đều nhất; :wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Light"} **1.405 ex** (~7,35 div, Δ7d +63%) hiếm hơn nhưng cú lớn khi rớt. Omen of the Sovereign **2,54 ex** (faction guarantee suffix), Liege và Blackblooded tương đương. Rare item nhặt lên craft bằng bone là lớp thứ ba, biến thiên theo base trúng.

Cost nền: Abyss Tablet rare ~5-15 ex, Precursor rare ~5-15 ex, waystone alch vài ex, Omen of Chaotic Effectiveness 21 ex nếu dùng — tổng ~15-50 ex/map (~0,08-0,27 div). **Nền không fracture ~1,5-2,5 div/map** (giảm từ ~3-5 div mốc 06-18 do Bone sụp), bù lại sàn guaranteed Desecrated đều đặn hơn. Throughput ~6-10 map/giờ tuỳ clear speed.

Tầng fracture thêm ~3,8 div chi phí mỗi waystone (Fracturing Orb 719 ex, ổn định 06-18/06-19) — chỉ dương khi mod khoá đẩy giá trị đúng map đó vượt ngưỡng đó; đúng với run đã full `of Dark Power` + atlas Monster Rarity, sai với map nền.

## Failure Modes

- **Bẫy chi phí Fracturing Orb.** ~3,8 div/orb đốt cho waystone tiêu hao một lần; fracture mọi map là đường nhanh nhất âm vốn dù vẫn thấy bone rớt. Thị trường orb leo từ ~82 ex (06-11) lên ~719 ex (06-18, +203% 7 ngày) — ngưỡng break-even rất nhạy. Fracture chỉ run juice nhất; nền bone + omen an toàn hơn nhiều vì không phụ thuộc orb.
- **Fracture ngẫu nhiên brick waystone.** Orb khoá mod ngẫu nhiên; còn mod rác lúc fracture là khoá luôn nó. Phải đưa waystone về 4 mod toàn loại tốt trước khi fracture — không bỏ bước này.
- **Monster Rarity cao quay lại cắn build.** Abyssal cướp luôn mod nguy hiểm của rare nó steal. Build dưới 50% chaos res hoặc EHP mỏng chết bởi chính cái juice mình stack — thủ yếu là chết, không phải DPS yếu.
- **Hiểu lầm omen Chaotic làm phí currency.** Omen of Chaotic Rarity ở 0.5 làm ngược lại: tự xoá rarity khỏi waystone. Rarity nguồn duy nhất giờ là atlas + tablet.
- **Không có Hidden Scars thì không có orb.** Fracturing Orb gate cứng sau node atlas Hidden Scars (questline Doryani) — không lấy node thì cả tầng fracture lẫn vòng tự nuôi orb không tồn tại. Ancient Collarbone volume chỉ 271 listing nên không dump bulk được, phải list lẻ chấp nhận bán chậm.

## Version History

- **0.5.3 (2026-06-19)** — Vessel of Kulemak có chance rớt Ancient Jawbone/Rib/Collarbone. Tasgul và Vandroth luôn rớt Desecrated Currency. Large Abyssal Trove cuối Abyssal Depths luôn chứa Desecrated. Close to the Surface keystone cộng Abyssal Depths +25% Abyssal mod / +25% Lichborn mod / +4% pack size từ Abyss Tablet. 13 Abyssal Wasting Modifier mới cho Grip of Kulemak; mod Desecrated cũ gộp/đôn/disable, existing items dùng Divine để update. Re-derive lãi: Ancient Bone Δ7d -55% tới -68%, nền ~1,5-2,5 div/map (giảm từ ~3-5 div mốc 06-18), bù lại sàn guaranteed Desecrated dự đoán được.
- **2026-06-18** — Initial draft (patch 0.5.1). Cơ chế Abyssal steal + pool affix Abyss Tablet (`of Dark Power`, `of Ossification`, `of Champions`) verify từ poe2db.tw; omen inversion verify từ patch note 0.5.0 + poedb Omen list; Fracturing Orb mechanic + gate Hidden Scars verify từ poedb + doc atlas nội bộ.

## Relationships

- **competes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) — cùng farm Abyss nhưng khoá faction qua Balance of Power cho Currency Chest + Heart of the Well; doc này không lock faction, tối ưu thuần chuỗi Abyssal Modifier + bone + fracture waystone.
- **related_guides** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) — vòng farm Fracturing Orb (Hidden Scars, Cleansed area, Doryani nexus) khép đúng tầng fracture của strategy này.
- **related_guides** [Atlas passive tree gồm những gì](/guides/0-5-atlas-passive-tree) — vị trí Abyss subtree, Monster Rarity cluster, master Doryani/Hilda dùng ở đây.
- **related_mechanics** [Heart of the Well](/guides/heart-of-the-well) — jackpot của biến thể faction, nhắc tới khi so sánh nguồn lãi; strategy này không phụ thuộc nó.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league system 0.5 (Abyss revamp, Atlas Cracks, specialization gating) là nền của strategy.
