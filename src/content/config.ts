import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/pages/blog/Posts', pattern: '*.{md,mdx}'}),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		previewImage: z.string().optional(),
		heroImage: z.string().optional(),
	}),
});

const devlog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
	previewImage: z.string().optional(),
    heroImage: z.string().optional(),
    gametag: z.string(),
  }),
});

export const collections = {
  blog,
  devlog,
};
