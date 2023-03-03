import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PokemonData } from '../types/Pokemon/PokemonData';

interface Props {
  pokemon: PokemonData;
}

export const SelectedPokemonInfo: React.FC<Props> = ({ pokemon }) => {
  const { stats, weight, moves } = pokemon;
  const { name } = pokemon.types[0].type;
  const totalMoves = moves.length;
  const statFields = [
    'Type',
    'Attack',
    'Defense',
    'HP',
    'SP Attack',
    'SP Defense',
    'Speed',
    'Weight',
    'Total moves',
  ];
  const statValues = stats
    .sort((a, b) => {
      const { name: firstName } = a.stat;
      const { name: secondName } = b.stat;

      return firstName.localeCompare(secondName);
    })
    .map((stat) => stat.base_stat);
  const fieldsValues = [name, ...statValues, weight, totalMoves];

  return (
    <Card
      sx={{
        padding: '10px',
        minWidth: {
          xs: '70px',
        },
        textAlign: 'center',
        order: {
          xs: -1,
          md: 0,
        },
        boxShadow: {
          xs: '-1px 4px 19px 4px rgba(255, 1, 5, 0.6)',
          // eslint-disable-next-line max-len
          md: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        },
        position: {
          md: 'fixed',
        },
        top: {
          xs: '24%',
        },
        right: {
          xs: '10%',
          md: '8%',
          lg: '18%',
          xl: '24%',
        },
        border: {
          md: '1px solid black',
        },
      }}
      id="selected_pokemon"
    >
      <CardMedia
        sx={{
          height: {
            xs: 200,
          },
          width: {
            xs: 220,
          },
          border: '1px solid black',
          mb: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        // eslint-disable-next-line max-len
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        title={pokemon.name}
      />
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
            },
            fontWeight: 500,
            mb: '5px',
          }}
        >
          {pokemon.name}
        </Typography>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {statFields.map((field, index) => (
              <tr key={field}>
                <td style={{ border: '1px solid black' }}>{field}</td>
                <td
                  style={{
                    textTransform: 'capitalize',
                    border: '1px solid black',
                  }}
                >
                  {fieldsValues[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};
