import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Badge from '@material-ui/core/Badge';

import SearchIcon from '@material-ui/icons/Search';

import { ThemeProvider, Button } from '@material-ui/core';
import { tema } from './styles/tema';
import { useStyles } from './styles/styleNav';
import { FavoriteBorder, LocalMallOutlined } from '@material-ui/icons';
import { MenuDesplagable } from './MenuDesplegable';

import { BotonesNavegacion } from './botonesDeNavegacion';
import { todasLasCategorias } from './Categorias/todasLasCategorias';

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend

export default function Navegacion() {
  //tema
  const classes = useStyles();
  //guarda el estado del menu
  //ide del menu

  //renderiza el menu
  const [showMenu, setShowMenu] = useState(false)
  const [categoriasMenu, SetcategoriasMenu] = useState([])

  //Se usará para la búsqueda en la barra de búsqueda
  const [value, setValue] = useState('');

  //Se usará para almacenar los productos
  const [productos, setProductos] = useState([])

  //Se usará para almacenar el resultado de buscar un producto
  const [producto, setProducto] = useState([])

  const nameProductos = async () => {
    const res = await fetch(`${URI}obtenerProductos`);
    const data = await res.json();
    setProductos(data);
  }

   useEffect(() => {
        nameProductos();
    }, [])

  const buscarProducto = async (name_producto) => {
    const res = await fetch(`${URI}obtenerProducto/${name_producto}`);
    const data = await res.json();
    setProducto(data);
  }

  const tarjetaProducto = (e) => {
    if (e.key === 'Enter') {
      
    }
  }

  const seeMenu = () => {
    setShowMenu(true)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const productosCarrito = { productosEnCarrito: 0 }

  return (
    <ThemeProvider theme={tema}>

      <AppBar position="static" color='primary' className={classes.Navegacion}>

        <Toolbar className={classes.barraSuperior}>

          <a href="/login" className={classes.a}>
            <Button color="inherit" > Iniciar Sesion</Button>
          </a>
        </Toolbar>

        <Toolbar className={classes.barraInferior}>
          {/* logo */}

          <Typography className={classes.title} variant="h6" noWrap > <a href="/" className={classes.title}><b>404-STORE ADMIN</b></a></Typography>

          <div className={classes.botonesNavegacion} >
            {
              BotonesNavegacion.map((btn => {
                return (
                  <div key={btn.id} className={classes.contBtnMenu}
                  >
                    <a key={btn.id + 1} className={classes.a}>

                      <Button
                        variant="text"
                        color="inherit"
                        onMouseEnter={() => {
                          seeMenu();
                          SetcategoriasMenu(todasLasCategorias[btn.id]);

                        }}

                        onMouseLeave={hideMenu}

                        key={btn.id}
                        className={classes.botonMenu}
                      >
                        {btn.nombre}

                      </Button>

                    </a>

                  </div>
                )
              }))
            }
          </div>

          <div className={classes.sectionDesktop}>

            
          </div>
        </Toolbar>

        <div className={classes.fantasma} onMouseEnter={seeMenu} onMouseLeave={hideMenu}>
          {showMenu && <MenuDesplagable categorias={categoriasMenu} className={classes.MenuDesplagable}></MenuDesplagable>}
        </div>

      </AppBar>

    </ThemeProvider>
  );
}
