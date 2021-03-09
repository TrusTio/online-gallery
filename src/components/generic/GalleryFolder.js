import React from "react";
import { useHistory } from "react-router-dom";
import folderIcon from "assets/images/folder-icon.png";
import "components/generic/GalleryFolder.css";

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
    <div onClick={goContentsPage} className="folderContainer">
      <img src={folderIcon} className="folderIcon" alt="icon" />
      <div className="folderName">{gallery?.name}</div>
    </div>
  );
};
