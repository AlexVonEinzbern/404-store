import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({


    imgBanner: {


        position: 'relative',
        width: '100%',
        objectFit: 'cover',
        height: '700px',
        transition: '0.5s',
        transform: 'scale(1.05)',

        '&:hover': {
            transform: 'scale(1.15)'

        }

    },
    boton: {

        color: '#fff',
        fontSize: '36px',
        textAlign: 'center',
        backgroundColor: '#ab003c',
        borderRadius: '0'
    },

    cont: {
        position: 'relative',
        overflow: 'hidden',
        height: '700px'
    },

    ContNombreCategoria: {
        display: 'flex',
        position: 'absolute',
        top: '50%',
        color: '#fff',
        fontSize: '60px',
        textAlign: 'center',
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: '2% 0px',
        justifyContent: 'space-around',
        width: '100%',
        textTransform: 'uppercase'
    }



}))



const TarjetaCategoria = (props) => {

    const classes = useStyle()

    return (


        <div className={classes.cont}>

            <div className={classes.ContImgBanner}>
                <img src={require(`../img/Banner/${props.genero}/${props.categoria}/1.jpg`)} alt="" className={classes.imgBanner} />
            </div>

            <div className={classes.ContNombreCategoria}>

                <div>
                    {props.cat}

                </div>

                <a href={`/${props.genero}/${props.categoria}`}>
                    <Button variant="text" color="default" className={classes.boton} >
                        VER MAS
                    </Button>
                </a>


            </div>






        </div>



    )
}




const TarjetaSubcategoria = (props) => {

    const classes = useStyle()

    return (

        <div>
            <div className={classes.cont}>

                <div className={classes.ContImgBanner}>
                    <img src={require(`../img/Banner/${props.genero}/${props.idCategoria}/${props.subcategoria}/1.jpg`)} alt="" className={classes.imgBanner} />
                </div>

                <div className={classes.ContNombreCategoria}>

                    <div>
                        {props.nombre}

                    </div>

                    <a href={`/${props.genero}/${props.idCategoria}/${props.subcategoria}`}>

                        <Button variant="text" color="default" className={classes.boton}>
                            ver mas
                        </Button>
                    </a>


                </div>

            </div>

        </div>



    )
}


const useStyle2 = makeStyles(() => ({


    contTarProd: {
        width: '100%',
        margin: '0',
        overflow: 'hidden',
        margin: '0',
        padding: '0'

    },
    imgTarProd: {

        margin: '0',
        padding: '0',
        width: '100%',
        height: '500px',
        objectFit: 'cover',
        transition: '0.2s',
        transform: 'scale(1.05)',
        "&:hover": {
            transform: 'scale(1.2)'
        },


        contImg: {


            overflow: 'hidden',
            width: '100%',

            margin: '0',
            padding: '0',


        },

    },
    contTexeProd: {
        margin: '0',
        padding: '0',
        position: 'relative',
        display: 'flex',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',


    },

    txtProd: {
        position: 'relative',
        padding: '20px 20px',
        margin: '0',
        height: '20%'


    },

    nombre: {
        fontWeight: 'bold',
        textTransform: 'lowercase',
        "&:first-letter": {
            textTransform: 'uppercase'
        }

    },

    categoria: {
        opacity: '0.7',
        textTransform: 'lowercase',
        "&:first-letter": {
            textTransform: 'uppercase'
        }
    }






}))


const TarjetaProducto = (props) => {

    const classes = useStyle2();

    return (
        <div className={classes.contTarProd}>

            
                <div className={classes.contImg}>
                    <img src={require(`../img/Product-images${props.urlImg}`)} className={classes.imgTarProd} alt='hey' />
                </div>
           



            <div className={classes.contTexeProd}>

                <div className={classes.txtProd}>
                    <div variant="h4" color="initial" className={classes.nombre}>  {props.nombre}  </div>
                    <div variant="h4" color="initial" className={classes.categoria}> {props.categoria}</div>
                </div>

                <div variant="h4" color="initial" className={classes.txtProd}> {props.precio}</div>

            </div>

        </div>


    )
}


export { TarjetaCategoria, TarjetaProducto, TarjetaSubcategoria }