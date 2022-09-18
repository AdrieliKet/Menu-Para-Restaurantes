
"use strict";
const UsuarioService = require("../services/UsuarioService")
module.exports = class UsuarioControl {
    static async buscarPorId(req, res) {
        try {
            res.status(200).send(await UsuarioService.buscarPorId(req.params.idUsuario));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControll.buscarPorId ' + e.message);
        }
    } // buscarPorId()

    static async buscarTodos(req, res) {
        try {
            res.status(200).send(await UsuarioService.buscarTodos());
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControll.buscarTodos ' + e.message);
        }
    } // buscarTodos()

    static async criar(req, res) {
        try {
            res.status(200).send(await UsuarioService.criar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControll.criar ' + e.message);
        }
    } // criar()

    static async deletar(req, res) {
        try {
            res.status(200).send(await UsuarioService.deletar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControll.deletar ' + e.message);
        }
    } // deletar()

    static async atualizar(req, res) {
        try {
            res.status(200).send(await UsuarioService.atualizar(req.body));
        } catch (e) {
            res.status(500).send(e.message);
            console.error('UsuarioControll.atualizar ' + e.message);
        }
    } // atualizar()
}