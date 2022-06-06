import React from "react";
import '../styles/Navegacion.css'
import URI from "../config.js"

function Navegacion (props) {
    return (
        <div className="ContenedorNav">

            <div className="contenedorNavSuperior">
                <div className="ContenedorLogoTienda">
                    <img src={require('../imagenesProductos/logos/LogoCorp.png')} alt="" className="LogoTienda" />
                </div>

                <div className="ContenedorBarraBusqueda">
                    <input type="text" placeholder="Que estas buscando?" name="" className="BarraBusqueda" />
                </div>

                <div className="ContenedorIconoLupa">
                    <img src={require('../imagenesProductos/logos/LogoLupa.png')} alt="" className="IconoLupa"/>                      
                </div>

                <div className="ContenedorIconoLogin">
                    <img src={require('../imagenesProductos/logos/LogoLogin.png')} alt="" className="LogoLogin"/>
                </div>

                <div className="IniciarSesion">
                    {props.textoLogin}
                </div>

                <div className="ContenedorCarrito">
                    <img src={require('../imagenesProductos/logos/LogoCarrito.png')} alt="" className="LogoCarrito"/>
                </div>
            </div>

            <div className="contenedorNavInferior">

                <div className="ContenedorCategorias">
                    <ul className="Categorias">
                        <li >
                            <a href="" className="categoria1">{props.categoria1}</a>
                        </li>
                        <li>
                            <a href="" className="categoria2">{props.categoria2}</a> 
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navegacion
