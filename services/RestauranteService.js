const Mongoose = require("mongoose");
const Restaurante = Mongoose.model("Restaurante");

module.exports = class RestauranteService {
    static async buscarPorId(idRestaurante) {
        try {
            return await Restaurante.findById(idRestaurante);
        } catch (error) {
            throw new Error('RestauranteService.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await Restaurante.find({});
        } catch (error) {
            throw new Error('RestauranteService.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(restaurante) {
        try {
            return await Restaurante.create(restaurante)
        } catch (error) {
            throw new Error('RestauranteService.criar: ' + error);
        }
    } // criar()
    static async deletar(restaurante) {
        try {
            if (!restaurante._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await Restaurante.findOneAndDelete({ _id: restaurante._id });
        } catch (error) {
            throw new Error('RestauranteService.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(restaurante) {
        try {
            return await Restaurante.findByIdAndUpdate(restaurante._id, restaurante);
        } catch (error) {
            throw new Error('RestauranteService.atualizar: ' + error);
        }
    } // atualizar()

}