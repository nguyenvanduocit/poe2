# Voice lexicon — từ/cụm cấm trong content/ và cách viết thay thế

Lexicon canonical cho mọi writer (người + agent) trước khi viết/polish bất kỳ doc nào trong `content/`. Đây là phần CỤ THỂ của rule trừu tượng ở CLAUDE.md `## Content Writing Voice`: mỗi entry là một pattern văn dịch / AI-ese đã xuất hiện hệ thống trong corpus (audit 2026-06-10, 92 docs), kèm cách người chơi POE Việt thật sự nói. Hook `.claude/hooks/content-voice-lint.sh` enforce phần grep-được của file này.

Nguyên tắc gốc: **gặp khái niệm English, DIỄN GIẢI nghĩa cụ thể của nó — đừng map chữ-sang-chữ.** Giữ English game term nguyên bản inline (more, increased, stack, loop, scale, clear, uptime…); đừng đúc từ Việt giả để thay.

## Danh từ calque — dịch chữ-sang-chữ từ English

- **«trục»** (axis / scaling axis / core axis) — tiếng Việt «trục» là trục xe, trục quay. ✗ "Trục scaling là triple-elemental" → ✓ "Build scale theo ba element cùng lúc". ✗ "quanh trục The Taming + Trinity" → ✓ "xoay quanh The Taming + Trinity". ✗ "trục damage chính" → ✓ "nguồn damage chính / damage chính đến từ X".
- **«đòn bẩy»** (leverage) — từ báo kinh tế, không phải từ game. ✗ "đòn bẩy chính cho hit damage" → ✓ "cách chính để tăng hit damage". ✗ "thiếu đòn bẩy kinh tế" → ✓ "không có gì kéo kinh tế lên".
- **«cốt lõi» / «nền tảng của» / «chìa khóa» / «linh hồn của»** (core / foundation / key / soul) — nhấn mạnh kiểu AI. ✗ "Điểm cốt lõi của item là X" → ✓ viết thẳng "X:" hoặc "Cái quyết định là X". ✗ "nền tảng của cả hệ crafting" → ✓ "currency nền của cả hệ crafting".
- **«bung trần»** (hit the cap) → ✓ "chạm cap / đầy cap / max".
- **«đứng như paper» / «build đứng được»** (stands on paper) → ✓ "chạy đúng như số trên giấy / ra đúng số paper".
- **«vòng lặp»** (loop — ngữ vực lập trình) → ✓ giữ "loop" English: "IL loop", "loop tự duy trì", hoặc "chu kỳ" khi nói nhịp thời gian.

## Động từ sai ngữ cảnh game

- **«dựng» buff/stage/pipeline** (build up / set up) — «dựng» là dựng lều, dựng cột. ✗ "dựng Whirlwind ba stage" → ✓ "stack Whirlwind ba stage / tích đủ 3 stage". ✗ "dựng cả guồng máy" → ✓ "ráp / xây / setup". («xây dựng» bình thường thì OK.)
- **«cấp» stat/skill** (grants) — từ hành chính. ✗ "ascendancy cấp More" → ✓ "ascendancy cho More". ✗ "spear cấp flat lightning" → ✓ "spear cho flat lightning". («cấp độ», "gem cấp 20" = level thì OK.)
- **«chèn» damage/support** (insert/add) → ✓ "cộng thêm / thêm / cắm" (cắm gem vào socket là tự nhiên).
- **«trả» / «trả về» stat** (returns) — nghe như return value của function. ✗ "node trả về 11% max mana" → ✓ "node hồi 11% max mana / cho lại". ✗ "body trả deflection theo missing ES" → ✓ "body cho deflection theo missing ES".
- **«quăng» skill «đi qua»** → ✓ "bắn / thả Twister xuyên qua".

## AI pivot tics — pattern câu đặc trưng AI

