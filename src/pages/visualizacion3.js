import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  TextField,
  Container,
  Grid
} from '@material-ui/core';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Vista3 = () => {
/*
  const buscarNombre = (texto, evento) => {
    const data = datosJson.find((llave) => llave.source_name == texto);
    if (data) {
        const datosFormateados = convierteDatos(data)
        setDatos(datosFormateados);
        setTextoFeedBack('Mostrado \'' + Object.keys(datosFormateados[0])[1] + '\' de \'' + texto + '\' en pantalla' );
    }
    else{
        setTextoFeedBack('\'' + texto + '\' no se encuentra en nuestra base de datos');
    }
  }
  */
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
            <FormControl style={{ minWidth: 200}}>

            <TextField
          id="filled-search"
          label="Search a source"
          type="search"
          variant="filled"
        
        />
            <InputLabel htmlFor="grouped-native-select">País</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={10}
              label="Topico"
            >
              <MenuItem value={10}>Chile</MenuItem>
              <MenuItem value={20}>España</MenuItem>
              <MenuItem value={30}>Argentina</MenuItem>
              <MenuItem value={40}>Perú</MenuItem>
              <MenuItem value={50}>Venezuela</MenuItem>
              <MenuItem value={60}>Estados unidos</MenuItem>
              <MenuItem value={70}>jamica</MenuItem>
            </Select>
          </FormControl>
            <Divider />
            <CardContent>
            <Line options={options} data={data} />;
            </CardContent>
            </Card>

          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista3;
