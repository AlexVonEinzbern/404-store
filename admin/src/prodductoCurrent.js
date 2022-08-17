let productoCurrent=  {

  }


    if (window.localStorage) {
      if (window.localStorage.getItem('productoCurrent') !== undefined
        && window.localStorage.getItem('productoCurrent')
      ) {

        productoCurrent=JSON.parse(localStorage.getItem('productoCurrent'))

      }
    }
    else{
        productoCurrent={
            calificacion_producto: 4, 
            categoria_producto: "ropaExterior", 
            descripcion_producto: "Est. Tempora. Velit. Sed. Etincidunt. Etincidunt. Voluptatem.\n\nModi. Consectetur. Sed. Adipisci. Magnam. Dolor. Amet. Eius. Tempora. Magnam.\n\nLabore. Dolore. Dolor. Labore. Quaerat. Numquam.\n\nAmet. Tempora. Quiquia. Sed. Amet. Eius. Dolorem.\n\nSit. Quaerat. Amet. Velit. Consectetur. Non.", 
            genero_producto: "MUJER", 
            id_producto: 62, 
            name_producto: "producto 0", 
            precio_producto: 112000.0, 
            stock_producto: 30, 
            stock_vendido_producto: 118, 
            subcategoria_producto: "shorts", 
            talla_producto: "L", 
            url_imagen_producto: "https://ojerosos.blob.core.windows.net/imagenes404/mujer-ropaExterior-short6-color1.jpg"
         
          }
    }





    

export {productoCurrent}