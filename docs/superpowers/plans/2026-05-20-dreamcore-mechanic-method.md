# Dreamcore Mechanic Method Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Encode 8 trait phong cách Dreamcore (8 video reference) vào agent `mechanic-researcher.md` + skill `write-mechanic-tutorial/SKILL.md` qua targeted markdown patches.

**Architecture:** Two-file edit. Agent file gets 5 Lens → 6 Lens expansion + M001-M006 workflow + Dreamcore Signature Checklist. Skill file gets 9 H2 → 11 H2 expansion + 5 voice rules + Dreamcore Signature Checklist. No code, no tests — markdown edits with re-read verification.

**Tech Stack:** Markdown (CommonMark + frontmatter), no executable code.

**Spec reference:** `docs/superpowers/specs/2026-05-20-dreamcore-mechanic-method-design.md`

---

## File Structure

**Modified files (2):**

- `.claude/agents/mechanic-researcher.md` — Mechanic researcher agent definition (5 Lens → 6 Lens, M001-M005 → M001-M006, add checklist)
- `.claude/skills/write-mechanic-tutorial/SKILL.md` — Write mechanic tutorial skill (9 H2 → 11 H2, add voice rules, add checklist)

**Created files (0):** No new files (user picked inline encoding).

---

## Task 1: Agent — Expand 5 Lens → 6 Lens

**Files:**
- Modify: `.claude/agents/mechanic-researcher.md` (lines 143-173, section `<Investigation_Criteria_Five_Lenses>`)

- [ ] **Step 1: Read current 5-Lens section to confirm exact content**

```bash
sed -n '143,173p' /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
```

Expected: shows `<Investigation_Criteria_Five_Lenses>` block with 5 numbered items.

- [ ] **Step 2: Replace 5-Lens section with 6-Lens section**

Edit the file, replacing the entire `<Investigation_Criteria_Five_Lenses>` tag and content with `<Investigation_Criteria_Six_Lenses>`:

```xml
<Investigation_Criteria_Six_Lenses>

  Mỗi mechanic research phải pass đủ 6 lens (Dreamcore method):

  1. **Verbatim Wiki + Visual/Tooltip Anchor** — Read mechanic page từ mirror. Quote ≥50 char per major stat. Cross-source ≥1 (poe2db / poe.ninja / forum / maxroll / mobalytics). Note version (current patch wording). **NEW**: ghi nhận ≥1 visual/tooltip change observation nếu mechanic mới hoặc vừa thay đổi (vd "tower shield dotted underline tooltip mới", "fortress base armor +41% so với 0.4"). Snapshot base type changes nếu applicable.

  2. **Math Chain Reproducibility (line-item)** — damage formula, stat scaling tag, breakpoint threshold trong format CỨNG:
     ```
     - <Entity name> (<source: passive/support/jewel/rune/unique/ascendancy>) — <số>
     - <Entity name> (<source>) — <số>
     ...
     **Total — <số>**
     ```
     PoB number = HIGH. Hand-calc chain ≥3 multipliers = MEDIUM. Theory only = LOW (flag). Cấm "scale tốt", "đáng kể" mà không kèm chain. Số phải reproducible.

  3. **Interaction Graph + Wording Distinctions (≥6 pairs + ≥1 distinction)** — pattern cũ:
     - **Item × this mechanic** (vd Doryani's Prototype × Eyes of the Greatwolf)
     - **Support × this skill** (vd Spectre × Empower Lv5)
     - **Passive × this mechanic** (vd Mistress of Sacrifice × spectre buff)
     - **Ascendancy × this** (vd Necromancer Bone Barrier × ES recovery)
     - **Jewel × this** (vd Watcher's Eye × aura mod)
     - **Flask × this** (vd Bottled Faith × crit chance)
     - **Curse × this** (vd Conductivity × lightning res floor)
     - **Hidden exclusion** — grep "Cannot" / "cannot be" / "excluded" / "not supported"

     **NEW**: khi mechanic có modifier nghe giống cái khác đã tồn tại → MUST compare verbatim. Ví dụ:
     - "no chance to block" (Kongming) vs "cannot block" (Eternal Apple)
     - "less damage taken" (suppression, multiplicative) vs "reduced damage taken" (Kongming, additive)
     - "damage shift" (not normalized) vs "damage conversion" (normalized)
     Grep mirror cho similar wording, identify ≥1 distinguished modifier nếu mechanic có modifier có thể nhầm.

  4. **Hypothesis-Test Trail** (NEW) — cho mỗi ambiguous interaction, format:
     ```
     Hypothesis: <X có thể work vì reference mechanic Y>
     Evidence: <footage / wiki text / PoB test / forum post>
     Verdict: <HIGH/MEDIUM/LOW> — <conclusion>
     ```
     Cấm fabricate. Untested = LOW + flag explicitly ("waiting for [patch / character test]"). ≥1 hypothesis trail per mechanic doc nếu mechanic mới hoặc có ambiguity. Nếu mechanic không có ambiguity → state explicit "no ambiguity, mechanic well-documented".

  5. **Patch Evolution + Adoption Snapshot** (NEW, merge cũ "Meta Context") — narrate timeline:
     - Patch X.Y added → patch A.B changed → current state
     - ≥1 named build/player adoption proof: "a miracle Valdo farmer patch 3.25 Trickster", "29 chars Mirage poe.ninja Spectre Necro", "Empyrean's Hollow Mask Monk meta tier 1"
     - Sample-of-1 vẫn OK nếu named + linkable.
     - Nếu "no notable adoption", cần evidence cụ thể (vd "0 chars trong top-100 poe.ninja Mirage Spectre Necro", "mobalytics tier list không list mechanic này").

  6. **Cost-Restriction Audit + Devil's Advocate (đúng 3 counter)** — mỗi major setup proposed:
     - **Cost number explicit**: currency (vd Volatile Balor 50% destroy rate), gear tier (vd "Mageblood mirror-tier"), support slot ("Zer's impatience -25% life mana ES + chiếm support link")
     - **Restriction explicit**: cooldown (4s), exclusion (Cannot block from base), gating (boss drop only)
     - **Downside explicit**: life/mana/ES penalty nếu có
     
     Vẫn giữ 3 counter-arguments với evidence:
     - Patch nerf risk
     - Exclusion / gate blocking common use case
     - Better alternative tồn tại (same role, easier acquire)
     - Stale data / pre-patch wording
     - Sample size LOW / community untested

</Investigation_Criteria_Six_Lenses>
```

