<script setup lang="ts">
import { computed, ref } from 'vue'
import { autoPlacement, autoUpdate, offset, shift, size, useFloating } from '@floating-ui/vue'
import { getExternalLinkAttrs } from '~/composables/useExternalLink'
import type { WikiDataResponse } from '~/types/poe-item'

const props = defineProps<{
  reference: HTMLElement | null
  name: string
  wikiItem?: WikiDataResponse | null
  loading?: boolean
  trade?: string
}>()

const emit = defineEmits<{ panelEnter: []; panelLeave: [] }>()

const floatingEl = ref<HTMLElement | null>(null)

const { floatingStyles } = useFloating(
  computed(() => props.reference),
  floatingEl,
  {
    placement: 'bottom',
    middleware: [
      offset(8),
      autoPlacement({
        allowedPlacements: [
          'bottom',
          'bottom-start',
          'bottom-end',
          'top',
          'top-start',
          'top-end',
        ],
        padding: 10,
      }),
      size({
        padding: 10,
        apply({ availableHeight, availableWidth, elements }) {
          elements.floating.style.maxWidth = `${Math.max(190, availableWidth)}px`
          elements.floating.style.maxHeight = `${Math.max(80, availableHeight)}px`
        },
      }),
      shift({ padding: 10, crossAxis: true }),
    ],
    whileElementsMounted: autoUpdate,
  },
)

const itemData = computed(() => {
  if (!props.wikiItem?.found) return null
  return props.wikiItem
})

const hasItemBoxHtml = computed(() => !!itemData.value?.itemBoxHtml)
const showLoading = computed(() => props.loading && !itemData.value)
const showNoData = computed(() => !props.loading && !itemData.value)

const rarity = computed(() => itemData.value?.rarity || 'default')
const headerClass = computed(() => itemData.value?.baseType ? '-double' : '-single')
</script>

<template>
  <Teleport to="body">
    <div
      ref="floatingEl"
      class="poe-popover"
      :style="floatingStyles"
      @mouseenter="emit('panelEnter')"
      @mouseleave="emit('panelLeave')"
    >
      <!-- Loading state -->
      <template v-if="showLoading">
        <div class="poe-box -default">
          <div class="poe-header -single">{{ name }}</div>
          <div class="poe-stats">
            <div class="poe-group poe-loading">
              <span class="poe-spinner" aria-hidden="true" />
              <span>Loading wiki data…</span>
            </div>
          </div>
        </div>
      </template>

      <!-- Pixel-perfect wiki HTML rendering -->
      <template v-else-if="hasItemBoxHtml">
        <div class="poe-wiki-scope" v-html="itemData!.itemBoxHtml" />
      </template>

      <!-- Fallback: structured rendering -->
      <template v-else-if="itemData">
        <div class="poe-box" :class="`-${rarity}`">
          <div class="poe-header" :class="headerClass">
            {{ name }}<br v-if="itemData.baseType"><template v-if="itemData.baseType">{{ itemData.baseType }}</template>
          </div>

          <div class="poe-stats">
            <div v-if="itemData.levelReq" class="poe-group">
              Requires Level <em class="poe-val">{{ itemData.levelReq }}</em>
            </div>

            <div v-if="itemData.implicits?.length" class="poe-group poe-mods">
              <div v-for="(mod, i) in itemData.implicits" :key="'i' + i">{{ mod }}</div>
            </div>

            <div v-if="itemData.explicits?.length" class="poe-group poe-mods">
              <div v-for="(mod, i) in itemData.explicits.slice(0, 8)" :key="'e' + i">{{ mod }}</div>
            </div>

            <div v-if="itemData.description" class="poe-group poe-desc">
              {{ itemData.description }}
            </div>
          </div>
        </div>
      </template>

      <!-- No-data fallback -->
      <template v-else-if="showNoData">
        <div class="poe-box -default">
          <div class="poe-header -single">{{ name }}</div>
          <div class="poe-stats">
            <div class="poe-group poe-desc">No wiki data found.</div>
          </div>
        </div>
      </template>

      <a
        v-if="trade"
        :href="trade"
        v-bind="getExternalLinkAttrs(trade)"
        class="poe-trade-btn"
      >
        <svg class="poe-trade-ic" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="21" r="1.4" />
          <circle cx="19" cy="21" r="1.4" />
          <path d="M1 2h3.2l2.4 12.2a1.7 1.7 0 0 0 1.7 1.4h8.9a1.7 1.7 0 0 0 1.7-1.4L22 6H5.5" />
        </svg>
        Mở trade
      </a>

    </div>
  </Teleport>
</template>

<style>
@import '~/assets/css/poewiki-itembox.css';
</style>

<style scoped>
.poe-popover {
  z-index: 9999;
  max-width: calc(100vw - 20px);
  max-height: calc(100vh - 20px);
  overflow: auto;
}

