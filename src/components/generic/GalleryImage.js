import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import styled from "styled-components";

export const GalleryImage = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ImageContainer>
      <ImageCard>
        <ImageThumbnailContainer
          onClick={() => setShowModal(true)}
          src={image?.thumbnail}
          className="imgThumbnail"
          alt="Not available"
        />

        <ImageNameContainer>{image?.name}</ImageNameContainer>
      </ImageCard>

      <CustomModal show={showModal} onHide={() => setShowModal(false)}>
        <CustomModalHeader closeButton parent>
          <CustomModal.Title>{image.name}</CustomModal.Title>
        </CustomModalHeader>

        <CustomModalBody>
          <ModalImage src={image?.url} alt="Not available" />
        </CustomModalBody>
      </CustomModal>
    </ImageContainer>
  );
};

const ImageCard = styled(Card)`
  background-color: ${(props) => props.theme.modalBody};
  border: 2px solid ${(props) => props.theme.modalBorder};
`;

const ImageContainer = styled.div`
  float: left;
  width: 25vw;
  margin: 0.75vw 0.75vw 0.75vw 0.75vw;
`;

const ImageThumbnailContainer = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`;

const ImageNameContainer = styled.div`
  font-size: 1.5vw;
  text-align: center;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CustomModal = styled(Modal)`
  width: 95vw;
  max-width: none !important;
  height: 95vw;
`;

const CustomModalHeader = styled(CustomModal.Header)`
  background-color: ${(props) => props.theme.modalBody};
`;

const CustomModalBody = styled(CustomModal.Body)`
  background-color: ${(props) => props.theme.modalBody};
`;
