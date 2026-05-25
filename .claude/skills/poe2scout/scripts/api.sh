#!/usr/bin/env bash
# poe2scout.com market data API client (POE2 workspace — realm=poe2)
#
# Usage:
#   api.sh leagues                              List leagues for poe2 realm
#   api.sh categories [league]                  List currency + unique categories
#   api.sh list <category> [league] [top]       List items in a category (sorted by price desc)
#   api.sh item <name-or-apiid> [league]        Lookup one item with full price + 7d history + volume
#   api.sh reference [league]                   Reference currency rates (chaos/divine/exalted)
#   api.sh snapshot [league]                    Bulk dump all categories + compute trends (shells to snapshot.ts)
#
# Env overrides:
#   POE2SCOUT_LEAGUE   Default league slug (otherwise auto-detect IsCurrent softcore)
#   POE2SCOUT_NOCACHE  Set to "1" to bypass HTTP cache

set -euo pipefail

REALM="poe2"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
WORKSPACE_DIR="$(cd "$SKILL_DIR/../../.." && pwd)"
DATA_DIR="$WORKSPACE_DIR/data/poe2scout"
CACHE_DIR="$WORKSPACE_DIR/tmp/poe2scout-cache"
BASE_URL="https://api.poe2scout.com"
CACHE_TTL_SEC=300  # 5 min

mkdir -p "$CACHE_DIR"

die() { echo "ERROR: $*" >&2; exit 1; }
need() { command -v "$1" >/dev/null 2>&1 || die "$1 not found — install it first"; }
need curl
need jq

# Cached GET — cache key derived from URL hash
http_get() {
  local url="$1"
  local key
  key="$(echo -n "$url" | shasum | cut -d' ' -f1)"
  local cache="$CACHE_DIR/$key.json"

  if [[ "${POE2SCOUT_NOCACHE:-0}" != "1" && -f "$cache" ]]; then
    local age=$(( $(date +%s) - $(stat -f%m "$cache" 2>/dev/null || stat -c%Y "$cache" 2>/dev/null || echo 0) ))
    if (( age < CACHE_TTL_SEC )); then
      cat "$cache"
      return
    fi
  fi

  curl -sfL --max-time 20 "$url" > "$cache.tmp" \
    || { rm -f "$cache.tmp"; die "GET $url failed"; }
  mv "$cache.tmp" "$cache"
  cat "$cache"
}

# Resolve league: explicit arg > env > auto-detect (IsCurrent, non-HC)
resolve_league() {
  local explicit="${1:-}"
  if [[ -n "$explicit" ]]; then echo "$explicit"; return; fi
  if [[ -n "${POE2SCOUT_LEAGUE:-}" ]]; then echo "$POE2SCOUT_LEAGUE"; return; fi

  http_get "$BASE_URL/$REALM/Leagues" \
    | jq -r '[.[] | select(.IsCurrent == true) | .ShortName]
             | (map(select(endswith("hc") | not)) | first) // .[0]'
}

# ===== Subcommands =====

cmd_leagues() {
  echo "## Leagues — realm=$REALM"
  echo ""
  http_get "$BASE_URL/$REALM/Leagues" | jq -r '
    .[] |
    "- **\(.Value)** — slug `\(.ShortName)` "
    + (if .IsCurrent then "(current) " else "" end)
    + "— 1 div = \(.DivinePrice | floor) \(.BaseCurrencyText)"
  '
}

cmd_categories() {
  local league; league="$(resolve_league "${1:-}")"
  local data; data="$(http_get "$BASE_URL/$REALM/Leagues/$league/Items/Categories")"

  echo "## Categories — league=$league realm=$REALM"
  echo ""
  echo "### Currency categories"
  echo "$data" | jq -r '.CurrencyCategories[] | "- `\(.ApiId)` — \(.Label)"'

  local ucnt
  ucnt="$(echo "$data" | jq -r '.UniqueCategories | length')"
  if (( ucnt > 0 )); then
    echo ""
    echo "### Unique categories"
    echo "$data" | jq -r '.UniqueCategories[] | "- `\(.ApiId)` — \(.Label)"'
  fi
}

