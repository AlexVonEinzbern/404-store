import React from "react";
import { useEffect } from "react";
import { ProductosJson } from "./productosJson";

export default ProductosUpdate=()=>{


    const actualizar = ProductosJson()

    useEffect(() => {
        actualizar();
    }, [])

    return(
        <>
        </>
    )
}