const Mongoose = require("mongoose");
const Cardapio = Mongoose.model("Cardapio");

module.exports = class CardapioService {
    static async buscarPorId(idCardapio) {
        try {
            return await Cardapio.findById(idCardapio);
        } catch (error) {
            throw new Error('CardapioService.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await Cardapio.find({});
        } catch (error) {
            throw new Error('CardapioService.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(cardapio) {
        try {
            return await Cardapio.create(cardapio)
        } catch (error) {
            throw new Error('CardapioService.criar: ' + error);
        }
    } // criar()
    static async deletar(cardapio) {
        try {
            if (!cardapio._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await Cardapio.findOneAndDelete({ _id: cardapio._id });
        } catch (error) {
            throw new Error('CardapioService.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(cardapio) {
        try {
            return await Cardapio.findByIdAndUpdate(cardapio._id, cardapio);
        } catch (error) {
            throw new Error('CardapioService.atualizar: ' + error);
        }
    } // atualizar()

}