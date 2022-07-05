import React from "react";
import { TextField } from "@material-ui/core";

import { makeStyles, Button } from "@material-ui/core";
import { Height } from "@material-ui/icons";

import { useState, useEffect } from 'react';  //Cambios para que los datos en el formulario tengan
                                              //efecto en la base de datos

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend

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

    const [username_cliente_registrado, setUsername_cliente_registrado] = useState('')
    const [password_cliente_registrado, setPassword_cliente_registrado] = useState('')
    const [alertError, setAlertError] = useState('')

    const handleSutmit = async (username) => {

            const res = await fetch(`${URI}login`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username_cliente_registrado,
                    password_cliente_registrado
                })
            })
            const data = await res.json();

            setAlertError(false);
    }


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
                <TextField 
                    id="standard-basic" 
                    label="Usuario"
                    onChange = {username => setUsername_cliente_registrado(username.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Contraseña"
                    type="password"
                    onChange = {username => setPassword_cliente_registrado(username.target.value)}
                />

                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.iniciar}
                    onClick={handleSutmit}>
                    Iniciar sesión
                </Button>

                <div className={classes.textoOpcion}> ¿No estás registrado?  <a href="/registro" className={classes.a}> registrarse</a></div>

            </form>

        </div>

    )

}

const Registro = () => {

    const [name_cliente_registrado, setName_cliente_registrado]           = useState('')
    const [cedula_cliente_registrado, setCedula_cliente_registrado]       = useState('')
    const [edad_cliente_registrado, setEdad_cliente_registrado]           = useState('')
    const [email_cliente_registrado, setEmail_cliente_registrado]         = useState('')
    const [username_cliente_registrado, setUsername_cliente_registrado]   = useState('')
    const [direccion_cliente_registrado, setDireccion_cliente_registrado] = useState('')
    const [password_cliente_registrado, setPassword_cliente_registrado]   = useState('')
    const [telefono_cliente_registrado, setTelefono_cliente_registrado]   = useState('')
    const [alertError, setAlertError] = useState('')
    const [estado, setEstado]         = useState('')

    const handleSutmit = async (e) => {
        try{
            e.preventDefault();
            const res = await fetch(`${URI}crearClienteRegistrado`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name_cliente_registrado,
                    cedula_cliente_registrado,
                    edad_cliente_registrado,
                    email_cliente_registrado,
                    username_cliente_registrado,
                    direccion_cliente_registrado,
                    password_cliente_registrado,
                    telefono_cliente_registrado
                })
            })
            const data = await res.json();
            console.log(data);
            setEstado(true);
            setAlertError(false);

            setName_cliente_registrado('');
            setCedula_cliente_registrado('');
            setEdad_cliente_registrado('');
            setEmail_cliente_registrado('');
            setUsername_cliente_registrado('');
            setDireccion_cliente_registrado('');
            setPassword_cliente_registrado('');
            setTelefono_cliente_registrado('');

        } catch (error) {
            setEstado(true);
            setAlertError(true);
        }
    }

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
                <TextField 
                    id="standard-basic" 
                    label="Nombre"
                    onChange = {e => setName_cliente_registrado(e.target.value)} 
                />
                <TextField 
                    id="standard-basic" 
                    label="Cédula"
                    onChange = {e => setCedula_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Edad"
                    onChange = {e => setEdad_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Email"
                    onChange = {e => setEmail_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Usuario" 
                    onChange = {e => setUsername_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Dirección" 
                    onChange = {e => setDireccion_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic" 
                    label="Contraseña"
                    type="password"
                    onChange = {e => setPassword_cliente_registrado(e.target.value)}
                />
                <TextField 
                    id="standard-basic"
                    label="Teléfono"
                    onChange = {e => setTelefono_cliente_registrado(e.target.value)}
                />
                 
                <Button 
                    variant="contained" 
                    color="secondary" 
                    className={classes.iniciar}
                    onClick = {handleSutmit}>
                    Registrarse
                </Button> 

                <div  className={classes.textoOpcion}> ¿Ya tienes cuenta?  <a href="/login" className={classes.a}> Iniciar Sesión </a>   </div>
   
            </form>

        </div>

    )
    
}

export {Login,Registro}