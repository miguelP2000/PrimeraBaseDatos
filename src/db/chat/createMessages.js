const database = require('../database').sqliteConnection

const createChatTable = async() => {
    try {
        await database.schema.dropTableIfExists('Messages')

        await database.schema.createTable('chats', messagesTable => {
            messagesTable.increments('id').primary();
            messagesTable.string('email', 100).notNullable();
            messagesTable.string('message', 100).notNullable();
            chatTable.string('fecha', 200).notNullable();
        })
        console.log('Chats table created!')

    } catch (err) {
        console.log(err)
    }
}

module.exports = createChatTable;