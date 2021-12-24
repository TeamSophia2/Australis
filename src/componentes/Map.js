import React, { memo } from 'react';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup
} from 'react-simple-maps';

const geoUrl = '/world-110m.json';

const colorScaleVulne = scaleLinear()
  .domain([0.29, 0.68])
  .range(['#ffedea', '#ff5233']);

const colorScaleDesarrollo = (valor) => {
  if (valor > 0.8) {
    return ('#003152');
  } if (valor > 0.7) {
    return ('#00726a');
  } if (valor > 0.55) {
    return ('#00bfad');
  } return ('#A8ECD5');
};
const colorScaleDemocracy = (valor) => {
  if (valor > 90) {
    return ('#00681C');
  } if (valor > 80) {
    return ('#009859');
  } if (valor > 70) {
    return ('#5EBC6E');
  } if (valor > 60) {
    return ('#A3D879');
  } if (valor > 50) {
    return ('#FFDF96');
  } if (valor > 40) {
    return ('#FFAD6D');
  } if (valor > 30) {
    return ('#F86B4C');
  } if (valor > 20) {
    return ('#AC2324');
  } if (valor > 10) {
    return ('#680019');
  } return ('#A8ECD5');
};

const colorScaleFreedom = (valor) => {
  if (valor > 159) {
    return '#000000';
  } if (valor > 107) {
    return ('red');
  } if (valor > 48) {
    return ('orange');
  } return 'yellow';
};

const Map = (props) => {

  return (
    <ComposableMap
      width="1000"
      height="600"
      data-tip=""
      projectionConfig={{ scale: 230 }}
      style={{
        background: '#99ccff'
      }}
    >
      <ZoomableGroup zoom={1} center={[20, 0]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies.map((geo) => {
            const d = props.data_vulne.find((s) => s.ISO3 === geo.properties.ISO_A3);
            const d1 = props.media_outlet.filter((s) => s.country === geo.properties.ISO_A3).length;
            const d2 = props.data_idh.find((s) => s.ISO3 === geo.properties.ISO_A3);
            const d5 = props.data_freddom.find((s) => s.ISO3 === geo.properties.ISO_A3);
            const d4 = props.data_democracy.find((s) => s.ISO3.toUpperCase() === geo.properties.ISO_A3);
            let color = '#000000';
            let valor ="";
            switch (props.index) {
              case 'desarrollo':
                color = d2 ? colorScaleDesarrollo(d2[props.year]) : '#000000';
                valor = d2;
                break;
              case 'freedom':
                color = d5 ? colorScaleFreedom(d5[props.year]) : '#000000';
                valor = d5;
                break;
              case 'vulne':
                color = d ? colorScaleVulne(d[props.year]) : '#000000';
                valor = d;
                break;
              case 'noticias':
                color = d1 ? '#2cff08' : 'grey';
                valor = d1;
                break;
              case 'democracy':
                color = d4 ? colorScaleDemocracy(d4[props.year]) : '#000000';
                valor = d4;
                break;
              default:
                    //
            }
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={color}
                stroke="white"
                strokeWidth={1}
                style={{
                  background: 'red',
                  hover: {
                    outline: 'none',
                    strokeWidth: '2',
                    stroke: '#000000',
                    cursor: 'pointer'
                  }
                }}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;
                  if (props.index==="noticias"){
                    props.setTooltipContent(valor? `${NAME} N° mediums: `+valor:'');
                  }
                  else{
                    props.setTooltipContent(valor? `${NAME} `+valor[props.year]:'');
                   
                  }
                }}
                onClick={() => {
                  const { NAME } = geo.properties;
                  props.setCountry(`${NAME}`);
                  props.setIso3(geo.properties.ISO_A3);
                }}
                onMouseLeave={() => {
                  props.setTooltipContent('');
                }}
              />
            );
          })}
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};
export default memo(Map);
