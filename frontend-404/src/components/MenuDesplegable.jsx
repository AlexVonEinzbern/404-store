
import React from "react";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(() => ({

    contMenu:{
    display: 'flex',
    margin: 'auto',
    width: 'auto',
    justifyContent: 'center',
    backgroundColor:''

 
    },

    ContMenuCatOcult:{
        display: 'none'
    },

    itmCatMenu:{
        marginTop: '5px',
        justifyContent:'start'
    },

    MenuDespCat:{
        margin:'20px',
        display: 'flex',
        flexDirection:'column',
        width:'maxContent'},

    cat:{
        justifyContent:'start',
        padding:'0',
    

    }

  }));

export const MenuDesplagable = (props) => {

    const [visible,SetVisible]=useState(true)
    const categorias = props.categorias
    const classes=useStyles()

    const hideMenu=()=>{ 
        SetVisible(!visible)
    }

    const getCategorias = (categoria) => {
        const cats = []
        for (let i = 0; i < categorias.length; i++) {
            cats.push(

                <Button variant="text" color="default" className={classes.itmCatMenu} 
                key={'itemCategoriaMenu'+i} onClick={hideMenu} > {categoria[i]} 
                  
                </Button>
             
                    )
        }
        return cats
    }

    return (

        <div className={visible? [classes.ContMenuCatVis]:[classes.ContMenuCatOcult]} >
            <div className={classes.contMenu}>
            {
                categorias.map((i) => {
                    return (
                        <div key={i.id} className={classes.MenuDespCat}>                
                            <Button variant="text" color="default" key={categorias.nombre}>
                            <Typography variant="h6" color="initial" onClick={hideMenu} className={classes.cat}> {i.nombre}</Typography >
                            </Button >
                            <ButtonGroup variant="outlined" color="default" size="small" aria-label="" orientation='vertical' >
                            {
                                  getCategorias(i.categorias)
                                }
                            </ButtonGroup>


                            
                        </div>
                    )
                })
            }
            </div>
            

        </div>
    )

}