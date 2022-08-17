import { useState, useEffect } from 'react';

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend


let productos=[]

	const ProductosJson = async () => {
		const res = await fetch(`${URI}obtenerProductos`);
		const data = await res.json();
		
  productos=data
  
	}

  console.log(productos)
	
ProductosJson()




export {productos,ProductosJson}