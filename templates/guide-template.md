---
template_path: templates/guide-template.md
document_type: guide
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/guides/.+\\.md$"
  template:
    required: true
    pattern: "^templates/guide-template\\.md$"
  document_type:
    required: true
    enum: [guide]
  title:
    required: true
  status:
    required: true
    enum: [draft, review, published, outdated]
  created:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  updated:
    required: true
    pattern: "^\\d{4}-\\d{2}-\\d{2}$"
  game:
    required: true
    enum: [poe1, poe2]
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Guide Title]

> **Quick Summary:** [1-2 sentence what this guide teaches and who it's for.]

## Overview

[Who this guide is for, what they will learn, prerequisites.]

## Prerequisites

- [Prior knowledge or gear required]
- [Build state (e.g. "any league-start build", or "this build at level 70+")]

## Step-by-Step

### Step 1: [Phase Name]

[Description, screenshots if helpful, key decisions.]

### Step 2: [Phase Name]

[…]

## Tips & Pitfalls

- [Tip 1]
- [Common mistake 1]

## Related Resources

[Cross-links to builds, mechanics, farming strategies that build on or extend this guide.]

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
