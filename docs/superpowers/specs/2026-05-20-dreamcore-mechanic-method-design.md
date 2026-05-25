# Dreamcore Mechanic Method — Encoding vào agent + skill

**Ngày:** 2026-05-20
**Trạng thái:** Approved by user (3 brainstorm questions + final approval)
**Phạm vi:** `.claude/agents/mechanic-researcher.md` + `.claude/skills/write-mechanic-tutorial/SKILL.md`

## Bối cảnh

User chỉ ra 3 video Dreamcore (channel YouTube) làm reference cho phong cách nghiên cứu + viết mechanic:

- *Nightfall Shield Interactions & Theorycraft for 0.5* — theorycraft pre-launch một unique shield
- *Forgotten Uniques: Kongming's Stratagem* — deep-dive một unique cũ
- *New Currency Enables INSANE Defensive Setups in 3.28* — system overview các setup phòng thủ qua Volatile Balor

User yêu cầu: "phương pháp, cách thức này được tái hiện trong agent mechanic research/write".

## 8 trait Dreamcore extract được

| # | Trait | Phân loại | Map tới |
|---|---|---|---|
| 1 | Atomic scope — 1 thứ/note | Method | Agent boundary (đã có) |
| 2 | Verbatim tooltip + visual anchor | Method | Lens 1 (strengthen) |
| 3 | Hypothesis-test trail | Method | NEW Lens 4 |
| 4 | Math chain line-by-line | Method | Lens 2 (strengthen) + NEW skill section |
| 5 | Wording distinction (similar modifier) | Method | Lens 3 (strengthen) |
| 6 | Patch evolution thread | Method | NEW Lens 5 |
| 7 | Named adoption proof | Method | Lens 5 (combine với patch evolution) |
| 8 | Cost & restriction call-out | Method | Lens 6 + NEW skill section |
| — | No hype without number | Style | Skill voice rule |
| — | Entity naming precision | Style | Skill voice rule |
| — | Calm measured tone | Style | Skill voice rule |
| — | No filler sentence | Style | Skill voice rule |
| — | Verdict + open question close | Style | Skill section pattern |

## Quyết định brainstorm

| Q | Đáp án |
|---|---|
| Reading pattern Dreamcore đúng không? | Đúng — apply cả 8 trait |
| Encode style: inline / shared doc / mixed? | Inline cả hai file |
| Section overhaul: additive / full / minimal / conditional? | Additive — giữ 9 H2, thêm 2 mới |

## Phần 1 — Agent (`mechanic-researcher.md`)

### Thay đổi 5 Lens → 6 Lens

**Lens 1: Verbatim Wiki + Visual/Tooltip Anchor**

Cũ chỉ "verbatim quote ≥50 char". Mới thêm:

- Note visual cue / tooltip element thay đổi giữa patches (vd "tower shield dotted underline mới", "base armor +41% so với 0.4")
- Snapshot base type changes nếu applicable
- Eval pass: verbatim ≥50 char + cross-source ≥1 + version note + ≥1 visual/tooltip change observation (nếu mechanic mới hoặc vừa thay đổi)

**Lens 2: Math Chain Reproducibility (line-item)**

Cũ là "Formula Reproducibility". Mới mạnh hơn:

- Math chain format cứng: `<Entity name> (<source: passive/support/jewel/rune/unique/ascendancy>) — <số>` per row + `Total — <số>` cuối.
- Cấm "scale tốt", "đáng kể" mà không kèm chain.
- PoB number = HIGH. Hand-calc chain với ≥3 multipliers = MEDIUM. Theory only = LOW (flag).
- Eval pass: ≥1 math chain với ≥3 line items + total + entity name per row + confidence label.

**Lens 3: Interaction Graph + Wording Distinctions**

Cũ ≥6 pair + hidden exclusion. Mới thêm:

- Khi mechanic có modifier nghe giống cái khác đã tồn tại trong game → MUST compare verbatim:
  - "no chance to block" (Kongming) vs "cannot block" (Eternal Apple)
  - "less damage taken" (suppression, multiplicative) vs "reduced damage taken" (Kongming, additive)
  - "damage shift" (not normalized) vs "damage conversion" (normalized)
- Grep mirror cho similar wording, identify ≥1 distinguished modifier nếu có.
- Eval pass: ≥6 interactions + ≥1 hidden exclusion + ≥1 wording distinction (nếu mechanic có modifier similar).

**Lens 4: Hypothesis-Test Trail (NEW)**

Cho mỗi ambiguous interaction:

```
Hypothesis: <X có thể work vì reference mechanic Y>
Evidence: <footage / wiki text / PoB test / forum post>
Verdict: <HIGH/MEDIUM/LOW> — <conclusion>
```

