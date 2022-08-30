"use strict";
require("./config");

const express = require("express");
const cors = require("cors");
const { json } = require("express");
const UserRoute = require("./routes/UserRoute")
const ProdutoRoute = require("./routes/ProdutoRoute")
const RestauranteRoute = require("./routes/RestauranteRoute")
const CategoriaRoute = require("./routes/CategoriaRoute")
const FabricaConexao = require("./conection/FabricaConexao")
const porta = process.env.PORT || 3000;


class App {
    static async init() {
        let app = new express();
        app.use(cors());
        app.use(express.json());

        // conexão com o banco de dados
        try {
            console.log("Obtendo conexão com o banco de dados...");
            await FabricaConexao.obterConexao();
            console.log("Banco conectado com sucesso!");
        } catch (error) {
            console.log(
                `Erro ao conectar com o banco de dados: ${error.message}`);
            process.exit(1);
        }

        // instanciando os modelos
        const Usuario = require("./model/Usuario");
        new Usuario();

        //instanciando as rotas
        new UserRoute(app)
        new ProdutoRoute(app)
        new RestauranteRoute(app)
        new CategoriaRoute(app)

        // Rota básica da aplicação
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
        
    }
}
App.init();