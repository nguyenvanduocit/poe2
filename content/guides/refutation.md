---
template: templates/mechanic-template.md
document_type: mechanic
title: Refutation — Runic Ward Block Buff Skill
status: draft
author: duocnv
created: '2026-06-03'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.1
sub_class: skills
confidence_level: MEDIUM
tags:
  - refutation
  - runic-ward
  - verisium-runeforging
  - block
  - stun-threshold
  - parried
  - brass-dome
  - kalguuran-skill
  - olroths-resolve
  - 0-5
  - 0-5-1
  - poe2
  - mechanic
---

# Refutation — Runic Ward Block Buff Skill

:wiki-link{url="https://www.poe2wiki.net/wiki/Refutation"} là Kalguuran Skill tag Buff + Spell + Duration trong POE2 patch 0.5, craft từ Remnant, đốt sạch toàn bộ :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} đang có để đổi lấy một buff ngắn cho phép :wiki-link{url="https://www.poe2wiki.net/wiki/Block"} mọi Blockable Hit. Skill này là một trong 23 Kalguuran Skill thêm vào 0.5.0, chỉ học được sau khi craft từ Remnant qua hệ thống Runes of Aldur. Hai phía đang đẩy nó: video build pitch nó như "thay luôn lớp phòng thủ chính" nhờ block-all, và archetype ward-stacker Titan trên mobalytics dựng cả guồng máy ward quanh nó. Cái phần lớn guide bỏ qua là dòng −50% less Stun Threshold đính kèm — chạy sai cấu hình thì Refutation làm bạn **dễ** bị stun hơn — và uptime trần ~40% mà hype "permanent block" giấu đi.

## How It Works

Refutation tiêu toàn bộ Ward hiện có — không phải chỉ con số cost tối thiểu (3 Ward lvl 1 → 13 Ward lvl 20), mà **sạch pool**, dù pool đang là 50 hay 1400. Đổi lại là một buff cứng 4 giây (`runic_fortress` nội bộ), và thời lượng này **không scale theo gem level** — lvl 1 và lvl 20 đều 4 giây, chỉ quality mới kéo dài được. Trong cửa sổ buff đó, bạn Block 100% mọi Blockable Hit từ **mọi hướng**, không có directional check, không roll block chance — đây là điểm khác cốt lõi so với block chance thông thường. Cast time 0.65s và trong lúc cast bị −70% movement speed final (đi được nhưng rất chậm), nên Refutation là một burst-window bấm chủ động, không phải toggle bật-quên.

Effect verbatim từ skill:

> Spends all your Ward to gain a short-duration Buff that causes you to Block all Blockable Hits and apply Parried to enemies from which you've Blocked a Hit. This Buff is removed if you are Heavy Stunned. While this Buff is active, you cannot be Light Stunned, but Blocking too much damage may Heavy Stun you.

Có hai upside chồng lên nhau. Phía thủ: block-all biến mọi đòn blockable thành 0 damage suốt 4 giây, và bạn miễn nhiễm Light Stun trong cửa sổ đó. Phía công: mỗi enemy mà bạn Block một Hit từ nó sẽ dính :wiki-link{url="https://www.poe2wiki.net/wiki/Parried"} — debuff khiến target nhận **50% more Attack Damage**, kéo dài 2.0s (lvl 1) → 3.9s (lvl 20). Vì Parried lvl 20 dài 3.9s gần trọn cửa sổ buff 4s, enemy dính Parried sớm trong buff vẫn còn debuff lúc buff hết — attack build có gần như toàn bộ 4 giây để xả damage vào target bị khuếch đại.

Cơ chế tự-giới-hạn nằm ở chính cái paradox phòng thủ: bạn không thể bị Light Stun khi buff active, nhưng "Blocking too much damage may Heavy Stun you" — block một lượng damage đủ lớn vẫn build Heavy Stun lên bạn, và một Heavy Stun **gỡ luôn buff**. Lý do là block không miễn phí về stun: mỗi Hit bị block vẫn đẩy stun buildup lên người chơi, và nếu tổng damage chặn trong cửa sổ đủ cao, buildup vượt ngưỡng → Heavy Stun → buff biến mất ngay giữa pha block. Tức Refutation chống được spike nhỏ liên tục tốt, nhưng đứng tắm trong một lượng damage khổng lồ (boss slam, pack dày T17) thì chính cái buff bảo vệ bạn lại có thể bị stun-cancel — và stun buildup tích qua block có thể chạm ngưỡng nhanh hơn trực giác, đây là một mục cần đo trong client khi vào league.

