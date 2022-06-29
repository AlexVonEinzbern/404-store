import React from "react";



import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme)=>({

    texto:{
        display:'flex',

        margin:'auto',
        fontSize:'96px',
        width:'100vh',
        marginTop:'400px'
        

    }


}))



export const Nada=()=>{

    const classes= useStyle()
    return(


        <div className={classes.texto}>
            Nada por aca, venga otro dia bro
        </div>
    )
}