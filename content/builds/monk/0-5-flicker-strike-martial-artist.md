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
  damage_type: Physical
  playstyle: Melee
  content_focus: Mapping / Bossing
tags:
- poe2
- monk
- martial-artist
- flicker-strike
- power-charge
- crit
- quarterstaff
- zoomer
template: templates/build-template.md
---

# Flicker Strike Martial Artist

Build teleport-strike point-blank: nạp đầy :wiki-link{url="https://www.poe2wiki.net/wiki/Power_Charge"} rồi bấm :wiki-link{url="https://www.poe2wiki.net/wiki/Flicker_Strike"} để dump tất cả thành một chuỗi teleport-strike chớp nhoáng. Mỗi Power Charge tiêu thụ cho Flicker thêm 2 lần đánh ở **285% more Attack Speed**, nên cả build sống hay chết nằm ở chỗ tái tạo charge đủ nhanh giữa các lần Flicker. Chọn :wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} vì nó là ascendancy Monk duy nhất tự nhân đôi charge và đẩy combo, biến Flicker từ skill tự bóp cổ thành zoomer clear nhanh nhất game. Hợp với người thích playstyle melee tốc độ cao, chấp nhận squishy và phải đầu tư gear để engine charge chạy "vô tận".

## Build Overview

Flicker không tự sinh charge khi đang chạy — wiki ghi thẳng "You cannot gain Power Charges while using this Skill". Đó là toàn bộ bài toán: charge phải được nạp trong khe hở giữa các lần Flicker, không phải trong lúc đánh. Damage một lần Flicker = số strike × damage mỗi strike, mà số strike = 2N + 1 với N là charge tiêu thụ. Đẩy max Power Charge càng cao thì mỗi cú Flicker bung càng nhiều hit, và vì 285% more Attack Speed nén cả chuỗi vào một khoảnh khắc, sustained DPS không bị giới hạn bởi animation mà bởi tốc độ refill charge.

Nguồn damage là physical crit từ quarterstaff. Power Charge vừa quyết định số hit vừa kéo crit chance lên, nên build stack crit để vừa nhân damage vừa nuôi engine charge qua :wiki-link{url="https://www.poe2wiki.net/wiki/Voll%27s_Protector"} (gain Power Charge on Critical Hit). Engine tái tạo charge gồm ba lớp: base generation (crit / kill / shock), bộ ba nhân đôi charge (rune quarterstaff + helmet + node ascendancy), và combo route qua :wiki-link{url="https://www.poe2wiki.net/wiki/Ailith%27s_Chimes"}. Phòng thủ dựa vào Evasion + Energy Shield của Monk cộng Mountain's Teachings từ ascendancy, còn mobility thì chính Flicker là teleport nên không cần movement skill riêng.

Single-target là điểm yếu cấu trúc: boss không có add để Flicker tới và không có kill để refill charge, nên cần một dump riêng. Build dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Falling_Thunder"} làm nuke boss — cũng tiêu Power Charge nhưng bắn ra cone lightning lớn, và quality của nó là "+0-20% more Damage per Power Charge Consumed" nên ăn thẳng vào lượng charge mình tích được.

## Skill Gems & Links

Bộ Flicker và bộ Falling Thunder share chung pool Power Charge — Flicker để clear, Falling Thunder để bonk boss. Engine charge nằm ở item và ascendancy chứ không nhét vào link skill, nên link chỉ tập trung vào more-damage và hai support kinh tế charge mà 0.5.2 mới mở khóa.

