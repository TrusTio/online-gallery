import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";
import { ThemedFormCard } from "components/generic/styled";

export const LoginPage = () => {
  const { error, login } = useAuth();

  return (
    <MyContainer>
      <ThemedFormCard>
        <ThemedFormCard.Body>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              login(values);
            }}
          >
            {() => {
              return (
                <Form>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Field name="username" label="Username" />
                  <Field name="password" label="Password" type="password" />
                  <br></br>
                  <Button type="submit">Login</Button>
                </Form>
              );
            }}
          </Formik>
        </ThemedFormCard.Body>
      </ThemedFormCard>
    </MyContainer>
  );
};

const MyContainer = styled.div`
  width: 100vh;
  height: 100vh;
`;
