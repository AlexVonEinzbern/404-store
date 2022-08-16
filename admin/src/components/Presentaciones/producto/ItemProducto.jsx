import React from "react";


import { makeStyles } from "@material-ui/core";
import { margin } from "@mui/system";

const useStyles=makeStyles((theme)=> ({

    cont:{
        display:'flex',
        alignItems:'center',
        fontFamily:'roboto',
        width:'100%',
        margin:'1px',
        fontSize:'20px',
        backgroundColor:'#fff'
    },
    imagen:{
        width:'48px',
        height:'48px',
        marginRight:'20px',
        border:'1px solid #ab003c',
        objectFit:'cover',
        

    },
    element:{
        height:'48px',
        display:'flex',
        alignItems:'center',
        paddingLeft:'20px',
        borderLeft:'1px solid #bbb',
        minWidth:'11%',
        maxWidth:'11%',
        
        margin:0,
        fontFamily:'roboto',
        fontSize:'20px',
        overflow:'hidden',
        background:'white'
    
    }
}))

export const ItemProducto = (props)=>{


    const classes=useStyles();
    return (


        <div className={classes.cont}>  
            <div >
            <img src={props.producto.url_imagen_producto} alt="" className={classes.imagen}/>
            </div>         
            
            <div className={classes.element}>{props.producto.name_producto}</div>
            <div className={classes.element}>{props.producto.genero_producto}</div>
            <div className={classes.element}>{props.producto.categoria_producto}</div>
            <div className={classes.element}>{props.producto.subcategoria_producto}</div>
            <div className={classes.element}>{props.producto.talla_producto}</div>
            <div className={classes.element}>{props.producto.stock_producto}</div>
            <div className={classes.element}>${props.producto.precio_producto}</div>
            <select name="" id="" className={classes.element}>
                <option value="">Gestionar</option>
                <option value="">Editar</option>
                <option value="">Eliminar</option>
            </select>
        </div>
    )
}