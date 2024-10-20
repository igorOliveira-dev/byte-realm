import MainPosts from "./components/MainPosts";

export default function Home() {
  return (
    <main className="p-4 md:p-12">
      <h1 className="animated-gradient">
        Byte Realm <span className="no-necessary">- O seu portal de tecnologia</span>
      </h1>
      <h2 className="typewriter">Aqui você encontra as ultimas tendências do mundo tecnológico.</h2>
      <section className="my-6 min-w-full">
        <h2>Principais posts:</h2>
        <MainPosts />
      </section>
    </main>
  );
}
