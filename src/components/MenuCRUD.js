import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../styles/MenuCRUD.css";

export default class MenuCRUD extends Component {
  state = {
    isOpen: false,
    option: [
      {
        icon: <FaHome />,
        title: "Ingresar"
      },
      {
        icon: <FaHome />,
        title: "Consultar"
      }
    ]
  };

  render() {
    return (
      <Tabs className="tabs">
        <TabList>
          {this.state.option.map((item, index) => {
            return (
              <Tab key={index}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </Tab>
            );
          })}
        </TabList>
        <TabPanel>
          <h2>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h2>
        </TabPanel>
        <TabPanel>
          <h2>HOLAAAAAAAAAAAdasfdsfghyhjtyjthjAAAAA</h2>
        </TabPanel>
      </Tabs>
    );
  }
}
