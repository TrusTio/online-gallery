import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";

export const SimilarImagesModal = ({ show, onHide, image }) => {
  return (
    <ThemedModal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>{image?.name}</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody></ThemedModalBody>
    </ThemedModal>
  );
};
