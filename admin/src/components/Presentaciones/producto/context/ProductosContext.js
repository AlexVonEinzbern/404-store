import { createContext } from "react";



// const URI = process.env.REACT_APP_URI;        //Se conecta con el backend


// let productos=[]

// 	const ProductosJson = async () => {
// 		const res = await fetch(`${URI}obtenerProductos`);
// 		const data = await res.json();
		
//   productos=data
//   return data
  
// 	}
//   console.log(productos)
// ProductosJson()



const ProductosContext=createContext(
    {
        genero:'',
        categoria:'',
        subacategoria:'',
        talla:''
    }
  
)


export default ProductosContext;