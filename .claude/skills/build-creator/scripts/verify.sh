#!/bin/bash
# Run POB2 headless verify on a build XML file.
# Usage: verify.sh <xml-file>
# Prints a single ##STATS##{...json...} line (plus PoB startup chatter on stderr-ish stdout).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# .claude/skills/build-creator/scripts → climb 4 to repo root
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
POB2_SRC="$REPO_ROOT/data/pob-source/poe2/src"
RT="$REPO_ROOT/data/pob-source/poe2/runtime/lua"
LR="$HOME/.luarocks"

XML_FILE="${1:?verify.sh: missing xml file arg}"
# Resolve to absolute (cwd changes below)
XML_FILE="$(cd "$(dirname "$XML_FILE")" && pwd)/$(basename "$XML_FILE")"

export LUA_PATH="$RT/?.lua;$RT/?/init.lua;$LR/share/lua/5.1/?.lua;$LR/share/lua/5.1/?/init.lua;./?.lua;./?/init.lua;;"
export LUA_CPATH="$LR/lib/lua/5.1/?.so;;"

cd "$POB2_SRC"
luajit "$SCRIPT_DIR/verify.lua" "$XML_FILE"
