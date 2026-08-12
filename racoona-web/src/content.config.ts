import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().default('Racoona AI Team'),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const technology = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/technology' }),
  schema: postSchema,
});

const food = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/food' }),
  schema: postSchema,
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: postSchema,
});

export const collections = {
  technology,
  food,
  services,
};
