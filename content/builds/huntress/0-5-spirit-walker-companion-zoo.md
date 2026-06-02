---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Zoo Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-06-02'
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

Bắt con quái mạnh nhất khu vực, biến nó thành companion, để nó đánh thay mình. Đây là build companion trọn vẹn nhất của Huntress 0.5: một con carry beast gánh single-target, một con companion thứ hai + một con Bear miễn phí + vài skeleton làm nền cho buff, còn mình giữ :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} quét trash và lo phòng thủ. Companion tự seek mục tiêu nên gần như không phải aim — nhưng đừng nhầm với afk một nút: pilot vẫn xoay Whirling Slash → Twister để clear, weapon-swap snapshot :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} cho boss, và đặt curse/mark theo trận.

Đây là hướng ít người chơi: Spirit Walker chỉ chiếm ~1% meta 0.5, và trong số đó ~60% chơi Twister/projectile thuần, chỉ ~23% field một con companion carry (*poe.ninja snapshot 2026-06-02*). Nó không phải pick "meta thắng ladder" — nó là pick chạm vào nhiều cơ chế minion mới của patch hơn bất kỳ archetype nào khác (:wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"}, idol-on-sceptre, Kalguuran revive, Rage-cho-minion, Catha's Balance) và chơi cực dễ một khi companion online. Lộ trình league-start đã chạy thật tới T15 @ Lv82 trong ~9.5 giờ ngày đầu, con carry crit ~500k với gear sớm và chạm 12M một hit khi đầu tư — nên viability là phần chắc tay. Con số endgame riêng vẫn cần đo trong client vì PoB2 không model được companion.

## Chơi build này — đường ngắn nhất

Sáu bước gói trọn lộ trình:

1. **Act 1 → Act 3: level bằng Twister.** Rotation Whirling Slash ×3 → Twister; Frost Nexus lay chilled ground. Giữ ~20,000 gold cho lần respec, unlock :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} từ NPC Farrow ngay Act 1.
2. **Act 3, sau Lab 2 — đúng thứ tự: tame con Unique carry (monkey hoặc Silverfist) TRƯỚC, rồi mới full respec** sang cây companion-support. Đảo thứ tự là kẹt build dở dang.
3. **Dựng pack:** carry Unique (single-target) + con thứ hai (Wolf Pack permanent, hoặc rare Boar roll được Haste) + Bear miễn phí (Wild Protector) + một Skeletal Cleric và vài skeleton rẻ để bật Muster + Pain Offering.
4. **Single-target:** weapon-swap sang Set 2 snapshot Parry (+50% attack damage taken), về sau tự động hoá bằng skill Reputation.
5. **Scaling:** +minion gem level ở helmet / amulet / weapon trước hết; chọn một trong hai trục damage — idol-on-sceptre (rẻ, league-start) hoặc vũ khí main-hand damage cao nuôi The Catha's Balance (Tyranny's Grip). Cap 75% res trước mọi min-max.
6. **Endgame:** Masters of the Atlas ưu tiên Hilda (beast-hunt); Overseer tablet để nhảy tier. :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} phá trần companion-count là tham vọng late-game tách biệt, không phải đích mặc định của league-start.

## Vì sao build dễ chơi, dễ trúng, hưởng buff

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} là ascendancy duy nhất subdue được beast và bind chúng vào spirit, nên toàn bộ damage có thể dồn vào companion còn người chơi chỉ điều phối. Đó là ba thứ mình ưu tiên khi chọn league starter: **dễ trúng** (companion tự seek mục tiêu, không phải skillshot từng phát damage chính), **ít gánh aim** (companion auto-summon khi đủ Spirit rồi tự đánh), **hưởng buff** (build cắm vào gần như mọi vector minion mới của patch cùng lúc).

Cái khiến nó online ngay ngày đầu là đợt buff thẳng tay cho :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} ở 0.5: skill giờ cho summoned beast "40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20", summon tức thì khi đủ spirit, và **hạ minimum gem từ 9 xuống 7**. Mốc gem 7 là thay đổi quan trọng nhất — companion thật sự đánh được quanh Lv22 thay vì phải lê tới mid-game. Trên nền đó, tamed minion ăn thêm "25% more Damage at all Gem levels" và scaling "3% more ở gem 3 lên tới 50% more vs non-Unique enemies ở gem 8" — multiplier nằm sẵn trên skill, không tốn gear.

Vai trò người chơi gói trong ba việc: cấp spirit để fielding companion, buff chúng qua idol + ascendancy + aura, và tự lo phòng thủ + quét trash bằng Twister. Việc cấp-spirit và self-clear cạnh tranh trực tiếp ngân sách spirit — đó là tension thiết kế cốt lõi quay lại nhiều lần trong bài.

## Ascendancy tree — ba nhánh spirit + ba standalone

Tree có **8 notable**: ba nhánh spirit (mỗi nhánh một base + một enhancer) cộng các node standalone.

Nhánh **Stag** mở bằng **Vivid Stampede** (Vivid Wisps khi di chuyển, xả thành stampeding Stags khi attack) rồi **The Mórrigan's Guidance** (Stags +20% damage và +20% shock magnitude mỗi leap). Nhánh **Owl** mở bằng **Primal Bounty** (Owl feather khi dodge → projectile thêm) rồi **The Mhacha's Gift** — nhánh projectile-speed, lý do nó hợp leveling Twister. Nhánh **Bear** mở bằng **Wild Protector** — cho một con Bear companion **không chiếm companion slot**, tức một tank/clear miễn phí — rồi **The Catha's Balance**.

Hai node quyết định build. **The Natural Order** cho "Tame Beast can capture Unique Beasts, có thể giữ một con Unique Tamed Beast, và Unique Tamed Beasts có +30% Movement Speed" — đây là cách bắt boss-tier beast làm carry chính, bù điểm yếu kinh điển của minion là single-target. **The Catha's Balance** cho "Companions deal additional Attack Damage equal to **60% of your main hand weapon damage**" — biến vũ khí mình cầm (dù mình không tự đánh) thành nguồn damage cho companion, mở hẳn một trục scaling thứ hai.

