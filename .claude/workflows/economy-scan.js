export const meta = {
  name: 'economy-scan',
  description: 'POE2 economy survey — price + volume + 7d trend từ poe2scout + poe.ninja exchange, map supply-chain mechanic→output, suy ra người ta đang farm/flip gì. Cross-source, inference-labeled.',
  whenToUse: 'Chạy bất kỳ ngày nào của POE2 live league để chụp tình hình kinh tế: tỉ giá div/ex, item đắt, currency thanh khoản cao, chuỗi cung ứng (mechanic nào ra output nào), bottleneck crafting. Re-runnable — file output stamp theo ngày.',
  phases: [
    { title: 'Harvest', detail: 'poe2scout (24 category: price+stock+Δ7d) + poe.ninja exchange (price+throughput+7d) + demand/supply map (builds + patch notes)' },
    { title: 'Synthesize', detail: '2 angle: economy-state, what-is-farmed (throughput≠output)' },
    { title: 'ValueChain', detail: 'dựng chuỗi giá trị farm→drop→craft→item→sink→buyer cho item nóng; edge SOURCE từ patch+poe2db; phân loại bottleneck cung/cầu/sốc' },
    { title: 'Critique', detail: 'cross-source price conflict, volume-vs-price misread, data-vs-inference, freshness' },
    { title: 'Report', detail: 'markdown pulse + HTML value-chain report (data-driven template) vào tmp/' },
  ],
}

// ---- config — slug/display-name ổn định nhiều tháng; DATE stamp lúc report (date +%F) ----
const A = (typeof args !== 'undefined' && args && typeof args === 'object') ? args : {}
const SCOUT_LEAGUE   = A.scoutLeague   || 'runes'             // poe2scout slug
const NINJA_DISPLAY  = A.ninjaDisplay  || 'Runes of Aldur'    // poe.ninja exchange API dùng DISPLAY NAME (space→+), KHÔNG phải slug
const NINJA_SLUG     = A.ninjaSlug      || 'runesofaldur'      // poe.ninja builds API dùng slug
const WATCH_LEAGUE   = A.watchLeague    || 'Runes of Aldur'    // poe.watch dùng display name + game=poe2 (Cloudflare-gated → browser only)
const PATCH_FILE     = A.patchFile      || 'data/release-notes/Version_0.5.0.md'
const OUT_DIR        = A.outDir         || 'tmp'
const CHAIN_TEMPLATE = A.chainTemplate  || '.claude/workflows/templates/economy-supply-chains.template.html'

// poe.ninja exchange endpoint dùng + cho space trong league name
const NINJA_LG_ENC = NINJA_DISPLAY.replace(/ /g, '+')

// ---- ngữ nghĩa volume — phải tách bạch, KHÔNG conflate ----
const VOL_SEMANTICS = `NGỮ NGHĨA VOLUME (BẮT BUỘC tách bạch — đừng gộp):
- poe2scout 'list' vol = CurrentQuantity = SỐ LƯỢNG ĐANG LIST BÁN ngay bây giờ (stock/độ sâu thanh khoản). KHÔNG phải số đã trade.
- poe.ninja volumePrimaryValue = TRADE THROUGHPUT (flow, quy ra divine) = lượng đổi tay. KHÁC stock của scout.
- KHÔNG cái nào = "lượng người ta farm ra". Cả hai chỉ là proxy MỨC HOẠT ĐỘNG THỊ TRƯỜNG. Item có thể volume cao vì ai cũng dùng (Divine), không phải vì ai cũng farm nó.`

const INFERENCE_RULE = `KỶ LUẬT DATA-vs-INFERENCE (override mọi thứ): price/volume/Δ% là DATA poe2scout/poe.ninja báo. "Mechanic nào sinh ra item này", "người ta đang farm cái này", "đây là chuỗi cung ứng" là INFERENCE từ patch-note map + domain knowledge — KHÔNG phải con số nào báo cả. Mỗi điểm phải tách rõ: dataPoint (số literal) vs inference (diễn giải). KHÔNG viết "người ta farm X" như thể scout báo thế.`

