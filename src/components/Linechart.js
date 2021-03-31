import { scaleLinear } from "d3-scale";
import {extent} from "d3-array"
import { useEffect, useState } from "react";
import{format} from "d3-format"
import { useData } from './useData';


const csvUrl= "/iris.csv";
const width =900
const height = 500

const margin = {top:50, right:30, bottom:65, left:220};  

const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;


const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffset = 3 }) =>
xScale.ticks().map(tickValue => (
  <g
    className="tick"
    key={tickValue}
    transform={`translate(${xScale(tickValue)},0)`}
  >
    <line y2={innerHeight} />
    <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
      {tickFormat(tickValue)}
    </text>
  </g>
));

const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
yScale.ticks().map(tickValue => (
  <g className="tick" transform={`translate(0,${yScale(tickValue)})`}>
    <line x2={innerWidth} />
    <text
      key={tickValue}
      style={{ textAnchor: 'end' }}
      x={-tickOffset}
      dy=".32em"
    >
      {tickValue}
    </text>
  </g>
));


const Linechart =() => {
    const data = useData();

    if (!data) {
      return <pre>Loading...</pre>;
    }
    
    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;

    const xValue = d => d.petal_length;
    const xAxisLabel = 'Petal Length';

    const yValue = d => d.sepal_width;
    const yAxisLabel = 'Sepal Width';

    const siFormat = format('.2s');
    const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');

    const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth])
    .nice();

    const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

    return(
        <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${innerHeight /
              2}) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          {data.map(d => (
        <circle
            className="mark"
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={7}
        >
            <title>{xAxisTickFormat(xValue(d))}</title>
            </circle>
        ))}
          
        </g>
      </svg>

    );

}

export default Linechart;
