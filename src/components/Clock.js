import React from "react";
import * as d3 from 'd3';

const PADDING = 10
const HOURS = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII']
const BG_COLOR = 'red'  
const COLOR = '#fff'  

class ClockControl extends React.Component {
  constructor(props) {
    super(props)
  }
	
	componentDidMount() {
		this.drawFrame()	
  	this.drawMarks()
    this.drawHands()
	  this.drawDigits()
    this.updateTime()
  }
  
  drawFrame() {
		const center = this.props.size / 2
    const addCircle = (radius, border, color) => 
      this.svg.append('circle')
			  .attr('cx', center)
			  .attr('cy', center)
			  .attr('r', radius)
			  .style('stroke', border)
			  .style('fill', color)

		const radius = center - PADDING
		addCircle(radius + 2, COLOR, 'none')
		addCircle(radius, COLOR, 'none')
		addCircle(radius * 0.075, 'none', COLOR)
  }
  
  drawDigits() {
		const center = this.props.size / 2
		const radius = center - PADDING
    
    const fontSize = `${Math.floor(radius / 8)}px`
		const drawHourDigit = (v, i) => {
      const transformG = `rotate(${(i+1) * 30},${center},${center})`
      const transformT = `scale(1,3) translate(${center}, ${center - radius * 0.92})`
    	const g = this.svg.append('g')
				.attr('transform', transformG)
      	g.append('text').text(v)
				.attr('text-anchor', 'middle')
        .attr('transform', transformT)
        .style('fill', COLOR)
        .style('font-size', fontSize)
    } 
		HOURS.forEach(drawHourDigit)	
  }
  
  drawMarks() {
		const center = this.props.size / 2
		const radius = center - PADDING
  	const y1 = center - Math.floor(radius * 0.97)
  	const y2 = center - Math.floor(radius * 0.90)
		for(let mark = 0; mark < 60; mark++) {
			const transform = `rotate(${mark * 6},${center},${center})`
      const isHourMark = (mark % 5) === 0
      this.svg.append('line')
				.attr('x1', center)
				.attr('y1', y1)
				.attr('x2', center)
				.attr('y2', y2)
				.attr('transform', transform)
				.style('stroke', COLOR)
        .style('stroke-width', isHourMark ?  3 : 1)
    }
  }
  
  drawHands() {
		const center = this.props.size / 2
    const drawHand = (type, width, length) => 
      this.svg.append('line')
    		.attr('hand-type', type)
      	.attr('x1', center)
      	.attr('y1', center)
      	.attr('x2', center)
      	.attr('y2', center - length)
      	.style('stroke', COLOR)
      	.style('stroke-width', width)
    
		const radius = center - PADDING
    drawHand('H', 5, radius * 0.5)
    drawHand('M', 3, radius * 0.7)
    drawHand('S', 2, radius * 0.9)
  }
  
  
  
  moveHand(type, angle) {
		const center = this.props.size / 2
    const transform = `rotate(${angle},${center},${center})`
    this.svg.select(`line[hand-type='${type}']`)
    	.attr('transform', transform)
  }
	
	componentDidUpdate() {
    this.updateTime()
  }
  
  updateTime() {
    const dt = new Date(this.props.time)
    const hourAngle = dt.getHours() * 30 + 
    	Math.floor(dt.getMinutes() / 12) * 6  
    this.moveHand('H', hourAngle)
    this.moveHand('M', dt.getMinutes() * 6)
    this.moveHand('S', dt.getSeconds() * 6)
  }
  
  render() {
    return (
      <svg width={this.props.size} height={this.props.size} 
        ref={handle => (this.svg = d3.select(handle))}>
      </svg>
    )
  }
}


class ClockApp extends React.Component {
  constructor(props) {
    super(props)
		this.state = {time: Date.now()}
  }
  
  componentDidMount() {
  	setInterval(() => {
    	this.setState({time: Date.now()})
    }, 1000)
  }
	
	render() {
    return (
      <div style={{
        backgroundColor: 'grey',
      }}>
        <ClockControl size='300' time={this.state.time}/>
      </div>
    )
	}
}

export default ClockApp;

