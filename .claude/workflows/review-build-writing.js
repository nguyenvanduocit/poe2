// review-build-writing — judge the writing quality of every build doc in content/builds/.
//
// Evaluates each build guide against the project's documented standard
// (write-build-tutorial SKILL.md + build-template.md + CLAUDE.md "Content Writing Voice")
// on what the owner cares about: well-written, correct, easy to understand, just-enough
// (not rambling) yet detailed enough. DIAGNOSTIC ONLY — never edits content/.
//
// INVOKE:
//   Workflow({ scriptPath: '.claude/workflows/review-build-writing.js', args: { date: '2026-06-09' } })
//   Workflow({ name: 'review-build-writing', args: { date: '2026-06-09' } })
//
// args (all optional):
//   date     string  — YYYY-MM-DD stamp for the report filename (Date.now() is unavailable in scripts)
//   outDir   string  — output dir for the report (default 'tmp')
//
// Output: a ranked corpus report at <outDir>/build-writing-review-<date>.md  + an executive summary returned to the caller.

export const meta = {
  name: 'review-build-writing',
  description: 'Judge the writing quality of every build doc in content/builds/ against the project voice/template standard — two-track scoring (evergreen prose quality vs era-sensitive template conformance), mechanical violation checklist + 1-5 judgment scores, corpus synthesis + adversarial critic. Diagnostic only, writes a report to tmp/.',
  whenToUse: 'When the user wants all build writing reviewed/judged for quality: well-written, correct, clear, concise (not rambling), detailed enough. Produces a ranked report, not edits.',
  phases: [
    { title: 'Discover', detail: 'glob build docs, exclude class-level index stubs by path shape', model: 'haiku' },
    { title: 'Review', detail: 'one reviewer per doc — mechanical violation checklist + 1-5 judgment scores, two tracks', model: 'sonnet' },
    { title: 'Synthesize', detail: 'rank docs, surface systemic patterns, pick exemplars vs needs-work', model: 'sonnet' },
    { title: 'Critique', detail: 'single critic challenges the rankings + REWRITE calls + systemic claims', model: 'opus' },
    { title: 'Finalize', detail: 'fold critic adjustments, write the corpus report to tmp/', model: 'sonnet' },
  ],
}

// ---------------- args ----------------
// Accept args as an object, or a JSON-encoded string (some invocations stringify it).
let _A = args
if (typeof _A === 'string') { try { _A = JSON.parse(_A) } catch (e) { _A = {} } }
const A = (_A && typeof _A === 'object') ? _A : {}
const DATE = (A.date && /^\d{4}-\d{2}-\d{2}$/.test(A.date)) ? A.date : 'undated'
const OUT_DIR = (A.outDir || 'tmp').replace(/\/+$/, '')
const REPORT_PATH = OUT_DIR + '/build-writing-review-' + DATE + '.md'

