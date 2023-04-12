import { apiClient } from './ApiClient';

export const retrieveAllPokemonFromPokedex
    = () => apiClient.get('http://localhost8080/api/v1/pokedex');
