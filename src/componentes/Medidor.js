import { useEffect, useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { arc } from 'd3-shape';
import * as d3 from 'd3-selection';

import {
  Box,
  Typography,
  colors
} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';

const fifty = 50;
const large = (-Math.PI / 2) + (Math.PI * fifty) / 100;
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
  .endAngle(large);
  const arco4 = arc()
  .innerRadius(25)
  .outerRadius(110)
  .startAngle(large)
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


const Medidor = (props) => {
  const labels = [
    {
      title: props.grupo1,
      value: props.valor,
      icon: LaptopMacIcon,
      color: colors.indigo[600]
    }
  ];
  const [angulo, setAngulo] = useState(props.valor);
  const d3Chart = useRef();

  useEffect(() => {
    setAngulo(props.valor);
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
      .select('#AGUJA')
      .attr('transform', `rotate( ${(((angulo*100)/6 +50 )* 1.8 - 90)} 0 0)`);
  }, [angulo,props.valor]);

  return (
    
      <h>

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
                {props.att}
              </Typography>
          </Box>
        <Box
          border ={0}
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
                  height: 100,
                  width:230,
                  justifyContent: 'center',
                  display: 'flex'

                }}
              >
                <svg
                  ref={d3Chart}
                >
                  <g
                    transform="translate(115 125)"
                  >
                    <path
                      d={arco()}
                      fill={'#D26E6A'}
                      stroke="black" 
                    />
                    <path
                      d={arco2()}
                      fill={'#F0CDA0'}
                      stroke="black" 
                    />
                    <path
                      d={arco3()}
                      fill={'#FAF0D2'}
                      stroke="black" 
                    />
                    <path
                      d={arco4()}
                      fill={'#FAF0D2'}
                      stroke="black" 
                    />
                    <path
                      d={arco5()}
                      fill={'#F0CDA0'}
                      stroke="black" 
                    />
                    <path
                      d={arco6()}
                      fill={'#D26E6A'}
                      stroke="black" 
                    />
                    <circle
                      cx="0"
                      cy="0"
                      r="20"
                      fill="white"
                    />
                    <path
                      id="AGUJA"
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
            //pt: 2
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
                //p: 1,
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
              </Typography>
            </Box>
          ))}
        </Box>
      </h>
    
  );
};

export default Medidor;
