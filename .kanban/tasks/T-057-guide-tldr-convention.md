# T-057: TL;DR opener thành chuẩn cho guides + rollout toàn bộ content/guides/
> Thêm section `## TL;DR` (bullet) lên đầu mọi guide, cắt gọn thân bài dài dòng, và biến TL;DR thành convention mới (template + skill + workspace CLAUDE.md).
- **priority**: medium
- **effort**: L

## Problem
Guides trong `content/guides/` viết quá dài dòng — người đọc phải cày cả bài mới nắm được ý chính. Hiện template (`guide-template.md`, `mechanic-template.md`) CẤM top-summary (*"KHÔNG mở ## Quick Summary/## Overview"*) và voice rule cấm recap-section, nên không có lối đọc nhanh. User muốn mỗi guide mở đầu bằng một phần `## TL;DR` dạng gạch đầu dòng để scan trong 10 giây, đồng thời cắt bớt phần thân lặp/độn.

## Goal
Mọi guide (trừ 2 patch-notes archive verbatim) mở đầu bằng `## TL;DR` bullet gói đúng các quyết định + số then chốt, thân bài trimmed hết chỗ lặp — và convention này được ghi vào template + skill để doc mới luôn theo chuẩn.

## Requirements
- **Placement**: ngay sau H1 → `## TL;DR` với 3-7 bullet plain-text (mechanic/số/quyết định, KHÔNG mục lục "phần 1 nói về X"). Thân bài (intro + sections) nằm dưới.
- **TL;DR voice**: owner-voice, tiếng Việt game-native, terse; số thật; KHÔNG wiki-link trong bullet (body giữ first-mention link); tuân banned-lexicon.
- **Trim**: xoá recap-section / Quick Reference card trùng / meta-summary / filler; mỗi số/cơ chế giải thích đúng MỘT lần. GIỮ nguyên: frontmatter (chỉ đổi `updated` → ngày sửa), mọi `:wiki-link`, mọi con số verified, `## Failure Modes`/`## Version History`/`## Relationships`.
- **Exception**: `0-5-0-patch-notes.md` + `0-5-2-patch-notes.md` (patch-notes template) = verbatim archive → KHÔNG trim, KHÔNG TL;DR (digest đã sống ở `return-of-the-ancients.md`).
- **Convention update** (clean-slate, viết affirmative): `guide-template.md`, `mechanic-template.md`, `item-template.md` gỡ điều cấm top-summary + thêm `## TL;DR` là opener bắt buộc; `.claude/skills/write-mechanic-tutorial/SKILL.md` (+ Section structure) require TL;DR; `poe2/CLAUDE.md` ghi binding convention. KHÔNG sửa parent `poe/CLAUDE.md` (shared với poe1).
- **Non-goals**: không đổi nội dung kỹ thuật/số; không đụng poe1; không đổi builds/farming/crafting đợt này (chỉ guides).

## Criteria
- [x] 3 template (guide/mechanic/item) + skill write-mechanic-tutorial + poe2/CLAUDE.md phản ánh TL;DR-là-chuẩn, không còn dòng cấm top-summary.
- [x] 79/81 guide có `## TL;DR` ngay sau H1 (2 patch-notes exempt), bullet đúng spec.
- [x] Thân bài trimmed: recap-section thuần đã xóa (twister/facebreaker Lỗi-hay-gặp, aura-beast Tổng-kết, bow-positioning Tips, atlas-passive Đọc-cây, v.v.); section có fact mới thì giữ + fold; git numstat xác nhận không file nào bị gut (net delta ≤ ±4 dòng).
- [x] `bun run generate` xanh — 990 route, 0 error / 0 warning / 0 link fail.
- [x] content-voice-lint clean trên 79 file đã sửa (9 hit còn lại đều nằm trong 0-5-0-patch-notes.md verbatim archive — đúng exempt).

## Outcome
Rollout 10 agent song song (batch 1/2/9 Opus, còn lại Sonnet). Fix central: 9 file lệch `updated` date → normalize `'2026-07-13'`. Convention encode ở template + skill + poe2/CLAUDE.md nên doc mới auto có TL;DR. Exempt: 0-5-0/0-5-2-patch-notes (verbatim GGG).
