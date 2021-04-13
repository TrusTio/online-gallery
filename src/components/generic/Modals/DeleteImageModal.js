import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button, Alert } from "react-bootstrap";
import { deleteImage } from "components/api/gallery/image";

export const DeleteImageModal = (props) => {
  return (
    <ThemedModal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>
          Do you want to delete {props.image?.name}?
        </ThemedModal.Title>
      </ThemedModalHeader>
      {props.error && <Alert variant="danger">{props.error}</Alert>}
      <ThemedModalBody>
        <Button
          variant="secondary"
          onClick={() => props.setShowDeleteModal(false)}
        >
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            const response = deleteImage(props.image.url);
            response
              .then(function (res) {
                if (res.status === 204) {
                  props.updateContents();
                  props.setShowDeleteModal(false);
                } else {
                }
              })
              .catch((err) => {
                console.log(err);
                props.setError(err?.response?.data?.message);
              });
          }}
        >
          Delete
        </Button>
      </ThemedModalBody>
    </ThemedModal>
  );
};