- Cấm fabricate. Untested = LOW + flag explicitly ("waiting for [patch / character test]").
- ≥1 hypothesis trail per mechanic doc nếu mechanic mới hoặc có ambiguity.
- Eval pass: hypothesis trail có đủ 3 thành phần OR mechanic được đánh dấu "no ambiguity" với evidence.

**Lens 5: Patch Evolution + Adoption Snapshot (NEW)**

Narrate timeline:

- Patch X.Y added → patch A.B changed → current state
- ≥1 named build/player adoption proof: "a miracle Valdo farmer patch 3.25 Trickster", "29 chars Mirage poe.ninja Spectre Necro"
- Sample-of-1 vẫn OK nếu named + linkable
- Eval pass: timeline có ≥2 patch milestones + ≥1 named adoption proof OR explicit "no notable adoption" finding with evidence (vd "0 chars trong top-100 poe.ninja Mirage Spectre Necro", "mobalytics tier list không list mechanic này").

**Lens 6: Cost-Restriction Audit + Devil's Advocate**

Cũ là "Devil's Advocate" 3 counter. Mới thêm:

- Mỗi setup proposed có cost number explicit: currency (vd Volatile Balor 50% destroy rate), gear tier (vd "Mageblood mirror-tier"), support slot ("Zer's impatience -25% life mana ES + chiếm support link")
- Mỗi setup có restriction explicit: cooldown (4s), exclusion (Cannot block from base), gating (boss drop only)
- Vẫn giữ 3 counter-arguments với evidence
- Eval pass: ≥1 cost number per major setup + ≥1 restriction per major setup + đúng 3 counter-args.

### Workflow M001-M005 → M001-M006

Mỗi M map tới 1 lens:

- M001 — Mechanic Definition + Sub-class (kept)
- M002 — Verbatim Wiki + Visual Anchor (Lens 1)
- M003 — Math Chain (Lens 2)
- M004 — Interaction Graph + Wording Distinctions (Lens 3)
- M005 — Hypothesis-Test Trail + Patch Evolution + Adoption (Lens 4 + 5 combine, vì cả hai narrate trail)
- M006 — Cost-Restriction Audit + Devil's Advocate (Lens 6)

### Dreamcore Signature Checklist (cuối agent file)

Self-test 8 dòng trước Phase 4:

```
[ ] Trait 1 — Atomic scope: doc covers exactly 1 mechanic
[ ] Trait 2 — Verbatim tooltip + visual anchor noted
[ ] Trait 3 — Hypothesis trail có ≥1 trail (hoặc explicit "no ambiguity")
[ ] Trait 4 — Math chain ≥1 với line-item + total
[ ] Trait 5 — Wording distinction ≥1 (nếu applicable)
[ ] Trait 6 — Patch evolution timeline ≥2 milestones
[ ] Trait 7 — Named adoption proof ≥1
[ ] Trait 8 — Cost + restriction explicit per major setup
```

## Phần 2 — Skill (`write-mechanic-tutorial/SKILL.md`)

### Section structure: 9 H2 → 11 H2

Giữ thứ tự cũ, chèn 2 H2 mới:

1. *(Intro paragraph)* — Pattern Dreamcore mới:
   - Câu 1: cơ chế là gì + visual anchor
   - Câu 2: xuất hiện patch nào, last changed patch nào
   - Câu 3: ai/build nào đang dùng (named build hoặc % poe.ninja)
   - Câu 4 (optional): tại sao quan tâm bây giờ
2. **## How It Works** — sequential narrative + **Hypothesis Trail sub-format** khi cơ chế ambiguous
3. **## Math Chain** ⭐ NEW — format cứng:
   ```markdown
   - Entity name (source) — số
   - Entity name (source) — số
   - ...
   **Total — số**
   ```
   Bắt buộc nếu mechanic có scaling từ multiple sources.
4. **## Key Interactions** — ≥6 pair + Wording Distinction subsection khi modifier dễ nhầm
5. **## Optimization** — giữ
6. **## Interactions with Other Content** — giữ
7. **## What Doesn't Work** — giữ
8. **## Common Mistakes** — strengthen: mỗi mistake kèm cost/loss number
9. **## Cost & Restrictions** ⭐ NEW — mỗi setup có:
   - Cost: currency / gear tier / support slot loss
   - Restriction: cooldown / exclusion / gating
   - Downside: explicit life/mana/ES penalty nếu có
10. **## Verdict & Open Questions** *(rename Summary)* — 3-5 bullet recap + verdict label (BUFF/NERF/NEUTRAL/EXPLOITABLE/OUTDATED) + open question ("waiting patch notes for X", "need to test Y on character Z")
11. **## Patch Evolution** *(rename Version History)* — reverse-chrono prose narrative ("3.25 nerf → 3.26 jewel introduced → 3.27 foul → 3.28 core") thay vì bullet rời rạc. Mỗi entry có `### Patch X.Y.Z` heading nhưng body là prose 1-3 câu.

