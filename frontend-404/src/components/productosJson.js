import httpClient from "./httpClient";

let data = [];
function productosJson() {
    const URI = process.env.REACT_APP_URI;        //Se conecta con el backend
    const config = {
      headers: { "Access-Control-Allow-Origin": "*" }
    };
    const res = await httpClient.get(URI + "obtenerProductos", config)
    .then(function (response){
    	data[JSON.stringify(res.data)];
    })
    .catch(function (error){
    	if(error.response.data.error){
    		console.log("Can't load data")
    	}
    })
    return data;
  }

  const productos = productosJson()

  export {productos,productosJson}



/*(async () => {
  let data = {};
  async function productosJson() {
    const URI = process.env.REACT_APP_URI;        //Se conecta con el backend
    const config = {
		headers: { "Access-Control-Allow-Origin": "*" }
	};
    const res = await httpClient.get(URI + "obtenerProductos", config)
    .then(function (response){
    	data = JSON.stringify(res.data);
    })
    .catch(function (error){
    	if(error.response.data.error){
    		console.log("Can't load data")
    	}
    })
  }
  await productosJson();
  console.log(data);
})()*/

