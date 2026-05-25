// Canonical i18n head: sets <html lang> + dir + hreflang/canonical SEO links
// from the active locale. Needed because the theme layer hardcodes
// `htmlAttrs.lang: 'en'` in its nuxt.config — wrong for the Vietnamese default
// (every VI page otherwise ships <html lang="en">). Registered here (after the
// layer's static head) so the locale-driven value wins. useLocaleHead reads the
// route's locale, which under SSG resolves per-prerendered-page correctly.
//
// seo:false is deliberate. With seo:true, useLocaleHead emits <link rel="alternate"
// hreflang> for EVERY configured locale on EVERY page — and the SSG crawler follows
// those alternates, prerendering an /en stub for all ~1200 untranslated VI pages
// (verified: prerender count doubled 1245→2472). Translation is incremental, so we
// do NOT want stub EN pages for untranslated content. hreflang is instead emitted
// conditionally in ContentView, only for pages that actually have a twin in both
// locales. Here we keep just the html lang/dir attributes.
//
// dependsOn ensures i18n's runtime plugin has injected $i18n before this runs,
// otherwise useLocaleHead would throw on a missing i18n context.
export default defineNuxtPlugin({
  name: 'locale-head',
  dependsOn: ['i18n:plugin'],
  setup() {
    const localeHead = useLocaleHead({ dir: true, lang: true, seo: false })
    useHead(() => localeHead.value)
  },
})
