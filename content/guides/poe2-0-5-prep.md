---
template: templates/guide-template.md
document_type: guide
title: "Kế Hoạch League Start — Twister Spirit Walker, Runic Ward & Companion"
status: draft
author: duocnv
created: '2026-05-23'
updated: '2026-05-24'
league: '0.5'
patch: 0.5.0
guide_type: league-prep
tags:
  - poe2
  - '0.5'
  - return-of-the-ancients
  - runes-of-aldur
  - spirit-walker
  - twister
  - runic-ward
  - companion
  - league-start
  - prep
---

# Kế Hoạch League Start — Twister Spirit Walker, Runic Ward & Companion

> **Quick Summary:** Kế hoạch league start của mình cho Return of the Ancients (Runes of Aldur, launch ~29/05). Starter là Twister Spirit Walker, lớp phòng thủ xoay quanh Runic Ward, companion beast làm character hai. Đây là phân tích vì sao chọn vậy và đâu là biến số cần test ngay ngày 1.

## Overview

0.5.0 là patch lớn nhất POE2 trước 1.0: endgame viết lại toàn bộ (Atlas reset, Fortress, sáu storyline mới, Masters of the Atlas), hai ascendancy mới (Spirit Walker cho Huntress, Martial Artist cho Monk), và lần đầu game có hệ challenge. League mechanic **Runes of Aldur** xoay quanh Remnant + Verisium Runeforging + **Runic Ward** — lớp phòng thủ kích hoạt khi còn 1 life và hồi độc lập.

Hai thứ GGG thay đổi nhiều nhất cũng chính là hai thứ định đoạt league start: build nào để leo cho nhanh, và dựng phòng thủ ra sao khi các lớp cũ bị nerf. Kế hoạch của mình gói gọn trong ba quyết định — starter là Twister Spirit Walker, phòng thủ build quanh Runic Ward thay vì ES recharge, và companion beast để dành làm character hai. Phần dưới là lý do từng quyết định và đâu là chỗ phải tự kiểm chứng trong tuần đầu.

## Tại Sao Twister Spirit Walker Là Starter

Quyết định starter dựa trên một tín hiệu rất cụ thể: GGG **không đụng một dòng nào** vào Twister hay Whirling Slash trong toàn bộ thay đổi skill, dù Twister đang giữ thời gian speedrun campaign nhanh nhất. Khi một skill đang quá mạnh mà patch lớn vẫn để yên, đó là GGG cố ý chừa flagship cho ascendancy mới — rủi ro bị nerf-từ-trên-trời trong tuần đầu gần như bằng không, đúng thứ mình cần ở một starter.

Core loop là Whirling Slash lên stage 3 rồi bắn Twister để sinh 4 tornado, sau đó pivot sang Ice-Tipped Arrows (từ Act 2) + Barrage + Combat Frenzy + Freezing Mark để freeze cả màn rồi lặp. Scaler thật sự không phải bản thân Twister mà là owl feather: Primal Bounty + The Mhacha's Gift cho mỗi dodge roll nhả feather empower projectile (thêm số lượng + tốc độ), nên playstyle là dodge roll để nạp rồi xả — vận động liên tục, hợp với một ascendancy thiên evasion.

Điểm cần hiểu rõ trước khi cắm đầu vào: Twister là skill **clear**, không phải boss-killer. Mỗi tornado chỉ hit một target mỗi 0.66 giây, nên với một con boss đơn lẻ, DPS bị chặn cứng bởi nhịp hit × damage mỗi hit — thêm tornado giúp quét pack đông chứ không cộng tuyến tính lên single target. Đây là lý do positioning quyết định boss: kéo boss vào góc tường hoặc địa hình hẹp để tornado bounce lại nhiều lần, mỗi lần bounce là một cú hit mới — chênh lệch damage rất lớn, và cũng là lý do mình phải có plan riêng cho boss arena rộng (tornado dissipate trước khi bounce kịp).

