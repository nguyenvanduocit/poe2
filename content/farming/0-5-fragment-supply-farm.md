---
template: templates/farming-template.md
document_type: farming-strategy
title: Fragment Supply Farming
status: draft
created: '2026-06-11'
updated: '2026-06-12'
strategy_tier: A
investment_tier: Low
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Fragment Supply Farming

Đứng phía cung của thị trường fragment 0.5: farm content gốc nhả fragment ra rồi bán cho đám boss-rusher đang đập :wiki-link{url="https://www.poe2wiki.net/wiki/Breachstone"}, gom :wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Cradle"}/:wiki-link{url="https://www.poe2wiki.net/wiki/Origin_Spark"} mở Arbiter of Divinity, hay nhồi :wiki-link{url="https://www.poe2wiki.net/wiki/Simulacrum_Splinter"} vào Realmgate. Boss-rush ăn margin nhanh nhưng phụ thuộc giá fragment đầu vào. Cung side ăn chậm hơn nhưng đứng vững khi rusher ngừng đập. Tier A, investment Low, ~6.5-8.5 div/giờ trong cửa sổ sóng Faded Crisis hiện tại và ~4-6 div/giờ baseline với build companion pack Spirit Walker (poe2scout 2026-06-11, 1 Divine = 124 Exalted Orb). Bài này là mặt ngược của [Boss Rush Fragment Farming](/farming/0-5-boss-rush-fragment-farm): bài kia mua fragment đập, bài này farm fragment bán.

## Strategy Overview

0.5 endgame có sáu nguồn fragment độc lập, mỗi nguồn nối một mechanic gốc với một pinnacle boss phía người mua. Bức tranh hai track pinnacle đứng sau (Crisis mở Arbiter of Ash, Origin mở Arbiter of Divinity) nằm trong [Return of the Ancients](/mechanics/leagues/return-of-the-ancients); doc này chỉ quan tâm chỗ nào nhả fragment và bán được giá nào. Cung side chọn nguồn có ratio (giá fragment) / (thời gian farm + cost juice) cao nhất ở mỗi thời điểm.

Nguồn **Breach** dày nhất. Release notes 0.5.0 viết nguyên văn: "Killing monsters in a Breach now drops Hiveblood and Wombgifts and Breachstone Splinters" và "Breachstone splinters turn into a special wombgift when fully stacked. This can be turned in at the Genesis Tree to create a Breachstone." Mỗi map cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Precursor_Tablet"} là ăn ít nhất một Breach guarantee; full atlas Breach subtree đẩy lên 3-5 Breach/map. Khi Breach stabilise thì :wiki-link{url="https://www.poe2wiki.net/wiki/Vruun,_Marshal_of_Xesht"} spawn, encounter boss mới của Stabilised Breach, thêm một cục drop lớn cuối Breach. Đường ra Breachstone đi qua splinter: splinter đầy stack tự gộp thành một special wombgift, đem turn in ở Genesis Tree lấy Breachstone — giá poe2scout 2026-06-11 trung bình 56 ex (~0.45 div) mỗi cuốn, vol 16k/ngày, Δ7d +11%. Wombgift thường và Hiveblood không đi vào Breachstone; chúng là nguyên liệu craft riêng của Genesis Tree, thành dòng tiền phụ của session Breach. Ring/amulet/belt base mới chỉ craft được ở đây, và Catalyst giờ cũng vậy (nguyên văn release notes: "Catalysts can no longer drop from Monsters, these are now solely obtained from the Genesis Tree"). Breach Splinter raw bán bulk được 0.127 ex/cái nhưng ratio rất xấu, nên đường có lãi là gom đủ stack convert thành Breachstone rồi bán cuốn.

Nguồn **Citadel mới** đắt nhất. Release notes: "Added two new Citadel maps with two new bosses that drop keys to the new Pinnacle Boss". Hai map đó nhả Origin Cradle (362 ex avg, ~2.92 div) hoặc Origin Spark (292 ex avg, ~2.35 div). Cả pair chênh nhau ~25% phản ánh asymmetric drop rate hoặc boss khó khác nhau — chợ định giá Cradle cao hơn nghĩa là boss Cradle hiếm gặp hơn hoặc nhả ít hơn. Hợp với build có boss DPS đủ đập Citadel boss trong 60-90 giây.

