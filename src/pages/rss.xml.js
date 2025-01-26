import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    stylesheet: "/styles.xsl",
    title: "Shane's Blog",
    description: "A Product Managers attempt to not suck at Code",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Compute RSS link from post `id`
      // This example assumes all posts are rendered as `/blog/[id]` routes
      link: `pages/posts/${post.id}/`,
    })),
  });
}
