---
template: templates/build-template.md
document_type: build
title: Aura Bot Zoo Spirit Walker
status: draft
author: duocnv
created: '2026-06-12'
updated: '2026-06-12'
class: Huntress
ascendancy: Spirit Walker
league: '0.5'
patch: 0.5.2
budget_tier: low-budget
confidence_level: MEDIUM
pob_coverage: NA
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
  - aura-bot
  - zoo
  - essence-farming
  - 0-5
  - poe2
---

# Aura Bot Zoo Spirit Walker

Nhánh aura zoo của [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack): giữ nguyên khung gear, tree và carry, nhưng đổi một phần spirit lấy những con rare beast rẻ nhất game mang **monster aura modifier** làm aura bot buff cả đàn lẫn mình: Haste, Extra Physical Damage, Energy Shield, Elemental Resistance, Temporal Bubble. Sức mạnh của nhánh này không mua được bằng currency vì beast đã tame là account-bound; cái phải trả là thời gian farm essence ở campaign zone.

## Build Overview

:wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} giữ tối đa bốn regular :wiki-link{url="https://www.poe2wiki.net/wiki/Monster_modifier"} trên con beast bắt về, và trong pool modifier đó có hẳn một nhóm aura dạng "You and nearby Allies gain..." — khi con beast thành companion, "allies" của nó là mình cộng cả đàn. Wiki mô tả thẳng Tame Beast là skill support-oriented so với :wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} chính vì nhóm aura này. Một con beast mang Haste Aura là một aura bot cho 25% attack/cast speed và 25% movement speed cho cả team. Buff cỡ đó không tồn tại dưới dạng gem nào mình tự bật được cho companion ở 0.5.

Cái giá của mỗi aura là spirit reservation của con beast mang nó, và reservation scale theo sức mạnh monster base cộng số mod nó giữ. Bài toán của nhánh zoo vì vậy ngược hẳn với hunt carry: thay vì tìm con 4-mod mạnh nhất, tìm con base **yếu nhất còn roll được aura**: base yếu là reservation thấp, và mấy con đó nằm ở campaign zone level thấp, không phải map. Swarming Wasp 21% pool, Quick Leaper 23%, Quill Crab 24.9%. Mỗi con dưới hệ số efficiency của build chỉ ăn ~30-35 spirit, rẻ hơn nửa con Diretusk Boar.

Catha flat phys, Vulnerability, Voltaic Mark, lớp redirect và Idolatry ledger đều đứng nguyên như doc gốc. Nhánh này chỉ trả lời một câu: bỏ con damage nào ra, nhét aura bot nào vào, và đi bắt tụi nó ở đâu.

## Aura modifier nào đáng săn

Pool monster modifier có tám mod dạng buff/debuff vùng, giá trị ghi hai mức thường/Empowered:

- **Haste Aura** — allies 25% increased Attack/Cast Speed + 25% increased Movement Speed. Mod giá trị nhất cho đàn này vì bucket skill speed của companion gần rỗng: đàn đang chỉ có Onslaught từ Carved Majesty trên mục tiêu Marked, còn Haste Aura chạy thường trực không cần điều kiện.
- **Extra Physical Damage Aura** — allies 20/40% increased Global Physical Damage. Đàn ~89% phys nên ăn trọn, nhưng là increased nên pha loãng với Effigy 85-91% và jewel, uplift thật quanh 10-15% chứ không phải 40%.
- **Energy Shield Aura** — allies gain 12/30% of Maximum Life as Extra Maximum ES. Scale theo life từng ally: companion ăn +50% max life từ :wiki-link{url="https://www.poe2wiki.net/wiki/Forgotten_Warden"} nên lớp ES này dày tương ứng, và chính mình với 1,947 life cũng nhận thêm 234-584 ES trên nền 1,347.
- **Elemental Resistance Aura** — allies +20/35% all Elemental Resistances. Mình đã cap nên phần player gần như thừa, giá trị nằm ở đàn khi chạy map mod ele damage.
- **Temporal Bubble** — enemy trong bubble chịu 10/25% reduced Action Speed, 20/60% reduced Cooldown Recovery, debuff expire chậm 40%. Defensive multiplier cho cả team, đặc biệt quanh boss.
- **Periodic Invulnerability Aura** — định kỳ cho allies gần đó buff Immunity ngắn. Kèm clause khắc trên mod: **"Allies with Immunity cannot gain Immunity"**. Nhiều bot Invulnerability không cộng dồn, không kéo dài lẫn nhau; tối đa chỉ cải thiện uptime nếu chu kỳ lệch pha, và lệch pha có điều khiển được hay không thì phải log khi vào game. Giấc mơ "đàn bất tử vĩnh viễn" bị clause này chặn cứng.
- **Hinder Aura** (enemy gần đó 30% reduced Movement Speed) và **Healing Nova** (allies regen 10% life mỗi 2s theo chu kỳ) là hai mod hạng hai: đáng giữ nếu đi kèm trên con đã có mod chính, không đáng một slot riêng.

