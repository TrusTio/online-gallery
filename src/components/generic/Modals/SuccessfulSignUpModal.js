import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const SuccessfulSignUpModal = ({
  show,
  onHide,
  setShowSuccessfulSignUpModal,
}) => {
  const history = useHistory();
  return (
    <ThemedModal
      show={show}
      onHide={() => {
        onHide();
      }}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>Account created successfully!</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody>
        <Button
          variant="primary"
          onClick={() => {
            setShowSuccessfulSignUpModal(false);
            history.push("/login");
          }}
        >
          Login
        </Button>
      </ThemedModalBody>
    </ThemedModal>
  );
};
