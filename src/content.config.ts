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

// "resources" collection: each .md file is one resource-library topic page
// (Anxiety, ADHD, etc). The CMS edits the intro/sidebar fields and the
// Markdown body (the main article).
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organizations: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
    crisisSupportText: z.string().optional(),
    whenToSeekText: z.string().optional(),
  }),
});

// "testimonials" collection: each .md file is one patient review shown on
// the Feedback page. `order` controls display order (lower = shown first).
const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    title: z.string().optional(),
    stars: z.number().min(1).max(5).default(5),
    date: z.string(),
    link: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, resources, testimonials };