- [ ] **Step 3: Re-read file to verify replacement**

```bash
sed -n '143,210p' /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
```

Expected: shows `<Investigation_Criteria_Six_Lenses>` block with 6 numbered items.

- [ ] **Step 4: Commit**

Skip commit at this stage — batch commits after all agent edits done (Task 4 commits all agent changes together).

---

## Task 2: Agent — Update Workflow M001-M005 → M001-M006

**Files:**
- Modify: `.claude/agents/mechanic-researcher.md` (lines 101-110, M001-M005 in Phase 2; lines 114-119, evaluator JSON in Phase 3)

- [ ] **Step 1: Replace Phase 2 M001-M005 with M001-M006**

Find this exact block in Phase 2:

```
       - **M001 — Mechanic Definition**: scope mechanic name, version, sub-class, primary wiki page. Output `definition.md`
       - **M002 — Wiki Verbatim**: verbatim mod text + tag + stat lines từ mirror. Cross-source ≥1 ngoài wiki. Note version (vd lvl 84 vs lvl 5 old). Output `verbatim.md`
       - **M003 — Interaction Graph**: ≥6 pairwise interactions với entity khác (item, support, passive, ascendancy, jewel, flask). Đặc biệt hidden exclusion tags (grep "Cannot"). Output `interactions.md`
       - **M004 — Formula/Math PoC**: damage chain, breakpoint, threshold. Reproducible bằng PoB nếu applicable. ≥1 ví dụ số thật. Output `math.md`
       - **M005 — Meta Usage + Devil's Advocate**: % builds running (poe-ninja/mobalytics), tier list standing. 3 counter-arguments với evidence. Output `meta-counter.md`
```

Replace with:

```
       - **M001 — Mechanic Definition**: scope mechanic name, version, sub-class, primary wiki page. Output `definition.md`
       - **M002 — Verbatim Wiki + Visual Anchor** (Lens 1): verbatim mod text + tag + stat lines từ mirror. Cross-source ≥1 ngoài wiki. Note version + ≥1 visual/tooltip change observation nếu applicable. Output `verbatim.md`
       - **M003 — Math Chain** (Lens 2): line-item adders với entity name + source + số per row + Total ở cuối. ≥3 line items hoặc explicit "single-source, không chain" note. Reproducible bằng PoB nếu applicable. Output `math.md`
       - **M004 — Interaction Graph + Wording Distinctions** (Lens 3): ≥6 pairwise interactions + ≥1 hidden exclusion check (grep "Cannot") + ≥1 wording distinction nếu mechanic có modifier similar. Output `interactions.md`
       - **M005 — Hypothesis Trail + Patch Evolution + Adoption** (Lens 4 + 5 combine vì cả hai narrate trail): ≥1 hypothesis trail (hoặc explicit no-ambiguity) + ≥2 patch milestones + ≥1 named adoption proof. Output `trail.md`
       - **M006 — Cost-Restriction Audit + Devil's Advocate** (Lens 6): cost number + restriction explicit per major setup + 3 counter-arguments với evidence. Output `cost-counter.md`
```

- [ ] **Step 2: Replace Phase 3 evaluator JSON block**

Find this exact block in Phase 3:

