import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/pages/blog/Posts', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const devlog = defineCollection({
	// ✅ NO loader, use default location: src/content/devlog
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  pubDate: z.coerce.date(),
	  updatedDate: z.coerce.date().optional(),
	  heroImage: z.string().optional(),
	  gametag: z.string(),
	}),
  });


export const collections = { blog, devlog };
