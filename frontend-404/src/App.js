
import './App.css';
import BannerDestacados from './components/BannerDestacados';
import Panel from './components/Panel';
import Navegacion from './components/Navegacion'
import{
    BrowserRouter as Router,
    Routes,
    Route,
    LinkHombre
   }from"react-router-dom";
import Home from './components/Home';
import { BannerNuevaColecion} from './components/BannerNuevaColeccion';
import { BannerNuevaColecionMujer} from './components/BannerNuevaColeccionMujer';

//import MenuCategorias from './components/MenuCategorias';

function App() { 
  return (
    <div className="App">

        <Router>

        <Navegacion className="Navegacion"
                    categoria1="HOMBRES"
                    categoria2="MUJERES"
                    textoLogin="Iniciar Sesion"> 
        </Navegacion> 
{/* 
        <MenuCategorias className="Hombres" 
                        nombreCategoria1="ROPA EXTERIOR"
                        categoria1Subcategoria1="Camisas"
                        categoria1Subcategoria2="Camisetas"
                        categoria1Subcategoria3="Polos"
                        categoria1Subcategoria4="Jeans"
                        categoria1Subcategoria5="Pantalones"
                        categoria1Subcategoria6="Sudaderas"
                        categoria1Subcategoria7="Bermudas"
                        categoria1Subcategoria8="Chaquetas"

                        nombreCategoria2="ROPA INTERIOR"
                        categoria2Subcategoria1="Pijamas"
                        categoria2Subcategoria2="Boxers"
                        categoria2Subcategoria3="Camisetas"
                        categoria2Subcategoria4="Medias"
                        

                        nombreCategoria3="ROPA DEPORTIVA"
                        categoria3Subcategoria1="Prendas superiores"
                        categoria3Subcategoria2="Prendas inferiores"
                        categoria3Subcategoria3="Accesorios"

 
                        nombreCategoria4="ROPA EXTERIOR"
                        categoria4Subcategoria1="Gorras"
                        categoria4Subcategoria2="Relojes"
                        categoria4Subcategoria3="Correas"
                        categoria4Subcategoria4="Calzado"
                        categoria4Subcategoria5="Billeteras">           
        </MenuCategorias>  */}
        
        <Routes>

            <Route path='/' element={<Home></Home>}>
            </Route>


            <Route path='Hombre' element={<BannerNuevaColecion genero="Hombre" ></BannerNuevaColecion>}>
            </Route>

            <Route path='Mujer' element={<BannerNuevaColecionMujer genero="Mujer" ></BannerNuevaColecionMujer>}>
            </Route>

        </Routes>

            
            
        </Router>
              
    </div>
  );
}
export default App;
