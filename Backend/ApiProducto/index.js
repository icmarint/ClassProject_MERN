const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const productosService = require("./productoService.js")

const app = express()
const port = 8081

app.use(cors())
app.use(body_parse.json())

const pathName = "/productos"

app.get(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req)
        res.send(productosService.productosgetExport())
    }
)

app.get(pathName+"/id",
    async (req, res)=>{
        console.log("Recibimos petición")
        let id = req.query.id
        console.log(id)
        res.send(productosService.productosgetidExport(id))
    }
)

app.post(pathName,
        (req, res)=>{
            console.log("Recibimos petición")
            console.log(req.body)
            let productos = productosService.productosSetExport(req.body)
            res.send({"mensaje":"Producto guardado","productos":productos})
        }
    )

//actualizar el stock de los productos (por el momento añade un nuevo producto de existencias)
app.post(pathName+"/existencias",
        async (req, res)=> {
            console.log("Recibimos petición")
            console.log(req.body)
            let existencias = await productosService.existenciasSetExport(req.body)
            res.send({"mensaje":"Existencias actualizadas", "existencias": existencias})
        }
)

app.put(pathName,
        (req, res)=>{
            console.log("Recibimos petición")
            console.log(req.body)
            res.send("Finaliza")
        }
    )

app.patch(pathName,
        (req, res)=>{
            console.log("Recibimos petición")
            console.log(req.body)
            res.send("Finaliza")
        }
    )


app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)