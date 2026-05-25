<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { getExternalLinkAttrs } from '~/composables/useExternalLink'

const props = defineProps<{
  url: string
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
  <a
    v-if="itemName"
    ref="anchorEl"
    :href="url"
    v-bind="getExternalLinkAttrs(url)"
    class="wl-anchor"
    @mouseenter="show"
    @mouseleave="scheduleHide"
    @focus="show"
    @blur="scheduleHide"
  >
    {{ itemName }}
    <ClientOnly>
      <WikiPopover
        v-if="open"
        :reference="anchorEl"
        :name="itemName"
        :wiki-item="wikiItem"
        :loading="wikiLoading"
        @panel-enter="show"
        @panel-leave="scheduleHide"
      />
    </ClientOnly>
  </a>
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
</style>
