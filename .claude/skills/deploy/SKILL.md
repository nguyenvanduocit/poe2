---
name: deploy
description: Trigger hoặc check Cloudflare Pages deploy cho poe2.aiocean.io (Nuxt 4 SSG site). Auto-deploy via git push lên `main`; manual trigger qua CF API. Dùng khi user gõ /deploy, "deploy site", "ship to cloudflare", "trigger rebuild", "redeploy", "deploy status", "kiểm tra build", "tại sao deploy fail", hoặc cần troubleshoot lỗi build CF Pages.
---

# /deploy — Cloudflare Pages cho poe2.aiocean.io

**Bạn là agent deploy.** Site deploy lên Cloudflare Pages qua git integration: push lên `main` → CF build từ `origin/main`. `/deploy` mặc định = **commit + push + deploy**, không bao giờ dừng ở status. CF build từ `origin/main` chứ KHÔNG phải working tree → chưa push thì deploy lại đúng commit cũ, vô nghĩa. Skill này document chuỗi commit→push→deploy, setup hiện tại, trigger thủ công, và debug khi fail.

## Project state — verify trước khi action

```text
GitHub repo:       nguyenvanduocit/poe2 (private), branch main
CF Account:        a44473eab2f968599bc24d5d1a4853f1 (Nguyenvanduocit@gmail.com)
CF Project:        poe2
Subdomain:         poe2-7sl.pages.dev
Custom domain:     poe2.aiocean.io (zone aiocean.io trên cùng account)
Build command:     bun install --frozen-lockfile && bun run generate
Build output dir:  dist
Compat date:       2025-11-04
Build image:       v3
Env vars (build):  NODE_VERSION=20, BUN_VERSION=1.2.5
```

Nếu state này không khớp với reality (CF dashboard / GitHub) → STOP và investigate, không guess. CF token ở `~/Library/Preferences/.wrangler/config/default.toml` (key `oauth_token`).

> Account này có nhiều CF Pages project. `poe2` là project của workspace NÀY (poe2.aiocean.io). Sibling `poe1` (poe1.aiocean.io) và `poe` cũ (poe.aiocean.io) là project KHÁC — đừng thao tác nhầm. Luôn dùng `/projects/poe2` trong URL.

## Default flow — commit + push + deploy

`/deploy` không argument LUÔN chạy đủ chuỗi commit → push → deploy → poll. Không hỏi lại, không dừng ở status. Lý do cứng: CF webhook build từ `origin/main`, dirty work trong working tree không lên site cho tới khi commit + push.

**1. Refresh token nếu hết hạn.** `oauth_token` (wrangler OAuth) sống ~10h. Nếu CF API trả `{"success":false,...,"Authentication error"}` (code `10000`), hoặc `expiration_time` trong config đã quá `date -u` → chạy `bunx wrangler whoami` để auto-refresh bằng `refresh_token` (scope `offline_access`), rồi re-read `oauth_token`. Không cần re-login browser.

**2. Stage + group-aware commit toàn bộ dirty work.** Branch này shared nhiều agent, nhưng đây là workspace gameplay của owner → commit hết dirty work là đúng ý, KHÔNG để treo. Tách commit theo nhóm path để history sạch:

```bash
git add content/      && git commit -m "docs(content): <mô tả thật>"   # nếu có
git add .claude/      && git commit -m "chore(skills): <mô tả thật>"   # nếu có
git add data/         && git commit -m "chore(data): <mô tả thật>"     # nếu có
git add -A            && git commit -m "chore: <phần còn lại>"         # quét nốt
```

Message phải mô tả thật nội dung thay đổi — KHÔNG dùng message rỗng nghĩa kiểu `"deploy"`. Chỉ chừa lại rác tạm (`tmp/`, `*.log`) — không stage. Working tree clean sẵn thì bỏ qua bước này.

**3. Push.**

```bash
git push origin main
# CF webhook nhận push → clone repo → build → deploy
# ETA ~1-3 min (build cache hot) · ~5-15 min (cold)
```

**4. Poll status.** List deployments đến khi commit vừa push đạt `deploy/success` (xem `## Status check`). Fail → tail logs + fix theo Troubleshooting.

Working tree clean VÀ HEAD = origin = last_success_commit → không có gì để deploy: chỉ báo "site đã latest" + URL, không trigger thừa.

