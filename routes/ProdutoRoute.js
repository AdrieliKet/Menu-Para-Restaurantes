const ProdutoController = require("../controllers/ProdutoController")

module.exports = class ProdutoRoute {
    constructor(app) {
        app.route("/produto")
            .get(ProdutoController.buscarTodos)
            .post(ProdutoController.criar)
            .put(ProdutoController.atualizar)
            .delete(ProdutoController.deletar)

        app.route('/produto/:idProduto').get(ProdutoController.buscarPorId);
    }
}