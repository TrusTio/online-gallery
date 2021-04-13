import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";

export const SimilarImagesModal = (props) => {
  return (
    <ThemedModal
      show={props.show}
      onHide={props.onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <ThemedModalHeader closeButton>
        <ThemedModal.Title>{props.image?.name}</ThemedModal.Title>
      </ThemedModalHeader>
      <ThemedModalBody></ThemedModalBody>
    </ThemedModal>
  );
};
