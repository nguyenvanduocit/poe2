---
name: write-mechanic-tutorial
description: Viết hoặc polish mechanic guide trong content/mechanics/ (skills, items, leagues, classes, atlas, crafting) theo phong cách maxroll-flavored + project owner voice (tiếng Việt, prose-first, ví dụ từ character thật). Trigger — "viết mechanic doc", "giải thích cơ chế", "tutorial mechanic", "write mechanic guide", "doc về <league/skill/item>", "polish mechanic doc".
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
when_to_use: Use when user asks to write, draft, or polish a mechanic guide in content/mechanics/ (subfolder skills/items/leagues/classes/atlas/crafting). Triggers — "viết mechanic doc", "giải thích cơ chế X", "tutorial mechanic", "write mechanic guide", "doc về Mirage/Breach/Harvest/Spectre/Doryani's...", "polish mechanic doc", "explain mechanic".
argument-hint: "<topic | content/mechanics/.../file.md>"
arguments:
  - topic_or_path
context: inline
---

# write-mechanic-tutorial — Viết mechanic guide kiểu maxroll, giọng owner Việt

Skill này viết tutorial mechanic guide trong `content/mechanics/` (subfolder `skills/`, `items/`, `leagues/`, `classes/`, `atlas/`, `crafting/`) theo **cấu trúc explanation-first** mượn từ maxroll (Basics → Detail → Interactions → Optimization → Common Mistakes → What Doesn't Work → Summary), NHƯNG giọng giữ project rule: **tiếng Việt, owner voice, prose-first, ví dụ với số thật từ character/build hiện tại**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/mechanics/leagues/mirage.md`) → polish
  - **Topic** ngắn (vd `mirage`, `spectre`, `doryanis prototype`) → skill glob lookup. File chưa có → REFUSE, gợi ý `/vault.new` trước.

## Goal

File `.md` trong `content/mechanics/<sub>/` với:

- Frontmatter pass `bun run validate --path <file>` zero CRITICAL.
- 11 H2 section theo đúng thứ tự (xem "Section structure").
- Mọi số (damage scaling %, drop rate %, charge gain) **chính xác từ in-game / poewiki**, không guess.
- Mọi game term (skill, support, item, scarab, monster) → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.
- Ít nhất 1 ví dụ cụ thể với số thật từ `content/characters/*.json` hoặc PoB của character hiện tại.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — Dreamcore method 11 rules)

**Rule 1-5 — owner voice nền tảng (project rule):**

1. **Owner voice** — viết như người đã test cơ chế trên character của mình, không phải summary từ wiki/Reddit. CẤM "theo wiki…", "Reddit thread X nói rằng…", "doc này giải thích…", "tóm lại". State as own: *"Doryani's Prototype áp -200% lightning res character lên enemy → Wretched Defiler nhân DPS lên ~3.5x"* không *"theo cộng đồng thì Doryani's áp neg res lên enemy"*.

2. **Prose-first** — mechanic explanation là chỗ prose mạnh nhất. Bullet chỉ cho enumeration thuần (vd: 5 boss của Pinnacle, 4 type Astrolabe). Step-by-step explanation luôn là numbered list narrative, không bullet rời rạc.

3. **Show với ví dụ thật** — Mọi mechanic giải thích phải kèm ví dụ cụ thể với số thật. Vd "Doryani's effect": ví dụ TheLeader_A — character ES 6,114 + Eyes of the Greatwolf "100% lightning taken as cold" → fire/cold cap 90% bảo vệ khỏi -200% lightning res. Số kéo từ `content/characters/the-leader-a.json`.

4. **Game term linking** — Mọi skill / support / unique / scarab / jewel / flask / monster / atlas keystone / boss / currency → `:wiki-link{url="https://www.poewiki.net/wiki/Exact_Name"}`.

   ```md
   Mechanic Doryani's Prototype: trang bị :wiki-link{url="https://www.poewiki.net/wiki/Doryani's_Prototype"}
   ép enemy lightning res = -200% (xem cơ chế :wiki-link{url="https://www.poewiki.net/wiki/Eyes_of_the_Greatwolf"} bên dưới).
   Mirage league reward gồm :wiki-link{url="https://www.poewiki.net/wiki/Sacred_Orb"} và rare drop
   :wiki-link{url="https://www.poewiki.net/wiki/House_of_Mirrors"}.
   ```

5. **Title KHÔNG kèm league/patch** — concept-only.

