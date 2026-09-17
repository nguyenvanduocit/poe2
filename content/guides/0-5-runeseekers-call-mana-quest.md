---
template: templates/guide-template.md
document_type: guide
title: Runeseeker's Call và quest ẩn 10.000 mana
description: Farm Depleted Mana Rune từ Uhtred, gom đủ 10.000 mana bằng Eldritch Battery và Uhtred's Chalice, đổi lấy Runeseeker's Call ở Kingsmarch rồi Runeforge trước khi bán.
status: published
author: duocnv
created: '2026-07-17'
updated: '2026-07-17'
league: '0.5'
patch: 0.5.3
guide_type: endgame-content
confidence_level: High
tags:
  - poe2
  - 0-5
  - return-of-the-ancients
  - runeseekers-call
  - depleted-mana-rune
  - uhtred
  - expedition
  - ocean-exploring
  - mana-stacking
  - eldritch-battery
---

# Runeseeker's Call và quest ẩn 10.000 mana

## TL;DR

- Depleted Mana Rune rớt từ Uhtred, boss Expedition. Cộng đồng report 2-3% mỗi kill, nên tính từ 40 lượt trở lên.
- Ép Uhtred spawn bằng một Uhtred's Saga (~1,15 div) cộng một Expedition Logbook (~1,8 div), khoảng 3 div một lượt.
- Rune là quest item: không stash được, không bán được. Mỗi character phải tự farm rune của nó.
- Eldritch Battery convert base Energy Shield sang base mana. Chỉ flat ES, flat mana và Int vào pool; % increased Energy Shield không đổi thành mana, còn % increased Mana thì nhân lên tất cả.
- Uhtred's Chalice giá 1 exalt, cho mana recovery overflow tới 1,5× max. Ngưỡng thật vì thế là ~6.667 max mana, không phải 10.000.
- Cây sạch sàn ~1.190 div, median ~1.300. Runeforge tốn 50 Exceptional Verisium (~0,26 div) và không có mặt trái: cả ba dòng đều sàn bằng hoặc cao hơn cây trắng.
- Vaal là đường duy nhất ra socket thứ sáu — 0 trên 111 cây sạch có 6 socket. Trúng thì 19.800 div tới 14 mirror, trượt thì tuột về ~449 div.

Quest này không báo gì hết: rune rớt câm, không có entry trong quest log, và chỉ mở ra khi cầm đủ 10.000 mana. Phần khó không nằm ở boss mà ở chỗ gom mana, còn phần đắt nhất là quyết định làm gì với cây wand sau khi cầm nó. Cả chuỗi mọc ra từ hệ Verisium của 0.5, nền league mình đã gói ở [Return of the Ancients](/guides/return-of-the-ancients). Giá trong bài lấy live ngày 17/07/2026, divine = 426 exalt.

## Uhtred rớt rune, và phải tự tay farm

:wiki-link{url="https://www.poe2wiki.net/wiki/Depleted_Mana_Rune"} rớt từ Uhtred, the Stardrinker — một trong bốn Faction Leader của Expedition, đánh trên đảo đi từ Kingsmarch. Nền sustain logbook mình đã viết đủ ở [Ocean Exploring](/guides/0-5-ocean-exploring); chạy quest này thì coi như đã có nền đó rồi.

Đợi Uhtred tự spawn là phí thời gian. Right-click :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Saga"} để set active, logbook kế reveal sẽ ép Uhtred ra guaranteed, saga tiêu khi trigger. Cùng đúng cơ chế mình đã dùng bên [Olroth Saga Lineage Support Farming](/farming/0-5-olroth-saga-lineage-farm), chỉ đổi tên boss. Saga ~490 exalt và logbook ~780 exalt, gộp lại khoảng 3 div một lượt kill — chưa tính waystone.

Drop rate rune là chỗ đau: 2-3% mỗi kill theo report cộng đồng, có người lụm ở lượt 42, có người qua 60 lượt vẫn trắng tay. Ở 2,5% thì kỳ vọng 40 lượt, tức ~120 div tiền saga và logbook; muốn chắc 95% có rune thì phải chuẩn bị cho 118 lượt, tức ~354 div. GGG không công bố số này nên nó chỉ là ước lượng — cứ log số kill thật của mình rồi chỉnh lại.

