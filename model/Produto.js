"use strict";

const Mongoose = require("mongoose");

module.exports = class Produto extends Mongoose.Schema {
    constructor() {
        super({
            nome: String,
            ingredientes: String,
            categoria: String,
            tamanho: String,
            preco: Number,
            create_at: Date,
            access_at: Date,
            update_at: Date
        });
        Mongoose.model("Produto", this);
    } // constructor()
};