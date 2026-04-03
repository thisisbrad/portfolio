import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['build-log', 'the-search', 'dev-return']),
    date: z.coerce.date(),
    readTime: z.string(),
    tags: z.array(z.string()),
    excerpt: z.string(),
    logNumber: z.number().optional(),      // build-log only
    seriesEntry: z.number().optional(),    // dev-return only
    seriesTotal: z.number().optional(),    // dev-return only
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { posts };
