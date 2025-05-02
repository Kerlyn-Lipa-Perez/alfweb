import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Hero() {

  return (
		<>
			<div className="  pb-10  text-center">
				<h2 className="font-bold text-6xl pb-10 ">
					VENTA MAYORISTA Y MINORISTA <br /> DE ALFALFA DE CALIDAD
				</h2>
				<Link
					className="bg-lime-400 hover:bg-lime-500 focus:outline-hidden focus:bg-lime-500 transition disabled:opacity-50 py-2 px-4 rounded text-2xl "
					href=""
				>
					Comprar ahora
				</Link>
			</div>
		</>
	);
}

export default Hero