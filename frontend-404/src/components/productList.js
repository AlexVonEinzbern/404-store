import { LlamarProductos,productos } from "./productosJson"

let productosLita=[]

const actualizarPorductos = (lista) =>{
    productosLita=lista
}

LlamarProductos()

actualizarPorductos(productos)

export {productosLita,actualizarPorductos}