## Math Chain

Stun Threshold của người chơi base = maximum Life (ward không đóng góp — 0.5 đã gỡ Runic Ward khỏi keyword "Defences"). Flat stun threshold từ gear như Brass Dome cộng vào base này trước khi nhân. Trong cửa sổ buff, Refutation chồng lên base đó hai dòng: "50% less Stun Threshold" và "5% more Stun Threshold per 10 Runic Ward spent" (= 0.5% mỗi 1 Ward đốt). Trong engine cả hai dồn vào đúng một stat buff — `stun threshold +% final from runic fortress` — và chính cái "đúng một stat" là chỗ math chưa khoá được: có hai cách nó cộng, hai cách cho hai con break-even chênh nhau gấp đôi.

Cách multiplicative theo đúng quy ước "more/less" của POE, mỗi dòng một multiplier riêng:

$$
\text{net} = \text{base} \times 0.5 \times (1 + 0.005 \times \text{Ward spent})
$$

Break-even (net = base) khi 0.5 × (1 + 0.005W) = 1 → **W = 200**; ở 1400 Ward đốt → 0.5 × 8.0 = **×4.0** (+300% net).

Cách additive gộp mọi dòng vào một "+% final" duy nhất, khớp với việc engine chỉ phơi một stat:

$$
\text{net} = \text{base} \times (0.5 + 0.005 \times \text{Ward spent})
$$

Break-even khi 0.5 + 0.005W = 1 → **W = 100**; ở 1400 Ward → 0.5 + 7.0 = **×7.5** (+650% net).

Tên stat đơn lẻ nghiêng về cách additive — và đó cũng là lý do con "+700%" trôi trong guide gần đúng chứ không hẳn lỗi: additive net ở 1400 Ward là +650%, sát +700% (chênh đúng cái −50). Chỉ ở cách multiplicative thì "+700%" mới là quên mất ×0.5, net thật ×4.0. Datamine một mình không phân định được, phải đọc Stun Threshold thật trong client. Phép đo gọn nhất là đốt đúng 200 Ward rồi nhìn số: multiplicative cho đúng ×1.0 (về base), additive cho ×1.5 (+50%) — một lần đọc ở mốc đó chốt luôn cả hai con break-even.

Hướng tổng quát giữ nguyên dù theo cách nào: Ward đốt càng nhiều net càng lên, và có một sàn Ward mà dưới đó buff hạ Stun Threshold xuống dưới base — multiplicative đặt sàn ở 200, additive ở 100. Đốt 100 Ward: multiplicative cho ×0.75 (mất 25%), additive cho hoà ×1.0. Build muốn chắc net dương theo cả hai cách thì nhắm pool ≥ 200 Ward; dải 100-200 Ward đúng là vùng câu trả lời đổi dấu tuỳ engine. Quality cộng thêm +20% vào cùng cái stat đó (kèm +1 giây buff), kéo sàn xuống (cỡ 130 Ward multiplicative, 60 additive) và bù thẳng lên net — ở 1000 Ward + 20% quality, multiplicative ~×3.6 còn additive ~×6.5, khoảng cách hai model giãn rất rộng ở Ward cao nên đo sớm ngay khi dựng ward-stacker.

Uptime thì không có chỗ cho hype "permanent", và 0.5.1 khoá chặt thêm cái trần đó. Patch line "Refutation's Cooldown no longer recovers while the Buff is active" nghĩa là 4 giây buff không tính vào 10 giây cooldown — cooldown chỉ chạy sau khi buff tắt, nên mỗi cycle là 4 + 10 chứ không phải max(4, 10). Đây là một nerf so với lúc launch, khi cooldown vẫn hồi trong buff cho uptime cao hơn. Buff 4s base (5s với 20% quality), cooldown 10.0s ở lvl 20:

$$
\begin{aligned}
\text{uptime}_\text{base} &= \frac{4}{4 + 10} \approx 28.6\% \\
\text{uptime}_\text{quality} &= \frac{5}{5 + 10} \approx 33.3\%
\end{aligned}
$$

