import { BasicData } from './BasicData';
import { PokemonType } from './PokemonType';

export interface PokemonData {
  abilities: object[];
  base_experience: number;
  forms: BasicData[];
  game_indices: object[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: object[];
  name: string;
  order: number;
  past_types: any[];
  species: BasicData[];
  sprites: object;
  stats: {
    base_stat: number;
    effort: number;
    stat: BasicData;
  }[];
  types: PokemonType[];
  weight: number;
}
