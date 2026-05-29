<script setup lang="ts">
// The minimal leveling checklist — the hero of the page. Rendered once by
// leveling.vue; its host node is physically relocated into a Document
// Picture-in-Picture window by useLeveling, so it must stay self-contained and
// style itself only through cloned theme classes (no ancestor-layout reliance).
//
// This floats ON TOP of the game in PiP, so density is the whole point: a tight
// one-row header (controls + zone id) and thin checklist rows — block as little
// of the screen as possible.
import type { LevelingAct, LevelingZone } from '~/composables/data/leveling-poe2-0-5'

const props = defineProps<{
  act: LevelingAct | null
  zone: LevelingZone | null
  checked: Set<string>
  zoneDone: boolean
  currentIdx: number
  total: number
  connected: boolean
  lastDetectedZone: string | null
}>()

const emit = defineEmits<{
  tick: []
  next: []
  prev: []
  toggle: [id: string]
}>()

const atFirst = computed(() => props.currentIdx <= 0)
const atLast = computed(() => props.currentIdx >= props.total - 1)
const doneInZone = computed(() => {
  if (!props.zone) return 0
  return props.zone.steps.filter(s => props.checked.has(s.id)).length
})
</script>

<template>
  <div class="lvo">
    <!-- One-row header: compact controls + zone id (name over a tiny meta line) -->
    <div class="lvo-hero">
      <div class="lvo-nav">
        <button type="button" class="lvo-arrow" :disabled="atFirst" aria-label="Zone trước" @click="emit('prev')">‹</button>
        <button
          type="button"
          class="lvo-tick"
          :class="{ 'lvo-tick--done': zoneDone }"
          @click="emit('tick')"
        >
          <span class="lvo-tick-mark">✓</span>{{ zoneDone ? 'KẾ' : 'Done' }}
        </button>
        <button type="button" class="lvo-arrow" :disabled="atLast" aria-label="Zone kế" @click="emit('next')">›</button>
      </div>
      <div class="lvo-id">
        <span class="lvo-zonename">{{ zone?.name ?? 'Hết route' }}</span>
        <span class="lvo-meta">
          <span
            v-if="connected"
            class="lvo-live"
            :title="lastDetectedZone ? `Auto: ${lastDetectedZone}` : 'Đang theo dõi Client.txt'"
          ><span class="lvo-pulse" />AUTO</span>
          <span v-if="act">{{ act.name }}</span>
          <span v-if="zone">· LV {{ zone.areaLevel }}</span>
          <span v-if="zone?.isTown">· TOWN</span>
          <span class="lvo-count">· {{ doneInZone }}/{{ zone?.steps.length ?? 0 }}</span>
        </span>
      </div>
    </div>

    <!-- Steps -->
    <div class="lvo-steps">
      <p v-if="!zone || zone.steps.length === 0" class="lvo-empty">
        Không có bước nào — bấm Tick để qua zone kế.
      </p>
      <button
        v-for="step in zone?.steps ?? []"
        :key="step.id"
        type="button"
        class="lvo-step"
        :class="{
          'lvo-step--done': checked.has(step.id),
          'lvo-step--opt': step.optional,
        }"
        @click="emit('toggle', step.id)"
      >
        <span class="lvo-box"><span class="lvo-box-mark">✓</span></span>
        <span class="lvo-step-body">
          <span class="lvo-text"><template v-if="step.optional">OPT· </template>{{ step.text }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Colours come only from andy-note-nuxt theme tokens, mirrored into local
   custom properties so pseudo-elements / gradients / keyframes can reference
   them without scattering literals. Single source of truth, one block. */
.lvo {
  --c-bg: theme('colors.terminal.bg');
  --c-surface0: theme('colors.terminal.surface.0');
  --c-surface1: theme('colors.terminal.surface.1');
  --c-surface2: theme('colors.terminal.surface.2');
  --c-text: theme('colors.terminal.text');
  --c-muted: theme('colors.terminal.text-muted');
  --c-faint: theme('colors.terminal.text-faint');
  --c-border: theme('colors.terminal.border');
  --c-border2: theme('colors.terminal.border-strong');
  --c-primary: theme('colors.primary');
  --c-primary-hi: theme('colors.terminal.accent-hover');

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  background:
    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.13) 0 1px, transparent 1px 3px),
    var(--c-bg);
  color: var(--c-text);
  font-family: theme('fontFamily.display');
  user-select: none;
}

