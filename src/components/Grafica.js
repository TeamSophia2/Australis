import React from 'react';
import {Line} from 'react-chartjs-2'
import '../Css/Grafica.css'

function Grafica(props) {
    const data={
        labels:["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio"],
        datasets:[{
            label:props.label, 
            fill:false,
            backgroundColor:"red",
            borderColor:"blue",
            pointBorderColor:"grey",
            pointBorderWidth:1,
            pointHoverRadius:5,
            pointHoverBackgroundColor:"yellow",
            pointHoverBorderColor:"purple",
            pointRadius:1,
            pointHitRadius:10,
            data:props.dato
             }


        ]
    }
    return (
        <div className="containergrafica" >
            <Line data={data}></Line>
            
        </div>
    );
}

export default Grafica;