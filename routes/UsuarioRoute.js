const UsuarioControl = require("../controllers/UsuarioController")

module.exports = class UsuarioRoute {
    constructor(app) {
        app.route("/usuario")
            .get(UsuarioControl.buscarTodos)
            .post(UsuarioControl.criar)
            .put(UsuarioControl.atualizar)
            .delete(UsuarioControl.deletar)
        
        app.route('/usuario/:idUsuario').get(UsuarioControl.buscarPorId);
    }
}