**Main clear (6L):** :wiki-link{url="https://www.poe2wiki.net/wiki/Flicker_Strike"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Brutality"} III + :wiki-link{url="https://www.poe2wiki.net/wiki/Heightened_Charges"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Perpetual_Charge"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Close_Combat"} + một support more melee/crit damage

Brutality III cho 30% more physical và 20% chance ignore enemy physical damage reduction — chọn pure phys nên dòng "deal no Elemental/Chaos Damage" của nó không mất gì. Close Combat cho tới 20% more attack damage trong 1 mét, mà Flicker luôn đứng dí mặt enemy nên gần như luôn full bonus. Hai support còn lại là chỗ 0.5.2 thay đổi cuộc chơi: Perpetual Charge cho 25% chance không remove charge nhưng vẫn count as consumed, và Heightened Charges cho 20% chance benefit-từ-consume nhân đôi. Trước 0.5.2 hai support modify-charge này bị bug mutual-exclusive với skill consume charge nên không socket chung được; patch fix đúng lỗi đó, mở cho Flicker stack cả hai cùng lúc — mỗi charge vừa có cơ hội sống sót để bung thêm strike, vừa có cơ hội nhân đôi lợi ích tiêu thụ.

Exclusion check: Brutality III xóa toàn bộ damage non-physical → khóa mọi route lightning/Charged Staff trên chính skill này (đó là lý do tách Falling Thunder ra bộ riêng). Culmination không support được Flicker vì Flicker đã gain Combo qua Martial Master, mà Culmination ghi "Cannot support skills which already gain Combo".

**Boss dump:** :wiki-link{url="https://www.poe2wiki.net/wiki/Falling_Thunder"} + more damage + crit + concentrated-effect-tier support. Falling Thunder convert 60% phys sang lightning và quality cho more damage per charge consumed, nên trên boss mình tích charge bằng weave rồi slam một phát dump hết vào cone. Nó là câu trả lời cho charge starvation, không phải tay phụ cho vui.

**Engine charge (không nằm trong link Flicker):** :wiki-link{url="https://www.poe2wiki.net/wiki/Killing_Palm"} nhặt charge theo kill khi clear (Normal/Magic 1, Rare 2, Unique 3 charge mỗi kill), :wiki-link{url="https://www.poe2wiki.net/wiki/Siphoning_Strike"} cho single-target charge khi enemy bị shock (consume shock → 1 Power Charge), và :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Assault"} làm combo builder để feed Ailith's Chimes. Trên boss, weave Whirling Assault để vừa build combo vừa crit (kích Voll's), rồi Flicker hoặc Falling Thunder để xả.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Martial_Artist"} thắng :wiki-link{url="https://www.poe2wiki.net/wiki/Invoker"} ở đúng cái build cần nhất: sinh charge. Invoker có "Sunder my Enemies..." (crit ignore enemy elemental res) và 2 node crit chance mạnh, nhưng không có một node nào tạo Power Charge. Cắm Flicker — skill tiêu sạch charge và không tự sinh — vào Invoker là tự ép charge starvation. Martial Artist thì ngược lại, mỗi mảnh ascendancy đều phục vụ engine.

**Additional Power Charge Chance** là node định nghĩa build: "10% chance when you gain a Power Charge to gain an additional Power Charge". Nó stack nhân với 50% từ rune quarterstaff và 15% từ helmet thành bộ ba nhân đôi charge — đây mới là "infinite charges" thực sự, không phải một con số đơn lẻ.

**Martial Master** cho gain Combo from all Attack Hits và giữ combo bất kể weapon set, **Martial Adept** cho thêm một combo mỗi lần gain — hai node này nuôi combo liên tục để Ailith's Chimes convert sang Power Charge, đặc biệt quý trên single-target khi không có kill để refill. **Runic Meridians** mở 5 rune socket phụ (1 helm, 2 body, 1 gloves, 1 boots) — mật độ stat khổng lồ cho flat phys, resist, attribute mà Invoker không có gì tương đương. **Way of the Mountain** (Mountain's Teachings) là lớp phòng thủ một zoomer melee bắt buộc phải có: hit nào ≤ 30% max life sau mitigation bị giảm 40% damage, cộng 15% more damage và 50% more stun threshold. **Hollow Resonance Technique** cho chuông spectral ring mỗi lần crit — build crit cao nên mỗi cú Flicker crit là một nhịp AoE phụ free.

Thứ tự ưu tiên: Additional Power Charge Chance trước để engine chạy, rồi Martial Master + Martial Adept cho combo, sau đó Way of the Mountain cho sống sót vào endgame, cuối cùng Runic Meridians + Hollow Resonance khi đã có rune và crit để khai thác.

