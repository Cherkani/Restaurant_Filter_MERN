import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          {<img
            className="navbar-logo"
            src={require("./loogo.png")}
            alt="logo"
          />}

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={"/Presentation"}>
                Pourquoi FoodieFinder?
              </Nav.Link>
              <Nav.Link as={Link} to={"/About"}>
                Nos valeurs
              </Nav.Link>
              <Nav.Link as={Link} to={"/"}>
                Trouver un restaurant
              </Nav.Link>
              

              <Nav.Link as={Link} to={"/ContactForm"}>
              Contactez-nous
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
