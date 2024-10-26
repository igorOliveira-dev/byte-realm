import "./globals.css";
import Header from "./components/Header";
import { SanityContextProvider } from "./contexts/sanityContext";
import Footer from "./components/Footer";

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
          <Footer />
        </body>
      </SanityContextProvider>
    </html>
  );
}
