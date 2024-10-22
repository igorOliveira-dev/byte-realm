import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SanityContextProvider>
        <body className="mt-24">
          <Head>
            <title>Byte Realm - Home</title>
            <meta
              name="description"
              content="Bem vindo ao portal de tecnologia da internet, aqui você vê as tendências, notícias e tudo que precisa sobre o mundo tecnológico."
            />
            <link rel="canonical" href="https://byterealm.vercel.app/" />
          </Head>
          <Header />
          {children}
        </body>
      </SanityContextProvider>
    </html>
  );
}
