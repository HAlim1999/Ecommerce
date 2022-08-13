import React from 'react';
import './ItemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({producto})=>{
    
const {removeProducto} = useCartContext();

    return(
        <div className="item-cart">
            <img src={producto.imagen}/>
            <div>
                <p>Titulo: {producto.producto}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Precio: {producto.precio}</p>
                <p>SubTotal: {producto.quantity*producto.precio}</p>
                <button onClick={()=> removeProducto(producto.id)}>Eliminar</button>

            </div>       
        </div>
    )
}

export default ItemCart;