**Rule 6-10 — Dreamcore method (5 rule mới, encode 8 trait từ 3 video reference):**

6. **Numeric discipline** — Hype words ("powerful", "strong", "great", "tốt", "mạnh", "đáng kể", "rất nhiều", "huge", "insane", "ridiculous", "extreme") CHỈ được dùng khi kèm số ngay trong cùng câu hoặc câu liền trước đã state số liên quan.
   - Sai: "Doryani's Prototype là item rất mạnh cho minion build"
   - Đúng: "Doryani's Prototype ép enemy lightning res = -200%, đẩy minion DPS lên ~3.5x"
   - Self-check trước Validate step: grep "mạnh|tốt|đáng kể|powerful|strong|insane" trong file, mỗi match xác nhận có số kèm.

7. **Entity naming precision** — Lần xuất hiện đầu của entity dùng FULL NAME ("Aftershock 2 support gem", "Born in the Shadows ascendancy notable", "Archaic Rune of the Titan"). Pronoun "nó / skill này / item đó" chỉ OK khi context rõ trong 1-2 câu trước và không có ambiguity với entity khác trong đoạn. CẤM "support gem đó", "ascendancy node kia" khi entity name explicit available.

8. **Calm measured tone** — Speculation phải hedge explicit:
   - "có thể là vậy"
   - "as of patch 0.5"
   - "footage cho thấy nhưng untested live"
   - "untested nhưng theory cho phép"

   Verbatim/number luôn confident, không hedge. Không mix lẫn 2 register (đừng "Doryani's có thể là rất mạnh" — phải chọn 1: hoặc verified với số, hoặc untested với hedge).

9. **No filler** — Mỗi câu phải carry ≥1 trong: số / comparison / mechanic detail / verdict / cross-link. Câu chỉ "đoạn này nói về X" → DELETE. Câu chỉ "có rất nhiều điều thú vị về Y" → DELETE. Câu chỉ recap câu trước → DELETE.

10. **Verdict-with-open-question close** — Section "## Verdict & Open Questions" (section 10) luôn kết bằng:
    - (a) Verdict label rõ (BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED) — KHÔNG kèm nhãn confidence HIGH/MEDIUM/LOW (confidence là reasoning gate nội bộ, không viết vào content; xem `../CLAUDE.md ## Confidence`)
    - (b) Open question / next test / "waiting for patch notes [X]" / "needs character test [Y]"

    Vd: "Verdict: EXPLOITABLE. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes sau 2026-06-15."
11. **Rewrite fresh, đừng vá doc cũ — vault luôn ở thì hiện tại** — Khi input là doc đã tồn tại: viết LẠI nguyên bài theo patch/meta **hiện tại**, KHÔNG bò vào vá lẻ từng dòng rồi chừa đoạn outdate "để giữ lịch sử", KHÔNG nhúng note nhật ký ("phải viết lại", "chờ datamine", "đổi gì cho build của mình"). Số stale thay thẳng (không chú thích "(cần update)"); mechanic/interaction/item đã chết theo patch thì gỡ hẳn, không archive trong body. Lịch sử chỉ sống ở `## Patch Evolution` (record gọn một dòng/patch) hoặc `git log` — doc hiện tại chỉ chứa trạng thái đúng-bây-giờ. Bài xong phải đứng được như sinh ra hôm nay ở patch hiện tại. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".

## Maxroll patterns we adopt

- **Explanation-first structure** — Basics (visual/recognition) → Mechanic (how it works) → Interactions (synergies) → Optimization → Mistakes → What Doesn't Work → Summary.
- **Sequential narrative** cho cơ chế complex — outdoor encounter → choose wish → portal → inside mirage → break chains → rewards. Reader follow visual cue.
- **Concrete numbers** — `4% chance`, `+130 Attributes`, `100% Currency found inside Mirage area`. Không "tốt", phải số.
- **Visual anchor** mention nếu có (vd "purple shimmer", "golden volatile").
- **Pro Tip inline bolded** thay vì callout.

## Section structure (11 H2 theo thứ tự — Dreamcore method)

**Quan trọng**: Section H2 viết bằng **tiếng Anh** (consistent với legacy + vault-keeper extract literal heading). Prose bên trong section viết bằng tiếng Việt.

