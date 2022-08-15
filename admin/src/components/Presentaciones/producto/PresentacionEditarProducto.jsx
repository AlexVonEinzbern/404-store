
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import { useFormik } from 'formik';
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
        width: '82%',
        margin: '144px  auto', 
        borderLeft:'2px solid #ddd',
        borderRadius: '15px',
        backgroundColor:'#fff',
		position:'relative',
		boxShadow: '0px 0px 50px 10px rgba(0, 0, 0, 0.5)',
		padding:'40px'

    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin:'0 24px'
        

    },

    descripcion: {

        width: 'auto',
        height: '150px',
        resize: 'none',
		// backgroundColor:'red',
		overflow:'hidden'
	
    },


    titulo: {
        fontSize: '24px',
        fontFamily: 'roboto'
    },

    imagen: {

		width: 'auto',
        height: '80%',
        resize: 'none',
        position: 'relative',
        border: '3px dashed #bbb',
        borderRadius: '15px',
		objectFit:'cover'
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

        borderRight: '1px solid #bbb',
        width:'20%',
    },
    busqueda: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
		marginBottom:'20px'

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
		gap:'40px',
		position:'relative',
	
		bottom:'0',
		width:'100%',
		justifyContent:'center'
	

    },
    agregarUsuario:{
        backgroundColor:'black',
        color:'#fff',
        marginTop:'20px',
    },

    lateralDer:{
        width:'30%',
        display:'flex',
        flexDirection:'column',
        margin:'0 24px 0 24X',
		position:'relative'
    },
	formulario:{
		display:'flex',
		flexDirection:'column',
		gap:'20px'
	}



}))


//coloca %20 en los espacios en blanco 
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




