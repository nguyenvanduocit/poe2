---
template: templates/build-template.md
document_type: build
title: Tame Beast Companion Zoo Spirit Walker
status: draft
author: duocnv
created: '2026-05-29'
updated: '2026-05-30'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.0
budget_tier: league-starter
confidence_level: LOW
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

Đây là build đi bắt con quái mạnh nhất khu vực rồi để nó đánh thay mình — một bầy companion, đổi giữa con single-target và con AoE clear tuỳ tình huống, còn mình lùi lại lo buff với phòng thủ. Trong toàn bộ option của Huntress 0.5, đây là cái dễ chơi nhất và hưởng nhiều cơ chế buff mới nhất: companion tự tìm mục tiêu nên gần như không cần aim, APM thấp, và build chạm vào nhiều vector mới của league hơn bất kỳ archetype nào khác — :wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"}, 19 companion passive, idol-on-sceptre, Kalguuran revive, Rage-cho-minion. Đổi lại, đây cũng là build chưa ai chứng minh được trên live, nên toàn bộ con số dưới đây là test target chứ không phải fact đã verify — mình sẽ nói rõ chỗ nào chắc, chỗ nào cần log ngày đầu.

## Vì sao build này thắng về "dễ chơi + dễ trúng + hưởng buff"

Spirit Walker là ascendancy duy nhất trong 0.5 subdue được beast và bind chúng vào spirit. Patch note mô tả nó "calls upon spirits aligning with the Stag, Owl or Bear... may subdue even the most formidable beasts, binding them in spirit, or call forth a spectral companion to fight beside her" — nghĩa là toàn bộ damage của build có thể dồn vào companion, người chơi chỉ điều phối. Đó là lý do nó ăn trọn ba tiêu chí mình ưu tiên khi chọn league starter: **dễ trúng** (companion tự seek mục tiêu, không phải skillshot như Twister hay Ice Shot), **dễ chơi** (auto-summon khi đủ Spirit, ít nút bấm), và **hưởng buff** (build cắm vào gần như mọi cơ chế minion mới của patch cùng lúc).

Cái khiến nó chơi được ngay ngày đầu là đợt buff thẳng tay cho :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}: skill giờ "deal 40% more damage at Gem Level 9 scaling up to 84% at Gem Level 20, immediately summons newly Tamed Beasts if you have enough spirit, minimum Gem level of 7 (previously 9)". Hạ xuống Lv7 gem là thay đổi quan trọng nhất — nghĩa là companion thật sự online quanh Lv22 (khi đã có spirit + một con beast đáng bắt) thay vì phải lê tới mid-game. Trên nền đó, các tamed minion còn ăn thêm "25% more Damage at all Gem levels" và scaling "3% more ở gem 3 lên tới 50% more vs non-Unique enemies ở gem 8" — đây là nguồn của con số "minion buff ~25-35%" mà cộng đồng hay nhắc, và nó là multiplier nằm sẵn trên skill chứ không cần đầu tư gear.

Vai trò của người chơi gói gọn trong ba việc: (1) cấp spirit để fielding companion, (2) buff chúng qua idol + 19 companion passive + aura, (3) tự lo phòng thủ và quét trash bằng một skill phụ nhẹ. Việc số (1) và (3) cạnh tranh trực tiếp ngân sách spirit với nhau — đó là tension thiết kế cốt lõi mình sẽ quay lại nhiều lần trong bài.

## Ascendancy tree — ba nhánh spirit + hai standalone

Đây là phần mình từng hiểu sai và đã sửa lại theo wiki (`Spirit_Walker.md`): tree có **8 notable**, gồm ba nhánh spirit (mỗi nhánh một base + một enhancer) cộng hai node standalone. Chúng đều tồn tại verbatim, không phải đồn đoán.

Nhánh **Stag** mở bằng **Vivid Stampede** (không cần prereq) rồi tới **The Mórrigan's Guidance**. Nhánh **Owl** mở bằng **Primal Bounty** rồi **The Mhacha's Gift** — đây là nhánh projectile-speed, hữu ích nếu bạn level bằng Twister (xem phần leveling). Nhánh **Bear** mở bằng **Wild Protector** — node này cho một con Bear companion **không chiếm companion slot**, tức là một con tank/clear miễn phí — rồi tới **The Catha's Balance**, node biến vũ khí chính của bạn thành damage cho companion ("Companions deal additional Attack Damage based on your main hand weapon damage"). Con số % cụ thể của Catha's Balance **không có trên wiki** (chỉ có concept), nên mình treat magnitude là **LOW, log ngày 1** — node tồn tại chắc chắn, độ lớn thì chưa.

