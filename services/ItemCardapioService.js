const Mongoose = require("mongoose");
const ItemCardapio = Mongoose.model("ItemCardapio");

module.exports = class ItemCardapioService {
    static async buscarPorId(idItemCardapio) {
        try {
            return await ItemCardapio.findById(idItemCardapio);
        } catch (error) {
            throw new Error('ItemCardapioService.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await ItemCardapio.find({});
        } catch (error) {
            throw new Error('ItemCardapioService.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(itemCardapio) {
        try {
            return await ItemCardapio.create(itemCardapio)
        } catch (error) {
            throw new Error('ItemCardapioService.criar: ' + error);
        }
    } // criar()
    static async deletar(itemCardapio) {
        try {
            if (!itemCardapio._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await ItemCardapio.findOneAndDelete({ _id: itemCardapio._id });
        } catch (error) {
            throw new Error('ItemCardapioService.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(itemCardapio) {
        try {
            return await ItemCardapio.findByIdAndUpdate(itemCardapio._id, itemCardapio);
        } catch (error) {
            throw new Error('ItemCardapioService.atualizar: ' + error);
        }
    } // atualizar()

}