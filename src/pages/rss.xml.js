import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'LeetCodeFacil Blog | Soluciones y Explicaciones de Algoritmos',
    description: 'Explora soluciones detalladas y explicaciones de algoritmos para problemas de LeetCode. Mejora tus habilidades de programación con nuestras guías paso a paso.',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}