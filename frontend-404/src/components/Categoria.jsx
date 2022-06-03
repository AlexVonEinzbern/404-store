import React from "react";
import "../styles/categoria.css"
function Categoria(props){
   return(

       <div className="categoria">
            <ul className="subcategorias"><p>{props.nombre}</p>
                <li className="subcategoria">{props.subcategoria1}</li>
                <li className="subcategoria">{props.subcategoria2}</li>
                <li className="subcategoria">{props.subcategoria3}</li>
                <li className="subcategoria">{props.subcategoria4}</li>
                <li className="subcategoria">{props.subcategoria5}</li>
                <li className="subcategoria">{props.subcategoria6}</li>
                <li className="subcategoria">{props.subcategoria7}</li>
                <li className="subcategoria">{props.subcategoria8}</li>
            </ul>
       </div>

   )
}

export default Categoria