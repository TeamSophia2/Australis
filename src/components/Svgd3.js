
import { max, scaleLinear } from "d3";
import React from "react";
import * as d3 from 'd3';


const data = [10, 5, 12, 15,3,6,10];
var width = 300, scaleFactor = 20, barHeight = 30;

const largo = scaleLinear()
        .domain([0,max(data)])
        .range([0,500])

class Svgd3 extends React.Component {
    constructor(props) {
        super(props)
        this.divBarra = React.createRef(); 

      }

    componentDidMount() {
     const graph =d3.select(this.divBarra.current)
        .append("svg")
        .attr("width","100%")
        .attr("height","500")
        .style("background-color", 'green')
        ;
      var bar = graph
          .selectAll("g").data(data)
          .enter()
          .append("g")
          .attr("transform", function(d, i) {
            return "translate(50," + i * 60 + ")";
          });

      bar.append("rect")
        .attr("width", function(d) {
         return largo(d);
          })
        .attr("height",55)
        .attr("fill","yellow");
    
    
  }

    render(){
        return(
           <div ref={this.divBarra} />
        )
    }
}

export default Svgd3;
