"use client";
import Link from "next/link";
import { useState, useEffect, startTransition } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { unstable_ViewTransition as ViewTransition } from "react";
import Cart from "./Cart";
import { useCart } from "../context/CartContext";

const Navbar = () => {
	const [navState, setNavState] = useState({
		visible: true,
		scrolled: false,
		lastScrollY: 0,
	});
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const pathname = usePathname();
	const { cart } = useCart();

	const navLinks = [
		{ href: "/", label: "Inicio" },
		{ href: "/products", label: "Productos" },
		{ href: "/preguntas-frecuentes", label: "Nosotros" },
		{ href: "/contact", label: "Contacto" },
	];

	useEffect(() => {
		const controlNavbar = () => {
			const currentScrollY = window.scrollY;

			// Determinar si se está haciendo scroll hacia arriba o abajo
			const isScrollingDown = currentScrollY > navState.lastScrollY;

			// Aplicar lógica de visibilidad
			if (isScrollingDown && currentScrollY > 80) {
				// Al hacer scroll hacia abajo más allá de 80px, ocultar la barra
				setNavState({
					visible: false,
					scrolled: currentScrollY > 20,
					lastScrollY: currentScrollY,
				});
			} else {
				// Al hacer scroll hacia arriba, mostrar la barra
				setNavState({
					visible: true,
					scrolled: currentScrollY > 20,
					lastScrollY: currentScrollY,
				});
			}
		};

		window.addEventListener("scroll", controlNavbar);
		return () => window.removeEventListener("scroll", controlNavbar);
	}, [navState.lastScrollY]);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			<div className="h-24"></div>

			{/* ========== HEADER ========== */}
			<header
				className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out ${
					navState.visible ? "translate-y-0" : "-translate-y-full"
				} ${
					navState.scrolled
						? "bg-white/95 shadow-md py-4"
						: "bg-transparent py-7"
				}`}
			>
				<nav className="relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto">
					<div className="lg:col-span-3 flex items-center">
						{/* Logo */}
						<Link
							className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
							href="/"
							aria-label="Logo"
						>
							<div className="text-center justify-center align-middle content-center">
								{/* Logo content */}
								Logo
							</div>
						</Link>
						{/* End Logo */}

						<div className="ms-1 sm:ms-2"></div>
					</div>

					{/* Button Group */}
					<div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none relative"
							onClick={() => setIsCartOpen((v) => !v)}
							aria-label="Abrir carrito"
						>
							<span className="relative">
								<ShoppingCart />
								{cart.length > 0 && (
									<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-white shadow z-10">
										{cart.reduce((acc, item) => acc + item.quantity, 0)}
									</span>
								)}
							</span>
						</button>

						<div className="lg:hidden pl-5">
							<button
								type="button"
								className="psize-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
								onClick={toggleMobileMenu}
								aria-expanded={isMobileMenuOpen ? "true" : "false"}
								aria-label="Toggle navigation"
							>
								<svg
									className={`${
										isMobileMenuOpen ? "hidden" : "block"
									} shrink-0 size-4`}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="3" x2="21" y1="6" y2="6" />
									<line x1="3" x2="21" y1="12" y2="12" />
									<line x1="3" x2="21" y1="18" y2="18" />
								</svg>
								<svg
									className={`${
										isMobileMenuOpen ? "block" : "hidden"
									} shrink-0 size-4`}
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							</button>
						</div>
					</div>
					{/* End Button Group */}

					{/* Navigation Links */}
					<div
						className={`${
							isMobileMenuOpen ? "block" : "hidden"
						} lg:block w-full lg:w-auto lg:order-2 lg:col-span-6 transition-all duration-300`}
					>
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									className={`relative inline-block text-black focus:outline-hidden transition-colors ${
										pathname === link.href
											? "border-b-2 border-lime-400 hover:border-black text-lime-400 hover:text-black"
											: "hover:text-lime-400"
									}`}
									href={link.href}
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>
					{/* End Navigation Links */}
				</nav>
				<Cart open={isCartOpen} onClose={() => setIsCartOpen(false)} />
			</header>
			{/* ========== END HEADER ========== */}
		</>
	);
};

export default Navbar;