Stack tối đa support — Prolonged Duration II (35% more duration → 5.4s) + Cooldown Recovery I (25% increased CDR → 8.0s CD) — đẩy lên 5.4 / (5.4 + 8.0) ≈ **40.3%**. Trần thực tế dao động 40-50%; "permanent Refutation" là cường điệu, và khoảng 6 giây hở giữa mỗi cycle chính là cửa sổ nguy hiểm.

## Key Interactions

**Refutation × Runic Ward pool (nhiên liệu)** — Refutation không tạo ra giá trị từ con số nào ngoài lượng Ward bạn nạp trước khi cast. Pool Ward vừa là điều kiện để vượt sàn Ward (math ở trên), vừa là toàn bộ phía stun-threshold-upside. Build muốn Refutation net dương buộc phải đầu tư Ward qua gear — và vì 0.5 không có node Runic Ward nào trên passive tree, toàn bộ pool đến từ gear/runeforging, không phải tree.

**Refutation × Parried (cửa sổ công)** — Parried cho 50% more Attack Damage và ở lvl 20 dài 3.9s, gần trùng khít buff 4s. Vì enemy dính Parried ngay khi block hit đầu tiên, attack build có cả cửa sổ buff để xả vào target bị khuếch đại. Cast/attack speed không ảnh hưởng timing block (block là passive trong cửa sổ buff) — cái quyết định bao nhiêu damage tận dụng được Parried là tốc độ land attack sau khi block, không phải tốc độ block. Parried của Refutation dùng chung debuff với Parry của buckler (cùng tên, cùng 50% more attack damage) nên hai nguồn không stack riêng.

**Refutation × ward regen timing** — Runic Ward hồi 5%/giây của max pool. Với pool 1000 max, nạp lại 200 Ward = 20% pool mất ~4 giây từ 0, nạp 100 Ward mất ~2 giây — tức lượng Ward cần để cast Refutation kế net-dương (qua sàn 100-200 tuỳ engine) hồi xong trong 2-4 giây, gần khớp hoặc nhanh hơn cửa sổ buff. Olroth's Resolve flask thêm một nguồn nạp thứ hai: bản rework đã live từ 0.5.0 nhưng tới patch note 0.5.1 mới được ghi, giờ cho "Regenerate 2.5-5% of maximum Runic Ward per second during Effect" — chồng lên 5%/giây nền là tới ~10%/giây, halve thời gian rebuild pool, cộng "Gain Guard equal to current Runic Ward for 10 seconds when effect ends" cho một lớp Guard ăn theo pool ngay khi flask hết. Pool và regen rate quyết định bạn có giữ được nhịp cast mỗi cooldown hay không; pool quá nhỏ thì không kịp nạp qua sàn trước cast kế.

### Wording distinction

Hai chỗ wording dễ nhầm, cả hai đều load-bearing.

"Block all Blockable Hits" của Refutation là block **guaranteed, không roll** — khác hẳn block chance thông thường (một xác suất % phải trúng mỗi hit). Trong cửa sổ buff, mọi Blockable Hit bị chặn 100%, không có lần "trượt block". Đây là lý do Refutation đáng giá phía thủ ngay cả khi Ward thấp: phần block-all không phụ thuộc lượng Ward, chỉ phần stun-threshold mới phụ thuộc.

"50% less Stun Threshold" là multiplicative ×0.5, và điểm phải nói rõ: phía stun-threshold-upside của Refutation đến **chỉ từ Ward đã đốt**, **chỉ trong lúc buff active**. Việc đơn thuần *có* Ward trong pool không feed Stun Threshold — pool Runic Ward thụ động không nằm trong keyword Defences và chưa bao giờ đóng góp stun threshold (xem [Runic Ward Onslaught Loop cho Minion](/guides/0-5-runic-ward-onslaught-loop)). Refutation là cơ chế riêng: nó *spend* Ward để đổi lấy một bonus stun-threshold tạm thời, không phải Ward tự nhiên cho stun threshold. Giữ ward thấp suốt trận (như loop Onslaught) không cho stun threshold; đốt ward qua Refutation thì cho — nhưng chỉ trong 4 giây và phải qua sàn Ward (≥200 cho chắc) để net dương.

## Optimization

Việc đầu tiên không phải minmax mà là **vượt cái downside**: stack Ward đủ qua sàn (nhắm ≥200 cho chắc cả hai model, lý tưởng 600+ để net cao), nếu không thì Refutation là một nút bấm khiến bạn dễ stun hơn. Sau khi pool đủ lớn, 20% quality là khoản đầu tư đáng (+20% more stun threshold + 1 giây buff), kéo sàn Ward xuống (cỡ 130 multiplicative, 60 additive) và bù trực tiếp lên phía net.

