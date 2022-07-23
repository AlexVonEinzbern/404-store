
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion.jsx'
import { PresentacionAgregarProducto } from './components/Presentaciones/PresentacionAgregarProducto';
import {PresentacionEditarProducto} from './components/Presentaciones/PresentacionEditarProducto'
import { tema } from './components/Navegacion/styles/tema';
function App() {
  return (


    <ThemeProvider theme={tema}>
<div>

<Navegacion></Navegacion>
<PresentacionAgregarProducto></PresentacionAgregarProducto>
<PresentacionEditarProducto></PresentacionEditarProducto>
</div>

    </ThemeProvider>

    
    
  );
}

export default App;
