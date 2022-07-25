import React from "react";


import { makeStyles } from "@material-ui/core";
import { margin } from "@mui/system";

const useStyles=makeStyles((theme)=> ({

    cont:{
        display:'flex',
        alignItems:'center',
        fontFamily:'roboto',
        width:'100%',
        margin:'4px',
        fontSize:'20px'
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
        borderLeft:'1px solid #000',
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
            <img src={require(`../../img/Product-images${props.urlImg}`)} alt="" className={classes.imagen}/>
            </div>         
            
            <div className={classes.element}>{props.nombre}</div>
            <div className={classes.element}>{props.genero}</div>
            <div className={classes.element}>{props.categoria}</div>
            <div className={classes.element}>{props.subcategoria}</div>
            <div className={classes.element}>{props.talla}</div>
            <div className={classes.element}>{props.stock}</div>
            <div className={classes.element}>{props.precio}</div>
            <select name="" id="" className={classes.element}>
                <option value="">Gestionar</option>
                <option value="">Editar</option>
                <option value="">Eliminar</option>
            </select>
        </div>
    )
}