// ---------------- the standard (distilled rubric injected into every reviewer) ----------------
// Canonical sources a reviewer may open for a borderline call:
//   .claude/skills/write-build-tutorial/SKILL.md  (13-section structure + voice rules)
//   templates/build-template.md                   (section intents + required sections)
//   CLAUDE.md "## Content Writing Voice"          (project-wide evergreen voice rules)
const RUBRIC = [
  'You judge a Path of Exile 2 build guide on TWO INDEPENDENT TRACKS. Do not let one contaminate the other.',
  '',
  'TRACK A — WRITING QUALITY (EVERGREEN: applies to EVERY doc regardless of patch/era). Violations here are real defects.',
  'Detect each as a binary/count with line citations. Use these exact codes:',
  '  V1 source-attribution in body — "theo Fubgun/Empyrean/<creator>", "video nói", "transcript", "theo nhiều nguồn", a quoted "> Source:" line. The doc must speak in the owner\'s own voice.',
  '  V2 meta-summary / structural meta-talk — "bài này tổng hợp", "trong note này chúng ta", "tóm lại", "phần 1 nói về...", a "Mục Lục"/table-of-contents block, "doc này chia thành N phần".',
  '  V3 ornament — metaphor for a mechanic ("trái tim damage", "ping-pong"), editorial wordplay, or flavour in the title/H1 ("Walking Calamity", "Cocaine Wasps").',
  '  V4 dash-subtitle heading — "## X — Y" pattern (heading with an em-dash subtitle). Headings must say plainly what the section is.',
  '  V5 Title Case heading — headings should be Vietnamese sentence-case, not English Title Case.',
  '  V6 league/patch in title or H1 — title/H1 must be concept-only (no "Mirage", "0.5", "3.28"); site auto-concats league+patch.',
  '  V7 hedging — "có vẻ như", "được cho là", "phổ biến cho rằng" — state facts with real numbers instead.',
  '  V8 hyphenated Vietnamese compounds — "đàn-đông", "nguyên-đàn" (Vietnamese does not hyphen like that).',
  '  V9 inline confidence tags in prose — literal "(HIGH)"/"(MEDIUM)"/"(LOW)" in body text (frontmatter confidence_level is fine).',
  '  V10 bare game term missing wiki-link — a unique/skill/support/currency/scarab named in prose without a :wiki-link{} (cite the most egregious few, not an exhaustive sweep).',
  '  V11 datasheet stat-stuffing — numbers/stats crammed in parentheses mid-sentence so the line reads like a spec sheet instead of prose.',
  '  V12 bullet-dump — 5+ consecutive bullets whose items are causally linked (joinable by "vì/do đó/tuy nhiên") and should be prose.',
  '',
  'TRACK B — TEMPLATE CONFORMANCE (ERA-SENSITIVE). A doc on an older archetype (e.g. patch 0.4, archetype_version 2.x) predates the current template — FLAG these as a MIGRATION item, do NOT let them drag down the prose verdict. Codes:',
  '  T1 markdown tables present (current convention forbids tables — bullets/prose instead).',
  '  T2 fenced code blocks used for game data (yaml/text fences for stats/loops).',
  '  T3 missing or out-of-order required H2 sections vs the 13-section structure (Build Overview, Skill Gems & Links, Ascendancy, Passive Tree & Mastery, Stat Priorities & Defenses, Gear Progression, Flasks, Pantheon & Bandits, Leveling Notes, Budget & Investment, Strengths & Limitations, Failure Modes, Summary, Changelog, Relationships). List which are missing.',
  '  T4 missing Failure Modes section, or it has fewer than 3 distinct failure scenarios (REQUIRED by project rule).',
  '  T5 missing Relationships / cross-links section.',
  '  T6 frontmatter validation errors (you will run `bun run validate --path <file>` and record the result).',
  '  T7 missing Changelog.',
  '  T8 a DPS claim >=100k or an EHP claim stated without a PoB/character/patch reference anywhere in the doc.',
  '',
  'JUDGMENT SCORES (1-5, the subjective axes the owner named). 5=excellent, 3=acceptable, 1=poor:',
  '  clarity (đọc dễ hiểu) — a player returning to the league can follow it top-to-bottom; every choice explains WHY (mechanism + reason), not just WHAT; jargon introduced before use.',
  '  concision (nội dung vừa đủ, không lan man) — no redundancy, no padding, no points repeated across sections; an oversized in-body changelog or repeated mechanic explanations count against this.',
  '  detail (đủ chi tiết) — covers the build end-to-end (skills, ascendancy, tree, stat/defense numbers, gear per slot, leveling, budget, failure modes) with actionable concrete numbers; no critical gaps.',
  '',
  'CORRECTNESS SCOPE: judge INTERNAL correctness only — numbers are concrete (not "tốt"/"mạnh") and attributed to PoB/character/patch, no internal contradictions, no obvious fabrication. DO NOT attempt external fact-checking of game mechanics against wiki/patch (out of scope, no tools for it here). If a claim looks unsupported or suspicious, FLAG it as a note; do not try to resolve it.',
  '',
  'VERDICTS (two independent outputs):',
  '  prose_verdict — KEEP (publish-ready prose), POLISH (good but has listed fixes), REWRITE (pervasive voice defects / unclear / rambling). Based on Track A + judgment scores ONLY, never on template era.',
  '  template_status — CURRENT (matches today\'s template) or LEGACY-MIGRATION (predates it; needs structural migration). Based on Track B.',
].join('\n')

