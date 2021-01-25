import './App.css';
import React, { useState } from "react";
import Header from'./Components/Header';
import Section from './Components/Section';
import Maps from './Components/React-Simple-maps';
import ReactTooltip from "react-tooltip";


function App() {
  const [content, setContent] = useState("");
  return (
  <div className='app'>
    <Header/>
    <Section />
    <div >
    <Maps setTooltipContent={setContent}/>
    <ReactTooltip html={true} >{content}</ReactTooltip>
    </div>

  </div>

  );
}

export default App;
