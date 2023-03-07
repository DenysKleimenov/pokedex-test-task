import { LoadingButton } from '@mui/lab';
import { Box, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { getPokemonsWithLimit } from '../api/pokemons';
import { BasicData as Pokemon } from '../types/Pokemon/BasicData';
import { PokemonData } from '../types/Pokemon/PokemonData';
import { PokemonInfo } from './PokemonInfo';
import { SelectedPokemonInfo } from './SelectedPokemon';

export const PokemonsList: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(
    null,
  );
  const pokemonsLimit = useRef(12);
  const [filter, setFilter] = useState('');

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      const pokemonsFromServer = await getPokemonsWithLimit(
        pokemonsLimit.current,
      );
      setPokemons(pokemonsFromServer);
      setIsLoading(false);
    } catch (err) {
      throw new Error("Couldn't load pokemons");
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const handleClick = () => {
    pokemonsLimit.current += 12;
    getPokemons();
  };

  return (
    <Container
      sx={{
        display: 'flex',
        mt: '20px',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: {
          md: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          position: 'relative',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          justifyContent: {
            sm: 'center',
          },
          width: {
            sm: 504,
            md: 524,
          },
          gap: '16px',
          mt: {
            xs: '20px',
            md: 0,
          },
          left: {
            md: '-164px',
          },
        }}
      >
        {pokemons.map((pokemon, index) => (
          <PokemonInfo
            key={pokemon.url}
            name={pokemon.name}
            id={index + 1}
            setSelectedPokemon={setSelectedPokemon}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
        {pokemons.length > 0 && (
          <LoadingButton
            loading={isLoading}
            variant="contained"
            sx={{
              borderRadius: '6px',
              width: '100%',
              mb: '10px',
              fontSize: {
                xs: 22,
                md: 18,
              },
            }}
            onClick={handleClick}
          >
            Load more
          </LoadingButton>
        )}
      </Box>
      {selectedPokemon && <SelectedPokemonInfo pokemon={selectedPokemon} />}
    </Container>
  );
};
