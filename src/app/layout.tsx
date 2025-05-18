import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrelineScriptWrapper from "./components/PrelineScriptWrapper";
import { unstable_ViewTransition as ViewTransition } from "react";
import { CartProvider } from "./context/CartContext";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Alfalfa - Next.js",
	description: "Ven te alfalfa en Camana | Más de 10 años de experiencia",
	keywords: "Camana, alfalfa, comprar alfalfa, alfalfa en Camana",
	authors: [
		{ name: "Kerlyn Lipa", url: "https://github.com/kerlyn-lipa-perez" },
	],
	creator: "Kerlyn Lipa",
	publisher: "KCI",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${poppins.className}`}>
				<CartProvider>
					<Navbar />
					<ViewTransition>{children}</ViewTransition>
					<PrelineScriptWrapper />
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
