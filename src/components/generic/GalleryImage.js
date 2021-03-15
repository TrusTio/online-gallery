import React, { useState } from "react";
import { Modal, Card, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";
import { deleteImage, renameImage } from "components/api/gallery/image";
import { Form, Field, Formik } from "formik";

export const GalleryImage = ({ image, updateContents }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <ContextMenuTrigger id={String(image.id)}>
        <ImageContainer>
          <ImageCard>
            <CustomModalImage
              small={image?.thumbnail}
              large={image?.url}
              alt={image?.name}
              showRotate
            />
            <ImageNameContainer>{image?.name}</ImageNameContainer>
          </ImageCard>
        </ImageContainer>
      </ContextMenuTrigger>

      <CustomContextMenu id={String(image.id)}>
        <MenuItem
          data={{ action: "rename" }}
          onClick={() => setShowModal(true)}
        >
          Rename
        </MenuItem>
        <MenuItem
          data={{ action: "delete" }}
          onClick={() => {
            deleteImage(image.url);
            updateContents();
          }}
        >
          Delete
        </MenuItem>
      </CustomContextMenu>

      <CustomModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setError(false);
        }}
        backdrop="static"
        keyboard={false}
        centered
      >
        <CustomModalHeader closeButton>
          <Modal.Title>Rename {image?.name}</Modal.Title>
        </CustomModalHeader>
        <CustomModalBody>
          <Formik
            initialValues={{ newImageName: "" }}
            onSubmit={(values) => {
              const response = renameImage(image?.url, values?.newImageName);
              response
                .then(function (res) {
                  console.log(res);
                  if (res.status === 202) {
                    updateContents();
                    setShowModal(false);
                  } else {
                  }
                })
                .catch((err) => {
                  console.log(err);
                  setError(err?.response?.data?.message);
                });
            }}
          >
            <Form>
              {error && <Alert variant="danger">{error}</Alert>}
              <Field name="newImageName" label="Name" />
              <Button type="submit">Change</Button>
            </Form>
          </Formik>
        </CustomModalBody>
      </CustomModal>
    </div>
  );
};

const ImageContainer = styled.div`
  float: left;
  width: 25vw;
  margin: 0.75vw 0.75vw 0.75vw 0.75vw;
`;

const ImageCard = styled(Card)`
  background-color: ${(props) => props.theme.cardBody};
  border: 2px solid ${(props) => props.theme.cardBorder};
`;

const CustomModalImage = styled(ModalImage)`
  width: 100%;
  height: 100%;
`;
const ImageNameContainer = styled.div`
  font-size: 1.5vw;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CustomModal = styled(Modal)`
  padding: 1px;
  width: 100%;
  margin: 1px;
  text-align: center;
`;

const CustomModalHeader = styled(CustomModal.Header)`
  background-color: ${(props) => props.theme.modalBody};
`;

const CustomModalBody = styled(CustomModal.Body)`
  background-color: ${(props) => props.theme.modalBody};
`;
