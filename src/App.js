
import './App.css';
import React, { useState } from "react";
import Header from './components/Header.js';
import Section from './components/Section';
import Maps from './components/Mapa';
import ReactTooltip from "react-tooltip";
import SesgoVis from './components/SesgoVis';
import Linechart from './components/LineChart';
import ClockApp from './components/Clock';
import Svgd3 from './components/Svgd3';
import Scatter from './components/Scatter';
import{} from "react-router-dom"
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  const [content, setContent] = useState("");
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} >

      </Route>

    </Switch>
    </BrowserRouter>
    
    
    
    
/*     <div className='app'>
    <Header/>
    <Section/>  
    <Maps setTooltipContent={setContent} />
    <ReactTooltip html={true} >{content}</ReactTooltip>
    <Linechart/>
    <SesgoVis/>
    <Scatter/>
    <Svgd3/>
    <ClockApp/>
    </div> */
  );
}

export default App;

//se tuvo que agregar los siguente modulos d3-fetch d3-scale react-simple-maps