## Stat Priorities & Defenses

Tree đi thẳng về vùng Power Charge và crit: nhặt mọi node +max Power Charge, increased Critical Hit Chance, Critical Damage Bonus, attack speed và quarterstaff/melee damage, hướng tới region :wiki-link{url="https://www.poe2wiki.net/wiki/Pinnacle_of_Power"} để đẩy max charge và đường crit. Max Power Charge là stat đắt giá nhất vì nó vừa tăng số strike mỗi Flicker vừa tăng trần burst — base 3 charge đẩy lên 6 rồi 8-9 qua Powertread, helmet corrupt +1, và node tree là khác biệt giữa 13 hit với 19 hit mỗi lần bấm.

Math chain để hiểu vì sao max charge quan trọng hơn mọi stat khác, lấy ví dụ minh hoạ ở endgame gear:

- Số strike mỗi lần Flicker = 2N + 1. Với N = 6 charge → 13 strike; đẩy max charge lên 9 → 19 strike mỗi lần bấm.
- Per-strike phys: quarterstaff average hit ~180 sau flat added × gem 327% (lv20) ≈ 589 base.
- Increased phys/attack từ tree + gear ~ +250% → ×3.5 ≈ 2,060.
- More multiplier: Brutality III ×1.30 × Close Combat ×1.20 ≈ ×1.56 → ~3,210 mỗi non-crit strike.
- Crit weighting với ~70% crit và crit multi ~250%: (0.30 × 1 + 0.70 × 2.5) = 2.05 → ~6,580 effective mỗi strike.
- Một lần Flicker ở 6 charge: 13 × 6,580 ≈ 85,500 burst; đẩy lên 9 charge: 19 × 6,580 ≈ 125,000 burst.

Vì 285% more Attack Speed nén cả chuỗi vào một khoảnh khắc, sustained DPS = số lần Flicker activation mỗi giây × burst mỗi lần — và con số đó bị chặn bởi tốc độ refill charge chứ không phải animation. Khi engine chạy đủ (charge luôn topped up), effective burst leo lên vùng nhiều triệu trên mirror gear với crit multi và +max charge cao. Math trên là derivation cấu trúc multiplier, không phải số đo từ một character đã materialize — `pob_coverage` ghi PARTIAL vì PoB2 0.5 fork chưa model đúng burst 285%-more-AS-per-charge, node Martial Artist 0.5, lẫn quality per-charge của Flicker. Khi vào league, log số strike thực mỗi activation và crit% in-client để chốt lại.

Một điểm phải verify in-client: quality của Flicker đang có hai phiên bản dữ liệu mâu thuẫn. Version history (0.3.0) ở cả wiki lẫn poe2db ghi quality đổi thành "+0-20% more Damage per Power Charge Consumed", nhưng stat block live của poe2db lại vẫn render "(0-20)% more Critical Hit Chance". Nếu là more-damage-per-charge thì cú Flicker nhiều charge ăn thêm một multiplier lớn; nếu là crit chance thì nó nuôi engine Voll's. Đọc tooltip gem trong client để chốt — đừng build số dựa trên giả định quality khi chưa xác minh.

Phòng thủ là chỗ build yếu nhất. Monk dựa vào Evasion + Energy Shield, không có armour hay block dày, nên một zoomer dí mặt enemy rất dễ ăn one-shot. Mountain's Teachings (40% less damage cho hit ≤ 30% max life) gánh phần lớn survivability, phần còn lại là cap resist và stack ES qua Runic Meridians rune socket. Build này glass-cannon có một lớp đệm, không phải tanky.

### Performance Ratings

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 5 |
| boss_damage | 4 |
| survivability | 2 |
| mobility | 5 |
| league_start | 1 |
| budget_scaling | 4 |

## Gear Progression

### Gear theo slot

Ưu tiên gear theo thứ tự: cap resist 75% trước → đủ Dex/Int cho gem requirement → max Power Charge → crit chance + crit damage → attack speed → flat phys → ES/Life đệm. Engine charge gắn vào ba slot cụ thể nên ba slot đó không được nhường cho stat khác.

