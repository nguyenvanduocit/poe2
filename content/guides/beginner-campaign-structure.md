---
template: templates/guide-template.md
document_type: guide
title: "Cấu trúc campaign: Acts, Interludes, Checkpoint và Waypoint"
status: draft
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - beginner
  - campaign
  - checkpoint
  - waypoint
  - resistance
---

# Cấu trúc campaign: Acts, Interludes, Checkpoint và Waypoint

Campaign POE2 không phải một chuỗi act đồng đều mà chia ra làm hai loại nội dung riêng: Act chính kể story, và Interlude lấp khoảng trống dẫn vào Endgame. Nắm rõ cấu trúc này giúp bạn không bị bất ngờ khi resistance đột ngột rớt, hay không biết tại sao character cứ respawn nhầm chỗ sau khi chết.

## Campaign hiện tại gồm Act 1–4, ba Interlude, và Epilogue

:wiki-link{url="https://www.poe2wiki.net/wiki/Act_1"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Act_2"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Act_3"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Act_4"} là bốn act story hiện có — mỗi act có town riêng, NPC riêng, và một act boss ở cuối. Act 5 và Act 6 vẫn chưa ra trong 0.5; hai slot đó hiện đang TBA.

Sau Act 4, campaign tiếp theo bằng ba :wiki-link{url="https://www.poe2wiki.net/wiki/Interlude"} thay vì nhảy thẳng vào Endgame. Interlude là act tạm thời được đặt vào để lấp khoảng trống giữa Act 4 và Endgame trong giai đoạn Early Access — chúng sẽ bị gỡ khi full campaign ra. Ba Interlude hiện tại là *The Curse of Holten*, *The Stolen Barya*, và *Doryani's Contingency*. Xong cả ba thì vào :wiki-link{url="https://www.poe2wiki.net/wiki/Epilogue"}, đây là điểm khởi đầu của Endgame.

Tổng cộng hành trình từ character mới đến Endgame đi qua bảy mốc: Act 1 → Act 2 → Act 3 → Act 4 → Interlude 1 → Interlude 2 → Interlude 3 → Epilogue.

## Mỗi act mới cắt -10% resistance, tổng cộng -60% đến Epilogue

Đây là cơ chế người mới thường bị bất ngờ nhất. Mỗi act tiếp theo (bắt đầu từ Act 2 trở đi) áp lên character một penalty -10% cho tất cả elemental resistance — fire, cold, và lightning cùng lúc. Penalty này permanent trong suốt campaign, không mất đi khi bạn về town hay level lên.

Đến khi vào Epilogue, tổng penalty tích lũy là -60% all elemental res. Nếu bạn vào Endgame mà không có gear bù resistance thì resistance của character thực tế đang âm hoặc rất thấp — mọi hit elemental đều đau gấp đôi so với số trên lý thuyết.

Lý do cơ chế này tồn tại là để game ép người chơi liên tục cải thiện gear theo từng mốc, thay vì gom resistance một lần rồi xong. Thực tế khi chơi: sau mỗi act, mở Character Panel kiểm tra lại resistance — nếu thấy một trong ba đang dưới 75% thì nên tìm gear có resistance bù trước khi đi tiếp, không phải sau khi chết ba lần ở boss tiếp theo.

Ngoài resistance, act boss còn rớt skull item cho Spirit. Boss Act 1 rớt skull +30 Spirit, boss Act 3 rớt skull +30 Spirit, và Interlude 3 có skull +40 Spirit. Nhặt đủ ba cái này thì có 100 Spirit cơ sở từ campaign — xem thêm ở [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit).

## Checkpoint: điểm phục hồi và teleport trong area

:wiki-link{url="https://www.poe2wiki.net/wiki/Checkpoint"} là những điểm sáng nhỏ rải trong area, xuất hiện dày đặc nhất trước boss arena và ở các điểm quan trọng, cùng các entrance/exit giữa các khu vực trong cùng area. Bước đến gần Checkpoint thì nó kích hoạt tự động — không cần click — và lập tức refill full :wiki-link{url="https://www.poe2wiki.net/wiki/Flask"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Charm"} của bạn, kể cả Life và Mana.

Điểm mạnh ít ai chú ý: khi đã kích hoạt nhiều Checkpoint trong cùng một area, bạn có thể click vào bất kỳ Checkpoint nào đã mở để teleport tức thì đến Checkpoint khác trong area đó. Không cần chạy bộ ngược lại để lên máu trước boss, chỉ cần click Checkpoint gần nhất rồi teleport sang Checkpoint trước cửa boss. Từ Checkpoint cũng có thể teleport về Waypoint trong area.

Tính năng teleport giữa Checkpoint chỉ hoạt động trong cùng một area — không cross area.

## Waypoint: di chuyển nhanh giữa các area

:wiki-link{url="https://www.poe2wiki.net/wiki/Waypoint"} có công dụng khác Checkpoint: nó cho phép di chuyển qua lại giữa các area và town khác nhau đã unlock, không giới hạn trong một area. Waypoint xuất hiện ở hầu hết area trong campaign. Bước đến gần thì nó sáng xanh và unlock vĩnh viễn — cũng không cần click để unlock.

Sau khi unlock, nhấn phím `U` (hoặc click vào Waypoint) để mở World Interface — một bản đồ tổng quan hiện tất cả Waypoint đã unlock, :wiki-link{url="https://www.poe2wiki.net/wiki/Town"} các act, và một số điểm đặc biệt như Hideout hay Ascension Trial. Click vào icon bất kỳ thì teleport ngay đến đó.

Waypoint cũng refill Life, Mana, Flask, và Charm khi bạn đến gần — giống Checkpoint về mặt này. Điểm khác là Waypoint là cổng di chuyển cross-area, còn Checkpoint là cứu điểm và travel nội bộ.

Trong Endgame (Atlas), có thể click Town trực tiếp trên bản đồ Atlas để về town cuối mà không cần tìm Waypoint trong area.

## Khi chết trong softcore, chọn respawn ở đâu

Chết trong softcore campaign không mất character và không mất experience — không có penalty nào cả. Điều duy nhất xảy ra là area reset: hầu hết monster respawn lại, và item rơi trên sàn (trừ drop đảm bảo từ boss như uncut gem) biến mất. Sau khi chết, game cho bạn hai lựa chọn: respawn ở town của act hiện tại, hoặc ở Checkpoint cuối cùng đã kích hoạt.

Waypoint trong area cũng hoạt động như Checkpoint cho mục đích respawn — nếu Waypoint là điểm cuối cùng bạn đi qua trước khi chết thì nó cũng là lựa chọn respawn.

Trên thực tế: trước khi đánh boss, luôn kích hoạt Checkpoint ngay trước cửa boss arena. Chết xong chọn respawn ở đó thay vì town, không mất công chạy lại từ đầu area — đây là điểm khác biệt lớn nhất so với nhiều ARPG khác. Boss không reset khi bạn respawn ở Checkpoint gần đó; máu của boss vẫn giữ nguyên.

Hardcore thì khác hoàn toàn — chết là xóa character, không có respawn. Xem [Ascendancy và cách chơi Hardcore](/guides/beginner-ascendancy) nếu đang cân nhắc mode này.

## Relationships

- **related** [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit) — act boss rớt skull +Spirit theo campaign; xem chi tiết Spirit từ đâu và dùng vào gì.
- **related** [Resistances trong POE2](/guides/beginner-resistances) — cơ chế resistance cap 75%, cách bù -60% penalty từ campaign để vào Endgame đủ sống.
- **related** [Flask và Charm cơ bản](/guides/beginner-flask) — Checkpoint refill cả Flask lẫn Charm; hiểu cách Flask hoạt động để tận dụng Checkpoint hiệu quả.
- **related** [Waystone và Atlas cơ bản](/guides/beginner-waystone-atlas) — sau Epilogue, di chuyển trong Atlas có cơ chế riêng; Town click trên Atlas map là phần mở rộng của Waypoint system.
