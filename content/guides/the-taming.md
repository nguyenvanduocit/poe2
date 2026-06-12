---
template: templates/mechanic-template.md
document_type: mechanic
title: The Taming
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
  - ring
  - prismatic-ring
  - elemental-ailment
  - wind-skills
  - poe2
  - mechanic
---

# The Taming

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Taming"} là unique :wiki-link{url="https://www.poe2wiki.net/wiki/Prismatic_Ring"} yêu cầu Level 42, drop từ The Market trong league 0.5. Ring có hai mechanic độc lập: (10–20)% increased Damage cho mỗi loại Elemental Ailment đang có trên enemy — tối đa ba loại theo thiết kế ring, nên tối đa 30–60% increased — và một cặp dòng Wind Skills biến toàn bộ elemental ground interaction thành triple buff thường trực không cần ground thật. Build chạy Twister Huntress với Wind Skills là user tự nhiên nhất vì gộp được hiệu ứng cả ba chiếc Berek ring vào một slot.

## Chỉ số và base type

```
The Taming
Prismatic Ring
Requires Level 42
--------
+(7–10)% to all Elemental Resistances
--------
+(10–20)% to all Elemental Resistances
(10–20)% increased Damage for each type of Elemental Ailment on Enemy
Wind Skills which can be boosted by Elemental Ground Surfaces can be boosted by multiple Elemental Ground Surfaces
Wind Skills which can be boosted by Elemental Ground Surfaces count as being boosted by Ignited, Shocked, and Chilled Ground

"Moon after moon did Berek make fools
Of the great and Untamed Three
Until malice for a Brother
Slew the hatred of the Other
And Berek did hunt
Alone and free."
- Berek and the Untamed
```

Ring giải quyết res đáng kể ở roll tốt nhất: 10% implicit + 20% explicit = 30% all elemental res từ một ring slot, đủ để thở khi build đang áp lực res.

## Damage tăng theo số loại ailment trên enemy

Dòng "(10–20)% increased Damage for each type of Elemental Ailment on Enemy" scale theo số loại ailment khác nhau đang có mặt trên enemy, không phải số stack của từng ailment. Ba loại Elemental Ailment trong POE2 tương ứng ba nguyên tố: :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"} (fire), :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} (cold), :wiki-link{url="https://www.poe2wiki.net/wiki/Shock"} (lightning). Có đủ cả ba loại trên enemy cùng lúc thì ring cho 3 × (10–20)% = 30–60% increased Damage tổng. Ring chỉ gọi tên ba loại ground — Ignited, Shocked, Chilled — gợi ý Chill và Freeze cùng tính là một loại cold và trần thực tế là ba loại; cần xác nhận in-game khi vào league.

"Increased" ở đây là additive — cộng vào pool increased damage từ passive tree, gear, và flask cùng lúc. Build đã có lượng lớn increased damage tổng thì 30–60% thêm vào sẽ có hiệu quả biên thấp hơn con số tuyệt đối. Build ít nguồn increased khác như companion zoo hay flat phys support thì 60% increased từ ring slot là đòn bẩy rõ rệt.