```
    2. Evaluator JSON per story:
       - M001 pass: sub-class set + primary wiki page path verified
       - M002 pass: verbatim quote ≥50 char + ≥2 sources cross-referenced + version noted
       - M003 pass: ≥6 interaction pairs + ≥1 hidden exclusion check (grep "Cannot" hoặc tag exclusion)
       - M004 pass: formula chain có ≥3 multiplier OR PoB number OR ≥1 numerical example
       - M005 pass: meta data có evidence + đúng 3 counter-arguments
```

Replace with:

```
    2. Evaluator JSON per story:
       - M001 pass: sub-class set + primary wiki page path verified
       - M002 pass: verbatim quote ≥50 char + ≥2 sources cross-referenced + version noted + ≥1 visual/tooltip observation nếu mechanic mới/changed
       - M003 pass: math chain ≥3 line items với entity name + source per row + Total, OR explicit "single-source no chain" note với evidence
       - M004 pass: ≥6 interaction pairs + ≥1 hidden exclusion check + ≥1 wording distinction nếu modifier similar tồn tại
       - M005 pass: ≥1 hypothesis trail (3-component format) hoặc explicit no-ambiguity note + ≥2 patch milestones + ≥1 named adoption proof (hoặc no-adoption với evidence)
       - M006 pass: ≥1 cost number per major setup + ≥1 restriction per major setup + đúng 3 counter-arguments
```

- [ ] **Step 3: Re-read file to verify both replacements**

```bash
sed -n '101,125p' /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
```

Expected: M001-M006 in Phase 2 plan + updated evaluator pass criteria in Phase 3.

- [ ] **Step 4: Commit batched at end of Task 4**

---

## Task 3: Agent — Add Dreamcore Signature Checklist + update Final_Checklist

**Files:**
- Modify: `.claude/agents/mechanic-researcher.md` (lines 282-295, `<Final_Checklist>` block)

- [ ] **Step 1: Replace Final_Checklist block**

Find this exact block:

```
  <Final_Checklist>
    - [ ] Phase 1 brainstorming invoked qua Skill tool? User approved scope?
    - [ ] Phase 2 ultragoal plan written? Sub-class confirmed?
    - [ ] M001-M005 mỗi story có evaluator pass?
    - [ ] M002: verbatim quote ≥50 char + cross-source ≥1?
    - [ ] M003: ≥6 interactions + ≥1 hidden exclusion grep?
    - [ ] M004: formula chain + ≥1 numerical example?
    - [ ] M005: meta data + đúng 3 counter-arguments?
    - [ ] Phase 4: `/write-mechanic-tutorial` invoked? Mechanic guide viết xong ở `content/mechanics/<sub>/<slug>.md`?
    - [ ] Voice owner, không "theo X"?
    - [ ] Confidence labels HIGH/MEDIUM/LOW per claim?
    - [ ] Source list ≥4?
  </Final_Checklist>
```

Replace with:

```
  <Final_Checklist>
    - [ ] Phase 1 brainstorming invoked qua Skill tool? User approved scope?
    - [ ] Phase 2 ultragoal plan written? Sub-class confirmed?
    - [ ] M001-M006 mỗi story có evaluator pass?
    - [ ] M002 (Lens 1): verbatim quote ≥50 char + cross-source ≥1 + visual/tooltip observation?
    - [ ] M003 (Lens 2): math chain ≥3 line items với entity+source+số + Total?
    - [ ] M004 (Lens 3): ≥6 interactions + ≥1 hidden exclusion + ≥1 wording distinction nếu applicable?
    - [ ] M005 (Lens 4+5): hypothesis trail + ≥2 patch milestones + ≥1 named adoption proof?
    - [ ] M006 (Lens 6): cost number + restriction explicit + đúng 3 counter-arguments?
    - [ ] Phase 4: `/write-mechanic-tutorial` invoked? Mechanic guide viết xong ở `content/mechanics/<sub>/<slug>.md`?
    - [ ] Voice owner, không "theo X"?
    - [ ] Confidence labels HIGH/MEDIUM/LOW per claim?
    - [ ] Source list ≥4?
  </Final_Checklist>

  <Dreamcore_Signature_Checklist>
    Self-test 8 dòng trước Phase 4 (map 1-1 với 8 trait Dreamcore):
    
    - [ ] Trait 1 — Atomic scope: doc covers exactly 1 mechanic (không 2-3 mechanic gộp)
    - [ ] Trait 2 — Verbatim tooltip + visual anchor noted (≥1 observation về tooltip/visual change)
    - [ ] Trait 3 — Hypothesis Trail ≥1 trail (hoặc explicit "no ambiguity" với evidence)
    - [ ] Trait 4 — Math Chain ≥1 với line-item entity+source+số + Total
    - [ ] Trait 5 — Wording Distinction ≥1 (nếu mechanic có modifier similar tồn tại)
    - [ ] Trait 6 — Patch Evolution timeline ≥2 milestones (added → changed → current)
    - [ ] Trait 7 — Named adoption proof ≥1 (build/player tên cụ thể HOẶC % poe.ninja với số)
    - [ ] Trait 8 — Cost number + restriction explicit per major setup
  </Dreamcore_Signature_Checklist>
```

