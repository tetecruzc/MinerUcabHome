import React, { Component } from "react";
import { HashRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

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
          <Tab>Starks</Tab>
          <Tab>Lannisters</Tab>
          <Tab>Targaryens</Tab>
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
