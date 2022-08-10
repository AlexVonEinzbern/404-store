
import React, { useRef, useState } from "react";
import { makeStyles, Button, TextField, } from "@material-ui/core";
import { BarraLateral } from "../BarraLateral.jsx";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const URI = process.env.REACT_APP_URI;


const useStyles = makeStyles((theme) => ({


    cont: {

        display: 'flex',
        width: '80%',
        margin: '144px  auto', 
        borderLeft:'2px solid gray',
        borderRadius: '15px',
        backgroundColor:'#'

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
        fontSize:'px',

        border:'1px solid #ab003c',
    },

    imagenProd: {

        width: '100%',
        height: '100%',
        resize: 'none',
        position: 'relative',
        objectFit: 'cover',
        borderRadius: '15px'
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

        borderRight: '1px solid black',
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
        margin: '0 24px 0 24X',
        position: 'relative',
        borderLeft:'1px solid #000',
        paddingLeft:'20px'

    },
    contenedorImagnen: {
        width: 'auto',
        height: '75%',
        resize: 'none',
        position: 'relative',
        border: '2px dashed black',
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

    const [imagenImg, setImagen] = useState()


    const capturarImagen = (e) => {

        let imagen = (e.target.files)[0]

        const reader = new FileReader()
        reader.readAsDataURL(imagen)
        reader.addEventListener('load', () => {
            console.log(reader.result)
            localStorage.setItem('recent-image', reader.result)
            setImagen(localStorage.getItem('recent-image'))
            console.log(imagenImg.url)
        })




    }

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
    //const [direccionProducto, setDireccionProducto]=React.useState("");

    const [nameProductoError, setNameProductoError] = React.useState(false);
    const [generoProductoError, setGeneroProductoError] = React.useState(false);
    const [categoriaProductoError, setCategoriaProductoError] = React.useState(false);
    const [subcategoriaProductoError, setSubcategoriaProductoError] = React.useState(false);
    const [descripcionProductoError, setDescripcionProductoError] = React.useState(false);
    const [tallaProductoError, setTallaProductoError] = React.useState(false);
    const [stockProductoError, setStockProductoError] = React.useState(false);
    const [precioProductoError, setPrecioProductoError] = React.useState(false);

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
        }

        if (nameProducto && generoProducto && categoriaProducto && subcategoriaProducto
            && descripcionProducto && tallaProducto && stockProducto && precioProducto) {
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
                url_imagen_producto: generarDireccion(generoProducto, categoriaProducto, subcategoriaProducto, nameProducto),

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


    return (


        <div className={classes.cont}>



            <div className={classes.BarraLateral}>
                <BarraLateral></BarraLateral>
            </div>


            <div className={classes.lateralIzq}>
                <p className={classes.titulo}>Agregar producto</p>
                <Stack spacing={3} className={classes.stack}>
                    <TextField onChange={eventoNombre} error={nameProductoError} label='Nombre'></TextField>
                    <TextField onChange={eventoCategoria} error={categoriaProductoError} label='Categoria'></TextField>
                    <TextField onChange={eventoSubcategoria} error={subcategoriaProductoError} label='Sub categoria'></TextField>
                    <FormControl fullWidth>
                        <InputLabel id="label_talla"> Talla</InputLabel>
                        <Select
                            labelId="label_talla"
                            value={tallaProducto}
                            label="Genero"
                            onChange={eventoTalla}
                            error={tallaProductoError}
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
                            error={generoProductoError}
                        >
                            <MenuItem value="HOMBRE">HOMBRE</MenuItem>
                            <MenuItem value="MUJER">MUJER</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField onChange={eventoStock} error={stockProductoError} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} type="number" label='Stock disponible'></TextField>
                    <TextField onChange={eventoPrecio} error={precioProductoError} type="number" label='Precio'></TextField>

                </Stack>


                <Button onClick={addProduct} color="inherit" variant="contained" className={classes.agregarProducto}>Agregar producto</Button>
            </div>
            <div className={classes.lateralDer}>

                <div className={classes.contenedorImagnen}>



                    <img name="" className={classes.imagenProd} src={localStorage.getItem('recent-image')}></img>
                    <Button color="secondary" variant="outlined" className={classes.cargarImagen} onClick={() => { refCargarImagen.current.click() }}>Cargar imagen</Button>
                </div>
                <input type='file' ref={refCargarImagen} hidden onChange={
                    capturarImagen}></input>

                <textarea onChange={eventoDescripcion} error={descripcionProductoError} name="" placeholder="Descripcion" className={classes.descripcion} ></textarea>
            </div>


        </div>
    )
}
