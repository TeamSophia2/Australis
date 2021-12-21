import { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { arc } from 'd3-shape';
import * as d3 from 'd3-selection';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';




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

const fifty = 50;
const large = (-Math.PI / 2) + (Math.PI * fifty) / 100;
const arco = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(-Math.PI / 2)
  .endAngle(large);
const arco2 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(large)
  .endAngle(Math.PI / 2);

const BiasViz = (props) => {
  const labels = [
    {
      title: props.grupo1,
      value: 100-props.valor,
      icon: LaptopMacIcon,
      color: colors.red[600]
    },
    {
      title: props.grupo2,
      value: props.valor,
      icon: PhoneIcon,
      color: colors.indigo[500]
    }
  ];
  const [angulo, setAngulo] = useState(props.valor);
  const d3Chart = useRef();

  useEffect(() => {
    const margin = {
      top: 20,
      right: 30,
      bottom: 30,
      left: 30
    };
    const width = parseInt(d3.select('#d3demo').style('width'), 10) - margin.left - margin.right;
    const height = parseInt(d3.select('#d3demo').style('height'), 10) - margin.top - margin.bottom;

    const svg = d3.select(d3Chart.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);
    svg
      .attr('height', height + margin.top + margin.bottom);

    svg
      .select('#aguja')
      .attr('transform', `rotate( ${(angulo * 1.8 - 90)} 0 0)`);
    setAngulo(180);
  }, []);

  return (
    <Card {...props}>
      <CardHeader title="CULTURAL BIAS" />
      <Divider />
      <Typography align='center'  >    .</Typography>
      <Typography align='center'  >"Choose two social groups and a concept to observe if the country's media tends to associate the concept to a certain social group".</Typography>
      <CardContent>
        <Box
          sx={{
            height: 60,
            justifyContent: 'center',
            display: 'flex'

          }}
        >
        <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={5}
              label="Topico"
            >
              <MenuItem value={5}>Global</MenuItem>
              <MenuItem value={10}>Chile</MenuItem>
              <MenuItem value={20}>España</MenuItem>
              <MenuItem value={30}>Argentina</MenuItem>
              <MenuItem value={40}>Perú</MenuItem>
              <MenuItem value={50}>Venezuela</MenuItem>
              <MenuItem value={60}>Estados unidos</MenuItem>
              <MenuItem value={70}>jamica</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">year</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={10}
              label="Topico"
            >
              <MenuItem value={10}>2020</MenuItem>
              <MenuItem value={20}>2021</MenuItem>
              <MenuItem value={30}>2022</MenuItem>
            </Select>
          </FormControl>
        <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Concept</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={10}
              label="Topico"
            >
              <MenuItem value={10}>violencia</MenuItem>
              <MenuItem value={20}>corrupcion</MenuItem>
              <MenuItem value={30}>deporte</MenuItem>
              <MenuItem value={40}>actuacion</MenuItem>
              <MenuItem value={50}>libertad</MenuItem>
              <MenuItem value={60}>espectaculo</MenuItem>
              <MenuItem value={70}>politica</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Social group 1</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={10}
              label="Topico"
            >
              <MenuItem value={10}>Género</MenuItem>
              <MenuItem value={20}>coaliciones politicas</MenuItem>
              <MenuItem value={30}>policia-civiles</MenuItem>
              <MenuItem value={40}>imigrantes</MenuItem>
              <MenuItem value={50}>etnias</MenuItem>
              <MenuItem value={60}>religiones</MenuItem>
              <MenuItem value={70}>empresarios-consumidores</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Social group 2</InputLabel>
            <Select
              labelId="label"
              id="id"
              value={10}
              label="Topico"
            >
              <MenuItem value={10}>Género</MenuItem>
              <MenuItem value={20}>coaliciones politicas</MenuItem>
              <MenuItem value={30}>policia-civiles</MenuItem>
              <MenuItem value={40}>imigrantes</MenuItem>
              <MenuItem value={50}>etnias</MenuItem>
              <MenuItem value={60}>religiones</MenuItem>
              <MenuItem value={70}>empresarios-consumidores</MenuItem>
            </Select>
          </FormControl>
          
          </Box>
          <Box
                  sx={{
                    justifyContent: 'center',
                    display: 'flex'
        
                  }}
        >
                    <Typography
                color="textPrimary"
                variant="h3"
              >
                violence between gender woman and male
              </Typography>
          </Box>
        <Box
                  sx={{
                    height: 150,
                    justifyContent: 'center',
                    display: 'flex'
        
                  }}
        >
          <div id="d3demo">
            <Grid container>
              <Box
                sx={{
                  height: 200,
                  justifyContent: 'center',
                  display: 'flex'

                }}
              >
                <svg
                  ref={d3Chart}
                  viewBox="400 400 500 500'"
                >
                  <g
                    transform="translate(145 150)"
                  >
                    <path
                      d={arco()}
                      fill={colors.red[600]}
                    />
                    <path
                      d={arco2()}
                      fill={colors.indigo[500]}
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="2"
                      fill="white"
                    />
                    <path
                      id="aguja"
                      d="M-20 0 L20 0 L0 -110 Z"
                      stroke="black"
                      fill="red"
                      transform=" rotate(45 0 0)"
                    />
                  </g>
                </svg>
              </Box>
            </Grid>
          </div>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {labels.map(({
            color,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Typography
                color="textPrimary"
                variant="h3"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BiasViz;