### Voice rules mới (top up)

Thêm vào "Voice rules" section của skill:

**Numeric discipline** — Hype words ("powerful", "strong", "great", "tốt", "mạnh", "đáng kể", "rất nhiều") CHỈ được dùng khi kèm số ngay trong cùng câu hoặc câu liền trước. Vd:

- Sai: "Doryani's Prototype là item rất mạnh cho minion build"
- Đúng: "Doryani's Prototype ép enemy lightning res = -200%, đẩy minion DPS lên ~3.5x"

**Entity naming precision** — Lần xuất hiện đầu phải FULL NAME ("Aftershock 2 support gem", "Born in the Shadows ascendancy notable", "Archaic Rune of the Titan"). Pronoun "nó / skill này / item đó" chỉ OK khi context rõ trong 1-2 câu trước và không có ambiguity với entity khác trong đoạn.

**Calm measured tone** — Speculation phải hedge explicit ("có thể là", "as of patch 0.5", "footage cho thấy", "untested nhưng theory cho phép"). Verbatim/number luôn confident. Không mix lẫn 2 register.

**No filler** — Mỗi câu phải carry: số / comparison / mechanic detail / verdict / link. Câu chỉ "đoạn này nói về X" → DELETE. Câu chỉ "có rất nhiều điều thú vị về Y" → DELETE.

**Verdict-with-open-question close** — Verdict section kết bằng:
- (a) Verdict label rõ (BUFF / NERF / NEUTRAL / EXPLOITABLE / OUTDATED)
- (b) Open question / next test / "waiting for patch notes" / "needs character test"

Vd: "Verdict: EXPLOITABLE — HIGH confidence. Open question: liệu Wretched Defiler có bị nerf trong 3.29 không? Sẽ theo dõi patch notes."

### Dreamcore Signature Checklist (cuối skill file)

Self-test 8 dòng (giống agent, gắn vào Step 6 trước Step 7 Validate):

```
[ ] Trait 1 — 1 mechanic per doc
[ ] Trait 2 — verbatim tooltip + visual anchor mentioned
[ ] Trait 3 — Hypothesis Trail ≥1 (hoặc explicit no-ambiguity note)
[ ] Trait 4 — Math Chain section có line-item + total
[ ] Trait 5 — Wording Distinction ≥1 (nếu modifier similar tồn tại)
[ ] Trait 6 — Patch Evolution timeline ≥2 milestones
[ ] Trait 7 — Adoption proof ≥1 named (build/player/% poe.ninja)
[ ] Trait 8 — Cost & Restrictions section có cost number + restriction per setup
```

## Phần 3 — Out of scope

- Không tạo shared north-star doc (user chọn inline).
- Không edit các skill khác (`write-build-tutorial`, `write-farming-tutorial`) — ngoài scope.
- Không edit `interaction-mapper` agent — ngoài scope.
- Không tự edit existing mechanic docs trong `content/mechanics/` để conform — đó là re-polish work riêng, sẽ trigger từ user khi cần.

## Success criteria

Sau khi impl:

1. Agent file có 6 lens với eval pass rules update
2. Agent file có M001-M006 workflow
3. Agent file có Dreamcore Signature Checklist
4. Skill file có 11 H2 (thêm Math Chain + Cost & Restrictions)
5. Skill file có Verdict & Open Questions (rename Summary) + Patch Evolution (rename Version History)
6. Skill file có 5 voice rule mới
7. Skill file có Dreamcore Signature Checklist
8. Cả hai file pass internal consistency check (không contradict nhau, terminology align)

## Rủi ro / risk

| Risk | Mitigation |
|---|---|
| Math Chain format quá cứng → user phải pad section khi mechanic không có multi-source scaling | Skill viết rõ "Bắt buộc nếu mechanic có scaling từ multiple sources" — nếu single source, skip section + note "Math: single source, không có chain" |
| Cost & Restrictions overlap với What Doesn't Work | Skill phân biệt: WDW = anti-pattern (mech không proc, support không scale). CR = downside của setup *đang work* (chi phí + cản trở thực thi) |
| Verdict & Open Questions ép verdict cho mọi mechanic | Verdict label có option NEUTRAL cho mechanic không có verdict mạnh |
| Patch Evolution thiếu data cho mechanic cũ không tracked | Cho phép "Patch X.Y — Added; no significant changes since" làm milestone duy nhất |

## Implementation order

1. Edit `.claude/agents/mechanic-researcher.md` — 6 lens + M001-M006 + checklist
2. Edit `.claude/skills/write-mechanic-tutorial/SKILL.md` — 11 H2 + voice rules + checklist
3. Spot-check cả hai file đồng bộ về terminology (lens names = section names tương ứng)
4. Commit

## Open questions sau brainstorm

Không có. User approved full design.