const HONESTY = `Số THẬT > schema đầy. Nguồn nào trống/lỗi → dataAvailable:false + nói rõ trong notes, ĐỪNG bịa giá/volume. League đã ~ngày 7 nên economy đã hình thành (1 div ≈ 90 ex), volume thật có.`
const NUDGE = `BẮT BUỘC: kết thúc bằng gọi StructuredOutput đúng schema, KHÔNG trả prose.`

// ============ schemas ============
const PRICE_SCHEMA = {
  type: 'object',
  properties: {
    source: { type: 'string' },
    dataAvailable: { type: 'boolean' },
    exPerDiv: { type: 'number', description: 'exalted per 1 divine nếu nguồn có' },
    rows: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          category: { type: 'string', description: 'poe2scout category (currency/breach/ritual/...) hoặc Currency — đây là bucket output, KHÔNG phải mechanic đã suy luận' },
          priceExalted: { type: 'number' },
          volume: { type: 'number' },
          volumeKind: { type: 'string', enum: ['listed-stock', 'trade-throughput'] },
          change7dPct: { type: 'number' },
        },
        required: ['name', 'category', 'volumeKind'],
      },
    },
    notes: { type: 'string' },
  },
  required: ['source', 'dataAvailable', 'rows', 'notes'],
}

const DEMAND_SCHEMA = {
  type: 'object',
  properties: {
    source: { type: 'string' },
    dataAvailable: { type: 'boolean' },
    demandDrivers: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          kind: { type: 'string', enum: ['class', 'ascendancy', 'skill', 'unique', 'support'] },
          sharePct: { type: 'number' },
          consumes: { type: 'string', description: 'currency/item build này tiêu thụ (inference)' },
        },
        required: ['name', 'kind'],
      },
    },
    mechanicOutputs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          mechanic: { type: 'string' },
          outputs: { type: 'array', items: { type: 'string' } },
          craftingInputs: { type: 'array', items: { type: 'string' } },
          note: { type: 'string' },
        },
        required: ['mechanic', 'outputs'],
      },
    },
    notes: { type: 'string' },
  },
  required: ['source', 'dataAvailable', 'mechanicOutputs', 'notes'],
}

// ============ Phase 1: Harvest ============
phase('Harvest')

// — poe2scout lanes (headless bash, PRIMARY — vol = listed-stock) —
const scoutLane = (label, cats, perCat) => () => agent(
`poe2scout harvest lane "${label}" — POE2 league slug "${SCOUT_LEAGUE}".
Chạy bash skill (headless, KHÔNG web). Với MỖI category sau, lấy top items theo giá:
${cats.map(c => `  bash .claude/skills/poe2scout/scripts/api.sh list ${c} ${SCOUT_LEAGUE} ${perCat}`).join('\n')}
Output mỗi dòng dạng: "- **<Name>** — <priceExalted> (vol <qty>) · Δ7d <pct>%". priceExalted = giá quy ra Exalted Orb. vol = SỐ ĐANG LIST (CurrentQuantity).
Với mỗi item: name, category (= tên category đang query, viết thường), priceExalted (số), volume (= vol, đặt volumeKind='listed-stock'), change7dPct (= Δ7d).
${VOL_SEMANTICS}
Lấy hết item mỗi category trả về (đừng cắt). Nếu một category lỗi/trống → ghi trong notes, tiếp category khác.
${HONESTY} ${NUDGE}`,
  { label, phase: 'Harvest', model: 'haiku', schema: PRICE_SCHEMA })

const scoutCore = scoutLane('harvest:scout-core',
  ['currency', 'fragments', 'runes', 'essences', 'ultimatum'], 15)
const scoutMechanics = scoutLane('harvest:scout-mechanics',
  ['breach', 'ritual', 'expedition', 'delirium', 'abyss', 'incursion', 'verisium', 'vaal', 'idol', 'uncutgems'], 10)
const scoutUniques = scoutLane('harvest:scout-uniques',
  ['weapon', 'armour', 'accessory', 'jewel', 'flask', 'map'], 12)

