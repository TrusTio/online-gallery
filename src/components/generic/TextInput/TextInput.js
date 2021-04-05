import React from "react";
import { Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const MyFormControlFeedback = styled(FormControl.Feedback)`
  font-size: large;
  font-weight: bold;
`;

export const TextInput = ({
  controlId,
  label,
  isTouched,
  errorMessage,
  ...inputProps
}) => {
  return (
    <Form.Group controlId={controlId}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control type="text" {...inputProps} />
      {isTouched && errorMessage && (
        <MyFormControlFeedback type="invalid">
          {errorMessage}
        </MyFormControlFeedback>
      )}
    </Form.Group>
  );
};
