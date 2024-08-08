import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Header from "../components/header/header.js";
import Footer from "../components/footer/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunshine Coast Burger Co.",
  description: "Delicious made-to-order burgers, fresh local ingredients, two locations on the beautiful Sunshine Coast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Burgers, Sunshine Coast BC, Restaurants, Burger Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}