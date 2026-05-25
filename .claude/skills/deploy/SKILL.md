---
name: deploy
description: Trigger hoặc check Cloudflare Pages deploy cho poe.aiocean.io (Nuxt 4 SSG site). Auto-deploy via git push lên `main`; manual trigger qua CF API. Dùng khi user gõ /deploy, "deploy site", "ship to cloudflare", "trigger rebuild", "redeploy", "deploy status", "kiểm tra build", "tại sao deploy fail", hoặc cần troubleshoot lỗi build CF Pages.
---

# /deploy — Cloudflare Pages cho poe.aiocean.io

**Bạn là agent deploy.** Site này deploy lên Cloudflare Pages qua git integration. Push lên `main` → CF tự build. Skill này document setup hiện tại + cách trigger thủ công + cách debug khi fail.

## Project state — verify trước khi action

```text
GitHub repo:       nguyenvanduocit/poe-n (private), branch main
CF Account:        a44473eab2f968599bc24d5d1a4853f1 (Nguyenvanduocit@gmail.com)
CF Project:        poe
Subdomain:         poe-70i.pages.dev
Custom domain:     poe.aiocean.io (zone aiocean.io trên cùng account)
Build command:     bun install --frozen-lockfile && bun run generate
Build output dir:  dist
Compat date:       2025-11-04
Build image:       v3
Env vars (build):  NODE_VERSION=20, BUN_VERSION=1.2.5
```

Nếu state này không khớp với reality (CF dashboard / GitHub) → STOP và investigate, không guess. CF token ở `~/Library/Preferences/.wrangler/config/default.toml` (key `oauth_token`).

## Default flow — chỉ cần git push

CF Pages git integration tự động trigger build khi có push mới lên `main`:

```bash
git push origin main
# CF webhook nhận push → clone repo → build → deploy
# ETA ~1-3 min cho Nuxt + Nuxt Content (build cache hot)
# ETA ~5-15 min cho build cold (cache miss)
```

Push lên branch khác → preview deploy (URL dạng `<branch>.poe-70i.pages.dev`).

## Manual trigger — khi push không kích hoạt được

Dùng khi: webhook miss, force rebuild với cùng commit, debug.

```bash
CF_TOKEN=$(awk -F'"' '/^oauth_token/{print $2}' ~/Library/Preferences/.wrangler/config/default.toml)
ACC=a44473eab2f968599bc24d5d1a4853f1

curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/deployments?branch=main"
```

Trả về JSON với `result.id` (full UUID) + `result.short_id` (8 chars).

## Status check

### List recent deployments

```bash
CF_TOKEN=$(awk -F'"' '/^oauth_token/{print $2}' ~/Library/Preferences/.wrangler/config/default.toml)
ACC=a44473eab2f968599bc24d5d1a4853f1

curl -s -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/deployments" \
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

### Tail build logs cho deploy cụ thể

```bash
DEP=<full-deployment-uuid>
curl -s -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/deployments/$DEP/history/logs" \
  | python3 -c "
import json, sys
d = json.load(sys.stdin)
for l in d.get('result', {}).get('data', []):
    print(l.get('line', ''))
"
```

### Verify live site

```bash
curl -sI https://poe.aiocean.io | head -1            # expect HTTP/2 200
curl -s  https://poe.aiocean.io | grep -oE 'data-v-[a-f0-9]+' | head -1
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
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe"
```

### `build` fail: prerender 404

`nuxt.config.ts` đã set `nitro.prerender.failOnError: false` — broken markdown links chỉ warn, không fail build. Nếu vẫn fail vì lỗi khác (template parse, content schema), check `vault-keeper`:

```bash
bun run validate
```

## Hard gotchas — đừng quên

- **PATCH source repo qua API silently ignored.** Field `source.config.repo_name` không update được sau khi tạo project. CF dashboard cũng không có UI để đổi (link "Manage" chỉ vào GitHub App settings, không phải đổi repo). Muốn đổi source → phải `delete + recreate` (xem section dưới).
- **Delete project có custom domain bị block** với code `8000028`. Phải `DELETE /domains/<domain>` trước, rồi mới `DELETE /projects/<name>`.
- **Recreate cùng tên giữ subdomain.** Project `poe` recreate lại được CF cấp `poe-70i.pages.dev` lại y nguyên (cùng prefix). Chưa rõ điều này có guarantee hay chỉ may mắn.
- **CF API trả pseudo-JSON** trên một số GET (unquoted keys). Workaround: thêm `User-Agent: Mozilla/5.0 wrangler` + `Accept: application/json` headers.
- **Build cache 25MB/file, ~20K files/deploy** giới hạn. Site nặng phần lớn do cached PoE asset images trong `_web.poecdn.com/`. Nếu vượt limit → trim asset cache hoặc content trước.

## Recreate project from scratch — kịch bản destructive

CHỈ làm khi cần đổi source repo hoặc reset hoàn toàn. Có ~30s downtime trên `poe.aiocean.io` (522 trong khi recreate + re-attach domain).

```bash
# 1. Detach custom domain
curl -s -X DELETE -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/domains/poe.aiocean.io"

# 2. Delete project
curl -s -X DELETE -H "Authorization: Bearer $CF_TOKEN" -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe"

# 3. Recreate (full payload - source + build_config + deployment_configs)
curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  --data '{
    "name": "poe",
    "production_branch": "main",
    "source": {
      "type": "github",
      "config": {
        "owner": "nguyenvanduocit",
        "repo_name": "poe-n",
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
  --data '{"name": "poe.aiocean.io"}' \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/domains"

# 5. Trigger first deploy
curl -s -X POST \
  -H "Authorization: Bearer $CF_TOKEN" \
  -H "User-Agent: Mozilla/5.0 wrangler" \
  "https://api.cloudflare.com/client/v4/accounts/$ACC/pages/projects/poe/deployments?branch=main"
```

## Output format

Khi user gõ `/deploy` không có argument cụ thể, default action là **status check**:

1. List 3 deploy gần nhất (short_id, trigger, commit, stage, status)
2. Hiện build_command + build_output_dir hiện tại
3. Báo URL: `https://poe.aiocean.io` (production), `https://poe-70i.pages.dev` (CF subdomain)
4. Nếu deploy mới nhất `failure` → tail logs + đề xuất fix dựa vào pattern lỗi (mục Troubleshooting)

Khi user yêu cầu trigger ("deploy now", "rebuild"): chạy manual trigger API + poll status đến khi `deploy/success` hoặc fail.
