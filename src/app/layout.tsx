import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";
import Footer from "./components/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        <meta name="google-site-verification" content="epEjaq2OfjMrzM1lk7w6rN8etvZPDFC7M6oHsXbYwXQ" />
      </Head>
      <SanityContextProvider>
        <body className="mt-24">
          <Header />
          {children}
          <Footer />
        </body>
      </SanityContextProvider>
    </html>
  );
}
