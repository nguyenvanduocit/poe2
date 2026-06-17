---
document_type: build
title: Flicker Strike Martial Artist
class: Monk
ascendancy: Martial Artist
league: '0.5'
patch: 0.5.2
status: draft
author: duocnv
created: '2026-06-15'
updated: '2026-06-15'
budget_tier: high-budget
confidence_level: MEDIUM
pob_coverage: PARTIAL
build_tags:
  primary_skill: Flicker Strike
  damage_type: Lightning
  playstyle: Melee
  content_focus: Mapping / Bossing
tags:
- poe2
- monk
- martial-artist
- flicker-strike
- power-charge
- crit
- lightning
- quarterstaff
- energy-shield
- culling
template: templates/build-template.md
---

# Flicker Strike Martial Artist

Build teleport-strike point-blank: nạp đầy :wiki-link{url="https://www.poe2wiki.net/wiki/Power_Charge"} rồi bấm :wiki-link{url="https://www.poe2wiki.net/wiki/Flicker_Strike"} để dump tất cả thành một chuỗi teleport-strike chớp nhoáng. Damage đến từ crit nguyên tố chứ không phải phys: quarterstaff cộng cả đống flat lightning với cold, scale bằng increased Elemental Damage with Attacks, rồi mọi crit ăn full nhờ :wiki-link{url="https://www.poe2wiki.net/wiki/Beacon_of_Azis"} bỏ qua sạch elemental res của quái. Cả build sống hay chết nằm ở chỗ tái tạo charge đủ nhanh giữa các lần Flicker, và ở cách overcap Culling Strike Threshold để Flicker xoá trash tức thì mà bay xuyên map. Chọn :wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} vì nó là ascendancy Monk duy nhất cho mọi skill sinh power charge khi crit, biến Flicker từ skill tự bóp cổ thành zoomer clear nhanh nhất game. Hợp với người thích melee tốc độ cao, chịu đầu tư engine charge và pilot khâu boss.

## Build Overview

Flicker không tự sinh charge khi đang chạy — wiki ghi thẳng "You cannot gain Power Charges while using this Skill". Đó là toàn bộ bài toán: charge phải nạp trong khe hở giữa các lần Flicker, không phải trong lúc đánh. Damage một lần Flicker = số strike × damage mỗi strike, mà số strike = 2N + 1 với N là charge tiêu thụ. Đẩy max Power Charge càng cao thì mỗi cú Flicker bung càng nhiều hit, và vì 285% more Attack Speed nén cả chuỗi vào một khoảnh khắc, sustained DPS bị chặn bởi tốc độ refill charge chứ không phải animation.

Nguồn damage là crit nguyên tố từ quarterstaff. Vũ khí cộng flat lightning với cold cực dày, build scale bằng increased Elemental Damage with Attacks rồi để crit nhân lên — và mảnh ghép làm tất cả thành thật là Beacon of Azis: crit bỏ qua hoàn toàn elemental resistance của quái. Khi crit chance chạm trần thì mọi hit Flicker ăn full damage như enemy có 0 res. Engine tái tạo charge thì tách khỏi nguồn damage: Martial Artist cho mọi skill sinh charge khi crit, :wiki-link{url="https://www.poe2wiki.net/wiki/Redflare_Conduit"} thêm 20% sinh charge mỗi hit, và :wiki-link{url="https://www.poe2wiki.net/wiki/Killing_Palm"} gắn Charge Profusion để bơm charge khi clear. Crit cao vừa nhân damage vừa nuôi engine, nên hai vế phục vụ lẫn nhau.

Cái khiến build bay nhanh hơn các Flicker đời trước là culling. :wiki-link{url="https://www.poe2wiki.net/wiki/Deathblow"} cho Culling Strike, helmet :wiki-link{url="https://www.poe2wiki.net/wiki/Myris_Uxor"} cộng 100% increased Culling Strike Threshold, cộng cull threshold ramp trên Killing Palm — gộp lại ngưỡng cull vọt lên cao tới mức trash trắng bị xoá ngay khi rớt xuống dưới ngưỡng đó. Flicker teleport tới mục tiêu kế tiếp, cull, teleport tiếp, nên cả màn map tan trong vài giây thay vì phải đánh chết từng con.

