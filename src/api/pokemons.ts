import { PokemonResponse } from '../types/Pokemon/PokemonResponse';
import { PokemonInfo } from '../types/Pokemon/PokemonInfo';
import { client } from '../utils/fetchClient';

export const getPokemonsWithLimit = async (limit: number) => {
  const pokemons = await client.get<PokemonResponse>(`pokemon/?limit=${limit}`);

  return pokemons.results || null;
};

export const getPokemonInfo = async (name: string) => {
  const pokemonInfo = await client.get<PokemonInfo>(`pokemon/${name}`);

  return pokemonInfo || null;
};
