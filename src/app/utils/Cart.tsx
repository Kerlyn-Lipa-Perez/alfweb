"use server";
import { useState } from "react";

interface products {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

const Cart = ({ id, name, description, imageUrl, price }: products) => {

    
	const [products, setProducts] = useState<products[]>([]);

	const addToCart = (product: products) => {
		setProducts((prev) => [...prev, product]);
	};

	const removeFromCart = (id: number) => {
		setProducts((prev) => prev.filter((item) => item.id !== id));
	};

	const clearCart = () => {
		setProducts([]);
	};

	return;
	(<>
		<div className="container mx-auto">
			<h1 className="text-3xl font-bold underline">Carrito</h1>
			<section>
				<div></div>
			</section>
		</div>
	</>
    )
};

export default Cart;
