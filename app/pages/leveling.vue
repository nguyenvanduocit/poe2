<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useLeveling } from '~/composables/useLeveling'
import LevelingOverlay from '~/components/LevelingOverlay.vue'
import type { LevelingAct, LevelingZone } from '~/composables/data/leveling-poe2-0-5'

useHead({
  title: 'Leveling Tracker — POE2',
  meta: [{ name: 'description', content: 'Bám route leveling POE2 0.5 từng zone — tự nhảy bước theo Client.txt, pop-out overlay nổi trên game.' }],
})

const {
  data,
  currentIdx,
  furthestIdx,
  total,
  currentAct,
  currentZone,
  checked,
  zoneDone,
  goTo,
  next,
  prev,
  tick,
  toggleStep,
  resetProgress,
  fsSupported,
  connected,
  hasStoredHandle,
  monitorError,
  lastDetectedZone,
  connectClientTxt,
  reconnect,
  disconnect,
  pipSupported,
  pipActive,
  pipHost,
  pipAnchor,
  togglePip,
} = useLeveling()

// Global zone index per (act, zone) — mirrors the composable's flat numbering.
const zoneOffsets = computed(() => {
  const map: number[][] = []
  let g = 0
  data.forEach((act, ai) => {
    map[ai] = []
    act.zones.forEach((_, zi) => { map[ai]![zi] = g++ })
  })
  return map
})
const gIdx = (ai: number, zi: number) => zoneOffsets.value[ai]?.[zi] ?? -1
const zoneStepsDone = (zone: LevelingZone) =>
  zone.steps.length > 0 && zone.steps.every(s => checked.value.has(s.id))

type ZoneState = 'current' | 'done' | 'past' | 'future'
function zoneState(ai: number, zi: number, zone: LevelingZone): ZoneState {
  const g = gIdx(ai, zi)
  if (g === currentIdx.value) return 'current'
  if (zoneStepsDone(zone)) return 'done'
  if (g <= furthestIdx.value) return 'past'
  return 'future'
}
function actStat(act: LevelingAct) {
  const done = act.zones.filter(zoneStepsDone).length
  return { done, total: act.zones.length, pct: Math.round((done / act.zones.length) * 100) }
}
const pad2 = (n: number) => String(n).padStart(2, '0')

// Wire the DOM nodes the composable relocates for Picture-in-Picture.
const pipHostEl = ref<HTMLElement | null>(null)
const pipAnchorEl = ref<HTMLElement | null>(null)
onMounted(() => {
  pipHost.value = pipHostEl.value
  pipAnchor.value = pipAnchorEl.value
})
</script>