- **«— đây là lý do» / «— đây là cách»** kết câu — pivot AI lặp mỗi vài đoạn (55+ hits corpus). Bỏ pivot, nối nhân quả thẳng: ✗ "bị loại — đây là lý do build không chạy aura" → ✓ "nên build không chạy aura". ✗ "đây là cách build chèn vừa Trinity..." → ✓ mô tả thẳng cơ chế.
- **«Đây là lý do tại sao»** — tautology kép ("lý do" + "tại sao"). → ✓ "vì vậy / chính vì thế".
- **«Đây là X» mở bài / mở đoạn** ("Đây là build self-cast Twister — ...") — summarizer giới thiệu topic. → ✓ vào thẳng cơ chế: "Build self-cast Twister: Huntress stack...". Một-hai lần cả bài chấp nhận được; mở đầu mọi section bằng "Đây là" là tic.
- **«Hệ quả thực tế:»** — connector giáo trình. Cắt connector, viết thẳng hệ quả.
- **«Điều này có nghĩa là»** (this means that) → ✓ "Tức là / Nghĩa là / Vậy là".
- **«Điểm quan trọng cần nhớ:» / «Một điểm hay bị nhầm là» / «Cần phân biệt rõ:»** — signpost báo trước điều quan trọng thay vì viết nó ra. Xóa signpost, state thẳng rule.
- **«Sai: … Đúng: …»** trong body — audit-style bị cấm sẵn ở CLAUDE.md; viết thành rule tự nhiên: "Cast Refutation khi pool dưới sàn Ward là tự hại — nạp pool qua sàn trước."

## Qualifier & cấu trúc dịch gượng

- **«đáng kể»** (significantly) — qualifier mờ che mất con số (42 hits). Có số thì quote số: ✗ "khuếch đại đáng kể" → ✓ "nhận 50% more Attack Damage". Không có số thì "rõ / hẳn / nhiều".
- **«một cách + tính từ»** (in a … manner) → ✓ bỏ "một cách": "share Purple Flames ổn định".
- **«Việc + động từ» mở câu** (gerund nominalization) → ✓ bỏ "Việc": "Life-stack ở đây phục vụ…", hoặc đảo thành mệnh lệnh.
- **«không chỉ … mà còn»** (not only … but also) → ✓ "vừa … vừa", hoặc liệt kê thẳng.
- **«được thiết kế để»** (designed to) → ✓ active: "skill consume Parried debuff để bùng nổ".
- **«gần như»** over-hedge — 1-2 lần/bài OK, 4+ lần là AI bảo hiểm claim. Chắc thì viết thẳng; không chắc thì viết test-plan cụ thể.
- **Em-dash chain** — 3-4 dấu «—» trong một câu nghĩa là câu quá dài được vá bằng dấu câu. Tách thành câu ngắn. Cả bài >45 em-dash là dấu hiệu hệ thống.
- **Câu 4-5 mệnh đề nối «và/nên/mà/vì» không chấm** — hơi văn transcript. Tách câu.
- **«tuyến tính»** (linearly) → ✓ "đều / tăng đều theo đầu tư".

## Heading

- Sentence-case, nói thẳng section nói gì. KHÔNG dash-subtitle `## X — Y` (hook bắt sẵn).
- **KHÔNG heading dạng câu hỏi** «Tại sao X quan trọng?» — declarative: "Stack một lớp defense không đủ".
- Heading English chỉ dùng cho **section canonical của template** (Build Overview, Failure Modes, Gear Progression, Version History, Relationships…). Section tự đặt viết tiếng Việt — archetype label trong write-skill ("How It Works", "Key Interactions") chỉ là nhãn loại section, không phải heading thật.

## Xưng hô (register)

- Mặc định: **câu vô chủ ngữ (imperative)** hoặc **«mình»** — đúng giọng "ghi chú cho chính mình / chỉ đàn em".
- «bạn» chỉ khi cả bài đã dùng nhất quán (legacy beginner series); KHÔNG trộn «bạn» + «người chơi/người mới» + «mình» trong một bài.
- «mày», «chúng ta» — cấm.
- Một series (beginner-*, 0-5-*) phải cùng một register xuyên suốt các file.

## Self-test trước khi nộp bài

1. Grep nhẩm các từ trong lexicon này — còn cái nào không?
2. Đọc to một đoạn bất kỳ: nghe như người chơi POE Việt nói với guildie, hay như tài liệu dịch?
3. Mỗi «đáng kể»/«gần như» — có con số thay được không?
4. Đếm câu mở bằng «Đây là» — quá 2 là viết lại.
