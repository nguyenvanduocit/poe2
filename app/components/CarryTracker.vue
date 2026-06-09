<script setup lang="ts">
// Inline carry/party tracker — embed in content via `::carry-tracker`.
// Three tabs: Party (live roster + per-order billing), Giá (tiered pricing config),
// Discord (WTS listing generator). All live behaviour (File System Access, IndexedDB,
// localStorage, clipboard) is client-only, so the body sits inside <ClientOnly> with a
// static fallback; `nuxt generate` prerenders the fallback and the browser hydrates.
import { ref } from 'vue'
import { useCarryTracker } from '~/composables/useCarryTracker'

const {
  players, totals,
  levelsToGo, estCharge,
  setLevel, setStart, setTarget, togglePaid, toggleSelf, clearRequest, addManual, remove, clearAll,
  tiers, addTier, updateTier, removeTier, resetTiers,
  service, updateService, discordMessage,
  fsSupported, connected, hasStoredHandle, monitorError,
  connectClientTxt, reconnect, disconnect,
} = useCarryTracker()

const tab = ref<'party' | 'pricing' | 'discord'>('party')
const manualName = ref('')
function submitManual(): void { addManual(manualName.value); manualName.value = '' }

function numOrNull(e: Event): number | null {
  const v = (e.target as HTMLInputElement).value.trim()
  if (v === '') return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}
const val = (e: Event): string => (e.target as HTMLInputElement).value

const copied = ref(false)
async function copyMsg(): Promise<void> {
  try {
    await navigator.clipboard.writeText(discordMessage.value)
    copied.value = true
    setTimeout(() => { copied.value = false }, 1500)
  }
  catch { copied.value = false }
}

const fmt = (n: number): string => (Number.isInteger(n) ? String(n) : n.toFixed(1))
</script>

