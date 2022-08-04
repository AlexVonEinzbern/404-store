import React from "react";
import { ButtonGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  cont: {
    width: '100%',
    color: 'black',
    textDecoration: 'none',

    width: '100%',
  },

  a: {
    color: 'black',
    textDecoration: 'none',
    width: '100%',
    '&:visited': {
      color: 'black',
      textDecoration: 'none',
    
    }
  },
  boton:{
    width:'100%'
  }

}))


export const BarraLateral = () => {


  const classes = useStyles()

  return (

    <div >
      <ButtonGroup variant="text" color="default" aria-label="" orientation="vertical" className={classes.cont}>

        <a href="./agregar" className={classes.a}> <Button className={classes.boton}> Agregar</Button></a>
        <a href="./editar" className={classes.a}> <Button className={classes.boton}> Editar</Button></a>
        <a href="./eliminar" className={classes.a}><Button className={classes.boton}> Eliminar</Button></a>
        <a href="./listar" className={classes.a}><Button className={classes.boton}> Listar</Button></a>

      </ButtonGroup>
    </div>
  )
}