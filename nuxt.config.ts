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
  // across layers), so this adds i18n + the SEO stack on top of @nuxt/content
  // from the theme. `@nuxtjs/seo` is the umbrella: sitemap, robots, og-image,
  // schema-org (JSON-LD), and seo-utils (OG/Twitter fallbacks). Canonical +
  // hreflang stay owned by @nuxtjs/i18n (see `site`/`seo` config below) — the
  // SEO modules defer to i18n for those, so each page emits exactly one
  // canonical.
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    // Firebase (Google auth + Firestore) backing the theme's reader-comments
    // feature. The layer ships the comment UI + composable + reference rules;
    // this module + the `vuefire` block below are the deployment wiring it needs.
    'nuxt-vuefire',
    // This project shadows the theme's prose components by name (ProseA: the
    // local one adds footnote popovers ON TOP of the theme's external-link
    // `_blank` defaulting). @nuxt/content registers `components/content` for
    // EVERY layer via a `components:dirs` hook without a priority, and scanned
    // components default to priority 1 — two ProseA at equal priority makes
    // Nuxt warn "Two component files resolving to the same name" and leaves
    // the winner contractually ambiguous. Priority is the framework mechanism
    // for a deterministic override, but it must be set on the hook-injected
    // dir entry, which only exists after @nuxt/content's own hook has run —
    // hence registering via `modules:done` (hooks run in registration order).
    function prioritizeAppContentComponents(_options, nuxt) {
      nuxt.hook('modules:done', () => {
        nuxt.hook('components:dirs', (dirs) => {
          const appContentDir = resolve(nuxt.options.srcDir, 'components/content')
          for (const dir of dirs) {
            if (typeof dir !== 'string' && resolve(dir.path) === appContentDir) {
              dir.priority = 2
            }
          }
        })
      })
    },
  ],

  // Firebase project `poe-comments` (Google auth + Firestore), consumed by the
  // theme's reader-comments feature. These are public web-app config values
  // (safe in the client bundle by design); access is enforced by the deployed
  // Firestore security rules + the Google "Authorized domains" list, not by
  // keeping this secret. No `auth` block: this is a static SSG site, so the
  // theme drives Google sign-in through the client `firebase/auth` SDK rather
  // than nuxt-vuefire's auth module (which would pull `firebase-admin` into the
  // SSR build for server-side sessions a static host can't run). VueFire still
  // provides the Firebase app + Firestore (`useFirestore` / `useCollection`).
  vuefire: {
    config: {
      apiKey: '***REMOVED-FIREBASE-API-KEY***',
      authDomain: 'poe-comments.firebaseapp.com',
      projectId: 'poe-comments',
      storageBucket: 'poe-comments.firebasestorage.app',
      messagingSenderId: '70154526185',
      appId: '1:70154526185:web:ee3e276669a06b1bd87f78',
    },
  },

  // Single source of truth for the production origin, consumed by sitemap,
  // robots, og-image, schema-org, and seo-utils. MUST match the real custom
  // domain (poe2.aiocean.io — the `poe2` CF Pages project). The old
  // poe.aiocean.io is a different, dead project; pointing canonical/sitemap
  // URLs there mis-attributes the entire site to a host Google won't serve.
  site: {
    url: 'https://poe2.aiocean.io',
    name: 'POE2 Vault',
    description: 'Path of Exile 2 builds, mechanics, farming strategies, and league guides for Runes of Aldur (0.5).',
    defaultLocale: 'vi',
  },

  // seo-utils owns the <title> template + OG/Twitter fallbacks. Canonical and
  // hreflang are left to @nuxtjs/i18n (which already emits them from baseUrl),
  // so this disables seo-utils' own canonical/redirect to avoid a duplicate
  // <link rel="canonical"> per page.
  seo: {
    redirectToCanonicalSiteUrl: false,
  },

  // Reference the sitemap from robots.txt and keep the whole site crawlable
  // (it is a public docs site — nothing to hide from indexers).
  robots: {
    sitemap: '/sitemap.xml',
  },

  // Per-page generated OG images are deferred to a focused follow-up (T-021):
  // nuxt-og-image's built-in community templates require ejection + a matching
  // renderer, and a branded card wants its own component + font config + a
  // post-deploy check that PNGs actually render on the CF Linux build. Until
  // then the site ships the static /images/og-cover.jpg from app.head as its
  // social image. The takumi renderer (@takumi-rs/core) is already installed
  // and lockfile-pinned for that follow-up.
  ogImage: {
    enabled: false,
  },

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
    baseUrl: 'https://poe2.aiocean.io',
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
    // Dev-only: `bun run dev:tunnel` serves this dev server through a
    // cloudflared quick tunnel at a random *.trycloudflare.com host. Vite 7
    // rejects unknown Host headers ("Blocked request. This host is not
    // allowed."), so whitelist the tunnel domain — the leading dot matches
    // every subdomain. No effect on `nuxt generate` / SSG output; this
    // configures the dev server only.
    server: {
      allowedHosts: ['.trycloudflare.com'],
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
        title: 'POE2 Vault',
        description: 'Path of Exile 2 builds, mechanics, farming strategies, and league guides.',
        tagline: 'Master Wraeclast in Path of Exile 2',
        author: 'POE2 Vault',
        themeColor: '#d4ff00',
        logo: '/logo.png',
        currentLeague: 'Runes of Aldur',
        currentPatch: '0.5.0',
        ign: 'ThaoCamVienSaiGon',
        // Reader comments (andy-note-nuxt layer). Backed by the `poe-comments`
        // Firebase project wired via `nuxt-vuefire` above. `owners` is the email
        // allowlist the client uses to show Resolve; the deployed Firestore
        // rules enforce it (keep the two in sync).
        comments: {
          enabled: true,
          owners: ['nguyenvanduocit@gmail.com'],
        },
      },
      menu: [
        { name: 'Builds', url: '/builds', weight: 1 },
        { name: 'Characters', url: '/characters', weight: 2 },
        { name: 'Guides', url: '/guides', weight: 3 },
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
      title: 'POE2 Vault — Path of Exile 2 Builds, Mechanics & Guides',
      meta: [
        { name: 'description', content: 'Path of Exile 2 builds, mechanics, farming strategies, and league guides for Runes of Aldur (0.5).' },
        { name: 'theme-color', content: '#d4ff00' },
        // Static site-wide social image (1:1 PoE2 cover). seo-utils absolutizes
        // the relative path against site.url and mirrors og:* into twitter:*.
        // Per-route generated images replace this once T-021 lands.
        { property: 'og:image', content: '/images/og-cover.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
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
