
import './App.css';
import BannerDestacados from './components/BannerDestacados';
import Panel from './components/Panel';
import Navegacion from './components/Navegacion';
//import MenuCategorias from './components/MenuCategorias';

function App() { 
  return (
    <div className="App">


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

        <div>
            <Panel genero="Mujer"></Panel>
        </div>
                    
        <div className='banenerMujeres'>
            <BannerDestacados genero="Mujer"
                              categoria1="Interior" 
                              categoria2="Deportivo" 
                              categoria3="Camiseta" 
                              categoria4="Accesorio" >
            </BannerDestacados>
        </div>

        <div>
            <Panel genero="Hombre"></Panel>
        </div>

        <div className='banenerHombres'>
            <BannerDestacados genero="Hombre"
                              categoria1="Calzado" 
                              NavInferior        categoria2="Camiseta" 
                              categoria3="Deportivo" 
                              categoria4="Interior" >
            </BannerDestacados>
        </div>        
    </div>
  );
}
export default App;
