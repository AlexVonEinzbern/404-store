import React from 'react'
import { ProductosJson, productos } from './components/productosJson'
import { Route, Routes, Router } from 'react-router-dom'
import { PresentacionProducto } from './components/Presentaciones/PresentacionProducto'
import { useEffect } from 'react'

function RutasProductos() {

    const forceUpdate = React.useState()[1].bind(null, {}) // see NOTE above const forceUpdate = React.useReducer(() => ({}))[1]

    const actualizar = () => {
        ProductosJson()
        forceUpdate()
    }

    useEffect(() => {
        actualizar()
    }, [])


    return (



        <div>

            <Router>

                <Routes>

                    {
                        productos.map(producto => {

                            return (
                                <Route path={`${producto.genero_producto}/${producto.categoria_producto}/${producto.subcategoria_producto}/producto-${producto.id_producto}`}
                                    element={<PresentacionProducto producto={producto} ></PresentacionProducto>}>
                                </Route>


                            )
                        })
                    }

                </Routes>

            </Router>




        </div>

    )
}

export default RutasProductos
