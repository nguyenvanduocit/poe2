---
name: write-mechanic-tutorial
description: Viết hoặc polish mechanic guide trong content/guides/ (flat) hoặc content/crafting/ theo phong cách maxroll-flavored + project owner voice (tiếng Việt, prose-first, ví dụ từ character thật). Trigger — "viết mechanic doc", "giải thích cơ chế", "tutorial mechanic", "write mechanic guide", "doc về <league/skill/item>", "polish mechanic doc".
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
when_to_use: Use when user asks to write, draft, or polish a mechanic guide in content/guides/ (flat) or content/crafting/. Triggers — "viết mechanic doc", "giải thích cơ chế X", "tutorial mechanic", "write mechanic guide", "doc về Mirage/Breach/Harvest/Spectre/Doryani's...", "polish mechanic doc", "explain mechanic".
argument-hint: "<topic | content/guides/file.md>"
arguments:
  - topic_or_path
context: inline
---

# write-mechanic-tutorial — Viết mechanic guide kiểu maxroll, giọng owner Việt

Skill này viết tutorial mechanic guide trong `content/guides/` (flat — mechanic doc sống chung guides, phân loại bằng frontmatter `sub_class`) hoặc `content/crafting/` (top-level, ngang hàng `farming/`) theo **cấu trúc explanation-first** mượn từ maxroll, NHƯNG **section right-sized theo độ phức tạp mechanic** (required core + optional menu, không ép bộ section cố định — xem "Section structure") và giọng giữ project rule: **tiếng Việt, owner voice, prose-first, ground bằng số thật**.

## Inputs

- `$topic_or_path` — Một trong:
  - **Path** đến file đã có (vd `content/guides/return-of-the-ancients.md`) → polish
  - **Topic** ngắn (vd `mirage`, `spectre`, `doryanis prototype`) → skill glob lookup. File chưa có → REFUSE, gợi ý tạo file mới theo template tương ứng trong `templates/` trước.

## Goal

File `.md` trong `content/guides/` (hoặc `content/crafting/` cho craft walkthrough) với:

- Frontmatter khớp schema `content.config.ts` (build `bun run generate` fail nếu sai).
- **Section right-sized theo độ phức tạp mechanic** — required core + optional menu, không ép số section cố định (xem "Section structure").
- Mọi số (damage scaling %, drop rate %, charge gain) **chính xác từ in-game / poewiki**, không guess.
- Mọi game term (skill, support, item, scarab, monster) → `:wiki-link{url="https://www.poewiki.net/wiki/..."}`.
- **Grounding bằng số thật** — ví dụ từ character/PoB hiện tại khi mechanic apply; nếu là economy/crafting/league mechanic không gắn character thì ground bằng số live (market snapshot, empirical run, wiki/poedb).
- 100% voice rule tuân thủ.

## Voice rules (project luôn win — Dreamcore method 13 rules)

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

10. **Closing takeaway** — Doc luôn đóng bằng một section takeaway (đặt tên tự nhiên: verdict, tổng kết, khi nào dùng…). Khi doc có **phán quyết** (mechanic đáng dùng không / buff hay nerf / có lời không) thì kết bằng:
    - (a) Verdict label rõ (BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED) — KHÔNG kèm nhãn confidence HIGH/MEDIUM/LOW (confidence là reasoning gate nội bộ, không viết vào content; xem `../CLAUDE.md ## Confidence`)
    - (b) Open question / next test / "waiting for patch notes [X]" / "needs character test [Y]" nếu còn điểm chưa chốt.

    Vd: "Verdict: EXPLOITABLE. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes sau 2026-06-15." Mechanic thuần giải thích (không có gì để phán) thì takeaway chỉ cần recap gọn — không ép gắn verdict label giả.
11. **Rewrite fresh, đừng vá doc cũ — vault luôn ở thì hiện tại** — Khi input là doc đã tồn tại: viết LẠI nguyên bài theo patch/meta **hiện tại**, KHÔNG bò vào vá lẻ từng dòng rồi chừa đoạn outdate "để giữ lịch sử", KHÔNG nhúng note nhật ký ("phải viết lại", "chờ datamine", "đổi gì cho build của mình"). Số stale thay thẳng (không chú thích "(cần update)"); mechanic/interaction/item đã chết theo patch thì gỡ hẳn, không archive trong body. Lịch sử chỉ sống ở `## Patch Evolution` (record gọn một dòng/patch) hoặc `git log` — doc hiện tại chỉ chứa trạng thái đúng-bây-giờ. Bài xong phải đứng được như sinh ra hôm nay ở patch hiện tại. Ref: CLAUDE.md `## Content Writing Voice` → "Rewrite fresh, đừng vá doc cũ".

