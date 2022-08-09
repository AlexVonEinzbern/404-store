import React from "react";
import { makeStyles, Button } from "@material-ui/core";


const useStyle2 = makeStyles(() => ({

    contTarProd: {
        width: '100%',
        margin: '0',
        overflow: 'hidden',
        margin: '0',
        padding: '0'

    },
    imgTarProd: {

        margin: '0',
        padding: '0',
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        transition: '0.2s',
        transform: 'scale(1.05)',
        "&:hover": {
            transform: 'scale(1.2)'
        },

        contImg: {

            overflow: 'hidden',
            width: '100%',

            margin: '0',
            padding: '0',

        },

    },
    contTexeProd: {
        margin: '0',
        padding: '0',
        position: 'relative',
        display: 'flex',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',

    },

    txtProd: {
        position: 'relative',
        padding: '20px 20px',
        margin: '0',
        height: '20%'

    },

    nombre: {
        fontWeight: 'bold',
        textTransform: 'lowercase',
        "&:first-letter": {
            textTransform: 'uppercase'
        }

    },

    categoria: {
        opacity: '0.7',
        textTransform: 'lowercase',
        "&:first-letter": {
            textTransform: 'uppercase'
        }
    }

}))



export const TarjetaProducto = (props) => {

    const classes = useStyle2();

    return (
        <div className={classes.contTarProd}>

            
                <div className={classes.contImg}>
                    <img src={require(`../../img/Product-images${props.producto.img_path}`)} className={classes.imgTarProd} alt='hey' />
                </div>
           
            <div className={classes.contTexeProd}>

                <div className={classes.txtProd}>
                    <div variant="h4" color="initial" className={classes.nombre}>  {props.producto.name_producto}  </div>
                    <div variant="h4" color="initial" className={classes.categoria}> {props.producto.subcategoria_producto + ' para ' + props.producto.genero_producto}</div>
                </div>

                <div variant="h4" color="initial" className={classes.txtProd}> {props.producto.precio_producto}</div>

            </div>

        </div>

    )
}