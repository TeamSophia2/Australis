import { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { arc } from 'd3-shape';
import * as d3 from 'd3-selection';
import {
  Box,
  Typography
} from '@material-ui/core';
//utilizando la libreria arc de D3 podemos definir los figuras arco 
//que utilizaremos en la visualizacion
const arco = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(-Math.PI / 2)
  .endAngle(-Math.PI / 3);
const arco2 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(-Math.PI / 3)
  .endAngle(-Math.PI / 9);
  const arco3 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(-Math.PI / 6)
  .endAngle(0);
  const arco4 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(0)
  .endAngle(Math.PI / 6);
  const arco5 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(Math.PI / 6)
  .endAngle(Math.PI / 3);
  const arco6 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(Math.PI / 3)
  .endAngle(Math.PI / 2);


const BiasMeter = (props) => {
 //value es valor del indicador
  const [value, setValue] = useState(props.value);
  const d3Chart = useRef();
  useEffect(() => {
    setValue(props.value);
    //solo se necesita actulizar la inclinacion de la aguja 
    d3.select(d3Chart.current)
      .select('#needle')
      .attr('transform', `rotate( ${(((value*100)/6 +50 )* 1.8 - 90)} 0 0)`);
  }, [value,props.value]);

  return (
      <div>
        {/* este box solo tiene el titulo de la visualizacion */}
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
            {props.concept}
          </Typography>
        </Box>
        {/* el siguente box contiene el dibujo */}
        <Box
        sx={{
            height: 130,
            width:230,
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          <div id="d3">
            <Grid container>
              <Box
                sx={{
                  width:230,
                }}
              >
                <svg ref={d3Chart}>
                  <g transform="translate(115 125)">
                    <path d={arco()} fill={'#D26E6A'} stroke="black" />
                    <path d={arco2()} fill={'#F0CDA0'} stroke="black" />
                    <path d={arco3()} fill={'#FAF0D2'} stroke="black" />
                    <path d={arco4()} fill={'#FAF0D2'} stroke="black" />
                    <path d={arco5()} fill={'#F0CDA0'} stroke="black" />
                    <path d={arco6()} fill={'#D26E6A'} stroke="black" />
                    <circle cx="0" cy="0" r="20"fill="white" />
                    <path id="needle" d="M-20 0 L20 0 L0 -110 Z" stroke="black" fill="red" transform=" rotate(45 0 0)" />
                  </g>
                </svg>
              </Box>
            </Grid>
          </div>
        </Box>
        {/* el siguente box contiene los grupos y el indicar */}
        <Box
           sx={{
            textAlign: 'center'
          }}
        >
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {props.groups}
          </Typography>
          <Typography
            variant="h2"
          >
            {props.value}
          </Typography>
        </Box>
      </div>
    
  );
};

export default BiasMeter;
