---
template: templates/mechanic-template.md
document_type: mechanic
title: Spirit Walker Companion Beast Hunt
status: draft
author: duocnv
created: '2026-05-20'
updated: '2026-05-20'
league: '0.5'
patch: 0.5.0
tags:
  - poe2
  - huntress
  - spirit-walker
  - tame-beast
  - companion
  - minion
---

# Spirit Walker Companion Beast Hunt

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"} companion không phải kiểu summon thêm vài con pet cho vui. Hướng này biến :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} thành một bài toán săn monster base, săn modifier, cân spirit reservation và chọn weapon để đẩy damage cho companion.

Core của setup là một boss Beast hoặc rare Beast đủ tốt để đáng chiếm spirit. Con beast đó chỉ mạnh khi cả ba lớp cùng khớp: base monster có attack pool tốt, modifier giữ lại hỗ trợ đúng build, và character có đủ scaling từ weapon, minion attack speed, debuff hoặc ascendancy.

## How It Works

Tame Beast đặt wisps lên một rare Beast trong thời gian ngắn. Nếu con Beast chết khi còn bị wisps bao quanh, gem biến thành `Companion: <Monster Name>` cùng level và quality, về sau dùng để summon beast đó như một reviving companion. Companion này account-bound và dùng spirit reservation theo sức mạnh của monster cùng số modifier giữ lại.

Beast đã tame giữ tối đa bốn regular monster modifiers. Nếu monster có nhiều hơn bốn modifier, game chọn ngẫu nhiên bốn modifier để giữ lại. Các modifier kiểu Essence hoặc Azmerian wisp không phải lớp đáng dựa vào vì không được giữ theo cùng cách. Vì vậy bài toán không chỉ là bắt đúng monster base, mà còn là săn đúng rare modifier trên đúng monster base.

Spirit Walker làm cơ chế này đáng quan tâm hơn vì ascendancy có nhiều nhánh gắn trực tiếp với companion. Với bản Twister Huntress hiện tại, companion chưa phải nguồn damage chính; nó là utility layer dùng để thêm aura, shock/chilled ground, debuff, tanking hoặc một boss companion mạnh nếu build chuyển hẳn sang hướng Beast damage.

**Projectile / Owl Feather Path (Twister & Bow builds)** — Primal Bounty + The Mhacha's Gift cho "Primal Owl Feather" (cứ 4s hoặc nhanh hơn khi có Mhacha, max 3). Dodge roll expend feather → empower projectile skill tiếp theo (thêm số lượng + projectile speed). The Mhacha's Gift cho phép expend hết 3 feather cùng lúc với 100% more empowerment mỗi feather thêm. Sacred Unity (lấy đủ 3 spirit path) nâng cấp toàn bộ. Build Twister coi đây là scaler trực tiếp mạnh nhất cho bounce count và speed trong arena lớn — video playtest xác nhận "twisters looking so juicy" nhờ node này giải quyết vấn đề dissipate trước khi nảy nhiều lần. Companion path và projectile path cạnh tranh spirit slot và idol, nên hiếm build max cả hai cùng lúc.

## Key Interactions

Monster base quyết định bộ skill, AI và animation của companion. Modifier quyết định phần giá trị phụ: aura hỗ trợ, debuff lên enemy, ground effect, guaranteed ailment hoặc defensive bubble. Một beast base đánh nhanh nhưng modifier vô dụng thường kém hơn một beast base vừa phải nhưng có modifier hỗ trợ đúng damage plan.

Spirit reservation là constraint chính. Summon Beast dùng reservation theo phần trăm và tăng theo sức mạnh monster/modifier, nên companion càng mạnh càng dễ đẩy build ra khỏi các spirit gem khác như :wiki-link{url="https://www.poe2wiki.net/wiki/Wind_Dancer"} hoặc herald. Với Twister starter, không nên hy sinh lớp thủ chính chỉ để chạy một companion chưa được test damage.

