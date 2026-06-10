---
template_path: templates/build-template.md
document_type: build
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?builds/[^/]+/.+\\.md$"
  template:
    required: true
    pattern: "^templates/build-template\\.md$"
  document_type:
    required: true
    enum: [build]
  title:
    required: true
  status:
    required: true
    enum: [draft, review, published, outdated, archived]
  created:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  updated:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  class:
    required: true
    enum: [Marauder, Duelist, Ranger, Shadow, Witch, Templar, Scion, Warrior, Mercenary, Monk, Sorceress, Huntress, Druid]
  ascendancy:
    required: true
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  patch:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  budget_tier:
    required: true
    enum: [league-starter, low-budget, medium-budget, high-budget, mirror-tier]
  confidence_level:
    required: false
    enum: [HIGH, MEDIUM, LOW]
  pob_coverage:
    required: false
    enum: [FULL, PARTIAL, NA]
---

# [Build Name]

<!--
Build guide template — viết theo skill /write-build-tutorial.
Voice: tiếng Việt, owner-voice (KHÔNG "theo Fubgun"), prose-first. Title KHÔNG kèm league/patch.
Term game (skill/support/unique/jewel/flask) → :wiki-link{url="..."} lần đầu (POE2 → poe2wiki.net).

RIGHT-SIZING: build vốn nhiều mặt (skill/tree/gear/defense/leveling) nên thường 8-12 section —
nhưng CẮT section không áp dụng, ĐỪNG pad, ĐỪNG lặp. Section mỏng/độn hoặc trùng section khác = vi phạm.
Doc mẫu lean: warrior/shield-wall-warbringer (8 heading topic-driven, zero filler).
Heading: giữ tên chuẩn dưới HOẶC sentence-case tiếng Việt nói thẳng — KHÔNG dash-subtitle `## X — Y`.
Section REQUIRED `## Failure Modes` PHẢI giữ ĐÚNG literal đó (validator key theo heading text — KHÔNG Vietnamese-ize, KHÔNG thêm subtitle); tự do heading tiếng Việt CHỈ áp dụng cho section optional.
POE2 KHÔNG có hệ Pantheon/Bandit → KHÔNG viết section đó.

REQUIRED (luôn có): Intro + Build Overview + Failure Modes (validator-enforced) + Verdict.
OPTIONAL (include khi build cần, OMIT cả section khi không — đừng để placeholder rỗng):
  Skill Gems · Ascendancy · Passive Tree · Stat Priorities (+Ratings) · Gear Progression ·
  Flasks · Leveling Notes · Budget & Investment · Resources · Changelog.
-->

(Intro 2-3 câu — không heading. Build là gì + ai chơi sẽ thích · core mechanic + content focus.)

## Build Overview

(1-2 đoạn prose. Damage source → scaling vector → defense layer → mobility. "Build này hoạt động ra sao?")

## Skill Gems & Links

(Main 6L + aura + movement + utility. Mỗi support 1 câu why — interaction nó gây ra, không phải tên. Combo có exclusion clause (Avatar of Fire + cold/lightning, Eldritch Battery + CI, Resolute Technique + crit) → `Exclusion check: <none | list>`. Xem **Interaction Verification Protocol** trong CLAUDE.md.)

**Main Skill (6L):** [Skill] + [Support] ×5
**Aura Setup:** [Aura 1] + [Aura 2] + ...
**Movement / Utility:** [Movement] · [Curse / CWDT / Trigger]

## Ascendancy

(Thứ tự ascend + lý do từng node. Prose; bullet chỉ khi liệt kê node độc lập. Omit nếu đã gói trong Build Overview.)

## Passive Tree & Mastery

(Cluster chính path qua + lý do. Link PoB cho allocation chính xác. Prose giải thích cluster intent.)

## Stat Priorities & Defenses

(Số thật từ PoB hoặc character file. Bullet OK đây vì purely data points. DPS ≥ 100k và EHP claim phải có PoB link — không quote raw number không reference; multi-source → math chain (xem **Math Chain Bắt Buộc cho Big Number**). EHP layer 0.5+: armor → evasion → block → max res → ES/Life → **Runic Ward** → recovery.)

- **ES / Life:** X · **Armour / Evasion:** X / X · **Block / Spell Block:** X% / X%
- **EHP:** X · **Resistances:** F X / C X / L X / Chaos X
- **Max Hit per type:** Phys X / Fire X / Cold X / Light X / Chaos X
- **Charges:** End X / Frenzy X / Power X · **Movement Speed:** X%

### Performance Ratings

(Convention build doc — điền 6 dimension 1-5, viết tay khi soạn.)

| Aspect | Rating (1-5) |
|---|---|
| clear_speed | 3 |
| boss_damage | 3 |
| survivability | 3 |
| mobility | 3 |
| league_start | 3 |
| budget_scaling | 3 |

## Gear Progression

### Gear theo slot
(Bullet 1 dòng/slot cho mọi slot — weapon, off-hand, helmet, body, gloves, boots, belt, amulet, ring ×2, jewel (+ charm). Mỗi dòng: item/base + 2-4 mod ưu tiên + 1 câu why. Dẫn bằng 1 đoạn priority order: cap res → Life → attribute floor cho gem → damage stat chính → +skill level → reservation/utility → defense. Unique → :wiki-link. KHÔNG table. Slot đã có mục cơ chế riêng thì tóm 1 câu + cross-ref.)

### Leveling → Early Mapping → Endgame → Mirror Tier (BiS, optional)
(Item base + key mod tier theo từng giai đoạn. Bỏ giai đoạn không có gì khác biệt để nói.)

## Flasks

(Flask + lý do. Mageblood-build: note mod cần roll. Flask :wiki-link lần đầu. Omit nếu build chỉ dùng flask thường, không có gì để note.)

## Leveling Notes

(Skill transition theo act, gem swap, gear breakpoint. Câu 1 campaign skill chính, câu 2 act mấy swap sang main skill. Omit nếu trùng Gear Progression > Leveling.)

## Budget & Investment

(Investment curve: min để chạy → divine breakpoint → mirror tier. Diminishing returns kicks in ở đâu.)

## Resources

<!-- OMIT cả section nếu build chưa materialize — KHÔNG ship placeholder "PoB: PENDING" -->

- **PoB:** https://pobb.in/[build-id]
- **Video / Forum guide:** [optional]

## Failure Modes

```yaml section-rules
required: true
```

(≥ 3 scenario gãy, cover các category:
- **Map mod hostile** — mod nào make build unplayable (no regen, less recovery, reflect, ele weakness, additional projectile)
- **One-shot encounter** — boss pattern nào kill bất chấp EHP (T17 slam, Uber pinnacle, Simulacrum wave 25+)
- **Gear / currency floor** — investment cần đạt để build chạy như paper math
- **Patch sensitivity** — mechanic nào nếu nerf sẽ kill build
- **League start viability** — chạy được không gear cố định không

Mở đầu gói luôn 2-3 thứ build làm tốt (thay section Strengths riêng), rồi 1 đoạn prose per category gãy. Xem **Failure Mode / Devil's Advocate** trong CLAUDE.md.)

## Verdict

(Prose takeaway 2-4 câu, KHÔNG bullet-recap toàn bài. Build hợp với ai, ngưỡng đầu tư để chạy như paper, verdict gọn. Confidence ở frontmatter `confidence_level` — KHÔNG nhãn HIGH/MEDIUM/LOW trong prose.)

## Changelog

### YYYY-MM-DD
- Initial draft

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
