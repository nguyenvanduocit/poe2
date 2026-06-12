<script setup lang="ts">
// Ocean Exploring / Grand Expedition mod cheatsheet — one self-contained file
// dropped into content/guides/0-5-ocean-exploring.md as `::expedition-cheatsheet`.
// It wraps itself in <PipPanel>, so the same node shows inline in the article AND
// pops into a Picture-in-Picture window floating over the game. Data is inline
// below — verified against the 0.5.0 patch notes + poedb via this guide +
// 0-5-grand-expedition-farming.md.
//
// `killer: true` = a mod that hits the character being played (Spirit Walker
// companion pack: companions deal PHYSICAL, defence is pure EVASION, Chaos res
// is not capped ~25). The theme is monochrome (one accent), so good/avoid reads
// through glyph + pattern, not red/green: chain rows get ✓ + a primary rail,
// avoid rows get ✕ + a hazard stripe, build-killers get a louder stripe + tag.
import { ref } from 'vue'

type Intent = 'triage' | 'chain' | 'avoid' | 'roll' | 'pick' | 'map'
interface Row { text: string, note?: string, killer?: boolean }
interface Group { heading: string, intent: Intent, blurb?: string, rows: Row[] }
interface Tab { id: string, label: string, groups: Group[] }

const TABS: Tab[] = [
  {
    id: 'remnant',
    label: 'Remnant',
    groups: [
      {
        heading: 'Triage theo rune slot',
        intent: 'triage',
        blurb: 'Quyết định nhanh nhất — nhìn số slot trước khi hover.',
        rows: [
          { text: '3 slot → skip', note: 'Không cần hover.' },
          { text: '4 slot → chỉ chạy khi có rune TÍM', note: 'Rune tím = special modifier, 4 slot tím vẫn ra divine.' },
          { text: '5+ slot → LUÔN chạy', note: 'Kể cả reward xấu: quái khai quật toàn rare, dồn loot cuối map.' },
        ],
      },
      {
        heading: 'Suffix đáng nối vào chain',
        intent: 'chain',
        blurb: 'Suffix = phần thưởng. Nối càng nhiều càng lãi.',
        rows: [
          { text: '20% increased Pack size' },
          { text: '50% increased number of Rare Monsters' },
          { text: '40–60% increased Rarity' },
          { text: '20% increased Quantity of Items Dropped' },
          { text: '80% increased Quantity of Artifacts' },
          { text: '100% increased Quantity of Artifacts in Excavated Chests' },
          { text: '50% increased Quantity of Logbooks from Runic Monsters', note: 'Sustain logbook.' },
          { text: 'Runic Monsters are Duplicated', note: 'Nhân đôi nguồn loot + logbook.' },
          { text: '100% / 200% increased Experience', note: 'Chỉ khi còn cày level.' },
        ],
      },
      {
        heading: 'Prefix phải đọc trước khi nối',
        intent: 'avoid',
        blurb: 'Prefix = buff quái, cộng dồn lên wave sau. Tag BUILD = giết đúng build của mình.',
        rows: [
          { text: 'Immune to Physical Damage', note: 'Companion đánh phys → chain vô hại. CẤM.', killer: true },
          { text: "Monsters' Hits can't be Evaded", note: 'Evasion thuần mất lớp né 44%.', killer: true },
          { text: 'Penetrate 20% Chaos Resistance', note: 'Chaos res ~25 chưa cap = nhức nhất.', killer: true },
          { text: 'Gain 12% of Damage as Extra Chaos', note: 'Cùng lỗ chaos res.', killer: true },
          { text: 'Immune to Cold / Lightning / Fire / Chaos', note: 'Cấm dòng trùng hệ damage của build.' },
          { text: 'Hits are always Critical Hits' },
          { text: 'Life cannot be Leeched from Monsters' },
          { text: 'Monsters are Hexproof', note: 'Tắt curse (Despair / Voltaic Mark).' },
          { text: 'Do not grant Flask Charges when Slain' },
          { text: 'Runic Monsters Regenerate 15% life / 4s' },
          { text: '+10% max / +30% all Resistances', note: 'Kéo dài fight.' },
        ],
      },
    ],
  },
  {
    id: 'tablet',
    label: 'Tablet',
    groups: [
      {
        heading: 'Roll trên Expedition Precursor Tablet',
        intent: 'roll',
        blurb: 'Thứ tự cho mục tiêu farm logbook.',
        rows: [
          { text: 'of Knowledge', note: '(15–30)% Qty Logbooks từ Runic Monsters — mod số 1.' },
          { text: 'of the Writings', note: 'Expeditions +(1–2) Remnant.' },
          { text: 'of Ancient Fiends', note: '(25–40)% Rare Expedition Monsters.' },
          { text: 'of Verisium', note: '(15–30)% Qty Artifacts — tiền vendor.' },
          { text: 'of Relics', note: '(12–18)% Effect of Remnants — risk-reward.' },
          { text: 'of the Demolition / Detonator', note: 'Explosive radius / range — QoL, lấy sau cùng.' },
        ],
      },
    ],
  },
  {
    id: 'atlas',
    label: 'Atlas',
    groups: [
      {
        heading: 'Subtree Expedition (8 point) — sustain trước',
        intent: 'pick',
        rows: [
          { text: 'Logbook Chance ×8', note: '10% Qty Logbooks mỗi small node.' },
          { text: 'Detailed Records', note: '+1 Level Logbook + logbook rớt sẵn 4 implicit.' },
          { text: 'Disturbed Rest', note: '30% Runic Monster Markers — nhân ngược cụm Logbook Chance.' },
        ],
      },
      {
        heading: 'Chuyển sang farm tiền',
        intent: 'pick',
        rows: [
          { text: 'Timed Detonations', note: 'Chain nhanh 50% + 50% Artifacts.' },
          { text: 'Legendary Battles', note: '50% Exotic Coinage + 50% Rare Expedition Monsters.' },
          { text: 'Unearthed Anomalies + Weight of History', note: 'Remnant +1 prefix +1 suffix, +35% effect — bật khi build gánh nổi.' },
        ],
      },
      {
        heading: 'Masters quick-select (đổi free mỗi map)',
        intent: 'pick',
        rows: [
          { text: 'Eastern Knowledge (Jado)', note: 'Verisium Remnant 10% reroll, giữ kết quả hiếm nhất.' },
          { text: 'Partial Translations (Jado)', note: '20% double effect mod tablet.' },
          { text: 'Keen Appraisal (Jado)', note: '50% Exceptional Items — farm Grand Expedition.' },
          { text: 'Scarred Lands (Hilda)', note: '15% runic marker + 20% rare expedition monster.' },
        ],
      },
    ],
  },
  {
    id: 'rumour',
    label: 'Rumour',
    groups: [
      {
        heading: 'Rumour → biome chứa gì',
        intent: 'map',
        blurb: 'Đọc rumour ở Uncharted Waters TRƯỚC khi tiêu logbook.',
        rows: [
          { text: 'Fallen Starlight → Moor of the Fallen Skies', note: 'Gom hết monolith rồi nối về rune giữa; pick Aldur’s Saga ~28.5 div ở 7 socket.' },
          { text: 'Star Drinker → Uhtred boss', note: 'Faction Leader, có Lineage Support.' },
          { text: 'Unknown Ruins → Exhumed Ruins', note: 'Nổ 3 Precursor Leyline → Beacon mở biome kế FREE logbook.' },
          { text: 'Sulfide → Scorch Cauldron', note: 'Cụm sulphite nổ ra increased rarity.' },
        ],
      },
      {
        heading: 'Saga (kích trước khi tiêu logbook)',
        intent: 'map',
        rows: [
          { text: 'Boss saga ×4', note: 'Guarantee gặp boss đó; kích cả 4 cùng lúc được.' },
          { text: 'Aldur’s Saga', note: 'Juice remnant slot cả biome — CHẠY RIÊNG, đừng kèm boss saga (boss chiếm slot đảo).' },
        ],
      },
    ],
  },
]

const MARK: Record<Intent, string> = { triage: '▸', chain: '✓', avoid: '✕', roll: '◆', pick: '▸', map: '→' }
const active = ref(TABS[0]!.id)
</script>

<template>
  <PipPanel title="Ocean Exploring — Mod Cheatsheet" :width="420" :height="600">
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
/* flex-basis auto (not `flex:1` = basis 0%) so the body hugs its content when
   the frame is auto-height on the page, and still grows + scrolls in PiP where
   the frame is a definite 100vh. */
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
