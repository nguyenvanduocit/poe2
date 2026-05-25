---
template_path: templates/mechanic-template.md
document_type: mechanic
sections:
  - how-it-works
  - key-interactions
  - optimization
  - "*"
  - version-history
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?(mechanics|skilltree)/.+\\.md$"
  template:
    required: true
    pattern: "^templates/mechanic-template\\.md$"
  document_type:
    required: true
    enum: [mechanic]
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
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Mechanic Name]

<!--
Mechanic guide template — viết theo skill /write-mechanic-tutorial.
Voice: tiếng Việt, owner-voice (KHÔNG "theo wiki"), prose-first, ≥1 ví dụ với số thật từ character mình.
Title KHÔNG kèm league/patch.
Term game (skill/item/scarab/monster) → bold + wiki link lần đầu.
Cross-link → section ## Relationships ở cuối, mỗi dòng: - **predicate** [Title](/route) — reason.
-->

(Intro 2-3 câu. Câu 1: cơ chế là gì + xuất hiện ở đâu trong game. Câu 2: ai cần hiểu — build dùng / farming reliant / boss encounter. Câu 3 optional: nếu là league mechanic, version/patch ra mắt.)

## How It Works

(Sequential narrative explanation. Trigger → player action → game response → outcome. Visual cue nếu có. **Phải có ≥1 ví dụ cụ thể với số thật từ character mình** — vd "TheLeader_A có ES 6,114, áp Doryani's -200% lightning res lên enemy → Wretched Defiler DPS nhân ~3.5x lên ~23.2M". Section dài nhất, 2-4 đoạn prose. Section H2 giữ tiếng Anh để consistent với legacy + vault-keeper; prose tiếng Việt.)

## Key Interactions

(Synergies — cái gì làm mechanic mạnh hơn. Anti-synergies — cái gì break. Mỗi interaction kèm cơ chế underlying, không chỉ "interact tốt với X". Mỗi interaction claim kèm 1 dòng `Exclusion check: <none | list>` confirm one-way block đã verify (Avatar of Fire, Eldritch Battery, Resolute Technique, Chaos Inoculation, etc.). Xem **Interaction Verification Protocol** trong CLAUDE.md hoặc invoke agent `interaction-mapper`.)

## Optimization

(Atlas tree node, scarab, map mod, character-side investment — skill / item / passive. Execution tip. Prioritise theo impact. Prose, không bullet 30 node. Nếu mechanic có breakpoint (action speed, resist cap, suppress threshold, minion cap, animation cancel) → kiểm breakpoint trước khi quote uplift %; document explicit. Xem **Breakpoint Awareness** trong CLAUDE.md.)

## Interactions with Other Content

(Mechanic này khi overlay với league content khác — Delirium, Breach, Harvest, Mirage. Quan trọng cho league mechanic; có thể skip cho skill/item nếu không apply.)

## What Doesn't Work

(Anti-pattern. Mech nào không proc, support nào không scale, item nào không stack. Explicit như maxroll — "Penance Brand NEEDS Shaper of Flames, không có thì không ignite".)

## Common Mistakes

(Mỗi mistake giải thích **cả mistake lẫn correct approach lẫn lý do**. Format prose: "Sai — ... Đúng — ... Lý do — ...". Hoặc numbered list nếu ≥3 mistake.)

## Summary

(3-5 bullet recap. Chỗ duy nhất bullet thoải mái.)

## Version History

### Patch X.Y.Z
- (Significant change — ngày, change content, tác động đến advice trong doc.)

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Predicate dùng snake_case: synergizes_with, related, requires, used_by, related_mechanics, references, derived_from, competes_with, alternative_to, supports. Route bỏ prefix `content/` và đuôi `.md`.)