12. **Banned-lexicon — tra `templates/voice-lexicon-vi.md` TRƯỚC khi viết** — cấm calque «trục/đòn bẩy/cốt lõi/đáng kể/một cách + adj/trả về/vòng lặp», động từ «dựng/cấp/chèn» cho buff-stat, pivot AI «— đây là lý do/cách», «Hệ quả thực tế:», «Điều này có nghĩa là», mở đoạn «Đây là X» lặp; xưng hô «mình» hoặc câu vô chủ ngữ, không trộn register trong một bài. Hook `content-voice-lint` bắt phần grep được — sửa sạch warning trước khi báo xong.
13. **Kinh tế thông tin — một worked example/số/cơ chế một chỗ, không lặp qua các section** — Một phép tính giải thích đầy đủ đúng MỘT lần ở section sở hữu nó; chỗ sau chỉ nhắc + dẫn ngược. ĐỪNG lặp cùng worked example (vd `200k armour vs hit 5000 → 80%`) ở How It Works rồi lại Math Chain rồi lại Common Mistakes — đó chính là cách doc phình. Dẫn mỗi section bằng cái quyết định nhất, gộp phần phụ. Takeaway thêm phán xét mới, KHÔNG recap thân bài. Caveat (verify in-client / wiki lag) nói một lần. Self-test: worked example/số nào *giải thích* ở >1 chỗ → gộp còn một. Ref: CLAUDE.md `## Content Writing Voice` → "Kinh tế thông tin".

## Maxroll patterns we adopt

- **Explanation-first ordering** — khi doc có nhiều section, sắp theo dòng hiểu: nhận diện → cơ chế → tương tác → tối ưu → sai lầm → tổng kết. Đây là *thứ tự khi có*, KHÔNG phải checklist bắt buộc đủ mặt.
- **Sequential narrative** cho cơ chế phức tạp — encounter → choose → portal → inside → reward. Reader follow visual cue.
- **Concrete numbers** — `4% chance`, `+130 Attributes`. Không "tốt", phải số.
- **Visual anchor** mention nếu có (vd "purple shimmer", "golden volatile").
- **Pro Tip inline bolded** thay vì callout.

## Section structure — required core + optional menu, right-sized

**Nguyên tắc số một: số section khớp độ phức tạp mechanic, KHÔNG ép một bộ cố định.** Mechanic atomic (một crafting trick, một interaction, một gambling play) có thể chỉ 3-4 section; một league system hay skill phức tạp mới cần 8-12. **Thêm một section mỏng/rỗng cho "đủ template" là vi phạm** — ít section dày đặc thắng nhiều section độn. Doc mẫu đúng tầm: `content/crafting/talisman-crafting.md` (heading tiếng Việt theo nội dung, dừng đúng chỗ). Anti-mẫu: doc bị nhồi 11 section khi mechanic chỉ cần 4.

**Heading**: viết **sentence-case tiếng Việt nói thẳng section làm gì** (theo natural-voice rule — vd `## Vì sao Heavy Belt là base đáng chance`, `## Toán break-even`). Tên archetype tiếng Anh (How It Works, Optimization…) bên dưới chỉ là nhãn để tác giả biết *loại* section — heading thật trong doc dùng tiếng Việt tự nhiên. CẤM dash-subtitle `## X — Y`. (English heading vẫn validate nếu thật sự hợp, nhưng default là tiếng Việt — validator chỉ cần H2 hợp lệ, không ép tên cụ thể.)

### Required core (mọi doc đều có — tối thiểu 3)

1. **Intro paragraph (không heading)** — 2-4 câu: cơ chế là gì + visual/tooltip anchor · xuất hiện/đổi ở patch nào · ai/build đang dùng (named hoặc % poe.ninja) · (optional) vì sao quan tâm bây giờ. Câu nào không có nội dung thật thì bỏ, đừng độn cho đủ 4.

