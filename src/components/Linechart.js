import React from "react";
import * as d3 from 'd3';

//Linechart for Australis 
//this is a visualization component for Australis app 

//Variables de largo ancho y margenes ademas del export de  dataset con datos

const margin = {top: 10, right: 30, bottom: 30, left: 60},
 width = 600 - margin.left - margin.right,
 height = 300 - margin.top - margin.bottom;
const dataset = d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv")

// componente Linechart para React.
class Linechart extends React.Component{

// metodo constructora para referenciar el DOM   
    constructor(props) {
        super(props)
        this.linechart = React.createRef(); 

      }
//metodo de React para dibujar durante  
 componentDidMount(){

    const svg = d3.select(this.linechart.current)
        .append("svg")
        .attr("width", "100%")
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

    const timeConv = d3.timeParse("%Y-%m-%d");

    dataset.then(function(data) {
        var slices = data.columns.slice(1).map(function(id) {
            return {id: id,values: data.map(
                function(d){
                    return {date: timeConv(d.date),
                            measurement: +d[id]
                          };
                      })
                  };
              });
          
          const xScale = d3.scaleTime().range([0,width]);
          const yScale = d3.scaleLinear().rangeRound([height, 0]);
          xScale.domain(d3.extent(data, function(d){
                            return timeConv(d.date)}));
          
          yScale.domain([(0), d3.max(slices, function(c) {
              return d3.max(c.values, function(d) {
                  return d.measurement + 4; });
                  })
              ]);
          
          const yaxis = d3.axisLeft()
        //   .ticks((slices[0].values).length)
              .scale(yScale);
          
          const xaxis = d3.axisBottom()
        
              .scale(xScale);
          
          const line = d3.line()
              .x(function(d) { return xScale(d.date); })
              .y(function(d) { return yScale(d.measurement); });
           
          svg.append("g")
              .attr("class", "axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xaxis);
          
          svg.append("g")
              .attr("class", "axis")
              .call(yaxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("dy", ".75em")
              .attr("y", 6)
              .style("text-anchor", "end")
              .text("Frequency");
          
          const lines = svg.selectAll("lines")
            .data(slices)
            .enter()
            .append("g");
            lines.append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("d", function(d) { return line(d.values); });          
         });
    
    }

 //metodo render solo la referencia del dom
    render(){
        return( <div ref= {this.linechart}></div>);
    }
}

export default Linechart;