Trong campaign, mở đầu Whirling Slash rồi gắn ngay Twister + Cult Contagion để dọn pack đầu game, breakpoint quan trọng ở level 6 lấy Fangs of Frost (parry debuff hóa explosion + chilled ground mà Twister pick up). Gear thì đơn giản và rẻ: body armor base armor cho survivability, boots movement speed, gloves flat added damage to attacks, spear iron/flat damage, thêm wolf form talisman cho tốc độ sớm.

Một chỗ trong loop bị đổi cơ chế mà nhiều người sẽ tưởng là buff to: **Salvo Support** giờ cho 1 Seal mỗi giây tối đa 6, mỗi Seal 1 projectile, thay cho 1 Seal mỗi 2 giây tối đa 3, mỗi Seal 2 projectile. Tính kỹ thì cả ceiling (6 projectile) lẫn thời gian nạp đầy (6 giây) đều y hệt — thay đổi thực chất chỉ là granularity mượt hơn (cộng +1 mỗi giây thay vì +2 mỗi 2 giây), không phải buff sức mạnh. Đừng tính dư DPS vì cái này. Ngược lại freeze ramp thì yếu đi thật: Freezing Salvo còn 34-68% more Magnitude of Chill (trước 56-107%) và Ice Shot mất "25% more Freeze Buildup" trên Ice Shard, nên nguồn freeze phải dồn vào Frost Nexus + Freezing Mark.

## Vì Sao Phòng Thủ Phải Là Runic Ward

Runic Ward không phải "thêm một lớp ES". Nó là **reverse ES**: damage đánh vào life trước, Ward nhận sau khi life về 0 — không cheat death, nhưng đảo ngược thứ tự hấp thụ. Hệ quả thực tế quan trọng nhất là dot (Burning Ground, bleed) đánh vào life trước, nên một setup life flask + Ward xử lý dot dễ hơn hẳn so với full ES vốn bị dot gặm thẳng. Keyword "Defences" giờ chỉ còn trỏ Armour/Evasion/ES và **không** apply cho Runic Ward, Resistance, Block — Ward là layer độc lập, có recovery riêng. Nguồn Ward là Ward Rune (+15 max) socket vào Augment slot trên trang bị từ remnant của league, kèm Warding Runes cho bonus khi đầy Ward.

Lý do mình chuyển Runic Ward từ "đáng thử" sang "gần như bắt buộc" cho right-side tree nằm ở chi tiết kỹ thuật của đợt nerf ES. Hàng loạt notable bị đổi từ "increased Energy Shield Recharge Rate" sang "faster start of Energy Shield Recharge" — và hai cái này khác nhau về bản chất. "Recharge rate" quyết định ES hồi nhanh cỡ nào; "faster start" chỉ rút ngắn độ trễ trước khi bắt đầu hồi. Đổi rate thành start-delay nghĩa là một khi đã ăn hit và recharge khởi động, ES vẫn refill ở tốc độ base — yếu hơn nhiều cho việc đứng chịu damage liên tục. Rapid Recharge từ 25%/25% còn 12% start + 12% rate, Convalescence từ 40% start còn 20%, Essence Infusion mất hẳn 40% recharge rate, và small passive ES Recharge Rate bị gỡ khỏi tree. Ghost Dance cũng ăn nerf: Ghost Shroud mỗi 11.7-10.1 giây thay vì 7.6-6.1. Hai trụ phòng thủ quen của Huntress/Ranger/Monk/Mercenary — ES recharge tank và evasion + Ghost Shroud — đều bị rút sức cùng lúc, nên giữ life + Ward buffer hợp lý hơn ép full ES.

Leech cũng không cứu được khoảng trống đó: leech giờ giới hạn 1 instance với cap 40k mỗi hit, và Vaal Pact bỏ instant leech (đổi lấy 50% more amount nhưng 67% less speed, không còn cấm life flask). Leech-tank cho big hit chết hẳn — càng đẩy mình về hướng life flask + Runic Ward làm xương sống phòng thủ, test ngay từ ngày 1 trên setup low-life để biết Ward kích hoạt và hồi đúng nhịp với playstyle dodge roll hay không.

## Companion Beast — Để Dành Làm Character Hai

