import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import MediaList from '../componentes/MediaList';
import WorldMap from '../componentes/WorldMap';
import CountryInformation from '../componentes/CountryInformation';

const Vista1 = () => {
  const [data_countries, setData_countries] = useState([]);
  const [data_freddom, setData_freddom] = useState([]);
  const [data_vulne, setData_vulne] = useState([]);
  const [data_democracy, setData_democracy] = useState([]);
  const [data_idh, setData_idh] = useState([]);
  const [media_outlet,setMedia_outlet] = useState([]);
  const [pais, setPais] = useState('Chile');
  const [iso3, setIso3] = useState('CHL');
  const [year, setYear] = useState(2020);
  const [index, setIndex] = useState('noticias');

  useEffect(() => {

    const fetchDataCountries = async () => {
      const result = await axios(
        'http://45.79.169.216:90/countries');
      setData_countries(result.data);
    };
    const fetchDataFreedom = async () => {
      const result = await axios(
        'http://45.79.169.216:90/freedom');
      setData_freddom(result.data);
    };
    const fetchDataVulne = async () => {
      const result = await axios(
        'http://45.79.169.216:90/vulne');
      setData_vulne(result.data);
    };
    const fetchDataDemocracy = async () => {
      const result = await axios(
        'http://45.79.169.216:90/democracy');
      setData_democracy(result.data);
    };
    const fetchDataIdh = async () => {
      const result = await axios(
        'http://45.79.169.216:90/hdi');
      setData_idh(result.data);
    };
    const fetchMediaOulet = async () => {
      const result = await axios(
        'http://45.79.169.216:90/media_outlet');
      setMedia_outlet(result.data);
    };

    fetchDataCountries();
    fetchDataCountries();
    fetchDataIdh();
    fetchDataFreedom();
    fetchDataVulne();
    fetchDataDemocracy();
    fetchDataIdh();
    fetchMediaOulet();
    fetchDataFreedom();
    fetchDataVulne();
    fetchDataDemocracy();
    fetchMediaOulet();
    },[]);
    
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
            container
            spacing={3}
          >
             <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            >
              <WorldMap
                year={year}
                setPais={setPais}
                setIso3={setIso3}
                setYear={setYear}
                set_index={setIndex}
                index={index}
                media_outlet={media_outlet}
                data_freddom={data_freddom}
                data_democracy={data_democracy}
                data_idh={data_idh}                
                data_vulne={data_vulne}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
               <CountryInformation
                sx={{ height: '100%' }}
                pais={pais}
                iso3={iso3}
                year={year}
                indice={index}
                data_freddom={data_freddom}
                data_democracy={data_democracy}
                data_idh={data_idh}                
                data_vulne={data_vulne}
                data_countries={data_countries}
              />
              <MediaList
              media_outlet={media_outlet}
              iso3={iso3}
              />
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              xl={3}
              xs={12}
            >
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Vista1;
