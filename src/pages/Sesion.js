import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Switch
} from "react-router-dom";
import Empleado from "./Empleado";
import Menu from "../components/Menu";

class Sesion extends Component {
  render() {
    return <Menu />;
  }
}

export default Sesion;
