"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { link } from "fs";

const Navbar = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const navLinks = [
		{ href: "/", label: "Inicio" },
		{ href: "/productos", label: "Productos" },
		{ href: "/nosotros", label: "Nosotros" },
		{ href: "/contacto", label: "Contacto" },
	];

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const controlNavbarVisibility = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY > lastScrollY && currentScrollY > 100) {
				setIsVisible(false); // Scroll down
			} else {
				setIsVisible(true); // Scroll up
			}

			lastScrollY = currentScrollY;
		};
		window.addEventListener("scroll", controlNavbarVisibility);
		return () => window.removeEventListener("scroll", controlNavbarVisibility);
	}, []);

	

	return (
		<>
			{/* ========== HEADER ========== */}
			<header className="  flex flex-wrap lg:justify-start lg:flex-nowrap z-50 w-full py-7">
				<nav
					className={` relative max-w-7xl w-full flex flex-wrap lg:grid lg:grid-cols-12 basis-full items-center px-4 md:px-6 lg:px-8 mx-auto ${
						isVisible ? "translate-y-0" : "translate-y-full"
					} `}
				>
					<div className="lg:col-span-3 flex items-center 	 ">
						{/* Logo */}
						<Link
							className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80 border "
							href="/"
							aria-label="Go to homepage"
						>
							<div className="text-center justify-center align-middle content-center"></div>

							<svg></svg>
						</Link>
						{/* End Logo */}

						<div className="ms-1 sm:ms-2"></div>
					</div>

					{/* Button Group */}

					<div className="flex items-center gap-x-1 lg:gap-x-2 ms-auto py-1 lg:ps-6 lg:order-3 lg:col-span-3">
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-lime-400 text-black hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 transition disabled:opacity-50 disabled:pointer-events-none"
						>
							<ShoppingCart />
						</button>

						<div className="lg:hidden ">
							<button
								type="button"
								className="hs-collapse-toggle size-9.5 flex justify-center items-center text-sm font-semibold rounded-xl border border-gray-200 text-black hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
								id="hs-navbar-hcail-collapse"
								aria-expanded="false"
								aria-controls="hs-navbar-hcail"
								aria-label="Toggle navigation"
								data-hs-collapse="#hs-navbar-hcail"
							>
								<svg
									className="hs-collapse-open:hidden shrink-0 size-4"
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
									className="hs-collapse-open:block hidden shrink-0 size-4"
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

					{/* Collapse */}
					<div
						id="hs-navbar-hcail"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block lg:w-auto lg:basis-auto lg:order-2 lg:col-span-6"
						aria-labelledby="hs-navbar-hcail-collapse"
					>
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0">
							{navLinks.map((link) => (
								<div
									key={link.href}
									className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:justify-center lg:items-center lg:gap-y-0 lg:gap-x-7 lg:mt-0"
								>
									<Link
										className={` relative inline-block text-black focus:outline-hidden before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 transition-colors  ${
											pathname === link.href
												? "border-b-2 border-lime-400 hover:border-black transition-colors text-lime-400 hover:text-black"
												: ""
										}`}
										key={link.href}
										href={link.href}
									>
										{link.label}
									</Link>
								</div>
							))}
						</div>
					</div>
					{/* End Collapse */}
				</nav>
			</header>
			{/* ========== END HEADER ========== */}
		</>
	);
};

export default Navbar;
