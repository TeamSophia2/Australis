import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors
} from '@material-ui/core';
import ReactCountryFlag from "react-country-flag"
import {countryISOMapping } from "../../helpers/iso3toiso2"

/* const id = (index,title,value,color,iso3,year) =>{
  const dic = {
    index:index,
    title:title,
    value:value.find((s)=>s.ISO3===iso3)? value.find((s)=>s.ISO3===iso3)[year]:"error",
    color:color
  }
  return dic
} */

const CountryInformation = ({
  //esta componente muestra indormacion de cada pais seleccionado segun cada año seleccionado 
  sx,
  pais,
  iso3,
  indice,
  year,
  data_freddom,
  data_democracy,
  data_idh,                
  data_vulne,
  data_countries
}) => {

  //console.log(id("noticias","Sophia2 index",data_democracy,colors.indigo[500]),iso3,year);
  //se recupera por año indicador y pasis cada valor y se redondea para mostrar 
  const indexs = [
    {
      index:'noticias',
      title: 'Sophia2 index',
      value: data_vulne.find((s)=>s.ISO3===iso3)? Math.round(data_vulne.find((s)=>s.ISO3===iso3)[year]* 100) / 100 : "error" ,
      color: colors.indigo[500]
    },
    {
      index:'vulne',
      title: 'Vulnerability',
      value: data_vulne.find((s)=>s.ISO3===iso3)? Math.round(data_vulne.find((s)=>s.ISO3===iso3)[year]* 100) / 100 : "error",
      color: colors.indigo[500]
    },
    {
      index:'desarrollo',
      title: 'Development',
      value: data_idh.find((s)=>s.ISO3===iso3)? data_idh.find((s)=>s.ISO3===iso3)[year] : "error",
      color: colors.indigo[500]
    },
    {
      index:'freedom',
      title: 'Freedom Press',
      value: data_freddom.find((s)=>s.ISO3===iso3)? data_freddom.find((s)=>s.ISO3===iso3)[year] : "error",
      color: colors.indigo[500]
    },
    {
      index:'democracy',
      title: 'Democracy',
      value: data_democracy.find((s)=>s.ISO3===iso3)? data_democracy.find((s)=>s.ISO3===iso3)[year] : "error",
      color: colors.indigo[500]
    }
  ];

  return (
    <Card {...sx}>
      <CardHeader title="COUNTRY INFORMATION" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center'
          }}
        >
          <Typography
            //nombre del pais
            color="textPrimary"
            variant="h1"
          >
            {data_countries.find((s)=>s.ISO3===iso3) ? data_countries.find((s)=>s.ISO3===iso3)["NAME"]: ""}
          </Typography>

          <ReactCountryFlag 
            //componente para mostrar banderas
            countryCode= {countryISOMapping[iso3]}
            style={{
              fontSize: '7em'
              }} 
          />
          <Typography
            //muesta el componente selecionado 
            color="textPrimary"
            variant="h1"
          >
            {indexs.find((s)=>s.index===indice).title}
            {' '}
            {year}
          </Typography>
 
        </Box>
        <Box
          border={1}
          flexDirection="column"
          //flexWrap="wrap"
          display="block"
          m={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {indexs.map(({
            color,
            year,
            title,
            value
          }) => (
            <Box
              border={1}
              //justifyContent="flex-end"
              flexDirection="row"
              flexWrap="wrap"
              key={title}
              display="block"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
              //m={1}
        
            >
              <Typography
                color="textPrimary"
                variant="h3"
              >
                {title}
              </Typography>
            
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryInformation;
