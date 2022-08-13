import React,{useState,useEffect}from 'react';
import './ItemCount.css';

export const ItemCount = ({inicial, stock, onAdd}) =>{
    const [count, setCount]=useState(parseInt(inicial));

    const decrementar = () =>{
        setCount(count-1);
    }

    const incrementar = () =>{
        setCount(count+1);
    }
    useEffect(() => {
        setCount(parseInt(inicial));
    }, [inicial]);

    return(
        <div className='counter'>
            <button disabled={count <= 1} onClick={decrementar}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={incrementar}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;