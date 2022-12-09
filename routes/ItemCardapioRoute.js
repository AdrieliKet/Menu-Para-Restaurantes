const ItemCardapioController = require("../controllers/ItemCardapioController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/itemCardapio")
            .get(ItemCardapioController.buscarTodos)
            .post(ItemCardapioController.criar)
            .put(ItemCardapioController.atualizar)
            .delete(ItemCardapioController.deletar)

        app.route('/itemCardapio/:idItemCardapio').get(ItemCardapioController.buscarPorId);
    }
}