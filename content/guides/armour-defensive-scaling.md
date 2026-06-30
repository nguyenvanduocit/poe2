---
template: templates/mechanic-template.md
document_type: mechanic
title: Armour Defensive Scaling
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-06-19'
league: '0.5'
patch: 0.5.3
tags:
  - poe2
  - armour
  - defense
  - physical-damage-reduction
  - runes-of-aldur
  - buff
---

# Armour Defensive Scaling

:wiki-link{url="https://www.poe2wiki.net/wiki/Armour"} là defence cấp physical damage reduction theo công thức `DR = A / (A + 10 × D_raw)` với cap 90%. Tooltip chỉ hiện một con số armour phẳng, nhưng % giảm thực tế phụ thuộc tỉ lệ giữa armour và độ lớn của cú hit — hai character cùng 200k armour chịu hai cú hit khác cỡ sẽ giảm sát thương khác nhau. Patch 0.5.0 "Runes of Aldur" tăng lượng armour mà item và modifier cấp ở level cao: khoảng 33% more ở level 65, giảm dần xuống 15% more ở level 80+. Cùng lúc đó, gần như toàn bộ recovery layer của :wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield"} bị quét (xem [Energy Shield Recovery](/guides/energy-shield-recovery)). Chassis tự nhiên dùng armour làm primary defence là Warrior/Titan stacker vì có sẵn strength scaling và notable cộng armour, nhưng vì base scaling được nâng floor, bất kỳ class nào có một synergy armour nhỏ cũng đủ tank physical hit thường ở tier 15-16 mà không cần build chuyên. ES recovery nerf đẩy nhiều build ES-primary cũ phải pivot, và armour là điểm đến rõ ràng nhất cho physical mitigation.

## How It Works

Armour trong POE2 không phải flat % reduction như resistance. Nó chạy qua công thức `DR(A, D_raw) = A / (A + 10 × D_raw)`, trong đó `A` là armour rating và `D_raw` là raw physical damage của cú hit trước mitigation. Hệ quả cốt lõi: cùng một armour pool giảm sát thương nhiều hơn khi cú hit nhỏ, ít hơn khi cú hit lớn. Một character 200,000 armour chịu cú hit physical 5,000 thì `DR = 200000 / (200000 + 10×5000) = 200000 / 250000 = 80%` — chỉ ăn 1,000. Cùng armour đó chịu cú hit 15,000 (kiểu boss slam) thì `DR = 200000 / (200000 + 150000) = 57.1%` — ăn tới 6,430. Đây là lý do armour mạnh để farm map clear (hàng trăm cú hit nhỏ từ monster pack) nhưng yếu trước burst một phát từ boss.

Patch 0.5 tăng lượng armour item/modifier cấp theo level. Ở level 65 character có khoảng 33% more armour so với cùng gear pre-0.5, mức more giảm dần xuống còn 15% ở level 80+. Đây là baseline scaling lift, không phải một line "increased Armour" mới — base armour của item hiện có tự được điều chỉnh khi login patch, còn armour modifier trên item hiện có có thể cập nhật giá trị mới bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}. Áp con số 15% vào ví dụ trên: stacker 200,000 armour endgame lên 230,000. Với cú hit 5,000, `DR = 230000 / 280000 = 82.1%` thay vì 80% — ăn 893 thay vì 1,000, tức giảm thêm ~10.7% sát thương từ class hit đó. Với cú hit nhỏ 1,000, `DR = 230000 / 240000 = 95.8%` bị cap xuống 90% — small hit gần như bị xoá sạch.

Điều quan trọng là buff này hạ ngưỡng armour cần để đạt một mốc DR nhất định. Muốn đạt 90% DR (chạm cap) trước một cú hit 5,000 cần `A / (A + 50000) = 0.9 → A = 450,000` armour. Pre-0.5 phải roll gear cực căng mới chạm; +15% scaling kéo ngưỡng item-side xuống, nghĩa là cùng một bộ gear giờ tiến gần cap hơn mà không phải đổi base hay thêm slot. Floor được nâng, ceiling cũng dịch — nhưng như phần Math Chain chỉ ra, một số multiplier top-end lại bị kéo lùi cùng patch nên extreme stacker không nhận đủ 15% naive.

