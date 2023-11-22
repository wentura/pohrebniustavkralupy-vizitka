import BannerPhone from "./components/bannerPhone";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import "./globals.css";
import "./style.css";
export const metadata = {
  title: "Pohřební ústav Cibulka, Kralupy nad Vltavou",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container font-obsah bg-modra mx-auto">
        {/* <Header klass="transparent" /> */}
        <Hero />
        <BannerPhone />
        {/* {children} */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
