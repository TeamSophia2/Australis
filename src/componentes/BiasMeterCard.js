import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import BiasMeter from './BiasMeter';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from '@material-ui/core';
import Index from './indice.js'

const BiasMeterCard = (props) => {

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
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
            <BiasMeter concept="Inferiority" value={Index[country][year].Gender.Inferiority} groups="Woman - Men" ></BiasMeter>
            <BiasMeter concept="Culpability" value={Index[country][year].Gender.Culpability}  groups="Woman - Men"  ></BiasMeter>
            <BiasMeter concept="Authority" value={Index[country][year].Gender.Authority} groups="Woman - Men" ></BiasMeter>
            <BiasMeter concept="Privilege" value={Index[country][year].Gender.Privilege}  groups="Woman - Men"  ></BiasMeter>
            <BiasMeter concept="Freedom" value={Index[country][year].Gender.Freedom}  groups="Woman - Men"  ></BiasMeter>
            
        </Box>
        <Typography
                color="textPrimary"
                variant="h3"
              >
                Religion
              </Typography>
        <Box 
              border={1}
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
            <BiasMeter concept="Inferiority" value={Index[country][year].Religion.Inferiority} groups="Christianity - Islam"  ></BiasMeter>
            <BiasMeter concept="Culpability" value={Index[country][year].Religion.Culpability}  groups="Christianity - Islam"  ></BiasMeter>
            <BiasMeter concept="Authority" value={Index[country][year].Religion.Authority} groups="Christianity - Islam"  ></BiasMeter>
            <BiasMeter concept="Privilege" value={Index[country][year].Religion.Privilege}  groups="Christianity - Islam"  ></BiasMeter>
            <BiasMeter concept="Freedom" value={Index[country][year].Religion.Freedom}  groups="Christianity - Islam"  ></BiasMeter>
            
        </Box>
        <Typography
                color="textPrimary"
                variant="h3"
              >
                Sexual orientation
              </Typography>
        <Box 
              border={1}
              flexDirection="row"
              flexWrap="wrap"
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
            
            <BiasMeter concept="Inferiority" value={Index[country][year].SexualOrientation.Inferiority} groups="Homo - Hetero"  ></BiasMeter>
            <BiasMeter concept="Culpability" value={Index[country][year].SexualOrientation.Culpability}  groups="Homo - Hetero" ></BiasMeter>
            <BiasMeter concept="Authority" value={Index[country][year].SexualOrientation.Authority} groups="Homo - Hetero"  ></BiasMeter>
            <BiasMeter concept="Privilege" value={Index[country][year].SexualOrientation.Privilege}  groups="Homo - Hetero"  ></BiasMeter>
            <BiasMeter concept="Freedom" value={Index[country][year].SexualOrientation.Freedom}  groups="Homo - Hetero"  ></BiasMeter>
            
        </Box>


      
      </CardContent>
    </Card>
  );
};

export default BiasMeterCard;
