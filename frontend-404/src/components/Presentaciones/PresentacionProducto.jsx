


import React from "react";
import { IconButton } from "@material-ui/core";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import { useCart } from "react-use-cart";



const useStyles3 = makeStyles((theme) => ({

    imgProd: {
        width: '80%',
        display:'flex',
        
        overflow:'hidden'

    },

    imgTarProd: {
        width: '100%',
        
        
        
    },

    lateralDerecho: {

        width: '40%',

        display: 'flex',
        flexDirection: 'column',
        margin: '0px 0px 0px 48px'


    },
    cont: {

        display: 'flex',
        margin: '144px 96px '
    },
    info: {


    },

    nombre: {
        fontSize: '24px',
        "&:first-letter": {
            textTransform: 'uppercase'

        },
       
        margin:'0'

    },


    subcategoria: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.6)',
        textTransform:'lowercase'
    },

    tallas: {

        display: 'flex',
        width:'50%',
        justifyContent:'space-around',
        margin:'0 auto'    
    
    },
    tallas_boton: {
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '50px',
        margin: '8px',
       
        width:'36px',
        height:'36px',
        fontSize:'16px'
    },

    imgTarProdMins:{
        display:'flex',
        flexDirection:'column',
    
        width:'25%',
    },
    imgTar:{
        width:'100%'
    },
    btnFavorito:{
        width:'100%',
        
    },
    btnCarrito:{
        width:'100%',
        backgroundColor:'#000',
        color:'#fff',
        margin:'20px  0 16px 0'

    },
    precio:{

    }
}))

export const PresentacionProducto = (props) => {


    const {addItem,totalItems,items,totalUniqueItems,emptyCart }=useCart()
    const classes = useStyles3()

    return (

        <div className={classes.cont}>

            <div className={classes.imgProd}>

                
                <div className={classes.imgTarProdMins}>
                    <img src={require(`../../img/Product-images${props.producto.img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../../img/Product-images${props.producto.img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../../img/Product-images${props.producto.img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                </div>

                <div className={classes.imgTarProd}>
                    <img src={require(`../../img/Product-images${props.producto.img_path}`)} className={classes.imgTar}  alt='hey' />
                </div>

            </div>

            <div className={classes.lateralDerecho}>

                <div className={classes.info}>
                    <p className={classes.nombre}>
                    {props.producto.name_producto}
                    </p>

                    <p className={classes.subcategoria}>
                        {props.producto.subcategoria_producto} para {props.producto.genero_producto}
                    </p>

                    <p className={classes.precio}>
                        ${props.producto.precio_producto}
                    </p>

                    <p>
                        selecciona tu talla
                    </p>
                   
                </div>

                <div className={classes.tallas}>
                    
                    <IconButton className={classes.tallas_boton} size='small'>
                        SM
                    </IconButton>
                    <IconButton className={classes.tallas_boton} size='small'>
                        S
                    </IconButton>
                    <IconButton className={classes.tallas_boton}size='small'>
                        M
                    </IconButton >
                    <IconButton className={classes.tallas_boton} size='small'>
                        L
                    </IconButton>

                </div>

                <Button className={classes.btnCarrito}  onClick={()=>{ 
                    
                    const productoAEnviar=props.producto
                    productoAEnviar.id=props.producto.id_producto
                    productoAEnviar.price=props.producto.precio_producto

                    addItem(productoAEnviar)
                    console.log(totalItems)
                    console.log(items)


                    
                    
                    }}>
                    añadir al carrito
                </Button>

                <Button className={classes.btnFavorito} color='secondary' variant="outlined">
                    favorito
                </Button>

                <div>
                        <p>
                            <b>
                            Descripcion: 
                            </b>
                        </p>

                        <p>         
                            {props.producto.descripcion_producto}
                        </p>
                    </div>

            </div>

        </div>
    )

}