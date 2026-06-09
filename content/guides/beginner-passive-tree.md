---
template: templates/guide-template.md
document_type: guide
title: "Passive skill tree: cách đọc và phân bổ điểm"
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
  - passive-tree
  - build-basics
---

# Passive skill tree: cách đọc và phân bổ điểm

:wiki-link{url="https://www.poe2wiki.net/wiki/Passive_Skill_Tree"} là mạng lưới hàng nghìn node trải dài toàn màn hình — người mới nhìn vào lần đầu thường bị overwhelmed và bắt đầu bấm bừa những node trông "có vẻ hay". Biết cách đọc tree trước khi bấm điểm là thứ khiến mỗi điểm bỏ ra đều đáng.

## Bốn loại node phải phân biệt trước khi allocate

Tree có bốn loại node. **Small passive** cung cấp stat nhỏ — 5% increased damage hay +10 life — và nằm khắp nơi như đường nối giữa các node lớn hơn. Mỗi node tốn một điểm trong khi stat trả về rất thấp, nên đừng lấy small passive chỉ vì thấy "được gì đó".

**Notable passive** mới là điểm đến thực sự trong một cluster: node này to hơn rõ rệt, stat lớn hơn, thường là lý do bạn đi vào khu đó ngay từ đầu. Mọi cluster đều có một hoặc vài notable ở trung tâm, bao quanh bởi small passive dẫn đường vào.

**Keystone passive** là loại đặc biệt nhất — hình thoi trên tree, thay đổi cơ chế chơi hoàn toàn. **Eldritch Battery** cho phép tiêu energy shield thay mana để trả skill cost; **Chaos Inoculation** đặt life xuống 1 nhưng đổi lại miễn nhiễm hoàn toàn chaos damage. :wiki-link{url="https://www.poe2wiki.net/wiki/Keystone"} luôn có hai chiều: lợi ích và đánh đổi. Đọc kỹ cả hai trước khi lấy, vì có những keystone triệt tiêu toàn bộ layer phòng thủ nếu build không được thiết kế cho nó.

Cuối cùng là **jewel socket** — ô tròn trên tree cho phép gắn :wiki-link{url="https://www.poe2wiki.net/wiki/Jewel"} với stat đặc biệt không xuất hiện trực tiếp trên tree thường. Jewel tháo ra tự do, nên đây là điểm linh hoạt nhất trên cây.

## Class xuất phát ở đâu thì quan trọng

Tree chia ba vùng chính theo attribute. Phía tây-nam tập trung Strength: fire damage, armour, melee, endurance charge, warcry, block. Phía đông-nam là Dexterity: lightning damage, evasion, ranged, frenzy charge, deflection, accuracy, flask. Phía bắc là Intelligence: cold và chaos damage, energy shield, spell, minion, mana, curse.

Mỗi class xuất phát tại một điểm trên vòng tròn trung tâm của tree, gần vùng attribute chính của class đó. Warrior xuất phát ở vùng Strength phía tây-nam; Witch xuất phát ở vùng Intelligence phía bắc; Huntress ở vùng Dexterity. Nghĩa là node có ích nhất cho playstyle tương ứng cũng nằm gần vị trí xuất phát nhất.

Nếu chơi build evasion-based thì Huntress hay Ranger xuất phát gần đúng cluster. Nếu chọn class Strength nhưng lại đi lấy energy shield ở vùng Intelligence xa phía bắc, bạn sẽ tốn thêm 5-10 điểm chỉ để "đi đường" qua small passive không liên quan — tiết kiệm được số điểm này bằng cách chọn class phù hợp ngay từ đầu.

## Đường đi quan trọng hơn điểm đến

Điều người mới hay quên: bạn không thể nhảy thẳng đến một notable hay keystone ở xa mà phải đi qua từng node một. Mỗi small passive trên đường đi tốn một điểm. Nếu một notable cần đi qua sáu small passive để đến, bạn thực sự chi bảy điểm cho nó, không phải một.

Vì vậy, khi so sánh hai cluster, không chỉ so stat của notable — so luôn cả số small passive phải đi qua để đến. Cluster gần hơn hoặc nằm trên đường đến cluster khác thường hiệu quả hơn cluster xa với stat cao hơn một chút.

Mỗi level nhận được một passive point. Quest trong campaign reward thêm điểm — tổng cộng có thể kiếm đến 124 điểm ở max level, nhưng thực tế khi đang leveling bạn làm việc với 60-80 điểm. Mỗi điểm đều đắt.

## Plan trước trong Path of Building tránh respec tốn kém

**Path of Building** (PoB) là tool offline cho phép simulate build trước khi commit điểm thật trong game. Import passive tree của bất kỳ character nào từ pobb.in, mở tab Passive Tree, và allocate thử. PoB tính tổng stat, DPS dự kiến, và defensive layer cho bạn ngay khi thay đổi node.

Cách dùng đơn giản nhất khi mới bắt đầu: tìm một build guide công bố sẵn, import PoB code của nó, rồi nhìn vào tree để hiểu creator đi đường nào và tại sao. Không cần follow y hệt — quan trọng là hiểu logic phân bổ điểm của build đó.

Respec (đổi node đã lấy) tốn gold, không free. Plan sớm thì ít phải respec sau.

## Relationships

- **related_guides** [Layered defence cho người mới](/guides/beginner-defence-layers) — các node armour, evasion, energy shield trên tree áp dụng trực tiếp cơ chế defence layers
- **related_guides** [Resistance cho người mới](/guides/beginner-resistances) — resistance nodes là một trong những ưu tiên tree đầu tiên khi vào endgame
- **related_guides** [Spirit cho người mới](/guides/beginner-spirit) — spirit node trên tree liên kết với hệ thống skill reservation
