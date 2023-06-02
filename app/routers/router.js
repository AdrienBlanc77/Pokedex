import { Router } from 'express';
const router = Router();

// Import des méthodes
import { pokemonsController } from '../controllers/pokemonsController.js';

// Routes
// Tous les pokemons
router.get('/pokemons', pokemonsController.getAllPokemons);
// Un pokemon precis
router.get('/pokemons/:id', pokemonsController.getPokemonById);
// Pokemons par type
router.get('/pokemons/categorie/:type', pokemonsController.getPokemonsByType)


export {router};