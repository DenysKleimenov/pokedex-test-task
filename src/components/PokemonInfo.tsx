import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { getPokemonInfo } from '../api/pokemons';
import { PokemonData } from '../types/Pokemon/PokemonData';

interface Props {
  id: number;
  name: string;
  setSelectedPokemon: (pokemonData: PokemonData) => void;
}

const getButtonColor = (type: { name: string; url: string }) => {
  switch (type.name) {
    case 'grass':
      return '#7dd87d';
    case 'poison':
      return '#5e63b6';
    case 'fire':
      return '#ff6464';
    case 'electric':
      return '#f5dd7b';
    case 'water':
      return '#00bbf0';
    default:
      return '#66bfbf';
  }
};

export const PokemonInfo: React.FC<Props> = ({
  id,
  name,
  setSelectedPokemon,
}) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    const getPokemonData = async () => {
      try {
        const pokemonDataFromServer = await getPokemonInfo(name);
        setPokemonData(pokemonDataFromServer);
      } catch (err) {
        throw new Error(`Couldn't load ${name} data`);
      }
    };

    getPokemonData();
  }, []);

  const handleClick = () => {
    if (pokemonData) {
      setSelectedPokemon(pokemonData);
    }
  };

  return (
    <Card
      sx={{
        padding: '10px',
        minWidth: {
          xs: '70px',
        },
        textAlign: 'center',
        border: '1px solid #000',
      }}
    >
      <a
        href="#selected_pokemon"
        onClick={handleClick}
      >
        <CardMedia
          sx={{
            height: {
              xs: 200,
              md: 120,
              lg: 110,
            },
            width: {
              xs: 220,
              md: 140,
              lg: 140,
            },
            border: '1px solid black',
            mb: '10px',
            cursor: 'pointer',
            '&:hover': {
              md: {
                backgroundColor: 'lightskyblue',
              },
            },
            transition: 'background-color 0.3s',
          }}
          // eslint-disable-next-line max-len
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          title={name}
        />
      </a>
      <CardContent sx={{ padding: 0 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textTransform="capitalize"
          sx={{
            fontSize: {
              xs: '26px',
              md: '22px',
              lg: '18px',
            },
            fontWeight: 500,
            mb: '5px',
          }}
        >
          {name}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: 0,
          mb: {
            xs: '40px',
            lg: '10px',
          },
          justifyContent: 'space-between',
        }}
      >
        {pokemonData?.types.map((pokemonType) => {
          const { slot, type } = pokemonType;

          return (
            <Button
              key={slot}
              size="small"
              variant="contained"
              sx={{
                backgroundColor: getButtonColor(type),
                color: '#141010',
                fontSize: {
                  xs: 22,
                  md: 18,
                  lg: 14,
                },
                fontWeight: 400,
                width: {
                  xs: 106,
                  md: 50,
                },
                padding: '0 10px',
                textTransform: 'capitalize',
                '&:hover': {
                  backgroundColor: getButtonColor(type),
                },
              }}
            >
              {type.name}
            </Button>
          );
        })}
      </CardActions>
    </Card>
  );
};
