---
template: templates/build-template.md
document_type: build
title: Spirit Walker Catha Companion
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
class: Huntress
ascendancy: Spirit Walker
game: poe2
league: '0.5'
patch: 0.5.0
budget_tier: medium-budget
build_tags:
  primary_skill: Tame Beast
  damage_type: physical
  playstyle: minion
  content_focus: all-content
tags:
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - catha-balance
  - minion
  - '0.5'
  - poe2
---

# Spirit Walker Catha Companion

Đây là hướng companion thật sự — không phải summon vài con pet cho vui, mà dồn toàn bộ damage của nhân vật vào một con boss-beast và để nó gánh cả single-target lẫn phần lớn clear. Người thích playstyle "đứng sau, để minion đánh" nhưng chán trần damage thấp của minion-stat sceptre sẽ thích build này, vì nó đổi hẳn cách scale companion sang vũ khí. Core là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} + một boss beast bắt qua :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, chơi được cả mapping lẫn bossing miễn spirit budget cân đúng.

## Build Overview

Companion damage mặc định scale theo minion stat trên sceptre, và trần của nó thấp vì sceptre chỉ roll được vài dòng "increased minion damage / attack speed". :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} lật bài toán: companion deal thêm attack damage bằng **60% main-hand weapon damage**. Vì vậy thay vì cầm sceptre minion-stat, mình cầm vũ khí có flat damage cao nhất có thể rồi để con boss-beast thừa hưởng — một vũ khí chậm, range cao, flat lớn, crit thấp vẫn cực tốt vì *mình* gần như không tự vung nó, chỉ con companion mới cần damage.

Loop vận hành như sau: damage source là boss-beast companion (đánh bằng hit package riêng của monster base, cộng 60% weapon damage từ Catha's Balance); scaling vector là main-hand flat weapon damage và minion attack speed; defense layer dựa vào :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} cùng aura còn dư spirit (ví dụ :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"}); mobility và clear phụ do skill của chính nhân vật lo. Constraint xuyên suốt là spirit reservation — companion càng mạnh càng ăn nhiều spirit, nên mỗi quyết định gear/tree đều phải cân "thêm damage cho beast" với "giữ đủ lớp thủ".

## Skill Gems & Links

Skill định danh là :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} dùng để *bắt* beast: đặt wisps lên một rare Beast, nếu nó chết khi còn wisps thì gem biến thành :wiki-link{url="https://www.poe2wiki.net/wiki/Summon_Beast"} (`Companion: <Monster Name>`) — một reviving companion account-bound, ăn spirit theo sức mạnh monster và số modifier giữ lại. Beast giữ tối đa bốn regular monster modifier, nên mỗi lần tame là một roll riêng; phải kiểm tra gem sau khi bắt và giữ lại bản có modifier hỗ trợ đúng (aura, debuff, ground effect, guaranteed ailment).

Support gem ưu tiên minion attack speed và added attack damage hơn minion cooldown recovery — attack pool của nhóm Head Crusher có nhiều cooldown skill không phải lúc nào cũng là hit tốt nhất, nên đẩy attack speed giúp con boss quay lại basic/high-value attack nhanh hơn, còn cooldown recovery dễ làm nó spam skill kém damage. Danh sách support gem chính xác chốt khi vào league (test-plan ở mục Stat Priorities); nguyên tắc là support nào nhân flat attack damage và attack speed cho minion thì giữ.

Phần spirit còn lại sau companion dành cho một aura phòng thủ như :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"}. Không hy sinh aura thủ chính để nhét thêm một beast yếu — sheet nhìn vui hơn nhưng build thực tế tệ đi.

## Ascendancy

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} là lý do hướng này đáng chơi, vì nhiều nhánh gắn trực tiếp với companion. Node cốt lõi cần lấy sớm là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} — nó cho phép :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} capture **Unique Beast**, mở ra slot boss companion mạnh hơn hẳn rare beast. Lưu ý chỉ một unique beast được tame tại một thời điểm, nên boss companion không xoá hẳn nhu cầu một rare beast modifier tốt; nó là một slot riêng cần so sánh giá trị.

Các node companion damage và reservation efficiency lấy theo thứ tự ưu tiên: trước hết là thứ giảm spirit cost / tăng companion damage trực tiếp, sau đó mới tới các node điều kiện như :wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} — node này cho companion damage và reservation efficiency theo idol nhưng phạt elemental resistance nếu socket non-idol augment, nên chỉ đáng lấy khi idol setup thật sự vượt rune/augment thường. Thứ tự allocate chính xác từng lab node chốt khi data 0.5 lên PoB.

