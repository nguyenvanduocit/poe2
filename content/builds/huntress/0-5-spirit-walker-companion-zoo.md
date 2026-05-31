---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Zoo Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-31'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: companion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - zoo
  - minion
  - idol-stacking
  - 0-5
  - poe2
---

# Tame Beast Companion Zoo Spirit Walker

Đây là build đi bắt con quái mạnh nhất khu vực rồi để nó đánh thay mình — một bầy companion gánh damage, còn mình giữ một skill spear/Twister để clear và lo buff với phòng thủ. Trong toàn bộ option của Huntress 0.5, đây là build companion-centric trọn vẹn nhất và hưởng nhiều cơ chế buff mới nhất. Companion tự seek mục tiêu nên giảm hẳn gánh aim — nhưng đừng nhầm với afk-summoner một nút: pilot thực tế của bản league-start vẫn chủ động, xoay Whirling Slash → Twister để clear, weapon-swap snapshot Parry cho single-target, và điều companion theo trận. Build chạm vào nhiều vector mới của league hơn bất kỳ archetype nào khác — :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"}, 19 companion passive, idol-on-sceptre, Kalguuran revive, Rage-cho-minion. Đổi lại, con số endgame dưới đây vẫn là test target chứ không phải fact đã verify — nhưng build đã chứng minh được tới T15 ngay ngày đầu league: một character chạy đúng lộ trình này tới T15 ở Lv82 sau khoảng 9.5 giờ, ít chết, default-swing của con Unique tame (con monkey) đập boss ~500k với gear sớm. Đó là field evidence cho thấy phần league-start + floor clear đã work thật (nên mình nâng những claim đó từ theory lên MEDIUM), còn các con số riêng — DPS ~500k, Runic Ward, reservation multiplier — vẫn là anecdote ngày 1 chưa có PoB verify, mình giữ MEDIUM/LOW từng cái và sẽ nói rõ chỗ nào chắc, chỗ nào cần log thêm.

## Vì sao build này thắng về "dễ chơi + dễ trúng + hưởng buff"

Spirit Walker là ascendancy duy nhất trong 0.5 subdue được beast và bind chúng vào spirit. Patch note mô tả nó "calls upon spirits aligning with the Stag, Owl or Bear... may subdue even the most formidable beasts, binding them in spirit, or call forth a spectral companion to fight beside her" — nghĩa là toàn bộ damage của build có thể dồn vào companion, người chơi chỉ điều phối. Đó là lý do nó ăn trọn ba tiêu chí mình ưu tiên khi chọn league starter: **dễ trúng** (companion tự seek mục tiêu, mình không phải skillshot từng phát damage chính), **ít gánh aim** (companion auto-summon khi đủ Spirit + tự đánh — dù pilot vẫn có rotation Whirling Slash → Twister và weapon-swap chủ động, không phải one-button afk), và **hưởng buff** (build cắm vào gần như mọi cơ chế minion mới của patch cùng lúc).

Cái khiến nó chơi được ngay ngày đầu là đợt buff thẳng tay cho :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}: skill giờ "deal 40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20, immediately summons newly Tamed Beasts if you have enough spirit, minimum Gem level of 7 (previously 9)". Hạ xuống Lv7 gem là thay đổi quan trọng nhất — nghĩa là companion thật sự online quanh Lv22 (khi đã có spirit + một con beast đáng bắt) thay vì phải lê tới mid-game. Trên nền đó, các tamed minion còn ăn thêm "25% more Damage at all Gem levels" và scaling "3% more ở gem 3 lên tới 50% more vs non-Unique enemies ở gem 8" — đây là nguồn của con số "minion buff ~25-35%" mà cộng đồng hay nhắc, và nó là multiplier nằm sẵn trên skill chứ không cần đầu tư gear.

Vai trò của người chơi gói gọn trong ba việc: (1) cấp spirit để fielding companion, (2) buff chúng qua idol + 19 companion passive + aura, (3) tự lo phòng thủ và quét trash bằng một skill phụ nhẹ. Việc số (1) và (3) cạnh tranh trực tiếp ngân sách spirit với nhau — đó là tension thiết kế cốt lõi mình sẽ quay lại nhiều lần trong bài.

## Ascendancy tree — ba nhánh spirit + hai standalone

Đây là phần mình từng hiểu sai và đã sửa lại theo wiki (`Spirit_Walker.md`): tree có **8 notable**, gồm ba nhánh spirit (mỗi nhánh một base + một enhancer) cộng hai node standalone. Chúng đều tồn tại verbatim, không phải đồn đoán.

Nhánh **Stag** mở bằng **Vivid Stampede** (không cần prereq) rồi tới **The Mórrigan's Guidance**. Nhánh **Owl** mở bằng **Primal Bounty** rồi **The Mhacha's Gift** — đây là nhánh projectile-speed, hữu ích nếu bạn level bằng Twister (xem phần leveling). Nhánh **Bear** mở bằng **Wild Protector** — node này cho một con Bear companion **không chiếm companion slot**, tức là một con tank/clear miễn phí — rồi tới **The Catha's Balance**, node biến vũ khí chính của bạn thành damage cho companion ("Companions deal additional Attack Damage based on your main hand weapon damage"). Con số % cụ thể của Catha's Balance **không có trên wiki** (chỉ có concept), nên mình treat magnitude là **LOW, log ngày 1** — node tồn tại chắc chắn, độ lớn thì chưa.

> **Phân biệt dễ nhầm:** "The Catha's Balance" (node ascendancy Bear-branch, scale companion theo weapon) khác hẳn ":wiki-link{url="https://www.poe2wiki.net/wiki/Catha's_Brilliance"}" (Lineage Support mới, patch note xác nhận). Hai thứ tên giống, chức năng khác. Đừng gộp.

