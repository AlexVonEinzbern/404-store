import React, { useState } from 'react';
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
import { tema } from '../styles/tema';
import { useStyles } from '../styles/styleNav';
import { FavoriteBorder, LocalMallOutlined } from '@material-ui/icons';
import { MenuDesplagable } from './MenuDesplegable';

import { BotonesNavegacion } from './botonesDeNavegacion';
import { todasLasCategorias } from './todasLasCategorias';

const URI = process.env.REACT_APP_URI;        //Se conecta con el backend

export default function Navegacion() {
  //tema
  const classes = useStyles();
  //guarda el estado del menu
  //ide del menu

  //renderiza el menu
  const [showMenu, setShowMenu] = useState(false)
  const [categoriasMenu,SetcategoriasMenu]=useState([])

  //Se usará para la búsqueda en la barra de búsqueda
  const [value, setValue] = useState('');

  //Se usará para almacenar los productoos
  const [productos, setProductos] = useState([])

  const busquedaTexto = (e) => {
    setValue(e.target.value);
  }

  const enterTexto = async (e) => {
    if (e.key === 'Enter') {
      const res = await fetch(`${URI}obtenerProductos`);
      const data = await res.json();
      setProductos(data);
    }
  }

  const seeMenu = () => {
    setShowMenu(true)
  }

  const hideMenu = () => {
    setShowMenu(false)
  }

  const productosCarrito = { productosEnCarrito : 0 }

  return (
    <ThemeProvider theme={tema}>

      <AppBar position="static" color='primary' className={classes.Navegacion}>

        <Toolbar className={classes.barraSuperior}>
          <Button color="inherit" >Ayuda</Button>
          <div color="inherit" >   |  </div>
          <Button color="inherit" > Nosotros</Button>
          <div color="inherit" >   |  </div>

            <a href="/login">

            <Button color="inherit" > Iniciar Sesion</Button>
            </a>

        </Toolbar>
        
        <Toolbar className={classes.barraInferior}>
          {/* logo */}
          
            <Typography className={classes.title} variant="h6" noWrap > <a href="/" className={classes.title}><b>404-STORE</b></a></Typography>

          
        
          <div  className={classes.botonesNavegacion } >
            {  
              BotonesNavegacion.map((btn => {
                return (
                 <div key= {btn.id} className={classes.contBtnMenu}
                  >

                  <a href={btn.ruta}  key={btn.id+1 } className={classes.a}> 

                  <Button 
                  variant="text" 
                  color="inherit"
                  onMouseEnter={()=>{
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

            <div className={classes.search}>

              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              {/*<InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value = {value}
                onChange = {busquedaTexto}
                onKeyPress = {enterTexto}
              />*/}
              <Stack spacing={2} sx={{ width: 300 }}>
              <Autocomplete
                Search
                id="free-solo-2-demo"
                disableClearable
                value = {value}
                onChange = {busquedaTexto}
                onKeyPress = {enterTexto}
                options={productos.map((option) => option.name_producto)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              </Stack>
            </div>
            <IconButton color="inherit" >
              <FavoriteBorder />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit">
              <Badge badgeContent={0} color='secondary' overlap='rectangular' >
                <LocalMallOutlined />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>

      <div className={classes.fantasma} onMouseEnter={seeMenu}onMouseLeave={hideMenu}>
      {showMenu && <MenuDesplagable categorias={categoriasMenu} className={classes.MenuDesplagable}></MenuDesplagable>}
      </div>

      </AppBar>
      
    </ThemeProvider>
  );
}
