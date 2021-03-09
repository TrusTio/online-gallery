import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";

export const AppBar = ({ children }) => {
  const { user, logout } = useAuth();

  if (user) {
    return (
      <CustomNavBar>
        <Link to="/">
          <Navbar.Brand>Personal Gallery</Navbar.Brand>
        </Link>

        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/galleries">
            Galleries
          </Nav.Link>
        </Nav>

        {children}

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
          <div>{user?.username}</div>
          <Button
            variant="danger"
            onClick={() => {
              logout();
              window.location.reload();
            }}
          >
            Logout
          </Button>
        </Form>
      </CustomNavBar>
    );
  } else {
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
  }
};

const CustomNavBar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbarBody};
`;