Hai node standalone gánh phần lớn sức mạnh build. **The Natural Order** cho phép "Tame Beast capture Unique Beasts, có thể giữ một con Unique Tamed Beast cùng lúc, và Unique Tamed Beasts có +30% Movement Speed" — đây là cách bạn bắt boss-tier beast làm single-target chính. **Idolatry** là node multiplier idol: "Companions deal 10% increased damage per Idol in your Equipment, 2% increased Reservation Efficiency of Skills per Idol, -4% to all Elemental Resistances per non-Idol Augment". Node này biến idol từ phụ kiện thành scaling axis thật, và là lý do phần gear bên dưới dồn vào idol-on-sceptre. Cuối cùng **Sacred Unity** (cần cả ba base spirit) là free node nối tree lại.

Thứ tự lấy điểm ascendancy mình chọn: **Lab 1** lấy The Natural Order (mở Unique Beast tame — nguồn single-target sớm). **Lab 2** lấy nhánh Bear (Wild Protector cho Bear free + The Catha's Balance bắt đầu scale theo weapon). **Lab 3 + Lab 4** lấy Idolatry + hoàn thiện nhánh phù hợp hướng damage. Lý do ưu tiên Natural Order trước: single-target là điểm yếu kinh điển của minion, có Unique Beast sớm là cách bù trực tiếp nhất.

## Companion core — và câu hỏi Minion Splash (upside, không phải trụ)

Bản league-start không đặt cược clear lên companion: **clear floor đi bằng một skill spear/Twister giữ xuyên suốt, companion là lớp damage chồng thêm.** Đây là điểm mình sửa lại so với cách nghĩ đầu — lộ trình thực tế giữ :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} (cùng Ice-Tipped Arrows lay chilled ground) làm engine quét trash từ leveling cho tới khi companion online, nên build không sụp dù một interaction companion chưa work.

Interaction đó là :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} (support Strength mới của 0.5): "creates Minions which Strike, causing those Minions' Strikes to have Melee Splash" — biến một con strike-minion single-target thành AoE clearer. Nếu nó apply được lên companion thì con beast tự quét cả màn — **đây là upside, không phải điều kiện sống còn.** Lý do vẫn phải dè chừng: **companion do Tame Beast triệu ra là một con quái chạy attack pool riêng của nó, không phải một player Strike skill.** Minion Splash thiết kế rõ cho skill kiểu Skeletal Warrior hay Manifested Weapon (vốn có "Strikes" tường minh); native attack của beast tame có được tính là "Strike" để Minion Splash support hay không thì **chưa ai test được, và lộ trình league-start cũng không feature nó** — clear vẫn giao cho Twister thay vì cược vào beast-splash.

Nghĩa là câu hỏi Minion-Splash quyết định **trần** "dễ trúng nhất" (companion tự clear, bỏ luôn skill phụ) chứ không quyết định **floor** (đã có Twister gánh). Vẫn nên test ngày đầu — nó là chênh lệch giữa "zoo tự clear" và "zoo cộng một nút Twister quét trash" — nhưng đặt đúng tầm: upside, không phải tử huyệt.

Bên cạnh đó, companion core ăn các buff verified sau, đều là vector mới của 0.5:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} giờ cho "2% increased Minion Attack Speed per 5 Rage" (trước là 1% per Rage) — companion attack speed scale theo Rage.
- **Rage I, Rage II, Rage III** giờ "can support Minion Skills" — mở Rage thành support cho companion, một axis hoàn toàn mới.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp_Support"}: minion dính Last Gasp "không thể chết vì damage vượt Maximum Life trong thời gian hiệu lực" — chống overkill, giữ companion sống qua burst.
- **Eternal March** (một trong 23 Kalguuran skill mới, craft từ Remnant, tốn Runic Ward chứ không tốn mana): hồi sinh tức thì đội minion đã chết — đúng nghĩa nút panic cho summoner khi vào boss. Vì nó chỉ drop từ Remnant encounter nên availability là RNG tuần đầu (xem Failure Modes).

## Scaling thật nằm ở idol-on-sceptre, không phải vũ khí

Triết lý gear của build này ngược với build tự đánh: **vũ khí không phải để bạn đánh, sceptre là dàn idol biết đi.** Patch 0.5 mở "All Idols can now also be socketed into Sceptres", và một loạt idol có dòng companion/ally cực mạnh khi cắm sceptre — đây mới là engine scaling thật, không phải weapon DPS:

- **Primate Idol** — "Allies in your Presence deal 40% increased Damage" (sceptre).
- **Idol of Grold** — "15% increased Damage for each different Companion in your Presence" (sceptre) — thưởng trực tiếp cho việc nuôi zoo nhiều loại.
- **Snake Idol** — "Allies have 10% increased Attack Speed"; **Wolf Idol** — "Allies have 20% increased Critical Damage Bonus"; **Ox Idol** — "Allies +12% to all Elemental Resistances" (giúp cap res cho companion); **Owl Idol** — "Allies 10% increased Cast Speed".
- **Idol of Ralakesh** — "40% increased Armour, Evasion and Energy Shield while your Companion is in your Presence" (sceptre) — lớp defense theo companion.
- **Idol of Thruldana** — "Allies deal 13 to 27 added Attack Chaos Damage"; **Boar Idol** — "Allies Regenerate 0.5% of your Maximum Life per second".

Ghép với node **Idolatry** ("10% increased companion damage per Idol" + "2% reservation efficiency per Idol"), mỗi idol vừa là damage vừa là spirit efficiency. Đây là vì sao mình allocate Idolatry và dồn idol companion-damage vào sceptre trước mọi thứ khác — nó là multiplier rẻ nhất và scale tuyến tính theo số idol.

### Sceptre enabler — Sylvan's Effigy là chase item endgame, không phải đồ sớm

:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} là item định hình "zoo": nó cho "You can have any number of Companions of different types", "(54-63)% increased Spirit", "+(9-12) to all Attributes", và "Companions deal (85-91)% increased damage to your Marked targets" (đánh Mark lên boss để kích phần này), kèm grant Discipline + một Azmerian Wolf. Đây là thứ phá trần companion-count, biến build từ "một minion" thành zoo thật.

