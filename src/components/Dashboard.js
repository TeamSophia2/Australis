import React from 'react';
import {Button, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
//import NavBar from './NavBar';
import "../Css/Dashboard.css";
//import Album from 'material-ui-icons/Album';
//import Tarjet from "./Tarjet"
import Grafica from "./Grafica"
//import SesgoVis from './SesgoVis';
import Maps from './Mapa';
import ReactTooltip from "react-tooltip";
import { useState } from "react";
//import Header from './Header.js';
//import Section from './Section';
//import Linechart from './LineChart';
//import Araña from './Araña'
import StickyHeadTable from './StickyHeadTable'
import Slider from '@material-ui/core/Slider';
//import ContentReply from 'material-ui/svg-icons/content/reply';



// let year=2020;

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1

    }
}));
// dates for make line chart when select country 
const linechartalldata=[ 
    {Pais:"Chile",datos:[23,3,4,56,5,67,78,78],bias:34 },
    {Pais:"arg.",datos:[34,3,4,56,5,673,783,748],bias:50 },
    {Pais:"Sp",datos:[23,43,4,56,5,67,738,48],bias:45 },
    {Pais:"Venezuela",datos:[34,3,344,56,53,367,78,58],bias:65  },
    {Pais:"Brazil",datos:[233,3,34,43,395,367,343,68] ,bias:75 },
    {Pais:"China",datos:[233,33,34,546,35,647,738,788],bias:95  }

  ];
function Dashboard(props) {
    
    const classes= useStyles();
    const [content, setContent] = useState("");//cotent for tooltips
    const [nombre, setNombre] = useState("");//name select country 
    const [year, setYear]= useState(2020);//for dataset that have years
    const [table, setTable]= useState("/medios_caleuche.csv");// table setable
    const [indicador, setIndicator]= useState("noticias");//especific and chooice a indicator to vis
    const [showyear,setShowyear]=useState(false);// this aviable year slider 
    const [showtable,setShowtable]=useState(false);//this aviable table
    const [country,setCountry]=useState("USA");//iso3 each country
    //controlador para setiar años con slider
    const handleChange = (event,value) => {
        setYear(value);
      }
    let Linechartdata =linechartalldata.find((s)=> s.Pais===nombre)
    if(Linechartdata === undefined) {Linechartdata = linechartalldata[1]}

    return (
        <div className={classes.root}>
       {/*       <Grid container spacing={3} > 
                <Grid item xs={12}>
                
                <NavBar></NavBar>
                <Header/>
                <Section/>
                </Grid >
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Tarjet icono={<Album className={classes.icon}/>} titulo="Vis 1" texto="texto" color="blue"   ></Tarjet>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Tarjet icono={<Album className={classes.icon}/>} titulo="Vis 2" texto="texto" color="blue"  ></Tarjet>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Tarjet icono={<Album className={classes.icon}/>} titulo="Vis 3" texto="texto" color="blue"  ></Tarjet>
                </Grid> 

            </Grid>  */}
            <Grid container spacing={0} > 
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Maps setTooltipContent={setContent} setCountry={setCountry} setlinechat={setNombre} settable={setTable} year={year} indicador={indicador}/>
                    <ReactTooltip html={true} >{content}</ReactTooltip>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Grid container spacing={1} > 

                            <Button className="boton1"
                            color={ indicador==="noticias"? "secondary" : "primary"}
                            onClick={()=>{
                                setYear(2020)
                                setIndicator("noticias")
                                setShowyear(false);
                                setTable("/medios_caleuche.csv")
                                setShowtable(true)
                                }
                                } >Medios de comunicación indexados
                            </Button>

                            <Button className="boton2" 
                            color={ indicador==="vulne"? "secondary" : "primary"}

                            onClick={()=>{
                            
                            setYear(2017);
                            setIndicator("vulne");
                            setShowyear(true);
                            setTable("/vulnerability.csv")
                            setShowtable(true);
                            
                            }
                            } >indice vulnerability 2019 </Button>
                            <Button className="boton3" 
                            color={ indicador==="freedom"? "secondary" : "primary"}
                            onClick={()=>{
                            setShowtable(false);
                            setYear(2017);
                            setIndicator("freedom");
                            setShowyear(false);
                            setTable("/index_2021.csv")
                            setShowtable(true);
                            
                            }
                            } >2021 WORLD PRESS FREEDOM INDEX</Button>

                            <Button 
                            color={ indicador==="desarrollo"? "secondary" : "primary"}
                            onClick={()=>{
                                setIndicator("desarrollo");
                                setShowyear(false);
                                setShowtable(false);
                                setTable("/index")
                            }}> Indice de Desarrollo Humano(2019) </Button>

                            <Button 
                            color={ indicador==="democracy"? "secondary" : "primary"}
                            onClick={()=>{
                                setIndicator("democracy");
                                setShowyear(false);
                                setShowtable(true);
                                setTable("/index")

//setTable("/democracy_index.csv")
                            }}> Democracy Index(2020) </Button>

                        </Grid> 
                        {(function() {
                            if (showyear) {
                                return <Slider
                                value={year}
                                min={1995}
                                max={2017}
                                aria-labelledby="discrete-slider-always"
                                step={1}
                                marks
                                valueLabelDisplay="on"
                                onChange={handleChange}
                                /> ;
                            } 
                            else {return;}
                        })()}
                        {(function() {
                            if (showtable) {
                                return  <StickyHeadTable table={table} country={country} ></StickyHeadTable>  
                            } else {return;}
                         })()}
                    <Grafica dato={Linechartdata.datos} label={nombre}> </Grafica>
                 </Grid>
            </Grid> 
           {/*  <Grid container spacing={3} > 
                < Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Grafica dato={muerte.datos} label={nombre}> </Grafica>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Araña></Araña>
                </Grid>
            </Grid> 
            <Grid container spacing={3} > 
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Linechart/>
                </Grid>
            </Grid>  */}



        </div>
    );
}

export default Dashboard;