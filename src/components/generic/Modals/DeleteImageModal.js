import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button, Alert } from "react-bootstrap";
import { deleteImage } from "components/api/gallery/image";

export const DeleteImageModal = ({
  show,
  onHide,
  image,
  error,
  setError,
  setShowDeleteModal,
  updateContents,
}) => {
  return (
    <ThemedModal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>
          Do you want to delete {image?.name}?
        </ThemedModal.Title>
      </ThemedModalHeader>
      {error && <Alert variant="danger">{error}</Alert>}
      <ThemedModalBody>
        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
          Close
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            const response = deleteImage(image.url);
            response
              .then(function (res) {
                if (res.status === 204) {
                  updateContents();
                  setShowDeleteModal(false);
                } else {
                }
              })
              .catch((err) => {
                console.log(err);
                setError(err?.response?.data?.message);
              });
          }}
        >
          Delete
        </Button>
      </ThemedModalBody>
    </ThemedModal>
  );
};
