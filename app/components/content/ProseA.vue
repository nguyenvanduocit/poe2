<script setup lang="ts">
import { computed, useAttrs } from 'vue'

// Override @nuxtjs/mdc's default ProseA (which is just `<NuxtLink :href :target>`).
// Goal: GFM footnote references get a hover popover (see FootnoteRef.vue), while
// every other markdown link keeps the exact default behavior — internal routes via
// NuxtLink, external links as plain anchors, all fallthrough attrs preserved.
//
// Footnote refs render as `<a href="#user-content-fn-N" data-footnote-ref>`; the
// backref arrows in the footnotes section use `#user-content-fnref-N` (note the
// `fnref` infix), so a prefix test on `#user-content-fn-` matches refs only and
// never the backrefs. `user-content-` is remark-gfm's clobber prefix (verified
// against prerendered output).

const props = defineProps<{
  href?: string
  target?: string
}>()

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const isFootnoteRef = computed(
  () => typeof props.href === 'string' && props.href.startsWith('#user-content-fn-'),
)
</script>

<template>
  <FootnoteRef v-if="isFootnoteRef" :href="href!" v-bind="attrs">
    <slot />
  </FootnoteRef>
  <NuxtLink v-else :href="props.href" :target="props.target" v-bind="attrs">
    <slot />
  </NuxtLink>
</template>
