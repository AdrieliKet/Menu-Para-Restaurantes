const CategoriaService = require("../services/CategoriaService")


module.exports = class CategoriaController {
    static async getCategorias(req, res) {
        res.status(200).send(CategoriaService.getCategorias())
    }

    static async save(req, res) {
        res.status(200).send(CategoriaService.save(req.body))
    }
} 