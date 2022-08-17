
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import axios from "axios";
import { useFormik } from 'formik'; 
import * as yup from 'yup'; 

const URI = process.env.REACT_APP_URI;   

const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '50%',
        margin: '20vh  auto', 
        borderLeft:'2px solid #ddd',
        borderRadius: '15px',
        backgroundColor:'#fff',
		position:'relative',
		boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.2)',
		padding:'40px',
        justifyContent:'center',
        top:'48px'
    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        margin:'auto',
        paddingLeft:'50px'
        

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
        height: '48px',
        resize: 'none'

    },
    buscar: {
        display: 'flex',
        gap: '20px'
    },
    botones: {
        display: 'flex'
    },
    agregarUsuario:{
        backgroundColor:'black',
        color:'#fff',
        marginTop:'20px'
    },
    all:{
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center  '
    }



}))



export const PresentacionAgregarUsuario = () => {
    
    const classes=useStyles()

    const formValidationSchema = yup.object({
        nombre: yup
          .string('Nombre del usuario')
          .required('Nombre es requerido'),
        cedula: yup
          .number()
          .required('Cedula es requerida'),
        edad: yup
          .number()
          .required('Edad es requerida'),
        email: yup
          .string('E-mail')
          .required('E-mail es requerido'),
        direccion: yup
          .string('Direccion')
          .required('Direccion es requerida'),
        pass: yup
          .string('Password')
          .required('Contraseña es requerida'),
        nick: yup
          .string('Username')
          .required('Nombre de usuario es requerido'),
        telefono: yup
          .number()
          .required('Telefono es requerido'),
        estado: yup
            .boolean()
            .required('Estado es requerido')
      });

    //Valores del formulario (datos del usuario)
    const formik = useFormik({
        initialValues: {
            nombre: '',
            cedula: 0,
            edad: 0,
            email: '',
            direccion: '',
            pass: '',
            nick: '',
            telefono: 0,
            estado: false
        },
        validationSchema:formValidationSchema,
        onSubmit: values => {
          
            try {

                

                const data={
                    name_cliente_registrado: values.nombre,
                    cedula_cliente_registrado: values.cedula,
                    edad_cliente_registrado: values.edad,
                    email_cliente_registrado: values.email,
                    direccion_cliente_registrado: values.direccion,
                    password_cliente_registrado: values.pass,
                    username_cliente_registrado: values.nick,
                    telefono_cliente_registrado: values.telefono,
                    estado_cliente_registrado: Boolean(values.estado)
                }
                axios.post(URI+"crearClienteRegistrado", data).then(
                alert("Usuario creado"));
                descartarCampos()
            }
            catch {
                alert("error")
            } 
        },
      });

      const descartarCampos=()=>{
		formik.setFieldValue("nombre","")
		formik.setFieldValue("cedula",0)
		formik.setFieldValue("edad",0)
		formik.setFieldValue("email","")
        formik.setFieldValue("direccion","")
        formik.setFieldValue("pass","")
        formik.setFieldValue("nick","")
		formik.setFieldValue("telefono",0)
        formik.setFieldValue("estado",false)
		//setNombreAux("")
		//setImagen(require('../../../img/producto.jpg'))
	}

return (

    <div className={classes.all}>
<div className={classes.cont}>

            
            
<div className={classes.BarraLateral}>
<BarraLateral></BarraLateral>
</div>


<div className={classes.lateralIzq}>
    <p className={classes.titulo}>Agregar Usuario</p>
    
    <form onSubmit={formik.handleSubmit} className={classes.formulario}>
            <TextField label='Nombre'
                        name='nombre'
                        id='nombre'
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}>   
            </TextField>
            <TextField label='Cédula'
                        name='cedula'
                        id='cedula'
                        value={formik.values.cedula}
                        onChange={formik.handleChange}
                        error={formik.touched.cedula && Boolean(formik.errors.cedula)}
                        helperText={formik.touched.cedula && formik.errors.cedula}>   
            </TextField>
            <TextField label='Edad'
                        name='edad'
                        id='edad'
                        value={formik.values.edad}
                        onChange={formik.handleChange}
                        error={formik.touched.edad && Boolean(formik.errors.edado)}
                        helperText={formik.touched.edad && formik.errors.edad}>   
            </TextField>
            <TextField label='E-mail'
                        name='email'
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}>   
            </TextField>
            <TextField label='Teléfono'
                        name='telefono'
                        id='telefono'
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                        helperText={formik.touched.telefono && formik.errors.telefono}>   
            </TextField>
            <TextField label='Direccion'
                        name='direccion'
                        id='direccion'
                        value={formik.values.direccion}
                        onChange={formik.handleChange}
                        error={formik.touched.direccion && Boolean(formik.errors.direccion)}
                        helperText={formik.touched.direccion && formik.errors.direccion}>   
            </TextField>
            <TextField label='Usuario'
                        name='nick'
                        id='nick'
                        value={formik.values.nick}
                        onChange={formik.handleChange}
                        error={formik.touched.nick && Boolean(formik.errors.nick)}
                        helperText={formik.touched.nick && formik.errors.nick}>   
            </TextField>
            <TextField label='Contraseña'
                        name='pass'
                        id='pass'
                        value={formik.values.pass}
                        onChange={formik.handleChange}
                        error={formik.touched.pass && Boolean(formik.errors.pass)}
                        helperText={formik.touched.pass && formik.errors.pass}>   
            </TextField>
            <TextField label='Estado'
                        name='estado'
                        id='estado'
                        value={formik.values.estado}
                        onChange={formik.handleChange}
                        error={formik.touched.estado && Boolean(formik.errors.estado)}
                        helperText={formik.touched.estado && formik.errors.estado}>   
            </TextField>
            
            <Button type="submit" color="inherit" variant="contained" className={classes.agregarUsuario}>Agregar Usuario</Button>

    </form>

</div>
<div  className={classes.lateralDer}>
    
</div>

</div>

    </div>
        
    )





}
