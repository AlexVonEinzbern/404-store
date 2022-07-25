


import React from "react";
import { IconButton } from "@material-ui/core";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";


import productosJson from '../ProductosJson.json'



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
        color: 'rgba(0,0,0,0.6)'
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


    const classes = useStyles3()

    return (

        <div className={classes.cont}>

            <div className={classes.imgProd}>

                
                <div className={classes.imgTarProdMins}>
                    <img src={require(`../../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                </div>

                <div className={classes.imgTarProd}>
                    <img src={require(`../../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTar}  alt='hey' />
                </div>

            </div>

            <div className={classes.lateralDerecho}>

                <div className={classes.info}>
                    <p className={classes.nombre}>
                        nombre aqui deberia ir el nombre del productod
                    </p>

                    <p className={classes.subcategoria}>
                        subcategoria - genero
                    </p>

                    <p className={classes.precio}>
                        $35.000
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

                <Button className={classes.btnCarrito}>
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
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam nemo, accusantium facilis non debitis assumenda quis repellat esse suscipit impedit ducimus, eum aspernatur ipsum soluta at quaerat modi voluptatum? Quasi!
                            Accusantium cumque illo sapiente sunt! Beatae amet soluta vero totam delectus. Facere, voluptatem maxime libero aperiam sed iste corporis totam doloremque placeat nam dolorem non rem laborum labore optio soluta!
                            Autem laboriosam, voluptate eum, corporis doloribus quidem qui ut cumque, saepe id odio minima amet totam atque quae veritatis provident dicta expedita officia hic. Deleniti itaque aut unde maiores veritatis?

                        </p>
                    </div>

            </div>

        </div>
    )

}