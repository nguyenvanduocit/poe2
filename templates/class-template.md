---
template_path: templates/class-template.md
document_type: class
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?mechanics/classes/.+\\.md$"
  template:
    required: true
    pattern: "^templates/class-template\\.md$"
  document_type:
    required: true
    enum: [class]
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
  class_type:
    required: true
    enum: [Str, Dex, Int, "Str/Dex Hybrid", "Str/Int Hybrid", "Dex/Int Hybrid", "Tri-attribute Hybrid"]
  complexity:
    required: true
    enum: [low, medium, high]
  accessibility:
    required: true
    enum: [beginner-friendly, intermediate, advanced, all-content]
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  patch:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Class Name]

One-paragraph overview of the class: starting position on the passive tree, core stat allocation, and the playstyles it naturally enables. Mention the three ascendancies and what each specialises in.

## Starting Stats & Passive Tree Position

Describe where the class starts on the passive tree and the nearby notable clusters. What base stats does the class start with? What types of builds are naturally accessible from this starting position without heavy pathing?

## Ascendancies

### [Ascendancy 1]

What this ascendancy does and what builds it enables. Key nodes that define the ascendancy's power, in the order you pick them.

### [Ascendancy 2]

What this ascendancy does and what builds it enables. Key nodes, pick order.

### [Ascendancy 3]

What this ascendancy does and what builds it enables. Key nodes, pick order.

## Typical Build Archetypes

What are the most common and effective build archetypes for this class? For each, describe the playstyle in one sentence and which ascendancy it typically uses.

## League Start Viability

How well does this class serve as a league starter? Which ascendancy and build is the safest, cheapest, and most forgiving entry point?

## Strengths & Weaknesses

What does this class do better than others, and where does it fall short? Be specific — which content does it excel at or struggle with? List ≥ 3 failure-mode scenario (map mod hostile / one-shot encounter / gear floor / patch sensitivity / league start) — see **Failure Mode / Devil's Advocate** in CLAUDE.md.

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
