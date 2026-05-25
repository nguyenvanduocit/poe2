/**
 * Publish a PoB code to a viewer and return a shareable link.
 *
 * Two targets (verified 2026-05-25 against PoB source BuildSiteTools.lua):
 *  - pobb.in: POST https://pobb.in/pob/ with the raw code as body → 200, body = id.
 *    Works headless (proven). Use as the reliable default / fallback.
 *  - poe.ninja: POST /poe2/pob/api/upload with URLSearchParams({code}). The origin
 *    rejects headless requests (Cloudflare/ASP.NET bot gate, 400) even with matched
 *    headers — it only succeeds from a real browser. So poe.ninja upload must run
 *    inside the user's Chrome via playwriter (see poeninjaUploadSnippet).
 */

export function pobbinUrl(id: string): string {
  return `https://pobb.in/${id}`;
}

export function poeninjaUrl(uploadResponse: string): string {
  const body = uploadResponse.trim();
  if (body.startsWith('http')) return body;
  return `https://poe.ninja${body.startsWith('/') ? '' : '/'}${body}`;
}

export interface PublishResult {
  target: 'pobb.in' | 'poe.ninja';
  url: string;
  id: string;
}

/** Headless publish to pobb.in. Returns the shareable link. */
export async function publishToPobbin(code: string): Promise<PublishResult> {
  const res = await fetch('https://pobb.in/pob/', {
    method: 'POST',
    headers: { 'User-Agent': 'Path of Building/2.42.0' },
    body: code,
  });
  if (!res.ok) {
    throw new Error(`pobb.in upload failed: HTTP ${res.status} ${res.statusText}`);
  }
  const id = (await res.text()).trim();
  return { target: 'pobb.in', url: pobbinUrl(id), id };
}

/**
 * Playwriter snippet to upload to poe.ninja from inside a loaded poe.ninja page.
 * Run after navigating to https://poe.ninja/poe2/pob. Returns the absolute viewer
 * URL (the API responds with the path window.location.assign would receive).
 */
export function poeninjaUploadSnippet(code: string): string {
  const json = JSON.stringify(code);
  return `
const code = ${json};
const res = await fetch('/poe2/pob/api/upload', {
  method: 'POST',
  body: new URLSearchParams({ code }),
});
if (!res.ok) throw new Error('poe.ninja upload failed: ' + res.status);
const body = (await res.text()).trim();
return body.startsWith('http') ? body : 'https://poe.ninja' + (body.startsWith('/') ? '' : '/') + body;
`.trim();
}
