
import { ThemeProvider } from '@material-ui/core';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion.jsx'
import { PresentacionAgregarProducto } from './components/Presentaciones/producto/PresentacionAgregarProducto';
import { PresentacionEditarProducto } from './components/Presentaciones/producto/PresentacionEditarProducto'
import { tema } from './components/Navegacion/styles/tema';
import { PresentacionEliminarProducto } from './components/Presentaciones/producto/PresentacionEliminarProducto';
import { ItemProducto } from './components/Presentaciones/producto/ItemProducto';
import { PresentacionListarProductos } from './components/Presentaciones/producto/PresentacionListarProductos';
// import { ItemUsuario } from './components/Presentaciones/usuarios/ItemUsuario';
import { PresentacionAgregarUsuario } from './components/Presentaciones/usuarios/PresentacionAgregarUsuario';
import { PresentacionEditarUsuario } from './components/Presentaciones/usuarios/PresentacionEditarUsuario'
import { PresentacionEliminarUsuario } from './components/Presentaciones/usuarios/PresentacionEliminarUsuario'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
function App() {
  return (


    <ThemeProvider theme={tema}>
      <div className='cont'>
        <Navegacion></Navegacion>

        <Router>
          <Routes>
            
            <Route path='Admin/Gestionar-productos/Agregar' element={<PresentacionAgregarProducto></PresentacionAgregarProducto>}></Route>
            <Route path='Admin/Gestionar-productos/Editar' element={<PresentacionEditarProducto></PresentacionEditarProducto>}></Route>
            <Route path='Admin/Gestionar-productos/eliminar' element={<PresentacionEliminarProducto></PresentacionEliminarProducto>}></Route>
            <Route path='Admin/Gestionar-productos/listar' element={<PresentacionListarProductos></PresentacionListarProductos>}></Route>


            <Route path='Admin/Gestionar-usuarios/Agregar' element={<PresentacionAgregarUsuario></PresentacionAgregarUsuario>}></Route>
            <Route path='Admin/gestionar-usuarios/Editar' element={<PresentacionEditarUsuario></PresentacionEditarUsuario>}></Route>
            <Route path='Admin/Gestionar-usuarios/eliminar' element={<PresentacionEliminarUsuario></PresentacionEliminarUsuario>}></Route>
            
          </Routes>
        </Router>

        
      </div>

    </ThemeProvider>



  );
}

export default App;