Nguồn **Crisis Fragment** (citadel cũ → Arbiter of Ash) đang vào sóng đầu cơ. Faded Crisis từ Jamanra @ Copper Citadel có giá avg 290 ex (~2.34 div), Δ7d **+237%** — boss-rusher đang gom mở pinnacle. Hai cuốn kia (Weathered từ Doryani, Ancient từ Geonor) ngược chiều: Weathered 99 ex (-20% 7d), Ancient 58 ex (-20% 7d). Asymmetric vì pinnacle chain cần đúng 1 Faded + 1 Weathered + 1 Ancient, ai gom được cả ba bộ thì dư Weathered/Ancient phải bán rẻ. Cung side chỉ farm Copper Citadel (Jamanra), bỏ qua hai cái còn lại — đang lệch giá nên specialise vào cuốn đắt nhất.

Nguồn **Delirium splinter** thanh khoản dày nhất. Simulacrum Splinter 1.92 ex avg, Δ7d +50%, vol 514k/ngày — bán bao nhiêu cũng có người mua. Farm cụm map quanh hub :wiki-link{url="https://www.poe2wiki.net/wiki/The_Withered_Willow"} (Delirium hub mặc định) gom splinter nền dày, đỉnh là tự hoàn thành Simulacrum 7-wave (release note: "Simulacrum has been updated, and is now a 7-wave encounter" + "Completing a Simulacrum will now give you a key to face the new Delirium Pinnacle Boss") để nhả key 620 ex (~5 div). Build floor cao hơn Breach/Citadel.

Hai nguồn bỏ qua. Abyssal boss nhả :wiki-link{url="https://www.poe2wiki.net/wiki/Kulemak's_Invitation"} 8 ex (~0.06 div), quá thấp; thời gian Abyss → Well of Souls không trả nổi giá đó. Ai đang chạy [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm) thì coi Invitation là đồ nhặt thêm trên đường, không phải mục tiêu farm. Còn An Audience with the King là drop từ Ritual tribute sacrifice (nguyên văn: "Any tribute not spent on rewards can now be sacrificed to gain an Audience with the King"), không list được trên chợ chính, nên cung Audience không phải con đường bán. Ai farm Ritual song song thì tự dùng Audience đập King lấy Head of the King mà bán (167 ex avg, ~1.35 div).

## Cung-cầu coupling và time-window

Giá fragment không độc lập với meta. Khi build boss-rush viral (như tuần này), giá Breachstone leo từ 22 ex (02/06) lên 56 ex (11/06) — +154% trong 9 ngày — vì rusher mua sạch chợ. Bên cung hưởng lợi trực tiếp: cùng một map farm, output bán được gấp đôi. Nhưng đây không phải tăng trưởng bền vững; khi rusher đủ stock hoặc chuyển strategy thì giá rớt nhanh không kém. Faded Crisis +237% 7d là cùng pattern, sớm vài tuần — đoán fade trong 2-3 tuần khi pool rusher cạn key.

Quy tắc cung side: theo dõi Δ7d trên poe2scout. Δ7d > +50% là sóng cầu, chuyển sang farm nguồn đó ngay, bán trong cửa sổ ngắn. Δ7d < -10% là pool saturated, swap sang nguồn khác. Phần lớn farming strategy set up một lần rồi chạy dài; cung fragment thì phải re-pick nguồn mỗi tuần theo sóng.

## Setup

### Atlas Passive Tree

Strategy này tách theo session: **session Breach** dồn point cho Breach subtree, **session Citadel** dồn cụm notable quanh Powerful Map Boss + waystone drop. Atlas master swap free trước mỗi map nên không lock-in; full atlas Aldur cho 300+ point sau khi xong Fortress quest, đủ giữ cả hai cụm cùng lúc.

Session Breach: full Breach subtree quanh hub The Monastery of the Keepers. Ba node trụ:

- **Shape the Chains** là node chọn Breach Monster Bonus, ba option: "30% increased Effectiveness of Rare Breach Monsters", "Breaches have 20% reduced Pack Size + 20% increased Effectiveness of Breach Monsters", hoặc "Breaches have 15% increased Pack Size". Cung side chọn option pack size: mob nhiều thì splinter và Wombgift rơi nhiều, số splinter/giờ quyết định số Breachstone/giờ.
- **Moment of Risk** nguyên văn: "Wombgifts have 5% chance to drop one Level higher per Explicit Modifier on the Map / Unstable Breaches spawn 2 additional Rare Monsters when Stabilised". Roll waystone 6-mod là +30% chance Wombgift lên level (Wombgift level cao craft Genesis Tree giá trị hơn), kèm 2 rare thêm mỗi lần stabilise.
- **Breeding Program** nguyên văn: "100% increased chance to find selected Wombgifts". Chọn đúng loại Wombgift đang cần cho chuỗi craft Genesis Tree.