// ---------------- schemas ----------------
const DISCOVER_SCHEMA = {
  type: 'object',
  properties: {
    docs: { type: 'array', items: { type: 'object', properties: { path: { type: 'string' } }, required: ['path'] } },
    stubs: { type: 'array', items: { type: 'string' } },
  },
  required: ['docs'],
}

const SCORES = {
  type: 'object',
  properties: {
    clarity: { type: 'integer', minimum: 1, maximum: 5 },
    concision: { type: 'integer', minimum: 1, maximum: 5 },
    detail: { type: 'integer', minimum: 1, maximum: 5 },
  },
  required: ['clarity', 'concision', 'detail'],
}

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    path: { type: 'string' },
    patch: { type: 'string' },
    line_count: { type: 'integer' },
    evergreen_violations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          code: { type: 'string' },        // V1..V12
          count: { type: 'integer' },
          lines: { type: 'string' },        // e.g. "41, 73, 110-118"
          note: { type: 'string' },
        },
        required: ['code', 'count'],
      },
    },
    template_issues: {
      type: 'array',
      items: {
        type: 'object',
        properties: { code: { type: 'string' }, detail: { type: 'string' } }, // T1..T8
        required: ['code', 'detail'],
      },
    },
    validate_status: { type: 'string' },     // "clean" or a short error summary
    scores: SCORES,
    prose_verdict: { type: 'string', enum: ['KEEP', 'POLISH', 'REWRITE'] },
    template_status: { type: 'string', enum: ['CURRENT', 'LEGACY-MIGRATION'] },
    one_line: { type: 'string' },            // the verdict in one sentence
    top_fixes: { type: 'array', items: { type: 'string' } },   // <=3 highest-leverage fixes
    strengths: { type: 'array', items: { type: 'string' } },   // <=3 things done well
    suspicious_claims: { type: 'array', items: { type: 'string' } }, // flagged, not resolved
  },
  required: ['path', 'scores', 'prose_verdict', 'template_status', 'one_line'],
}

const SYNTH_SCHEMA = {
  type: 'object',
  properties: {
    ranking: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          path: { type: 'string' },
          rank: { type: 'integer' },
          prose_verdict: { type: 'string' },
          template_status: { type: 'string' },
          clarity: { type: 'integer' }, concision: { type: 'integer' }, detail: { type: 'integer' },
          one_line: { type: 'string' },
        },
        required: ['path', 'rank', 'prose_verdict', 'one_line'],
      },
    },
    systemic_patterns: {
      type: 'array',
      items: {
        type: 'object',
        properties: { pattern: { type: 'string' }, affected_count: { type: 'integer' }, examples: { type: 'array', items: { type: 'string' } } },
        required: ['pattern', 'affected_count'],
      },
    },
    exemplars: { type: 'array', items: { type: 'string' } },     // copy-these docs
    needs_work: { type: 'array', items: { type: 'string' } },    // priority fix list
    corpus_take: { type: 'string' },                            // 3-5 sentence overall judgment
  },
  required: ['ranking', 'systemic_patterns', 'corpus_take'],
}

const CRITIC_SCHEMA = {
  type: 'object',
  properties: {
    sound: { type: 'boolean' },
    verdict_adjustments: {
      type: 'array',
      items: {
        type: 'object',
        properties: { path: { type: 'string' }, from: { type: 'string' }, to: { type: 'string' }, why: { type: 'string' } },
        required: ['path', 'why'],
      },
    },
    ranking_issues: { type: 'array', items: { type: 'string' } },
    unsupported_claims: { type: 'array', items: { type: 'string' } }, // synthesis claims not backed by the reviews
    notes: { type: 'string' },
  },
  required: ['sound'],
}

const FINAL_SCHEMA = {
  type: 'object',
  properties: { report_path: { type: 'string' }, executive_summary: { type: 'string' } },
  required: ['report_path', 'executive_summary'],
}

// ---------------- helpers ----------------
const shortName = (p) => p.split('/').slice(-2).join('/')

