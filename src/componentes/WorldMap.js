import { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
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
import Map from './Map';

const WorldMap = (
  {
    setPais,
    year,
    setIso3,
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
  const [indicadores,setIndicadores]= useState([
    {
      name: 'noticias',
      titulo: 'SOPHIA2',
      years: ["none"],
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
  ]);
  const [content, setContent] = useState('');
  const [country, setCountry] = useState('CHL');
  const [iso33, setIso33] = useState('CHL');

  const IndexHandle = (event) => {
    set_index(event.target.value);

  };

  const YearHandle = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    setYear(indicadores.find((s)=>s.name===index).yearMax)
    setPais(country);
    setIso3(iso33);
  },[index,iso33,indicadores.find((s)=>s.name===index).yearMax]);

  return (
    <Card>
      <CardHeader
        title="DEMOCRACY INDICATORS | WORLD MAP"
        action={(
          <div>
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel>INDICATORS</InputLabel>
            <Select
              value={index}
              onChange={IndexHandle}
            >
              {Object.entries(indicadores).map((s) => (
                <MenuItem value={s[1].name}>{s[1].titulo}</MenuItem>
              ))}
            </Select>
          </FormControl>    <FormControl style={{ minWidth: 200 }}>
            <InputLabel>YEAR</InputLabel>
            <Select
              value={year}
              onChange={YearHandle}
            >
              {indicadores.find((s)=>s.name == index).years.map((s) => (
                <MenuItem value={s}>{s}</MenuItem>
              ))}
            </Select>
          </FormControl>
          </div>       
        )}
      > 
      </CardHeader>
      <Divider />
      <CardContent>

{/*         <Slider 
          aria-label="Restricted values"
          defaultValue={year}
          value={year}
          aria-label="Default" 
          valueLabelDisplay="true" 
          valueLabelDisplay="on"
          min={2000}
          max={2021}
          marks={true}
          onChange = {YearHandle}
        /> */}

        <Box
          sx={{
            position: 'relative',
            display: 'flex'
          }}

        >
          <Map
            setTooltipContent={setContent}
            setIso33={setIso33}
            setCountry={setCountry}
            index={index}
            year={year}
            media_outlet={media_outlet}
            data_freddom={data_freddom}
            data_democracy={data_democracy}
            data_idh={data_idh}                
            data_vulne={data_vulne}
          />
          <ReactTooltip
            html="true"
          >
            {content}
          </ReactTooltip>

        </Box>
      </CardContent>
    </Card>
  );
};

export default WorldMap;
