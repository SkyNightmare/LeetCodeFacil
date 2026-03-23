import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog');
  
  const searchIndex = await Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await post.render();
      
      return {
        title: post.data.title,
        description: post.data.description,
        content: post.body,
        slug: post.slug,
        tags: post.data.tags,
      };
    })
  );
  
  return new Response(JSON.stringify(searchIndex), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}