
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "./BarraLateral.jsx";

const useStyles = makeStyles((theme) => ({


    cont: {

        display:'flex',
        width:'100%',
        margin:'144px  auto',
        
    },

    lateralIzq:{
        display:'flex',
        flexDirection:'column',
        width:'60%'

    },
    lateralDer:{
        width:'40%',
        marginLeft:'40px',
        marginRight:'144px',
   
        display:'flex',
        flexDirection:'column'

        

    },
    descripcion:{
       
        width:'auto',
        height:'50%',
        resize:'none'
    },

    imagenProd:{

        width:'auto',
        height:'50%',
        resize:'none'
    },

    titulo:{
        fontSize:'24px'
    },

    imagen:{

        marginTop:'10px',

        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'

    },
    cargarImagen:{
        width:'40%',
        height:'30px',
        color:'gray',
        backgroundColor:'#fff'
        
    },
    ruta:{
        color:'rgba(0,0,0,0.5)'
    },
    agregarProducto:{
        marginTop:'20px',
        backgroundColor:'#000',
        color:'#fff'
    
    },
    BarraLateral:{
        marginRight:'96px',
        border:'1px solid black',
    }


}))



export const PresentacionAgregarProducto = () => {

const classes = useStyles()

    return (


        <div className={classes.cont}>

            
            
            <div className={classes.BarraLateral}>
            <BarraLateral></BarraLateral>
            </div>


            <div className={classes.lateralIzq}>
                <p className={classes.titulo}>Agregar producto</p>
                <TextField label='Nombre'></TextField>
                <TextField label='Categoria'></TextField>
                <TextField label='Sub categoria'></TextField>
                <TextField label='Talla'></TextField>
                <TextField label='Genero'></TextField>
                <TextField label='Stock disponible'></TextField>
                <TextField label='Precio'></TextField>
                <TextField label='Direccion de la imagen'></TextField>

                <div className={classes.imagen}>
                <p className={classes.ruta}>Nombre de la imagen</p>
                <Button color="primary" variant="contained" className={classes.cargarImagen}>Cargar imagen</Button>
                </div>

               
               
                <Button color="inherit" variant="contained" className={classes.agregarProducto}>Agregar producto</Button>
            </div>

            

            <div  className={classes.lateralDer}>
     
                <textarea name="" placeholder="Descripcion" className={classes.imagenProd} ></textarea>
                <img name="" className={classes.descripcion} ></img>
                
            </div>

            

            



   
        </div>
    )





}