# T-058: fetch-poeninja.sh aborts on valid model — `"status":4` false positive

> Script greps the whole response for `"status":4` to detect an API error, but `status` is a field of `charModel` itself — any character whose own status is 4 (or 40-49) fails to fetch.

- **priority**: medium
- **effort**: XS

## Problem

`.claude/skills/pob/scripts/scripts/fetch-poeninja.sh:96` detects API errors with a naive substring grep over the whole JSON body:

```bash
if echo "$MODEL_JSON" | grep -q '"status":4'; then
    echo "ERROR: poe.ninja returned an error for model $MODEL_ID" >&2
```

But `charModel.status` is a legitimate field of the model payload. Observed 2026-07-16:

- `OneMoreMinionMamy` → `charModel.status = 3` → fetch succeeds.
- `ThaoCamVienSaiGon` → `charModel.status = 4` → script prints `ERROR: poe.ninja returned an error for model 43`, exits 1, and **never writes `data/character-exports/export-ThaoCamVienSaiGon.json`** — even though the response is a complete, valid 619KB model.

Verified by fetching the same URL directly with curl: model 43 returns level 97, class Spirit Walker, 12 equipped items, full `pathOfBuildingExport`. Nothing is wrong with the response.

Two defects in one line:
1. **Wrong scope** — matches anywhere in the body, including `charModel.status`, instead of a top-level API error envelope.
2. **Prefix match** — `'"status":4'` also matches `"status":40`…`"status":49` and `"status":4xx`, so the bug widens as poe.ninja adds status values.

Impact: any character in a state that maps to status 4 is unfetchable via the skill, silently, with a misleading error that blames poe.ninja. Cost me a real fetch this session and forced a manual curl workaround.

## Goal

`fetch-poeninja.sh` fetches any character whose model the API actually returns, and only errors when the API actually errored.

## Requirements

- Detect API errors from the real error shape, not a substring of the whole body. Parse the JSON and check the **top-level** envelope (the success payload has `type: "found"` + `charModel`; confirm the actual error shape before coding — do not guess).
- Do not treat `charModel.status` as an error under any value.
- Preserve current behaviour on genuine errors: message to stderr + non-zero exit.
- No workaround/parallel code path — fix the check in place (Golden Rules: no workarounds, root cause first).
- Non-goal: refactoring the rest of the script or the builds-ladder surface.

## Criteria

- [ ] `fetch-poeninja.sh 'https://poe.ninja/poe2/profile/hopthuxacnhan-3062/runesofaldur/character/ThaoCamVienSaiGon'` exits 0 and writes `data/character-exports/export-ThaoCamVienSaiGon.json` with `charModel.level == 97`.
- [ ] `fetch-poeninja.sh` on `OneMoreMinionMamy` still succeeds (no regression, `charModel.status == 3`).
- [ ] A genuine API error (e.g. bogus model id in the URL) still prints an error to stderr and exits non-zero.
- [ ] `grep -c '"status":4' fetch-poeninja.sh` returns 0 — the substring check is gone, not merely narrowed.