Rune không có note code và không nằm trong catalog trade — tức là không mua được, cũng không nhét stash được, chỉ nằm lì trong inventory của character đã nhặt. Nên toàn bộ chuỗi này chạy trên đúng một character: con nào nhặt rune thì chính con đó phải đủ mana và chính con đó đi đổi. Muốn cây thứ hai thì lại một character khác cày Uhtred từ đầu, chỉ có bộ gear mana là xài lại được.

## Eldritch Battery quyết định dòng nào đáng mua

Ngưỡng 10.000 mana không có cách nào lách bằng passive thường, và ai còn lơ mơ ba pool ăn nhau ra sao thì đọc [Ba pool tài nguyên](/guides/beginner-life-es-mana) trước cho dễ theo. Chốt chặn là keystone :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"}: *Convert 100% of maximum Energy Shield to maximum Mana*, đổi lại *Mana Costs are Doubled*. Mana cost gấp đôi không ảnh hưởng gì ở đây vì con này chỉ cần đứng yên cầm số, không cần đánh.

Chỗ ăn tiền là hiểu đúng chữ convert. Stat conversion trong POE2 lấy **base value** của stat gốc gắn sang stat đích, rồi stat đã convert chỉ scale theo modifier phần trăm của stat **đích**, không scale theo phần trăm của stat gốc. Áp vào Eldritch Battery: base ES thành base mana, sau đó **% increased Mana** nhân lên; còn **% increased maximum Energy Shield** không đi theo, đổ bao nhiêu điểm tree vào đó cũng ra số không.

Vậy dòng thật sự nạp pool chỉ có bốn loại. **Flat ES** (`+X to maximum Energy Shield`) và ES sẵn trên body armour, helmet — đây là phần convert. **Flat mana** (`+X to maximum Mana`) trên nhẫn, amulet, belt. **Intelligence**, vì trong POE2 mỗi 1 Int cho +2 maximum Mana và tuyệt đối không cho ES — Int trong game này không đẻ ra energy shield như POE1. Cuối cùng là **% increased maximum Mana**, thứ duy nhất nhân cả pool.

Quality trên armour vẫn đáng đập vì local % increased ES nâng chính con số ES của món đó, mà con số đó chính là phần base đem đi convert. Còn % increased maximum Energy Shield dạng global trên nhẫn hay node tree thì bỏ qua. Node tree lấy theo thứ tự Int, flat mana, rồi % increased Mana; node nào tiện đường có kèm ES phần trăm thì cứ ăn, đừng đi vòng vì nó.

Hai cái nhẫn và cái amulet là chỗ nhồi mana rẻ nhất, và đập :wiki-link{url="https://www.poe2wiki.net/wiki/Neural_Catalyst"} lên chúng trước khi đo — catalyst này là quality mana, 20 cái mỗi món, nó kéo thẳng dòng mana trên item lên. Belt thì mua rẻ nhất còn dòng maximum mana cao là xong, mấy dòng crit hay on-kill không liên quan chỉ làm item đắt lên vô ích.

## Uhtred's Chalice kéo ngưỡng xuống 6.667

Món cắt phần lớn công sức lại là món hay bị bỏ qua nhất. Keyword **Overflow** trong POE2 nói thẳng: *Recovery which Overflows its maximum can be recovered up to 1.5 times that maximum* — recovery vượt trần được chạy tới 1,5 lần trần.

Thứ mở overflow cho mana là :wiki-link{url="https://www.poe2wiki.net/wiki/Uhtred%27s_Chalice"}, unique trên base Transcendent Mana Flask, rớt từ chính Expedition, và **giá 1 exalt** với gần 5.000 cái đang list. Dòng mở khoá là *Mana Recovery from Flasks can Overflow maximum Mana during Effect*. Flask hồi 855-1140 mana mỗi ngụm sau khi tính (200—300)% increased Amount Recovered, kèm 70% reduced Recovery rate nên nó rót chậm, và (50—60)% reduced Charges nên số ngụm bị cắt.

