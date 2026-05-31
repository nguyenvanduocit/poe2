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

Build bắt con quái mạnh nhất khu vực rồi để nó đánh thay mình: một bầy companion gánh damage, mình giữ :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} để quét trash và lo buff với phòng thủ. Đây là pick companion-centric trọn vẹn nhất của Huntress 0.5, chạm vào nhiều cơ chế minion mới của patch hơn bất kỳ archetype nào khác — :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"}, 19 companion passive, idol-on-sceptre, Kalguuran revive, Rage-cho-minion. Companion tự seek mục tiêu nên gần như không phải aim, nhưng đừng nhầm với afk một nút: pilot vẫn chủ động xoay Whirling Slash → Twister để clear, weapon-swap snapshot Parry cho single-target, và điều companion theo trận.

Build đã chạy thật tới T15 ngay ngày đầu league — một character đi đúng lộ trình này lên Lv82 sau ~9.5 giờ, ít chết, con Unique tame (con monkey) đập boss ~500k với gear sớm. Lộ trình league-start vì thế là phần chắc tay. Các con số endgame — DPS full-zoo, Runic Ward — vẫn là test target chưa có PoB của riêng mình, nên mình gắn label độ-chắc ở từng chỗ thay vì giấu.

## Chơi build này — đường ngắn nhất

Trước khi vào lý do, đây là toàn bộ lộ trình gói trong sáu bước. Các section sau giải thích *vì sao* từng bước và *đo gì* khi vào league.

1. **Act 1 → Act 3: level bằng Twister.** Rotation Whirling Slash ×3 → Twister; Frost Nexus lay chilled ground. Giữ ~20,000 gold cho lần respec, và unlock Verisium Runeforging từ NPC Farrow ngay Act 1.
2. **Act 3, sau Lab 2 — đúng thứ tự: tame con Unique monkey TRƯỚC, rồi mới full respec** sang cây companion-support. Đảo thứ tự là kẹt build dở dang.
3. **Dựng zoo:** monkey (Unique carry, single-target) + Boar rare roll được Haste (Infested Barrens) + Bear miễn phí (Wild Protector) + một Skeletal Cleric và skeleton rẻ để bật Muster + Pain Offering.
4. **Single-target:** weapon-swap sang Set 2 snapshot Parry (+50% attack damage taken) — off-hand chỉ cần buckler + một scepter rác khớp spirit để né desummon.
5. **Gear ưu tiên:** +minion gem level ở helmet / amulet / scepter, và dồn idol companion-damage vào sceptre; phòng thủ giữ evasion + life + cap 75% res trước mọi min-max.
6. **Endgame:** Sylvan's Effigy (drop từ Ritual pinnacle boss) phá trần số companion; Masters of the Atlas ưu tiên Hilda vì hợp beast-hunt.

## Vì sao build này thắng về "dễ chơi + dễ trúng + hưởng buff"

Spirit Walker là ascendancy duy nhất trong 0.5 subdue được beast và bind chúng vào spirit. Patch note mô tả nó "calls upon spirits aligning with the Stag, Owl or Bear... may subdue even the most formidable beasts, binding them in spirit, or call forth a spectral companion to fight beside her" — nghĩa là toàn bộ damage có thể dồn vào companion, người chơi chỉ điều phối. Đó là lý do nó ăn trọn ba tiêu chí mình ưu tiên khi chọn league starter: **dễ trúng** (companion tự seek mục tiêu, không phải skillshot từng phát damage chính), **ít gánh aim** (companion auto-summon khi đủ Spirit rồi tự đánh), và **hưởng buff** (build cắm vào gần như mọi cơ chế minion mới của patch cùng lúc).

