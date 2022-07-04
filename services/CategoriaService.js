var categorias = [];
module.exports = class CategoriaService {
    static getCategorias() {
        return { categorias: categorias }
    }
    static save(categoria) {
        categorias.push(categorias)
        return { categoria: categoria }
    }

}