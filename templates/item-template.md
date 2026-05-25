---
template_path: templates/item-template.md
document_type: item
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?mechanics/items/.+\\.md$"
  template:
    required: true
    pattern: "^templates/item-template\\.md$"
  document_type:
    required: true
    enum: [item]
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
  rarity:
    required: true
    enum: [unique, rare-base, currency, divination-card, jewel, flask, system]
  item_class:
    required: true
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Item Name]

One-paragraph overview: what the item is, what it does, and why it matters. Name the builds or archetypes that revolve around it.

## Item Stats

Full item stats as they appear in-game. Use exact wording from the tooltip.

```
[Item Name]
[Base Type]
[Implicit mods]
--------
[Explicit mods, exact wording]
--------
[Flavour text if notable]
```

## Why This Item Is Powerful

Explain the core mechanic that makes this item noteworthy. Don't just restate the tooltip — explain what interaction, synergy, or scaling the item enables and why that's significant. Include the math where relevant.

## Build Enabler Mechanics

How does this item change your character? What specific interactions, stat thresholds, or playstyle shifts does it create? This section answers "what do you build differently because of this item?" Document `Exclusion check: <none | list>` if the item disables or requires a specific keystone/mechanic (vd Chaos Inoculation lock Life ở 1, Eldritch Battery chuyển ES → mana pool, Doryani's Prototype disable own res). See **Interaction Verification Protocol** in CLAUDE.md.

## Acquisition

How do you get this item? Drops from which boss or area? Can it be target-farmed? What's the typical price range and price trend? Note if it's league-specific.

## Version History

Notable changes across patches that affected the item's power level or use cases. Helps understand if an old guide is still relevant.

## Related Items & Alternatives

Items that serve a similar role or that are commonly paired with this one. When would you use an alternative instead?

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
