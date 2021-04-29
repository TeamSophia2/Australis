import { scaleLinear } from "d3-scale";
import {extent} from "d3-array"
import { useData } from './useData';


const width =900
const height = 500
const margin = {top:50, right:30, bottom:65, left:220};  

const Scatter =() => {
    const data = useData();
    if (!data) {
      return <pre>Loading...</pre>;
    }
    const innerHeight = height - margin.top - margin.bottom; 
    const innerWidth = width - margin.left - margin.right;

    const xValue = d => d.petal_length;
    const yValue = d => d.sepal_width;

    const xScale = scaleLinear()
    .domain(extent(data, xValue))
    .range([0, innerWidth]);

    const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

    return(
        <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          {data.map(d => ( <circle className="mark" cx={xScale(d.petal_length)} cy={yScale(d.sepal_width)}r={3} fill="red" />
 
           ))}
          
        </g>
      </svg>

    );

}

export default Scatter;
