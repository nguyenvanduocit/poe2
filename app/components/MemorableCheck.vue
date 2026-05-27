<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

// Inline checkbox that remembers its state in localStorage. Generic — drop it
// under any heading in MDC content (challenge steps, build progression, gear
// checklist, farming run targets). Sibling instances sharing a storageKey form
// one logical checklist keyed by `id`.
const props = defineProps<{
  // Item key inside the shared checklist object.
  id: string
  // Namespaces the localStorage entry; instances sharing it share state.
  storageKey?: string
  doneLabel?: string
  todoLabel?: string
}>()

const fullKey = computed(() => `poe-checklist:${props.storageKey ?? 'default'}`)

// SSR renders unchecked (mounted=false) so server HTML matches the client's
// first paint; localStorage is read only after hydration.
const mounted = ref(false)
const done = ref(false)

function readState(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(fullKey.value) || '{}') as Record<string, boolean>
  } catch {
    return {}
  }
}

function toggle(): void {
  done.value = !done.value
  const state = readState()
  state[props.id] = done.value
  try {
    localStorage.setItem(fullKey.value, JSON.stringify(state))
  } catch {
    // localStorage unavailable (private mode) — degrade to in-memory for the session.
  }
}

onMounted(() => {
  done.value = !!readState()[props.id]
  mounted.value = true
})

const isDone = computed(() => mounted.value && done.value)
</script>

<template>
  <!-- The checkbox stays a real, visible, in-flow <input> (appearance:none for
       styling). An off-flow sr-only input would receive focus on label click
       and make the browser scroll-into-view its clipped position, yanking the
       whole content scroller — the bug this replaced. -->
  <label class="mc" :class="{ 'mc--done': isDone }">
    <input
      type="checkbox"
      class="mc__box"
      :checked="isDone"
      @change="toggle"
    >
    <span class="mc__text">{{ isDone ? (doneLabel ?? 'Đã hoàn thành') : (todoLabel ?? 'Đánh dấu hoàn thành') }}</span>
  </label>
</template>

<style scoped>
.mc {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
  user-select: none;
  font-family: ui-monospace, 'SF Mono', monospace;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(215, 221, 169, 0.55);
  transition: color 0.12s ease;
}

.mc__box {
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  width: 0.95rem;
  height: 0.95rem;
  margin: 0;
  border: 1.5px solid rgba(212, 255, 0, 0.4);
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  position: relative;
  transition: background 0.12s ease, border-color 0.12s ease;
}

.mc:hover .mc__box {
  border-color: #d4ff00;
}

.mc__box:checked {
  background: #d4ff00;
  border-color: #d4ff00;
}
.mc__box:checked::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #14160d;
  clip-path: polygon(15% 50%, 40% 75%, 85% 25%, 75% 15%, 40% 55%, 25% 40%);
}
.mc__box:focus-visible {
  outline: 2px solid #d4ff00;
  outline-offset: 2px;
}

.mc--done {
  color: #d4ff00;
}
</style>
