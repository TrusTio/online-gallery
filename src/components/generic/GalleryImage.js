import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";
import { deleteImage, renameImage } from "components/api/gallery/image";
import { Form, Formik } from "formik";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { imageNameValidationSchema } from "validations/schemas/imageName";
import { TextInputField } from "./TextInput/TextInputField";
import { SimilarImagesModal } from "./Modals/SimilarImagesModal";

export const GalleryImage = ({ image, updateContents }) => {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
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
          onClick={() => setShowRenameModal(true)}
        >
          Rename
        </MenuItem>
        <MenuItem
          data={{ action: "delete" }}
          onClick={() => {
            setShowDeleteModal(true);
            updateContents();
          }}
        >
          Delete
        </MenuItem>

        <MenuItem
          data={{ action: "search" }}
          onClick={() => {
            setShowSearchModal(true);
          }}
        >
          Similar Images
        </MenuItem>
      </CustomContextMenu>

      <ThemedModal
        show={showRenameModal}
        onHide={() => {
          setShowRenameModal(false);
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
                  onClick={() => setShowRenameModal(false)}
                >
                  Close
                </Button>

                <Button type="submit">Change</Button>
              </div>
            </Form>
          </Formik>
        </ThemedModalBody>
      </ThemedModal>

      <ThemedModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setError(false);
        }}
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
                    setShowRenameModal(false);
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

      <SimilarImagesModal
        show={showSearchModal}
        onHide={() => {
          setShowSearchModal(false);
        }}
        image={image}
      ></SimilarImagesModal>
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
