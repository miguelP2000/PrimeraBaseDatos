class Chat {
    constructor(database, tableName) {
        this.database = database;
        this.tableName = tableName;
    }

    async save(mensaje) {
        try {
            await database(this.tableName).insert(mensaje);
            console.log('Mensaje inserted!');
            return true;
        } catch (err) {
            console.log("Error guardando mensaje: ", err);
            return false;
        }
    }

    async getAll() {
        try {
            const messages = await database.from(this.database).select("*")
            return messages
        } catch (err) {
            console.log("Error retornando mensajes: ", err);
        }
    }

}

module.exports = Chat;