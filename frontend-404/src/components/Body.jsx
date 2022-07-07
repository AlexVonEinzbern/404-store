import React from "react";
import { makeStyles} from "@material-ui/core";
import { Banner } from "./Banner";

import { SeparadorCompra, SeparadorTexto } from "./Separador";

import { Carril } from "./CarrilCategorias";
import { PresentacionCategoria, PresentacionGenero, PresentacionProducto, PresentacionSubcategoria } from "./Presentacion";

const useStyle = makeStyles((theme) => ({

    division: {
        backgroundColor: '#eee',
        height: '64px',
        display: 'flex'
    },

    aviso: {


        margin: 'auto',
        width: 'auto',

    },


    cont: {
        margin: '96px 48px'
    },

    tituloBanner: {
        fontSize: '36px'
    },
    perro:{


    }

}))


export const Body = () => {

    const classes = useStyle();

    return (

        <div className={classes.cont}>



            <div className={classes.body}>



      
                
                <Banner genero='Mujer'></Banner>

                <SeparadorCompra
                    titulo="ROPA PARA TODA LA FMILIA"
                    subtitulo='panita lleve lo que necesite, no se asare, aqui le fiamos y le cobramos cuando petro diga'>
                 </SeparadorCompra>

                {/* <Carril cantidad='4' genero='MUJER' titulo='Mujeres'></Carril> */}

                <SeparadorTexto
                    titulo="POR AQUI HAY MAS ROPITA BRO"
                    subtitulo='panita lleve lo que necesite, no se asare, aqui le fiamos y le cobramos cuando petro diga'>
                        </SeparadorTexto>  
                 <Banner genero='Hombre'></Banner>

                <PresentacionGenero genero='HOMBRE'></PresentacionGenero>
                <PresentacionGenero genero='MUJER'></PresentacionGenero> 

               <PresentacionCategoria
                    genero='HOMBRE'
                    idCategoria='RopaInterior'
                ></PresentacionCategoria>

                <PresentacionCategoria
                    genero='MUJER'
                    subtitulo='Lleva lo mejor en Ropa para Estar afuera'
                    idCategoria='RopaExterior'
                ></PresentacionCategoria>

                {/* <PresentacionSubcategoria genero='MUJER' subCategoria='medias'></PresentacionSubcategoria>
                <PresentacionSubcategoria genero='MUJER' subCategoria='camisas'></PresentacionSubcategoria>   */}



            </div>

        </div>
    )
}