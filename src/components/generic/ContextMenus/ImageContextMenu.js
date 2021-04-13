import React from "react";
import { CustomContextMenu } from "components/generic/styled";
import { MenuItem } from "react-contextmenu";

export const ImageContextMenu = (props) => {
  return (
    <CustomContextMenu id={String(props.image.id)}>
      <MenuItem
        data={{ action: "rename" }}
        onClick={() => props.setShowRenameModal(true)}
      >
        Rename
      </MenuItem>
      <MenuItem
        data={{ action: "delete" }}
        onClick={() => {
          props.setShowDeleteModal(true);
          props.updateContents();
        }}
      >
        Delete
      </MenuItem>

      <MenuItem
        data={{ action: "search" }}
        onClick={() => {
          props.setShowSearchModal(true);
        }}
      >
        Similar Images
      </MenuItem>
    </CustomContextMenu>
  );
};
