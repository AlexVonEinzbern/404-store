
import '../App.css';
import BannerDestacados from './BannerDestacados';
import Panel from './Panel'
import Navegacion from './Navegacion';


//import MenuCategorias from './components/MenuCategorias';

function Home() { 
  return (
    <div className="App">

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
export default Home;
