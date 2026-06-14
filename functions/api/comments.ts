// Reader-comments backend for this site — re-exports the reference Cloudflare
// Pages Function shipped by the andy-note-nuxt layer. Cloudflare compiles every
// file under functions/ into an edge handler; this one serves /api/comments.
//
// Required bindings on this Pages project (see wrangler.toml + CF env vars):
//   COMMENTS                 → Workers KV namespace (stores comments)
//   COMMENTS_RESOLVE_SECRET  → secret bearer token authorizing resolve (DELETE)
export { onRequestGet, onRequestPost, onRequestDelete } from 'andy-note-nuxt/server-functions/comments'
