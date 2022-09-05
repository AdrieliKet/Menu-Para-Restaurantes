const Mongoose = require("mongoose");
const Produto = Mongoose.model("Produto");

module.exports = class ProdutoService {
    static async buscarPorId(idProduto) {
        try {
            return await Produto.findById(idProduto);
        } catch (error) {
            throw new Error('ProdutoService.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await Produto.find({});
        } catch (error) {
            throw new Error('ProdutoService.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(produto) {
        try {
            return await Produto.create(produto)
        } catch (error) {
            throw new Error('ProdutoService.criar: ' + error);
        }
    } // criar()
    static async deletar(produto) {
        try {
            if (!produto._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await Produto.findOneAndDelete({ _id: produto._id });
        } catch (error) {
            throw new Error('ProdutoService.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(produto) {
        try {
            return await Produto.findByIdAndUpdate(produto._id, produto);
        } catch (error) {
            throw new Error('ProdutoService.atualizar: ' + error);
        }
    } // atualizar()

}