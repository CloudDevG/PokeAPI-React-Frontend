import { apiClient } from './ApiClient';

export const retrieveAllPokemonFromPokedexByGeneration = (genId) => apiClient.get('http://localhost:8080/api/v1/pokedex/gen/' + genId);