Push lên branch khác → preview deploy (URL `<branch>.poe2-7sl.pages.dev`).

## Manual trigger — khi push không kích hoạt được

Dùng khi: webhook miss, force rebuild với cùng commit, debug.

```bash
CF_TOKEN=$(awk -F'"' '/^oauth_token/{print $2}' ~/Library/Preferences/.wrangler/config/default.toml)
ACC=a44473eab2f968599bc24d5d1a4853f1

curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/deployments?branch=main"
```

Trả về JSON với `result.id` (full UUID) + `result.short_id` (8 chars).

## Status check

### List recent deployments

```bash
CF_TOKEN=$(awk -F'"' '/^oauth_token/{print $2}' ~/Library/Preferences/.wrangler/config/default.toml)
ACC=a44473eab2f968599bc24d5d1a4853f1

curl -s -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/deployments" \
  | python3 -c "
import json, sys
d = json.load(sys.stdin)
for dep in (d.get('result') or [])[:5]:
    s = dep.get('latest_stage', {})
    trigger = dep.get('deployment_trigger', {}).get('type')
    commit = (dep.get('deployment_trigger', {}).get('metadata', {}) or {}).get('commit_hash', '')[:8]
    print(f\"{dep['short_id']} [{trigger:10}] commit={commit} stage={s.get('name'):10} status={s.get('status'):10}\")
"
```

### Verify server đã chạy commit mới nhất chưa

So commit của deploy `success` gần nhất với git HEAD/origin:

```bash
CF_TOKEN=$(awk -F'"' '/^oauth_token/{print $2}' ~/Library/Preferences/.wrangler/config/default.toml)
ACC=a44473eab2f968599bc24d5d1a4853f1

git fetch origin main --quiet
LOCAL=$(git rev-parse HEAD)
DEPLOYED=$(curl -s -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/deployments" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(next((x['deployment_trigger']['metadata']['commit_hash'] for x in d.get('result',[]) if (x.get('latest_stage') or {}).get('status')=='success'), ''))")

echo "HEAD     : $LOCAL"
echo "Deployed : $DEPLOYED"
[ "${LOCAL:0:12}" = "${DEPLOYED:0:12}" ] && echo "✅ server = latest commit" || echo "⚠️ server KHÁC HEAD"
```

### Tail build logs cho deploy cụ thể

```bash
DEP=<full-deployment-uuid>
curl -s -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/deployments/$DEP/history/logs" \
  | python3 -c "
import json, sys
d = json.load(sys.stdin)
for l in d.get('result', {}).get('data', []):
    print(l.get('line', ''))
"
```

### Verify live site

```bash
curl -sI https://poe2.aiocean.io | head -1            # expect HTTP/2 200
curl -s  https://poe2.aiocean.io | grep -oE 'data-v-[a-f0-9]+' | head -1
                                                       # expect Vue scoped marker
```

## Troubleshooting — failures đã gặp

### `clone_repo` fail: "No url found for submodule path 'X' in .gitmodules"

Repo có gitlink (mode 160000) nhưng không có `.gitmodules` map URL → CF không clone được. Xảy ra khi user `git add` thư mục đã clone sẵn của project khác (vd `references/PathOfBuilding/`).

Fix:

```bash
git ls-files --stage | grep ^160000        # liệt kê tất cả gitlinks
git rm --cached <path>                      # untrack từng cái
echo "<path>/" >> .gitignore                # ignore future
git commit -m "chore: untrack broken gitlink <path>"
git push origin main
```

### `build` fail: `nuxt: command not found` (exit code 127)

CF không auto-detect `bun.lock` (text format Bun 1.x) để chạy install — chỉ nhận `bun.lockb` (binary, Bun 0.x) hoặc các lockfile npm/pnpm/yarn. Kết quả: build chạy `bun run generate` mà không có `node_modules`.

Build command BẮT BUỘC phải bao gồm install:

```text
bun install --frozen-lockfile && bun run generate
```

Update qua API nếu khác:

```bash
curl -s -X PATCH \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  --data '{"build_config":{"build_command":"bun install --frozen-lockfile && bun run generate","destination_dir":"dist","root_dir":"","build_caching":true}}' \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2"
```

### `build` fail: prerender 404