- [ ] **Step 2: Re-read file to verify both blocks present**

```bash
grep -A 12 "Dreamcore_Signature_Checklist" /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
```

Expected: shows the new checklist block with 8 trait dòng.

- [ ] **Step 3: Commit batched at end of Task 4**

---

## Task 4: Agent — Update Success_Criteria, Tool_Usage, Investigation summary refs

**Files:**
- Modify: `.claude/agents/mechanic-researcher.md` (lines 38-49 Success_Criteria; lines 175-202 Tool_Usage)

- [ ] **Step 1: Update Success_Criteria block reference từ M001-M005 → M001-M006**

Find:

```
    - Ledger `.omc/ultragoal/mechanic-research-<slug>/` đầy đủ checkpoint (internal scaffold, không user-facing)
```

Insert ABOVE this line (giữa "Source list ≥ 4 sources..." và "Ledger..."):

```
    - Math Chain: ≥3 line items với entity name + source + số per row + Total cuối, hoặc explicit "single-source no chain" note với evidence
    - Hypothesis Trail: ≥1 trail (Hypothesis + Evidence + Verdict) HOẶC explicit no-ambiguity note
    - Patch Evolution: ≥2 patch milestones + ≥1 named adoption proof
    - Wording Distinction: ≥1 compare nếu mechanic có modifier nghe giống cái khác đã tồn tại
```

Final block sẽ là (Success_Criteria, sau line "Source list ≥ 4 sources..."):

```
    - Source list ≥ 4 sources (mix wiki + db + forum + maxroll/mobalytics/community guide)
    - Math Chain: ≥3 line items với entity name + source + số per row + Total cuối, hoặc explicit "single-source no chain" note với evidence
    - Hypothesis Trail: ≥1 trail (Hypothesis + Evidence + Verdict) HOẶC explicit no-ambiguity note
    - Patch Evolution: ≥2 patch milestones + ≥1 named adoption proof
    - Wording Distinction: ≥1 compare nếu mechanic có modifier nghe giống cái khác đã tồn tại
    - Ledger `.omc/ultragoal/mechanic-research-<slug>/` đầy đủ checkpoint (internal scaffold, không user-facing)
```

- [ ] **Step 2: Update Examples section reference (line 268)**

Find:

```
      **Phase 3**: M001 sub-class confirmed. M002 verbatim "Maximum Lightning Resistance is equal to your character's Lightning Resistance" + cross-source poe.ninja item lookup. M003 interactions: × Eyes of the Greatwolf (cold cap save), × Melding of the Flesh (lightning taken as cold), × Wretched Defiler spectre (curse on hit), × Necromancer ascendancy (minion buff stack), × Bottled Faith (boost), × Apocalypse Coil/Mitts (set bonus). M004 math: -200% lightning res character → enemy = -200% via Doryani; combined với 100% cold cap → effective 0 lightning taken nếu Melding active. M005 meta: ~3% Spectre Necro Mirage poe.ninja. 3 counter: (1) gear cost mirror tier, (2) one-mistake-die if Melding/cold cap break, (3) Wretched Defiler nerf risk patch sau.
```

Replace with:

```
      **Phase 3**: M001 sub-class confirmed. M002 verbatim "Maximum Lightning Resistance is equal to your character's Lightning Resistance" + cross-source poe.ninja item lookup + visual anchor (Saint's Hauberk base art unchanged through 3.28). M003 math chain: `-200% Lightning Res (Doryani's) + 0% base (enemy) → enemy -200% lightning res = +200% lightning taken multiplier`; combined với Wrath aura +60% damage as extra lightning → ~3.5x DPS multiplier per Wretched Defiler. M004 interactions: × Eyes of the Greatwolf (100% lightning taken as cold — cold cap save), × Melding of the Flesh (max res floor 90), × Wretched Defiler spectre (curse on hit Conductivity), × Necromancer ascendancy (Mistress of Sacrifice minion buff stack), × Bottled Faith (consecrated ground crit), × Apocalypse Coil/Mitts (set bonus). Wording distinction: "Maximum Lightning Resistance is equal to" (Doryani's, replaces base value) vs "to maximum Lightning Resistance" (additive bonus mods). M005 hypothesis trail: cold cap interaction tested on TheLeader_A character (ES idle 6,114, in-game EHP 194k), Verdict HIGH. Patch evolution: added 1.2 → unchanged through 3.28. Adoption: ~3% Spectre Necro Mirage poe.ninja, "TheLeader_A" character đã chạy live. M006 cost-restriction: Doryani's base ~5div, full Apocalypse 2-set ~30div, Mageblood mirror-tier ~150div total build. Restriction: chết ngay nếu Melding/cold cap break (one-mistake-die). 3 counter: (1) gear cost mirror tier, (2) one-mistake-die fragility, (3) Wretched Defiler nerf risk patch sau.
