import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import { useFormik, validateYupSchema } from 'formik';
import * as yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from "axios"; 
const URI = process.env.REACT_APP_URI;  // se conecta con el backend 

const useStyles = makeStyles((theme) => ({


    cont: {
        display: 'flex',
     
        borderLeft: '2px solid #ddd',
        borderRadius: '15px',
        backgroundColor: '#fff',
        position:'relative',
        boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.2)',
  
        justifyContent: 'center',
        padding:'40px',
        top:'48px'
    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin: 'auto',
        paddingLeft: '50px'


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
        width: '20%'
    },
    busqueda: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'

    },
    barraBusqueda: {

        width: '300px',
        fontFamily: 'roboto',
        height: '30px',
        fontSize: '20px',

        resize: 'none',
        borderRadius: '5px',
        textJustify: 'center',
        lineHeight: 1.3,
        paddingLeft: '20px',
        fontWeight: '150'

    },
    buscar: {
        display: 'flex',
        gap: '20px'
    },
    botones: {
        display: 'flex'
    },
    all:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center  '
    }


}))

function preprocessNombre(nombre){
	let nombre_aux="";
	for (let x of nombre){
		if (x===' ')
			nombre_aux+="%20";
		else
			nombre_aux+=x
	}
	return nombre_aux; 	
}

export const PresentacionEliminarUsuario = () => {

    const [busqueda,setBusqueda]=React.useState('') // barra de busqueda 

    const classes = useStyles()

    const formValidationSchema = yup.object({
        nombreAdmin: yup
          .string('Nombre'),
          //.required('Nombre es requerido'),
        userAdmin: yup
          .string('Username'),
          //.required('Nombre de usuario es requerido'),
        telefonoAdmin: yup
          .number(),
          //.required('Telefono es requerido'),
        cedulaAdmin: yup
          .number(),
          //.required('Cedula es requerida'),
        emailAdmin: yup
          .string('E-mail')
          //.required('E-mail es requerido')
      });

      const formik=useFormik({
		initialValues:{
			nombreAdmin:'',
            userAdmin:'',
            telefonoAdmin:0,
            cedulaAdmin:0,
            emailAdmin:''
		},
        validationSchema:formValidationSchema,
        onSubmit:(values) => {
            try{
                axios.delete(URI+"eliminarAdmin"+preprocessNombre(values.nombreAdmin))
            }
            catch{
            alert("error")
            }
        }
        });

        const actualizarCamposInfoAdmin= async()=>{ //actualiza la información del producto a eliminar 
            try{
                const {data:info} = await axios.get(URI+"obtenerAdmin/"+preprocessNombre(busqueda))
                //setNombreAux(info["name_cliente_registrado"])
                formik.setFieldValue("nombreAdmin",info["name_administrador"])
                formik.setFieldValue("userAdmin",info["username_administrador"])
                formik.setFieldValue("telefonoAdmin",info["telefono_administrador"])

                formik.setFieldValue("cedulaAdmin",info["cedula_administrador"])
                
                formik.setFieldValue("emailAdmin",info["email_administrador"])
               
               
                
            }catch{
                alert("Usuario no encontrado")            }
        }

    return (

        <div className={classes.all}>

            <div>
                <div className={classes.cont}>



                    <div className={classes.BarraLateral}>
                        <BarraLateral></BarraLateral>
                    </div>


                    <div className={classes.lateralIzq}>

<<<<<<< HEAD
                        <div className={classes.busqueda}>
                            <p className={classes.titulo}>Eliminar Usuario</p>
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
                            <Button color="inherit" variant="contained" className={classes.GuargarCambios}>Eliminar Usuario</Button>
                        </div>

                    </div>

=======

                    <div className={classes.busqueda}>
                        <p className={classes.titulo}>Eliminar Administrador</p>
                        <div className={classes.buscar}>
                            <textarea className={classes.barraBusqueda} onChange={(e)=>{setBusqueda(e.target.value)}} id="" cols="30" ></textarea>
                            <Button onClick={actualizarCamposInfoAdmin}> Buscar </Button>
                        </div>
                    </div>
                
                    <form onSubmit={formik.handleSubmit}>
                        <TextField label='Nombre'
                                    name='nombreAdmin'
                                    id='nombreAdmin'
                                    disabled
                                    value={formik.values.nombreAdmin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nombreAdmin && Boolean(formik.errors.nombreAdmin)}
                                    helperText={formik.touched.nombreAdmin && formik.errors.nombreAdmin}>   
                        </TextField>
                        <TextField label='Cédula'
                                    name='cedulaAdmin'
                                    id='cedulaAdmin'
                                    disabled
                                    value={formik.values.cedulaAdmin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.cedulaAdmin && Boolean(formik.errors.cedulaAdmin)}
                                    helperText={formik.touched.cedulaAdmin && formik.errors.cedulaAdmin}>   
                        </TextField>
                        <TextField label='E-mail'
                                    name='emailAdmin'
                                    id='emailAdmin'
                                    disabled
                                    value={formik.values.emailAdmin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.emailAdmin && Boolean(formik.errors.emailAdmin)}
                                    helperText={formik.touched.emailAdmin && formik.errors.emailAdmin}>   
                        </TextField>
                        <TextField label='Telefono'
                                    name='telefonoAdmin'
                                    id='telefonoAdmin'
                                    disabled
                                    value={formik.values.telefonoAdmin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.telefonoAdmin && Boolean(formik.errors.telefonoAdmin)}
                                    helperText={formik.touched.telefonoAdmin && formik.errors.telefonoAdmin}>   
                        </TextField>
                        <TextField label='Username'
                                    name='userAdmin'
                                    id='userAdmin'
                                    disabled
                                    value={formik.values.userAdmin}
                                    onChange={formik.handleChange}
                                    error={formik.touched.userAdmin && Boolean(formik.errors.userAdmin)}
                                    helperText={formik.touched.userAdmin && formik.errors.userAdmin}>   
                        </TextField>
                        

                    <div className={classes.botones}>
                        <Button color="inherit" variant="contained" className={classes.Descartar}>Descartar</Button>
                        <Button type='submit' color="inherit"  className={classes.GuargarCambios}>Eliminar Usuario</Button>
                    </div>

                    </form> 

                </div>
>>>>>>> a2814c2a74a77da9e38abae9dfea71865fd764d3











                </div>

            </div>
        </div>


    )





}
