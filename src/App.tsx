import { Box, Container } from '@mui/material';

import { PokemonsList } from './components/PokemonsList';
import PokedexLogo from './images/pokedex.png';

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
          textAlign: 'center',
          width: {
            xs: '258px',
            md: '50%',
          },
          fontSize: '32px',
          fontWeight: 500,
          color: '#ffcc00',
          textShadow: '-1px 3px 9px rgba(0, 117, 190, 0.4)',
        }}
      >
        <img
          src={PokedexLogo}
          alt="Pokedex"
          style={{ height: '70px' }}
        />
      </Box>
    </Container>
    <PokemonsList />
  </>
);

export default App;
