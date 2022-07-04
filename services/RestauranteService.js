var restaurantes = [];
module.exports = class RestauranteService {
    static getRestaurantes() {
        return { restaurantes: restaurantes }
    }
    static save(restaurante) {
        restaurantes.push(restaurantes)
        return { restaurante: restaurante }
    }

}