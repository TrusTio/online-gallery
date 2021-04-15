import React, { useState } from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button, Alert } from "react-bootstrap";
import { deleteGallery } from "components/api/gallery/gallery";
export const DeleteFolderModal = ({
  show,
  onHide,
  userId,
  gallery,
  updateContents,
  setShowDeleteModal,
}) => {
  const [error, setError] = useState(null);
  return (
    <ThemedModal
      show={show}
      onHide={() => {
        onHide(false);
        setError(false);
      }}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>
          Do you want to delete {gallery?.name}?
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
            const response = deleteGallery(userId, gallery.id);
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
