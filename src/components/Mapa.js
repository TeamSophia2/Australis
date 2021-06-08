import React, { memo,useEffect, useState} from "react";
import { csv, json } from "d3-fetch";
import {scaleLinear} from "d3-scale";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup 
} from "react-simple-maps";
//import SesgoVis from './SesgoVis';
//import { color } from "d3-color";

const markers = [
  {markerOffset: -30,name: "Buenos Aires",coordinates: [-58.3816, -34.6037]},
  { markerOffset: 5, name: "La Paz", coordinates: [-68.1193, -16.4897] },
  { markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
  { markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
  { markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
  { markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
  { markerOffset: 30, name: "Madrid", coordinates: [-3.4678,40.1807] }
];
const geoUrl =
  "/world-110m.json";

const colorScale = scaleLinear()
.domain([0.29, 0.68])
.range(["#ffedea", "#ff5233"]);

/*
const categoria = (valor) =>{
  if (valor > 0.8){return 1}
  else if (valor > 0.5){return(0.5)}
  else if (valor > 0.3){return(0.3)}
  else return 0.1
}  
*/
const desarrollo = (valor) =>{
  if (valor > 0.8){return("#003152")}
  else if (valor > 0.7){return("#00726a")}
  else if (valor > 0.55){return("#00bfad")}
  else return ("#A8ECD5")
}  
const democracyColor = (valor) =>{
  if (valor > 90){return("#00681C")}
  else if (valor > 80){return("#009859")}
  else if (valor > 70){return("#5EBC6E")}
  else if (valor > 60){return("#A3D879")}
  else if (valor > 50){return("#FFDF96")}
  else if (valor > 40){return("#FFAD6D")}
  else if (valor > 30){return("#F86B4C")}
  else if (valor > 20){return("#AC2324")}
  else if (valor > 10){return("#680019")}
  else return ("#A8ECD5")
}  

const categoriafreedom = (valor) =>{
  if (valor > 159){return "#000000"}
  else if (valor > 107){return("red")}
  else if (valor > 48){return("orange")}
  else return "yellow"
}  
//variables para las leyendas
let c1 = "green";
let t1 = "TEXT";
let c2 = "green";
let t2 = "TEXT";
let c3 = "green";
let t3 = "TEXT";
let c4 = "green";
let t4 = "TEXT";

const Maps = ({ setTooltipContent,setlinechat,setCountry,indicador,year,settable }) => {
  //const handleClick = geo => () => { };

  const [data, setData] = useState([]);//estuctura de tablas
  const [data1, setData1] = useState([]);//estuctura de tablas
  const [data2, setData2] = useState([]);//estructura para json
  const [data3, setData3] = useState([]);//estuctura de tablas
  const [data4, setData4] = useState([]);//estuctura de tablas
  const [center,setCenter]= useState([0,0]);
  const [zooom,setZoom] = useState(1);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {setData(data)});
    csv(`/medios_caleuche.csv`).then((data) => {setData1(data)});
    json("/HDR2019.json").then((data)=>{setData2(Object.values(data)[0])}); 
    csv(`/index_2021.csv`).then((data) => {setData3(data)});
    csv(`/democracy_index.csv`).then((data) => {setData4(data)});
  }, []);
  
  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }} style={{
        background: "#99ccff"
      }} >
        <ZoomableGroup zoom={zooom} center={center}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                const d1 = data1.find((s) => s.ISO3 === geo.properties.ISO_A3);
                const d2 = Object.keys(data2).find((s) => s === geo.properties.ISO_A3);
                const d3 = data3.find((s) => s.ISO3 === geo.properties.ISO_A3)
                const d4 = data4.find((s) => s.ISO3.toUpperCase() === geo.properties.ISO_A3)
                console.log(d4)
                let color = "#000000"
                switch(indicador) {
                  case "desarrollo":
                    color = d2 ? desarrollo(data2[d2]["137506"][2019]) : "#000000";
                    t1="Alto";t2="Medio";t3="Bajo";t4="Muy Bajo"
                    c1="#003152";c2="#00726a";c3="#00bfad";c4="#A8ECD5";
                    break;
                  case "freedom":
                    color = d3 ?  categoriafreedom(d3["Rank2021"]) : "#000000";
                    t1="bueno";t2="Problematic";t3="Dificult";t4="Very Serius"
                    c1="yellow";c2="orange";c3="red";c4="black";
                    break;
                  case "vulne":
                      color = d ? colorScale(d[year]) : "#ffffff"
                      ;t1="alto";t2="medio";t3="bajo";t4="muy bajo"
                      break;  
                  case "noticias":
                    color = d1 ? "#2cff08" : "grey"
                    break;
                  case "democracy":
                    color = d4 ? democracyColor(d4["2020"]) : "#000000";
                      break;
                  default:
                    // code block
                }
                return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={color}
                  stroke={"white"}
                  strokeWidth = {1}
                  //const { NAME, ABBREV, } = geo.properties;
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }} 
                  onClick={()=>{
                    setCenter(geoCentroid(geo))
                    setZoom(3);
                    const { NAME, ABBREV,ISO_A3 } = geo.properties;
                    setTooltipContent(`${NAME}`);
                    setlinechat(`${ABBREV}`)
                    setCountry(`${ISO_A3}`)
                    if (indicador==="noticias"){
                      settable("/medios_caleuche.csv"); 
                    } 

                  }}
 
                  onMouseLeave={() => {
                      setTooltipContent("");
                    }} 
                      
                  style={{
                      background: "red",
                      hover: {
                        outline: "none",
                        strokeWidth: "2",
                        stroke:"#000000",
                        cursor:"pointer"
                      },
                   
                   }}
                />
              )})
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="red"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "black" }}
          >
            {name}
          </text>
        </Marker>
      ))}

    </ZoomableGroup> 
    <svg >
  <rect x="1" y="20" width="30" height="30 "
        fill="grey" stroke={"white"}
        strokeWidth = {1}
        onClick={()=>{
         setZoom(2)
          } 
        }
        />
  <rect x="1" y="80" width="30" height="30"
        fill="grey"
        onClick={()=>{
          setZoom(1)
          setCenter([0,0])
           } 
         }
        />
   <rect x="1" y="330" width="120" height="200" fill-opacity="0.4"fill="grey"/>
   
          <rect x="5" y="350" width="20" height="20" fill={c1}/>
          <text x="30" y="370" style={{
              fontFamily: "system-ui", fill: "black",
          }}>{t1}</text>
          <rect x="5" y="400" width="20" height="20" fill={c2}/>
          <text x="30" y="420" style={{
              fontFamily: "system-ui", fill: "black",
          }}>{t2}</text>
          <rect x="5" y="450" width="20" height="20" fill={c3}/>
          <text x="30" y="470" style={{
              fontFamily: "system-ui", fill: "black",
          }}>{t3}</text>
          <rect x="5" y="500" width="20" height="20" fill={c4}/>
          <text x="30" y="520" style={{
              fontFamily: "system-ui", fill: "black",
          }}>{t4}</text>
              
</svg>

      </ComposableMap>
      
  );
};

export default memo(Maps);