// — poe.ninja exchange lane (headless curl, SECONDARY — vol = trade-throughput, cross-check giá) —
const ninjaLane = () => agent(
`poe.ninja exchange harvest lane — POE2 economy, league "${NINJA_DISPLAY}".
Chạy headless (KHÔNG cần browser — endpoint này curl được). Lấy currency market thật + tỉ giá div/ex:
\`\`\`bash
curl -sL -A "Mozilla/5.0" "https://poe.ninja/poe2/api/economy/exchange/current/overview?league=${NINJA_LG_ENC}&type=Currency" -o /tmp/ninja_cur.json
python3 - <<'PY'
import json
d=json.load(open('/tmp/ninja_cur.json'))
ex=d['core']['rates'].get('exalted')            # exalted per 1 divine
names={it['id']:it['name'] for it in d.get('items',[])}
print("EX_PER_DIV", ex)
rows=[]
for ln in d.get('lines',[]):
    pdiv=ln.get('primaryValue')                  # giá theo DIVINE
    rows.append((names.get(ln['id'],ln['id']),
                 round(pdiv*ex,4) if (pdiv is not None and ex) else None,  # priceExalted
                 ln.get('volumePrimaryValue'),                            # throughput (divine-denom)
                 ln.get('sparkline',{}).get('totalChange')))              # Δ7d %
for n,pex,vol,chg in sorted(rows,key=lambda r:(r[1] or 0),reverse=True):
    print(f"{n}\t{pex}\t{vol}\t{chg}")
PY
\`\`\`
EX_PER_DIV = exalted per 1 divine (tỉ giá chính → field exPerDiv). Mỗi dòng còn lại: name, priceExalted, volume(=throughput), Δ7d.
Map vào rows: name, category='Currency', priceExalted, volume (đặt volumeKind='trade-throughput'), change7dPct. Lấy hết.
${VOL_SEMANTICS}
Đây là nguồn GIÁ ĐỘC LẬP thứ 2 (khác poe2scout) — mục đích để cross-check. Báo exPerDiv để so với poe2scout.
${HONESTY} ${NUDGE}`,
  { label: 'harvest:ninja-currency', phase: 'Harvest', model: 'haiku', schema: PRICE_SCHEMA })

// — demand + supply-chain map lane (poe.ninja builds + patch notes) —
const demandLane = () => agent(
`Demand-driver + supply-chain map lane cho POE2 economy "${NINJA_DISPLAY}".
Hai phần:
(1) DEMAND — ai mua currency? Chạy: bash .claude/skills/poe-ninja/scripts/builds-api.sh overview ${NINJA_SLUG}
    Lấy top class/ascendancy/skill/unique phổ biến → demandDrivers (kind + sharePct nếu có). Với mỗi cái, suy luận nó TIÊU THỤ currency/item gì (field consumes, đây là inference). Nếu sample quá nhỏ → ghi notes, dataAvailable theo sample.
(2) SUPPLY MAP — mechanic nào RA output nào? Đọc patch notes local:
    bash -c 'grep -niE "remnant|runic|runeforg|verisium|alloy|ancient rune|ocean|soul core|expedition|breach|ritual|delirium|abyss|incursion|essence|omen|catalyst|idol" ${PATCH_FILE} | head -80'
    (và đọc thêm vùng quanh các dòng đó nếu cần: sed -n ranges)
    Build mechanicOutputs: mỗi league/endgame mechanic (Breach, Ritual, Expedition, Delirium, Abyss, Incursion, Ocean Exploring, Remnant/Runic Recipe, Verisium Runeforging, Vaal...) → outputs (currency/item category nó sinh ra) + craftingInputs (cái nó tiêu thụ). Đây là MAP để Synthesize suy chuỗi cung ứng.
${INFERENCE_RULE}
${HONESTY} ${NUDGE}`,
  { label: 'harvest:demand-supply', phase: 'Harvest', model: 'sonnet', schema: DEMAND_SCHEMA })

