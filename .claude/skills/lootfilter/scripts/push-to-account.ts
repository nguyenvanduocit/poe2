#!/usr/bin/env bun
/**
 * push-to-account.ts — upload a POE2 .filter to your GGG account via the
 * pathofexile2.com filter SPA, driven by playwriter (same-origin, browser
 * session). No OAuth: GGG's `pob` OAuth client lacks `account:item_filter`,
 * and the website filter manager is POE1-only — the only POE2 path is this SPA,
 * whose internal-api uses DPoP session auth (raw fetch = 401), so we DOM-drive
 * the create/edit form and let the page sign its own request.
 *
 * Flow: parser-validate FIRST (never push broken syntax) → write body to /tmp
 * (avoids cmdline length limits) → playwriter fills name/version + injects the
 * body into the ACE editor → Submit → verify the filter is listed.
 *
 * Prereq: Chrome open + logged into pathofexile2.com + Playwriter enabled.
 * Find the session id with `playwriter session list`.
 *
 * Usage:
 *   bun push-to-account.ts --file <path> --name "<filter name>" [--session 5]
 *       [--version 0.10.2a] [--public] [--dry-run]
 *   --dry-run fills the form but does NOT submit (safe end-to-end check).
 */

import { parseAsync, validate, formatErrors, findHiddenValuables } from '../parser/src'
import { readFileSync, writeFileSync } from 'fs'
import { spawnSync } from 'child_process'

function arg(name: string, def?: string): string | undefined {
  const i = process.argv.indexOf(`--${name}`)
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : def
}
function flag(name: string): boolean {
  return process.argv.includes(`--${name}`)
}

const file = arg('file')
const name = arg('name')
const session = arg('session', '5')!
const version = arg('version', '')!
const isPublic = flag('public')
const dryRun = flag('dry-run')

if (!file || !name) {
  console.error('Usage: bun push-to-account.ts --file <path> --name "<name>" [--session N] [--version v] [--public] [--dry-run] [--force]')
  process.exit(2)
}

// ── 0. Pre-validate the name (GGG rejects it server-side otherwise) ───────────
// GGG's rule is "Letters, numbers, punctuation and spaces only". '+' (and '=',
// '<', '>', '^', '~', '|', '$', '`') are Unicode Symbols (\p{S}), NOT punctuation
// (\p{P}), so the create/edit POST returns 400 { field: filter_name }. Catch it
// here instead of driving the whole browser flow into a doomed submit.
const badNameChars = [...new Set([...name].filter((c) => /[^\p{L}\p{N}\p{P}\p{Zs}]/u.test(c)))]
if (badNameChars.length) {
  console.error(`✗ Filter name "${name}" has character(s) GGG rejects: ${badNameChars.map((c) => `"${c}"`).join(' ')}`)
  console.error('  Allowed: letters, numbers, punctuation and spaces only — no symbols like + = < > ^ ~ | $ `. Rename and retry.')
  process.exit(1)
}

// ── 1. Validate with the parser BEFORE touching the account ──────────────────
const content = readFileSync(file, 'utf-8')
const blocks = await parseAsync(content).catch((e: any) => {
  console.error(`✗ Filter does not parse (line ${e?.location?.start?.line}): ${e?.message}`)
  process.exit(1)
})
const result = validate(blocks as any, { validateClasses: true, validateBaseTypes: false, warnHiddenValuables: false })
if (result.errors.length > 0) {
  console.error(`✗ Filter has ${result.errors.length} validation error(s) — aborting, not uploading:`)
  console.error(formatErrors(result.errors.slice(0, 10)))
  process.exit(1)
}

// ── Loot-safety gate: refuse to push a filter that HIDES top-tier currency ────
// A filter can be valid syntax and still hide a Divine Orb (a Hide rule ordered
// before its Show). No sane filter hides Mirror/Divine/Perfect orbs, so this is
// almost always a bug that would cost you loot. Abort unless --force overrides.
const hiddenValuables = findHiddenValuables(blocks as any)
if (hiddenValuables.length > 0 && !flag('force')) {
  console.error('✗ SAFETY STOP — this filter HIDES high-value currency (you would not see it drop):')
  for (const v of hiddenValuables) console.error(`    · ${v.baseType}`)
  console.error('  Likely a Hide rule ordered before its Show. Fix the filter, or pass --force to upload anyway.')
  process.exit(1)
}
console.error(`✓ Parsed ${(blocks as any).length} blocks, 0 errors. Pushing "${name}" to POE2 account${dryRun ? ' (DRY RUN)' : ''}...`)

// ── 2. Hand the body + meta to the sandbox via /tmp (cmdline-safe) ────────────
writeFileSync('/tmp/poe2-filter-body.txt', content)
writeFileSync('/tmp/poe2-filter-meta.json', JSON.stringify({ name, version, isPublic, dryRun }))