```

- [ ] **Step 3: Re-read full agent file for sanity check**

```bash
wc -l /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
grep -c "Lens" /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
```

Expected: line count > 300 (file grew), grep "Lens" returns multiple matches including new 6 lenses + checklist references.

- [ ] **Step 4: Commit agent changes**

```bash
cd /Users/firegroup/projects/poeai
git add .claude/agents/mechanic-researcher.md
git commit -m "agent(mechanic): encode 8 Dreamcore trait — 6 lens + M001-M006 + signature checklist

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

Expected: 1 file changed, summary lines updated.

---

## Task 5: Skill — Expand Section structure 9 H2 → 11 H2

**Files:**
- Modify: `.claude/skills/write-mechanic-tutorial/SKILL.md` (lines 66-78, Section structure block)

- [ ] **Step 1: Replace Section structure block**

Find the exact current block (lines 66-78):

```
## Section structure (9 H2 theo thứ tự)

**Quan trọng**: Section H2 viết bằng **tiếng Anh** (consistent với legacy + vault-keeper extract literal heading). Prose bên trong section viết bằng tiếng Việt.

1. **(Intro paragraph, không heading)** — 2-3 câu. Câu 1: cơ chế là gì + xuất hiện ở đâu trong game. Câu 2: ai cần hiểu (build dùng / farming strategy reliant / boss encounter). Câu 3 (optional): nếu là league mechanic → version/patch ra mắt.
2. **## How It Works** — Sequential narrative explanation. Trigger → player action → game response → outcome. Visual cue nếu có. Ví dụ cụ thể với số thật. Đây là section dài nhất, 2-4 đoạn prose.
3. **## Key Interactions** — Synergies (cái gì làm nó mạnh hơn) + anti-synergies (cái gì break). Mỗi interaction kèm cơ chế underlying, không chỉ "interact tốt với X".
4. **## Optimization** — Atlas tree nodes, scarabs, map mods, character-side investments (skill/item/passive), execution tips. Prioritise theo impact. Prose, không bullet 30 node.
5. **## Interactions with Other Content** — Mechanic này khi overlay với league content khác (Delirium, Breach, Harvest...). Vd: Mirage trong Delirium map có gì khác. Section quan trọng cho league mechanic, optional cho skill/item.
6. **## What Doesn't Work** — Anti-pattern. Mech nào không proc, support nào không scale, item nào không stack. Section này maxroll dùng để rất explicit.
7. **## Common Mistakes** — Mỗi mistake giải thích **cả mistake lẫn correct approach**. Format: "Sai: ... — Đúng: ... — Lý do: ...". Prose hoặc numbered list.
8. **## Summary** — 3-5 bullet recap (chỗ duy nhất bullet thoải mái).
9. **## Version History** — `### Patch X.Y.Z` reverse-chrono. Quan trọng để reader biết advice còn valid không.
```

Replace with:

```
## Section structure (11 H2 theo thứ tự — Dreamcore method)

**Quan trọng**: Section H2 viết bằng **tiếng Anh** (consistent với legacy + vault-keeper extract literal heading). Prose bên trong section viết bằng tiếng Việt.

1. **(Intro paragraph, không heading)** — 4 câu pattern Dreamcore:
   - Câu 1: cơ chế là gì + visual/tooltip anchor (vd "the Wretched Defiler là spectre cast Conductivity curse on hit, drop từ Foothills tier 16+").
   - Câu 2: xuất hiện patch nào, last changed patch nào (vd "added patch 3.20, buffed patch 3.25 với higher cast rate, unchanged through 3.28").
   - Câu 3: ai/build nào đang dùng (named build hoặc % poe.ninja, vd "TheLeader_A đang chạy live; 29 chars Mirage poe.ninja Spectre Necro setup tương tự").
   - Câu 4 (optional): tại sao quan tâm bây giờ (vd "patch sau có nerf rumor → cần lock decision tuần này").

2. **## How It Works** — Sequential narrative explanation. Trigger → player action → game response → outcome. Visual cue nếu có. Ví dụ cụ thể với số thật. Đây là section dài nhất, 2-4 đoạn prose. **NEW**: khi mechanic có ambiguity (vd skill mới chưa test), nhúng Hypothesis Trail sub-pattern:
   ```
   Hypothesis: <X có thể work vì reference mechanic Y>
   Evidence: <footage / wiki text / PoB test / forum post>
   Verdict: <HIGH/MEDIUM/LOW> — <conclusion>
   ```