## Math Chain

Chain quyết định không phải tổng armour mà là DR sau công thức — total armour chỉ là bucket additive `base × (1 + Σ increased Armour)`, rồi feed vào `DR = A / (A + 10 × D_raw)`. So sánh pre vs post buff cho một stacker endgame (level 90+, dùng mức 15% more ở level 80+):

- Armour rating pre-0.5 (gear cố định, illustrative) — 200,000
- Item scaling buff patch 0.5.0 (line 494, +15% ở lvl 80+) — ×1.15 → **230,000 armour**

DR trước cú hit physical 5,000:
- Pre-0.5 — `200000 / (200000 + 50000)` = **80.0%** (ăn 1,000)
- Post-0.5 — `230000 / (230000 + 50000)` = **82.1%** (ăn 893)

DR trước cú hit physical 15,000 (boss-tier):
- Pre-0.5 — `200000 / (200000 + 150000)` = **57.1%** (ăn 6,430)
- Post-0.5 — `230000 / (230000 + 150000)` = **60.5%** (ăn 5,921)

Buff cho ~2 điểm DR ở hit nhỏ và ~3.4 điểm ở hit lớn — nghe nhỏ trên giấy nhưng vì damage-taken là `(1 − DR)`, đi từ 80% lên 82.1% cắt 10.5% sát thương nhận, từ 57.1% lên 60.5% cắt 7.9%. Mức lift này stack với mọi defence layer khác nên giá trị marginal lớn hơn con số DR thô.

Nhưng top-end multiplier bị siết ngược chiều. :wiki-link{url="https://www.poe2wiki.net/wiki/Brass_Dome"} — flagship body armour của armour stacker — giờ có 500-600% increased Armour, trước là 700-800% (line 459), và phiên bản hiện có có thể bị làm tệ đi bằng Divine Orb. Một stacker pre-0.5 dựa vào Brass Dome 800% mất tới 200% increased trong bucket additive. Với base armour body 1,000 và bucket increased khác giả định +400% từ tree/gear, công thức bucket cho: pre-0.5 `1000 × (1 + 8.0 + 4.0)` = 13,000 vs post-0.5 `1000 × (1 + 6.0 + 4.0)` = 11,000 — giảm ~15% phần body armour contribution, gần như triệt tiêu đúng cái +15% item scaling buff cho riêng stacker chạy Brass Dome. **Net cho extreme Brass Dome stacker ≈ wash; net cho build dùng rare armour hoặc unique được buff (xem Key Interactions) ≈ dương rõ.**

## Key Interactions

Armour buff không đứng một mình — nó là một nửa của cuộc rebalance defence 0.5, và phải đọc cùng ba thứ: Evasion buff song song, ES recovery nerf, và Runic Ward mới.

:wiki-link{url="https://www.poe2wiki.net/wiki/Evasion"} nhận buff cùng mức armour: +33% ở level 65, giảm xuống +15% ở level 80+ (line 495). Quan trọng hơn, công thức Deflect được sửa để scale tuyến tính với Deflection Rating: `chance to Deflect = 150 × (1 − A/(A + 0.12×D))` với A là accuracy của attacker, D là deflection rating của defender, cap 95% (line 248-249). Đường tuyến tính này thưởng nhiều hơn ở mức đầu tư cao, nghĩa là Evasion stacker giờ chạm gần 95% deflect khả thi hơn pre-0.5. Phân biệt rõ để verdict không hời hợt: armour thắng ở consistency — flat physical mitigation mọi cú hit, không phụ thuộc may rủi; evasion thắng ở formula sạch và avoidance ceiling cao, nhưng vẫn là binary roll (avoid hoặc ăn full). "Best defensive layer" đúng theo nghĩa armour là layer dễ scale nhất cho physical-heavy content, không phải armour vượt mọi layer ở mọi chiều.

