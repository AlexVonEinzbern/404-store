
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "./BarraLateral.jsx";

const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '100%',
        margin: '144px  auto',

    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%'

    },
    lateralDer: {
        width: '40%',
        marginLeft: '40px',
        marginRight: '144px',

        display: 'flex',
        flexDirection: 'column'



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
        marginRight: '48px',
        paddingRight: '40px',
        borderRight: '1px solid black',
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



export const PresentacionEliminarProducto = () => {

    const classes = useStyles()

    return (

        <div>
            <div className={classes.cont}>



                <div className={classes.BarraLateral}>
                    <BarraLateral></BarraLateral>
                </div>


                <div className={classes.lateralIzq}>

                    <div className={classes.busqueda}>
                        <p className={classes.titulo}>Eliminar Producto</p>
                        <div className={classes.buscar}>
                            <textarea className={classes.barraBusqueda} name="" id="" cols="30" ></textarea>
                            <Button> Buscar </Button>
                        </div>
                    </div>




                    <TextField label='Nombre'></TextField>
                    <TextField label='Categoria'></TextField>
                    <TextField label='Sub categoria'></TextField>
                    <TextField label='Talla'></TextField>
                    <TextField label='Genero'></TextField>
                    <TextField label='Stock disponible'></TextField>
                    <TextField label='Precio'></TextField>
                    <TextField label='Direccion de la imagen'></TextField>

                    

                    <div className={classes.botones}>

                        <Button color="inherit" variant="contained" className={classes.Descartar}>Descartar</Button>
                        <Button color="inherit" variant="contained" className={classes.GuargarCambios}>Eliminar Producto</Button>
                    </div>

                </div>



                <div className={classes.lateralDer}>

                    <textarea name="" placeholder="Descripcion" className={classes.imagenProd} ></textarea>
                    <img name="" className={classes.descripcion} ></img>

                </div>








            </div>

        </div>

    )





}