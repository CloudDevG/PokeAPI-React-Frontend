import { apiClient } from './ApiClient';

export const retrieveAllPokemonFromPokedex
    = () => apiClient.get('http://localhost:8080/api/v1/pokedex');
