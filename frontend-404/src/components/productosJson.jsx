import { useState, useEffect } from 'react';

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend

export const ProductosJson = () => {

	const [productos, setProductos] = useState([]);

	const nameProductos = async () => {
		const res = await fetch(`${URI}obtenerProductos`);
		const data = await res.json();
		setProductos(data);
	}

	useEffect(() => {
		nameProductos();
	}, [])

	return productos
}
