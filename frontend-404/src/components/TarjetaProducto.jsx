import React from "react";
import { div } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles(()=>({

    
    contTarProd:{
        width:'100%',
        backgroundColor:'',
        height:'fitContent'


    },
    imgTarProd:{
        
        width:'100%'
    
        


    },
    contTexeProd:{

        display:'flex',

        height:'max-content',
        alignItems:'center',
        justifyContent:'space-between'
    },

    txtProd:{
        
        margin:'20px 20px'
    },

    nombre:{
        fontWeight:'bold'
    },

    categoria:{
        opacity:'0.7'
    }






}))
export const TarjetaProducto =()=>{

    const classes=useStyle();
    
    return (
        <div className={classes.contTarProd}>
                <img src={require('../img/Banner/BannerMujer.jpg')} className={classes.imgTarProd} />

            <div className={classes.contTexeProd}>

                <div className={classes.txtProd}>

                    <div variant="h4" color="initial" className={classes.nombre}>  Nike mela  </div>
                    <div variant="h4" color="initial" className={classes.categoria}> yo que le diga, comprela</div>   
                </div>
                <div variant="h4" color="initial" className={classes.txtProd}> $250.000</div>
                
            </div>

        </div>
            

    )
}