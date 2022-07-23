import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { TarjetaCategoria, TarjetaProducto, TarjetaSubcategoria } from "./Tarjetas";
import { Button } from "@material-ui/core";
import { SeparadorTexto } from "./Separador";
import { makeStyles } from "@material-ui/styles";
import { todasLasCategorias } from "./Navegacion/Categorias/todasLasCategorias";
import { Router, Routes, Route } from "react-router-dom";

import productosJson from './ProductosJson.json'


const useStyles = makeStyles((theme) => ({
    cont: {
        margin: '144px 48px'

    },
}))










export { PresentacionGenero, PresentacionCategoria, PresentacionSubcategoria, PresentacionProducto }