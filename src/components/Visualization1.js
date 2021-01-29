import React, { memo,useEffect, useState} from "react";
import { csv } from "d3-fetch";
import {scaleLinear} from "d3-scale";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "/world-110m.json";

const colorScale = scaleLinear()
  .domain([0,1])
  .range(["#555555", "#ff5555"]);

const rounded = num => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const Maps = ({ setTooltipContent }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 150 }}>
         
         
         
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2020"]) : "#F5F4F6"}
                onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} `);
                  }}

                onMouseLeave={() => {
                    setTooltipContent("");
                  }}

                style={{
                    hover: {
                      fill: "#ffff00",
                      outline: "none"
                    },
                   
                  }}
                />
              )})
            }
          </Geographies>
      </ComposableMap>
  );
};

export default memo(Maps);