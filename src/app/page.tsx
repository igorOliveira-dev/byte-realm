import { fetchPosts } from "./utils/fetchPost";
import MainScreen from "./components/MainScreen";
import NewsletterBanner from "./components/NewsletterBanner";
import MainPosts from "./components/MainPosts";

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
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
}

export const metadata = {
  title: "Home - Byte Realm",
  description: "Bem vindo ao Byte Realm, o seu portal de tecnologia que você encontra tudo sobre o mundo tecnológico!",
  alternates: {
    canonical: "https://byterealm.vercel.app",
  },
};

export default async function Home() {
  const posts: Post[] = await fetchPosts();

  return (
    <main className="p-4 md:p-12">
      <MainScreen />
      <NewsletterBanner />
      <section className="my-6 min-w-full">
        <h2>Principais posts:</h2>
        <MainPosts posts={posts} currentPostId={"/"} />
      </section>
    </main>
  );
}