Thứ tự săn cho khung hiện tại: Haste trước vì lấp đúng bucket rỗng, rồi Energy Shield vì nhân với +50% companion life sẵn có, rồi Temporal Bubble cho boss. Extra Physical xếp sau vì pha loãng, Invulnerability để cuối như con thử nghiệm.

## Chọn beast theo spirit reservation

Reservation của beast tame về đọc được ngay trên monster trước khi bắt, nhưng đi dò mù từng zone thì vô tận. Đường tắt: **spirit cost của spectre trên community sheet correlate với reservation khi tame cùng base**: con spectre cost 29 tame về 21% pool, cost 59 về 33%, cost 84 về ~42%. Quy trình tra: thấy beast lạ trong zone → tra tên trên poe2db để biết base → tra base đó trên sheet spectre → cost thấp mới đáng bỏ công reset essence. Correlation này là số đo cộng đồng, không phải công thức GGG. Dùng nó làm pre-filter, số chốt vẫn là dòng reservation đọc trên monster trong client.

Mấy con đã có số đo thật, kèm spirit hiệu dụng dưới hệ số efficiency 2.353 của build (Trusted Kinship + Lord of Horrors, pool 332):

- :wiki-link{url="https://www.poe2wiki.net/wiki/Swarming_Wasp"} — 21% pool → **~29.6 spirit**. Rẻ nhất đã tìm thấy, farm ở :wiki-link{url="https://www.poe2wiki.net/wiki/Ashen_Forest"} (Interlude 3, area level 54, vào từ town :wiki-link{url="https://www.poe2wiki.net/wiki/The_Glade"}).
- **Quick Leaper** — 23% → ~32.5 spirit, essence ở Act 2.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Porcupine_Crab"} — 24.9% → ~35.1 spirit, farm ở :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"}. Nameplate trong zone ghi **Quill Crab**, wiki ghi Porcupine Crab: cùng một con, đừng bỏ qua vì lệch tên.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Winged_Fiend"} — 26.7% → ~37.7 spirit, base ở The Spires of Deshar (Act 2), chưa pin được spot essence ổn định.
- Caustic Crab cùng đảo Whakapanu là 32%: cùng một zone vẫn phải lọc base, đừng tame con đầu tiên thấy aura.

Ứng viên chưa đo: :wiki-link{url="https://www.poe2wiki.net/wiki/Sabre_Spider"} (Mastodon Badlands, Act 2) và :wiki-link{url="https://www.poe2wiki.net/wiki/Chaw_Mongrel"} (The Azak Bog / The Matlan Waterways, Act 3). Sheet spectre báo cost thấp, gặp essence thì đọc reservation rồi bổ sung vào danh sách.

Companion bị giới hạn **một con mỗi loại** cùng lúc, nên zoo bắt buộc đa dạng base: ba con Quick Leaper roll ba aura khác nhau vẫn chỉ field được một. Danh sách base rẻ vì vậy phải dài, mỗi aura muốn chạy thường trực cần một base riêng mang nó.

## Săn essence reset thế nào

Nền của kỹ thuật này là essence encounter ở overworld: rare bị essence giam hiện sẵn 2-3 modifier đọc được trước khi thả — soi được cả loại beast, reservation lẫn mod mà chưa cam kết gì. Quy trình mình chạy:

1. Vào zone mục tiêu, quét tìm essence. Không có essence → reset instance ngay, đừng dọn map.
2. Gặp essence đầu tiên, đọc tên con bị giam. **Con đầu tiên gặp gần như khoá base cho cả chuỗi reset**: chín phần mười số lần reset sau sẽ ra đúng con đó. Nếu lần đầu ra sai base mục tiêu, đổi zone hoặc chấp nhận tỉ lệ thấp; đừng cắm đầu reset mong đổi base. Con số 90% này là quan sát thực địa chưa có nguồn chính thức, log lại tỉ lệ của chính mình khi farm.
3. Đọc mod. Có aura mục tiêu → vào ritual capture. Không có → reset, lượt mới.
4. Reset: zone có waypoint thì về town, Ctrl+click vào tên zone tạo instance mới. Zone không có waypoint như Ashen Forest thì **Alt+click vào cửa zone** — không biết trick này thì không farm được mấy zone interlude.

