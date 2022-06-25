import React from "react";
import { Grid } from "@material-ui/core";
import productos from './productos.json'
import { TarjetaProducto } from "./Tarjetas";
import { makeStyles } from "@material-ui/styles";


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


export const Carril = (props) => {

    const classes = useStyle()

    const elegirProductos = (cantidad) => {
        const subCategoria = []


        if (props.genero==='hombre') {

            for (let i = 0; i < cantidad; i++) {

                const producto = productos[0].Hombre[0].subcategorias[i]
                subCategoria.push(producto)
    
            }
            return subCategoria
            
        }

        if (props.genero==='mujer') {

            for (let i = 0; i < cantidad; i++) {

                const producto = productos[0].Mujer[0].subcategorias[i]
                subCategoria.push(producto)
    
            }
            return subCategoria
            
        } 

    }


    return (

        <Grid container spacing={2}>


            <Grid
                item
                md={12}
                className={classes.tituloBanner}
            >
                {props.titulo}

            </Grid>


            {elegirProductos(props.cantidad).map((producto) =>{


                return (
                    <Grid
                        item
                        md={12/props.cantidad}
                    >
                        <TarjetaProducto 
                        nombre={producto.productos[0].name_producto}
                        precio={producto.productos[0].precio_producto}
                        categoria={producto.nombreSubcategoria+" para "+props.genero}
                        ></TarjetaProducto>
                    </Grid>
                )

            })}


    

        </Grid>




    )
}