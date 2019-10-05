import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";

import "./App.css";
import Navbar from "react-bootstrap/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Gabriel Colon",
      headerlinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Designer & Developer",
        subtitle: "Your one stop shop",
        text: "Check out some of my work below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Lets Work Together"
      }
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <NavBar className="border-bottom">
            <Navbar.Brand>Gabriel Colon</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle">
              <Navbar.Collapse id= "navbar-toggle">
                <Nav>

                </Nav>
              </Navbar.Collapse>
          </NavBar>
        </Container>
      </Router>
    );
  }
}

export default App;
