import { pokemonsDatamapper } from "../datamappers/pokemonsDatamapper.js";

const pokemonsController = {
    getAllPokemons(req, res) {
        const allPokemons = pokemonsDatamapper.getAllPokemons();
        return res.json(allPokemons);
    },

    getPokemonById(req, res) {
        const pokemonId = req.params.id;
        const pokemonById = pokemonsDatamapper.getPokemonById(pokemonId);
        return res.json(pokemonById);
    },

    getPokemonsByType(req, res) {
        const pokemonType = req.params.type;
        const pokemonByType = pokemonsDatamapper.getPokemonsByType(pokemonType);
        return res.json(pokemonByType);
    },

}

export {pokemonsController};