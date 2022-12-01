const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const ventasService = require("./ventasService.js")

const app = express()
const port = 8082

app.use(cors())
app.use(body_parse.json())

const pathName = "/ventas"

app.get(pathName,
    (req, res)=>{
        console.log("Recibimos petición")
        console.log(req)
        res.send(ventasService.ventasgetExport())
    }
)

app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)