---
name: write-character-progress
description: Viết hoặc update character progress note trong content/characters/ — ghi lại snapshot, goal, gear, log theo phong cách project owner voice (tiếng Việt, prose-first, số thật từ pob.sh fetch). Trigger — "update character progress", "log character", "ghi tiến độ character", "write character note", "character tracker", "update progress log".
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
  - Bash(.claude/skills/pob/scripts/pob.sh:*)
when_to_use: Use when user asks to write, update, or polish a character progress note in content/characters/. Triggers — "update character progress", "log character", "ghi tiến độ character X", "write character note", "character tracker", "update progress log", "thêm log session cho character", "snapshot character".
argument-hint: "<topic | content/characters/file.md>"
arguments:
  - topic_or_path
context: inline
---

# write-character-progress — Update character note kiểu live-tracking, giọng owner Việt

Skill này viết hoặc update character progress note trong `content/characters/`. Khác 3 skill kia, đây là **live-tracking note**, không phải tutorial — focus là **snapshot tại thời điểm cụ thể** + **log reverse-chrono** cho mỗi session. Voice giữ project rule: **tiếng Việt, owner voice, prose-first, số thật từ live PoB fetch**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file (vd `content/characters/the-leader-a.md`) → update existing note
  - **Topic** = character name (vd `TheLeader_A`, `the-leader-a`) → glob lookup, hoặc REFUSE + `/vault.new` nếu chưa tồn tại.

## Goal

File `.md` trong `content/characters/` với:

- Frontmatter pass `bun run validate --path <file>` zero CRITICAL.
- Required core 5 section (Snapshot, Current Goals, Priority Actions, Gear Summary, Progress Log) + optional Challenge Tracking — không pad section rỗng.
- **Snapshot section** lấy số live từ `.claude/skills/pob/scripts/pob.sh fetch "<charname>" [--spectre "<name>"]`. Số mặc kệ là current state, KHÔNG static từ frontmatter.
- **Progress Log** cập nhật entry mới ở TOP với format `### YYYY-MM-DD` (reverse-chrono).
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 6)

1. **Owner voice** — đây là note của character mình tự chơi, KHÔNG ai khác chơi character này. CẤM third-person summary: "character này được build với...", "owner đã chọn...". Dùng first-person hoặc direct: *"đã transition từ life sang CI ngày 2026-04-15 vì..."*, *"Wretched Defiler chọn vì scale lightning qua Doryani's"*.
2. **Prose-first** — Goal section, Priority Actions, Progress Log entry đều prose narrative. Bullet chỉ cho (a) gear list (item slot có structure), (b) numbered priority actions (≥3 ngang hàng), (c) defense stat dump trong Snapshot.
3. **Số thật, không cache cũ** — Snapshot section LUÔN fetch live qua `.claude/skills/pob/scripts/pob.sh fetch`. Frontmatter `level:`, `current_progress:`, PoB stats có thể stale → fetch lại trước khi viết. Cite số kèm timestamp ("snapshot 2026-05-10").
4. **Game term linking** — Mọi item / skill / spectre type / unique / currency drop → `:wiki-link{url="https://www.poewiki.net/wiki/Exact_Name"}`.

   ```md
   ## Gear Summary
   Belt: :wiki-link{url="https://www.poewiki.net/wiki/Mageblood"} (key item — 4 magic flask uptime).
   Helm: :wiki-link{url="https://www.poewiki.net/wiki/The_Dark_Monarch"}.

   ## Progress Log
   ### 2026-05-10
   Clear 12 T16 Strand farm Harvest. Drop: :wiki-link{url="https://www.poewiki.net/wiki/Sacred_Orb"} (×2),
   :wiki-link{url="https://www.poewiki.net/wiki/Divine_Orb"} (×3). Total profit ~5 div.
   ```

5. **Title KHÔNG kèm league/patch** — `"TheLeader_A — Progress Tracker"` đúng. `"TheLeader_A — Mirage 3.28 Tracker"` SAI (site auto-concat từ `league_name`/`patch`).
6. **Snapshot luôn ở thì hiện tại, đừng vá** — Các section trạng thái (Snapshot stats, Gear Summary, Goal, bottleneck) phải viết LẠI thành con số/trang bị **hiện tại** mỗi lần update, KHÔNG để số cũ rồi chú thích "(đã đổi)" bên cạnh, KHÔNG chừa gear cũ "để so sánh". Chỉ `## Progress Log` mới mang tính thời gian (reverse-chrono session entries) — đó là chỗ DUY NHẤT lịch sử sống trong doc; mọi section khác là trạng thái đúng-bây-giờ. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".
7. **Banned-lexicon — tra `templates/voice-lexicon-vi.md` TRƯỚC khi viết** — cấm calque «trục/đòn bẩy/cốt lõi/đáng kể/một cách + adj/trả về/vòng lặp», động từ «dựng/cấp/chèn» cho buff-stat, pivot AI «— đây là lý do/cách», «Hệ quả thực tế:», «Điều này có nghĩa là»; xưng hô «mình» hoặc câu vô chủ ngữ. Hook `content-voice-lint` bắt phần grep được — sửa sạch warning trước khi báo xong.

## Maxroll patterns we don't apply here

Character note **không phải tutorial cho người khác đọc** — nó là live tracking. Nên **không có**:

- Build Overview / Skill Gems / Ascendancy section (nếu cần, link tới build doc trong `content/builds/`).
- Strengths/Limitations dạng tutorial.
- Summary cuối / Changelog.

Replace bằng character-specific:

