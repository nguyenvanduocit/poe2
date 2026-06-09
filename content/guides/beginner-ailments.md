---
template: templates/guide-template.md
document_type: guide
title: Ailment và status effect trong POE2
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
  - ailment
  - defense
  - status-effect
---

# Ailment và status effect trong POE2

Ailment là debuff gắn lên target khi bạn hit bằng đúng damage type — fire hit gây ignite, cold hit gây chill hoặc freeze, lightning hit gây shock hoặc electrocute, physical hit có thể gây **Bleed**, physical và chaos hit có thể gây poison. Người mới hay bỏ qua chúng vì không thấy rõ trong combat, nhưng hiểu ailment cả hai chiều — dùng để sát thương và phòng khi bị gây — là bước đầu tiên phân biệt build mạnh với build trông có vẻ mạnh.

## Ailment bạn gây ra cho kẻ địch

Ba ailment gây sát thương trực tiếp: :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"}, **Bleed**, và :wiki-link{url="https://www.poe2wiki.net/wiki/Poison"}.

Ignite đốt kẻ địch liên tục bằng fire DoT, mạnh bằng 20% fire damage của hit đã gây ignite và kéo dài 4 giây mặc định. Bleed gây physical DoT ở 15% physical damage mỗi giây, nhưng quan trọng hơn là nó tăng gấp đôi khi kẻ địch đang di chuyển — nên boss di động chịu bleed nặng hơn hẳn. Poison gây chaos DoT và stack nhiều lần: mỗi hit có poison chance đều cộng thêm một stack mới thay vì ghi đè, nên build dùng nhiều hit nhỏ nhanh scale poison rất mạnh.

Trong ba ailment này, ignite và bleed dựa vào damage của hit gây ra chúng để tính magnitude — hit mạnh hơn thì DoT mạnh hơn. Poison cũng vậy nhưng ưu thế nằm ở khả năng stack.

Một ailment quan trọng không gây damage trực tiếp là :wiki-link{url="https://www.poe2wiki.net/wiki/Shock"}. Shock khiến kẻ địch nhận thêm 20% damage từ mọi nguồn — kể cả ignite, bleed, poison, và hit tiếp theo. Đây là lý do nhiều build đầu tư lightning damage dù main damage là loại khác: chỉ cần maintain shock trên target là toàn bộ damage output của bạn lên 20%.

:wiki-link{url="https://www.poe2wiki.net/wiki/Chill"} giảm action speed kẻ địch lên đến 50%, và :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} dừng hoàn toàn trong 4 giây. Chill tự apply mỗi khi cold hit đủ mạnh, còn freeze cần tích lũy buildup — boss và rare monster ở map tier cao khó freeze hơn nhiều so với trash mob vì ailment threshold của chúng tăng theo monster level.

## Tại sao ailment trên người mình nguy hiểm ở map tier cao

Khi kẻ địch gây ailment lên bạn, mọi thứ đảo chiều. Ailment threshold của người chơi tính bằng nửa max life mặc định — ít life thì threshold thấp, dễ bị gây ailment hơn.

:wiki-link{url="https://www.poe2wiki.net/wiki/Electrocute"} là ailment nguy hiểm nhất về phòng thủ: khoá mọi action trong 5 giây, không dodge roll được, không dùng flask được. Đứng giữa pack dense mà bị electrocute là chết, vì damage tiếp tục bay vào trong lúc bạn bất động. :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} trên người chơi tương tự — bị freeze đúng trước hit lớn tiếp theo của boss là mất hết HP không kịp react.

Bleed trên người chơi có cơ chế ngược lại với bleed trên kẻ địch: nó cũng tăng gấp đôi khi bạn di chuyển. Dodge roll trong lúc bị bleed nặng là tự damage chính mình.

Shock lên người chơi làm bạn nhận thêm 20% damage từ mọi nguồn — không phải từ một hit mà từ tất cả, gồm cả DoT tiếp tục tick.

## Cách phòng ailment hiệu quả

Flask là cách rẻ và trực tiếp nhất. Flask gắn mod "Remove Bleeding on use" và "Remove Shock on use" đủ xử lý phần lớn tình huống ở map thường. Tuy nhiên flask chỉ cleanse sau khi đã bị gây ailment — nếu bị electrocute hoặc freeze thì đã không dùng flask được rồi.

Vì vậy khi vào T10 trở lên, cần chủ động cắt nguồn gốc hơn là chỉ cleanse. Gear có implicit hoặc explicit **"cannot be Frozen"** hoặc **"cannot be Shocked"** ngăn hoàn toàn từ đầu. Passive nodes tăng **Elemental Ailment Threshold** làm ailment khó apply hơn và giảm magnitude buildup cho freeze, electrocute. Tăng life cũng gián tiếp tăng ailment threshold vì threshold = nửa max life.

Ưu tiên thực tế: xử lý freeze và electrocute trước vì hai cái này lock bạn hoàn toàn. Shock và bleed nguy hiểm nhưng vẫn còn room để react khi đã bị gây.

## Relationships

- **related_mechanics** [Armour và defensive scaling](/mechanics/armour-defensive-scaling) — hiểu ailment threshold song song với armour, evasion, ES để xây lớp phòng thủ đầy đủ
- **related_mechanics** [Infernal Legion ignite loop](/mechanics/skills/infernal-legion-ignite-loop) — ví dụ build khai thác ignite làm main damage, thực tế ailment offense trong action
