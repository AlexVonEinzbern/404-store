import React from "react";
import { Grid } from "@material-ui/core";
import { TarjetaCategoria,TarjetaSubcategoria } from "./Tarjetas";
import productos from './productos2.json'
import { SeparadorTexto } from "./Separador";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "./todasLasCategorias";
import { useState } from "react";




const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 0'

    }

}))


const PresentacionGenero = (props) => {

 
    const classes = useStyles()
    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={'TODO PARA '+props.genero}
                subtitulo='LLeva el mejor regalo para papá'></SeparadorTexto>
            <Grid container spacing={2}>
                
                {
                todasLasCategorias[props.indice].map((categoria) => {

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

    const categorias=todasLasCategorias

    const elegirCategoria=()=>{

        let categoriaElegida=[]


        if (props.genero=='HOMBRE') {

            for (let cat = 0; categorias[0].length; cat++) {
            
                if (categorias[0][cat].id==props.idCategoria){
                    categoriaElegida=categorias[0][cat].categorias
                    return categoriaElegida
                }
            }
            
        }

        if (props.genero=='MUJER') {

            for (let cat = 0; categorias[0].length; cat++) {
            
                if (categorias[1][cat].id==props.idCategoria){
                    categoriaElegida=categorias[1][cat].categorias
                    return categoriaElegida
                }
            }
            
        }
        
    }


    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={props.titulo}
                subtitulo={props.subtitulo}></SeparadorTexto>
            <Grid container spacing={2}>

                
                           
            {
                elegirCategoria().map((subcat)=>{

                    return(
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







export { PresentacionGenero, PresentacionCategoria}