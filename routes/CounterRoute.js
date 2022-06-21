
const CounterController = require("../controllers/CounterController")

module.exports = class CuonterRoute{
    constructor(app){
        app.route("/counter").get(CounterController.getController);
    }
}