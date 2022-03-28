import { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import CountryInformation from '../componentes/View1/CountryInformation';
import DescriptionViz from '../componentes/DescriptionViz';
import WorldMapCard from '../componentes/View1/WorldMapCard';

const fetchData = async(url,setdata) => {
    const result = await axios(url);
    setdata(result.data) 
}  
const Vista1 = memo(() => {
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
    fetchData('http://45.79.169.216:90/countries',setData_countries)
    fetchData('http://45.79.169.216:90/freedom',setData_freddom)
    fetchData('http://45.79.169.216:90/vulne',setData_vulne)
    fetchData('http://45.79.169.216:90/democracy',setData_democracy)
    fetchData('http://45.79.169.216:90/hdi',setData_idh)
    fetchData('http://45.79.169.216:90/media_outlet',setMedia_outlet)
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
          py: 1
        }}
      >
        <Container maxWidth={false}>

          <Grid
            container spacing={1}
          >
               <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            > 
            <DescriptionViz
                mensaje="On the map you can view and select the main democratic indicators of each country in the year you want to see."
                />
            </Grid>
             <Grid
              item
              lg={8}
              md={12}
              xl={9}
              xs={12}
            > 
              <WorldMapCard
                year={year}
                setPais={setPais}
                setIso3={setIso3}
                setYear={setYear}
                set_index={setIndex}
                index={index}
                iso3={iso3}
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
});

export default Vista1;