Uptime nâng qua increased Skill Effect Duration (Prolonged Duration II = 35% more → 5.4s) cộng Cooldown Recovery (CDR I = 25% increased → CD 8.0s), đẩy trần lên ~40%. Grounded in the Earth notable cho dual benefit (16% increased Skill Effect Duration + 16% increased Stun Threshold) nên đặc biệt hợp.

Phía stun-threshold floor, nguồn flat cộng vào base trước khi nhân là đáng nhất: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Brass_Dome"} cho +200-300 flat Stun Threshold (cộng thẳng vào base, được nhân bởi cả net multiplier), Chakra of Stability cho +1 Stun Threshold per Dexterity (Dex build 400 Dex = +400 flat), và các notable % như Flesh Withstands (21% increased). Vì base = max Life, Str build stack Life cũng tự nâng base. Cuối cùng, build phải **attack-based** để dùng được Parried — spell build mất sạch 50% more attack damage đó.

## Interactions with Other Content

Refutation dựng hoàn toàn trên hệ Runic Ward mới của 0.5, nên "nguồn lấy Ward" là phần ecosystem quyết định skill có chạy được không.

Nguồn chính là **Verisium Runeforging**. Tại Verisium Anvil, bất kỳ armour nào cũng có thể được runeforge để gain Runic Ward — basic Verisium Runeforging mở từ Act 1 (armour dưới lvl 55 gain ward không downside; trên lvl 55 đổi base defences lấy ward), còn Unique Verisium Runeforging mở Act 3 cho phép runeforge unique base lvl-55+ để thêm ward bằng cách giảm defence khác. Đây là headline: Ward không phải drop sẵn mà là thứ bạn **rèn vào gear**, đánh đổi Armour/Evasion/ES lấy pool Runic Ward.

Phía unique, :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} (Crucible Tower Shield, Lv 60) cho +50-100 maximum Runic Ward cùng (200-300)% increased Armour và Chance to Block là Lucky — patch 0.5 thêm dòng ward này vào Svalinn (patch note line 650), không phải carryover từ POE1. Ngoài ra patch thêm 15+ Runic Ward Rune craft từ Remnant để add/modify thuộc tính Runic Ward, nhưng catalog đầy đủ các rune này cần compile trong client — chưa có trang liệt kê hết tên và effect từng cái.

Riêng Brass Dome phải nói chính xác hai trục, vì đây là chỗ guide hay sai nhất. **Base Brass Dome KHÔNG cho Ward nào** — nó cho +200-300 flat Stun Threshold, (500-600)% increased Armour, −(5-1)% max res, và Take no Extra Damage from Critical Hits. Phía base, nó giúp Refutation qua đúng cái flat stun threshold cộng vào base trước khi nhân multiplier. Cái "~1400 Ward từ Brass Dome" mà video nói là một **Brass Dome đã runeforge** — qua Unique Verisium Runeforging, Brass Dome (Lv 58 unique body) đổi một phần 500-600% armour của nó lấy một pool Runic Ward lớn. Lượng ward chính xác sau runeforge phụ thuộc roll/item nên ~1400 là item cụ thể của creator, không phải con số cố định cần đo trong client. Tức Brass Dome giúp Refutation trên hai trục tách biệt: flat stun threshold (base) và — nếu runeforge — pool ward để đốt.

## What Doesn't Work

Refutation chỉ block **Hit**, nên mọi thứ không phải Hit đi xuyên qua nó. Damage over Time (ignite, poison, bleed), ground degen, và các nguồn DoT bypass block hoàn toàn — đứng trong buff Refutation không giảm một chút DoT nào. Tương tự, hit nào unblockable (một số boss attack có tag unblockable) cũng không bị chặn dù buff đang up.

Spell build nhận đủ phía block-all nhưng **0 giá trị Parried** — Parried chỉ khuếch đại Attack Damage, không đụng spell. Build spell dùng Refutation chỉ nên tính nó như công cụ thủ thuần; cửa sổ Parried là damage amplification bị phí.

Chạy **dưới sàn Ward** (100 nếu engine additive, 200 nếu multiplicative) biến buff thành net-negative stun threshold — bạn bấm một nút làm mình dễ stun hơn lúc không bấm. Đây không phải edge case mà là cấu hình mặc định của build chưa đầu tư Ward; nhắm pool ≥200 thì net dương theo cả hai cách tính.