// — poe.watch cross-check lane (best-effort, Cloudflare-gated → cần browser; redundant với 2 nguồn trên) —
const watchLane = () => agent(
`poe.watch currency-ratio cross-check lane cho POE2 "${WATCH_LEAGUE}" (BEST-EFFORT, có thể unavailable).
api.poe.watch nằm sau Cloudflare → headless curl bị chặn. Endpoint thật: https://api.poe.watch/currencyRatios?league=${WATCH_LEAGUE}&game=poe2
Thử qua playwriter page-context fetch (chạy trong Chrome đã login — same-origin né Cloudflare):
  1. SID=$(playwriter session new 2>/dev/null | grep -oE 'Session [0-9]+' | grep -oE '[0-9]+'); nếu trống/lỗi → dataAvailable:false, notes "playwriter/Chrome không sẵn", KẾT THÚC.
  2. playwriter -s $SID -e 'state.p=context.pages().find(p=>p.url().includes("poe.watch"))||await context.newPage(); if(!state.p.url().includes("poe.watch")) await state.p.goto("https://poe.watch/poe2/exchange?league=${WATCH_LEAGUE.replace(/ /g, "%20")}",{waitUntil:"domcontentloaded"}); const j=await state.p.evaluate(async()=>{const r=await fetch("https://api.poe.watch/currencyRatios?league=${WATCH_LEAGUE}&game=poe2");return await r.json()}); console.log(JSON.stringify(Array.isArray(j)?j.slice(0,40):j).slice(0,4000))'
  3. Nếu fetch timeout/lỗi sau 1 lần thử → dataAvailable:false (ĐỪNG retry nhiều, ĐỪNG hammer). Đây chỉ là cross-check phụ, redundant với poe.ninja+poe2scout.
Map ra rows currency-ratio nếu lấy được (name, priceExalted nếu suy được, volumeKind='trade-throughput'). exPerDiv nếu có.
LƯU Ý cho user: data poe.watch trùng phần lớn với 2 nguồn kia; giá trị chính là một con mắt thứ 3 để bắt outlier.
${HONESTY} ${NUDGE}`,
  { label: 'harvest:watch-crosscheck', phase: 'Harvest', model: 'haiku', schema: PRICE_SCHEMA })

const LANES = [scoutCore, scoutMechanics, scoutUniques, ninjaLane, demandLane, watchLane]
const harvest = (await parallel(LANES)).filter(Boolean)

// gom data
const priceRows = harvest.flatMap(h => (h.rows || []).map(r => ({ ...r, source: h.source })))
const demand = harvest.find(h => Array.isArray(h.mechanicOutputs))
const exRates = harvest.filter(h => typeof h.exPerDiv === 'number').map(h => ({ source: h.source, exPerDiv: h.exPerDiv }))
const harvestNotes = harvest.map(h => `- ${h.source} (dataAvailable=${h.dataAvailable}): ${h.notes || ''}`)
log(`Harvest: ${harvest.length} lanes · ${priceRows.length} price rows · ${(demand?.mechanicOutputs || []).length} mechanic-output mappings · exRates ${JSON.stringify(exRates)}`)

// ============ Phase 2: Synthesize (barrier — mỗi angle cần cross-source) ============
const SYNTH_SCHEMA = {
  type: 'object',
  properties: {
    angle: { type: 'string' },
    summary: { type: 'string' },
    points: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          dataPoint: { type: 'string', description: 'con số literal nguồn báo (giá/volume/Δ%) — KHÔNG diễn giải' },
          inference: { type: 'string', description: 'diễn giải (mechanic nguồn / farm / chuỗi cung ứng) — tách khỏi dataPoint' },
          confidence: { type: 'string', enum: ['HIGH', 'MEDIUM', 'LOW'] },
          sources: { type: 'string' },
        },
        required: ['name', 'dataPoint', 'confidence'],
      },
    },
    contradictions: { type: 'array', items: { type: 'string' } },
    dataQuality: { type: 'string' },
  },
  required: ['angle', 'summary', 'points', 'dataQuality'],
}

phase('Synthesize')
const priceJSON = JSON.stringify(priceRows)
const demandJSON = JSON.stringify(demand || {})
const exJSON = JSON.stringify(exRates)

const ANGLES = [
  {
    key: 'economy-state', label: 'synth:state',
    focus: `Tình hình kinh tế tổng quan: tỉ giá div/ex (so exPerDiv giữa nguồn ${exJSON} — flag nếu lệch >10%), item ĐẮT nhất mỗi nhóm, currency lạm phát/giảm phát theo Δ7d (tăng mạnh = khan/được săn, giảm mạnh = thừa/devalue), phân tầng currency (top-tier vs commodity).`,
  },
  {
    key: 'what-is-farmed', label: 'synth:farming',
    focus: `"Người ta đang farm/flip gì" — xếp theo VOLUME nhưng GIỮ ĐÚNG NGỮ NGHĨA: throughput (ninja, flow) vs listed-stock (scout). Item throughput cao = thanh khoản/đổi tay nhiều; KHÔNG suy thẳng ra "được farm". Dùng mechanicOutputs map để SUY (inference, label rõ) category nào gắn mechanic nào → mechanic nào đang được chạy nhiều. Tách: "đây là data volume" vs "đây là suy luận về hành vi farm".`,
  },
]

