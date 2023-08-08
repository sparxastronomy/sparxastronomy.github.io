import { defineCollection, z } from "astro:content"


export const collections = {
	blog: defineCollection({
		type: 'content',
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
	work: defineCollection({
		type: 'content',
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

