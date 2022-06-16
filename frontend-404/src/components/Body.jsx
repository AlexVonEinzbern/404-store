import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { Banner } from "./Banner";
import { TarjetaProducto } from "./TarjetaProducto";


const useStyle= makeStyles((theme)=>({

    division:{
        backgroundColor:'#eee',
        height:'64px',
        display:'flex'
    },

    aviso:{
       
     
     margin:'auto',
     width:'auto',

    },
    

    cont:{
        margin: '96px 48px'
    }



}))


export const  Body=()=> {

    const classes=useStyle();

    return(

        <div className={classes.cont}>

        <div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div>

        <div className={classes.body}>
            
            <Banner genero='Mujer'></Banner>
           


            <div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div>

            <Grid container spacing={2}>

            <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                    
                </Grid>


                <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                </Grid>

                <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                </Grid>

            </Grid>



            <div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div>





            <Grid container spacing={2}>
                <Grid
                  item
                  md={6}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                </Grid>



                <Grid
                  item
                  md={6}
                  
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>

                </Grid>
            </Grid>



      

                <div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div>




                <Grid container spacing={2}>


                <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                    
                </Grid>


                <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                </Grid>

                <Grid
                  item
                  md={4}
                >
                    <TarjetaProducto genero='Mujer'></TarjetaProducto>
                </Grid>
            </Grid>

            <div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div><div className={classes.division}>
                <div className={classes.aviso}>
                    Soy un separador por favor dejame aqui, solo quiero dar forma al diseño
                </div>
            </div>


            <Banner genero='Mujer'></Banner>

            </div>

        </div>
    )
}