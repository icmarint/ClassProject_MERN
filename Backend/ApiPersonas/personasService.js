const getMongo = require("./mongodb.js")

const personasget = async () => {
    const { collection, client } = await getConexiones()
    const personas = await collection.find({}).toArray()
    await getMongo.closeClientExport(client)
    return personas
}

module.exports.personasgetExport = personasget;

async function getConexiones() {
    const nameDb = "farmacia"
    const client = await getMongo.getClientExport(nameDb)
    const collection = await getMongo.getCollectionExport(client, nameDb)
    return { collection, client }
}