Single-target là điểm yếu cấu trúc: boss không có add để Flicker tới và không có kill để refill charge, nên cần một dump riêng. Build dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Falling_Thunder"} làm nuke boss — cũng tiêu Power Charge nhưng bắn ra nova lightning lớn, weave charge bằng tay rồi slam một phát xả hết.

## Skill Gems & Links

Bộ Flicker và bộ Falling Thunder share chung pool Power Charge — Flicker để clear, Falling Thunder để bonk boss. Engine charge nằm ở item và ascendancy chứ không nhét vào link skill, nên link tập trung vào crit, more-damage và hai support kinh tế charge mà 0.5.2 mới mở khoá. Pinpoint Critical cắm gần như mọi bộ vì cả build chạy trên crit.

**Main clear:** :wiki-link{url="https://www.poe2wiki.net/wiki/Flicker_Strike"} + Hit and Run + Momentum + :wiki-link{url="https://www.poe2wiki.net/wiki/Close_Combat"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Perpetual_Charge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Charges"}

Close Combat cho tới 20% more attack damage trong 1 mét, mà Flicker luôn đứng dí mặt enemy nên gần như luôn full bonus. Perpetual Charge với Heightened Charges là chỗ 0.5.2 thay đổi cuộc chơi: Perpetual Charge cho 25% chance không remove charge nhưng vẫn count as consumed, Heightened Charges cho 20% chance benefit-từ-consume nhân đôi. Trước 0.5.2 hai support modify-charge này bị bug mutual-exclusive với skill consume charge nên không socket chung được; patch fix đúng lỗi đó, mở cho Flicker stack cả hai cùng lúc — mỗi charge vừa có cơ hội sống sót để bung thêm strike, vừa có cơ hội nhân đôi lợi ích tiêu thụ.

Exclusion check: không có. Build chủ ý chơi nguyên tố nên không cắm Brutality (Brutality xoá toàn bộ damage non-physical, giết luôn lightning/cold của vũ khí lẫn :wiki-link{url="https://www.poe2wiki.net/wiki/Charged_Staff"}). Culmination không support được Flicker vì Flicker đã gain Combo qua Martial Artist, mà Culmination ghi "Cannot support skills which already gain Combo".

**Boss dump:** :wiki-link{url="https://www.poe2wiki.net/wiki/Falling_Thunder"} + Perpetual Charge + Heightened Charges + Nova Projectiles + Pinpoint Critical + Ricochet. Falling Thunder cũng tiêu charge nhưng đổi sang lightning nova, trên boss thì weave để tích charge rồi slam một phát dump hết. Nó là câu trả lời cho charge starvation, không phải tay phụ cho vui.

**Buff và clear phụ:** :wiki-link{url="https://www.poe2wiki.net/wiki/Charged_Staff"} giữ uptime 100% để cộng flat lightning lên đòn đánh và đẩy crit, link Innervate + Blazing Critical + Pinpoint Critical + Blind + Thrill of the Kill. :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Thunder"} với :wiki-link{url="https://www.poe2wiki.net/wiki/Herald_of_Ash"} chạy song song để lan damage khi clear pack. Bell :wiki-link{url="https://www.poe2wiki.net/wiki/Tempest_Bell"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Assault"} weave để build combo và crit thêm.

**Engine charge (không nằm trong link Flicker):** :wiki-link{url="https://www.poe2wiki.net/wiki/Killing_Palm"} gắn Charge Profusion + Culling Strike để vừa nhặt charge vừa cull khi clear. Trên boss, weave Whirling Assault với Tempest Bell để vừa build combo vừa crit, rồi Flicker hoặc Falling Thunder để xả.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} thắng :wiki-link{url="https://www.poe2wiki.net/wiki/Invoker"} ở đúng cái build cần nhất: sinh charge và xoá trash. Cắm Flicker — skill tiêu sạch charge và không tự sinh — vào Invoker là tự ép charge starvation. Martial Artist thì ngược lại, mỗi mảnh ascendancy đều phục vụ engine.

