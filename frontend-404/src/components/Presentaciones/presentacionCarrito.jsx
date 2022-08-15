import { makeStyles } from '@material-ui/core'
import { display, margin } from '@mui/system'
import React from 'react'
//import productos from '../ProductosJson.json'
import {Button} from '@material-ui/core'
import TajetaItemCarrito from '../Tarjetas/tajetaItemCarrito'
import { useCart } from 'react-use-cart'
import { useState, useEffect } from 'react';

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend

const usestyles = makeStyles(theme => ({


    cont: {
        marginTop: '144px',
        margin: 'auto',
        width: '90%',
        minWidth: '670px',
        maxWidth:'1024px',

    },
    mensaje: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        height: '100px',
        border: '2px solid #ddd',
        position:'sticky',
        top:'92px',
        zIndex:'1'
    },
    titulo: {

        fontSize: '24px',
        width: '100%',
        backgroundColor: 'white'
    },
    tarjetas: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        width:'70%'
    },
    tarjeta: {

    },
    cuerpo:{
        width:'100%',
        display:'flex'
    },

    resumen:{
        width:'30%',
        marginLeft:'40px',
        height:'100vh',
        position:'sticky',
        top:'196px',
        borderLeft:'2px solid #ccc',
        paddingLeft:'40px'
    },
    itemResumen:{
        display:'flex',
        justifyContent:'space-between',
        borderBottom:'2px solid #ccc',
        gap:'20px'
    },
    contenidoResumen:{
        marginTop:'50px'
    },
    pagar:{
        width:'100%',
    },
    textoResumen:{
        fontSize:'24px'
    },
    gastos:{
        textAlign:'left'
    }


}))


function PresentacionCarrito() {
    const classes = usestyles()

    const [productosJson, setProductosJson] = useState([]);

    const nameProductos = async () => {
        const res = await fetch(`${URI}obtenerProductos`);
        const data = await res.json();
        setProductosJson(data);
    }

    useEffect(() => {
        nameProductos();
    }, [])

    const {items,addItem,removeItem,updateItemQuantity,cartTotal}=useCart()

    return (
        <div className={classes.cont}>
        <div className={classes.mensaje}>
        envios gratis en compras mayores a una chichigua
        </div>

        <div>
        <p className={classes.titulo}>
        Carrito
        </p>

        <div className={classes.cuerpo}>
        <div className={classes.tarjetas}>
        {
            items.map((producto,index )=> {
                return (

                    <TajetaItemCarrito className={classes.tarjeta}

                    producto={producto}
                    key={index}
                    >
                    </TajetaItemCarrito>
                    )
            })
        }
        </div>

        <div className={classes.resumen}>


        <div className={classes.contenidoResumen}>

        <div className={classes.textoResumen}> <p>Resumen</p> </div>
        <div className={classes.itemResumen}> <p>Subtotal</p> <p>${cartTotal}</p></div>
        <div className={classes.itemResumen}> <p className={classes.gastos}>Gastos de envío y gestión estimados</p> <p>$0</p></div>
        <div className={classes.itemResumen}> <p>Total</p> <p>${cartTotal}</p></div>
        <Button className={classes.pagar} color='secondary' variant='contained'>Pagar</Button>

        </div>



        </div>
        </div>




        </div>
        </div>
        )
}

export default PresentacionCarrito
