# build-creator skill — Design Spec

**Date:** 2026-05-25
**Status:** Approved (design), pending implementation plan
**Game target:** Path of Exile 2, 0.5.0 "Return of the Ancients" (Runes of Aldur)

## Mục tiêu

Author một POE2 build optimized từ yêu cầu ngôn ngữ tự nhiên + target do user đặt per-request, materialize thành PoB2 import code hợp lệ, verify stats bằng POB2 headless, lặp tới khi đạt bar, rồi publish lên poe.ninja/poe2/pob trả về link xem được.

Đây là skill **mới, tách biệt** khỏi `pob` (pob giữ vai trò decode/analyze; build-creator là chiều ngược lại: author + encode + publish).

## Requirements đã chốt (qua brainstorming)

- **Output:** full optimized build — tree allocate đầy đủ, gear với rolled mods cụ thể, gem links, flask, jewel.
- **Authoring method:** dựng PoB2 XML **from-scratch** (không fork XML của ai), nhưng *ground design* từ build top thật trên poe.ninja cùng archetype + game data từ `pob-source/poe2`.
- **Success bar:** đặt **per-request** — mỗi lần user nói rõ target (vd "2M DPS, 5k ES"). Không hardcode.
- **Budget-awareness:** KHÔNG trong MVP (chỉ tối ưu cơ học, không định giá gear). Để v2.
- **Interaction:** conversational — propose design trong chat → user duyệt/chỉnh → mới materialize + verify + publish.
- **Publish target:** poe.ninja/poe2/pob (chính), pobb.in (fallback).

## Verified findings từ feasibility spike (2026-05-25)

Các số liệu dưới đây đã verify thực tế, dùng làm nền implementation:

- **Encode là pure TS, KHÔNG cần POB2** (HIGH). PoB code = `base64(zlib-deflate(xml))`. `pob-client.ts:119` decode bằng `inflateSync`; encode chỉ là `deflateSync(xml).toString('base64')`. Round-trip test được ngay.
- **publish pobb.in — PROVEN headless** (HIGH). `POST https://pobb.in/pob/`, body = raw code (no prefix), HTTP 200 → trả về build ID → link `https://pobb.in/<id>`. pobb.in dedup theo content hash.
- **publish poe.ninja — spec biết hết, nhưng phải chạy trong browser context** (HIGH cho spec, không headless được). Lấy từ JS thật của poe.ninja (`PobUploadPage`, bundle `_astro/a.C5H5U7Xs.mjs`):
  ```js
  await fetch("/poe2/pob/api/upload", { method: "POST", body: new URLSearchParams({code}) });
  // response.text() = URL để window.location.assign() → poe.ninja/poe2/pob/<id>
  ```
  Curl headless luôn nhận `400 application/problem+json` từ ASP.NET kể cả khi gửi đúng endpoint/field/content-type + đủ `Sec-Fetch-*` headers (test với cả code hợp lệ lẫn dummy `code=hello`). Field `code` *có* bind (dummy không ra "code required") nhưng app gate request → cần TLS/browser fingerprint thật. Giải pháp: chạy fetch trong page context qua **playwriter** (đúng pattern repo dùng cho pathofexile.com trade API).
- **Endpoint reference khác** (`data/pob-source/src/Modules/BuildSiteTools.lua:10-32`): Maxroll `POST maxroll.gg/poe2/api/pob` field `pobCode=`; poe2db.tw `POST poe2db.tw/pob/api/gen`. Để dành nếu cần thêm fallback.
- **POB2 headless chưa cài** (HIGH). `data/pob-source/src/` có sẵn (đã grep được) gồm HeadlessWrapper.lua. `luajit`, `luarocks` có sẵn trên máy.
- **`pob/scripts/pob-cli.sh` MẤT TÍCH** (HIGH). `setup.sh:128` copy từ file không tồn tại → setup.sh hiện gãy. build-creator **không fix** cái này; thay vào đó viết driver Lua riêng gọi thẳng `luajit ... HeadlessWrapper.lua` (theo gợi ý advisor, tránh yak-shave).

## Architecture & components

Tất cả ở `.claude/skills/build-creator/`:

