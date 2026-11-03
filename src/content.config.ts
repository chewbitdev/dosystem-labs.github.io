import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// src/content/blog/ 아래의 .md, .mdx 파일이 글이 됩니다.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(['mentoring', 'study']),
			tags: z.array(z.string()).default([]),
			author: reference('authors'),
			heroImage: z.optional(image()),
			// true로 두면 빌드에서 제외됩니다(작성 중인 글).
			draft: z.boolean().default(false),
		}),
});

const authors = defineCollection({
	// src/content/authors.json 한 파일에 작성자를 모읍니다. 키가 작성자 아이디가 됩니다.
	loader: file('src/content/authors.json'),
	schema: z.object({
		name: z.string(),
		role: z.string().optional(),
		bio: z.string().optional(),
		github: z.string().optional(),
	}),
});

export const collections = { blog, authors };
