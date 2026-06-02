---
template: templates/mechanic-template.md
document_type: mechanic
title: Olroth's Legacy — Unique Rune Mechanic
status: draft
author: duocnv
created: '2026-05-10'
updated: '2026-05-26'
league: '0.5'
tags:
  - rune
  - unique
  - crafting
  - preview
  - olroth
  - kalguuran
  - ezomyte
---


# Olroth's Legacy — Unique Rune Mechanic

Olroth's Legacy là một rune mới của patch 0.5 "Return of the Ancients": áp nó lên một unique thuộc nhóm **Ezomyte** hoặc **Kalguuran**, unique đó bị phá huỷ vĩnh viễn, và **một** modifier của nó được trích ra thành một socketable rune để gắn vào item **cùng class**. Đây là cơ chế "transplant mod" — tách modifier mạnh nhất ra khỏi một unique có stat nền tệ, rồi dán nó lên một base crafted tốt hơn nhiều. Gần như mọi build sẽ chạm vào nó, nên cần hiểu rõ trước khi league live: đổi một rune socket lấy một mod đỉnh từ unique khác là cost/benefit gần như luôn dương, và đây là power-spike league-wide chứ không riêng vài archetype hẹp.

## How It Works

GGG đã xác nhận cơ chế này trong Q&A với Mark và Jonathan, cùng official item filter info đã ra mắt:

Source unique phải thuộc nhóm **Ezomyte** hoặc **Kalguuran** — đây là constraint cứng, các category unique khác hiện chưa apply được. Áp rune → unique bị destroy, một mod được lấy ra thành rune mang tên "Legacy of \<unique\>". Rune đó chỉ socket được vào item **cùng class** với unique gốc: mod lấy từ two-handed mace phải về lại two-handed mace, mod từ bow về bow, từ shield về shield. Không có cross-class. Và GGG xác nhận thẳng rằng **một số mod sẽ bị giảm value** khi convert sang rune ("with a slightly modified value sometimes") — lý do balance, vì bạn không còn phải gánh cả unique nữa mà được dùng một base tốt hơn nhiều ở chỗ của nó.

Câu hỏi lớn nhất vẫn chưa có lời giải, cần test trực tiếp khi vào league: rune chọn mod **ngẫu nhiên** hay **predetermined**? Text trên item ("extract one of its unique modifiers") nghiêng về diễn giải ngẫu nhiên — nghĩa là dùng Olroth's Legacy lên cùng một unique nhiều lần sẽ ra nhiều rune "Legacy of \<unique\>" khác nhau, mỗi cái mang một mod khác. Nếu đúng vậy thì với unique nhiều mod, bạn phải roll cho tới khi trúng mod mình cần, và inventory sẽ đầy những rune trùng tên nhưng khác nội dung. Khả năng còn lại là mỗi unique có một mod predetermined. Đây là biến số quyết định toàn bộ giá trị của từng target unique bên dưới — chưa chốt cho tới khi datamine sau launch.

Hệ quả thứ hai cũng chưa rõ: phạm vi mod trích được là gì. Hoặc chỉ các mod "item-grants" đặc trưng của unique (keystone, conversion, conditional), hoặc bất kỳ mod nào kể cả flat stat. Diễn giải rộng làm danh sách target unique rộng ra gấp đôi và mạnh hơn hẳn.

## Key Interactions

Mọi unique trong PoE 2 đều có trade-off cố ý: một mod đỉnh, đổi lại stat nền kém. Olroth's Legacy phá luôn trade-off đó — lấy mod đỉnh, vứt phần còn lại, dán lên base ngon. Khoảng cách power giữa "build có rune sớm" và "build chưa có" sẽ rất rộng, ai farm rune sớm ăn meta sớm.

