import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "assets/images/folder-icon.png";
import styled from "styled-components";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";
import { deleteGallery, renameGallery } from "components/api/gallery/gallery";
import {
  RenameModal,
  RenameModalHeader,
  RenameModalBody,
} from "components/generic/styled";
import { Form, Field, Formik } from "formik";
import { Button, Alert, ModalTitle } from "react-bootstrap";

export const GalleryFolder = ({ gallery, updateContents, userId }) => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  const goContentsPage = () =>
    history.push({
      pathname: `gallery`,
      state: {
        id: gallery?.id,
      },
    });

  return (
    <div>
      <ContextMenuTrigger id={String(gallery.id)}>
        <FolderContainer onClick={goContentsPage}>
          <FolderIcon src={folderIcon} className="folderIcon" alt="icon" />
          <FolderName className="folderName">{gallery?.name}</FolderName>
        </FolderContainer>
      </ContextMenuTrigger>
      <CustomContextMenu id={String(gallery.id)}>
        <MenuItem
          data={{ action: "rename" }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          Rename
        </MenuItem>
        <MenuItem
          data={{ action: "delete" }}
          onClick={() => {
            deleteGallery(userId, gallery.id);
            updateContents();
          }}
        >
          Delete
        </MenuItem>
      </CustomContextMenu>

      <RenameModal
        show={showModal}
        onHide={() => {
          setShowModal(false);
          setError(false);
        }}
        backdrop="static"
        keyboard={false}
        centered
      >
        <RenameModalHeader closeButton>
          <ModalTitle>Rename {gallery?.name}</ModalTitle>
        </RenameModalHeader>
        <RenameModalBody>
          <Formik
            initialValues={{ newGalleryName: "" }}
            onSubmit={(values) => {
              const response = renameGallery(
                userId,
                gallery.id,
                values?.newGalleryName
              );
              response
                .then(function (res) {
                  if (res.status === 204) {
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
              <Field name="newGalleryName" label="Name" />
              <Button type="submit">Change</Button>
            </Form>
          </Formik>
        </RenameModalBody>
      </RenameModal>
    </div>
  );
};

const FolderContainer = styled.div`
  margin: 0.75vw 0.75vw 0.75vw 0.75vw;
  float: left;
`;

const FolderIcon = styled.img`
  height: 10vw;
  width: 10vw;
`;

const FolderName = styled.div`
  font-size: 1.5vw;
  text-align: center;
  width: 10vw;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
