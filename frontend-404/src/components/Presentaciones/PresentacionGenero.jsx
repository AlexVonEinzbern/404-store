


import React from "react";
import { Grid} from "@material-ui/core";
import { TarjetaCategoria} from "../Tarjetas/TarjetaCategoria.jsx";

import { SeparadorTexto } from "../Separadores/SeparadorTexto.jsx";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "../Navegacion/Categorias/todasLasCategorias";




const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 48px'

    },
}))


export const PresentacionGenero = (props) => {

    const elegirGenero = () => {

        let indiceGenero = 0

        if (props.genero === 'HOMBRE') {
            indiceGenero = 0
            return indiceGenero
        }

        if (props.genero === 'MUJER') {
            indiceGenero = 1
            return indiceGenero
        }

    }

    const classes = useStyles()

    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={'TODO PARA ' + props.genero}
                subtitulo='LLeva el mejor regalo para papá'></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    todasLasCategorias[elegirGenero()].map((categoria) => {

                        return (

                            <Grid item md={6} key={categoria.id}>
                                <TarjetaCategoria
                                    cat={categoria.nombre}
                                    genero={props.genero}
                                    categoria={categoria.id}
                                    key={categoria.id + '1'}
                                >
                                </TarjetaCategoria>
                            </Grid>)
                    })}
            </Grid>
        </div>
    )
}
