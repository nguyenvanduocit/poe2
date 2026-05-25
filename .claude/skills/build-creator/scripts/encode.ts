import { deflateSync } from 'node:zlib';

/**
 * Encode a Path of Building XML string into a PoB import code.
 *
 * PoB codes are zlib-deflate(xml) then url-safe base64 — the exact inverse of
 * the decode path in pob/scripts/pob-client.ts (inflateSync + base64 decode).
 */
export function encode(xml: string): string {
  return deflateSync(Buffer.from(xml, 'utf-8'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}
