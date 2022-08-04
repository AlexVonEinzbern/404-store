import React from "react";


import { makeStyles,Button } from "@material-ui/core";
import { margin } from "@mui/system";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({

    cont: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'roboto',
        width: '100%',
        margin: '4px',

        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'sticky',
        top: '0px',
        marginBottom: '20px',
        backgroundColor: 'white',
        height: '244px',
        alignItems: 'flex-end',
        paddingBottom: '40px',
        zIndex: '0',


    },
    imagen: {
        width: '48px',
        height: '48px',
        marginRight: '20px',
        border: '1px solid #ab003c',
        objectFit: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'


    },
    element: {
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        borderLeft: '1px solid #000',
        minWidth: '11%',
        maxWidth: '11%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',
        overflow: 'hidden',

    },
    fondo: {
        backgroundColor: '#fff',
        minWidth: '100vw',
        maxWidth: '100vw',
        left: '0',
        top: '40px',

        zIndex: '-1',
        height: '244px',
        position: 'fixed'
    },
    opciones: {
        position: 'fixed',
        top: '120px',
        display: 'flex',
 
        margin:'auto',
        width:'100%',
        

    },
    opcion:{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',

        minWidth: '15%',
        maxWidth: '15%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',
      
        backgroundColor:'#fff',
        border:'none',
        borderTop:'1px solid #000',
        borderBottom:'1px solid #000'

    },
    boton:{
        width:'200px',
        marginLeft:'48px',
       
    
   
    }
}))

export const Cabecera = (props) => {

    
    const classes = useStyles();
    return (

        <>

            <div className={classes.cont}>

                <div className={classes.opciones}>

                <select name="" id="" className={classes.opcion}>
                        <option value="">Genero</option>
                        <option value="">Hombre</option>
                        <option value="">Mujer</option>
                    </select>
                    <select name="" id="" className={classes.opcion}>
                        <option value="">Categoria</option>
                        <option value="">Editar</option>
                        <option value="">Eliminar</option>
                    </select>
                    <select name="" id="" className={classes.opcion}>
                        <option value="">Subcategoria</option>
                        <option value="">Editar</option>
                        <option value="">Eliminar</option>
                    </select>
                    <select name="" id="" className={classes.opcion}>
                        <option value="">Talla</option>
                        <option value="">Editar</option>
                        <option value="">Eliminar</option>
                    </select>
  
                    <Button color='secondary' variant='outlined' className={classes.boton}> Filtrar</Button>
                </div>



                <div >
                    <div className={classes.imagen} > img  </div>
                </div>

                <div className={classes.element}>Nombre</div>
                <div className={classes.element}>Categoria</div>
                <div className={classes.element}>Subcategoria</div>
                <div className={classes.element}>Talla</div>
                <div className={classes.element}>Genero</div>
                <div className={classes.element}>stock_producto</div>
                <div className={classes.element}>precio</div>
                <div className={classes.element}>accion</div>
                <div className={classes.fondo}></div>



            </div>


        </>

    )
}