<template>
  <div class="lvl-page h-full overflow-y-auto">
    <div class="max-w-[1100px] mx-auto px-4 py-7">
      <!-- Header -->
      <header class="lvl-head">
        <div>
          <div class="lvl-eyebrow">POE2 0.5 · Return of the Ancients</div>
          <h1 class="lvl-title">Leveling Tracker</h1>
          <p class="lvl-sub">
            Route campaign Act 1–4. Nối <code>Client.txt</code> để overlay tự nhảy bước theo zone, pop-out nổi trên game.
          </p>
        </div>
      </header>

      <!-- Controls -->
      <section class="lvl-controls">
        <template v-if="fsSupported">
          <button
            v-if="!connected"
            type="button"
            class="lvl-btn lvl-btn--primary"
            @click="hasStoredHandle ? reconnect() : connectClientTxt()"
          >
            {{ hasStoredHandle ? '↻ Reconnect Client.txt' : '⊕ Kết nối Client.txt' }}
          </button>
          <div v-else class="lvl-live">
            <span class="lvl-live-dot" />Đang theo dõi<template v-if="lastDetectedZone"> · {{ lastDetectedZone }}</template>
            <button type="button" class="lvl-live-x" aria-label="Ngắt" @click="disconnect">✕</button>
          </div>
        </template>
        <div v-else class="lvl-hint" title="File System Access API chỉ có trên Chrome / Edge">⚠ Auto-advance cần Chrome / Edge</div>

        <button v-if="pipSupported" type="button" class="lvl-btn" @click="togglePip">
          {{ pipActive ? '⊠ Đóng overlay' : '⊡ Pop-out overlay' }}
        </button>
        <div v-else class="lvl-hint" title="Document Picture-in-Picture chỉ có trên Chrome / Edge">⚠ PiP cần Chrome / Edge</div>

        <button type="button" class="lvl-btn lvl-btn--ghost" @click="resetProgress">⟲ Reset</button>
      </section>

      <p v-if="monitorError" class="lvl-err">{{ monitorError }}</p>

      <!-- Body: quest-spine navigator + hero overlay -->
      <div class="lvl-body">
        <nav class="lvl-nav" aria-label="Route campaign">
          <section v-for="(act, ai) in data" :key="act.id" class="lvl-act">
            <header class="lvl-chapter">
              <span class="lvl-actnum">{{ pad2(act.id) }}</span>
              <span class="lvl-actmeta">
                <span class="lvl-actname">{{ act.name }}</span>
                <span class="lvl-actregion">{{ act.region }}</span>
              </span>
              <span class="lvl-actprog">
                <span class="lvl-actprog-n">{{ actStat(act).done }}/{{ actStat(act).total }}</span>
                <span class="lvl-actprog-bar"><span :style="{ width: `${actStat(act).pct}%` }" /></span>
              </span>
            </header>

            <ul class="lvl-spine">
              <li
                v-for="(zone, zi) in act.zones"
                :key="zone.id"
                class="lvl-znode"
                :class="`is-${zoneState(ai, zi, zone)}`"
              >
                <button type="button" class="lvl-zrow" @click="goTo(gIdx(ai, zi))">
                  <span class="lvl-track" aria-hidden="true">
                    <span class="lvl-dot"><span class="lvl-dot-mark">✓</span></span>
                  </span>
                  <span class="lvl-zbody">
                    <span class="lvl-zname">{{ zone.name }}</span>
                    <span v-if="zone.boss" class="lvl-zboss">{{ zone.boss }}</span>
                  </span>
                  <span class="lvl-zmeta">
                    <span v-if="zone.isTown" class="lvl-ztown">TOWN</span>
                    <span class="lvl-zlv">Lv {{ zone.areaLevel }}</span>
                  </span>
                </button>
              </li>
            </ul>
          </section>
        </nav>

        <!-- Hero overlay (sticky) -->
        <div class="lvl-overlay-col">
          <div v-if="pipActive" class="lvl-pip-placeholder">
            Overlay đang ở cửa sổ Picture-in-Picture.<br>Bấm <b>Đóng overlay</b> để đưa về trang.
          </div>
          <!-- Host gets physically relocated into the PiP window; anchor stays
               put for re-insertion. Both static (no v-if) so Vue keeps refs. -->
          <div ref="pipHostEl" class="lvl-overlay-frame">
            <LevelingOverlay
              :act="currentAct"
              :zone="currentZone"
              :checked="checked"
              :zone-done="zoneDone"
              :current-idx="currentIdx"
              :total="total"
              :connected="connected"
              :last-detected-zone="lastDetectedZone"
              @tick="tick"
              @next="next"
              @prev="prev"
              @toggle="toggleStep"
            />
          </div>
          <div ref="pipAnchorEl" class="hidden" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lvl-page {
  --c-bg: theme('colors.terminal.bg');
  --c-s0: theme('colors.terminal.surface.0');
  --c-s1: theme('colors.terminal.surface.1');
  --c-s2: theme('colors.terminal.surface.2');
  --c-text: theme('colors.terminal.text');
  --c-sec: theme('colors.terminal.text-secondary');
  --c-muted: theme('colors.terminal.text-muted');
  --c-faint: theme('colors.terminal.text-faint');
  --c-border: theme('colors.terminal.border');
  --c-border2: theme('colors.terminal.border-strong');
  --c-primary: theme('colors.primary');
  --c-primary-hi: theme('colors.terminal.accent-hover');
  background:
    radial-gradient(140% 80% at 50% -10%, color-mix(in srgb, var(--c-primary) 7%, transparent), transparent 55%),
    repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.12) 0 1px, transparent 1px 3px),
    var(--c-bg);
  color: var(--c-text);
  font-family: theme('fontFamily.display');
}

