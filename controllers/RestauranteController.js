const RestauranteService = require("../services/RestauranteService")


module.exports = class RestauranteController {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await RestauranteService.buscarPorId(req.params.idRestaurante));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('RestauranteController.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await RestauranteService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('RestauranteController.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await RestauranteService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('RestauranteController.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await RestauranteService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('RestauranteController.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await RestauranteService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('RestauranteController.atualizar ' + e.message);
        }
    } // atualizar()
} 