Cái khiến nó chơi được ngay ngày đầu là đợt buff thẳng tay cho :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}: skill giờ "deal 40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20, immediately summons newly Tamed Beasts if you have enough spirit, minimum Gem level of 7 (previously 9)". Hạ xuống Lv7 gem là thay đổi quan trọng nhất — companion thật sự online quanh Lv22 (khi đã có spirit + một con beast đáng bắt) thay vì phải lê tới mid-game. Trên nền đó, các tamed minion còn ăn thêm "25% more Damage at all Gem levels" và scaling "3% more ở gem 3 lên tới 50% more vs non-Unique enemies ở gem 8" — multiplier nằm sẵn trên skill, không cần đầu tư gear.

Vai trò người chơi gói trong ba việc: (1) cấp spirit để fielding companion, (2) buff chúng qua idol + 19 companion passive + aura, (3) tự lo phòng thủ và quét trash bằng một skill phụ nhẹ. Việc (1) và (3) cạnh tranh trực tiếp ngân sách spirit — đó là tension thiết kế cốt lõi quay lại nhiều lần trong bài.

## Ascendancy tree — ba nhánh spirit + hai standalone

Tree có **8 notable**: ba nhánh spirit (mỗi nhánh một base + một enhancer) cộng hai node standalone.

Nhánh **Stag** mở bằng **Vivid Stampede** (không cần prereq) rồi tới **The Mórrigan's Guidance**. Nhánh **Owl** mở bằng **Primal Bounty** rồi **The Mhacha's Gift** — đây là nhánh projectile-speed, hữu ích nếu level bằng Twister. Nhánh **Bear** mở bằng **Wild Protector** — node này cho một con Bear companion **không chiếm companion slot**, tức một con tank/clear miễn phí — rồi tới **The Catha's Balance**, biến vũ khí chính thành damage cho companion ("Companions deal additional Attack Damage based on your main hand weapon damage"). Con số % của Catha's Balance chưa có trên wiki nên magnitude là **LOW** (node chắc chắn tồn tại, độ lớn cần log ngày 1).

> **Phân biệt dễ nhầm:** "The Catha's Balance" (node ascendancy Bear-branch, scale companion theo weapon) khác hẳn :wiki-link{url="https://www.poe2wiki.net/wiki/Catha's_Brilliance"} (Lineage Support mới). Tên giống, chức năng khác.

Hai node standalone gánh phần lớn sức mạnh. **The Natural Order** cho phép "Tame Beast capture Unique Beasts, có thể giữ một con Unique Tamed Beast cùng lúc, và Unique Tamed Beasts có +30% Movement Speed" — đây là cách bắt boss-tier beast làm single-target chính. **Idolatry** là multiplier idol: "Companions deal 10% increased damage per Idol in your Equipment, 2% increased Reservation Efficiency of Skills per Idol, -4% to all Elemental Resistances per non-Idol Augment" — biến idol thành scaling axis thật, là lý do gear dồn vào idol-on-sceptre. **Sacred Unity** (cần cả ba base spirit) là free node nối tree.

Thứ tự lấy điểm: **Lab 1** The Natural Order (mở Unique Beast tame — single-target sớm, bù điểm yếu kinh điển của minion). **Lab 2** nhánh Bear (Wild Protector cho Bear free + Catha's Balance scale theo weapon). **Lab 3 + 4** Idolatry + hoàn thiện nhánh theo hướng damage.

## Companion core — Twister gánh clear, Minion Splash là upside

Clear floor đi bằng Twister giữ xuyên suốt, companion là lớp damage chồng thêm — nên build không sụp dù một interaction companion chưa work. Đây là khung quan trọng để hiểu phần còn lại: **floor = Twister clear (chắc); ceiling = companion tự clear cả màn (chưa chắc).**

Cái quyết định ceiling là :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} (support Strength mới của 0.5): "creates Minions which Strike, causing those Minions' Strikes to have Melee Splash" — biến strike-minion single-target thành AoE clearer. Nếu apply được lên companion thì con beast tự quét cả màn. Nhưng companion do Tame Beast triệu ra là một con quái chạy attack pool riêng, không phải player Strike skill, mà Minion Splash thiết kế cho skill kiểu Skeletal Warrior / Manifested Weapon (có "Strikes" tường minh) — nên native attack của beast có được support hay không là **chưa chắc (test ngày 1)**. Lộ trình league-start không cược vào nó: clear vẫn giao cho Twister.