Nguồn Deflection Rating cho Evasion stacker giờ có hai notable cùng họ deflection-from-evasion gần khu Dexterity: Wild Cat đã sẵn 12% Evasion → Deflection Rating, và patch 0.5.3 thêm dòng "Gain Deflection Rating equal to 8% of Evasion Rating" cho Staunch Deflection. Hai notable này độc lập với deflection-suffix trên gear, nên Evasion stacker không phải hy sinh slot suffix để chạm Deflection Rating cao — ví dụ một character 8,000 Evasion lấy cả hai nhận +960 (Wild Cat 12%) + 640 (Staunch Deflection 8%) = 1,600 Deflection Rating miễn phí từ tree. Pick theo path thuận tay; cả hai khi tree cho phép vì hai dòng cộng dồn vào cùng pool D trong công thức Deflect.

Một loạt unique armour được buff thẳng, nâng giá trị cho build không chạy Brass Dome. :wiki-link{url="https://www.poe2wiki.net/wiki/Keeper_of_the_Arc"} helmet giờ 240-340% increased Armour and Energy Shield (trước 150-250%, line 469) — item hiện có cập nhật được bằng Divine. :wiki-link{url="https://www.poe2wiki.net/wiki/Sine_Aequo"} gloves giờ 150-200% increased Armour, Evasion and Energy Shield (trước 100-150%, line 478). :wiki-link{url="https://www.poe2wiki.net/wiki/Ab_Aeterno"} boots giờ 200-250% AEE (trước 100-150%, line 453). :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Acuity"} gloves được rework, giờ cấp 150-200% increased Armour + 100-150 max Life + leech. Những item này bù phần Brass Dome mất, và mở armour-stacking ra ngoài body slot.

:wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} là backup layer mới đứng sau armour. Nó kích hoạt khi life tụt còn 1, hấp thụ damage thay life và hồi phục độc lập với life (line 22). Thêm Runic Ward vào armour qua :wiki-link{url="https://www.poe2wiki.net/wiki/Verisium_Runeforging"} (unlock Act 1): armour dưới level 55 nhận Runic Ward miễn phí, armour trên ngưỡng đó đánh đổi một phần defence thường (line 21). Cặp này bổ trợ nhau — armour giảm physical hit đầu vào, Runic Ward pop khi life chạm critical, cho stacker một second wall mà ES build cũ từng có qua recharge nhưng nay bị nerf.

### Phân biệt "Defences" với "Armour, Evasion and Energy Shield"

- Từ khóa **"Defences"** không còn được dùng (line 245). Mọi chỗ trước ghi "Defences" giờ viết rõ "Armour, Evasion and Energy Shield".
- Hệ quả: modifier dạng "increased Defences" cũ giờ áp dụng đúng ba thứ Armour/Evasion/ES — và **không** áp dụng cho :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"}, Resistance, hay Block.
- Đây thuần descriptive, không đổi math, nhưng buộc build planning phải đọc lại scope từng modifier: đừng giả định một dòng "increased Defences" cũ buff Runic Ward pool — nó không.

## Optimization

Ưu tiên đầu tiên là chọn base và unique đúng để tận dụng cả +15% scaling lẫn các unique được buff. Body armour nên cân nhắc :wiki-link{url="https://www.poe2wiki.net/wiki/Brass_Dome"} chỉ khi build thực sự là extreme stacker chấp nhận net wash với buff — còn lại, rare body armour với multiple increased-armour roll giờ ăn trọn +15% item scaling mà không mất multiplier top-end. Helmet :wiki-link{url="https://www.poe2wiki.net/wiki/Keeper_of_the_Arc"} và gloves :wiki-link{url="https://www.poe2wiki.net/wiki/Sine_Aequo"} là hai slot unique đáng cân nhắc vì cả hai vừa được nâng giá trị, item hiện có Divine update được lên số mới.