Ritual capture phải làm đúng thứ tự vì đàn companion DPS cao giết con beast trước khi wisps kịp bám: weapon-swap để despawn cả đàn (đúng cái bug khiến build cấm swap khi map, ở đây thành công cụ dọn bãi), rồi gỡ offhand để chắc không còn con nào. Riêng con Bear từ :wiki-link{url="https://www.poe2wiki.net/wiki/Wild_Protector"} lì hơn: bug làm nó bám lại sau swap, phải swap qua lại vài lần tới khi màn hình sạch minion. Sạch rồi mới Tame Beast lên mục tiêu, tự tay giết khi wisps còn dán. Tame Beast mang Prolonged Duration II khi đi săn để kéo wisp window như doc gốc đã ghi.

**Tip:** essence có thể đổi chỗ hoặc biến mất giữa các lần reset: không thấy ở spot cũ thì đảo một vòng trước khi reset tiếp. Với Whakapanu chỉ cần quét nhánh sa mạc, tới rừng mà chưa thấy essence thì reset luôn cho nhanh.

Phần nền chung của pipeline tame — modifier retention, disenchant gem về bản trắng, Untainted Paradise cho volume — nằm đủ ở [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt); doc này chỉ thêm lớp lọc reservation + aura lên trên.

## Spirit ledger cho nhánh zoo

Ledger gốc chốt 302.4 trên pool 332: headroom 29.6 vừa khít **một** con Swarming Wasp và không hơn. Muốn zoo thật sự thì phải đổi chỗ, và bảng đổi nhìn thẳng như sau: park Diretusk Boar nhả 55.0 spirit, park Antlion Charger nhả 59.7. Hai con đó cộng headroom là ~144 spirit, đủ field bốn aura bot hạng 21-25%.

Phép đổi không lỗ Muster: mỗi aura bot vẫn là một loại reviving companion nên giữ stack 7% more riêng của nó — bỏ hai loại lấy bốn loại là **net +2 stack Muster cho cả đàn**, tự bù một phần damage mất từ hai con bị park. Cái mất thật là hai body clear: Antlion charge dọn pack và Boar trám phys-hit, nên nhánh zoo clear chậm hơn doc gốc một nhịp, đổi lấy Haste cho Zekoa với Bramble Hulk và lớp ES + Temporal Bubble cho cả team. Bot là beast level thấp ít mod nên máu mỏng hơn mặt bằng đàn; chúng vẫn hưởng +50% companion life từ Forgotten Warden và tự revive theo cơ chế Reviving, nhưng đừng cắm Loyalty hay Romira's lên bot — redirect dồn về mấy con trâu, bot chỉ cần sống để phát aura.

Mỗi bot chiếm một gem slot thường trực, và đây là sức ép thật của nhánh: roster gốc đã dày, thêm bốn bot là phải soi lại panel skill xem còn chỗ không trước khi đi săn — đếm slot trống trong client trước, săn sau. Bot không cần support đắt; nếu dư socket thì Meat Shield hoặc Elemental Army cho con hay chết là đủ.

## Budget & Investment

Phần mua được của nhánh này rẻ tới mức gần như miễn phí, tính theo poe2scout ngày 2026-06-12 (1 Divine = 126.6 Exalted):

- Mỗi bot cần một gem Tame Beast riêng, cắt từ Uncut Skill Gem. **Bẫy giá nằm ở level:** Uncut Skill Gem L20 đang ~661 ex ≈ 5.2 div và còn leo (+53% trong 7 ngày — demand minion đẩy giá trần gem), trong khi **L19 chỉ ~6 ex**. Aura bot không ăn gì từ tier damage 84% của gem L20, nên dừng ở L19 và để dành L20 cho carry — chênh lệch là 5 div mỗi con cho đúng 0 giá trị.
- Mỗi 20% quality trên companion gem là 10% Reservation Efficiency, và :wiki-link{url="https://www.poe2wiki.net/wiki/Gemcutter's_Prism"} áp thẳng lên companion gem sau capture được. +5% mỗi viên, giá 1.37 ex → Q20 hết 4 viên ≈ 5.5 ex; trên con bot 21% nó tiết kiệm ~3 spirit — đáng làm vì rẻ, quên thì vá sau, không chết ledger.
- Tổng input mua được cho zoo bốn bot: ~46 ex ≈ **0.36 div**. Toàn bộ phần còn lại của chi phí là thời gian.

Thời gian mới là đơn vị tiền thật của nhánh này. Mỗi bot đúng base đúng aura ăn 30 phút tới 2 giờ reset essence tuỳ RNG, zoo bốn con là một buổi tối 3-6 giờ — và campaign zone level 54 không nhả ra gì bán được, nên giá thật của zoo là số div lẽ ra kiếm được nếu dành ngần đó giờ chạy T15. Đổi lại, vì beast account-bound, sức mạnh này nằm ngoài market hoàn toàn: không ai mua tắt được, không bị inflation ăn mòn, và con bot bắt hôm nay còn nguyên giá trị tới khi patch đổi cơ chế. Con tame hỏng không bán lại được — chỉ disenchant ở vendor lấy lại gem trắng giữ nguyên level, quality, socket rồi đi bắt lại.

