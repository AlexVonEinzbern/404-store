
import React, {useEffect} from "react";
import { makeStyles, Button } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import axios from "axios"; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';



const URI = process.env.REACT_APP_URI;  // se conecta con el backend 

const useStyles = makeStyles((theme) => ({ //estilos 


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

//coloca %20 en los espacios en blanco 
function preprocessNombre(nombre){
	let nombre_aux="";
	for (let x of nombre){
		if (x==' ')
			nombre_aux+="%20";
		else
			nombre_aux+=x
	}
	return nombre_aux; 	
}


export const PresentacionEliminarProducto = () => {
    const classes = useStyles()

	const [busqueda,setBusqueda]=React.useState('') // barra de busqueda 

	const [nombre_producto,setNombreProducto]=React.useState('')//
	const [categoria_producto,setCategoriaProducto]=React.useState('')
	const [subcategoria_producto,setSubCategoriaProducto]=React.useState('')
	const [talla_producto, setTallaProducto] =React.useState('')
	const [genero_producto, setGeneroProducto]=React.useState('')
	const [stock_producto, setStockProducto]=React.useState('')
	const [precio_producto, setPrecioProducto]=React.useState('')
	const [descripcion_producto,setDescripcionProducto]=React.useState('')
	const [imagen_producto,setImagenproducto]=React.useState(require('../../../img/producto.jpg'))


	const actualizarCamposInfoProducto= async()=>{ //actualiza la información del producto a eliminar 
		const {data:info} = await axios.get(URI+"obtenerProducto/"+preprocessNombre(busqueda))
		setNombreProducto(info["name_producto"]);
		setCategoriaProducto(info["categoria_producto"])
		setSubCategoriaProducto(info["subcategoria_producto"])
		setTallaProducto(info["talla_producto"])
		setGeneroProducto(info["genero_producto"])
		setStockProducto(info["stock_producto"])
		setPrecioProducto(info["precio_producto"])
		setDescripcionProducto(info["descripcion_producto"])
		setImagenproducto(require('../../../img/Product-images'+info['url_imagen_producto']))
		console.log(info)
	}
	const descartarProducto=()=>{ //descarta el producto traido

		setNombreProducto(()=>(''))
		setCategoriaProducto(()=>(''))
		setSubCategoriaProducto(()=>(''))
		setTallaProducto(()=>(''))
		setGeneroProducto(()=>(''))
		setStockProducto(()=>(''))
		setPrecioProducto(()=>(''))
		setDescripcionProducto(()=>(''))
		setImagenproducto(require('../../../img/producto.jpg'))

	}
	const eliminarProducto=()=>{
		if(nombre_producto==''){
			alert("busque el producto que va a eliminar primero")
			return false 
		}else{
			axios.post(URI+"eliminarProducto/"+preprocessNombre(nombre_producto));
			alert("Producto eliminado")
			descartarProducto()
		}
	}

	useEffect(()=>{} ,[nombre_producto,categoria_producto])

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
                            <textarea className={classes.barraBusqueda} onChange={(e)=>{setBusqueda(e.target.value)}} name="" id="" cols="30" ></textarea>
                            <Button  onClick={()=>actualizarCamposInfoProducto()} > Buscar  </Button>
                        </div>
                    </div>

					<List
					  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
					  component="nav"
					  aria-labelledby="nested-list-subheader"
					  subheader={
						<ListSubheader component="div" >
						  Información de el producto a eliminar
						</ListSubheader>
					  }
					>
						<ListItem disablePadding>
							<ListItemText primary="Nombre del producto" secondary={nombre_producto}/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Categoria del producto" secondary={categoria_producto} />
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Sub categoria del producto" secondary={subcategoria_producto} />
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Talla del producto" secondary={talla_producto}/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Genero del producto" secondary={genero_producto}/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Stock del producto" secondary={stock_producto}/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Precio del producto" secondary={precio_producto}/>
						</ListItem>
						<ListItem disablePadding>
							<ListItemText primary="Descripcion del producto" secondary={descripcion_producto}/>
						</ListItem>
					
					</List>
					<div className={classes.botones}>

                        <Button color="inherit" variant="contained" onClick={descartarProducto} className={classes.Descartar}>Descartar</Button>
                        <Button color="inherit" variant="contained" onClick={eliminarProducto} className={classes.GuargarCambios}>Eliminar Producto</Button>
                    </div>

                </div>
						<div className={classes.lateralDer}>
							<img className={classes.descripcion}  src={imagen_producto}></img>
						</div>
            </div>

        </div>

    )





}
