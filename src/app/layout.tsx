import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";
import Footer from "./components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Html lang="pt-br">
      <Head>
        {/* google search console verification */}
        <meta name="google-site-verification" content="epEjaq2OfjMrzM1lk7w6rN8etvZPDFC7M6oHsXbYwXQ" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MTGLZV5VH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9MTGLZV5VH');
            `,
          }}
        />
      </Head>
      <SanityContextProvider>
        <body className="mt-24">
          <Header />
          {children}
          <Footer />
          <NextScript />
        </body>
      </SanityContextProvider>
    </Html>
  );
}