Companion core ăn các buff verified sau, đều là vector mới của 0.5:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} giờ cho "2% increased Minion Attack Speed per 5 Rage" (trước là 1% per Rage).
- **Rage I, Rage II, Rage III** giờ "can support Minion Skills" — mở Rage thành support cho companion.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp_Support"}: minion dính Last Gasp "không thể chết vì damage vượt Maximum Life trong thời gian hiệu lực" — chống overkill qua burst.
- **Eternal March** (Kalguuran skill, craft từ Remnant, tốn Runic Ward chứ không tốn mana): hồi sinh tức thì đội minion đã chết — nút panic khi vào boss. Chỉ drop từ Remnant encounter nên RNG tuần đầu.

## Scaling thật nằm ở idol-on-sceptre, không phải vũ khí

Triết lý gear ngược với build tự đánh: **vũ khí không phải để mình đánh, sceptre là dàn idol biết đi.** Patch 0.5 mở "All Idols can now also be socketed into Sceptres", và một loạt idol có dòng companion/ally cực mạnh khi cắm sceptre — đây mới là engine scaling thật:

- **Primate Idol** — "Allies in your Presence deal 40% increased Damage".
- **Idol of Grold** — "15% increased Damage for each different Companion in your Presence" — thưởng trực tiếp cho zoo nhiều loại.
- **Snake Idol** — "Allies have 10% increased Attack Speed"; **Wolf Idol** — "Allies have 20% increased Critical Damage Bonus"; **Ox Idol** — "Allies +12% to all Elemental Resistances" (giúp cap res cho companion); **Owl Idol** — "Allies 10% increased Cast Speed".
- **Idol of Ralakesh** — "40% increased Armour, Evasion and Energy Shield while your Companion is in your Presence" — lớp defense theo companion.
- **Idol of Thruldana** — "Allies deal 13 to 27 added Attack Chaos Damage"; **Boar Idol** — "Allies Regenerate 0.5% of your Maximum Life per second".

Ghép với **Idolatry** (10% inc companion damage + 2% reservation efficiency mỗi idol), mỗi idol vừa là damage vừa là spirit efficiency. Đó là vì sao allocate Idolatry và dồn idol companion-damage vào sceptre trước mọi thứ khác — multiplier rẻ nhất, scale tuyến tính theo số idol.

### Sceptre enabler — Sylvan's Effigy là chase item endgame

:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} định hình "zoo": cho "You can have any number of Companions of different types", "(54-63)% increased Spirit", "+(9-12) to all Attributes", và "Companions deal (85-91)% increased damage to your Marked targets" (đánh Mark lên boss để kích), kèm grant Discipline + một Azmerian Wolf. Đây là thứ phá trần companion-count.

Effigy **drop-restricted, rơi từ Ritual pinnacle boss, không Orb of Chance được** — nên nó là **chase item endgame**, không phải đồ mua sớm. Trước khi có Effigy, build chạy với companion-cap mặc định ("limited to 1 of any type at a time") — tức "vài companion" chứ chưa phải full zoo. Phiên bản "zoo" mạnh nhất bị gate sau một pinnacle drop, đó là lý do confidence endgame chưa thể lên HIGH.

Unique companion khác đáng để mắt: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (unique mới 0.5, hướng buff minion damage + reservation efficiency — exact roll log ngày 1), và :wiki-link{url="https://www.poe2wiki.net/wiki/Quipolatl's_Thesis"} Soul Core: cắm Gloves nó "grants Your Energy Shield Recharge starts when your Minions are Reformed", về lý thuyết cho trigger ES recharge bằng weapon-swap Reform để né nerf ES-recharge của 0.5 (**MEDIUM** — cộng đồng flag có thể bị đổi, đừng dồn currency tới khi confirm sau hotfix tuần đầu).

## Spirit là trần cứng — math reservation thực tế

