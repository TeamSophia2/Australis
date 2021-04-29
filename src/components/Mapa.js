import React, { memo,useEffect, useState} from "react";
import { csv } from "d3-fetch";
import {scaleLinear} from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import SesgoVis from './SesgoVis';



const markers = [
  {
    markerOffset: -30,
    name: "Buenos Aires",
    coordinates: [-58.3816, -34.6037]
  },
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
  .domain([0,1])
  .range(["#555555", "#88ff00"]);


const Maps = ({ setTooltipContent,setlinechat }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2020"]) : "#000000"}
                onMouseEnter={() => {
                    const { NAME, ABBREV, } = geo.properties;
                    setTooltipContent(`${NAME}`);
                    setlinechat(`${ABBREV}`)
                  }}

                onMouseLeave={() => {
                    setTooltipContent("");
                  }}

                style={{
                    hover: {
                      fill: "#000000",
                      outline: "none"
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
            stroke="#ff0000"
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




      </ComposableMap>
  );
};

export default memo(Maps);