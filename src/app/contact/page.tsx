"use client";
import React from "react";
import GoogleMaps from "../components/Google-maps";

const DIRECCION_EMAIL =
	process.env.NEXT_PUBLIC_DIRECCION || "";
const NUMERO = process.env.NEXT_PUBLIC_NUMERO || "";

const markers = [
	{ lat: -16.620219, lng: -72.708549, title: "Mercado Don Alberto" },
];

function Contact() {
	return (
		<section className="py-12 lg:py-20">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				{/* Encabezado */}
				<div className="text-center mb-12 lg:mb-16">
					<h2 className="text-4xl font-normal text-black">Contacto</h2>
				</div>

				<div className="grid md:grid-cols-2 gap-12 lg:gap-16">
					
					<div className="flex flex-col justify-center space-y-12">
						{/* Dirección */}
						<div>
							<h3 className="text-xl font-semibold mb-6">Nuestra Dirección</h3>
							<div className="flex items-start">
								<div className="mr-4 mt-1">
									<svg
										className="w-5 h-5 text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
										<circle cx="12" cy="10" r="3"></circle>
									</svg>
								</div>
								<div>
									<p className="text-gray-600">Peru</p>
									<p className="text-black font-medium">
										Mercado Don Alberto
										<br />
										N°2
									</p>
								</div>
							</div>
						</div>

						{/* Contactos */}
						<div>
							<h3 className="text-xl font-semibold mb-6">Nuestros contactos</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Email */}
								<div className="flex items-start">
									<div className="mr-4 mt-1 flex-shrink-0">
										<svg
											className="w-5 h-5 text-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
											<path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
										</svg>
									</div>
									<div className="min-w-0 break-words">
										<p className="text-gray-600">Email</p>
										<a
											href={`mailto:${DIRECCION_EMAIL}`}
											className="text-black hover:text-black font-medium block"
										>
											<span className="border-b-2 border-lime-400 hover:border-black transition-colors inline-block break-all">
												{DIRECCION_EMAIL}
											</span>
										</a>
									</div>
								</div>

								{/* Número */}
								<div className="flex items-start">
									<div className="mr-4 mt-1 flex-shrink-0">
										<svg
											className="w-5 h-5 text-gray-500"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										</svg>
									</div>
									<div>
										<p className="text-gray-600">Numero</p>
										<a
											href={`https://wa.me/51${NUMERO}`}
											className="text-black hover:text-black font-medium"
										>
											<span className="border-b-2 border-lime-400 hover:border-black transition-colors">
												+51 {NUMERO}
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					
					<div className="w-full h-64 md:h-full">
						<div className="h-full w-full rounded-lg overflow-hidden">
							<GoogleMaps markers={markers} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
