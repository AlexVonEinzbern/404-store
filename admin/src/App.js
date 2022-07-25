
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion.jsx'
import { PresentacionAgregarProducto } from './components/Presentaciones/PresentacionAgregarProducto';
import {PresentacionEditarProducto} from './components/Presentaciones/PresentacionEditarProducto'
import { tema } from './components/Navegacion/styles/tema';
import { PresentacionEliminarProducto } from './components/Presentaciones/PresentacionEliminarProducto';
import { ItemProducto } from './components/Presentaciones/ItemProducto';
import { PresentacionListarProductos } from './components/Presentaciones/PresentacionListarProductos';
function App() {
  return (


    <ThemeProvider theme={tema}>
<div>

<Navegacion></Navegacion>


<PresentacionListarProductos></PresentacionListarProductos>
<PresentacionAgregarProducto></PresentacionAgregarProducto>
<PresentacionEditarProducto></PresentacionEditarProducto>
<PresentacionEliminarProducto></PresentacionEliminarProducto>


</div>

    </ThemeProvider>

    
    
  );
}

export default App;
