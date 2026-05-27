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
/* Mirror the look of a prose `.content li`: Literata serif body, 1.6 line
   height, hanging indent (pl-7), and a coral square marker with the brutalist
   2px stamp shadow — except the marker is now an interactive checkbox.
   Theme tokens hardcoded (scoped CSS can't read tailwind theme()): primary
   #ff7b6b, terminal.border #474541, surface-0 #2e2f2c, terminal.bg #2a2a28,
   terminal.text #d5cfc5. */
.mc {
  display: block;
  position: relative;
  padding-left: 1.75rem;
  margin: 0.5rem 0;
  cursor: pointer;
  user-select: none;
  font-family: 'Literata', 'Literata Fallback', Georgia, serif;
  font-size: 1rem;
  line-height: 1.6;
  color: #d5cfc5;
}

.mc__box {
  appearance: none;
  -webkit-appearance: none;
  position: absolute;
  left: 0;
  top: 0.42rem;
  width: 0.85rem;
  height: 0.85rem;
  margin: 0;
  border: 2px solid #474541;
  background: #2e2f2c;
  border-radius: 0;
  box-shadow: 2px 2px 0 #474541;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.mc:hover .mc__box {
  border-color: #ff7b6b;
  box-shadow: 2px 2px 0 #ff7b6b;
}

.mc__box:checked {
  background: #ff7b6b;
  border-color: #ff7b6b;
}
.mc__box:checked::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #2a2a28;
  clip-path: polygon(15% 50%, 40% 75%, 85% 25%, 75% 15%, 40% 55%, 25% 40%);
}
.mc__box:focus-visible {
  outline: 2px solid #ff7b6b;
  outline-offset: 2px;
}

.mc--done .mc__text {
  text-decoration: line-through;
  opacity: 0.5;
}
</style>