## Passive Tree & Mastery

Cluster chính xoay quanh minion attack speed, minion damage, và spirit reservation efficiency — ba thứ này quyết định cả damage lẫn việc có đủ spirit chạy companion mạnh hay không. Vì Catha's Balance kéo 60% main-hand weapon damage sang companion, một nhánh đáng nghiên cứu là weapon/attack damage node của chính nhân vật: cần test xem "increased attack damage" trên tree có propagate vào phần damage companion nhận từ weapon hay không (ghi vào test-plan, đừng giả định).

Notable đáng nhắm là :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} — nó cho phép một talisman (non-sceptre) vẫn gánh minion stat, mở đường dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} flat-damage cao ở main-hand mà không mất hết minion scaling. Đường tree cụ thể (node id, mastery) chốt sau khi tree 0.5 ra; hiện ghi nhận intent: ưu tiên path đi qua minion + reservation cluster, rẽ sang weapon damage nếu test xác nhận nó feed companion.

## Stat Priorities & Defenses

Build này chưa chốt được số thật vì data 0.5 (Spirit Walker ascendancy, The Catha's Balance, tree 0.5) chưa lên PoB tại thời điểm viết — POB2 hiện chỉ có data 0.4. Khi league chạy (29/05), log lại đúng các số sau cho từng cấu hình beast/weapon:

- **Companion DPS** ở mức spirit thực tế đang reserve, đo cả basic attack lẫn hit package đầy đủ.
- **Spirit budget breakdown**: companion reserve bao nhiêu, còn lại đủ chạy aura nào (:wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} hay herald).
- **Character EHP**, life/ES, armour/evasion, và resistance cap 75%+ ở cả ba element.
- **Modifier package** thật của con beast đã tame (4 modifier giữ lại) — vì cùng monster base cho kết quả rất khác nhau tuỳ roll.
- **Catha's Balance contribution**: so companion DPS khi đeo Catha's Balance vs khi tháo, để xác nhận 60%-weapon thực sự là phần lớn damage chứ không phải minion stat nền.

Đây là measurement plan, không phải build yếu — số sẽ điền vào đây ngay khi tame được con beast đầu tiên trong 0.5.

## Resources

- Cơ chế nền tảng: [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — giải thích Tame Beast retention, reservation, candidate boss và weapon package.
- Build cùng class để leveling shell: [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter).
- Wiki POE2: :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"}, :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}.

## Gear Progression

### Early Mapping
Khởi đầu rẻ bằng một rare sceptre có minion attack speed + minion damage + minion crit/life và một aura mod, dùng beast rare bắt được trong campaign/early map. Đây là giai đoạn companion còn scale theo minion stat thường, chưa cần Catha's Balance — mục tiêu là sống sót và tìm con beast có modifier utility tốt.

### Mid (unlock Catha's Balance)
Khi có :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"}, đổi hướng gear: main-hand chuyển sang vũ khí flat-damage cao. Hai lựa chọn low-friction là :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} kết hợp notable :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} (giữ được minion stat trên talisman), hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} — spear chaos, stat requirement nhẹ và chaos ít bị monster resist.

### Endgame (peak flat)
Trần damage nằm ở Giant's Blood two-hander: :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hammer_of_Faith"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ironwood_Greathammer"} cầm một tay qua :wiki-link{url="https://www.poe2wiki.net/wiki/Giant%27s_Blood"} cho flat damage cao nhất feed vào companion — nhưng attribute pressure rất nặng, phải giải bài toán Strength trên tree/gear. Nếu đi hướng fire (companion :wiki-link{url="https://www.poe2wiki.net/wiki/Morvak,_the_Infernal"}), :wiki-link{url="https://www.poe2wiki.net/wiki/Molten_Hammer"} là một-hand fire route vì base có hidden physical-to-fire behavior.

Armour slot ưu tiên spirit, minion modifier và lớp thủ (life/ES, resistance). Con companion mặc định nhắm Head Crusher / Silver Fist beast vì damage profile cao và spawn nhiều map hơn nên cơ hội roll 4 modifier tốt cao hơn.

## Flasks

POE2 dùng life/mana flask đơn giản cộng charm, không có hệ flask phức tạp như POE1. Ưu tiên một life flask instant/recovery để sống qua spike, một mana flask nếu skill clear của nhân vật tốn mana, và charm chống ailment nguy hiểm nhất với playstyle đứng sau (thường là freeze/stun). Chốt charm cụ thể theo content sau khi vào league.

## Pantheon & Bandits

POE2 0.5 không có hệ Pantheon hay Bandit như POE1 — không có lựa chọn nào ở mục này. Reward campaign của POE2 đi theo cơ chế khác và không cần khai báo trong build doc.

## Leveling Notes

Companion build không phải hướng leveling mượt — leveling như một Huntress tiêu chuẩn bằng attack skill hoặc theo shell của [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) qua campaign, vì :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} và một con beast đáng dùng chỉ đến ở giai đoạn map. Pivot sang companion khi vào maps: lúc đó mới có đủ spirit, lấy được :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"}, và bắt được beast có modifier package tốt. Giữ Tame Beast gem rỗng sẵn trong túi để bắt thử mỗi khi gặp rare Beast ngon.