**Chỉnh lại một sai sót của bản trước:** Sylvan's Effigy **drop-restricted, rơi từ Ritual pinnacle boss, không Orb of Chance được** — nghĩa là nó là **chase item endgame**, không phải đồ Lv6 mua sớm như mình từng viết. (Số requirement level đang conflict giữa nguồn — poe2db và wiki không khớp — nên mình neo vào *nguồn drop* thay vì cãi con số: bạn lấy nó từ pinnacle boss, chấm hết.) Trước khi có Effigy, build chạy với companion-cap mặc định ("limited to 1 of any type at a time") — tức là pre-Effigy bạn chơi "vài companion" chứ chưa phải full zoo. Đây là một lý do nữa khiến confidence là LOW: phiên bản "zoo" mạnh nhất bị gate sau một pinnacle drop.

Các unique companion khác đáng để mắt: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (unique mới 0.5, hướng tới buff minion damage + reservation efficiency — exact roll log ngày 1), và :wiki-link{url="https://www.poe2wiki.net/wiki/Quipolatl's_Thesis"} Soul Core: cắm Gloves nó "grants Your Energy Shield Recharge starts when your Minions are Reformed" — về lý thuyết cho bạn trigger ES recharge bằng weapon-swap Reform để né nerf ES-recharge của 0.5. **MEDIUM** và bản thân cộng đồng cũng flag nó "có thể bị đổi" — đừng dồn currency vào tới khi confirm sau hotfix tuần đầu.

## Spirit là trần cứng — và math reservation thực tế

Mọi tham vọng zoo đều đụng một con số: **spirit pool.** Đây là chỗ nên tính bằng số thật thay vì cảm tính, vì reservation của beast rất nặng. Theo wiki Tame Beast, một số mốc reservation: **Crag Leaper ~23.1%** ở đầu phổ, lên tới **Elephant Tortoise ~56.1%** ở đầu nặng nhất. Nghĩa là với một spirit pool league-start điển hình, bạn fielding được **hai con beast nhẹ, hoặc một con nặng + chỗ thừa ít ỏi** — chưa kể còn phải chừa spirit cho aura/herald và (nếu giữ) một self-clear skill.

:wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} là keystone vừa cứu vừa siết: 0.5 đổi nó thành "30% **more** Reservation Efficiency of Companion Skills, và 20% **less** Reservation Efficiency of non-Companion Skills" (patch dùng *more/less* — multiplier, không phải *increased/reduced* cộng dồn). +30% more efficiency cho companion nghĩa là cùng spirit pool fielding được nhiều companion hơn — đúng tinh thần zoo. Nhưng -20% less cho non-Companion skill nghĩa là **cái self-clear/aura của bạn đắt hơn về spirit**, ép một lựa chọn cứng: zoo to **hoặc** một personal skill mạnh, không phải cả hai. Đây là quyết định thiết kế trung tâm, không phải tinh chỉnh.

Một cảnh báo defense đi kèm Trusted Kinship: dòng chuyển sát thương sang companion-life cũ ("Companions have +1 to each Defence for every 2 of that Defence you have") **đã bị gỡ** trong đợt rework 0.5. Bản trước của bài này xây kế hoạch HC quanh "companion gánh damage thay mình" — điều đó giờ **không còn nguồn verify nào**. Build vẫn có companion body-block + Idol of Ralakesh (40% AR/EV/ES khi companion in presence), nhưng **không có cơ chế redirect sát thương companion-life nào confirm** → mình không hứa HC-safe.

## Phòng thủ — evasion/ES + Runic Ward, không tank-by-recharge

Build đứng xa nên defense dựa Evasion + Energy Shield, lấy companion làm bia. Nhưng 0.5 nerf ES recovery diện rộng (recharge delay, rate cap, nhiều node rate bị gỡ khỏi tree), nên không thể "tank bằng recharge" như trước. Hai lối đi:

Thứ nhất, :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} từng là nguồn hồi ES theo evasion độc lập với recharge cluster — nhưng nó **bị nerf trong 0.5** (instant → ~2% evasion/s over 4s), nên không còn là viên đạn bạc; vẫn dùng được như một lớp, không phải trụ. Thứ hai là **Runic Ward** — defense layer mới của league, "kicks in once you reach 1 life, regenerates independently of your life". Add Runic Ward qua **Verisium Runeforging** làm lớp đệm — bench/anvil mở từ quest **Act 1 với NPC Farrow** (Unique Verisium Runeforging cho weapon/armour unique mở thêm ở Act 3); Runeforging base targets **armour pieces** (không phải mọi món jewellery). Có một ngưỡng quan trọng quyết định "có đáng không": **armour dưới level 55 nhận Runic Ward không mất gì; armour trên 55 phải đánh đổi một phần base defence (armour/evasion/ES) để lấy Runic Ward.** Đây chính là tension thực tế — ngày đầu mình add Runic Ward lên chest và đọc được ~470 ward (cap LOW, single anecdote, PoB2 không model nên đây là test target), nhưng mất một mảng % evasion scaling vì chest trên level 55. Có đáng đổi hay không phụ thuộc lớp evasion bạn đang đứng: thêm một thanh ~500 HP đệm tự hồi độc lập với life thì đáng, nhưng nếu evasion mất quá nhiều thì cân nhắc add lên món thấp-level hơn. **Cảnh báo quan trọng:** patch note (mục "Defences" keyword) xác nhận increased Armour/Evasion/Energy Shield **không** scale Runic Ward — nó là pool riêng, regen độc lập với life, và PoB2 chưa model nó, nên mọi con số Runic Ward là test target thuần.

Resist cap 75% như thường (Ox Idol trên sceptre cho companion +12% all ele res, giúp cap res cho cả zoo). Cap res của chính bạn trước khi nghĩ tới min-max.

## Lộ trình hai giai đoạn — leveling Twister rồi swap sang companion

Build này phải tách bạch **hai giai đoạn** vì chúng chơi khác hẳn nhau, và lẫn lộn là cách hỏng league-start nhanh nhất: **đừng cố chơi companion từ Lv1.** Companion yếu và spirit-starved suốt campaign sớm, nên giai đoạn đầu mình level bằng một engine spear tự thân, rồi mới pivot sang companion quanh Act 3 khi đủ spirit + companion node + một con beast đáng bắt.

