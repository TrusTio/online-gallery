import React from "react";
import { Form, Field, Formik } from "formik";
import { Button } from "react-bootstrap";
import { login } from "../../components/api/gallery/users";
export const LoginPage = () => {
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
            <Field name="username" label="Username" />
            <Field
              label="Password"
              name="password"
              type="password"
            />
            <Button type="submit">Login</Button>
          </Form>
        );
      }}
    </Formik>
  );
};
