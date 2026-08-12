import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  author: z.string().default('Racoona AI Team'),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

const technologyCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

const foodCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = {
  technology: technologyCollection,
  food: foodCollection,
  services: servicesCollection,
};
