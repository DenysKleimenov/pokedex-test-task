import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import { PokemonData } from '../types/Pokemon/PokemonData';
import { getButtonColor } from './PokemonInfo';

interface Props {
  pokemon: PokemonData;
}

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

const formIdDigits = (id: number) => {
  if (id >= 100) {
    return id;
  }

  return id < 10 ? `00${id}` : `0${id}`;
};

export const SelectedPokemonInfo: React.FC<Props> = ({ pokemon }) => {
  const {
    stats, weight, moves, id,
  } = pokemon;
  const { name } = pokemon.types[0].type;
  const totalMoves = moves.length;
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
          xs: '-1px -1px 15px rgba(120, 106, 106, 0.5)',
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
          xs: '1px solid black',
        },
        borderRadius: '10px',
        backgroundColor: getButtonColor(pokemon.types[0].type),
      }}
      id="selected_pokemon"
    >
      <CardMedia
        sx={{
          height: {
            xs: 200,
          },
          width: {
            xs: 222,
          },
          mb: '10px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          borderRadius: '5px',
        }}
        // eslint-disable-next-line max-len
        image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        title={pokemon.name}
      />
      <CardContent
        sx={{
          padding: 0,
          bgcolor: '#fff',
          borderRadius: '8px',
          pt: '10px',
        }}
      >
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
            fontWeight: 600,
            mb: '5px',
          }}
        >
          {`${pokemon.name} #${formIdDigits(id)}`}
        </Typography>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontWeight: 500,
          }}
        >
          <tbody>
            {statFields.map((field, index) => (
              <tr key={field}>
                <td style={{ border: '1px solid transparent' }}>{field}</td>
                <td
                  style={{
                    textTransform: 'capitalize',
                    border: '1px solid transparent',
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
