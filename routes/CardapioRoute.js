const CardapioController = require("../controllers/CardapioController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/cardapio")
            .get(CardapioController.buscarTodos)
            .post(CardapioController.criar)
            .put(CardapioController.atualizar)
            .delete(CardapioController.deletar)

        app.route('/cardapio/:idCardapio').get(CardapioController.buscarPorId);
    }
}