// ── 3. Drive the SPA with playwriter (sleeps between every DOM action) ────────
const js = `
const fs = require('fs');
const body = fs.readFileSync('/tmp/poe2-filter-body.txt','utf8');
const meta = JSON.parse(fs.readFileSync('/tmp/poe2-filter-meta.json','utf8'));
const out = { steps: [] };
const p = await context.newPage();
async function settle(){ for(let i=0;i<8;i++){ const t=await p.title().catch(()=>''); if(!/just a moment/i.test(t)) return; await p.waitForTimeout(2000);} }
try {
  // find an existing filter with this exact name → update it (no duplicate); else create
  await p.goto('https://pathofexile2.com/my-account/item-filters',{waitUntil:'load'}).catch(()=>{});
  await settle();
  await p.waitForTimeout(1500);
  const existingHref = await p.evaluate((nm)=>{ const a=[...document.querySelectorAll('a')].find(a=>a.innerText.trim()===nm && /item-filters\\//.test(a.getAttribute('href')||'')); return a? a.getAttribute('href'):null; }, meta.name);
  out.mode = existingHref ? 'update' : 'create';
  // Update must hit the EDIT surface (/item-filters/edit/<id>). The bare
  // /item-filters/<id> href is the read-only VIEW page (ACE editor only, zero
  // text inputs), so waitForSelector on the name input would time out there.
  const existingId = existingHref ? existingHref.split('/').filter(Boolean).pop() : null;
  const target = existingId ? ('https://pathofexile2.com/my-account/item-filters/edit/'+existingId) : 'https://pathofexile2.com/my-account/item-filters/create';
  out.target = target;
  await p.waitForTimeout(1500);
  await p.goto(target,{waitUntil:'load'}).catch(()=>{});
  await settle();
  await p.waitForSelector('input.poe-input__input[type=text]',{timeout:25000});
  await p.waitForTimeout(1500);
  out.steps.push(out.mode+'-page-ready');

  const setRes = await p.evaluate((args)=>{
    function setReact(el,val){ const d=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el),'value'); d.set.call(el,val); el.dispatchEvent(new Event('input',{bubbles:true})); el.dispatchEvent(new Event('change',{bubbles:true})); }
    const texts=[...document.querySelectorAll('input.poe-input__input[type=text]')];
    if(!texts[0]) return {ok:false,err:'no name input'};
    setReact(texts[0], args.name);
    if(args.version && texts[1]) setReact(texts[1], args.version);
    const ace=document.querySelector('.ace_editor');
    if(!ace||!ace.env||!ace.env.editor) return {ok:false,err:'no ace editor'};
    ace.env.editor.setValue(args.body, -1);
    ace.env.editor.clearSelection();
    return {ok:true, nameVal:texts[0].value, aceLen:ace.env.editor.getValue().length};
  }, {name:meta.name, version:meta.version, body});
  out.setRes = setRes;
  if(!setRes.ok) throw new Error('field set failed: '+setRes.err);
  await p.waitForTimeout(2000);

  if(meta.dryRun){ out.dryRun=true; out.url=p.url(); console.log('RESULT:::'+JSON.stringify(out)); return; }

  let post=null;
  p.on('response', async r=>{ try{ const u=r.url(); if(/internal-api\\/item-filters/i.test(u) && r.request().method()==='POST'){ let b=''; try{ b=await r.text(); }catch(e){} post={status:r.status(),url:u,body:(b||'').slice(0,600)}; } }catch(e){} });

  const clicked = await p.evaluate(()=>{ const b=[...document.querySelectorAll('button')].find(b=>/^(submit|create item filter|save)$/i.test(b.innerText.trim())); if(b){ b.click(); return b.innerText.trim(); } return null; });
  out.clicked = clicked;
  if(!clicked) throw new Error('submit button not found');
  await p.waitForTimeout(5000);
  out.postResp = post;
  out.afterUrl = p.url();

  await p.goto('https://pathofexile2.com/my-account/item-filters',{waitUntil:'load'}).catch(()=>{});
  await settle();
  await p.waitForTimeout(1800);
  out.listed = await p.evaluate((nm)=> document.body.innerText.includes(nm), meta.name);
  console.log('RESULT:::'+JSON.stringify(out));
} catch(e){ out.error=e.message; console.log('RESULT:::'+JSON.stringify(out)); } finally { await p.close(); }
`

const r = spawnSync('playwriter', ['-s', session, '--timeout', '120000', '-e', js], { encoding: 'utf-8', maxBuffer: 1024 * 1024 * 16 })
const stdout = (r.stdout || '') + (r.stderr || '')
const line = stdout.split('\n').find(l => l.includes('RESULT:::'))
if (!line) {
  console.error('✗ No RESULT from playwriter. Raw output:')
  console.error(stdout.slice(0, 1500))
  process.exit(1)
}
const res = JSON.parse(line.split('RESULT:::')[1])
if (res.error) {
  console.error('✗ Upload failed:', res.error, JSON.stringify(res))
  process.exit(1)
}
if (res.dryRun) {
  console.error(`✓ DRY RUN ok — form filled: name="${res.setRes?.nameVal}", body ${res.setRes?.aceLen} chars in editor. Not submitted.`)
  process.exit(0)
}
const status = res.postResp?.status
const listed = res.listed
console.error(`Submit button: "${res.clicked}" | mode: ${res.mode} | POST status: ${status ?? '?'} | listed on account: ${listed}`)
if (listed && (!status || status < 400)) {
  console.error(`✓ "${name}" is now on your POE2 account.`)
  process.exit(0)
}
console.error('✗ Could not confirm the filter was saved.')
if (res.postResp?.body) console.error(`  Server said (HTTP ${status}): ${res.postResp.body}`)
console.error('  Full result:', JSON.stringify(res))
process.exit(1)
