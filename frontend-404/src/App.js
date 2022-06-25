
import './App.css';
import Navegacion from './components/Navegacion';
import { Body } from './components/Body';
import Footer from "./components/Footer";
import { tema } from './styles/tema';
import { ThemeProvider } from '@material-ui/core';
import { PresentacionGenero,PresentacionCategoria } from './components/Presentacion';

function App() {
  return (
    <ThemeProvider theme={tema}>

      <div>
        <Navegacion></Navegacion>
        {/* <Body></Body> */}
       <PresentacionGenero indice='0' genero= 'HOMBRE'></PresentacionGenero>
        <PresentacionGenero indice='0' genero= 'MUJER'></PresentacionGenero>
        
        <PresentacionCategoria  
        genero='HOMBRE'
        titulo='TODO EN ROPA EXTERIOR'
        subtitulo='Lleva lo mejor en Ropa para Estar afuera'
        idCategoria='RopaExterior'
        ></PresentacionCategoria>


        {/* <PresentacionCategoria  
        genero='MUJER'
        titulo='TODO EN ROPA EXTERIOR'
        subtitulo='Lleva lo mejor en Ropa para Estar afuera'
        idCategoria='RopaInterior'
        ></PresentacionCategoria>
 */}


        {/* <PresentacionCategoria categoria='ROPA INTERIOR' indice='0'></PresentacionCategoria> */}
        
        
      </div>

    </ThemeProvider>

  );
}

export default App;
