---
template_path: templates/patch-notes-template.md
document_type: patch-notes
sections:
  - "*"
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?mechanics/leagues/.+\\.md$"
  template:
    required: true
    pattern: "^templates/patch-notes-template\\.md$"
  document_type:
    required: true
    enum: [patch-notes]
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
  patch:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Expansion Name]

<!--
Patch-notes template — KHÁC với mechanic/build/guide.
Đây là EXCEPTION duy nhất với owner-voice rule trong CLAUDE.md: doc này là
archive VERBATIM của patch note chính thức GGG (đã dịch tiếng Việt), KHÔNG digest,
KHÔNG owner-voice. Mục đích: full changelog browsable trên site để tra cứu từng dòng.

Bản digested owner-voice (cái gì đáng đổi cách chơi) là một doc RIÊNG dùng
mechanic-template (vd return-of-the-ancients.md). Hai doc cùng folder, khác mục đích:
- patch-notes-template → full changelog reference (doc này)
- mechanic-template     → digested gameplay overview

Quy ước:
- Title KHÔNG kèm patch number (site auto render chip từ frontmatter `patch`).
  Dùng tên expansion + "Patch Notes" để phân biệt với overview. Vd "Patch Notes — Return of the Ancients".
- `patch` = số patch cụ thể của changelog này (identity của doc).
- Section H2 = đúng các category trong patch note gốc (League / Endgame / Skill / Support /
  Unique / Monster / Bug Fix ...), thay đổi theo từng patch → sections dùng wildcard "*".
- Slug filename GIỮ patch prefix (vd `0-5-0-patch-notes.md`).
- Intro: 1 đoạn ghi nguồn (official GGG, ngày đăng, URL gốc, ghi chú bản dịch) + link
  file raw trong data/ + link sang doc overview digested.
- Body changelog giữ nguyên văn bản dịch, KHÔNG paraphrase, KHÔNG chèn bình luận.
-->

(Intro 1 đoạn: đây là patch note chính thức nào, GGG đăng ngày nào, link bản gốc + file raw `data/release-notes/...`, và link sang doc overview digested cùng patch. Sau intro là toàn bộ changelog verbatim theo category.)

## [Category 1 — vd League Runes of Aldur]

- (Bullet thay đổi, giữ nguyên văn dịch từ patch note gốc.)

## [Category N]

- (...)

## Relationships

```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang doc overview digested + mechanic/build chịu tác động lớn từ patch. Mỗi dòng: `- **predicate** [Title](/route) — reason`.)
