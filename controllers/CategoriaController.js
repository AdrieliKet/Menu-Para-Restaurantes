const CategoriaService = require("../services/CategoriaService")


module.exports = class CategoriaController {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await CategoriaService.buscarPorId(req.params.idCategoria));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CategoriaController.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await CategoriaService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CategoriaController.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await CategoriaService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CategoriaController.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await CategoriaService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CategoriaController.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await CategoriaService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('CategoriaController.atualizar ' + e.message);
        }
    } // atualizar()
} 