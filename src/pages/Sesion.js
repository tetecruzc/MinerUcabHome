import React from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Menu from "../components/Menu";
import MenuCRUD from "../components/MenuCRUD";
import Empleado from "./Empleado";
import Home from "./Home";

const Sesion = () => {
  return (
    <Router basename="/sesion/">
      <Route exact path="/" component={Home} />
      <Menu />
      <MenuCRUD />
      <Route path="/empleados" component={Empleado} />
    </Router>
  );
};

export default Sesion;