## Failure Modes

Nhánh này làm tốt ba thứ: buff team-wide với giá ~30 spirit mỗi aura mà không gem nào mua được, một đường nâng sức mạnh tách hẳn khỏi market cho người có giờ chơi, và nó ngồi gọn lên khung build sẵn có — không đổi gear, không respec, muốn quay về roster damage chỉ cần re-summon. Những chỗ nó gãy:

**Immunity không stack được.** Clause "Allies with Immunity cannot gain Immunity" nằm ngay trên mod — nhiều bot Invulnerability không chồng buff, không nối duration. Plan nào xây quanh "đàn bất tử" là xây trên cát; một bot Invulnerability là thử nghiệm uptime, không phải defense layer tin được. Khi field nó, log uptime Immunity thực tế trong một session map trước khi cho nó chỗ ngồi cố định.

**Aura là "nearby" và AI không biết đứng đội hình.** Mọi mod đều theo bán kính quanh con bot, companion AI thì tản theo combat — bot lao sai hướng là cả đàn mất Haste đúng lúc cần. Uptime aura thực chiến chắc chắn thấp hơn 100%, thấp bao nhiêu thì phải đo: quan sát icon buff trên thanh status của mình trong một session T15, rớt buff thường xuyên thì giá trị thật của zoo phải chiết khấu tương ứng.

**Spirit và gem slot là hai bức tường cứng.** Mỗi bot ~30-38 spirit nghĩa là zoo nghiêm túc phải park bớt damage companion — clear chậm đi thấy được khi mất Antlion với Boar — và mỗi bot ngồi vĩnh viễn trên một gem slot. Đầy slot rồi thì mỗi bot mới là một lựa chọn bỏ-con-nào, không phải cộng dồn miễn phí.

**RNG thời gian và mọi số đều có thể trượt theo patch.** Tỉ lệ first-encounter khoá base 90% là quan sát cộng đồng; spectre-cost correlation là số đo cộng đồng; GGG chỉ cần sửa essence reset, sửa bug Alt+click door, hay điều chỉnh bảng reservation là cả pipeline đổi giá. Bug Bear không despawn và bug weapon-swap despawn đàn cũng nằm trong danh sách fix bất kỳ lúc nào — cái sau đang vừa là điều cấm khi map vừa là công cụ khi săn, fix xong thì ritual capture phải tìm cách dọn đàn khác.

**Buff không cứu được lỗ thủ gốc.** Zoo cho ES aura và Temporal Bubble nhưng không vá hai mặt one-shot phys/chaos 3.6k của build mẹ — đòn vượt pool vẫn giết bất chấp đàn buff đẹp cỡ nào. Thứ tự đầu tư đúng vẫn là ring chaos cap 75 trước, zoo sau; đổi thứ tự là lấy buff offense đi đắp lỗ defense.

## Verdict

Đây là nhánh cho người đã chạy ổn build pack và còn giờ chơi hơn currency: bỏ một buổi tối với ~0.36 div input là có hệ buff team-wide mà market không bán. Giá trị nhất với khung hiện tại là Haste Aura lấp bucket skill speed rỗng và ES Aura nhân với +50% companion life sẵn có; Invulnerability để cuối cùng như món thử nghiệm vì clause chống stack. Đừng chạy nhánh này thay cho việc vá chaos res — nó là lớp kem trên build đã đứng, không phải xương sống mới.

## Changelog

### 2026-06-12

- Viết nhánh aura bot zoo từ phân tích kỹ thuật farm rare beast reservation thấp: verify tám aura modifier + clause Immunity từ wiki, spirit math dưới hệ số 2.353 của build mẹ, giá input poe2scout cùng ngày (L19/L20 gap 6 ex vs 661 ex).

## Relationships

- **derived_from** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — build mẹ: toàn bộ gear, tree, ascendancy, ledger gốc và lớp redirect sống ở đó; nhánh này chỉ đổi cấu trúc roster.
- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — pipeline tame nền: modifier retention, essence reset hai tầng, disenchant, Untainted Paradise.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 với Spirit Walker, Tame Beast và essence encounter làm nền cho cả hướng companion.

## Resources

- [NEW 0.5 DISCOVERY! Rare Companion Spirit Cost & Locations — Mattjestic](https://www.youtube.com/watch?v=zuoSLaKXLNE) — field data reservation theo base + phương pháp tra spectre sheet, spot Ashen Forest / Whakapanu.
- [Community Spectre Cost Spreadsheet](https://docs.google.com/spreadsheets/d/1oadXSCHczpyCgRxzTk3nRBeeOLlefZAzKM3ijwmWevY/htmlview?gid=0#gid=0) — bảng tra cost spectre dùng làm pre-filter reservation.
