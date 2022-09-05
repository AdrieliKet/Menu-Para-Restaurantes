const RestauranteController = require("../controllers/RestauranteController")

module.exports = class RestauranteRoute {
    constructor(app) {
        app.route("/restaurante")
            .get(RestauranteController.buscarTodos)
            .post(RestauranteController.criar)
            .put(RestauranteController.atualizar)
            .delete(RestauranteController.deletar)

        app.route('/restaurante/:idRestaurante').get(RestauranteController.buscarPorId);
    }
}