/* ---------- Header ---------- */
.lvl-head { display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-end; justify-content: space-between; margin-bottom: 22px; }
.lvl-eyebrow { font-family: theme('fontFamily.mono'); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--c-primary); }
.lvl-title { font-size: clamp(30px, 5vw, 46px); font-weight: 700; text-transform: uppercase; letter-spacing: -0.03em; line-height: 0.95; margin-top: 6px; }
.lvl-sub { margin-top: 8px; max-width: 52ch; font-family: theme('fontFamily.prose'); font-size: 14px; color: var(--c-sec); }
.lvl-sub code { font-family: theme('fontFamily.mono'); color: var(--c-primary); font-size: 13px; }

/* ---------- Controls ---------- */
.lvl-controls { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px; }
.lvl-btn {
  border: 3px solid var(--c-border); background: var(--c-s1); color: var(--c-text);
  font-weight: 700; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 9px 14px; transition: transform 0.08s, box-shadow 0.08s, border-color 0.12s, background 0.12s;
}
.lvl-btn:hover { border-color: var(--c-border2); }
.lvl-btn:active { transform: translate(2px, 2px); }
.lvl-btn--primary { background: var(--c-primary); color: var(--c-bg); border-color: var(--c-border2); box-shadow: 3px 3px 0 0 var(--c-border2); }
.lvl-btn--primary:hover { background: var(--c-primary-hi); }
.lvl-btn--primary:active { box-shadow: 0 0 0 0 var(--c-border2); }
.lvl-btn--ghost { background: transparent; color: var(--c-muted); }
.lvl-live { display: inline-flex; align-items: center; gap: 8px; border: 3px solid var(--c-primary); color: var(--c-primary); font-family: theme('fontFamily.mono'); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; padding: 8px 12px; }
.lvl-live-dot { width: 8px; height: 8px; border-radius: 999px; background: var(--c-primary); animation: lvl-pulse 1.4s ease-in-out infinite; }
.lvl-live-x { color: var(--c-faint); margin-left: 2px; }
.lvl-live-x:hover { color: var(--c-text); }
.lvl-hint { border: 3px solid var(--c-border); color: var(--c-faint); font-family: theme('fontFamily.mono'); font-size: 11px; padding: 9px 12px; }
.lvl-err { margin-bottom: 16px; border: 3px solid var(--c-primary); color: var(--c-primary); font-family: theme('fontFamily.mono'); font-size: 12px; padding: 9px 12px; }

/* ---------- Body grid ---------- */
.lvl-body { display: grid; gap: 22px; align-items: start; }
@media (min-width: 900px) { .lvl-body { grid-template-columns: minmax(0, 1fr) minmax(380px, 430px); } }