2. **Một section giải thích cơ chế** (archetype *How It Works*) — spine của doc. Sequential narrative: trigger → player action → game response → outcome. Visual cue nếu có. Ground bằng số thật. Khi mechanic có ambiguity (skill mới chưa test, interaction chưa verify) → nhúng Hypothesis Trail:
   ```
   Hypothesis: <X có thể work vì reference mechanic Y>
   Evidence: <footage / wiki text / PoB test / forum post>
   Kết luận: <khẳng định; chưa chắc thì nêu test-plan "log Z khi vào league" — KHÔNG nhãn HIGH/MEDIUM/LOW>
   ```

3. **Một section takeaway đóng bài** (archetype *Verdict / Tổng kết*) — thêm phán xét mới (verdict label + open question khi doc có phán quyết, xem Voice rule 10), KHÔNG recap lại thân bài. Mechanic thuần giải thích thì đóng bằng "khi nào dùng / đáng không", không cần verdict label giả.

### Optional menu (chỉ thêm khi mechanic THẬT SỰ cần — mỗi cái có trigger dùng-khi/bỏ-khi)

- **Toán/derivation** (archetype *Math Chain*) — **dùng khi** có scaling đa nguồn hoặc một phép tính không tầm thường (DPS/EHP/break-even/xác suất); **bỏ khi** mechanic thuần định tính. Trình bày line-item dẫn tới con số cuối — damage adder (`- Entity (source) — số` … `**Total — số**`), hoặc cost breakdown, hoặc probability chain — miễn mọi số lớn truy được về derivation đã show. Single source → một câu "Math: single source <X>, không có chain", không cần section.

- **Tương tác chính** (archetype *Key Interactions*) — **dùng khi** mechanic synergy/anti-synergy đáng kể với entity khác; **bỏ khi** standalone. Mỗi interaction kèm cơ chế underlying + 1 dòng `Exclusion check: <none | list>` (xem Interaction Verification Protocol trong CLAUDE.md hoặc agent `interaction-mapper`).
  - **Wording distinction** (sub) — **dùng khi** có modifier nghe giống cái khác dễ nhầm; compare verbatim 2 wording + hệ quả. Mặc định bỏ.

- **Tối ưu** (archetype *Optimization*) — **dùng khi** có lựa chọn đầu tư/thực thi cần ưu tiên (atlas node, scarab, map mod, gear, execution tip); **bỏ khi** không có gì để tối ưu. Kiểm breakpoint trước khi quote uplift % (xem Breakpoint Awareness).

- **Tương tác với league content khác** (archetype *Interactions with Other Content*) — **dùng cho** league mechanic overlay (Delirium/Breach/Harvest…); **bỏ cho** skill/item thường.

