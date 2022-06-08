import React from "react";
import Panel from "./Panel"
import BannerDestacados from "./BannerDestacados"

export function Apartado(props) {

    return (
        <div>
            <Panel genero="hombre">
            </Panel>



            <BannerDestacados genero="Hombre"
                categoria1="Calzado"
                NavInferior categoria2="Camiseta"
                categoria3="Deportivo"
                categoria4="Interior" >
            </BannerDestacados>

        </div>
    )
}