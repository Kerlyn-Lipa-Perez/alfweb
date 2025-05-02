
import React from "react";

const ServicesSection = () => {
  return (
		<section className="bg-white py-16 px-6 text-center w-full mt-10">
			<div className="max-w-4xl mx-auto">
				<h2 className="text-lime-400 text-sm font-semibold mb-2">Servicios</h2>
				<h1 className="text-4xl font-bold text-gray-900 mb-6 ">
					Soluciones Integrales para Cultivo de Alfalfa
				</h1>
				<p className="text-gray-700 mb-12">
					Nos especializamos en la venta mayorista y minorista de alfalfa de
					alta calidad, ofreciendo un producto fresco, confiable y con entregas
					eficientes. Atendemos las necesidades de productores, comerciantes y
					clientes finales, asegurando un servicio personalizado y competitivo.
				</p>

				<div className="flex flex-wrap justify-center items-stretch gap-8">
					<div className="flex flex-col items-center text-center w-64">
						<div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
							📦
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px]">
							Venta Mayorista de Alfalfa
						</h3>
						<p className="text-gray-600">
							Grandes cantidades para distribuidores y productores a precios
							competitivos.
						</p>
					</div>

					<div className="flex flex-col items-center text-center w-64 ">
						<div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
							✅
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px]">
							Venta Minorista de Alfalfa
						</h3>
						<p className="text-gray-600">
							Ideal para pequeños negocios, granjas o consumidores directos.
						</p>
					</div>

					<div className="flex flex-col items-center text-center w-64">
						<div className="w-12 h-12 bg-lime-400 rounded-full flex items-center justify-center mb-4">
							🚚
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-4 min-h-[56px]">
							Red de Distribución Confiable
						</h3>
						<p className="text-gray-600">
							Entrega rápida y segura para que recibas tu pedido a tiempo y en
							óptimas condiciones.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;