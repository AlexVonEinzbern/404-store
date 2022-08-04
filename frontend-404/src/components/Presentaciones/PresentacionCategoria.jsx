

import React from "react";
import { Grid } from "@material-ui/core";
import { TarjetaSubcategoria } from "../Tarjetas/TarjetaSubcategoria";

import { SeparadorTexto } from "../Separadores/SeparadorTexto";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "../Navegacion/Categorias/todasLasCategorias"



const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 48px'

    },
}))



export const PresentacionCategoria = (props) => {

    const classes = useStyles()

    const subCategorias = todasLasCategorias


    const elegirCategoria = () => {

        let categoriaElegida = {}


        if (props.genero === 'HOMBRE') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[0][cat].id === props.idCategoria) {
                    categoriaElegida = {

                        sub: subCategorias[0][cat].categorias,
                        nombrCategoria: subCategorias[0][cat].nombre
                    }
                    return categoriaElegida
                }
            }

        }

        if (props.genero === 'MUJER') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[1][cat].id === props.idCategoria) {
                    categoriaElegida = {

                        sub: subCategorias[1][cat].categorias,
                        nombrCategoria: subCategorias[1][cat].nombre
                    }

                    return categoriaElegida
                }
            }
        }
    }


    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={'TODO EN ' + elegirCategoria().nombrCategoria + " PARA " + props.genero}
                subtitulo={props.subtitulo}></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    elegirCategoria().sub.map((subcat) => {

                        return (
                            <Grid item md={6} key={subcat}>
                                <TarjetaSubcategoria
                                    genero={props.genero}
                                    idCategoria={props.idCategoria}
                                    subcategoria={subcat}
                                    nombre={subcat}
                                    key={subcat}
                                >
                                </TarjetaSubcategoria>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}