### Giai đoạn 1 — Leveling bằng Twister (Act 1 → Act 3)

:wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} là engine campaign mạnh nhất của league này — nhanh tới mức giữ kỷ lục campaign quanh ~3 giờ, và nhánh **Owl** của Spirit Walker (projectile speed) hỗ trợ nó rất tốt. Setup thực dụng: Twister cắm **Retreat + Frost Nexus + Elemental Armament** (Frost Nexus lay chilled ground, biến Twister thành cold), rotation cốt lõi là **Whirling Slash ×3 → Twister**, với Whirling Slash mang **Rage + Rapid Attacks** để vừa build Rage vừa tăng tốc. Đơn mục tiêu thì thêm **Barrage + Rapid Casting**; rải chilled ground diện rộng bằng **Ice-Tipped Arrows + Magnified Area**; :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} + War Banner làm lớp clear/utility nhẹ. Ai ngại combo Whirling Slash thì **crossbow grenade** là engine thay thế — chậm hơn chút nhưng tha lỗi và rút lui dễ khi pivot. (Bản Twister chuyên sâu có doc riêng — xem Relationships; ở đây chỉ là cấu hình leveling của build companion.)

Hai việc bắt buộc trong giai đoạn này, làm sai là kẹt ở giai đoạn 2: (1) **giữ vàng từ Act 2 sang Act 3 — cần khoảng 20,000 gold** cho một lần full respec từ cây Twister sang cây support-companion (hai cây lệch nhau rất nhiều điểm, không để dành vàng thì không respec nổi); (2) unlock **Verisium Runeforging** sớm (quest Act 1 từ NPC Farrow) — gateway crafting của league, cho craft Runic Ward và nâng base unique drop ở level thấp.

### Giai đoạn 2 — Swap → Mid → Endgame (companion online)

**Swap ở Act 3.** Tame Beast là Lv7 gem nhưng companion thực dụng gánh được quanh **Lv22**, không phải Lv7 — swap ngay Lv22 rủi ro vì chưa đủ passive point. An toàn là chờ Act 3: level thẳng bằng Twister, làm xong **Lab 2 (second lab)**, rồi mới full respec ~20k gold sang cây companion-support. Pivot này có "playstyle whiplash" và phá vỡ vài support-gem setup — chuẩn bị tâm lý đổi nút một lần. **Gotcha quan trọng về thứ tự: bắt con Unique tame (monkey) TRƯỚC khi respec.** Nếu respec sang cây companion mà chưa bắt được monkey, bạn rơi vào "build dở dang" — cây mới chưa đủ damage để giết con Unique beast, còn cây cũ thì đã xoá, kẹt giữa hai bên. Đúng thứ tự là: Lab 2 xong → đi tame con Unique monkey → rồi mới respec.

**Crystallized Immunity (travel node chống chill).** Trên đường đi tree mới, path qua node **Crystallized Immunity** — nó cho không-bị-chill ("cannot be chilled"), gỡ một trong những thứ khó chịu nhất khi đứng yên điều companion. Scope đúng là chill thôi, chưa rõ có cover freeze/ailment khác không (tên node + effect lấy từ field ngày 1, chưa đối chiếu được export tree 0.5 — MEDIUM, log scope chính xác khi vào league).

**Bắt companion (đầu giai đoạn 2).** Rare tame nên nhắm con **Boar** (base Diretusk Boar): nó spawn rare ở khu camp trong **Infested Barrens (Act 3)** — tìm cái camp có con roly-poly và con boar (roly-poly là tên dân dã, không phải base wiki). Mục tiêu là roll cho nó **Haste aura** — Haste buff cả mình (đi nhanh hơn) lẫn con carry chính. Kỹ thuật reroll mod ngày 1: nếu lỡ giết nhầm thì control-click tạo zone mới; còn nếu rare đang đó thì tới checkpoint bấm **respawn at checkpoint** để re-roll mods của rare, chạy lên xem con nào có Haste — chưa có thì respawn again, lặp tới khi ra Haste (field-tested, MEDIUM — không phải mechanic có doc chính thức). Boar nhỉnh hơn roly-poly chút vì roly-poly đi chậm hơn, nhưng cả hai đều ở trong presence để cấp damage nên bí thì lấy đại con nào cũng được. Có một lựa chọn thay thế ở **Act 1 với một con Wolf** — reservation nhỉnh hơn chút — nhưng spawn condition của nó đỏng đảnh (không phải lần nào cũng ra, và nếu zone roll ra zombie thì wolf không spawn, phải reset cả zone), nên đây là phương án phụ (field-report, MEDIUM, log spawn + delta reservation khi vào league). Tránh con Quadrilla fast-movement ở Jungle Ruins (Act 3) vì mod tốc độ của nó **khoá không cho roll Haste**. Con đánh chính là một **Unique Tamed Beast** (mở bằng The Natural Order) — đây là heavy-hitter single-target của zoo. Suốt giai đoạn này vẫn **giữ Twister/Ice-Tipped Arrows làm clear** cho tới khi companion đủ mạnh thay thế.

**Single-target — kỹ thuật snapshot Parry.** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} đặt một debuff khiến enemy chịu **+50% attack damage**, và một loạt node weapon-set scale magnitude debuff này lên gần gấp đôi — đây là cách phá boss. Cắm Parry ở **Weapon Set 2** với off-hand chỉ cần **buckler + một scepter rác CÙNG lượng spirit** với scepter chính: nếu weapon-swap mà tụt spirit thì companion/skeleton bị desummon (Pain Offering đang buff có thể bay mất), nên scepter dự phòng phải khớp spirit. Nhớ để một skill (frost bomb / utility) ở Weapon Set 1 hoặc swap tay về thủ công, kẻo dính set 2 là mất hết damage node bên set 1.

