---
template: templates/mechanic-template.md
document_type: mechanic
title: From Nothing
status: published
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
sub_class: items
tags:
  - item
  - unique
  - jewel
  - keystone
  - passive
  - poe2
  - mechanic
---

# From Nothing

From Nothing là unique jewel trên base :wiki-link{url="https://www.poe2wiki.net/wiki/Diamond"} Diamond, Corrupted, Limited to 1. Nó không cộng stat trực tiếp — thay vào đó mở khoá các passive nằm quanh một :wiki-link{url="https://www.poe2wiki.net/wiki/Keystone"} Keystone để allocate mà không cần nối vào phần tree đang đi. Keystone đó không cố định: mỗi copy roll ra một keystone riêng từ một pool lớn, và vì item Corrupted nên roll đó khoá luôn, không sửa được. Đây chính là phiên bản POE2 của :wiki-link{url="https://www.poewiki.net/wiki/Impossible_Escape"} Impossible Escape bên POE1. Jewel drop-restricted và Corrupted nhưng socket rộng rãi ở endgame, và lý do nằm hết ở chuyện tiết kiệm điểm passive.

## Chỉ số và base type

```
From Nothing
Diamond
Limited to: 1
Radius: Small (1000)
Corrupted
--------
Passives in Radius of [Keystone] can be Allocated
without being connected to your tree

"They clawed their way up from the agonising depths of nonexistence,
breathing deep with joy the exquisite light of meaning."
```

`[Keystone]` là biến — mỗi From Nothing rơi ra mang một tên keystone cụ thể baked sẵn vào dòng mod. Một copy trên poe2db roll ra Giant's Blood ở roll sample; copy khác có thể là Chaos Inoculation, Avatar of Fire, hay bất kỳ keystone nào trong pool. Radius là Small (1000) — chỉ phủ cụm passive sát ngay keystone, không phải một vùng rộng.

## Cách From Nothing kéo một keystone xa về gần

Cơ chế chạy theo một chuỗi mà mỗi bước phụ thuộc bước trước. Đầu tiên, socket From Nothing vào một jewel socket đã allocate trên passive tree. Khi đó mọi passive nằm trong radius Small (1000) quanh chính keystone mà jewel roll ra trở thành allocate-được mà không cần nối vào phần tree bạn đang đi — chúng nổi tự do, bạn vẫn trả điểm cho từng node nhưng không phải path tới chúng.

Bản thân keystone không allocate được theo kiểu nổi tự do đó. Nhưng đây mới là chỗ then chốt: allocate một passive sát ngay keystone (passive này jewel đã cho phép lấy không cần nối), thì keystone giờ kề một node đã allocate. Lúc này keystone allocate được theo cách thường — nối vào node vừa lấy. Kết quả cuối: bạn cầm được keystone với đầy đủ hiệu ứng, kể cả mặt downside của nó, mà chỉ tốn điểm cho cụm passive nhỏ quanh nó cộng node keystone, thay vì trả cả con đường dài xuyên tree để pathing tới đó.

Lấy ví dụ companion build của mình. :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} Trusted Kinship nằm trong pool roll của From Nothing — đây đúng là keystone trục của Spirit Walker companion, cho phép field nhiều companion hơn. Một character ở góc tree xa Trusted Kinship, nếu kiếm được copy From Nothing roll ra đúng keystone này, có thể island-grab nó qua một jewel socket gần hơn thay vì pathing cả chục node tới góc keystone — số điểm tiết kiệm được đổ thẳng sang life, ES, hoặc damage node.

Cụm passive được mở khoá là cụm quanh chính keystone jewel roll ra, không phải quanh ô jewel. Khi vào client, ướm socket ở vài vị trí allocate khác nhau để xác nhận đường nối ngắn nhất từ tree hiện tại tới cụm keystone — radius Small nghĩa là chỉ vài node sát keystone được free, nên cần đảm bảo một trong số đó thật sự kề keystone.

## Vì sao tiết kiệm điểm là lý do chính để đeo nó

Passive tree POE2 0.5 rất rộng và keystone nằm rải ở các góc đặc trưng theo class. Một build muốn keystone ở phía đối diện điểm xuất phát — Witch thèm một keystone bên Str, hay bất kỳ class nào muốn :wiki-link{url="https://www.poe2wiki.net/wiki/Chaos_Inoculation"} Chaos Inoculation, :wiki-link{url="https://www.poe2wiki.net/wiki/Mind_Over_Matter"} Mind Over Matter hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Avatar_of_Fire"} Avatar of Fire ở xa — bình thường phải trả cả đoạn path chỉ để chạm tới. Chi phí đó tuỳ khoảng cách: có khi chỉ vài điểm, có khi hơn chục điểm nếu keystone ở rìa đối diện.

From Nothing biến chi phí đó thành: một điểm cho jewel socket (mà nhiều build vốn đã đi qua), cộng cụm nhỏ quanh keystone. Phần điểm dôi ra quay lại tree dưới dạng life, ES, resist, hoặc damage notable. Point-efficiency này đủ đáng để chiếm một slot jewel — đặc biệt khi keystone mục tiêu nằm xa và build đang đói điểm ở endgame.

