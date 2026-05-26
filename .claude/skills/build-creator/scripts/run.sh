#!/bin/bash
# build-creator entry point. Runs cli.lua inside the PoB2 headless env.
# Usage: run.sh <command> [args...]   (e.g. run.sh test, run.sh build spec.json)
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# .claude/skills/build-creator/scripts → climb 4 to repo root
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
POB="$REPO_ROOT/data/pob-source"
RT="$POB/runtime/lua"
LR="$HOME/.luarocks"

export LUA_PATH="$POB/src/?.lua;$RT/?.lua;$RT/?/init.lua;$LR/share/lua/5.1/?.lua;$LR/share/lua/5.1/?/init.lua;./?.lua;./?/init.lua;;"
export LUA_CPATH="$LR/lib/lua/5.1/?.so;;"

cd "$POB/src"
exec luajit "$SCRIPT_DIR/cli.lua" "$@"
