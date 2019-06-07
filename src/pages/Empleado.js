import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

export default class Empleado extends Component {
  render() {
    var crud = {
      options: ["Ingresar Empleado", "Consultar Empleado", "Eliminar Empleado"]
    };

    return <Menu />;
  }
}
