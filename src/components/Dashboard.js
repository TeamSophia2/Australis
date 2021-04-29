import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import NavBar from './NavBar';
import "../Css/Dashboard.css";
import Album from 'material-ui-icons/Album';
import Tarjet from "./Tarjet"
import Grafica from "./Grafica"
import SesgoVis from './SesgoVis';
import Maps from './Mapa';
import ReactTooltip from "react-tooltip";
import { useState } from "react";
import Header from './Header.js';
import Section from './Section';
import Linechart from './LineChart';
import Araña from './Araña'



const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1

    }
}));

const muertesCovid=[ 
    {Pais:"Chile",datos:[23,3,4,56,5,67,78,78],bias:34 },
    {Pais:"arg.",datos:[34,3,4,56,5,673,783,748],bias:50 },
    {Pais:"Sp",datos:[23,43,4,56,5,67,738,48],bias:45 },
    {Pais:"Venezuela",datos:[34,3,344,56,53,367,78,58],bias:65  },
    {Pais:"Brazil",datos:[233,3,34,43,395,367,343,68] ,bias:75 },
    {Pais:"China",datos:[233,33,34,546,35,647,738,788],bias:95  }
  
  ];


function Dashboard(props) {
    const classes= useStyles();
    const [content, setContent] = useState("");
    const [nombre, setNombre] = useState("");

    
let muerte =muertesCovid.find((s)=> s.Pais===nombre)
if(muerte === undefined) {
    console.log("no encontrado")
    muerte = muertesCovid[1]
    console.log(muerte)
  }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} > 
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

            </Grid> 
            <Grid container spacing={3} > 
            <   Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Maps setTooltipContent={setContent} setlinechat={setNombre}/>
                   <ReactTooltip html={true} >{content}</ReactTooltip>
               
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <SesgoVis dato={muerte.bias}></SesgoVis>
                 </Grid>
            </Grid> 
            <Grid container spacing={3} > 
                < Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grafica dato={muerte.datos} label={nombre}> </Grafica>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Araña></Araña>
                </Grid>
            </Grid> 
            <Grid container spacing={3} > 
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <Linechart/>
                </Grid>
            </Grid> 



        </div>
    );
}

export default Dashboard;