const synths = (await parallel(ANGLES.map(a => () => agent(
`Synthesize angle "${a.key.toUpperCase()}" cho economy scan POE2 "${NINJA_DISPLAY}".

PRICE ROWS (mọi nguồn, mỗi row có source/category/priceExalted/volume/volumeKind/change7dPct) — JSON:
${priceJSON}

DEMAND + SUPPLY-CHAIN MAP (builds demand + mechanic→output từ patch notes) — JSON:
${demandJSON}

EX RATES theo nguồn: ${exJSON}

Harvest notes/gaps:
${harvestNotes.join('\n')}

Tập trung: ${a.focus}
${VOL_SEMANTICS}
${INFERENCE_RULE}
- points: mỗi điểm tách dataPoint (số literal) vs inference (diễn giải) + confidence + sources (nguồn nào).
- contradictions: nơi 2 nguồn lệch giá/volume, hoặc data vs kỳ vọng.
- dataQuality: angle này tin tới đâu (sample, freshness, throughput vs stock).
KHÔNG bịa lấp schema. ${NUDGE}`,
  { label: a.label, phase: 'Synthesize', model: 'sonnet', schema: SYNTH_SCHEMA })))).filter(Boolean)

// ============ Phase 2.5: ValueChain — dựng chuỗi giá trị, edge SOURCE (không hồi tưởng) ============
const PRICE_NODE = {
  type: 'object',
  properties: { ex: { type: 'string' }, delta: { type: 'string' }, up: { type: 'boolean' }, stock: { type: 'string' } },
}
const CHAIN_REPORT_SCHEMA = {
  type: 'object',
  properties: {
    abstract: { type: 'string' },
    keyfacts: { type: 'array', items: { type: 'object', properties: { n: { type: 'string' }, l: { type: 'string' } }, required: ['n', 'l'] } },
    chains: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', description: 'slug ngắn vd c1' },
          title: { type: 'string', description: 'vd "Breach → Genesis Tree → Catalyst"' },
          intro: { type: 'string' },
          type: { type: 'string', enum: ['supply', 'shock', 'demand', 'ample', 'stable'], description: 'supply=bottleneck cung content-gated; shock=sốc cung (nguồn bị cắt); demand=áp lực cầu (stock dày); ample=cung dồi dào/deflate; stable=ổn định' },
          nodes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                stage: { type: 'string', enum: ['farm', 'drop', 'craft', 'item', 'sink', 'buyer'] },
                title: { type: 'string' },
                desc: { type: 'string', description: 'kèm nhãn nguồn [patch <ref>] / [poe2db] / [suy luận]' },
                bottleneck: { type: 'boolean' },
                tag: { type: 'string', description: 'nhãn đỏ trên node bottleneck vd "CỔNG ĐỘC QUYỀN"' },
                price: PRICE_NODE,
              },
              required: ['stage', 'title'],
            },
          },
          table: { type: 'object', properties: { cols: { type: 'array', items: { type: 'string' } }, rows: { type: 'array', items: { type: 'array', items: { type: 'string' } } } } },
          verdict: { type: 'string', description: 'câu đầu = phán quyết loại (Bottleneck cung / Áp lực cầu / Sốc cung...), rồi bằng chứng' },
        },
        required: ['id', 'title', 'type', 'nodes', 'verdict'],
      },
    },
    ranking: { type: 'array', items: { type: 'object', properties: { chain: { type: 'string' }, type: { type: 'string' }, evidence: { type: 'string' } }, required: ['chain', 'type', 'evidence'] } },
    provenance: { type: 'array', items: { type: 'string' } },
    warnings: { type: 'array', items: { type: 'object', properties: { title: { type: 'string' }, body: { type: 'string' } }, required: ['title', 'body'] } },
  },
  required: ['abstract', 'chains', 'ranking', 'provenance'],
}

