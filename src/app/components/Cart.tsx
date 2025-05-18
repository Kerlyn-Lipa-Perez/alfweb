import { useId, useState } from "react";
import { Eraser, Link2OffIcon, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import clsx from "clsx/lite";
import Link from "next/link";

interface products {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

interface CartProps {
	open: boolean;
	onClose: () => void;
}

const NUMERO = process.env.NEXT_PUBLIC_NUMERO || "";

const Cart = ({ open, onClose }: CartProps) => {
	const { cart, removeFromCart, clearCart } = useCart();

	const cartCheckBoxId = useId()
	

	return (
		<>
			

			<input id={cartCheckBoxId} type="checkbox" hidden />

			<aside
				className={clsx(
					"fixed top-20 right-4 w-80 bg-white shadow-lg rounded-xl p-4 z-50 transition-all duration-300",
					open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
				)}
				style={{ minHeight: 200 }}
			>
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-lg font-bold">Carrito</h2>
					<button onClick={onClose} className="text-gray-500 hover:text-black">✕</button>
				</div>
				{cart.length === 0 ? (
					<p className="text-gray-500 text-center">El carrito está vacío</p>
				) : (
					<ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto mb-4">
						{cart.map((item) => (
							<li key={item.id} className="flex items-center gap-3 py-2">
								<img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded" />
								<div className="flex-1">
									<strong className="block">{item.name}</strong>
									<span className="text-sm text-gray-500">S./{item.price} x {item.quantity}</span>
								</div>
								<button
									className="text-red-500 hover:text-red-700 text-xs"
									onClick={() => removeFromCart(item.id)}
									aria-label="Eliminar"
								>
									Eliminar
								</button>
							</li>
						))}
					</ul>
				)}
				<div className="flex justify-between items-center mt-14">
					<button
						className="flex items-center gap-1 text-sm text-gray-600 hover:text-black"
						onClick={clearCart}
						disabled={cart.length === 0}
					>
						<Eraser size={16} /> Vaciar
					</button>
					<span className="font-bold text-lime-500">
						Total: S./{cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
					</span>
				</div>
				{/* Botón WhatsApp */}
				{cart.length > 0 && (
					<Link
						href={`https://wa.me/51${123456789}?text=${encodeURIComponent(
							'¡Hola! Quiero comprar:\n' +
							cart.map(item => `• ${item.name} x${item.quantity} (S./${item.price * item.quantity})`).join('\n') +
							`\nTotal: S./${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}`
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-4 w-full inline-block text-center bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-4 rounded-xl transition"
					>
						Enviar pedido por WhatsApp
					</Link>
				)}
			</aside>

		</>
	)
};

export default Cart;