/* ── Fallback item box (when no wiki HTML) ── */
.poe-box {
  --rc: rgb(200, 200, 200);
  --sep-y: 0px;
  box-sizing: border-box;
  border: 1px solid var(--rc);
  padding: 2px;
  min-width: 190px;
  max-width: 430px;
  text-align: center;
  font-family: FontinSmallCaps, Fontin-SmallCaps, Verdana, Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height: 1.265;
  font-weight: normal;
  font-style: normal;
  color: rgb(127, 127, 127);
  background-color: rgb(0, 0, 0);
}

.poe-box.-default { --rc: rgb(200, 200, 200); --sep-y: 0px; }
.poe-box.-normal  { --rc: rgb(200, 200, 200); --sep-y: 0px; }
.poe-box.-magic   { --rc: rgb(136, 136, 255); --sep-y: -3px; }
.poe-box.-rare    { --rc: rgb(255, 255, 119); --sep-y: -6px; }
.poe-box.-unique  { --rc: rgb(175, 96, 37);   --sep-y: -9px; }
.poe-box.-currency   { --rc: rgb(170, 158, 130); --sep-y: -12px; }
.poe-box.-divination { --rc: rgb(170, 158, 130); --sep-y: -12px; }
.poe-box.-gem     { --rc: rgb(27, 162, 155);  --sep-y: -15px; }

.poe-header {
  box-sizing: content-box;
  display: block;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 17px;
  color: var(--rc);
  background-repeat: no-repeat, no-repeat, repeat-x;
}

.poe-header.-single {
  background-image: url('/images/poe-ui/header-single.png'), url('/images/poe-ui/header-single.png'), url('/images/poe-ui/header-single.png');
  padding: 3px 32px;
  height: 28px;
  line-height: 25px;
}

.poe-header.-double {
  background-image: url('/images/poe-ui/header-double.png'), url('/images/poe-ui/header-double.png'), url('/images/poe-ui/header-double.png');
  padding: 3px 44px;
  height: 48px;
  line-height: 23px;
}

.poe-box.-default .poe-header.-single,
.poe-box.-normal  .poe-header.-single,
.poe-box.-rare    .poe-header.-single,
.poe-box.-unique  .poe-header.-single { background-position: left 0px, right -68px, center -34px; }
.poe-box.-magic   .poe-header.-single { background-position: left -102px, right -170px, center -136px; }
.poe-box.-currency   .poe-header.-single,
.poe-box.-divination .poe-header.-single { background-position: left -204px, right -272px, center -238px; }
.poe-box.-gem .poe-header.-single { background-position: left -306px, right -374px, center -340px; }

.poe-box.-rare .poe-header.-double { background-position: left 0px, right -108px, center -54px; }
.poe-box.-unique .poe-header.-double { background-position: left -162px, right -270px, center -216px; }
.poe-box.-default .poe-header.-double,
.poe-box.-normal  .poe-header.-double,
.poe-box.-magic   .poe-header.-double,
.poe-box.-currency   .poe-header.-double,
.poe-box.-divination .poe-header.-double,
.poe-box.-gem .poe-header.-double { background-position: left 0px, right -108px, center -54px; }

.poe-group { padding: 0 14px; }

.poe-stats > .poe-group:nth-last-child(n+2)::after {
  display: block;
  margin: 5px auto;
  height: 3px;
  background-image: url('/images/poe-ui/separators.png');
  background-position: center var(--sep-y);
  background-repeat: no-repeat;
  content: '';
}

.poe-val { color: rgb(255, 255, 255); font-style: normal; }
.poe-mods { color: rgb(136, 136, 255); }

.poe-desc {
  color: rgb(127, 127, 127);
  font-size: 13px;
  line-height: 1.4;
}
.poe-box.-gem .poe-desc { color: rgb(27, 162, 155); }

.poe-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  color: rgb(170, 170, 170);
  font-size: 13px;
}

.poe-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid rgba(212, 255, 0, 0.25);
  border-top-color: #d4ff00;
  border-radius: 50%;
  animation: poe-spin 0.7s linear infinite;
}

@keyframes poe-spin {
  to { transform: rotate(360deg); }
}

.poe-trade-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 6px;
  padding: 6px 10px;
  border: 1px solid var(--c-border, rgb(80, 80, 80));
  border-radius: 4px;
  background: var(--c-bg, rgb(0, 0, 0));
  color: var(--c-primary);
  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.12s ease, border-color 0.12s ease, color 0.12s ease;
}

.poe-trade-ic {
  width: 15px;
  height: 15px;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.poe-trade-btn:hover,
.poe-trade-btn:focus-visible {
  color: var(--c-primary-hi, var(--c-primary));
  border-color: var(--c-primary);
  background: color-mix(in srgb, var(--c-primary) 16%, transparent);
}

</style>
