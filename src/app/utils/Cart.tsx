'use server'
import { useState } from 'react'

interface products {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
}

const Cart = ({ id, name, description, imageUrl, price }: products) => {

    const [cart, setCart] = useState<products[]>([])

    const addToCart = (product: products) => {
        setCart((prev) => [...prev, product])
    }

    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    


	return 
    (<>

    
    </>)
};


export default Cart