import { svg } from 'd3-fetch';
import {arc} from 'd3-shape';
import { useState } from 'react';
import '../Css/Visualizationd3.css';


const hidth = 600
const height = 600
let medio=80
let dim=-Math.PI/2 + Math.PI*medio/100
let arco = arc().innerRadius(40).outerRadius(200).startAngle(-Math.PI/2).endAngle(dim)
let arco2 = arc().innerRadius(40).outerRadius(200).startAngle(dim).endAngle(Math.PI/2)


function Visualizationd3() {
  const [data,setdata]=useState(null)
  function getdata(val){
    setdata(val.target.value)
    arco = arc().innerRadius(40).outerRadius(200).startAngle(-Math.PI/2).endAngle(-Math.PI/2 + Math.PI*data/100)
    arco2 = arc().innerRadius(40).outerRadius(200).startAngle(-Math.PI/2 + Math.PI*data/100).endAngle(Math.PI/2)
  }

    return (
      <div >
      <h1>D3 bias Visualization</h1>
      <input type="range" min="0" max="100" onChange={getdata}></input>
        
      <svg width={hidth} height={height}>
        <g transform={'translate(400,400)'}>

        <path d={arco()} fill="green" />
        <path d={arco2()} fill="orange"/>

        </g>
        </svg> 
      </div>);

  }
  
  
export default Visualizationd3;