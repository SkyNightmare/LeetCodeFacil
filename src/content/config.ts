import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }).optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Anonymous'),
    featured: z.boolean().default(false),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']).optional(),

  }),
});

export const collections = { blog };