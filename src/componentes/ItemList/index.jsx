import Item from '../Item';
import React from 'react';
import './ItemList.css';


const ItemList=({data =[]}) =>{

    return(
        <div className="containerItemList">
            {data.map(producto => <Item key={producto.id} info={producto}/>)}
        </div>
               
    )
}

export default ItemList;