Mảnh định nghĩa build là cho mọi skill sinh power charge khi crit. Build có crit chance gần trần và 5-6 nguồn crit bắn cùng lúc, nên charge tự refill liên tục ngoài các frame Flicker — đây mới là "infinite charges" thực sự, không phải một con số đơn lẻ. Deathblow biến găng thành Fist of Stone và cho Culling Strike, ghép với cull threshold cao là cách trash bị xoá tức thì để Flicker bay. Bộ bell (Hollow Resonance, Hollow Focus) cho carry spectral bell và combo liên tục, đặc biệt quý trên single-target khi không có kill để refill. Rune socket phụ từ ascendancy cho mật độ stat lớn để cap res và đệm phòng thủ mà Invoker không có gì tương đương.

Thứ tự ưu tiên: lấy node sinh charge trước để engine chạy, rồi combo và bell cho single-target, sau đó Deathblow cho cull-clear, cuối cùng rune socket khi đã có rune và crit để khai thác.

## Stat Priorities & Defenses

Tree đi thẳng về vùng Power Charge và crit: nhặt mọi node +max Power Charge, increased Critical Hit Chance, Critical Damage Bonus, attack speed và quarterstaff/elemental damage. Max Power Charge là stat đắt giá nhất vì nó vừa tăng số strike mỗi Flicker vừa tăng trần burst — node tree là khác biệt giữa 13 hit với 19 hit mỗi lần bấm. Crit chance phải kéo lên gần 100% vì hai lý do chồng nhau: nó nuôi engine charge (mọi skill sinh charge khi crit) và nó mở khoá Beacon of Azis (chỉ crit mới bỏ qua res). Crit thiếu thì vừa đói charge vừa mất damage cùng lúc.

Damage scale theo nguyên tố, không theo phys. Vũ khí cộng flat lightning với cold, build nhân bằng increased Elemental Damage with Attacks trên vũ khí cộng tree, rồi crit và Beacon of Azis làm phần còn lại. Vì vậy nhẫn lo flat lightning to attacks thay vì flat phys, và build ôm cả Herald of Thunder lẫn Herald of Ash để lan đúng loại damage mình đang đánh.

Phòng thủ chạy Chaos Inoculation: pool là Energy Shield, không phải Life. Hồi ES bằng một mánh — :wiki-link{url="https://www.poe2wiki.net/wiki/Shavronne%27s_Satchel"} cho "Life Recovery from Flasks also applies to Energy Shield", nên một Ultimate Life Flask thường lại hồi thẳng ES dù build CI đứng ở 1 life. Trên nền ES đó là Evasion với Deflection của Monk, Guard 499 từ Thawing Charm, và Spirit of the Stag 20 giây từ Rite of Passage cho lớp đệm khi cần. Cull-clear cũng là phòng thủ gián tiếp: trash chết trước khi kịp chạm tới mình. Nhưng đừng nhầm — vẫn là một melee dí mặt enemy, ES dày không cứu khỏi một slam boss đọc trượt.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 4 |
| survivability | 3 |
| mobility | 5 |
| league_start | 1 |
| budget_scaling | 4 |

## Gear Progression

### Gear theo slot

Ưu tiên gear theo thứ tự: cap resist 75% trước → đủ Dex/Str/Int cho gem requirement (110/70/115) → max Power Charge → crit chance + crit damage → flat elemental damage + attack speed → ES đệm. Engine charge với cull gắn vào vài slot cụ thể nên các slot đó không nhường cho stat khác.

