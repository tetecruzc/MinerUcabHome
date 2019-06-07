import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { Tabs, Tab } from "react-mdl";
import "../styles/MenuCRUD.css";

export default class MenuCrud extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }

  render() {
    return (
      <div className="demo-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>holla></Tab>
          <Tab>holaaa3333333</Tab>
        </Tabs>
        <section>
          <div className="content">
            Content for the tab: {this.state.activeTab}
          </div>
        </section>
      </div>
    );
  }
}