**Support-gem tiến hoá (mid).** Đầu giai đoạn cứ basic, rồi nâng dần. Chạy **Hulking Minions** để phóng to companion — nhưng nhớ support này hiếm khi: nó mang một **reservation multiplier** mà phần lớn support không có (CaptainLance9 đọc ~130% reservation multiplier ngày 1 — cần verify in-game khi mở gem), nên muốn fielding Hulking phải kéo theo mấy node reservation để gánh chỗ spirit phình ra. Cách thoát là anoint notable **Gigantic Following** trên cây (đây là **notable**, không phải keystone): nó cho "Your Minions are Gigantic" áp lên mọi companion cùng lúc — Gigantic Following xác nhận Gigantic minion có **20% more Maximum Life, 20% more Damage và 20% increased size** — nên Hulking Minions thành thừa và bạn rút support đó ra, trả lại +1 link. Đổi lại đừng tưởng là "miễn phí reservation": chính notable Gigantic Following kèm **25% reduced Reservation Efficiency of Minion Skills**, nên slot được giải phóng nhưng bù lại tree-side đắt spirit hơn — vẫn lời (mất một dòng tree-efficiency để được +1 link toàn-companion-Gigantic) nhưng phải tính vào budget spirit. Lấy thêm node **Warlord** ("allies regen rage nếu bạn vừa gained rage") — chỉ cần một nguồn **rage-on-hit** (vd rage-on-hit trên chính đòn Parry) là companion có Rage, lúc đó rút Rage III ra cắm support khác. Khi mở reservation node, thêm **Skeletal Cleric** (spirit thấp, heal companion khác) và một skeleton rẻ để bật **Muster** (+7% more damage mỗi loại reviving minion khác nhau đang field). Đủ skeleton thì **Pain Offering** sacrifice tới 2 con thay vì 1, cho buff attack-speed + % damage mạnh hơn.

**Gear ưu tiên (mid → endgame).** Trục nâng cấp là **+minion gem level** ở helmet / amulet / scepter: companion lên level nghĩa là vừa trâu hơn (nhiều HP) vừa damage hơn. Sớm có thể nhặt **Trench Timber** (+2 minion) làm cầu nối trước khi tới Catha's. Defensive thì ưu tiên **evasion + life + cap res** trước mọi min-max; về sau cân nhắc Ghost Dance + chút hybrid ES (xem phần Phòng thủ). Còn endgame zoo thật — phá trần companion-count qua Sylvan's Effigy, scaling qua idol-on-sceptre + spirit math — là đích của giai đoạn 2, đã nói chi tiết ở các phần trên.

## Tương tác với league Runes of Aldur

Build này ăn khớp với league mechanic hơn phần lớn archetype khác. **Remnant + Runic Recipe** craft gear companion (sceptre + idol + spirit gear) theo ý. **Eternal March** và các Kalguuran skill minion chỉ drop từ Remnant encounter — nghĩa là chính việc chơi league mechanic là cách bạn lấy nút panic-revive cho zoo, nhưng cũng nghĩa là nó RNG-gated tuần đầu. **Verisium Runeforging** thêm Runic Ward / nâng base unique. Và vì Sylvan's Effigy rơi từ **Ritual pinnacle boss**, lộ trình endgame của build gắn chặt với việc farm Ritual để hoàn thiện zoo.

**Masters of the Atlas — lớp progression endgame zoo level lên.** 0.5 thêm hệ Atlas progression kiểu Ascendancy: align với các master khác nhau, mỗi master có **12 node chọn được 4**, mở từng hàng 3 node bằng cách làm mission cho master đó, và swap qua lại giữa các master tuỳ map. Ba questline đáng nhắm khi vào endgame: **Hilda** — "monster hunter" — mở ở Hilda's Campsite phía tây-nam điểm bắt đầu atlas, level lên bằng việc đi săn boss; ngày đầu mình thấy Hilda yêu cầu giết mấy con **great-beast boss có icon emblem** trên đầu (field ngày 1, chưa đối chiếu được patch note nên log cơ chế chính xác khi vào league). Hilda hợp thematically với build beast-hunt nhất — đáng ưu tiên. **Jado** mở bằng cách clear một anomaly map gần điểm bắt đầu; **Doryani** (Doryani's Science) mở bằng cách clear một corruption nexus. Cả ba đều swappable mỗi map nên có thể đổi master theo loại content đang farm.

**Overseer tablet — guaranteed powerful boss để over-level map tier.** Cắm **Overseer Precursor Tablet** vào Tower thì các map valid trong tầm (khoảng 2-4 map in range, không phải nghĩa đen "mọi map") được thêm Map Boss và nâng nó thành **Powerful Map Boss** — khó hơn rõ rệt và drop tốt hơn, đặc biệt **thường drop Waystone cao hơn một tier**. Chính cái drop Waystone tier-up đó là cơ chế thật đứng sau chiến thuật ngày 1: dùng Overseer tablet để "nhảy cóc" tier — chạy nội dung cao hơn an toàn nhờ zoo gánh boss mạnh để lấy Waystone upgrade, nhờ vậy lên thẳng T15 sớm (field-report, MEDIUM — "over-level an toàn" là trải nghiệm chơi của creator, không phải mechanic có doc; và **không có nguồn nào định lượng boss tankiness tăng bao nhiêu** — đừng tin con số nhân HP nào, Empowerment chỉ nói boss "khó hơn" không kèm hệ số).

## DPS & EHP — vì sao đây là test target, không phải fact

Mình không quote một con số DPS cứng vì hai lý do trung thực: PoB2 fork **không model được** tamed beast stats, companion AI uptime, hay Spirit Walker bonus-on-companion (pob_coverage **PARTIAL → NA** cho phần companion). Cái mình có thể dựng là *chain multiplier verified*, để khi vào league bạn biết đo cái gì:

`companion_base_damage (theo beast tame) × 1.84 (Tame Beast more @gem20) × 1.25 (Bind/Tame more all-level) × [1.50 vs non-Unique @gem8] × (1 + 0.10×idol_count từ Idolatry) × (1 + idol_ally_damage_sum) × (1 + 0.85→0.91 nếu Marked, từ Effigy)`