Hệ quả kinh tế quan trọng: giá trị nhiều unique sẽ **đảo ngược**. Unique nhiều mod tốt giảm relative value (destroy chỉ lấy được một mod, lãng phí phần còn lại — và nếu extraction là random còn tệ hơn vì phải roll). Unique chỉ có **một mod đỉnh duy nhất** trên một base rác — :wiki-link{url="https://www.poe2wiki.net/wiki/Svalinn"} là ví dụ kinh điển — sẽ tăng giá, vì nó đúng là use-case sách giáo khoa: phá đi không tiếc gì.

Một interaction mở rộng đáng để ý là **keystone stacking**. Một số target (Irongrasp body armor cho Iron Grip + Iron Will, :wiki-link{url="https://www.poe2wiki.net/wiki/Crown_of_Thorns"} cho Pain Attunement) cấp keystone. Nếu rune cho phép giữ keystone đó *đồng thời* với việc allocate chính keystone đó trên passive tree, đây là buff gián tiếp cho các build vốn đã đi qua keystone. Nhưng nhiều khả năng mỗi keystone chỉ tính một lần. Exclusion check: keystone double-allocate (rune + tree) chưa confirm — treat như không stack cho tới khi test.

## Optimization

Official item filter info đã confirm danh sách unique nào nằm trong list, nhưng value mỗi rune nhận được vẫn chưa chốt — Dreamcore lặp lại nhiều lần "probably toned down", và GGG đã báo trước là có nerf-on-convert. Coi đây là mental model chuẩn bị trước, không phải lệnh mua sẵn. Số value thật chỉ chốt được sau khi datamine.

**Block / lucky block — Svalinn (shield).** Chỉ có một mod đáng phá: *chance to block damage is lucky*. Lucky block = roll block chance hai lần lấy lần tốt hơn, công thức effective là 1 − (1 − p)² — ví dụ base block 50% → effective ~75%. Steal mod này sang một shield real-stat (life/ES/res/spell block) là một trong những defense upgrade cao giá trị nhất game, đặc biệt cho character đã invest block cao; non-block build không hưởng lợi. Svalinn là target #1 cho block build. Svalinn còn được buff baseline runic ward trong patch này nên bản thân shield cũng đáng cân nhắc — nhưng giá trị extract vẫn nằm ở lucky block.

**Bow — Quill Rain + Ironbound.** :wiki-link{url="https://www.poe2wiki.net/wiki/Quill_Rain"} mang increased attack speed (local) + increased arrow speed, kèm 40% less attack damage. Vì attack speed là local nên thực chất là một cú nhân tốc đánh khổng lồ cho bow socket. Kể cả nếu rune chỉ giữ 30% giá trị và kéo theo một phần less-attack-damage, 30% local attack speed cho một bow base ngon vẫn cực mạnh. **Ironbound** (bow mới của 0.5) có mod *arrows return if they have pierced a target which had fully broken armor* — break armor là việc dễ với bow build (Heavy Stun, mod tách armor, support), và arrow return về bản chất là **double hit mỗi mũi tên**. Nếu rule cho phép extract không khoá value, đây có thể là rune mạnh nhất league cho bow; nhiều khả năng GGG sẽ khoá kèm một less-damage-for-returning-projectiles để chặn full efficacy.

**Mace (one-handed) — Trenchtimbre, Olrovasara, Mjolner.** **Trenchtimbre** có mod *increases and reductions to minion attack speed also affect you* — invest vào minion attack speed để mượn tốc đánh cho attack build, bypass trần attack speed thấp của melee. Phải dùng one-handed mace ở endgame để socket; pair tốt với Olrovasara hoặc Brutus' Lead Sprinkler. **Olrovasara** cấp added maximum lightning damage theo enemy power (ramp rất nhanh trên boss và giữ lâu) kèm một attack speed modifier cao — nếu được lấy nhiều mod thì cả hai đều đáng. **Mjolner** gây tò mò vì có thể cho level of lightning skills, nhưng phần thú vị là liệu có lấy được skill (Thunder God's Wrath) hay không — gần như chắc chắn không, GGG muốn giữ skill gắn liền với weapon. Các flat phys mod của Mjolner thì quá lố để cho lấy free.

