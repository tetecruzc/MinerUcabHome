import React from "react";
<<<<<<< HEAD
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
=======
>>>>>>> 842400363c6f44290627aefc29daf197a9f93eec
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
