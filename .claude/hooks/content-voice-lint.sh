#!/usr/bin/env bash
# content-voice-lint.sh — PostToolUse gate (T-022)
# Cảnh báo các anti-pattern voice tự nhiên grep được khi ghi content/**/*.md.
# Non-blocking: LUÔN exit 0. Surface qua hookSpecificOutput.additionalContext.
# Ref: CLAUDE.md ## Content Writing Voice + memory feedback_natural_game_native_voice.
set -u

input="$(cat)"
command -v jq >/dev/null 2>&1 || exit 0

fp="$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty' 2>/dev/null)"
[ -n "$fp" ] || exit 0

# chỉ markdown trong content/, bỏ qua index.md (vault-keeper exclude)
case "$fp" in
  *content/*.md) ;;
  *) exit 0 ;;
esac
case "$fp" in
  */index.md) exit 0 ;;
esac
[ -f "$fp" ] || exit 0

nl=$'\n'
issues=""

# 1) dash-subtitle heading "## X — Y" (whitelist canonical "Failure Modes")
while IFS= read -r line; do
  [ -n "$line" ] || continue
  issues="${issues}${nl}  • dash-subtitle heading (viết sentence-case nói thẳng, bỏ '— subtitle'): ${line}"
done < <(grep -nE '^#{2,3} .+ — .+' "$fp" 2>/dev/null | grep -vE '^[0-9]+:#{2,3} (Failure Modes|Patch [0-9]|Version |[0-9]{4}-[0-9]{2}-[0-9]{2})' || true)

# 2) gạch nối từ Việt + homophone đã biết
while IFS= read -r line; do
  [ -n "$line" ] || continue
  issues="${issues}${nl}  • token chối (gạch nối VN / đồng âm — vd 'đàn đông'≈'đàn ông' → 'cả đàn/nguyên đàn'): ${line}"
done < <(grep -nE 'đàn-đông|nguyên-đàn|đàn đông' "$fp" 2>/dev/null || true)

[ -n "$issues" ] || exit 0

msg="⚠️ voice-lint (${fp}) — anti-pattern voice tự nhiên (sửa theo CLAUDE.md ## Content Writing Voice):${issues}"
jq -nc --arg m "$msg" '{hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$m}}' 2>/dev/null
exit 0
