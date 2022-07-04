const express = require("express");
const cors = require("cors");
const { json } = require("express");
const UserRoute = require("./routes/UserRoute")
const ProdutoRoute = require("./routes/ProdutoRoute")
const RestauranteRoute = require("./routes/RestauranteRoute")
const CategoriaRoute = require("./routes/CategoriaRoute")
const porta = process.env.PORT || 3000;


class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.json({
                name: "menu-restaurantes-api",
                version: "1.0.0",
                description: "Projeto para fins didáticos",
                author: "Adrieli K. santos"
            })
        })

        app.listen(porta, () => {
            console.log(`Servidor inicializado na porta: ${porta}`)
        })
        new UserRoute(app)
        new ProdutoRoute(app)
        new RestauranteRoute(app)
        new CategoriaRoute(app)
    }
}
App.init();