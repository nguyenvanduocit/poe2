#!/usr/bin/env bash
# Fetch latest (or specific) Path of Exile 2 release notes / version page.
#
# Uses `markitdown` to fetch the poe2wiki.net "Version X.Y.Z" page and save
# clean Markdown locally (no images, no icons).
#
# Usage:
#   ./.claude/skills/poewiki/scripts/release-notes/fetch.sh                # latest POE2 (auto-detect)
#   ./.claude/skills/poewiki/scripts/release-notes/fetch.sh 0.5.0          # specific version
#
# Output:
#   data/release-notes/poe2/Version_0.5.0.md
#   data/release-notes/poe2/latest.md  → symlink

set -euo pipefail

# release-notes/fetch.sh → ../../../../.. = project root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/../../../../.." && pwd)"
OUTPUT_DIR="${ROOT_DIR}/data/release-notes/poe2"

MARKITDOWN_BIN="/Library/Frameworks/Python.framework/Versions/3.12/bin/markitdown"
TARGET_HOST="www.poe2wiki.net"
HISTORY_URL="https://${TARGET_HOST}/wiki/Version_history"

REQUESTED_VER="${1:-}"

mkdir -p "${OUTPUT_DIR}"

# --- Check markitdown availability ------------------------------------------
if [[ ! -x "$MARKITDOWN_BIN" ]]; then
  if command -v markitdown >/dev/null 2>&1; then
    MARKITDOWN_BIN="$(command -v markitdown)"
  else
    echo "ERROR: markitdown not found." >&2
    echo "Install with: pip install 'markitdown[all]'" >&2
    exit 1
  fi
fi

# --- Determine version -------------------------------------------------------
if [[ -n "$REQUESTED_VER" ]]; then
  VER="$REQUESTED_VER"
  echo "Using requested version: ${VER}"
else
  echo "Detecting latest POE2 version from Version_history..."
  VER=$(curl -s "${HISTORY_URL}" \
    | grep -oE 'href="/wiki/Version_[0-9.]+"[^>]*>[^<]+</a>' \
    | grep -v 'redlink' \
    | head -1 \
    | sed -E 's|.*Version_([0-9.]+)".*|\1|' || true)

  if [[ -z "$VER" ]]; then
    echo "ERROR: Could not detect latest version from ${HISTORY_URL}" >&2
    exit 1
  fi
  echo "Latest detected: Version ${VER}"
fi

PAGE="Version_${VER}"
PAGE_URL="https://${TARGET_HOST}/wiki/${PAGE}"
MD_FILE="${OUTPUT_DIR}/${PAGE}.md"

echo ""
echo "Fetching ${PAGE} from ${TARGET_HOST} via markitdown..."

"$MARKITDOWN_BIN" "${PAGE_URL}" > "${MD_FILE}"

if [[ ! -s "${MD_FILE}" ]]; then
  echo "ERROR: markitdown produced empty file for ${PAGE_URL}" >&2
  exit 1
fi

ln -sf "${PAGE}.md" "${OUTPUT_DIR}/latest.md"

echo ""
echo "✓ Done!"
echo ""
echo "POE2 release notes saved to:"
echo "  ${MD_FILE}"
echo ""
echo "Quick access:"
echo "  ${OUTPUT_DIR}/latest.md"
echo ""
echo "Preview (first 50 lines):"
echo "────────────────────────────────────────────────────────────"
head -n 50 "${MD_FILE}" | cat
echo "────────────────────────────────────────────────────────────"