**Mace (two-handed) — Hoghunt, Hrimnor's Hymn.** **Hoghunt** có *+15% to critical hit chance* dạng local crit. Sau khi nhân với crit nền của weapon (~20%), đây là con số absurd; kể cả nếu rune chỉ giữ một phần (ví dụ +5% flat base crit), thêm vào một two-handed mace tốt đã là power lớn. **Hrimnor's Hymn** có *slam skills you use yourself cause an additional aftershock* — xem cảnh báo stacking ở mục What Doesn't Work. Pair với giant-blood-mace-with-shield setup.

**Defensive helmet — Keeper of the Arc, Starkonja's Head.** **Keeper of the Arc** (Kalguuran) luân phiên *take 40% less damage from hits* và *40% less damage over time* mỗi 5 giây — kể cả ở 15% mỗi vế khi tone down, dán lên một helmet tốt là defense rune rất mạnh. :wiki-link{url="https://www.poe2wiki.net/wiki/Starkonja%27s_Head"} có *15% of damage from hits taken from companion's life before you* — cực kỳ relevant cho làn sóng companion build từ **Spirit Walker** Ascendancy; lấy một bản tone-down dán vào một Starkonja's Head thật cho phép chuyển nhiều damage sang companion hơn.

**Spell / generic damage.** **Dusk Vigil** (staff) — câu hỏi là lấy được mod generic *extra damage as fire* (dán vào staff khác) hay cả trigger skill Ember Fusillade. **Chernobog's Pillar** (shield) — *gain 1% of damage as fire per 1% chance to block*, một cách dip defense lấy damage, kể cả khi tone xuống 1% per 2% block vẫn đáng. **Twisted Empyrean** (Kalguuran mace mới) — mod flat cold (khoảng gấp đôi một T1 cold hiện tại) và 100% fire-to-cold conversion cho mace skills là hai mod đỉnh để extract cho cold-conversion melee archetype.

**Movement / utility — Wanderlust, Trampletoe, Legionstride, Amora Mandragora, Elevore.** :wiki-link{url="https://www.poe2wiki.net/wiki/Wanderlust"} có *speed is unaffected by slows* — quá mạnh để cho lấy nguyên, gần như chắc chắn tone xuống dạng "reduced efficacy of slows" giống mod trên passive tree. :wiki-link{url="https://www.poe2wiki.net/wiki/Trampletoe"} có *deal 30% of overkill damage to enemies within 2m* — clear-speed staple, kể cả ở 15% vẫn tốt. **Legionstride** cấp base block chance (~10%) — scale block không cần shield, pair tốt với Ironbound (bow có base block). **Amora Mandragora** (talisman) cấp Druidic Prowess — buff stack tới 3 lần cho 30% increased skill speed thường trực; lấy mod này nghĩa là có 30% skill speed mà không phải đốt weapon-swap slot. **Elevore** được buff thành 1 charm charge/giây (từ 0.5) — một cách gain charm charge passive đáng cân nhắc.