- **Weapon (quarterstaff):** rare quarterstaff crit cao với :wiki-link{url="https://www.poe2wiki.net/wiki/Xopec%27s_Soul_Core_of_Power"} socket vào — "50% chance when you gain a Power Charge to gain an additional Power Charge" là mảnh lớn nhất của bộ ba nhân đôi. Roll weapon hunt flat phys, crit chance, attack speed.
- **Body:** :wiki-link{url="https://www.poe2wiki.net/wiki/Voll%27s_Protector"} cho "25% chance to gain a Power Charge on Critical Hit" — vừa là base generation cho engine, vừa cho 150-200% armour và ES + chaos res. Build crit cao nên dòng on-crit này bắn liên tục ngoài các frame Flicker.
- **Helmet:** socket :wiki-link{url="https://www.poe2wiki.net/wiki/Idol_of_Alira"} (Tormented Spirit Socketable) vào helmet cho "15% chance when you gain a Power Charge to gain an additional Power Charge" — mảnh thứ hai của bộ ba nhân đôi. Khi socket vào đúng helmet, mod Bonded của nó còn cộng thêm "+1 to Maximum Power Charges", nên một socketable lo cả hai việc. Phần helmet rare còn lại hunt +max Power Charge, crit, attribute và ES.
- **Boots:** :wiki-link{url="https://www.poe2wiki.net/wiki/Powertread"} cho +1 max Power Charge và "12% increased Critical Damage Bonus per Power Charge" — một item lo cả max-charge lẫn crit-damage, scale thẳng theo số charge mình giữ.
- **Gloves:** rare với flat phys, attack speed, crit; nếu lấy Way of the Stonefist thì gloves biến thành Fists of Stone với mod mạnh hơn — tận dụng rune socket từ Runic Meridians cho flat phys.
- **Belt:** rare life/ES + resist, charm slot cho utility.
- **Amulet:** crit multi, +skill level, attribute; anoint một notable crit hoặc power charge.
- **Ring ×2:** cap resist, flat phys, attribute floor; một slot lo Dex/Int cho gem.
- **Jewel:** Critical Damage Bonus, attack speed, increased Power Charge Duration nếu có để charge sống lâu hơn giữa các burst.

Tránh :wiki-link{url="https://www.poe2wiki.net/wiki/Redflare_Conduit"} dù nó cũng cho charge on hit — nó "Lose all Power Charges on reaching maximum" và shock chính mình khi đầy charge, phản tác dụng hoàn toàn với build muốn giữ charge tối đa.

### Theo giai đoạn

Campaign chạy quarterstaff strike thường (Ice Strike / Tempest Flurry) cho tới khi gom đủ engine charge — Flicker chưa nên dùng sớm vì base 3 charge cho burst quá mỏng. Early endgame ráp Xopec's Soul Core + một nguồn max-charge là Flicker bắt đầu cảm thấy mượt. Endgame/mirror tier là khi Voll's + Powertread + Idol of Alira + crit weapon hội đủ, max charge chạm 8-9 và engine nhân đôi giữ charge luôn đầy.

## Budget & Investment

Đây không phải build league-start. Ngưỡng tối thiểu để engine chạy là Xopec's Soul Core trên một quarterstaff crit tử tế cộng ít nhất một nguồn +max Power Charge — dưới mức đó Flicker giật cục vì charge cạn liên tục. Divine breakpoint nằm ở chỗ ghép đủ bộ ba nhân đôi (Xopec's 50% + Idol of Alira 15% + node MA 10%) với Voll's Protector: lúc này charge tự refill đủ nhanh để Flicker chạy liền mạch. Mirror tier là weapon crit perfect-roll, max charge 9+, crit multi cao đẩy effective burst lên vùng nhiều triệu. Diminishing returns đến khi charge đã luôn topped up — thêm nguồn generation nữa thừa thãi, tiền nên dồn vào crit multi và +max charge để mỗi burst dày hơn thay vì refill nhanh hơn.

