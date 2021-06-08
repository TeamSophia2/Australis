//import { render } from '@testing-library/react';
//import { svg } from 'd3-fetch';
import {arc} from 'd3-shape';
import React from 'react';
import * as d3 from 'd3';
import Grid from '@material-ui/core/Grid';
//import Maps from './Mapa';
import Slider from '@material-ui/core/Slider';
import '../Css/SesgoVis.css';

let medio=50
let dim=-Math.PI/2 + Math.PI*medio/100
let arco = arc().innerRadius(40).outerRadius(150).startAngle(-Math.PI/2).endAngle(dim)
let arco2 = arc().innerRadius(40).outerRadius(150).startAngle(dim).endAngle(Math.PI/2)
//const escala = d3.scaleLinear().domain([0,800]).range([0,40])
//const escala2 = d3.scaleLinear().domain([0,800]).range([0,200])



class SesgoVis extends React.Component {

  constructor(props) {
    super(props)
    this.Ref = React.createRef(); 
    this.state = {
       width: window.innerWidth,
       value: props.dato
    };


    this.handleChange = (event, value) => {
      this.setState({ value });
    };
  }
 
  componentDidMount() {
    const div3 =d3.select(this.Ref.current).style("background-color","green");
    let grafico= div3.select("g")
    //let aguja= grafico.select("#aguja").attr("transform","rotate("+(this.state.value*1.8-90)+" 0 0)" )
   
  }
  componentDidUpdate(props){
    const div3 =d3.select(this.Ref.current).style("background-color","green");
    let grafico= div3.select("g")
    //let aguja= grafico.select("#aguja").attr("transform","rotate("+(this.state.value*1.8-90)+" 0 0)" )
    
  }

  componentWillUnmount() {
    
 }
 
  render(){  
    return(
      <div ref={this.Ref}  style={{padding: "10px" }} onMouseEnter={this.handleChange}>
        <Grid container >
          <Grid item xs={12} >
            <svg style={{ backgroundColor:"gray"}} viewBox="-150 -200 300 200" >
            <g>
            <path d={arco()} fill="#9ab6f8"  stroke = "black"/>
            <path d={arco2()} fill="#f78181" stroke = "black"/>
            <circle cx="0" cy="0" r="40" fill="white" > </circle>
            <path id="aguja" d="M-20 0 L20 0 L0 -150 Z"  fill= "red" transform=" rotate(-90 0 0)"></path>
            <text  x="-70" y="-170" > Indicador de sesgo</text>
            </g>
            </svg>
            <Slider value={this.state.value} onChange={this.handleChange} aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      
      </div>)
  }
  }
  
  
export default SesgoVis;