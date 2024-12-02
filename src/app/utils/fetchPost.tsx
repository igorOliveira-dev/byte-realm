import { client } from "../../sanity/lib/client";

export async function fetchPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        body,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        "categories": categories[]->{ title },
        author->{
          name,
          image{
            asset->{
              _id,
              url
            }
          }
        },
        publishedAt
      }`;

  const posts = await client.fetch(query);
  return posts;
}
