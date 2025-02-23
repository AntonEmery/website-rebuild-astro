import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define a collection of markdown or mdx file blog posts
const blog = defineCollection({
  loader: glob({ pattern: "*.mdx", base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    postTitle: z.string(),
    slug: z.string(),
    featuredImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
})

export const collections = { blog };