> **Phân biệt dễ nhầm:** "The Catha's Balance" (node ascendancy Bear-branch, scale companion theo weapon) khác hẳn :wiki-link{url="https://www.poe2wiki.net/wiki/Catha's_Brilliance"} (Lineage Support — chỉ dùng để blind quanh enemy lấy evasion defense, damage không liên quan). Tên giống, chức năng khác.

**Idolatry** là multiplier idol: "Companions deal 10% increased damage per Idol, 2% increased Reservation Efficiency of Skills per Idol, **-4% to all Elemental Resistances per non-Idol Augment**". Dòng phạt res mới là chỗ đắt: lấy Idolatry nghĩa mỗi rune/augment thường trên gear thành -4% res, nên nó chỉ đáng khi gear đã đủ dày để hấp thụ penalty đó cộng giải attribute. Thực tế chỉ ~12% companion player chạy Idolatry — nó là pickup **high-budget**, không phải node early. **Sacred Unity** (cần cả ba base spirit) là free node nâng cả ba nhánh.

**Thứ tự lấy điểm** — hai trường phái, cả hai đều đúng:

- **Lab 1** Wild Protector (Bear miễn phí, clear + body-block sớm) **hoặc** The Natural Order (mở Unique tame sớm hơn). Lấy Bear trước an toàn hơn vì có ngay một con tank trước khi respec.
- **Lab 2** node còn lại trong cặp trên — để vào Act 3 đã có cả Bear lẫn quyền tame Unique.
- **Lab 3** The Catha's Balance (60% main-hand là multiplier mở liền, không gate gear).
- **Lab 4 / điểm sau** Idolatry chỉ khi gear chịu nổi penalty res; trước đó dồn điểm vào damage path + Sacred Unity.

## Companion core — chọn carry, dựng pack, để Twister gánh clear

Clear floor đi bằng Twister giữ xuyên suốt, companion là lớp damage chồng thêm — nên build không sụp dù một interaction companion chưa work. Khung này quan trọng: **floor = Twister clear (chắc); ceiling = companion tự clear cả màn (chưa chắc).**

**Con carry single-target** mở bằng The Natural Order (Unique Tamed Beast). Hai lựa chọn meta:

- **Monkey** (base Alpha Primate) — đường crit. Con monkey có sẵn ~25% base crit; ghép một rare mod **extra crits (+300% crit chance)** là crit cap ngay, không cần node crit nào. Đây là carry single-target burst cao nhất (clip 12M một hit), pick của creator chuyên companion.
- **Mighty Silverfist** — đường raw damage. Đây là carry phổ biến nhất trên ladder (~23% Spirit Walker field nó), attack pool damage cao và xuất hiện nhiều map nên dễ roll mod tốt. Bù lại không có crit profile như monkey.

**Con companion thứ hai** mở bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"}. Keystone này cho "two Companions of different types", và 0.5 rework nó thành "**30% more Reservation Efficiency of Companion Skills, 20% less Reservation Efficiency of non-Companion Skills**" (đổi mất hai dòng defence cũ). Hai lựa chọn con thứ hai: **Wolf Pack** giữ permanent (body-block ổn định, không cần săn lại), hoặc một **rare Boar** (base Diretusk Boar) roll được **Haste aura** (20% attack speed + 10% movement speed cho cả mình lẫn carry) cho high-budget khi defense đã đủ.

**Con Bear** từ Wild Protector miễn phí, không chiếm slot — cộng với carry + companion-2 là ba con đánh. Trên đó thêm một **Skeletal Cleric** (spirit thấp, heal pack) và vài **skeleton** rẻ để bật **Muster**: support cho "7% more damage per different type of Reviving minion đang field". Carry + companion-2 + Bear + 2 skeleton = năm loại reviving minion khác nhau → **Muster +35% more** (5 × 7%). Đủ skeleton thì **Pain Offering** sacrifice 2 con thay vì 1, buff attack-speed + % damage mạnh hơn. Đây mới là "zoo" thực dụng của build — một pack đa loại nuôi Muster, không phải đàn quân vô hạn.

Companion core ăn các buff verified, đều là vector mới 0.5:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Commanding_Rage"} giờ cho "2% increased Minion Attack Speed per 5 Rage" (trước 1% per Rage).
- **Rage I/II/III** giờ support được Minion Skills — mở Rage thành support cho companion. Có một nguồn rage-on-hit (vd trên đòn Parry) là companion tự nuôi Rage; lúc đó rút Rage support ra cắm thứ khác.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Last_Gasp_Support"}: minion dính Last Gasp "không thể chết vì damage vượt Maximum Life trong thời gian hiệu lực" — chống overkill qua burst.
- **Eternal March** (một trong 23 Kalguuran skill craft từ Remnant): nút panic hồi sinh đội minion đã chết. Chỉ drop từ Remnant encounter nên RNG tuần đầu.

Cái quyết định ceiling là :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} (support Strength mới): "Support Skills which create Minions which Strike, causing those Minions' Strikes to have Melee Splash". Nếu apply được lên companion thì con beast tự quét cả màn. Nhưng companion là một con quái chạy attack pool riêng, không phải player Strike skill, mà Minion Splash thiết kế cho skill có "Strikes" tường minh (Skeletal Warrior / Manifested Weapon) — nên native attack của beast có được support hay không vẫn là câu hỏi mở mình chưa tự xác nhận — tới giờ chưa thấy community chốt chắc chiều nào. Lộ trình league-start không cược vào nó: clear vẫn giao cho Twister.

## Scaling — hai trục damage, chọn theo ngân sách

Khác với build tự đánh, vũ khí ở đây phục vụ companion theo hai cách rời nhau. Hiểu rõ hai trục này là hiểu phần gear:

