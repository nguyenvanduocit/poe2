#!/usr/bin/env python3
"""Extract the patch-notes post body from a GGG forum thread HTML page.

Reads HTML from the path in argv[1] (or stdin), locates the first forum post's
content container — the ``<div class="content">`` that encloses the ``<h2>``
patch title — strips ``<img>`` tags, splits multi-entry list items, and writes
that fragment HTML to stdout.

Why extract the post body before converting to Markdown: the forum page is a
table-based layout. Feeding the whole page to pandoc/markitdown leaves a wall of
raw HTML (or silently truncates). Handing the converter ONLY the post-body
fragment lets it emit clean Markdown headings and bullet lists.

Selector is semantic, not positional: we anchor on the ``<h2>`` title and walk
up to its enclosing ``div.content``. Fails loudly if the structure is missing —
that signals a blocked fetch (Cloudflare) or a forum redesign, both of which
should stop the pipeline rather than emit a partial file.

GGG sometimes packs several patch-note entries into a single ``<li>``, one
entry per line, separated by a newline or a ``<br>``. With ``pandoc --wrap=none``
those collapse into one giant bullet. ``split_packed_list_items`` restores one
bullet per entry by splitting such list items before conversion.
"""

import sys

from bs4 import BeautifulSoup, NavigableString


def split_packed_list_items(node, soup) -> None:
    """Split leaf ``<li>`` elements that pack several entries (newline/``<br>``
    separated) into one ``<li>`` per entry. Skips any ``<li>`` that holds a
    nested list, so sub-lists are left intact."""
    for li in list(node.find_all("li")):
        if li.find(["ul", "ol"]):
            continue
        has_break = any(getattr(c, "name", None) == "br" for c in li.children) or any(
            isinstance(c, NavigableString) and "\n" in c for c in li.children
        )
        if not has_break:
            continue

        segments = [[]]
        for child in list(li.children):
            if getattr(child, "name", None) == "br":
                segments.append([])
                continue
            if isinstance(child, NavigableString) and "\n" in child:
                parts = str(child).split("\n")
                segments[-1].append(NavigableString(parts[0]))
                for part in parts[1:]:
                    segments.append([NavigableString(part)])
            else:
                segments[-1].append(child)

        made = False
        for seg in segments:
            if not any(
                getattr(c, "name", None) is not None or str(c).strip() for c in seg
            ):
                continue
            new_li = soup.new_tag("li")
            for c in seg:
                # original tree nodes must be detached; freshly built strings
                # (from the newline split) have no parent and are appended as-is.
                new_li.append(c.extract() if c.parent is not None else c)
            li.insert_before(new_li)
            made = True
        if made:
            li.decompose()


def main() -> None:
    src = sys.argv[1] if len(sys.argv) > 1 else "/dev/stdin"
    html = open(src, encoding="utf-8", errors="replace").read()
    soup = BeautifulSoup(html, "html.parser")

    title = soup.find("h2")
    if title is None:
        sys.exit(
            "extract-forum: no <h2> patch title found — fetch was blocked "
            "(Cloudflare) or the forum layout changed"
        )

    node = title.find_parent("div", class_="content")
    if node is None:
        sys.exit(
            "extract-forum: <h2> title has no enclosing <div class='content'> "
            "— forum post structure changed"
        )

    for img in node.find_all("img"):
        img.decompose()

    split_packed_list_items(node, soup)

    sys.stdout.write(str(node))


if __name__ == "__main__":
    main()
