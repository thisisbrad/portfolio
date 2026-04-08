import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['build-log', 'the-search', 'dev-return', 'hard-won']),
    date: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    logNumber: z.number().optional(),      // build-log only
    seriesEntry: z.number().optional(),    // dev-return only
    seriesTotal: z.number().optional(),    // dev-return only
    lessonNumber: z.number().optional(),   // hard-won only
    subtitle: z.string().optional(),       // hard-won only
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
