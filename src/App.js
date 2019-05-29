import React from 'react';

import './App.css';
import Home from "./pages/Home";
import Error from "./pages/Error";
import Rooms from "./pages/Proxima";
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import { isLogicalExpression } from '@babel/types';
import Login from './pages/Login';

// pagina de react-router-dom and netlify https://www.slightedgecoder.com/2018/12/18/page-not-found-on-netlify-with-react-router/
//  pagina de documentacion de react-router-dom https://reacttraining.com/react-router/web/guides/quick-start
// lo importe en el index.js 
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route  exact path="/" component={Home}></Route> 
    <Route exact path="/proxima/" component={Rooms}></Route>
    <Route exact path="/login/" component={Login}></Route>
    <Route component={Error}/>
    </Switch>
    
    </>
  );
}

export default App;
