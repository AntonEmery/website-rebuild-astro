import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define a collection of markdown file blog posts
const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: './src/content/blog' }),
})

export const collections = { blog };