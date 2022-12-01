let carritos = require("./carrito.json")

const carritoget = () => {
    return carritos
}

const carritosSet = (carrito)=>{
    carritos.push(carrito)
    return carritos
}

//Consulta por idcarrito para conectar con productos:
const carritosgetid = (id) => {
    let carrito = carritos.find(
        (elemento)=>{
            elemento.id === id
        }
    )
    console.log(carrito)
    return carrito
}

module.exports.carritogetExport = carritoget;
module.exports.carritosSetExport = carritosSet;

module.exports.carritosgetidExport = carritosgetid;