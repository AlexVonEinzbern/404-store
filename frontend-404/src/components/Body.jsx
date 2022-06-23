import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Banner } from "./Banner";
import { TarjetaProducto } from "./TarjetaProducto";
import { SeparadorCompra, SeparadorTexto } from "./Separador";
import  productos from './productos.json'
import { Carril } from "./CarrilProductos";

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
                subtitulo='panita lleve lo que necesite, no se asare, aqui le fiamos y le cobramos cuando petro diga'></SeparadorCompra>
                <Carril cantidad='2' genero='hombre' titulo='Hombres'></Carril>
                <Carril cantidad='3' genero='mujer' titulo='Mujeres'></Carril>

                <SeparadorTexto 
                titulo="POR AQUI HAY MAS ROPITA BRO"
                subtitulo='panita lleve lo que necesite, no se asare, aqui le fiamos y le cobramos cuando petro diga'></SeparadorTexto>


                <Banner genero='Mujer'></Banner>

            </div>

        </div>
    )
}