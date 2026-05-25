// Print build provenance to the browser console on app boot.
//
// Why: deploy verification. After pushing to main, both the operator and any
// agent inspecting the deployed site need a cheap way to confirm "is the
// commit I just pushed actually live yet?" — without spelunking through CF
// Pages dashboard or comparing prerendered HTML hashes.
//
// Two surfaces, one source (runtimeConfig.public.buildInfo, populated in
// nuxt.config.ts at build time):
//   1. Console log here (visible to anyone who opens DevTools)
//   2. /version.json static file (curl-able, machine-readable)
//   3. <meta name="build-commit"> + <meta name="build-time"> in <head>
//      (curl-able from rendered HTML)
//
// All three carry the same commit + buildTime, so any can answer "is this
// the build I expected?".

export default defineNuxtPlugin(() => {
  const { buildInfo } = useRuntimeConfig().public as {
    buildInfo: {
      commit: string
      commitShort: string
      branch: string
      buildTime: string
      cfPages: boolean
    }
  }

  const envBadge = buildInfo.cfPages ? 'CF Pages' : 'local'

  // eslint-disable-next-line no-console
  console.log(
    '%cPoE Vault%c %s%c · %s%c · built %s',
    'background:#d4ff00;color:#0f0f0f;font-weight:bold;padding:2px 6px;border-radius:3px 0 0 3px',
    'background:#1f1f1f;color:#d4ff00;font-family:ui-monospace,monospace;padding:2px 6px;border-radius:0 3px 3px 0',
    buildInfo.commitShort,
    'color:#888',
    buildInfo.branch,
    'color:#888',
    buildInfo.buildTime,
  )
  // eslint-disable-next-line no-console
  console.log('[build-info]', { ...buildInfo, env: envBadge })
})
