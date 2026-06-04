---
name: write-build-tutorial
description: Viết hoặc polish build guide trong content/builds/{class}/ theo phong cách maxroll-flavored + project owner voice (tiếng Việt, prose-first, wiki-link cho mọi game term). Trigger — "viết build guide", "draft build doc", "tutorial build", "write build guide", "build guide cho <ascendancy>", "polish build guide", "build doc <skill>".
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
when_to_use: Use when user asks to write, draft, or polish a build guide in content/builds/. Triggers — "viết build guide", "viết tutorial cho build X", "draft build", "write build guide", "build doc cho ascendancy Y", "polish build guide", "build guide spectre/RF/CoC...".
argument-hint: "<topic | content/builds/.../file.md>"
arguments:
  - topic_or_path
context: inline
---

# write-build-tutorial — Viết build guide kiểu maxroll, giọng owner Việt

Skill này viết tutorial build guide trong `content/builds/<class>/` theo **cấu trúc linear** mượn từ maxroll (Setup → Skills → Ascendancy → Passives → Stats → Gearing → Leveling → Budget → Limitations → Summary), NHƯNG giọng văn giữ nguyên project rule: **tiếng Việt, owner-voice, prose-first, wiki-link cho mọi game term**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/builds/witch/spectre-necromancer.md`) → polish / rewrite full content giữ frontmatter
  - **Topic** ngắn (vd `spectre necromancer`) → skill glob lookup. File chưa tồn tại → REFUSE, gợi ý chạy `/vault.new` trước. Skill KHÔNG tạo file mới (đó là job của `/vault.new`).

## Goal

File `.md` trong `content/builds/<class>/` với:

- Frontmatter pass `bun run validate --path <file>` zero CRITICAL error.
- 13 H2 section theo đúng thứ tự (xem "Section structure" bên dưới).
- Mọi game term (skill gem, support, unique, scarab, jewel, flask, monster, atlas keystone, currency, fragment, oil) → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.
- Số thật từ PoB hoặc character file (`content/characters/*.json`), zero fabrication.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 6)

1. **Owner voice** — viết như người tự chơi/test/rút kinh nghiệm. **CẤM** cụm meta-summary: "theo Fubgun/Empyrean/Goratha…", "bài này tổng hợp từ…", "trong note này chúng ta sẽ…", "tóm lại". State numbers as own knowledge: *"Wretched Defiler đẩy ~23.2M DPS với setup hiện tại"* không phải *"PoB tính ra Wretched Defiler ~23.2M DPS theo report"*.
2. **Prose-first** — đoạn văn 2-4 câu có flow narrative ("vì… do đó… tuy nhiên…"). Bullet CHỈ khi (a) ≥3 item cùng category enumerative, (b) checklist hành động theo thứ tự, (c) data points rời rạc không có flow tự nhiên. Bullet rời rạc 5+ liền → viết lại prose.
3. **Tutorial voice — giải thích why** — Mỗi gear / skill / passive choice kèm cơ chế và lý do. Không "lấy node X" mà "lấy node X vì nó scale theo Y, build stack Y qua Z".
4. **Game term linking** — Mọi thứ có tên riêng trong game (skill, support, unique, scarab, jewel, flask, monster, atlas keystone, currency, fragment, oil) → `:wiki-link{url="https://www.poewiki.net/wiki/Exact_Name"}`.

   ```md
   Belt: :wiki-link{url="https://www.poewiki.net/wiki/Mageblood"} cho 4 magic flask uptime.
   Body: :wiki-link{url="https://www.poewiki.net/wiki/Doryani's_Prototype"} ép -200% lightning res.
   Support gem: :wiki-link{url="https://www.poewiki.net/wiki/Awakened_Spell_Echo_Support"} cho extra repeat.
   ```

5. **Title KHÔNG kèm league/patch** — `title:` frontmatter và H1 chỉ concept. Sai: `"Spectre Necromancer — Mirage 3.28"`. Đúng: `"Spectre Necromancer"`. Site auto-concat từ `league_name` + `patch` khi render.
6. **Natural VN voice — heading sentence-case, không dash-subtitle, không văn dịch** — Heading nói thẳng section nói gì (`## Ascendancy đi theo thứ tự nào`), KHÔNG pattern `X — Y` (dash + subtitle). Câu ngắn, English game term inline, KHÔNG nhồi stat trong ngoặc giữa câu, KHÔNG gạch nối từ Việt (`đàn-đông`), KHÔNG câu dịch gượng ("Vì X đứng được hay không nằm trọn ở Y"). Check đồng âm (vd "đàn đông"≈"đàn ông" → "cả đàn / nguyên đàn"). **Khi match sibling cũ: lấy cấu trúc/format, KHÔNG kế thừa dash-subtitle heading + parenthetical-stat của nó** — nhiều doc cũ trong `content/` vi phạm. Áp cho mọi skill `write-*-tutorial`. Ref: memory `feedback_natural_game_native_voice` + CLAUDE.md `## Content Writing Voice`.

## Maxroll patterns we adopt

- **Linear progression structure** — section order phục vụ reader đọc top-down một lần là chạy được build.
- **Why-first concise** — mỗi recommendation kèm 1 câu lý do, không lan man.
- **Concrete numbers everywhere** — không "tốt", phải "tốt vì 7,987 ES + 73% block + EHP 410k".
- **Bold game term lần đầu** — `**Wretched Defiler**` lần đầu, sau plain text. Combine với wiki link.
- **Anchor text descriptive** — `[xem character TheLeader_A](/characters/the-leader-a)`, KHÔNG "click here".
- **Pro Tip inline bolded** thay vì callout box: `**Tip:** …`.
- **Summary cuối + Changelog cuối** cho transparency.

## Section structure (13 H2 theo thứ tự)

1. **(Intro paragraph, không heading)** — 2-3 câu hook. Câu 1: build là gì + ai chơi sẽ thích. Câu 2-3: core mechanic + content focus (mapping/bossing/all-content).
2. **## Build Overview** — 1-2 đoạn prose. Giải thích loop: damage source → scaling vector → defense layer → mobility. Trả lời "build này hoạt động ra sao?"
3. **## Skill Gems & Links** — Main 6L + aura + movement + utility. Mỗi support kèm 1 câu why (interaction, không phải tên).
4. **## Ascendancy** — Thứ tự lab (Lab 1 → Lab 2 → Lab 3 → Uber) + lý do từng node. Prose; bullet chỉ khi liệt kê 4 node độc lập.
5. **## Passive Tree & Mastery** — Cluster chính + lý do. Link PoB cho allocation chính xác, prose giải thích intent ("path qua Whispers of Doom để dual curse").
6. **## Stat Priorities & Defenses** — Số thật: ES/Life, Armour/Evasion, Block %, Spell Block %, EHP, Resistances cap, Max Hit per damage type, Charges max. Lấy từ PoB hoặc character file. Đây là CHỖ bullet được khuyến khích vì purely data points.
7. **## Gear Progression** — H3 sub: `### Leveling` / `### Early Mapping` / `### Endgame` / `### Mirror Tier (BiS)`. Mỗi tier: item base + key mod + lý do. Unique → `:wiki-link`.
8. **## Flasks** — 5 flask + lý do. Mageblood-build: note mod cần roll. Flask → `:wiki-link`.
9. **## Pantheon & Bandits** — Major/Minor pantheon + lý do; Bandit choice (passive vs Oak/Kraityn/Alira) + lý do.
10. **## Leveling Notes** — Skill transition theo act, gem swap, gear breakpoint. Câu 1 campaign skill chính, câu 2 act mấy swap sang main skill.
11. **## Budget & Investment** — Investment curve: min chaos để chạy → divine breakpoint → mirror tier. Diminishing returns kicks in ở đâu.
12. **## Strengths & Limitations** — Honest. 2-3 thứ build làm tốt + 2-3 thứ struggle (vd reflect, no-leech map, specific boss).
13. **## Summary** — 3-5 bullet recap. Đây là chỗ DUY NHẤT bullet thoải mái trong build guide.
14. **## Changelog** — `### YYYY-MM-DD` reverse-chrono entries.

## Pre-write checklist

Trước khi viết, đảm bảo có:

1. **Target file path** xác định (đã tồn tại — skill KHÔNG tạo file).
2. **Frontmatter values** từ file: class, ascendancy, primary_skill, budget_tier — biết để align nội dung.
3. **Số thật**:
   - Build dựa trên character `content/characters/*.json` → đọc qua `jq`.
   - Build dựa trên PoB external → user cung cấp PoB code/URL → `/pob` analyze.
   - Chưa có data → placeholder `<!-- TODO: số thật từ PoB -->`, flag user.
4. **Reference build cùng class** — đọc 1-2 file `content/builds/<class>/` để align voice + spot existing `:wiki-link` usage.

## Steps

### 1. Resolve target file
Parse `$topic_or_path`. Path → verify `test -f`. Topic → `ls content/builds/**/*<slug>*.md`. Không tìm thấy → REFUSE + redirect `/vault.new`.

**Success criteria**: File path absolute, file tồn tại, đọc được frontmatter.

### 2. Đọc context
Read target file. Đọc 1-2 build file cùng class. Nếu link tới character → đọc character JSON.

**Success criteria**: Nắm class, ascendancy, primary_skill, budget_tier, key items/numbers.

### 3. Source data
Frontmatter `pob_link` chưa fetch → run `/pob <pob_link>`. Build trên character realtime → run `.claude/skills/pob/scripts/pob.sh fetch "<charname>" --spectre "<spectre>"` (xem CLAUDE.md).

**Success criteria**: ≥5 số thật sẵn sàng cite (ES, EHP, Block %, Res cap, DPS).

### 4. Outline 13 section
Draft 1 dòng/section: "Section X cover Y với evidence Z". 

**Human checkpoint** — User duyệt outline trước khi viết prose. Adjust nếu user thay đổi section.

**Success criteria**: User explicit approve outline.

### 5. Viết prose
Section by section, follow Voice rules + Section structure intent.

**Rules** (CẤM):
- "theo Fubgun", "doc này tổng hợp", "tóm lại", "trong note này"
- League name / patch number trong title hay H1
- Bullet ≥5 dòng liền (chuyển prose)
- Số fabricate (mọi số phải từ PoB hoặc character file)

**Success criteria**: 13 H2 đã viết, không TODO placeholder trừ khi user explicit chấp nhận.

### 6. Validate
`bun run validate --path <file>` → zero CRITICAL error. Warning OK nhưng show user.

**Success criteria**: Validate exit 0.

### 7. Summary cho user
Báo: file path, 13 H2 status, `:wiki-link` count, validate result, gợi ý next step (review prose / `/heal-links` cho relationships frontmatter / commit).

**Success criteria**: User biết next step rõ ràng.
