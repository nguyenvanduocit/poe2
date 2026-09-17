---
name: write-farming-tutorial
description: Viết hoặc polish farming strategy doc trong content/farming/ theo phong cách CHEATSHEET + project owner voice (tiếng Việt, bullet-first, số thật có timestamp). Trigger — "viết farming strategy", "draft farming doc", "tutorial farming", "write farming strategy", "farming guide cho <content>", "polish farming doc".
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash(test:*)
  - Bash(ls:*)
  - Bash(jq:*)
  - Bash(bun:*)
when_to_use: Use when user asks to write, draft, or polish a farming strategy in content/farming/. Triggers — "viết farming strategy", "viết tutorial farming", "draft farming doc", "write farming strategy", "farming guide cho Breach/Delirium/Harvest/...", "polish farming doc", "farm guide".
argument-hint: "<topic | content/farming/file.md>"
arguments:
  - topic_or_path
context: inline
---

# write-farming-tutorial — Viết farming strategy dạng cheatsheet, giọng owner Việt

Skill này viết farming strategy trong `content/farming/` dạng **cheatsheet bullet-first**: nhìn vào là setup theo, khỏi đọc nguyên lý. Body là bullet — bốn section roll-reference theo **bộ 4 lever** (Waystone · Tablet · Atlas Passive · Master) rồi một section cho mỗi run-case (thường / juiced). Giọng giữ project rule: **tiếng Việt, owner voice, số thật có timestamp**. Why nén thành một mệnh đề trên bullet, KHÔNG đoạn văn giảng cơ chế.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/farming/harvest-rush.md`) → polish / rewrite
  - **Topic** ngắn (vd `harvest`, `breach currency`) → skill glob lookup. File chưa tồn tại → REFUSE, gợi ý tạo file mới theo `templates/farming-template.md` trước.

## Goal

File `.md` trong `content/farming/` với:

- Frontmatter khớp schema `content.config.ts` (build `bun run generate` fail nếu sai).
- **Cheatsheet right-sized** — TL;DR + intro 1 câu + 4 lever section (bỏ lever không dùng) + 1 section/run-case + Kinh tế + Failure Modes + Version History + Relationships. CẮT cái không áp dụng, ĐỪNG pad (xem "Cấu trúc cheatsheet").
- Frontmatter `strategy_tier` / `investment_tier` / `confidence_level` + profit/hour (state inline có timestamp, KHÔNG phải frontmatter field) re-state ở intro (không lặp 2 chỗ same wording).
- Mọi số (profit, tablet cost, drop value) **có timestamp** ("tính đến 2026-06-05, Omen of Sinistral Erasure ~3 div/cái") — số không có timestamp = fabricate.
- Mọi tablet / waystone / atlas keystone / unique / fragment / currency / Master → `:wiki-link{url="https://www.poe2wiki.net/wiki/..."}`.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 8)

1. **Owner voice** — viết như người tự chạy strategy này, đo profit, rút kinh nghiệm. CẤM "theo Fubgun/Empyrean…", "guide này tổng hợp từ…", "tóm lại". State as own: *"City biome grass ổn nhất vì pack size cao"* không *"City map được community recommend vì..."*.
2. **Bullet-first, why nén một mệnh đề** — body là bullet scannable, KHÔNG đoạn văn giảng cơ chế. Reader nhìn vào copy setup, không cần đọc nguyên lý. Mỗi bullet gánh why bằng đúng MỘT mệnh đề khi cần (vd "runic monster là con duy nhất nhả logbook nên nổ hết marker") — KHÔNG cho mỗi lever một đoạn dài. KHÔNG bảng nhiều cột (site stack-column UI vỡ layout).
3. **Setup-first, actionable** — mỗi lever section cho exact roll/node/choice để chạy lần đầu. Run-case section dẫn "pick lever variant nào" + trình tự chạy, KHÔNG giảng lại mod đã ở lever section.
4. **Số có timestamp** — Profit, drop rate, tablet cost: kèm "tính đến YYYY-MM-DD" hoặc reference frontmatter `updated:`. Không có timestamp = invalidate trong 1 tuần.
5. **Game term linking** — Mọi tablet / waystone / atlas keystone / fragment / unique / currency / Master → `:wiki-link{url="https://www.poe2wiki.net/wiki/Exact_Name"}` (lần đầu mention, KHÔNG trong bullet TL;DR).

   ```md
   Money: :wiki-link{url="https://www.poe2wiki.net/wiki/Aldur's_Saga"} ~30 div,
   :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"} nền giao dịch.
   ```

6. **Rewrite fresh, đừng vá doc cũ — vault luôn ở thì hiện tại** — Khi update strategy đã tồn tại: viết LẠI nguyên bài theo meta/giá **hiện tại**, KHÔNG vá lẻ rồi chừa số/tablet/atlas đã outdate "để giữ lịch sử". Profit/giá stale thay thẳng (kèm timestamp mới); strategy đã chết theo patch (tablet removed, mod nerfed, content disabled) thì gỡ hẳn hoặc xoá doc, không archive trong body. Lịch sử chỉ ở `git log` — doc hiện tại chỉ chứa trạng thái đúng-bây-giờ. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".
7. **Banned-lexicon — tra `templates/voice-lexicon-vi.md` TRƯỚC khi viết** — cấm calque «trục/đòn bẩy/cốt lõi/đáng kể/một cách + adj/trả về/vòng lặp», động từ «dựng/cấp/chèn» cho buff-stat, pivot AI «— đây là lý do/cách», «Hệ quả thực tế:», «Điều này có nghĩa là», mở đoạn «Đây là X» lặp; xưng hô «mình» hoặc câu vô chủ ngữ. Hook `content-voice-lint` bắt phần grep được — sửa sạch warning trước khi báo xong.
8. **Kinh tế thông tin — mỗi số/cơ chế một chỗ, không recap** — mỗi lever/mod/số giải thích đúng MỘT lần ở section sở hữu nó (lever section sở hữu roll, Kinh tế sở hữu profit/EV); chỗ sau chỉ nhắc tên + dẫn ngược, KHÔNG giảng lại. Số không tựa vào một quyết định thì cắt. KHÔNG mở Quick Reference Card (4 lever section đã là phần scannable). Self-test: số/cơ chế nào *giải thích* ở >1 chỗ → gộp còn một. Ref: CLAUDE.md `## Content Writing Voice` → "Kinh tế thông tin".

