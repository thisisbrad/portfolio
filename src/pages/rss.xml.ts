import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'BRAD.DEV',
    description: 'Building real things, writing it all down. Full-stack JS, React, Node, Next.js.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/posts/${post.id.replace(/\.(md|mdx)$/, '')}`,
    })),
    customData: `<language>en-us</language>`,
  });
}
