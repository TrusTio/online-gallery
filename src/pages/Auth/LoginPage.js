import React from "react";
import { Form, Field, Formik } from "formik";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "contexts/AuthContext";

export const LoginPage = () => {
  const { user, error, login } = useAuth();
  return (
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
            <Button type="submit">Login</Button>
            <Alert variant="info">Username: {user?.username}</Alert>
          </Form>
        );
      }}
    </Formik>
  );
};