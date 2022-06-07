import React from "react";
//import {Box,Grid} from '@material-ui/core'
import NavBar from "./NavBar";
import '../styles/Navegacion.css'

async function Navegacion (props) {

    const URI = process.env.REACT_APP_URI;
    
    const categoria1 = await fetch (`${URI}categoria1`);
    const categoria2 = await fetch (`${URI}categoria2`);


    return (
        <div className="ContenedorNav">


            <div className="contenedorNavSuperior">
                   <NavBar></NavBar>
            </div>

            <div className="contenedorNavInferior">

                <div className="ContenedorCategorias">
                    <ul className="Categorias">
                        <li >
                            <a href={categoria1} className="categoria1">{props.categoria1}</a>
                        </li>
                        <li>
                            <a href={categoria2} className="categoria2">{props.categoria2}</a> 
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Navegacion
