import React, { Fragment, useState } from 'react';
import {useCartContext} from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css'
import ItemCart from '../ItemCart';
import {getFirestore, addDoc, collection, updateDoc, doc} from 'firebase/firestore';
import { Update } from '@mui/icons-material';


export const Cart = () =>{
    const [datosEnviados, setdatosEnviados]=useState(false);
    
    const {Cart, totalPrice,ClearCart} = useCartContext();

    
    
    const update =(id, stock) =>{
        const db = getFirestore();
        updateDoc(doc(db, 'productos',id), {stock})
    };
    
    const order = {
        buyer:{
            name: 'John',
            email: 'john@example.com',
            phone:  '123-456-1234',
            address: 'Street Address',
        },
        items: Cart.map(producto => ({id: producto.id, name: producto.producto, price: producto.precio, quantity: producto.quantity})),
            total: totalPrice(),
        }
        
        // update(producto.id ,producto.stock-producto.quantity))

    

    const handleClick=()=>{
        const db = getFirestore();
        const orderColletion = collection(db, 'orders')
        addDoc(orderColletion, order).then(({quantity})=> console.log(quantity));
        // console.log(update);
        Cart.map(producto => ({quantity: producto.quantity},
            update(producto.id ,producto.stock-producto.quantity)));
            setdatosEnviados(true);
            ClearCart();
    }

    if(Cart.length === 0) {
        return(
            <div>
                <p>No hay elementos en el carrito</p>
                <Link to='/'>Hacer Compras</Link>
            </div>
        )
          }
          else{
        
        return(
            <Fragment>
                <div className='InCart'>
                    {Cart.map(producto => <ItemCart key={producto.id} producto={producto}/>)}
                    <p>Total: { totalPrice() }</p>
                    {
                        datosEnviados
                        ?
                        <div>
                            <h1>Compra Finalizada!</h1>
                            <Link to='/'>
                            <button>INICIO</button></Link>
                        </div>


                        :
                        <button onClick={handleClick}>Emitir Compra</button>
                    }
                </div>
            </Fragment>
    
        )
    }

}

export default Cart;