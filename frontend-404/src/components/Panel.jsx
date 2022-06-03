import React from "react";
import '../styles/Panel.css'
function PanelHombres(props){

    return(
        <div className="ContenedorPanel">
            <img className="ImagenPanel" src={require(`../imagenesProductos/destacados/panel/panel${props.genero}.png`)} alt="" />
        </div>
    )
}
export default PanelHombres