Hướng companion mạnh hơn 0.4 đáng kể nhờ buff ngầm, đủ tốt để làm character hai nhưng chưa đủ chắc để mạo hiểm làm starter. Keystone **Trusted Kinship** giờ cho 30% more Reservation Efficiency cho Companion Skills (20% less cho non-Companion), bỏ "30% less Defences" cũ — đây mới là thứ khiến chạy một con tamed beast reservation lớn trở nên khả thi, vì spirit reservation chính là nút thắt của cả hướng này. Idolatry chồng thêm +10% companion damage + 2% reservation efficiency mỗi idol, đổi lại penalty khi augment thứ không phải idol. Tree thêm 19 passive companion, Rage Support giờ support được Minion Skill, Commanding Rage lên 2% minion attack speed mỗi 5 Rage.

Cơ chế trung tâm là Tame Beast: engulf rare beast bằng hindering wisp, giết, rồi gem hóa Companion account-bound revive được, scale 84% more damage ở gem 20 và giờ triệu beast ngay khi đủ spirit. Companion giữ tối đa 4 regular monster mod (KHÔNG giữ Essence/Azmerian wisp mod), reservation scale theo power + số mod của beast, quality tăng reservation efficiency, disenchant để reset nếu bắt nhầm. Bear spirit scale 60% main hand weapon damage và không tính vào companion limit nên vẫn cộng thêm được một companion khác. The Natural Order cho bắt cả Unique beast (30% MS).

Hai vấn đề thực tế giữ nó ở vị trí character hai: Bear spirit không unsummon được bằng weapon-swap trick (kiểu revive + swap reset minion chết như Infernal Legion cũ), và scepter unlimited companion stats vẫn tệ. Kèo lớn nhất là Verisium Rune có thể extract power của beast ra — nhưng đó là thứ phải tự test trong league, không nên đặt cược starter lên nó. Kế hoạch: ngày 1 săn beast base tốt sớm (modifier giữ lại nhiều khi quan trọng hơn base), rồi quyết định quanh ngày 3-5 nếu Tame Beast scale vượt trội.

## Các Hướng Khác — Đánh Giá Nhanh

Poison kiểu Fubgun tụt một bậc rõ. Poisonburst Arrow — delivery thống trị 0.4 — bị cắt duration xuống flat 3 giây (trước tới 4.9) và quality magnitude giảm nửa; Pathfinder Overwhelming Toxicity lên 50% less Poison Duration; Plaguefinger gloves giờ "Cannot inflict Elemental Ailments". Poison vẫn chơi được nhưng hết là free lunch, nhiều khả năng hướng này phải pivot sang bow/crit hoặc delivery khác. Mình không chọn poison làm starter vì rủi ro phải đổi lại toàn bộ delivery sau ngày 1.

Martial Artist Monk là hướng đáng test sau khi yên vị: Tempest Bell lên tối đa 3 bell active (trước 1) và Ancestrally Boost được như Strike, Gathering Storm cho Perfect Dash kích nổ bell tạo shockwave 564-869% Attack Damage. Cộng Facebreaker (unique đánh tay không) + hệ illusion/rune-on-body, bell-combo có nền buff thật — chỉ ít tài liệu hơn Huntress nên chưa hợp làm starter mù.

Low-life Runic Ward stacker là evolution tự nhiên từ Blood Mage 0.4, càng hợp khi Vitality Siphon lên 20% spell damage leeched as life (trước 10%). Ward kích hoạt ở 1 life + hồi riêng mở ra playstyle máu thấp không phụ thuộc ES recharge — đúng thứ vừa bị nerf, nên đây là góc đáng để mắt cho character sau.

## Crafting & Economy Cần Chuẩn Bị

