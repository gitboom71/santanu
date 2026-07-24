import { defineCollection } from 'astro:content';
import { z } from 'astro:schema'; // Updated import to remove Astro 5+ deprecation warnings
import { glob } from 'astro/loaders';

// Health Collection
const healthCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/health" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.date().or(z.string().transform((val) => new Date(val))).optional(),
    author: z.string().optional(),
  }),
});

// Life Collection
const lifeCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/life" }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
    category: z.string().optional(),
    pubDate: z.date().or(z.string().transform((val) => new Date(val))).optional(),
    author: z.string().optional(),
  }),
});

// Blog collection definition
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().or(z.string().transform((val) => new Date(val))),
    author: z.string().default('Santanu Mukhopadhyay'),
    lang: z.enum(['en', 'bn']).default('en'),
  }),
});

export const collections = {
  'health': healthCollection,
  'life': lifeCollection,
  'blog': blogCollection,
};