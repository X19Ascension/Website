import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    gametag: z.string(),
  }),
});

export const collections = {
  devlog,
};
