<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

// Inline checkbox that remembers its state in localStorage. Generic — drop one
// or several under any heading in MDC content (challenge sub-tasks, build
// progression steps, gear checklist, farming run targets). Sibling instances
// sharing a storageKey form one logical checklist keyed by `id`; `label` is the
// task text shown next to each box.
const props = defineProps<{
  // Item key inside the shared checklist object — unique per task.
  id: string
  // The task description shown next to the checkbox.
  label: string
  // Namespaces the localStorage entry; instances sharing it share state.
  storageKey?: string
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
    <span class="mc__text">{{ label }}</span>
  </label>
</template>

<style scoped>
.mc {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
  margin: 0.3rem 0;
  font-family: ui-monospace, 'SF Mono', monospace;
  font-size: 0.82rem;
  font-weight: 500;
  line-height: 1.45;
  color: #c7ccab;
  transition: color 0.12s ease;
}

.mc__box {
  appearance: none;
  -webkit-appearance: none;
  flex-shrink: 0;
  width: 0.95rem;
  height: 0.95rem;
  margin: 0.15rem 0 0;
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

.mc--done .mc__text {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
