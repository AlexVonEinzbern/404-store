
import React, { useRef, useState } from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import categorias from './categorias.json';

const URI = process.env.REACT_APP_URI;


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

    noImage:{

        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,      
        display:'flex',
        width:'auto',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'roboto',
        fontSize:'40px',
        zIndex:'-1'


    },

    lateralIzq: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '0 24px'


    },

    descripcion: {

        width: 'auto',
        height: '50%',
        resize: 'none',
        borderRadius: '15px',
        marginTop:'40px',
        fontFamily:'roboto',
        padding:'10px',
        fontSize:'18px',
        border:'1px solid #bbb',
    },

    imagenProd: {

        width: '100%',
        height: '100%',
        resize: 'none',
        position: 'relative',
        objectFit: 'cover',
        borderRadius: '15px',
        backgroundColor:'transparent'
    },

    titulo: {
        fontSize: '24px',
        fontFamily: 'roboto',
        marginBottom:'20px'
    },

    imagen: {

        marginTop: '10px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'transparent'

    },
    cargarImagen: {
        width: '50%',
        height: 'min-content',
        color: '#ab003c',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        backgroundColor: 'transparent'

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

        borderRight: '1px solid #ddd',
        width: '20%'
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
    agregarProducto: {
        backgroundColor: 'black',
        color: '#fff',
        marginTop: '20px',
    },

    lateralDer: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
     

    },
    contenedorImagnen: {
        width: 'auto',
        height: '75%',
        resize: 'none',
        position: 'relative',
        border: '3px dashed #bbb',
        borderRadius: '15px'
    },
    stack:{
        height:'100%',
        display:'flex',
        flexDirection:'column',

    }



}))
function generarDireccion(genero, categoria, subcategoria, name) {
    return "/" + genero + "/" + categoria + "/" + subcategoria + "/" + name + ".png";
}
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}