// ================= PHASE 0 — DISCOVER =================
phase('Discover')
const discovery = await agent(
  [
    'Find every Path of Exile 2 BUILD GUIDE under content/builds/ that should be reviewed.',
    'Use Glob/Bash to list content/builds/**/*.md.',
    'EXCLUDE class-level landing stubs whose path matches exactly content/builds/<class>/index.md (exactly ONE path segment between "builds/" and "/index.md") — these are ~17-line class index pages, not build guides.',
    'KEEP everything else, INCLUDING real build docs nested as content/builds/<class>/<slug>/index.md (two segments — these are full guides).',
    'Return kept docs in `docs` (one {path} each) and the excluded stubs in `stubs`. Do NOT read full file contents — paths only.',
  ].join('\n'),
  { schema: DISCOVER_SCHEMA, label: 'discover', phase: 'Discover', model: 'haiku' },
)
const docs = (discovery && Array.isArray(discovery.docs)) ? discovery.docs.filter(d => d && d.path) : []
log('Discovered ' + docs.length + ' build docs to review (' + ((discovery && discovery.stubs && discovery.stubs.length) || 0) + ' stubs excluded).')
if (!docs.length) { return { error: 'No build docs discovered.', report_path: null } }

// ================= PHASE 1 — REVIEW (one agent per doc) =================
phase('Review')
const reviews = (await parallel(docs.map((d) => () => agent(
  [
    'You are a meticulous editor reviewing ONE Path of Exile 2 build guide for WRITING QUALITY. Be specific and cite line numbers.',
    '',
    'TARGET FILE: ' + d.path,
    '',
    'STEPS:',
    '1. Read the full file (Read tool).',
    '2. Run `bun run validate --path ' + d.path + '` and record the result in validate_status ("clean" or a one-line error summary). Map any errors to template_issues code T6.',
    '3. Note the frontmatter `patch` and the file line_count.',
    '4. Score against the rubric below. For EVERY evergreen violation you find, give its code, a count, and the line numbers. For template issues, give the code + a short detail. Then assign the three 1-5 judgment scores.',
    '5. Decide prose_verdict (KEEP/POLISH/REWRITE — Track A + judgment ONLY, ignore template era) and template_status (CURRENT/LEGACY-MIGRATION — Track B).',
    '6. Give <=3 highest-leverage top_fixes and <=3 strengths. Flag (do not resolve) any internally-unsupported or suspicious factual claims in suspicious_claims.',
    '',
    'Be calibrated, not harsh: a clean current-voice doc (prose, owner voice, wiki-links, explains why, Failure Modes present) should score 4-5 and KEEP. Reserve REWRITE for pervasive voice defects, genuine unclarity, or rambling.',
    'DIAGNOSTIC ONLY — do NOT edit the file.',
    '',
    '=== RUBRIC ===',
    RUBRIC,
  ].join('\n'),
  { schema: REVIEW_SCHEMA, label: 'review:' + shortName(d.path), phase: 'Review', model: 'sonnet' },
)))).filter(Boolean)
log('Reviewed ' + reviews.length + '/' + docs.length + ' docs.')

// ================= PHASE 2 — SYNTHESIZE =================
phase('Synthesize')
const synthesis = await agent(
  [
    'You are the editor-in-chief synthesizing per-doc reviews of the content/builds/ corpus into one ranked judgment.',
    'Input: a JSON array of per-doc reviews (mechanical violation checklists on two tracks + 1-5 judgment scores + verdicts).',
    '',
    'Produce:',
    '- ranking: ALL docs ordered best->worst by writing quality (prose_verdict then judgment scores; template_status is a SEPARATE axis, do not let LEGACY-MIGRATION sink a well-written doc). Assign rank 1..N. Carry clarity/concision/detail + one_line.',
    '- systemic_patterns: corpus-wide facts aggregated from the mechanical checklists, with affected_count and example paths. E.g. "N docs use forbidden tables (T1)", "M docs carry source-attribution (V1)", "K docs are LEGACY-MIGRATION". These are FACTS from the checklists, not opinions.',
    '- exemplars: the docs whose voice others should copy.',
    '- needs_work: the priority fix list (REWRITE first, then worst judgment scores).',
    '- corpus_take: a 3-5 sentence honest overall answer to the owner\'s question — is our build writing good, correct, clear, just-enough-yet-detailed? Where is it strong, where does it slip?',
    '',
    'Ground every systemic claim in the review data. Do not invent counts.',
    '',
    '=== REVIEWS (JSON) ===',
    JSON.stringify(reviews),
  ].join('\n'),
  { schema: SYNTH_SCHEMA, label: 'synthesize', phase: 'Synthesize', model: 'sonnet' },
)