Tính ra: trần overflow là 1,5 × max mana, muốn chạm 10.000 thì max mana chỉ cần 6.667. Nhưng mỗi ngụm chỉ đẩy thêm ~1.140, nên từ 6.667 phải uống ba ngụm liên tiếp mới bò lên 10.000 và lúc đó đúng bằng trần, không dư một điểm. Stack mana lên ~7.000-7.500 thì hai ngụm là qua, thoải mái hơn nhiều và vẫn rẻ hơn cày cho đủ 10.000 raw. Cầm chalice thì nhớ dòng *Lose 5% Life per second while you have no Runic Ward during Effect* — không có :wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} thì đứng uống là tự đốt máu, Runeforge cái armour lấy Runic Ward trước cho lành.

:wiki-link{url="https://www.poe2wiki.net/wiki/Mana_Remnants"} thì bỏ đi, đừng mất công. Nó là spirit gem reservation 30 Spirit chứ không phải cục nhặt ngoài đường, phải socket và bật lên mới chạy, và remnant chỉ rơi khi giết quái **đang dính Elemental Ailment**. Một con mule mana không có damage cũng chẳng có ailment thì không bao giờ đẻ ra remnant đều — chalice làm đúng việc đó với giá 1 exalt.

## Nạp rune rồi đưa Farrow ở Kingsmarch

Đủ mana thì right-click thẳng Depleted Mana Rune trong inventory, không cần mở gì, không cần đứng chỗ đặc biệt. Rune ăn số mana và đổi thành bản đã nạp. Nếu đi đường chalice thì uống trước rồi right-click trong lúc flask còn effect và mana đang vượt trần — hết effect là mana tụt lại, cửa sổ đó là toàn bộ cơ hội.

Rune đã nạp thì mang tới **Farrow** ở Kingsmarch, town của Act 4, đứng cạnh Dannig. Farrow là NPC 0.5.0 thêm vào kèm bốn quest xuyên campaign để mở dần hệ Verisium — cũng chính ông này mở Runeforging. Nói chuyện là đổi được :wiki-link{url="https://www.poe2wiki.net/wiki/Runeseeker%27s_Call"}.

Cây nhận về là Runic Fork, yêu cầu level 65 và 114 Int, và giá trị nằm trọn ở ba dòng: *Only Runes can be Socketed in this item*, *Has 5 Augment Sockets*, *200% increased effect of Socketed Runes*. 200% increased nghĩa là rune chạy ở **3 lần** giá trị gốc, nhìn mấy cây top là thấy: rune +3 to Level of all Spell Skills hoá thành +9, rune +360 maximum Mana hoá thành +1080. Năm socket nhân ba như vậy là lý do nó thành cây caster đắt nhất league, chứ không phải vì skill kèm theo. Skill nó grant là :wiki-link{url="https://www.poe2wiki.net/wiki/The_Stars_Answer"} lvl 19, tốn đúng 10.000 mana mỗi phát và *cannot be cast if you have less than 10000 Mana*, nên với người mua bình thường nó chỉ là flavour.

## Runeforge trước, rồi mới tính chuyện Vaal

Xong quest thì còn hai nước đi chính, khác hẳn nhau về rủi ro.

**Runeforge thì cứ làm, không có mặt trái.** Unique Verisium Runeforging mở từ quest Act 3 của Farrow, và patch note ghi rõ nó *has additional properties when used on Kalguuran Uniques* — Runeseeker's Call nằm trong nhóm đó. Tốn 50 :wiki-link{url="https://www.poe2wiki.net/wiki/Exceptional_Verisium"}, mà verisium 2,2 exalt một cái nên cả lượt forge chỉ ~0,26 div. Base đổi thành Runemastered Runic Fork và ăn một trong ba dòng implicit: (30—50)% chance for Spell Skills to fire 2 additional Projectiles, (30—50)% increased Mana Regeneration Rate, hoặc +300 to maximum Runic Ward.

Điểm quyết định là cả ba dòng đều không làm cây tệ đi. Cây trắng sạch sàn 1.190 div; forge ra runic ward sàn 1.200, ra mana regen sàn 1.259, ra projectile sàn 1.275. Dòng projectile mới là chỗ ăn: roll 50% đang nằm 1.666-1.980 div, vài cây list thẳng 1 mirror. Bỏ 0,26 div để bốc một vé mà đáy vé vẫn cao hơn giá cây trắng thì không có lý do gì không bốc.