Thứ hai, hiểu rằng armour scale tốt nhất chống nhiều hit nhỏ nên đầu tư armour phải đi kèm một layer chống burst lớn. Vì `DR = A/(A+10×D_raw)` cho mức giảm thấp trước hit cực lớn, một character chỉ stack armour vẫn ăn nặng từ boss slam. Pair armour với :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} (qua Verisium Runeforging từ Act 1) làm 1-life backup, và/hoặc Block để có một layer avoidance trước hit lớn. Verisium Runeforging là craft tier 1 priority: rune Runic Ward vào mọi armour slot dưới level 55 vì giai đoạn đó nhận free.

Thứ ba, dùng Stone Rune để khoá stun. :wiki-link{url="https://www.poe2wiki.net/wiki/Stone_Rune"} socket vào armour giờ cấp +50/75/100 to Stun Threshold (trước +40/60/80, line 518). Armour build vốn có strength cao và stun threshold scale theo life/pool, nên cộng thêm Stone Rune đẩy ngưỡng stun lên đủ để hiếm khi bị heavy stun trong combat — một lợi thế kèm theo mà ES build khó có được.

## Interactions with Other Content

Map mod có dòng tăng physical damage hoặc thêm cú hit cho monster đập trực diện vào armour build, nhưng theo hướng tốt: vì armour mitigate physical hit tốt khi hit không quá lớn, map "monsters deal extra physical damage" thường vẫn nằm trong range armour gánh được. Ngược lại, map mod gây :wiki-link{url="https://www.poe2wiki.net/wiki/Armour_Break"} hoặc giảm armour làm thủng layer này — khi armour bị break về 0, công thức DR sụp và physical hit ăn gần full. Build armour-primary phải để ý mod loại này hơn build evasion/ES.

Boss encounter là điểm yếu cấu trúc của armour. Pinnacle boss có slam wind-up lớn (raw physical 10,000-20,000+) rơi vào vùng công thức kém hiệu quả: 230k armour chỉ giảm ~60% trước hit 15,000. Đây không phải lỗi gear mà là tính chất công thức — armour không phải layer để gánh one-shot. Trước boss, dựa vào avoidance (Block, dodge roll) hoặc absolute pool + Runic Ward, không kỳ vọng armour cắt burst.

So với [Energy Shield Recovery](/guides/energy-shield-recovery): cùng patch 0.5, ES bị quét recovery layer (compound recharge rate giảm ~52%, TTF tăng ~2.5-3x) trong khi armour được nâng floor. Đây là lý do tương quan nghiêng về armour — không chỉ armour mạnh lên tuyệt đối mà ES yếu đi tương đối ở vai trò primary tank. ES vẫn cho pool lớn, nhưng pattern "tank-by-recharge" giữa hit boss không còn; armour cung cấp mitigation liên tục không cần recovery cycle.

## What Doesn't Work

Armour không bao giờ mitigate :wiki-link{url="https://www.poe2wiki.net/wiki/Damage_over_time"}. Công thức chỉ áp cho hit; mọi physical DoT (bleed, ground physical) đi xuyên armour. Build armour-heavy vẫn cần layer riêng cho DoT (max life pool, recovery, hoặc additional physical damage reduction — loại này mới cắt cả DoT).

Armour mặc định chỉ áp cho physical damage. Elemental và chaos hit đi xuyên trừ khi build có nguồn convert armour sang loại khác như :wiki-link{url="https://www.poe2wiki.net/wiki/Blackbraid"} hoặc Refraction support cho phép một phần armour áp lên elemental hit. Stack 300k armour không giúp gì trước một lightning bolt nếu không có conversion — đây là sai lầm phổ biến khi nghĩ armour là "tank mọi thứ".

Armour không cứu khỏi hit cực lớn. Vì `DR = A/(A+10×D_raw)`, một cú hit raw 30,000 trước 230k armour chỉ bị giảm `230000/(230000+300000)` = 43.4% — ăn ~17,000. Không có lượng armour thực tế nào biến one-shot boss thành chịu được; armour là layer cho sustained nhiều hit, không phải burst.

