---
template_path: templates/build-template.md
document_type: build
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/builds/[^/]+/.+\\.md$"
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
  game:
    required: true
    enum: [poe1, poe2]
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  patch:
    required: true
  budget_tier:
    required: true
    enum: [league-starter, low-budget, medium-budget, high-budget, mirror-tier]
  confidence_level:
    required: false
    enum: [HIGH, MEDIUM, LOW]
  pob2_coverage:
    required: false
    enum: [FULL, PARTIAL, NA]
---

# [Build Name]

<!--
Build guide template — viết theo skill /write-build-tutorial.
Voice: tiếng Việt, owner-voice (KHÔNG "theo Fubgun"), prose-first.
Title KHÔNG kèm league/patch (site auto-concat).
Mọi term game (skill/support/unique/scarab/jewel/flask) → bold + wiki link lần đầu.
Cross-link → section ## Relationships ở cuối, mỗi dòng: - **predicate** [Title](/route) — reason.
-->

(Intro paragraph 2-3 câu — không heading. Câu 1: build là gì + ai chơi sẽ thích. Câu 2-3: core mechanic + content focus.)

## Build Overview

(1-2 đoạn prose. Damage source → scaling vector → defense layer → mobility. Trả lời "build này hoạt động ra sao?")

## Skill Gems & Links

(Main 6L + aura + movement + utility. Mỗi support 1 câu why — interaction nó gây ra, không phải tên. Nếu build dùng combo có exclusion clause (vd Avatar of Fire + cold/lightning, Eldritch Battery + CI, Resolute Technique + crit) → document `Exclusion check: <none | list>` sau setup. Xem **Interaction Verification Protocol** trong CLAUDE.md.)

**Main Skill (6L):** [Skill] + [Support] + [Support] + [Support] + [Support] + [Support]

**Aura Setup:** [Aura 1] + [Aura 2] + ...

**Movement:** [Movement Skill] + ...

**Utility:** [Curse / CWDT / Trigger / etc.]

## Ascendancy

(Thứ tự lab: Lab 1 → Lab 2 → Lab 3 → Uber + lý do từng node. Prose; bullet chỉ khi liệt kê 4 node độc lập.)

## Passive Tree & Mastery

(Cluster chính path qua + lý do. Link PoB cho allocation chính xác. Prose giải thích cluster intent.)

## Stat Priorities & Defenses

(Số thật từ PoB hoặc character file. Bullet OK đây vì purely data points. DPS claim ≥ 100k và EHP claim phải có PoB link bên dưới — không quote raw number không reference. POE1 EHP layer order: armor → evasion → block/spell-block → suppress → max res → ES/Life pool → recovery rate. POE2 0.5+ thêm **Runic Ward** sau Life pool. Xem **Math Chain Bắt Buộc cho Big Number** trong CLAUDE.md.)

- **ES / Life:** X
- **Armour / Evasion:** X / X
- **Block / Spell Block:** X% / X%
- **EHP:** X
- **Resistances:** Fire X% / Cold X% / Lightning X% / Chaos X%
- **Max Hit per type:** Phys X / Fire X / Cold X / Lightning X / Chaos X
- **Charges max:** Endurance X / Frenzy X / Power X
- **Movement Speed:** X%

### Performance Ratings

(Body section thay frontmatter `ratings:` block. Điền đủ 6 dimension dưới đây,
mỗi cái 1-5 — đây là convention của build doc, viết tay khi soạn bài.)

| Aspect          | Rating (1-5) |
|-----------------|--------------|
| clear_speed     | 3            |
| boss_damage     | 3            |
| survivability   | 3            |
| mobility        | 3            |
| league_start    | 3            |
| budget_scaling  | 3            |

## Resources

(External link: gắn ≥1 PoB pastebin chính — pobb.in / pob.party /
pathofexile.com/.../character/. Optional: video guide YouTube, forum guide
forum.pathofexile.com, character profile.)

- **PoB:** https://pobb.in/[build-id]
- **Video guide:** [optional]
- **Forum guide:** [optional]

## Gear Progression

### Leveling
(Item base + key mod tier 1-9.)

### Early Mapping
(Yellow/red maps — gear breakpoint để cap res, đủ DPS clear T16.)

### Endgame
(T17 / Pinnacle viable. Item base + key mod + lý do.)

### Mirror Tier (BiS)
(Optional. Cluster jewel, mirror item, max-roll Mageblood. Diminishing returns kicks in.)

## Flasks

(5 flask + lý do. Mageblood-build: note mod cần roll. Flask link wiki lần đầu.)

## Pantheon & Bandits

**Major:** [God] — [Why]  
**Minor:** [God] — [Why]  
**Bandits:** [passive / Oak / Kraityn / Alira] — [Why]

## Leveling Notes

(Skill transition theo act, gem swap, gear breakpoint. Câu 1 campaign skill chính, câu 2 act mấy swap sang main skill.)

## Budget & Investment

(Investment curve: min chaos để chạy → divine breakpoint → mirror tier. Diminishing returns kicks in ở đâu.)

## Strengths & Limitations

(Honest. 2-3 thứ build làm tốt + 2-3 thứ build struggle, vd reflect, no-leech map, specific boss.)

## Failure Modes

(Bắt buộc ≥ 3 scenario build gãy, cover các category:
- **Map mod hostile** — mod nào make build unplayable (no regen, less recovery, reflect, ele weakness, additional projectile)
- **One-shot encounter** — boss pattern nào kill bất chấp EHP spreadsheet (T17 slam, Uber pinnacle, Simulacrum wave 25+)
- **Gear / currency floor** — investment cần đạt để build chạy như paper math (vd "cần Mageblood + 6L mới ra số DPS này")
- **Patch sensitivity** — mechanic nào nếu nerf sẽ kill build (vd "build depend Doryani's -200% lightning res — nerf prototype = build chết")
- **League start viability** — build có chạy được không gear cố định không

Prose 1 đoạn per category đáng cover. Xem **Failure Mode / Devil's Advocate** trong CLAUDE.md.)

## Summary

(3-5 bullet recap. Đây là chỗ DUY NHẤT bullet thoải mái trong build guide.)

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
