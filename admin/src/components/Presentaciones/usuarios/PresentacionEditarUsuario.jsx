
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";

const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '100%',
        margin: '144px  auto',

    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin:'auto'
        

    },

    descripcion: {

        width: 'auto',
        height: '50%',
        resize: 'none'
    },

    imagenProd: {

        width: 'auto',
        height: '50%',
        resize: 'none'
    },

    titulo: {
        fontSize: '24px',
        fontFamily: 'roboto'
    },

    imagen: {

        marginTop: '10px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    cargarImagen: {
        width: '40%',
        height: '30px',
        color: 'gray',
        backgroundColor: '#fff'

    },
    ruta: {
        color: 'rgba(0,0,0,0.5)',
        fontFamily: 'roboto'
    },
    GuargarCambios: {
        marginTop: '20px',
        backgroundColor: '#000',
        color: '#fff',
        width: '50%',


    }, Descartar: {
        marginTop: '20px',

        color: '#000',
        width: '50%',

    },
    BarraLateral: {

        borderRight: '1px solid black',
        width:'20%'
    },
    busqueda: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    barraBusqueda: {

        width: 'auto',
        height: 'auto',
        resize: 'none'

    },
    buscar: {
        display: 'flex',
        gap: '20px'
    },
    botones: {
        display: 'flex'
    }


}))


export const PresentacionEditarUsuario = () => {

    const classes = useStyles()

    return (

        <div>
            <div className={classes.cont}>



                <div className={classes.BarraLateral}>
                    <BarraLateral></BarraLateral>
                </div>


                <div className={classes.lateralIzq}>

                    <div className={classes.busqueda}>
                        <p className={classes.titulo}>Editar Usuario</p>
                        <div className={classes.buscar}>
                            <textarea className={classes.barraBusqueda} name="" id="" cols="30" ></textarea>
                            <Button> Buscar </Button>
                        </div>
                    </div>
                    <TextField label='Nombre '></TextField>
                <TextField label='Cedula'></TextField>
                <TextField label='Edad'></TextField>
                <TextField label='E-Mail'></TextField>             
                <TextField label='telefono'></TextField>
                <TextField label='Direccion'></TextField>
                <TextField label='Usuario'></TextField>
                <TextField label='contraseña'></TextField>

                    

                    <div className={classes.botones}>

                        <Button color="inherit" variant="contained" className={classes.Descartar}>Descartar</Button>
                        <Button color="inherit" variant="contained" className={classes.GuargarCambios}>Guardar cambios</Button>
                    </div>

                </div>


            </div>

        </div>

    )





}