Modifier "increased Defences" cũ (giờ là "Armour, Evasion and Energy Shield") **không** scale :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"}, Resistance, hay Block. Đừng kỳ vọng một dòng AEE buff Runic Ward pool — phải dùng Runic Ward Rune riêng từ Remnant.

## Common Mistakes

**Sai** — coi armour như flat % reduction kiểu resistance, giả định "X armour = Y% giảm cố định mọi hit". **Đúng** — đọc DR theo công thức phụ thuộc hit size; cùng armour cho DR cao trước hit nhỏ, thấp trước hit lớn. **Lý do** — tooltip chỉ hiện một con số armour, dễ hiểu nhầm. **Cost** — build planning sai có thể overestimate survival trước boss tới 30-40%, dẫn đến chết lần đầu chạm pinnacle slam.

**Sai** — chỉ stack armour rồi lao vào boss với niềm tin layer này gánh burst. **Đúng** — pair armour với avoidance (Block/dodge) hoặc absolute pool + :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} cho moment burst. **Lý do** — công thức cho DR thấp trước raw hit lớn. **Cost** — một boss slam 15,000 ăn ~6,000 dù có 230k armour; không có pool/backup là chết.

**Sai** — port giả định Brass Dome 0.4 (700-800% increased) sang 0.5 và expect total armour giữ nguyên + thêm 15%. **Đúng** — Brass Dome giờ 500-600%, recalc bucket additive; với extreme stacker net ≈ wash, cân nhắc rare body hoặc unique được buff thay thế. **Lý do** — top-end multiplier bị kéo lùi cùng patch buff baseline. **Cost** — mất ~15% body armour contribution nếu vẫn chạy Brass Dome mà nghĩ mình được +15%.

**Sai** — bỏ qua mitigation elemental vì "đã có armour tank rồi". **Đúng** — armour chỉ physical; build vẫn cần resistance cap và layer cho elemental hit. **Lý do** — armour mặc định không áp cho elemental. **Cost** — chết tức thì trước elemental burst dù armour pool khổng lồ.

## Cost & Restrictions

- **Strength + base requirement** — Armour stacking đòi base armour cao (chủ yếu strength-based gear) và nhiều nguồn increased Armour. Restriction — class không có strength scaling hoặc armour notable phải đầu tư nặng tree/gear mới đạt floor; chassis tự nhiên là Warrior/Titan.
- **Brass Dome nerf** — 500-600% increased Armour (từ 700-800%, line 459), phiên bản hiện có Divine làm tệ đi được. Cost — extreme stacker dựa vào Brass Dome mất tới 200% increased trong bucket; cân nhắc re-craft sang rare body hoặc unique khác.
- **Elemental gap** — Armour không áp elemental/chaos trừ khi có conversion (Blackbraid/Refraction). Cost — build armour-only phải dump riêng currency vào resistance cap + một layer elemental mitigation, không tiết kiệm slot như tưởng.
- **Hit-size dependency** — Để đạt 90% DR trước hit 5,000 cần ~450,000 armour; trước hit 15,000 cần ~1,350,000 armour để chạm cap. Restriction — chống burst lớn yêu cầu armour vượt xa ngưỡng thực tế, nên buộc pair layer khác.
- **Verisium Runeforging trade-off** — Armour level 55+ rune Runic Ward đánh đổi một phần base defence thường (line 21). Cost — không free như armour dưới 55; tính toán amount Runic Ward thu được vs defence mất tuỳ build.

## Verdict & Open Questions

