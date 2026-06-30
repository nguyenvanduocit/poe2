<script setup lang="ts">
// Rite of the Nameless — Omen Farm cheatsheet. Dropped into
// content/farming/0-5-rite-of-nameless-omen-farm.md as `::omen-farm-cheatsheet`.
// Wraps itself in <PipPanel> so the same node renders inline in the article AND
// pops into a Picture-in-Picture window floating over the game. Data inline —
// shared mechanics (Head of the King, defer, Freedom of Faith) are explained in
// the belt-hunting doc; this strat is the OMEN-VOLUME angle: max pack size →
// tribute → max reroll volume, belt as jackpot. Omen prices poe2scout 2026-06-18;
// strat throughput measured ~20 maps / 2.8h (XTheFarmerX 2026-06-23).
//
// `killer: true` = a row that hits the character being played (Spirit Walker
// companion pack: phys EHP thin, Chaos res ~25 uncapped). Theme is monochrome
// (one accent) so chain/avoid read through glyph + pattern, not red/green.
import { ref } from 'vue'

type Intent = 'triage' | 'chain' | 'avoid' | 'roll' | 'pick' | 'map'
interface Row { text: string, note?: string, killer?: boolean }
interface Group { heading: string, intent: Intent, blurb?: string, rows: Row[] }
interface Tab { id: string, label: string, groups: Group[] }