## Budget & Investment

Đường đầu tư đi từ rẻ tới đắt theo từng mảnh. Giai đoạn rare-sceptre companion gần như free, chỉ tốn currency craft một sceptre minion-stat tử tế. Bước nhảy đầu là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} — giá chưa biết vì league chưa mở, nhưng nó là gate mở khoá toàn bộ damage plan nên đáng ưu tiên. Trần đầu tư nằm ở Giant's Blood weapon route: vũ khí thì không nhất thiết đắt, nhưng giải attribute pressure (đủ Strength để cầm một tay) ngốn nhiều passive point và gear slot, đó mới là chi phí thật. Diminishing returns tới khi companion đã cap spirit hữu dụng — thêm weapon damage nữa mà không thêm spirit/attack speed thì giá trị giảm nhanh.

## Strengths & Limitations

Mạnh nhất là sự linh hoạt gear: vì damage đến từ flat weapon damage qua Catha's Balance, mình không bị khoá vào một unique sceptre cụ thể, và một con boss-beast tốt vừa tank vừa gánh single-target trong khi nhân vật rảnh tay lo clear/mobility. Hướng unique beast qua :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} cho trần single-target cao.

Điểm yếu phải thành thật: spirit budget luôn căng — chạy companion mạnh đồng nghĩa hy sinh aura, nên build dễ "giàu damage nghèo thủ" nếu tham. Companion chịu AI và animation lock, không phải lúc nào cũng bám đúng mục tiêu; một số content có thể không cho tame hoặc giới hạn minion. Giant's Blood route bị attribute pressure nặng. Và quan trọng nhất: build này **chưa được verify bằng PoB** vì data 0.5 chưa ra — toàn bộ damage hiện ở mức thiết kế trên giấy, companion DPS thực tế phải đo lại trong league trước khi tin.

## Summary

- Core là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} đổi scaling companion từ minion-stat sceptre sang **60% main-hand weapon damage** — cầm vũ khí flat cao, để beast thừa hưởng.
- Companion là boss-beast bắt qua :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"}; ưu tiên Head Crusher/Silver Fist và săn 4 modifier utility tốt.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} + :wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} mở slot unique beast cho trần single-target.
- Scaling ưu tiên flat weapon damage + minion attack speed > minion cooldown recovery; spirit reservation là constraint xuyên suốt.
- Weapon package: :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} + :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} hoặc Giant's Blood two-hander cho peak, :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} low-friction.
- Số liệu là test-plan: chờ data 0.5 + log companion DPS, spirit budget, EHP, modifier package thực tế trong league.

## Changelog

### 2026-05-25

- Draft concept ban đầu, viết trước launch 0.5 (29/05). Dựa trên cơ chế trong [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt). Toàn bộ số liệu để trống dưới dạng test-plan vì POB2 hiện là data 0.4, chưa có Spirit Walker / The Catha's Balance để verify.

## Relationships

- **derived_from** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — build hiện thực hoá hướng companion damage mà mechanic doc phân tích.
- **related** [Twister Huntress Starter](/builds/huntress/0-5-twister-huntress-starter) — cùng Spirit Walker; Twister là leveling shell và là hướng projectile cạnh tranh spirit slot với companion.
- **references** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — chi tiết reservation, candidate boss, weapon package.
