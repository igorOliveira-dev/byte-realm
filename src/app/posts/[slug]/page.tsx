"use client";
import { client } from "../../../sanity/lib/client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "../../Loading";
import Image from "next/image";
import { PortableText, PortableTextProps } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

interface ImageBlock {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

const PortableTextComponents: PortableTextProps["components"] = {
  types: {
    image: ({ value }: { value: ImageBlock }) => {
      if (!value.asset._ref) {
        console.error("No asset reference found for image:", value);
        return null;
      }

      const { width, height } = getImageDimensions(value.asset);
      return (
        <div className="relative h-80 text-left my-4">
          <Image
            src={urlFor(value.asset).fit("max").auto("format").url()}
            alt={value.alt || "Imagem do artigo"}
            width={width}
            height={height}
            className="h-80 w-auto object-left"
            style={{ objectFit: "contain" }}
          />
        </div>
      );
    },
  },
};

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

  useEffect(() => {
    if (post) {
      const firstParagraph = post.body.find((block) => block._type === "block" && block.children[0]?.text)?.children[0]?.text || "";
      const secondParagraph =
        post.body.slice(0).find((block) => block._type === "block" && block.children[0]?.text)?.children[0]?.text || "";

      document.title = `${post.title} - Byte Realm`;

      const oldMetaTags = document.querySelectorAll(
        'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[property="og:image"], meta[name="twitter:card"], meta[name="twitter:title"], meta[name="twitter:description"], meta[name="twitter:image"]'
      );
      oldMetaTags.forEach((tag) => tag.parentNode?.removeChild(tag));

      const metaTags = [
        { name: "description", content: secondParagraph || "" },
        { property: "og:title", content: post.title || "" },
        { property: "og:description", content: secondParagraph || "" },
        { property: "og:image", content: post.mainImage?.asset?.url || "" },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title || "" },
        { name: "twitter:description", content: secondParagraph || "" },
        { name: "twitter:image", content: post.mainImage?.asset?.url || "" },
      ];

      metaTags.forEach((meta) => {
        const tag = document.createElement("meta");
        if (meta.name) {
          tag.setAttribute("name", meta.name);
        } else if (meta.property) {
          tag.setAttribute("property", meta.property);
        }
        tag.setAttribute("content", meta.content);
        document.head.appendChild(tag);
      });

      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement("link");
        linkCanonical.setAttribute("rel", "canonical");
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute("href", window.location.href);

      return () => {
        document.title = "Byte Realm - O seu portal de tecnologia";
        metaTags.forEach((meta) => {
          const tag = document.querySelector(`meta[${meta.name ? "name" : "property"}="${meta.name || meta.property}"]`);
          if (tag) {
            document.head.removeChild(tag);
          }
        });
        if (linkCanonical) {
          document.head.removeChild(linkCanonical);
        }
      };
    }
  }, [post]);

  if (!post) {
    return <Loading />;
  }

  return (
    <main className="p-4 md:mx-24">
      <header>
        <h1 className="text-3xl font-bold">{post.title}</h1>
        <p className="gray-text">{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</p>
        <div className="flex items-center mt-2">
          <Image src={post.author.image.asset.url} alt={post.author.name} height={35} width={35} className="rounded-full mr-2" />
          <p className="font-semibold">{post.author.name}</p>
        </div>
        <div className="relative mt-6 flex items-start blog-img-size">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            className="object-fit rounded-xl"
            priority
          />
        </div>
      </header>
      <div className="mt-6">
        <PortableText value={post.body} components={PortableTextComponents} />
      </div>
    </main>
  );
};

export default PostPage;
