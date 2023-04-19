import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return(
            cart.find((producto) => producto.id === id) ? true : false
        )
        }

        const updateStock = (id, cantidad) => {
            const product = cart.find((product) => product.id === id);
            if (product) {
                product.cantidad += cantidad;
                if(product.cantidad > product.stock) product.cantidad = product.stock;
            }
        };

        const addToCart = (item) => {
            if (isInCart(item.id)) {
                updateStock(item.id, item.cantidad);
            }
            setCart(isInCart(item.id) ? [...cart] : [...cart, item]);
        };

    const emptyCart = () => {
        setCart([])
    }

    const removeItemCart = (id) => {
        setCart(cart.filter((producto) => producto.id !== id))
    }

    const cartWidgetTotal = () => {
        return (cart.reduce((acc, producto) => acc += producto.cantidad, 0))
    }

    const totalCartPrice = () => {
        return (cart.reduce((acc, producto) => acc += producto.price * producto.cantidad, 0))
    }

    return(
        <CartContext.Provider value={{
            addToCart,
            emptyCart,
            removeItemCart, 
            cartWidgetTotal, 
            totalCartPrice,
            cart
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider