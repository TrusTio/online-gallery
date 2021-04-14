import React from "react";
import { CustomContextMenu } from "components/generic/styled";
import { MenuItem } from "react-contextmenu";

export const GalleryFolderContextMenu = ({
  gallery,
  setShowRenameModal,
  setShowDeleteModal,
}) => {
  return (
    <CustomContextMenu id={String(gallery.id)}>
      <MenuItem
        data={{ action: "rename" }}
        onClick={() => {
          setShowRenameModal(true);
        }}
      >
        Rename
      </MenuItem>
      <MenuItem
        data={{ action: "delete" }}
        onClick={() => {
          setShowDeleteModal(true);
        }}
      >
        Delete
      </MenuItem>
    </CustomContextMenu>
  );
};
