const getMongo = require("./mongodb.js")

const ventasget = async () => {
    const { collection, client } = await getConexiones()
    const ventas = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return ventas
}

module.exports.ventasgetExport = ventasget;

async function getConexiones() {
    const nameDb = "farmacia"
    const client = await getMongo.getClientExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}