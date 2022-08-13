import './App.css';
import React from 'react';
import { NavBar } from './componentes/NavBar';
import {ItemListContainer} from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
    <div>
        <Router>
        <CartProvider>
              <NavBar></NavBar>
                  <Routes>
                    <Route path='/' element={<ItemListContainer></ItemListContainer>}/>
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer></ItemListContainer>}/>
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer></ItemDetailContainer>}/>
                    <Route path='/cart' element={<Cart/>}/>
                  </Routes>
              </CartProvider>
        </Router>
    </div>
  );
}

export default App;
