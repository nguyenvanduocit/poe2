---
template_path: templates/guide-template.md
document_type: guide
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?guides/.+\\.md$"
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
  league:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
  patch:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Guide Title]

<!--
Guide tutorial template. Voice: tiếng Việt, owner-voice, prose-first. Title KHÔNG kèm league/patch.
Term game → :wiki-link{url="..."} lần đầu (POE2 → poe2wiki.net).

RIGHT-SIZING: guide là tutorial tuần tự — required-core = Intro + các bước (Step-by-Step) + Tips/Pitfalls.
CẮT section không cần, ĐỪNG pad. KHÔNG mở `## Quick Summary`/`## Overview` meta-summary ("guide này dạy gì,
cho ai") — vào thẳng. Cross-link đặt ở `## Relationships`, KHÔNG mở `## Related Resources` trùng nó.
Heading: sentence-case tiếng Việt nói thẳng (vd `## Mở khoá atlas`), KHÔNG dash-subtitle `## X — Y`.
-->

(Intro 2-3 câu — không heading. Guide làm được gì cho người đọc + prerequisite (gear/build state) gói gọn vào đây, đừng mở section Overview riêng.)

## [Bước 1: tên giai đoạn]

(Mô tả, key decision. Tutorial tuần tự — mỗi bước một H2 hoặc H3 tuỳ độ dài.)

## [Bước 2: tên giai đoạn]

(…)

## Tips & Pitfalls

(Omit nếu tip đã gói trong từng bước.)

- [Tip / lỗi hay gặp]

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Route bỏ prefix `content/` và đuôi `.md`.)