1. **(Intro paragraph, không heading)** — 4 câu pattern Dreamcore:
   - Câu 1: cơ chế là gì + visual/tooltip anchor (vd "the Wretched Defiler là spectre cast Conductivity curse on hit, drop từ Foothills tier 16+").
   - Câu 2: xuất hiện patch nào, last changed patch nào (vd "added patch 3.20, buffed patch 3.25 với higher cast rate, unchanged through 3.28").
   - Câu 3: ai/build nào đang dùng (named build hoặc % poe.ninja, vd "TheLeader_A đang chạy live; 29 chars Mirage poe.ninja Spectre Necro setup tương tự").
   - Câu 4 (optional): tại sao quan tâm bây giờ (vd "patch sau có nerf rumor → cần lock decision tuần này").

2. **## How It Works** — Sequential narrative explanation. Trigger → player action → game response → outcome. Visual cue nếu có. Ví dụ cụ thể với số thật. Đây là section dài nhất, 2-4 đoạn prose. **NEW**: khi mechanic có ambiguity (vd skill mới chưa test, interaction chưa verify), nhúng Hypothesis Trail sub-pattern:
   ```
   Hypothesis: <X có thể work vì reference mechanic Y>
   Evidence: <footage / wiki text / PoB test / forum post>
   Kết luận: <conclusion khẳng định; nếu chưa chắc thì nêu test-plan cụ thể ("log Z khi vào league") — KHÔNG dán nhãn HIGH/MEDIUM/LOW>
   ```

3. **## Math Chain** ⭐ NEW — Line-item adders với format CỨNG:
   ```markdown
   - Entity name (source: passive/support/jewel/rune/unique/ascendancy) — số
   - Entity name (source) — số
   ...
   **Total — số**
   ```
   Bắt buộc nếu mechanic có scaling từ multiple sources. Nếu single source → skip section + thay bằng 1 câu note "Math: single source <X>, không có chain". PoB-verified number = HIGH confidence, hand-calc ≥3 multiplier = MEDIUM, theory = LOW (flag).

4. **## Key Interactions** — Synergies + anti-synergies. Mỗi interaction kèm cơ chế underlying, không chỉ "interact tốt với X". **NEW**: khi mechanic có modifier nghe giống cái khác đã tồn tại trong game → thêm Wording Distinction subsection compare verbatim:
   ```markdown
   ### Wording distinction — "X" vs "Y"
   - "<modifier A>" trên <item A> — <giải thích cơ chế A>
   - "<modifier B>" trên <item B> — <giải thích cơ chế B>
   - Hệ quả: <tại sao 2 modifier hoạt động khác nhau>
   ```
   Vd: "no chance to block" (Kongming, base removed) vs "cannot block" (Eternal Apple, hard prevent); "less damage taken" (multiplicative) vs "reduced damage taken" (additive).

5. **## Optimization** — Atlas tree nodes, scarabs, map mods, character-side investments (skill/item/passive), execution tips. Prioritise theo impact. Prose, không bullet 30 node.

6. **## Interactions with Other Content** — Mechanic này khi overlay với league content khác (Delirium, Breach, Harvest...). Vd: Mirage trong Delirium map có gì khác. Section quan trọng cho league mechanic, optional cho skill/item.

7. **## What Doesn't Work** — Anti-pattern. Mech nào không proc, support nào không scale, item nào không stack. Section này maxroll dùng rất explicit.

8. **## Common Mistakes** — Mỗi mistake giải thích **cả mistake lẫn correct approach**. Format: "Sai: ... — Đúng: ... — Lý do: ...". **NEW**: mỗi mistake kèm cost/loss number explicit (vd "lose ~5div nếu craft sai prefix", "lose 30% DPS nếu pick wrong spectre type").

9. **## Cost & Restrictions** ⭐ NEW — Mỗi setup proposed có:
   - **Cost**: currency tier (chaos / div / mirror), gear tier (rare crafted / unique / mirror-tier), support slot loss
   - **Restriction**: cooldown (Xs), exclusion ("Cannot block from base"), gating (boss drop only, league-locked)
   - **Downside**: life/mana/ES penalty nếu có (vd "Zer's impatience -25% life mana ES on use")

   Đây là Devil's Advocate as a section — explicit về chi phí + cản trở thực thi, KHÁC `What Doesn't Work` (anti-pattern technical) vì CR là downside của setup *đang work*.

10. **## Verdict & Open Questions** (rename Summary) — 3-5 bullet recap + verdict label + open question:
    - Verdict label rõ: BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED
    - Open question / next test / "waiting for patch notes [X]" / "needs character test [Y]"
    - Vd: "Verdict: EXPLOITABLE — HIGH confidence. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes sau 2026-06-15."

11. **## Patch Evolution** (rename Version History) — `### Patch X.Y.Z` reverse-chrono, body là prose 1-3 câu narrative kết nối ("3.25 nerf → 3.26 jewel introduced → 3.27 foul → 3.28 core") thay vì bullet rời rạc. Quan trọng để reader biết advice còn valid không.

