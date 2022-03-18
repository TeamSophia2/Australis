import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Index from '../componentes/indice.js'


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

const labels = [,'2016', '2017', '2018', '2019', '2020','2021'];
const Vista3 = () => {

  const [att, setAtt] = useState('Religion');
  const [country, setCountry] = useState('CHL');
  const [infe,setInfe]=useState(true);
  const [culpa,setCulpa]=useState(true);
  const [autho,setAutho]=useState(true);
  const [privi,setPrivi]=useState(true);
  const [free,setFree]=useState(true);
  const CountryHandle = (event) => {
    setCountry(event.target.value);
  };

  const ATTHandle = (event) => {
    setAtt(event.target.value);
  };
  const handleinfe = (event) => {
    setInfe(event.target.checked);

  };
  const handleCulpa = (event) => {
    setCulpa(event.target.checked);
  };
  const handleAutho = (event) => {
    setAutho(event.target.checked);
  };
  const handleprivi = (event) => {
    setPrivi(event.target.checked);
  };
  const handlefree = (event) => {
    setFree(event.target.checked);
  };

const data = {
  labels,
  datasets: [
    {
      label: 'Inferiority',
      data: labels.map(function numMultIdx(num, idx) {
       if (typeof(Index.[country][num])=="undefined" || typeof(Index.[country][num].[att])=="undefined") {
        return null;
       }
       else{
        return Index.[country][num].[att].Inferiority;
        }
        }),
      borderColor: 'blue',
      backgroundColor: 'blue',
    },
    {
      label: 'Culpability',
      data: labels.map(function numMultIdx(num, idx) {
      if (typeof(Index.[country][num])=="undefined" || typeof(Index.[country][num].[att])=="undefined") {
        return null;
       }
       else{
        return Index.[country][num].[att].Culpability;
        }
        }),
      borderColor: 'red',
      backgroundColor: 'red',
    },
    {
      label: 'Authority',
      data: labels.map(function numMultIdx(num, idx) {
        if (typeof(Index.[country][num])=="undefined" || typeof(Index.[country][num].[att])=="undefined") {
        return null;
       }
       else{
        return Index.[country][num].[att].Authority;
        }
        }),
      borderColor: 'green',
      backgroundColor: 'green'
    },
    {
      label: 'Privilege',

      data: labels.map(function numMultIdx(num, idx) {
        if (typeof(Index.[country][num])=="undefined" || typeof(Index.[country][num].[att])=="undefined") {
        return null;
       }
       else{
        return Index.[country][num].[att].Privilege;
        }
        }),
      borderColor: 'orange',
      backgroundColor: 'orange'
    },    {
      label: 'Freedom',
      data: labels.map(function numMultIdx(num, idx) {
        if (typeof(Index.[country][num])=="undefined" || typeof(Index.[country][num].[att])=="undefined") {
          return null;
         }
        else{
        return Index.[country][num].[att].Freedom;
        }
        }),
      borderColor: 'cyan',
      backgroundColor: 'cyan'
    }
  ],
};
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
            <CardHeader title="LineChart Bias  " />
            <FormControl style={{ minWidth: 200}}>

            <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
            <Select
              onChange={CountryHandle}
              id="id"
              value={country}
              label="Topico"
            >
              <MenuItem value={'CHL'}>Chile</MenuItem>
              <MenuItem value={'ARG'}>Argentina</MenuItem>
              <MenuItem value={'MEX'}>Mexico</MenuItem>
              <MenuItem value={'ESP'}>Spain</MenuItem>
              <MenuItem value={'USA'}>Usa</MenuItem>
              <MenuItem value={'GBR'}>Uka</MenuItem>
              <MenuItem value={'AUS'}>Australia</MenuItem>
              <MenuItem value={'IRL'}>Irland</MenuItem>
            </Select>           
          </FormControl>
          <FormControl style={{ minWidth: 200}}>

            <InputLabel htmlFor="grouped-native-select">ATT</InputLabel>
            <Select
              onChange={ATTHandle}
              id="id"
              value={att}
              label="Topico"
            >
              <MenuItem value='Gender'>Gender</MenuItem>
              <MenuItem value='Religion'>Religion</MenuItem>
              <MenuItem value='SexualOrientation'>Sexual Orientation</MenuItem>
 
            </Select>           
            </FormControl>
                  <FormControlLabel control={<Checkbox onChange={handleinfe} defaultChecked />} label="Inferiority" />
                  <FormControlLabel control={<Checkbox onChange={handleCulpa}/>} label="Culpability" />
                  <FormControlLabel control={<Checkbox onChange={handleAutho}defaultChecked />} label="Authority" />
                  <FormControlLabel control={<Checkbox onChange={handleprivi}/>} label="Privilege" />
                  <FormControlLabel control={<Checkbox onChange={handlefree}defaultChecked />} label="Freedom" />
            <Divider />
            <CardContent>
              <Box>
                <Grid
                  lg={10}
                  md={10}
                  xl={9}
                  xs={12}
                >
                <Line 
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: country+' - '+att,
                      }
                    },
                    scales: {
                      y: {
                        max: 3,
                        min: -3,
                        ticks: {
                            stepSize: 0.5
                        }
                      }
                    }
                  }}
                  data={data} 
                />
                </Grid>
              </Box>
            </CardContent>
            </Card>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista3;
