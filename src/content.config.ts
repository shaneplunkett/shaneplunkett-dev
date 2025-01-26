import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { rssSchema } from "@astrojs/rss";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: rssSchema,
});

export const collections = { blog };
