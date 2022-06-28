
const CounterController = require("../controllers/CounterController")

module.exports = class CuonterRoute{
    constructor(app){
        app.route("/counter").get(CounterController.getCounter);

        app.route("/counter/increment").get(CounterController.increment);

        app.route("/counter/decrement").get(CounterController.decrement);
    }
}