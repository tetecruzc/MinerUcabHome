import React from "react";
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
