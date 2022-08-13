import React, {useRef, useState}from 'react';
import { useCartContext } from '../../context/CartContext';
import './ItemDetail.css';
import ItemCount from '../ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data})=> {

    const Imagen = useRef();
    const [goToCart, setgoToCart] = useState(false);
    const {addProduct} =useCartContext();


    function cambio(e){
        Imagen.current.src = e.target.src;
      }

    const onAdd = (quantity) =>{  
        setgoToCart(true);
        addProduct(data, quantity);
      };


    return(


        <div className="container2" key={data.id}>

        <div className="imgLateral">
            <img src={data.frente} alt="" id="" onMouseOver={cambio}/>
            <img src={data.dorso} alt="" id="" onMouseOver={cambio}/>
            <img src={data.frentedorso} alt="" id="" onMouseOver={cambio}/>
            <img src={data.lateral} alt="" id="" onMouseOver={cambio}/>
        </div>

        <div className="imgPrincipal" id="hero">
            <img ref={Imagen} src={data.frente} alt=""/>
        </div>

        <div className="detalle">
            <h1>{data.titulo}</h1>
            <p  className="precio">${data.precio}</p>
            <p className="datos">{data.cuotas}</p>
            <p className="datos">Ver los medios de pago</p>
            <p className="datos">Color: {data.color}</p>
            <p className="datos">{data.caracteristicas}
            </p>
            
            <p className="datos">Stock Disponible</p>
            <p>{data.stock}</p>
                 {
                     goToCart
                   ? <Link to='/cart'><button className='endBuy'>Terminar Compra</button></Link>
                   :<ItemCount inicial={data.valorInicial} stock={data.stock} onAdd={onAdd} />
                }

        </div>
    
</div>





    );
}

export default ItemDetail;