Session Citadel: cụm node "Powerful Map Boss" trên atlas chính + node giảm cost reset atlas reveal. Mục tiêu mở càng nhiều Citadel càng tốt; node Master **Head of the Snake** (Doryani's Science tier 4, nguyên văn: "Powerful Map Bosses have 5% chance when defeated to reveal a nearby Citadel") là nguồn Citadel chính của session farm thuần.

Session Crisis Fragment (Faded farm): không cần cụm atlas riêng ngoài những gì session Citadel đã lấy. Giá trị nằm ở waystone roll prefix Waystone Drop Chance, không phải atlas point.

### Tablets & Map Device

Waystone 6-mod mở đủ 3 slot tablet cho ba session đầu; session Delirium chạy nhẹ hơn. Cấu hình theo session:

**Session Breach** cắm 3 :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Precursor_Tablet"} thường (mỗi cuốn ~5-8 ex, 10 uses = ~0.7 ex/map). Breach tablet stack cùng loại: release note 0.5 viết rõ "Tablets of the same type may now be used together to increase the amount of the league content that is spawned" — ba tablet cùng kiểu cộng số Breach trong map. Map ngọt nhất ăn 4-5 Breach. Mod tablet không quan trọng vì base effect làm hết việc; mua bản thường rẻ nhất bulk được. Bản unique :wiki-link{url="https://www.poe2wiki.net/wiki/Wraeclast_Besieged"} cộng "Breaches expand to at least 20 metres in radius" — Breach to thì gom được nhiều mob hơn trước khi đóng, Wombgift drop cao hơn rõ.

**Session Citadel** không cắm tablet vào Citadel run (Citadel là area pinnacle riêng, tablet không áp dụng). Map travel giữa các Citadel cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Overseer_Precursor_Tablet"} (Empowers Map Boss của map) để boss thường trở thành Powerful Map Boss, kích Head of the Snake reveal Citadel.

**Session Crisis** cắm Tower tablet với suffix cộng waystone drop chance, chạy Copper Citadel với waystone roll 6-mod max-juice. Crisis Fragment drop scale theo "increased Waystone Drop Chance" (wiki Crisis_Fragment nguyên văn: "Increases to waystone drop chance (specifically #% increased Waystone Drop Chance stat only) affect the number of fragments that drop"), nên waystone phải roll prefix Waystone Drop, không phải item rarity hay quantity.

**Session Delirium** chỉ cần 1 Delirium tablet rẻ (~1 ex) mỗi map quanh hub Withered Willow; splinter đến từ encounter Delirium nền, không cần juice sâu. Waystone 6-mod chỉ đáng roll khi đang dồn splinter push Simulacrum key.

### Waystone & Map Choice

**Breach session**: bất kỳ biome nào có layout open (Vaal Foundry, Slick, Backwash) — Breach to thì cần không gian. Map mê cung (Mire, Decay) Breach kẹt tường, mob không lùa vào trung tâm.

**Citadel session**: chạy mọi Citadel mới xuất hiện trên atlas. Mỗi Citadel mới có boss riêng, nhả Origin Cradle hoặc Origin Spark tuỳ map. Waystone T15-T16 6-mod, ưu tiên +Waystone Drop Chance: Crisis Fragment đã confirm scale số fragment theo đúng stat này, Origin key nhiều khả năng theo cùng rule, vào league log để xác nhận.

**Crisis session (Copper Citadel)**: waystone T16 6-mod, prefix Waystone Drop Chance tối thiểu +95%, +pack size suffix né nếu build chưa đủ EHP gánh thêm mob density. Skip Stone Citadel và Iron Citadel — Weathered/Ancient giá đang trượt, không bõ thời gian.

### Build Requirements

Spirit Walker companion pack baseline (Lv94, EHP ~12.7k, Zekoa carry):

- **Breach session**: dễ nhất. Vruun khi stabilise có pattern phase quay slam, đứng tránh được; companion pack giết Vruun trong ~60-80 giây. Sàn build cần ~5M boss DPS + 8k EHP. Build dưới sàn vẫn chạy được Breach thường nhưng skip Vruun để đi tiếp map.
- **Citadel session**: trung bình. Boss Citadel mới đập ~60-90 giây với companion pack. Boss Citadel cũ (Jamanra/Doryani/Geonor) đập ~90-120 giây vì có phase di chuyển. Sàn build cần đập Citadel boss trong 2 phút trở xuống, không thì lỗ thời gian.
- **Simulacrum 7-wave (cho session bán key)**: khó nhất. Wave 5-6 spawn cluster rare buff, EHP 12.7k giữ được nếu position xa cụm one-shot; companion pack đủ DPS cho Difficulty 1 nhưng không nổi Diff 2-3. Build zoom (Lightning Spear, Twister) đẩy được Diff 2 — ratio splinter input/key drop tốt hơn.

Faded Crisis sweep với companion pack chậm bằng nửa build zoom: Jamanra phase teleport + attack đa hướng đập ~120 giây/lần, pace ~3-4 Faded/giờ so với 6-8 của build zoom. Chậm nhưng trong cửa sổ sóng hiện tại vẫn là session lãi nhất của chính build này (math chain bên dưới).

## Gameplay

Mở session 2-3 giờ theo một nguồn, không nhảy. Mỗi nguồn cần inventory chuẩn bị khác. Chuyển nguồn giữa session ăn ~10-15 phút setup, lỗ nhịp.

**Session Breach**: vào map, dò Breach tự nhiên (atlas tree + tablet đảm bảo 3-5 cái), chạm Breach hand mở. Lao thẳng vào tâm Breach mở rộng tới khi progress bar gần 100% — không cố đuổi mob ra rìa vòng vì Vruun cần stabilise mới spawn. Stabilise xong, Vruun spawn, dập xong nhặt Wombgift + Hiveblood + splinter. Đi tiếp Breach kế tiếp. Đến cuối map về Realmgate, mở Genesis Tree: splinter đầy stack đã gộp thành special wombgift thì turn in lấy Breachstone, Wombgift thường đổ vào chuỗi craft (Catalyst + ring/amulet/belt base). Bán Breachstone bulk khi đủ 30-50 cuốn (TFT lot hoặc trade2 listing).

**Session Citadel**: chạy map atlas hub liên tục, atlas master Doryani's Science với Head of the Snake bật. Mỗi map giết Powerful Map Boss, hy vọng proc 5% reveal Citadel. Citadel xuất hiện thì chạy ngay. Citadel mới drop Cradle/Spark — bán raw, không tự dùng vì cung side mục tiêu là cash flow đều, không cần mở Arbiter. Citadel cũ lộ ra thì Copper vẫn đáng chạy luôn (Faded đang 290 ex, không có lý do để dành); Stone và Iron skip vì Weathered/Ancient đang trượt giá.

**Session Crisis (Copper Citadel only)**: phải đã unlock Copper Citadel trên atlas (Jamanra map). Chạy waystone 6-mod prefix Waystone Drop Chance vào Copper Citadel, kill Jamanra. Drop 1 Faded mỗi kill (Δ7d +237%, ride sóng cầu). Skip Stone và Iron — giá đang trượt, run cost không trả. Pace ~3-4 Faded/giờ với Spirit Walker, ~6-8/giờ build zoom.

**Pro Tip:** trước session, mở poe2scout `api.sh list fragments runes 30` check Δ7d của fragment nguồn đang định farm. Δ7d > +50% là tín hiệu sóng cầu, push session ngay; fragment bán nhanh giá đỉnh. Δ7d < -10% bỏ session đó, swap nguồn.

## Loot Breakdown & Economic Analysis

Snapshot poe2scout 2026-06-11, Divine Orb = 124 Exalted Orb. Volume 24h từ catalog fragments + ritual.

Giá hiện tại của fragment supply mục tiêu:

- Breachstone (output): 56 ex avg (~0.45 div), Δ7d +11%, vol 16.4k/ngày — cung side hưởng pha tăng giá
- Breach Splinter (output raw): 0.127 ex avg, Δ7d +40%, vol 2.3M/ngày — ratio raw vs Genesis Tree craft xấu
- Origin Cradle (output): 362 ex avg (~2.92 div), Δ7d +12%, vol 31k/ngày
- Origin Spark (output): 292 ex avg (~2.35 div), Δ7d +13%, vol 33k/ngày
- Faded Crisis Fragment (output): 290 ex avg (~2.34 div), **Δ7d +237%**, vol 28k/ngày — sóng cầu lớn
- Weathered Crisis Fragment (output): 99 ex avg (~0.80 div), Δ7d -20%, vol 29k/ngày — skip
- Ancient Crisis Fragment (output): 58 ex avg (~0.47 div), Δ7d -20%, vol 29k/ngày — skip
- Simulacrum Splinter (output bulk): 1.92 ex avg, Δ7d +50%, vol 514k/ngày — thanh khoản dày nhất chợ
- Simulacrum key (output cao cấp): 620 ex (~5 div), Δ7d +52%, vol 9k/ngày

Math chain profit/giờ baseline (Spirit Walker companion pack Lv94):

**Session Breach (splinter → Breachstone)**:
- Setup cost: ~5 ex/map (3 Breach tablet bulk + waystone)
- Output/map: 3-5 Breach, mỗi Breach nhả splinter theo mob kill cộng Wombgift/Hiveblood rải rác; stabilise thêm cục drop Vruun. Patch note không ghi stack size của splinter nên Breachstone/map chưa pin được. Giả định làm việc: ~0.5-0.8 Breachstone/map với full subtree + 3 tablet.
- Theoretical net từ Breachstone: 4-5 maps/giờ × 0.5-0.8 Breachstone/map × 0.45 div = ~1-1.8 div/giờ. Cộng rare Breach drop (currency, jewel) ~1.5-2.5 div/giờ và Wombgift/Hiveblood quy ra craft value Genesis Tree (Catalyst + base mới) ~1-1.5 div/giờ. Tổng **4-6 div/giờ** baseline. Build zoom 7-8 maps/giờ = **8-10 div/giờ**.
- **Confidence: Medium**, riêng splinter stack size và craft value Genesis Tree là Low. Khi vào session log splinter/giờ, Breachstone craft được mỗi session và giá trị craft output để pin từng dòng.

**Session Citadel (Cradle/Spark drop)**:
- Setup cost: ~3 ex/map travel (waystone + 1 Overseer tablet)
- Citadel encounter rate: ~0.5-0.8 Citadel/giờ với Head of the Snake (5% reveal proc trên Powerful Map Boss, ~10-15 Powerful Boss/giờ travel)
- Output/Citadel mới: avg (362 + 292) / 2 = 327 ex (~2.64 div) gross; trừ ~30 ex juice còn ~297 ex (~2.4 div) net
- Pace: 0.5-0.8 Citadel mới/giờ × 2.4 div net = **1.2-1.9 div/giờ** chỉ riêng Citadel mới
- Cộng base map travel (raw currency + waystone sustain + occasional rare drop): ~1-2 div/giờ
- Tổng baseline: **3-5 div/giờ**. Build zoom Citadel encounter rate giữ nguyên nhưng giết boss nhanh hơn → 6-8 div/giờ.

**Session Crisis (Faded farm Copper Citadel only)**:
- Setup cost: ~15-25 ex/run (waystone 6-mod + 3 Tower tablet Waystone Drop)
- Drop rate: 1 Faded/Jamanra kill cố định; +Waystone Drop suffix có thể nhả thêm 1 cuốn xác suất thấp
- Pace baseline: 3-4 Jamanra/giờ với Spirit Walker (boss dài + run setup)
- Output: 3-4 kill × 290 ex = 870-1160 ex, trừ 45-100 ex juice (15-25 ex × 3-4 run) còn ~810-1080 ex = **~6.5-8.5 div/giờ**. Build zoom 6-8 Jamanra/giờ = ~13-17 div/giờ.
- **Đỉnh trong các session ngay lúc này (2026-06-11)** vì +237% 7d. Cảnh báo: cửa sổ ngắn — khi rusher đủ stock thì giá rớt nhanh về mức Weathered.

**Session Delirium (Simulacrum splinter bulk + occasional key)**:
- Setup cost: ~1 ex/map (1 Delirium tablet, waystone tự sustain quanh Withered Willow hub)
- Splinter output: ~20-40 splinter/map × 1.92 ex = 40-80 ex (~0.3-0.6 div) raw/map
- Pace: 6-8 maps/giờ
- Splinter baseline: 2-4 div/giờ raw bán bulk
- Simulacrum key (cao cấp): cần 50 splinter Diff 1, ~5-8 phút run, 1 key drop. Net 1 key cycle = 620 ex - (50 × 1.92 ex) = 524 ex (~4.2 div) − thời gian ~20-25 phút (splinter farm + 7-wave run). Khoảng 2-3 div/giờ thêm nếu build đứng nổi Diff 1.
- Tổng baseline: **2-4 div/giờ** splinter thuần, **4-6 div/giờ** nếu push key.

**Tổng kỳ vọng cung side cho build companion pack Spirit Walker Lv94 (mình)**:
- Riêng từng nguồn (không stack): Breach 4-6, Citadel 3-5, Crisis Faded **6.5-8.5** (đang sóng), Delirium 2-4 splinter / 4-6 push key.
- Optimal allocation tuần này: **Crisis Faded session** trong cửa sổ 1-2 tuần (đến khi Δ7d về <+50%), sau đó chuyển sang **Citadel + Breach** ổn định.

**Build zoom (Lightning Spear, Twister, Demon Form)**: cùng cấu trúc cộng dồn lên 12-17 div/giờ tùy phân bổ.

## Failure Modes

Risk chính của cung side là **giá fragment không tự sinh ra** — nó phụ thuộc sức mua của boss-rusher. Khi rusher đủ stock hoặc strategy của họ nguội, giá fragment compress 30-50% trong tuần. Faded Crisis +237% 7d hiện tại là cầu spike chứ không phải mặt bằng; số div/giờ headline của doc này sẽ co lại khi sóng rút.

**Market saturation và sóng cầu rút**: Faded Crisis hiện 290 ex (+237% 7d) phản ánh rusher đập Arbiter of Ash. Pattern lịch sử của league cũ: pinnacle boss key đỉnh sóng trong 1-2 tuần đầu sau khi build viral, sau đó compress 40-60% về baseline. Khi Faded về mức Weathered (~99 ex), net session Faded farm rớt từ ~6.5-8.5 div/giờ xuống 3-4 div/giờ, vẫn dương nhưng đẳng cấp khác. Tương tự Breachstone +154% trong 9 ngày (22 → 56 ex) là sóng từ doc boss-rush viral; khi rusher chuyển sang strategy khác (Citadel + Origin Core), Breachstone về 30-35 ex là khả thi. Cung side phải re-pick nguồn hàng tuần, không lock-in.

**Sustain failure (Citadel encounter rate)**: Citadel mới gặp được khoá theo Head of the Snake (5% reveal trên Powerful Boss). Tuần 3-4 khi GGG balance lại có thể stealth-nerf chỗ này (atlas notable hay bị tinh chỉnh nhất). Nếu reveal rate về 2-3%, Citadel encounter rate halve, session Citadel rớt từ 3-5 xuống 1.5-2.5 div/giờ.

**Build floor (Spirit Walker companion pack)**: ba session đều có build floor cao hơn boss-rush. Vruun stabilise Breach cần boss DPS ~5M; Citadel boss cần thời gian đập 60-90 giây; Jamanra Copper Citadel với Spirit Walker là ngưỡng — boss attack đa hướng + phase teleport làm pace thực tế ~3-4/giờ, nửa của build zoom. Build dưới sàn (clear T15 chậm, boss DPS <2M) không chạy được cung side này hiệu quả; chạy Breach thường skip Vruun vẫn gom splinter convert Breachstone được, chỉ chậm hơn.

**Patch nerf risk (Genesis Tree balance)**: chuỗi splinter đầy stack thành special wombgift rồi turn in lấy Breachstone là cơ chế mới, chưa có precedent — loại cơ chế GGG hay tinh chỉnh nhất trong 2-3 patch đầu league. Nếu splinter drop rate giảm 30-50% qua hotfix, session Breach rớt từ 4-6 xuống 2-3 div/giờ. Cơ chế Stabilised Breach cũng có thể bị chỉnh nếu Vruun spawn dày quá mức GGG muốn.

**Time investment (Crisis Faded cửa sổ ngắn)**: session Faded Crisis dựa vào sóng cầu hiện tại — cửa sổ tốt nhất là 1-2 tuần. Sau cửa sổ, ROI rớt 50-60%. Đầu tư atlas point + waystone roll cho Copper Citadel specialise thì phải chạy đủ session trong cửa sổ; chạy 5-10 giờ là break-even setup cost, sau đó pure profit. Vào session muộn (sau khi Faded đã peak) thì lỗ tương đối so với chạy Citadel mới ổn định.

## Profit Optimization

Cộng dồn ba kỹ thuật cho cung side:

Đầu tiên là **dual-session stack**: chạy Breach session với atlas master Doryani's Science (Head of the Snake bật). Powerful Boss của Breach map proc reveal Citadel cũng work, nên session Breach gain Citadel encounter passive. Citadel xuất hiện thì pause Breach run, chạy Citadel ngay trong vòng route hiện tại; để dồn lại sau là lệch route và quên. Hai nguồn cộng dồn ~5-7 div/giờ thay vì 4-6 đơn.

Thứ hai là **bulk-sell timing qua TFT**: bán lot trên TFT (Discord) nhanh hơn hẳn trade2 listing vì rusher mua 30-50 cuốn một lần. Tích đủ 30 Breachstone hoặc 20 Faded Crisis rồi post một lot, không listing lẻ. Giá bulk thấp hơn floor trade2 ~5-10% nhưng bán trong vài phút, không có sit time. Lợi thực tế cao hơn vì opportunity cost của thời gian whisper bằng zero.

Thứ ba là **theo dõi Δ7d swap nguồn**: mỗi sáng trước session check poe2scout `api.sh list fragments runes 30`. Nguồn đang Δ7d +30%-+50% trở lên: ưu tiên ngay; +10%-+30%: chấp nhận được; <0%: skip. Quy tắc này biến cung side từ "farm nguồn cố định" thành "tối ưu theo sóng", gain 30-50% net trên cùng map run rate.

## Alternatives & Variations

So với [Boss Rush Fragment Farming](/farming/0-5-boss-rush-fragment-farm) (mặt tiêu thụ): hai chiến lược ngược chiều thị trường, không xung đột — boss-rush ăn margin nhanh khi giá output cao, cung side ăn supply khi giá input cao. Khi Breachstone đắt (như tuần này +154%), cung side win; khi Breachlord Sac đắt (gấp 10x Breachstone, ratio cao), boss-rush win. Theo dõi ratio (giá Sac) / (giá Breachstone): hiện 526 / 56 = 9.4x và đang nén vì input leo nhanh hơn output (Breachstone +154% trong 9 ngày, Sac chỉ +66% 7d). Ratio càng nén thì cung side càng ưu; ratio nở lại là tín hiệu quay về boss-rush.

So với [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm): nó là layer cao cấp của cung Breach. Breach Rare Juice là tầng đỉnh ăn 200% Delirium fog + Partial Translations, return 10-12 div/map nhưng cần ~8-9 div/map juice cost. Strategy này là tầng thường — investment Low, return thấp hơn nhưng break-even từ map đầu. Build dưới sàn Breach Rare Juice (chưa Lv96, chưa 6 div/tablet) thì cung side Breach thường là đúng option.

So với [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): cùng phần cung side splinter Delirium. Doc Withered Willow tập trung emotion + Raven-Touched Shard ($82 div) là jackpot, doc này coi splinter là dòng tiền đều. Chạy cụm Withered Willow thì gain cả hai luồng — emotion floor + splinter floor + splinter key push.

Variation chính: **dồn vốn 5-7 ngày Faded Crisis** trong cửa sổ +237%, sau đó pivot sang Citadel session ổn định khi giá Faded compress. Pattern day-trader: gather → bán đỉnh sóng → switch nguồn, không phải set-up-and-forget.

## Data & Testing

Giá fragment fetch poe2scout 2026-06-11 qua `.claude/skills/poe2scout/scripts/api.sh item <name>`. Δ7d và vol trực tiếp từ DailyStatsHistory endpoint. 1 Divine = 124 Exalted Orb (poe2scout reference rate hôm nay; tỉ giá rớt từ 131 ex tuần trước — ex cứng giá hơn div).

Math chain dựa trên:
- Splinter stack size cho special wombgift: patch note chỉ ghi "Breachstone splinters turn into a special wombgift when fully stacked", không ghi con số. Khi vào session phải log splinter/giờ và Breachstone craft được mỗi session để pin xuống. Confidence Low trên con số này.
- Head of the Snake 5% reveal Citadel: verified verbatim từ atlas tree notable text, nhưng base rate proc/giờ phụ thuộc số Powerful Map Boss/giờ travel — Spirit Walker baseline ~10-15 Powerful Boss/giờ là estimate, cần đo thật. Confidence Medium.
- Crisis Fragment drop scale theo +Waystone Drop Chance: verified wiki Crisis_Fragment nguyên văn, nhưng số fragment expected/run với 95% Waystone Drop chưa pin con số cố định. Có thể là 1.05-1.15 cuốn/run average. Confidence Medium.
- Faded Crisis +237% 7d: poe2scout DailyStatsHistory 2026-06-05 đến 2026-06-11. Sóng cầu confirmed bằng cross-check volume (33.7k avg/ngày, ổn định) — không phải spike short squeeze, là cầu thực. Confidence High trên data; Medium trên thời lượng cửa sổ.

Re-fetch giá mỗi 3-5 ngày trước khi quote với người mới — fragment trong 0.5 đang volatile, snapshot > 7 ngày là stale.

## Quick Reference Card

**Setup cost / session Breach:** ~5 ex/map (3 Breach tablet bulk + waystone)
**Setup cost / session Citadel:** ~3 ex/map travel
**Setup cost / session Crisis Faded:** ~15-25 ex/Copper Citadel run
**Profit / session Breach (companion pack):** ~4-6 div/giờ
**Profit / session Citadel (companion pack):** ~3-5 div/giờ
**Profit / session Crisis Faded (sóng cầu):** ~6.5-8.5 div/giờ (cửa sổ 1-2 tuần)
**Profit / session Delirium splinter (companion pack):** ~2-4 div/giờ, +2-3 nếu push key
**Atlas master Breach/Citadel travel:** Doryani's Science (Head of the Snake)
**Atlas node Breach session:** Shape the Chains + Moment of Risk + Breeding Program
**Tablets Breach session:** 3× :wiki-link{url="https://www.poe2wiki.net/wiki/Breach_Precursor_Tablet"} thường
**Tablets Citadel session:** 1× :wiki-link{url="https://www.poe2wiki.net/wiki/Overseer_Precursor_Tablet"} cho travel
**Tablets Crisis session:** 3× Tower tablet suffix Waystone Drop Chance
**Waystone Breach/Citadel:** T15 6-mod open layout
**Waystone Crisis Copper:** T16 6-mod prefix +95% Waystone Drop tối thiểu
**Output bán Breach:** Breachstone craft qua Genesis Tree, ~56 ex/cuốn (2026-06-11)
**Output bán Citadel:** Origin Cradle ~362 ex / Origin Spark ~292 ex
**Output bán Crisis:** Faded Crisis ~290 ex (sóng), skip Weathered/Ancient
**Expected div/giờ (companion pack, optimal alloc):** 6.5-8.5 trong cửa sổ Faded, 4-6 baseline sau cửa sổ
**Expected div/giờ (build zoom):** 12-17 tùy phân bổ session

## Changelog

### 2026-06-12
- Soát lại toàn bài: sửa Failure Modes về đúng chuỗi splinter → special wombgift → Breachstone, gỡ claim không nguồn (Stone Circle, roll waystone bằng Verisium, key đôi Cradle+Spark, ratio baseline 12-15x), align số Faded về 6.5-8.5 div/giờ theo math chain, thêm tablet setup session Delirium.

### 2026-06-11
- Initial draft. Snapshot giá poe2scout cùng ngày. Verbatim mechanic từ release notes 0.5.0.

## Relationships

- **competes_with** [Boss Rush Fragment Farming](/farming/0-5-boss-rush-fragment-farm): mặt tiêu thụ ngược chiều, boss-rush ăn margin output cao, cung side ăn input cao. Theo dõi ratio Sac/Breachstone để pick nguồn.
- **synergizes_with** [Breach Rare Juice Farm](/farming/0-5-breach-rare-juice-farm): cùng nền Breach mechanic, Breach Rare Juice là tầng cao cấp (200% Delirium fog), cung side này là tầng thường investment Low.
- **synergizes_with** [Withered Willow Delirium Farming](/farming/0-5-withered-willow-delirium-farm): chia sẻ cụm map Delirium hub, splinter bulk farm chồng được với emotion + Raven-Touched Shard jackpot.
- **synergizes_with** [Abyss Ulaman và Amanamu Farm](/farming/0-5-abyss-ulaman-amanamu-farm): Kulemak's Invitation đi kèm Abyssal boss kill nhưng giá quá thấp để farm chủ động — chạy Abyss strategy thì nhặt thêm Invitation, không đặt làm mục tiêu chính.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients): bối cảnh 0.5 endgame, hai-track Pinnacle (Crisis → Arbiter of Ash giữ nguyên, Origin → Arbiter of Divinity mới).