<template>
  <div class="carry not-prose">
    <div class="carry-bar">
      <div class="carry-tabs">
        <button class="carry-tab" :class="{ on: tab === 'party' }" @click="tab = 'party'">Party</button>
        <button class="carry-tab" :class="{ on: tab === 'pricing' }" @click="tab = 'pricing'">Giá</button>
        <button class="carry-tab" :class="{ on: tab === 'discord' }" @click="tab = 'discord'">Discord</button>
      </div>
      <ClientOnly>
        <div v-if="tab === 'party'" class="carry-conn">
          <template v-if="!fsSupported">
            <span class="carry-warn">Cần Chrome/Edge desktop để đọc file.</span>
          </template>
          <template v-else-if="connected">
            <span class="carry-dot on" /> <span class="carry-status">Đang theo dõi</span>
            <button class="carry-btn" @click="disconnect">Ngắt</button>
          </template>
          <template v-else>
            <button class="carry-btn primary" @click="connectClientTxt">Chọn Client.txt</button>
            <button v-if="hasStoredHandle" class="carry-btn" @click="reconnect">Kết nối lại</button>
          </template>
        </div>
      </ClientOnly>
    </div>

    <ClientOnly>
      <p v-if="monitorError && tab === 'party'" class="carry-err">{{ monitorError }}</p>

      <!-- ============ TAB: PARTY ============ -->
      <template v-if="tab === 'party'">
        <div class="carry-scroll">
          <table class="carry-table">
            <thead>
              <tr>
                <th class="l">Người chơi</th>
                <th title="Đăng ký mua từ level (tính tiền)">Start</th>
                <th title="Level hiện tại — live từ Client.txt, sửa tay được">Lv</th>
                <th title="Kéo tới level">Target</th>
                <th title="Còn lại tới target">Còn</th>
                <th title="Tiền cả đơn, tính qua bảng Giá">Tiền</th>
                <th title="Đã trả tiền chưa">Trả?</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in players" :key="p.name" :class="{ self: p.isSelf, gone: !p.present }">
                <td class="l">
                  <span class="carry-pdot" :class="{ on: p.present }" />
                  <button class="carry-name" :title="p.isSelf ? 'Bỏ đánh dấu là mình' : 'Đánh dấu đây là mình (không tính tiền)'" @click="toggleSelf(p.name)">
                    {{ p.name }}<span v-if="p.isSelf" class="carry-tag">bạn</span>
                  </button>
                  <span v-if="p.charClass" class="carry-class">{{ p.charClass }}</span>
                  <button v-if="p.request && !p.present" class="carry-req" :title="`Whisper: ${p.request} · bấm để tắt`" @click="clearRequest(p.name)"><span class="carry-env">✉<span class="carry-env-dot" /></span>chờ</button>
                  <span v-if="p.deaths > 0" class="carry-deaths" :title="`${p.deaths} lần chết — mỗi lần −10% XP`">☠ {{ p.deaths }}</span>
                </td>
                <td><input class="carry-in" type="number" min="1" max="100" inputmode="numeric" :value="p.startLevel ?? ''" placeholder="–" @change="setStart(p.name, numOrNull($event))"></td>
                <td><input class="carry-in" type="number" min="1" max="100" inputmode="numeric" :value="p.level ?? ''" placeholder="–" @change="setLevel(p.name, numOrNull($event))"></td>
                <td><input class="carry-in" type="number" min="1" max="100" inputmode="numeric" :value="p.targetLevel ?? ''" placeholder="–" @change="setTarget(p.name, numOrNull($event))"></td>
                <td class="num" :class="{ done: levelsToGo(p) === 0 && p.targetLevel != null }">{{ levelsToGo(p) ?? '–' }}</td>
                <td class="num">{{ estCharge(p) != null ? fmt(estCharge(p)!) : '–' }}</td>
                <td><button class="carry-paid" :class="{ yes: p.paid }" @click="togglePaid(p.name)">{{ p.paid ? '✓ rồi' : 'chưa' }}</button></td>
                <td><button class="carry-x" title="Xoá khỏi danh sách" @click="remove(p.name)">×</button></td>
              </tr>
              <tr v-if="players.length === 0">
                <td colspan="8" class="carry-empty">
                  Chưa thấy ai. Kết nối Client.txt rồi mời buyer vào party — họ tự hiện khi level-up hoặc vào map của bạn. Buyer chưa lên level thì bấm "Thêm tay" rồi nhập Lv.
                </td>
              </tr>
            </tbody>
            <tfoot v-if="players.length > 0">
              <tr>
                <td class="l">Tổng (trừ bạn)</td>
                <td /><td /><td />
                <td class="r">Tiền</td>
                <td class="num">{{ fmt(totals.est) }}</td>
                <td class="num">thu {{ fmt(totals.collected) }}</td>
                <td />
              </tr>
              <tr v-if="totals.unpaidDone > 0">
                <td class="warn-cell" colspan="8">Có buyer đã tới target nhưng chưa trả — còn thiếu ~{{ fmt(totals.unpaidDone) }} {{ service.currency }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="carry-foot">
          <form class="carry-add" @submit.prevent="submitManual">
            <input v-model="manualName" class="carry-in wide" type="text" placeholder="Thêm tay (IGN buyer)…">
            <button class="carry-btn" type="submit">Thêm</button>
          </form>
          <button v-if="players.length > 0" class="carry-btn ghost" @click="clearAll">Xoá hết</button>
        </div>
      </template>

      <!-- ============ TAB: PRICING ============ -->
      <template v-else-if="tab === 'pricing'">
        <div class="carry-scroll">
          <table class="carry-table">
            <thead>
              <tr><th>Từ Lv</th><th>Tới Lv</th><th>{{ service.currency }} / level</th><th /></tr>
            </thead>
            <tbody>
              <tr v-for="t in tiers" :key="t.id">
                <td><input class="carry-in" type="number" min="1" max="100" :value="t.fromLevel" @change="updateTier(t.id, 'fromLevel', numOrNull($event))"></td>
                <td><input class="carry-in" type="number" min="1" max="100" :value="t.toLevel" @change="updateTier(t.id, 'toLevel', numOrNull($event))"></td>
                <td><input class="carry-in" type="number" min="0" step="0.5" :value="t.pricePerLevel" @change="updateTier(t.id, 'pricePerLevel', numOrNull($event))"></td>
                <td><button class="carry-x" title="Xoá tier" @click="removeTier(t.id)">×</button></td>
              </tr>
              <tr v-if="tiers.length === 0">
                <td colspan="4" class="carry-empty">Chưa có tier nào. Bấm "Thêm tier" để tạo bảng giá.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="carry-foot">
          <button class="carry-btn primary" @click="addTier">Thêm tier</button>
          <button class="carry-btn ghost" @click="resetTiers">Mặc định</button>
        </div>
        <p class="carry-note">Mỗi tier tính tiền cho từng level lên trong khoảng [Từ, Tới). Khoảng giá này dùng cho cột Tiền ở tab Party và cho bài đăng ở tab Discord.</p>
      </template>

      <!-- ============ TAB: DISCORD ============ -->
      <template v-else>
        <div class="carry-form">
          <label class="carry-field"><span>Tiêu đề</span><input class="carry-in full" type="text" :value="service.title" @input="updateService('title', val($event))"></label>
          <div class="carry-row2">
            <label class="carry-field"><span>Realm</span><input class="carry-in full" type="text" :value="service.realm" @input="updateService('realm', val($event))"></label>
            <label class="carry-field"><span>IGN</span><input class="carry-in full" type="text" placeholder="YourIGN" :value="service.ign" @input="updateService('ign', val($event))"></label>
            <label class="carry-field sm"><span>Đơn vị</span><input class="carry-in full" type="text" :value="service.currency" @input="updateService('currency', val($event))"></label>
          </div>
          <label class="carry-field"><span>Dòng thêm</span><input class="carry-in full" type="text" :value="service.extraLine" @input="updateService('extraLine', val($event))"></label>
        </div>
        <div class="carry-msg-head">
          <span class="carry-status">Bài đăng (lấy giá từ tab Giá)</span>
          <button class="carry-btn primary" @click="copyMsg">{{ copied ? '✓ Đã copy' : 'Copy' }}</button>
        </div>
        <pre class="carry-msg">{{ discordMessage }}</pre>
      </template>

      <template #fallback>
        <div class="carry-scroll">
          <p class="carry-empty">Bảng theo dõi + cấu hình giá + bài đăng Discord hiện ra ở đây khi mở trong trình duyệt desktop.</p>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.carry {
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
  margin: 24px 0;
  border: 1px solid var(--c-border2);
  border-radius: 4px;
  background: var(--c-s0);
  color: var(--c-text);
  font-family: theme('fontFamily.display');
  box-shadow: theme('boxShadow.stamp');
  overflow: hidden;
}

.carry-bar {
  display: flex; flex-wrap: wrap; gap: 10px 16px; align-items: center; justify-content: space-between;
  padding: 8px 12px; background: var(--c-s1); border-bottom: 1px solid var(--c-border);
}
.carry-tabs { display: flex; gap: 4px; }
.carry-tab {
  font: inherit; font-size: 12px; cursor: pointer; padding: 5px 13px; border-radius: 3px;
  background: transparent; color: var(--c-muted); border: 1px solid transparent;
}
.carry-tab:hover { color: var(--c-text); }
.carry-tab.on { background: var(--c-s2); color: var(--c-primary); border-color: var(--c-border2); font-weight: 600; }

.carry-conn { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.carry-status { font-size: 12px; color: var(--c-sec); }
.carry-warn { font-size: 12px; color: var(--c-muted); }
.carry-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--c-faint); display: inline-block; }
.carry-dot.on { background: #6fcf6f; box-shadow: 0 0 6px #6fcf6f; }

.carry-err { margin: 0; padding: 8px 14px; font-size: 12px; color: #ff9b8a; background: color-mix(in srgb, var(--c-primary) 10%, transparent); }

.carry-scroll { overflow-x: auto; }
.carry-table { width: 100%; border-collapse: collapse; font-size: 13px; min-width: 520px; }
.carry-table th, .carry-table td { padding: 7px 9px; border-bottom: 1px solid var(--c-border); text-align: center; white-space: nowrap; }
.carry-table th { font-family: theme('fontFamily.mono'); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); font-weight: 600; background: var(--c-s1); }
.carry-table th.l, .carry-table td.l { text-align: left; }
.carry-table td.num { font-variant-numeric: tabular-nums; }
.carry-table td.num.done { color: #6fcf6f; font-weight: 600; }
.carry-table tbody tr:hover { background: var(--c-s1); }
.carry-table tr.gone td.l .carry-name { color: var(--c-faint); }
.carry-table tr.self { opacity: 0.62; }

.carry-pdot { width: 7px; height: 7px; border-radius: 50%; background: var(--c-faint); display: inline-block; margin-right: 7px; vertical-align: middle; }
.carry-pdot.on { background: #6fcf6f; }
.carry-name { background: none; border: 0; color: var(--c-text); font: inherit; cursor: pointer; padding: 0; }
.carry-name:hover { color: var(--c-primary); }
.carry-tag { margin-left: 5px; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--c-primary); border: 1px solid var(--c-border2); border-radius: 3px; padding: 0 4px; }
.carry-class { margin-left: 8px; font-size: 11px; color: var(--c-faint); }
.carry-req { margin-left: 8px; font: inherit; font-size: 10px; color: var(--c-primary); background: none; border: 1px solid var(--c-border2); border-radius: 3px; padding: 1px 5px; cursor: pointer; display: inline-flex; align-items: center; gap: 5px; line-height: 1; vertical-align: middle; }
.carry-req:hover { color: var(--c-text); border-color: var(--c-primary); }
.carry-env { position: relative; display: inline-block; font-size: 12px; line-height: 1; font-variant-emoji: text; }
.carry-env-dot { position: absolute; top: 1px; left: 1px; width: 5px; height: 5px; border-radius: 50%; background: var(--c-primary); box-shadow: 0 0 0 1px var(--c-s1); }
.carry-deaths { margin-left: 8px; font-size: 11px; color: #ff9b8a; }

.carry-in { width: 56px; padding: 3px 6px; text-align: center; font: inherit; font-size: 13px; background: var(--c-s2); color: var(--c-text); border: 1px solid var(--c-border); border-radius: 3px; }
.carry-in.wide { width: 200px; text-align: left; }
.carry-in.full { width: 100%; text-align: left; }
.carry-in:focus { outline: none; border-color: var(--c-primary); }

.carry-btn { font: inherit; font-size: 12px; cursor: pointer; padding: 4px 10px; border-radius: 3px; background: var(--c-s2); color: var(--c-text); border: 1px solid var(--c-border2); }
.carry-btn:hover { border-color: var(--c-primary); color: var(--c-primary); }
.carry-btn.primary { background: var(--c-primary); color: #221; border-color: var(--c-primary); font-weight: 600; }
.carry-btn.primary:hover { color: #221; filter: brightness(1.08); }
.carry-btn.ghost { color: var(--c-muted); }

.carry-paid { font: inherit; font-size: 12px; cursor: pointer; padding: 3px 9px; border-radius: 3px; background: transparent; color: var(--c-muted); border: 1px solid var(--c-border2); }
.carry-paid.yes { background: #2f5d32; color: #cdeccf; border-color: #3f7a43; }
.carry-x { background: none; border: 0; color: var(--c-faint); font-size: 16px; line-height: 1; cursor: pointer; padding: 0 4px; }
.carry-x:hover { color: #ff9b8a; }

.carry-empty { padding: 18px 14px; text-align: center; color: var(--c-muted); font-size: 12.5px; white-space: normal; }
.carry-note { margin: 0; padding: 8px 14px 12px; font-size: 11.5px; color: var(--c-faint); white-space: normal; }

.carry-table tfoot td { background: var(--c-s1); font-size: 12px; color: var(--c-sec); border-top: 1px solid var(--c-border2); }
.carry-table tfoot td.r { text-align: right; color: var(--c-muted); }
.carry-table tfoot .warn-cell { color: #ffb3a3; text-align: left; }

.carry-foot { display: flex; gap: 10px; align-items: center; justify-content: space-between; flex-wrap: wrap; padding: 10px 14px; background: var(--c-s1); border-top: 1px solid var(--c-border); }
.carry-add { display: flex; gap: 8px; }

.carry-form { padding: 14px; display: flex; flex-direction: column; gap: 10px; }
.carry-row2 { display: flex; gap: 10px; flex-wrap: wrap; }
.carry-field { display: flex; flex-direction: column; gap: 4px; flex: 1; min-width: 120px; }
.carry-field.sm { flex: 0 0 90px; min-width: 90px; }
.carry-field > span { font-family: theme('fontFamily.mono'); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--c-muted); }

.carry-msg-head { display: flex; align-items: center; justify-content: space-between; padding: 6px 14px; background: var(--c-s1); border-top: 1px solid var(--c-border); }
.carry-msg { margin: 0; padding: 14px; font-family: theme('fontFamily.mono'); font-size: 12.5px; line-height: 1.5; color: var(--c-text); background: var(--c-s0); white-space: pre-wrap; word-break: break-word; }
</style>
