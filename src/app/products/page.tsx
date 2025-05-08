"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import NumberFlow, { useCanAnimate } from "@number-flow/react";
import { motion, MotionConfig } from "motion/react";
import clsx from "clsx/lite";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}


const productos:Product[] = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 100,
    imageUrl: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 200,
    imageUrl: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    price: 300,
    imageUrl: '/images/product3.jpg',
  },

]



const Products = () => {
  return (
		<section className="py-12 lg:py-20">
			<div className="max-w-5xl mx-auto px-4 sm:px-6">
				<h2 className="text-3xl font-bold text-center mb-8">
					Nuestros Productos
				</h2>
				<p className="text-center text-gray-600 mb-12">
					Descubre nuestra selección de productos de alta calidad.
				</p>
				{/* Grid de productos */}

				{productos.map((producto) => (
					<div
						key={producto.id}
						className="bg-white shadow-md rounded-lg p-6 mb-10 flex flex-col items-center "
					>
						<img
							src={producto.imageUrl}
							alt={producto.name}
							className="w-full h-48 object-cover rounded-t-lg mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2">{producto.name}</h3>
						<p className="text-gray-600 mb-4">{producto.description}</p>
						<p className="text-lg font-bold text-green-600">
							S./{producto.price}
						</p>
					</div>
				))}

				{/* Grid de productos */}
        
			</div>
		</section>
	);
}

export default Products