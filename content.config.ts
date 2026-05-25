import { defineCollection, defineContentConfig, z } from '@nuxt/content'

// Shared schema — every locale collection validates against the same fields.
const contentSchema = z.object({
        document_type: z.string().optional(),
        description: z.string().optional(),
        status: z.string().optional(),
        game: z.string().optional(),
        league: z.string().optional(),
        patch: z.string().optional(),
        author: z.string().optional(),
        created: z.string().optional(),
        updated: z.string().optional(),
        tags: z.array(z.string()).optional(),
        weight: z.number().optional(),

        // Build fields
        class: z.string().optional(),
        ascendancy: z.string().optional(),
        budget_tier: z.string().optional(),
        build_tags: z.object({
          primary_skill: z.string().optional(),
          damage_type: z.string().optional(),
          playstyle: z.string().optional(),
          content_focus: z.string().optional(),
        }).optional(),
        ratings: z.object({
          clear_speed: z.number().optional(),
          boss_damage: z.number().optional(),
          survivability: z.number().optional(),
          mobility: z.number().optional(),
          league_start: z.number().optional(),
          budget_scaling: z.number().optional(),
        }).optional(),
        pob_link: z.string().optional(),
        video_guide: z.string().optional(),
        video_update_328: z.string().optional(),
        forum_guide: z.string().optional(),

        // Farming fields
        strategy_tier: z.string().optional(),
        profit_per_hour: z.string().optional(),
        investment_tier: z.string().optional(),
        league_phase: z.string().optional(),
        market_context: z.object({
          input_costs: z.array(z.string()).optional(),
        }).optional(),

        // Skill fields
        gem_color: z.string().optional(),
        skill_type: z.string().optional(),
        level_requirement: z.number().optional(),
        damage_type: z.string().optional(),
        skill_tags: z.array(z.string()).optional(),

        // Character fields
        level: z.number().optional(),
        progress_stage: z.string().optional(),

        // Item fields
        rarity: z.string().optional(),
        item_class: z.string().optional(),

        // Class fields
        class_type: z.string().optional(),
        complexity: z.string().optional(),
        accessibility: z.string().optional(),

        // League fields
        league_type: z.string().optional(),
        league_start: z.string().optional(),
})

export default defineContentConfig({
  collections: {
    // Default locale (Vietnamese): lives at the content root, unprefixed.
    // Exclude en/** so EN files never leak into VI listings — the root listing
    // queries this collection with a `/%` prefix and would otherwise surface
    // /en pages mixed into the Vietnamese index.
    content: defineCollection({
      type: 'page',
      // Exclude colocated binaries:
      //   - `**/assets/**` — build notes colocate media (frames, transcripts)
      //     next to index.md; served as static files via the public asset
      //     pipeline, not parsed as content pages.
      //   - `**/*.txt` / `**/*.jpg` — PoB exports (e.g.
      //     content/characters/*-pob.txt) and frame screenshots aren't parseable
      //     as Nuxt Content pages; without this, Nuxt warns on every file.
      source: {
        include: '**',
        exclude: ['en/**', '**/assets/**', '**/*.txt', '**/*.jpg', '**/*.jpeg', '**/*.png'],
      },
      schema: contentSchema,
    }),
    // English: `prefix: ''` strips the en/ folder so stored paths are locale-
    // neutral (content/en/builds/x.md → /builds/x). The /en URL prefix is added
    // by i18n's prefix_except_default strategy at routing time, not baked here.
    content_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/**',
        prefix: '',
        exclude: ['**/assets/**', '**/*.txt', '**/*.jpg', '**/*.jpeg', '**/*.png'],
      },
      schema: contentSchema,
    }),
  },
})
