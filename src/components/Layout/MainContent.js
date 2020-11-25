import React from "react";
import { Container } from "react-bootstrap";

export const MainContent = ({ children }) => {
    return (
        <Container fluid>{children} </Container>
    );
  };
  