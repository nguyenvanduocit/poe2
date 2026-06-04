---
template: templates/item-template.md
document_type: item
title: Sylvan's Effigy
status: draft
author: duocnv
created: '2026-05-25'
updated: '2026-05-25'
league: '0.5'
patch: 0.5.0
rarity: unique
item_class: Sceptre
level_requirement: 6
item_tags:
- sceptre
- unique
- companion
- spirit
- minion
- pre-launch
meta_tags:
- patch-preview
- build-enabling
- companion-multiplier
tags:
- item
- unique
- 0-5
- return-of-the-ancients
- spirit-walker
- companion
---

# Sylvan's Effigy

Sylvan's Effigy là sceptre unique trên base :wiki-link{url="https://www.poe2wiki.net/wiki/Stoic_Sceptre"} Stoic Sceptre, cho skill companion **Azmerian Wolf** và phá trần số lượng companion của game. Dòng định nghĩa item là "You can have any number of Companions of different types" — bình thường số companion bị giới hạn, item gỡ giới hạn đó cho các companion *khác loại*. Cộng "54% increased Spirit" để có ngân sách reservation nuôi nhiều companion, "Companions deal 85% increased damage to your Marked targets", và "Allies in your Presence Regenerate 64 Life per second", nó là lõi cho một build [Spirit Walker](/mechanics/spirit-walker-companion-beast-hunt) chạy cả bầy companion thay vì một con.

## Item Stats

```
Sylvan's Effigy
Stoic Sceptre
Spirit: 100
Requires: Level 6, 7 Str, 12 Int
--------
Grants Skill: Level 18 Azmerian Wolf
54% increased Spirit
Allies in your Presence Regenerate 64 Life per second
+9 to all Attributes
Companions deal 85% increased damage to your Marked targets
You can have any number of Companions of different types
```

Stat verbatim từ poe2db 0.5.0. Skill Azmerian Wolf yêu cầu Level 78, 42 Strength, 106 Intelligence để dùng — số này đọc lại trong client khi league live để chốt.

## Vì sao item này mạnh

Giá trị thật nằm ở "You can have any number of Companions of different types" chứ không phải dòng damage. Companion POE2 vốn bị giới hạn số lượng, nên build companion phải chọn một con và dồn hết vào nó. Item gỡ trần cho companion khác loại — tức player có thể chạy đồng thời nhiều companion loại khác nhau (mỗi loại một con), miễn đủ Spirit để reserve. "54% increased Spirit" trên cùng item là thứ nuôi điều đó: Spirit là resource reservation, 54% increased mở rộng thẳng ngân sách để field thêm companion.

Granted skill Azmerian Wolf là burst companion theo cooldown: nhả 7 Spirit Wolves lao vào enemy trong 8 giây, Cooldown 15s, Attack Damage 1000%, Maim mục tiêu trúng đòn. Cơ chế phù hợp nhất khi Mark rồi xả — "Companions deal 85% increased damage to your Marked targets" nhân thẳng vào đòn của cả bầy sói. "Allies in your Presence Regenerate 64 Life per second" giữ companion bền hơn khi combat kéo dài.

Khi vào league, log Spirit thực tế để đo được bao nhiêu companion khác loại cùng lúc, và xác minh "any number ... of different types" là nhiều con mỗi loại hay chỉ một con mỗi loại nhiều loại.

## Cơ chế mở build

Item này dựng một Spirit Walker chạy bầy companion hỗn hợp thay vì single-companion. Player commit vào: stack Spirit (gear + tree + 54% từ item) để mở nhiều slot companion khác loại, Mark target để kích hoạt 85% increased damage, và dùng Azmerian Wolf làm burst window theo cooldown 15s. Vì companion khác loại không còn đụng trần, build có thể trộn beast companion + spectral wolf + companion khác cùng lúc, mỗi loại đóng một vai (tank, dps, utility).

Item không hợp build single-strong-minion (như hướng [The Auspex](/mechanics/items/the-auspex) ép một Mist Raven) — Sylvan's Effigy thưởng cho việc dàn nhiều companion, ngược hẳn triết lý dồn vào một entity. Cũng không hợp build không chạy companion vì phần lớn mod quy về companion/Spirit.

## Cách kiếm item

Drop source chưa được GGG reveal tại 25/05 (league launch ~29/05). Là sceptre base Level 6 với Spirit 100, có thể tiếp cận sớm nếu drop rộng. Giá tuần đầu tùy mức độ meta companion pick-up sau khi Spirit Walker ascendancy live — sẽ update khi market settle.

## Version History

### Patch 0.5.0 (Return of the Ancients — 2026-05-29)

Item introduced cùng đợt ascendancy Spirit Walker. Mod verbatim đã có trên poe2db; build viability chưa test live.

## Item liên quan và thay thế

- [The Raven's Flock](/mechanics/0-5-new-unique-items) — staff minion cùng patch (111% increased Minion Damage, 34% Spirit Reservation Efficiency); cân nhắc khi build nghiêng minion hơn companion.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Stoic_Sceptre"} Stoic Sceptre — base của item, Spirit 100 là điểm khởi đầu reservation.

## Relationships

- **synergizes_with** [Spirit Walker — Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — item gỡ trần companion, trục chính của ascendancy Spirit Walker
- **part_of** [Đợt Unique Mới và Meta Shift](/mechanics/0-5-new-unique-items) — trục companion đã lộ stat của đợt 0.5
- **competes_with** [The Auspex](/mechanics/items/the-auspex) — Auspex ép single-minion, Sylvan's Effigy thưởng bầy companion — hai triết lý ngược nhau
