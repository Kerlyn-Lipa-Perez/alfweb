import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  display: "swap",
});


export const metadata: Metadata = {
  title: "Alfalfa - Next.js",
  description: "Una pagina para comprar alfalfa en Camana",
  keywords:"Camana, alfalfa, comprar alfalfa, alfalfa en Camana",
  authors: [{"name": "Kerlyn Lipa", url: "https://github.com/kerlyn-lipa-perez" }],
  creator: "Kerlyn Lipa",
  publisher: "Kerlyn Lipa"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
         className={`${poppins.className}`}
      >
        <Navbar />
        {children}
        <PrelineScriptWrapper />
        <Footer />
      </body>
    </html>
  );
}
