
import React from "react";
import { Grid} from "@material-ui/core";
import { TarjetaProducto} from "../Tarjetas/TarjetaProducto.jsx";
import { useState, useEffect } from 'react';
import { SeparadorTexto } from "../Separadores/SeparadorTexto";
import { makeStyles } from "@material-ui/styles";

//import productosJson from '../ProductosJson.json'

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend


const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 48px'

    },
    a:{
        color:'black',
        textDecoration:'none',
        '&:visited':{
          color:'black',
          textDecoration:'none',


      }

      

  },

}))


export const PresentacionSubcategoria = (props) => {

    const classes = useStyles()

    const [productosJson, setProductosJson] = useState([]);

    const nameProductos = async () => {
        const res = await fetch(`${URI}obtenerProductos`);
        const data = await res.json();
        setProductosJson(data);
    }

    useEffect(() => {
        nameProductos();
    }, [])

    const elegirProductos = () => {
        const prod = []
        for (let i = 0; i < productosJson.length; i++) {

            if (productosJson[i].genero_producto === props.genero && productosJson[i].subcategoria_producto === props.subCategoria)
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

                    <Grid item md={3} key={producto.id_producto}>
                    <a href={`/${producto.genero_producto}/${producto.categoria_producto}/${producto.subcategoria_producto}/producto-${producto.id_producto}`} className={classes.a} >
                    <TarjetaProducto
                    key={producto.id_producto}
                    producto={producto}
                    ></TarjetaProducto>
                    </a>
                    </Grid>

                    )
            })
        }
        </Grid>
        </div>
        )
}