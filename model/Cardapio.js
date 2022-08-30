"use strict";

const Mongoose = require("mongoose");

module.exports = class Categoria extends Mongoose.Schema {
    constructor() {
        super({
            nome: String,
            produto: String,
            create_at: Date,
            access_at: Date,
            update_at: Date
        });
        Mongoose.model("Categoria", this);
    } // constructor()
};