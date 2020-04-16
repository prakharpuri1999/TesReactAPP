import React, { Component } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ justifyContent: "center" }}>
        <h1>Dashboard</h1>
        <Menu selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="mail">
            <Link to="gitHub">Git Repo </Link>
          </Menu.Item>
          <Menu.Item key="app">
            <Link to="creditCard">Credit Card </Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Link to="Login">Login </Link>
          </Menu.Item>
          <Menu.Item key="corona">
            <Link to="corona">CoronaUpdates </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default dashboard;
