import React from "react";
import { makeStyles } from "@material-ui/core";

const  useStyle=makeStyles((theme)=>({

    contImgBanner:{
        width:'500px'
    },
    imgBanner:{
        width:'100%',
        objectFit:'cover',
        height:'700px'
    }

}))




export const Banner=(props) =>{

    const classes=useStyle()

return(

    <div className={classes.ContImgBanner}>
        <img src={require(`../img/Banner/Banner${props.genero}.jpg`)} alt="" className={classes.imgBanner}/>
    </div>
)
}