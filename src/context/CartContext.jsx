import React, {useState, useContext} from 'react';

const CartContext = React.createContext('');

export const useCartContext = ()=> useContext(CartContext);

const CartProvider =({children})=>{

    const [Cart, setCart] = useState([]);

    const addProduct=(item, quantity) => {
        if(isInCart(item.id)){
            setCart(Cart.map(producto => {
                return producto.id === item.id ? {...producto, quantity: producto.quantity + quantity} : producto}));
        }
        else{
            setCart([...Cart, {...item, quantity}])
        }
    }
    console.log(Cart);
    const ClearCart = () => setCart([]);

    const isInCart = (id) => Cart.find(producto => producto.id === id) ? true : false;

    const removeProducto = (id)=> setCart(Cart.filter(producto => producto.id !== id));

    const totalPrice = () => {
        return Cart.reduce((prev, act)=> prev + act.quantity*act.precio,0);
    }

    const totalProductos = () => Cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity,0);



    return(
        <CartContext.Provider value={{
            addProduct,
            ClearCart,
            isInCart,
            removeProducto,
            totalPrice,
            totalProductos,
            Cart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;