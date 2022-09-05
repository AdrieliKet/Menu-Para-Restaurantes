const ProdutoService = require("../services/ProdutoService")

module.exports = class ProdutoController {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await ProdutoService.buscarPorId(req.params.idProduto));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ProdutoController.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await ProdutoService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ProdutoController.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await ProdutoService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ProdutoController.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await ProdutoService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ProdutoController.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await ProdutoService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ProdutoController.atualizar ' + e.message);
        }
    } // atualizar()
} 