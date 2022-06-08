import React from "react";
import Panel from "./Panel";
import "../styles/BannerNuevaColeccion.css"
import BannerDestacados from "./BannerDestacados"

export function BannerNuevaColecion(props) {

    return (
        <div className="ContenedorNuevaColeccion">
            <div>
                <Panel genero="Hombre"></Panel>
            </div>
            <p className="TextoNuevaColeccion">
                NUEVA COLECCION
            </p>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Calzado" 
                                        NavInferior        categoria2="Camiseta" 
                                        categoria3="Deportivo" 
                                        categoria4="Interior" >
            </BannerDestacados>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Calzado" 
                                        NavInferior        categoria2="Camiseta" 
                                        categoria3="Deportivo" 
                                        categoria4="Interior" >
            </BannerDestacados>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Calzado" 
                                        NavInferior        categoria2="Camiseta" 
                                        categoria3="Deportivo" 
                                        categoria4="Interior" >
            </BannerDestacados>

              <BannerDestacados genero= {props.genero}
                                        categoria1="Calzado" 
                                        NavInferior        categoria2="Camiseta" 
                                        categoria3="Deportivo" 
                                        categoria4="Interior" >
            </BannerDestacados>


        </div>
        

        
    )
}