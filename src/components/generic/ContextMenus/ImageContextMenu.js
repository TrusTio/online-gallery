import React from "react";
import { CustomContextMenu } from "components/generic/styled";
import { MenuItem } from "react-contextmenu";

export const ImageContextMenu = ({
  image,
  setShowRenameModal,
  setShowDeleteModal,
  setShowEditModal,
  updateContents,
}) => {
  return (
    <CustomContextMenu id={String(image.id)}>
      <MenuItem
        data={{ action: "rename" }}
        onClick={() => setShowRenameModal(true)}
      >
        Rename
      </MenuItem>
      <MenuItem
        data={{ action: "delete" }}
        onClick={() => {
          setShowDeleteModal(true);
          updateContents();
        }}
      >
        Delete
      </MenuItem>

      <MenuItem
        data={{ action: "search" }}
        onClick={() => {
          setShowEditModal(true);
        }}
      >
        Edit Image
      </MenuItem>
    </CustomContextMenu>
  );
};
