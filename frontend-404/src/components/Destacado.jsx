import React from "react";
import '../styles/Destacado.css'
//import {Box,Grid} from '@material-ui/core'


const Destacado = (props) =>{

    return(
        <div className="contenedorDestacado">

                <div className="ContenedorImagen">
                    <img className="imagen" src={require(`../imagenesProductos/destacados/${props.genero}/${props.categoria}${props.genero}.png`)} alt="imagen" />
                </div>
                <div className="ContenedorNombreCategoria">
                    <p className="nombreCategoria"> {props.categoria} {props.genero}</p>
                </div>

        </div>
    ) 
}

export default Destacado