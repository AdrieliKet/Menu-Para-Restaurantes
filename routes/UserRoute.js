const UserControl = require("../controllers/UserController")

module.exports = class UserRoute {
    constructor(app) {
        app.route("/user")
            .get(UserControl.buscarTodos)
            .post(UserControl.criar)
            .put(UserControl.atualizar)
            .delete(UserControl.deletar)
        
        app.route('/user/:idUsuario').get(UserControl.buscarPorId);
    }
}