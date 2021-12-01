import { Helmet } from 'react-helmet';

import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import BiasIndicator from '../componentes/BiasViz';
const Vista2 = () => {
  return (
    <>
      <Helmet>
        <title>Australis | Sophia2 </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 3
        }}
      >
        <Container>
          <Grid>
            <BiasIndicator valor="40" grupo1="hombre" grupo2="mujeres" />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista2;