Mọi tham vọng zoo đụng một con số: **spirit pool.** Reservation của beast rất nặng — theo wiki Tame Beast: **Crag Leaper ~23.1%** ở đầu phổ, lên tới **Elephant Tortoise ~56.1%** ở đầu nặng nhất. Với spirit pool league-start điển hình, fielding được **hai con beast nhẹ, hoặc một con nặng + chỗ thừa ít ỏi** — chưa kể còn phải chừa spirit cho aura/herald và self-clear skill.

:wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} là keystone vừa cứu vừa siết: 0.5 đổi nó thành "30% **more** Reservation Efficiency of Companion Skills, và 20% **less** Reservation Efficiency of non-Companion Skills" (patch dùng *more/less* — multiplier, không cộng dồn). +30% more cho companion nghĩa fielding được nhiều companion hơn cùng spirit pool — đúng tinh thần zoo. Nhưng -20% less cho non-Companion skill nghĩa **self-clear/aura của mình đắt spirit hơn**, ép một lựa chọn cứng: zoo to **hoặc** một personal skill mạnh, không phải cả hai.

Một lưu ý defense: dòng chuyển sát thương sang companion-life cũ ("Companions have +1 to each Defence for every 2 of that Defence you have") **đã bị gỡ** trong rework 0.5. Build vẫn có companion body-block + Idol of Ralakesh (40% AR/EV/ES khi companion in presence), nhưng không còn cơ chế redirect sát thương companion-life nào confirm → **build không HC-safe**.

## Phòng thủ — evasion/ES + Runic Ward, không tank-by-recharge

Build đứng xa nên defense dựa Evasion + Energy Shield, lấy companion làm bia. Nhưng 0.5 nerf ES recovery diện rộng (recharge delay, rate cap, nhiều node rate bị gỡ khỏi tree), nên không thể "tank bằng recharge" như trước.

:wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} từng là nguồn hồi ES theo evasion độc lập với recharge cluster, nhưng nó **bị nerf trong 0.5** (instant → ~2% evasion/s over 4s) — vẫn dùng được như một lớp, không phải trụ.

**Runic Ward** là defense layer mới của league: "kicks in once you reach 1 life, regenerates independently of your life" — một thanh đệm tự hồi nằm dưới HP bar. Add nó qua **Verisium Runeforging**, bench mở từ quest **Farrow ở Act 1** (Unique Verisium Runeforging cho weapon/armour unique mở thêm ở Act 3); Runeforging chỉ target **armour pieces**. Có một ngưỡng quyết định "có đáng không": **armour dưới level 55 nhận Runic Ward không mất gì; armour trên 55 phải đánh đổi một phần base defence (armour/evasion/ES).** Đặt Runic Ward lên chest cho ~470 ward (**LOW** — single observation, PoB2 không model) nhưng mất một mảng % evasion scaling vì chest trên level 55, nên cân theo lớp evasion đang đứng: thêm một thanh ~500 đệm tự hồi thì đáng, còn nếu mất evasion quá nhiều thì add lên món thấp-level hơn. Lưu ý cứng: increased Armour/Evasion/Energy Shield **không** scale Runic Ward (nó là pool riêng, PoB2 chưa model — số là test target).

Resist cap 75% như thường (Ox Idol trên sceptre cho companion +12% all ele res). Cap res của chính mình trước khi nghĩ tới min-max.

## Lộ trình hai giai đoạn — leveling Twister rồi swap sang companion

Hai giai đoạn chơi khác hẳn nhau, và lẫn lộn là cách hỏng league-start nhanh nhất: **đừng cố chơi companion từ Lv1.** Companion yếu và spirit-starved suốt campaign sớm, nên giai đoạn đầu level bằng một engine spear tự thân, rồi mới pivot quanh Act 3 khi đủ spirit + companion node + một con beast đáng bắt.

### Giai đoạn 1 — Leveling bằng Twister (Act 1 → Act 3)

:wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} là engine campaign mạnh nhất của league (giữ kỷ lục campaign quanh ~3 giờ), và nhánh **Owl** (projectile speed) hỗ trợ nó rất tốt. Setup: Twister cắm **Retreat + Frost Nexus + Elemental Armament** (Frost Nexus lay chilled ground, biến Twister thành cold); rotation cốt lõi **Whirling Slash ×3 → Twister**, với Whirling Slash mang **Rage + Rapid Attacks** để vừa build Rage vừa tăng tốc. Đơn mục tiêu thêm **Barrage + Rapid Casting**; rải chilled ground diện rộng bằng **Ice-Tipped Arrows + Magnified Area**; :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} + War Banner làm utility nhẹ. Ai ngại combo Whirling Slash thì **crossbow grenade** là engine thay thế — chậm hơn chút nhưng tha lỗi.

Hai việc bắt buộc, làm sai là kẹt giai đoạn 2: (1) **giữ ~20,000 gold từ Act 2 sang Act 3** cho lần full respec từ cây Twister sang cây support-companion (hai cây lệch nhau rất nhiều điểm); (2) unlock **Verisium Runeforging** sớm (quest Act 1 từ NPC Farrow) — gateway crafting của league.

### Giai đoạn 2 — Swap → Mid → Endgame (companion online)

**Swap ở Act 3, đúng thứ tự.** Companion thực dụng gánh được quanh Lv22, nhưng swap ngay Lv22 rủi ro vì chưa đủ passive point — an toàn là chờ Act 3, level thẳng bằng Twister tới khi xong **Lab 2**, rồi mới respec. Thứ tự quan trọng: **bắt con Unique tame (monkey) TRƯỚC khi respec.** Respec sang cây companion mà chưa có monkey thì rơi vào build dở dang — cây mới chưa đủ damage để giết Unique beast, cây cũ đã xoá. Đúng trình tự: Lab 2 xong → tame Unique monkey → respec. Pivot này có "playstyle whiplash" và phá vài support-gem setup, chuẩn bị tâm lý đổi nút một lần.

**Crystallized Immunity.** Trên đường đi cây mới, path qua node **Crystallized Immunity** ("cannot be chilled") — gỡ một trong những thứ khó chịu nhất khi đứng yên điều companion (**MEDIUM** — tên + scope từ field ngày 1, chưa đối chiếu được export tree 0.5).

**Bắt companion.** Rare tame nhắm con **Boar** (base Diretusk Boar): spawn rare ở camp trong **Infested Barrens (Act 3)** — tìm cái camp có con roly-poly và con boar. Mục tiêu roll cho nó **Haste aura** (buff cả mình lẫn con carry chính). Reroll mod: lỡ giết nhầm thì control-click tạo zone mới; còn nếu rare đang đó thì tới checkpoint bấm **respawn at checkpoint** để re-roll mods, chạy lên xem con nào có Haste, chưa có thì respawn again (**MEDIUM**, field-tested). Boar nhỉnh hơn roly-poly chút (roly-poly đi chậm hơn) nhưng cả hai đều cấp damage trong presence nên bí thì lấy con nào cũng được. Có lựa chọn thay thế ở **Act 1 với một con Wolf** (reservation nhỉnh hơn) nhưng spawn đỏng đảnh — không phải lần nào cũng ra, và nếu zone roll ra zombie thì wolf không spawn, phải reset cả zone (**MEDIUM**, field). Tránh con Quadrilla fast-movement ở Jungle Ruins vì mod tốc độ của nó **khoá không cho roll Haste**. Con đánh chính là một **Unique Tamed Beast** (mở bằng The Natural Order). Suốt giai đoạn này vẫn giữ Twister/Ice-Tipped Arrows làm clear.

