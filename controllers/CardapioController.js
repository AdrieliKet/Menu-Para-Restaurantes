const CardapioService = require("../services/CardapioService")


module.exports = class CardapioController {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await CardapioService.buscarPorId(req.params.idCardapio));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CardapioController.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await CardapioService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CardapioController.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await CardapioService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CardapioController.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await CardapioService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CardapioController.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await CardapioService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CardapioController.atualizar ' + e.message);
        }
    } // atualizar()
} 