> **Phân biệt dễ nhầm:** "The Catha's Balance" (node ascendancy Bear-branch, scale companion theo weapon) khác hẳn ":wiki-link{url="https://www.poe2wiki.net/wiki/Catha's_Brilliance"}" (Lineage Support mới, patch note xác nhận). Hai thứ tên giống, chức năng khác. Đừng gộp.

Hai node standalone gánh phần lớn sức mạnh build. **The Natural Order** cho phép "Tame Beast capture Unique Beasts, có thể giữ một con Unique Tamed Beast cùng lúc, và Unique Tamed Beasts có +30% Movement Speed" — đây là cách bạn bắt boss-tier beast làm single-target chính. **Idolatry** là node multiplier idol: "Companions deal 10% increased damage per Idol in your Equipment, 2% increased Reservation Efficiency of Skills per Idol, -4% to all Elemental Resistances per non-Idol Augment". Node này biến idol từ phụ kiện thành scaling axis thật, và là lý do phần gear bên dưới dồn vào idol-on-sceptre. Cuối cùng **Sacred Unity** (cần cả ba base spirit) là free node nối tree lại.

Thứ tự lấy điểm ascendancy mình chọn: **Lab 1** lấy The Natural Order (mở Unique Beast tame — nguồn single-target sớm). **Lab 2** lấy nhánh Bear (Wild Protector cho Bear free + The Catha's Balance bắt đầu scale theo weapon). **Lab 3 + Lab 4** lấy Idolatry + hoàn thiện nhánh phù hợp hướng damage. Lý do ưu tiên Natural Order trước: single-target là điểm yếu kinh điển của minion, có Unique Beast sớm là cách bù trực tiếp nhất.

## Companion core — Minion Splash là trụ clear, và nó CHƯA chắc đứng

Đây là phần quan trọng nhất cả bài, nên mình đặt lên trước gear: **toàn bộ thesis "dễ trúng + AoE clear mượt" của build dựa lên một interaction chưa verify.**

:wiki-link{url="https://www.poe2wiki.net/wiki/Minion_Splash"} (support Strength mới của 0.5) "creates Minions which Strike, causing those Minions' Strikes to have Melee Splash" — biến một con strike-minion single-target thành AoE clearer. Nếu nó apply lên companion, build clear cả màn bằng một con beast đánh strike. Nhưng có một vấn đề mình phải nói thẳng: **companion do Tame Beast triệu ra là một con quái chạy attack pool riêng của nó, không phải một player Strike skill.** Minion Splash được thiết kế rõ ràng cho các skill kiểu Skeletal Warrior hay Manifested Weapon companion (vốn có "Strikes" tường minh). Native attack của một con beast tame có được tính là "Strike" để Minion Splash support hay không — **đây là ẩn số trung tâm, chưa ai test được pre-league.**

Mình viết rõ thế này vì nếu Minion Splash không apply lên native attack của beast, thì AoE-clear thesis sụp, và build tụt từ "dễ trúng nhất" xuống "single-target zoo cần skill phụ để clear". Đây là **Day-1 test #1** của cả build (xem Failure Modes), không phải một footnote.

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

Thứ nhất, :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"} từng là nguồn hồi ES theo evasion độc lập với recharge cluster — nhưng nó **bị nerf trong 0.5** (instant → ~2% evasion/s over 4s), nên không còn là viên đạn bạc; vẫn dùng được như một lớp, không phải trụ. Thứ hai là **Runic Ward** — defense layer mới của league, "kicks in once you reach 1 life, regenerates independently of your life". Có thể craft Runic Ward Rune qua Verisium Runeforging làm lớp đệm. **Cảnh báo quan trọng:** patch note (mục "Defences" keyword) xác nhận increased Armour/Evasion/Energy Shield **không** scale Runic Ward — nó là pool riêng, và PoB2 chưa model nó, nên mọi con số Runic Ward là test target thuần.

Resist cap 75% như thường (Ox Idol trên sceptre cho companion +12% all ele res, giúp cap res cho cả zoo). Cap res của chính bạn trước khi nghĩ tới min-max.

## Leveling — con đường thông minh là Twister rồi pivot, không phải companion từ đầu

Đây là điểm cả Ghazzy (chuyên gia minion) lẫn community-consensus đều đồng ý, và là cách giải quyết hai điểm yếu lớn nhất của build cùng lúc: **đừng cố chơi companion từ Lv1.**

Companion yếu và spirit-starved trong campaign sớm, nên con đường mượt nhất là **level bằng một engine tự thân rồi pivot sang companion quanh Act 3** khi đã đủ spirit + companion node + một con beast đáng bắt. Có hai lựa chọn engine leveling:

- **Twister** (spear) — Ghazzy gọi nó "broken and overpowered" cho tốc độ campaign, giữ kỷ lục ~3 giờ. Đây là đường mình khuyên nếu muốn campaign nhanh nhất, và nhánh Owl của Spirit Walker (projectile speed) hỗ trợ Twister rất tốt trong giai đoạn này. Build Twister đầy đủ đã có sẵn — xem phần Relationships để cross-link, đừng dựng lại ở đây.
- **Crossbow grenade** — chậm hơn chút nhưng tha lỗi, không cần học combo Whirling Slash, và rút lui dễ khi pivot.

Quanh **Act 3**, khi đủ spirit (Ashen Bog Witch + companion node), bắt đầu fielding companion + Minion Splash cho con strike-beast, rút engine leveling về vai phụ. Lưu ý pivot này có rủi ro "playstyle whiplash" và có thể phá vỡ một số support-gem setup — chuẩn bị tâm lý respec một lần. Tame Beast là Lv7 gem nhưng thực dụng companion thật sự gánh được quanh **Lv22**, không phải Lv7.

Một mốc bắt buộc khác: unlock **Verisium Runeforging** sớm (quest Act 1 từ NPC Farrow) — đây là gateway crafting của league, cho craft Runic Ward và sau này nâng base unique drop ở level thấp. Đừng bỏ qua.

## Tương tác với league Runes of Aldur

Build này ăn khớp với league mechanic hơn phần lớn archetype khác. **Remnant + Runic Recipe** craft gear companion (sceptre + idol + spirit gear) theo ý. **Eternal March** và các Kalguuran skill minion chỉ drop từ Remnant encounter — nghĩa là chính việc chơi league mechanic là cách bạn lấy nút panic-revive cho zoo, nhưng cũng nghĩa là nó RNG-gated tuần đầu. **Verisium Runeforging** thêm Runic Ward / nâng base unique. Và vì Sylvan's Effigy rơi từ **Ritual pinnacle boss**, lộ trình endgame của build gắn chặt với việc farm Ritual để hoàn thiện zoo.

## DPS & EHP — vì sao đây là test target, không phải fact

Mình không quote một con số DPS cứng vì hai lý do trung thực: PoB2 fork **không model được** tamed beast stats, companion AI uptime, hay Spirit Walker bonus-on-companion (pob_coverage **PARTIAL → NA** cho phần companion). Cái mình có thể dựng là *chain multiplier verified*, để khi vào league bạn biết đo cái gì:

`companion_base_damage (theo beast tame) × 1.84 (Tame Beast more @gem20) × 1.25 (Bind/Tame more all-level) × [1.50 vs non-Unique @gem8] × (1 + 0.10×idol_count từ Idolatry) × (1 + idol_ally_damage_sum) × (1 + 0.85→0.91 nếu Marked, từ Effigy)`

Các multiplier trên đều verified tồn tại; cái chưa biết là `companion_base_damage` (phụ thuộc con beast bạn bắt) và liệu Minion Splash có nhân clear không. Đó là lý do confidence tổng thể là **LOW** — chain math đúng, nhưng input đầu vào chỉ materialize khi có character thật.

EHP tương tự: layer order 0.5 là armour → evasion → block → max res → ES/Life pool → **Runic Ward** → recovery. Runic Ward là pool riêng không scale bằng inc-defence, recovery độc lập, và PoB2 chưa model — nên EHP cũng là test target. Mục tiêu thực dụng ngày 1: cap 75% res (Ox Idol giúp companion, gear giúp bạn), ~target evasion/ES vừa đủ sống sau lưng companion, và đo Runic Ward thực tế.

## Failure Modes — 5 cách build gãy, kèm test plan ngày 1

Build này nhiều ẩn số pre-league nên mình liệt kê thẳng, kèm thứ cần đo.

**1. (TRỤ CHÍNH) Minion Splash không apply lên native attack của tamed beast.** Đây là rủi ro số một vì cả thesis "dễ trúng + AoE clear" dựa lên nó. Companion là quái chạy attack pool riêng, không phải player Strike skill — Minion Splash có thể chỉ support skill kiểu Skeletal Warrior. Nếu không apply, build mất AoE clear, tụt xuống "single-target zoo cần skill phụ quét trash". *Test ngày 1 (ưu tiên cao nhất): link Minion Splash lên con strike-beast, đứng trước một pack white, xem strike của nó có splash sang quái bên cạnh không. Cái này quyết định build có giữ được vị thế "dễ trúng nhất" hay không.*

**2. Spirit gating + single-target boss DPS hụt.** Reservation beast nặng (Crag Leaper 23.1% → Elephant Tortoise 56.1%), Trusted Kinship phạt -20% non-Companion skill. Fielding nhiều companion + Minion Splash + self-defense rất dễ vượt ngân sách spirit league-start. Cộng thêm companion trên boss di chuyển nhanh (Faction Leader, Pinnacle trong Ocean Exploring) có thể mất uptime → DPS-check fight thành tường. *Test ngày 1: log spirit reservation từng skill, xác định fielding được bao nhiêu companion trước khi cạn; đo companion uptime trên một boss mobile.*

**3. Không có mitigation companion-life verify → không HC-safe.** Dòng chuyển defense sang companion (cơ sở của kế hoạch HC bản cũ) đã bị gỡ trong rework Trusted Kinship (L494). Map "less recovery" + "increased monster speed" làm companion body-block kém hiệu quả và clear-via-AI chệch nhịp. *Test ngày 1: chạy map less-recovery + increased-monster-speed, xem build sống và clear ổn không; xác định cơ chế mitigation thực tế nếu có.*

**4. Gear floor cao hơn pitch — zoo bị gate sau pinnacle.** Phiên bản "zoo" mạnh nhất cần Sylvan's Effigy (drop từ Ritual pinnacle boss), Eternal March (chỉ từ Remnant, RNG), và magnitude của The Catha's Balance/Idolatry chưa biết. Pre-Effigy bạn chơi companion-cap mặc định (1 mỗi loại) — "vài companion" chứ chưa phải full zoo. *Test ngày 1: verify wording thực của Effigy + Catha's Balance % trong client; đo build chạy ra sao TRƯỚC khi có Effigy.*

**5. Nerf giữa league.** Day-1 ascendancy mới + Tame Beast vừa buff 40→84% + companion scaling chưa tune = prime nerf target. GGG đã flag minion scaling là outlier (Infernal Legion bị cắt ~50% trong cùng patch là tiền lệ). Identity build nằm gọn trên thứ dễ bị đập. *Chuẩn bị: theo dõi hotfix tuần 1, có sẵn kế hoạch pivot self-clear (về Twister/grenade) nếu companion scaling bị cắt.*

**Day-1 live test plan (tổng, theo thứ tự ưu tiên):** (a) **Minion Splash có splash native beast attack không** — quyết định cả build; (b) spirit reservation đầy đủ + trần companion count thực; (c) companion AI uptime per boss-type; (d) wording thực của Sylvan's Effigy + The Catha's Balance % + The Raven's Flock roll; (e) Runic Ward cap/recovery thực. Có đủ 5 cái này thì rewrite phần DPS/EHP từ LOW lên MEDIUM/HIGH.

## Tóm lại

Tame Beast Companion Zoo là pick Spirit Walker dễ chơi nhất và hưởng nhiều cơ chế buff 0.5 nhất: bắt boss-beast để chúng đánh, đổi giữa con AoE clear và con single-target, APM thấp không cần aim. Phần verified chắc chắn — Spirit Walker ascendancy với tree 8-notable (Natural Order, Idolatry, Catha's Balance, Wild Protector, ba nhánh spirit), Tame Beast (40→84% more + 25% more all-level + auto-summon + Lv7 gem), idol-on-sceptre stacking (Primate/Grold/Snake/Wolf/Ox), Commanding Rage + Rage-support-minion, Eternal March revive, Trusted Kinship spirit efficiency — đều từ patch note 0.5.0 + wiki mirror. Phần chưa chắc và quyết định build có "đỉnh" hay không — Minion Splash trên native beast attack, magnitude Catha's Balance, companion AI uptime, Sylvan's Effigy gate sau pinnacle — đều là test target ngày 1. Vì thế confidence là **LOW** và pob_coverage **PARTIAL/NA**: chơi với tâm thế đo đạc và học, để engine leveling (Twister/grenade) gánh tới khi companion online, đừng min-max trên giấy trước khi test #1 cho kết quả.

## Relationships

- **related_builds** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — engine leveling khuyên dùng để gánh campaign trước khi pivot companion; cùng ascendancy Spirit Walker.
- **alternative_to** [Spirit Walker Catha Companion](/builds/huntress/0-5-spirit-walker-catha-companion) — hướng companion tập trung một boss-beast thay vì zoo nhiều con.
- **alternative_to** [Spirit Walker Unique Beast Apex](/builds/huntress/0-5-spirit-walker-unique-beast-apex) — hướng dồn vào một Unique Tamed Beast single-target.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — deep-dive cơ chế tame + companion scaling nền tảng cho build.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Remnant/Runeforging/Runic Ward mà build khai thác.
- **competes_with** [Infernal Legion Spectre Legion](/builds/witch/0-5-infernalist-spectre-legion) — minion archetype khác hưởng buff khác; Infernal Legion bị nerf ~50% trong cùng patch.

## Changelog

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
