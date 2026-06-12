<script setup lang="ts">
// Ritual Belt Hunting cheatsheet — one self-contained file dropped into
// content/farming/0-5-ritual-belt-hunting.md as `::ritual-cheatsheet`.
// It wraps itself in <PipPanel>, so the same node shows inline in the article
// AND pops into a Picture-in-Picture window floating over the game. Data is
// inline below — every number/mechanic comes from the farming doc (mechanics
// verified vs poedb/wiki + patch 0.5.0/0.5.1; prices poe2scout 2026-06-10).
//
// `killer: true` = a row that hits the character being played (Spirit Walker
// companion pack: defence is pure EVASION, Chaos res is not capped ~25). The
// theme is monochrome (one accent), so good/avoid reads through glyph +
// pattern, not red/green: chain rows get ✓ + a primary rail, avoid rows get
// ✕ + a hazard stripe, build-killers get a louder stripe + tag.
import { ref } from 'vue'

type Intent = 'triage' | 'chain' | 'avoid' | 'roll' | 'pick' | 'map'
// `link` = live trade2 search (tạo 2026-06-10, league Runes of Aldur — lấy từ
// section "Mua gì và bán ở đâu" của farming doc; sang league mới sẽ hết hạn).
interface Row { text: string, note?: string, killer?: boolean, link?: string }
interface Group { heading: string, intent: Intent, blurb?: string, rows: Row[] }
interface Tab { id: string, label: string, groups: Group[] }

