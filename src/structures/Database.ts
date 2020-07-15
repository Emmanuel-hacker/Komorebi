import { ConnectionManager } from "typeorm"
import { warns } from "../models/Warns"
import { dbName } from "../Config"

const connectionManager: ConnectionManager = new ConnectionManager()
connectionManager.create({
    name: dbName,
    type: 'sqlite',
    database: './db.sqlite',
    entities: [
        warns
    ]
})

export default connectionManager