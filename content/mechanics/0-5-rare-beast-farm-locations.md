---
document_type: mechanic
title: Farm rare tamed beast bằng Untainted Paradise và essence reset
mechanic_type: Farming
league: '0.5'
patch: 0.5.0
status: draft
author: nguyenvanduocit
created: '2026-06-05'
updated: '2026-06-05'
tags: [poe2, farming, tame-beast, companion, spirit-walker, rare-beast, untainted-paradise, essence, whakapanu-island, 0-5]
template: templates/mechanic-template.md
---

# Farm rare tamed beast bằng Untainted Paradise và essence reset

Companion build sống chết ở việc bắt được rare beast với đúng bộ modifier, mà cái nghẽn không phải tame được hay không — nó dễ — mà là số lần gặp đúng base với đúng mod giữ lại. :wiki-link{url="https://www.poe2wiki.net/wiki/Tame_Beast"} giữ tối đa 4 regular monster modifier, chọn ngẫu nhiên nếu con có hơn 4, nên mỗi lần tame là một cú roll riêng. Hai cách dưới đây phá nghẽn theo hai hướng ngược nhau: **Untainted Paradise** dồn volume để lọc 4-mod rare cho cả đàn, còn **essence reset** nhắm đúng một base ở overworld và reroll mod cho tới khi ưng. Khác hẳn [Rite of the Nameless](/mechanics/0-5-rite-of-the-nameless-companion-hunt) vốn chain một con unique boss — hai cách này là rare-only, overworld, không tốn key.

## How It Works

Untainted Paradise là một unique map water biome, area level 65, từ patch 0.1.1 nó "breeding" nên density rất cao — gấp đôi monster, gấp bốn magic/rare so với map thường, kèm 200-400% increased Experience. Quan trọng cho mục đích farm: nó **không drop item nào cả**, giá trị thuần nằm ở đám rare bạn tame được. Cách chạy là mang một loạt Tame Beast gem rỗng vào, juice map cho density/rarity lên, rồi tame mọi rare beast gặp được — **Quill Crab** và đám crab water-biome spawn dày ở đây. Tame xong cả chục con thì lọc: gem nào ra package xấu thì disenchant ngay tại chỗ, vì map drop no item nên chẳng tiếc gì. Một lần chạy có juicing tử tế ra đủ rare 4-mod để lọc cho hướng nguyên đàn qua :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan%27s_Effigy"}. Map hoàn thành khi giết hết rare monster, nên cứ tame trước, dọn sạch sau.

Essence reset đi hướng ngược: thay vì lấy nhiều con, nó lấy đúng một con. Mỗi overworld zone có pool monster base riêng — :wiki-link{url="https://www.poe2wiki.net/wiki/Whakapanu_Island"} (Act 4, area level 46) spawn đúng ba loại Caustic Crab, Coconut Crab, Quill Crab, nên muốn một con crab cụ thể thì vào đúng zone của nó. Vì mỗi Tame Beast gem chỉ giữ một loại companion, nhắm trúng base ngay từ đầu tiết kiệm hơn farm volume rồi vứt. Vào zone, tìm một essence monster — rare bị essence giam, hiện sẵn 2-3 regular modifier trước khi bạn thả nó ra. Đọc mod: nếu xấu thì reset để có con essence mới, nếu ưng thì wisp rồi giết khi còn wisps để bắt. Đừng đánh vỡ essence trước khi ưng mod — vỡ là con đó chốt, muốn đổi phải reset zone. Và tắt minion khi tame ở zone level thấp như Whakapanu, kẻo đàn companion DPS cao của mình giết con beast trước khi wisps kịp bám đủ.

Reset có hai tầng. Tầng nhẹ là **respawn ở checkpoint** để reroll con essence trong instance hiện tại mà không phải tạo zone mới — đây là phần GhazzyTV vừa học từ chat, và nó nghịch với cơ chế camp cổ điển (giết một rare beast thường thì checkpoint không respawn nó lại, phải tạo instance mới). Cái reroll này chỉ hợp lý nếu con essence **chưa bị break/giết**, essence node regenerate ra con mới với mod khác — phải log khi vào league để chốt nó reroll thật hay phải reset cứng. Tầng nặng là reset hẳn instance: **giữ Ctrl + left-click cửa vào area** mở ra window cho tạo zone mới hoặc vào lại zone cũ, dùng khi zone hiện tại không còn essence gần checkpoint. Lặp tới khi ra con base + mod mình muốn.

