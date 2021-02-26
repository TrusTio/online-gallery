import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";

export const SignUpPage = () => {
  const { error, createAccount } = useAuth();

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      onSubmit={(values) => {
        createAccount(values);
      }}
    >
      {() => {
        return (
          <Form>
            {error && <Alert variant="danger">{error}</Alert>}
            <Field name="username" label="Username" />
            <Field name="email" label="Email" />
            <Field name="password" label="Password" type="password" />
            <Button type="submit">Sign Up</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
