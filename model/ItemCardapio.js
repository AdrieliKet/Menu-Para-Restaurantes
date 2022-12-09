"use strict";

const Mongoose = require("mongoose");

module.exports = class ItemCardapio extends Mongoose.Schema {
    constructor() {
        super({
            idCardapio: String,
            idProduto: String,
            create_at: Date,
            access_at: Date,
            update_at: Date
        });
        Mongoose.model("ItemCardapio", this);
    } // constructor()
};