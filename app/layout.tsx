import "./globals.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <Hero />
        <main>{children}</main>
        <main>{children}</main>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
