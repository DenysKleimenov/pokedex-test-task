import {
  Box,
  Container,
} from '@mui/material';
import { PokemonsList } from './components/PokemonsList';

const App: React.FC = () => (
  <>
    <Container
      sx={{
        display: 'flex',
        mt: '20px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          border: '1px solid black',
          textAlign: 'center',
          width: {
            xs: '258px',
            md: '50%',
          },
          fontSize: '32px',
          fontWeight: 500,
        }}
      >
        Pokedex
      </Box>
    </Container>
    <PokemonsList />
  </>
);

export default App;