export const PresentacionEditarProducto = () => {

	const [busqueda,setBusqueda]=React.useState('') // barra de busqueda 
	const [imagen,setImagen]=React.useState("https://assetspwa.liverpool.com.mx/assets/digital/landing/devoluciones/img/producto-etiquetas.jpg")
	const [nombre_aux,setNombreAux]=React.useState("")

    const classes = useStyles()
	const formValidationSchema = yup.object({
	  nombre: yup
		.string('Nombre del producto')
		.required('Nombre es requerido'),
	  categoria: yup
		.string('Categoria')
		.required('Categoria es requerida'),
	  subcategoria: yup
		.string('Sub categoria')
		.required('Sub categoria es requerida'),
	  talla: yup
		.string('talla')
		.required('talla es requerida'),
	  genero: yup
		.string('Genero')
		.required('genero es requerido'),
	  stock: yup
		.number()
		.required('stock es requerido'),
	  precio: yup
		.number()
		.required('Precio es requerido'),
	  descripcion: yup
		.string('descripcion del producto')
		.required('Descripcion es requerida'),
	  imagen: yup
		.string()
	});

	const formik=useFormik({
		initialValues:{
			nombre:'',
			categoria:'',
			subcategoria:'',
			talla:'',
			genero: '' ,
			stock:0,
			precio:0,
			descripcion:''
		},
		validationSchema:formValidationSchema,
		onSubmit:(values)=>{
			if(formik.values.nombre ===""){
				alert("Busque primero un producto que editar")
			}else{
				try{
					const data={
						name_producto:values.nombre,
						genero_producto:values.genero,
						categoria_producto:values.categoria,
						subcategoria_producto:values.subcategoria,
						talla_producto:values.talla,
						stock_producto:values.stock,
						precio_producto:values.precio,
						descripcion_producto:values.descripcion
					}
					axios.put(URI+"actualizarProducto/"+nombre_aux,data)
					alert("Producto editado")
					descartarCampos()
					
				}catch{
					alert(" error editando el producto")
				}
			} 
		}
	})
	
	const descartarCampos=()=>{
		formik.setFieldValue("nombre","")
		formik.setFieldValue("categoria","")
		formik.setFieldValue("subcategoria","")
		formik.setFieldValue("talla","")
		formik.setFieldValue("genero","")
		formik.setFieldValue("stock",0)
		formik.setFieldValue("precio",0)
		formik.setFieldValue("descripcion","")
		setNombreAux("")
		setImagen(require('../../../img/producto.jpg'))
	}

	const actualizarCamposInfoProducto= async()=>{ //actualiza la información del producto a eliminar 
		try{
			const {data:info} = await axios.get(URI+"obtenerProducto/"+preprocessNombre(busqueda))
			setNombreAux(info["name_producto"])
			formik.setFieldValue("nombre",info["name_producto"])
			formik.setFieldValue("categoria",info["categoria_producto"])
			formik.setFieldValue("subcategoria",info["subcategoria_producto"])
			formik.setFieldValue("talla",info["talla_producto"])
			formik.setFieldValue("genero",info["genero_producto"])
			formik.setFieldValue("stock",info["stock_producto"])
			formik.setFieldValue("precio",info["precio_producto"])
			formik.setFieldValue("descripcion",info["descripcion_producto"])
			//setImagen(require('../../../img/Product-images'+info['url_imagen_producto']))
		}catch{
			alert("Producto no encontrado")
			//descartarCampos()
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
                        <p className={classes.titulo}>Editar Producto</p>
                        <div className={classes.buscar}>
                            <textarea className={classes.barraBusqueda} onChange={(e)=>{setBusqueda(e.target.value)}} id="" cols="30" ></textarea>
                            <Button onClick={actualizarCamposInfoProducto} color='secondary' variant='outlined'> Buscar </Button>
                        </div>
                    </div>

					<form onSubmit={formik.handleSubmit} className={classes.formulario}>
						<TextField 	variant="outlined"
									label='Nombre'
									name='nombre'
									id='nombre'
		 							value={formik.values.nombre}
									onChange={formik.handleChange}
									error={formik.touched.nombre && Boolean(formik.errors.nombre)}
									helpertext={formik.touched.nombre && formik.errors.nombre}></TextField>
						<TextField label='Categoria'
									variant="outlined"
									name='categoria'
									id='categoria'
									value={formik.values.categoria}
									onChange={formik.handleChange}
									error={formik.touched.categoria && Boolean(formik.errors.categoria)}
									helpertext={formik.touched.categoria && formik.errors.categoria}></TextField>
			
						<TextField label='Sub categoria'
									name='subcategoria'
									variant="outlined"
									id='subcategoria'
									value={formik.values.subcategoria}
									onChange={formik.handleChange}
									error={formik.touched.subcategoria && Boolean(formik.errors.subcategoria)}
									helpertext={formik.touched.subcategoria && formik.errors.subcategoria}></TextField>
						<FormControl fullWidth>
							<InputLabel id="label_talla"> Talla</InputLabel>
							  <Select
								name="talla"
								id="talla"
								labelId="label_talla"
								value={formik.values.talla}
								label="Talla"
								onChange={formik.handleChange}
								error={formik.touched.talla && Boolean(formik.errors.talla)}
								helpertext={formik.touched.talla && formik.errors.talla}
							  >
								<MenuItem value="XS">XS</MenuItem>
								<MenuItem value="S">S</MenuItem>
								<MenuItem value="M">M</MenuItem>
								<MenuItem value="L">L</MenuItem>
								<MenuItem value="XL">XL</MenuItem>
							  </Select>
						</FormControl>
	
						<FormControl fullWidth>
							<InputLabel id="genero_label"> Genero</InputLabel>
							  <Select
								name="genero"
								id="genero"
								labelId="genero_label"
								value={formik.values.genero}
								label="Genero"
								onChange={formik.handleChange}
								error={formik.touched.genero && Boolean(formik.errors.genero)}
								helpertext={formik.touched.genero && formik.errors.genero}
							  >
								<MenuItem value="HOMBRE">HOMBRE</MenuItem>
								<MenuItem value="MUJER">MUJER</MenuItem>
							  </Select>
						</FormControl>
						<TextField label='Stock disponible'
									name="stock"
									id="stock"
									type='number'
									variant='outlined'
									value={formik.values.stock}
									onChange={formik.handleChange}
									error={formik.touched.stock && Boolean(formik.errors.stock)}
									helpertext={formik.touched.stock && formik.errors.stock}></TextField>
						<TextField label='Precio'
									type='number'
									variant="outlined"
									name="precio"
									id="precio"
									value={formik.values.precio}
									onChange={formik.handleChange}
									error={formik.touched.precio && Boolean(formik.errors.precio)}
									helpertext={formik.touched.precio && formik.errors.precio}></TextField>
						<TextField 
								  multiline
								  rows={7}
								  columns={70}
								  maxRows={20}
								  variant="outlined"
		                          name="descripcion" 
								  id="descripcion"
								  value={formik.values.descripcion}	
								  onChange={formik.handleChange}
								  helpertext={formik.touched.descripcion && formik.errors.descripcion}	
								  error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
		                          placeholder="Descripcion"  
		                          className={classes.descripcion} >
						</TextField>
					</form>

                </div>
                <div className={classes.lateralDer}>

                    <img name="" src={imagen} className={classes.imagen} ></img>
					<div className={classes.botones}>
						<Button color="inherit" variant="contained" onClick={descartarCampos} className={classes.Descartar}>Descartar</Button>

						<Button type='submit' color='primary' className={classes.GuargarCambios}> Guardar cambios</Button>
					
						</div>

                </div>
            </div>
        </div>
    )
}
