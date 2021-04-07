import React from "react";
import { Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
import classNames from "classnames";

const MyFormControlFeedback = styled(FormControl.Feedback)`
  font-size: large;
  font-weight: bold;
`;

export const TextInput = ({
  controlId,
  label,
  isTouched,
  errorMessage,
  className: classNameOverride,
  ...inputProps
}) => {
  const className = classNames(
    isTouched && !errorMessage && "is-valid",
    isTouched && !!errorMessage && "is-invalid",
    classNameOverride
  );
  return (
    <Form.Group controlId={controlId}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control type="text" className={className} {...inputProps} />
      {isTouched && errorMessage && (
        <MyFormControlFeedback type="invalid">
          {errorMessage}
        </MyFormControlFeedback>
      )}
    </Form.Group>
  );
};