## Key Interactions

Điểm phải tính kỹ nhất là reservation. Spirit reservation của Summon Beast scale theo cả sức mạnh con monster lẫn **số modifier giữ lại**, nên một con 4-mod nặng reservation hơn hẳn con 2-mod cùng base. Suy ra hai cách farm phục vụ hai bài toán khác nhau: hướng carry một con gánh (Diretusk Boar hoặc unique boss) thì 4-mod càng nhiều càng tốt, Untainted Paradise đúng bài; nhưng hướng đàn 12 con thì "4-mod across the board" như video khuyên sẽ bóp nát spirit budget — filler companion nên giữ ít mod cho rẻ reservation, chỉ con đầu đàn mới đáng 4-mod. Untainted Paradise cho power-per-slot, không phải cho việc nhồi đầu con.

Hai cách này bổ trợ chứ không trùng [Rite of the Nameless](/mechanics/0-5-rite-of-the-nameless-companion-hunt) và [tablet nhồi modifier](/mechanics/crafting/0-5-tame-unique-beast-modifiers). Rite chain một con unique boss để có ~5 lần reroll Extra Crits, atlas-gated và tốn The Head of the King; tablet "of Contest" quyết định số mod mỗi spawn. Untainted Paradise và essence reset đứng ở tầng rẻ hơn — rare-only, overworld, không key — nên dùng để dựng đàn nền và bắt đúng utility beast, còn Rite + tablet để fish con carry unique đắt tiền. Nền cơ chế tame, modifier retention và cách đánh giá một con đáng giữ nằm ở [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt).

Exclusion check: none. Untainted Paradise và essence monster không khoá cơ chế tame — rare beast trong đó vẫn wisp + tame bình thường, và essence affix chỉ không được giữ lại khi tame (chỉ 4 regular mod được retain), không chặn việc bắt con.

## Optimization

Chọn cách theo mục tiêu. Cần volume 4-mod cho cả đàn qua Sylvan's Effigy thì chạy Untainted Paradise có juicing, mang dư gem rỗng, tame sạch rồi lọc. Cần đúng một base với một mod utility cụ thể — aura crab, ES aura, ground effect — thì essence reset ở zone của base đó rẻ và nhanh hơn nhiều, vì không phải farm cả đống con để vứt.

Camp cổ điển vẫn là cách rẻ nhất khi chỉ cần một base phổ biến. Reset ở checkpoint gần Troubled Camp trong :wiki-link{url="https://www.poe2wiki.net/wiki/Infested_Barrens"} cho hai rare mỗi lần, :wiki-link{url="https://www.poe2wiki.net/wiki/Jungle_Ruins"} cho rare :wiki-link{url="https://www.poe2wiki.net/wiki/Quadrilla"}, Egg Cave trong :wiki-link{url="https://www.poe2wiki.net/wiki/Singing_Caverns"} cho rare Brine Maiden. Con :wiki-link{url="https://www.poe2wiki.net/wiki/Diretusk_Boar"} — carry hiện tại của ThaoCamVienSaiGon — chính là rare Beast ở Infested Barrens, reservation nền 39%, charge thẳng kèm 25% chance Maim, nên muốn thêm một con Boar đúng mod thì camp Infested Barrens là điểm trực tiếp nhất, không cần đụng tới Untainted Paradise.

Tier map không đổi base stat con tame — sức mạnh companion scale theo gem level, không theo độ juicy của map farm nó. Nên với essence reset cứ chạy zone level thấp nhất còn ra đúng base, vừa an toàn vừa dễ tame mà không lo đàn mình burst con beast quá nhanh. Untainted Paradise thì ngược lại, đáng juice vì mục tiêu ở đó là density để lọc nhiều con cùng lúc.

## Cost & Restrictions

Tamed beast account-bound. Khi một beast gắn vào gem, gem thành Summon Beast account-bound — không trade được, người khác không nhặt được, nhưng vẫn stash và chuyển sang character khác của chính mình được. Nghĩa là không có chuyện bán con đã tame, và cũng không mời người mua vào tame hộ: khi một beast lọt vào màn hình bạn, nó khoá chỉ cho những người đã ở trong area lúc đó được tame/raise. Pre-aggro rồi mời buyer vào là không được; chỉ bán được instance sạch nếu buyer vào trước khi con essence hiện lên màn hình.

