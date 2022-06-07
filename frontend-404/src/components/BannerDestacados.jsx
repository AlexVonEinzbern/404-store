import React from "react";
import Destacado from "./Destacado";
import "../styles/BannerDestacados.css";
import {Box,Grid} from '@material-ui/core'

function BannerDestacados(props){
    return(

        <div className="ContenedorBannerDestacados">
            <Grid container spacing={2}>


                <Grid item xs={12} sm={6} md={6} lg={12} className="extra">
                    <Box >
                        <div className="d1"><Destacado categoria={props.categoria1} genero={props.genero}></Destacado></div>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={6} md={3} lg={3}>
                    <Box >
                        <div className="d1"><Destacado categoria={props.categoria1} genero={props.genero}></Destacado></div>
                    </Box>
                </Grid>
               
                <Grid item xs={6} sm={4} md={3} lg={3}>
                    <Box >
                    <div className="d2"><Destacado categoria={props.categoria2} genero={props.genero}></Destacado></div>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={6} lg={3}>
                    <Box >
                        <div className="d3"><Destacado categoria={props.categoria3} genero={props.genero}></Destacado></div>
                    </Box>
                </Grid>

                <Grid item xs={6} sm={4} md={6} lg={3}>
                    <Box >
                    <div className="d4"><Destacado categoria={props.categoria4} genero={props.genero}></Destacado></div>
                    </Box>
                </Grid>
               
            </Grid>



        </div>
    )
}

export  default BannerDestacados