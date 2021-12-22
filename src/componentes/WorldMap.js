import { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import {
  Box,
  Button,
  CardContent,
  Card,
  Divider,
  CardHeader
} from '@material-ui/core';
/* import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'; */
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ReactTooltip from 'react-tooltip';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Map from './Map';
/* eslint react/prop-types: 0 */

const WorldMap = (
  {
    dataIn,
    pais,
    year,
    iso3,
    indexx,
    setYear,
  }
) => {
  const [indicadores,setIndicadores]= useState([
    {
      name: 'noticias',
      titulo: 'SOPHIA2',
      yearMin: '2020',
      yearMax: '2020',
      dir: '/medios_caleuche.csv'
    },
    {
      name: 'vulne',
      titulo: 'VULNERABILIDAD',
      yearMin: '1995',
      yearMax: '2012',
      dir: '/vulnerability.csv'
  
    },
    {
      name: 'democracy',
      titulo: 'DEMOCRACIA',
      yearMin: '2020',
      yearMax: '2020',
      dir: '/democracy_index.csv'
    },
    {
      name: 'freedom',
      titulo: 'LIBERTAD DE PRENSA',
      yearMin: '2020',
      yearMax: '2021',
      dir: '/Freedom_2021.csv'
    },
    {
      name: 'desarrollo',
      titulo: 'DESARROLLO HUMANO',
      yearMin: '2019',
      yearMax: '2019',
      dir: '/HDR2019.json'
    }
  ]);
  const [dataIndex, setDataIndex]= useState([]);
  const [content, setContent] = useState('');
  const [country, setCountry] = useState('CHL');
  const [iso33, setIso33] = useState('CHL');
  const [index, setIndex] = useState('noticias');
  const [year1, setYear1] = useState(2005);
  const IndexHandleChange = (event) => {
    setIndex(event.target.value);
  };
  const yearHandle = (event, value) => {
    setYear1(value);
    setYear(value);
  };

  useEffect(() => {
    setYear1(indicadores.find((s)=>s.name===index).yearMax)
    pais(country);
    indexx(index);
    iso3(iso33);
    setYear(year1);
  },[index,iso33]);
  console.log(dataIndex);
  return (
    <Card>
      <CardHeader
        action={(
          <FormControl style={{ minWidth: 200 }}>
            <InputLabel>INDICATORS</InputLabel>
            <Select
              value={index}
              onChange={IndexHandleChange}
            >
              {Object.entries(indicadores).map((s) => (
                <MenuItem value={s[1].name}>{s[1].titulo}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        title="DEMOCRACY INDICATORS | WORLD MAP"
      />
      <Divider />
      <CardContent>
        <Slider 
          aria-label="Restricted values"
          defaultValue={year1}
          value={year1}
          aria-label="Default" 
          valueLabelDisplay="true" 
          valueLabelDisplay="on"
          min={2000}
          max={2021}
          marks={true}
          onChange = {yearHandle}
        />

        <Box
          sx={{
            position: 'relative',
            display: 'flex'
          }}

        >
          <Map
            setIso33={setIso33}
            setCountry={setCountry}
            setDataIndex={setDataIndex}
            index={index}
            setTooltipContent={setContent}
            year={year1}
          />
          <ReactTooltip
            html="true"
          >
            {content}
          </ReactTooltip>

        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      />
      <Box>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

export default WorldMap;
