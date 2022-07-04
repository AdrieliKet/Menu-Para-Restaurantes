const ProdutoController = require("../controllers/ProdutoController")

module.exports = class ProdutoRoute {
    constructor(app) {
        app.route("/produto").get(ProdutoController.getProdutos);
        app.route("/produto").post(ProdutoController.save);
    }
}