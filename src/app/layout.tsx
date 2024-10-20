import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";

export const metadata: Metadata = {
  title: "Byte Realm - Home",
  description:
    "Bem vindo ao portal de tecnologia da internet, aqui você vê as tendências, notícias e tudo que precisa sobre o mundo tecnológico.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <SanityContextProvider>
        <body className="mt-24">
          <Header />
          {children}
        </body>
      </SanityContextProvider>
    </html>
  );
}
