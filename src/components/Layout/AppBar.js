import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export const AppBar = ({ children }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Personal Gallery</Navbar.Brand>
      </Link>

      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/signup">
          Sign up
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login">
          Login
        </Nav.Link>
      </Nav>

      {children}

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};
