import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { SeparadorTexto } from "./Separador";
import { PinDropSharp } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({

    contImgBanner: {
        width: '500px'
    },
    imgBanner: {
        width: '100%',
        objectFit: 'cover',
        height: '700px'
    },
    boton: {
    
        color: '#fff',
        fontSize: '36px',
        textAlign: 'center',
        backgroundColor: '#ab003c',
        borderRadius: '0'
    },

    cont:{
        position:'relative'
    },

    ContNombreCategoria:{
        display:'flex',
        position:'absolute',
        top:'50%',
        color:'#fff',
        fontSize:'60px',
        textAlign:'center',
        width:'',
        fontWeight:'bold',
        backgroundColor:'rgba(0,0,0,0.4)',
        padding:'2% 0px',
        justifyContent:'space-around',
        width:'100%'
    }



}))



const TarjetaCategoria = (props) => {

    const classes = useStyle()

    return (
        
        <div>
            <div className={classes.cont}>

                <div className={classes.ContImgBanner}>
                    <img src={require(`../img/Banner/${props.genero}/${props.categoria}/1.jpg`)} alt="" className={classes.imgBanner} />
                </div>

                <div className={classes.ContNombreCategoria}>

                    <div>
                            {props.cat}

                    </div>
                    
                    <Button variant="text" color="default" className={classes.boton}>
                    VER MAS
                    </Button>

                </div>



                

            </div>

        </div>



    )
}




const TarjetaSubcategoria = (props) => {

    const classes = useStyle()

    return (
        
        <div>
            <div className={classes.cont}>

                <div className={classes.ContImgBanner}>
                    <img src={require(`../img/Banner/${props.genero}/${props.idCategoria}/${props.subcategoria}/1.jpg`)} alt="" className={classes.imgBanner} />
                </div>

                <div className={classes.ContNombreCategoria}>

                    <div>
                            {props.nombre}

                    </div>
                    
                    <Button variant="text" color="default" className={classes.boton}>
                    VER MAS
                    </Button>

                </div>



                

            </div>

        </div>



    )
}










const useStyle2 = makeStyles(()=>({

    
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
const TarjetaProducto =(props)=>{

    const classes=useStyle2();
    
    return (
        <div className={classes.contTarProd}>
                <img src={require('../img/Banner/BannerMujer.jpg')} className={classes.imgTarProd} />

            <div className={classes.contTexeProd}>

                <div className={classes.txtProd}>

                    <div variant="h4" color="initial" className={classes.nombre}>  {props.nombre}  </div>
                    <div variant="h4" color="initial" className={classes.categoria}> {props.categoria}</div>   
                </div>
                <div variant="h4" color="initial" className={classes.txtProd}> {props.precio}</div>
                
            </div>

        </div>
            

    )
}


export {TarjetaCategoria, TarjetaProducto,TarjetaSubcategoria}