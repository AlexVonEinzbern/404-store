import React from "react";
import { makeStyles, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({


    cont: {
        margin: 0,
        padding: 0

    },
    tittle: {

        fontSize: '48px',
        textAlign: 'center',
        height: 'auto',
        margin: '30px 30px',
        textTransform: 'uppercase'


    },
    subtittle: {
        textAlign: 'center',
        margin: 0
    },

    subtittleText: {
        textAlign: 'center',
        margin: '30px'
    },


    botones: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '40px'
    },

    boton: {
        margin: '30px 30px',
        backgroundColor: '#000',
        color: '#fff',
        padding: '12px',
        borderRadius: '10px'
    }

}))

export const SeparadorCompra = (props) => {

    const classes = useStyles()

    return (

        <div className={classes.cont}>

            <div className={classes.tittle}>

                <b>{props.titulo}</b>

            </div>

            <div className={classes.subtittle}>
                {props.subtitulo}
            </div>

            <div className={classes.botones}>
                <Button variant="text" color="secondary" className={classes.boton}>
                    Compra para hombre
                </Button>

                <Button variant="text" color="secondary" className={classes.boton}>
                    compra para mujer
                </Button>

                <Button variant="text" color="secondary" className={classes.boton}>
                    compra para niños
                </Button>
            </div>

        </div>
    )

}
