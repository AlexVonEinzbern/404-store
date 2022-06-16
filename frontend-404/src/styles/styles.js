
import { makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  Navegacion:{
    position:'fixed',
    top:0

  },
  fantasma:{

    height:'fitContent',
    with:'fitContent',
    position:'relative',
    top:'-15px',

    
  },


  botonesNavegacion:{
    position:'inherit',
    fontWeight:'bold',
    margin:'auto',
    display:'flex',
    height:'100%',
    left:'vh'
    
  },

  itemNavSuperior:{
    margin: '4px',
    fontWeight:'100',
  },

  barraSuperior:{
    background:alpha(theme.palette.common.black, 0.07),
    height:'30px',
    minHeight:'30px',
    display: 'flex',
    justifyContent: 'right'
    
    },

  barraInferior:{ 

    margin:'0 30px'

  },
    contenedor: {
    },

    
    menuItemAyuda:{

      height:'30px',
      minHeight:0,

     
    },

    gato:{
     display:'flex'

    },

    menuAyuda:{
      top:'200px'
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: 20,
      backgroundColor: alpha(theme.palette.common.black, 0.05),

      '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.10),
      },

      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      height: '60%',
      margin:'auto',
 
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },

    btn:{
      height:'100%'
    }
  }));
  