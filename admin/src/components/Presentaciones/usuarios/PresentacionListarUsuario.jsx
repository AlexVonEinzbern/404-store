import React from "react";


import { makeStyles } from "@material-ui/core"
import { ItemProducto } from "./itemUsuario";
import productosJson from '../../ProductosJson.json'
import { width } from "@mui/system";
import { Cabecera } from "../Cabecera";


const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '100%',
        margin: '144px  auto',

    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin:'auto'
        

    },

    descripcion: {

        width: 'auto',
        height: '50%',
        resize: 'none'
    },

    imagenProd: {

        width: 'auto',
        height: '50%',
        resize: 'none'
    },

    titulo: {
        fontSize: '24px',
        fontFamily: 'roboto'
    },

    imagen: {

        marginTop: '10px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    cargarImagen: {
        width: '40%',
        height: '30px',
        color: 'gray',
        backgroundColor: '#fff'

    },
    ruta: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'roboto'
    },
    GuargarCambios: {
        marginTop: '20px',
        backgroundColor: '#000',
        color: '#fff',
        width: '50%',


    }, Descartar: {
        marginTop: '20px',

        color: '#000',
        width: '50%',

    },
    BarraLateral: {

        borderRight: '1px solid black',
        width:'20%'
    },
    busqueda: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    barraBusqueda: {

        width: 'auto',
        height: 'auto',
        resize: 'none'

    },
    buscar: {
        display: 'flex',
        gap: '20px'
    },
    botones: {
        display: 'flex'
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

