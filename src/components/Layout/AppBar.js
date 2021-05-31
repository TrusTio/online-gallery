import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { NormalButton } from "components/generic/styled";

export const AppBar = ({ children }) => {
  const { user, logout } = useAuth();
  const history = useHistory();

  if (user) {
    return (
      <CustomNavBar variant="dark">
        <Link to="/">
          <CustomNavBar.Brand>{user?.username}'s Gallery</CustomNavBar.Brand>
        </Link>
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/galleries">
            Galleries
          </Nav.Link>
        </Nav>
        {children}
        <Formik
          initialValues={{
            pictureName: "",
          }}
          onSubmit={(values) => {
            history.push({
              pathname: `search`,
              state: {
                pictureName: values?.pictureName,
              },
            });
          }}
        >
          {() => {
            return (
              <SearchForm>
                <SearchField
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  name="pictureName"
                />
                <NormalButton type="submit">Search</NormalButton>
              </SearchForm>
            );
          }}
        </Formik>
        <Button
          variant="danger"
          onClick={() => {
            logout();
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </CustomNavBar>
    );
  } else {
    return (
      <CustomNavBar variant="dark">
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
      </CustomNavBar>
    );
  }
};

const SearchForm = styled(Form)`
  display: inline-flex;
`;
const SearchField = styled(Field)`
  border: 2px solid ${(props) => props.theme.basicBorder};
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border-radius: 7px;
`;
const CustomNavBar = styled(Navbar)`
  background-color: ${(props) => props.theme.navbarBody};
  color: ${(props) => props.theme.navbarText};
`;
