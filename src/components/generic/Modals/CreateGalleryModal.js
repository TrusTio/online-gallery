import React, { useState } from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
  NormalButton,
} from "components/generic/styled";
import { Alert } from "react-bootstrap";
import { createGallery } from "components/api/gallery/gallery";
import { Form, Formik } from "formik";
import { TextInputField } from "../TextInput/TextInputField";
import { galleryNameValidationSchema } from "validations/schemas/galleryName";

export const CreateGalleryModal = ({
  show,
  onHide,
  userId,
  getUserGalleries,
  setShowCreateModal,
}) => {
  const [error, setError] = useState(null);
  return (
    <ThemedModal
      show={show}
      onHide={() => {
        onHide();
        setError(null);
      }}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton />
      <ThemedModalBody>
        <Formik
          initialValues={{ name: "", userId: userId }}
          onSubmit={(values) => {
            values.name = values?.galleryName;
            const response = createGallery(values);
            response
              .then(function (res) {
                if (res.status === 201) {
                  getUserGalleries();
                  setShowCreateModal(false);
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
            <NormalButton type="submit">Create</NormalButton>
          </Form>
        </Formik>
      </ThemedModalBody>
    </ThemedModal>
  );
};
