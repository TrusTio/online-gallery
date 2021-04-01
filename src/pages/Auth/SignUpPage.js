import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";
import { ThemedFormCard } from "components/generic/styled";

export const SignUpPage = () => {
  const { error, setError, createAccount } = useAuth();

  return (
    <MyContainer>
      <ThemedFormCard>
        <ThemedFormCard.Body>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              password2: "",
            }}
            onSubmit={(values) => {
              if (values?.password === values?.password2) {
                createAccount(values);
              } else {
                setError("Passwords do not match!");
              }
            }}
          >
            {() => {
              return (
                <Form>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Field name="username" label="Username" />
                  <Field name="email" label="Email" />
                  <Field name="password" label="Password" type="password" />
                  <Field name="password2" label="Password2" type="password" />
                  <br></br>
                  <Button type="submit">Sign Up</Button>
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
