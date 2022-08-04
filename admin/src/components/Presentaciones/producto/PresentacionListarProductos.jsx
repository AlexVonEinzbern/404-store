import React from "react";


import { makeStyles } from "@material-ui/core"
import { ItemProducto } from "./ItemProducto";
import productosJson from '../../ProductosJson.json'
import { width } from "@mui/system";
import { Cabecera } from "../Cabecera";


const useStyles = makeStyles((theme) => ({

    cont: {
        position: 'reñative',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'roboto',
        width: '100%',
        margin: '4px',
        fontSize: '30px',
        textTransform: 'uppercase',
        fontWeight: 'bold',
 


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
        paddingLeft:'20px',
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
    return (

        <div>

                        
        
        
        <Cabecera>


        </Cabecera>

            <div className={classes.lista}>
                {productosJson.map(producto => {
                    return (

                        <ItemProducto
                            nombre={producto.name_producto}
                            categoria={producto.categoria_producto}
                            subcategoria={producto.subcategoria_producto}
                            talla={producto.talla_producto}
                            genero={producto.genero_producto}
                            stock={producto.stock_producto}
                            precio={producto.precio_producto}
                            urlImg={producto.img_path}>
                        </ItemProducto>
                    )
                })
                }
            </div>


        </div>



    )
}