3. **## Math Chain** ⭐ NEW — Line-item adders với format CỨNG:
   ```markdown
   - Entity name (source: passive/support/jewel/rune/unique/ascendancy) — số
   - Entity name (source) — số
   ...
   **Total — số**
   ```
   Bắt buộc nếu mechanic có scaling từ multiple sources. Nếu single source → skip section + thay bằng 1 câu note "Math: single source <X>, không có chain". PoB-verified number = HIGH confidence, hand-calc = MEDIUM, theory = LOW (flag).

4. **## Key Interactions** — Synergies + anti-synergies. Mỗi interaction kèm cơ chế underlying, không chỉ "interact tốt với X". **NEW**: khi mechanic có modifier nghe giống cái khác đã tồn tại trong game → thêm Wording Distinction subsection compare verbatim:
   ```markdown
   ### Wording distinction — "X" vs "Y"
   - "<modifier A>" trên <item A> — <giải thích cơ chế A>
   - "<modifier B>" trên <item B> — <giải thích cơ chế B>
   - Hệ quả: <tại sao 2 modifier hoạt động khác nhau>
   ```
   Vd: "no chance to block" (Kongming, base removed) vs "cannot block" (Eternal Apple, hard prevent).

5. **## Optimization** — Atlas tree nodes, scarabs, map mods, character-side investments. Prioritise theo impact. Prose, không bullet 30 node.

6. **## Interactions with Other Content** — Mechanic này khi overlay với league content khác (Delirium, Breach, Harvest...). Section quan trọng cho league mechanic, optional cho skill/item.

7. **## What Doesn't Work** — Anti-pattern. Mech nào không proc, support nào không scale, item nào không stack. Section maxroll dùng explicit.

8. **## Common Mistakes** — Mỗi mistake giải thích cả mistake lẫn correct approach. Format: "Sai: ... — Đúng: ... — Lý do: ...". **NEW**: mỗi mistake kèm cost/loss number explicit (vd "lose ~5div nếu craft sai prefix", "lose 30% DPS nếu pick wrong spectre type").

9. **## Cost & Restrictions** ⭐ NEW — Mỗi setup proposed có:
   - **Cost**: currency tier (chaos / div / mirror), gear tier (rare crafted / unique / mirror-tier), support slot loss
   - **Restriction**: cooldown (Xs), exclusion ("Cannot block from base"), gating (boss drop only, league-locked)
   - **Downside**: life/mana/ES penalty nếu có (vd "Zer's impatience -25% life mana ES on use")
   
   Đây là Devil's Advocate as a section — explicit về chi phí + cản trở thực thi, KHÁC `What Doesn't Work` (anti-pattern technical) vì CR là downside của setup *đang work*.

10. **## Verdict & Open Questions** (rename Summary) — 3-5 bullet recap + verdict label + open question:
    - Verdict label rõ: BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED
    - Open question / next test / "waiting for patch notes" / "needs character test"
    - Vd: "Verdict: EXPLOITABLE — HIGH confidence. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes sau 2026-06-15."

11. **## Patch Evolution** (rename Version History) — `### Patch X.Y.Z` reverse-chrono, body là prose 1-3 câu narrative kết nối ("3.25 nerf → 3.26 jewel introduced → 3.27 foul → 3.28 core") thay vì bullet rời rạc. Quan trọng để reader biết advice còn valid không.
```

- [ ] **Step 2: Re-read skill file to verify replacement**

```bash
grep -c "^## " /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
grep "^[0-9]*\." /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md | head -15
```

Expected: section list shows 1-11 items, includes "Math Chain", "Cost & Restrictions", "Verdict & Open Questions", "Patch Evolution".

- [ ] **Step 3: Commit batched at end of Task 7**

---

## Task 6: Skill — Add 5 voice rules

**Files:**
- Modify: `.claude/skills/write-mechanic-tutorial/SKILL.md` (lines 42-56, "Voice rules (project luôn win — restate top 5)" block)

- [ ] **Step 1: Replace voice rules block**

Find the exact current block starting `## Voice rules (project luôn win — restate top 5)` through the end of rule 5 ("Title KHÔNG kèm league/patch — concept-only."):

Replace with:

