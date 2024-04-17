import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI || "";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    },
});

try {
    // Conecta o client ao servidor MongoDB
    await client.connect()
    await client.db("admin").command({ping: 1});
    console.log("Conectado ao Banco de Dados MongoDB com sucesso!! ")
} catch (error) {
    console.log(error)
}

let db = client.db("empregados");

export default db;







