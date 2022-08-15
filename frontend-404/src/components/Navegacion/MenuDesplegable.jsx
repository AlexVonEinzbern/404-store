
import React from "react";

import { Typography, Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import transitions from "@material-ui/core/styles/transitions";


const useStyles = makeStyles(() => ({

    contMenu: {
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        justifyContent: 'center',
        backgroundColor: '',
    },

    ContMenuCatOcult: {
        display: 'none'
    },

    itmCatMenu: {
        marginTop: '5px',
        justifyContent: 'start'
    },

    MenuDespCat: {
        margin: '20px',
        display: 'flex',
        flexDirection: 'column',
        width: 'maxContent'
    },

    cat: {
        justifyContent: 'start',
        padding: '0',
    },

    a:{
        color:'black',
        textDecoration:'none',
        '&:visited':{
          color:'black',
        textDecoration:'none',
      }
    }

}));

export const MenuDesplagable = (props) => {

    const [visible, SetVisible] = useState(true)
    const categorias = props.categorias
    const classes = useStyles()

    const hideMenu = () => {
        SetVisible(!visible)
    }

    const getSubcategorias = (categoria) => {
        const cats = []
        for (let i = 0; i < categoria.categorias.length; i++) {
            cats.push(
                <a href={`/${categoria.genero}/${categoria.id}/${categoria.categorias[i]}`} className={classes.a}>

                    <Button variant="text" color="default" className={classes.itmCatMenu}
                        key={'itemCategoriaMenu' + i} onClick={hideMenu} > {categoria.categorias[i]}

                    </Button>
                </a>
            )
        }
        return cats
    }

    return (

        <div className={visible ? [classes.ContMenuCatVis] : [classes.ContMenuCatOcult]} >
            <div className={classes.contMenu}>
                {
                    categorias.map((btn) => {
                        return (
                            <div key={btn.id} className={classes.MenuDespCat}>

                                <a href={`/${btn.genero}/${btn.id}`} className={classes.a} key={btn.id+1}>

                                    <Button variant="text" color="default" key={categorias.nombre}>
                                        <Typography variant="h6" color="initial" onClick={hideMenu} className={classes.cat}> {btn.nombre}</Typography >
                                    </Button >

                                </a>

                                <ButtonGroup variant="outlined" color="default" size="small" aria-label="" orientation='vertical' key={btn.id+2} >
                                    {
                                        getSubcategorias(btn)
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