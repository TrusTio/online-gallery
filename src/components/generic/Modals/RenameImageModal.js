import React, { useState } from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { Button, Alert } from "react-bootstrap";
import { renameImage } from "components/api/gallery/image";
import { Form, Formik } from "formik";
import { TextInputField } from "../TextInput/TextInputField";
import { imageNameValidationSchema } from "validations/schemas/imageName";

export const RenameImageModal = ({
  show,
  onHide,
  image,
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
        <ThemedModal.Title>Rename {image?.name}</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody>
        <Formik
          initialValues={{ newImageName: "" }}
          onSubmit={(values) => {
            const response = renameImage(image?.url, values?.newImageName);
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
          validationSchema={imageNameValidationSchema}
        >
          <Form>
            {error && <Alert variant="danger">{error}</Alert>}
            <TextInputField name="newImageName" label="Name" />
            <div>
              <Button
                variant="secondary"
                onClick={() => {
                  setShowRenameModal(false);
                  setError(null);
                }}
              >
                Close
              </Button>

              <Button type="submit">Change</Button>
            </div>
          </Form>
        </Formik>
      </ThemedModalBody>
    </ThemedModal>
  );
};
