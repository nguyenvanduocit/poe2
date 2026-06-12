<script setup lang="ts">
// Global wrapper that pops ANY slotted content into a Document Picture-in-Picture
// window floating over the game — a cheatsheet, a tracker, a price ticker.
//
//   <PipPanel title="Boss Cheatsheet">
//     <BossCheatsheet />
//   </PipPanel>
//
// On the page the content shows inline inside a framed panel; hit the pop-out
// button and the SAME node is relocated into the PiP window (kept reactive),
// leaving a placeholder behind. Closing the window (page button or its own
// chrome) returns the node to the page. Engine lives in usePictureInPicture;
// this component is the presentation + DOM wiring around it.
import { ref, onMounted } from 'vue'
import { usePictureInPicture } from '~/composables/usePictureInPicture'

const props = withDefaults(defineProps<{
  // PiP window title + on-page panel label. Omit to hide the panel header.
  title?: string
  width?: number
  height?: number
  // Draw the bordered panel chrome. Turn off for content that styles itself.
  frame?: boolean
  // Copy page stylesheets into the PiP window (needed unless content is fully inline-styled).
  copyStyles?: boolean
  openLabel?: string
  closeLabel?: string
}>(), {
  title: '',
  width: 380,
  height: 520,
  frame: true,
  copyStyles: true,
  openLabel: '⊡ Pop-out overlay',
  closeLabel: '⊠ Đóng overlay',
})

const { supported, active, host, anchor, toggle, open, close } = usePictureInPicture({
  width: props.width,
  height: props.height,
  copyStyles: props.copyStyles,
  title: props.title || undefined,
  bodyClass: 'pip-panel-body',
  // On the page the frame hugs its content (capped to the viewport); inside PiP
  // it must fill the window. Inline styles win over the scoped rule and revert
  // cleanly on close — no specificity gamble across the relocated stylesheet.
  onOpen: (el) => {
    Object.assign(el.style, { height: '100vh', maxHeight: 'none', border: '0', boxShadow: 'none' })
  },
  onClose: (el) => {
    Object.assign(el.style, { height: '', maxHeight: '', border: '', boxShadow: '' })
  },
})

// Static template refs (no v-if) so they survive the host relocation.
const hostEl = ref<HTMLElement | null>(null)
const anchorEl = ref<HTMLElement | null>(null)
onMounted(() => {
  host.value = hostEl.value
  anchor.value = anchorEl.value
})

defineExpose({ supported, active, toggle, open, close })
</script>

<template>
  <div class="pip">
    <!-- Trigger row: built-in toggle, or override via #trigger -->
    <div class="pip-trigger">
      <slot name="trigger" :active="active" :supported="supported" :toggle="toggle">
        <button v-if="supported" type="button" class="pip-btn" @click="toggle">
          {{ active ? closeLabel : openLabel }}
        </button>
        <div v-else class="pip-hint" title="Document Picture-in-Picture chỉ có trên Chrome / Edge">
          ⚠ PiP cần Chrome / Edge
        </div>
      </slot>
    </div>

    <!-- Placeholder shown on the page while the content lives in the PiP window -->
    <div v-if="active" class="pip-placeholder">
      Overlay đang ở cửa sổ Picture-in-Picture.<br>
      Bấm <b>{{ closeLabel }}</b> hoặc đóng cửa sổ để đưa về trang.
    </div>

    <!-- Host: physically relocated into the PiP window. Static so the ref holds. -->
    <div ref="hostEl" class="pip-frame" :class="{ 'pip-frame--bare': !frame }">
      <div class="pip-frame-body">
        <slot />
      </div>
    </div>
    <div ref="anchorEl" class="hidden" />
  </div>
</template>

<style scoped>
/* Colours come only from andy-note-nuxt theme tokens. */
.pip {
  --c-bg: theme('colors.terminal.bg');
  --c-s0: theme('colors.terminal.surface.0');
  --c-s1: theme('colors.terminal.surface.1');
  --c-text: theme('colors.terminal.text');
  --c-muted: theme('colors.terminal.text-muted');
  --c-faint: theme('colors.terminal.text-faint');
  --c-border: theme('colors.terminal.border');
  --c-border2: theme('colors.terminal.border-strong');
  --c-primary: theme('colors.primary');
  --c-primary-hi: theme('colors.terminal.accent-hover');
}

.pip-trigger { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.pip-btn {
  border: 3px solid var(--c-border); background: var(--c-s1); color: var(--c-text);
  font-family: theme('fontFamily.display');
  font-weight: 700; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 9px 14px; transition: transform 0.08s, border-color 0.12s, background 0.12s;
}
.pip-btn:hover { border-color: var(--c-border2); background: var(--c-s0); }
.pip-btn:active { transform: translate(2px, 2px); }
.pip-hint {
  border: 3px solid var(--c-border); color: var(--c-faint);
  font-family: theme('fontFamily.mono'); font-size: 11px; padding: 9px 12px;
}

.pip-placeholder {
  min-height: 120px; border: 3px dashed var(--c-border);
  display: flex; align-items: center; justify-content: center; text-align: center;
  padding: 24px 18px; font-family: theme('fontFamily.prose'); font-size: 14px; color: var(--c-muted);
}

/* Frame hugs its content (auto height — no fixed/cap height); in PiP it's
   relocated and overridden inline (usePictureInPicture) to fill the window. */
.pip-frame {
  display: flex; flex-direction: column;
  border: 3px solid var(--c-primary);
  box-shadow: 4px 4px 0 0 var(--c-border);
  background: var(--c-bg);
  overflow: hidden;
}
.pip-frame--bare { border: 0; box-shadow: none; background: transparent; }
/* Flex column so a slot root can flex:1 to fill in PiP, yet hug when the frame
   is auto-height on the page. */
.pip-frame-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; display: flex; flex-direction: column; }
</style>
