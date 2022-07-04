const RestauranteService = require("../services/RestauranteService")


module.exports = class RestauranteController {
    static async getRestaurantes(req, res) {
        res.status(200).send(RestauranteService.getRestaurantes())
    }

    static async save(req, res) {
        res.status(200).send(RestauranteService.save(req.body))
    }
} 