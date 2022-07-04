const ProdutoService = require("../services/ProdutoService")


module.exports = class ProdutoController {
    static async getProdutos(req, res) {
        res.status(200).send(ProdutoService.getProdutos())
    }

    static async save(req, res) {
        res.status(200).send(ProdutoService.save(req.body))
    }
} 