
import './App.css';
import Navegacion from './components/Navegacion';
import { Body } from './components/Body';
import Footer from "./components/Footer";
import { tema } from './styles/tema';
import { ThemeProvider } from '@material-ui/core';
import { PresentacionGenero,PresentacionCategoria,PresentacionSubcategoria } from './components/Presentacion';

function App() {
  return (
    <ThemeProvider theme={tema}>

      <div>
        <Navegacion></Navegacion>
        <Body></Body>
      </div>
    </ThemeProvider>

  );
}

export default App;
