import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { TarjetaCategoria, TarjetaProducto, TarjetaSubcategoria } from "./Tarjetas";
import { Button } from "@material-ui/core";
import { SeparadorTexto } from "./Separador";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "./todasLasCategorias";
import { Router, Routes, Route } from "react-router-dom";

import productosJson from './ProductosJson.json'


const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 48px'

    },
}))

const PresentacionGenero = (props) => {

    const elegirGenero = () => {

        let indiceGenero = 0

        if (props.genero === 'HOMBRE') {
            indiceGenero = 0
            return indiceGenero
        }

        if (props.genero === 'MUJER') {
            indiceGenero = 1
            return indiceGenero
        }

    }

    const classes = useStyles()

    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={'TODO PARA ' + props.genero}
                subtitulo='LLeva el mejor regalo para papá'></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    todasLasCategorias[elegirGenero()].map((categoria) => {

                        return (

                            <Grid item md={6} key={categoria.id}>
                                <TarjetaCategoria
                                    cat={categoria.nombre}
                                    genero={props.genero}
                                    categoria={categoria.id}
                                    key={categoria.id + '1'}
                                >
                                </TarjetaCategoria>
                            </Grid>)
                    })}
            </Grid>
        </div>
    )
}

const PresentacionCategoria = (props) => {

    const classes = useStyles()

    const subCategorias = todasLasCategorias


    const elegirCategoria = () => {

        let categoriaElegida = {}


        if (props.genero === 'HOMBRE') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[0][cat].id === props.idCategoria) {
                    categoriaElegida = {

                        sub: subCategorias[0][cat].categorias,
                        nombrCategoria: subCategorias[0][cat].nombre
                    }
                    return categoriaElegida
                }
            }

        }

        if (props.genero === 'MUJER') {

            for (let cat = 0; subCategorias[0].length; cat++) {

                if (subCategorias[1][cat].id === props.idCategoria) {
                    categoriaElegida = {

                        sub: subCategorias[1][cat].categorias,
                        nombrCategoria: subCategorias[1][cat].nombre
                    }

                    return categoriaElegida
                }
            }
        }
    }


    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={'TODO EN ' + elegirCategoria().nombrCategoria + " PARA " + props.genero}
                subtitulo={props.subtitulo}></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    elegirCategoria().sub.map((subcat) => {

                        return (
                            <Grid item md={6} key={subcat}>
                                <TarjetaSubcategoria
                                    genero={props.genero}
                                    idCategoria={props.idCategoria}
                                    subcategoria={subcat}
                                    nombre={subcat}
                                    key={subcat}
                                >
                                </TarjetaSubcategoria>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </div>
    )
}

const PresentacionSubcategoria = (props) => {

    const classes = useStyles()

    const elegirProductos = () => {
        const prod = []
        for (let i = 0; i < productosJson.length; i++) {

            if (productosJson[i].genero_producto === props.genero && productosJson[i].subcategoria_producto === props.subCategoria)
                prod.push(productosJson[i])
        }
        return prod
    }

    return (
        <div className={classes.cont}>
            <SeparadorTexto
                titulo={props.subCategoria + " para " + props.genero}
                subtitulo={props.subtitulo}></SeparadorTexto>
            <Grid container spacing={2}>

                {
                    elegirProductos().map((producto) => {

                        return (

                            <Grid item md={3} key={producto.id_producto}>

                                <a href={`/${producto.genero_producto}/${producto.categoria_producto}/${producto.subcategoria_producto}/producto-${producto.id_producto}`} element={<PresentacionProducto id={producto.id_producto}></PresentacionProducto>}>
                                    <TarjetaProducto
                                        nombre={producto.name_producto}
                                        precio={producto.precio_producto}
                                        categoria={producto.subcategoria_producto + ' para ' + producto.genero_producto}
                                        key={producto.id_producto}
                                        urlImg={producto.img_path}
                                    ></TarjetaProducto>
                                </a>
                            </Grid>

                        )
                    })
                }
            </Grid>
        </div>
    )
}





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



const PresentacionProducto = (props) => {


    const classes = useStyles3()



    const elegirProducto = () => {
        const producto = {}




    }

    return (


        <div className={classes.cont}>

            <div className={classes.imgProd}>

                
                <div className={classes.imgTarProdMins}>
                    <img src={require(`../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                    <img src={require(`../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTarProdMin} alt='hey' />
                </div>

                <div className={classes.imgTarProd}>
                    <img src={require(`../img/Product-images${productosJson[props.id - 1].img_path}`)} className={classes.imgTar}  alt='hey' />
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
export { PresentacionGenero, PresentacionCategoria, PresentacionSubcategoria, PresentacionProducto }