:wiki-link{url="https://www.poe2wiki.net/wiki/Lifetap"} là bẫy: nó đổi cost của skill sang Life. Refutation chạy bằng việc đốt Ward, và toàn bộ phía stun-threshold-upside scale theo "Ward spent". Lifetap khiến skill tiêu Life thay vì Ward → không còn Ward đốt → dòng "5% more per 10 Ward spent" thành 0 → chỉ còn cái ×0.5 penalty trần trụi. Lifetap phá đúng core loop của skill.

## Common Mistakes

**Sai: Cast Refutation với pool dưới sàn Ward.** Đúng: nạp pool qua sàn — 100 Ward nếu engine cộng additive, 200 nếu multiplicative, nhắm ≥200 cho chắc (lý tưởng 600+) — trước khi coi Refutation là defensive button. Lý do: dưới sàn, net < base; ví dụ 100 Ward cho ×1.0 (additive, hoà) tới ×0.75 (multiplicative, mất 25% Stun Threshold), ở dải thấp buff có thể đang chủ động hạ khả năng chống stun của bạn. Đọc Stun Threshold ở mốc 200 Ward đốt trong client để biết engine theo cách nào.

**Sai: Trông đợi uptime gần permanent.** Đúng: tính theo trần ~40% (5.4s buff / 8.0s CD với full support), chừa kế hoạch thủ cho ~6 giây hở mỗi cycle. Lý do: buff 4s base không scale gem level, CD 10s ở lvl 20; ngay cả Prolonged Duration II + Cooldown Recovery I cũng chỉ đạt ~40.3% — quãng giữa cast là cửa sổ phơi mình.

**Sai: Coi Refutation là thay luôn lớp phòng thủ chính.** Đúng: dùng nó như burst-window chồng lên một baseline thủ vẫn còn đủ (Armour/Evasion/ES, max res, recovery). Lý do: uptime ~40% nghĩa là 60% thời gian không có buff, và buff chỉ chặn Hit — DoT/ground/unblockable vẫn ăn full kể cả khi buff up.

**Sai: Bỏ 20% quality.** Đúng: lấy 20% quality cho Refutation. Lý do: +20% more Stun Threshold là multiplier thứ ba (ở 1000 Ward nâng ×3.0 → ×3.6) và +1 giây buff kéo uptime 28.6% → 33.3% trước cả support — đây là khoản uplift rẻ và trực tiếp nhất.

## Cost & Restrictions

Cost lớn nhất không phải Ward cost (skill spends sạch pool bất kể) mà là **gap cooldown**: trần uptime ~40% để lại cửa sổ ~6 giây mỗi cycle hoàn toàn không có buff, và build phải sống sót quãng đó bằng lớp thủ nền. Refutation là burst-window, không phải lớp thủ thường trực.

Ward sustain là cost thứ hai. Pool phải được nạp lại liên tục — Runic Ward hồi 5%/giây của max, nên pool lớn hồi nhanh hơn về tuyệt đối nhưng vẫn cần thời gian; cast Refutation kế tiếp chỉ net-dương nếu pool kịp vượt sàn Ward trước đó. Build cast Refutation mỗi khi off cooldown trên một pool nhỏ sẽ thường xuyên đốt dưới sàn.

Gear cost là cost ẩn nặng nhất. Runeforging **đánh đổi base defence lấy Ward** — body armour runeforge để có pool ward lớn là body đã từ bỏ một phần Armour/Evasion/ES gốc. Build ward-stacker cho Refutation hi sinh defence thường trực để mua một burst-window 40% uptime; đó là một trade-off thật, không phải buff cộng thêm miễn phí.

## Verdict & Open Questions

- Refutation là defensive burst đáng giá khi build đầu tư đúng (Ward > 200, 20% quality, attack-based để ăn Parried), nhưng vô dụng phía công với spell build và net-negative nếu Ward thấp.
- Math có hai model tuỳ cách engine gộp `stun threshold +% final from runic fortress`: multiplicative (break-even 200 Ward, ×4.0 ở 1400) hoặc additive (break-even 100, ×7.5 ở 1400). Datamine một-stat nghiêng additive; đốt 200 Ward đọc Stun Threshold trong client để chốt (×1.0 = multiplicative, ×1.5 = additive). "+700%" của guide gần đúng nếu additive, là lỗi quên ×0.5 nếu multiplicative.
- Uptime trần ~40% và 0.5.1 khoá nó lại ("Cooldown no longer recovers while Buff active" — nerf so với launch); "permanent block" là cường điệu, ~6 giây hở mỗi cycle là điểm chết.
- Brass Dome giúp trên hai trục: +200-300 flat stun threshold (base) và pool ward nếu runeforge; base không cho ward.
- Block-all chỉ chặn Hit — DoT, ground degen, unblockable đi xuyên qua hoàn toàn.

