import React from "react";
import "./App.css";
import "./styles/Menu.css";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import Sesion from "./pages/Sesion";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import { Route, Switch } from "react-router-dom";

// pagina de react-router-dom and netlify https://www.slightedgecoder.com/2018/12/18/page-not-found-on-netlify-with-react-router/
//  pagina de documentacion de react-router-dom https://reacttraining.com/react-router/web/guides/quick-start
// lo importe en el index.js
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:nombre" component={SingleRoom} />
        <Menu>
          <Route exact path="/sesion" component={Sesion} />
        </Menu>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