**Trục 1 — idol-on-sceptre (rẻ, league-start).** 0.5 mở "All Idols can now also be socketed into Sceptres", và sceptre còn grant minion level + spirit. ~87% companion player cầm rare sceptre vì lý do này. Idol companion cắm sceptre là engine scaling chính giai đoạn đầu:

- **Primate Idol** — "Allies in your Presence deal 40% increased Damage".
- **Idol of Grold** — "15% increased Damage for each different Companion in your Presence" — thưởng trực tiếp cho pack nhiều loại.
- **Snake Idol** (allies +10% attack speed), **Wolf Idol** (+20% crit damage bonus), **Ox Idol** (allies +12% all ele res — giúp cap res companion), **Owl Idol** (+10% cast speed).
- **Idol of Ralakesh** — "40% increased Armour, Evasion and Energy Shield while your Companion is in your Presence" — lớp defense theo companion.
- **Idol of Thruldana** (allies +13-27 added chaos), **Boar Idol** (allies regen 0.5% max life/s).

**Trục 2 — main-hand weapon damage cao nuôi Catha's Balance (high-investment).** Vì The Catha's Balance đẩy **60% damage vũ khí main-hand** sang companion, một vũ khí damage cao biến thành multiplier dù mình không tự đánh. Đây là lý do **Tyranny's Grip** (spear) là đồ được ~42% companion player dùng — Runeforge nó hai lần ở Verisium Anvil để scale flat damage, cắm Greater Rune of Leadership lấy strength giảm attribute starvation. Các route khác cùng trục: 2H mace qua :wiki-link{url="https://www.poe2wiki.net/wiki/Giant's_Blood"} (peak damage nhưng attribute pressure nặng), hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} damage cao + sceptre qua :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"}.

Thực tế hai trục không loại trừ nhau mà chạy song song qua **weapon set**: một set cầm sceptre (idol + minion level + spirit), set kia cầm vũ khí damage cao (snapshot Catha's + Parry). Đó là vì sao ladder thấy nhiều combo "Spear/Sceptre", "Mace/Sceptre", "Talisman/Sceptre" — không phải chọn một, mà swap giữa hai.

Trên cả hai trục, trục nâng cấp nền tảng vẫn là **+minion gem level** ở helmet / amulet / weapon: mỗi level trên companion gem là một more-multiplier thật (đọc tooltip thấy "minions deal 112% more damage" ở gem cao) cộng nâng base stat của con minion. Dồn +gem-level mọi slot offensive trước, rồi mới tính idol/weapon-axis.

### Sylvan's Effigy — đàn quân vô hạn là project tách biệt

:wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"} (Stoic Sceptre, Spirit 100) cho "**You can have any number of Companions of different types**", "(54-63)% increased Spirit", "+(9-12) to all Attributes", "Companions deal (85-91)% increased damage to your Marked targets", kèm grant Discipline + một Azmerian Wolf. Nó phá trần companion-count — biến pack ba con thành đàn quân.

Nhưng Effigy **drop-restricted, rơi từ Ritual pinnacle boss, không Orb of Chance được**, và gần như không thấy trên ladder companion. Ngay cả creator chuyên companion cũng coi phiên bản "army of minions với Effigy" là một **project riêng** (kiểu Zookeeper) chứ không phải đích tự nhiên của league-starter. Build chính chạy với companion-cap 2 (Trusted Kinship) + Bear + skeleton — đó là cấu hình đã field-test, còn full-zoo là tham vọng late-game gated sau một pinnacle drop. Đừng kỳ vọng đàn quân Effigy ngay — mặc định chơi với pack ba con + skeleton, coi Effigy là phần thưởng nếu farm Ritual đủ lâu.

Unique companion khác đáng để mắt: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock"} (buff minion damage + reservation efficiency) và :wiki-link{url="https://www.poe2wiki.net/wiki/Quipolatl's_Thesis"} Soul Core (cắm Gloves cho "Energy Shield Recharge starts when your Minions are Reformed" — về lý thuyết trigger ES recharge bằng weapon-swap Reform để né nerf ES-recharge của 0.5 — đừng dồn currency tới khi confirm sau hotfix tuần đầu).

## Spirit là trần cứng — math reservation

Mọi tham vọng pack đụng một con số: **spirit pool.** Reservation beast rất nặng — :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} list cho thấy phổ từ **Crag Leaper 23.1%** ở đầu nhẹ, qua **Diretusk Boar 39.0%** và **Alpha Primate 39.6%**, tới **Elephant Tortoise 56.1%** ở đầu nặng nhất. Companion limit 1 mỗi loại mặc định.

Trusted Kinship vừa cứu vừa siết: +30% **more** reservation efficiency cho companion nghĩa fielding được nhiều companion hơn cùng spirit pool, nhưng -20% **less** cho non-Companion skill nghĩa **self-clear/aura của mình đắt spirit hơn** — ép lựa chọn cứng giữa pack to và một personal skill mạnh. Spirit pool đến phần lớn từ gear: hai sceptre Spirit-100 + body kiểu Pariah's Embrace (+50 Spirit) cho ~250 spirit từ trang bị trước khi tính base/tree.

Khi muốn nhồi thêm, **Hulking Minions** phóng to companion (Gigantic: 20% more life / 20% more damage / 20% size) nhưng "cost significantly more Spirit". Cách thoát là anoint notable **Gigantic Following** ("Your Minions are Gigantic") — áp Gigantic lên mọi companion nên Hulking thành thừa, rút ra trả lại +1 link. Đổi lại Gigantic Following kèm **25% reduced Reservation Efficiency of Minion Skills** — slot được giải phóng nhưng tree-side đắt spirit hơn (vẫn lời, phải tính vào budget). High-budget còn nhồi thêm qua Idolatry reservation efficiency + unset ring (+1 minion) + relic reservation trong chest.

## Phòng thủ — evasion/ES + Runic Ward + companion làm bia