## Bộ 4 lever — danh sách ĐÓNG (user 2026-07-03)

POE2 chỉ có đúng **4 lever tối ưu**: **Masters of the Atlas · roll tablet · roll waystone · Atlas Passive Tree**. Bốn lever này = bốn section roll-reference trong cheatsheet (`## Waystone roll gì`, `## Tablet roll gì`, `## Atlas passive spec gì`, `## Master chọn ai`). Mọi nguồn tiền phải map về đúng một lever — draft mọc ra "lever thứ năm" (scarab/sextant/chisel không tồn tại) = red flag fabrication, dừng verify. Consumable đổ lên waystone (Liquid Emotion, omen) thuộc lever Waystone; fragment/key/splinter là vé vào content, không phải lever. Lever nào strategy không dùng thì BỎ section đó.

## Mod reference = dòng mod THẬT, đã verify

Mỗi tablet/waystone/remnant mod phải viết **dòng mod đầy đủ** (exact searchable wording, vd "increased Quantity of Expedition Logbooks dropped by Runic Monsters in Map") — KHÔNG dùng affix nickname đơn lẻ ("of Knowledge", "of Ancient Fiends"); nickname không ra gì khi search in-game/trade. Trong cheatsheet PiP để dòng mod làm `text`, affix name xuống `note`. Và phải **verify mod còn tồn tại trong patch hiện tại** trước khi viết — đọc verbatim từ `data/poedb/<patch>/` (source #2) hoặc poe2db.tw live; ĐỪNG tin một mình wiki mirror (có thể stale một patch). Ví dụ thật: "of Runes / increased Runic Monster Markers" có trong wiki mirror nhưng KHÔNG có trong dump 0.5.0 → bỏ, không viết.

## Cheatsheet PiP component (optional in-game overlay)

Nhiều farming doc nhúng một cheatsheet PiP — `::expedition-cheatsheet`, `::omen-farm-cheatsheet`, `::ritual-cheatsheet` (`app/components/*Cheatsheet.vue`). Component đó là **overlay in-game mirror** nổi trên game để tra nhanh khi đang chạy — **text bullet trong 4 lever section vẫn là nguồn chính** để đọc/copy setup. Đặt component ở cuối phần execution (sau section nổ chain / thứ tự chạy). Có component → BỎ Quick Reference Card (bốn lever section đã là phần scannable đó).

## Cấu trúc cheatsheet — right-sized, CẮT cái không áp dụng

**Right-sizing: CẮT lever/case không dùng, ĐỪNG pad, ĐỪNG lặp.** Section mỏng/độn hoặc trùng section khác = vi phạm. Heading sentence-case tiếng Việt nói thẳng ("## Waystone roll gì") — KHÔNG dash-subtitle. **Section REQUIRED `## Failure Modes` PHẢI giữ ĐÚNG literal đó** (validator key theo heading text).

### Thứ tự section

1. **## TL;DR** — 3-7 bullet kết luận (case nào setup gì + EV + gate then chốt). Plain-text, owner-voice, KHÔNG wiki-link, KHÔNG mục lục section.
2. **Intro (không heading)** — 1 câu: strategy là gì + tier + ai chạy. Restate metric inline ("Tier B, ~5-10 div/h tính đến YYYY-MM-DD").
3. **## Waystone roll gì** — bullet: case thường / case juiced roll gì + nguyên tắc tier.
4. **## Tablet roll gì** — bullet: mỗi mục tiêu → dòng mod thật searchable; Irradiated/unique khi nào.
5. **## Atlas passive spec gì** — bullet: node subtree + tác dụng dòng ngắn (spec một lần).
6. **## Master chọn ai** — bullet: master nào khi nào.
7. **## [Run case thường]** và **## [Run case juiced]** — mỗi case: setup (dẫn lever variant) + loop + gate consumable + EV. Chỉ một case nếu strategy không phân nhánh.
8. **## Nổ chain / thứ tự chạy** (optional) — bullet action thứ tự nổ/clear; cheatsheet PiP embed đặt ở đây.
9. **## Kinh tế** — snapshot date + money item (wiki-link) + EV/map + variance.
10. **## Failure Modes** — **validator-enforced `required: true`**, ≥3 bullet scenario gãy (build floor · one-shot/mất map · market saturation/patch nerf · sustain/brick). Xem **Failure Mode / Devil's Advocate** trong CLAUDE.md.
11. **## Version History** (hoặc Changelog) — record patch gọn, một dòng/sự kiện.
12. **## Relationships** — cross-link nội bộ, mỗi dòng `- **predicate** [Title](/route) — reason`. Mọi route phải xuất hiện ≥1 lần trong body.

Bỏ lever section nào strategy không dùng, gộp hai run-case thành một nếu không phân nhánh. Exemplar cheatsheet = `content/guides/0-5-ocean-exploring.md`.

## Pre-write checklist

1. **Target file path** xác định (đã tồn tại).
2. **Frontmatter values** read: `strategy_tier`, `investment_tier`, `league`, `patch`, `league_phase`, `confidence_level`. Strategy tier B mà profit claim 50div/hour = inconsistent → flag user.
3. **Số thật**:
   - Currency/item price → `/poe2scout` (nguồn giá duy nhất: price + volume + history) hoặc user fetch.
   - Bulk / live listing → `/trade` qua playwriter page-context fetch (KHÔNG curl direct GGG API per CLAUDE.md).
   - Personal testing → user cung cấp sample size + map count.
   - Số chưa có → placeholder `<!-- TODO: profit data, run /trade -->`, flag.
4. **Verify mod** — mỗi tablet/waystone/remnant mod đọc verbatim từ `data/poedb/<patch>/` hoặc poe2db.tw trước khi viết dòng mod.
5. **Reference farming doc** — đọc `content/guides/0-5-ocean-exploring.md` (exemplar cheatsheet) + 1 farming doc để align voice + `:wiki-link` usage.

## Steps

### 1. Resolve target file
Path → `test -f`. Topic → `ls content/farming/*<slug>*.md`. Không tìm thấy → REFUSE + gợi ý tạo file mới theo `templates/farming-template.md`.

**Success criteria**: File path absolute, frontmatter readable.

### 2. Đọc context
Read target file + exemplar `0-5-ocean-exploring.md`. Đọc atlas tree mechanic doc nếu link.

**Success criteria**: Nắm tier, content type, 4 lever áp dụng cho strategy này.

### 3. Source + verify data
- Currency/item price → `/poe2scout` (price + volume + Δ7d + history) hoặc user cung cấp.
- Trade bulk / live listing → user run `/trade <query>`.
- Mỗi mod → verify verbatim từ `data/poedb/<patch>/` hoặc poe2db.tw.

**Success criteria**: Profit claim có ≥1 evidence với timestamp; mọi dòng mod verified.

### 4. Outline lever + case
Draft 1 dòng/section: 4 lever nào dùng + mấy run-case. **Human checkpoint** — user duyệt outline.

**Success criteria**: User approve.

### 5. Viết cheatsheet
Follow Voice rules + Cấu trúc cheatsheet. Bullet-first, why nén một mệnh đề, exact mod searchable, KHÔNG bảng.

**Rules** (CẤM):
- "theo Fubgun", "doc này tổng hợp", "tóm lại"
- Đoạn văn giảng cơ chế thay cho bullet
- Số không có timestamp
- Affix nickname đơn lẻ thay dòng mod thật
- Bảng (table) cho atlas/tablet list; game term không dùng `:wiki-link` lần đầu
- Quick Reference Card (trùng 4 lever section)

**Success criteria**: Đúng lever section cần + run-case; mỗi bullet có nội dung thật; mọi số có timestamp; mọi game term `:wiki-link`; `## Failure Modes` + `## Relationships` literal.

### 6. Validate
Frontmatter khớp schema `content.config.ts` — chạy `bun run generate` để verify.

**Success criteria**: Exit 0.

### 7. Summary cho user
Báo file path, H2 status, `:wiki-link` count, validate result. Gợi ý next: `/poe2scout` fact-check số giá, commit.

**Success criteria**: User biết next step.
