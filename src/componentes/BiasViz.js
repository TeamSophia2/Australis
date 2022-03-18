import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Medidor from './Medidor';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import Index from './indice.js'

const BiasViz = (props) => {

  const [year, setYear] = useState(2020);
  const [country, setCountry] = useState('CHL');


  const CountryHandle = (event) => {
    setCountry(event.target.value);
    console.log(country);
  };

  const YearHandle = (event) => {
    setYear(event.target.value);
    console.log(year);

  };

  return (
    <Card {...props}>
      <CardHeader title="CULTURAL BIAS" />
      <Divider />
      <CardContent>

        <Box
          sx={{
            height: 60,
            justifyContent: 'flex-start',
            display: 'flex'

          }}

        >
        <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
            <Select
              value={country}
              onChange={CountryHandle}
              labelId="label"
              id="id"
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
            <InputLabel htmlFor="grouped-native-select">year</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={year}
              label="Topico"
              onChange={YearHandle}
            >
              <MenuItem value={2020}>2020</MenuItem>
              <MenuItem value={2019}>2019</MenuItem>
              <MenuItem value={2018}>2018</MenuItem>
              <MenuItem value={2017}>2017</MenuItem>
              <MenuItem value={2016}>2016</MenuItem>

            </Select>
          </FormControl>
          </Box> 
          <Typography
                color="textPrimary"
                variant="h3"
              >
                Gender
              </Typography>
          <Box 
              border={1}
              //justifyContent="flex-end"
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              //m={1}
            >
            <Medidor att="Inferiority" valor={Index.[country][year].Gender.Inferiority} grupo1="Woman - Men" grupo2="mujeres" ></Medidor>
            <Medidor att="Culpability" valor={Index.[country][year].Gender.Culpability}  grupo1="Woman - Men" grupo2="mujeres" ></Medidor>
            <Medidor att="Authority" valor={Index.[country][year].Gender.Authority} grupo1="Woman - Men" grupo2="mujeres" ></Medidor>
            <Medidor att="Privilege" valor={Index.[country][year].Gender.Privilege}  grupo1="Woman - Men" grupo2="mujeres" ></Medidor>
            <Medidor att="Freedom" valor={Index.[country][year].Gender.Freedom}  grupo1="Woman - Men" grupo2="mujeres" ></Medidor>
            
        </Box>
        <Typography
                color="textPrimary"
                variant="h3"
              >
                Religion
              </Typography>
        <Box 
              border={1}
              //justifyContent="flex-end"
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              //m={1}
            >
            <Medidor att="Inferiority" valor={Index.[country][year].Religion.Inferiority} grupo1="Christianity - Islam" grupo2="mujeres" ></Medidor>
            <Medidor att="Culpability" valor={Index.[country][year].Religion.Culpability}  grupo1="Christianity - Islam" grupo2="mujeres" ></Medidor>
            <Medidor att="Authority" valor={Index.[country][year].Religion.Authority} grupo1="Christianity - Islam" grupo2="mujeres" ></Medidor>
            <Medidor att="Privilege" valor={Index.[country][year].Religion.Privilege}  grupo1="Christianity - Islam" grupo2="mujeres" ></Medidor>
            <Medidor att="Freedom" valor={Index.[country][year].Religion.Freedom}  grupo1="Christianity - Islam" grupo2="mujeres" ></Medidor>
            
        </Box>
        <Typography
                color="textPrimary"
                variant="h3"
              >
                Sexual orientation
              </Typography>
        <Box 
              border={1}
              //justifyContent="flex-end"
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
              //m={1}
            >
            
            <Medidor att="Inferiority" valor={Index.[country][year].SexualOrientation.Inferiority} grupo1="Homo  - Hetero" grupo2="mujeres" ></Medidor>
            <Medidor att="Culpability" valor={Index.[country][year].SexualOrientation.Culpability}  grupo1="Homo  - Hetero"grupo2="mujeres" ></Medidor>
            <Medidor att="Authority" valor={Index.[country][year].SexualOrientation.Authority} grupo1="Homo  - Hetero" grupo2="mujeres" ></Medidor>
            <Medidor att="Privilege" valor={Index.[country][year].SexualOrientation.Privilege}  grupo1="Homo  - Hetero" grupo2="mujeres" ></Medidor>
            <Medidor att="Freedom" valor={Index.[country][year].SexualOrientation.Freedom}  grupo1="Homo  - Hetero" grupo2="mujeres" ></Medidor>
            
        </Box>


      
      </CardContent>
    </Card>
  );
};

export default BiasViz;
