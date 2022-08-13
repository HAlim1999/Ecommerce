import React, { useState, useEffect } from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail'
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

export const ItemDetailContainer = ()=> {

    const [data, setdata]=useState({});
    const {detalleId} = useParams();

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos',detalleId);
        getDoc(queryDoc).then(res => setdata({id:res.id, ...res.data()}))
    },[]);


    return(
        <ItemDetail data ={data}/>
    );
}

export default ItemDetailContainer;