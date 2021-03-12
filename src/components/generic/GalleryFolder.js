import React from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "assets/images/folder-icon.png";
import styled from "styled-components";
import { ContextMenuTrigger, MenuItem } from "react-contextmenu";
import { CustomContextMenu } from "components/generic/styled";
import { deleteGallery } from "components/api/gallery/gallery";

export const GalleryFolder = ({ gallery, updateContents, userId }) => {
  const history = useHistory();
  const goContentsPage = () =>
    history.push({
      pathname: `gallery`,
      state: {
        id: gallery?.id,
      },
    });

  const handleClick = (event, data) => {
    console.log(`clicked`, { event, data });
  };

  return (
    <div>
      <ContextMenuTrigger id={String(gallery.id)}>
        <FolderContainer onClick={goContentsPage}>
          <FolderIcon src={folderIcon} className="folderIcon" alt="icon" />
          <FolderName className="folderName">{gallery?.name}</FolderName>
        </FolderContainer>
      </ContextMenuTrigger>
      <CustomContextMenu id={String(gallery.id)}>
        <MenuItem data={{ action: "rename" }} onClick={handleClick}>
          Rename
        </MenuItem>
        <MenuItem
          data={{ action: "delete" }}
          onClick={() => {
            deleteGallery(userId, gallery.id);
            updateContents();
          }}
        >
          Delete
        </MenuItem>
      </CustomContextMenu>
    </div>
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
