import React from "react";
import { makeStyles } from "@material-ui/styles";
import { useCart } from "react-use-cart";
import TajetaItemCarrito from "../Tarjetas/tajetaItemCarrito";
import { Select, MenuItem } from "@material-ui/core";
import { height } from "@mui/system";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Button } from "@mui/material";
import httpClient from "../httpClient";
import { useState, useEffect } from "react";
import axios from "axios";


const URI = process.env.REACT_APP_URI;        //Se conecta con el backend


const usestyles = makeStyles((theme) => ({

    cont: {
        display: 'flex',
        width: '60%',
        margin: 'auto',
        top: '144px',
        position: 'relative',

        height: 'auto',
        borderRadius: '20px',
        boxShadow: '0px 0px 20px 1px rgba(0, 0, 0, 0.2)',

    },
    all: {
        width: '100%',
        height: '100vh',
        backgroundColor: ''
    },
    lateralDer: {
        position: 'relative',
        top: '35px',

        width: '50%',

        height: '100vh',
        height: '100%-content',
        padding: '40px 40px',
        display:'flex',
        flexDirection:'column'


    }, lateralIzq: {
        position: 'relative',


        width: '50%',

        height: 'min-content',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 40px'
    },
    total: {

        fontSize: "36px",
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign:'right',
        top:0,
        position:'relative'
       
    },
    metodoPago: {
        position: 'relative',
        top: '150px',
        bottom: 0

    },
    formControl:{
        position:'relative',
       
        width:'100%',
        padding:'4px',
        right:0
    },
    textometodo:{
        textAlign:'left',
        marginBottom:'20px',
        // fontWeight:'bold',
        fontSize:'18px',
    },
    pagar:{
        position:'relative'
    },
    seleccion:{
        top:'200px',
        position:'relative',
        display:'flex',
        flexDirection:'column',
        gap:'20px'
    }

}))

export const PresentacionPago = () => {

    const classes = usestyles()
    const { items, addItem, removeItem, updateItemQuantity, cartTotal } = useCart()
    // let user={}
    // let usertMethods=[]



    // const setUser=(us)=>{
    //     user=us
    // }

    // const setUserMethods=(me)=>{
    //     usertMethods=me
    // }

    const [user, setUser] = useState();
    const [userMetodo, setUserMetodo] = useState([]);


    useEffect(() => {
        (async () => {
          try {
            const resp = await httpClient.get(URI + "/@me");
            //setUser(JSON.parse(JSON.stringify(resp.data)));
            setUser(resp.data);
            console.log(resp.data);
        
            try {
                console.log(user.id_cliente_registrado);
                //const resp = await httpClient.get(URI+"obtenerMetodoPago/"+user.id_cliente_registrado);
                //setUserMetodo(resp.data)
                console.log(userMetodo);

            } catch (error) {
                console.log("user not found");    
            }
          } catch (error) {
            console.log("Not authenticated");
          }
        })();
      }, []);

    return (


        <div className={classes.all}>

            <div className={classes.cont}>

                <div className={classes.lateralIzq}>

                    {
                        items.map((producto, index) => {
                            return (

                                <TajetaItemCarrito className={classes.tarjeta}

                                    producto={producto}
                                    key={index}
                                >
                                </TajetaItemCarrito>
                            )
                        })
                    }
                </div>
                <div className={classes.lateralDer}>



                    <div className={classes.total}>
                        ${cartTotal}
                    </div>


                    <div className={classes.seleccion}>
                    <FormControl className={classes.formControl}>
                    <div className={classes.textometodo}>Seleccione un método de pago</div>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            // open={open}
                            // onClose={handleClose}
                            // onOpen={handleOpen}
                            // value={age}
                            // onChange={handleChange}

                            variant="outlined"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                        </Select>
                    </FormControl>

                    <Button className={classes.pagar} color='secondary' variant="contained">Pagar</Button>

                    </div>

                </div>

            </div>
        </div>
    )
}