## Pre-write checklist

1. **Target file path** xác định.
2. **Subfolder routing đúng** — skill gem → `mechanics/skills/`, unique item → `mechanics/items/`, league → `mechanics/leagues/`, class → `mechanics/classes/`, atlas → `mechanics/atlas/`, crafting → `mechanics/crafting/`. Sai folder → REFUSE.
3. **Số chính xác** — Wiki search cho percent, drop rate, scaling. CLAUDE.md note: KHÔNG curl direct GGG API. Dùng `/poewiki` skill.
4. **Ví dụ từ character thật** — đọc `content/characters/the-leader-a.json` qua `jq` lấy số liên quan. Nếu mechanic không apply tới character hiện tại → flag user, hỏi character ví dụ khác hoặc skip example.

## Steps

### 1. Resolve target file
Path → verify. Topic → glob `content/mechanics/**/*<slug>*.md`. Không tìm thấy → REFUSE + `/vault.new`.

**Success criteria**: File path absolute, đúng subfolder cho mechanic type.

### 2. Đọc context
Read target file. Đọc 1-2 mechanic doc cùng subfolder để align voice.

**Success criteria**: Nắm mechanic type, scope.

### 3. Source data
- Wiki facts → `/poewiki <term>`.
- Personal example → đọc character JSON qua `jq`.

**Success criteria**: ≥3 số chính xác sẵn sàng cite + 1 ví dụ từ character thật.

### 4. Outline 11 section
Draft 1 dòng/section (11 H2 mới theo Dreamcore structure). **Human checkpoint** — user duyệt.

**Success criteria**: User approve.

### 5. Viết prose
Follow Voice rules + Section structure. Cách hoạt động section dài 2-4 đoạn, không tóm gọn.

**Rules** (CẤM):
- "theo wiki", "Reddit nói", "doc này giải thích"
- Số guess
- Bullet rời rạc cho mechanic explanation (chuyển prose hoặc numbered narrative)
- Game term không dùng `:wiki-link`

**Success criteria**: 11 H2 viết (skip Cost & Restrictions / Wording Distinction nếu mechanic không qualify), ≥1 ví dụ số thật, ≥1 math chain hoặc explicit single-source note, mọi game term dùng `:wiki-link`.

### 6a. Dreamcore Signature Self-Check (BẮT BUỘC trước Validate)

Trước khi chạy validate, self-check 8 trait Dreamcore. Mỗi line phải tick `[x]` hoặc note explicit lý do skip:

- [ ] Trait 1 — Atomic scope: doc covers exactly 1 mechanic (không 2-3 mechanic gộp)
- [ ] Trait 2 — Verbatim tooltip + visual anchor: Intro có ≥1 observation về tooltip/visual cue
- [ ] Trait 3 — Hypothesis Trail: How It Works có ≥1 trail format (Hypothesis/Evidence/Verdict) HOẶC explicit "no ambiguity, well-documented mechanic"
- [ ] Trait 4 — Math Chain section có line-item entity+source+số + Total HOẶC explicit "single-source no chain" note
- [ ] Trait 5 — Wording Distinction: Key Interactions có Wording Distinction subsection nếu mechanic có modifier similar (skip nếu không có modifier similar)
- [ ] Trait 6 — Patch Evolution: section 11 có ≥2 patch milestones (added → changed → current)
- [ ] Trait 7 — Named adoption proof: Intro câu 3 hoặc Patch Evolution có ≥1 named build/player HOẶC % poe.ninja với số cụ thể
- [ ] Trait 8 — Cost & Restrictions section có cost number + restriction explicit per major setup

Self-check FAIL → loop back step 5 (Viết prose) refine. KHÔNG bypass.

**Success criteria**: 8 trait tick hoặc skip với lý do explicit.

### 6b. Validate
`bun run validate --path <file>`.

**Success criteria**: Exit 0.

### 7. Summary cho user
File path, H2 status, `:wiki-link` count, validate result. Next: review prose, fact-check qua `/poewiki`, commit.

**Success criteria**: User biết next step.
