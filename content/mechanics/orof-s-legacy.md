---
template: templates/mechanic-template.md
document_type: mechanic
title: Orof's Legacy — Unique Rune Mechanic
status: draft
author: duocnv
created: '2026-05-10'
updated: '2026-05-10'
league: '0.5'
tags:
  - rune
  - unique
  - crafting
  - preview
  - orof
  - calguran
  - ezomite
---


# Orof's Legacy — Unique Rune Mechanic

Orof's Legacy là rune socketable mới sắp về trong patch PoE 2 kế tiếp (mốc tease là 10/05/2026, launch ~3 tuần sau, version chính thức chưa announce — frontmatter đang đặt tạm `0.5` để pass validation, sẽ correct ngay khi GGG chốt). Cách dùng cũng đúng như tên: lấy một unique, **phá huỷ nó**, rút **một** mod ra, biến mod đó thành rune để nhét vào socket của item cùng class. Đây là cơ chế "transplant mod" giữa các unique — cho phép tách modifier mạnh nhất ra khỏi một unique stat tổng thể tệ và dán nó vào base có stat tốt hơn.

Lý do nó đáng theo dõi từ giờ: hầu như **mọi build sẽ chạm vào nó**. Đổi một rune socket lấy một mod đỉnh từ unique khác — cost/benefit gần như luôn dương. Đây là power-spike league-wide, không chỉ riêng vài archetype hẹp.

## How It Works

Phần **HIGH confidence** (GGG đã xác nhận trong Q&A):

- Source unique phải thuộc nhóm **Ezomite** hoặc **Calguran**. Các category khác hiện chưa được confirm có destroy được không.
- Apply Orof's Legacy → unique bị huỷ vĩnh viễn, **một** mod được trích xuất thành rune.
- Rune phải socket vào item **cùng class** (shield rune → shield, bow rune → bow, mace rune → mace). Không cross-class.
- **Một số mod sẽ bị giảm value** khi convert sang rune (lý do balance). GGG xác nhận có nerf nhưng không nói rõ mod nào, scale bao nhiêu — đây là phần đợi datamine sau launch.

Phần **MEDIUM confidence** chưa có lời giải:

- Phạm vi mod được trích là gì? Có hai diễn giải: (a) chỉ các mod **"item grants"** (mod đặc trưng của unique, không có trên rare), hoặc (b) bất kỳ mod nào trên unique. Diễn giải (b) làm mechanic mạnh hơn nhiều — và làm danh sách target unique rộng ra gấp đôi. Q&A không chốt, đợi patch notes.
- Rune drop ở đâu, rate bao nhiêu, có tradeable không. **LOW confidence**: rune sẽ rare/đắt ít nhất tuần đầu, sau đó giảm giá theo supply. Đây là pattern chuẩn cho mọi crafting mới ở GGG.

## Key Interactions

Mọi unique PoE 2 hiện đều đi kèm trade-off có chủ đích — stat đỉnh ở một mod, đổi lại stat khác kém hoặc rác. Orof's Legacy phá luôn trade-off đó: lấy mod đỉnh, vứt phần còn lại. Equivalent gần nhất ở PoE 1 là corrupt-implicit qua Temple of Atzoatl thời 0.4 — nhưng Temple chỉ sửa **implicit**, còn cơ chế này extract **explicit/unique mod** rồi paste sang base khác. Khoảng cách power giữa "build có rune sớm" và "build chưa có rune" sẽ rộng — ai farm rune sớm sẽ ăn meta sớm.

Một hệ quả nhỏ nhưng quan trọng: giá trị một số unique sẽ **đảo ngược**. Unique có nhiều mod tốt sẽ giảm relative value (vì destroy nó chỉ lấy được một mod, lãng phí phần còn lại). Unique có **một mod đỉnh duy nhất** (Savalin là ví dụ kinh điển) sẽ tăng giá. Trade economy sẽ tự rebalance trong 1–2 tuần đầu league.

## Optimization

Phần này **MEDIUM confidence** — danh sách dưới đây dựa trên unique pool hiện có. Sau khi patch live và confirm "any mod vs item grants only", danh sách có thể đảo hoàn toàn. Mục tiêu ở đây là chuẩn bị mental model trước, không phải mua sẵn.

**Cruel Rain** (Ezomite bow) — 100% increased local attack speed kèm 4% less attack damage. Vì là local nên thực chất là **double attack speed**. Nếu steal được mod attack speed sang một bow base ngon (có flat damage, crit, mod đáng): bow build ăn full 100% IAS không kèm downside damage. **LOW confidence rằng GGG cho phép full value** — đây gần như chắc chắn là loại mod sẽ bị nerf khi convert rune, vì free 100% IAS phá meta.

**Trench Timber** (Ezomite mace) — có hai mod đáng để extract riêng:

- *Minion attack speed mod*: paste sang mace minion-stat ngon (life, ES, +skill, các mod hỗ trợ minion khác), build minion ăn full speed mà không phải gồng các stat phụ rác của Trench Timber.
- *No-aftershock-on-slam mod*: cho slammer build dùng skill aftershock. Hiện slam build đang gồng vì mod này khoá ở Trench Timber (mà stat tổng kém). Tách mod ra, dán lên mace phys ngon là rebuild cả archetype.

