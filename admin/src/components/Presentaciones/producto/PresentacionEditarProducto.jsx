
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import { useFormik } from 'formik';
import * as yup from 'yup';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '100%',
        margin: '144px  0',

    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin:'0 24px'
        

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
        margin:'0 24px 0 24X'
    }



}))



export const PresentacionEditarProducto = () => {

    const classes = useStyles()
	const validationSchema = yup.object({
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
		.required('Descripcion es requerida')
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
		validationSchema:validationSchema,
		onSubmit:(values)=>{
			
		}
	})

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
                            <textarea className={classes.barraBusqueda} name="" id="" cols="30" ></textarea>
                            <Button> Buscar </Button>
                        </div>
                    </div>

					<form onSubmit={formik.handleSubmit}>
						<TextField label='Nombre'
									name='nombre'
									id='nombre'
		 							value={formik.values.nombre}
									onChange={formik.handleChange}
									error={formik.touched.nombre && Boolean(formik.errors.nombre)}
									helperText={formik.touched.nombre && formik.errors.nombre}></TextField>
						<TextField label='Categoria'
									name='categoria'
									id='categoria'
									value={formik.values.categoria}
									onChange={formik.handleChange}
									error={formik.touched.categoria && Boolean(formik.errors.categoria)}
									helperText={formik.touched.categoria && formik.errors.categoria}></TextField>
			
						<TextField label='Sub categoria'
									name='subcategoria'
									id='subcategoria'
									value={formik.values.subcategoria}
									onChange={formik.handleChange}
									error={formik.touched.subcategoria && Boolean(formik.errors.subcategoria)}
									helperText={formik.touched.subcategoria && formik.errors.subcategoria}></TextField>
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
								helperText={formik.touched.talla && formik.errors.talla}
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
								helperText={formik.touched.genero && formik.errors.genero}
							  >
								<MenuItem value="HOMBRE">HOMBRE</MenuItem>
								<MenuItem value="MUJER">MUJER</MenuItem>
							  </Select>
						</FormControl>
						<TextField label='Stock disponible'
									name="stock"
									id="stock"
									type='number'
									value={formik.values.stock}
									onChange={formik.handleChange}
									error={formik.touched.stock && Boolean(formik.errors.stock)}
									helperText={formik.touched.stock && formik.errors.stock}></TextField>
						<TextField label='Precio'
									type='number'
									name="precio"
									id="precio"
									value={formik.values.precio}
									onChange={formik.handleChange}
									error={formik.touched.precio && Boolean(formik.errors.precio)}
									helperText={formik.touched.precio && formik.errors.precio}></TextField>

						<textarea 
								  error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
		                          name="descripcion" 
								  id="descripcion"
								  value={formik.values.descripcion}	
								  onChange={formik.handleChange}
								  helperText={formik.touched.descripcion && formik.errors.descripcion}	
		                          placeholder="Descripcion"  
		                          className={classes.descripcion} ></textarea>
						<Button type='submit' color='primary'> editar producto</Button>
					</form>

                    <div className={classes.imagen}>
                        <p className={classes.ruta}>Nombre de la imagen</p>
                        <Button color="primary" variant="contained" className={classes.cargarImagen}>Cargar imagen</Button>
                    </div>

                    <div className={classes.botones}>

                        <Button color="inherit" variant="contained" className={classes.Descartar}>Descartar</Button>
                        <Button color="inherit" variant="contained" className={classes.GuargarCambios}>Guardar cambios</Button>
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
