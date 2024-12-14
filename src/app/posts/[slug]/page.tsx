import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { PortableText, PortableTextProps } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from "@sanity/image-url";
import SimilarPosts from "@/app/components/SimilarPosts";

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
    image: ({ value }: { value: any }) => {
      if (!value.asset?._ref) return null;

      const { width, height } = getImageDimensions(value.asset);
      return (
        <div className="relative h-80 text-left my-4">
          <Image
            src={urlFor(value.asset).fit("max").auto("format").url()}
            alt={value.alt || "Imagem do artigo"}
            width={width}
            height={height}
            className="h-80 w-auto object-left rounded-xl"
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
  categories: {
    title: string;
  }[];
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

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage {
      asset->{
        url
      }
    }
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      title: "Artigo não encontrado",
      description: "Esse artigo não existe ou foi removido.",
    };
  }

  const firstParagraph = post.body.find((block: any) => block._type === "block" && block.children[0]?.text)?.children[0]?.text || "";

  return {
    title: `${post.title} - Byte Realm`,
    description: firstParagraph || "Artigo de tecnologia",
    openGraph: {
      title: post.title,
      description: firstParagraph || "Artigo de tecnologia",
      images: post.mainImage?.asset?.url || "",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: firstParagraph || "Artigo de tecnologia",
      images: post.mainImage?.asset?.url || "",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage {
      asset->{
        url
      },
      alt
    },
    "categories": categories[]->{ title },
    author->{
      name,
      image {
        asset->{
          url
        }
      }
    },
    publishedAt,
    slug
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return <h1>Artigo não encontrado</h1>;
  }

  return (
    <div className="p-4 md:mx-28">
      <div className="max-w-3xl m-auto">
        <header>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          <p className="gray-text">{new Date(post.publishedAt).toLocaleDateString("pt-BR")}</p>
          <div className="flex items-center mt-2">
            <Image src={post.author.image.asset.url} alt={post.author.name} height={35} width={35} className="rounded-full mr-2" />
            <p className="font-semibold">{post.author.name}</p>
          </div>
          <div className="relative mt-6 flex items-start blog-img-size">
            <Image
              width={600}
              height={300}
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              className="object-fit rounded-xl"
              priority
            />
          </div>
        </header>
        <main className="mt-6 post-body">
          <PortableText value={post.body} components={PortableTextComponents} />
        </main>
      </div>
      <div>
        <hr className="my-6" />
        <h3>Posts similares:</h3>
        <SimilarPosts currentPostId={post._id} currentCategory={post.categories[0].title} />
      </div>
    </div>
  );
}
