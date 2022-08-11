import React from "react";


import { makeStyles,Button } from "@material-ui/core";
import { margin } from "@mui/system";
import { useState } from "react";
import { ItemProducto } from "./producto/ItemProducto";
import axios from "axios"; 
import categorias from "./categorias.json"


const URI = process.env.REACT_APP_URI;  // se conecta con el backend 

const useStyles = makeStyles((theme) => ({

    cont: {
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        fontFamily: 'roboto',
        width: '100%',
        margin: '4px',

        textTransform: 'uppercase',
        fontWeight: 'bold',
        position: 'sticky',
        top: '0px',
        marginBottom: '20px',
        backgroundColor: 'white',
        height: '244px',
        alignItems: 'flex-end',
        paddingBottom: '40px',
        zIndex: '0',


    },
    imagen: {
        width: '48px',
        height: '48px',
        marginRight: '20px',
        border: '1px solid #ab003c',
        objectFit: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'


    },
    element: {
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',
        borderLeft: '1px solid #000',
        minWidth: '11%',
        maxWidth: '11%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',
        overflow: 'hidden',

    },
    fondo: {
        backgroundColor: '#fff',
        minWidth: '100vw',
        maxWidth: '100vw',
        left: '0',
        top: '40px',

        zIndex: '-1',
        height: '244px',
        position: 'fixed'
    },
    opciones: {
        position: 'fixed',
        top: '120px',
        display: 'flex',
 
        margin:'auto',
        width:'100%',
        

    },
    opcion:{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '20px',

        minWidth: '15%',
        maxWidth: '15%',

        margin: 0,
        fontFamily: 'roboto',
        fontSize: '20px',
      
        backgroundColor:'#fff',
        border:'none',
        borderTop:'1px solid #000',
        borderBottom:'1px solid #000'

    },
    boton:{
        width:'200px',
        marginLeft:'48px',
       
    
   
    }
}))


export const Cabecera = () => {
	const [productosJson,setProductosJson]=React.useState([])//productos filtrados

	const [filtroGenero, setFiltroGenero]=React.useState("%")
	const [filtroClase, setFiltroClase]=React.useState("%")
	const [filtroSubClase,setFiltroSubclase]=React.useState("%")
	const [filtroTalla,setFiltroTalla]=React.useState("%")


	const productosFiltrados=async ()=>{
		const {data:info} =await axios.get(URI+filtroGenero+"/"+filtroClase+"/"+filtroSubClase+"/"+filtroTalla)
		console.log(info)
		setProductosJson(info)
	}
    const classes = useStyles();
    return (

        <>

            <div className={classes.cont}>

                <div className={classes.opciones}>

                <select 
		                name={filtroGenero} 
		                id="" 
		                className={classes.opcion}
		                value={filtroGenero}
		                onChange={(e)=>{setFiltroGenero(e.target.value)}}>
                        <option value="%">Genero</option>
                        <option value="HOMBRE">Hombre</option>
                        <option value="MUJER">Mujer</option>
                    </select>
                    <select name=""
		                    id="" 
							className={classes.opcion}
		                    value={filtroClase}
							onChange={(e)=>{setFiltroClase(e.target.value)}}>
                        <option value="%">Categoria</option>
						{["accesorios","ropaDeportiva","ropaExterior","ropaInterior"].map(
								u=>{
									return <option value={u}> {u}</option>;
								}
							)
						}
                    </select>
                    <select name=""
							id="" 
							className={classes.opcion}
							value={filtroSubClase}
							onChange={(e)=>{setFiltroSubclase(e.target.value)}}>
                        <option value="%">Subcategoria</option>
						{ 
							/*categorias[filtroGenero][filtroClase].map(u=>{
								if (filtroGenero=="%")
									return <></>
								else
									return <option values={u}> {u} </option>
							})*/
							
						}
                    </select>
                    <select 
							name="" 
							id="" 
							className={classes.opcion}
							value={filtroTalla}
							onChange={(e)=>{setFiltroTalla(e.target.value)}}>
                        <option value="%">Talla</option>
						 
						{["XS","S","M","L","XL"].map(
								u=>{
									return <option value={u}>{u}</option>
								}
							)
						}
					</select>
  		
                    <Button color='secondary' variant='outlined' onClick={productosFiltrados} className={classes.boton}> Filtrar</Button>
                </div>

                <div >
                    <div className={classes.imagen} > img  </div>
                </div>

                <div className={classes.element}>Nombre</div>
                <div className={classes.element}>Categoria</div>
                <div className={classes.element}>Subcategoria</div>
                <div className={classes.element}>Talla</div>
                <div className={classes.element}>Genero</div>
                <div className={classes.element}>stock_producto</div>
                <div className={classes.element}>precio</div>
                <div className={classes.fondo}></div>



            </div>
			<div className={classes.lista}>
                {productosJson.map(producto => {
                    return (

                        <ItemProducto
                            nombre={producto.name_producto}
                            categoria={producto.categoria_producto}
                            subcategoria={producto.subcategoria_producto}
                            talla={producto.talla_producto}
                            genero={producto.genero_producto}
                            stock={producto.stock_producto}
                            precio={producto.precio_producto}
                            urlImg={producto.img_path}>
                        </ItemProducto>
                    )
                })
                }
            </div>

        </>

    )
}