**Vaal thì ngược lại, là canh bạc thật.** Toàn bộ 111 cây sạch trên market đều đúng 5 socket, không cây nào 6 — socket thứ sáu chỉ ra từ :wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Orb"}, và với 200% rune effect thì socket thứ sáu là thêm nguyên một rune nhân ba. Mấy cây 6 socket đang list từ 19.800 div lên tới 14 mirror, mà mirror ~6.091 div. Trượt thì cây rơi thẳng xuống đáy corrupted ~449 div, tức mất khoảng 750 div so với bán sạch.

Trên market, 239 trong 853 listing corrupted có 6 socket, nhưng con số đó là tỷ lệ **listing** chứ không phải tỷ lệ Vaal ra socket: cây trúng thì người ta giữ và hét giá, cây trượt thì dump ngay, nên mẫu lệch mà chưa đo được lệch bao nhiêu. Chưa có bảng outcome thật thì đừng quy nó thành odds — muốn biết thật thì phải đếm kết quả Vaal của chính mình. Cần tiền chắc thì Runeforge rồi bán 1.190-1.300 div. Muốn đánh bạc thì lấy 449 div làm mức phải sống được với nó, đừng lấy 14 mirror làm mốc kỳ vọng.

Còn một nước thứ ba tồn tại nhưng không phải nước hay: gộp một Aldur's Legacy với cây wand để đúc ra rune Legacy of Runeseeker's Call (`Wands: 75% increased effect of Socketed Runes`). Aldur's Legacy một mình đã 327 div, cộng cây 1.190 div thành hơn 1.500 div đầu vào cho một rune không có dữ liệu giá trên poe2scout. Bán cây rồi thôi.

## Failure Modes

- **Đổ điểm vào % increased Energy Shield.** Dòng phổ biến nhất trên gear ES lại là dòng chết dưới Eldritch Battery. Mua nhẫn theo tổng ES hiển thị mà không tách flat với phần trăm là trả tiền cho số không convert. Đo bằng flat ES, flat mana, Int.
- **Cày cho đủ 10.000 raw.** Từ ~6.700 lên 10.000 là đoạn đắt nhất của đường cong, trong khi chalice 1 exalt xoá đúng đoạn đó. Không đọc keyword Overflow là tự trả vài chục div tiền gear thừa.
- **Vaal cây trắng vì thấy market toàn cây corrupted.** 853 trên 964 listing là corrupted không có nghĩa corrupt là chuẩn — nó có nghĩa phần lớn người chơi đã đốt 750 div và cây trượt thì nằm lại trên market lâu hơn.
- **Tưởng làm được nhiều cây bằng một con.** Rune không stash và không trade được, quest xong trên character nào là hết trên character đó. Cây thứ hai nghĩa là một character mới cày Uhtred lại từ đầu ở endgame, không phải mượn rune.
- **Giá trượt theo thời gian.** Cây này đi từ 53 div (07/06) lên 411 div (18/06) rồi 1.190 div bây giờ, trong lúc divine tự nó phồng từ 85 lên 426 exalt. Quote lại giá trước khi quyết bán hay gamble, đừng xài số trong bài này sau vài tuần.

## Version History

### Patch 0.5.2 (12/06/2026)

- Fix bug Aldur's Legacy không socket được vào Runeseeker's Call.

### Patch 0.5.0 (29/05/2026)

- Runes of Aldur thêm Farrow kèm bốn quest campaign mở Verisium Runeforging, Alloy, Ancient Rune.
- Runeseeker's Call, Depleted Mana Rune, Uhtred's Chalice vào game. Uhtred nhập nhóm bốn Faction Leader đánh trên đảo Ocean.
- Unique Verisium Runeforging có thêm property riêng khi dùng lên Kalguuran Unique.

## Relationships

- **part_of** [Return of the Ancients](/guides/return-of-the-ancients) — league mở ra Farrow, Verisium và cả chuỗi quest này.
- **requires** [Ocean Exploring Grand Expedition Farm](/guides/0-5-ocean-exploring) — nền logbook và đảo để farm Uhtred.
- **related** [Olroth Saga Lineage Support Farming](/farming/0-5-olroth-saga-lineage-farm) — cùng cơ chế saga ép spawn Faction Leader, khác boss và khác pool loot.
- **related** [Ba pool tài nguyên: Life, Energy Shield và Mana](/guides/beginner-life-es-mana) — nền pool để hiểu Eldritch Battery đổi ES sang mana.
