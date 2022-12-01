let productos = require("./productos.json")
let request = require("axios")

const productosget = () => {
    return productos
}

const productosgetid = (id) => {
    let producto = productos.find(
        (elemento)=>{
            elemento.id === id
        }
    )
    console.log(producto)
    return producto
}

const productosSet = (producto)=>{
    productos.push(producto)
    return productos
}

let existencias = require("./productos.json")

const existenciasSet = async (existencia) => {
    console.log("llama a existencia a guardar")
    await request.get(
        "http://localhost:8083/carrito/id/?id="+existencia.idcarrito
    )
    .then(
        (res)=>{
            console.log("recibimos llamada del carrito")
            console.log(res)
            console.log(res.data)
            existencia.carrito = res.data
        }
    )
    console.log(existencia)
    existencias.push(existencia)
    console.log(existencias)

    return existencias
}


module.exports.productosgetExport = productosget;
module.exports.productosgetidExport = productosgetid;
module.exports.productosSetExport = productosSet;

module.exports.existenciasSetExport = existenciasSet;

