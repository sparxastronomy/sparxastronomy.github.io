import { defineCollection } from "astro:content"
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

export const collections = {
	blog: defineCollection({
		loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			featuredImage: z.string(),
			img_alt: z.string().optional(),
			excerpt: z.string().optional(),
		}),
	}),
};

