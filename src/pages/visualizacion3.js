import { Helmet } from 'react-helmet';
import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Index from '../componentes/indice.js'
import {iso3toname} from "../helpers/iso3toname"
import annotationPlugin from 'chartjs-plugin-annotation';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Container,
  CardActions
} from '@material-ui/core';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

//recupera la lista de paises desde el objeto de entrada formato iso3
const countries = Object.keys(Index);
//se definen los conceptos que se desean graficar
const concepts =["Inferiority","Culpability","Authority","Privilege","Freedom"]

const data = (label,color,country,att) =>{
  return {
    label:label,
    data:Object.keys(Index[country]).map((year) => {            
                if (typeof(Index[country][year])=="undefined"){ 
                  return null;
                  }
                else 
                {
                  return Index[country][year][att][label];
                }
                }),
    borderColor: color,
    backgroundColor: color,
    }
  
}

const data2 = (label,color,country,att,concept) =>{
  return {
    label:label,
    data:Object.keys(Index[country]).map((year) => {  
                console.log(year);
                console.log(label);       
                if (typeof(Index[label][year])=="undefined"){ 
                  return null;
                  }
                else 
                {
                  console.log(Index[label][year][att]);
                  return Index[label][year][att][concept];
                }
                }),
    borderColor: color,
    backgroundColor: color,
    }
  
}
//esta funcion torna una lista de funciones
const dataset = (lista,country,att) =>{
  const labels =  Object.keys(Index[country])
  const color=["blue","red","green","orange","cyan","purple","brown","yellow"];
  return{
    labels,
    datasets:lista.map((m,i)=>{
      return data(m,color[i],country,att)
    })
  } 
};
const dataset2 = (lista,country,att,concept) =>{
  const labels =  Object.keys(Index[country])
  const color=["blue","red","green","orange","cyan","purple","brown","yellow"];
  return{
    labels,
    datasets:lista.map((pais,i)=>{
      return data2(pais,color[i],country,att,concept)
    })
  } 
};
//funcion para configurar el gráfico
const options = (country,att) => {
  return{ 
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: country+' - '+att,
      },
      annotation: {
        annotations: [{
          type: 'box',
          yMin: 3,
          yMax: 2,
          borderColor: 'rgba(255, 51, 51, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 51, 51, 0.25)',
        },
        {
          type: 'box',
          yMin: 2,
          yMax: 1,
          borderColor: 'rgba(255, 128, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 128, 0, 0.25)',
        },
        {
          type: 'box',
          yMin: 0,
          yMax: 1,
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
        },
        {
          type: 'box',
          yMin: 0,
          yMax: -1,
          borderColor: 'rgba(255, 255, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 255, 0, 0.25)',
        },
        {
          type: 'box',
          yMin: -1,
          yMax: -2,
          borderColor: 'rgba(255, 128, 0, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 128, 0, 0.25)',
        },
        {
          type: 'box',
          yMin: -2,
          yMax: -3,
          borderColor: 'rgba(255, 51, 51, 0.25)',
          borderWidth: 0,
          backgroundColor: 'rgba(255, 51, 51, 0.25)',
        },
         {
          type: 'line',
          yMin: 0,
          yMax: 0,
          borderColor: 'black',
          borderWidth: 2,
        }
      ],
      }
      
    },
    scales: {
      y: {
        max: 3,
        min: -3,
        ticks: {
          stepSize: 0.5
        },
      }
    },
  }
}

const Vista3 = () => {
  const [att, setAtt] = useState('Religion');
  const [country, setCountry] = useState('CHL');
  const [concept, setConcept] = useState('Inferiority');

  const CountryHandle = (event) => {
    setCountry(event.target.value);
  };

  const ATTHandle = (event) => {
    setAtt(event.target.value);
  }
  const ConceptHandle = (event) => {
    setConcept(event.target.value);
  }
  ;

  return (
    <>
      <Helmet>
        <title>Australis | Sophia2 </title>
      </Helmet>
      <Box 
        sx={{
          margin:"auto",
          backgroundColor: 'background.default',
          minHeight: '50%',
          py: 3,
          maxWidth:800,         

        }}
      >
        <Container maxWidth={false}>
          <Card>
          <CardHeader 
            title="Temporal evolution of bias indicators, choose a country and group-tag and you will see the evolution of each concept in each year  "/>
          <Divider />
          <CardActions>
          <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Country</InputLabel>
            <Select onChange={CountryHandle} id="id" value={country} label="Topico">
              {countries.map((s)=>{
                return<MenuItem value={s}>{iso3toname[s]}</MenuItem>
                })}
            </Select>           
          </FormControl>
          <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Group Tag</InputLabel>
            <Select onChange={ATTHandle} id="id" value={att} label="Topico">
              <MenuItem value='Gender'>Gender</MenuItem>
              <MenuItem value='Religion'>Religion</MenuItem>
              <MenuItem value='SexualOrientation'>Sexual Orientation</MenuItem>
            </Select>           
          </FormControl> 

          </CardActions>
          
          <CardContent>
            <Box>
                <Line
                  options={options(iso3toname[country],att)}
                  data={dataset(concepts,country,att)} 
                />
              </Box>
            </CardContent>
            </Card>
        </Container>
      </Box>
      <Box
        sx={{
          margin:"auto",
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3,
          maxWidth:800
        }}
      >
        <Container maxWidth={false}>
          <Card>
          <CardHeader 
            title="Temporal evolution of bias indicators: Choose a concept and group-tag, you will see the evolution of the concept by each country per year"/>
          <Divider /> 
          <CardActions>
              <FormControl style={{ minWidth: 200}}>
            <InputLabel htmlFor="grouped-native-select">Concept</InputLabel>
            <Select onChange={ConceptHandle} id="id" value={concept} label="Topico">
              {concepts.map((s)=>{
                return<MenuItem value={s}>{s}</MenuItem>
                })}
            </Select>
                   
          </FormControl>
                    <FormControl style={{ minWidth: 200}}>
                    <InputLabel htmlFor="grouped-native-select">Group Tag</InputLabel>
                    <Select onChange={ATTHandle} id="id" value={att} label="Topico">
                      <MenuItem value='Gender'>Gender</MenuItem>
                      <MenuItem value='Religion'>Religion</MenuItem>
                      <MenuItem value='SexualOrientation'>Sexual Orientation</MenuItem>
                    </Select>           
                  </FormControl>
              </CardActions> 
          <CardContent>
            <Box>
                <Line 
                  options={options(concept,att)}
                  data={dataset2(countries,country,att,concept)}
                />
              </Box>
            </CardContent>
            </Card>
        </Container>
      </Box>
    </>
  );
};

export default Vista3;