:wiki-link{url="https://www.poe2wiki.net/wiki/Bind_Spectre"} là cơ chế cùng họ nhưng khác mục tiêu. Bind Spectre bắt gần như mọi non-unique monster để làm reviving minion, trong khi Tame Beast chỉ nhắm rare Beast và biến thành companion. Tame Beast mạnh hơn ở support-oriented modifiers; Bind Spectre hợp hơn khi muốn một minion có skill cụ thể.

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Natural_Order"} biến Tame Beast từ rare-beast utility thành unique-beast hunt. Node này cho Tame Beast capture Unique Beasts, nhưng chỉ một unique beast được tame tại một thời điểm. Vì vậy boss companion không thay thế hoàn toàn rare beast package; nó tạo một slot boss riêng cần so sánh với rare companion có modifier tốt.

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Catha%27s_Balance"} làm main-hand weapon damage trở thành stat companion. Companion deal thêm attack damage bằng 60% main hand weapon damage, nên weapon chậm, damage range cao và crit thấp vẫn rất tốt nếu nhân vật không cần tự đánh nhiều. Đây là lý do talisman damage cao trở thành hướng gear đáng nghiên cứu, thay vì chỉ nhìn minion damage trên sceptre.

:wiki-link{url="https://www.poe2wiki.net/wiki/Vivid_Stampede_%28passive%29"} tạo Vivid Wisps khi di chuyển và xả thành Spirit Stags khi attack. Với Catha's Balance, cùng một weapon damage cao vừa buff companion chính vừa buff stag damage, nên weapon choice phải phục vụ cả boss beast lẫn spirit package.

:wiki-link{url="https://www.poe2wiki.net/wiki/Idolatry"} cho companion damage và reservation efficiency theo idol, nhưng phạt elemental resistance nếu socket non-idol augment. Node này chỉ đáng lấy khi idol setup thật sự vượt được rune/augment setup bình thường; mất socket tốt để lấy companion damage có thể làm character yếu đi nhiều hơn phần companion nhận lại.

## Optimization

Đầu tiên cần định nghĩa vai trò companion. Nếu build thiếu phòng thủ, ưu tiên beast có aura/defensive utility thay vì cố tìm DPS. Nếu build thiếu ailment setup, tìm beast có ground effect hoặc guaranteed ailment để mở scaling cho main skill. Nếu build đã đủ mọi lớp phụ, lúc đó mới đáng săn monster base có animation bossing tốt.

Khi săn beast, dùng Tame Beast gem rỗng và kiểm tra monster category trước khi giết. Con cần bắt phải là rare Beast, không phải normal, magic hoặc humanoid. Nếu mục tiêu đã chết mà chưa bị wisps hoặc wisps hết duration trước khi chết, gem không capture.

Với Spirit Walker, boss-type Beast là ceiling của hướng companion damage. Khi vào league, mỗi boss cần được ghi lại theo cùng format: bắt được hay không, reservation bao nhiêu, giữ modifier nào, skill nào hoạt động, AI có đánh boss ổn không, và damage thực tế so với cùng lượng spirit dùng cho aura/herald.

Nếu chọn hướng Head Crusher/Silver Fist, ưu tiên minion attack speed hơn minion cooldown recovery. Attack pool của nhóm này có nhiều cooldown skill không phải lúc nào cũng là hit tốt nhất; tăng attack speed giúp con boss quay lại basic/high-value attack nhanh hơn, còn cooldown recovery có thể làm nó dùng các skill kém damage thường xuyên hơn.

Candidate boss cần chia theo nhiệm vụ. Head Crusher/Silver Fist là hướng mặc định vì damage profile cao và xuất hiện ở nhiều map hơn, nên cơ hội roll modifier tốt cao hơn. :wiki-link{url="https://www.poe2wiki.net/wiki/Morvak,_the_Infernal"} nghiêng về fire/physical single target và cần debuff fire resistance/armor break đúng cách. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Black_Crow"} có mobility và damage profile đáng test, nhưng chưa có lý do rõ để vượt Head Crusher hoặc Morvak.

Weapon package đi theo hướng rõ ràng. :wiki-link{url="https://www.poe2wiki.net/wiki/Jade_Talisman"} + non-unique sceptre qua :wiki-link{url="https://www.poe2wiki.net/wiki/Lord_of_the_Wilds"} là ceiling cao vì vừa có main-hand damage lớn vừa giữ được minion stats trên sceptre. :wiki-link{url="https://www.poe2wiki.net/wiki/Spire_of_Ire"} là low-friction spear option vì stat requirement nhẹ và chaos damage ít bị monster resist. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hammer_of_Faith"} hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ironwood_Greathammer"} qua :wiki-link{url="https://www.poe2wiki.net/wiki/Giant%27s_Blood"} là peak-damage puzzle nhưng bị attribute pressure rất nặng. :wiki-link{url="https://www.poe2wiki.net/wiki/Molten_Hammer"} là một-hand fire route cho Morvak/fire companion setup vì base có hidden physical-to-fire behavior.

## What Doesn't Work

