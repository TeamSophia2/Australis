import React from 'react';
import{makeStyles} from '@material-ui/core/styles'
import{AppBar, Toolbar,IconButton,Typography,} from '@material-ui/core';
import {Menu} from 'material-ui-icons';

const useStyles= makeStyles(()=>({
    root:{
        flexGrow: 1

    },
    menuButton:{
        marginRight:'16px'

    },
    title:{
        flexGrow:1

    },
    imagen:{
        borderRadius:'50%'

    }




}));

function NavBar(props) {

    const classes= useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" >
                       
                    </IconButton>
               
                    <Typography variant='h6' className={classes.title}>
                    AUSTRALIS
                     </Typography>
                    < IconButton color="inherit">

                    </IconButton> 
                </Toolbar>
            </AppBar>
            
        </div>
    );
}

export default NavBar;