- Snapshot (live PoB stats)
- Goals (current focus)
- Priority Actions (next session todo)
- Gear Summary (current items + bottlenecks)
- Challenge Tracking (nếu character đang chase 40/40 hoặc challenge specific — optional section)
- Progress Log (reverse-chrono session log)

## Section structure — required core + optional

(Required core 5: Snapshot · Current Goals · Priority Actions · Gear Summary · Progress Log. Optional: Challenge Tracking. CẮT section không dùng, ĐỪNG pad. Heading literal cho vault-keeper match.)

1. **(Intro paragraph, không heading)** — 1-2 câu. Câu 1: class/ascendancy/level + current stage (campaign / mapping / endgame / 40-40 push). Câu 2 (optional): primary goal hiện tại + ETA nếu có.
2. **## Snapshot** — Defenses + offense tại thời điểm fetch. Heading literal là `## Snapshot` (không parenthetical date) để vault-keeper match. Note timestamp ở dòng đầu section: `*Live fetch: YYYY-MM-DD*` (italic, dưới heading). Format khuyến khích bullet stat-dump (đây là exception cho prose-first vì purely data points):
   - **ES / Life:** ...
   - **Armour / Evasion / ES (def):** ...
   - **Block / Spell Block:** ...
   - **Resistances:** Fire / Cold / Lightning / Chaos
   - **Max Hit per type** (nếu có)
   - **Main DPS** + spectre/totem multiplier nếu summon build
   - **Charges max** (Endurance / Frenzy / Power)
   - **Movement Speed**
3. **## Current Goals** — Prose 1 đoạn. 2-5 goal cụ thể, actionable, priority order. Khi xong cập nhật section. North star cho mỗi session.
4. **## Priority Actions** — Numbered list (1, 2, 3...) các bước immediate, mỗi item completable trong 1 session. Mỗi item kèm 1 câu why hoặc expected outcome.
5. **## Gear Summary** — Current items + upgrade bottleneck. **Biggest upgrade path** ở cuối section (1 câu prose). Item → `:wiki-link`. Không full item dump — focus bottleneck.
6. **## Progress Log** — Reverse-chrono. `### YYYY-MM-DD` entries. Mỗi entry 2-4 câu prose narrative session ("hôm nay clear 10 T16 Strand farm Harvest, drop được Sacred Orb, total profit ~3 div"), KHÔNG bullet 5 dòng "killed X, killed Y, killed Z".

**Optional H2** (KHÔNG required, vault-keeper không enforce):

- **## Challenge Tracking** — chỉ thêm nếu character chase 40/40 hoặc challenge bundle cụ thể. Status N/40, phase plan reference, completed checklist. Link tới `content/characters/<char>-challenges.md` nếu có file riêng. Đặt giữa Gear Summary và Progress Log.

## Pre-write checklist

1. **Target file path** xác định.
2. **Character name chính xác** từ frontmatter `character_name:` — phải match exact với in-game name (case-sensitive cho pob.sh).
3. **Spectre type** (nếu summon build) — pob.sh cần `--spectre "<Type>"` để tính minion DPS đúng. Xem CLAUDE.md cho character hiện tại (vd TheLeader_A → Wretched Defiler).
4. **Mode**: full update (rewrite tất cả 6 section) hay log-only (chỉ append entry vào Progress Log)? Hỏi user nếu mơ hồ.

## Steps

### 1. Resolve target file
Path → `test -f`. Topic → `ls content/characters/*<slug>*.md`. Không tìm thấy → REFUSE + `/vault.new`.

**Success criteria**: File path absolute, frontmatter readable.

### 2. Determine mode
Hỏi user (hoặc infer từ `$topic_or_path` syntax):
- **Full update** — rewrite all 6 section, refetch live data.
- **Log-only** — append `### YYYY-MM-DD` entry vào Progress Log, không touch các section khác.
- **Snapshot-only** — refresh Snapshot section, không touch logs/goals.

**Success criteria**: Mode rõ ràng.

### 3. Live PoB fetch (full update / snapshot-only)
Run `.claude/skills/pob/scripts/pob.sh fetch "<character_name>" [--spectre "<spectre>"]`. Output → `content/characters/<slug>.json` + `<slug>.summary.json` + `<slug>-pob.txt`. Dùng `jq` để extract số cho Snapshot section.

**Success criteria**: JSON file timestamp = today, ≥10 stat fields readable.

### 4. Outline (full update only)
Draft 1 dòng/section nói updates gì. **Human checkpoint** — user duyệt nếu rewrite full.

**Success criteria**: Mode `full update` → user approve outline. Mode `log-only` / `snapshot-only` → skip step.

### 5. Viết / append prose
- **Full update**: viết required core 5 section (+ Challenge Tracking nếu áp dụng) theo Section structure.
- **Log-only**: prepend new `### YYYY-MM-DD` entry ở TOP của Progress Log section. Cập nhật `updated:` frontmatter field. Cập nhật `level:`, `current_progress:` nếu user mention thay đổi.
- **Snapshot-only**: replace Snapshot section block, cập nhật `updated:` frontmatter.

**Rules** (CẤM):
- "character này được build", "owner chose" — third-person summary
- Bullet 5+ dòng cho Progress Log entry (chuyển prose narrative)
- Số stale (Snapshot không live fetch trong session này = stale)

**Success criteria**: File saved, frontmatter `updated:` = today.

### 6. Validate
`bun run validate --path <file>`.

**Success criteria**: Exit 0.

### 7. Summary cho user
File path, mode (full/log/snapshot), section đã touch, `:wiki-link` count, validate result. Next: commit, hoặc continue session log later.

**Success criteria**: User biết next step.
