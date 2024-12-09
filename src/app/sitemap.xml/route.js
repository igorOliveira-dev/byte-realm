import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function GET(request) {
  const query = groq`*[_type == "post"] { "slug": slug.current, _updatedAt }`;
  const posts = await client.fetch(query);

  const staticPages = [
    {
      loc: "https://byterealm.vercel.app",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: "https://byterealm.vercel.app/contato",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.4,
    },
    {
      loc: "https://byterealm.vercel.app/politica-privacidade",
      lastmod: new Date().toISOString(),
      changefreq: "yearly",
      priority: 0.4,
    },
    {
      loc: "https://byterealm.vercel.app/newsletter",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
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
          <changefreq>yearly</changefreq> 
          <priority>0.9</priority>
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