```
## Voice rules (project luôn win — Dreamcore method 10 rules)

**Rule 1-5 — owner voice nền tảng (project rule, không phá):**

1. **Owner voice** — viết như người đã test cơ chế trên character của mình. CẤM "theo wiki…", "Reddit thread X nói rằng…", "doc này giải thích…", "tóm lại". State as own: *"Doryani's Prototype áp -200% lightning res character lên enemy → Wretched Defiler nhân DPS lên ~3.5x"* không *"theo cộng đồng thì Doryani's áp neg res lên enemy"*.

2. **Prose-first** — mechanic explanation là chỗ prose mạnh nhất. Bullet chỉ cho enumeration thuần (vd: 5 boss của Pinnacle, 4 type Astrolabe). Step-by-step explanation luôn là numbered list narrative, không bullet rời rạc.

3. **Show với ví dụ thật** — Mọi mechanic giải thích phải kèm ví dụ cụ thể với số thật. Vd "Doryani's effect": ví dụ TheLeader_A — character ES 6,114 + Eyes of the Greatwolf "100% lightning taken as cold" → fire/cold cap 90% bảo vệ khỏi -200% lightning res. Số kéo từ `content/characters/the-leader-a.json`.

4. **Game term linking** — Mọi skill / support / unique / scarab / jewel / flask / monster / atlas keystone / boss / currency → `:wiki-link{url="https://www.poewiki.net/wiki/Exact_Name"}`.

   ```md
   Mechanic Doryani's Prototype: trang bị :wiki-link{url="https://www.poewiki.net/wiki/Doryani's_Prototype"}
   ép enemy lightning res = -200% (xem cơ chế :wiki-link{url="https://www.poewiki.net/wiki/Eyes_of_the_Greatwolf"} bên dưới).
   ```

5. **Title KHÔNG kèm league/patch** — concept-only.

**Rule 6-10 — Dreamcore method (5 rule mới, encode 8 trait):**

6. **Numeric discipline** — Hype words ("powerful", "strong", "great", "tốt", "mạnh", "đáng kể", "rất nhiều", "huge", "insane", "ridiculous") CHỈ được dùng khi kèm số ngay trong cùng câu hoặc câu liền trước đã state số liên quan.
   - Sai: "Doryani's Prototype là item rất mạnh cho minion build"
   - Đúng: "Doryani's Prototype ép enemy lightning res = -200%, đẩy minion DPS lên ~3.5x"
   - Self-check trước Validate step: grep "mạnh|tốt|đáng kể|powerful|strong" trong file, mỗi match xác nhận có số kèm.

7. **Entity naming precision** — Lần xuất hiện đầu của entity dùng FULL NAME ("Aftershock 2 support gem", "Born in the Shadows ascendancy notable", "Archaic Rune of the Titan"). Pronoun "nó / skill này / item đó" chỉ OK khi context rõ trong 1-2 câu trước và không có ambiguity với entity khác trong đoạn. CẤM "support gem đó", "ascendancy node kia" khi entity name explicit available.

8. **Calm measured tone** — Speculation phải hedge explicit:
   - "có thể là vậy"
   - "as of patch 0.5"
   - "footage cho thấy nhưng untested live"
   - "untested nhưng theory cho phép"
   
   Verbatim/number luôn confident, không hedge. Không mix lẫn 2 register (đừng "Doryani's có thể là rất mạnh" — phải chọn 1: hoặc verified với số, hoặc untested với hedge).

9. **No filler** — Mỗi câu phải carry ≥1 trong: số / comparison / mechanic detail / verdict / cross-link. Câu chỉ "đoạn này nói về X" → DELETE. Câu chỉ "có rất nhiều điều thú vị về Y" → DELETE. Câu chỉ recap câu trước → DELETE.

10. **Verdict-with-open-question close** — Section "## Verdict & Open Questions" (section 10) luôn kết bằng:
    - (a) Verdict label rõ (BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED) + confidence (HIGH/MEDIUM/LOW)
    - (b) Open question / next test / "waiting for patch notes [X]" / "needs character test [Y]"
    
    Vd: "Verdict: EXPLOITABLE — HIGH confidence. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes sau 2026-06-15."
```

- [ ] **Step 2: Re-read skill file to verify replacement**

```bash
grep -c "^[0-9]\+\." /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
grep "Numeric discipline\|Entity naming\|Calm measured\|No filler\|Verdict-with-open" /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
```

Expected: 5 new rule headings present.

- [ ] **Step 3: Commit batched at end of Task 7**

---

## Task 7: Skill — Add Dreamcore Signature Checklist + adjust Step 6 + commit

**Files:**
- Modify: `.claude/skills/write-mechanic-tutorial/SKILL.md` (Step 6 Validate block + end of file)

- [ ] **Step 1: Find Step 6 block and add Dreamcore Signature Checklist before Validate**

Current Step 6:

```
### 6. Validate
`bun run validate --path <file>`.

**Success criteria**: Exit 0.
```

Insert above Step 6:

```
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

### 6b. Validate (đã có, giữ nguyên)
`bun run validate --path <file>`.

**Success criteria**: Exit 0.
```

Replace ENTIRE old "### 6. Validate" block (4 dòng) với block mới (gồm 6a + 6b).

- [ ] **Step 2: Verify Step 6 replacement**

```bash
grep -B 1 -A 3 "Dreamcore Signature Self-Check" /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
```

Expected: shows new Step 6a block.

- [ ] **Step 3: Verify Step 7 still exists**

```bash
grep "^### 7" /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
```

Expected: `### 7. Summary cho user` still present (unchanged).

