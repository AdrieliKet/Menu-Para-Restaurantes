const CategoriaController = require("../controllers/CategoriaController")

module.exports = class CategoriaRoute {
    constructor(app) {
        app.route("/categoria").get(CategoriaController.getCategorias);
        app.route("/categoria").post(CategoriaController.save);
    }
}