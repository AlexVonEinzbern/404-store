
import React from "react";


import { makeStyles } from "@material-ui/core"
import { width } from "@mui/system";
import { Cabecera } from "../Cabecera";
import axios from "axios"; 
import productos from '../../ProductosJson.json'
import { ItemProducto } from "./ItemProducto";
const URI = process.env.REACT_APP_URI;  // se conecta con el backend 


const useStyles = makeStyles((theme) => ({


    cont: {
        backgroundColor:'#eee',

      
 


    },
    imagen: {
        width: '48px',
        height: '48px',
        marginRight: '20px',
        border: '1px solid ab003c',
        objectFit: 'cover',

    },
    element: {
        height:'48px',
        display:'flex',
        alignItems:'center',
        // paddingLeft:'20px',
        borderLeft:'1px solid #000',
        minWidth:'11%',
        maxWidth:'11%',
        
        margin:0,
        fontFamily:'roboto',
        fontSize:'20px',
        overflow:'hidden',
    },
    cabecera: {
        display:'flex',
    
        alignItems:'flex-end',

        background:'#fff',
        top:'96px',
        left:0,
        position:'fixed'
        
        
        
        
    },
    lista:{
       
    },
    opciones:{
        position:'absolute',
        top:'300px',
        display:'flex',
        width:'100%'
        
    }
}))




export const PresentacionListarProductos = () => {


    const classes = useStyles();
	//let productos=axios.get(URI+) 
    return (

        <div className={classes.cont}>
        <Cabecera>

        </Cabecera>
        {productos.map(prod=>{
            return(
                <ItemProducto producto={prod}></ItemProducto>
            )
        })}

        </div>

    )
}
