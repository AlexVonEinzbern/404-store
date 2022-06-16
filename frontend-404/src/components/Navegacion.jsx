import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { ThemeProvider, Button } from '@material-ui/core';
import { tema } from '../styles/tema';
import { useStyles } from '../styles/styles';
import { FavoriteBorder, FavoriteOutlined, LocalMallOutlined, ShoppingBasketOutlined, ShoppingCart } from '@material-ui/icons';
import { MenuDesplagable } from './MenuDesplegable';
import { CategoriasMujeres } from './categoriasMejeres';
import { BotonesNavegacion } from './botonesDeNavegacion';
import { todasLasCategorias } from './todasLasCategorias';



export default function Navegacion() {
  //tema
  const classes = useStyles();
  //guarda el estado del menu
  //ide del menu
  const menuId = 'primary-search-account-menu';
  //renderiza el menu
  const [showMenu, setShowMenu] = useState(false)
  const [categoriasMenu,SetcategoriasMenu]=useState(todasLasCategorias[1])
  const seeMenu = () => {
    setShowMenu(true)
  }
  const hideMenu = () => {
    setShowMenu(false)
  }


  return (
    <ThemeProvider theme={tema}>

      <AppBar position="static" color='primary' className={classes.Navegacion}>

        <Toolbar className={classes.barraSuperior}>
          <Button color="inherit" >Ayuda</Button>
          <div color="inherit" >   |  </div>
          <Button color="inherit" > Nosotros</Button>
          <div color="inherit" >   |  </div>
          <Button color="inherit" > Iniciar Sesion</Button>
        </Toolbar>



        <Toolbar className={classes.barraInferior}>
          {/* logo */}
          <Typography className={classes.title} variant="h6" noWrap ><b>404-STORE</b></Typography>
        
          <div color="secondary" className={classes.botonesNavegacion } >
            {
              
              BotonesNavegacion.map((btn => {
                return (
                 <div key= {btn.ubicacion} className={classes.contBtnMenu}
                  >
                    <Button 
                  variant="text" 
                  color="inherit"
                  noombre='1'
                  onMouseEnter={()=>{
                    seeMenu();
                    SetcategoriasMenu(todasLasCategorias[btn.ubicacion]);
                  }}

                  onMouseLeave={hideMenu}
                  key={btn.ubicacion}
                  >
                    {btn.nombre}
                  </Button>
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

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <IconButton color="inherit" >
              <FavoriteBorder />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit">
              <Badge badgeContent={4} color='secondary' overlap='rectangular' >
                <LocalMallOutlined />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>  

      

      <div className={classes.fantasma} onMouseEnter={seeMenu}onMouseLeave={hideMenu}>
      {showMenu && <MenuDesplagable categorias={categoriasMenu} onMouseEnter={seeMenu} className={classes.MenuDesplagable}></MenuDesplagable>}
      </div>

      </AppBar>

      
      
    </ThemeProvider>
  );
}
