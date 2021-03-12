import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";
import ModalImage from "react-modal-image";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";

export const GalleryImage = ({ image }) => {
  const handleClick = (event, data) => {
    console.log(`clicked`, { event, data });
  };

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
        <MenuItem data={{ action: "rename" }} onClick={handleClick}>
          Rename
        </MenuItem>
        <MenuItem data={{ action: "delete" }} onClick={handleClick}>
          Delete
        </MenuItem>
      </CustomContextMenu>
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
