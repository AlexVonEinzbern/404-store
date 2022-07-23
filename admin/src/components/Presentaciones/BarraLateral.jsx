import React from "react";
import { ButtonGroup } from "@material-ui/core";
import {Button} from "@material-ui/core";

export const BarraLateral=()=>{

    
    
    return (

<div>
        
        <ButtonGroup variant="text" color="default" aria-label="" orientation="vertical">
          <Button> Agregar</Button>
          <Button> Editar</Button>
          <Button> Eliminar</Button>
          <Button> Listar</Button>
        </ButtonGroup>
    </div>
    )
}