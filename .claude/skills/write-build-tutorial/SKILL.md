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

Skill này viết tutorial build guide trong `content/builds/<class>/` theo **cấu trúc linear** mượn từ maxroll, NHƯNG **section right-sized theo build** (required core + optional menu, không ép bộ section cố định — xem "Section structure") và giọng văn giữ project rule: **tiếng Việt, owner-voice, prose-first, wiki-link cho mọi game term**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/builds/witch/spectre-necromancer.md`) → polish / rewrite full content giữ frontmatter
  - **Topic** ngắn (vd `spectre necromancer`) → skill glob lookup. File chưa tồn tại → REFUSE, gợi ý chạy `/vault.new` trước. Skill KHÔNG tạo file mới (đó là job của `/vault.new`).

## Goal

File `.md` trong `content/builds/<class>/` với:

- Frontmatter pass `bun run validate --path <file>` zero CRITICAL error.
- **Section right-sized theo build** — required core (Intro + Build Overview + Failure Modes + Verdict) + optional menu, không ép số section cố định (xem "Section structure").
- Mọi game term (skill gem, support, unique, scarab, jewel, flask, monster, atlas keystone, currency, fragment, oil) → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.
- Số thật từ PoB hoặc character file (`content/characters/*.json`), zero fabrication.
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — restate top 7)

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
6. **Natural VN voice — heading sentence-case, không dash-subtitle, không văn dịch** — Heading nói thẳng section nói gì (`## Ascendancy đi theo thứ tự nào`), KHÔNG pattern `X — Y` (dash + subtitle). Câu ngắn, English game term inline, KHÔNG nhồi stat trong ngoặc giữa câu, KHÔNG gạch nối từ Việt (`đàn-đông`), KHÔNG câu dịch gượng ("Vì X đứng được hay không nằm trọn ở Y"). Check đồng âm (vd "đàn đông"≈"đàn ông" → "cả đàn / nguyên đàn"). **Khi match sibling cũ: lấy cấu trúc/format, KHÔNG kế thừa dash-subtitle heading + parenthetical-stat của nó** — nhiều doc cũ trong `content/` vi phạm. **Tra banned-lexicon `templates/voice-lexicon-vi.md` TRƯỚC khi viết**: cấm calque «trục/đòn bẩy/cốt lõi/đáng kể/một cách + adj/trả về/vòng lặp», động từ «dựng/cấp/chèn» cho buff-stat, pivot AI «— đây là lý do/cách», «Hệ quả thực tế:», «Điều này có nghĩa là», mở đoạn «Đây là X» lặp; xưng hô «mình» hoặc câu vô chủ ngữ, không trộn register. Hook `content-voice-lint` bắt phần grep được — sửa sạch warning trước khi báo xong. Áp cho mọi skill `write-*-tutorial`. Ref: memory `feedback_natural_game_native_voice` + CLAUDE.md `## Content Writing Voice`.
7. **Rewrite fresh, đừng vá doc cũ — vault luôn ở thì hiện tại** — Khi input là Path tới doc đã tồn tại: viết LẠI nguyên bài theo patch/meta **hiện tại**, KHÔNG bò vào vá lẻ từng dòng rồi chừa đoạn outdate "để giữ lịch sử", KHÔNG thêm note/comment kiểu nhật ký ("phải viết lại", "chờ datamine", "đổi gì cho build của mình"). Số stale thay thẳng (không chú thích "(cần update)"); gear/skill/passive đã chết theo patch thì gỡ hẳn, không archive trong doc. Lịch sử chỉ sống ở `## Version History` (record gọn một dòng/patch) hoặc `git log` — doc hiện tại chỉ chứa trạng thái đúng-bây-giờ. Bài xong phải đứng được như sinh ra hôm nay. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".

## Maxroll patterns we adopt

- **Linear progression ordering** — khi có nhiều section, sắp top-down để reader đọc một lần là chạy được build. Thứ tự khi có, KHÔNG phải checklist đủ mặt.
- **Why-first concise** — mỗi recommendation kèm 1 câu lý do, không lan man.
- **Concrete numbers everywhere** — không "tốt", phải "tốt vì 7,987 ES + 73% block + EHP 410k".
- **Bold game term lần đầu** — `**Wretched Defiler**` lần đầu, sau plain text. Combine với wiki link.
- **Anchor text descriptive** — `[xem character TheLeader_A](/characters/the-leader-a)`, KHÔNG "click here".
- **Pro Tip inline bolded** thay vì callout box: `**Tip:** …`.
- **Verdict prose + Changelog cuối** cho takeaway + transparency (KHÔNG Summary bullet-recap toàn bài).

## Section structure — required core + optional menu, right-sized

**Right-sizing: build vốn nhiều mặt (skill/tree/gear/defense/leveling) nên thường 8-12 section — nhưng CẮT section không áp dụng, ĐỪNG pad, ĐỪNG lặp.** Section mỏng/độn hoặc trùng section khác = vi phạm. Doc mẫu lean: `warrior/shield-wall-warbringer.md` (8 heading topic-driven, zero filler). Heading: sentence-case tiếng Việt nói thẳng HOẶC giữ tên chuẩn dưới — KHÔNG dash-subtitle `## X — Y`. **Section REQUIRED `## Failure Modes` PHẢI giữ ĐÚNG literal đó** (validator key theo heading text — KHÔNG Vietnamese-ize/thêm subtitle, viết `## Các cách build gãy` sẽ fail validate); tự do heading tiếng Việt CHỈ cho section optional. **POE2 KHÔNG có hệ Pantheon/Bandit → KHÔNG viết section đó** (template đã gỡ; doc cũ còn section này là legacy cần xoá).

### Required core (luôn có)

1. **Intro (không heading)** — 2-3 câu: build là gì + ai chơi sẽ thích · core mechanic + content focus.
2. **## Build Overview** — loop: damage source → scaling vector → defense layer → mobility. "Build này hoạt động ra sao?"
3. **## Failure Modes** — **validator-enforced `required: true`** (template). ≥3 scenario gãy: map mod hostile · one-shot encounter · gear/currency floor · patch sensitivity · league-start viability. Mở đầu gói luôn 2-3 thứ build làm tốt (thay section Strengths & Limitations riêng), rồi 1 đoạn prose per category. Xem **Failure Mode / Devil's Advocate** trong CLAUDE.md.
4. **## Verdict** — prose takeaway 2-4 câu, KHÔNG bullet-recap toàn bài. Build hợp với ai + ngưỡng đầu tư để chạy như paper. Confidence ở frontmatter `confidence_level` — KHÔNG nhãn HIGH/MEDIUM/LOW trong prose.

### Optional (include khi build cần, OMIT cả section khi không — đừng để placeholder rỗng)

- **## Skill Gems & Links** — gần như mọi build cần. Main 6L + aura + movement + utility, mỗi support 1 câu why (interaction, không phải tên). Combo có exclusion → `Exclusion check`.
- **## Ascendancy** — thứ tự ascend + lý do node. Omit nếu đã gói trong Build Overview.
- **## Passive Tree & Mastery** — cluster chính + PoB link, prose giải thích intent.
- **## Stat Priorities & Defenses** (+ `### Performance Ratings` table) — số thật từ PoB; DPS ≥100k / EHP cần PoB link; multi-source → math chain. EHP layer 0.5+: armor → evasion → block → max res → ES/Life → Runic Ward → recovery.
- **## Gear Progression** — `### Gear theo slot` (bullet-per-slot, priority order cap-res-trước, KHÔNG table) + leveling/mapping/endgame/mirror tier. Unique → `:wiki-link`.
- **## Flasks** — omit nếu build chỉ dùng flask thường.
- **## Leveling Notes** — omit nếu trùng Gear Progression > Leveling.
- **## Budget & Investment** — investment curve min → divine breakpoint → mirror tier.
- **## Resources** — PoB link; **OMIT cả section nếu build chưa materialize — KHÔNG ship "PoB: PENDING"**.
- **## Changelog** — `### YYYY-MM-DD` reverse-chrono.
- **## Relationships** — cross-link nội bộ (predicate snake_case).

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

### 4. Outline section (right-sized)
Chọn từ required core (4) + optional menu — chỉ lấy section build thật sự cần. Draft 1 dòng/section: "Section X cover Y với evidence Z". Build atomic/lean → dừng sớm; build phức tạp → nhiều hơn.

**Human checkpoint** — User duyệt outline trước khi viết prose. Adjust nếu user thay đổi section.

**Success criteria**: User explicit approve; không section nào dự kiến <2 câu nội dung thật.

### 5. Viết prose
Section by section, follow Voice rules + Section structure intent.

**Rules** (CẤM):
- "theo Fubgun", "doc này tổng hợp", "tóm lại", "trong note này"
- League name / patch number trong title hay H1
- Bullet ≥5 dòng liền (chuyển prose)
- Số fabricate (mọi số phải từ PoB hoặc character file)

**Success criteria**: required core + đúng các optional section build cần — mỗi section ≥2 câu nội dung thật, không section độn; không TODO placeholder; KHÔNG Pantheon & Bandits.

### 6. Validate
`bun run validate --path <file>` → zero CRITICAL error. Warning OK nhưng show user.

**Success criteria**: Validate exit 0.

### 7. Summary cho user
Báo: file path, section status (required core + optional đã dùng), `:wiki-link` count, validate result, gợi ý next step (review prose / `/heal-links` cho relationships frontmatter / commit).

**Success criteria**: User biết next step rõ ràng.
