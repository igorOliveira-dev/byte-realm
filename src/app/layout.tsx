import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";
import Footer from "./components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Html lang="pt-br">
      <Head>
        {/* varificação do Google Search Console */}
        <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}');
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
