
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Body } from "./components/Main/Body";
import { Login, Registro } from "./components/Main/Login";

import { PresentacionCategoria } from "./components/Presentaciones/PresentacionCategoria";
import { PresentacionGenero } from "./components/Presentaciones/PresentacionGenero";
import { PresentacionSubcategoria } from "./components/Presentaciones/PresentacionSubcategoria";
import { PresentacionProducto } from "./components/Presentaciones/PresentacionProducto";
import { Nada } from "./nada";
import { ProductosJson ,productos} from './components/productosJson'
import { CartProvider } from "react-use-cart";
import Navegacion from "./components/Navegacion/Navegacion";
import PresentacionCarrito from "./components/Presentaciones/presentacionCarrito";

function App() {

	// const links = ProductosJson

	return (
		<div className="App">


		<CartProvider>
		<Navegacion></Navegacion>
		<Router>

		<Routes>

		<Route path='hombre' element={<PresentacionGenero genero='HOMBRE' />} />
		<Route path='hombre/ropaExterior' element={<PresentacionCategoria genero='HOMBRE' idCategoria='RopaExterior' />} />
		<Route path='hombre/ropaExterior/camisas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='camisas' />} />
		<Route path='hombre/ropaExterior/camisetas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='camisetas' />} />
		<Route path='hombre/ropaExterior/jeans' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='jeans' />} />
		<Route path='hombre/ropaExterior/pantalones' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='pantalones' />} />


		<Route path='hombre/ropaInterior' element={<PresentacionCategoria genero='HOMBRE' idCategoria='RopaInterior' />} />
		<Route path='hombre/ropainterior/pijamas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='pijamas' />} />


		<Route path='hombre/accesorios' element={<PresentacionCategoria genero='HOMBRE' idCategoria='Accesorios' />} />
		<Route path='hombre/accesorios/billeteras' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='billeteras' />} />
		<Route path='hombre/accesorios/correas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='correas' />} />
		<Route path='hombre/accesorios/gorras' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='gorras' />} />
		<Route path='hombre/accesorios/relojes' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='relojes' />} />


		<Route path='mujer' element={<PresentacionGenero genero='MUJER' />} />
		<Route path='mujer/ropaExterior' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaExterior' />} />
		<Route path='mujer/ropaExterior/camisas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='camisas' />} />
		<Route path='mujer/ropaExterior/camisetas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='camisetas' />} />
		<Route path='mujer/ropaExterior/jeans' element={<PresentacionSubcategoria genero='MUJER' subCategoria='jeans' />} />
		<Route path='mujer/ropaExterior/pantalones' element={<PresentacionSubcategoria genero='MUJER' subCategoria='pantalones' />} />

		<Route path='mujer/ropaInterior' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaInterior' />} />
		<Route path='mujer/ropainterior/pijamas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='pijamas' />} />
		<Route path='mujer/ropainterior/panties' element={<PresentacionSubcategoria genero='MUJER' subCategoria='panties' />} />
		<Route path='mujer/ropainterior/tops' element={<PresentacionSubcategoria genero='MUJER' subCategoria='tops' />} />
		<Route path='mujer/ropainterior/medias' element={<PresentacionSubcategoria genero='MUJER' subCategoria='medias' />} />

		<Route path='mujer/ropaDeportiva' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaDeportiva' />} />
		<Route path='mujer/ropadeportiva/prendassuperiores' element={<PresentacionSubcategoria genero='MUJER' subCategoria='prendasSuperiores' />} />
		<Route path='mujer/ropadeportiva/prendasinferiores' element={<PresentacionSubcategoria genero='MUJER' subCategoria='prendasInferiores' />} />
		<Route path='mujer/ropadeportiva/accesorios' element={<PresentacionSubcategoria genero='MUJER' subCategoria='accesorios' />} />


		<Route path='mujer/accesorios' element={<PresentacionCategoria genero='MUJER' idCategoria='Accesorios' />} />
		<Route path='mujer/accesorios/bisuteria' element={<PresentacionSubcategoria genero='MUJER' subCategoria='billeteras' />} />
		<Route path='mujer/accesorios/correas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='correas' />} />
		<Route path='mujer/accesorios/bolsos' element={<PresentacionSubcategoria genero='MUJER' subCategoria='gorras' />} />

		<Route path="login" element={<Login />} />
		<Route path="registro" element={<Registro />} />

		<Route path="*" element={<Nada />}> </Route>
		<Route path="/" element={<Body />}></Route>
		<Route path="carrito" element={<PresentacionCarrito />}></Route>

		{
			productos.map((producto) => {

				return (
				<Route path={`${producto.genero_producto}/${producto.categoria_producto}/${producto.subcategoria_producto}/producto-${producto.id_producto}`}
				element={<PresentacionProducto producto={producto} ></PresentacionProducto>}>

				</Route>
				)
			})
		}

	

		</Routes>

		</Router>
		</CartProvider>


		</div>
		);
	}
	export default App;