/* ---------- Quest-spine navigator ---------- */
.lvl-nav { display: flex; flex-direction: column; gap: 22px; }
.lvl-act { border: 3px solid var(--c-border); background: var(--c-s0); box-shadow: 4px 4px 0 0 var(--c-border); }
.lvl-chapter { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-bottom: 3px solid var(--c-border); background: var(--c-s1); }
.lvl-actnum { font-size: 30px; font-weight: 700; line-height: 1; color: var(--c-primary); font-variant-numeric: tabular-nums; }
.lvl-actmeta { display: flex; flex-direction: column; }
.lvl-actname { font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; }
.lvl-actregion { font-family: theme('fontFamily.mono'); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--c-faint); }
.lvl-actprog { margin-left: auto; display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.lvl-actprog-n { font-family: theme('fontFamily.mono'); font-size: 11px; color: var(--c-muted); font-variant-numeric: tabular-nums; }
.lvl-actprog-bar { width: 88px; height: 4px; border: 1px solid var(--c-border); background: var(--c-bg); }
.lvl-actprog-bar span { display: block; height: 100%; background: var(--c-primary); transition: width 0.3s; }

.lvl-spine { display: flex; flex-direction: column; }
.lvl-zrow {
  width: 100%; display: flex; align-items: stretch; gap: 12px; text-align: left;
  padding: 0 14px 0 0; min-height: 44px; transition: background 0.1s;
}
.lvl-zrow:hover { background: var(--c-s1); }
/* track column with the connecting line + node */
.lvl-track { position: relative; flex: 0 0 34px; display: flex; align-items: center; justify-content: center; }
.lvl-track::before { content: ''; position: absolute; top: 0; bottom: 0; left: 50%; width: 2px; transform: translateX(-50%); background: var(--c-border); }
.lvl-znode:first-child .lvl-track::before { top: 50%; }
.lvl-znode:last-child .lvl-track::before { bottom: 50%; }
.lvl-dot { position: relative; z-index: 1; width: 13px; height: 13px; border: 2px solid var(--c-border2); background: var(--c-bg); display: flex; align-items: center; justify-content: center; transition: all 0.15s; }
.lvl-dot-mark { font-size: 9px; line-height: 1; color: var(--c-bg); transform: scale(0); transition: transform 0.16s cubic-bezier(0.2, 1.4, 0.4, 1); }
.lvl-zbody { flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center; padding: 7px 0; }
.lvl-zname { font-family: theme('fontFamily.prose'); font-size: 14px; color: var(--c-text); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lvl-zboss { font-family: theme('fontFamily.mono'); font-size: 10px; letter-spacing: 0.04em; color: var(--c-faint); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.lvl-zmeta { display: flex; align-items: center; gap: 6px; align-self: center; }
.lvl-ztown { font-family: theme('fontFamily.mono'); font-size: 8px; letter-spacing: 0.1em; color: var(--c-faint); border: 1px solid var(--c-border); padding: 1px 4px; }
.lvl-zlv { font-family: theme('fontFamily.mono'); font-size: 10px; color: var(--c-faint); font-variant-numeric: tabular-nums; }

/* zone states */
.lvl-znode.is-past .lvl-track::before,
.lvl-znode.is-done .lvl-track::before,
.lvl-znode.is-current .lvl-track::before { background: color-mix(in srgb, var(--c-primary) 55%, var(--c-border)); }
.lvl-znode.is-done .lvl-dot { background: var(--c-primary); border-color: var(--c-primary); }
.lvl-znode.is-done .lvl-dot-mark { transform: scale(1); }
.lvl-znode.is-past .lvl-dot { border-color: var(--c-primary); }
.lvl-znode.is-future .lvl-zname { color: var(--c-faint); }
.lvl-znode.is-future .lvl-zboss { opacity: 0.5; }
.lvl-znode.is-current { background: color-mix(in srgb, var(--c-primary) 10%, transparent); }
.lvl-znode.is-current .lvl-zrow { box-shadow: inset 3px 0 0 0 var(--c-primary); }
.lvl-znode.is-current .lvl-dot { width: 17px; height: 17px; background: var(--c-primary); border-color: var(--c-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--c-primary) 28%, transparent); animation: lvl-node-pulse 1.6s ease-in-out infinite; }
.lvl-znode.is-current .lvl-zname { color: var(--c-text); font-weight: 700; }

/* ---------- Hero overlay frame ---------- */
.lvl-overlay-col { position: relative; }
@media (min-width: 900px) { .lvl-overlay-col { position: sticky; top: 16px; } }
/* Hugs its content (no fixed-height void on short zones) and caps to the
   viewport so long zones scroll inside the steps list. The child overlay
   stretches to fill via flex so the steps pane owns the scroll. In PiP the
   frame is relocated and overridden inline (useLeveling) to fill the window. */
.lvl-overlay-frame { display: flex; flex-direction: column; max-height: calc(100vh - 32px); border: 3px solid var(--c-primary); box-shadow: 4px 4px 0 0 var(--c-border); overflow: hidden; }
.lvl-overlay-frame :deep(.lvo) { flex: 1 1 auto; min-height: 0; }
.lvl-pip-placeholder { min-height: 200px; border: 3px dashed var(--c-border); display: flex; align-items: center; justify-content: center; text-align: center; padding: 28px 18px; font-family: theme('fontFamily.prose'); font-size: 14px; color: var(--c-muted); }

@keyframes lvl-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
@keyframes lvl-node-pulse { 0%, 100% { box-shadow: 0 0 0 4px color-mix(in srgb, var(--c-primary) 28%, transparent); } 50% { box-shadow: 0 0 0 7px color-mix(in srgb, var(--c-primary) 10%, transparent); } }
@media (prefers-reduced-motion: reduce) { .lvl-live-dot, .lvl-znode.is-current .lvl-dot { animation: none; } }
</style>
