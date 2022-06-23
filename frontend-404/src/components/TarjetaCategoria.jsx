import React from "react";
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({

    contImgBanner: {
        width: '500px'
    },
    imgBanner: {
        width: '100%',
        objectFit: 'cover',
        height: '700px'
    },
    boton: {

        position: 'absolute',
        top: '70%',
        left: '70%',
        color: '#fff',
        fontSize: '36px',
        textAlign: 'center',
        backgroundColor: '#ab003c',
        borderRadius: '0'
    },

    cont:{
        position:'relative'
    }



}))



export const TarjetaCategoria = () => {

    const classes = useStyle()

    return (

        <div>
            <div className={classes.cont}>

                <div className={classes.ContImgBanner}>
                    <img src={require(`../img/Banner/Banner${props.genero}.jpg`)} alt="" className={classes.imgBanner} />
                </div>

                <Button variant="text" color="default" className={classes.boton}>
                    VER MAS
                </Button>

            </div>

        </div>



    )
}