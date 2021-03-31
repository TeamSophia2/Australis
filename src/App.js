
import './App.css';
import React, { useState } from "react";
import Header from './components/Header.js';
import Section from './components/Section';
import Maps from './components/Visualization1';
import ReactTooltip from "react-tooltip";
import Visualizationd3 from './components/Visualizationd3';
import Table from './components/Table.js'
import Linechart from './components/Linechart';

function App() {
  const [content, setContent] = useState("");
  return (
    <div className='app'>
    <Header/>
    <Section/>  
    <Maps setTooltipContent={setContent} />
    <ReactTooltip html={true} >{content}</ReactTooltip>
    <Table/>
    <Visualizationd3/>
    <Linechart/>

    </div>
  );
}

export default App;

//se tuvo que agregar los siguente modulos d3-fetch d3-scale react-simple-maps