- **Cái không hoạt động** (archetype *What Doesn't Work*) — **dùng khi** có kỳ vọng sai phổ biến (mod không proc, support không scale, item không stack); **bỏ khi** không có.

- **Lỗi hay gặp** (archetype *Common Mistakes*) — **dùng khi** có lỗi thật tốn kém; mỗi lỗi "Sai — … Đúng — … Lý do — …" + cost/loss number nếu có; **bỏ khi** trivial.

- **Chi phí & ràng buộc** (archetype *Cost & Restrictions*) — **dùng khi** setup có chi phí currency / exclusion / gating / downside thật (Devil's Advocate của setup *đang work*); **bỏ khi** free + unrestricted.

- **Lịch sử patch** (archetype *Patch Evolution / Version History*) — **dùng khi** lịch sử patch ảnh hưởng tính hợp lệ của advice (đặc biệt mechanic vừa đổi ở patch hiện tại); `### Patch X.Y.Z` reverse-chrono, prose narrative kết nối; **bỏ khi** chưa có lịch sử đáng kể.

- **Custom section** — **tự do tạo** section đặt tên tự nhiên khi nội dung cần một chỗ mà menu trên không phủ (vd `## Farm white base ở đâu hiệu quả`, `## Mô hình xác suất trúng`). Vẫn theo voice rule (sentence-case, no dash-subtitle, prose-first).

- **## Relationships** (cuối doc, nếu có) — cross-link nội bộ; mỗi dòng `- **predicate** [Title](/route) — reason`. Thêm khi có concept liên quan để link.

## Pre-write checklist

1. **Target file path** xác định.
2. **Folder routing đúng** — crafting walkthrough → `content/crafting/`; mọi mechanic guide khác (skill, item, league, class, atlas) → `content/guides/` flat, phân loại bằng frontmatter `sub_class` (skills/items/leagues/classes/atlas). Sai folder → REFUSE.
3. **Số chính xác** — Wiki search cho percent, drop rate, scaling. CLAUDE.md note: KHÔNG curl direct GGG API. Dùng `/poewiki` skill.
4. **Ví dụ từ character thật** — đọc `content/characters/the-leader-a.json` qua `jq` lấy số liên quan. Nếu mechanic không apply tới character hiện tại → flag user, hỏi character ví dụ khác hoặc skip example.

## Steps

### 1. Resolve target file
Path → verify. Topic → glob `content/{guides,crafting}/*<slug>*.md`. Không tìm thấy → REFUSE + gợi ý tạo file mới theo template tương ứng trong `templates/`.

**Success criteria**: File path absolute, đúng subfolder cho mechanic type.

### 2. Đọc context
Read target file. Đọc 1-2 mechanic doc cùng subfolder để align voice.

**Success criteria**: Nắm mechanic type, scope.

### 3. Source data
- Wiki facts → `/poewiki <term>`.
- Personal example → đọc character JSON qua `jq`.

**Success criteria**: ≥3 số chính xác sẵn sàng cite + 1 ví dụ từ character thật.

### 4. Outline section (right-sized)
Chọn section từ required core (3) + optional menu — chỉ lấy section mechanic thật sự cần. Draft 1 dòng/section + heading tiếng Việt dự kiến. Mechanic atomic → dừng ở 3-5 section; league/skill phức tạp → mới nhiều hơn. **Human checkpoint** — user duyệt danh sách section trước khi viết (để bắt sớm nếu thừa/thiếu).

**Success criteria**: User approve; không có section nào dự kiến <2 câu nội dung thật.

### 5. Viết prose
Follow Voice rules + Section structure. Cách hoạt động section dài 2-4 đoạn, không tóm gọn.

**Rules** (CẤM):
- "theo wiki", "Reddit nói", "doc này giải thích"
- Số guess
- Bullet rời rạc cho mechanic explanation (chuyển prose hoặc numbered narrative)
- Game term không dùng `:wiki-link`

**Success criteria**: required core (intro + cơ chế + takeaway) + đúng các optional section mechanic cần — mỗi section ≥2 câu nội dung thật, không section độn; ground bằng ≥1 số thật; mọi game term dùng `:wiki-link`.

### 6a. Self-check (BẮT BUỘC trước Validate)

**Gate 1 — Right-sizing (luôn check):**

- [ ] Mỗi section có ≥2 câu nội dung thật — section nào mỏng hơn thì fold vào section khác hoặc cắt.
- [ ] Không section nào thêm chỉ để "đủ template" — mọi section trả lời một câu hỏi reader thật sự có.
- [ ] Doc dừng đúng chỗ: mechanic atomic không bị kéo dài bằng section thừa.

**Gate 2 — Quality lenses (chỉ check cái APPLY, cái không liên quan thì bỏ qua, không cần ghi):**

- [ ] Atomic scope — doc covers đúng 1 mechanic (không gộp 2-3).
- [ ] Tooltip/visual anchor — Intro có observation về tooltip/visual cue (nếu mechanic có).
- [ ] Hypothesis Trail — chỗ ambiguity có format Hypothesis/Evidence/Kết luận (nếu có ambiguity; mechanic well-documented thì bỏ qua).
- [ ] Derivation — số lớn truy được về line-item/cost/probability chain đã show (nếu có số lớn).
- [ ] Wording distinction — có subsection nếu mechanic có modifier dễ nhầm (mặc định bỏ qua).
- [ ] Named adoption — có ≥1 named build/player HOẶC % poe.ninja (nếu mechanic có người dùng để dẫn).
- [ ] Cost/restriction — setup nêu cost number + restriction (nếu doc đề xuất setup tốn currency/gated).

**Gate 3 — Voice (luôn check):** numeric discipline (hype word kèm số) · entity full-name lần đầu · no filler · no dash-subtitle heading · no meta-summary ("theo wiki/Reddit", "doc này"). Grep nhanh: `mạnh|tốt|đáng kể|powerful|insane` mỗi match có số kèm.

Gate FAIL → loop back step 5 refine. KHÔNG bypass.

**Success criteria**: Gate 1 + Gate 3 pass; Gate 2 các lens apply đã thoả.

### 6b. Validate
Frontmatter khớp schema `content.config.ts` — chạy `bun run generate` để verify.

**Success criteria**: Exit 0.

### 7. Summary cho user
File path, H2 status, `:wiki-link` count, validate result. Next: review prose, fact-check qua `/poewiki`, commit.

**Success criteria**: User biết next step.
