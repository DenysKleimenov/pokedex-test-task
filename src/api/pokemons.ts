import { PokemonResponse } from '../types/Pokemon/PokemonResponse';
import { PokemonData } from '../types/Pokemon/PokemonData';
import { client } from '../utils/fetchClient';

export const getPokemonsWithLimit = async (limit: number) => {
  const pokemons = await client.get<PokemonResponse>(`pokemon/?limit=${limit}`);

  return pokemons.results || null;
};

export const getPokemonInfo = async (name: string) => {
  const pokemonInfo = await client.get<PokemonData>(`pokemon/${name}`);

  return pokemonInfo || null;
};
