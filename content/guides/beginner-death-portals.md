---
template: templates/guide-template.md
document_type: guide
title: "Chết trong POE2: XP penalty, portal rules và Hardcore"
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
  - death
  - portal
  - hardcore
---

# Chết trong POE2: XP penalty, portal rules và Hardcore

Chết trong campaign thì không sao. Chết trong endgame thì mất XP. Chết trong Hardcore thì character đi luôn sang Softcore. Ba trường hợp này có cơ chế hoàn toàn khác nhau, và người mới thường không phân biệt được cho đến khi lỡ mất một mớ XP hoặc ngơ ngác không hiểu tại sao map 6-mod chỉ cho phép chết một lần.

## Chết trong campaign không có penalty

Trong Softcore campaign, chết không mất gì cả. Character respawn tại checkpoint gần nhất hoặc waypoint đã kích hoạt trong khu vực đó — hoặc về town nếu muốn. Area bị reset, quái hồi sinh lại, và item đang nằm dưới sàn biến mất, trừ các drop guaranteed từ boss (thường là :wiki-link{url="https://www.poe2wiki.net/wiki/Uncut_gem"}).

Không có XP penalty. Không mất item trong inventory. Cái duy nhất mất là thời gian dọn lại khu vực.

Khi chơi party trong campaign, đồng đội còn sống có thể revive người chết bằng cách đứng gần và channel khoảng 2.5 giây — thời gian tăng thêm 1.5 giây cho mỗi lần chết tiếp theo của cùng người đó trong cùng instance.

## XP penalty bắt đầu từ endgame

Vào endgame — khi area level từ 65 trở lên, tức từ map T1 đầu tiên — mỗi lần chết sẽ mất **10% của thanh XP đang có** so với level tiếp theo. Không thể bị tụt level: nếu XP còn ít hơn 10% thì thanh chỉ về 0%, không trừ sang level cũ.

Ở level thấp XP mất không nhiều vì thanh ngắn. Nhưng level 90+ thì mỗi death là một khoản đau thật sự — lượng XP cần để lên level đó rất lớn, mất 10% nghĩa là có khi mất vài tiếng farm lại từ đầu.

:wiki-link{url="https://www.poe2wiki.net/wiki/Omen_of_Amelioration"} là consumable mà khi để active trong inventory sẽ cắt XP penalty còn 2.5% thay vì 10% cho lần chết tiếp theo — dùng một lần rồi hết. Nên để dành omen này cho những boss khó ở level cao khi sợ chết, không cần dùng cho farm quái thường.

## Portal là cơ chế re-entry, không phải one-shot

Nhiều người mới nghĩ portal tiêu khi exit map — thực ra không phải. Portal chỉ bị consume khi **chết trong map**. Thoát map tự nguyện để deposit loot, đổi gear, hay bỏ dở giữa chừng đều không mất portal nào.

Mỗi portal đại diện cho một lượt respawn. Hết portal thì không vào lại khu vực đó được nữa, map coi như thất bại. :wiki-link{url="https://www.poe2wiki.net/wiki/Waystone"} mới dùng lại được map đó trên Atlas, nhưng mọi modifier đã đặt từ trước — từ :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"} hay encounter icon — đều bị xóa sạch.

Một điểm cần biết khi chơi party: chỉ map owner mới có thể respawn toàn bộ party cùng lúc khi đánh boss, và respawn như vậy sẽ reset boss về full life. Mỗi người chơi có số portal riêng, hiển thị dưới icon nhân vật trên UI party.

Nếu rush thẳng vào map boss, chết, rồi respawn — game sẽ xóa toàn bộ quái thường và content còn lại trong map, chỉ giữ lại boss. Cơ chế này ngăn việc cố tình chết để farm loot nhiều lần từ cùng một area.

## Số portal giảm khi thêm modifier lên waystone

Portal mặc định là **6** khi waystone không có modifier. Thêm modifier vào thì portal giảm dần:

- 0 mod: 6 portal — 5 lần chết được phép
- 1–2 mod: 5 portal — 4 lần chết
- 3–4 mod: 4 portal — 3 lần chết
- 5 mod: 3 portal — 2 lần chết
- 6 mod: 2 portal — 1 lần chết

Số portal và số lần chết lệch nhau 1 vì một portal được dùng để vào map lần đầu. Với waystone 6 mod, bạn có 2 portal nhưng chỉ được chết đúng 1 lần — chết lần hai thì không có portal để vào lại.

Đây là lý do map 6-mod nguy hiểm không cân xứng với số modifier: không chỉ quái mạnh và rủi ro hơn, mà còn không có safety net. Một lần chết là mất cả map với tất cả modifier và encounter đã đặt.

## Pinnacle boss không mất XP

Chết trong :wiki-link{url="https://www.poe2wiki.net/wiki/Pinnacle_boss"} content không mất XP — đây là ngoại lệ duy nhất trong endgame. Portal vẫn bị tiêu như bình thường, nhưng 10% penalty không áp dụng ở đây. Có thể thoải mái thử boss nhiều lần mà không lo mất tiến trình level.

Số portal khi đánh pinnacle boss phụ thuộc vào Difficulty của boss đó, không phải modifier trên waystone.

## Hardcore: character chuyển sang Softcore khi chết

Trong :wiki-link{url="https://www.poe2wiki.net/wiki/Hardcore"}, chết là mất character khỏi league HC — nhưng character không biến mất hoàn toàn. Character và toàn bộ item trong inventory bị chuyển tự động sang **Softcore equivalent** của cùng league đó. Nếu đang chơi Hardcore Runes of Aldur thì character đi thẳng sang Softcore Runes of Aldur. Không thể đảo ngược, không thể đưa lại HC.

Item trong stash vẫn ở HC league — nếu tạo character HC mới trong cùng league, stash cũ vẫn ở đó. Chỉ character và inventory mới bị chuyển.

Một số event league có quy tắc khác: chết trong HC event đôi khi chuyển sang Void League thay vì Softcore, tức là character đó không còn chơi được nữa, chỉ có thể xem hoặc xóa. Đọc kỹ điều kiện của từng event trước khi tham gia.

## Relationships

- **related** [Waystone và Atlas: bước vào endgame mapping](/guides/beginner-waystone-atlas) — cơ chế modifier trên waystone và cách chạy map endgame hiệu quả.
- **related** [Defence layers trong POE2](/guides/beginner-defence-layers) — không chết = không mất XP; defense setup trực tiếp ảnh hưởng tần suất bị penalty.
- **related** [Life, ES và Mana trong POE2](/guides/beginner-life-es-mana) — health pool nào bảo vệ character khỏi cái chết.
