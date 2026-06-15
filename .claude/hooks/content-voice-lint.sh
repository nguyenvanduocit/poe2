#!/usr/bin/env bash
# content-voice-lint.sh — PostToolUse gate (T-022, mở rộng T-040)
# Cảnh báo anti-pattern voice (calque văn dịch + AI-ese tics) khi ghi content/**/*.md.
# Pattern list = phần grep-được của templates/voice-lexicon-vi.md — sửa lexicon trước, sync vào đây sau.
# Non-blocking: LUÔN exit 0. Surface qua hookSpecificOutput.additionalContext.
# Ref: CLAUDE.md ## Content Writing Voice + templates/voice-lexicon-vi.md + memory feedback_natural_game_native_voice.
set -u

input="$(cat)"
command -v jq >/dev/null 2>&1 || exit 0

fp="$(printf '%s' "$input" | jq -r '.tool_input.file_path // empty' 2>/dev/null)"
[ -n "$fp" ] || exit 0

# chỉ markdown trong content/, bỏ qua index.md
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

# check "<message>" "<grep -E pattern>" ["<exclude pattern>"]
# In tối đa 3 match + tổng count để không spam context.
check() {
  local msg="$1" pat="$2" excl="${3:-}"
  local out
  out="$(grep -inE "$pat" "$fp" 2>/dev/null || true)"
  [ -n "$excl" ] && out="$(printf '%s\n' "$out" | grep -vE "$excl" || true)"
  [ -n "$out" ] || return 0
  local count head3
  count="$(printf '%s\n' "$out" | grep -c . | tr -d ' ')"
  head3="$(printf '%s\n' "$out" | head -3 | cut -c1-150 | sed 's/^/      /')"
  issues="${issues}${nl}  • ${msg} — ${count} chỗ:${nl}${head3}"
}

# count_warn "<message>" "<grep -E pattern>" <threshold>
count_warn() {
  local msg="$1" pat="$2" thr="$3"
  local n
  n="$(grep -oE "$pat" "$fp" 2>/dev/null | grep -c . | tr -d ' ')"
  [ "$n" -ge "$thr" ] 2>/dev/null || return 0
  issues="${issues}${nl}  • ${msg} — ${n} lần (ngưỡng ${thr})"
}

# ── format/heading ──
check "dash-subtitle heading (sentence-case nói thẳng, bỏ '— subtitle')" \
  '^#{2,3} .+ — .+' '^[0-9]+:#{2,3} (Failure Modes|Patch [0-9]|Version |[0-9]{4}-[0-9]{2}-[0-9]{2})'
check "heading dạng câu hỏi (viết declarative: 'Stack một lớp không đủ' thay 'Tại sao...?')" \
  '^#{2,3} .+\?[[:space:]]*$'
check "gạch nối từ Việt / đồng âm ('đàn đông'≈'đàn ông' → 'cả đàn/nguyên đàn')" \
  'đàn-đông|nguyên-đàn|đàn đông'

# ── danh từ calque ──
check "calque «trục» (axis) → 'nguồn/hướng/cách scale/xoay quanh'" 'trục' 'trục trặc'
check "calque «đòn bẩy» (leverage) → 'cách tăng X / cú đẩy'" 'đòn bẩy'
check "nhấn kiểu AI «cốt lõi/nền tảng của/chìa khóa/linh hồn/bung trần/như paper» → viết thẳng" \
  'cốt lõi|nền tảng của|chìa khóa|linh hồn của|bung trần|như paper'
check "over-Vietnamize «vòng lặp» → giữ 'loop' English" 'vòng lặp'
check "calque «tuyến tính» (linearly) → 'đều / tăng đều'" 'tuyến tính'

# ── động từ sai context ──
check "động từ «dựng» cho buff/stage/setup → 'stack/tích/ráp/setup'" 'dựng' 'xây dựng'
check "calque «trả về» cho stat (return) → 'hồi / cho lại'" 'trả về'

# ── AI pivot tics ──
check "pivot AI «đây là lý do/cách» → bỏ pivot, nối bằng 'nên/vì vậy' hoặc mô tả thẳng" \
  '[Đđ]ây là lý do|[Đđ]ây là cách'
check "tautology «lý do tại sao» → 'vì vậy / chính vì thế'" 'lý do tại sao'
check "connector giáo trình «Hệ quả thực tế:» → cắt, viết thẳng hệ quả" 'Hệ quả thực tế'
check "calque «Điều này có nghĩa là» → 'Tức là / Nghĩa là'" 'Điều này (có )?nghĩa'
check "signpost meta («Điểm quan trọng cần nhớ», «Một điểm hay bị nhầm»...) → xóa, state thẳng rule" \
  'Điểm quan trọng cần|Một điểm hay bị|Cần phân biệt rõ|Đây là điểm quan trọng'
check "audit-style «Sai:/Đúng:» trong body → viết thành rule tự nhiên (CLAUDE.md cấm fact-check style)" \
  '(\*\*|^|[-•] )Sai:|(\*\*|^|[-•] )Đúng:'

# ── qualifier & cấu trúc dịch gượng ──
check "qualifier mờ «đáng kể» → thay bằng con số thật, hoặc 'rõ/hẳn'" 'đáng kể'
check "adverbial calque «một cách + tính từ» → bỏ 'một cách'" 'một cách [[:alpha:]àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]'
check "nominalization «Việc + động từ» mở câu → bỏ 'Việc'" '(^|\. )Việc [[:alpha:]àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]'
check "calque «không chỉ … mà còn» → 'vừa … vừa' hoặc liệt kê thẳng" 'không chỉ.*mà còn'
check "passive calque «được thiết kế để» → viết active" 'được thiết kế để'

# ── register ──
check "register «mày»/«chúng ta» — corpus dùng 'mình' hoặc câu vô chủ ngữ" 'mày|chúng ta'

# ── count-based (mật độ) ──
count_warn "em-dash «—» quá dày (câu dài vá bằng dấu — tách câu ngắn)" '—' 46
count_warn "over-hedge «gần như» (chắc thì viết thẳng, không chắc thì test-plan)" 'gần như' 4
count_warn "câu mở «Đây là» lặp (summarizer tic — vào thẳng cơ chế)" 'Đây là' 4

# register mixing: cả «bạn» lẫn «người mới» dày trong cùng bài
nb="$(grep -oE 'bạn' "$fp" 2>/dev/null | grep -c . | tr -d ' ')"
nm="$(grep -oE 'người mới' "$fp" 2>/dev/null | grep -c . | tr -d ' ')"
if [ "${nb:-0}" -ge 2 ] && [ "${nm:-0}" -ge 2 ]; then
  issues="${issues}${nl}  • trộn register «bạn» (${nb}) + «người mới» (${nm}) trong một bài — chọn MỘT xưng hô xuyên suốt"
fi

[ -n "$issues" ] || exit 0

msg="⚠️ voice-lint (${fp}) — anti-pattern văn dịch/AI-ese (lexicon đầy đủ + cách thay: templates/voice-lexicon-vi.md):${issues}"
jq -nc --arg m "$msg" '{hookSpecificOutput:{hookEventName:"PostToolUse",additionalContext:$m}}' 2>/dev/null
exit 0