- **Verdict — BUFF.** Patch note 0.5.0 literal: lượng armour item/modifier cấp tăng +33% ở lvl 65 → +15% ở lvl 80+ (line 494). Evasion buff song song cùng mức + deflect formula tuyến tính cap 95% (line 248-249, 495). ES recovery layer bị quét 50-70% (xem ES rework doc). Tương quan defence nghiêng rõ về armour/evasion cho physical-heavy content.
- **Nuance — net không đồng đều.** Build dùng rare armour hoặc unique được buff (Keeper of the Arc, Sine Aequo, Ab Aeterno) ăn trọn buff; extreme stacker dựa Brass Dome (700-800→500-600%) gần như wash vì top-end multiplier bị kéo lùi.
- **Armour không phải all-rounder** — chỉ physical, kém trước burst lớn theo công thức, không chạm DoT. "Best defensive layer" đúng theo nghĩa scale dễ nhất cho sustained physical, không phải vượt mọi layer mọi chiều.
- **Open question — 90% cap còn nguyên trong 0.5?** Công thức và cap 90% lấy từ wiki mirror (poe2wiki.net), patch note 0.5.0 không nhắc đổi cap. Wiki có thể lag patch — cần đọc wiki diff sau league launch để xác nhận con số cap chưa đổi.
- **Open question — actual endgame survival lift.** Compound math cho ~2-3.4 điểm DR, nhưng cần PoB2 0.5 release + char test endgame T15+ mới khẳng định TTK/survival thực tế và mức net của extreme stacker. Window verify: 2026-06-01 → 2026-06-08.
- **Open question — Runic Ward + armour stacker live behavior.** Cặp armour + Runic Ward chưa test in-game; cần log Runic Ward uptime và pop behavior trước boss burst khi vào league.

## Patch Evolution

### Patch 0.5.3 (2026-06-19)

Staunch Deflection notable bổ sung dòng "Gain Deflection Rating equal to 8% of Evasion Rating". Nó join họ deflection-from-evasion bên cạnh Wild Cat (12% Evasion → Deflection Rating). Buff áp retroactive cho mọi Evasion stacker có path đi qua khu Dexterity — không cần re-spec, không cần đổi gear; cùng pool Evasion vốn có giờ feed thêm Deflection Rating qua một notable nữa.

### Patch 0.5.0 — Runes of Aldur (21/05/2026 patch note, 29/05/2026 launch)

Lượng armour do item và modifier cấp tăng theo level — ~33% more ở level 65, giảm xuống 15% more ở level 80+; base armour item hiện có tự điều chỉnh khi login, armour modifier Divine update được. Evasion nhận buff song song cùng mức, kèm sửa công thức Deflect sang tuyến tính `150×(1−A/(A+0.12×D))` cap 95%. Loạt unique armour được nâng giá trị: Keeper of the Arc 150-250→240-340% AES, Sine Aequo 100-150→150-200% AEE, Ab Aeterno 100-150→200-250% AEE, Atziri's Acuity rework sang 150-200% armour + life + leech. Ngược chiều, Brass Dome bị cắt 700-800→500-600% increased Armour. Runic Ward ra mắt như defence layer 1-life backup qua Verisium Runeforging, kèm 15+ Runic Ward Rune craft từ Remnant. Từ khóa "Defences" deprecate, viết rõ thành "Armour, Evasion and Energy Shield" — làm rõ scope không gồm Runic Ward/Resistance/Block. Stone Rune trên armour buff stun threshold +40/60/80 → +50/75/100. Sửa lỗi mô tả Heavy Armour notable.

### Patch 0.4.0 — Previous baseline

Lượng armour item/modifier cấp ở level cao thấp hơn baseline 0.5. Brass Dome cấp 700-800% increased Armour — flagship cho extreme stacker dựa vào multiplier top-end. Deflect formula chưa scale tuyến tính, đầu tư Deflection Rating cao thưởng ít hơn. ES recovery layer còn nguyên sức (compound recharge ~3.3x base, pattern tank-by-recharge viable) nên ES vẫn cạnh tranh armour ở vai trò primary tank. Chưa có Runic Ward — defence layer chỉ gồm Armour/Evasion/ES/Block/Resistance.

## Relationships

- **related_mechanics** [Energy Shield Recovery](/guides/energy-shield-recovery) — nửa còn lại của cuộc rebalance defence 0.5; ES recovery bị nerf trong khi armour được nâng floor, hai doc đọc cùng nhau cho bức tranh đầy đủ tương quan defence layer.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — armour scaling buff, Runic Ward, và Verisium Runeforging đều thuộc patch 0.5.0 Return of the Ancients; phần armour của Endgame overhaul được mổ xẻ tại đây.
