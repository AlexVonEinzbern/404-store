
import React from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import axios from "axios"; 
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const URI = process.env.REACT_APP_URI;   


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
function generarDireccion(genero,categoria,subcategoria){
	return "/"+genero+"/"+categoria+"/"+subcategoria+"/";
}



export const PresentacionAgregarProducto = () => {
    
    //obtener valores de los texfields 
    const classes = useStyles()
    const [nameProducto, setNameProducto]=React.useState("");
    const [generoProducto, setGeneroProducto]=React.useState("");
    const [categoriaProducto, setCategoriaProducto]=React.useState("");
    const [subcategoriaProducto, setSubcategoriaProducto]=React.useState("");
    const [descripcionProducto, setDescripcionProducto]=React.useState("");
    const [tallaProducto, setTallaProducto]=React.useState("");
    const [stockProducto, setStockProducto]=React.useState("");
    const [precioProducto, setPrecioProducto]=React.useState("");
    //const [direccionProducto, setDireccionProducto]=React.useState("");
    
    // enviar datos al backend
    
    const addProduct= async()=>{
        console.log("aqui")
		const config={
			headers : {"Access-Control-Allow-Origin":"*"}
			};
		
        const respuesta= await axios.post(URI+"crearProducto",{
            name_producto: nameProducto,
            genero_producto: generoProducto,
            categoria_producto: categoriaProducto,
            subcategoria_producto: subcategoriaProducto,
            descripcion_producto: descripcionProducto,
            talla_producto: tallaProducto,
            calificacion_producto: 0,
            stock_producto: stockProducto,
            stock_vendido_producto: 0,
            precio_producto: precioProducto,
            url_imagen_producto: generarDireccion(generoProducto,categoriaProducto,subcategoriaProducto),
			
         }, config);
         console.log(respuesta)
    } 

    //eventos de los textfields 
    const eventoNombre=(e)=>{
        setNameProducto(e.target.value)        
    }
    const eventoGenero=(e)=>{
        setGeneroProducto(e.target.value)        
    }
    const eventoCategoria=(e)=>{
        setCategoriaProducto(e.target.value)        
    }
    const eventoSubcategoria=(e)=>{
        setSubcategoriaProducto(e.target.value)        
    }
    const eventoDescripcion=(e)=>{
        setDescripcionProducto(e.target.value)        
    }
    const eventoTalla=(e)=>{
        setTallaProducto(e.target.value)        
    }
    const eventoStock=(e)=>{
        setStockProducto(e.target.value)        
    }
    const eventoPrecio=(e)=>{
        setPrecioProducto(e.target.value)        
    }
    

    return (


        <div className={classes.cont}>

            
            
            <div className={classes.BarraLateral}>
            <BarraLateral></BarraLateral>
            </div>


            <div className={classes.lateralIzq}>
                <p className={classes.titulo}>Agregar producto</p>
				<Stack spacing={3}>
                <TextField onChange={eventoNombre} label='Nombre'></TextField>
                <TextField onChange={eventoCategoria} label='Categoria'></TextField>
                <TextField onChange={eventoSubcategoria} label='Sub categoria'></TextField>
				<FormControl fullWidth>
					<InputLabel id="label_talla"> Talla</InputLabel>
					  <Select
						labelId="label_talla"
						value={tallaProducto}
						label="Genero"
						onChange={eventoTalla}
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
						labelId="genero_label"
						value={generoProducto}
						label="Genero"
						onChange={eventoGenero}
					  >
						<MenuItem value="HOMBRE">HOMBRE</MenuItem>
						<MenuItem value="MUJER">MUJER</MenuItem>
					  </Select>
				</FormControl>
                <TextField onChange={eventoStock}  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}  type="number" label='Stock disponible'></TextField>
                <TextField onChange={eventoPrecio} type="number" label='Precio'></TextField>
				</Stack>
                <div className={classes.imagen}>
                <p className={classes.ruta}>Nombre de la imagen</p>
                <Button color="primary"  variant="contained" className={classes.cargarImagen}>Cargar imagen</Button>
                </div>

               
               
                <Button onClick={addProduct} color="inherit" variant="contained" className={classes.agregarProducto}>Agregar producto</Button>
            </div>
            <div  className={classes.lateralDer}>
     
                <textarea onChange={eventoDescripcion} name="" placeholder="Descripcion" className={classes.descripcion} ></textarea>
                <img name="" className={classes.imagenProd} ></img>
                
            </div>

        </div>
    )
}