const TABS: Tab[] = [
  {
    id: 'map',
    label: 'Map',
    groups: [
      {
        heading: 'Thứ tự chạy trong map',
        intent: 'triage',
        blurb: 'Favour gom trước = vốn reroll cho altar sau. Sai thứ tự là quay nửa chừng hết favour.',
        rows: [
          { text: '1. Ritual phòng boss TRƯỚC', note: 'Boss nạp favour nhiều nhất — mở màn có vốn quay ngay.' },
          { text: '2. Altar mọc trên Summoning Circle', note: 'Nhả thêm 1 boss = thêm một cục favour lớn.' },
          { text: '3. Quét nốt altar còn lại', note: 'Theo đàn locust chỉ đường.' },
        ],
      },
      {
        heading: 'Abyss trên đường đi',
        intent: 'pick',
        blurb: 'Đóng pit luôn lúc chạy giữa các altar — phần nền ~1 div/map.',
        rows: [
          { text: 'Giết quái quanh miệng pit → đóng fissure', note: 'Pit đóng có chance nhả Abyssal Trove (Ancient Bone).' },
          { text: 'Rare Abyssal: kéo ra chỗ thoáng, giết gọn', note: 'Nguồn omen + bone chính. Để cụm = buff lẫn nhau, vừa nguy hiểm vừa loãng drop.' },
          { text: 'Abyss cuối vùng có chance mở Abyssal Depths', note: 'Dungeon ngầm: omen hiếm + Lineage Support.' },
        ],
      },
      {
        heading: 'Chỗ chết người',
        intent: 'avoid',
        blurb: 'Ritual dồn quái cục + abyss nhả thêm. Tag BUILD = giết đúng build companion của mình.',
        rows: [
          { text: 'Arena ritual đầy chaos damage + bleed chồng', note: 'Chaos res ~25 chưa cap — lỗ duy nhất còn lại.', killer: true },
          { text: 'Map mod extra damage / no regen lên phòng đông', note: 'Kịch bản chết người nhất — đọc mod waystone trước khi mở.', killer: true },
          { text: 'Nhánh damage Invigorated Sacrifices', note: 'Skill từ altar deal 50% increased Damage — chỉ lấy khi build kéo nổi.' },
        ],
      },
    ],
  },
  {
    id: 'reward',
    label: 'Reward',
    groups: [
      {
        heading: 'Defer trước, quay sau',
        intent: 'chain',
        blurb: 'Tribute mua + quay + defer rút từ CÙNG một túi.',
        rows: [
          { text: 'Belt ló ra → DEFER nó TRƯỚC, rồi mới reroll', note: 'Defer khoá món đó hiện lại ở nhóm reward sau.' },
          { text: 'Luôn chừa tribute đủ defer ít nhất 1 belt' },
          { text: 'Budget quay: ~1000 favour/lần reroll', note: 'Một map cho ~25-35 lần reroll — cần tablet reduced Tribute.' },
        ],
      },
      {
        heading: 'Mất belt kiểu gì',
        intent: 'avoid',
        rows: [
          { text: 'Reroll khi belt đang hiện = mất luôn', note: 'Reroll thay NGUYÊN danh sách đang hiện.' },
          { text: 'Hết tribute mà belt đang treo = mất vĩnh viễn', note: 'Gom favour tham rồi quay sạch tribute là tự đặt bẫy.' },
        ],
      },
      {
        heading: 'Giá bán nhanh (poe2scout 2026-06-10)',
        intent: 'roll',
        blurb: '1 div ≈ 130 ex. Omen + bone bán bulk qua Currency Exchange; belt list lẻ đúng floor.',
        rows: [
          { text: 'Mageblood ~500 div', note: 'Giá +100% tuần qua, re-check trước khi list. Đừng undercut floor.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/d87yD8npFJ' },
          { text: 'Headhunter ~380 div', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/zbZVwq7Ri4' },
          { text: 'Omen of Light ~5.7 div', note: 'Volume cực dày, bán bulk.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/QLlZokjpfw' },
          { text: 'Omen Sinistral/Dextral Annulment + Erasure ~3.5-3.8 div', note: 'Cần area 79 mới drop.' },
          { text: 'Omen of Whittling ~3.5 div', note: 'Từ area 75, volume rất dày.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/d87yD9lRFJ' },
          { text: 'Ancient Collarbone ~12.3 div', note: 'Bone đắt nhất nhóm.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/OgoKM5bltE' },
          { text: 'Ancient Jawbone ~7.6 div · Rib ~3.5 div', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/G64KM8EDFb' },
          { text: 'Omen of Abyssal Echoes ~0.68 div', note: 'Rớt dày mỗi map — dòng tiền đều nhất.' },
        ],
      },
    ],
  },
  {
    id: 'setup',
    label: 'Setup',
    groups: [
      {
        heading: 'Tablet loadout (bản đắt 4 slot)',
        intent: 'roll',
        blurb: 'Link trade live 2026-06-10 (Runes of Aldur) — sang league mới search lại theo tên/mod.',
        rows: [
          { text: 'Freedom of Faith', note: '~32 ex. Reroll ×2, chỉ 5 uses, KHÔNG chồng nhiều bản; +10-15% tribute cost — bù bằng reduced Tribute.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/q9wPQdrkHg' },
          { text: '2× Ritual Tablet rare có "+3 reroll"', note: 'Dòng money ~13-15 div/dòng. Ít nhất 1 tablet mang "reroll costs 20-30% reduced Tribute".', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/QLlZookwfw' },
          { text: 'Abyss Tablet (slot 4)', note: 'Unforeseen Consequences = 14-18 abyss; rare thường cũng được.', link: 'https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur/G64KMwZOsb' },
          { text: 'Irradiated Tablet = optional', note: 'Omen đỉnh chỉ cần area 79 — T15 baseline đã đủ.' },
        ],
      },
      {
        heading: 'Waystone & map',
        intent: 'pick',
        rows: [
          { text: '6 mod: alch rồi spam Exalt tới 6 mod', note: '6 mod mở đủ 3 slot tablet.' },
          { text: 'City biome cho slot tablet thứ 4', note: 'Vùng quanh citadel Ezomyte/Faridun/Vaal (biome, không phải tên map).' },
          { text: 'T15+ bắt buộc — omen đỉnh cần area level 79', note: 'Abyss omen cần area ≥65. Map thấp = chỉ còn omen rác.' },
          { text: 'Grass/forest/desert cho pack size', note: 'Nhiều quái trong vòng = nhiều favour.' },
        ],
      },
      {
        heading: 'Atlas nodes',
        intent: 'pick',
        rows: [
          { text: 'Spreading Darkness', note: 'Ritual Tainted → 50% unique nghiêng Belts/Charms/Flasks.' },
          { text: "Traveller's Woe", note: 'Kéo tần suất ritual loại Tainted lên.' },
          { text: 'Bring Forth the Unseen', note: '15% altar mọc trên Summoning Circle → thêm boss.' },
          { text: 'Industrial Improvements', note: 'Mở slot tablet 4 trên City map.' },
          { text: 'Stir the Swarm + Lord of the Pit', note: 'Thêm abyss + rải pit khắp vùng.' },
        ],
      },
      {
        heading: 'Bẫy atlas',
        intent: 'avoid',
        rows: [
          { text: 'Balance of Power: CHỈ lấy option thứ 4', note: 'Tính đến 0.5.1, 3 option đầu chặn hoàn thành questline Abyss.' },
        ],
      },
      {
        heading: 'Masters (đổi free mỗi map)',
        intent: 'pick',
        rows: [
          { text: 'Jado → Partial Translations', note: '20% chance double effect mọi mod tablet — hướng juice tablet.' },
          { text: 'Hilda → Ancient Inscriptions + Mighty Prey', note: '+25% effect mod tablet MỖI loại tablet đang cắm; 25% Powerful Map Boss — hướng xé boss.' },
        ],
      },
    ],
  },
  {
    id: 'rite',
    label: 'Rite',
    groups: [
      {
        heading: 'The Head of the King',
        intent: 'map',
        rows: [
          { text: 'KHÔNG mua được — farm-only', note: 'Rớt từ The King in the Mists. Sustain Rite = tốc độ giết King.' },
          { text: 'Mang về Caer Tarth khởi động Rite of the Nameless' },
        ],
      },
      {
        heading: 'Chạy chuỗi',
        intent: 'chain',
        rows: [
          { text: 'Chuỗi 5 map (6 nếu lấy node "+1 map")' },
          { text: 'Map "20% increased number of Favours" chọn ĐẦU TIÊN', note: 'Foretold Proliferation dán bonus map đầu sang toàn chuỗi.' },
        ],
      },
      {
        heading: 'Mất chuỗi kiểu gì',
        intent: 'avoid',
        rows: [
          { text: 'Kích Head of the King mới = XOÁ chuỗi đang dở', note: 'Gom Head dư mà bấm nhầm là bay cả run.' },
          { text: 'Reset map instance giữa chừng = mất tiến độ' },
          { text: 'Boss arena chật có thể brick cả rite' },
        ],
      },
    ],
  },
]

const MARK: Record<Intent, string> = { triage: '▸', chain: '✓', avoid: '✕', roll: '◆', pick: '▸', map: '→' }
const active = ref(TABS[0]!.id)
</script>

<template>
  <PipPanel title="Ritual Belt Hunting — Cheatsheet" :width="420" :height="600">
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
                      <a v-if="row.link" :href="row.link" target="_blank" rel="noopener" class="che-link">trade ↗</a>
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
.che-link {
  display: inline-block; margin-left: 6px;
  font-family: theme('fontFamily.mono'); font-size: 9px; font-weight: 700;
  letter-spacing: 0.06em; white-space: nowrap; vertical-align: middle;
  color: var(--c-primary); text-decoration: underline; text-underline-offset: 2px;
}
.che-link:hover { background: var(--c-primary); color: var(--c-bg); text-decoration: none; }

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