// ================= PHASE 3 — CRITIQUE (single high-leverage adversarial pass) =================
phase('Critique')
const critique = await agent(
  [
    'You are an adversarial critic. Your job is to stress-test the synthesis below — NOT to re-review every doc.',
    'You have both the per-doc reviews and the synthesis. Challenge the CONCLUSIONS:',
    '- Are the REWRITE / KEEP prose_verdicts defensible given the cited evidence? Name any that look mis-called (verdict_adjustments with from/to/why).',
    '- Is any doc clearly mis-ranked relative to its scores and violations? (ranking_issues)',
    '- Does any systemic_pattern count or corpus_take claim go beyond what the review data supports? (unsupported_claims)',
    '- Watch specifically for the trap of conflating template era with prose quality — a LEGACY-MIGRATION doc penalized on prose for being old-format, or a current-template doc rated highly despite weak prose.',
    'Set sound=true only if the synthesis holds up after your challenge. Keep adjustments evidence-backed; do not manufacture disagreement.',
    '',
    '=== SYNTHESIS (JSON) ===',
    JSON.stringify(synthesis),
    '',
    '=== REVIEWS (JSON) ===',
    JSON.stringify(reviews),
  ].join('\n'),
  { schema: CRITIC_SCHEMA, label: 'critique', phase: 'Critique', model: 'opus' },
)

// ================= PHASE 4 — FINALIZE (write the report) =================
phase('Finalize')
const final = await agent(
  [
    'Write the final build-writing review report to ' + REPORT_PATH + ' using the Write tool. This is a DIAGNOSTIC report — do NOT edit any file under content/.',
    'Fold the critic\'s evidence-backed adjustments into the synthesis before writing (apply verdict_adjustments and ranking_issues; drop or soften any unsupported_claims the critic named).',
    '',
    'Report structure (Markdown, written for the project owner — direct, no fluff):',
    '1. Title + date (' + DATE + ') + one-paragraph corpus_take (the honest overall judgment, post-critique).',
    '2. "## Ranked scorecard" — a compact list (NOT a wide table), one line per doc, best->worst: rank, short path, prose_verdict, template_status, scores as clarity/concision/detail, and the one_line. Group or mark the LEGACY-MIGRATION docs so the owner sees prose-quality and template-era as separate axes.',
    '3. "## Systemic patterns" — the corpus-wide facts with counts and example paths (forbidden tables, source-attribution, missing Failure Modes, legacy archetype, etc.).',
    '4. "## Exemplars to copy" and "## Priority fixes" — actionable lists; for each priority doc give its top_fixes.',
    '5. "## Per-doc detail" — one short subsection per doc with its violations (codes + lines), scores, verdict, top_fixes, strengths, and any suspicious_claims flagged.',
    '6. "## Critic notes" — what the adversarial pass changed or affirmed.',
    'Keep it scannable. Use the violation CODES with a one-line legend at the top so they are decodable.',
    '',
    'Return report_path and a 4-6 sentence executive_summary (the headline judgment + the 2-3 biggest systemic issues + which docs are exemplars vs need rewriting).',
    '',
    '=== SYNTHESIS (JSON) ===',
    JSON.stringify(synthesis),
    '',
    '=== CRITIQUE (JSON) ===',
    JSON.stringify(critique),
    '',
    '=== REVIEWS (JSON) ===',
    JSON.stringify(reviews),
  ].join('\n'),
  { schema: FINAL_SCHEMA, label: 'finalize', phase: 'Finalize', model: 'sonnet' },
)

return {
  report_path: (final && final.report_path) || REPORT_PATH,
  reviewed: reviews.length,
  critic_sound: critique ? critique.sound : null,
  executive_summary: (final && final.executive_summary) || null,
}
