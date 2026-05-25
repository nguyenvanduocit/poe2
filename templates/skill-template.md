---
template_path: templates/skill-template.md
document_type: skill
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?mechanics/skills/.+\\.md$"
  template:
    required: true
    pattern: "^templates/skill-template\\.md$"
  document_type:
    required: true
    enum: [skill]
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
  gem_color:
    required: true
    enum: [red, green, blue, white, prismatic]
  skill_type:
    required: true
    enum: [active, support, "exceptional support", trigger, vaal]
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Skill Name]

One-paragraph overview: what the skill does, what gem color/type it is, and what playstyle it enables. Mention the core mechanic that makes it interesting or powerful.

## Mechanics

Explain how the skill works in detail — the actual game mechanics, not the tooltip. Cover: targeting, projectile behavior, area of effect, trigger conditions, interaction with flasks/auras/buffs. Include the numbers that matter (base damage effectiveness, hit rate, duration). DPS claim ≥ 100k kèm derivation hoặc PoB link. Document `Exclusion check: <none | list>` nếu skill có one-way block (vd Avatar of Fire chặn cold/lightning damage trên skill phys/fire). See **Interaction Verification Protocol** in CLAUDE.md.

This section should answer "why does this skill deal damage the way it does?" so a player understands how to scale it.

## Scaling

What stats improve this skill's damage and effectiveness? Walk through the relevant scaling vectors in priority order:

- **Primary scaling:** [e.g., Spell Damage, Fire Damage]
- **Secondary scaling:** [e.g., Cast Speed, Area of Effect]
- **Unique interactions:** [e.g., Ignite, Shocks, Stacking mechanics]

## Recommended Links

Describe the best 6-link setup and why each support is chosen. Also mention budget alternatives (4-link, 5-link) and what to drop first when gem slots are scarce.

**6-Link:** [Skill] + [Support] + [Support] + [Support] + [Support] + [Support]  
**4-Link (budget):** [Skill] + [Support] + [Support] + [Support]

## Leveling Notes

Does the gem level significantly change the skill? Any quality thresholds worth noting? What level do you want this gem before mapping?

## Common Builds

Which ascendancies and build archetypes typically use this skill as their main damage source? Link to build documents where available.

## Related Mechanics

Other game systems that interact meaningfully with this skill — curses, ailments, specific item interactions, atlas passives that boost it.

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
