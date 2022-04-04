import { useEffect, useState } from 'react';
import {
  Box,
  CardContent,
  Card,
  Divider,
  CardHeader
} from '@material-ui/core';
import ReactTooltip from 'react-tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import WorldMap from './WorldMap';

const WorldMapCard = (
  {
    setPais,
    year,
    setIso3,
    iso3,
    set_index,
    index,
    setYear,
    media_outlet,
    data_freddom,
    data_democracy,
    data_idh,                
    data_vulne,
  }
) => {
  const indicadores = [{
      name: 'noticias',
      titulo: 'SOPHIA2',
      years: ["2020"],
      yearMin: '2020',
      yearMax: '2020',
      dir: '/medios_caleuche.csv'
    },
    {
      name: 'vulne',
      titulo: 'VULNERABILIDAD',
      years: ["2012","2013","2014","2015","2016","2017"],
      yearMin: '1995',
      yearMax: '2017',
      dir: '/vulnerability.csv'
  
    },
    {
      name: 'democracy',
      titulo: 'DEMOCRACIA',
      years: ["2014","2015","2016","2017","2018","2019","2020"],
      yearMin: '2020',
      yearMax: '2020',
      dir: '/democracy_index.csv'
    },
    {
      name: 'freedom',
      titulo: 'LIBERTAD DE PRENSA',
      years: [2020,2021],
      yearMin: '2020',
      yearMax: '2021',
      dir: '/Freedom_2021.csv'
    },
    {
      name: 'desarrollo',
      titulo: 'DESARROLLO HUMANO',
      years: ["2019"],
      yearMin: '2019',
      yearMax: '2019',
      dir: '/HDR2019.json'
    }
  ];
  const [content, setContent] = useState('');
  const [country, setCountry] = useState('CHL');

  const IndexHandle = (event) => {
    set_index(event.target.value);

  };

  const YearHandle = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    setYear(indicadores.find((s)=>s.name===index).yearMax)
    setPais(country);
    setIso3(iso3);
  },[index,iso3,setPais,setIso3,setYear,country]);

  return (
    <Card>
      <CardHeader
        title={(
          <div>
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel>INDICATORS</InputLabel>
            <Select
              value={index}
              onChange={IndexHandle}
            >
              {Object.entries(indicadores).map((s) => (
                <MenuItem value={s[1].name} key={s[1].name}  >{s[1].titulo}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel>YEAR</InputLabel>
            <Select
              value={year}
              onChange={YearHandle}
            >
              {indicadores.find((s)=>s.name === index).years.map((s) => (
                <MenuItem value={s} key={s}  >{s}</MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>       
        )}
      > 
      </CardHeader>
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative',
            display: 'flex'
          }}

        >
          <WorldMap
            //valores que exporta el mapa
            setTooltipContent={setContent}//setea el valor del Tooltips component
            setIso3={setIso3}  //retorna el ISO3 del pais cliqueado
            setCountry={setCountry}//retorna el nombre del pais cliqueado
            //valores que recibe el mapa ,index es identificadore del indice que se desea colorear
            //year el año del que se desea colorear en el mapa
            //media-outet se una variable que tiene los paises y sus medios
            //data corresponden a los datos de cada indice recuperados desde la base de dato. y que escalan hasta esta componente
            index={index}
            year={year}
            media_outlet={media_outlet}
            data_freddom={data_freddom}
            data_democracy={data_democracy}
            data_idh={data_idh}                
            data_vulne={data_vulne}
          />
          <ReactTooltip>
            {content}
          </ReactTooltip>

        </Box>
      </CardContent>
    </Card>
  );
};

export default WorldMapCard;
