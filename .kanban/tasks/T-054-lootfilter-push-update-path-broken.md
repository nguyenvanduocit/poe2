# T-054: push-to-account.ts update path navigates to read-only view URL

> Updating an existing POE2 account filter times out — the script opens the filter's view URL (no form) instead of the edit URL.

- **priority**: medium
- **effort**: S

## Problem

`.claude/skills/lootfilter/scripts/push-to-account.ts` (the `/lootfilter` push) has two paths: create (works) and update (broken). When a filter with the requested `--name` already exists, the update path resolves the existing filter's anchor `href` (`/my-account/item-filters/<id>`) and `goto`s it, then waits for `input.poe-input__input[type=text]` (push-to-account.ts:78-84). That URL is the **read-only view** page — it renders only an ACE editor, zero text inputs — so `waitForSelector` times out after 25s and the upload aborts with `Timeout 25000ms exceeded`.

Verified live 2026-06-28 while updating "Divine Only" → "Currency 10c Plus":
- View URL `/my-account/item-filters/xzkmgXU6` → `hasAce: true`, `txtInputs: []` (no name/version inputs).
- Real edit URL is **`/my-account/item-filters/edit/<id>`** (note the `/edit/` segment), OR click the per-row `button` "Edit" inside `.item-filter-row__header` scoped to the filter's anchor text. Either reveals the name input + version input + ACE editor.
- Manual workaround that succeeded: `goto('/my-account/item-filters/edit/'+id)` → fill `texts[0]`=name, `texts[1]`=version, `ace.env.editor.setValue(body)` → click `Submit` → POST `/internal-api/item-filters` returns 200.

Secondary finding (not a bug, but should be guarded): GGG validates `filter_name` server-side with "Letters, numbers, punctuation and spaces only" and **rejects `+`** (400, `field: filter_name`). The script should pre-validate the name and fail fast with a clear message rather than submitting a doomed POST.

## Goal

`/lootfilter` push can update an existing POE2 account filter in place (same id, no duplicate) as reliably as it creates a new one.

## Requirements

- Update path must navigate to the edit surface (`/my-account/item-filters/edit/<id>`), not the view URL. Derive `<id>` from the existing filter's anchor href on the list page.
- Keep the create path unchanged (it works: `/my-account/item-filters/create`).
- Pre-validate `--name` against GGG's allowed set (letters, numbers, spaces, and the punctuation subset they accept — `+` is NOT accepted) and abort before any POST with a clear error if it fails.
- Preserve flagged-account safety: keep the existing inter-action sleeps; do not parallelise; one submit per run.
- Non-goal: deleting filters, changing the create flow, OAuth.

## Criteria

- [x] Re-running `push-to-account.ts --file <f> --name "<existing name>"` updates that filter (POST 200, same id, version bumped) instead of timing out.
- [x] Creating a brand-new filter still works (no regression).
- [x] A `--name` containing `+` (or other rejected chars) aborts pre-POST with a readable error, not a 400.
- [x] Update path confirmed against a live account filter (POST 200 + name/version reflected on the list page).

## Resolution (2026-07-03)

Fixed `push-to-account.ts` (three defects) + added a loot-safety layer:

1. **Update path → edit surface.** Derive `<id>` from the existing filter's list-page href and `goto` `/my-account/item-filters/edit/<id>` (was navigating to the bare `/item-filters/<id>` read-only view → `waitForSelector` timeout). Verified live: updating "Currency 1c Max Socket" → `mode: update`, POST **202**, same id `ELAqDxIj`, no duplicate.
2. **Name pre-validation.** Reject names with Unicode symbol chars before any POST — GGG's rule is "letters, numbers, punctuation and spaces only", and `+` is a *symbol* (`\p{S}`), not punctuation, so it 400'd on `field: filter_name`. Regex `[^\p{L}\p{N}\p{P}\p{Zs}]/u`. Verified: `--name "Currency 1c+ MaxSocket"` aborts pre-browser, exit 1, names the `+`.
3. **Surface the server error.** The response listener now captures `r.text()`; on failure the script prints `Server said (HTTP <n>): <body>` instead of a bare "could not confirm" — this is what hid the original 400 reason.

Loot-safety (addresses user's "filter lỗi xong mất đồ" fear — beyond T-054 scope but same file):
- New pure evaluator `parser/src/evaluate.ts` (`evaluateItem`/`isHidden`/`findHiddenValuables`, `UNIVERSAL_VALUABLES`) — item → Show/Hide by walking blocks like the client.
- `test/loot-safety-smoke.test.ts` — asserts the shipped `filter/currency-1c-plus.filter` shows every `>=1c` orb + max-socket base, hides sub-1c junk, and proves the evaluator catches a `Hide`-before-`Show` shadow. Full suite **105/105 green** (was 97).
- `push-to-account.ts` runs `findHiddenValuables` as a gate: refuses to upload a filter that hides Mirror/Divine/Perfect orbs (override `--force`). Verified: a filter that hides Divine aborts pre-browser.

SKILL.md updated (push section: loot-safety gate, name rule, edit-path, error surfacing; parser section: evaluator + smoke test subsection).
