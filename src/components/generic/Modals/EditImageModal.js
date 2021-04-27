import React from "react";
import {
  ThemedModal,
  ThemedModalHeader,
  ThemedModalBody,
} from "components/generic/styled";
import { CustomImageEditor } from "components/generic/CustomImageEditor";
import styled from "styled-components";

export const EditImageModal = ({ show, onHide, image }) => {
  return (
    <CustomModal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <CustomModalHeader closeButton>
        <ThemedModal.Title>Edit {image?.name}</ThemedModal.Title>
      </CustomModalHeader>
      <CustomModalBody>
        <CustomImageEditor image={image} />
      </CustomModalBody>
    </CustomModal>
  );
};

const CustomModal = styled(ThemedModal)`
  padding-right: 95vw;
  max-width: none !important;
`;

const CustomModalHeader = styled(ThemedModalHeader)`
  width: 95vw;
  background-color: ${(props) => props.theme.modalBody};
`;

const CustomModalBody = styled(ThemedModalBody)`
  width: 95vw;
  height: 95vh;
  background-color: ${(props) => props.theme.modalBody};
`;
