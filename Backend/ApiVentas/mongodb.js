const {MongoClient} = require("mongodb")

const getClient = async (nameDb) => {
    
    const url = "mongodb+srv://userudea:0trAwY7ibKMnPSGn@cluster0.xbaqegw.mongodb.net/"+nameDb

    const client = new MongoClient(url)

    await client.connect()
    .then(
        (db)=>{
            console.log("Conexión exitosa")
        }
    ).catch(
        (error)=>{
            console.log("Error al conectarse a la base de datos")
        }
    )

    return client
}

const getCollection = async (client, nameDb) => {
    
    const db = client.db(nameDb)

    const collection = await db.collection("ventas")

    return collection

}

const closeClient = async (client) => {
    await client.close()
}

module.exports.getCollectionExport = getCollection;
module.exports.getClientExport = getClient;
module.exports.closeClientExport = closeClient;