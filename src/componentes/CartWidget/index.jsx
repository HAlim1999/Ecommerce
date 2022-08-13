import React, {Fragment} from 'react';
import {useCartContext} from '../../context/CartContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css';

export const CartWidget = () =>{
const {totalProductos} = useCartContext();

    return (
        <Fragment>
            <div className="CartWidget">        
                <AddShoppingCartIcon></AddShoppingCartIcon>
                <span>{totalProductos() || ''}</span>
            </div>
        </Fragment>
    )
}
export default CartWidget;