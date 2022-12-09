const ItemCardapioService = require("../services/ItemCardapioService")


module.exports = class ItemCardapioController {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await ItemCardapioService.buscarPorId(req.params.idItemCardapio));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ItemCardapioController.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await ItemCardapioService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ItemCardapioController.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await ItemCardapioService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ItemCardapioController.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await ItemCardapioService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ItemCardapioController.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await ItemCardapioService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('ItemCardapioController.atualizar ' + e.message);
        }
    } // atualizar()
} 