/* ---------- One-row header: controls (left) + zone id (right) ---------- */
.lvo-hero {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 9px;
  border-bottom: 2px solid var(--c-border);
  background:
    radial-gradient(120% 160% at 100% 0%, color-mix(in srgb, var(--c-primary) 10%, transparent), transparent 60%),
    var(--c-surface0);
}
.lvo-nav { flex: 0 0 auto; display: flex; gap: 4px; }
.lvo-arrow {
  flex: 0 0 auto; width: 28px; height: 28px;
  border: 2px solid var(--c-border); background: var(--c-surface1); color: var(--c-muted);
  font-size: 15px; line-height: 1; transition: transform 0.08s, border-color 0.12s, color 0.12s;
}
.lvo-arrow:hover:not(:disabled) { color: var(--c-text); border-color: var(--c-border2); }
.lvo-arrow:active:not(:disabled) { transform: translate(1px, 1px); }
.lvo-arrow:disabled { opacity: 0.28; cursor: not-allowed; }
.lvo-tick {
  flex: 0 0 auto; height: 28px; min-width: 74px;
  display: inline-flex; align-items: center; justify-content: center; gap: 5px;
  padding: 0 12px;
  border: 2px solid var(--c-border2);
  background: var(--c-primary); color: var(--c-bg);
  font-weight: 700; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;
  box-shadow: 2px 2px 0 0 var(--c-border2);
  transition: transform 0.08s, box-shadow 0.08s, background 0.12s;
}
.lvo-tick:hover { background: var(--c-primary-hi); }
.lvo-tick:active { transform: translate(2px, 2px); box-shadow: 0 0 0 0 var(--c-border2); }
.lvo-tick--done { background: var(--c-surface1); color: var(--c-primary); border-color: var(--c-primary); box-shadow: 2px 2px 0 0 var(--c-primary); }
.lvo-tick-mark { font-size: 12px; }

.lvo-id { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.lvo-zonename {
  font-size: 15px; line-height: 1.1; font-weight: 700;
  text-transform: uppercase; letter-spacing: -0.01em; color: var(--c-text);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lvo-meta {
  display: flex; align-items: center; gap: 4px;
  font-family: theme('fontFamily.mono'); font-size: 9px; letter-spacing: 0.06em;
  text-transform: uppercase; color: var(--c-faint);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.lvo-live { display: inline-flex; align-items: center; gap: 3px; color: var(--c-primary); }
.lvo-count { color: var(--c-muted); font-variant-numeric: tabular-nums; }
.lvo-pulse {
  width: 5px; height: 5px; border-radius: 999px; background: var(--c-primary);
  animation: lvo-pulse 1.4s ease-in-out infinite;
}

/* ---------- Steps — thin dense rows ---------- */
.lvo-steps { flex: 1; min-height: 0; overflow-y: auto; }
.lvo-empty { padding: 12px 11px; font-family: theme('fontFamily.prose'); font-size: 13px; color: var(--c-muted); }
.lvo-step {
  width: 100%; display: flex; align-items: flex-start; gap: 8px;
  padding: 4px 11px; text-align: left;
  border-bottom: 1px solid var(--c-border);
  transition: background 0.1s;
}
.lvo-step:hover { background: var(--c-surface1); }
.lvo-step--opt { background: repeating-linear-gradient(135deg, transparent 0 7px, color-mix(in srgb, var(--c-border) 35%, transparent) 7px 8px); }
.lvo-box {
  flex: 0 0 auto; margin-top: 2px; width: 15px; height: 15px;
  border: 2px solid var(--c-border2);
  display: flex; align-items: center; justify-content: center;
  transition: background 0.14s, border-color 0.14s;
}
.lvo-box-mark { font-size: 9px; line-height: 1; color: var(--c-bg); transform: scale(0); transition: transform 0.16s cubic-bezier(0.2, 1.4, 0.4, 1); }
.lvo-step--done .lvo-box { background: var(--c-primary); border-color: var(--c-primary); }
.lvo-step--done .lvo-box-mark { transform: scale(1); }
.lvo-step-body { flex: 1; min-width: 0; }
.lvo-text { font-family: theme('fontFamily.prose'); font-size: 13px; line-height: 1.28; color: var(--c-text); }
.lvo-step--opt .lvo-text { color: var(--c-muted); }
.lvo-step--done .lvo-text { color: var(--c-faint); text-decoration: line-through; text-decoration-thickness: 1px; }

@keyframes lvo-pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
@media (prefers-reduced-motion: reduce) {
  .lvo-pulse { animation: none; }
}
</style>
