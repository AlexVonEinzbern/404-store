import React from "react";
import { Grid } from "@material-ui/core";
import { TarjetaCategoria, TarjetaProducto, TarjetaSubcategoria } from "./Tarjetas";
import productos from './productos2.json'
import { SeparadorTexto } from "./Separador";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "./todasLasCategorias";
import { useState } from "react";
import productosJson from './ProductosJson.json'




const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 0'

    },


}))

const PresentacionGenero = (props) => {

    const elegirGenero = () => {

        let indiceGenero = 0

        if (props.genero == 'HOMBRE') {
            indiceGenero = 0
            return indiceGenero
        }

        if (props.genero == 'MUJER') {
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

                            <Grid item md={6}>
                                <TarjetaCategoria
                                    cat={categoria.nombre}
                                    genero={props.genero}
                                    categoria={categoria.id}
                                >
                                </TarjetaCategoria>
                            </Grid>)
                    })}
            </Grid>
        </div>
    )
}

const PresentacionCategoria = (props) => {

    const classes = useStyles()

    const subCategorias = todasLasCategorias
    const categoria = ''


    const elegirCategoria = () => {

        let categoriaElegida = {}


        if (props.genero == 'HOMBRE') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[0][cat].id == props.idCategoria) {
                    categoriaElegida = {

                        sub: subCategorias[0][cat].categorias,
                        nombrCategoria: subCategorias[0][cat].nombre
                    }
                    return categoriaElegida
                }
            }

        }

        if (props.genero == 'MUJER') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[1][cat].id == props.idCategoria) {
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
                            <Grid item md={6}>
                                <TarjetaSubcategoria
                                    genero={props.genero}
                                    idCategoria={props.idCategoria}
                                    subcategoria={subcat}
                                    nombre={subcat}
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

const PresentacionSubcategoria = (props) => {

    const classes = useStyles()

    const elegirProductos = () => {
        const prod = []
        for (let i = 0; i < productosJson.length; i++) {

            if (productosJson[i].genero_producto == props.genero && productosJson[i].subcategoria_producto == props.subCategoria)
                prod.push(productosJson[i])
        }
        return prod
    }

    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={props.subCategoria + " para " + props.genero} 
                subtitulo={props.subtitulo}></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    elegirProductos().map((producto) => {

                        return (
                            <Grid item md={3}>
                                <TarjetaProducto nombre={producto.name_producto} precio={producto.precio_producto} categoria={producto.subcategoria_producto+' para '+ producto.genero_producto}></TarjetaProducto>

                            </Grid>

                        )




                    })
                }




            </Grid>
        </div>
    )
}

export { PresentacionGenero, PresentacionCategoria, PresentacionSubcategoria }