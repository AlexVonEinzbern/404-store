import React from "react";
import Destacado from "./Destacado";
import "../styles/BannerDestacados.css";

import URI from "../config.js"

function BannerDestacados(props){
    return(
        <div className="ContenedorBannerDestacados">
            <Destacado className="destacado1" categoria={props.categoria1} genero={props.genero}></Destacado>
            <Destacado className="destacado2" categoria={props.categoria2} genero={props.genero}></Destacado>
            <Destacado className="destacado2" categoria={props.categoria3} genero={props.genero}></Destacado>
            <Destacado className="destacado4" categoria={props.categoria4} genero={props.genero}></Destacado>
        </div>
    )
}

export  default BannerDestacados