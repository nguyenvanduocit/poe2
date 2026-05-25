import { test, expect } from 'bun:test';
import { pobbinUrl, poeninjaUrl } from '../publish';

test('pobbinUrl builds the shareable link from a build id', () => {
  expect(pobbinUrl('8-9u-rZYxc0a')).toBe('https://pobb.in/8-9u-rZYxc0a');
});

test('poeninjaUrl normalizes the upload response to an absolute link', () => {
  // poe.ninja's PobUploadPage does window.location.assign(responseText) — the
  // body may be relative or absolute; both must resolve to the viewer URL.
  expect(poeninjaUrl('/poe2/pob/abc123')).toBe('https://poe.ninja/poe2/pob/abc123');
  expect(poeninjaUrl('https://poe.ninja/poe2/pob/abc123')).toBe(
    'https://poe.ninja/poe2/pob/abc123',
  );
});
