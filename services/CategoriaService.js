const Mongoose = require("mongoose");
const Categoria = Mongoose.model("Categoria");

module.exports = class CategoriaService {
    static async buscarPorId(idCategoria) {
        try {
            return await Categoria.findById(idCategoria);
        } catch (error) {
            throw new Error('CategoriaService.buscarPorId: ' + error);
        }
    } // buscarPorId()
    static async buscarTodos() {
        try {
            return await Categoria.find({});
        } catch (error) {
            throw new Error('CategoriaService.buscarTodos: ' + error);
        }
    } // buscarTodos()
    static async criar(categoria) {
        try {
            return await Categoria.create(categoria)
        } catch (error) {
            throw new Error('CategoriaService.criar: ' + error);
        }
    } // criar()
    static async deletar(categoria) {
        try {
            if (!categoria._id)
                throw new Error('A identificação do usuário deve ser informada.');

            return await Categoria.findOneAndDelete({ _id: categoria._id });
        } catch (error) {
            throw new Error('CategoriaService.deletar: ' + error);
        }
    } // deletar()
    static async atualizar(categoria) {
        try {
            return await Categoria.findByIdAndUpdate(categoria._id, categoria);
        } catch (error) {
            throw new Error('CategoriaService.atualizar: ' + error);
        }
    } // atualizar()

}