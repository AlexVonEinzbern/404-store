
import React from "react";


import { makeStyles } from "@material-ui/core"
import { width } from "@mui/system";
import { Cabecera } from "../Cabecera";
import axios from "axios"; 
import {productos,ProductosJson} from "./productosJson"
import { ItemProducto } from "./ItemProducto";
import { useState,useEffect } from "react";

const URI = process.env.REACT_APP_URI;  // se conecta con el backend 



const useStyles = makeStyles((theme) => ({


    cont: {
        backgroundColor:'#bbb',
        minWidth:'min-content'

      

    },
    imagen: {
        width: '48px',
        height: '48px',
        marginRight: '20px',
        border: '1px solid ab003c',
        objectFit: 'cover',

    },
    element: {
        height:'48px',
        display:'flex',
        alignItems:'center',
        // paddingLeft:'20px',
        borderLeft:'1px solid #000',
        minWidth:'11%',
        maxWidth:'11%',
        
        margin:0,
        fontFamily:'roboto',
        fontSize:'20px',
        overflow:'hidden',
    },
    cabecera: {
        display:'flex',
    
        alignItems:'flex-end',

        background:'#fff',
        top:'96px',
        left:0,
        position:'fixed'
        
        
    },
    lista:{

        marginTop:'300px'
       
    },
    opciones:{
        position:'absolute',
        top:'300px',
        display:'flex',
        width:'100%'
        
    }
}))




 const PresentacionListarProductos = () => {


    const [productosJson, setProductosJson] = useState([]);
    const filtrados=[]
    const [genero,setGenero]=useState('');
    const [categoria,setCategoria]=useState('');
    const [subcategoria,setSubcategoria]=useState('');
    const [talla,setTalla]=useState('');
    const forceUpdate = React.useState()[1].bind(null, {}) // see NOTE above const


    useEffect(() => {
        filtrar();
    }, [])
    
        
const filtrar=()=>{

	let filtros=[]

    if (window.localStorage) {
        if (window.localStorage.getItem('filtros') !== undefined
          && window.localStorage.getItem('filtros')
        ) {
  
           filtros=JSON.parse(localStorage.getItem('filtros'))
  
        }
      }
      else{
          filtros=[]
      }


	const filtroGenero=filtros[0]
	const filtroClase=filtros[1]
	const filtroSubClase=filtros[2]
	const filtroTalla=filtros[3]

	const productosFiltrados=async ()=>{
		const {data:info} =await axios.get(URI+`obtenerProductoFiltrado/${filtroGenero}/${filtroClase}/${filtroSubClase}/${filtroTalla}`)
		setProductosJson(info)


        
	}

	productosFiltrados()

	const productos = localStorage.getItem('productos')
    const parseProductos = JSON.parse(productos)
    return parseProductos

}
    


    const classes = useStyles();
	//let productos=axios.get(URI+) 
    return (

        <div className={classes.cont}>
        <Cabecera className={classes.cabecera}>

        </Cabecera>
        <div className={classes.lista}>

        {
        
        
    productosJson.map((prod)=>{
            return(
                <ItemProducto producto={prod} key={prod.id_producto}></ItemProducto>
            )
        })
        
        }



        </div>
        

        </div>

    )
}

export {PresentacionListarProductos}