- **Weapon (quarterstaff):** rare elemental quarterstaff — flat lightning với cold cực dày, increased Elemental Damage with Attacks, crit chance, attack speed. Đây là nguồn damage chính, hunt roll nguyên tố cao; bản bossing có thể thêm increased stun buildup ở suffix cuối.
- **Amulet:** Beacon of Azis cho "Critical Hits ignore Enemy Monster Elemental Resistances" — mảnh damage lớn nhất, biến crit thành đánh như enemy 0 res, kèm Spirit và mana. Rẻ bất ngờ ở mức ~1 ex.
- **Body:** Redflare Conduit cho "20% chance to gain a Power Charge on Hit" — nguồn charge chính lúc endgame. Nó "Shocks you when you reach maximum Power Charges", nghe phản tác dụng nhưng thực ra shock bản thân chỉ là cú nhói nhỏ, còn dòng on-hit bơm charge liên tục mới là thứ giữ engine chạy. Trước khi đủ tiền lên Redflare thì :wiki-link{url="https://www.poe2wiki.net/wiki/Voll%27s_Protector"} (gain Power Charge on Critical Hit) gánh vai trò này.
- **Helmet:** Myris Uxor cho 100% increased Culling Strike Threshold, cộng evasion, accuracy và mana — một nửa của cỗ máy cull-clear.
- **Gloves:** Deathblow cho Culling Strike, 18% more global Evasion và ES, hồi life/mana khi kill, và cull threshold ramp khi vừa cull gần đây — nửa còn lại của cỗ máy cull, đồng thời gánh một lớp phòng thủ.
- **Boots:** rare ES cao với movement speed — Sekhema Sandals kiểu 99% increased Energy Shield + flat ES + 35% MS là chuẩn, đệm pool CI và giữ tốc độ.
- **Belt:** Shavronne's Satchel cho "Life Recovery from Flasks also applies to Energy Shield" + flask charges + Int — đây là thứ khiến life flask hồi ES trên build CI.
- **Ring ×2:** Unset Ring để lấy thêm skill slot cho đàn skill đông, mỗi viên hunt flat lightning to attacks, một mảng lớn resist (fire/lightning), evasion và rarity.
- **Flask & charm:** Ultimate Life Flask (hồi ES qua Shavronne's Satchel), :wiki-link{url="https://www.poe2wiki.net/wiki/Lavianga%27s_Spirits"} cho hiệu ứng mana liên tục, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Fall_of_the_Axe"} cho Onslaught, Thawing Charm cho Guard, :wiki-link{url="https://www.poe2wiki.net/wiki/Rite_of_Passage"} cho Spirit of the Stag.

### Theo giai đoạn

Campaign chạy quarterstaff strike thường (Ice Strike / Tempest Flurry) cho tới khi mở khoá Flicker ở level 52 — base 3 charge cho burst quá mỏng nên Flicker chưa đáng bật sớm. Build "online" quanh level 55 khi đeo được Voll's Protector (reforge qua Verisium Anvil để hạ requirement từ 59 xuống 55), lúc đó charge bắt đầu chảy. Endgame tier là khi đổi sang Redflare Conduit, ráp đủ cull threshold qua Deathblow với Myris Uxor, và crit chạm gần trần để Beacon of Azis với engine charge cùng bật.

## Budget & Investment

Đây không phải build league-start. Core gear khởi động thì rẻ — Voll's Protector reforged dưới 1 div, Beacon of Azis ~1 ex — nhưng để engine chạy đúng mức thì cần crit gần trần với cull threshold overcap, và đó là tiền. Mốc đầu tư nặng nằm ở vũ khí elemental crit ngon (~100 div cho bản bossing có stun buildup), Myris Uxor reforged (~40 div), và Redflare Conduit cultivated (120+ div). Diminishing returns đến khi charge đã luôn topped up và trash đã chết trong một cull — thêm nguồn generation hay cull nữa thừa thãi, tiền nên dồn vào crit multi và flat elemental damage để mỗi burst dày hơn.

## Failure Modes

Build làm cực tốt ba thứ: clear tốc độ cao nhất khi charge chảy đều và cull threshold đã overcap, mobility tuyệt đối vì Flicker chính là teleport, và scale mạnh theo crit cùng max charge. Nhưng nó gãy ở những chỗ rất cụ thể.

**Charge starvation trên boss** là điểm gãy số một và là lý do Flicker mãi niche. Boss không có add để teleport tới và không có trash để cull refill, nên nếu chỉ có Flicker thì charge cạn sau một burst rồi đứng hình. Phải weave Whirling Assault với Tempest Bell để build combo + crit (sinh charge) rồi mới dump, hoặc chuyển hẳn sang Falling Thunder làm nuke. Pilot kém ở khâu này là DPS boss tụt thẳng.

**Map mod hostile.** "Less recovery" cắt sustain ES qua flask. "Monsters gain a Power Charge on Hit" khiến quái crit mình nhiều hơn — chí mạng với một melee dí mặt. Vì build đánh nguyên tố nên elemental reflect là sát thủ thật sự: Flicker bung hàng chục hit nguyên tố trong một khoảnh khắc, reflect dội ngược cả cụm có thể one-shot trước khi kịp phản ứng. Né các map có elemental reflect.

**One-shot encounter.** CI cho pool ES dày nhưng Monk thiếu armour và block, lại đứng point-blank, nên boss slam T16/pinnacle hoặc Simulacrum wave cao có thể xuyên qua spreadsheet EHP. Build cần đọc pattern và dodge bằng tay, không phải face-tank.

**Gear floor.** Build chỉ đạt số đó khi crit gần trần (cho cả engine charge lẫn Beacon of Azis), cull threshold đã overcap, và đủ flat elemental trên vũ khí. Dưới floor đó Flicker chạy ở charge cạn, trash không cull được, cảm giác như một skill rưỡi chứ không phải zoomer. Build không có chế độ "nghèo mà vẫn chạy".

**Patch sensitivity.** Toàn bộ identity nằm trên power-charge generation cộng cull threshold. GGG vừa nerf charge consumption của Flicker (cap reduction ở 75% thay vì 100%) — đòn đó giết bản Gemling chạy bằng giảm-tiêu-charge chứ không đụng bản này vì nó sống bằng generation. Nhưng nếu nerf node sinh charge của Martial Artist, hoặc Redflare Conduit, hoặc đổi clause "cannot gain Power Charges while using this Skill", build sụp ngay. Cull threshold bị siết cũng cắt mất tốc độ clear.

## Verdict

Flicker Strike Martial Artist là zoomer clear nhanh nhất game cho người chịu đầu tư crit-charge engine và chịu pilot khâu single-target. Nó đứng ngoài data poe.ninja: không lọt top skill của league, và Martial Artist còn chưa đủ mẫu để xuất hiện trong class distribution của runesofaldur, trong khi Monk meta là Hollow Palm với Hollow Focus trên Invoker. Đứng ngoài data không có nghĩa yếu — nó là build off-meta đúng nghĩa, đổi độ khó nuôi charge lấy trần clear-speed cao nhất. Chưa có con số DPS công khai nào cho đúng combo này (poe.ninja trống, mobalytics không tính, forum lẫn reddit không quote), nên khi vào league phải tự đo: log crit% in-client, số strike mỗi Flicker, và DPS Falling Thunder trên boss — PoB2 0.5 fork chưa model đúng burst 285%-more-AS-per-charge lẫn node Martial Artist nên đừng tin số sim. Ngưỡng để build chạy đúng tiềm năng là crit gần trần cộng cull overcap; dưới ngưỡng đó đừng đụng vào. Hợp người đã có Monk tier cao muốn một dự án high-budget cho cảm giác teleport non-stop, không hợp người tìm build an toàn hay league-start.

## Changelog

### 2026-06-15
- Viết lại quanh bản đang chạy thật: damage nguyên tố crit (lightning/cold quarterstaff + Beacon of Azis bỏ qua ele res) thay vì pure-phys Brutality, phòng thủ CI ES + Evasion + cull threshold, engine charge Redflare Conduit + generate-on-crit + Killing Palm Charge Profusion. Giữ lại đúng phần draft đã đoán trúng: Perpetual Charge + Heightened Charges trên Flicker (0.5.2), Falling Thunder làm boss dump, charge starvation là điểm gãy. Nguồn tham chiếu gear: build Skybreaker Martial Artist (shadowclone515) trên mobalytics. Ghi nhận nerf charge-consumption Flicker 0.5 (cap 75%) không đụng bản generation này.

## Relationships

- **related_builds** [Martial Artist Hollow Palm](/builds/monk/0-5-martial-artist-hollow-palm-leaguestarter) — bản Martial Artist unarmed/Facebreaker, route league-start thay vì high-budget elemental crit Flicker.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview 0.5, gồm rune system và endgame rewrite mà build tận dụng cho rune socket.
