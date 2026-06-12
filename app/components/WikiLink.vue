<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { getExternalLinkAttrs } from '~/composables/useExternalLink'

const props = defineProps<{
  url: string
  trade?: string
}>()

const itemName = computed(() => {
  try {
    const path = new URL(props.url).pathname
    const last = path.split('/').pop() || ''
    return decodeURIComponent(last).replace(/_/g, ' ')
  } catch {
    return ''
  }
})

const wikiHost = computed(() => {
  try {
    return new URL(props.url).host
  } catch {
    return 'www.poewiki.net'
  }
})

const { data: wikiItem, loading: wikiLoading, load: loadWikiData } = useWikiData(itemName, wikiHost)

const open = ref(false)
const anchorEl = ref<HTMLAnchorElement | null>(null)

const HIDE_DELAY_MS = 250
let hideTimer: ReturnType<typeof setTimeout> | null = null

function show(): void {
  if (hideTimer !== null) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  open.value = true
  loadWikiData()
}

function scheduleHide(): void {
  if (hideTimer !== null) clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    open.value = false
    hideTimer = null
  }, HIDE_DELAY_MS)
}

onBeforeUnmount(() => {
  if (hideTimer !== null) clearTimeout(hideTimer)
})
</script>

<template>
  <span v-if="itemName" class="wl">
    <a
      ref="anchorEl"
      :href="url"
      v-bind="getExternalLinkAttrs(url)"
      class="wl-anchor"
      @mouseenter="show"
      @mouseleave="scheduleHide"
      @focus="show"
      @blur="scheduleHide"
    >{{ itemName }}</a><a
      v-if="trade"
      :href="trade"
      v-bind="getExternalLinkAttrs(trade)"
      class="wl-trade"
      :title="`Mở trade: ${itemName}`"
      :aria-label="`Mở trade ${itemName}`"
      @mouseenter="show"
      @mouseleave="scheduleHide"
      @focus="show"
      @blur="scheduleHide"
    ><svg class="wl-trade-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="21" r="1.4" /><circle cx="19" cy="21" r="1.4" /><path d="M1 2h3.2l2.4 12.2a1.7 1.7 0 0 0 1.7 1.4h8.9a1.7 1.7 0 0 0 1.7-1.4L22 6H5.5" /></svg></a>
    <ClientOnly>
      <WikiPopover
        v-if="open"
        :reference="anchorEl"
        :name="itemName"
        :wiki-item="wikiItem"
        :loading="wikiLoading"
        :trade="trade"
        @panel-enter="show"
        @panel-leave="scheduleHide"
      />
    </ClientOnly>
  </span>
</template>

<style scoped>
a.wl-anchor {
  display: inline;
  padding: 0 0.03em;
  margin: 0;
  border-radius: 2px;
  background: transparent;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  color: #d7dda9;
  text-decoration: underline;
  text-decoration-color: rgba(212, 255, 0, 0.38);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.13em;
  font-family: inherit;
  font-weight: 600;
  line-height: inherit;
  white-space: nowrap;
  cursor: pointer;
  transition: color 0.12s ease, background 0.12s ease, box-shadow 0.12s ease;
  position: relative;
  box-shadow: none;
}

a.wl-anchor:hover,
a.wl-anchor:focus-visible {
  color: #d4ff00;
  background: rgba(212, 255, 0, 0.08);
  box-shadow: 0 0 0 1px rgba(212, 255, 0, 0.16);
  text-decoration-color: rgba(212, 255, 0, 0.85);
}

a.wl-anchor:focus-visible {
  outline: 2px solid #d4ff00;
  outline-offset: 2px;
}

.wl {
  white-space: nowrap;
}

a.wl-trade {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 0.16em;
  padding: 0.05em 0.12em;
  border-radius: 3px;
  color: var(--c-muted);
  text-decoration: none;
  vertical-align: baseline;
  transition: color 0.12s ease, background 0.12s ease;
}

.wl-trade-ic {
  width: 0.98em;
  height: 0.98em;
  display: block;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

a.wl-trade:hover,
a.wl-trade:focus-visible {
  color: var(--c-primary);
  background: color-mix(in srgb, var(--c-primary) 14%, transparent);
}

a.wl-trade:focus-visible {
  outline: 2px solid var(--c-primary);
  outline-offset: 1px;
}
</style>
