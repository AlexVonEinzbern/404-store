import React from "react";
//import {AppBar,Toolbar,Typography} from '@material-ui/core';
import "../styles/NavBar.css"


function NavBar(){
    return(
        <div className="header">

            <nav className="nav">

                <ul className="nav-izq">
                    <li className="nav-item">
                        <a href="/" className="contenedor-logo" > 
                            <img src={require(`../imagenesProductos/logos/LogoCorp.png`)} alt="" className="logo"/>
                        </a>
                    </li>
                    <li className="barra-busqueda">
                        <input type="text" name="" id="" placeholder="Que esta buscando?" className="barra"/>
                            <img src={require('../imagenesProductos/logos/LogoLupa.png')} alt="" className="lupa" />
                    </li>
                </ul>
                
                <ul className="nav-der">
                    <li className="nav-item">

                        <a href="/#" className="contenedor-login">
                            <img src={require('../imagenesProductos/logos/LogoLogin.png')} alt="" className="logo-login"/>

                            <p>
                                Iniciar sesion
                            </p>

                        </a>
                    </li>


                    <li className="nav-item">
                        <a href="/#" >
                            <img src={require('../imagenesProductos/logos/LogoCarrito.png')} alt="" className="logo-carrito"/>
                        </a>
                    </li>
                </ul>

            </nav>
            
        </div>
    )
}
export default NavBar