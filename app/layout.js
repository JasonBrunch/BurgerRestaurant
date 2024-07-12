import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/header/header.js";
import Footer from "../components/footer/Footer.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sunshine Coast Burger Co.",
  description: "Delicious Burgers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body className={inter.className}>
        <Header/>
        {children}
       <Footer/>
        </body>
    </html>
  );
}
