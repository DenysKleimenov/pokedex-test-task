import { Pokemon } from './Pokemon';

export interface PokemonResponse {
  count: number,
  next: null | string,
  previous: null | string,
  results: Pokemon[],
}
