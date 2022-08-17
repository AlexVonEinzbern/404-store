import React from "react";


import { makeStyles } from "@material-ui/core";
import { margin } from "@mui/system";
import { ContactSupportOutlined } from "@material-ui/icons";
import { Navigate } from "react-router-dom";
import { productoCurrent } from "../../../prodductoCurrent";




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


const editarUnProducto=(producto)=>{

    const productoCur=producto
    localStorage.setItem('productoCurrent',JSON.stringify(productoCur))
    window.location.replace("/Admin/Gestionar-productos/Editar")
}



const eliminarUnProducto=(producto)=>{

    const productoCur=producto
    localStorage.setItem('productoCurrent',JSON.stringify(productoCur))
    window.location.replace("/Admin/Gestionar-productos/eliminar")
}

export const ItemProducto = (props)=>{


    const classes=useStyles();
    return (


        <div className={classes.cont}>  
            <div >
            <img src={''} alt="" className={classes.imagen}/>
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
                
                
                <option onClick={e=>{
                    editarUnProducto(props.producto)
                }} value="">
                    Editar
                    </option>


               



                <option value="" onClick={e=>{
                    eliminarUnProducto(props.producto)
                }} >Eliminar</option>
            </select>
        </div>
    )
}