import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "assets/images/folder-icon.png";
import styled from "styled-components";
import { ContextMenuTrigger } from "react-contextmenu";
import { GalleryFolderContextMenu } from "./ContextMenus/GalleryFolderContextMenu";
import { RenameFolderModal } from "./Modals/RenameFolderModal";
import { DeleteFolderModal } from "./Modals/DeleteFolderModal";

export const GalleryFolder = ({ gallery, updateContents, userId }) => {
  const history = useHistory();
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const goContentsPage = () =>
    history.push({
      pathname: `gallery`,
      state: {
        id: gallery?.id,
      },
    });

  return (
    <div>
      <ContextMenuTrigger id={String(gallery.id)}>
        <FolderContainer onClick={goContentsPage}>
          <FolderIcon src={folderIcon} className="folderIcon" alt="icon" />
          <FolderName className="folderName">{gallery?.name}</FolderName>
        </FolderContainer>
      </ContextMenuTrigger>

      <GalleryFolderContextMenu
        gallery={gallery}
        setShowRenameModal={setShowRenameModal}
        setShowDeleteModal={setShowDeleteModal}
      />

      <RenameFolderModal
        gallery={gallery}
        userId={userId}
        show={showRenameModal}
        onHide={() => {
          setShowRenameModal(false);
        }}
        updateContents={updateContents}
        setShowRenameModal={setShowRenameModal}
      />

      <DeleteFolderModal
        gallery={gallery}
        userId={userId}
        show={showDeleteModal}
        onHide={() => {
          setShowDeleteModal(false);
        }}
        updateContents={updateContents}
        setShowDeleteModal={setShowDeleteModal}
      />
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
