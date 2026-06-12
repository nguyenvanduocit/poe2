---
template: templates/guide-template.md
document_type: guide
title: "Waystone và Atlas: bước vào endgame mapping"
status: published
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
  - waystone
  - atlas
  - endgame
  - mapping
  - sustain
---

# Waystone và Atlas: bước vào endgame mapping

Khi xong campaign, game mở ra endgame — và phần lớn thời gian từ đó trở đi là chạy map. Map trong POE2 hoạt động qua **Waystone**: một item bỏ vào Map Device để mở cổng vào một khu vực endgame. Hiểu Waystone và Atlas passive tree là nền tảng để không bị "hết map" sau vài tiếng đầu.

## Waystone là gì và dùng như thế nào

Waystone là item tiêu hao dùng một lần. Bỏ nó vào **Map Device** (cái bàn thờ có vòng tròn phát sáng ở trung tâm mỗi town trong Atlas), nhấn activate, rồi bước vào map. Waystone hết là cổng đóng — nếu chết và không vào lại kịp thì map đó mất.

Waystone có tier từ 1 đến 16. Tier càng cao thì area level càng cao, quái càng mạnh, và loot càng tốt. Tier 1 bắt đầu ở area level 65, mỗi tier tăng thêm 1 level — T16 là area level 80. Waystone T16 đặc biệt: không rớt trực tiếp từ monster. Cách đáng tin nhất là ghép 3 T15 cùng rarity tại **Reforging Bench** để ra T16 chắc chắn. Dùng **Vaal Orb** (corruption) lên T15 cũng cho T16 nhưng kết quả ngẫu nhiên — tier có thể lên hoặc xuống 1, không đảm bảo.

Waystone không mua được ở vendor với giá cố định — nó rớt từ monster trong map, từ boss, hoặc trade được từ người chơi khác. Đây là lý do sustain map là kỹ năng phải học: nếu Waystone rớt ít hơn lượng dùng thì kho cạn dần.

Trước khi dùng Waystone, cần **identify** nó bằng **Orb of Identification**. Waystone chưa identify không activate được trong Map Device.

## Mod trên Waystone làm gì

Waystone sau khi identify sẽ có các modifier — giống item thường, có magic (2 mod) và rare (4 mod). Mod trên Waystone có hai loại tác dụng: mod buff cho loot (increased item rarity, pack size, waystone drop chance) và mod khó chơi (monster deal extra damage, reduced player max resistance, increased monster life).

Càng nhiều mod thì map càng lãi hơn nhưng cũng khó hơn. Ở giai đoạn đầu endgame, transmute + augment Waystone lên 2 mod là đủ để chạy ổn. Vào red tier (T11+) thì :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Alchemy"} lên rare 4 mod là chuẩn. Một số mod nguy hiểm (như "-% maximum resistance") cần đọc kỹ trước khi activate — map với mod đó có thể kill build chưa cap resist.

Waystone drop chance từ map tăng theo số mod: map 6 mod gần như chắc chắn nhả thêm Waystone, đặc biệt từ boss.

## Atlas là gì

Atlas là bản đồ thế giới endgame — một lưới các map kết nối với nhau, mỗi ô là một loại địa hình khác nhau. Từ Atlas, chọn một ô rồi dùng Waystone tương ứng để vào.

Quan trọng hơn là **Atlas passive tree** — một cây kỹ năng hoàn toàn tách biệt với passive tree của nhân vật. Nó không dùng điểm của nhân vật, không ảnh hưởng combat stat — nó chỉ buff cho map: thêm rare monster, tăng drop chance, bật content (Breach, Ritual, Delirium...), và tăng Waystone rớt nhiều hơn.

Điểm cho Atlas passive tree chỉ ra từ một nguồn duy nhất trong 0.5: chạy map trong khu **Fortress**. Mỗi map trong Fortress rớt 1 hoặc nhiều point; sau khi cày đủ Fortress thì có đủ point để allocate toàn bộ cây hơn 300 node. Không có respec — một khi lấy node thì không hoàn điểm lại được, nhưng multi-choice node (node có nhiều lựa chọn) đổi qua lại tự do.

## Tại sao người mới hay bị hết map

Vài giờ đầu vào endgame là lúc dễ kẹt nhất vì cái vòng tròn chưa tự nuôi được: chưa có Atlas point nên tree còn trống, tree trống thì Waystone drop ít, Waystone ít thì không chạy được nhiều map, ít map thì lấy point chậm. Phá vòng này cần hiểu hai thứ.

Đầu tiên là **số mod của Waystone**. Waystone trơn (0 mod, chưa roll) drop rate rất thấp. Đẩy lên magic rồi rare là bước đầu tiên để Waystone rớt đủ nuôi vòng. Đây là lý do không nên chạy Waystone trơn dù build còn yếu — thà chạy map dễ hơn với Waystone nhiều mod còn hơn map khó với Waystone trơn.

Thứ hai là **Precursor Tablet**. Tablet là item gắn vào tháp trên Atlas trước khi chạy map — nó buff tất cả map trong bán kính tháp đó. Tablet có mod "increased quantity of Waystones" là một trong những nguồn sustain mạnh nhất đầu game, cộng thẳng lên drop chance từ số mod. Hai tablet quantity trên cùng một khu là bước nhảy lớn từ "không đủ map" sang "dư map".

Chi tiết về cách setup Atlas tree và tối ưu sustain xem ở [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain).

## Bước đầu khi mới vào endgame

Vào map đầu tiên thì một **Precursor Tower** hiện ngay. Clear tower đó thì **Fortress** mọc lên — đây là khu cần chạy để lấy Atlas point. Cứ chạy map trong Fortress và nhặt point trên đường; đừng cố cày sạch từng map, mà đi theo mũi tên hướng dẫn tới boss khu vực.

Trong lúc đó, dùng Waystone nhiều mod nhất có thể và gắn tablet vào tháp trước khi activate map. Hai thói quen này — roll Waystone và dùng tablet — là sự khác biệt giữa sustain được và không sustain được trong tuần đầu.

## Relationships

- **related_guides** [Mở khóa toàn bộ atlas endgame](/guides/0-5-atlas-unlock-walkthrough) — guide chi tiết về chuỗi Origins of Divinity, Arbiter of Divinity 5-kill path, và cách mở Ba Master của Atlas.
- **related_guides** [Sustain map và setup atlas tree endgame](/guides/0-5-endgame-mapping-sustain) — deep-dive về thứ tự lấy node atlas, combo tablet, và setup fracturing orb.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — mô tả toàn bộ endgame overhaul 0.5 ở mức hệ thống.
