import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";
import styled from "styled-components";
import { ThemedFormCard } from "components/generic/styled";
import { TextInputField } from "components/generic/TextInput/TextInputField";
import { SignUpValidationSchema } from "validations/schemas/signup";
import { SuccessfulSignUpModal } from "components/generic/Modals/SuccessfulSignUpModal";

export const SignUpPage = () => {
  const {
    error,
    setError,
    createAccount,
    successfulSignUp,
    setSuccessfulSignUp,
  } = useAuth();

  useEffect(() => {
    setError(null);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <MyContainer>
      <SuccessfulSignUpModal
        show={successfulSignUp}
        onHide={() => {
          setSuccessfulSignUp(false);
        }}
        setShowSuccessfulSignUpModal={setSuccessfulSignUp}
      />
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
              if (values?.password === values?.repeatPassword) {
                createAccount(values);
              } else {
                setError("Passwords do not match!");
              }
            }}
            validationSchema={SignUpValidationSchema}
          >
            {() => {
              return (
                <Form>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <TextInputField name="username" label="Username" />
                  <TextInputField name="email" label="Email" />
                  <TextInputField
                    name="password"
                    label="Password"
                    type="password"
                  />
                  <TextInputField
                    name="repeatPassword"
                    label="Repeat Password"
                    type="password"
                  />
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
