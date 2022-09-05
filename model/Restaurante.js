"use strict";

const Mongoose = require("mongoose");

module.exports = class Restaurante extends Mongoose.Schema {
    constructor() {
        super({
            nome: String,
            cnpj: String,
            telefone: String,
            email: String,
            taxaEntrega: Number,
            cep: Number,
            uf: String,
            endereco: String,
            bairro: String,
            cidade: String,
            categoria: String,
            create_at: Date,
            access_at: Date,
            update_at: Date
        });
        Mongoose.model("Restaurante", this);
    } // constructor()
};