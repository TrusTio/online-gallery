import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { ContextMenuTrigger } from "react-contextmenu";
import { EditImageModal } from "./Modals/EditImageModal";
import { DeleteImageModal } from "./Modals/DeleteImageModal";
import { RenameImageModal } from "./Modals/RenameImageModal";
import { ImageContextMenu } from "./ContextMenus/ImageContextMenu";

export const GalleryImage = ({ image, updateContents }) => {
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

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

      <ImageContextMenu
        image={image}
        setShowRenameModal={setShowRenameModal}
        setShowDeleteModal={setShowDeleteModal}
        setShowEditModal={setShowEditModal}
        updateContents={updateContents}
      />

      <RenameImageModal
        show={showRenameModal}
        onHide={() => {
          setShowRenameModal(false);
        }}
        image={image}
        setShowRenameModal={setShowRenameModal}
        updateContents={updateContents}
      />

      <DeleteImageModal
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
        }}
        image={image}
        setShowDeleteModal={setShowDeleteModal}
        updateContents={updateContents}
      />

      <EditImageModal
        show={showEditModal}
        onHide={() => {
          setShowEditModal(false);
        }}
        image={image}
      />
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
