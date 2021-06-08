
import './App.css';
import React from "react";
import{} from "react-router-dom"
import { Route,BrowserRouter,Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Dashboard} >

      </Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;

//se tuvo que agregar los siguente modulos d3-fetch d3-scale react-simple-maps