import React from "react";
import '../styles/Destacado.css'
function Destacado(props){

    return(
        <div className="contenedorDestacado">
            <img className="imagen" src={require(`../imagenesProductos/destacados/${props.genero}/${props.categoria}${props.genero}.png`)} alt="imagen" />
            <p className="nombreCategoria">
                {props.categoria} {props.genero}
            </p>
        </div>
    )
}

export default Destacado