# Fetch all pages of a single category (currencies or uniques)
# $1=league $2=kind(Currencies|Uniques) $3=category
fetch_all_category() {
  local league="$1" kind="$2" category="$3"
  local page=1 perpage=100
  local out='[]'
  while :; do
    local body
    body="$(http_get "$BASE_URL/$REALM/Leagues/$league/$kind/ByCategory?Category=$category&Page=$page&PerPage=$perpage")"
    local items pages
    items="$(echo "$body" | jq -c '.Items')"
    pages="$(echo "$body" | jq -r '.Pages')"
    out="$(jq -c -n --argjson a "$out" --argjson b "$items" '$a + $b')"
    (( page >= pages )) && break
    page=$((page + 1))
  done
  echo "$out"
}

# Pretty print a single item (null-safe for sparse Uniques PriceLogs)
print_item_detail() {
  local item_json="$1"
  echo "$item_json" | jq -r '
    ((.PriceLogs // []) | map(select(. != null))) as $pl |
    "- **\(.Text)** (`\(.ApiId)`)"
    + (if .Type then " — \(.Type)" else "" end)
    + "\n  - Current: **\(.CurrentPrice // 0 | tostring | .[0:10])** · listed now: \(.CurrentQuantity // 0)"
    + (if ($pl | length) > 0 then
        "\n  - History (last \($pl | length)d):" +
        ($pl | reverse | map(
          "\n    · \(.Time[0:10]) — \(.Price | tostring | .[0:10]) (vol \(.Quantity))"
        ) | join(""))
      else "\n  - History: none" end)
    + (if ($pl | length) >= 2 and ($pl[-1].Price // 0) > 0 then
        ($pl[0].Price as $cur | $pl[-1].Price as $old |
          "\n  - Δ7d: " + ((($cur - $old) / $old * 100) | tostring | .[0:6]) + "%")
      else "" end)
  '
}

cmd_list() {
  local category="${1:-}"; shift || true
  [[ -z "$category" ]] && die "Usage: api.sh list <category> [league] [top]"
  local league; league="$(resolve_league "${1:-}")"; [[ $# -gt 0 ]] && shift
  local top="${1:-25}"

  local cats; cats="$(http_get "$BASE_URL/$REALM/Leagues/$league/Items/Categories")"
  local kind=""
  if echo "$cats" | jq -e --arg c "$category" '.CurrencyCategories[] | select(.ApiId==$c)' >/dev/null; then
    kind="Currencies"
  elif echo "$cats" | jq -e --arg c "$category" '.UniqueCategories[] | select(.ApiId==$c)' >/dev/null; then
    kind="Uniques"
  else
    die "Unknown category '$category'. Run: api.sh categories"
  fi

  echo "## $category items — league=$league ($kind), top $top by current price"
  echo ""
  fetch_all_category "$league" "$kind" "$category" \
    | jq -r --argjson top "$top" '
        sort_by(-(.CurrentPrice // 0))[:$top] | .[] |
        ((.PriceLogs // []) | map(select(. != null))) as $pl |
        "- **\(.Text)** — \(.CurrentPrice // 0 | tostring | .[0:10]) (vol \(.CurrentQuantity // 0))"
        + (if ($pl | length) >= 2 and ($pl[-1].Price // 0) > 0 then
            ($pl[0].Price as $cur | $pl[-1].Price as $old |
              " · Δ7d \((($cur - $old) / $old * 100) | tostring | .[0:6])%")
          else "" end)
      '
}

cmd_item() {
  local query="${1:-}"; shift || true
  [[ -z "$query" ]] && die "Usage: api.sh item <name-or-apiid> [league]"
  local league; league="$(resolve_league "${1:-}")"

  # Prefer cached snapshot if exists (much faster — avoids fetching all categories)
  local snap="$DATA_DIR/$league/latest.json"
  local lc_query
  lc_query="$(echo "$query" | tr '[:upper:]' '[:lower:]')"

  if [[ -f "$snap" ]]; then
    local hit
    hit="$(jq -c --arg q "$lc_query" '
      .items // []
      | map(select(
          (.Text // "" | ascii_downcase | contains($q)) or
          (.ApiId // "" | ascii_downcase | contains($q))
        ))
      | sort_by(-.CurrentPrice) | first
    ' "$snap")"
    if [[ -n "$hit" && "$hit" != "null" ]]; then
      echo "## Item match (from snapshot)"
      echo ""
      print_item_detail "$hit"
      return
    fi
  fi

  # Live fallback — scan all categories
  echo "## Item match (live scan — slow, run snapshot for instant lookups)"
  echo ""
  local cats; cats="$(http_get "$BASE_URL/$REALM/Leagues/$league/Items/Categories")"

  local found=""
  while read -r cat; do
    local items; items="$(fetch_all_category "$league" "Currencies" "$cat")"
    local hit
    hit="$(echo "$items" | jq -c --arg q "$lc_query" '
      map(select((.Text // "" | ascii_downcase | contains($q)) or
                 (.ApiId // "" | ascii_downcase | contains($q))))
      | sort_by(-.CurrentPrice) | first
    ')"
    if [[ "$hit" != "null" && -n "$hit" ]]; then found="$hit"; break; fi
  done < <(echo "$cats" | jq -r '.CurrencyCategories[].ApiId')

  if [[ -z "$found" ]]; then
    while read -r cat; do
      local items; items="$(fetch_all_category "$league" "Uniques" "$cat")"
      local hit
      hit="$(echo "$items" | jq -c --arg q "$lc_query" '
        map(select((.Text // "" | ascii_downcase | contains($q)) or
                   (.Name // "" | ascii_downcase | contains($q)) or
                   (.ApiId // "" | ascii_downcase | contains($q))))
        | sort_by(-(.CurrentPrice // 0)) | first
      ')"
      if [[ "$hit" != "null" && -n "$hit" ]]; then found="$hit"; break; fi
    done < <(echo "$cats" | jq -r '.UniqueCategories[].ApiId')
  fi

  [[ -z "$found" ]] && die "No item matching '$query' in league=$league"
  print_item_detail "$found"
}

cmd_reference() {
  local league; league="$(resolve_league "${1:-}")"
  echo "## Reference currencies — league=$league"
  echo ""
  http_get "$BASE_URL/$REALM/Leagues/$league/ReferenceCurrencies" | jq -r '
    .[] | "- **\(.Text)** (`\(.ApiId)`) — 1 \(.Text) = \(.RelativePrice) \(.DefaultCurrency.Text // "exalted")"
  '
  echo ""
  echo "League rates (from /Leagues):"
  http_get "$BASE_URL/$REALM/Leagues" \
    | jq -r --arg lg "$league" '
        .[] | select(.ShortName == $lg) |
        "- 1 Divine Orb = \(.DivinePrice | floor) \(.BaseCurrencyText)\n- 1 Chaos Orb = \(.ChaosDivinePrice) per div"
      '
}

cmd_snapshot() {
  local league; league="$(resolve_league "${1:-}")"
  need bun
  bun "$SCRIPT_DIR/snapshot.ts" --realm "$REALM" --league "$league"
}

# ===== Dispatcher =====

case "${1:-}" in
  leagues)    shift; cmd_leagues "$@" ;;
  categories) shift; cmd_categories "$@" ;;
  list)       shift; cmd_list "$@" ;;
  item)       shift; cmd_item "$@" ;;
  reference)  shift; cmd_reference "$@" ;;
  snapshot)   shift; cmd_snapshot "$@" ;;
  ""|-h|--help|help)
    sed -n '2,12p' "$0"
    ;;
  *)
    die "Unknown subcommand: $1. Run api.sh help."
    ;;
esac
