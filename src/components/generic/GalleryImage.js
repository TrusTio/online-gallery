import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";
import { SimilarImagesModal } from "./Modals/SimilarImagesModal";
import { DeleteImageModal } from "./Modals/DeleteImageModal";
import { RenameImageModal } from "./Modals/RenameImageModal";

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

      <RenameImageModal
        show={showRenameModal}
        onHide={() => {
          setShowRenameModal(false);
          setError(false);
        }}
        image={image}
        error={error}
        setError={setError}
        setShowRenameModal={setShowRenameModal}
        updateContents={updateContents}
      ></RenameImageModal>

      <DeleteImageModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
          setError(false);
        }}
        image={image}
        error={error}
        setError={setError}
        setShowDeleteModal={setShowDeleteModal}
        updateContents={updateContents}
      ></DeleteImageModal>

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
