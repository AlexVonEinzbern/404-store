// import React from "react";


// import { makeStyles } from "@material-ui/core";
// import { margin } from "@mui/system";

// const useStyles=makeStyles((theme)=> ({

//     cont:{
//         display:'flex',
//         alignItems:'center',
//         fontFamily:'roboto',
//         width:'100%',
//         margin:'4px',
//         fontSize:'20px',
//         backgroundColor:'#fff'
//     },
    
// }))

// export const ItemUsuario = (props)=>{


//     const classes=useStyles();
//     return (

//         <div className={classes.cont}>  
//             <div className={classes.element}>{props.Usuario.name_Usuario}</div>
//             <div className={classes.element}>{props.Usuario.genero_Usuario}</div>
//             <div className={classes.element}>{props.Usuario.categoria_Usuario}</div>
//             <div className={classes.element}>{props.Usuario.subcategoria_Usuario}</div>
//             <div className={classes.element}>{props.Usuario.talla_Usuario}</div>
//             <div className={classes.element}>{props.Usuario.stock_Usuario}</div>
//             <div className={classes.element}>${props.Usuario.precio_Usuario}</div>
//             <select name="" id="" className={classes.element}>
//                 <option value="">Gestionar</option>
//                 <option value="">Editar</option>
//                 <option value="">Eliminar</option>
//             </select>
//         </div>
//     )
// }