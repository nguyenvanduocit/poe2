<script setup lang="ts">
import { computed, useAttrs } from 'vue'

// Override @nuxtjs/mdc's default ProseA (which is just `<NuxtLink :href :target>`).
// This replaces the andy-note-nuxt layer's ProseA, so it must carry BOTH
// behaviors: GFM footnote references get a hover popover (see FootnoteRef.vue),
// and web-external links default to `target="_blank"` (the theme's only change
// from the default). Everything else keeps the exact default behavior —
// internal routes via NuxtLink, all fallthrough attrs preserved.
//
// Footnote refs render as `<a href="#user-content-fn-N" data-footnote-ref>`; the
// backref arrows in the footnotes section use `#user-content-fnref-N` (note the
// `fnref` infix), so a prefix test on `#user-content-fn-` matches refs only and
// never the backrefs. `user-content-` is remark-gfm's clobber prefix (verified
// against prerendered output).
//
// External-link rules mirror the theme: an explicit author target in MDC
// (`[text](url){target="_self"}`) wins — we only default the target when the
// markdown gave none. `rel` is untouched (@nuxt/content already tags external
// links `rel="nofollow"`, and `target="_blank"` implies `noopener`). mailto:/
// tel: are left alone — they invoke a handler, not a tab.

const props = defineProps<{
  href?: string
  target?: string
}>()

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const isFootnoteRef = computed(
  () => typeof props.href === 'string' && props.href.startsWith('#user-content-fn-'),
)

const isWebExternal = computed(
  () =>
    !!props.href &&
    (props.href.startsWith('http://') ||
      props.href.startsWith('https://') ||
      props.href.startsWith('//')),
)

const linkTarget = computed(() => props.target ?? (isWebExternal.value ? '_blank' : undefined))
</script>

<template>
  <FootnoteRef v-if="isFootnoteRef" :href="href!" v-bind="attrs">
    <slot />
  </FootnoteRef>
  <NuxtLink v-else :href="props.href" :target="linkTarget" v-bind="attrs">
    <slot />
  </NuxtLink>
</template>
