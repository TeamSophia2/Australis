import { Helmet } from 'react-helmet';

import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import BiasMeterCard from '../componentes/BiasMeterCard';
import DescriptionViz from '../componentes/DescriptionViz';
const Vista2 = () => {
  return (
    <>
      <Helmet>
        <title>Australis | Sophia2 </title>
      </Helmet>
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        xs={12}> 
        <DescriptionViz
          mensaje="To check the bias values between the main groups, you have to select the country and the year."
        />
      </Grid>
      <Box
        sx={{
          backgroundColor: 'background.default',
          py: 3
        }}
      >
        <Container>
          <Grid>
            <BiasMeterCard />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista2;
