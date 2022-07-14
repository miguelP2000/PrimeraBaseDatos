class Contenedor {
    constructor(database, tableName) {
        this.database = database;
        this.tableName = tableName;
    }

    //Guarda un producto en la base de datos
    async save(objeto) {
        try {
            await this.database(this.tableName).insert(objeto);
            console.log('Product inserted!');
        } catch (err) {
            console.log("Error guardando producto: ", err);
        }
    }

    //Actualiza un producto con id pasado por parametro
    async saveById(id, objeto) {
        try {
            await this.database.from(this.tableName).where('id', '=', id).update(objeto);
        } catch (err) {
            console.log("Error guardando producto por ID. Error: ", err);
        }
    }

    //Retorna un producto con id pasado por parametro
    async getById(id) {
        try {
            const product = await this.database.from(this.tableName).select("*").where("id", "=", id);
            return product;
        } catch (err) {
            console.log("Error buscando producto. Error: ", err);
        }
    }

    //Retorn todos los productos
    async getAll() {
        try {
            const products = await this.database.from(this.tableName).select("*");
            return products;
        } catch (err) {
            console.log("Error buscando productos. Error: ", err);
        }
    }

    //Elimina un producto con id pasado por parametro
    async deleteById(id) {
        try {
            await this.database.from(this.tableName).where("id", "=", id).del();
        } catch (err) {
            console.log("Error eliminando producto por ID. Error: ", err);
        }
    }

}

module.exports = Contenedor;