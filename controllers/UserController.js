
"use strict";
const UserService = require("../services/UserService")
module.exports = class UserControll {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await UserService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserControll.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await UserService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserControll.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await UserService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserControll.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await UserService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserControll.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await UserService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UserControll.atualizar ' + e.message);
        }
    } // atualizar()
}