- [ ] **Step 4: Commit skill changes**

```bash
cd /Users/firegroup/projects/poeai
git add .claude/skills/write-mechanic-tutorial/SKILL.md
git commit -m "skill(mechanic-tutorial): encode Dreamcore method — 11 H2 + 5 voice rules + signature checklist

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

Expected: 1 file changed.

---

## Task 8: Cross-consistency check

**Files:**
- Read-only verify both files

- [ ] **Step 1: Verify Lens names trong agent match Section names trong skill**

```bash
echo "=== Agent Lens names ==="
grep "^  [0-9]\. \*\*" /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md | head -10
echo ""
echo "=== Skill Section names ==="
grep "^## " /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md | head -15
```

Expected mapping:
- Agent Lens 1 (Verbatim Wiki + Visual/Tooltip Anchor) ↔ Skill Intro paragraph (4-câu pattern)
- Agent Lens 2 (Math Chain Reproducibility) ↔ Skill `## Math Chain`
- Agent Lens 3 (Interaction Graph + Wording Distinctions) ↔ Skill `## Key Interactions`
- Agent Lens 4 (Hypothesis-Test Trail) ↔ Skill `## How It Works` Hypothesis Trail sub-pattern
- Agent Lens 5 (Patch Evolution + Adoption) ↔ Skill `## Patch Evolution` + Intro câu 3
- Agent Lens 6 (Cost-Restriction Audit + Devil's Advocate) ↔ Skill `## Cost & Restrictions`

- [ ] **Step 2: Verify Dreamcore Signature Checklist match in both files**

```bash
echo "=== Agent checklist ==="
grep -A 9 "Dreamcore_Signature_Checklist" /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md
echo ""
echo "=== Skill checklist ==="
grep -A 9 "Dreamcore Signature Self-Check" /Users/firegroup/projects/poeai/.claude/skills/write-mechanic-tutorial/SKILL.md
```

Expected: 8 trait lines match 1-1 between agent and skill, terminology consistent ("Atomic scope", "Verbatim tooltip + visual anchor", "Hypothesis Trail", "Math Chain", "Wording Distinction", "Patch Evolution", "Named adoption proof", "Cost number + restriction").

- [ ] **Step 3: Spot-check no broken refs (M001-M005 leftovers)**

```bash
grep "M00[1-5]" /Users/firegroup/projects/poeai/.claude/agents/mechanic-researcher.md | grep -v "M00[1-6]"
```

Expected: zero matches (no orphan "M005" references that should be M006). Also check Examples section for outdated M references.

If matches found, fix them in agent file.

- [ ] **Step 4: Verify spec coverage**

Check each spec section's items against this plan:

- Spec Phần 1 (Agent 6-Lens) → Task 1 ✓
- Spec Phần 1 (M001-M006) → Task 2 ✓
- Spec Phần 1 (Agent Dreamcore Checklist) → Task 3 ✓
- Spec Phần 1 (Success_Criteria + Examples update) → Task 4 ✓
- Spec Phần 2 (Skill 11 H2) → Task 5 ✓
- Spec Phần 2 (Skill 5 voice rules) → Task 6 ✓
- Spec Phần 2 (Skill Dreamcore Checklist) → Task 7 ✓
- Spec Success criteria 1-8 → Task 8 ✓

- [ ] **Step 5: Final commit (consistency note nếu cần)**

If Step 3 found broken refs → fix + commit:

```bash
cd /Users/firegroup/projects/poeai
git add .claude/agents/mechanic-researcher.md .claude/skills/write-mechanic-tutorial/SKILL.md
git commit -m "fix(mechanic): align Lens names + checklist terminology cross-file

Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>"
```

If no fixes needed → skip commit, report consistency PASS.

---

## Self-Review Summary

**1. Spec coverage:**
- Agent 6-Lens replace ✓ Task 1
- Workflow M001-M006 ✓ Task 2
- Agent Dreamcore Signature Checklist ✓ Task 3
- Agent Success_Criteria + Examples update ✓ Task 4
- Skill 11 H2 ✓ Task 5
- Skill 5 voice rules ✓ Task 6
- Skill Dreamcore Signature Checklist + Step 6a ✓ Task 7
- Cross-consistency check ✓ Task 8

**2. Placeholder scan:** No "TBD", "TODO", "fill in later". Every step has exact code/command.

**3. Type consistency:**
- "Lens" (Agent) ↔ "Section" (Skill) terminology mapping documented in Task 8
- "Dreamcore Signature Checklist" name consistent both files
- "M001-M006" naming consistent throughout
- "Hypothesis Trail" / "Math Chain" / "Wording Distinction" / "Cost & Restrictions" / "Patch Evolution" / "Verdict & Open Questions" — all terms used identically across both files

**4. Scope check:** Single implementation plan, 2 files, 8 tasks, ~30-45 min total work for inline execution. No need to decompose further.
