import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function GET(request) {
  const query = groq`*[_type == "post"] { "slug": slug.current, _updatedAt }`;
  const posts = await client.fetch(query);

  const staticPages = [
    {
      loc: "https://byterealm.vercel.app",
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 1.0,
    },
    {
      loc: "https://byterealm.vercel.app/contato",
      lastmod: new Date().toISOString(),
      priority: 0.4,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?> 
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${staticPages
      .map((page) => {
        return `
        <url> 
          <loc>${page.loc}</loc> 
          <lastmod>${page.lastmod}</lastmod> 
          <changefreq>${page.changefreq}</changefreq> 
          <priority>${page.priority}</priority>
        </url>`;
      })
      .join("")} 
    ${posts
      .map((post) => {
        return `
        <url> 
          <loc>${`https://byterealm.vercel.app/posts/${post.slug}`}</loc> 
          <lastmod>${post._updatedAt}</lastmod> 
          <changefreq>monthly</changefreq> 
          <priority>0.7</priority>
        </url>`;
      })
      .join("")} 
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
