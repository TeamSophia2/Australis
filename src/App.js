
import './App.css';
import React, { useState } from "react";
import Header from './components/Header.js';
import Section from './components/Section';
import Maps from './components/Visualization1';
import ReactTooltip from "react-tooltip";


function App() {
  const [content, setContent] = useState("");
  return (
    <div className='app'>
    <Header/>
    <Section/>
    <div >
    <Maps setTooltipContent={setContent}/>
    <ReactTooltip html={true} >{content}</ReactTooltip>
    </div>
    </div>
  );
}

export default App;

//se tuvo que agregar los siguente modulos d3-fetch d3-scale react-simple-maps