**Single-target — snapshot Parry.** :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} đặt debuff khiến enemy chịu **+50% attack damage**, và một loạt node weapon-set scale magnitude này lên gần gấp đôi — đây là cách phá boss. Cắm Parry ở **Weapon Set 2** với off-hand chỉ cần **buckler + một scepter rác CÙNG lượng spirit** với scepter chính: weapon-swap mà tụt spirit thì companion/skeleton bị desummon (Pain Offering đang buff bay mất), nên scepter dự phòng phải khớp spirit. Để một skill utility (frost bomb) ở Weapon Set 1 hoặc swap tay thủ công, kẻo dính set 2 là mất damage node bên set 1.

**Support-gem tiến hoá.** Đầu giai đoạn cứ basic rồi nâng dần. Chạy **Hulking Minions** để phóng to companion — support này mang một **reservation multiplier** mà phần lớn support không có (~130%, **MEDIUM** — cần verify in-game khi mở gem), nên fielding nó phải kéo theo node reservation gánh chỗ spirit phình ra. Cách thoát là anoint notable **Gigantic Following** (notable, không phải keystone): nó cho "Your Minions are Gigantic" áp lên mọi companion (Gigantic = 20% more Maximum Life, 20% more Damage, 20% increased size), nên Hulking Minions thành thừa, rút support đó ra trả lại +1 link. Đổi lại không miễn phí: Gigantic Following kèm **25% reduced Reservation Efficiency of Minion Skills** — slot được giải phóng nhưng tree-side đắt spirit hơn (vẫn lời nhưng phải tính vào budget). Lấy thêm **Warlord** ("allies regen rage nếu bạn vừa gained rage") — chỉ cần một nguồn **rage-on-hit** (vd trên đòn Parry) là companion có Rage, lúc đó rút Rage III ra cắm support khác. Khi mở reservation node, thêm **Skeletal Cleric** (spirit thấp, heal companion) và một skeleton rẻ để bật **Muster** (+7% more damage mỗi loại reviving minion khác nhau đang field). Đủ skeleton thì **Pain Offering** sacrifice tới 2 con thay vì 1, buff attack-speed + % damage mạnh hơn.

**Gear ưu tiên.** Trục nâng cấp là **+minion gem level** ở helmet / amulet / scepter: companion lên level vừa trâu hơn vừa damage hơn. Sớm có thể nhặt **Trench Timber** (+2 minion) làm cầu nối trước khi tới Catha's. Defensive ưu tiên **evasion + life + cap res** trước mọi min-max; về sau cân nhắc Ghost Dance + chút hybrid ES. Endgame zoo thật — phá trần companion-count qua Sylvan's Effigy, scaling qua idol-on-sceptre + spirit math — là đích của giai đoạn 2.

## Tương tác với league Runes of Aldur

Build ăn khớp league mechanic hơn phần lớn archetype. **Remnant + Runic Recipe** craft gear companion (sceptre + idol + spirit gear) theo ý. **Eternal March** và các Kalguuran skill minion chỉ drop từ Remnant encounter — chính việc chơi league mechanic là cách lấy nút panic-revive cho zoo, nhưng cũng nghĩa nó RNG-gated tuần đầu. **Verisium Runeforging** thêm Runic Ward / nâng base unique. Và vì Sylvan's Effigy rơi từ **Ritual pinnacle boss**, lộ trình endgame gắn chặt với farm Ritual.