Yêu cầu thực tế để đạt đủ ba loại là build phải apply được cả :wiki-link{url="https://www.poe2wiki.net/wiki/Ignite"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Shock"}, và :wiki-link{url="https://www.poe2wiki.net/wiki/Chill"} hay :wiki-link{url="https://www.poe2wiki.net/wiki/Freeze"} đồng thời. Build thuần một nguyên tố chỉ apply một loại ailment, chỉ nhận 10–20% increased Damage — không đủ để giữ ring slot.

## Wind Skills và triple elemental ground

Hai dòng Wind Skills trên ring hoạt động cùng nhau thành một hiệu ứng đơn: mọi Wind Skill có thể được boost bởi elemental ground surface sẽ luôn luôn nhận boost từ cả ba loại ground — :wiki-link{url="https://www.poe2wiki.net/wiki/Ignited_Ground"} Ignited Ground, :wiki-link{url="https://www.poe2wiki.net/wiki/Shocked_Ground"} Shocked Ground, và :wiki-link{url="https://www.poe2wiki.net/wiki/Chilled_Ground"} Chilled Ground — đồng thời và thường trực, bất kể ground thật có tồn tại hay không.

Để hiểu tại sao điều này đáng giá, cần nhắc lại bộ ba Berek ring trong 0.5: :wiki-link{url="https://www.poe2wiki.net/wiki/Berek%27s_Grip"} Berek's Grip cho Wind Skills count as Shocked Ground, :wiki-link{url="https://www.poe2wiki.net/wiki/Berek%27s_Pass"} Berek's Pass cho Chilled Ground, :wiki-link{url="https://www.poe2wiki.net/wiki/Berek%27s_Respite"} Berek's Respite cho Ignited Ground. Mỗi chiếc cho một loại. Muốn đủ cả ba thì phải đeo cả ba — nhưng chỉ có hai ring slot. The Taming gộp cả ba vào một slot, kèm thêm dòng "multiple Elemental Ground Surfaces" để gỡ bỏ giới hạn chỉ một loại tại một thời điểm.

Với :wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} cụ thể — skill có Wind tag và mechanic "Gain 50% of damage as damage of the corresponding Type" khi đứng trên elemental ground — The Taming biến mỗi cast thành triple elemental: +50% added cold, +50% added lightning, +50% added fire, tất cả đồng thời và không cần setup ground thật. Nếu ba boost này áp độc lập cùng lúc thì suy ra mỗi twister nhận tổng 150% added elemental trên nền base attack damage của spear và tất cả multiplier consume Whirlwind — cần xác nhận in-game rằng ba boost stack riêng biệt thay vì ghi đè nhau.

Dòng "count as" quan trọng hơn dòng "multiple": không cần chủ động tạo hay đứng lên ground effect nào. Ring tự làm điều kiện đó. Không cần :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} để tạo Chilled Ground, không cần item nào spawn Ignited hay Shocked Ground — The Taming gánh hết.

Exclusion check: cơ chế "count as boosted by X Ground" chỉ kích hoạt cho Wind Skills có qualifier "which can be boosted by Elemental Ground Surfaces". Không phải mọi Wind Skill đều có qualifier này — khi vào league, cần xác nhận trong tooltip của từng skill xem nó có dòng ground interaction không, và log Twister tooltip để xác nhận cả ba ground boost hiển thị đồng thời.

## Khi nào ring này là lựa chọn đúng

Ring phù hợp nhất với hai trường hợp.

Twister Huntress chạy spear Wind Skills là user tự nhiên nhất: Twister nhận triple ground boost thường trực, toàn bộ mechanic consume Whirlwind hưởng lợi từ ba added elemental pool đó, và nếu ba nguyên tố đó apply đủ ba loại ailment thì damage modifier ailment stacking cũng kích hoạt thêm. Hai mechanic của ring không chỉ cộng hưởng — chúng dùng cùng một nguồn damage output để kích hoạt lẫn nhau.

Multi-ailment elemental build — không nhất thiết phải là Twister — apply được đủ ba loại ailment và nhận đủ 30–60% increased Damage. Điều kiện khó nhưng với build design sẵn quanh tri-element ailment application thì ring làm được cả vai trò damage multiplier lẫn res platform.

Build chỉ deal một nguyên tố, không chạy Wind Skills, hoặc không apply ailment đủ loại không khai thác được ring này. Với build đó, Prismatic Ring rare có thể tốt hơn vì res control linh hoạt hơn và có slot cho mods khác như Spirit, life, flat damage.

## Version History

### Patch 0.5.0 (Return of the Ancients)

The Taming được giới thiệu trong POE2 với hai mechanic Wind Skills mới — hai dòng này không tồn tại trong bản POE1 cùng tên. Contextually liên quan đến bộ Berek's ba ring cũng ra trong cùng patch, đều cùng design space Wind Skills + elemental ground. Drop từ The Market cùng với phần lớn unique ring của league 0.5.

## Relationships

- **related_mechanics** [Twister](/guides/twister) — skill chính hưởng lợi từ triple elemental ground boost của ring; cơ chế "Gain 50% as corresponding Type" là trục damage Twister trên elemental ground.
- **related** [0.5 New Unique Items Overview](/guides/0-5-new-unique-items) — overview toàn bộ unique mới 0.5 bao gồm Berek's trio và context The Taming.
- **related_mechanics** [Return of the Ancients](/guides/return-of-the-ancients) — league overview 0.5.0 giới thiệu The Market là drop source.
