import React from "react";
import Panel from "./Panel";
import "../styles/BannerNuevaColeccion.css"
import BannerDestacados from "./BannerDestacados"

export function BannerNuevaColecionMujer(props) {

    return (
        <div className="ContenedorNuevaColeccion">
            <div>
                <Panel genero="Hombre"></Panel>
            </div>
            <p className="TextoNuevaColeccion">
                NUEVA COLECCION
            </p>

            
            <BannerDestacados genero= {props.genero}
                                        categoria1="Interior" 
                                        NavInferior        categoria2="Deportivo" 
                                        categoria3="Camiseta" 
                                        categoria4="Accesorio" >
            </BannerDestacados>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Interior" 
                                        NavInferior        categoria2="Deportivo" 
                                        categoria3="Camiseta" 
                                        categoria4="Accesorio" >
            </BannerDestacados>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Interior" 
                                        NavInferior        categoria2="Deportivo" 
                                        categoria3="Camiseta" 
                                        categoria4="Accesorio" >
            </BannerDestacados>

            <BannerDestacados genero= {props.genero}
                                        categoria1="Interior" 
                                        NavInferior        categoria2="Deportivo" 
                                        categoria3="Camiseta" 
                                        categoria4="Accesorio" >
            </BannerDestacados>

            


        </div>
        

        
    )
}