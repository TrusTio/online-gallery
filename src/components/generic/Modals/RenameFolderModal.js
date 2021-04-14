import React, { useState } from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button, Alert } from "react-bootstrap";
import { renameGallery } from "components/api/gallery/gallery";
import { Form, Formik } from "formik";
import { TextInputField } from "../TextInput/TextInputField";
import { galleryNameValidationSchema } from "validations/schemas/galleryName";

export const RenameFolderModal = ({
  show,
  onHide,
  userId,
  gallery,
  updateContents,
  setShowRenameModal,
}) => {
  const [error, setError] = useState(null);
  return (
    <ThemedModal
      show={show}
      onHide={() => {
        onHide();
        setError(false);
      }}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>Rename {gallery?.name}</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody>
        <Formik
          initialValues={{ galleryName: "" }}
          onSubmit={(values) => {
            const response = renameGallery(
              userId,
              gallery.id,
              values?.galleryName
            );
            response
              .then(function (res) {
                if (res.status === 204) {
                  updateContents();
                  setShowRenameModal(false);
                } else {
                }
              })
              .catch((err) => {
                console.log(err);
                setError(err?.response?.data?.message);
              });
          }}
          validationSchema={galleryNameValidationSchema}
        >
          <Form>
            {error && <Alert variant="danger">{error}</Alert>}
            <TextInputField name="galleryName" label="Gallery Name" />
            <Button type="submit">Change</Button>
          </Form>
        </Formik>
      </ThemedModalBody>
    </ThemedModal>
  );
};