export const PresentacionAgregarProducto = () => {

    const refCargarImagen = useRef(0)



    // const capturarImagen = (e) => {

    //     let imagen = (e.target.files)[0]

    //     const reader = new FileReader()
    //     reader.readAsDataURL(imagen)
    //     reader.addEventListener('load', () => {
    //         console.log(reader.result)
    //         localStorage.setItem('recent-image', reader.result)
    //         setImagen(localStorage.getItem('recent-image'))
    //         console.log(localStorage.getItem('recent-image'))
    //     })




    // }

    //obtener valores de los texfields 
    const classes = useStyles()
    const [nameProducto, setNameProducto] = React.useState("");
    const [generoProducto, setGeneroProducto] = React.useState("");
    const [categoriaProducto, setCategoriaProducto] = React.useState("");
    const [subcategoriaProducto, setSubcategoriaProducto] = React.useState("");
    const [descripcionProducto, setDescripcionProducto] = React.useState("");
    const [tallaProducto, setTallaProducto] = React.useState("");
    const [stockProducto, setStockProducto] = React.useState("");
    const [precioProducto, setPrecioProducto] = React.useState("");
    const [urlImagen, setUrlImagen] = React.useState("https://assetspwa.liverpool.com.mx/assets/digital/landing/devoluciones/img/producto-etiquetas.jpg");
    //const [direccionProducto, setDireccionProducto]=React.useState("");

    const [nameProductoError, setNameProductoError] = React.useState(false);
    const [generoProductoError, setGeneroProductoError] = React.useState(false);
    const [categoriaProductoError, setCategoriaProductoError] = React.useState(false);
    const [subcategoriaProductoError, setSubcategoriaProductoError] = React.useState(false);
    const [descripcionProductoError, setDescripcionProductoError] = React.useState(false);
    const [tallaProductoError, setTallaProductoError] = React.useState(false);
    const [stockProductoError, setStockProductoError] = React.useState(false);
    const [precioProductoError, setPrecioProductoError] = React.useState(false);
    const [UrlImagenError, setUrlImagenError] = React.useState(false);

    // enviar datos al backend

    const addProduct = async () => {
        setNameProductoError(false);
        setGeneroProductoError(false);
        setCategoriaProductoError(false);
        setSubcategoriaProductoError(false);
        setDescripcionProductoError(false);
        setTallaProductoError(false);
        setStockProductoError(false);
        setPrecioProductoError(false);
        setUrlImagenError(false);
    

        if (nameProducto === '') {
            setNameProductoError(true);
        } if (generoProducto === '') {
            setGeneroProductoError(true);
        } if (categoriaProducto === '') {
            setCategoriaProductoError(true);
        } if (subcategoriaProducto === '') {
            setSubcategoriaProductoError(true);
        } if (descripcionProducto === '') {
            setDescripcionProductoError(true);
        } if (tallaProducto === '') {
            setTallaProductoError(true);
        } if (stockProducto === '' || !isNumeric(stockProducto)) {
            setStockProductoError(true);
        } if (precioProducto === '' || !isNumeric(precioProducto)) {
            setPrecioProductoError(true);
        } if (urlImagen === ''){
            setUrlImagenError(true)
        }

        if (nameProducto && generoProducto && categoriaProducto && subcategoriaProducto
            && descripcionProducto && tallaProducto && stockProducto && precioProducto && urlImagen) {
            const config = {
                headers: { "Access-Control-Allow-Origin": "*" }
            };

            await axios.post(URI + "crearProducto", {
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
				imagen_producto_blob: "asdsadsasda", 
                url_imagen_producto: urlImagen

            }, config).then(
                alert("producto registrado"));
            localStorage.clear()
        }



    }

    //eventos de los textfields 
    const eventoNombre = (e) => {
        setNameProducto(e.target.value)
    }
    const eventoGenero = (e) => {
        setGeneroProducto(e.target.value)
    }
    const eventoCategoria = (e) => {
        setCategoriaProducto(e.target.value)
    }
    const eventoSubcategoria = (e) => {
        setSubcategoriaProducto(e.target.value)
    }
    const eventoDescripcion = (e) => {
        setDescripcionProducto(e.target.value)
    }
    const eventoTalla = (e) => {
        setTallaProducto(e.target.value)
    }
    const eventoStock = (e) => {
        setStockProducto(e.target.value)
    }
    const eventoPrecio = (e) => {
        setPrecioProducto(e.target.value)
    }
    const eventoImagen = (e) =>{
        setUrlImagen(e.target.value)

    }


    return (


        <div className={classes.cont}>



            <div className={classes.BarraLateral}>
                <BarraLateral></BarraLateral>
            </div>


            <div className={classes.lateralIzq}>
                <p className={classes.titulo}>Agregar producto</p>
                <Stack spacing={3} className={classes.stack}>
                    <TextField onChange={eventoNombre} error={nameProductoError} label='Nombre' variant="outlined"></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="genero_label"> Genero</InputLabel>
                        <Select
                            labelId="genero_label"
                            value={generoProducto}
                            label="Genero"
                            onChange={eventoGenero}
                            error={generoProductoError}
                        >
                            <MenuItem value="HOMBRE">HOMBRE</MenuItem>
                            <MenuItem value="MUJER">MUJER</MenuItem>
                        </Select>
                    </FormControl>
 
					<FormControl fullWidth>
                        <InputLabel id="categoria_nueva"> Categoria</InputLabel>
                        <Select
                            labelId="categoria_nueva"
                            value={categoriaProducto}
                            label="Categoria"
                            onChange={eventoCategoria}
                            error={categoriaProductoError}
                            variant="outlined"
                        >
							{ 
								["accesorios","ropaDeportiva","ropaExterior","ropaInterior"].map(
										u=>{
											return (<MenuItem value={u}>{u}</MenuItem>)
										}
									)
							}
                       </Select>
                    </FormControl>
					<FormControl fullWidth>
                        <InputLabel id="subcategoria_nueva"> Sub categoria</InputLabel>
                        <Select
                            labelId="subcategoria_nueva"
                            value={subcategoriaProducto}
                            label="Sub Categoria"
                            onChange={eventoSubcategoria}
                            error={subcategoriaProductoError}
                            variant="outlined"
                        >
							{ (generoProducto!="" && categoriaProducto!="") &&
										categorias[generoProducto][categoriaProducto].map(
											u=>{
												return (<MenuItem value={u}>{u}</MenuItem>)
											}
										)
							}
					   </Select>
                    </FormControl>
    
                    <FormControl fullWidth>
                        <InputLabel id="label_talla"> Talla</InputLabel>
                        <Select
                            labelId="label_talla"
                            value={tallaProducto}
                            label="Genero"
                            onChange={eventoTalla}
                            error={tallaProductoError}
                            variant="outlined"
                        >
                            <MenuItem value="XS">XS</MenuItem>
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                        </Select>
                    </FormControl>

                   <TextField onChange={eventoStock} error={stockProductoError} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label='Stock disponible' variant="outlined"></TextField>
                    <TextField onChange={eventoPrecio} error={precioProductoError} type="number" label='Precio' variant="outlined"></TextField>
                    <TextField onChange={eventoImagen} error={nameProductoError} type="text" label='Url Imagen ' variant="outlined"></TextField>

                </Stack>


                <Button onClick={addProduct} color="inherit" variant="contained" className={classes.agregarProducto}>Agregar producto</Button>
            </div>
            <div className={classes.lateralDer}>

                <div className={classes.contenedorImagnen}>



                 <img name="" className={classes.imagenProd} src={urlImagen}></img>
                 <div className={classes.noImage}><p>No Image</p></div> 
                    

                </div>
                

                <textarea onChange={eventoDescripcion} error={descripcionProductoError} name="" placeholder="Descripcion" className={classes.descripcion} ></textarea>
            </div>


        </div>
    )
}