**Calguran Savalin** (shield) — chỉ có **một mod** đáng: *chance to block damage is lucky*. Lucky block = roll block chance hai lần, lấy lần tốt hơn. Ví dụ block 50% → block effective ~75% (không phải 100%, công thức là 1 − (1 − p)²). Steal mod này sang một shield real-stat (life/ES/res/spell block tốt) là một trong những defense upgrade cao giá trị nhất game. Đặc biệt mạnh cho character đã invest block cao — non-block build thì không hưởng lợi gì. **HIGH confidence Savalin sẽ là target #1 cho block-based build**, vì đây đúng là use case sách giáo khoa của Orof: unique 1-mod-good-only.

**Twisted Imperion** (Calguran mace, new) — bản thân mace đã mạnh standalone, nhưng nếu steal được:

- *Attacks of this weapon have added cold damage*, hoặc
- *100% fire damage as extra cold damage*

→ paste sang một phys mace ngon là damage scale hai layer cùng lúc. **MEDIUM confidence** đây là mod đỉnh để extract cho melee/attack build, đặc biệt cold conversion archetype.

**Ironbound bow** (new) — bow base đã hai-hit (mọi flat damage cộng đôi cho mỗi arrow). Nhưng mod *arrows return if they pierce a target which had fully broken armor* mới là phần đáng steal — break armor là việc dễ với bow build (Heavy Stun, mod tách armor, support gem), và arrow return về bản chất là **double hit on every arrow**. Áp mod này lên bow base bình thường → x2 damage gần như miễn phí. Nếu rule cho phép extract không sửa value, đây có khả năng là **rune mạnh nhất league cho bow**. Cá nhân tôi đặt nó cùng tier với Savalin về độ đáng theo dõi.

**Unique mới với cap quality 40%** (preview chưa nêu tên rõ) — quality cap 40% thay vì 20% chuẩn. 20% quality = 20% more damage. Steal mod này sang một phys mace tốt → **+20% more damage flat**, không tốn affix slot khác. Boring, nhưng đây là loại "20% more multiplier mà không cần build around" hiếm thấy.

**Unique có 100% increased spell damage** (preview chưa nêu tên rõ) — nếu mod đúng là item-grants, đây là rune mặc định cho mọi spell build. 100% increased spell damage trên một rune socket là profile damage upgrade khổng lồ, gần như luôn worth slot.

Ngoài ra còn **Mioner / Mer** (Calguran, có khả năng có +4 lightning skills mod), **Conditional Evershock**, **Bruce Light Sprinkler** — preview info chưa đủ chi tiết để judge. Cập nhật sau patch live.

## Common Mistakes

- **Đừng vội destroy unique đắt tiền ngày 1**. Rule "value modified" chưa rõ — vài mod sẽ bị nerf lúc convert rune. Đợi 2–3 ngày để cộng đồng test từng mod, rồi mới quyết phá unique nào. Mất 2 ngày meta info rẻ hơn nhiều so với mất một Savalin 5div extract ra mod đã nerf 50% value.
- **Đừng coi mọi unique 5div+ là target tốt**. Unique có nhiều mod hay sẽ là target tệ — destroy chỉ lấy được **một** mod, phần còn lại bay theo. Nếu unique đang giá cao vì *cả combo* mod, phá nó là âm value. Chỉ phá unique mà ≥80% giá trị nằm ở **một mod duy nhất** (Savalin pattern).
- **Đừng quên class restriction**. Rune từ shield không gắn lên amulet/ring/armor. Trước khi mua unique để destroy, confirm gear đích đã có rune socket cùng class chưa, và socket đó còn slot.
- **Đừng giả định mọi unique đều destroy được**. Hiện tại confirm chỉ **Ezomite + Calguran**. Các unique cũ từ patch sớm hơn có thể không apply được. Patch notes sẽ chốt — wait-and-see ngày 1, đừng đầu cơ unique cũ trước launch.

## Version History

Mechanic này được tease ở Q&A trước launch ~3 tuần (mốc 10/05/2026). GGG có thể đổi rule, đổi value, hoặc thậm chí pull mechanic trước khi go-live — đây là caveat chuẩn cho mọi preview pre-patch, không phải hedge sycophancy. Note này sẽ refresh sau khi patch notes chính thức ra mắt. Trường `league` đang đặt giá trị **dự đoán** `0.5` cho hợp regex validation, sẽ correct ngay khi GGG announce version chính thức. Khi note refresh, các tier "MEDIUM confidence" về unique-target sẽ chốt lên HIGH hoặc rớt xuống LOW dựa trên rule "any mod vs item grants only" và scale nerf-value GGG áp.

## Interactions with Other Content

<!-- TODO: polish section này qua /write-mechanic-tutorial. Cần ≥1 ví dụ với số thật từ character. -->

## What Doesn't Work

<!-- TODO: polish section này qua /write-mechanic-tutorial. Cần ≥1 ví dụ với số thật từ character. -->
