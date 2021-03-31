import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert, Card } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";

export const SignUpPage = () => {
  const { error, setError, createAccount } = useAuth();

  return (
    <MyContainer>
      <MyCard>
        <Card.Body>
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
        </Card.Body>
      </MyCard>
    </MyContainer>
  );
};

const MyContainer = styled.div`
  width: 100vh;
  height: 100vh;
`;

const MyCard = styled(Card)`
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  text-align: center;
  background-color: #353a40;
  border-style: groove;
  border-color: rgba(63, 160, 171, 1);
  border-width: 0.25rem;
`;