Build đứng xa nên defense dựa Evasion + Energy Shield, lấy companion làm body-block. Có một sự thật phải nói thẳng về evasion ở build này: **đầu game ít minion + ít evasion thì rất dễ ăn đòn**, nhưng khi vào endgame nhiều evasion + pack đông body-block thì đột nhiên thành tank. Defense ở đây scale phi tuyến theo gear — yếu thật ở floor, vững thật ở ceiling. 0.5 nerf ES recovery diện rộng (recharge delay, rate cap, gỡ nhiều rate node) nên không thể "tank bằng recharge" như trước.

**Damage redirect qua companion** là nguồn sustain mid-game thật. :wiki-link{url="https://www.poe2wiki.net/wiki/Loyalty"} cho "10% of Hit Damage taken from Companion's Life before you" (companion -30% max life); bản nâng :wiki-link{url="https://www.poe2wiki.net/wiki/Romira's_Requital"} (Lineage Support cùng category, support Tame Beast) thêm "Recoup 200% of that Damage as Life" — đẩy sát thương qua con bear rồi recoup ngược thành Life. Ghép thêm Idol of Ralakesh + body-block là lớp đệm thật. Nhưng dòng cũ "Companions có +1 Defence mỗi 2 Defence của bạn" **đã bị gỡ khỏi Trusted Kinship trong rework 0.5**, nên cơ sở HC kinh điển không còn — cộng ~9 cái chết tới Lv82 ngày đầu là bằng chứng trực tiếp **build không HC-safe**.

**Runic Ward** là defense layer mới của league: "kicks in once you reach 1 life, regenerates independently of your life" — thanh đệm tự hồi dưới HP bar. Add qua Verisium Runeforging (bench mở từ quest **Farrow ở Act 1**, Runeforging chỉ target **armour pieces**). Có ngưỡng level 55: armour dưới 55 nhận Ward không mất gì, trên 55 phải đánh đổi base defence. Vì thế đặt Runic Ward lên **boots / gloves / helmet — KHÔNG lên body armour** (chest là món level cao nhất, runeforge nó đánh đổi quá nhiều evasion). Mục tiêu thực dụng ~100+ ward trên boots/gloves làm thanh đệm 1-life cuối. Hai điểm dễ nhầm: increased Armour/Evasion/ES **không** scale Runic Ward (pool riêng, PoB2 chưa model — số là test target); và Runic Ward **không** feed stun threshold — 0.5 gỡ ward khỏi keyword "Defences" (giờ chỉ còn Armour/Evasion/ES) và mọi nguồn stun threshold đều key theo Life/ES, nên giữ ward thấp không mất stun threshold nào. Deflection cap ở 95%, capped sớm là gỡ được các avoid-deflection node.

Resist cap 75% như thường (Ox Idol cho companion +12% all ele res). Cap res của chính mình trước khi nghĩ tới min-max.

## Lộ trình hai giai đoạn — Twister rồi swap sang companion

Hai giai đoạn chơi khác hẳn nhau, và lẫn lộn là cách hỏng league-start nhanh nhất: **đừng cố chơi companion từ Lv1.** Companion yếu và spirit-starved suốt campaign sớm, nên giai đoạn đầu level bằng engine spear tự thân, rồi pivot quanh Act 3 khi đủ spirit + companion node + một con beast đáng bắt.

### Giai đoạn 1 — Leveling bằng Twister (Act 1 → Act 3)

Twister là engine campaign mạnh nhất league (giữ kỷ lục campaign quanh ~3 giờ), và nhánh Owl projectile-speed hỗ trợ nó rất tốt. Setup: Twister + **Retreat + Frost Nexus + Elemental Armament** (Frost Nexus lay chilled ground, biến Twister thành cold); rotation cốt lõi **Whirling Slash ×3 → Twister**, với Whirling Slash mang **Rage + Rapid Attacks**; đơn mục tiêu thêm **Barrage + Rapid Casting**; rải chilled ground diện rộng bằng **Ice-Tipped Arrows + Magnified Area**; :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ice"} + War Banner làm utility nhẹ. Ai ngại combo Whirling Slash thì crossbow grenade là engine thay thế tha lỗi hơn.

Hai việc bắt buộc, làm sai là kẹt giai đoạn 2: giữ **~20,000 gold từ Act 2 sang Act 3** cho lần full respec từ cây Twister sang cây support-companion (hai cây lệch nhau rất nhiều điểm); và unlock **Verisium Runeforging** sớm (quest Act 1 từ NPC Farrow), gateway crafting của league.

### Giai đoạn 2 — Swap → Mid → Endgame

**Swap ở Act 3, đúng thứ tự.** Companion thực dụng gánh được quanh Lv22, nhưng swap ngay rủi ro vì chưa đủ passive point — an toàn là level thẳng bằng Twister tới khi xong **Lab 2**, rồi mới respec. Thứ tự sống còn: **bắt con Unique carry TRƯỚC khi respec.** Respec sang cây companion mà chưa có carry thì rơi vào build dở dang — cây mới chưa đủ damage để giết Unique beast, cây cũ đã xoá. Đúng trình tự: Lab 2 xong → tame Unique carry → respec. Pivot này có "playstyle whiplash" và phá vài support setup, chuẩn bị tâm lý đổi nút một lần. Trên đường path qua cây mới, lấy node **Crystallized Immunity** ("cannot be chilled") — gỡ một trong những thứ khó chịu nhất khi đứng yên điều companion.

**Bắt companion.** Carry Unique nhắm monkey hoặc Silverfist (xem Companion core). Con companion-2 nếu đi rare-Boar-Haste: spawn rare ở camp trong **Infested Barrens (Act 3)** — quanh Troubled Camp có hai rare monster, tìm con boar (base Diretusk Boar). Muốn re-roll mod (nhắm **Haste aura**): nếu chưa giết, reset instance qua checkpoint để rare spawn lại với mod khác; nếu đã giết, phải tạo zone mới (respawn-at-checkpoint không hồi sinh con đã chết). Tránh con Quadrilla ở Jungle Ruins vì mod tốc độ của nó khoá không cho roll Haste. Suốt giai đoạn này vẫn giữ Twister/Ice-Tipped Arrows làm clear.

