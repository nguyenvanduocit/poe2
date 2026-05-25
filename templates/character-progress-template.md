---
template_path: templates/character-progress-template.md
document_type: character-progress
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/characters/.+\\.md$"
  template:
    required: true
    pattern: "^templates/character-progress-template\\.md$"
  document_type:
    required: true
    enum: [character-progress]
  title:
    required: true
  status:
    required: true
    enum: [leveling, mapping, endgame, retired, rerolled]
  created:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  updated:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  character_name:
    required: true
  character_class:
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
  current_progress:
    required: true
    enum: [campaign, white-maps, yellow-maps, red-maps, t16-farming, endgame-bosses, uber-content]
---

# [Character Name] - Progress Tracker

<!--
Character progress note — viết theo skill /write-character-progress.
Voice: tiếng Việt, owner-voice (first-person hoặc direct, KHÔNG third-person summary).
Snapshot LUÔN từ live fetch `.claude/skills/pob1/scripts/pob.sh fetch "<charname>" [--spectre "<type>"]`.
Title KHÔNG kèm league/patch.
Đây KHÔNG phải tutorial — là live tracking note.
Cross-link → section ## Relationships ở cuối, mỗi dòng: - **predicate** [Title](/route) — reason.
-->

(Intro 1-2 câu. Câu 1: class/ascendancy/level + current stage — campaign / mapping / endgame / 40-40 push. Câu 2 optional: primary goal hiện tại + ETA nếu có.)

## Snapshot

<!-- Bullet OK đây vì purely data points. Refetch live trước khi update.
**Fetch timestamp BẮT BUỘC** ngay dưới heading: "Last fetch: YYYY-MM-DD via .claude/skills/pob1/scripts/pob.sh fetch <charname> [--spectre <type>]".
DPS quote ≥ 100k kèm derivation (PoB chain hoặc PoB link). EHP layer order: armor → evasion → block → suppress → max res → ES/Life → (POE2 0.5+: Runic Ward) → recovery rate. -->

- **ES / Life:** X
- **Armour / Evasion / ES (def):** X / X / X
- **Block / Spell Block:** X% / X%
- **EHP:** X
- **Resistances:** Fire X% / Cold X% / Lightning X% / Chaos X%
- **Max Hit per type:** Phys X / Fire X / Cold X / Lightning X / Chaos X
- **Main DPS:** X (per spectre/totem multiplier nếu summon)
- **Charges max:** Endurance X / Frenzy X / Power X
- **Movement Speed:** X%

## Current Goals

(Prose 1 đoạn. 2-5 goal cụ thể, actionable, priority order. Khi xong cập nhật section. North star cho mỗi session.)

## Priority Actions

(Numbered list 1, 2, 3... immediate next steps. Mỗi item completable trong 1 session, kèm 1 câu why hoặc expected outcome.)

1. ...
2. ...
3. ...

## Gear Summary

(Current items + upgrade bottleneck. Item bold + wiki link lần đầu. Không full item dump — focus bottleneck.)

**Biggest upgrade path:** [What would most improve the character right now]

<!--
Optional H2 section: ## Challenge Tracking
Thêm section này nếu character chase 40/40 hoặc challenge bundle cụ thể.
Status N/40, phase plan reference, completed checklist.
Link tới `content/characters/<char>-challenges.md` nếu có file riêng.
KHÔNG required — vault-keeper không enforce.
-->

## Progress Log

<!-- Reverse-chrono. Entry mới ở TOP. Mỗi entry 2-4 câu prose narrative session, KHÔNG bullet rời rạc 5 dòng. -->

### YYYY-MM-DD

(Hôm nay làm gì, drop gì, gear upgrade nào, boss kill nào. Prose narrative — "hôm nay clear 10 T16 Strand farm Harvest, drop được Sacred Orb, total profit ~3 div, đã craft +1 socket trên gloves").

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
