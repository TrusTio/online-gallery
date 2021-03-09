import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import "components/generic/GalleryImage.css";
import styled from "styled-components";

const MyCard = styled(Card)`
  background-color: ${(props) => props.theme.modalBody};
  border: 2px solid ${(props) => props.theme.modalBorder};
`;

export const GalleryImage = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="galleryContentsContainer">
      <MyCard>
        <img
          onClick={() => setShowModal(true)}
          src={image?.thumbnail}
          className="imgThumbnail"
          alt="Not available"
        ></img>
        <div className="imgName">Name: {image?.name}</div>
      </MyCard>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton parent>
          <Modal.Title>{image.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={image?.url} alt="Not available" className="modalImg"></img>
        </Modal.Body>
      </Modal>
    </div>
  );
};
