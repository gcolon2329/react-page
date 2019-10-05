import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

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
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Gabriel Colon</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </NavBar>
        </Container>
      </Router>
    );
  }
}

export default App;