**Masters of the Atlas.** 0.5 thêm hệ Atlas progression kiểu Ascendancy: align với các master, mỗi master có **12 node chọn được 4**, mở từng hàng 3 node bằng cách làm mission cho master đó, swap qua lại tuỳ map. Ba questline đáng nhắm: **Hilda** (monster hunter, mở ở Hilda's Campsite phía tây-nam điểm bắt đầu atlas, level bằng săn boss — ngày đầu thấy yêu cầu giết great-beast boss có icon emblem, **MEDIUM**, log cơ chế chính xác khi vào league) — hợp beast-hunt nhất, ưu tiên; **Jado** (mở bằng clear một anomaly map gần start); **Doryani** (corruption nexus). Cả ba swappable mỗi map.

**Overseer tablet.** Cắm **Overseer Precursor Tablet** vào Tower thì các map valid trong tầm được thêm Map Boss và nâng nó thành **Powerful Map Boss** — khó hơn, drop tốt hơn, đặc biệt **thường drop Waystone cao hơn một tier**. Chính cái Waystone tier-up đó là cơ chế đứng sau chiến thuật nhảy cóc tier ngày 1: zoo gánh boss mạnh an toàn để lấy Waystone upgrade, lên thẳng T15 sớm (**MEDIUM**, field). Lưu ý không có nguồn nào định lượng boss tankiness tăng bao nhiêu — đừng tin con số nhân HP nào.

## DPS & EHP — vì sao là test target

Mình không quote con số DPS cứng vì PoB2 fork **không model được** tamed beast stats, companion AI uptime, hay Spirit Walker bonus-on-companion (pob_coverage **PARTIAL → NA** cho phần companion). Cái dựng được là chain multiplier verified, để khi vào league biết đo gì:

`companion_base_damage (theo beast tame) × 1.84 (Tame Beast more @gem20) × 1.25 (Bind/Tame more all-level) × [1.50 vs non-Unique @gem8] × (1 + 0.10×idol_count từ Idolatry) × (1 + idol_ally_damage_sum) × (1 + 0.85→0.91 nếu Marked, từ Effigy)`

Các multiplier đều verified tồn tại; cái chưa biết là `companion_base_damage` (phụ thuộc con beast) và liệu Minion Splash có nhân clear không. Field ngày 1 cho một mốc tham chiếu: con monkey Unique-tame default-swing ~500k @ Lv82 gear sớm — đủ để nói single-target không chết, nhưng là **MEDIUM** (anecdote, đo trên target gần đứng yên), không phải con số để min-max theo.

EHP layer order 0.5 là armour → evasion → block → max res → ES/Life pool → **Runic Ward** → recovery. Runic Ward là pool riêng không scale bằng inc-defence, PoB2 chưa model — nên EHP cũng là test target. Mục tiêu thực dụng ngày 1: cap 75% res, evasion/ES vừa đủ sống sau lưng companion, và đo Runic Ward thực tế.

## Failure Modes — 5 cách build gãy, kèm test plan ngày 1

**1. Minion Splash không apply lên native attack của tamed beast → mất AoE-upside, KHÔNG sụp build.** Clear floor giao cho Twister giữ xuyên suốt, nên kịch bản xấu nhất là "zoo single-target cộng một nút Twister quét trash" thay vì "zoo tự clear cả màn". Field ngày 1 đã xác nhận floor này đứng vững — một character clear thẳng tới T15 không cần beast-splash. *Test: link Minion Splash lên con strike-beast, đứng trước pack white, xem strike có splash không — quyết định ceiling "dễ trúng nhất", không phải floor.*

**2. Spirit gating + companion uptime trên boss mobile.** Reservation beast nặng (Crag Leaper 23.1% → Elephant Tortoise 56.1%), Trusted Kinship phạt -20% non-Companion skill, cộng reservation multiplier của Hulking Minions — fielding nhiều companion + self-defense rất dễ vượt ngân sách spirit league-start. Raw single-target đã dịu (monkey ~500k), nhưng phần lo cốt lõi **chưa đóng**: companion AI uptime trên boss **di chuyển nhanh** (Faction Leader, Pinnacle trong Ocean Exploring) — một con số "default swing" không trả lời được uptime khi boss chạy. *Test: log spirit reservation từng skill, xác định fielding được bao nhiêu companion trước khi cạn; đo companion uptime trên một boss mobile.*

**3. Không có mitigation companion-life → không HC-safe.** Dòng chuyển defense sang companion (cơ sở kế hoạch HC) đã bị gỡ trong rework Trusted Kinship. ~9 cái chết tới Lv82 ngày đầu là field evidence trực tiếp rằng build không HC-safe — chạy quá hung (sprint vào pack, dính stun-lock) thì vẫn bị một-phát. Map "less recovery" + "increased monster speed" làm companion body-block kém và clear-via-AI chệch nhịp. *Test: chạy map less-recovery + increased-monster-speed, xác định cơ chế mitigation thực tế nếu có.*

**4. Gear floor cao hơn pitch — zoo bị gate sau pinnacle.** Phiên bản "zoo" mạnh nhất cần Sylvan's Effigy (Ritual pinnacle boss), Eternal March (chỉ từ Remnant, RNG), và magnitude Catha's Balance/Idolatry chưa biết. Pre-Effigy chơi companion-cap mặc định (1 mỗi loại). *Test: verify wording thực của Effigy + Catha's Balance % trong client; đo build chạy ra sao TRƯỚC khi có Effigy.*

**5. Nerf giữa league.** Day-1 ascendancy mới + Tame Beast vừa buff 40→84% + companion scaling chưa tune = prime nerf target. GGG đã flag minion scaling là outlier (Infernal Legion bị cắt ~50% trong cùng patch là tiền lệ). *Chuẩn bị: theo dõi hotfix tuần 1, có sẵn kế hoạch pivot self-clear (về Twister/grenade) nếu companion scaling bị cắt.*

**Day-1 test ưu tiên:** (a) spirit reservation đầy đủ + trần companion count thực + companion AI uptime per boss-type (FLOOR — quyết định build chạy mượt không); (b) Minion Splash có splash native beast attack không (CEILING); (c) wording thực của Sylvan's Effigy + The Catha's Balance % + The Raven's Flock roll; (d) Runic Ward cap/recovery thực. Đủ mấy cái này thì rewrite phần DPS/EHP từ MEDIUM lên HIGH.

## Tóm lại

Tame Beast Companion Zoo là pick Spirit Walker dễ chơi nhất và hưởng nhiều cơ chế buff 0.5 nhất: bắt boss-beast để chúng đánh, đổi giữa con AoE clear và con single-target, APM thấp không cần aim. Lộ trình league-start đã chạy thật tới T15 @ Lv82 trong ~9.5 giờ ngày đầu, nên viability + execution hai giai đoạn + clear floor là phần chắc tay (**MEDIUM** — field-test bởi creator khác, lên HIGH khi có own-PoB own-test của mình). Các con số riêng — DPS full-zoo, Runic Ward ~470, Hulking ~130% reservation, magnitude Catha's Balance, Effigy gate — vẫn là anecdote/unverified, label từng cái; pob_coverage vẫn **PARTIAL**. Chơi với tâm thế đo đạc: để Twister gánh tới khi companion online, capture monkey trước khi respec, cap res trước min-max, và đừng tin con số DPS/Ward nào trước khi có character của riêng mình.

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

### 2026-05-31 — straightforward pass (action spine + xoá editing-history)

- **Xoá self-referential editing narrative khỏi body** ("mình từng hiểu sai và đã sửa lại", "điểm mình sửa lại so với cách nghĩ đầu", "chỉnh lại một sai sót của bản trước", "bản trước của bài này xây kế hoạch HC") — state facts as own knowledge, lịch sử giữ ở Changelog (theo voice rule "không fact-check trong body / không để lại dấu vết quy trình").
- **Thêm section "Chơi build này — đường ngắn nhất"** ngay sau intro: action spine 6 bước (leveling Twister → Act 3 Lab 2 tame-monkey-rồi-respec → dựng zoo → Parry single-target → gear priority → endgame Effigy/Hilda). Reader rút được lộ trình mà không phải lội qua phần biện luận.
- **Gom caveat:** label độ-chắc còn terse inline (vd "(MEDIUM)"), đẩy giải thích test-plan dài xuống Failure Modes; trim khung "ceiling/floor" còn một định nghĩa ở Companion core, các chỗ sau chỉ nhắc gọn.
- **Trim intro + Tóm lại** khỏi recitation confidence-label dài dòng.
- Không đổi fact/number/confidence nào — chỉ restructure cho dễ chơi (frontmatter confidence_level giữ MEDIUM, pob_coverage PARTIAL).

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