Untainted Paradise không drop item, nên nó thuần là máy farm beast — đừng kỳ vọng currency hay loot từ nó, lời nằm cả ở số rare tame được. Essence reset thì tốn thời gian reset hơn là tốn tài nguyên: mỗi lần tạo zone mới hoặc respawn checkpoint là một vòng lặp tay, năng suất phụ thuộc tần suất essence spawn gần checkpoint.

## Failure Modes

**Break essence trước khi ưng mod.** Một khi đánh vỡ essence con đó chốt mod, không reroll được nữa, muốn đổi phải reset hẳn instance — mất luôn mấy lần checkpoint reroll đã làm. Phải đọc xong 2-3 mod và quyết trước khi chạm vào con.

**Đàn mình giết con beast trước khi wisps bám.** Tame ở zone level thấp với một đàn companion DPS cao thì chính minion của mình burst con rare xuống trước khi Tame Beast dán đủ wisps, hỏng lần bắt. Phải tắt minion trước khi vào tame, hoặc giữ khoảng cách cho con beast sống qua cửa sổ wisp.

**Checkpoint reroll không hoạt động như video.** Cơ chế cổ điển là giết rare beast thì checkpoint không respawn nó, phải tạo instance mới. Cái reroll-tại-chỗ chỉ áp dụng cho essence monster chưa bị break, và đây là tech mới chưa chốt. Nếu khi vào league thấy checkpoint không reroll được con essence, rơi về reset cứng bằng Ctrl + left-click cửa area — chậm hơn nhưng chắc.

**Lọc trắng cả lượt.** Untainted Paradise dồn volume nhưng không bảo đảm trúng mod: chạy cả map có khi không con nào ra đúng 4-mod mình cần, và mỗi con disenchant là một lần tame phí. Tăng số lần quay xúc xắc, không tăng tỉ lệ trúng mỗi lần — muốn tỉ lệ cao hơn thì phải nhồi mod density qua tablet, không phải farm thêm volume.

## Version History

### Patch 0.5.0
Untainted Paradise mang sang 0.5 nguyên dạng máy farm rare beast density cao (alvl 65, drop no item, quadruple rare). Tame Beast và hệ companion là cơ chế 0.5 mới, nên việc dùng Untainted Paradise để lọc 4-mod rare và dùng essence monster để nhắm đúng base + reroll mod đều là pattern mới của league này. Essence reset tại checkpoint là tech community phát hiện trong tuần đầu, cần log empirical để chốt.

## Relationships

- **related_mechanics** [Spirit Walker Companion Beast Hunt](/mechanics/spirit-walker-companion-beast-hunt) — cơ chế tame + modifier retention nền tảng; doc này là cách lấy nhiều rare hoặc đúng rare base để fish package.
- **related_mechanics** [Săn boss tame companion bằng Rite of the Nameless](/mechanics/0-5-rite-of-the-nameless-companion-hunt) — cách song song nhưng cho unique boss: Rite chain boss đắt tiền, doc này farm rare rẻ ở overworld.
- **related_mechanics** [Nhồi Rare Modifier Lên Unique Tamed Beast](/mechanics/crafting/0-5-tame-unique-beast-modifiers) — tablet quyết định số mod mỗi spawn; Untainted Paradise/essence reset quyết định số lần spawn và đúng base.
- **related_builds** [Tame Beast Companion Zoo Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-zoo) — hướng nguyên đàn cần volume 4-mod rare từ Untainted Paradise, kèm cảnh báo reservation cho filler.
- **related_builds** [Tame Beast Companion Carry Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-carry) — hướng một con gánh, dùng camp Infested Barrens cho Diretusk Boar hoặc essence reset cho đúng base.
- **part_of** [Return of the Ancients](/mechanics/leagues/return-of-the-ancients) — league 0.5 với hệ companion mà toàn bộ chuỗi beast-hunt này phục vụ.

## Resources

- [GhazzyTV — How to FARM Rare Tamed Beasts VERY QUICKLY](https://www.youtube.com/watch?v=Fj7JjMjwLUU) — field demo cả hai cách: Untainted Paradise volume farm + essence reset ở Whakapanu Island, kèm caveat account-bound và on-screen tame lock.
- `data/wiki/Untainted_Paradise.md` — unique map stat (alvl 65, drop no item, quadruple rare, +200-400% XP).
- `data/wiki/Tame_Beast.md` — modifier retention (4 regular mod), reservation scale theo mod count, account-bound, camp spot list.
- `data/wiki/Whakapanu_Island.md` — pool monster base (Caustic/Coconut/Quill Crab) làm ví dụ targeted essence reset.
