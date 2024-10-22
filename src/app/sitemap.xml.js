import { fetchPosts } from "./utils/fetchPost";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const posts = await fetchPosts();
  const urls = posts.map(
    (post) => `
    <url>
      <loc>https://byterealm.vercel.app/posts/${post.slug.current}</loc>
      <lastmod>${post._updatedAt}</lastmod>
    </url>
  `
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://byterealm.vercel.app/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${urls.join("")}
    </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
