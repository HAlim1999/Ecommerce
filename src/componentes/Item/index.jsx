import React, {useContext}from 'react';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { CartContext } from '../../context/CartContext';
import './Item.css';



const Item = ({info}) =>{


    return(
        <Link to={`/detalle/${info.id}`}>

                <div className="product" key={info.id}>

                        <div className="product_info">
                                <p>{info.producto}</p>
                                <p className="product_price">
                                    <small>$</small>
                                    <strong>{info.precio}</strong>
                                </p>

                                <img src={info.imagen}/>

                                <div>
                                <p>Stock disponible: {info.stock}</p>
                                </div>
                            
                                <div className="product_rating">
                                    {Array(info.ranking).fill().map((_, i)=>(
                                    <p><StarIcon/></p>
                                    ))}               
                                </div>
                        </div>
                </div>
        
        
        </Link>

    );

    
};

export default Item;