import React from "react";
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

export const RenameImageModal = (props) => {
  return (
    <ThemedModal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>Rename {props.image?.name}</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody>
        <Formik
          initialValues={{ newImageName: "" }}
          onSubmit={(values) => {
            const response = renameImage(
              props.image?.url,
              values?.newImageName
            );
            response
              .then(function (res) {
                if (res.status === 204) {
                  props.updateContents();
                  props.setShowRenameModal(false);
                } else {
                }
              })
              .catch((err) => {
                console.log(err);
                props.setError(err?.response?.data?.message);
              });
          }}
          validationSchema={imageNameValidationSchema}
        >
          <Form>
            {props.error && <Alert variant="danger">{props.error}</Alert>}
            <TextInputField name="newImageName" label="Name" />
            <div>
              <Button
                variant="secondary"
                onClick={() => props.setShowRenameModal(false)}
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