**Single-target — Parry snapshot + Reputation.** Parry đặt debuff khiến enemy chịu **+50% attack damage**, và node weapon-set scale magnitude này lên gần gấp đôi — đây là cách phá boss. Cắm Parry ở **Weapon Set 2** với off-hand chỉ cần **buckler (kiểu Dunkelhalt, grant Parry) + một scepter rác CÙNG lượng spirit** với scepter chính: weapon-swap mà tụt spirit thì companion/skeleton bị desummon (Pain Offering bay mất), nên scepter dự phòng phải khớp spirit.

Nhược điểm kinh điển của snapshot Parry là phải đứng yên giữ buckler. Bản nâng QoL lớn nhất là skill buff **Reputation** phá luôn nhược điểm đó: nó có **duration + cooldown chạy ngay khi duration bắt đầu**, nên cooldown ≈ duration cho gần **100% uptime**; trong lúc active nó cho **100% block** và **tự apply Parry** khi enemy đánh trúng — mình được chạy quanh tự do thay vì đứng channel. Skill có stun-buildup nên **heavy stun gỡ buff** — cần stun threshold đứng vững, mà nguồn là Life/ES (Stone Rune socket trên armour, hoặc threshold theo % ES) chứ **không** phải Runic Ward (0.5 không cho ward feed stun threshold); pool ward to hay nhỏ không đổi việc Reputation có bị stun-strip hay không. Reputation chạy supports cooldown-recovery + prolong-duration + rapid-casting. (Effect demo on-stream bởi hai creator độc lập; tên "Reputation" là caption-derived, mình chưa đối chiếu được literal trong client — nhãn tạm, kiểm lại khi đọc tận game.)

