import React, { Component } from "react";
import {
  FaHome,
  FaUser,
  FaHammer,
  FaBoxOpen,
  FaHardHat,
  FaBook,
  FaBars
} from "react-icons/fa";
import Account from "./Account";
import LogOut from "./LogOut";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import perfil from "../images/perfil.png";

// link de react-icons https://react-icons.netlify.com/#/icons/fa
export default class Menu extends Component {
  state = {
    isOpen: false,
    option: [
      {
        icon: <FaHome />,
        title: "Home",
        tipo: "/home"
      },
      {
        icon: <FaHardHat />,
        title: "Empleados",
        tipo: "/empleado"
      },
      {
        icon: <FaHammer />,
        title: "Yacimientos",
        tipo: "/yacimiento"
      },
      {
        icon: <FaUser />,
        title: "Clientes",
        tipo: "/cliente"
      },
      {
        icon: <FaBoxOpen />,
        title: "Inventario",
        tipo: "/inventario"
      },
      {
        icon: <FaBook />,
        title: "Información Reelevante",
        tipo: "/info"
      }
    ]
  };
  desplegar = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="menu">
        <div className={this.state.isOpen ? "header-show" : "header"}>
          <button
            type="button"
            className="sidenav-btn"
            onClick={this.desplegar}
          >
            <FaBars className="sidenav-icon" />
          </button>
        </div>
        <div className="sidenav">
          <div
            className={this.state.isOpen ? "sidenav-show" : "sidenav-noshow"}
          >
            <ul>
              {this.state.option.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.tipo} className="sidenav-links">
                      <span className="icons">{item.icon}</span>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <Account />
              <LogOut />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
