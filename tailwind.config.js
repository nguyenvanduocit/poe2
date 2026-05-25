/**
 * POE2 site — inherit toàn bộ theme từ `andy-note-nuxt` layer.
 *
 * Theme (palette, fontFamily, stamp shadows, borderWidth, letterSpacing) +
 * content scan paths đều đến từ `node_modules/andy-note-nuxt/tailwind.config.js`
 * qua @nuxtjs/tailwindcss layer auto-merge (module.mjs:399 — `_layers.flatMap(
 * ...resolveConfigs)` + `configMerger` deep merge). Content paths của layer
 * resolve relative to CWD (POE2 root) — không phải relative to layer file dir —
 * vì Tailwind chỉ relative-to-config khi `content.relative: true` (xem
 * `node_modules/tailwindcss/src/lib/content.js:115-135`); @nuxtjs/tailwindcss
 * không bật flag đó. Bonus: module tự inject `app/components/**`, `app/pages/**`,
 * `app/layouts/**`, `app/app.vue` qua `resolveContentConfig` (module.mjs:349)
 * dựa trên Nuxt srcDir của POE2 — nên không cần khai báo `content` local nào cả.
 *
 * File này tồn tại chỉ để (a) làm anchor cho @nuxtjs/tailwindcss postcss.mjs
 * (nó hardcode tên `tailwind.config.js` — `.ts` bị Vite resolver bỏ qua, theme
 * mất), và (b) chỗ để add POE2-specific override sau này nếu cần.
 *
 * @type {import('tailwindcss').Config}
 */
export default {}
