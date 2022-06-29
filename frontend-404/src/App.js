
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Body } from "./components/Body";
import Navegacion from './components/Navegacion'
import { PresentacionCategoria, PresentacionGenero, PresentacionSubcategoria } from "./components/Presentacion";



//import MenuCategorias from './components/MenuCategorias';

function App() {
  return (
    <div className="App">


      <Navegacion />
      <Router>

        <Routes>

          <Route path='hombre' element={<PresentacionGenero genero='HOMBRE' />} />
            <Route path='hombre/ropaExterior' element={<PresentacionCategoria genero='HOMBRE' idCategoria='RopaExterior' />} />
              <Route path='hombre/ropa-Exterior/camisas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='camisas'/>} />
              <Route path='hombre/ropa-Exterior/camisetas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='camisetas'/>} /> 
              <Route path='hombre/ropa-Exterior/jeans' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='jeans'/>} /> 
              <Route path='hombre/ropa-Exterior/pantalones' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='pantalones'/>} />
               

            <Route path='hombre/ropa-Interior' element={<PresentacionCategoria genero='HOMBRE' idCategoria='RopaInterior' />} />
              <Route path='hombre/ropa-interior/pijamas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='pijamas'/>} />
              <Route path='hombre/ropa-interior/boxers' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='boxers'/>} />
              <Route path='hombre/ropa-interior/camisetas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='camisetas'/>} />
              <Route path='hombre/ropa-interior/medias' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='medias'/>} />
              
            <Route path='hombre/ropa-Deportiva' element={<PresentacionCategoria genero='HOMBRE' idCategoria='RopaDeportiva' />} />
              <Route path='hombre/ropa-deportiva/prendas-superiores' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='prendasSuperiores'/>} />
              <Route path='hombre/ropa-deportiva/prendas-inferiores' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='prendasInferiores'/>} />
              <Route path='hombre/ropa-deportiva/accesorios' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='accesorios'/>} />


            <Route path='hombre/accesorios' element={<PresentacionCategoria genero='HOMBRE' idCategoria='Accesorios' />} />
              <Route path='hombre/accesorios/billeteras' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='billeteras'/>} />
              <Route path='hombre/accesorios/correas' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='correas'/>} />
              <Route path='hombre/accesorios/gorras' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='gorras'/>} />
              <Route path='hombre/accesorios/relojes' element={<PresentacionSubcategoria genero='HOMBRE' subCategoria='relojes'/>} />

            
            <Route path='mujer' element={<PresentacionGenero genero='MUJER' />} />
            <Route path='mujer/ropa-Exterior' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaExterior' />} />
              <Route path='mujer/ropa-Exterior/camisas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='camisas'/>} />
              <Route path='mujer/ropa-Exterior/camisetas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='camisetas'/>} /> 
              <Route path='mujer/ropa-Exterior/jeans' element={<PresentacionSubcategoria genero='MUJER' subCategoria='jeans'/>} /> 
              <Route path='mujer/ropa-Exterior/pantalones' element={<PresentacionSubcategoria genero='MUJER' subCategoria='pantalones'/>} /> 

            <Route path='mujer/ropa-Interior' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaInterior' />} />
              <Route path='mujer/ropa-interior/pijamas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='pijamas'/>} />
              <Route path='mujer/ropa-interior/panties' element={<PresentacionSubcategoria genero='MUJER' subCategoria='panties'/>} />
              <Route path='mujer/ropa-interior/tops' element={<PresentacionSubcategoria genero='MUJER' subCategoria='tops'/>} />
              <Route path='mujer/ropa-interior/medias' element={<PresentacionSubcategoria genero='MUJER' subCategoria='medias'/>} />
              
            <Route path='mujer/ropa-Deportiva' element={<PresentacionCategoria genero='MUJER' idCategoria='RopaDeportiva' />} />
              <Route path='mujer/ropa-deportiva/prendas-superiores' element={<PresentacionSubcategoria genero='MUJER' subCategoria='prendasSuperiores'/>} />
              <Route path='mujer/ropa-deportiva/prendas-inferiores' element={<PresentacionSubcategoria genero='MUJER' subCategoria='prendasInferiores'/>} />
              <Route path='mujer/ropa-deportiva/accesorios' element={<PresentacionSubcategoria genero='MUJER' subCategoria='accesorios'/>} />


            <Route path='mujer/accesorios' element={<PresentacionCategoria genero='MUJER' idCategoria='Accesorios' />} />
              <Route path='mujer/accesorios/bisuteria' element={<PresentacionSubcategoria genero='MUJER' subCategoria='billeteras'/>} />
              <Route path='mujer/accesorios/correas' element={<PresentacionSubcategoria genero='MUJER' subCategoria='correas'/>} />
              <Route path='mujer/accesorios/bolsos' element={<PresentacionSubcategoria genero='MUJER' subCategoria='gorras'/>} />
   








        </Routes>

      </Router>

    </div>
  );
}
export default App;