const TABS: Tab[] = [
  {
    id: 'setup',
    label: 'Setup',
    groups: [
      {
        heading: 'Atlas — chỉ juice ritual, không juice quái',
        intent: 'pick',
        blurb: 'Mọi node chỉnh được dồn vào pack size / rare / magic. Càng đông quái = càng nhiều tribute để quay.',
        rows: [
          { text: 'Master Jado → Partial Translations', note: 'Increased effect cho tablet, roll 0-40% (TB 20%). ~15% lần proc 33%+ = thêm 1 roll, lại bị Freedom of Faith nhân đôi.' },
          { text: 'Tree: pack size > effectiveness > rarity', note: 'Forest master → rare monsters. Swamp master → pack size. Nhớ select Forest + Swamp.' },
          { text: 'Ritual node Tainted (Traveller\'s Woe)', note: 'Unique nghiêng Belt/Charm/Flask — belt là chỗ rớt Mageblood/Headhunter.' },
          { text: 'Between Two Worlds + content wheel', note: 'Wildwood wisp +30% tribute; rogue exile / summoning circle spawn trong ritual = thêm mob.' },
        ],
      },
      {
        heading: 'Tablet loadout (bản đắt ~2.5-3 div/map)',
        intent: 'roll',
        rows: [
          { text: 'Freedom of Faith', note: 'Roll increased-tribute-cost THẤP nhất (~11%). Nhân đôi số reroll — nền của cả strat.' },
          { text: '1× Ritual: "+3 additional free rolls"', note: '~20-23 div. Bị Freedom of Faith nhân đôi = +6 reroll/map. Tablet đắt nhất nhưng cốt lõi.' },
          { text: '2× secondary (~3-4 div)', note: 'reduced tribute for rerolling favours + increased chance to have omens + 3/6 chance một favour không tốn tribute (buyout omen đắt thụ động).' },
          { text: 'Prefix: pack size + increased magic monsters', note: 'Hai dòng cho tribute nhiều nhất.' },
        ],
      },
      {
        heading: 'Map roll',
        intent: 'pick',
        rows: [
          { text: 'Exalt waystone lên 6 mod', note: 'Mở đủ slot tablet.' },
          { text: 'Gỡ item-rarity omen + chaotic effectiveness', note: 'Tùy chọn gỡ thêm monster-rarity omen = pure pack size (~+2c, đáng).' },
          { text: 'Mục tiêu ~48% pack size' },
        ],
      },
    ],
  },
  {
    id: 'map',
    label: 'Map',
    groups: [
      {
        heading: 'Thứ tự chạy ritual',
        intent: 'triage',
        blurb: 'Mob trong ritual ĐẦU copy sang mọi ritual sau — chọn sai mở đầu là loãng cả map.',
        rows: [
          { text: '1. Ritual phòng BOSS trước', note: 'Rite of the Nameless luôn để 1 ritual trong boss room — làm trước = nhồi boss vào mọi ritual sau, +~3k tribute/window.' },
          { text: '2. Mở ritual nhiều / mạnh mob nhất', note: 'Carryover thưởng cho việc bắt đầu đông.' },
          { text: '3. Quét nốt theo đàn locust tím', note: 'Purple locust chỉ hướng ritual gần nhất.' },
        ],
      },
      {
        heading: 'Rite of the Nameless chain',
        intent: 'chain',
        blurb: 'Head of the King <1 div. Cơ chế Head/Rite chung viết ở doc belt-hunting — đây chỉ phần khác.',
        rows: [
          { text: 'Chọn CITY map, lấy rìa ngoài rồi push vào', note: 'KHÔNG cần 200% deli — city map dễ kiếm hơn nhiều.' },
          { text: 'Map "+20% number of Favours" chạy ĐẦU TIÊN', note: 'Buff proliferate sang toàn chuỗi. Buff stack qua các map.' },
          { text: 'Reroll tăng dần: map 1 ~12 → map cuối ~22+', note: 'Vài link đầu rush boss; link sau bỏ qua được (+30s).' },
        ],
      },
      {
        heading: 'Chỗ chết người',
        intent: 'avoid',
        rows: [
          { text: 'Phòng ritual đông + chaos damage chồng', note: 'Chaos res ~25 chưa cap — lỗ duy nhất còn lại.', killer: true },
          { text: 'Map mod extra damage / no regen lên phòng đông', note: 'Pack size cao + boss nhồi = burst bất ngờ dù DPS thừa.', killer: true },
          { text: 'KHÔNG kéo mob ngoài vào ritual được', note: 'Native spawn only, giống Abyss — spawn đúng chỗ thì ăn, không thì thôi.' },
        ],
      },
    ],
  },
  {
    id: 'defer',
    label: 'Defer',
    groups: [
      {
        heading: 'Bật item filter trong ritual',
        intent: 'roll',
        blurb: 'Filter highlight thẳng omen/unique đáng lấy trong window — đỡ phải soi tay từng favour.',
        rows: [
          { text: 'Documents/My Games/Path of Exile 2/production_config', note: 'Mở Notepad, Ctrl+F "filter".' },
          { text: 'Đổi apply item filter to ritual = true', note: 'Mặc định = false.' },
        ],
      },
      {
        heading: 'Vòng quay',
        intent: 'chain',
        rows: [
          { text: 'reroll → defer → reroll → defer …', note: 'Mỗi roll bấm Defer để khoá món hiện lại ở roll sau với tribute thấp hơn nhiều.' },
          { text: 'Defer hạ tribute: Mageblood 25k → ~3-3.5k', note: 'Chưa defer thì filter không highlight (quá đắt); defer xong vừa túi + hiện lên.' },
          { text: 'Cuối map: select-all bằng tribute còn dư' },
        ],
      },
      {
        heading: 'Đừng bỏ omen rẻ',
        intent: 'pick',
        rows: [
          { text: 'Chaotic omen 1.5-3c/cái — nhặt hết', note: 'Nguồn lời NHÌ sau omen đắt: một run ~278c + 33.5 div chỉ từ nhóm này.' },
        ],
      },
    ],
  },
  {
    id: 'profit',
    label: 'Profit',
    groups: [
      {
        heading: 'Throughput (đo ~20 map / 2.8h)',
        intent: 'roll',
        blurb: 'Conservative ~45 div/giờ, run thực ~52. Chưa tính jackpot MB/HH.',
        rows: [
          { text: '~45-52 div/giờ', note: 'Là hàm của tốc độ clear map — build chậm thì ít hơn.' },
          { text: '~1 omen đắt / map trung bình', note: 'Omen rẻ nhất ~6 div → ~3 div/map lời chỉ từ omen.' },
          { text: 'Net ~4-5 div/map sau cost', note: 'Tính cả secondary tablet rớt lại ~1 div/map.' },
        ],
      },
      {
        heading: 'Giá omen (poe2scout 2026-06-18)',
        intent: 'pick',
        rows: [
          { text: 'Omen of Chance ~8.2 div · Whittling ~4.5 div', note: 'Whittling volume rất dày, bán bulk Currency Exchange.' },
          { text: 'Sinistral Annulment/Erasure ~6.3 div', note: 'Cặp Dextral ~3.7-4.1 div. Cần area 79.' },
          { text: 'Jackpot: Mageblood ~611 div · Headhunter ~275 div', note: 'Từ belt window (node Tainted). Strat top tier để săn hai món này.' },
        ],
      },
      {
        heading: 'Cái phải biết trước khi chạy',
        intent: 'avoid',
        rows: [
          { text: 'Đắt — cần vốn nạp trước', note: '~2.5-3 div/map; reroll tablet ~20-23 div là khoản lớn nhất.' },
          { text: 'Gần như không loot ngoài window', note: '~7-8 raw divine trong 3h — cảm giác "không rớt tink".' },
          { text: 'Content dễ → có thể chán', note: 'Bù lại bằng dopamine jackpot window + xác suất MB/HH.' },
        ],
      },
    ],
  },
]

const MARK: Record<Intent, string> = { triage: '▸', chain: '✓', avoid: '✕', roll: '◆', pick: '▸', map: '→' }
const active = ref(TABS[0]!.id)
</script>

