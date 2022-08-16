
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";

import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from "axios"; 
const URI = process.env.REACT_APP_URI;  // se conecta con el backend 

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
        justifyContent:'center'
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
        height: 'auto',
        resize: 'none',
        borderRadius:'5px'

    },
    buscar: {
        display: 'flex',
        gap: '20px'
    },
    botones: {
        display: 'flex',
        gap:'40px'
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

export const PresentacionEditarUsuario = () => {

    const [busqueda,setBusqueda]=React.useState('') // barra de busqueda 
    const [nombre_aux,setNombreAux]=React.useState("")

    const classes = useStyles()

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
        onSubmit:(values) => {
            /*
            const data={
                    name_cliente_registrado: values.nombre,
                    cedula_cliente_registrado: values.cedula,
                    edad_cliente_registrado: values.edad,
                    email_cliente_registrado: values.email,
                    direccion_cliente_registrado: values.direccion,
                    password_cliente_registrado: values.pass,
                    username_cliente_registrado: values.nick,
                    telefono_cliente_registrado: values.telefono
                }
                */
        }
    })

    const descartarCampos=()=>{
		formik.setFieldValue("nombre","")
		formik.setFieldValue("cedula",0)
		formik.setFieldValue("edad",0)
		formik.setFieldValue("email","")
        formik.setFieldValue("direccion","")
        formik.setFieldValue("pass","")
        formik.setFieldValue("nick","")
		formik.setFieldValue("telefono",0)
        //formik.setFieldValue("estado",false)
		setNombreAux("")
		//setImagen(require('../../../img/producto.jpg'))
	}

    const actualizarCamposInfoUsuario= async()=>{ //actualiza la información del producto a eliminar 
		try{
			const {data:info} = await axios.get(URI+"obtenerClienteRegistrado/"+preprocessNombre(busqueda))
			setNombreAux(info["name_cliente_registrado"])
			formik.setFieldValue("nombre",info["name_cliente_registrado"])
			formik.setFieldValue("cedula",info["cedula_cliente_registrado"])
			formik.setFieldValue("edad",info["edad_cliente_registrado"])
			formik.setFieldValue("email",info["email_cliente_registrado"])
            formik.setFieldValue("direccion",info["direccion_cliente_registrado"])
            formik.setFieldValue("pass",info["password_cliente_registrado"])
            formik.setFieldValue("nick",info["username_cliente_registrado"])
			formik.setFieldValue("telefono",info["telefono_cliente_registrado"])
			//formik.setFieldValue("estado",info["username_cliente_registrado"])
			//setImagen(require('../../../img/Product-images'+info['url_imagen_producto']))
		}catch{
			alert("Usuario no encontrado")
			descartarCampos()
		}
	}

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
                            <textarea className={classes.barraBusqueda} onChange={(e)=>{setBusqueda(e.target.value)}} id="" cols="30" ></textarea>
                            <Button> <Button onClick={actualizarCamposInfoUsuario}> Buscar </Button> </Button>
                        </div>
                    </div>
                    
                    <form onSubmit={formik.handleSubmit}>
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
    
                    </form>            

                    <div className={classes.botones}>

                        <Button onClick={descartarCampos} color="inherit" variant="contained" className={classes.Descartar}>Descartar</Button>
                        <Button color="inherit" variant="contained" className={classes.GuargarCambios}>Guardar cambios</Button>
                    </div>

                </div>


            </div>

        </div>

    )





}