phase('ValueChain')
const valueChain = await agent(
`Dựng BẢN ĐỒ CHUỖI GIÁ TRỊ cho economy POE2 "${NINJA_DISPLAY}". Một item là 1 node, KHÔNG phải chuỗi — phải vẽ đủ đường: farm content nào → rớt raw gì → craft bước nào → ra item → tiêu vào sink nào → build nào mua, đệ quy tới gốc farmable.

PRICE ROWS (giá/volume/Δ7d mọi nguồn) — JSON:
${priceJSON}
DEMAND + mechanic→output map — JSON:
${demandJSON}
EX rates: ${exJSON}

BƯỚC:
1. Chọn 6–8 item KINH TẾ-QUAN-TRỌNG nhất từ price rows: ưu tiên (a) bottleneck-candidate (giá cao + Δ7d tăng mạnh + stock mỏng), (b) item league-mechanic (Catalyst/Alloy/Verisium/Omen/Soul Core/Logbook), (c) crafting currency chủ lực (Annulment/Perfect/Divine/Fracturing).
2. SOURCE TỪNG EDGE — TUYỆT ĐỐI KHÔNG hồi tưởng (0.5 viết lại crafting):
   - Mechanic edge (farm→drop→craft): grep '${PATCH_FILE}', vd: \`grep -inE "breach|genesis|wombgift|catalyst|remnant|verisium|alloy|ritual|omen|ocean|expedition|soul core" ${PATCH_FILE}\` rồi đọc dòng quanh.
   - Source & sink của general currency: curl poe2db browser-UA, vd \`curl -sL -A "Mozilla/5.0 ... Chrome/120" "https://poe2db.tw/us/Orb_of_Annulment" -o /tmp/x.html\` (underscore, BỎ dấu nháy: Hinekoras_Lock, Perfect_Jewellers_Orb) → markitdown/bs4 đọc. Cross-check patch note nếu lệch (patch thắng).
   - Không source được edge nào → desc ghi rõ '[suy luận]', đừng bịa.
3. Mỗi node desc gắn NHÃN NGUỒN inline: [patch <ref/dòng>] / [poe2db] / [suy luận] — template tự render badge. Node 'item' đính price (ex/delta/up/stock) lấy ĐÚNG từ price rows.
4. PHÂN LOẠI type (quan trọng nhất — đừng gọi mọi thứ "scarce"):
   - supply = bottleneck cung thật: output khoá content-gated/1 cổng + stock mỏng + Δ7d tăng → đáng farm. Đánh dấu node nghẽn bottleneck:true + tag.
   - shock = sốc cung: giá vọt vì NGUỒN BỊ CẮT (vd mechanic disabled), không phải cầu mới.
   - demand = áp lực cầu: stock DÀY + giá tăng vì ai-cũng-dùng → sẽ về trung bình khi cung kịp. KHÔNG phải bottleneck cung.
   - ample = cung dồi dào/đang deflate.
5. ranking: xếp các chain theo loại, kèm bằng chứng giá/stock. provenance: liệt kê nguồn (patch file + poe2db + price snapshot). warnings: freshness/cần-verify.
6. abstract (1-2 câu) + keyfacts (3-4 ô n/l: tỉ giá div/ex, số bottleneck cung thật, 1 cảnh báo).

QUY TẮC: Giá/volume = DATA. Edge mechanic = SOURCED (patch/poe2db). "Vì sao đắt / phân loại bottleneck" = SUY LUẬN — tách bạch, gắn nhãn. ${NUDGE}`,
  { label: 'value-chain', phase: 'ValueChain', model: 'sonnet', schema: CHAIN_REPORT_SCHEMA })

// ============ Phase 3: Critique (barrier) ============
const CRITIQUE_SCHEMA = {
  type: 'object',
  properties: {
    crossSourcePriceConflicts: { type: 'array', items: { type: 'string' } },
    volumeMisreadRisks: { type: 'array', items: { type: 'string' } },
    dataVsInferenceLeaks: { type: 'array', items: { type: 'string' }, description: 'chỗ nào synth trình bày inference như data' },
    freshnessWarnings: { type: 'array', items: { type: 'string' } },
    confidenceCalibration: { type: 'string' },
    recheckPlan: { type: 'array', items: { type: 'string' } },
  },
  required: ['confidenceCalibration'],
}