## Failure Modes

Build làm cực tốt ba thứ: clear tốc độ cao nhất khi charge chảy đều, mobility tuyệt đối vì Flicker chính là teleport, và scale rất mạnh theo +max charge cùng crit. Nhưng nó gãy ở những chỗ rất cụ thể.

**Charge starvation trên boss** là điểm gãy số một và là lý do Flicker mãi niche. Boss không có add để teleport tới và không có kill để refill, nên nếu chỉ có Flicker thì charge cạn sau một burst rồi đứng hình. Phải weave Whirling Assault để build combo + crit (kích Voll's và Ailith's Chimes) rồi mới dump, hoặc chuyển hẳn sang Falling Thunder làm nuke. Pilot kém ở khâu này là DPS boss tụt thẳng.

**Map mod hostile.** "Less recovery" và "no regen/reduced mana recovery" cắt sustain mana cho việc spam Flicker. "Monsters gain a Power Charge on Hit" (mod "of Power") khiến quái crit mình nhiều hơn — chí mạng với một melee squishy dí mặt. Physical reflect là sát thủ thật sự: Flicker bung hàng chục hit phys trong một khoảnh khắc, reflect dội ngược cả cụm có thể one-shot một glass zoomer trước khi kịp phản ứng. Né các map có phys reflect, hoặc giữ leech/lớp đệm đủ dày.

**One-shot encounter.** Monk thiếu armour và block, lại đứng point-blank, nên boss slam T16/pinnacle hoặc Simulacrum wave cao có thể xuyên qua spreadsheet EHP bất chấp Mountain's Teachings. Build cần đọc pattern và dodge bằng tay, không phải face-tank.

**Gear floor.** Số paper chỉ ra khi đủ Xopec's Soul Core + Voll's + một nguồn max charge để engine nhân đôi giữ charge đầy. Dưới floor đó, Flicker chạy ở base 3 charge — burst mỏng, refill chậm, cảm giác như một skill rưỡi chứ không phải zoomer. Build không có chế độ "nghèo mà vẫn chạy".

**Patch sensitivity.** Toàn bộ identity nằm trên power-charge generation. GGG nerf node Additional Power Charge Chance của Martial Artist, hoặc rune doubling Xopec's Soul Core, hoặc đổi clause "cannot gain Power Charges while using this Skill" là build sụp ngay. Ngược lại, fix 0.5.2 cho phép Perpetual Charge + Heightened Charges socket chung vào skill consume-charge mới là thứ kéo Flicker từ awkward lên chơi được — nó là một mảnh meta mong manh đúng nghĩa.

## Verdict

Flicker Strike Martial Artist là zoomer clear nhanh nhất game cho người chịu đầu tư engine charge và chịu pilot khâu single-target. Flicker hiện sub-threshold trong meta 0.5 (không lọt top skill của league, trong khi Monk meta là Hollow Palm và Hollow Focus) đúng vì nó khó nuôi charge hơn các build tự sustain — nhưng độ khó đó là cái giá cho trần clear-speed cao nhất, không phải dấu hiệu build yếu. Ngưỡng để nó chạy như số paper là đủ bộ ba nhân đôi charge cộng Voll's Protector; dưới ngưỡng đó đừng đụng vào. Hợp với người đã có Monk tier cao muốn một dự án high-budget cho cảm giác teleport non-stop, không hợp người tìm build an toàn hay league-start.

## Changelog

### 2026-06-15
- Initial draft cho 0.5.2 Runes of Aldur. Chốt Martial Artist over Invoker theo engine charge. Flag quality Flicker mâu thuẫn dữ liệu (more-crit-chance vs more-damage-per-charge) cần verify in-client.

## Relationships

- **related_builds** [Martial Artist Hollow Palm](/builds/monk/0-5-martial-artist-hollow-palm-leaguestarter) — bản Martial Artist unarmed/Facebreaker, route league-start thay vì high-budget quarterstaff charge engine.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview 0.5, gồm rune system và endgame rewrite mà build tận dụng cho rune socket.