Các multiplier trên đều verified tồn tại; cái chưa biết là `companion_base_damage` (phụ thuộc con beast bạn bắt) và liệu Minion Splash có nhân clear không. Field ngày 1 cho một mốc tham chiếu: con monkey Unique-tame default-swing ~500k @ Lv82 gear sớm — đủ để nói single-target không chết, nhưng đây là **MEDIUM** (anecdote creator, không PoB, đo trên target gần đứng yên), không phải con số để min-max theo. Vì thế phần DPS/EHP riêng vẫn là test target: chain math đúng, nhưng input đầu vào chỉ materialize khi có character thật của chính mình.

EHP tương tự: layer order 0.5 là armour → evasion → block → max res → ES/Life pool → **Runic Ward** → recovery. Runic Ward là pool riêng không scale bằng inc-defence, recovery độc lập, và PoB2 chưa model — nên EHP cũng là test target. Mục tiêu thực dụng ngày 1: cap 75% res (Ox Idol giúp companion, gear giúp bạn), ~target evasion/ES vừa đủ sống sau lưng companion, và đo Runic Ward thực tế.

## Failure Modes — 5 cách build gãy, kèm test plan ngày 1

Build này nhiều ẩn số pre-league nên mình liệt kê thẳng, kèm thứ cần đo.

**1. Minion Splash là upside ceiling, không phải floor — và ngày-1 floor đã giữ.** Companion là quái chạy attack pool riêng, không phải player Strike skill, nên Minion Splash (thiết kế cho Skeletal Warrior / Manifested Weapon) chưa chắc support native attack của beast. Nhưng clear floor đã giao cho Twister giữ xuyên suốt giai đoạn 2, nên kịch bản xấu nhất chỉ là "zoo single-target cộng một nút Twister quét trash" thay vì "zoo tự clear cả màn". Field ngày 1 đã xác nhận floor này đứng vững: một character clear thẳng tới T15 không cần dựa vào beast-splash — floor giữ. (Đáng chú ý, creator báo Minion Splash *có* proc trên con rare tame của ổng ngày 1; nếu đúng thì ceiling cũng đạt, nhưng đây là anecdote chưa verify nên giữ là upside để test, không phải fact.) *Test ngày 1: link Minion Splash lên con strike-beast, đứng trước pack white, xem strike có splash không — đây là test ceiling "dễ trúng nhất", floor đã confirm clear T15.*

**2. Spirit gating + companion uptime trên boss mobile (single-target raw đã dịu, uptime thì chưa).** Reservation beast nặng (Crag Leaper 23.1% → Elephant Tortoise 56.1%), Trusted Kinship phạt -20% non-Companion skill, cộng reservation multiplier của Hulking Minions — fielding nhiều companion + self-defense rất dễ vượt ngân sách spirit league-start. Về raw single-target, field ngày 1 dịu lo: con monkey default-swing ~500k @ Lv82 gear sớm cho thấy single-target không chết (MEDIUM — số anecdote creator, không PoB, đo trên target tương đối đứng yên). Nhưng phần lo cốt lõi **chưa đóng**: đó là companion AI uptime trên boss **di chuyển nhanh** (Faction Leader, Pinnacle trong Ocean Exploring) — một con số "default swing" không trả lời được uptime khi boss chạy. Và ~9 cái chết tới Lv82 cho thấy tension survivability/uptime là thật. *Test ngày 1: log spirit reservation từng skill, xác định fielding được bao nhiêu companion trước khi cạn; đo companion uptime trên một boss mobile — đây mới là phần chưa verify, không phải DPS dummy.*

**3. Không có mitigation companion-life verify → không HC-safe (field ngày 1 củng cố lo này).** Dòng chuyển defense sang companion (cơ sở của kế hoạch HC bản cũ) đã bị gỡ trong rework Trusted Kinship. Map "less recovery" + "increased monster speed" làm companion body-block kém hiệu quả và clear-via-AI chệch nhịp. ~9 cái chết tới Lv82 ngày đầu là field evidence trực tiếp rằng build **không** HC-safe — chạy quá hung (sprint thẳng vào pack, dính stun-lock) thì vẫn bị một-phát. *Test ngày 1: chạy map less-recovery + increased-monster-speed, xem build sống và clear ổn không; xác định cơ chế mitigation thực tế nếu có.*

**4. Gear floor cao hơn pitch — zoo bị gate sau pinnacle.** Phiên bản "zoo" mạnh nhất cần Sylvan's Effigy (drop từ Ritual pinnacle boss), Eternal March (chỉ từ Remnant, RNG), và magnitude của The Catha's Balance/Idolatry chưa biết. Pre-Effigy bạn chơi companion-cap mặc định (1 mỗi loại) — "vài companion" chứ chưa phải full zoo. *Test ngày 1: verify wording thực của Effigy + Catha's Balance % trong client; đo build chạy ra sao TRƯỚC khi có Effigy.*

**5. Nerf giữa league.** Day-1 ascendancy mới + Tame Beast vừa buff 40→84% + companion scaling chưa tune = prime nerf target. GGG đã flag minion scaling là outlier (Infernal Legion bị cắt ~50% trong cùng patch là tiền lệ). Identity build nằm gọn trên thứ dễ bị đập. *Chuẩn bị: theo dõi hotfix tuần 1, có sẵn kế hoạch pivot self-clear (về Twister/grenade) nếu companion scaling bị cắt.*

**Day-1 live test plan (tổng, theo thứ tự ưu tiên):** (a) **spirit reservation đầy đủ + trần companion count thực + companion AI uptime per boss-type** — đây là FLOOR, quyết định build có chạy mượt không; (b) **Minion Splash có splash native beast attack không** — quyết định CEILING "dễ trúng nhất", không phải floor (floor đã có Twister gánh); (c) wording thực của Sylvan's Effigy + The Catha's Balance % + The Raven's Flock roll; (d) Runic Ward cap/recovery thực. Có đủ mấy cái này thì rewrite phần DPS/EHP từ LOW lên MEDIUM/HIGH.

## Tóm lại

