---
template: templates/guide-template.md
document_type: guide
title: "Gold: kiếm, tiêu và quản lý tài nguyên respec"
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
  - gold
  - respec
  - vendor
  - currency
---

# Gold: kiếm, tiêu và quản lý tài nguyên respec

:wiki-link{url="https://www.poe2wiki.net/wiki/Gold"} là tài nguyên nền tảng của POE2 — dùng để respec passive tree, mua item từ vendor NPC, đặt lệnh trên Currency Exchange, và thử vận ở Gambler. Không giống phần lớn currency khác, gold không chiếm inventory, không trade được với player, và dùng chung giữa mọi character trong cùng league. Hiểu cách gold hoạt động từ sớm tránh được tình trạng kẹt respec giữa endgame mà không biết tại sao tốn nhiều thế.

## Gold tự vào túi khi đi, không cần click

Gold rơi trên sàn nhưng thu tự động khi character di chuyển hoặc dùng movement skill trong tầm với — không cần dừng lại click từng đồng. Trong thực tế điều này có nghĩa là chỉ cần clear bình thường thì gold theo về, không bị bỏ lại trên sàn như item thường.

Gold cũng không chiếm ô nào trong inventory. Số dư hiển thị ở màn Inventory phía dưới các ô item. Không cần lo "đủ chỗ để nhặt gold" — nó tích lũy không giới hạn mà không ảnh hưởng gì đến inventory space.

## Gold dùng chung giữa mọi character trong league

Gold là account-bound và shared giữa tất cả character trong cùng league. Tạo thêm character mới, gold vẫn nguyên — không bị reset theo character mới hay mất khi character cũ không chơi nữa. Character cũ kiếm được bao nhiêu, character mới mở lên có đúng bấy nhiêu.

Chiều ngược lại cũng đúng: gold không thể trade hay chuyển cho player khác theo bất kỳ cách nào. Không drop ra sàn, không bỏ vào stash rồi cho bạn bè lấy. Đây là tài nguyên hoàn toàn cá nhân theo account trong league đó.

## Respec passive tree tốn gold theo độ sâu của node

Mỗi node trong :wiki-link{url="https://www.poe2wiki.net/wiki/Passive_Skill_Tree"} có thể thu hồi qua :wiki-link{url="https://www.poe2wiki.net/wiki/Respec"}, nhưng không free. Gold cost mỗi lần thu hồi tăng dần theo level của character — không phải theo loại node hay vị trí trên tree. Level 1 tốn 15g mỗi node, level 50 tốn khoảng 1.089g, level 100 tốn hơn 10.000g. Tất cả node ở cùng level character đều có giá bằng nhau, dù là attribute node hay keystone.

**Attribute travel node** — loại node chỉ cộng stat +30 Strength, Dexterity, hoặc Intelligence để đủ attribute requirement đi tiếp vào tree — có cơ chế riêng. Thay vì thu hồi và lấy lại điểm, bạn có thể đổi attribute của nó (ví dụ từ Strength sang Dexterity) với giá bằng nửa so với respec hoàn toàn. Dùng cơ chế này khi build cần attribute khác mà không muốn respec cả đường đi lên cluster phía trên.

Hệ quả thực tế là respec sai build lúc mới chơi gần như miễn phí. Respec 20-30 node ở endgame sau khi đã đi sâu vào keystone và cluster — con số gold có thể đáng kể. Plan tree kỹ trước khi commit, xem guide [Passive skill tree: cách đọc và phân bổ điểm](/guides/beginner-passive-tree) để hiểu cách phân bổ điểm hiệu quả từ sớm.

## Vendor NPC và Gambler đều nhận gold

Mỗi town trong campaign có ít nhất một :wiki-link{url="https://www.poe2wiki.net/wiki/Vendor"} và một :wiki-link{url="https://www.poe2wiki.net/wiki/Gambler"}. Cả hai đều bán item đổi lấy gold, không phải currency khác.

Vendor bán base item với stat cố định và stock refresh một phần mỗi khi character lên level. Đây là cách đáng tin cậy để tìm base item tốt khi gear rớt từ monster chưa đủ. Nếu cần một base cụ thể để craft hoặc lên stat, vendor đáng check trước khi bỏ tiền mua trên trade.

Gambler khác hoàn toàn: bỏ gold nhận item ngẫu nhiên, rarity và stats đều không cố định. Đây là roll may rủi thuần túy, không có cách dự đoán kết quả. Gold tích lũy nhanh và rẻ hơn currency crafting, nên Gambler là nơi "thử vận" hợp lý khi dư gold và đang muốn tìm item mới cho một slot.

## Currency Exchange dùng gold làm phí giao dịch

:wiki-link{url="https://www.poe2wiki.net/wiki/Currency_Exchange"} — nơi đặt lệnh đổi currency tự động trong POE2 — có một khoản phí nhỏ tính bằng gold mỗi lần đặt và hoàn thành lệnh. Phí này không lớn nhưng cần biết để không bất ngờ khi lần đầu dùng Exchange. Chi tiết hơn về cách Exchange và trade hoạt động xem ở guide [giao dịch và trade](/guides/beginner-trading).

## Cách tích đủ gold khi cần respec lớn

Gold rơi từ monster, chest, và đặc biệt từ item drop convert. Một phần lớn item rơi trong game — đặc biệt Normal item (trắng) — không thực sự xuất hiện là item vật lý mà được chuyển thành gold drop thay thế. Tỉ lệ convert này **nghịch với rarity**: Normal item chuyển thành gold nhiều nhất, Magic và Rare ít hơn, Unique gần như không bao giờ bị convert. Unique monster cũng có giới hạn cứng — không quá 50% drop của chúng có thể là gold.

Trong thực tế điều này có nghĩa là bạn tích gold liên tục khi clear map mà không cần làm gì đặc biệt. Khi cần respec lớn và gold không đủ, cách nhanh nhất là clear thêm content bình thường — map có nhiều monster pack dày, area nhiều chest, hoặc content có item density cao. Gold theo về tự nhiên cùng với loot mà không cần farm theo cách đặc biệt nào.

## Relationships

- **related_guides** [Passive skill tree: cách đọc và phân bổ điểm](/guides/beginner-passive-tree) — respec dùng gold để thu hồi passive node; plan tree kỹ từ sớm tránh tốn gold không cần thiết
- **related_guides** [Giao dịch và trading](/guides/beginner-trading) — Currency Exchange nhận gold làm phí đặt lệnh; hai hệ thống dùng gold song song
