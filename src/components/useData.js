import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

import { csv } from 'd3-fetch';

const csvUrl =
  'https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv';

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      d.sepal_width = +d.sepal_width;
      d.petal_length = +d.petal_length;
      return d;
    };
    csv(csvUrl, row).then(setData);
  }, []);
  
  return data;
};