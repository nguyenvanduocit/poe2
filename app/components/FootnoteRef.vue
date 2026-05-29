<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { autoUpdate, flip, offset, shift, size, useFloating } from '@floating-ui/vue'

// Hover popover for GFM footnote references. The markdown `[^1]` renders to
//   <sup><a href="#user-content-fn-1" data-footnote-ref id="user-content-fnref-1">1</a></sup>
// and the matching content lives in a `<section data-footnotes>` at the bottom of
// the article (`<li id="user-content-fn-1">…</li>`). This component keeps the
// anchor's native click-jump + backref round-trip intact and *adds* a hover/focus
// popover that surfaces the footnote body inline so readers don't lose their place.
//
// Content is read from the rendered DOM (not re-rendered from the minimark AST):
// the footnote body is already in the page, so cloning its HTML is far simpler than
// threading the AST down here. Tradeoff — any interactive MDC inside a footnote
// (e.g. a :wiki-link chip) becomes static HTML in the popover. Footnotes are
// citations, not primary navigation, so the lost hover-price tooltip is acceptable.
//
// Colors come exclusively from the andy-note-nuxt theme tokens via Tailwind
// utilities (terminal-* surfaces/borders, `primary` coral accent, `shadow-stamp`).
// No hardcoded hex — the popover restyles automatically if the theme palette changes.

const props = defineProps<{ href: string }>()

// Fallthrough attrs (id, aria-describedby, data-footnote-ref) must land on the
// anchor, not on a wrapper — keep manual control.
defineOptions({ inheritAttrs: false })

const anchorEl = ref<HTMLAnchorElement | null>(null)
const floatingEl = ref<HTMLElement | null>(null)
const open = ref(false)
const contentHtml = ref('')

const { floatingStyles } = useFloating(anchorEl, floatingEl, {
  placement: 'top',
  middleware: [
    offset(8),
    flip({ padding: 10 }),
    shift({ padding: 10 }),
    size({
      padding: 10,
      apply({ availableHeight, elements }) {
        elements.floating.style.maxHeight = `${Math.max(120, availableHeight)}px`
      },
    }),
  ],
  whileElementsMounted: autoUpdate,
})

const HIDE_DELAY_MS = 250
let hideTimer: ReturnType<typeof setTimeout> | null = null

// Resolve the footnote body for THIS anchor. Scope the lookup to the nearest
// `.content` ancestor: in the stacked-columns layout several articles render at
// once, so footnote ids (`user-content-fn-1`) repeat across columns and a global
// `getElementById` would read the wrong column's note.
function readFootnote(): void {
  const id = props.href.slice(1) // strip leading '#'
  const root: ParentNode = anchorEl.value?.closest('.content') ?? document
  const target = root.querySelector(`[id="${CSS.escape(id)}"]`)
  if (!target) {
    contentHtml.value = ''
    return
  }
  const clone = target.cloneNode(true) as HTMLElement
  // A footnote referenced N times has N backref arrows — remove them all.
  clone.querySelectorAll('a[data-footnote-backref]').forEach(el => el.remove())
  contentHtml.value = clone.innerHTML.trim()
}

function show(): void {
  if (hideTimer !== null) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  if (!contentHtml.value) readFootnote()
  open.value = true
}

function scheduleHide(): void {
  if (hideTimer !== null) clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    open.value = false
    hideTimer = null
  }, HIDE_DELAY_MS)
}

const hasContent = computed(() => contentHtml.value.length > 0)

onBeforeUnmount(() => {
  if (hideTimer !== null) clearTimeout(hideTimer)
})
</script>

<template>
  <a
    ref="anchorEl"
    :href="href"
    class="fn-ref rounded-sm px-0.5 font-bold text-primary no-underline transition-colors hover:bg-primary/15 focus-visible:bg-primary/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
    v-bind="$attrs"
    @mouseenter="show"
    @mouseleave="scheduleHide"
    @focus="show"
    @blur="scheduleHide"
  >
    <slot />
  </a>
  <ClientOnly>
    <Teleport to="body">
      <div
        v-if="open && hasContent"
        ref="floatingEl"
        class="fn-pop z-[9999] w-max max-w-[min(420px,calc(100vw-20px))] overflow-y-auto border border-l-[3px] border-terminal-border border-l-primary bg-terminal-surface-0 px-3.5 py-3 text-sm leading-relaxed text-terminal-text shadow-stamp"
        :style="floatingStyles"
        role="tooltip"
        @mouseenter="show"
        @mouseleave="scheduleHide"
      >
        <div class="fn-pop__body" v-html="contentHtml" />
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style scoped>
.fn-pop {
  /* Theme prose font token — keeps citation text consistent with article body. */
  @apply font-prose;
}

.fn-pop__body :deep(p) {
  margin: 0;
}

.fn-pop__body :deep(p + p) {
  margin-top: 0.5rem;
}

.fn-pop__body :deep(a) {
  @apply text-primary underline decoration-primary/40;
  word-break: break-word;
}

.fn-pop__body :deep(code) {
  @apply rounded-sm bg-terminal-surface-1 px-1 font-mono;
  font-size: 0.82em;
}
</style>
