import React from 'react';
import {Card, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';



function Tarjet(props) {

    const useStyles= makeStyles(()=>({
        root:{
            textAlign: 'center',
             background: props.color
    
        },
        texto:{
            fontSize: 18,
            color: props.font
        }, 
        titulo:{
            fontWeight: 'bold',
            fontSize: 18,
            color: props.font
        }

    }));

    const classes= useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icon}
                <Typography className={classes.titulo}>
                {props.titulo}
                
                </Typography>
                <Typography className={classes.texto}>
                {props.texto}
                
                </Typography>
            </CardContent>

        </Card>
    );
}

export default Tarjet;