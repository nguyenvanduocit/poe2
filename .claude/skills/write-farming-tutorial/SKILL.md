---
name: write-farming-tutorial
description: Viết hoặc polish farming strategy doc trong content/farming/ theo phong cách maxroll-flavored + project owner voice (tiếng Việt, prose-first, số thật có timestamp). Trigger — "viết farming strategy", "draft farming doc", "tutorial farming", "write farming strategy", "farming guide cho <content>", "polish farming doc".
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

# write-farming-tutorial — Viết farming strategy kiểu maxroll, giọng owner Việt

Skill này viết tutorial farming strategy trong `content/farming/` theo **cấu trúc setup-first** mượn từ maxroll (Metric → Setup → Atlas → Gameplay → Loot → Risk → Alternatives → Reference), NHƯNG giọng văn giữ project rule: **tiếng Việt, owner voice, prose-first, số thật có timestamp**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/farming/harvest-rush.md`) → polish / rewrite
  - **Topic** ngắn (vd `harvest`, `breach currency`) → skill glob lookup. File chưa tồn tại → REFUSE, gợi ý `/vault.new` trước.

## Goal

File `.md` trong `content/farming/` với:

- Frontmatter pass `bun run validate --path <file>` zero CRITICAL error.
- 12 H2 section + Relationships theo đúng thứ tự (xem "Section structure").
- Frontmatter `strategy_tier` / `investment_tier` / `confidence_level` + profit/hour (state inline có timestamp, KHÔNG phải frontmatter field) re-state ở intro paragraph (không lặp 2 chỗ same wording).
- Mọi số (profit, tablet cost, drop value) **có timestamp** ("tính đến 2026-06-05, Omen of Sinistral Erasure ~3 div/cái") — số không có timestamp = fabricate.
- Mọi tablet / waystone / atlas keystone / unique / fragment / currency / Master → `:wiki-link{url="https://www.poe2wiki.net/wiki/..."}`.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 6)

1. **Owner voice** — viết như người tự chạy strategy này, đo profit, rút kinh nghiệm. CẤM "theo Fubgun/Empyrean…", "guide này tổng hợp từ…", "tóm lại". State as own: *"City biome grass ổn nhất vì pack size cao, ritual nuốt được nhiều monster hơn"* không *"City map được community recommend vì..."*.
2. **Prose-first** — Atlas tree node, tablet loadout, Masters assignment: prose hoặc heading + bullet group, KHÔNG bảng nhiều cột (site stack-column UI vỡ layout). Tham khảo CLAUDE.md "Hạn chế dùng table".
3. **Why-first cho mọi choice** — Mỗi tablet / atlas node / map choice kèm 1 câu lý do (mechanic interaction). Không "dùng Freedom of Faith" mà "dùng Freedom of Faith vì double số ritual altar trong map → nhiều favour hơn → nhiều reroll hơn = nhiều lần gamble belt hơn".
4. **Số có timestamp** — Profit, drop rate, tablet cost: kèm "tính đến YYYY-MM-DD" hoặc reference frontmatter `updated:`. Không có timestamp = invalidate trong 1 tuần.
5. **Game term linking** — Mọi tablet / waystone / atlas keystone / fragment / unique / currency / Master → `:wiki-link{url="https://www.poe2wiki.net/wiki/Exact_Name"}`.

   ```md
   Tablet loadout: :wiki-link{url="https://www.poe2wiki.net/wiki/Freedom_of_Faith"} +
   :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"}.
   Drop chính: :wiki-link{url="https://www.poe2wiki.net/wiki/Divine_Orb"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"}.
   ```

6. **Rewrite fresh, đừng vá doc cũ — vault luôn ở thì hiện tại** — Khi update strategy đã tồn tại: viết LẠI nguyên bài theo meta/giá **hiện tại**, KHÔNG vá lẻ rồi chừa số/tablet/atlas đã outdate "để giữ lịch sử". Profit/giá stale thay thẳng (kèm timestamp mới); strategy đã chết theo patch (tablet removed, mod nerfed, content disabled) thì gỡ hẳn hoặc xoá doc, không archive trong body. Lịch sử chỉ ở `git log` — doc hiện tại chỉ chứa trạng thái đúng-bây-giờ. Bài xong phải đứng được như sinh ra hôm nay. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".

## Maxroll patterns we adopt

- **Metric box trước intro** — Difficulty / Investment / Profitability / Management. Lấy từ frontmatter (`strategy_tier`, `investment_tier`, `confidence_level`); profit/hour state inline có timestamp (market-volatile, KHÔNG phải frontmatter field) — restate inline ở intro, không tạo box mới.
- **Setup-first structure** — reader đọc Setup section là biết exact items + atlas tree để chạy lần đầu, không cần đọc Gameplay.
- **Why-first concise** — mỗi map/tablet/atlas node 1 câu why.
- **Concrete numbers** — input cost, output value, profit/map, time/map.
- **Pro Tip inline bolded** — `**Pro Tip:** ...` thay vì callout box.

## Section structure (12 H2 + Relationships theo thứ tự)

1. **(Intro paragraph, không heading)** — 2-3 câu hook. Câu 1: strategy là gì + tier (S/A/B). Câu 2: core mechanism (content nào farm, drop nào make money). Câu 3: ai nên chạy (early league / endgame / specific build).
2. **## Strategy Overview** — 1 đoạn prose: tại sao strategy này làm ra tiền trong meta hiện tại. Mention key tablets/fragments/atlas nodes unlock profit + lý do.
3. **## Setup**
   - **### Atlas Passive Tree** — Cluster chính path + mechanic subtree (Ritual/Breach tree) chọn node nào + Masters of the Atlas (Jado, Hilda...) assignment + lý do. Link tới atlas tree builder nếu có. Prose, không list 30 node bullet.
   - **### Tablets & Map Device** — Precursor tablet loadout (gồm unique tablet) + lý do từng cái. Số tablet slot theo số modifier waystone (6-mod = 3 slot); City biome map + notable Industrial Improvements mở slot 4. Tower = nguồn rớt tablet, không phải nơi cắm. Map device fragment cho pinnacle / Ocean Exploring nếu có. `:wiki-link` mỗi tablet.
   - **### Waystone & Map Choice** — Waystone tier + biome (city/grass/forest/desert) + lý do (layout, density, spawn rate). `:wiki-link` cho map name.
   - **### Build Requirements** — Min DPS, clear speed, survivability ngưỡng. HC viable không? League-start budget character chạy được không?
4. **## Gameplay** — Step-by-step trong map: activate gì trước, clear order, what to pick up, when to leave. Prose 1-2 đoạn, không bullet 20 step.
5. **## Loot Breakdown & Economic Analysis** — Drop expected: currency / unique / fragment. Math: input cost X ex / map → output Y div / map → profit Z. **Số phải có timestamp**.
6. **## Market Context & Risk** — Price trend (rising/falling), saturation risk, patch nerf risk, league phase (early/mid/late). Honest về sustainability.
7. **## Failure Modes** — Bắt buộc ≥ 3 scenario strategy gãy (market saturation, sustain failure, build floor, patch nerf, time investment). Prose 1-2 đoạn. Xem CLAUDE.md "Failure Mode / Devil's Advocate" — note thiếu section này = chưa xong.
8. **## Profit Optimization** — Advanced tip: atlas node upgrade path từ B → A tier, tablet roll min-max, bulk vs individual sale, fleet use. Prose.
9. **## Alternatives & Variations** — Strategy cạnh tranh + when to switch. Variant strategy (vd add Delirium overlay).
10. **## Data & Testing** — Evidence cho profit claim. Personal sample size, source link (poe2scout, /trade), market data recency.
11. **## Summary** — 3-5 bullet recap (chỗ duy nhất bullet thoải mái).
12. **## Quick Reference Card** — Setup cost / Profit / Time / Waystone / Atlas nodes / Masters / Tablets / Fragments. Đây là chỗ definition list được khuyến khích.
13. **## Changelog** — `### YYYY-MM-DD` reverse-chrono.
14. **## Relationships** — cross-link nội bộ, mỗi dòng `- **predicate** [Title](/route) — reason`.

## Pre-write checklist

1. **Target file path** xác định (đã tồn tại).
2. **Frontmatter values** read: `strategy_tier`, `investment_tier`, `league`, `patch`, `league_phase`, `confidence_level`. Strategy tier B mà profit claim 50div/hour = inconsistent → flag user.
3. **Số thật**:
   - Currency/item price → `/poe2scout` (nguồn giá duy nhất: price + volume + history) hoặc user fetch.
   - Bulk / live listing → `/trade` qua playwriter page-context fetch (KHÔNG curl direct GGG API per CLAUDE.md).
   - Personal testing → user cung cấp sample size + map count.
   - Số chưa có → placeholder `<!-- TODO: profit data, run /trade -->`, flag.
4. **Reference farming doc** — đọc 1-2 file `content/farming/` để align voice + spot existing `:wiki-link` usage.

## Steps

### 1. Resolve target file
Path → `test -f`. Topic → `ls content/farming/*<slug>*.md`. Không tìm thấy → REFUSE + `/vault.new`.

**Success criteria**: File path absolute, frontmatter readable.

### 2. Đọc context
Read target file. Đọc 1-2 farming doc khác. Đọc atlas tree mechanic doc nếu link.

**Success criteria**: Nắm tier, content type, key tablets.

### 3. Source data
- Currency/item price → `/poe2scout` (price + volume + Δ7d + history) hoặc user cung cấp manually.
- Trade bulk / live listing → user run `/trade <query>`.
- Personal experience → ask user sample size.

**Success criteria**: Profit claim có ≥1 evidence với timestamp.

### 4. Outline 11 section
Draft 1 dòng/section. **Human checkpoint** — user duyệt outline.

**Success criteria**: User approve.

### 5. Viết prose
Follow Voice rules + Section structure. Atlas tree section: prose + image link nếu có, KHÔNG list 50 node.

**Rules** (CẤM):
- "theo Fubgun", "doc này tổng hợp", "tóm lại"
- Số không có timestamp
- Bảng (table) cho atlas tree / tablet list (site stack-column vỡ layout)
- Game term không dùng `:wiki-link` ở lần đầu

**Success criteria**: 11 H2 đã viết, mọi số có timestamp, mọi game term dùng `:wiki-link`.

### 6. Validate
`bun run validate --path <file>`.

**Success criteria**: Exit 0.

### 7. Summary cho user
Báo file path, H2 status, `:wiki-link` count, validate result. Gợi ý next: `/poe2scout` để fact-check số giá, `/heal-links` cho relationships, commit.

**Success criteria**: User biết next step.
