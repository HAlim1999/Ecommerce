import React, {Fragment, useState, useEffect} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import fondo from '../imgIcon/fondo.webp'

export const ItemListContainer = () =>{

    const [data, setData]=useState([]);

    const { categoriaId } = useParams();

    useEffect(() =>{

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        
        if(categoriaId){
            const queryFilter = query(queryCollection, where('categoria','==',categoriaId))
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data()}))));

        }else{
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(producto => ({id:producto.id, ...producto.data()}))));  
        }
    },[categoriaId]);




    return(
        <Fragment>
        <div className='home'>

                    <div className='home_container'>
                        
                        <img src={fondo} alt="" className="home_image"/> 

                        <div className='promo'>
                                <div className='card'>
                                    <CreditCardIcon/>
                                    <h1>Tarjeta de Credito</h1>
                                    <p>Ver promociones bancarias</p>
                                </div>

                                <div className='card'>
                                    <CreditCardIcon/>
                                    <h1>Tarjeta de Debito</h1>
                                    <p>Ver mas</p>
                                </div>

                                <div className='card'>
                                    <HandshakeIcon/>
                                    <h1>Cuotas sin tarjeta</h1>
                                    <p>+ Info</p>
                                </div>
                        </div> 
                                
                        <div>
                            <ItemList data={data}></ItemList>
                        </div>
                    </div>
        </div>

        </Fragment>
        
    

    )
}
export default ItemListContainer;