
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion.jsx'
import { PresentacionAgregarProducto } from './components/Presentaciones/producto/PresentacionAgregarProducto';
import {PresentacionEditarProducto} from './components/Presentaciones/producto/PresentacionEditarProducto'
import { tema } from './components/Navegacion/styles/tema';
import { PresentacionEliminarProducto } from './components/Presentaciones/producto/PresentacionEliminarProducto';
import { ItemProducto } from './components/Presentaciones/producto/ItemProducto';
import { PresentacionListarProductos } from './components/Presentaciones/producto/PresentacionListarProductos';

function App() {
  return (


    <ThemeProvider theme={tema}>
<div>

<Navegacion></Navegacion>


{/* <PresentacionListarProductos></PresentacionListarProductos> */}
<PresentacionAgregarProducto></PresentacionAgregarProducto>
<PresentacionEditarProducto></PresentacionEditarProducto>
<PresentacionEliminarProducto></PresentacionEliminarProducto>


</div>

    </ThemeProvider>

    
    
  );
}

export default App;
