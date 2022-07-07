
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
    position:'absolute',
    fontWeight:'bold',
    width:'100%',
    display:'flex',
    justifyContent:'center',
    
    
    },

    a:{
      color:'black',
      '&:visited':{
        color:'black'

    }

    
 
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
    justifyContent:'right',
    margin:0,
    padding:'0 48px'
    

    },

  barraInferior:{ 
    padding:0,
    margin:'0 48px',
    justifyContent: 'space-between',
    


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

    botonMenu:{
      Animation:'1seg',
      "&:hover":{
        borderBotton:'2px solid #000'
        
      }
    },

    menuAyuda:{
      top:'200px'
    },

    menuButton: {
      marginRight: theme.spacing(2),
    },

    title: {
   
      textDecoration:'none',
      zIndex:'1',
      color:'black',
      "&:visited":{
        color:'#000',
      
        
      
      }
      
      
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

      border:'none'
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

    barraBuscar:{

      // border: '2 px solid red',
      // backgroundColor:'white',
      borderRadius:'300px',
      display:'none'

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
  