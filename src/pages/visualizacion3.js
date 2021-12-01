import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  Container,
  Grid
} from '@material-ui/core';

const Vista3 = () => {
  
  return (
    <>
      <Helmet>
        <title>Australis | Sophia2 </title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Grid
            spacing={3}
          >
            <Card>
            <CardHeader title="linechart" />
            <Divider />
            <CardContent>

            </CardContent>
            </Card>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista3;
