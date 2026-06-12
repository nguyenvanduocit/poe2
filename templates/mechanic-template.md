---
template_path: templates/mechanic-template.md
document_type: mechanic
sections:
  - "*"
  - version-history
  - relationships
fields:
  $path:
    pattern: "^content/(en/)?(guides|crafting)/.+\\.md$"
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
  patch:
    required: true
    pattern: "^\\d+\\.\\d+(\\.\\d+)?$"
---

# [Mechanic Name]

<!--
Mechanic guide template — viết theo skill /write-mechanic-tutorial.
Voice: tiếng Việt, owner-voice (KHÔNG "theo wiki"), prose-first, ground bằng số thật.
Title KHÔNG kèm league/patch. Term game → :wiki-link{url="..."} lần đầu.

RIGHT-SIZING (quan trọng nhất): số section khớp ĐỘ PHỨC TẠP mechanic.
  - Mechanic atomic (1 crafting trick / 1 interaction / 1 gambling play) → 3-5 section là đủ.
  - League system / skill phức tạp → mới 8-12 section.
  - Thêm section mỏng cho "đủ template" = VI PHẠM. Mỗi section ≥2 câu nội dung thật.
HEADING: sentence-case tiếng Việt nói thẳng section làm gì (vd "## Toán break-even").
  KHÔNG dash-subtitle "## X — Y". Tên archetype EN bên dưới chỉ là nhãn để biết LOẠI section.

REQUIRED CORE (luôn có, tối thiểu 3): Intro + 1 section cơ chế + 1 section takeaway.
OPTIONAL MENU (chỉ thêm khi mechanic cần — trigger dùng-khi/bỏ-khi ở mỗi placeholder dưới).
Xem chi tiết: .claude/skills/write-mechanic-tutorial/SKILL.md "## Section structure".
-->

(Intro 2-4 câu, không heading. Cơ chế là gì + visual/tooltip anchor · xuất hiện/đổi ở patch nào · ai/build đang dùng (named hoặc % poe.ninja) · optional: vì sao quan tâm bây giờ. Câu nào không có nội dung thật thì bỏ.)

## [Cơ chế hoạt động thế nào]   <!-- REQUIRED · archetype How It Works -->

(Sequential narrative: trigger → player action → game response → outcome. Visual cue nếu có. Ground bằng số thật — từ character/PoB khi apply, else market snapshot / empirical run / wiki-poedb. Ambiguity → nhúng Hypothesis/Evidence/Kết luận. Đây thường là section dài nhất.)

<!-- ─────────── OPTIONAL MENU — xoá placeholder không dùng ───────────

## [Toán/derivation]              · dùng khi có scaling đa nguồn / phép tính không tầm thường (DPS/EHP/break-even/xác suất). Line-item → con số cuối. Single source → 1 câu note, không cần section.
## [Tương tác chính]              · dùng khi synergy/anti-synergy đáng kể. Mỗi cái + cơ chế underlying + `Exclusion check: <none|list>`. Sub "wording distinction" nếu modifier dễ nhầm.
## [Tối ưu]                       · dùng khi có lựa chọn đầu tư/thực thi cần ưu tiên. Kiểm breakpoint trước khi quote uplift %.
## [Tương tác với league content] · dùng cho league mechanic overlay (Delirium/Breach/Harvest). Bỏ cho skill/item thường.
## [Cái không hoạt động]          · dùng khi có kỳ vọng sai phổ biến (mod không proc, support không scale).
## [Lỗi hay gặp]                  · dùng khi có lỗi thật tốn kém. "Sai — Đúng — Lý do" + cost/loss number.
## [Chi phí & ràng buộc]          · dùng khi setup tốn currency / có exclusion / gating / downside thật.
────────────────────────────────────────────────────────────────── -->

## [Tổng kết / Verdict]   <!-- REQUIRED · archetype Verdict & Open Questions -->

(Recap gọn. Khi doc có phán quyết → verdict label BUFF/NERF/NEUTRAL/EXPLOITABLE/OUTDATED + open question. Mechanic thuần giải thích thì recap không cần verdict label giả.)

## Version History   <!-- OPTIONAL · dùng khi lịch sử patch ảnh hưởng tính hợp lệ advice -->

### Patch X.Y.Z
(Prose 1-3 câu narrative kết nối — ngày, change content, tác động đến advice.)

## Relationships   <!-- OPTIONAL · cross-link nội bộ, đặt cuối doc -->


```yaml section-rules
required: false
list:
  items:
    pattern: "^(synergizes_with|related|related_mechanics|related_builds|related_guides|requires|used_by|references|derived_from|derived_builds|source_research|competes_with|alternative_to|supports|farming_relevance|part_of|parent|follows_build) "
```

(Cross-link sang concept liên quan. Mỗi dòng: `- **predicate** [Title](/route) — reason`. Predicate dùng snake_case: synergizes_with, related, requires, used_by, related_mechanics, references, derived_from, competes_with, alternative_to, supports. Route bỏ prefix `content/` và đuôi `.md`.)
