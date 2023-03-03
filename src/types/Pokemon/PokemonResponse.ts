import { BasicData } from './BasicData';

export interface PokemonResponse {
  count: number,
  next: null | string,
  previous: null | string,
  results: BasicData[],
}