phase('Critique')
const critique = await agent(
`Devil's-advocate critic cho economy scan POE2 "${NINJA_DISPLAY}".
2 synthesis (state/farming) — JSON:
${JSON.stringify(synths)}

VALUE-CHAIN map (chuỗi + phân loại bottleneck) — JSON:
${JSON.stringify(valueChain)}

EX rates: ${exJSON}
Harvest notes: ${harvestNotes.join('\n')}

Soi:
- crossSourcePriceConflicts: poe.ninja vs poe2scout lệch giá/tỉ giá ở đâu (>10%)? exPerDiv có khớp?
- volumeMisreadRisks: chỗ nào dễ đọc nhầm throughput↔stock, hoặc suy "volume cao = được farm" sai? Đặc biệt: chain nào phân loại 'supply' (bottleneck cung) nhưng stock thực ra DÀY (đáng lẽ 'demand')? — bottleneck misclassification là lỗi nặng.
- dataVsInferenceLeaks: chỗ nào synth/value-chain viết suy luận (mechanic/farm/chuỗi/bottleneck) NHƯ THỂ là số nguồn báo? Edge nào không có nhãn [patch]/[poe2db] mà vẫn trình bày như fact? (liệt kê hết)
- freshnessWarnings: data nguồn nào cũ/stale, snapshot lúc nào?
- confidenceCalibration: 1 đoạn — tổng thể tin tới đâu.
- recheckPlan: 3-5 việc nên re-check (vd "đo volume thật qua scout item history cho top-5 currency", "verify mechanic→output bằng in-game drop").
${NUDGE}`,
  { label: 'critique', phase: 'Critique', model: 'sonnet', schema: CRITIQUE_SCHEMA })

// ============ Phase 4: Report ============
phase('Report')
const report = await agent(
`Viết FINAL economy pulse report cho POE2 "${NINJA_DISPLAY}".
Lấy ngày: Bash 'date +%F' → <DATE> cho tên file + tiêu đề.

INPUT — 2 synthesis JSON (economy-state / what-is-farmed):
${JSON.stringify(synths)}

INPUT — value-chain map JSON (chuỗi + phân loại bottleneck):
${JSON.stringify(valueChain)}

INPUT — critique JSON:
${JSON.stringify(critique)}

INPUT — ex rates: ${exJSON}
INPUT — harvest notes: ${harvestNotes.join('\n')}

Viết Markdown, giọng Việt-Anh code-switching (giữ game term tiếng Anh). Đây là intel report cho user đọc — ĐƯỢC cite nguồn + endpoint + confidence (khác content note: attribution là feature). Cấu trúc:
# POE2 ${NINJA_DISPLAY} — Economy Pulse <DATE>
(2-3 câu mở: league ngày mấy + độ tin tổng thể từ critique.confidenceCalibration)
## ⚡ TL;DR — 5-7 bullet quan trọng nhất NGAY BÂY GIỜ (tỉ giá div/ex, 2-3 item nóng, 1-2 bottleneck, 1 cảnh báo).
## 💱 Tình hình kinh tế — tỉ giá div/ex (cross-check 2 nguồn, flag nếu lệch), item đắt nhất mỗi nhóm, lạm phát/giảm phát theo Δ7d.
## 🔥 Người ta đang flip/farm gì — xếp theo volume, NHƯNG tách rõ: "[DATA] throughput/stock cao" vs "[SUY LUẬN] mechanic nguồn / hành vi farm". Đừng trình bày inference như số liệu.
## 🔗 Chuỗi cung ứng — từ value-chain map: mỗi chuỗi farm→drop→craft→item→sink→buyer, phân loại rõ bottleneck CUNG (content-gated, đáng farm) vs áp lực CẦU (stock dày, sẽ về trung bình) vs SỐC cung (nguồn bị cắt). ĐỪNG gọi mọi thứ "scarce". Bản đồ trực quan đầy đủ ở file HTML kèm theo (economy-supply-chains-<DATE>.html).
## ⚠️ Mâu thuẫn & độ tươi — từ critique: lệch giá chéo nguồn, rủi ro đọc nhầm volume, chỗ data-vs-inference, freshness.
## 🔁 Re-check — từ critique.recheckPlan.
## 📡 Nguồn & phương pháp — liệt kê endpoint thật đã dùng:
   - poe2scout: bash api.sh list <cat> ${SCOUT_LEAGUE} (24 category, vol=listed-stock)
   - poe.ninja: GET /poe2/api/economy/exchange/current/overview?league=${NINJA_LG_ENC}&type=Currency (vol=trade-throughput) — LƯU Ý collector cũ data/price-history dùng endpoint stash/current + slug nên 404; endpoint đúng là exchange/current + display-name.
   - poe.watch: api.poe.watch/currencyRatios?league=...&game=poe2 — Cloudflare-gated, browser-only, redundant cross-check.

QUY TẮC: KHÔNG bịa số. Mỗi claim kinh tế kèm con số thật. Phân biệt rạch ròi DATA (giá/volume nguồn báo) vs INFERENCE (farm/mechanic/chuỗi). Volume = market activity, KHÔNG = lượng farm.

Sau khi viết: Bash 'mkdir -p ${OUT_DIR}', dùng Write tool ghi vào '${OUT_DIR}/economy-pulse-<DATE>.md'. Cuối cùng TRẢ VỀ toàn bộ markdown làm final message.`,
  { label: 'report', phase: 'Report', model: 'sonnet' })

