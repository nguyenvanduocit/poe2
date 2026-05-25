---
name: poewiki2
description: Access Path of Exile 2 wiki data via local goscrape mirror — search, read, and reference scraped wiki pages from ./data/poe2-wiki/. POE2 ONLY (poe2wiki.net). For POE1 use /poewiki1; for POE2 database use /poedb2.
version: 1.0.0
tags: [wiki, data, research, poe2]
---

# PoE 2 Wiki Tools (Local Mirror — poe2wiki.net)

POE2 wiki được mirror về local qua `goscrape --markdown`. Mọi query đi qua filesystem (`rg`/`grep`/`find`/`Read`) trên thư mục `./data/poe2-wiki/`, không gọi API live.

**Khi nào dùng skill này:**
- User hỏi về POE2 mechanic / item / skill / monster / atlas / league system
- Cần verbatim text từ wiki POE2 cho content note (Remnant + Runic Recipe, Ocean Exploring, Lich, Spirit Walker, v.v.)
- Lookup unique item POE2 (The Hollow Mask, Reverie, Facebreaker POE2, v.v.)

**KHÔNG dùng skill này khi:**
- POE1 → dùng `/poewiki1` (poewiki.net mirror)
- POE2 database / item base stats / atlas tool / passive tree editor → dùng `/poedb2` (poe2db.tw)
- Live price → `/poe-ninja2`
- Build calc → `/pob2` hoặc `/mobalytics`

## Mirror Location

```
data/poe2-wiki/
├── <Page_Title>.md     # MediaWiki slug, _ thay space, case-sensitive
└── ...
```

Layout flat — không có `wiki/` subfolder. `download.sh` flatten tự động sau khi scrape (goscrape v0.5.0+ đã fix host-wrapper bug + script post-process flatten URL path).

Ví dụ: `data/poe2-wiki/The_Hollow_Mask.md`, `data/poe2-wiki/Remnant.md`, `data/poe2-wiki/Spirit_Walker.md`.

## Refresh Mirror

```bash
./.claude/skills/poewiki2/scripts/download.sh
```

Script dùng `goscrape --markdown` với exclude rules (bỏ MediaWiki action URLs, assets, load.php). Rate-limited 4 req/s, polite tới poe2wiki.net.

Flags hữu ích nếu cần partial refresh:

```bash
# Limit depth
goscrape --markdown --depth 2 -o ./data/poe2-wiki https://www.poe2wiki.net

# Chỉ unique items hay dùng
goscrape --markdown --include '/wiki/(The_Hollow_Mask|Reverie|Mageblood|.*Voidstone)' \
  -o ./data/poe2-wiki https://www.poe2wiki.net
```

## Release Notes / Patch Notes Fetcher

```bash
./.claude/skills/poewiki2/scripts/release-notes/fetch.sh                # latest POE2 (auto-detect)
./.claude/skills/poewiki2/scripts/release-notes/fetch.sh 0.5.0          # version cụ thể
```

Dùng `markitdown` → clean text-only Markdown (no icons/images). Output `data/release-notes/poe2/Version_X.Y.Z.md` + symlink `latest.md`.

> **POE2 0.5 "Runes of Aldur"** patch notes nằm tại `data/release-notes/poe2/Version_0.5.0.md`. Đây là source verbatim cho mọi note về Remnant / Runic Recipe / Ocean Exploring / Spirit Walker / Martial Artist / Atlas Endgame rewrite.

## Query Workflows

### Tìm page theo title

```bash
find data/poe2-wiki -name "The_Hollow_Mask.md"
find data/poe2-wiki -iname "*remnant*"
```

### Search nội dung

```bash
# Page nhắc tới một mechanic
rg -l "Runic Ward" data/poe2-wiki/

# Context xung quanh keyword
rg -C 2 "Verisium" data/poe2-wiki/

# Search trong folder cụ thể
rg "companion.*hunt" data/poe2-wiki/
```

### Đọc page

Dùng tool Read với path tuyệt đối, vd `data/poe2-wiki/The_Hollow_Mask.md`.

## Importing Wiki Content vào content/

1. **Locate**: `rg`/`find` trong `data/poe2-wiki/`.
2. **Read** file `.md`.
3. **Decide folder** (mechanics / guides / farming / builds / characters — xem `CLAUDE.md`).
4. **Scaffold** via `/vault.new`.
5. **Compose** theo author voice — paraphrase, KHÔNG paste raw, KHÔNG "theo poe2wiki...".
6. **Validate** `bun run validate --path <file>`.

## Game Concept Linking (POE2)

Trong `content/` prose, link POE2 game concept qua MDC component dùng **poe2wiki.net domain**:

```markdown
:wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask"}
:wiki-link{url="https://www.poe2wiki.net/wiki/Remnant"}
:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit_Walker"}
```

Component fetch live từ poe2wiki.net Cargo API qua `server/api/wiki-data`. KHÔNG copy raw stat từ mirror vào content/.
