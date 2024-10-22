"use client";

import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "../../Loading";
import Image from "next/image";
import { PortableText } from "next-sanity";

interface Post {
  _id: string;
  title: string;
  body: any[];
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
  author: {
    name: string;
    image: {
      asset: {
        url: string;
      };
    };
  };
  publishedAt: string;
  slug: {
    current: string;
  };
}

const PostPage = () => {
  const params = useParams();
  const { slug } = params;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (slug) {
      const fetchPost = async () => {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          body,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
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
        const post = await client.fetch(query, { slug });
        setPost(post);
      };

      fetchPost();
    }
  }, [slug]);

  if (!post) {
    return <Loading />;
  }

  return (
    <main className="p-4 md:mx-24">
      <header>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="gray-text">{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</p>
        <div className="flex items-center mt-2">
          <img src={post.author.image.asset.url} alt={post.author.name} className="w-10 h-10 rounded-full mr-2" />
          <p className="font-semibold">{post.author.name}</p>
        </div>
        <div className="relative w-full md:w-1/2 h-52 mt-6">
          <Image
            layout="fill"
            objectFit="cover"
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            className=" w-full h-48 object-cover rounded-xl"
          />
        </div>
      </header>
      <div className="mt-6">
        <PortableText value={post.body} />
      </div>
    </main>
  );
};

export default PostPage;