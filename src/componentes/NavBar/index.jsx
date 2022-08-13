import React from 'react';
import './NavBar.css';
import logo from '../imgIcon/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';


export const NavBar = () =>{
    return(
        
        <div className="container">
                <div className="header">
                    <NavLink to='/'><img src={logo} className="header_logo"/></NavLink>

                    <div className="header_search">
                        <input className="header_searchInput" type="text" placeholder='Buscar productos'/>
                        <SearchIcon></SearchIcon>
                    </div>

                    <div className="header_nav">

                            <div className="header_options">
                                <span className="header_optionsLineTwo">Crea tu cuenta</span>
                            </div>

                            <div className="header_options">
                                <span className="header_optionsLineTwo">Ingresá</span>
                            </div>

                            <div className="header_options">
                                <span className="header_optionsLineTwo">Mis compras</span>
                            </div>

                            <div className="header_optionBasket">
                                <NavLink to='/cart'><CartWidget></CartWidget></NavLink>
                            </div>
                    </div>  
                </div>
                {/*Prueba segunda linea*/}
                

                <div className="header">
                    <div className="header_nav">
                        <div className="header_options2">
                            <NavLink to='/categoria/tecnologia'><span className="header_optionsLineTwo">Tecnología</span></NavLink>
                        </div>

                        <div className="header_options2">
                            <NavLink to='/categoria/videoJuegos'><span className="header_optionsLineTwo">Video Juegos</span></NavLink>
                        </div>

                        <div className="header_options2">
                            <NavLink to='/categoria/herramientas'><span className="header_optionsLineTwo">Herramientas</span></NavLink>
                        </div>
                    </div>  
                </div>
        </div>
    )
}