// ---- HTML value-chain report: fill data-driven template với valueChain ----
const exPerDiv = (exRates.find(r => /ninja/i.test(r.source)) || exRates[0] || {}).exPerDiv || ''
const htmlReport = await agent(
`Sinh file HTML value-chain report bằng cách FILL template data-driven (KHÔNG tự code HTML).

VALUE-CHAIN JSON (data thật để render):
${JSON.stringify(valueChain)}

Các bước CHÍNH XÁC:
1. Bash: \`mkdir -p ${OUT_DIR}\` và \`date +%F\` để lấy DATE.
2. Dùng Write tool ghi NGUYÊN VĂN value-chain JSON ở trên vào '${OUT_DIR}/_vc.json' (copy y hệt, không sửa 1 ký tự). Rồi verify: \`python3 -c "import json;json.load(open('${OUT_DIR}/_vc.json'))" && echo VALID\` — nếu không VALID, viết lại cho đúng JSON.
3. Inject vào template + ghi file (python wrap meta + thay token, KHÔNG sửa template gốc):
\`\`\`bash
DATE=$(date +%F)
python3 - "$DATE" "${NINJA_DISPLAY}" "${exPerDiv}" <<'PY'
import json, sys
date, league, exdiv = sys.argv[1], sys.argv[2], sys.argv[3]
vc = json.load(open('${OUT_DIR}/_vc.json'))
report = {
  "meta": {"title": f"POE2 {league} — Bản đồ chuỗi cung ứng kinh tế", "date": date, "league": league,
           "exPerDiv": exdiv, "abstract": vc.get("abstract",""), "keyfacts": vc.get("keyfacts",[])},
  "chains": vc.get("chains",[]), "ranking": vc.get("ranking",[]),
  "provenance": vc.get("provenance",[]), "warnings": vc.get("warnings",[]),
}
tpl = open('${CHAIN_TEMPLATE}').read()
token = '/*__REPORT_DATA__*/ SAMPLE'
assert tpl.count(token) == 1, f"token count {tpl.count(token)} != 1"
out = tpl.replace(token, '/*__REPORT_DATA__*/ ' + json.dumps(report, ensure_ascii=False))
path = f'${OUT_DIR}/economy-supply-chains-{date}.html'
open(path, 'w').write(out)
print("WROTE", path, len(out), "bytes;", len(report["chains"]), "chains")
PY
\`\`\`
4. TRẢ VỀ đúng đường dẫn file HTML đã ghi + số chains. Nếu python lỗi (assert/JSON), sửa _vc.json rồi chạy lại — KHÔNG bịa kết quả.`,
  { label: 'html-report', phase: 'Report', model: 'sonnet' })

return {
  report,
  htmlReport,
  outDir: OUT_DIR,
  sources: harvest.map(h => ({ source: h.source, dataAvailable: h.dataAvailable, rows: (h.rows || []).length })),
  exRates,
  synths,
  valueChain,
  critique,
}
