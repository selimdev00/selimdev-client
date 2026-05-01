import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../lib/site";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return rss({
    title: `${site.ownerName} - Writing`,
    description:
      "Notes on engineering, AI-augmented workflows, and shipping product.",
    site: context.site ?? site.url,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
      })),
    customData: "<language>en-us</language>",
  });
}
