import React from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import Menu from "../components/Menu";
import Empleado from "./Empleado";
const Sesion = () => {
  return (
    <Router basename="/sesion/">
      <Menu />
      <Route path="/empleados" component={Empleado} />
    </Router>
  );
};

export default Sesion;