**Support-gem tiến hoá.** Companion carry chạy **Rapid Attacks + Feeding Frenzy + Rage**, thêm **Heft** khi có link, và **Super Critical** trên con monkey (hạ crit chance đổi crit damage — monkey đã crit cap nhờ extra-crit mod). Bear/Wolf chạy Rapid Attacks + Rage + Feeding Frenzy + Magnified Area, **Loyalty** (nâng Romira's Requital high-budget). Self-skills: curse (Despair / Elemental Weakness), **Sniper's Mark + Charged Mark + Mark for Death**, **Pain Offering + Brutus's Brain** (để offering không chết vì AoE boss), Freezing Mark cho variant cold-monkey, Skeletal Warriors + Last Gasp từ sceptre. High-budget swap **Hulking Minions → Muster** khi reservation efficiency đủ.

### Roll rare mod lên con Unique carry — multiplier lớn nhất sau khi pack online

Con carry mặc định spawn với vài rare mod xoàng (unleash lightning, ES aura, extra lightning). Mod đáng săn là **extra crits = +300% crit chance**: trên con monkey ~25% base crit, một mod này đẩy lên crit cap ngay — Best-in-Slot, cap crit một mình nó. Đây là damage multiplier lớn nhất dán lên carry.

Nguồn mod thêm là **Precursor Tablet dòng "unique monsters have one additional rare modifier"**. Đặt ba cái vào Map Device rồi chạy map có carry làm boss — **Rupture** hoặc **Riverside** (con Silverfist map-boss kiểu Zekoa the Headcrusher) — con carry spawn với tới ba/bốn rare mod thêm. Tier map **không** đổi base stats: T1 hay T15 cũng ra con base giống nhau, sức mạnh thật scale theo **gem level** của Tame Beast cắm trên nó. Vì thế chạy **tier thấp nhất có thể** cho an toàn — bắt một con Unique tame trong map T15 sáu-mod một-portal mà chết là phí trắng một lần dùng tablet.

Vì phải roll nhiều lần mới ra mod ngon, giữ **một con carry thứ hai Lv18 5-link làm dự phòng**, và dùng mẹo **disenchant**: lột con Tame Beast 6-link Lv20 +1 gem thành con tame beast trắng, tái dùng mà không phải mua 6-link mới mỗi lần bắt phiên bản khác. Quy trình: disenchant con 6-link ngon → con trắng + bốn link nhét lên con Lv18 → dùng con Lv18 đi bắt con có-mod → dồn link 6 ngon trở lại con vừa bắt.

Chi tiết đầy đủ — bảng tablet slot theo số waystone modifier, Cruel Hegemony + tablet suffix "of Contest", node Jado double-effect, mẹo reroll bằng respawn, và giá tablet live — ở [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers).

## Tương tác với league Runes of Aldur

Build ăn khớp league mechanic hơn phần lớn archetype. **Remnant + Runic Recipe** craft gear companion (sceptre + idol + spirit gear) theo ý. **Eternal March** và các Kalguuran skill minion chỉ drop từ Remnant encounter — chính việc chơi league mechanic là cách lấy nút panic-revive, nhưng cũng nghĩa nó RNG-gated tuần đầu. **Verisium Runeforging** thêm Runic Ward / Runeforge vũ khí Tyranny's Grip. Và vì Sylvan's Effigy rơi từ **Ritual pinnacle boss**, ai theo đuổi full-zoo phải farm Ritual.

**Một alt-path muốn test: Onslaught cho cả zoo qua loop Runic Ward.** 0.5 mở một cách buff đội bằng chính pool Runic Ward — :wiki-link{url="https://www.poe2wiki.net/wiki/Warding_Rune_of_Bodyguards"} cắm sceptre cho "Minions in your Presence have Onslaught while you are on Low Runic Ward", và skill Kalguuran *Verisium Manifestations* (reservation 30 Spirit, **verify-in-client** — wiki chưa có trang) tiêu (7–30) Runic Ward mỗi lần trigger để giữ mình ở "Low Runic Ward", thắp :wiki-link{url="https://www.poe2wiki.net/wiki/Onslaught"} (20% increased Skill Speed + 10% move) cho mọi companion trong presence. Sức hút có thật cho một đội đông, nhưng mình không xếp nó vào core vì ba lý do: Onslaught là *increased Skill Speed* cộng dồn **additive** cùng bucket với buff đội đã có — gần trùng với Haste mà con Boar roll, cộng Commanding Rage + Snake Idol — nên uplift biên thực chỉ ~11–15% chứ không phải +20%; để bật "Low Runic Ward" mình phải cố tình giữ pool ~100+ ward cạn, tức **chủ động vô hiệu hoá lớp đệm 1-life** đúng EHP order trên một build vốn không HC-safe — và lưu ý đây **không** đánh đổi stun threshold (Runic Ward không feed stun threshold), chi phí nằm trọn ở pool cứu-mạng-cuối; và uptime nghịch với boss (ít hit → ward hồi vượt "Low" → Onslaught tắt) đúng vào các trận Faction Leader / Pinnacle mobile mà single-target companion mới cần buff. Phiên bản "auto-summon rảnh tay" còn tựa lên một mắt xích chưa nguồn nào xác nhận — rằng minion hit lên enemy dính *Repulsion* (curse, **verify-in-client**, gắn :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"} thành aura) làm Repulsion Wave được tính là đòn attack của mình để kích Verisium Manifestations — mà Twister vốn đã thoả gate đó nên đường minion là thừa. Cơ chế đầy đủ + test plan tự-đo tách ra deep-dive riêng: [Runic Ward Onslaught Loop cho Minion](/mechanics/0-5-runic-ward-onslaught-loop).

**Masters of the Atlas.** 0.5 thêm hệ Atlas progression kiểu Ascendancy: align với master, mỗi master có 12 node chọn 4, mở từng hàng bằng mission, swap tuỳ map. Ưu tiên **Hilda** (monster hunter, mở ở Hilda's Campsite tây-nam điểm start, level bằng săn boss) — hợp beast-hunt nhất. **Jado** (mở bằng clear một anomaly map gần start) và **Doryani** (corruption nexus) là hai questline còn lại, cả ba swappable mỗi map.

**Overseer Precursor Tablet** cắm vào Map Device thì map đó được thêm Map Boss và nâng thành **Powerful Map Boss** — khó hơn, drop tốt hơn, đặc biệt **thường drop Waystone cao hơn một tier**. Đó là cơ chế đứng sau chiến thuật nhảy cóc tier ngày 1: pack gánh boss mạnh an toàn để lấy Waystone upgrade, lên thẳng T15 sớm. Không có nguồn nào định lượng boss tankiness tăng bao nhiêu — đừng tin con số nhân HP nào.

## DPS & EHP — số cứng chờ own-test

Mình không quote DPS cứng vì PoB2 fork **không model được** tamed beast stats, companion AI uptime, hay Spirit Walker bonus-on-companion (pob_coverage **PARTIAL → NA** cho phần companion). Cái dựng được là chain multiplier verified:

`companion_base_damage (theo beast) × 1.84 (Tame Beast more @gem20) × 1.25 (more all-level) × [1.50 vs non-Unique @gem8] × (1 + 0.60×main_hand từ Catha's Balance) × (1 + 0.10×idol_count nếu Idolatry) × (1 + idol_ally_damage_sum) × crit_multiplier (monkey ~25% base crit + extra-crit mod 300% → crit cap) × (1 + 0.85→0.91 nếu Marked, từ Effigy)`

Các multiplier đều verified; cái chưa biết là `companion_base_damage` (phụ thuộc con beast) và liệu Minion Splash có nhân clear không. Field cho hai mốc tham chiếu: monkey default-swing ~500k @ Lv82 gear sớm, và clip ~12M một hit khi đầu tư crit cap — đủ để nói single-target không chết, nhưng đây là anecdote (đo trên target gần đứng yên), không phải con số min-max.

EHP layer order 0.5: armour → evasion → block → max res → ES/Life pool → **Runic Ward** → recovery. Runic Ward là pool riêng không scale bằng inc-defence, PoB2 chưa model — nên EHP cũng chờ đo in-client. Mục tiêu thực dụng: cap 75% res, evasion/ES vừa đủ sống sau lưng companion, đo Runic Ward thực tế trong maps (PoB2 không model).

## Failure Modes — 5 cách build gãy

**1. Minion Splash không apply lên native attack của tamed beast → mất AoE-upside, KHÔNG sụp build.** Clear floor giao Twister giữ xuyên suốt, nên kịch bản xấu nhất là "companion single-target + một nút Twister quét trash" thay vì "companion tự clear cả màn". Field đã xác nhận floor này đứng tới T15. *Test: link Minion Splash lên con strike-beast, đứng trước pack white, xem strike có splash không.*

**2. Spirit gating + companion uptime trên boss mobile.** Reservation beast nặng (39-56% cho con đáng dùng), Trusted Kinship phạt -20% non-Companion skill, cộng reservation của Hulking — fielding pack + self-defense rất dễ vượt ngân sách spirit league-start. Raw single-target đã dịu (~500k → 12M crit), nhưng companion AI uptime trên boss **di chuyển nhanh** (Faction Leader, Pinnacle trong Ocean Exploring) là phần lo cốt lõi chưa đóng — "default swing" không trả lời uptime khi boss chạy. *Test: log spirit reservation từng skill, xác định fielding được bao nhiêu companion; đo uptime trên boss mobile.*

**3. Không có mitigation companion-life → không HC-safe.** Dòng chuyển defence sang companion đã bị gỡ trong rework Trusted Kinship 0.5. Evasion yếu ở low-investment + ~9 cái chết tới Lv82 ngày đầu là bằng chứng build không HC-safe — chạy quá hung (sprint vào pack, dính stun-lock) vẫn bị một-phát. Map "less recovery" + "increased monster speed" làm companion body-block kém và clear-via-AI chệch nhịp. *Test: chạy map less-recovery + increased-monster-speed, xác định mitigation thực tế.*

**4. Gear floor cao hơn nghĩ — full-zoo gate sau pinnacle.** Phiên bản "any number of companions" cần Sylvan's Effigy (Ritual pinnacle), và build damage thật cần hoặc idol stack hoặc Tyranny's Grip Runeforged + extra-crit mod trên carry. Pre-investment chơi pack 2-companion với raw beast — vẫn ổn nhưng không phải đàn quân. *Test: đo build chạy ra sao TRƯỚC khi có Effigy / extra-crit mod.*

**5. Nerf giữa league.** Day-1 ascendancy mới + Tame Beast vừa buff 40→84% + companion scaling chưa tune = prime nerf target. GGG đã flag minion scaling là outlier (Infernal Legion bị cắt ~50% trong cùng patch là tiền lệ). *Chuẩn bị: theo dõi hotfix tuần 1, có sẵn kế hoạch pivot self-clear (về Twister/grenade) nếu companion scaling bị cắt.*

**Còn cần verify trong client (PoB2 không model companion nên không dựng được số trên giấy):** (a) spirit reservation đầy đủ + trần companion count + AI uptime per boss-type (FLOOR); (b) Minion Splash có splash native beast attack không (CEILING); (c) Runic Ward cap/recovery thực; (d) magnitude reservation của Hulking. Đủ mấy cái này thì viết lại phần DPS/EHP thành số đã verify.

## Tóm lại

Tame Beast Companion là pick Spirit Walker dễ chơi nhất và hưởng nhiều cơ chế buff 0.5 nhất: bắt boss-beast để chúng đánh, fielding một carry + companion-2 + Bear + skeleton pack, snapshot Parry cho boss, APM thấp không cần aim. Đây là hướng thiểu số (companion ~23% của một ascendancy ~1% meta) nhưng coherent và field-test tới T15 @ Lv82 ~9.5h ngày đầu bởi hai creator độc lập — viability + execution hai giai đoạn + clear floor là phần chắc tay. Phần "any number of companions" Effigy zoo là tham vọng late-game tách biệt, không phải đích league-start. Chơi với tâm thế đo đạc: để Twister gánh tới khi companion online, capture carry trước khi respec, chọn một trục damage (idol-sceptre rẻ hoặc Catha's-weapon đắt), cap res trước min-max, và đừng tin con số DPS/Ward nào trước khi có character của riêng mình. pob_coverage vẫn **PARTIAL**.

## Relationships

- **related_builds** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — engine leveling khuyên dùng để gánh campaign trước khi pivot companion; cùng ascendancy Spirit Walker.
- **alternative_to** [Spirit Walker Unique Beast Apex](/builds/huntress/0-5-spirit-walker-unique-beast-apex) — hướng dồn vào một Unique Tamed Beast single-target thay vì pack nhiều con.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — deep-dive cơ chế tame + companion scaling + candidate boss beast nền tảng cho build.
- **related_mechanics** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers) — kỹ thuật stack tablet (Cruel Hegemony + "of Contest") trên Map Device + reroll để nhồi Extra Crits lên con Unique carry (Mighty Silverfist / Zekoa), kèm giá tablet live.
- **related_mechanics** [Runic Ward Onslaught Loop cho Minion](/mechanics/0-5-runic-ward-onslaught-loop) — alt-path buff loop (Verisium Manifestations + Repulsion qua Blasphemy + Warding Rune of Bodyguards) giữ "Low Runic Ward" → Onslaught cho cả zoo; honest tradeoff: additive gần trùng Haste, drain chính pool ward 1-life của build, mắt xích trigger chưa verify.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Remnant/Runeforging/Runic Ward mà build khai thác.
- **competes_with** [Infernal Legion Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — minion archetype khác hưởng buff khác; Infernal Legion bị nerf ~50% trong cùng patch.

## Resources

Nguồn execution league-start (đã fold vào doc — chi tiết ở Changelog):

- [CaptainLance9 — Spirit Walker Beast Tamer (Mobalytics, kèm PoB code)](https://mobalytics.gg/poe-2/profile/captainlance/builds/0-5-captainlance9-s-spirit-walker-beast-tamer) — variant ladder Act 1→Red Maps, cập nhật 2026-06-01; nguồn dual-sceptre endgame + monkey crit carry + Haste/extra-crit tech.
- [CaptainLance9 — Day 1 / Day 2 Spirit Walker videos](https://www.youtube.com/captainlance9) — field log: T15 @ Lv82 ~9.5h, capture-before-respec, tablet roll extra-crits, disenchant tech, Reputation auto-Parry, Runic Ward placement.
- [Ghazzy + Lollash — Spiritwalker Companion (PoE Vault leveling + endgame)](https://www.poe-vault.com/poe2/huntress/spirit-walker/tamed-boss-beast-build-guide) — guide companion độc lập: 2-companion damage-core, Tyranny's Grip BIS, Catha's Lab-3 / Idolatry high-budget, onslaught engine, cold-monkey variant, framing "Effigy zoo = project riêng".
- poe.ninja Runes of Aldur build data (*snapshot 2026-06-02, version 0529-20260602-16733*) — meta share: Spirit Walker ~1%, companion-carry ~23% trong class, gear (Sceptre 87%, Tyranny's Grip 42%, Idolatry 12%).

## Changelog

### 2026-06-02 — alt-path Runic Ward Onslaught Loop + sửa lỗi stun-threshold

- **Cross-link mechanic deep-dive mới** [Runic Ward Onslaught Loop cho Minion](/mechanics/0-5-runic-ward-onslaught-loop): loop Verisium Manifestations (Kalguuran skill, 30 Spirit, tiêu Runic Ward mỗi attack-hit) + Repulsion curse qua Blasphemy + Warding Rune of Bodyguards ("Onslaught while you are on Low Runic Ward") cấp Onslaught cho cả zoo. Verify verbatim từ poe2db.tw live + patch note. Verdict **ALT-PATH** không phải CORE: Onslaught additive ~11–15% (gần trùng Haste/Commanding Rage/Snake Idol đã chạy), uptime nghịch với boss, và giữ "Low Runic Ward" cố tình drain lớp đệm 1-life trên build không HC-safe; mắt xích "minion hit → Repulsion Wave tính là đòn của mình → kích Verisium Manifestations" chưa nguồn xác nhận (Twister vốn đã thoả gate nên đường minion thừa). Thêm scoped mention vào section league + related_mechanics.
- **Sửa lỗi factual stun-threshold:** hai chỗ trước viết "Runic Ward cấp stun threshold giữ buff Reputation" — sai cơ chế. 0.5 gỡ Runic Ward khỏi keyword "Defences" (patch L313) và mọi nguồn stun threshold đều key theo Life/ES (Stone Rune armour L692, ES-based L727, CI-fix L855); ward không bao giờ feed stun threshold. Re-source heavy-stun resistance của Reputation về Life/ES; ~100+ ward giờ chỉ phục vụ lớp đệm 1-life.

### 2026-06-02 — rewrite trực tiếp (day-4 verify + Ghazzy + poe.ninja meta)

- **Author-from-scratch, không fold tiếp.** Tái cấu trúc theo build logic (là gì → chơi sao → vì sao → companion core → scaling → spirit → defense → leveling → league → DPS/EHP → risks), resolve hedge thành fact có citation, gom confidence-label về mức recommendation + Failure Modes thay vì rải mỗi câu. Reset changelog về một entry (history cũ collapse bên dưới).
- **Patch/wiki verify:** The Catha's Balance = **60% main-hand weapon damage** (Spirit_Walker.md + hai creator); Trusted Kinship 0.5 rework reservation efficiency + gỡ defence-transfer (patch L462); Tame Beast 40→84% @gem20 + min-gem-7 (patch L1095); Commanding Rage 2%/5-Rage (L473); Last Gasp no-overkill (L322); Idolatry/Sylvan's Effigy/Hulking/Gigantic Following/reservation values verbatim wiki.
- **Reframe lớn — full-zoo là project tách biệt, không phải apex.** poe.ninja (Sylvan's Effigy vắng top companion items) + creator companion specialist đều coi "any number of companions" Effigy army là Zookeeper project riêng. Build chính = 2-companion (Trusted Kinship) + Bear + skeleton pack. Bỏ implication đàn quân Effigy là đích league-start mặc định.
- **Sửa over-emphasis Idolatry:** chỉ ~12% companion player chạy → pickup high-budget (gear phải hấp thụ -4% res/non-idol + giải attribute), KHÔNG phải "Lab 3+4 dồn idol trước mọi thứ". Catha's Balance lên Lab-3, Idolatry về sau.
- **Thêm trục scaling thứ hai (weapon → Catha's 60%):** Tyranny's Grip (42% meta, Runeforge 2× Verisium) / Giant's Blood mace / Jade Talisman + Lord of the Wilds. Trước doc chỉ có Trench Timber + "sceptre là dàn idol biết đi" — nửa sự thật. Trình bày hai trục song song qua weapon-set (Spear/Sceptre, Mace/Sceptre combos thật trên ladder).
- **Carry beast flexibility:** monkey (Alpha Primate, crit, ~25% base + extra-crit 300% → cap) vs Mighty Silverfist (raw damage, carry phổ biến nhất ~23% ladder). Trước doc chỉ có monkey.
- **Niche honesty:** state thẳng Spirit Walker ~1% meta, companion ~23% trong class — off-meta-but-coherent, field-test hai creator độc lập (Ghazzy + CaptainLance9), không phải ladder-meta.
- **Cross-link + tách deep-dive** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers): kỹ thuật tablet-stacking/reroll/giá chuyển sang doc mechanic riêng, subsection "Roll rare mod" giữ phần build-side + pointer. Sửa stale **Tower → Map Device** (0.5 bỏ Tower, tablet đặt thẳng vào Map Device — Ghazzy day-4 footage + wiki).
- **Fold delta Ghazzy độc lập:** Wolf Pack permanent (body-block) vs rare-Boar-Haste optional; defense arc honest (low-invest evasion tệ → high-gear tanky); supports (Super Critical, Pain Offering + Brutus's Brain, Heft); onslaught engine; cold-monkey variant; deflection cap 95%. Corroboration nâng Reputation/Romira's/capture-before-respec/Haste-reroll lên hai-nguồn.
- **Fix dead cross-link** `0-5-spirit-walker-catha-companion` (folder không tồn tại) → repoint sang mechanic deep-dive + unique-beast-apex. Thêm Ghazzy + poe.ninja vào Resources.
- Frontmatter giữ nguyên confidence_level + pob_coverage (field-tested bởi creator, own-PoB own-test vẫn pending).

### Lịch sử trước (2026-05-29 → 2026-05-31)

Doc khởi đầu pre-league theorycraft (2026-05-29, spine từ `data/release-notes/Version_0.5.0.md`), rồi fold ba đợt: factual fixes + idol-on-sceptre + reservation math (2026-05-30); execution hai giai đoạn + reframe Minion Splash thành ceiling-test (2026-05-30); day-1 field update CaptainLance9 (T15@Lv82) + Masters of the Atlas + Overseer tablet + Crystallized Immunity + capture-before-respec gotcha (2026-05-31); day-2 field update (tablet extra-crit roll, disenchant tech, Reputation, Romira's Requital, Runic Ward placement, Muster math) + straightforward pass thêm action spine (2026-05-31). Bản 2026-06-02 viết lại toàn bộ từ những facts đã verify này.