**Verdict: NEUTRAL-to-strong nhưng overhyped.** Đầu tư đúng thì block-all 4 giây + Parried là một burst-window mạnh cho attack build chạy 600+ Ward; nhưng pitch "thay lớp phòng thủ chính" và "permanent" sụp khi đặt cạnh uptime 40%, downside ×0.5, và việc nó không làm gì trước DoT. Nó là một lớp chồng thêm, không phải nền tảng thủ.

Cần đo trong client (league đã live): stacking form của stat stun-threshold — đốt 200 Ward rồi đọc Stun Threshold, ×1.0 là multiplicative còn ×1.5 là additive, một mốc đó chốt cả hai con break-even; stun buildup tích qua block có chạm Heavy-Stun-self nhanh hơn dự kiến không (block too much → mất buff — và lưu ý 0.5.1 đã chặn đường logout-để-thoát-heavy-stun, buildup giờ giữ qua relog); lượng ward thật của một Brass Dome đã runeforge; CDR II %; và trong các Kalguuran Support cái nào support được Spell như Refutation (Runic Infusion confirmed Attack-only nên loại).

## Patch Evolution

### Patch 0.5.1

- "Refutation's Cooldown no longer recovers while the Buff is active" — khoá uptime ở 4 + 10 mỗi cycle (~28.6% base, ~40% với full support), nerf so với launch khi cooldown còn hồi trong lúc buff active.
- Olroth's Resolve flask: 0.5.1 ghi lại dòng đã live âm thầm từ 0.5.0 — "Regenerate 2.5-5% of maximum Runic Ward per second during Effect" cộng "Gain Guard equal to current Runic Ward for 10 seconds when effect ends". Đây là nguồn nạp ward chồng lên 5%/giây nền (tới ~10%/giây) cộng một lớp Guard ăn theo pool, hợp với ward-stacker chạy Refutation.
- "Logging out and in again now preserves your heavy stun buildup" — chặn đường logout để thoát Heavy Stun, nên không còn cheese được cái "block too much → Heavy Stun → mất buff" bằng relog.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Repulsion"} Triggered Wave thêm base Critical Strike Chance 6% — không đụng Refutation trực tiếp nhưng liên quan loop ward-drain dùng chung hệ (xem [Runic Ward Onslaught Loop cho Minion](/guides/0-5-runic-ward-onslaught-loop)).

### Patch 0.5.0

- Refutation thêm vào như một trong 23 Kalguuran Skill, craft từ Remnant qua hệ thống Runes of Aldur.
- :wiki-link{url="https://www.poe2wiki.net/wiki/The_Brass_Dome"} bị nerf armour cùng patch: 700-800% → 500-600% increased Armour (base vẫn +200-300 Stun Threshold, không Ward).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} được thêm +50-100 maximum Runic Ward cùng patch (và Cast on Block supported skills cost nothing) — biến nó thành một nguồn ward cố định cho ward-stacker.
- Hệ Verisium Runeforging ra mắt (basic Act 1, Unique Act 3) + 15+ Runic Ward Rune craft từ Remnant — toàn bộ nền ward mà Refutation dựa vào đều là cơ chế mới của 0.5.

## Relationships

- **related_mechanics** [Runic Ward Onslaught Loop cho Minion](/guides/0-5-runic-ward-onslaught-loop) — chung hệ Runic Ward; loop đó giữ ward thấp thụ động (không feed stun threshold), Refutation thì đốt ward để đổi bonus stun threshold tạm thời — hai cách dùng cùng một pool ngược nhau.
- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — Kalguuran skill + Verisium Runeforging, hệ thống league sinh ra Refutation và nguồn ward của nó.
- **related** [0-5 new unique items](/guides/0-5-new-unique-items) — Brass Dome, Svalinn, Eventide Petals: các unique liên quan đến stun threshold + ward mà build Refutation dùng.
