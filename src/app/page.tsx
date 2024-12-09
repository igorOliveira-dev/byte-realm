import MainPosts from "./components/MainPosts";
import MainScreen from "./components/MainScreen";
import NewsletterBanner from "./components/NewsletterBanner";

export const metadata = {
  title: "Home - Byte Realm",
  description: "Bem vindo ao Byte Realm, o seu portal de tecnologia que você encontra tudo sobre o mundo tecnológico!",
  alternates: {
    canonical: "https://byterealm.vercel.app",
  },
};

export default function Home() {
  return (
    <main className="p-4 md:p-12">
      <MainScreen />
      <NewsletterBanner />
      <section className="my-6 min-w-full">
        <h2>Principais posts:</h2>
        <MainPosts currentPostId={"/"} />
      </section>
    </main>
  );
}
