import pokemons from "../data/pokemons.json" assert{type: "json"};

const pokemonsDatamapper = {
    getAllPokemons() {
        const allPokemons = pokemons;
        return allPokemons;
    },

    getPokemonById(id) {
        const pokemon = pokemons.find(element => element.id == id);
        return pokemon;
    },

    getPokemonsByType(type) {
        const pokemonsByType = pokemons.filter(element => element.type.includes(type));
        return pokemonsByType;
    },
    
}

export { pokemonsDatamapper };