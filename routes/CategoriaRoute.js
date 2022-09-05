const CategoriaController = require("../controllers/CategoriaController")

module.exports = class CategoriaRoute {
    constructor(app) {
        app.route("/categoria")
            .get(CategoriaController.buscarTodos)
            .post(CategoriaController.criar)
            .put(CategoriaController.atualizar)
            .delete(CategoriaController.deletar)

        app.route('/categoria/:idCategoria').get(CategoriaController.buscarPorId);
    }
}