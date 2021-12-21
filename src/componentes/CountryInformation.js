import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import { useState } from 'react';
const CountryInformation = ({
  sx,
  pais,
  iso3,
  indice,
  year,
  data_freddom,
  data_democracy,
  data_idh,                
  data_vulne,
  data_countries
}) => {
  const indexs = [
    {
      index:'noticias',
      title: 'Sophia2 index',
      value: data_vulne.find((s)=>s.ISO3===iso3)? Math.round(data_vulne.find((s)=>s.ISO3===iso3)[2012]* 100) / 100 : "nada" ,
      year: 2012,
      color: colors.indigo[500]
    },
    {
      index:'vulne',
      title: 'Vulnerability',
      value: data_vulne.find((s)=>s.ISO3===iso3)? Math.round(data_vulne.find((s)=>s.ISO3===iso3)[2012]* 100) / 100 : "nada",
      year: 2012,
      color: colors.indigo[500]
    },
    {
      index:'desarrollo',
      title: 'Desarrollo',
      value: data_idh.find((s)=>s.ISO3===iso3)? data_idh.find((s)=>s.ISO3===iso3)[2019] : "nada",
      year: 2019,
      color: colors.red[600]
    },
    {
      index:'freedom',
      title: 'Libertad',
      value: data_freddom.find((s)=>s.ISO3===iso3)? data_freddom.find((s)=>s.ISO3===iso3)[2021] : "nada",
      year: 2021,
      color: colors.red[600]
    },
    {
      index:'democracy',
      title: 'Democracia',
      value: data_democracy.find((s)=>s.ISO3===iso3)? data_democracy.find((s)=>s.ISO3===iso3)[2020] : "nada",
      year: 2020,
      color: colors.red[600]
    }
  ];

  console.log();

  return (
    <Card {...sx}>
      <CardHeader title="COUNTRY INFORMATION" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h1"
          >
            {data_countries.find((s)=>s.ISO3===iso3) ? data_countries.find((s)=>s.ISO3===iso3)["NAME"]: ""}
          </Typography>
          <Typography
            color="textPrimary"
            variant="body1"
          >
            {indexs.find((s)=>s.index===indice).title}
            {' '}
            {year}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h2"
          >
            {indexs.find((s)=>s.index===indice).value}
          </Typography>
        </Box>
        <Box
          border={0}
          justifyContent="flex-end"
          flexWrap="wrap"
          display="block"
          m={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {indexs.map(({
            color,
            year,
            title,
            value
          }) => (
            <Box
              border={0}
              justifyContent="flex-end"
              flexWrap="wrap"
              key={title}
              display="block"
              m={1}
              sx={{
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {year}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryInformation;
