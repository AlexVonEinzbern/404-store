
import './App.css';
import Navegacion from './components/Navegacion';
import { Body } from './components/Body';

import { tema } from './styles/tema';
import { ThemeProvider } from '@material-ui/core';


function App() {
  return (
    <ThemeProvider theme={tema}>

        <Navegacion></Navegacion>
        <Body></Body>
    </ThemeProvider>

  );
}

export default App;