Không nên tính mọi companion như một damage multiplier miễn phí. Companion chiếm spirit, chịu AI, có animation lock, có survival problem và có thể bị giới hạn bởi nội dung không cho tame. Nếu bỏ Wind Dancer hoặc một aura quan trọng để chạy beast yếu, build sẽ tệ hơn dù sheet nhìn thú vị hơn.

Không nên suy DPS từ showcase visual. Footage cho biết relative behavior và visual interaction, nhưng không đủ để tách damage của từng minion, support gem, item, monster modifier, level, spirit reservation và patch tuning.

Không nên dùng act/location bug report cũ làm luật vĩnh viễn. Tame Beast và Bind Spectre từng có nhiều hạn chế/bug theo act hoặc monster list; khi test trong 0.5 phải ghi lại patch, zone và monster name cụ thể.

Không nên dùng unique sceptre/wolf army làm mặc định cho Head Crusher plan. Unique sceptre phục vụ army playstyle tốt hơn, nhưng nếu mục tiêu là dồn damage vào một boss beast thì rare sceptre có minion attack speed, minion damage, minion crit/life và aura thường hợp hơn.

## Evaluation Rules

Một beast chỉ đáng dùng khi nó có nhiệm vụ rõ. Utility beast cần aura, ground effect, debuff hoặc defensive layer đáng giữ. Damage beast cần attack pool tốt, spirit cost hợp lý và scaling path không phá character chính. Nếu con beast không giải quyết vấn đề cụ thể, spirit nên dành cho phòng thủ hoặc aura ổn định hơn.

Boss nguy hiểm với player chưa chắc là companion tốt. Nhiều boss giết player vì skill khó né, arena pressure hoặc visual chaos; những yếu tố đó không tự chuyển thành damage khi boss thành minion. Companion tốt cần hit package mạnh, AI bám mục tiêu ổn, resist profile không quá lệch và reservation không bóp nghẹt setup còn lại.

Rare modifier retention làm mỗi lần tame là một roll riêng. Cùng một monster base có thể cho kết quả rất khác nếu bốn modifier giữ lại khác nhau. Vì vậy săn beast không dừng ở việc tìm đúng tên monster; phải kiểm tra gem sau khi tame và lưu lại modifier package thật.

Generic companion damage không phải stat duy nhất. Với Catha's Balance, main-hand weapon damage và minion attack speed có thể tạo nhiều value hơn. Weapon damage thêm flat attack damage cho companion, còn attack speed tăng số lần con boss dùng hit package thực tế.

## Summary

- Tame Beast bắt rare Beast, biến gem thành Summon Beast/Companion và giữ tối đa bốn regular monster modifiers.
- Giá trị chính của beast thường là utility modifier, không chỉ base damage.
- Spirit Walker khiến boss/companion hunt trở thành một hướng build riêng, không chỉ là utility summon.
- The Natural Order xác nhận hướng unique Beast, còn Catha's Balance biến main-hand weapon damage thành stat companion.
- Head Crusher/Silver Fist là candidate ưu tiên; Morvak và Black Crow là các nhánh thay thế cần build damage type riêng.
- Jade Talisman + Lord of the Wilds + rare sceptre là package ceiling cao nhất trên giấy; Giant's Blood weapon route mạnh nhưng attribute pressure lớn.
- Với Twister Huntress, companion nên là utility layer trước khi biến thành damage plan chính.
- Cần lập log thực nghiệm cho từng monster/boss: tameable, reservation, modifiers retained, skill behavior, boss DPS và mapping value.

## Version History

### Patch 0.5.0

- Draft ban đầu cho Spirit Walker companion hunt. Các phần unique Beast, reservation và boss AI cần được cập nhật bằng log thực nghiệm khi league chạy.
- **2026-05-20:** Bổ sung subsection "Projectile / Owl Feather Path (Twister & Bow builds)" dựa trên playtest Lolcohol + wiki node Primal Bounty / The Mhacha's Gift / Sacred Unity. Ghi nhận cạnh tranh spirit + idol với companion path.

## Relationships

- **related_mechanics** [Twister](/mechanics/skills/twister) — Spirit Walker Twister có thể dùng companion như utility layer, nhưng damage chính vẫn là projectile engine.
- **related_mechanics** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Spirit Walker là một trong hai ascendancy mới ra mắt cùng patch 0.5.0 Return of the Ancients.
- **used_by** [Twister Huntress](/builds/huntress/0-5-twister-huntress-starter) — Build có thể pivot sang companion utility nếu đủ spirit và tìm được beast/boss tốt.
