import React from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "assets/images/folder-icon.png";
import styled from "styled-components";

export const GalleryFolder = ({ gallery }) => {
  const history = useHistory();
  const goContentsPage = () =>
    history.push({
      pathname: `gallery`,
      state: {
        id: gallery?.id,
      },
    });

  return (
    <FolderContainer onClick={goContentsPage}>
      <FolderIcon src={folderIcon} className="folderIcon" alt="icon" />
      <FolderName className="folderName">{gallery?.name}</FolderName>
    </FolderContainer>
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