Tame Beast Companion Zoo là pick Spirit Walker dễ chơi nhất và hưởng nhiều cơ chế buff 0.5 nhất: bắt boss-beast để chúng đánh, đổi giữa con AoE clear và con single-target, APM thấp không cần aim. Phần verified chắc chắn — Spirit Walker ascendancy với tree 8-notable (Natural Order, Idolatry, Catha's Balance, Wild Protector, ba nhánh spirit), Tame Beast (40→84% more + 25% more all-level + auto-summon + Lv7 gem), idol-on-sceptre stacking (Primate/Grold/Snake/Wolf/Ox), Commanding Rage + Rage-support-minion, Eternal March revive, Trusted Kinship spirit efficiency — đều từ patch note 0.5.0 + wiki mirror. Phần chưa chắc và quyết định build có "đỉnh" hay không — Minion Splash trên native beast attack, magnitude Catha's Balance, companion AI uptime trên boss mobile, Sylvan's Effigy gate sau pinnacle — đều là test target ngày 1. Confidence tổng thể giờ là **MEDIUM** chứ không còn LOW thuần: một character đã chạy đúng lộ trình này tới T15 @ Lv82 trong ~9.5 giờ ngày đầu, nên league-start viability + execution hai giai đoạn + clear floor đã được field-corroborate (MEDIUM — test bởi creator khác, chưa phải own-PoB own-test nên không lên HIGH). Nhưng các con số riêng — DPS ~500k, Runic Ward ~470, Hulking ~130% reservation, magnitude Catha's Balance, Effigy gate — vẫn là anecdote/unverified, giữ MEDIUM/LOW từng cái; pob_coverage vẫn **PARTIAL** (PoB2 không model companion). Chơi với tâm thế đo đạc và học: để engine leveling (Twister/grenade) gánh tới khi companion online, capture monkey trước khi respec, và đừng tin con số DPS/Ward nào trước khi có character của chính mình.

## Relationships

- **related_builds** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — engine leveling khuyên dùng để gánh campaign trước khi pivot companion; cùng ascendancy Spirit Walker.
- **alternative_to** [Spirit Walker Catha Companion](/builds/huntress/0-5-spirit-walker-catha-companion) — hướng companion tập trung một boss-beast thay vì zoo nhiều con.
- **alternative_to** [Spirit Walker Unique Beast Apex](/builds/huntress/0-5-spirit-walker-unique-beast-apex) — hướng dồn vào một Unique Tamed Beast single-target.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — deep-dive cơ chế tame + companion scaling nền tảng cho build.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Remnant/Runeforging/Runic Ward mà build khai thác.
- **competes_with** [Infernal Legion Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — minion archetype khác hưởng buff khác; Infernal Legion bị nerf ~50% trong cùng patch.

## Resources

Nguồn execution league-start (đã fold vào doc — chi tiết ở Changelog):

- [CaptainLance9 — My Spirit Walker Leaguestarter (Everything You Need To Know)](https://www.youtube.com/watch?v=uP6HfpMmoDY) — post-launch leaguestarter video (2026-05-29).
- [CaptainLance9 — My Beast Leaguestarter Ever ~ Spirit Walker Day 1](https://www.youtube.com/watch?v=dkJR0ujbDTg) — day-1 field update (2026-05-30): T15 @ Lv82 ~9.5h, Masters path, Overseer tablet, Gigantic Following + Hulking, Runic Ward, capture-before-respec, Haste reroll.
- [CaptainLance9 — Spirit Walker Beast Master build trên Mobalytics (kèm PoB code)](https://mobalytics.gg/poe-2/profile/captainlance/builds/0-5-captainlance9-s-spirit-walker-beast-tamer)
- [Kênh CaptainLance9](https://www.youtube.com/captainlance9) — companion / Spirit Walker specialist.

## Changelog

### 2026-05-31 — fold day-1 field update + confidence LOW→MEDIUM

- **Fold delta ngày 1 từ CaptainLance9 "My Beast Leaguestarter Ever ~ Spirit Walker Day 1"** (upload 2026-05-30): character chạy đúng lộ trình này tới **T15 @ Lv82 trong ~9.5 giờ**, ít chết (~9 deaths), con monkey Unique-tame default-swing đập boss **~500k** với gear sớm. Đây là field evidence cho league-start viability + execution hai giai đoạn + clear floor.
- **Confidence frontmatter LOW → MEDIUM** (narrow, có scope): build đã được creator field-test tới T15 ngày đầu → viability/execution/floor lên MEDIUM (someone-else-tested = MEDIUM, không lên HIGH vì chưa own-PoB own-test). pob_coverage giữ **PARTIAL**. Các con số riêng vẫn label từng cái: DPS ~500k = MEDIUM (anecdote, không PoB, đo trên dummy gần đứng yên); Runic Ward ~470 = LOW (single anecdote, PoB2 không model); Hulking ~130% reservation = MEDIUM (creator đọc, không phải wiki/patch number); magnitude Catha's Balance + Effigy gate vẫn LOW như cũ.
- **NEW — Masters of the Atlas progression layer** vào section league: Hilda (monster hunter, Hilda's Campsite SW, level bằng săn boss; ngày-1 thấy yêu cầu great-beast boss có emblem icon — field, log scope), Jado (anomaly map gần start), Doryani (corruption nexus). Dùng tên canonical, sửa mix-up của video ("J in blood temple/corruption" — thực ra Jado = anomaly map, Doryani = corruption nexus).
- **NEW — Overseer Precursor Tablet → over-level map tier**: cắm vào Tower → Powerful Map Boss (khó hơn + drop Waystone tier-up) → nhảy cóc tier lên T15 sớm (field-report MEDIUM). Flag rõ: **không định lượng boss tankiness** — bác bỏ con số "2x-4x tank" (2-4 thực ra là số map in range / Tower mechanic count, không phải boss HP).
- **NEW — Crystallized Immunity travel node** (chill immunity, chill-only scope, tên + effect từ field ngày 1, MEDIUM pending tree export 0.5).
- **Refine support-gem prose**: Hulking Minions mang reservation multiplier (~130% creator read); **sửa "anoint keystone Gigantic, reservation-free"** → thực ra là **notable "Gigantic Following"** (20% more Life/Damage + 20% size), và nó kèm **25% reduced Reservation Efficiency of Minion Skills** (không free) — trả +1 link nhưng đánh đổi tree-efficiency.
- **Refine Runic Ward**: thêm ngưỡng **level 55** (dưới 55 add free, trên 55 đánh đổi base defence) — đây là cơ chế thật sau tension "mất evasion có đáng không"; fold ~470 ward chest observed (LOW test target). **Sửa attribution**: bench mở từ quest **Act 1 / Farrow**, KHÔNG phải "Pharaoh questline" (video conflate Sekhemas/Honour); Runeforging targets armours (Act 1) + unique weapon/armour (Act 3), không phải mọi gear.
- **NEW — gotcha thứ tự: capture Unique monkey TRƯỚC khi respec** (tránh kẹt build dở dang); extend Haste-capture prose với zone name **Infested Barrens (Act 3) / Diretusk Boar**, **respawn-at-checkpoint reroll method** (MEDIUM field), và **Act-1 Wolf alternative** (reservation nhỉnh hơn, spawn đỏng đảnh — MEDIUM field).
- **Update Failure Modes**: FM#1 floor confirmed (T15 clear không cần beast-splash); FM#2 raw single-target dịu (500k MEDIUM) nhưng uptime-on-mobile-boss vẫn open; FM#3 reinforced (~9 deaths = not HC-safe).

### 2026-05-30 — execution layer 2 giai đoạn + reframe Minion Splash

- **Tái cấu trúc thành lộ trình hai giai đoạn rõ ràng** (Giai đoạn 1 leveling Twister → Giai đoạn 2 swap/mid/endgame companion), thay section "Leveling" cũ. Fold execution cụ thể từ post-launch leaguestarter video của CaptainLance9 (Spirit Walker Beast Master, upload 2026-05-29) + decode PoB code của ổng từ Mobalytics: gem setup leveling (Twister + Retreat + Frost Nexus + Elemental Armament; Whirling Slash + Rage + Rapid Attacks; Barrage + Rapid Casting; Ice-Tipped Arrows + Magnified Area), ~20k gold respec Act 2→3, rare tame Boar-cho-Haste + Unique Tamed Beast carry, kỹ thuật snapshot Parry weapon-set-2 (+50% attack damage taken; buckler + scepter khớp spirit để né desummon), support-gem progression (Hulking → anoint Gigantic, Warlord rage-to-allies, Muster, Pain Offering sacrifice 2, Skeletal Cleric), gear +minion-gem-level + Trench Timber.
- **Reframe Minion-Splash-on-native-beast từ Failure Mode #1 "trụ chính" → upside test (ceiling, không phải floor).** Lộ trình league-start không feature Minion Splash, giữ Twister/Ice-Tipped Arrows làm clear floor xuyên suốt → build không sụp nếu interaction này fail; nó chỉ quyết định trần "dễ trúng nhất". Day-1 test plan đổi thứ tự: spirit-gating / single-target / AI-uptime là floor (ưu tiên a), Minion Splash là ceiling (b).
- **Trim overclaim "APM thấp / dễ chơi nhất"** ở intro + thesis: pilot league-start thực tế chủ động (rotation Whirling Slash → Twister + weapon-swap Parry + điều companion), không phải afk-summoner một nút.
- **PoB coverage note:** PoB code là snapshot leveling Lv32, ascend hiện placeholder "Amazon" + treeVersion 0_4 (PoB2 fork chưa map Spirit Walker 0.5), DPS/EHP = 0/placeholder → tái khẳng định pob_coverage PARTIAL, không có endgame number verify được. Companion trong PoB chỉ là placeholder của snapshot, KHÔNG phải recommendation (video authoritative cho lựa chọn companion: Boar + Unique carry).

### 2026-05-30 — sửa lỗi factual + enrich từ research

- **Sửa over-quarantine của bản đầu:** The Natural Order, Idolatry, The Catha's Balance, Wild Protector, Sacred Unity là node CÓ THẬT (verified `data/wiki/Spirit_Walker.md`, tree 8-notable: 3 nhánh spirit Stag/Owl/Bear + 2 standalone) — bản đầu xếp nhầm chúng vào "grep=0 fabrication". Magnitude "60% main-hand" của Catha's Balance vẫn chưa verify (wiki chỉ có concept) → giữ LOW.
- **Sửa Sylvan's Effigy:** drop-restricted, rơi từ **Ritual pinnacle boss**, không Orb of Chance được → chase item endgame, KHÔNG phải đồ Lv6 mua sớm như bản đầu viết. Restore dòng "(85-91)% increased Companion damage to Marked targets" + "any number of Companions of different types" + "(54-63)% Spirit" theo wiki.
- **Enrich:** thêm idol-on-sceptre stacking (Primate/Grold/Ralakesh/Snake/Wolf/Ox/Owl/Boar/Thruldana, verified L746-764), Eternal March Kalguuran revive, Commanding Rage (L505), Rage I/II/III support minion (L642), Last Gasp (L349); thêm spirit reservation math thật (Crag Leaper 23.1% → Elephant Tortoise 56.1%); thêm DPS chain multiplier verified.
- **Phân biệt** The Catha's Balance (ascendancy node, wiki) vs Catha's Brilliance (Lineage Support, patch L364).
- **Nâng Minion-Splash-on-native-beast-attack thành Failure Mode #1 / Day-1 test #1** — đây là trụ chống đỡ thesis clear, hiện chưa verify.
- **Leveling reframe:** Twister/grenade → pivot companion mid-Act-3 (đường Ghazzy + community thực sự recommend), cross-link sang Twister draft thay vì dựng lại.

### 2026-05-29 — bản đầu, pre-league theorycraft

- Bản research-derived đầu tiên, viết trước khi league 0.5.0 mở. Confidence LOW. Spine verify từ `data/release-notes/Version_0.5.0.md`.
- pob_coverage PARTIAL/NA: PoB2 fork chưa model tamed beast stats, companion AI uptime, Spirit Walker bonus-on-companion, Minion Splash conversion, Reform/ES-recharge trigger.
