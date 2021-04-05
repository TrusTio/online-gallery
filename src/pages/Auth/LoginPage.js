import React from "react";
import { Form, Formik } from "formik";
import { TextInputField } from "components/generic/TextInput/TextInputField";
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

                  <TextInputField name="username" label="Username" />
                  <TextInputField
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
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
