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
- 11 H2 section theo đúng thứ tự (xem "Section structure").
- Frontmatter `strategy_tier` / `investment_tier` / `profit_per_hour` / `confidence_level` re-state ở intro paragraph (không lặp 2 chỗ same wording).
- Mọi số (profit, scarab cost, drop value) **có timestamp** ("tính đến 2026-05-10, Yellow Life Force ~3c/unit") — số không có timestamp = fabricate.
- Mọi scarab / map / atlas keystone / unique / fragment / currency / div card → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 5)

1. **Owner voice** — viết như người tự chạy strategy này, đo profit, rút kinh nghiệm. CẤM "theo Fubgun/Empyrean…", "guide này tổng hợp từ…", "tóm lại". State as own: *"Strand 16 ổn nhất vì layout linear cho Mirage spawn nhanh"* không *"Strand được community recommend vì layout..."*.
2. **Prose-first** — Atlas tree node, scarab list, scarab combo: prose hoặc heading + bullet group, KHÔNG bảng nhiều cột (site stack-column UI vỡ layout). Tham khảo CLAUDE.md "Hạn chế dùng table".
3. **Why-first cho mọi choice** — Mỗi scarab / atlas node / map choice kèm 1 câu lý do (mechanic interaction). Không "dùng Scarab of Doubling" mà "dùng Scarab of Doubling vì duplicate output, scale theo quantity → Eater of Worlds keystone tăng quantity càng nhiều DoS càng valuable".
4. **Số có timestamp** — Profit, drop rate, scarab cost: kèm "tính đến YYYY-MM-DD" hoặc reference frontmatter `updated:`. Không có timestamp = invalidate trong 1 tuần.
5. **Game term linking** — Mọi scarab / map / atlas keystone / fragment / unique / currency / div card → `:wiki-link{url="https://www.poewiki.net/wiki/Exact_Name"}`.

   ```md
   Setup scarab combo: :wiki-link{url="https://www.poewiki.net/wiki/Ambush_Scarab_of_Containment"} +
   :wiki-link{url="https://www.poewiki.net/wiki/Breach_Scarab_of_Resonant_Cascade"}.
   Drop chính: :wiki-link{url="https://www.poewiki.net/wiki/Divine_Orb"}, :wiki-link{url="https://www.poewiki.net/wiki/House_of_Mirrors"}.
   ```

## Maxroll patterns we adopt

- **Metric box trước intro** — Difficulty / Investment / Profitability / Management. Lấy từ frontmatter (`strategy_tier`, `investment_tier`, `profit_per_hour`, `confidence_level`) — restate inline ở intro, không tạo box mới.
- **Setup-first structure** — reader đọc Setup section là biết exact items + atlas tree để chạy lần đầu, không cần đọc Gameplay.
- **Why-first concise** — mỗi map/scarab/atlas node 1 câu why.
- **Concrete numbers** — input cost, output value, profit/map, time/map.
- **Pro Tip inline bolded** — `**Pro Tip:** ...` thay vì callout box.

## Section structure (11 H2 theo thứ tự)

1. **(Intro paragraph, không heading)** — 2-3 câu hook. Câu 1: strategy là gì + tier (S/A/B). Câu 2: core mechanism (content nào farm, drop nào make money). Câu 3: ai nên chạy (early league / endgame / specific build).
2. **## Strategy Overview** — 1 đoạn prose: tại sao strategy này làm ra tiền trong meta hiện tại. Mention key scarabs/fragments unlock profit + lý do.
3. **## Setup**
   - **### Atlas Passive Tree** — Cluster chính path + lý do. Link tới atlas tree builder nếu có. Prose, không list 30 node bullet.
   - **### Scarabs & Map Device** — Scarab combo (4 slot) + lý do từng cái. Map device fragment nếu có. `:wiki-link` mỗi scarab.
   - **### Map Choice** — Map base + lý do (layout, density). `:wiki-link` cho map name.
   - **### Build Requirements** — Min DPS, clear speed, survivability ngưỡng. HC viable không? League-start budget character chạy được không?
4. **## Gameplay** — Step-by-step trong map: activate gì trước, clear order, what to pick up, when to leave. Prose 1-2 đoạn, không bullet 20 step.
5. **## Loot Breakdown & Economic Analysis** — Drop expected: currency / unique / fragment. Math: input cost X chaos / map → output Y div / map → profit Z. **Số phải có timestamp**.
6. **## Market Context & Risk** — Price trend (rising/falling), saturation risk, patch nerf risk, league phase (early/mid/late). Honest về sustainability.
7. **## Profit Optimization** — Advanced tip: atlas node upgrade path từ B → A tier, craft combo, bulk vs individual sale, fleet use. Prose.
8. **## Alternatives & Variations** — Strategy cạnh tranh + when to switch. Variant strategy (vd add Delirium overlay).
9. **## Data & Testing** — Evidence cho profit claim. Personal sample size, source link (poe.ninja, /trade), market data recency.
10. **## Summary** — 3-5 bullet recap (chỗ duy nhất bullet thoải mái).
11. **## Quick Reference Card** — Setup cost / Profit / Time / Map / Atlas nodes / Scarabs / Fragments. Đây là chỗ definition list được khuyến khích.
12. **## Changelog** — `### YYYY-MM-DD` reverse-chrono.

## Pre-write checklist

1. **Target file path** xác định (đã tồn tại).
2. **Frontmatter values** read: `strategy_tier`, `investment_tier`, `profit_per_hour`, `league_phase`, `confidence_level`. Strategy tier B mà profit claim 50div/hour = inconsistent → flag user.
3. **Số thật**:
   - poe.ninja currency price → user fetch hoặc skill gợi ý `/poe-ninja`.
   - Bulk price → `/trade` qua CDP relay (KHÔNG curl direct GGG API per CLAUDE.md).
   - Personal testing → user cung cấp sample size + map count.
   - Số chưa có → placeholder `<!-- TODO: profit data, run /trade -->`, flag.
4. **Reference farming doc** — đọc 1-2 file `content/farming/` để align voice + spot existing `:wiki-link` usage.

## Steps

### 1. Resolve target file
Path → `test -f`. Topic → `ls content/farming/*<slug>*.md`. Không tìm thấy → REFUSE + `/vault.new`.

**Success criteria**: File path absolute, frontmatter readable.

### 2. Đọc context
Read target file. Đọc 1-2 farming doc khác. Đọc atlas tree mechanic doc nếu link.

**Success criteria**: Nắm tier, content type, key scarabs.

### 3. Source data
- Currency price → user run `/poe-ninja` hoặc cung cấp manually.
- Trade bulk → user run `/trade <query>`.
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
- Bảng (table) cho atlas tree / scarab list (site stack-column vỡ layout)
- Game term không dùng `:wiki-link` ở lần đầu

**Success criteria**: 11 H2 đã viết, mọi số có timestamp, mọi game term dùng `:wiki-link`.

### 6. Validate
`bun run validate --path <file>`.

**Success criteria**: Exit 0.

### 7. Summary cho user
Báo file path, H2 status, `:wiki-link` count, validate result. Gợi ý next: `/poe-ninja` để fact-check số, `/heal-links` cho relationships, commit.

**Success criteria**: User biết next step.
