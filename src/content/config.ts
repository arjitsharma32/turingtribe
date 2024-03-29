import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string().max(80),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val)),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			video: z.string().optional(),
			draft: z.boolean().default(false)
		})
})

export const collections = { blog }
