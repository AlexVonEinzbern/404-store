import React from "react";

import Categoria from "./Categoria";
import "../styles/MenuCategorias.css"

function MenuCategorias(props){ 
    return(
        <div className="ContenedorCategoria">

            <ul className="categorias">

                <li >
                    <Categoria  nombre={props.nombreCategoria1} 
                                subcategoria1={props.categoria1Subcategoria1}
                                subcategoria2={props.categoria1Subcategoria2}
                                subcategoria3={props.categoria1Subcategoria3}
                                subcategoria4={props.categoria1Subcategoria4}
                                subcategoria5={props.categoria1Subcategoria5}
                                subcategoria6={props.categoria1Subcategoria6}
                                subcategoria7={props.categoria1Subcategoria7}
                                subcategoria8={props.categoria1Subcategoria8}>                       
                    </Categoria>
                </li>

                <li>
                    <Categoria  nombre={props.nombreCategoria2} 
                                subcategoria1={props.categoria2Subcategoria1}
                                subcategoria2={props.categoria2Subcategoria2}
                                subcategoria3={props.categoria2Subcategoria3}
                                subcategoria4={props.categoria2Subcategoria4}
>                       
                    </Categoria>
                </li>

                <li>
                    <Categoria  nombre={props.nombreCategoria3} 
                                subcategoria1={props.categoria3Subcategoria1}
                                subcategoria2={props.categoria3Subcategoria2}
                                subcategoria3={props.categoria3Subcategoria3}>                       
                    </Categoria>
                </li>

                <li>
                    <Categoria  nombre={props.nombreCategoria4} 
                                subcategoria1={props.categoria4Subcategoria1}
                                subcategoria2={props.categoria4Subcategoria2}
                                subcategoria3={props.categoria4Subcategoria3}
                                subcategoria4={props.categoria4Subcategoria4}
                                subcategoria5={props.categoria4Subcategoria5}
                                subcategoria6={props.categoria4Subcategoria6}
                                subcategoria7={props.categoria4Subcategoria7}
                                subcategoria8={props.categoria4Subcategoria8}>                       
                    </Categoria>
                </li>
        
            </ul>

        </div>
            )
}
export default MenuCategorias