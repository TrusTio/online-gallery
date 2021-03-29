import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";

export const SignUpPage = () => {
  const { error, setError, createAccount } = useAuth();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", password2: "" }}
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
            <Button type="submit">Sign Up</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
