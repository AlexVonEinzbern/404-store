import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { padding, width } from '@mui/system'
import { useCart } from 'react-use-cart'
const usestyles = makeStyles(theme => ({

    cont: {

        width: '100%',
        height: '200px',
        display: 'flex',
        // margin: '10px 0',
        padding: '20px 0',
        borderBottom:'2px solid #bbb'
    },
    images: {

        width: '100%',
        height: '100%',
        objectFit: 'cover'

    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        width: '75%',
        justifyContent: 'space-between',
        paddingLeft: '30px'

    },
    contImagen: {

        minWidth: '25%',
        maxWidth: '25%',
        height: '100%',

    },

    principal: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontSize: '20px'
    },
    infoCompra: {
        display: 'flex',
        width: '100%',
        gap: '5%',
        textTransform: 'uppercase',
        height: '30px',
        alignItems: 'center',
        overflow:'hidden'
    },
    secundaria: {
        display: 'flex',
        gap: '20px',
        textTransform: 'uppercase'
    },
    decripcion: {
        backgroundColor: 'white',
        height: '64px',
        overflow: 'hidden',
        textAlign: 'justify',
        fontWeight:'100'
    
    },
    talla: {
        display: 'flex',
        gap: '10px',

    },
    cantidad: {
        display: 'flex',
        gap: '10px'
    },
    boton: {
        backgroundColor: '#ccc',
        color: '#000',
        borderRadius: '50px',  
        width:'36px',
        height:'36px',
        fontSize:'16px',
        border:'6px solid #fff',
        fontWeight:'bold'

    },
    botones:{
        display:'flex',
        width:'100%',
        marginLeft:'',
        
    },




}))


function TajetaItemCarrito(props) {

    const classes = usestyles()
    const {items,addItem,removeItem,updateItemQuantity}=useCart()
    return (
        <div className={classes.cont}>

            <div className={classes.contImagen}>

                <img src={props.producto.url_imagen_producto} alt="" className={classes.images} />
            </div>


            <div className={classes.info}>

                <div className={classes.principal}>
                    <p className={classes.nombre}>  <b>{props.producto.name_producto}</b> </p>
                    <p className={classes.precio}>  <b>$ {props.producto.precio_producto}</b> </p>
                </div>

                <div className={classes.decripcion}>
                    {props.producto.descripcion_producto}
                </div>

                <div className={classes.secundaria}>
                    <p>
                        {props.producto.categoria_producto}
                    </p>
                    <p>/</p>
                    <p>
                        {props.producto.subcategoria_producto}
                    </p>
                </div>

                <div className={classes.infoCompra}>
                    <div className={classes.talla}> <p>talla:</p> <p>{props.producto.talla_producto}</p></div>
                    <div className={classes.cantidad}> <p>cantidad:</p> <p>{props.producto.quantity}</p> </div>
                    <div className={classes.botones}>
                        <IconButton s
                        ize='small' 
                        color='secondary' 
                        variant='outlined' 
                        className={classes.boton} 
                        onClick={()=>{
                            updateItemQuantity(props.producto.id,props.producto.quantity+1)
                        }}
                        
                        >+</IconButton>
                        <IconButton 
                        size='small' 
                        variant='outlined' 
                        className={classes.boton}
                        onClick={()=>{
                            updateItemQuantity(props.producto.id,props.producto.quantity-1)
                        }}
                        >-</IconButton></div>

                </div>

            </div>

        </div>
    )
}

export default TajetaItemCarrito
