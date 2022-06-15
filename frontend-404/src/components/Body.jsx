import React from "react";
import { makeStyles, Typography } from "@material-ui/core";


const useStyle= makeStyles((theme)=>({

    division:{
        backgroundColor:'gray',
        height:'80px'
    }


}))

export const  Body=()=> {

    const classes=useStyle();

    return(
        <div>
            <div className={classes.division}>
                    <Typography variant="h4" color="initial">soy una division</Typography>
            </div>
        </div>
    )
}