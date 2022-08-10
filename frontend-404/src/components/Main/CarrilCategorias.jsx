import React from "react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from 'react';
//import productosJson from './ProductosJson.json'
import { TarjetaProducto } from "../Tarjetas/TarjetaProducto.jsx";
import { makeStyles } from "@material-ui/styles";


const URI = process.env.REACT_APP_URI;        //Se conecta con el backend



const useStyle = makeStyles((theme) => ({

	division: {
		backgroundColor: '#eee',
		height: '64px',
		display: 'flex'
	},

	aviso: {
		margin: 'auto',
		width: 'auto',
	},


	cont: {
		margin: '96px 48px'
	},

	tituloBanner: {
		fontSize: '36px'
	}

}))


export const Carril = (props) => {

	const classes = useStyle()

	const [productosJson, setProductosJson] = useState([]);

	const ElegirCategorias = () => {

		const productos = []
		const categorias= []
		let i=0

		const nameProductos = async () => {
			const res = await fetch(`${URI}obtenerProductos`);
			const data = await res.json();
			setProductosJson(data);
		}

		useEffect(() => {
			nameProductos();
		}, [])

		if (props.genero==='MUJER') {

			while (productos.length < props.cantidad){

				if (productosJson[i].genero_producto==='MUJER' && !categorias.includes(productosJson[i].categoria_producto)) {

					productos.push(productosJson[i])
					categorias.push(productosJson[i].categoria_producto)
					
				}

				i++
			}
		}

		if (props.genero==='HOMBRE') {

			while (productos.length < props.cantidad){

				if (productosJson[i].genero_producto==='HOMBRE' && !categorias.includes(productosJson[i].categoria_producto)) {

					productos.push(productosJson[i])
					categorias.push(productosJson[i].categoria_producto)

				}

				i++
			}
		}

		return productos

	}

	return (

		<Grid container spacing={2}>
		<Grid
		item
		md={12}
		className={classes.tituloBanner}
		>
		{props.titulo}

		</Grid>

		{ElegirCategorias().map((prod) =>{
			return (
				<Grid
				item
				md={12/props.cantidad}
				key={prod.id_producto+1}
				>
				<TarjetaProducto 
				nombre={prod.name_producto}
				precio={prod.precio_producto}
				categoria={prod.categoria_producto}
				key={prod.id_producto}
				></TarjetaProducto>
				</Grid>
				)
		})}

		</Grid>

		)
}