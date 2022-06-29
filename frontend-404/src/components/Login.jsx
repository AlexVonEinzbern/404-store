import React from "react";
import { TextField } from "@material-ui/core";

import { makeStyles, Button } from "@material-ui/core";
import { Height } from "@material-ui/icons";


const useStyle = makeStyles((theme) => ({

    cont: {

        display: 'flex',
        flexDirection: 'column',
        width: '400px',
 
 

    },
    contLogin:{
        
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        margin:'auto',
        alignItems:'center',
        justifyContent:'center'

    },

    logo:{

        fontSize:'24px',
        fontWeight:'bold',
        margin:'20px'
    },

    iniciar:{
        marginTop:'40px'
    },

    textoOpcion:{
        margin:'20px 0',
        color:'black'
    },

    a:{
        color:'#000'
    }




}))



 const Login = () => {
    const classes = useStyle()



    return (

        <div className={classes.contLogin}>


            <div className={classes.logo}>
                404-STORE
            </div>

            <div >
                CUENTANOS QUIEN ERES
            </div>

            <form noValidate autoComplete="off" className={classes.cont}>
                <TextField id="standard-basic" label="Usuario" />
                <TextField id="standard-basic" label="Contraseña" />

                <Button variant="contained" color="secondary" className={classes.iniciar}>
                  iniciar sesion
                </Button>

                <div className={classes.textoOpcion}> ¿No estas registrado?  <a href="/registro" className={classes.a}> registrarse</a></div>


            </form>


        </div>


    )




}

const Registro = () => {
    const classes = useStyle()




    const registrarCliente=()=>{

        

    }





    return (

        <div className={classes.contLogin}>


            <div className={classes.logo}>
                404-STORE
            </div>

            <div >
                CUENTANOS QUIEN ERES
            </div>

            <form noValidate autoComplete="off" className={classes.cont}>
                <TextField id="standard-basic" label="Nombre" />
                <TextField id="standard-basic" label="Cedula" />
                <TextField id="standard-basic" label="Edad" />
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="Usuario" />
                <TextField id="standard-basic" label="Direccion" />
                <TextField id="standard-basic" label="Contraseña" />
                <TextField id="standard-basic" label="Telefono" />
           
                

                <Button variant="contained" color="secondary" className={classes.iniciar}>
                  Registrarse
                </Button>


                <div  className={classes.textoOpcion}> ¿Ya tienes cuenta?  <a href="/login" className={classes.a}> Iniciar Sesion </a>   </div>

                


            </form>


        </div>


    )



    
}


export {Login,Registro}