`nuxt.config.ts` đã set `nitro.prerender.failOnError: false` — broken markdown links chỉ warn, không fail build. Nếu vẫn fail vì lỗi khác (template parse, content schema), check `vault-keeper`:

```bash
bun run validate
```

## Hard gotchas — đừng quên

- **PATCH source repo qua API silently ignored.** Field `source.config.repo_name` không update được sau khi tạo project. CF dashboard cũng không có UI để đổi (link "Manage" chỉ vào GitHub App settings, không phải đổi repo). Muốn đổi source → phải `delete + recreate` (xem section dưới).
- **Delete project có custom domain bị block** với code `8000028`. Phải `DELETE /domains/<domain>` trước, rồi mới `DELETE /projects/<name>`.
- **Recreate cùng tên giữ subdomain.** Project recreate lại cùng tên `poe2` được CF cấp `poe2-7sl.pages.dev` lại y nguyên (cùng prefix). Chưa rõ điều này có guarantee hay chỉ may mắn.
- **CF API trả pseudo-JSON** trên một số GET (unquoted keys). Workaround: thêm `User-Agent: Mozilla/5.0 wrangler` + `Accept: application/json` headers.
- **Build cache 25MB/file, ~20K files/deploy** giới hạn. Site nặng phần lớn do cached PoE asset images trong `_web.poecdn.com/`. Nếu vượt limit → trim asset cache hoặc content trước.

## Recreate project from scratch — kịch bản destructive

CHỈ làm khi cần đổi source repo hoặc reset hoàn toàn. Có ~30s downtime trên `poe2.aiocean.io` (522 trong khi recreate + re-attach domain).

```bash
# 1. Detach custom domain
curl -s -X DELETE -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/domains/poe2.aiocean.io"

# 2. Delete project
curl -s -X DELETE -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2"

# 3. Recreate (full payload - source + build_config + deployment_configs)
curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  --data '{
    "name": "poe2",
    "production_branch": "main",
    "source": {
      "type": "github",
      "config": {
        "owner": "nguyenvanduocit",
        "repo_name": "poe2",
        "production_branch": "main",
        "pr_comments_enabled": true,
        "deployments_enabled": true,
        "production_deployments_enabled": true,
        "preview_deployment_setting": "all",
        "preview_branch_includes": ["*"],
        "preview_branch_excludes": [],
        "path_includes": ["*"],
        "path_excludes": []
      }
    },
    "build_config": {
      "build_command": "bun install --frozen-lockfile && bun run generate",
      "destination_dir": "dist",
      "root_dir": "",
      "build_caching": true
    },
    "deployment_configs": {
      "production": {
        "compatibility_date": "2025-11-04",
        "build_image_major_version": 3,
        "env_vars": {
          "NODE_VERSION": {"type": "plain_text", "value": "20"},
          "BUN_VERSION":  {"type": "plain_text", "value": "1.2.5"}
        }
      },
      "preview": {
        "compatibility_date": "2025-11-04",
        "build_image_major_version": 3,
        "env_vars": {
          "NODE_VERSION": {"type": "plain_text", "value": "20"},
          "BUN_VERSION":  {"type": "plain_text", "value": "1.2.5"}
        }
      }
    }
  }' \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects"

# 4. Re-attach custom domain (auto-verify vì zone aiocean.io cùng account)
curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  --data '{"name": "poe2.aiocean.io"}' \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/domains"

# 5. Trigger first deploy
curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe2/deployments?branch=main"
```

## Output format

`/deploy` không argument → default action là **commit + push + deploy** (chuỗi đầy đủ ở `## Default flow`):

1. Refresh token nếu auth error (`bunx wrangler whoami`)
2. Group-aware commit toàn bộ dirty work + `git push origin main`
3. Poll deployments đến khi commit vừa push đạt `deploy/success` (fail → tail logs + fix theo Troubleshooting)
4. Báo URL: `https://poe2.aiocean.io` (production), `https://poe2-7sl.pages.dev` (CF subdomain)

Working tree clean + HEAD = origin = last_success → báo "site đã latest" + 3 deploy gần nhất, không trigger thừa.

Chỉ khi user hỏi rõ status (`/deploy status`, "kiểm tra build", "deploy status") → chỉ status check (list deploy + so HEAD + build config), KHÔNG commit/push.
