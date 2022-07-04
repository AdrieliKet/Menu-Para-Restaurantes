const RestauranteController = require("../controllers/RestauranteController")

module.exports = class RestauranteRoute {
    constructor(app) {
        app.route("/restaurante").get(RestauranteController.getRestaurantes);
        app.route("/restaurante").post(RestauranteController.save);
    }
}