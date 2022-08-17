import React from "react";


import { makeStyles, Button } from "@material-ui/core";
import { margin } from "@mui/system";
import { useState } from "react";
import { ItemProducto } from "./producto/ItemProducto";
import axios from "axios";
import categorias from "./categorias.json"
import { useEffect } from "react";
import subcategorias from "../Presentaciones/categorias.json"
const URI = process.env.REACT_APP_URI;  // se conecta con el backend 

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
        position: 'fixed',
        top: '-10px',
        left: -3,
        marginBottom: '20px',
        backgroundColor: 'white',
        height: '244px',
        alignItems: 'flex-end',
        paddingBottom: '40px',
        zIndex: '0',
        boxShadow: '0px -5px 20px 5px rgba(0, 0, 0, 0.3)',

        borderRadius: '20px'

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
        borderLeft: '1px solid #bbb',
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
        margin: 'auto',
        width: 'auto',
        left: 0,
        right: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'






    },




    opcion: {
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',

        minWidth: '15%',
        maxWidth: '15%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',

        backgroundColor: '#fff',
        border: 'none',
        borderTop: '1px solid #bbb',
        borderBottom: '1px solid #bbb',
        "&:first-child": {
            borderLeft: '1px solid black',
            borderRadius: '5px  0  0 5px '
        },



    },
    boton: {
        width: '200px',
        marginLeft: '50px',
        height: '48px',
        marginBottom: 0,
        marginTop: 0



    },
    last: {

        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',

        minWidth: '15%',
        maxWidth: '15%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',

        backgroundColor: '#fff',
        border: 'none',
        borderTop: '1px solid #bbb',
        borderBottom: '1px solid #bbb',
        borderRight: '1px solid #bbb',
        borderRadius: '0  5px  5px 0'

    }
}))


const Cabecera = () => {
    const [productosJson, setProductosJson] = React.useState([])//productos filtrados

    const [filtroGenero, setFiltroGenero] = React.useState("%")
    const [filtroClase, setFiltroClase] = React.useState("%")
    const [filtroSubClase, setFiltroSubclase] = React.useState("%")
    const [filtroTalla, setFiltroTalla] = React.useState("%")
    const forceUpdate = React.useState()[1].bind(null, {}) // see NOTE above const


    const classes = useStyles();


    useEffect(() => {

    }, [])



    const establecerFiltros = () => {

        localStorage.setItem("filtros", JSON.stringify([filtroGenero, filtroClase, filtroSubClase, filtroTalla]))
        window.location.replace('');

    }

    
    


    return (

        <>
            <div className={classes.cont}>

                <div className={classes.opciones}>

                    <select
                        name={filtroGenero}
                        id=""
                        className={classes.opcion}
                        value={filtroGenero}
                        onChange={(e) => {
                            setFiltroGenero(e.target.value)
                        }}>

                        <option value="">Genero</option>
                        <option value="HOMBRE">Hombre</option>
                        <option value="MUJER">Mujer</option>
                    </select>
                    <select name=""
                        id=""
                        className={classes.opcion}
                        value={filtroClase}
                        onChange={(e) => {
                            setFiltroClase(e.target.value)
                        }}>
                        <option value="">Categoria</option>
                        {["accesorios", "ropaDeportiva", "ropaExterior", "ropaInterior"].map(
                            u => {
                                return <option value={u}> {u}</option>;
                            }
                        )
                        }
                    </select>
                    <select name=""
                        id=""
                        className={classes.opcion}
                        value={filtroSubClase}
                        onChange={(e) => {
                            setFiltroSubclase(e.target.value)
                        }}>
                        <option value="">Subcategoria</option>

                        {
                            

                        }

                    </select>
                    <select
                        name=""
                        id=""
                        className={classes.last}
                        value={filtroTalla}
                        onChange={(e) => {
                            setFiltroTalla(e.target.value)
                        }
                        }>
                        <option value="" className={classes.last}>Talla</option>

                        {["XS", "S", "M", "L", "XL"].map(
                            u => {
                                return <option value={u}>{u}</option>
                            }
                        )
                        }
                    </select>

                    <Button color='secondary' variant='outlined' onClick={establecerFiltros} className={classes.boton}> Filtrar</Button>
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
                <div className={classes.element}>Administrar</div>
            </div>

        </>

    )
}
export { Cabecera }