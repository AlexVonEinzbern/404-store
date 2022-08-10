
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
    },
    a:{
        color:'black',
        textDecoration:'none',
        '&:visited':{
          color:'black',
        textDecoration:'none',  
      }   
    },
    
}))

export const TarjetaSubcategoria = (props) => {

    const classes = useStyle()

    return (

        <div>
            <div className={classes.cont}>

                <div className={classes.ContImgBanner}>
                    <img src={require(`../../img/Banner/${props.genero}/${props.idCategoria}/${props.subcategoria}/1.jpg`)} alt="" className={classes.imgBanner} />
                </div>

                <div className={classes.ContNombreCategoria}>

                    <div>
                        {props.nombre}

                    </div>

                    <a href={`/${props.genero}/${props.idCategoria}/${props.subcategoria}`} className={classes.a}>

                        <Button variant="text" color="default" className={classes.boton}>
                            ver mas
                        </Button>
                    </a>

                </div>

            </div>

        </div>

    )
}