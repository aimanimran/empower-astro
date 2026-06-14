import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "blog" collection: each .md file is one blog post.
// The CMS (Decap) creates and edits these files. The Markdown body
// becomes the post content.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    author: z.string().default('Dr. Mushtaq'),
    // Optional hero image, path like /assets/images/my-post.png
    image: z.string().optional(),
    // Set to true to hide a post without deleting it
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
