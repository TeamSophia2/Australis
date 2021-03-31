import React, { memo,useEffect, useState} from "react";
import { csv } from "d3-fetch";
import {scaleLinear} from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "/world-110m.json";

const colorScale = scaleLinear()
  .domain([0,1])
  .range(["#555555", "#ff0000"]);


const Maps = ({ setTooltipContent }) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
      <ComposableMap data-tip="" projectionConfig={{ scale: 100 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const d = data.find((s) => s.ISO3 === geo.properties.ISO_A3);
                console.log(d)
                return(
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d["2020"]) : "#000000"}
                onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME}`);
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
      </ComposableMap>
  );
};

export default memo(Maps);