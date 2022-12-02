const express = require("express")
const cors = require("cors")
const body_parse = require("body-parser")
const path = require("path")
const personasService = require("./personasService.js")

const app = express()
const port = 8084

app.use(cors())
app.use(body_parse.json())

const pathName = "/personas"

app.get(pathName,
    async (req, res)=>{
        console.log("Recibimos petición")
        console.log(req)
        res.send(await personasService.personasgetExport())
    }
)

app.listen(port,
    ()=>{
        console.log("Subio el app en el puerto"+port)
    }
)