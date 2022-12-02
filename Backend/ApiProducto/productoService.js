const getMongo = require("./mongodb.js")
let request = require("axios")

//CRUD PRODUCTOS
//Consultar productos
const productosget = async () => {
    const { collection, client } = await getConexiones()
    const productos = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return productos
}

//Consultar productos por id
const productosgetid = (id) => {
    let producto = productos.find(
        (elemento)=>{
            elemento.id === id
        }
    )
    console.log(producto)
    return producto
}

//Crear productos
const productosSet = async (producto)=>{
    const { collection, client } = await getConexiones()
    await collection.insertMany(producto)
    await getMongo.closeClientExport(client)
    return await productosget()
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

async function getConexiones() {
    const nameDb = "farmacia"
    const client = await getMongo.getClientExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}