<template>
  <PipPanel title="Rite of the Nameless — Omen Farm" :width="420" :height="600">
    <div class="che">
      <div class="che-tabs" role="tablist">
        <button
          v-for="tab in TABS"
          :key="tab.id"
          type="button"
          role="tab"
          class="che-tab"
          :class="{ 'che-tab--on': active === tab.id }"
          :aria-selected="active === tab.id"
          @click="active = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="che-body">
        <template v-for="tab in TABS" :key="tab.id">
          <div v-if="active === tab.id" class="che-groups">
            <section
              v-for="group in tab.groups"
              :key="group.heading"
              class="che-group"
              :class="`is-${group.intent}`"
            >
              <h3 class="che-h">{{ group.heading }}</h3>
              <p v-if="group.blurb" class="che-blurb">{{ group.blurb }}</p>
              <div class="che-rows">
                <div
                  v-for="(row, i) in group.rows"
                  :key="i"
                  class="che-row"
                  :class="{ 'che-row--killer': row.killer }"
                >
                  <span class="che-mark" aria-hidden="true">{{ MARK[group.intent] }}</span>
                  <span class="che-rowbody">
                    <span class="che-text">
                      {{ row.text }}
                      <span v-if="row.killer" class="che-tag">BUILD</span>
                    </span>
                    <span v-if="row.note" class="che-note">{{ row.note }}</span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </template>
      </div>
    </div>
  </PipPanel>
</template>

<style scoped>
.che {
  --c-bg: theme('colors.terminal.bg');
  --c-s0: theme('colors.terminal.surface.0');
  --c-s1: theme('colors.terminal.surface.1');
  --c-text: theme('colors.terminal.text');
  --c-muted: theme('colors.terminal.text-muted');
  --c-faint: theme('colors.terminal.text-faint');
  --c-border: theme('colors.terminal.border');
  --c-primary: theme('colors.primary');

  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1 1 auto;
  min-height: 0;
  background: var(--c-bg);
  color: var(--c-text);
  font-family: theme('fontFamily.display');
  user-select: none;
}

/* ---------- Tabs ---------- */
.che-tabs {
  flex: 0 0 auto; display: flex;
  border-bottom: 2px solid var(--c-border); background: var(--c-s0);
}
.che-tab {
  flex: 1; padding: 8px 6px;
  font-weight: 700; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--c-muted); border-right: 2px solid var(--c-border);
  transition: background 0.1s, color 0.1s;
}
.che-tab:last-child { border-right: 0; }
.che-tab:hover { color: var(--c-text); background: var(--c-s1); }
.che-tab--on { color: var(--c-bg); background: var(--c-primary); }

/* ---------- Body ---------- */
.che-body { flex: 1 1 auto; min-height: 0; overflow-y: auto; }
.che-group { border-bottom: 2px solid var(--c-border); padding: 8px 10px 10px; }
.che-h {
  font-size: 12px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
  color: var(--c-text); margin: 0 0 2px;
}
.che-blurb {
  font-family: theme('fontFamily.prose'); font-size: 11px; line-height: 1.3;
  color: var(--c-faint); margin: 0 0 6px;
}

.che-rows { display: flex; flex-direction: column; gap: 2px; }
.che-row { display: flex; align-items: flex-start; gap: 7px; padding: 3px 4px; }
.che-mark {
  flex: 0 0 auto; width: 14px; text-align: center;
  font-size: 11px; line-height: 1.45; color: var(--c-muted);
}
.che-rowbody { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
.che-text {
  font-family: theme('fontFamily.prose'); font-size: 13px; line-height: 1.28; color: var(--c-text);
}
.che-note {
  font-family: theme('fontFamily.mono'); font-size: 10px; line-height: 1.32; color: var(--c-faint);
}
.che-tag {
  display: inline-block; margin-left: 4px; padding: 0 4px;
  font-family: theme('fontFamily.mono'); font-size: 8px; font-weight: 700;
  letter-spacing: 0.1em; vertical-align: middle;
  color: var(--c-bg); background: var(--c-primary);
}

/* ---------- Intent treatments (monochrome: glyph + pattern, no red/green) ---------- */
.is-chain .che-mark { color: var(--c-primary); }
.is-chain .che-row { box-shadow: inset 2px 0 0 0 color-mix(in srgb, var(--c-primary) 60%, transparent); }

.is-avoid .che-mark { color: var(--c-text); font-weight: 700; }
.is-avoid .che-row {
  background: repeating-linear-gradient(135deg, var(--c-border) 0 3px, transparent 3px 6px) left / 5px 100% no-repeat;
  padding-left: 9px;
}
.is-avoid .che-row--killer {
  background:
    repeating-linear-gradient(135deg, var(--c-primary) 0 3px, transparent 3px 6px) left / 6px 100% no-repeat,
    color-mix(in srgb, var(--c-primary) 7%, transparent);
}
.is-avoid .che-row--killer .che-text { font-weight: 700; }
.is-avoid .che-row--killer .che-mark { color: var(--c-primary); }

.is-triage .che-mark,
.is-roll .che-mark,
.is-pick .che-mark,
.is-map .che-mark { color: var(--c-primary); }
</style>
