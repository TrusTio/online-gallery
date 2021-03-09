import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "components/generic/GalleryImage.css";

export const GalleryImage = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>Name: {image?.name}</div>
      <img
        onClick={() => setShowModal(true)}
        src={image?.thumbnail}
        alt="Not available"
      ></img>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton parent>
          <Modal.Title>{image.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div> ASD</div>
          <img
            src={image?.url}
            alt="Not available"
            className="modalImage"
          ></img>
        </Modal.Body>
      </Modal>
    </div>
  );
};