## Canh bạc roll keystone

Vì From Nothing Corrupted và rơi với một keystone đã baked sẵn, bạn không chọn được keystone nếu tự farm. Pool roll lớn — 33 keystone, và 0.5 xác nhận trong pool có cả :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} Trusted Kinship, :wiki-link{url="https://www.poe2wiki.net/wiki/Resolute_Technique"} Resolute Technique, :wiki-link{url="https://www.poe2wiki.net/wiki/Eldritch_Battery"} Eldritch Battery cùng nhiều keystone phòng thủ/tiện ích khác. Tự drop nghĩa là xác suất trúng đúng keystone build cần thấp; cách thực tế là mua thẳng trên trade một copy đã roll ra keystone mình muốn, lọc theo đúng tên keystone trong search.

Một cái bẫy quan trọng: From Nothing chỉ tiết kiệm đường tới keystone, nó không gỡ bất kỳ downside nào của keystone đó. Nếu jewel roll Chaos Inoculation và bạn allocate, character khoá life ở 1 và mất toàn bộ pool life như bình thường. Nếu là Avatar of Fire, toàn bộ non-fire damage convert hoặc bị chặn. Nếu là Resolute Technique, crit tắt hẳn. Lấy keystone qua From Nothing giống hệt lấy nó bằng path thường về mặt hiệu ứng — chỉ khác ở số điểm bỏ ra.

Exclusion check: keystone's own exclusion clauses still apply (Chaos Inoculation khoá life = 1, Avatar of Fire chặn non-fire, Resolute Technique tắt crit, Eldritch Battery, Blood Magic…). From Nothing không bypass cái nào.

## Cách kiếm

From Nothing drop-restricted, không :wiki-link{url="https://www.poe2wiki.net/wiki/Orb_of_Chance"} Orb of Chance được. Nguồn duy nhất là :wiki-link{url="https://www.poe2wiki.net/wiki/The_King_in_the_Mists"} The King in the Mists ở Crux of Nothingness — boss của nội dung :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual"} Ritual. Vì là item Corrupted, copy nào đã roll ra keystone gì thì giữ nguyên — không có bước craft nào để đổi keystone, nên nếu cần keystone cụ thể thì mua đúng roll thay vì tự đập.

## Khi nào không đáng đeo

Keystone mục tiêu vốn đã nằm sát điểm xuất phát của build thì From Nothing gần như không tiết kiệm điểm nào — path thẳng vài node còn rẻ hơn việc bỏ một slot jewel cho nó. Radius Small (1000) cũng giới hạn: chỉ vài node sát keystone được mở khoá, nên nếu không có node free nào thật sự kề keystone thì chuỗi adjacency để lấy keystone không đóng lại được. Và vì Corrupted, một copy roll sai keystone là vĩnh viễn sai — không có đường sửa, chỉ có cách kiếm copy khác hoặc mua đúng roll.

## Tổng kết

Verdict: NEUTRAL — một công cụ point-economy thuần, không phải power spike. From Nothing đáng một slot jewel khi keystone build cần nằm xa trên tree và số điểm path tiết kiệm được (vài điểm tới hơn chục) đủ để bù chi phí một jewel socket. Nó không grant keystone miễn phí và không gỡ downside — chỉ rút ngắn đường tới đó. Phổ biến vì point-efficiency, không phải vì stat trực tiếp. Open question: pool keystone roll-able đổi theo từng patch, nên trước khi mua một roll cụ thể, kiểm lại keystone đó còn trong pool 0.5.1 không.

## Version History

### Patch 0.5.1

Item đang ở dạng hiện tại trong league Runes of Aldur: base Diamond, Radius Small (1000), roll một keystone từ pool, drop từ The King in the Mists. Pool keystone roll-able tiếp tục dịch chuyển qua các patch nên một copy cũ có thể mang keystone đã ra khỏi pool.

Radius conflict: wiki mirror (scrape 2026-05-18) ghi "Radius: 2000" dạng số, trong khi poe2db raw stat xác nhận internal value 1000 (tương đương size label Small) — format số trên wiki bất thường so với các unique jewel khác cùng page đều dùng size label. Doc giữ Small (1000) theo poe2db. Cần kiểm tooltip in-game để kết luận dứt điểm: nếu client hiện "2000", cập nhật doc.

### Patch 0.1.0

Item introduced.

## Relationships

- **related** [Unique Items Mới](/guides/0-5-new-unique-items) — From Nothing là corrupted jewel chỉnh passive tree, cùng họ "sửa tree" với Voices (thêm jewel socket) được tổng hợp ở đó; bản thân From Nothing có từ 0.1.0, không phải item mới của 0.5.
- **synergizes_with** [Spirit Walker — Companion Beast Hunt](/guides/spirit-walker-companion-beast-hunt) — Trusted Kinship nằm trong pool roll của From Nothing, nên companion build có thể island-grab keystone trục đó qua một jewel socket gần thay vì pathing tới góc tree.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — overview league 0.5 chứa nội dung Ritual, nơi The King in the Mists drop ra item này.
