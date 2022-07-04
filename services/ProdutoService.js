var produtos = [];
module.exports = class ProdutoService {
    static getProdutos() {
        return { produtos: produtos }
    }
    static save(produto) {
        produtos.push(produtos)
        return { produto: produto }
    }

}