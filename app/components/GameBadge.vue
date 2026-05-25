<script setup lang="ts">
const props = defineProps<{
  segments: string[]
}>()

function displayRoman(game: string): string {
  const g = game.toUpperCase().trim()
  if (g === 'POE1') return 'Ⅰ'
  if (g === 'POE2') return 'Ⅱ'
  return g
}

const variant = computed(() => {
  const g = (props.segments[0] ?? '').toUpperCase().trim()
  if (g === 'POE1') return 'poe1'
  if (g === 'POE2') return 'poe2'
  return 'unknown'
})
</script>

<template>
  <span :class="['game-badge', `game-badge--${variant}`]">
    <span class="game-badge__game">{{ displayRoman(segments[0] ?? '') }}</span>
    <span v-if="segments.length > 1" class="game-badge__version">{{ segments.slice(1).join(' ') }}</span>
  </span>
</template>

<style>
.game-badge {
  display: inline-flex;
  align-items: stretch;
  font-weight: 700;
  white-space: nowrap;
  flex-shrink: 0;
  vertical-align: middle;
  line-height: 1;
}
.game-badge__game {
  padding: 0.15rem 0.35rem;
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 0.7rem;
  line-height: 1.5;
}
.game-badge__version {
  border-left: none;
  padding: 0.15rem 0.3rem;
  font-family: ui-monospace, 'SF Mono', monospace;
  font-size: 0.6rem;
  line-height: 1.5;
  letter-spacing: 0.02em;
}

/* POE1 — amber/gold, warm */
.game-badge--poe1 .game-badge__game {
  background: #f59e0b;
  color: #1c1100;
}
.game-badge--poe1 .game-badge__version {
  background: rgba(245, 158, 11, 0.08);
  color: rgba(245, 158, 11, 0.75);
  border: 1px solid rgba(245, 158, 11, 0.3);
  border-left: none;
}

/* POE2 — crimson, aggressive */
.game-badge--poe2 .game-badge__game {
  background: #dc2626;
  color: #fff;
}
.game-badge--poe2 .game-badge__version {
  background: rgba(220, 38, 38, 0.1);
  color: rgba(220, 38, 38, 0.85);
  border: 1px solid rgba(220, 38, 38, 0.35);
  border-left: none;
}
</style>