Các target còn lại — **Blackbraid** (armor-applies-to-elemental body armor, base armor quá thấp nên chỉ đáng khi extract), **Irongrasp** (Iron Grip + Iron Will keystones, mạnh cho strength-stacking mace cùng Brutus' Lead Sprinkler / Facebreaker), **Alkem Eira** (damage blocked recouped as mana, combo với block-recoup tech sau khi 0.4 sửa bug block-không-tính-prevented-damage), **Brain Rattler** (all damage causes electrocution buildup — electrocution stun-like 5 giây, mạnh cả damage lẫn defense), **Adonia's Ego** (max power charges / pinnacle of power), **Deathblow** (gloves, cutting strike built in), **Briarpatch** (+25% thorns critical strike chance cho thorns build) — đều đáng theo dõi nhưng value phụ thuộc rule extraction.

## What Doesn't Work

- **Class restriction là tuyệt đối.** Rune từ shield không gắn lên amulet/ring/armor/helmet. Rune từ two-handed mace chỉ về two-handed mace, không phải one-handed. Trước khi mua unique để destroy, confirm gear đích cùng class và còn rune socket trống.
- **Aftershock từ Hrimnor's Hymn không stack đôi.** Mod gốc set chance-to-cause-additional-aftershock lên 100% trong tooltip; mọi chance cộng thêm chỉ stack trên con số đó và không cấp thêm cơ hội thực sự nào vượt cú aftershock đầu. Dạng rune nhiều khả năng là 20–30% chance (không phải 100%), lúc đó nó *mới* stack được với các nguồn aftershock-chance khác — nhưng đừng kỳ vọng nhân đôi aftershock nếu vẫn còn mod 100% nào trong setup. Exclusion check: full-100% aftershock sources triệt tiêu thêm chance.
- **Keystone rune có thể không stack với keystone trên tree.** Iron Grip, Iron Will (Irongrasp), Pain Attunement (Crown of Thorns) — chưa confirm liệu giữ rune *đồng thời* allocate keystone đó trên passive tree có cho double benefit không. Treat như chỉ tính một lần cho tới khi test.
- **Skill-on-item gần như chắc không extract được.** Mjolner (Thunder God's Wrath), Dusk Vigil (Ember Fusillade), Adonia's Ego — GGG có xu hướng giữ active skill gắn liền với chính unique. Đừng phá những unique này chỉ để săn skill; nhắm mod stat.

## Common Mistakes

- **Đừng vội destroy unique đắt ngày 1.** Rule "value modified" chưa rõ, và extraction có thể là random. Đợi 2–3 ngày để cộng đồng test từng mod và confirm random-vs-predetermined, rồi mới quyết. Mất 2 ngày meta info rẻ hơn nhiều so với mất một Svalinn extract ra mod đã nerf 50% hoặc roll trúng mod rác.
- **Đừng coi mọi unique 5div+ là target tốt.** Unique nhiều mod hay là target *tệ* — destroy chỉ lấy một mod, phần còn lại bay theo, và nếu random thì còn phải roll. Chỉ phá unique mà ≥80% giá trị nằm ở một mod duy nhất (Svalinn pattern).
- **Đừng quên kiểm class đích trước khi mua.** Nhiều người mua unique để extract rồi mới nhận ra gear đích không cùng class hoặc đã đầy rune socket.
- **Đừng giả định mọi unique đều destroy được.** Hiện chỉ confirm Ezomyte + Kalguuran. Unique cũ từ patch sớm hơn có thể không apply — đừng đầu cơ unique cũ trước launch.

## Version History

Mechanic tease ở Q&A trước launch (mốc 10/05/2026), official item filter info xác nhận danh sách target unique đầy đủ trong tuần launch 0.5 (note này refresh 26/05/2026 theo info đó). Official item filter info đã chốt danh sách unique target; value mỗi rune và rule random-vs-predetermined vẫn chưa xác định cho tới khi datamine sau go-live. Khi vào league cần log: (1) extraction là random hay predetermined, (2) scale nerf-value GGG áp cho từng mod nhóm "phá meta" (Quill Rain IAS, Wanderlust slow-immunity, Svalinn lucky block, Ironbound arrow-return), (3) keystone rune có double với tree không. Sau khi log, các điểm chưa chắc ở Optimization sẽ được xác nhận hoặc loại bỏ. Status giữ `draft` vì mechanic vẫn pre-launch unverified.

## Relationships

- related_mechanics [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — Starkonja's Head rune chuyển damage sang companion, relevant cho làn sóng companion build của Spirit Walker.
- references [Unique items mới của 0.5](/mechanics/0-5-new-unique-items) — Ironbound, Twisted Empyrean, Brutus' Lead Sprinkler, Facebreaker là các Kalguuran/Ezomyte unique nằm trong target pool.
- related_mechanics [Talisman crafting](/mechanics/crafting/talisman-crafting) — Amora Mandragora là unique talisman trong list; cùng họ cơ chế itemization 0.5.