Runeforging là core loop của league, không phải side content, nên stock Verisium và chuẩn bị crafting sớm là việc đáng làm. Armour dưới level 55 gần như được Runic Ward miễn phí; trên ngưỡng đó thường phải trade-off defense khác để có Ward. Unique Verisium Runeforging còn cho nâng base type của Unique Weapon/Armour rớt dưới 55 (weapon damage cao hơn, armour base defence cao hơn kèm Ward) — giúp unique thấp cạnh tranh ở map cao. Currency thì Greater/Perfect hiếm hơn chút, nhưng Greater Transmute/Augment giờ min mod level 44 (trước 55) và rớt từ Act 4, Divine cũng phổ biến hơn — early crafting dễ thở hơn cho league start. Nếu sau này đi hướng remnant-centric thì The Hollow Mask đáng nhắm: cấp Wildwood's Gifts, "Remnants you create affect Allies in your Presence", và 80-100% increased Reservation Efficiency of Remnant Skills.

## Theo Dõi Ai Trong Tuần Đầu

Theo sát nhất là Lolcohol cho Twister + defence layer — test sớm trong private league và giải thích Runic Ward tương tác low life ra sao thay vì chỉ khoe build mạnh; SnooBAE85 là Twister specialist, và record campaign của Guy That Dies bằng Twister là cú hích lớn cho hype starter này. Spud the King dẫn hướng companion/Druid. GhazzyTV phụ trách góc minion nhưng dè dặt — đáng nghe vì anh ấy chỉ thẳng vấn đề kỹ thuật (không weapon-swap unsummon, scepter trash). Fubgun là barometer cho scaling damage và sẽ định đoạt poison hay bow lên ngôi. Zizaran và P4wnyhof mạnh ở phân tích layer (leech rewrite, ES recharge nerf, Runic Ward timing) — thứ quyết định build sống hay chết chứ không chỉ DPS. Mình dùng họ để đối chiếu, không để họ chọn build thay.

## Việc Làm Ngay Khi League Live

Leo campaign bằng Twister theo gem sequence ở trên, ưu tiên body armor base armor cho survivability. Stock Verisium và chuẩn bị Runeforging vì đó là nguồn Runic Ward chính. Săn beast base tốt sớm để giữ kèo companion character hai. Và test Runic Ward trên setup low-life ngay ngày 1 để biết nó thay thế hay bổ sung ES/life thế nào dưới leech rewrite — đây là biến số lớn nhất, ai nắm được timing và slot nào cho Ward miễn phí sẽ có lợi thế rõ trong tuần đầu.

## Related Resources

- [Return of the Ancients](/mechanics/return-of-the-ancients) — Toàn cảnh thay đổi 0.5.
- [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Chi tiết cơ chế Tame Beast + companion path.
- [Youtuber POE2 Nên Theo Dõi Cho League 0.5](/guides/poe2-youtubers-fate-of-the-vaal) — Ai xem và build 0.4 của họ làm nền cho hướng 0.5.
- [Twister Huntress Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — Build 0.5 thực tế với gem links và ascendancy path.
- [POE2 0.4 Meta Analysis](/mechanics/fate-of-the-vaal-meta) — Nền tảng để thấy archetype 0.5 evolve từ đâu.

## Relationships

- **references** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — Toàn bộ thay đổi 0.5 (Runic Ward, Verisium Runeforging, Spirit Walker, Atlas overhaul, challenges) là nền tảng cho mọi quyết định trong kế hoạch này.
- **references** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Hướng companion (Tame Beast + beast hunting + spirit reservation) là character hai trong kế hoạch.
- **references** [Youtuber POE2 Nên Theo Dõi Cho League 0.5](/guides/poe2-youtubers-fate-of-the-vaal) — Danh sách creator dùng để đối chiếu intel trong tuần đầu.
- **references** [Twister Huntress — Ice-Tipped Arrow Starter](/builds/huntress/0-5-twister-huntress-starter) — Build starter thực tế dùng Spirit Walker (Primal Bounty + Mhacha's Gift owl feather) + Twister + Ice-Tipped Arrows.
- **related_mechanics** [POE2 0.4 Meta Analysis](/mechanics/leagues/fate-of-the-vaal-meta) — Nhiều hướng 0.5 là evolution từ Poisonburst, companion Wolf/Bear, Blood Mage low-life của 0.4; Runic Ward đặc biệt hợp low-life đã mạnh trước đó.