- `SKILL.md` — workflow doc tôi đọc để drive vòng conversational (gather refs → propose → materialize → verify loop → publish).
- `scripts/spec.ts` — type của build spec: `class`, `ascendancy`, `treeNodes[]`, `items[]` (mỗi item có raw mod text tường minh + slot), `skillGroups[]` (gem + supports + slot), `flasks[]`, `jewels[]`, `targets` (dps/ehp/res...).
- `scripts/spec-to-xml.ts` — emitter **deterministic** spec → PoB2 XML, đảo ngược logic parse của `pob-client.ts`: `<Build>` attrs (level/className/ascendClassName), `<Skills>/<Skill slot>/<Gem>`, `<Items>/<Item id> raw text` + `<Slot name itemId>`, `<Tree>/<Spec nodes="id,id,...">` + `<URL>`.
- `scripts/encode.ts` — `base64(deflateSync(xml))` → PoB code. Pure TS.
- `scripts/verify.lua` + `scripts/verify.sh` — driver tối thiểu: `luajit` chạy HeadlessWrapper từ `data/pob-source`, patch `Deflate/Inflate` (như `setup.sh:60-123`), load code → calc → in stats JSON (dps, ehp, life, es, res, attribute/spirit requirements).
- `scripts/publish-poeninja.ts` — playwriter snippet: navigate poe.ninja/poe2/pob, eval `fetch(...)` trong page context, bắt URL redirect. Fallback `publish-pobbin.ts` (headless curl, đã proven).

## Data flow

```
request + targets
  → gather references (poe.ninja top builds archetype + pob-source skill/gem/unique data)
  → [LLM] propose build design trong chat (prose, owner-voice)
  → [user approval / refine]
  → spec (TS object)
  → spec-to-xml → xml
  → encode → PoB code
  → verify (POB2 headless calc) → stats JSON
  → đạt targets?
       no  → [LLM] adjust spec → re-emit → re-verify (bounded ~5 vòng)
       yes → publish poe.ninja (playwriter) → poe.ninja/poe2/pob/<id>
              fail → fallback pobb.in / raw code paste tay
```

## Error handling (tại boundary thật)

- **Mod parse fail âm thầm** (rủi ro #1): POB2 bỏ qua mod text nó không parse được → DPS/EHP sai mà không báo lỗi. Mitigation: mỗi mod set kỳ vọng dịch chuyển một stat cụ thể; sau calc, nếu stat đó không đổi → flag mod nghi ngờ, hạ confidence, báo user. Ground mod text từ real item export thay vì tự chế.
- **Verify loop bounded** (~5 vòng): không đạt target → report best-effort + gap thành thật, không loop vô tận.
- **Publish fail**: poe.ninja lỗi → fallback pobb.in (proven) + hướng dẫn import, hoặc xuất raw code paste tay.
- **League data thưa** (0.5 launch ~2026-05-29): ít build top tham chiếu giai đoạn đầu → lean vào pob-source data + reasoning, flag confidence thấp hơn.

## Testing

- **Round-trip encode**: decode code thật (vd pobb.in `8-9u-rZYxc0a`) → re-encode → so khớp structural. Prove encode đúng.
- **spec-to-xml**: spec biết trước → emit XML → load qua POB2 headless, confirm parse đúng class/level/skills/items.
- **Verify sanity**: lấy build thật có stats poe.ninja báo → chạy verify của ta → so DPS/EHP khớp (trong sai số). Bắt mod-parse drift.

## Scope boundaries (YAGNI)

- KHÔNG budget/pricing (v2 — nối trade/poe-ninja sau).
- poe.ninja publish chính; pobb.in + raw paste là fallback.
- Conversational; một archetype mỗi request.
- KHÔNG fix CLI gãy của skill `pob` (out of scope; build-creator tự lo verify driver).

## Rejected alternatives

- **Fork-and-mutate** (fetch XML build gần nhất → swap tree/gear/gem): rủi ro XML invalid thấp nhất, nhưng user chọn dựng from-scratch. Vẫn dùng XML thật làm *reference đọc-hiểu*, không phải base để mutate.
- **Drive PoB GUI**: không scriptable headless. Loại.
- **Headless curl lên poe.ninja**: app gate bằng browser fingerprint, 400 bất kể header. Loại — dùng playwriter.
