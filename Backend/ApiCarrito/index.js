const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const carritoService = require("./carritoService.js")


const app = express()
const port = 8083

app.use(cors())
app.use(body_parse.json())

const pathName = "/carrito"

//Mostrar listado de productos seleccionados en el carrito
app.get(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req)
        res.send(carritoService.carritogetExport())
    }
)

//Añadir productos al carrito
app.post(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req.body)
        let carritos = carritoService.carritosSetExport(req.body)
        res.send({"mensaje":"Producto guardado","carritos":carritos})
    }
)

//Consulta por idcarrito para conectar con productos:
app.get(pathName+"/id",
    async (req, res)=>{
        console.log("Recibimos petición")
        let id = req.query.id
        console.log(id)
        res.send(carritoService.carritosgetidExport(id))
    }
)

app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)