import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar sticky="top" bg="dark" expand="lg">
          <Navbar.Brand style={{ color: "white" }}>
            Assignment Qversity
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/creditCard">Credit Card</Link>
              &nbsp;&nbsp;&nbsp;
              <Link to="/gitHub">GitHub Repo</Link>
              &nbsp;&nbsp;&nbsp;<Link to="/Login">Signup</Link>
              &nbsp;&nbsp;&nbsp;<Link to="/corona">Corona Info</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default dashboard;
