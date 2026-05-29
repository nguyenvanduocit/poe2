// https://nuxt.com/docs/api/configuration/nuxt-config
//
// This site EXTENDS the `andy-note-nuxt` theme layer.
//
// Layer source: the published npm package `andy-note-nuxt` (a real dependency
// in package.json, resolved from node_modules). Pinned by the lockfile, so the
// build is reproducible across local dev and Cloudflare Pages — no giget cache
// drift between machines, and the layer's own deps (vue-sonner, etc.) install
// transitively instead of needing to be re-declared here.

import { execSync } from 'node:child_process'
import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Locale-prefixed content (content/en/**) is reachable at /en/... via the
// theme's path-driven catch-all, but `nuxt generate` only prerenders routes it
// can crawl from `/`. Nothing in the VI site links into the /en/ namespace, so
// without explicit seeding those pages exist in the content DB yet never get a
// static HTML file (verified: content/en/i18n-poc.md was in the collection but
// absent from .output/public after a plain generate). Enumerate every
// content/en/**/*.md into a route so each EN page is prerendered deterministically
// — independent of crawl reachability, which matters while EN is translated
// note-by-note and many pages have no inbound link yet.
function enumerateLocaleRoutes(locale: string): string[] {
  const dir = resolve(import.meta.dirname ?? __dirname, 'content', locale)
  let files: string[]
  try {
    files = readdirSync(dir, { recursive: true }) as string[]
  } catch {
    return [] // locale folder absent — no routes to seed
  }
  return files
    .filter(f => f.endsWith('.md') && !f.split('/').some(seg => seg.startsWith('_')))
    .map((f) => {
      const noExt = f.replace(/\.md$/, '')
      const trimmed = noExt.replace(/\/index$/, '').replace(/^index$/, '')
      return trimmed ? `/${locale}/${trimmed}` : `/${locale}`
    })
}

const enRoutes = enumerateLocaleRoutes('en')

const layerSource = 'andy-note-nuxt'

// Build provenance. Two sources, neither a fallback for the other — each is
// canonical for its environment:
//   - CF_PAGES_COMMIT_SHA / CF_PAGES_BRANCH: injected by Cloudflare's build
//     runner. Authoritative on CF Pages even when the runner shallow-clones
//     or runs in detached HEAD.
//   - `git rev-parse`: authoritative on a developer's machine where no CF
//     env exists. Also authoritative on any CI that doesn't pre-inject SHA.
// The literal 'unknown' only surfaces when BOTH fail (e.g. a tarball checkout
// with no `.git` and no CI env), at which point the deploy is observable but
// not pinpointable — better than failing the build.
function tryGit(args: string): string | null {
  try {
    return execSync(`git ${args}`, { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    return null
  }
}

const commit = process.env.CF_PAGES_COMMIT_SHA ?? tryGit('rev-parse HEAD') ?? 'unknown'
const branch = process.env.CF_PAGES_BRANCH ?? tryGit('rev-parse --abbrev-ref HEAD') ?? 'unknown'
const buildInfo = {
  commit,
  commitShort: commit.slice(0, 7),
  branch,
  buildTime: new Date().toISOString(),
  cfPages: process.env.CF_PAGES === '1',
}

// Emit /version.json as a regular public asset. Root `public/` IS Nuxt's
// publicDir here (verified: 120 files tracked + .output/public/ mirrors its
// layout) — writing synchronously at config-load time means Nitro picks the
// file up like any other static asset and copies it into the final output for
// both `nuxt generate` and `nuxt build`.
const publicDir = resolve(import.meta.dirname ?? __dirname, 'public')
mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'version.json'), JSON.stringify(buildInfo, null, 2))

export default defineNuxtConfig({
  extends: [layerSource],

  // Array module config merges with the layer's modules (Nuxt concatenates
  // across layers), so this adds i18n on top of @nuxt/content from the theme.
  modules: ['@nuxtjs/i18n'],

  // Canonical @nuxt/content × @nuxtjs/i18n integration (per content.nuxt.com).
  // VI is the default locale and stays unprefixed at the content root; EN lives
  // under content/en/ and is served at /en/**. No message files — UI-string
  // translation is intentionally deferred; i18n is here for locale routing,
  // <html lang>, hreflang, and switchLocalePath(). detectBrowserLanguage is off
  // so the default (VI) is deterministic on a static host — a visitor only sees
  // EN by explicitly navigating to /en, never via an opaque cookie redirect.
  i18n: {
    defaultLocale: 'vi',
    strategy: 'prefix_except_default',
    // Required by @nuxtjs/i18n to emit valid <link rel="canonical"> + hreflang
    // tags. Without it, the module logs `I18n baseUrl is required to generate
    // valid SEO tag links` on every navigation and ships relative-only URLs
    // — which crawlers treat as ambiguous between en/vi variants. Hardcoded
    // to the production custom domain (see .claude/skills/deploy/SKILL.md);
    // preview deploys on *.pages.dev will emit canonical URLs pointing at
    // the production host, which is the desired SEO behavior (no preview
    // dupes in the index).
    baseUrl: 'https://poe.aiocean.io',
    locales: [
      { code: 'vi', language: 'vi-VN', name: 'Tiếng Việt' },
      { code: 'en', language: 'en-US', name: 'English' },
    ],
    detectBrowserLanguage: false,
  },

  css: ['~/assets/css/readability.css'],

  // Surface exact element + attribute on hydration mismatch in production.
  // Vue defaults to a generic "Hydration completed but contains mismatches"
  // warning in prod to save bundle size, which is useless for diagnosis.
  // Cost: ~5KB bundle. Keep on while iterating; remove once SSG is clean.
  vite: {
    define: {
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true',
    },
  },

  // Site config + menu moved here from `app/app.config.ts`. Nuxt 5 / Nitro 3
  // removes the `app.config.ts` / `defineAppConfig` / `useAppConfig` surface,
  // so the andy-note-nuxt layer (≥ 0.3.0) ships defaults under
  // `runtimeConfig.public.site` instead. Nuxt deep-merges layer + consumer
  // public runtimeConfig field-by-field, same merge behavior as the old
  // app.config.ts. Read via `useRuntimeConfig().public.site` / `.menu`.
  runtimeConfig: {
    public: {
      buildInfo,
      site: {
        title: 'PoE',
        description: 'Path of Exile builds, guides, and mechanics documentation',
        tagline: 'Everything you need to dominate Wraeclast',
        author: 'POE AIO',
        themeColor: '#af6025',
        logo: '/logo.png',
        currentLeague: 'Mirage',
        currentPatch: '3.28',
        ign: 'dngdfkj',
      },
      menu: [
        { name: 'Builds', url: '/builds', weight: 1 },
        { name: 'Characters', url: '/characters', weight: 2 },
        { name: 'Mechanics', url: '/mechanics', weight: 3 },
        { name: 'Farming', url: '/farming', weight: 4 },
        { name: 'Skill Tree', url: '/skilltree', weight: 5 },
        { name: 'Leveling', url: '/leveling', weight: 6 },
        { name: 'Donate', url: '/donate', weight: 7 },
      ],
    },
  },

  content: {
    experimental: {
      sqliteConnector: 'native',
    },
  },

  // Seed EN pages so they prerender even with no inbound link from the VI site.
  // VI pages cascade-crawl from `/`; the /en namespace has no such entry yet.
  nitro: {
    prerender: {
      routes: enRoutes,
    },
  },

  app: {
    head: {
      title: 'PoE Vault — Path of Exile Builds & Guides',
      meta: [
        { name: 'description', content: 'Path of Exile builds, farming strategies, and mechanics documentation.' },
        { name: 'theme-color', content: '#d4ff00' },
        // Build provenance — curl-able from rendered HTML without parsing JS.
        { name: 'build-commit', content: buildInfo.commitShort },
        { name: 'build-time', content: buildInfo.buildTime },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/favicon.png' },
      ],
    },
  },
})
